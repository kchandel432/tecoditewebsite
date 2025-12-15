import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export default async function middleware(request: NextRequest) {
    const url = request.nextUrl.pathname

    // Protect admin routes
    if (url.startsWith('/admin')) {
        const authHeader = request.headers.get('authorization')

        if (!authHeader) {
            return new NextResponse('Auth required', {
                status: 401,
                headers: {
                    'WWW-Authenticate': 'Basic realm="Admin Area"',
                },
            })
        }

        const [username, password] = Buffer.from(authHeader.split(' ')[1], 'base64')
            .toString()
            .split(':')

        if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
            return new NextResponse('Invalid credentials', { status: 401 })
        }
    }

    return NextResponse.next()
}
