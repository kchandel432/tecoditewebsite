'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
    TrendingUp,
    Users,
    Globe,
    Shield,
    Cpu,
    Target,
    Briefcase,
    Mail,
    Phone,
    Building,
    Handshake,
    Award,
    Zap,
    DollarSign,
    PieChart,
    Rocket,
    Calendar,
    MapPin,
    Send,
    CheckCircle,
    ArrowRight
} from 'lucide-react'

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
                'service_kxoxhrq', // Your Service ID
                'template_7r790p8', // Your Template ID
                e.target, // The form element
                'cCDP5rrDw0dMTosC7' // Your Public Key
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

            // Reset success message after 5 seconds
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
        { label: 'Founded', value: '2023', icon: Calendar },
        { label: 'Team Size', value: '50+', icon: Users },
        { label: 'Market', value: 'Global', icon: Globe },
        { label: 'Focus', value: 'AI & Security', icon: Cpu },
        { label: 'Location', value: 'India HQ', icon: MapPin },
        { label: 'Stage', value: 'Early Growth', icon: Rocket }
    ]

    const investmentHighlights = [
        {
            title: 'Market Opportunity',
            description: '$500B+ global cybersecurity market growing at 12% CAGR',
            icon: <TrendingUp className="text-emerald-500" size={20} />
        },
        {
            title: 'Technology Edge',
            description: 'Proprietary AI algorithms with 4 pending patents',
            icon: <Cpu className="text-blue-500" size={20} />
        },
        {
            title: 'Strong Team',
            description: 'Experienced founders with cybersecurity & AI expertise',
            icon: <Users className="text-amber-500" size={20} />
        },
        {
            title: 'Scalable Model',
            description: 'SaaS-based recurring revenue with high margins',
            icon: <PieChart className="text-purple-500" size={20} />
        }
    ]

    const partnershipTypes = [
        {
            type: 'Investor',
            description: 'Seed to Series A investment for growth acceleration',
            idealFor: ['VC Firms', 'Angel Networks', 'Family Offices'],
            benefits: ['Equity Stake', 'Board Observer Rights', 'Priority Returns']
        },
        {
            type: 'Strategic Partner',
            description: 'Technology integration and go-to-market collaboration',
            idealFor: ['Enterprise Software Companies', 'MSPs', 'System Integrators'],
            benefits: ['Revenue Sharing', 'Product Integration', 'Market Access']
        },
        {
            type: 'Enterprise Alliance',
            description: 'Pilot projects and enterprise solution development',
            idealFor: ['Fortune 500 Companies', 'Government Agencies', 'Banks'],
            benefits: ['Early Access', 'Custom Solutions', 'Joint Development']
        }
    ]

    const roadmap = [
        {
            year: '2024',
            title: 'Product Development & MVP',
            milestones: [
                'Complete AI Malware Scanner MVP',
                'Launch Threat Detection Platform',
                'Onboard 10+ Enterprise Clients'
            ]
        },
        {
            year: '2025',
            title: 'Market Expansion & Scale',
            milestones: [
                'Expand to US & European Markets',
                'Release Advanced Threat Intelligence',
                'Achieve 100+ Enterprise Clients'
            ]
        },
        {
            year: '2026',
            title: 'Global Leadership',
            milestones: [
                'Launch AI Security Suite',
                'Establish Global Threat Labs',
                'Public Listing Consideration'
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
            {/* Navigation */}
            <nav className="sticky top-0 w-full bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-r from-indigo-700 to-emerald-700 rounded-lg">
                                <Cpu className="text-white" size={20} />
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white tracking-tight">TECHODITE</div>
                                <div className="text-xs text-gray-400 tracking-wider">SOLUTIONS</div>
                            </div>
                        </div>
                        
                        <div className="hidden md:flex items-center gap-6">
                            <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a>
                            <a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a>
                            <a href="/investors" className="text-gray-400 hover:text-white text-sm transition-colors">Investors</a>
                            <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
                        </div>

                        <a 
                            href="/contact" 
                            className="px-5 py-2.5 bg-gradient-to-r from-indigo-700 to-emerald-700 text-white text-sm font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-700/20 transition-all"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-transparent to-emerald-900/20" />
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-6">
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-300 tracking-wider">Investment Opportunity</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            <span className="block text-white mb-2">Building the Future of</span>
                            <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                AI & Cybersecurity
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We are seeking strategic investors and business partners to scale our 
                            AI-driven cybersecurity solutions globally.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="group px-8 py-4 bg-gradient-to-r from-indigo-700 to-emerald-700 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-700/30 transition-all flex items-center justify-center gap-3"
                            >
                                Become a Partner
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </a>
                            <a
                                href="#pitch"
                                className="px-8 py-4 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-800/30 hover:border-gray-600 transition-all"
                            >
                                View Investment Deck
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Company Metrics */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {companyMetrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800 p-4 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-800/50 rounded-lg mb-2">
                                    <metric.icon className="text-indigo-400" size={18} />
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                                <div className="text-xs text-gray-400">{metric.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Techodite */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-10"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-gradient-to-r from-indigo-900/30 to-emerald-900/30 rounded-xl">
                                    <Building className="text-indigo-400" size={24} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">About Techodite</h2>
                                    <p className="text-gray-400">Trust Building & Vision</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Techodite Solutions is an emerging AI and cybersecurity company focused on 
                                    developing advanced threat detection, AI-powered malware analysis, and 
                                    enterprise-grade security platforms for modern digital businesses.
                                </p>
                                
                                <p className="text-gray-300 leading-relaxed">
                                    Founded in 2023, we combine deep expertise in artificial intelligence with 
                                    cutting-edge cybersecurity research to create solutions that protect 
                                    organizations from evolving digital threats while enabling secure innovation.
                                </p>
                                
                                <div className="pt-6 border-t border-gray-800">
                                    <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                                    <p className="text-gray-300">
                                        To pioneer intelligent security solutions that make advanced AI-powered 
                                        cybersecurity accessible and effective for organizations worldwide.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Are Building */}
            <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">What We Are Building</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Innovative AI-driven cybersecurity products solving real-world problems
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'AI Malware Scanner',
                                description: 'Advanced AI-powered malware detection using behavioral analysis',
                                status: 'MVP Development',
                                features: ['Real-time scanning', 'Zero-day detection', 'API integration']
                            },
                            {
                                title: 'Threat Intelligence Platform',
                                description: 'Enterprise-grade threat detection and response system',
                                status: 'Beta Testing',
                                features: ['Global threat data', 'Automated response', 'Compliance reporting']
                            },
                            {
                                title: 'AI Security Suite',
                                description: 'Comprehensive security platform for modern enterprises',
                                status: 'Planning Phase',
                                features: ['Multi-cloud support', 'AI analytics', 'Unified dashboard']
                            }
                        ].map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-all group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-gray-800/50 rounded-lg">
                                        <Cpu className="text-indigo-400" size={20} />
                                    </div>
                                    <span className="px-3 py-1 bg-indigo-900/30 text-indigo-400 text-xs rounded-full">
                                        {product.status}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                                <p className="text-gray-400 text-sm mb-6">{product.description}</p>
                                
                                <div className="space-y-2">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <CheckCircle className="text-emerald-500" size={14} />
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment Highlights */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Investment Highlights</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Why Techodite represents a compelling opportunity
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {investmentHighlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-all"
                            >
                                <div className="p-3 bg-gray-800/50 rounded-lg w-fit mb-4">
                                    {highlight.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{highlight.title}</h3>
                                <p className="text-gray-400 text-sm">{highlight.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Types */}
            <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Partnership Opportunities</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Multiple ways to collaborate and grow with us
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {partnershipTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-8 hover:border-gray-700 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-3 rounded-lg ${
                                        index === 0 ? 'bg-indigo-900/30' : 
                                        index === 1 ? 'bg-emerald-900/30' : 'bg-amber-900/30'
                                    }`}>
                                        {index === 0 ? <DollarSign className="text-indigo-400" size={20} /> :
                                         index === 1 ? <Handshake className="text-emerald-400" size={20} /> :
                                         <Building className="text-amber-400" size={20} />}
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">{type.type}</div>
                                        <div className="text-sm text-gray-400">Partnership Type</div>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6">{type.description}</p>
                                
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-sm font-semibold text-gray-400 mb-2">Ideal For</div>
                                        <div className="flex flex-wrap gap-2">
                                            {type.idealFor.map((item, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div className="text-sm font-semibold text-gray-400 mb-2">Key Benefits</div>
                                        <div className="space-y-2">
                                            {type.benefits.map((benefit, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="text-emerald-500" size={14} />
                                                    <span className="text-gray-300 text-sm">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section id="pitch" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Growth Roadmap</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Strategic milestones and vision for the next 3 years
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-emerald-500 to-transparent hidden lg:block"></div>
                        
                        <div className="space-y-12 lg:space-y-0">
                            {roadmap.map((phase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                >
                                    {/* Year card */}
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                                        <div className="inline-flex items-center gap-3 mb-4 lg:mb-0">
                                            <div className="p-3 bg-gradient-to-r from-indigo-900/30 to-emerald-900/30 rounded-xl">
                                                <Calendar className="text-indigo-400" size={24} />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-white">{phase.year}</div>
                                                <div className="text-gray-400">Target Year</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                                        <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900"></div>
                                    </div>

                                    {/* Content */}
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} mt-4 lg:mt-0`}>
                                        <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                                            <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                                            <ul className="space-y-3">
                                                {phase.milestones.map((milestone, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="p-1 bg-gray-800 rounded mt-1">
                                                            <CheckCircle className="text-emerald-400" size={12} />
                                                        </div>
                                                        <span className="text-gray-300">{milestone}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden"
                        >
                            <div className="p-10">
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                                    <div className="md:w-1/3">
                                        <div className="w-32 h-32 bg-gradient-to-r from-indigo-900/30 to-emerald-900/30 rounded-full flex items-center justify-center mx-auto md:mx-0">
                                            <div className="text-3xl font-bold text-white">KC</div>
                                        </div>
                                    </div>
                                    
                                    <div className="md:w-2/3">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-4">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-gray-300">Founder & CEO</span>
                                        </div>
                                        
                                        <h2 className="text-3xl font-bold text-white mb-2">Kapil Chandel</h2>
                                        <div className="text-lg text-emerald-400 mb-4">Founder & CEO – Techodite Solutions</div>
                                        
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <span className="px-3 py-1 bg-indigo-900/30 text-indigo-400 text-sm rounded-full">AI Research</span>
                                            <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 text-sm rounded-full">Cybersecurity</span>
                                            <span className="px-3 py-1 bg-amber-900/30 text-amber-400 text-sm rounded-full">Product Engineering</span>
                                            <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-sm rounded-full">Entrepreneurship</span>
                                        </div>
                                        
                                        <p className="text-gray-300 leading-relaxed">
                                            With deep expertise in artificial intelligence and cybersecurity, 
                                            Kapil leads Techodite's vision to create intelligent security solutions 
                                            that protect enterprises while enabling innovation. His background in 
                                            AI research and product development drives the company's technical 
                                            excellence and market-focused approach.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-10">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-white mb-4">Start a Conversation</h2>
                                <p className="text-lg text-gray-400">
                                    Interested in partnering with us? Let's discuss opportunities.
                                </p>
                            </div>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-900/30 rounded-full mb-6">
                                        <CheckCircle className="text-emerald-400" size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                                    <p className="text-gray-400 mb-8">
                                        Thank you for your interest. We'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800/30 transition-all"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} id="investor-contact-form" className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                                                placeholder="John Smith"
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                                Company *
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                                                placeholder="+91 9876543210"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            Interest Type *
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                                            {['Investor', 'Strategic Partner', 'Enterprise Alliance'].map((type) => (
                                                <label key={type} className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800/50 transition-all">
                                                    <input
                                                        type="radio"
                                                        name="type"
                                                        value={type.toLowerCase().replace(' ', '_')}
                                                        checked={formData.type === type.toLowerCase().replace(' ', '_')}
                                                        onChange={() => setFormData(prev => ({ ...prev, type: type.toLowerCase().replace(' ', '_') }))}
                                                        className="text-indigo-500 focus:ring-indigo-500"
                                                    />
                                                    <div>
                                                        <div className="font-medium text-white">{type}</div>
                                                        <div className="text-xs text-gray-500">
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
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            How can we help? *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
                                            placeholder="Tell us about your interest, timeline, and any specific questions..."
                                        />
                                    </div>

                                    <div className="pt-6 border-t border-gray-800">
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <div className="text-sm text-gray-500">
                                                We'll respond within 24 hours to both:
                                                <div className="flex items-center gap-4 mt-2">
                                                    <a href="mailto:techodite@gmail.com" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2">
                                                        <Mail size={14} />
                                                        techodite@gmail.com
                                                    </a>
                                                    <a href="mailto:kchandel432@gmail.com" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
                                                        <Mail size={14} />
                                                        kchandel432@gmail.com
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="group px-8 py-4 bg-gradient-to-r from-indigo-700 to-emerald-700 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-700/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send size={18} />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-950 border-t border-gray-900 py-12">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-r from-indigo-700 to-emerald-700 rounded-lg">
                                <Cpu className="text-white" size={20} />
                            </div>
                            <div className="text-lg font-bold text-white">TECHODITE SOLUTIONS</div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
                            <a href="/" className="hover:text-white transition-colors">Home</a>
                            <a href="/about" className="hover:text-white transition-colors">About</a>
                            <a href="/investors" className="hover:text-white transition-colors">Investors</a>
                            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                        </div>
                        
                        <div className="border-t border-gray-900 pt-8">
                            <p className="text-gray-600 text-sm">
                                © 2024 Techodite Solutions Pvt Ltd. Bazarpati Bhadarpur, Burhanpur, Madhya Pradesh 450331
                            </p>
                            <p className="text-gray-600 text-sm mt-2">
                                Contact: +91-9753089649 | Email: techodite@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}