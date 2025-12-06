import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request) {
  try {
    console.log("📨 Received contact form submission:", { name: request.body?.name, email: request.body?.email, subject: request.body?.subject });

    const { name, email, company, phone, subject, message } = await request.json();

    // 1. Save to database
    const contactRecord = await prisma.contact.create({
      data: {
        name,
        email,
        company,
        phone,
        subject,
        message,
        status: 'new',
        priority: 'medium',
        responded: false
      },
    });

    console.log("✅ Saved to database:", contactRecord.id);

    // 2. Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_FROM || '"Techodite Solutions" <noreply@techodite.com>',
      to: email,
      subject: `Thank you for contacting Techodite Solutions`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #06b6d4, #3b82f6); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">Techodite Solutions</h1>
            <p style="color: white; opacity: 0.9; margin: 10px 0 0 0;">AI & Cybersecurity Research</p>
          </div>
          <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Thank you for contacting us!</h2>
            <p style="color: #4b5563; line-height: 1.6;">
              Dear ${name},
            </p>
            <p style="color: #4b5563; line-height: 1.6;">
              We have received your message regarding <strong>${subject}</strong>.
              Our team will review your inquiry and get back to you within 24 hours.
            </p>
            <div style="background: white; border-left: 4px solid #06b6d4; padding: 20px; margin: 20px 0; border-radius: 4px;">
              <p style="color: #374151; margin: 0;"><strong>Your Message:</strong></p>
              <p style="color: #4b5563; margin: 10px 0 0 0;">${message}</p>
            </div>
            <p style="color: #4b5563; line-height: 1.6;">
              <strong>Reference ID:</strong> TECH-${contactRecord.id.toString().padStart(6, '0')}<br>
              <strong>Submitted:</strong> ${new Date().toLocaleString()}
            </p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                Best regards,<br>
                <strong>Techodite Solutions Team</strong><br>
                Email: techodite@gmail.com<br>
                Phone: +91-9876543210
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // 3. Send notification to company
    const companyMailOptions = {
      from: process.env.EMAIL_FROM || '"Techodite Contact Form" <noreply@techodite.com>',
      to: process.env.COMPANY_EMAIL || 'techodite@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ef4444, #dc2626); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="background: #fef2f2; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #fecaca;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #fecaca; color: #7f1d1d;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #fecaca; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #fecaca; color: #7f1d1d;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #fecaca; color: #1f2937;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #fecaca; color: #7f1d1d;"><strong>Company:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #fecaca; color: #1f2937;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #fecaca; color: #7f1d1d;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #fecaca; color: #1f2937;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #fecaca; color: #7f1d1d;"><strong>Subject:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #fecaca; color: #1f2937;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px; color: #7f1d1d; vertical-align: top;"><strong>Message:</strong></td>
                <td style="padding: 10px; color: #1f2937;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #fca5a5;">
              <p style="color: #374151; margin: 0 0 10px 0;">
                <strong>Action Required:</strong> Please respond within 24 hours.
              </p>
              <a href="${process.env.APP_URL}/admin/messages"
                 style="display: inline-block; background: #dc2626; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                View in Admin Dashboard
              </a>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #fecaca;">
              <p style="color: #6b7280; font-size: 12px;">
                Reference: TECH-${contactRecord.id.toString().padStart(6, '0')}<br>
                Received: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send emails if email is configured
    if (process.env.EMAIL_HOST) {
      try {
        await transporter.sendMail(userMailOptions);
        console.log("✅ Confirmation email sent to user");

        await transporter.sendMail(companyMailOptions);
        console.log("✅ Notification email sent to company");
      } catch (emailError) {
        console.error("❌ Email sending failed:", emailError);
        // Don't fail the API if email fails
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! We'll contact you within 24 hours.",
        referenceId: `TECH-${contactRecord.id.toString().padStart(6, '0')}`,
        data: contactRecord
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ API Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later or contact us directly at techodite@gmail.com" },
      { status: 500 }
    );
  }
}
