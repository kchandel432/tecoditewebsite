'use client'

import Link from 'next/link'

const columns = [
    {
        heading: 'Company',
        links: [
            { name: 'About', href: '/about' },
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'Investors', href: '/investors' },
            { name: 'Contact', href: '/contact' },
        ],
    },
    {
        heading: 'Solutions',
        links: [
            { name: 'Technology', href: '/technology' },
            { name: 'Products', href: '/products' },
            { name: 'Compliance', href: '/compliance' },
            { name: 'Security', href: '/security' },
        ],
    },
    {
        heading: 'Products',
        links: [
            { name: 'Malware Scanner', href: '/products/malware-scanner' },
            { name: 'Web Scanner', href: '/products/web-scanner' },
        ],
    },
    {
        heading: 'Resources',
        links: [
            { name: 'Blog', href: '/blog' },
            { name: 'Cookie Policy', href: '/cookies' },
            { name: 'Research Ethics', href: '/ethics' },
        ],
    },
    {
        heading: 'Legal',
        links: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms & Conditions', href: '/terms' },
            { name: 'Disclaimer', href: '/disclaimer' },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="bg-ink-900 text-ink-300 py-16 border-t border-ink-800">
            <div className="container-mnc">
                <Link href="/" aria-label="Techodite home" className="inline-flex items-center mb-10">
                    <img src="/logo.png" alt="Techodite" className="h-8 w-auto brightness-0 invert" />
                </Link>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                    {columns.map((column) => (
                        <div key={column.heading}>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-[0.12em] mb-6">
                                {column.heading}
                            </h3>
                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-ink-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-ink-800 pt-6 mt-12 flex flex-col md:flex-row justify-between gap-4 text-xs">
                    <p className="text-ink-500">
                        © 2026 Techodite Solutions Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-ink-500">
                            ISO 27001&nbsp;&middot;&nbsp;SOC 2&nbsp;&middot;&nbsp;GDPR
                        </span>
                        <div className="flex items-center gap-4">
                            <Link href="/privacy" className="text-ink-400 hover:text-white transition-colors">
                                Privacy
                            </Link>
                            <Link href="/terms" className="text-ink-400 hover:text-white transition-colors">
                                Terms
                            </Link>
                            <Link href="/security" className="text-ink-400 hover:text-white transition-colors">
                                Security
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
