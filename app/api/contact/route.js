import dotenv from 'dotenv';
import { NextResponse } from 'next/server';
import validator from 'validator';
import connectMongoDB from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

dotenv.config();

// Rate limiting configuration
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // Limit each IP to 5 requests per windowMs
};

// Store for rate limiting (in production, use Redis or similar)
const ipRequests = new Map();

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();

    // Rate limiting check
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

    const body = await request.json();
    const { name, email, message, subject } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email address' }, { status: 400 });
    }

    if (name.length > 100) {
      return NextResponse.json({ success: false, error: 'Name is too long' }, { status: 400 });
    }

    if (message.length > 2000) {
      return NextResponse.json({ success: false, error: 'Message is too long' }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedName = validator.escape(name);
    const sanitizedEmail = validator.normalizeEmail(email);
    const sanitizedMessage = validator.escape(message);

    // 1) Save to MongoDB (existing functionality)
    try {
      await connectMongoDB();
    } catch (connErr) {
      console.error('MongoDB connection failed:', connErr);
      return NextResponse.json(
        { success: false, error: 'Database connection failed.' },
        { status: 500 }
      );
    }

    let contactRecord;
    try {
      contactRecord = await Contact.create({
        name: sanitizedName,
        email: sanitizedEmail,
        subject: subject || '',
        message: sanitizedMessage,
        ipAddress: ip,
      });
    } catch (dbErr) {
      console.error('Failed to save contact to DB:', dbErr);
      return NextResponse.json(
        { success: false, error: dbErr?.message || 'Failed to save message.' },
        { status: 500 }
      );
    }

    const referenceId = contactRecord?._id ? contactRecord._id.toString() : undefined;

    // 2) Fire-and-forget forward to Marketing OS webhook (no waiting)
    const webhookUrl = process.env.MARKETING_OS_WEBHOOK_URL;
    const payload = {
      source: 'portal_contact',
      referenceId,
      name: sanitizedName,
      email: sanitizedEmail,
      subject: subject || '',
      message: sanitizedMessage,
      ipAddress: ip,
      submittedAt: new Date().toISOString(),
    };

    // fire-and-forget
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

        console.log('Marketing OS webhook forwarded successfully:', referenceId);
      } catch (err) {
        console.error('Marketing OS webhook request failed:', err);
      }
    })();

    // 3) Return immediately after DB save
    return NextResponse.json({
      success: true,
      message: 'Contact saved. Our team will reach out.',
      webhook: {
        forwarded: !!webhookUrl,
        error: undefined,
      },
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to submit message. Please try again later.' },
      { status: 500 }
    );
  }
}

