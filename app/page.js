'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { 
    Shield, 
    Cpu, 
    Cloud, 
    Lock, 
    Brain, 
    BarChart3,
    ArrowRight,
    CheckCircle,
    Users,
    Globe,
    Server,
    Code,
    Sparkles,
    Zap,
    Eye,
    ShieldCheck,
    Target,
    Network,
    Database,
    Terminal,
    Briefcase,
    Award,
    Clock,
    Scale,
    Infinity as Infinite,
    ChevronRight
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
    const [activeSolution, setActiveSolution] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        controls.start('visible')
        return () => window.removeEventListener('scroll', handleScroll)
    }, [controls])

    const solutions = [
        {
            id: 1,
            category: "AI & Machine Learning",
            title: "Enterprise AI Solutions",
            description: "Custom artificial intelligence systems designed for enterprise scalability and performance.",
            icon: <Brain className="text-indigo-400" size={24} />,
            features: [
                "Predictive Analytics Platform",
                "Natural Language Processing",
                "Computer Vision Systems",
                "Automated Decision Intelligence"
            ],
            color: "from-indigo-500/10 via-indigo-600/5 to-transparent",
            border: "border-indigo-800/30"
        },
        {
            id: 2,
            category: "Cybersecurity",
            title: "Advanced Threat Protection",
            description: "Comprehensive security solutions protecting digital assets across all attack vectors.",
            icon: <ShieldCheck className="text-emerald-400" size={24} />,
            features: [
                "Zero Trust Architecture",
                "Real-time Threat Intelligence",
                "Advanced Endpoint Protection",
                "Security Orchestration & Automation"
            ],
            color: "from-emerald-500/10 via-emerald-600/5 to-transparent",
            border: "border-emerald-800/30"
        },
        {
            id: 3,
            category: "Cloud Security",
            title: "Multi-Cloud Security",
            description: "Unified security management across AWS, Azure, GCP, and hybrid environments.",
            icon: <Cloud className="text-sky-400" size={24} />,
            features: [
                "Cloud Security Posture Management",
                "Container & Kubernetes Security",
                "Serverless Protection",
                "Compliance Automation"
            ],
            color: "from-sky-500/10 via-sky-600/5 to-transparent",
            border: "border-sky-800/30"
        }
    ]

    const enterpriseStats = [
        { value: '99.99%', label: 'System Availability', subtext: 'Enterprise SLA', icon: <Clock className="text-indigo-400" size={20} /> },
        { value: '0', label: 'Security Breaches', subtext: 'Since inception', icon: <Shield className="text-emerald-400" size={20} /> },
        { value: '50+', label: 'Global Enterprises', subtext: '', icon: <Briefcase className="text-sky-400" size={20} /> },
        { value: 'ISO 27001', label: 'Certified', subtext: 'Information Security', icon: <Award className="text-amber-400" size={20} /> }
    ]

    const services = [
        {
            title: "AI Research & Development",
            description: "Advanced ML model development and neural network research",
            icon: <Brain className="text-indigo-400" size={20} />,
            tags: ["Deep Learning", "Neural Networks", "Generative AI"]
        },
        {
            title: "Security Architecture",
            description: "Design and implementation of enterprise security frameworks",
            icon: <Network className="text-emerald-400" size={20} />,
            tags: ["Zero Trust", "Identity Management", "Access Control"]
        },
        {
            title: "Compliance & Governance",
            description: "Regulatory compliance and risk management programs",
            icon: <Scale className="text-sky-400" size={20} />,
            tags: ["GDPR", "SOC2", "HIPAA", "PCI DSS"]
        },
        {
            title: "Cloud Transformation",
            description: "Secure cloud migration and optimization strategies",
            icon: <Cloud className="text-amber-400" size={20} />,
            tags: ["AWS", "Azure", "GCP", "Hybrid Cloud"]
        },
        {
            title: "Incident Response",
            description: "24/7 security monitoring and rapid response services",
            icon: <Zap className="text-rose-400" size={20} />,
            tags: ["Threat Hunting", "Forensics", "Containment"]
        },
        {
            title: "Data Intelligence",
            description: "Advanced analytics and business intelligence platforms",
            icon: <Database className="text-violet-400" size={20} />,
            tags: ["Big Data", "Analytics", "BI Dashboards"]
        }
    ]

    const industries = [
        { name: "Financial Services", icon: "🏦",   },
        { name: "Healthcare", icon: "🏥",  },
        { name: "Technology", icon: "💻",  },
        { name: "Manufacturing", icon: "🏭",  },
        { name: "Retail", icon: "🛒",  },
        { name: "Government", icon: "🏛️", },
        {name:"and many more"}
    ]

    const testimonials = [
        {
            quote: "Techodite's AI solutions reduced our fraud detection time by 85% while maintaining 99.9% accuracy.",
            author: "Global Banking Group",
            role: "Chief Security Officer",
            company: "Fortune 500 Bank"
        },
        {
            quote: "Their cybersecurity framework ensured zero compliance violations during our international expansion.",
            author: "Healthcare Provider Network",
            role: "CTO",
            company: "US Healthcare Leader"
        },
        {
            quote: "The cloud security implementation seamlessly integrated with our multi-vendor environment.",
            author: "Technology Conglomerate",
            role: "Cloud Director",
            company: "Global Tech Company"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
            {/* Navigation - Ultra Professional */}
            <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 z-50">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-emerald-600 blur-lg opacity-30"></div>
                                <div className="relative p-2 bg-gray-900 rounded-lg border border-gray-800">
                                    <Cpu className="text-white" size={22} />
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white tracking-tight">TECHODITE</div>
                                <div className="text-xs text-gray-400 tracking-wider">SOLUTIONS PVT LTD</div>
                            </div>
                        </div>
                        
                        <div className="hidden lg:flex items-center gap-1">
                            {['Solutions', 'Industries', 'Case Studies', 'Technology', 'Company'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg text-sm font-medium transition-all"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <a 
                                href="tel:+919753089649" 
                                className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white text-sm px-4 py-2 hover:bg-gray-800/50 rounded-lg transition-all"
                            >
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                +91 97530 89649
                            </a>
                            <Link 
                                href="/contact"
                                className="px-5 py-2.5 bg-gradient-to-r from-indigo-700 to-emerald-700 text-white text-sm font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-700/20 transition-all flex items-center gap-2"
                            >
                                <Briefcase size={16} />
                                Enterprise Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Ultra Professional */}
            <section className="relative pt-36 pb-24 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
                
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-900/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-emerald-900/10 to-transparent rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-full border border-gray-800 mb-8">
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-300 tracking-wider">ENTERPRISE AI & CYBERSECURITY</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
                            <span className="block text-gray-100 mb-2">Intelligent Security</span>
                            <span className="block bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                                For Modern Enterprises
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
                            We architect secure artificial intelligence systems that drive innovation while 
                            protecting enterprise assets through cutting-edge cybersecurity frameworks.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Link
                                href="/contact"
                                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-700 to-emerald-700 text-white font-semibold rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-indigo-700/30"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="relative flex items-center justify-center gap-3">
                                    Request Enterprise Demo
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </span>
                            </Link>
                            <Link
                                href="#solutions"
                                className="px-8 py-4 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-800/30 hover:border-gray-600 transition-all"
                            >
                                Explore Solutions
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-800">
                                <ShieldCheck className="text-emerald-400" size={16} />
                                <span className="text-sm text-gray-300">ISO 27001 Certified</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-800">
                                <Award className="text-amber-400" size={16} />
                                <span className="text-sm text-gray-300">GDPR Compliant</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-800">
                                <Users className="text-sky-400" size={16} />
                                <span className="text-sm text-gray-300">50+ Enterprise Clients</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Enterprise Stats */}
            <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-950">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {enterpriseStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-all group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-gray-800 transition-colors">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                                </div>
                                <div className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</div>
                                <div className="text-xs text-gray-500">{stat.subtext}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Solutions - Interactive */}
            <section id="solutions" className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-white mb-4">Core Enterprise Solutions</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Integrated platforms combining artificial intelligence with enterprise-grade security
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {solutions.map((solution, index) => (
                            <motion.button
                                key={solution.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setActiveSolution(index)}
                                className={`p-6 rounded-xl border text-left transition-all ${
                                    activeSolution === index
                                        ? `${solution.border} bg-gradient-to-br ${solution.color}`
                                        : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'
                                }`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-lg ${
                                        activeSolution === index ? 'bg-gray-800/50' : 'bg-gray-800/30'
                                    }`}>
                                        {solution.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider">{solution.category}</div>
                                        <div className="text-xl font-bold text-white">{solution.title}</div>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-300">View Details</span>
                                    <ChevronRight className={`transition-transform ${
                                        activeSolution === index ? 'translate-x-1 text-white' : 'text-gray-500'
                                    }`} size={16} />
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Active Solution Details */}
                    <motion.div
                        key={solutions[activeSolution].id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-8"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">{solutions[activeSolution].title}</h3>
                                <div className="space-y-4">
                                    {solutions[activeSolution].features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="p-1 bg-gray-800 rounded">
                                                <CheckCircle className="text-emerald-400" size={14} />
                                            </div>
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 mt-8 text-indigo-400 hover:text-indigo-300 font-medium"
                                >
                                    Request Technical Brief
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 p-6">
                                <h4 className="text-lg font-semibold text-white mb-4">Enterprise Benefits</h4>
                                <ul className="space-y-3">
                                    <li className="text-gray-400 text-sm">• Reduced operational costs by up to 40%</li>
                                    <li className="text-gray-400 text-sm">• Improved security posture by 85%</li>
                                    <li className="text-gray-400 text-sm">• Scalable architecture supporting 1M+ transactions/day</li>
                                    <li className="text-gray-400 text-sm">• 24/7 enterprise support with 15-minute SLA</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="industries" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Services</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            End-to-end solutions tailored for enterprise digital transformation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: Math.floor(index / 3) * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-all"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-gray-800 transition-colors">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                        <p className="text-sm text-gray-400">{service.description}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Delivering specialized solutions across diverse sectors
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6 text-center hover:border-gray-700 transition-all group"
                            >
                                <div className="text-3xl mb-3">{industry.icon}</div>
                                <div className="text-sm font-semibold text-white mb-1">{industry.name}</div>
                                <div className="text-xs text-gray-500">{industry.count} clients</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-white mb-4">Enterprise Recognition</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Trusted by industry leaders for mission-critical implementations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-50"></div>
                                <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 h-full">
                                    <div className="text-4xl text-gray-800 mb-6">"</div>
                                    <p className="text-gray-300 mb-8 leading-relaxed">{testimonial.quote}</p>
                                    <div className="border-t border-gray-800 pt-6">
                                        <div className="font-semibold text-white">{testimonial.author}</div>
                                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                                        <div className="text-xs text-gray-500 mt-1">{testimonial.company}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative overflow-hidden rounded-2xl">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-gray-900/50 to-emerald-900/20"></div>
                            
                            {/* Content */}
                            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 p-12 text-center">
                                <h2 className="text-4xl font-bold text-white mb-6">
                                    Begin Your Enterprise Transformation
                                </h2>
                                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Schedule a consultation with our enterprise architects to develop your 
                                    custom AI and security roadmap.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-gradient-to-r from-indigo-700 to-emerald-700 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-indigo-700/30 transition-all"
                                    >
                                        Schedule Executive Briefing
                                    </Link>
                                    <a
                                        href="tel:+919753089649"
                                        className="px-8 py-4 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-800/30 hover:border-gray-600 transition-all flex items-center justify-center gap-2"
                                    >
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                        Call +91 97530 89649
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer - Ultra Professional */}
            <footer className="bg-gray-950 border-t border-gray-900 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-gradient-to-r from-indigo-700 to-emerald-700 rounded-lg">
                                    <Cpu className="text-white" size={20} />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-white">TECHODITE</div>
                                    <div className="text-xs text-gray-500 tracking-wider">SOLUTIONS PVT LTD</div>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Enterprise-grade AI and cybersecurity solutions for global organizations.
                            </p>
                            <div className="text-xs text-gray-500">
                                © 2024 Techodite Solutions Pvt Ltd.<br/>
                                All rights reserved.
                            </div>
                        </div>
                        
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-6 tracking-wider">SOLUTIONS</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">AI & Machine Learning</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cybersecurity Services</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cloud Security</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Compliance & Governance</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Incident Response</a></li>
                            </ul>
                        </div>
                        
                        {/* Company */}
                        <div>
                            <h3 className="text-white font-semibold mb-6 tracking-wider">COMPANY</h3>
                            <ul className="space-y-3">
                                <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Leadership</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">News & Insights</a></li>
                                <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        
                        {/* Contact */}
                        <div>
                            <h3 className="text-white font-semibold mb-6 tracking-wider">CONTACT</h3>
                            <ul className="space-y-4">
                                <li className="text-gray-400 text-sm flex items-center gap-3">
                                    <Briefcase size={14} className="text-gray-500" />
                                    contact@techodite.com
                                </li>
                                <li className="text-gray-400 text-sm flex items-center gap-3">
                                    <Phone size={14} className="text-gray-500" />
                                    +91 97530 89649
                                </li>
                                <li className="text-gray-400 text-sm flex items-center gap-3">
                                    <MapPin size={14} className="text-gray-500" />
                                    Bazarpati Bhadarpur,<br/>Burhanpur, MP 450331
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

// Phone icon component
function Phone({ size = 16, className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}

// MapPin icon component
function MapPin({ size = 16, className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}