'use client'

import emailjs from '@emailjs/browser'
import {
    ArrowRight,
    Building,
    Calendar,
    CheckCircle,
    Cpu,
    DollarSign,
    Globe,
    Handshake,
    Mail,
    MapPin,
    PieChart,
    Rocket,
    Send,
    TrendingUp,
    Users
} from 'lucide-react'
import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'


export default function InvestorsPage() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
        type: 'investor'
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const result = await emailjs.sendForm(
                'service_kxoxhrq',
                'template_7r790p8',
                e.target,
                'cCDP5rrDw0dMTosC7'
            )

            console.log('SUCCESS!', result.text)
            setIsSubmitted(true)
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                interest: '',
                message: '',
                type: 'investor'
            })

            setTimeout(() => setIsSubmitted(false), 5000)
        } catch (error) {
            console.error('FAILED...', error)
            alert(`Failed to send message: ${error?.text || 'Unknown error'}. Please try again or email us directly.`)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const companyMetrics = [
        { label: 'Founded', value: '2023', icon: <Calendar size={18} strokeWidth={1.5} /> },
        { label: 'Team Size', value: '50+', icon: <Users size={18} strokeWidth={1.5} /> },
        { label: 'Market', value: 'Global', icon: <Globe size={18} strokeWidth={1.5} /> },
        { label: 'Focus', value: 'AI & Security', icon: <Cpu size={18} strokeWidth={1.5} /> },
        { label: 'Location', value: 'India HQ', icon: <MapPin size={18} strokeWidth={1.5} /> },
        { label: 'Stage', value: 'Early Growth', icon: <Rocket size={18} strokeWidth={1.5} /> }
    ]

    const investmentHighlights = [
        {
            title: 'Market opportunity',
            description: '$500B+ global cybersecurity market growing at 12% CAGR',
            icon: <TrendingUp className="text-brand-600 dark:text-brand-400" size={20} strokeWidth={1.5} />
        },
        {
            title: 'Technology edge',
            description: 'Proprietary AI algorithms with 4 pending patents',
            icon: <Cpu className="text-brand-600 dark:text-brand-400" size={20} strokeWidth={1.5} />
        },
        {
            title: 'Strong team',
            description: 'Experienced founders with cybersecurity & AI expertise',
            icon: <Users className="text-brand-600 dark:text-brand-400" size={20} strokeWidth={1.5} />
        },
        {
            title: 'Scalable model',
            description: 'SaaS-based recurring revenue with high margins',
            icon: <PieChart className="text-brand-600 dark:text-brand-400" size={20} strokeWidth={1.5} />
        }
    ]

    const partnershipTypes = [
        {
            type: 'Investor',
            description: 'Seed to Series A investment for growth acceleration',
            idealFor: ['VC Firms', 'Angel Networks', 'Family Offices'],
            benefits: ['Equity Stake', 'Board Observer Rights', 'Priority Returns'],
            icon: <DollarSign className="text-brand-600 dark:text-brand-400" size={20} strokeWidth={1.5} />
        },
        {
            type: 'Strategic Partner',
            description: 'Technology integration and go-to-market collaboration',
            idealFor: ['Enterprise Software Companies', 'MSPs', 'System Integrators'],
            benefits: ['Revenue Sharing', 'Product Integration', 'Market Access'],
            icon: <Handshake className="text-brand-600 dark:text-brand-400" size={20} strokeWidth={1.5} />
        },
        {
            type: 'Enterprise Alliance',
            description: 'Pilot projects and enterprise solution development',
            idealFor: ['Fortune 500 Companies', 'Government Agencies', 'Banks'],
            benefits: ['Early Access', 'Custom Solutions', 'Joint Development'],
            icon: <Building className="text-brand-600 dark:text-brand-400" size={20} strokeWidth={1.5} />
        }
    ]

    const roadmap = [
        {
            year: '2024',
            title: 'Product development & MVP',
            milestones: [
                'Complete AI Malware Scanner MVP',
                'Launch Threat Detection Platform',
                'Onboard 10+ Enterprise Clients'
            ]
        },
        {
            year: '2025',
            title: 'Market expansion & scale',
            milestones: [
                'Expand to US & European Markets',
                'Release Advanced Threat Intelligence',
                'Achieve 100+ Enterprise Clients'
            ]
        },
        {
            year: '2026',
            title: 'Global leadership',
            milestones: [
                'Launch AI Security Suite',
                'Establish Global Threat Labs',
                'Public Listing Consideration'
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200">
            <Section
                eyebrow="Investment Opportunity"
                title="Building the future of AI & cybersecurity"
                intro="We are seeking strategic investors and business partners to scale our AI-driven cybersecurity solutions globally."
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                        <a href="#contact">Become a Partner</a>
                    </Button>
                    <Button variant="secondary" asChild>
                        <a href="#pitch">View Investment Deck</a>
                    </Button>
                </div>
            </Section>

            <Section eyebrow="Company" title="At a glance" intro="">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {companyMetrics.map((metric, index) => (
                        <Card key={index} className="text-center">
                            <div className="inline-flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50">
                                {metric.icon}
                            </div>
                            <div className="text-xl font-bold text-ink-900 dark:text-white mb-1">{metric.value}</div>
                            <div className="text-xs text-ink-500 dark:text-ink-400">{metric.label}</div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="about" className="scroll-mt-24" eyebrow="Company" title="About Techodite" intro="Trust building & vision">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-xl border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 flex-shrink-0">
                            <Building size={24} strokeWidth={1.5} className="text-brand-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-ink-900 dark:text-white mb-2">About Techodite</h2>
                            <p className="text-ink-500 dark:text-ink-300">Trust Building &amp; Vision</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-ink-500 dark:text-ink-300 text-lg leading-relaxed">
                            Techodite Solutions is an AI and cybersecurity company focused on developing advanced threat
                            detection, AI-powered malware analysis, and enterprise-grade security platforms for modern
                            digital businesses.
                        </p>

                        <p className="text-ink-500 dark:text-ink-300 leading-relaxed">
                            Founded in 2023, we combine deep expertise in artificial intelligence with cutting-edge
                            cybersecurity research to create solutions that protect organizations from evolving digital
                            threats while enabling secure innovation.
                        </p>

                        <div className="pt-6 border-t border-ink-100 dark:border-ink-800">
                            <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-4">Our mission</h3>
                            <p className="text-ink-500 dark:text-ink-300">
                                To pioneer intelligent security solutions that make advanced AI-powered cybersecurity
                                accessible and effective for organizations worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section eyebrow="Products" title="What we are building" intro="Innovative AI-driven cybersecurity products solving real-world problems">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'AI malware scanner',
                            description: 'Advanced AI-powered malware detection using behavioral analysis',
                            status: 'MVP Development',
                            features: ['Real-time scanning', 'Zero-day detection', 'API integration']
                        },
                        {
                            title: 'Threat intelligence platform',
                            description: 'Enterprise-grade threat detection and response system',
                            status: 'Beta Testing',
                            features: ['Global threat data', 'Automated response', 'Compliance reporting']
                        },
                        {
                            title: 'AI security suite',
                            description: 'Comprehensive security platform for modern enterprises',
                            status: 'Planning Phase',
                            features: ['Multi-cloud support', 'AI analytics', 'Unified dashboard']
                        }
                    ].map((product) => (
                        <Card key={product.title} className="flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 flex-shrink-0">
                                    <Cpu size={20} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />
                                </div>
                                <span className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-brand-600 dark:text-brand-400 font-medium bg-brand-50 dark:bg-brand-900/20">
                                    {product.status}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-3">{product.title}</h3>
                            <p className="text-sm text-ink-500 dark:text-ink-300 mb-6 flex-1">{product.description}</p>

                            <div className="space-y-2 mt-auto">
                                {product.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <CheckCircle size={14} className="text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
                                        <span className="text-sm text-ink-500 dark:text-ink-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section eyebrow="Opportunity" title="Investment highlights" intro="Why Techodite represents a compelling opportunity">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {investmentHighlights.map((highlight) => (
                        <Card key={highlight.title}>
                            <div className="p-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 w-fit mb-4">
                                {highlight.icon}
                            </div>
                            <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-3">{highlight.title}</h3>
                            <p className="text-sm text-ink-500 dark:text-ink-300">{highlight.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section eyebrow="Partnerships" title="Partnership opportunities" intro="Multiple ways to collaborate and grow with us">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {partnershipTypes.map((type) => (
                        <Card key={type.type} className="flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 flex-shrink-0">
                                    {type.icon}
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-ink-900 dark:text-white">{type.type}</div>
                                    <div className="text-sm text-ink-500 dark:text-ink-400">Partnership Type</div>
                                </div>
                            </div>

                            <p className="text-ink-500 dark:text-ink-300 mb-6 flex-1">{type.description}</p>

                            <div className="space-y-4 mt-auto">
                                <div>
                                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400 mb-2">Ideal For</div>
                                    <div className="flex flex-wrap gap-2">
                                        {type.idealFor.map((item, idx) => (
                                            <span key={idx} className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-600 dark:text-ink-300 bg-white dark:bg-ink-800">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400 mb-2">Key Benefits</div>
                                    <div className="space-y-2">
                                        {type.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle size={14} className="text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
                                                <span className="text-sm text-ink-500 dark:text-ink-300">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="pitch" className="scroll-mt-24" eyebrow="Roadmap" title="Growth roadmap" intro="Strategic milestones and vision for the next 3 years">
                <div className="space-y-12 lg:space-y-0">
                    {roadmap.map((phase, index) => (
                        <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}>
                            <div className="w-1/2"></div>
                            <div className="w-8 h-8 rounded-full border-4 border-brand-600 dark:border-brand-400 bg-white dark:bg-ink-900 flex items-center justify-center flex-shrink-0 z-10 relative">
                                <span className="text-brand-600 dark:text-brand-400 font-bold">{phase.year}</span>
                            </div>
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-xl border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 flex-shrink-0">
                                        <Calendar size={24} strokeWidth={1.5} className="text-brand-600" />
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-ink-900 dark:text-white">{phase.year}</div>
                                        <div className="text-sm text-ink-500 dark:text-ink-400">Target Year</div>
                                    </div>
                                </div>
                                <div className="p-6 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                                    <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-4">{phase.title}</h3>
                                    <ul className="space-y-3">
                                        {phase.milestones.map((milestone, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="p-1 rounded bg-ink-100 dark:bg-ink-800 mt-0.5">
                                                    <CheckCircle size={12} className="text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
                                                </div>
                                                <span className="text-sm text-ink-500 dark:text-ink-300">{milestone}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section eyebrow="Team" title="Founder &amp; CEO" intro="">
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 overflow-hidden">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                            <div className="md:w-1/3">
                                <div className="w-32 h-32 mx-auto md:mx-0 rounded-full border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center">
                                    <div className="text-3xl font-bold text-brand-900 dark:text-white">KC</div>
                                </div>
                            </div>

                            <div className="md:w-2/3">
                                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 text-xs font-semibold text-ink-500 dark:text-ink-400">
                                    Founder &amp; CEO
                                </div>

                                <h2 className="text-3xl font-bold text-ink-900 dark:text-white mb-2">Kapil Chandel</h2>
                                <div className="text-lg text-brand-600 dark:text-brand-400 mb-4">Founder &amp; CEO – Techodite Solutions</div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 text-xs border border-brand-200 dark:border-brand-800/30 rounded-lg text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20">AI Research</span>
                                    <span className="px-3 py-1 text-xs border border-brand-200 dark:border-brand-800/30 rounded-lg text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20">Cybersecurity</span>
                                    <span className="px-3 py-1 text-xs border border-brand-200 dark:border-brand-800/30 rounded-lg text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20">Product Engineering</span>
                                    <span className="px-3 py-1 text-xs border border-brand-200 dark:border-brand-800/30 rounded-lg text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20">Entrepreneurship</span>
                                </div>

                                <p className="text-ink-500 dark:text-ink-300 leading-relaxed">
                                    With deep expertise in artificial intelligence and cybersecurity,
                                    Kapil leads Techodite's vision to create intelligent security solutions
                                    that protect enterprises while enabling innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="contact" className="scroll-mt-24" eyebrow="Contact" title="Start a conversation" intro="Interested in partnering with us? Let's discuss opportunities.">
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20">
                                    <CheckCircle size={40} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-ink-900 dark:text-white mb-2">Message sent successfully!</h3>
                                <p className="text-ink-500 dark:text-ink-300 mb-8">
                                    Thank you for your interest. We'll get back to you within 24 hours.
                                </p>
                                <Button onClick={() => setIsSubmitted(false)} variant="secondary">
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} id="investor-contact-form" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-lg px-4 py-3 text-ink-900 dark:text-white placeholder-ink-400 focus:outline-none focus:border-brand-500 transition-colors"
                                            placeholder="John Smith"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Company *</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-lg px-4 py-3 text-ink-900 dark:text-white placeholder-ink-400 focus:outline-none focus:border-brand-500 transition-colors"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-lg px-4 py-3 text-ink-900 dark:text-white placeholder-ink-400 focus:outline-none focus:border-brand-500 transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-lg px-4 py-3 text-ink-900 dark:text-white placeholder-ink-400 focus:outline-none focus:border-brand-500 transition-colors"
                                            placeholder="+91 9876543210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Interest Type *</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                                        {['Investor', 'Strategic Partner', 'Enterprise Alliance'].map((type) => (
                                            <label key={type} className="flex items-center gap-3 p-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 cursor-pointer hover:border-brand-300 dark:hover:border-brand-700 transition-colors">
                                                <input
                                                    type="radio"
                                                    name="type"
                                                    value={type.toLowerCase().replace(' ', '_')}
                                                    checked={formData.type === type.toLowerCase().replace(' ', '_')}
                                                    onChange={() => setFormData(prev => ({ ...prev, type: type.toLowerCase().replace(' ', '_') }))}
                                                    className="text-brand-600 focus:ring-brand-500"
                                                />
                                                <div>
                                                    <div className="font-medium text-ink-900 dark:text-white">{type}</div>
                                                    <div className="text-xs text-ink-500 dark:text-ink-400">
                                                        {type === 'Investor' ? 'Funding & Investment' :
                                                        type === 'Strategic Partner' ? 'Business Partnership' :
                                                            'Enterprise Collaboration'}
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">How can we help? *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-lg px-4 py-3 text-ink-900 dark:text-white placeholder-ink-400 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                                        placeholder="Tell us about your interest, timeline, and any specific questions..."
                                    />
                                </div>

                                <div className="pt-6 border-t border-ink-100 dark:border-ink-800">
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <div className="text-sm text-ink-500 dark:text-ink-400">
                                            We'll respond within 24 hours to both:
                                            <div className="flex items-center gap-4 mt-2">
                                                <a href="mailto:techodite@gmail.com" className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 flex items-center gap-2 transition-colors">
                                                    <Mail size={14} strokeWidth={1.5} />
                                                    techodite@gmail.com
                                                </a>
                                                <a href="mailto:kchandel432@gmail.com" className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 flex items-center gap-2 transition-colors">
                                                    <Mail size={14} strokeWidth={1.5} />
                                                    kchandel432@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <Button type="submit" disabled={isSubmitting} className="flex items-center gap-3">
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send size={18} strokeWidth={1.5} />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    )
}
