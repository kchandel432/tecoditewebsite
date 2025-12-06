import CookieBanner from '@/components/CookieBanner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ToastProvider from '@/components/ToastProvider'
import { ThemeProvider } from '@/context/ThemeContext'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: {
        default: 'Techodite - AI & Cybersecurity Solutions',
        template: '%s | Techodite'
    },
    description: 'Leading AI and cybersecurity research company providing cutting-edge solutions for businesses. Expert team in machine learning, threat detection, and secure AI development.',
    keywords: [
        'AI research',
        'cybersecurity',
        'machine learning',
        'threat detection',
        'secure AI',
        'data privacy',
        'cyber defense',
        'artificial intelligence',
        'cybersecurity solutions',
        'AI development'
    ],
    authors: [{ name: 'Techodite Solutions' }],
    creator: 'Techodite Solutions',
    publisher: 'Techodite Solutions Pvt Ltd',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://techodite.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Techodite - AI & Cybersecurity Solutions',
        description: 'Leading AI and cybersecurity research company providing cutting-edge solutions for businesses.',
        url: 'https://techodite.com',
        siteName: 'Techodite',
        images: [
            {
                url: '/company-logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Techodite - AI & Cybersecurity Solutions',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Techodite - AI & Cybersecurity Solutions',
        description: 'Leading AI and cybersecurity research company providing cutting-edge solutions for businesses.',
        images: ['/company-logo.jpg'],
        creator: '@techodite_ai',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-site-verification-code',
        yandex: 'your-yandex-verification-code',
        bing: 'your-bing-verification-code',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} transition-colors duration-300`}>
                <ThemeProvider>
                    <ToastProvider>
                        <Navbar />
                        <main>{children}</main>
                        <CookieBanner />
                        <Footer />
                    </ToastProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}