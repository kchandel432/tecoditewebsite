'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ProductsPage() {
    const [waitlistEmail, setWaitlistEmail] = useState('')
    const [waitlistStatus, setWaitlistStatus] = useState(null) // 'success' | 'error' | 'submitting' | null

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
            icon: '🔍',
            title: 'Malware Scanner',
            description: 'Scan files for malware, phishing, and hidden threats. Get a Cyber Health Score in 3 minutes.',
            href: '/products/malware-scanner',
            cta: 'Try Scanner →',
            badge: { label: 'BETA', color: 'cyan' },
        },
        {
            icon: '🌐',
            title: 'Web Scanner',
            description: 'Check your website for security risks, malware, and SSL issues in minutes.',
            href: '/products/web-scanner',
            cta: 'Launch Web Scanner',
            badge: { label: 'NEW', color: 'indigo' },
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="container mx-auto px-6 text-center">
                    <span className="inline-block bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6">
                        SECURITY SUITE
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        AI Security{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                        Enterprise-grade protection at startup prices. Detect malware, secure your website, and defend your infrastructure.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 rounded-full">Free Scanners</span>
                        <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/40 text-indigo-400 rounded-full">AI-Powered</span>
                        <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 rounded-full">Enterprise XDR</span>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
                        <p className="text-slate-400">Everything you need to secure your digital presence</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Dynamic product cards (Malware Scanner + Web Scanner) */}
                        {products.map((product) => (
                            <div
                                key={product.title}
                                className="bg-slate-900/60 backdrop-blur rounded-2xl p-8 border border-slate-700/60 flex flex-col hover:border-cyan-500/40 hover:-translate-y-2 transition-all shadow-lg shadow-black/20"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-4xl">{product.icon}</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${product.badge.color === 'cyan'
                                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                                        : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                                        }`}>
                                        {product.badge.label}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                                <p className="text-slate-400 mb-6 flex-1 leading-relaxed">{product.description}</p>
                                <Link
                                    href={product.href}
                                    className="inline-block w-full py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl text-center hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all"
                                >
                                    {product.cta}
                                </Link>
                            </div>
                        ))}

                        {/* XDR Platform Card — Coming Soon + Waitlist */}
                        <div className="bg-slate-900/60 backdrop-blur rounded-2xl p-8 border border-indigo-500/40 flex flex-col hover:border-indigo-400/60 hover:-translate-y-2 transition-all shadow-lg shadow-black/20 relative overflow-hidden">
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
                            <div className="flex items-start justify-between mb-4 relative">
                                <span className="text-4xl">🛰️</span>
                                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-amber-500/10 text-amber-400 border border-amber-500/30">
                                    COMING SOON
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">XDR Platform</h3>
                            <p className="text-slate-400 mb-6 flex-1 leading-relaxed">
                                Enterprise-grade Extended Detection and Response. Real-time threat detection across your entire infrastructure.
                            </p>

                            {waitlistStatus === 'success' ? (
                                <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 p-4 rounded-xl text-center">
                                    ✓ You&apos;re on the list! We&apos;ll notify you when XDR launches.
                                </div>
                            ) : (
                                <form onSubmit={handleWaitlistSubmit} className="space-y-3">
                                    <div>
                                        <input
                                            type="email"
                                            value={waitlistEmail}
                                            onChange={(e) => setWaitlistEmail(e.target.value)}
                                            placeholder="Enter your email for early access"
                                            required
                                            className="w-full px-4 py-3 bg-slate-800/70 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                                        />
                                    </div>
                                    {waitlistStatus === 'error' && (
                                        <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={waitlistStatus === 'submitting'}
                                        className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {waitlistStatus === 'submitting' ? 'Joining…' : 'Join Waitlist'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison / Why Techodite */}
            <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Techodite?</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Built by security researchers, powered by AI. Get enterprise-grade protection without the enterprise price tag.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: '⚡', title: 'Instant Results', desc: 'AI-powered scans deliver results in minutes, not days.' },
                            { icon: '🛡️', title: 'Enterprise-Grade', desc: 'The same detection engines used by Fortune 500 companies.' },
                            { icon: '💸', title: 'Startup Friendly', desc: 'Free scanners and affordable plans with INR + USD billing.' },
                        ].map((item, index) => (
                            <div key={index} className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

