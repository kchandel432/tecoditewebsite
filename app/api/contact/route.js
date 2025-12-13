

import { NextResponse } from 'next/server';
import validator from 'validator';
import connectMongoDB from '../../../lib/mongodb';
import Contact from '../../../models/Contact';
import dotenv from 'dotenv';
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


    // Save to MongoDB first (so we have a reference id to include in emails)
    try {
      await connectMongoDB();
    } catch (connErr) {
      console.error('MongoDB connection failed:', connErr);
      return NextResponse.json({ success: false, error: 'Database connection failed.' }, { status: 500 });
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
      return NextResponse.json({ success: false, error: 'Failed to save message.' }, { status: 500 });
    }

    // Contact form submission successful (saved to MongoDB)
    const referenceId = contactRecord && contactRecord._id ? contactRecord._id.toString() : undefined;

    // Attempt to forward the message to WhatsApp via Twilio if credentials are provided
    let whatsappResult = { enabled: false };
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    const from = process.env.TWILIO_WHATSAPP_FROM; // example: 'whatsapp:+1415XXXXXXX'
    const to = process.env.TWILIO_WHATSAPP_TO; // example: 'whatsapp:+91XXXXXXXXXX'

    if (sid && token && from && to) {
      whatsappResult.enabled = true;
      try {
        const body = `New contact submission (ref: ${referenceId || 'N/A'})\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\nSubject: ${subject || ''}\nMessage: ${sanitizedMessage}`;

        const url = `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`;
        const params = new URLSearchParams();
        params.append('To', to);
        params.append('From', from);
        params.append('Body', body);

        const auth = Buffer.from(`${sid}:${token}`).toString('base64');
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: params.toString()
        });

        if (!res.ok) {
          const text = await res.text();
          console.error('Twilio WhatsApp send failed:', res.status, text);
          whatsappResult.sent = false;
          whatsappResult.error = text;
        } else {
          const json = await res.json();
          whatsappResult.sent = true;
          whatsappResult.sid = json.sid;
        }
      } catch (twErr) {
        console.error('Twilio WhatsApp error:', twErr);
        whatsappResult.sent = false;
        whatsappResult.error = String(twErr);
      }
    } else {
      // Fallback: provide a wa.me link the admin can open to manually send
      const phone = (process.env.TWILIO_WHATSAPP_TO || '').replace('whatsapp:', '') || '';
      const text = encodeURIComponent(`New contact (ref: ${referenceId || 'N/A'})\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\nSubject: ${subject || ''}\nMessage: ${sanitizedMessage}`);
      whatsappResult.wa_me = phone ? `https://wa.me/${phone.replace('+','')}?text=${text}` : null;
    }

    return NextResponse.json({
      success: true,
      message: 'Message saved successfully',
      referenceId: referenceId,
      data: { id: referenceId },
      whatsapp: whatsappResult
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to submit message. Please try again later.' },
      { status: 500 }
    );
  }
}
