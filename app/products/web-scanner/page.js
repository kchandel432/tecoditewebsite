'use client';

import Link from 'next/link';
import { useState } from 'react';

const SCANNER_URL = process.env.NEXT_PUBLIC_SCANNER_URL || 'https://scanner.techodite.com';
const WEB_SCANNER_PATH = '/web-scanner';

export default function WebScannerProduct() {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [pendingUrl, setPendingUrl] = useState('');

    const handleScan = (e) => {
        e.preventDefault();

        const trimmed = url.trim();

        if (!trimmed) {
            setError('Please enter a website URL to scan.');
            return;
        }

        // Basic URL validation — allow bare domains by prefixing https://
        let normalized = trimmed;
        if (!/^https?:\/\//i.test(trimmed)) {
            normalized = `https://${trimmed}`;
        }

        try {
            // eslint-disable-next-line no-new
            const parsed = new URL(normalized);
            if (!parsed.hostname || !parsed.hostname.includes('.')) {
                throw new Error('Invalid hostname');
            }
        } catch {
            setError('Please enter a valid URL (e.g., example.com or https://example.com).');
            return;
        }

        setError('');
        setIsLoading(true);

        const target = `${SCANNER_URL}${WEB_SCANNER_PATH}?url=${encodeURIComponent(normalized)}`;
        setPendingUrl(target);

        // Brief delay so the loading state is visible while the scanner tab opens.
        setTimeout(() => {
            window.open(target, '_blank', 'noopener,noreferrer');
            setIsLoading(false);
        }, 1000);
    };

    const benefits = [
        {
            icon: '🦠',
            title: 'Malware Detection',
            desc: 'Detect injected malware, malicious redirects, and compromised assets hidden in your site.',
        },
        {
            icon: '🔒',
            title: 'SSL/HTTPS Check',
            desc: 'Verify your SSL certificate validity, encryption strength, and secure connection setup.',
        },
        {
            icon: '🧾',
            title: 'Security Headers Analysis',
            desc: 'Audit HTTP security headers like CSP, HSTS, and X-Frame-Options for hardening gaps.',
        },
    ];

    const trustBadges = [
        { icon: '🔐', label: 'SSL Secured' },
        { icon: '🛡️', label: 'GDPR Compliant' },
        { icon: '🏅', label: 'ISO 27001' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
            <div className="container mx-auto px-6 py-16">
                {/* Hero Section */}
                <section className="text-center pt-10 pb-16">
                    <span className="inline-block bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                        FREE SCANNER
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-white max-w-4xl mx-auto leading-tight">
                        Scan your website for{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                            malware, vulnerabilities,
                        </span>{' '}
                        and SSL issues in 3 minutes
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Get a free, instant security audit of your website. Identify malware, weak SSL configuration,
                        and missing security headers before attackers do.
                    </p>

                    {/* Scan Form */}
                    <form
                        onSubmit={handleScan}
                        className="max-w-2xl mx-auto bg-slate-900/60 backdrop-blur border border-slate-700/60 rounded-2xl p-6 shadow-xl shadow-black/30"
                    >
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1">
                                <div className="flex items-center bg-slate-800/70 border border-slate-700 rounded-xl px-4 focus-within:border-cyan-500/60 focus-within:ring-2 focus-within:ring-cyan-500/30 transition-all">
                                    <span className="text-slate-500 mr-2">🌐</span>
                                    <input
                                        type="text"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder="https://yourwebsite.com"
                                        className="w-full py-3.5 bg-transparent text-white placeholder-slate-500 focus:outline-none"
                                        aria-label="Website URL"
                                    />
                                </div>
                                {error && (
                                    <p className="text-red-400 text-sm mt-2 text-left">{error}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                            >
                                {isLoading ? 'Scanning…' : 'Scan Website →'}
                            </button>
                        </div>
                        <p className="text-sm text-slate-500 mt-4 text-center">
                            Free • No signup required • Results in about 3 minutes
                        </p>

                        {/* Loading state while redirecting */}
                        {isLoading && (
                            <div className="mt-6 pt-6 border-t border-slate-700/60 text-center" role="status" aria-live="polite">
                                <div className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-slate-800/70 border border-cyan-500/40 rounded-xl">
                                    <span className="w-6 h-6 border-[3px] border-slate-600 border-t-cyan-400 rounded-full animate-spin" />
                                    <span className="text-cyan-300 font-medium">Opening Secure Scanner…</span>
                                </div>
                                <p className="text-sm text-slate-500 mt-3">
                                    If nothing opens in a moment,{' '}
                                    <a
                                        href={pendingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
                                    >
                                        click here to launch the scanner
                                    </a>
                                </p>
                            </div>
                        )}
                    </form>
                </section>

                {/* Key Benefits */}
                <section className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Scan Your Website?</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Your website is your digital storefront. A single vulnerability can compromise your data, your customers, and your reputation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-slate-900/60 backdrop-blur border border-slate-700/60 rounded-2xl p-8 hover:border-cyan-500/40 hover:-translate-y-1 transition-all shadow-lg shadow-black/20"
                            >
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Trust Badges */}
                <section className="py-10">
                    <div className="max-w-3xl mx-auto bg-slate-900/40 border border-slate-700/50 rounded-2xl px-8 py-6 flex flex-wrap items-center justify-center gap-8">
                        {trustBadges.map((badge, index) => (
                            <div key={index} className="flex items-center gap-2 text-slate-300">
                                <span className="text-2xl">{badge.icon}</span>
                                <span className="font-medium">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { step: '1', title: 'Enter Your URL', desc: 'Type in your website address and hit Scan Website.' },
                            { step: '2', title: 'Automated Audit', desc: 'Our engine crawls your site checking malware, SSL, and headers.' },
                            { step: '3', title: 'Get Your Report', desc: 'Receive a detailed security report with actionable fixes.' },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-xl font-bold flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                    {item.step}
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to secure your website?</h3>
                    <p className="text-slate-400 mb-8">Get an instant security assessment — free, no signup required.</p>
                    <Link
                        href="/products/web-scanner"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-block px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                    >
                        Start Your Scan ↑
                    </Link>
                </section>
            </div>
        </div>
    );
}

