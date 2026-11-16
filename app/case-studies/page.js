'use client'

import { ArrowRight, Building2, ChevronRight, Clock, Factory, Filter, Globe, Hospital, Search, Shield, TrendingUp, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'


const caseStudies = [
    {
        id: 1,
        title: 'Fortifying financial infrastructure against AI-powered attacks',
        client: 'Global Bank Corporation',
        industry: 'Finance',
        icon: <Shield className="text-brand-600 dark:text-brand-400" size={24} strokeWidth={1.5} />,
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
        title: 'Securing healthcare IoT network with edge AI',
        client: 'National Health Services',
        industry: 'Healthcare',
        icon: <Hospital className="text-rose-600 dark:text-rose-400" size={24} strokeWidth={1.5} />,
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
        title: 'Quantum-resistant encryption for government communications',
        client: 'Defense Ministry',
        industry: 'Government',
        icon: <Shield className="text-brand-600 dark:text-brand-400" size={24} strokeWidth={1.5} />,
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
        title: 'AI-driven threat intelligence for e-commerce platform',
        client: 'MegaShop International',
        industry: 'E-commerce',
        icon: <Globe className="text-purple-600 dark:text-purple-400" size={24} strokeWidth={1.5} />,
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
        title: 'Industrial control system protection for manufacturing',
        client: 'AutoManufacture Inc.',
        industry: 'Manufacturing',
        icon: <Factory className="text-amber-600 dark:text-amber-400" size={24} strokeWidth={1.5} />,
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
        title: 'Cloud security modernization for tech giant',
        client: 'TechNova Solutions',
        industry: 'Technology',
        icon: <Building2 className="text-brand-600 dark:text-brand-400" size={24} strokeWidth={1.5} />,
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
        <>
            <Section
                eyebrow="Case Studies"
                title="Success Stories"
                intro="Real-world implementations of our AI and cybersecurity solutions across industries."
            >
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-600 dark:text-ink-300 text-sm font-medium">
                        <TrendingUp size={16} strokeWidth={1.5} />
                        <span>98% Client Satisfaction</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-600 dark:text-ink-300 text-sm font-medium">
                        <Shield size={16} strokeWidth={1.5} />
                        <span>200+ Projects Delivered</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-600 dark:text-ink-300 text-sm font-medium">
                        <Zap size={16} strokeWidth={1.5} />
                        <span>Zero Security Breaches</span>
                    </div>
                </div>
            </Section>

            <Section eyebrow="Explore" title="Browse case studies" intro="">
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 dark:text-ink-500" size={20} strokeWidth={1.5} />
                                <input
                                    type="text"
                                    placeholder="Search case studies..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Filter size={20} strokeWidth={1.5} className="text-ink-400 dark:text-ink-500" />
                            <div className="flex flex-wrap gap-2">
                                {industries.map((industry) => (
                                    <button
                                        key={industry}
                                        onClick={() => setSelectedIndustry(industry)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            selectedIndustry === industry
                                                ? 'bg-brand-600 text-white'
                                                : 'bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:bg-ink-50 dark:hover:bg-ink-700'
                                        }`}
                                    >
                                        {industry === 'all' ? 'All Industries' : industry}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredCases.map((study) => (
                            <Card key={study.id} className="flex flex-col h-full">
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-2 bg-ink-50 dark:bg-ink-800/50 rounded-lg border border-ink-200 dark:border-ink-700 flex-shrink-0">
                                            {study.icon}
                                        </div>
                                        <span className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-500 dark:text-ink-400 font-medium">
                                            {study.industry}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-4">{study.title}</h3>

                                    <div className="mb-6 flex-1">
                                        <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400 mb-2">The Challenge</h4>
                                        <p className="text-sm text-ink-500 dark:text-ink-300">{study.challenge}</p>
                                    </div>

                                    <div className="mb-8 flex-1">
                                        <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400 mb-2">Our Solution</h4>
                                        <p className="text-sm text-ink-500 dark:text-ink-300">{study.solution}</p>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400 mb-4">Results Delivered</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {study.results.map((result, idx) => (
                                                <div key={idx} className="p-4 rounded-lg border border-ink-100 dark:border-ink-800 bg-white/50 dark:bg-white/5 text-center">
                                                    <p className="text-xs text-ink-500 dark:text-ink-400 mb-1">{result.metric}</p>
                                                    <p className="text-xl font-bold text-ink-900 dark:text-white">{result.value}</p>
                                                    {result.improvement && (
                                                        <p className="text-xs text-brand-600 dark:text-brand-400 mt-1 font-medium">{result.improvement}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-ink-100 dark:border-ink-800 mt-auto">
                                        <div className="flex flex-wrap justify-between items-center">
                                            <div className="flex items-center space-x-4 text-xs text-ink-500 dark:text-ink-400">
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} strokeWidth={1.5} />
                                                    {study.duration}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Users size={14} strokeWidth={1.5} />
                                                    {study.team}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                                                {study.technologies.map((tech, idx) => (
                                                    <span key={idx} className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-500 dark:text-ink-400 bg-white dark:bg-ink-800">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <Link
                                                href={`/case-studies/${study.id}`}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 transition-colors"
                                            >
                                                View detailed case study <ChevronRight size={18} strokeWidth={1.5} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {filteredCases.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 flex items-center justify-center">
                                <Search size={32} strokeWidth={1.5} className="text-ink-400 dark:text-ink-500" />
                            </div>
                            <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-3">No case studies found</h3>
                            <p className="text-sm text-ink-500 dark:text-ink-300">Try adjusting your search criteria</p>
                        </div>
                    )}
                </div>

                <div className="mt-16">
                    <div className="rounded-xl border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 p-10 text-center">
                        <h2 className="text-2xl font-bold text-brand-900 dark:text-white mb-6">Ready to write your success story?</h2>
                        <p className="text-sm text-brand-700 dark:text-brand-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Contact us to discuss how our AI and cybersecurity solutions can transform your organization's security posture.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild>
                                <a href="/contact">Schedule Security Assessment</a>
                            </Button>
                            <Button variant="secondary" asChild>
                                <a href="/contact">Request Case Study Consultation</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}
