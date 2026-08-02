'use client'

import { motion, useAnimation } from 'framer-motion'
import {
    ArrowRight,
    BarChart3,
    Brain,
    CheckCircle,
    Cloud,
    Cpu,
    Globe,
    Lock,
    Server,
    Shield,
    ShieldCheck,
    Users,
    Zap
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HomePage() {
    const [activeTab, setActiveTab] = useState('ai')
    const controls = useAnimation()

    useEffect(() => {
        controls.start('visible')
    }, [controls])

    const solutions = {
        ai: [
            {
                title: "Machine Learning Solutions",
                description: "Custom ML models for predictive analytics and automation",
                icon: <Brain className="text-blue-500" size={24} />,
                features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Decision Making"]
            },
            {
                title: "AI Research & Development",
                description: "Cutting-edge research in neural networks and deep learning",
                icon: <Cpu className="text-emerald-500" size={24} />,
                features: ["Neural Architecture", "Deep Learning", "Reinforcement Learning", "Generative Models"]
            }
        ],
        cybersecurity: [
            {
                title: "Enterprise Security",
                description: "End-to-end security solutions for modern enterprises",
                icon: <Shield className="text-red-500" size={24} />,
                features: ["Threat Intelligence", "Vulnerability Management", "Incident Response", "Risk Assessment"]
            },
            {
                title: "Cloud Security",
                description: "Multi-cloud security and compliance management",
                icon: <Cloud className="text-purple-500" size={24} />,
                features: ["AWS/Azure/GCP Security", "Container Security", "DevSecOps", "Compliance Automation"]
            }
        ],
        consulting: [
            {
                title: "AI Strategy Consulting",
                description: "Strategic AI implementation and roadmap development",
                icon: <BarChart3 className="text-amber-500" size={24} />,
                features: ["AI Readiness", "Implementation Roadmap", "ROI Analysis", "Team Training"]
            },
            {
                title: "Security Architecture",
                description: "Design and implementation of secure system architectures",
                icon: <Server className="text-cyan-500" size={24} />,
                features: ["Zero Trust Architecture", "Identity Management", "Network Security", "Data Protection"]
            }
        ]
    }

    const stats = [
        { value: '99.9%', label: 'Uptime SLA', icon: <Zap className="text-amber-500" size={20} /> },
        { value: '50+', label: 'Enterprise Clients', icon: <Users className="text-blue-500" size={20} /> },
        { value: '25+', label: 'Countries Served', icon: <Globe className="text-emerald-500" size={20} /> },
        { value: '0', label: 'Major Breaches', icon: <ShieldCheck className="text-red-500" size={20} /> }
    ]

    const technologies = [
        { name: 'TensorFlow', category: 'AI/ML' },
        { name: 'PyTorch', category: 'AI/ML' },
        { name: 'Kubernetes', category: 'Cloud' },
        { name: 'Docker', category: 'Cloud' },
        { name: 'AWS Security', category: 'Security' },
        { name: 'Azure Sentinel', category: 'Security' },
        { name: 'ELK Stack', category: 'Analytics' },
        { name: 'Prometheus', category: 'Monitoring' }
    ]

    const caseStudies = [
        {
            client: 'Fortune 500 Bank',
            challenge: 'Real-time fraud detection with high accuracy',
            solution: 'Custom ML model for transaction analysis',
            results: ['95% fraud detection rate', '60% reduction in false positives', 'Real-time processing']
        },
        {
            client: 'Healthcare Provider',
            challenge: 'Patient data security and HIPAA compliance',
            solution: 'End-to-end encryption and access control',
            results: ['Zero data breaches', '100% HIPAA compliance', '60% faster access control']
        },
        {
            client: 'E-commerce Giant',
            challenge: 'Scalable AI recommendations',
            solution: 'Distributed ML inference engine',
            results: ['40% increase in conversions', 'Sub-100ms response time', '99.99% availability']
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-emerald-900/10" />
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-6">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="text-sm text-slate-300">Enterprise AI & Cybersecurity</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                                <span className="block text-white">Secure AI</span>
                                <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                    For The Enterprise
                                </span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                We deliver cutting-edge artificial intelligence solutions protected by
                                enterprise-grade security, helping organizations innovate safely in
                                the digital age.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                                >
                                    Schedule Demo
                                    <ArrowRight size={20} />
                                </Link>
                                <Link
                                    href="#solutions"
                                    className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800/30 hover:border-slate-500 transition-all"
                                >
                                    Explore Solutions
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 blur-3xl" />
                            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-6">
                                        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                                            <div className="p-3 bg-blue-900/30 rounded-lg w-fit mb-4">
                                                <Brain className="text-blue-400" size={24} />
                                            </div>
                                            <h3 className="text-white font-semibold mb-2">AI Solutions</h3>
                                            <p className="text-sm text-slate-400">Enterprise-grade ML models</p>
                                        </div>
                                        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                                            <div className="p-3 bg-emerald-900/30 rounded-lg w-fit mb-4">
                                                <ShieldCheck className="text-emerald-400" size={24} />
                                            </div>
                                            <h3 className="text-white font-semibold mb-2">Compliance</h3>
                                            <p className="text-sm text-slate-400">GDPR, ISO 27001, SOC2</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6 mt-12">
                                        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                                            <div className="p-3 bg-red-900/30 rounded-lg w-fit mb-4">
                                                <Lock className="text-red-400" size={24} />
                                            </div>
                                            <h3 className="text-white font-semibold mb-2">Cybersecurity</h3>
                                            <p className="text-sm text-slate-400">Threat intelligence & protection</p>
                                        </div>
                                        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                                            <div className="p-3 bg-purple-900/30 rounded-lg w-fit mb-4">
                                                <Cloud className="text-purple-400" size={24} />
                                            </div>
                                            <h3 className="text-white font-semibold mb-2">Cloud Security</h3>
                                            <p className="text-sm text-slate-400">Multi-cloud protection</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-slate-900/30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-800/50 rounded-lg mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section id="solutions" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Enterprise Solutions</h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Integrated AI and security solutions for modern enterprise challenges
                        </p>
                    </div>

                    {/* Solution Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['ai', 'cybersecurity', 'consulting'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === tab
                                    ? 'bg-gradient-to-r from-blue-700 to-emerald-700 text-white'
                                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
                                    }`}
                            >
                                {tab === 'ai' && 'AI & Machine Learning'}
                                {tab === 'cybersecurity' && 'Cybersecurity'}
                                {tab === 'consulting' && 'Consulting'}
                            </button>
                        ))}
                    </div>

                    {/* Solution Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions[activeTab].map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-800 p-8 hover:border-slate-700 transition-all group"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-slate-800/50 rounded-lg">
                                        {solution.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                                        <p className="text-slate-400">{solution.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle className="text-emerald-500" size={16} />
                                            <span className="text-slate-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-800">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                                    >
                                        Learn more
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section id="technologies" className="py-20 bg-slate-900/20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Built with cutting-edge technologies for enterprise-grade performance
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-800 p-6 text-center hover:border-slate-700 transition-all"
                            >
                                <div className="text-2xl font-bold text-white mb-2">{tech.name}</div>
                                <div className="text-sm text-slate-400">{tech.category}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section id="case-studies" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Enterprise Success Stories</h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Real-world solutions delivering measurable business impact
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-800 p-8 hover:border-slate-700 transition-all"
                            >
                                <div className="mb-6">
                                    <div className="text-lg font-bold text-white mb-2">{study.client}</div>
                                    <p className="text-slate-400 text-sm mb-4">{study.challenge}</p>
                                    <div className="text-sm text-blue-400">{study.solution}</div>
                                </div>

                                <div className="space-y-3">
                                    <div className="text-sm font-medium text-slate-300">Results:</div>
                                    {study.results.map((result, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                            <span className="text-sm text-slate-400">{result}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-20 bg-gradient-to-r from-slate-900/50 via-slate-900/30 to-slate-900/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Transform Your Enterprise?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            Schedule a consultation with our experts to discuss your AI and security needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-600/20 transition-all"
                            >
                                Request Enterprise Demo
                            </Link>
                            <Link
                                href="/about"
                                className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800/30 hover:border-slate-500 transition-all"
                            >
                                Learn About Our Company
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
