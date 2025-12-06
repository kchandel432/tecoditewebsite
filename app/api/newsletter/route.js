import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { success: false, message: "Please provide a valid email address" },
                { status: 400 }
            );
        }

        // Check if email already exists
        const existing = await prisma.newsletter.findUnique({
            where: { email: email.toLowerCase() }
        });

        if (existing) {
            return NextResponse.json(
                { success: false, message: "You're already subscribed to our newsletter!" },
                { status: 400 }
            );
        }

        // Save to database
        const subscriber = await prisma.newsletter.create({
            data: {
                email: email.toLowerCase(),
                subscribed: true,
                source: 'website_footer'
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: "Thank you for subscribing! You'll receive our latest updates.",
                data: subscriber
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Newsletter subscription error:", error);

        return NextResponse.json(
            { success: false, message: "Failed to subscribe. Please try again later." },
            { status: 500 }
        );
    }
}