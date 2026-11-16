'use client'

import Link from 'next/link'
import { HardDrive, Globe, Shield } from 'lucide-react'
import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'


export default function ProductsPage() {
    const [waitlistEmail, setWaitlistEmail] = useState('')
    const [waitlistStatus, setWaitlistStatus] = useState(null)
    const [showScanner, setShowScanner] = useState(false)

    const handleWaitlistSubmit = async (e) => {
        e.preventDefault()
        if (!waitlistEmail.trim()) return

        setWaitlistStatus('submitting')

        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: waitlistEmail.trim(),
                    name: '',
                    company: '',
                }),
            })

            const data = await res.json()

            if (res.ok && data.success) {
                setWaitlistStatus('success')
                setWaitlistEmail('')
            } else {
                setWaitlistStatus('error')
            }
        } catch {
            setWaitlistStatus('error')
        }
    }

    const products = [
        {
            icon: <Shield size={24} strokeWidth={1.5} />,
            title: 'Malware scanner',
            description: 'Scan files for malware, phishing, and hidden threats. Get a Cyber Health Score in 3 minutes.',
            href: '/products/malware-scanner',
            cta: 'Try Scanner',
            badge: 'BETA',
        },
        {
            icon: <Globe size={24} strokeWidth={1.5} />,
            title: 'Web scanner',
            description: 'Check your website for security risks, malware, and SSL issues in minutes.',
            href: '/products/web-scanner',
            cta: 'Launch Web Scanner',
            badge: 'NEW',
        },
    ]

    return (
        <>
            <Section
                eyebrow="Security Suite"
                title="AI Security Solutions"
                intro="Enterprise-grade protection at scale. Detect malware, secure your website, and defend your infrastructure."
            >
                <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-500 dark:text-ink-400">Free Scanners</span>
                    <span className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-500 dark:text-ink-400">AI-Powered</span>
                    <span className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-500 dark:text-ink-400">Enterprise XDR</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Card key={product.title} className="flex flex-col h-full">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 bg-ink-50 dark:bg-ink-800/50 rounded-lg border border-ink-200 dark:border-ink-700">
                                    {product.icon}
                                </div>
                                <span className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-500 dark:text-ink-400 font-medium">
                                    {product.badge}
                                </span>
                            </div>
                            <h3 className="h3 mb-3">{product.title}</h3>
                            <p className="text-sm text-ink-500 dark:text-ink-300 mb-6 flex-1 leading-relaxed">{product.description}</p>
                            <Button asChild className="mt-auto">
                                <a href={product.href}>{product.cta}</a>
                            </Button>
                        </Card>
                    ))}

                    <Card className="flex flex-col h-full relative">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-2 bg-ink-50 dark:bg-ink-800/50 rounded-lg border border-ink-200 dark:border-ink-700">
                                <HardDrive size={24} strokeWidth={1.5} />
                            </div>
                            <span className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-500 dark:text-ink-400 font-medium">COMING SOON</span>
                        </div>
                        <h3 className="h3 mb-3">XDR platform</h3>
                        <p className="text-sm text-ink-500 dark:text-ink-300 mb-6 flex-1 leading-relaxed">
                            Enterprise-grade Extended Detection and Response. Real-time threat detection across your entire infrastructure.
                        </p>

                        {waitlistStatus === 'success' ? (
                            <div className="mt-auto p-4 rounded-lg border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 text-center text-sm">
                                ✓ You're on the list! We'll notify you when XDR launches.
                            </div>
                        ) : (
                            <form onSubmit={handleWaitlistSubmit} className="mt-auto space-y-3">
                                <div>
                                    <input
                                        type="email"
                                        value={waitlistEmail}
                                        onChange={(e) => setWaitlistEmail(e.target.value)}
                                        placeholder="Enter your email for early access"
                                        required
                                        className="w-full px-4 py-3 rounded border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
                                    />
                                </div>
                                {waitlistStatus === 'error' && (
                                    <p className="text-rose-600 dark:text-rose-400 text-sm">Something went wrong. Please try again.</p>
                                )}
                                <Button type="submit" disabled={waitlistStatus === 'submitting'}>
                                    {waitlistStatus === 'submitting' ? 'Joining…' : 'Join Waitlist'}
                                </Button>
                            </form>
                        )}
                    </Card>
                </div>
            </Section>

            <Section
                eyebrow="Why Techodite"
                title="Why Techodite?"
                intro="Built by security researchers, powered by AI. Enterprise-grade protection for regulated organizations."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {[
                        { title: 'Instant results', desc: 'AI-powered scans deliver results in minutes, not days.' },
                        { title: 'Enterprise-grade', desc: 'The same detection engines used by Fortune 500 companies.' },
                        { title: 'Startup friendly', desc: 'Free scanners and affordable plans with INR + USD billing.' },
                    ].map((item) => (
                        <Card key={item.title}>
                            <h3 className="h3 mb-3">{item.title}</h3>
                            <p className="text-sm text-ink-500 dark:text-ink-300">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <section className="border-t border-ink-100 dark:border-ink-800">
                <Section className="py-0" title="" intro="" eyebrow="">
                    <div className="max-w-xl mx-auto text-center">
                        <p className="lead mb-6">Ready to secure your website?</p>
                        <Button asChild>
                            <a href="/products/web-scanner" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                                Start Your Scan
                            </a>
                        </Button>
                    </div>
                </Section>
            </section>
        </>
    )
}
