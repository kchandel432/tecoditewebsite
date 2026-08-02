import { NextResponse } from 'next/server';
import validator from 'validator';
import connectMongoDB from '../../../lib/mongodb';
import ContactLead from '../../../models/ContactLead';

// Rate limiting configuration
const RATE_LIMIT = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5, // Limit each IP to 5 requests per windowMs
};

// In-memory store for rate limiting (in production, use Redis or similar)
const ipRequests = new Map();

// Field length limits
const MAX_NAME_LENGTH = 100;
const MAX_COMPANY_LENGTH = 150;

export async function POST(request) {
    try {
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
        const now = Date.now();

        // ---- Rate limiting check ----
        const userRequests = ipRequests.get(ip) || [];
        const recentRequests = userRequests.filter((time) => now - time < RATE_LIMIT.windowMs);

        if (recentRequests.length >= RATE_LIMIT.maxRequests) {
            return NextResponse.json(
                { success: false, error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        recentRequests.push(now);
        ipRequests.set(ip, recentRequests);

        // ---- Parse + sanitize body ----
        const body = await request.json().catch(() => null);
        if (!body) {
            return NextResponse.json(
                { success: false, error: 'Invalid request body.' },
                { status: 400 }
            );
        }

        const rawEmail = typeof body.email === 'string' ? body.email.trim() : '';
        const rawName = typeof body.name === 'string' ? body.name.trim() : '';
        const rawCompany = typeof body.company === 'string' ? body.company.trim() : '';

        // ---- Validation ----
        if (!rawEmail) {
            return NextResponse.json(
                { success: false, error: 'Email is required.' },
                { status: 400 }
            );
        }

        if (!validator.isEmail(rawEmail)) {
            return NextResponse.json(
                { success: false, error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        if (rawName.length > MAX_NAME_LENGTH) {
            return NextResponse.json(
                { success: false, error: `Name cannot exceed ${MAX_NAME_LENGTH} characters.` },
                { status: 400 }
            );
        }

        if (rawCompany.length > MAX_COMPANY_LENGTH) {
            return NextResponse.json(
                { success: false, error: `Company cannot exceed ${MAX_COMPANY_LENGTH} characters.` },
                { status: 400 }
            );
        }

        // ---- Sanitize inputs ----
        const email = validator.normalizeEmail(rawEmail);
        const name = rawName ? validator.escape(rawName) : '';
        const company = rawCompany ? validator.escape(rawCompany) : '';

        // ---- Save to MongoDB via ContactLead ----
        await connectMongoDB();

        const lead = await ContactLead.create({
            name: name || email.split('@')[0], // Fallback to email local-part
            email,
            company,
            purpose: 'signup',
            source: 'xdr-waitlist',
            message: 'Interested in XDR Platform (waitlist)',
        });

        // ---- Forward to Marketing OS webhook (fire-and-forget) ----
        const webhookUrl = process.env.MARKETING_OS_WEBHOOK_URL;
        const payload = {
            source: 'xdr_waitlist',
            referenceId: lead._id ? lead._id.toString() : undefined,
            name: name || email.split('@')[0],
            email,
            subject: 'XDR Platform Waitlist',
            message: 'Interested in XDR Platform (waitlist)',
            company,
            ipAddress: ip,
            submittedAt: new Date().toISOString(),
        };

        (async () => {
            if (!webhookUrl) {
                console.warn('MARKETING_OS_WEBHOOK_URL not set; skipping webhook forwarding');
                return;
            }
            try {
                const res = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });
                if (!res.ok) {
                    const text = await res.text().catch(() => '');
                    console.error('Marketing OS webhook failed:', res.status, text);
                    return;
                }
                console.log('Marketing OS webhook forwarded successfully:', lead._id);
            } catch (err) {
                console.error('Marketing OS webhook request failed:', err);
            }
        })();

        // ---- Return 201 on success ----
        return NextResponse.json(
            {
                success: true,
                message: 'You are on the waitlist! We\'ll notify you when XDR launches.',
                leadId: lead._id,
                webhook: { forwarded: !!webhookUrl },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Waitlist route error:', error);

        // Handle duplicate key / validation errors gracefully
        if (error?.name === 'ValidationError') {
            return NextResponse.json(
                { success: false, error: 'Invalid submission data.' },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { success: false, error: 'Failed to join waitlist. Please try again later.' },
            { status: 500 }
        );
    }
}

