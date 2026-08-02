'use client'

import Link from 'next/link'
import { useState } from 'react'

const PLANS = [
    {
        id: 'starter',
        name: 'Starter',
        priceINR: '₹4,999',
        priceUSD: '$60',
        period: 'per month',
        description: 'For small teams getting started with secure AI.',
        features: [
            'Up to 5 users',
            'Core AI security scanning',
            'Email support (24h response)',
            'Community access',
            'Monthly security report',
        ],
        cta: 'Start Free Trial',
        highlight: false,
    },
    {
        id: 'professional',
        name: 'Professional',
        priceINR: '₹14,999',
        priceUSD: '$180',
        period: 'per month',
        description: 'For growing organizations needing advanced protection.',
        features: [
            'Up to 25 users',
            'Advanced threat detection',
            'Priority support (4h response)',
            'API access & integrations',
            'Compliance reporting (SOC2/ISO)',
            'Dedicated security engineer',
        ],
        cta: 'Choose Professional',
        highlight: true,
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        priceINR: 'Custom',
        priceUSD: 'Custom',
        period: 'annual',
        description: 'Full-scale security operations for large enterprises.',
        features: [
            'Unlimited users',
            'Custom deployment & SSO',
            '24/7 dedicated support',
            'Custom AI model integration',
            'SLA & compliance audits',
            'On-premise/cloud options',
        ],
        cta: 'Contact Sales',
        highlight: false,
    },
]

export default function SignupPage() {
    const [selectedPlan, setSelectedPlan] = useState('professional')
    const [formData, setFormData] = useState({ name: '', email: '', company: '' })
    const [submitting, setSubmitting] = useState(false)
    const [formStatus, setFormStatus] = useState(null) // 'success' | 'error' | null
    const [errorMsg, setErrorMsg] = useState('')

    const handleInputChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setFormStatus(null)
        setErrorMsg('')

        const selected = PLANS.find((p) => p.id === selectedPlan)

        try {
            const res = await fetch('/api/assistant', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: '',
                    message: `Signup request for ${selected.name} plan (${selected.priceINR}/${selected.priceUSD})`,
                    purpose: 'general',
                    source: 'signup',
                    company: formData.company,
                    plan: selected.id,
                }),
            })

            const data = await res.json()
            if (data.success) {
                setFormStatus('success')
                setFormData({ name: '', email: '', company: '' })
            } else {
                setFormStatus('error')
                setErrorMsg(data.error || 'Something went wrong. Please try again.')
            }
        } catch (err) {
            setFormStatus('error')
            setErrorMsg('Network error. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
            {/* Hero */}
            <section className="py-16 bg-gradient-to-b from-slate-800/50 to-transparent">
                <div className="container mx-auto px-6 text-center">
                    <span className="inline-block bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                        Get Started
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-white">
                        Choose Your Plan
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Enterprise-grade AI security at startup prices. INR and USD billing available.
                    </p>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {PLANS.map((plan) => (
                            <button
                                key={plan.id}
                                type="button"
                                onClick={() => setSelectedPlan(plan.id)}
                                className={`relative text-left bg-slate-900/60 backdrop-blur rounded-2xl p-8 border transition-all ${plan.highlight
                                        ? 'border-cyan-500/60 shadow-lg shadow-cyan-500/10 md:scale-105'
                                        : 'border-slate-700/60 hover:border-cyan-500/30'
                                    } ${selectedPlan === plan.id
                                        ? 'ring-2 ring-cyan-500/60'
                                        : ''
                                    }`}
                            >
                                {plan.highlight && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                                        MOST POPULAR
                                    </span>
                                )}

                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                                <div className="mb-2">
                                    <span className="text-3xl font-bold text-white">{plan.priceINR}</span>
                                    <span className="text-lg text-slate-500 ml-2">{plan.priceUSD}</span>
                                </div>
                                <p className="text-sm text-slate-500 mb-6">{plan.period}</p>

                                <ul className="space-y-2.5 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                                            <span className="text-cyan-400 flex-shrink-0">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div
                                    className={`text-center py-3 rounded-lg font-semibold transition-all ${selectedPlan === plan.id
                                            ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white'
                                            : 'bg-slate-800 text-slate-300'
                                        }`}
                                >
                                    {selectedPlan === plan.id ? '✓ Selected' : 'Select Plan'}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Signup Form */}
                    <div className="max-w-2xl mx-auto bg-slate-900/60 backdrop-blur border border-slate-700/60 rounded-2xl p-8 md:p-10">
                        <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
                        <p className="text-slate-400 mb-8">
                            Fill in your details and we&apos;ll get your <span className="text-cyan-400">{PLANS.find((p) => p.id === selectedPlan)?.name}</span> plan set up.
                        </p>

                        {formStatus === 'success' ? (
                            <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 p-6 rounded-xl text-center">
                                <div className="text-4xl mb-3">🎉</div>
                                <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
                                <p className="text-emerald-200/80">
                                    Your request has been received. Our team will contact you within 24 hours to complete your setup.
                                </p>
                                <Link
                                    href="/"
                                    className="inline-block mt-6 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                                >
                                    Back to Home
                                </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm text-slate-300 mb-1.5">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your full name"
                                        className="w-full px-4 py-3 bg-slate-950/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-slate-300 mb-1.5">Work Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="you@company.com"
                                        className="w-full px-4 py-3 bg-slate-950/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-slate-300 mb-1.5">Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        placeholder="Your company (optional)"
                                        className="w-full px-4 py-3 bg-slate-950/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-slate-300 mb-1.5">Selected Plan</label>
                                    <div className="px-4 py-3 bg-slate-950/60 border border-cyan-500/30 rounded-lg text-cyan-300 font-medium">
                                        {PLANS.find((p) => p.id === selectedPlan)?.name} — {PLANS.find((p) => p.id === selectedPlan)?.priceINR} / {PLANS.find((p) => p.id === selectedPlan)?.priceUSD}
                                    </div>
                                </div>

                                {formStatus === 'error' && (
                                    <div className="bg-red-500/10 border border-red-500/40 text-red-300 p-3 rounded-lg text-sm">
                                        {errorMsg}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {submitting ? 'Submitting…' : `Get Started with ${PLANS.find((p) => p.id === selectedPlan)?.name} →`}
                                </button>

                                <p className="text-xs text-slate-500 text-center">
                                    By signing up you agree to our{' '}
                                    <Link href="/terms" className="text-cyan-400 hover:underline">Terms</Link> and{' '}
                                    <Link href="/privacy" className="text-cyan-400 hover:underline">Privacy Policy</Link>.
                                    Our team will reach out to complete your onboarding.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

