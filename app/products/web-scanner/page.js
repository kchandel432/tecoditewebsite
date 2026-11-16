'use client';

import Link from 'next/link';
import { Shield, Lock, FileText, Globe, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

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

        let normalized = trimmed;
        if (!/^https?:\/\//i.test(trimmed)) {
            normalized = `https://${trimmed}`;
        }

        try {
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

        setTimeout(() => {
            window.open(target, '_blank', 'noopener,noreferrer');
            setIsLoading(false);
        }, 1000);
    };

    const benefits = [
        {
            icon: <Shield size={20} strokeWidth={1.5} />,
            title: 'Malware Detection',
            desc: 'Detect injected malware, malicious redirects, and compromised assets hidden in your site.',
        },
        {
            icon: <Lock size={20} strokeWidth={1.5} />,
            title: 'SSL/HTTPS Check',
            desc: 'Verify your SSL certificate validity, encryption strength, and secure connection setup.',
        },
        {
            icon: <FileText size={20} strokeWidth={1.5} />,
            title: 'Security Headers Analysis',
            desc: 'Audit HTTP security headers like CSP, HSTS, and X-Frame-Options for hardening gaps.',
        },
    ];

    const trustBadges = [
        { label: 'SSL Secured' },
        { label: 'GDPR Compliant' },
        { label: 'ISO 27001' },
    ];

    return (
        <div className="min-h-screen bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200">
            <div className="container-mnc py-16">
                <Section
                    eyebrow="FREE SCANNER"
                    title="Scan your website for malware, vulnerabilities, and SSL issues in 3 minutes"
                    intro="Get a free, instant security audit of your website. Identify malware, weak SSL configuration, and missing security headers before attackers do."
                />

                <form
                    onSubmit={handleScan}
                    className="max-w-2xl mx-auto rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 p-6 shadow-card"
                >
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1">
                            <div className="flex items-center rounded-xl border border-ink-200 dark:border-ink-700 px-4 focus-within:border-brand-500 focus-within:ring-1 focus-within:ring-brand-500 transition-colors">
                                <span className="text-ink-400 mr-2">
                                    <Globe size={16} strokeWidth={1.5} />
                                </span>
                                <input
                                    type="text"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="https://yourwebsite.com"
                                    className="w-full py-3.5 bg-transparent text-ink-900 dark:text-white placeholder-ink-400 focus:outline-none"
                                    aria-label="Website URL"
                                />
                            </div>
                            {error && (
                                <p className="text-rose-600 dark:text-rose-400 text-sm mt-2 text-left">{error}</p>
                            )}
                        </div>
                        <Button type="submit" disabled={isLoading} className="whitespace-nowrap">
                            {isLoading ? 'Scanning…' : 'Scan Website'}
                        </Button>
                    </div>
                    <p className="text-sm text-ink-500 dark:text-ink-400 mt-4 text-center">
                        Free • No signup required • Results in about 3 minutes
                    </p>

                    {isLoading && (
                        <div className="mt-6 pt-6 border-t border-ink-200 dark:border-ink-700 text-center" role="status" aria-live="polite">
                            <div className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800">
                                <span className="w-6 h-6 border-[3px] border-ink-200 border-t-brand-600 rounded-full" />
                                <span className="text-ink-700 dark:text-ink-300 font-medium">Opening Secure Scanner…</span>
                            </div>
                            <p className="text-sm text-ink-500 dark:text-ink-400 mt-3">
                                If nothing opens in a moment,{' '}
                                <a
                                    href={pendingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-600 underline underline-offset-2 hover:text-brand-700 dark:hover:text-brand-400"
                                >
                                    click here to launch the scanner
                                </a>
                            </p>
                        </div>
                    )}
                </form>

                <Section
                    className="mt-16"
                    eyebrow="Key Benefits"
                    title="Why Scan Your Website?"
                    intro="Your website is your digital storefront. A single vulnerability can compromise your data, your customers, and your reputation."
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {benefits.map((benefit) => (
                            <Card key={benefit.title}>
                                <div className="mb-4">{benefit.icon}</div>
                                <h3 className="h3 mb-3">{benefit.title}</h3>
                                <p className="text-sm text-ink-500 dark:text-ink-300">{benefit.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Section>

                <Section className="mt-10" title="" intro="" eyebrow="">
                    <div className="max-w-3xl mx-auto rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 px-8 py-6 flex flex-wrap items-center justify-center gap-8">
                        {trustBadges.map((badge, index) => (
                            <div key={index} className="flex items-center gap-2 text-ink-500 dark:text-ink-400">
                                <span className="text-2xl text-ink-400">🔐</span>
                                <span className="font-medium">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section
                    className="mt-16"
                    eyebrow="How It Works"
                    title="How It Works"
                    intro=""
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { step: '1', title: 'Enter Your URL', desc: 'Type in your website address and hit Scan Website.' },
                            { step: '2', title: 'Automated Audit', desc: 'Our engine crawls your site checking malware, SSL, and headers.' },
                            { step: '3', title: 'Get Your Report', desc: 'Receive a detailed security report with actionable fixes.' },
                        ].map((item) => (
                            <div key={item.title} className="text-center">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 flex items-center justify-center text-xl font-bold text-ink-900 dark:text-white">
                                    {item.step}
                                </div>
                                <h4 className="text-lg font-semibold text-ink-900 dark:text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-ink-500 dark:text-ink-300 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <section className="mt-12 text-center">
                    <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-4">Ready to secure your website?</h3>
                    <p className="text-ink-500 dark:text-ink-400 mb-8">Get an instant security assessment — free, no signup required.</p>
                    <Link
                        href="/products/web-scanner"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
                    >
                        Start Your Scan <ArrowRight size={18} strokeWidth={1.5} />
                    </Link>
                </section>
            </div>
        </div>
    );
}
