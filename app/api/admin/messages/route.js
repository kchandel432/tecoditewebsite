import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const search = searchParams.get('search') || '';
        const status = searchParams.get('status') || 'all';
        const priority = searchParams.get('priority') || 'all';

        const skip = (page - 1) * limit;

        // Build where clause
        const where = {};

        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } },
                { message: { contains: search, mode: 'insensitive' } },
            ];
        }

        if (status !== 'all') {
            if (status === 'new') {
                where.read = false;
            } else if (status === 'responded') {
                where.responded = true;
            } else if (status === 'urgent') {
                where.priority = 'high';
            }
        }

        if (priority !== 'all') {
            where.priority = priority;
        }

        // Get total count
        const total = await prisma.contact.count({ where });

        // Get paginated messages
        const messages = await prisma.contact.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            skip,
            take: limit,
            select: {
                id: true,
                name: true,
                email: true,
                message: true,
                createdAt: true,
                read: true,
                priority: true,
                responded: true,
            },
        });

        // Format dates
        const formattedMessages = messages.map(msg => ({
            ...msg,
            createdAt: msg.createdAt.toISOString(),
        }));

        return NextResponse.json({
            success: true,
            messages: formattedMessages,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });

    } catch (error) {
        console.error('Admin messages API error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch messages' },
            { status: 500 }
        );
    }
}

// Mark message as read
export async function PATCH(request) {
    try {
        const { id, read } = await request.json();

        if (!id) {
            return NextResponse.json(
                { success: false, error: 'Message ID is required' },
                { status: 400 }
            );
        }

        const message = await prisma.contact.update({
            where: { id: parseInt(id) },
            data: { read: read !== undefined ? read : true },
        });

        return NextResponse.json({
            success: true,
            message: 'Message updated successfully',
            data: message,
        });

    } catch (error) {
        console.error('Update message error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to update message' },
            { status: 500 }
        );
    }
}

// Delete message
export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { success: false, error: 'Message ID is required' },
                { status: 400 }
            );
        }

        await prisma.contact.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({
            success: true,
            message: 'Message deleted successfully',
        });

    } catch (error) {
        console.error('Delete message error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete message' },
            { status: 500 }
        );
    }
}