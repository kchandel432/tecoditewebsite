'use client'

import { motion } from 'framer-motion'
import {
    Ban,
    Building2,
    ChevronRight,
    Clock,
    Factory,
    Filter,
    Globe,
    Hospital,
    Search,
    Shield,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react'
import { useState } from 'react'

const caseStudies = [
    {
        id: 1,
        title: 'Fortifying Financial Infrastructure Against AI-Powered Attacks',
        client: 'Global Bank Corporation',
        industry: 'Finance',
        icon: <Ban className="text-green-400" size={24} />,
        challenge: 'Facing sophisticated AI-powered fraud attacks targeting their transaction systems.',
        solution: 'Deployed our Sentinel AI platform with deep learning anomaly detection.',
        results: [
            { metric: 'Fraud Detection', value: '99.7%', improvement: '+45%' },
            { metric: 'False Positives', value: 'Reduced by', improvement: '78%' },
            { metric: 'Response Time', value: '2.3 seconds', improvement: '-92%' },
            { metric: 'Annual Savings', value: '$8.2M', improvement: '' }
        ],
        duration: '6 months',
        team: '12 experts',
        technologies: ['Deep Learning', 'Real-time Analytics', 'Blockchain']
    },
    {
        id: 2,
        title: 'Securing Healthcare IoT Network with Edge AI',
        client: 'National Health Services',
        industry: 'Healthcare',
        icon: <Hospital className="text-red-400" size={24} />,
        challenge: 'Vulnerable IoT medical devices posing patient safety risks.',
        solution: 'Implemented EdgeGuard framework with device authentication and real-time monitoring.',
        results: [
            { metric: 'Security Incidents', value: 'Reduced by', improvement: '94%' },
            { metric: 'Device Compliance', value: '100%', improvement: '+60%' },
            { metric: 'System Uptime', value: '99.99%', improvement: '+15%' },
            { metric: 'Patient Safety', value: 'Enhanced', improvement: '' }
        ],
        duration: '8 months',
        team: '8 experts',
        technologies: ['Edge Computing', 'IoT Security', 'Lightweight Cryptography']
    },
    {
        id: 3,
        title: 'Quantum-Resistant Encryption for Government Communications',
        client: 'Defense Ministry',
        industry: 'Government',
        icon: <Shield className="text-blue-400" size={24} />,
        challenge: 'Need for quantum-safe encryption for classified communications.',
        solution: 'Deployed QuantumShield with lattice-based cryptography.',
        results: [
            { metric: 'Encryption Strength', value: 'Quantum-safe', improvement: '' },
            { metric: 'Performance Impact', value: '15%', improvement: '-5% vs traditional' },
            { metric: 'Compliance', value: '100%', improvement: '' },
            { metric: 'Future-proof', value: '20+ years', improvement: '' }
        ],
        duration: '12 months',
        team: '15 experts',
        technologies: ['Post-Quantum Cryptography', 'Hardware Security', 'Key Management']
    },
    {
        id: 4,
        title: 'AI-Driven Threat Intelligence for E-commerce Platform',
        client: 'MegaShop International',
        industry: 'E-commerce',
        icon: <Globe className="text-purple-400" size={24} />,
        challenge: 'Coordinated bot attacks and credential stuffing affecting millions of users.',
        solution: 'Integrated AISecure with behavioral analytics and bot detection.',
        results: [
            { metric: 'Account Takeovers', value: 'Prevented 98%', improvement: '' },
            { metric: 'Bot Traffic', value: 'Blocked 99.5%', improvement: '' },
            { metric: 'User Trust', value: 'Increased', improvement: '+40%' },
            { metric: 'Revenue Protection', value: '$12M', improvement: '' }
        ],
        duration: '4 months',
        team: '6 experts',
        technologies: ['Machine Learning', 'Behavioral Analysis', 'Real-time Blocking']
    },
    {
        id: 5,
        title: 'Industrial Control System Protection for Manufacturing',
        client: 'AutoManufacture Inc.',
        industry: 'Manufacturing',
        icon: <Factory className="text-yellow-400" size={24} />,
        challenge: 'Vulnerable SCADA systems risking production lines.',
        solution: 'Custom ICS security solution with anomaly detection and air-gapped backups.',
        results: [
            { metric: 'Production Downtime', value: 'Reduced by', improvement: '99%' },
            { metric: 'Security Patches', value: 'Automated', improvement: '100%' },
            { metric: 'Compliance Score', value: '98/100', improvement: '+45 points' },
            { metric: 'Insurance Premium', value: 'Reduced 30%', improvement: '' }
        ],
        duration: '10 months',
        team: '10 experts',
        technologies: ['ICS Security', 'Air Gap Technology', 'Predictive Maintenance']
    },
    {
        id: 6,
        title: 'Cloud Security Modernization for Tech Giant',
        client: 'TechNova Solutions',
        industry: 'Technology',
        icon: <Building2 className="text-cyan-400" size={24} />,
        challenge: 'Legacy security tools failing in multi-cloud environment.',
        solution: 'CloudSentinel deployment with zero-trust architecture.',
        results: [
            { metric: 'Security Coverage', value: '100% multi-cloud', improvement: '' },
            { metric: 'Incident Response', value: 'Automated 85%', improvement: '' },
            { metric: 'Cost Optimization', value: 'Saved 35%', improvement: '' },
            { metric: 'Compliance Audit', value: 'Reduced time by', improvement: '70%' }
        ],
        duration: '7 months',
        team: '14 experts',
        technologies: ['Zero Trust', 'Cloud Security', 'Automation']
    }
]

export default function CaseStudiesPage() {
    const [selectedIndustry, setSelectedIndustry] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    const industries = ['all', 'Finance', 'Healthcare', 'Government', 'E-commerce', 'Manufacturing', 'Technology']

    const filteredCases = caseStudies.filter(study => {
        const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry
        const matchesSearch = searchQuery === '' ||
            study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.client.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesIndustry && matchesSearch
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Success Stories
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Real-world implementations of our AI and cybersecurity solutions across various industries.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <div className="flex items-center px-4 py-2 bg-green-900/30 rounded-full">
                            <TrendingUp size={16} className="text-green-400 mr-2" />
                            <span className="text-green-400">98% Client Satisfaction</span>
                        </div>
                        <div className="flex items-center px-4 py-2 bg-blue-900/30 rounded-full">
                            <Shield size={16} className="text-blue-400 mr-2" />
                            <span className="text-blue-400">200+ Projects Delivered</span>
                        </div>
                        <div className="flex items-center px-4 py-2 bg-purple-900/30 rounded-full">
                            <Zap size={16} className="text-purple-400 mr-2" />
                            <span className="text-purple-400">Zero Security Breaches</span>
                        </div>
                    </div>
                </motion.div>

                {/* Filters */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search case studies..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Filter size={20} className="text-gray-500" />
                            <div className="flex flex-wrap gap-2">
                                {industries.map((industry) => (
                                    <button
                                        key={industry}
                                        onClick={() => setSelectedIndustry(industry)}
                                        className={`px-4 py-2 rounded-lg transition-all ${selectedIndustry === industry
                                            ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                            }`}
                                    >
                                        {industry === 'all' ? 'All Industries' : industry}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Case Studies Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredCases.map((study) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all group"
                            >
                                <div className="p-8">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 bg-gray-900/50 rounded-xl">
                                            {study.icon}
                                        </div>
                                        <span className="px-3 py-1 bg-gray-900/50 text-gray-300 rounded-full text-sm">
                                            {study.industry}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {study.title}
                                    </h3>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-2">The Challenge</h4>
                                        <p className="text-gray-300">{study.challenge}</p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Our Solution</h4>
                                        <p className="text-gray-300">{study.solution}</p>
                                    </div>

                                    {/* Results */}
                                    <div className="mb-8">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-4">Results Delivered</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {study.results.map((result, idx) => (
                                                <div key={idx} className="text-center p-3 bg-gray-900/50 rounded-lg">
                                                    <p className="text-sm text-gray-400 mb-1">{result.metric}</p>
                                                    <p className="text-xl font-bold text-white">{result.value}</p>
                                                    {result.improvement && (
                                                        <p className="text-sm text-green-400 mt-1">{result.improvement}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="pt-6 border-t border-gray-700">
                                        <div className="flex flex-wrap justify-between items-center">
                                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                                                <span className="flex items-center">
                                                    <Clock size={14} className="mr-1" />
                                                    {study.duration}
                                                </span>
                                                <span className="flex items-center">
                                                    <Users size={14} className="mr-1" />
                                                    {study.team}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                                                {study.technologies.map((tech, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-gray-900/50 text-gray-300 rounded-full text-xs">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* View Details */}
                                    <div className="mt-6">
                                        <a
                                            href={`/case-studies/${study.id}`}
                                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 group"
                                        >
                                            <span>View detailed case study</span>
                                            <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredCases.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="text-gray-500" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">No case studies found</h3>
                            <p className="text-gray-400">Try adjusting your search criteria</p>
                        </div>
                    )}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-12 border border-cyan-800/30">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Contact us to discuss how our AI and cybersecurity solutions can transform your organization's security posture.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
                            >
                                Schedule Security Assessment
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-bold hover:bg-cyan-400/10 transition-all"
                            >
                                Request Case Study Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}