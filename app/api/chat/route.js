import { NextResponse } from 'next/server';

// Mock AI response for development
// In production, replace with actual AI API integration

export async function POST(request) {
    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Mock response - replace with actual AI API call in production
        const mockResponse = `Thank you for your question! As Techodite's AI assistant, I can help you with:

**Our Services:**
- AI & Machine Learning Solutions
- Cybersecurity Services
- Data Analytics & Business Intelligence
- Custom Software Development

**Contact Information:**
📍 Bazarpati Bhadarpur Burhanpur Madhya Pradesh
📞 9753089649

**How can I specifically assist you with ${message.toLowerCase().includes('service') ? 'our services' : 'your query'}?**`;

        return NextResponse.json({
            response: mockResponse,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            {
                error: 'Failed to process message',
                response: "I apologize, but I'm having trouble processing your request. Please contact us directly at 9753089649 for immediate assistance."
            },
            { status: 500 }
        );
    }
}
