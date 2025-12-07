import { NextResponse } from 'next/server';
import validator from 'validator';

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
    const recentRequests = userRequests.filter(time => now - time < RATE_LIMIT.windowMs);

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
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name is too long' },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Message is too long' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = validator.escape(name);
    const sanitizedEmail = validator.normalizeEmail(email);
    const sanitizedMessage = validator.escape(message);

    // Email functionality removed - contact form only saves to database

    // Store in database with Prisma
    try {
      const { PrismaClient } = await import('@prisma/client');
      const prisma = new PrismaClient();

      await prisma.contact.create({
        data: {
          name: sanitizedName,
          email: sanitizedEmail,
          subject,
          message: sanitizedMessage,
          ipAddress: ip,
        },
      });

      console.log('✅ Contact saved to database');
    } catch (dbError) {
      console.error('❌ Database save error:', dbError);
      // Continue even if database logging fails
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to submit message. Please try again later.' },
      { status: 500 }
    );
  }
}
