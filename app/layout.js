import ChatWidget from '@/components/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ToastProvider from '@/components/ToastProvider'
import { ThemeProvider } from '@/context/ThemeContext'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const interTight = Inter_Tight({ variable: '--font-inter-tight', subsets: ['latin'] })

export const metadata = {
    title: {
        default: 'Techodite - Enterprise AI & Cybersecurity',
        template: '%s | Techodite'
    },
    description: 'Techodite helps regulated enterprises modernize security operations, deploy production AI, and meet compliance obligations — without slowing delivery.',
    keywords: [
        'enterprise cybersecurity',
        'AI security',
        'compliance',
        'ISO 27001',
        'SOC 2',
        'Techodite'
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
        title: 'Techodite - Enterprise AI & Cybersecurity',
        description: 'Techodite helps regulated enterprises modernize security operations, deploy production AI, and meet compliance obligations.',
        url: 'https://techodite.com',
        siteName: 'Techodite',
        images: [
            {
                url: '/company-logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Techodite - Enterprise AI & Cybersecurity',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Techodite - Enterprise AI & Cybersecurity',
        description: 'Techodite helps regulated enterprises modernize security operations, deploy production AI, and meet compliance obligations.',
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
        <html
            lang="en"
            suppressHydrationWarning
            style={{
                fontFamily: [
                    `var(--font-inter)`,
                    `var(--font-inter-tight)`,
                ].join(', '),
            }}
        >
            <body className={`${inter.className} ${interTight.className} font-sans antialiased bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200 transition-colors duration-300`}>
                <ThemeProvider>
                    <ToastProvider>
                        <Navbar />
                        {/* Offset content for the fixed top navbar */}
                        <main className="pt-24">{children}</main>
                        <CookieBanner />
                        <Footer />
                        <ChatWidget />
                    </ToastProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
