import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
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

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email to company
    const companyMail = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'techodite@gmail.com',
      replyTo: sanitizedEmail,
      subject: `[Website Contact] ${subject} - From: ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>From:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4b5563;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${sanitizedMessage}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This email was sent from the Techodite website contact form.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Subject: ${subject}
From: ${sanitizedName}
Email: ${sanitizedEmail}
Date: ${new Date().toLocaleString()}

Message:
${message}

---
This email was sent from the Techodite website contact form.
      `,
    };

    // Optional: Send confirmation email to user
    const userMail = {
      from: `"Techodite Support" <${process.env.EMAIL_USER}>`,
      to: sanitizedEmail,
      subject: 'Thank you for contacting Techodite',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You for Contacting Techodite</h2>
          <p>Dear ${sanitizedName},</p>
          <p>We have received your message and our team will get back to you within 24 hours.</p>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
          <p>If you have any urgent inquiries, please don't hesitate to email us directly at techodite@gmail.com</p>
          <p>Best regards,<br>The Techodite Team</p>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(companyMail);
    await transporter.sendMail(userMail);

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

    // Check for specific email errors
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        {
          success: false,
          error: 'Email configuration error. Please contact us directly at techodite@gmail.com'
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
