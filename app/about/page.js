'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatBand } from '@/components/ui/StatBand'


const stats = [
    { value: '99.99%', label: 'Platform availability' },
    { value: '0', label: 'Reported breaches' },
    { value: '50+', label: 'Enterprise clients' },
    { value: '12', label: 'Countries served' },
]

const solutions = {
    ai: [
        {
            title: 'Machine Learning Solutions',
            description: 'Custom ML models for predictive analytics and automation.',
            features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making'],
        },
        {
            title: 'AI Research & Development',
            description: 'Research in neural networks and deep learning.',
            features: ['Neural Architecture', 'Deep Learning', 'Reinforcement Learning', 'Generative Models'],
        },
    ],
    cybersecurity: [
        {
            title: 'Enterprise Security',
            description: 'End-to-end security solutions for modern enterprises.',
            features: ['Threat Intelligence', 'Vulnerability Management', 'Incident Response', 'Risk Assessment'],
        },
        {
            title: 'Cloud Security',
            description: 'Multi-cloud security and compliance management.',
            features: ['AWS/Azure/GCP Security', 'Container Security', 'DevSecOps', 'Compliance Automation'],
        },
    ],
    consulting: [
        {
            title: 'AI Strategy Consulting',
            description: 'Strategic AI implementation and roadmap development.',
            features: ['AI Readiness', 'Implementation Roadmap', 'ROI Analysis', 'Team Training'],
        },
        {
            title: 'Security Architecture',
            description: 'Design and implementation of secure system architectures.',
            features: ['Zero Trust Architecture', 'Identity Management', 'Network Security', 'Data Protection'],
        },
    ],
}

const caseStudies = [
    {
        client: 'Fortune 500 Bank',
        challenge: 'Real-time fraud detection with high accuracy.',
        solution: 'Custom ML model for transaction analysis.',
        results: ['95% fraud detection rate', '60% reduction in false positives', 'Real-time processing'],
    },
    {
        client: 'Healthcare Provider',
        challenge: 'Patient data security and HIPAA compliance.',
        solution: 'End-to-end encryption and access control.',
        results: ['Zero data breaches', '100% HIPAA compliance', '60% faster access control'],
    },
    {
        client: 'E-commerce Giant',
        challenge: 'Scalable AI recommendations.',
        solution: 'Distributed ML inference engine.',
        results: ['40% increase in conversions', 'Sub-100ms response time', '99.99% availability'],
    },
]

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState('ai')

    return (
        <>
            <Section
                eyebrow="About Techodite"
                title="Enterprise security and AI, engineered for scale."
                intro="We help regulated organizations modernize security operations, deploy production AI, and meet compliance obligations — without slowing delivery."
            >
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="h2 mb-4">Secure AI for the modern enterprise</h2>
                        <p className="lead mb-6">
                            Techodite partners with financial services, healthcare, and government organizations
                            to deploy AI and cybersecurity programmes that meet enterprise standards for
                            reliability, compliance, and scale.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button>Talk to sales</Button>
                            <Button variant="secondary" asChild>
                                <a href="/case-studies">View case studies</a>
                            </Button>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800 p-2 shadow-card">
                            <img
                                src="/data-shield.jpg"
                                alt="Techodite platform overview illustrated with a data security shield graphic on the about page"
                                loading="lazy"
                                className="rounded-lg w-full"
                                width={800}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </Section>

            <Section eyebrow="Trust" title="Enterprise-grade reliability" intro="">
                <StatBand items={stats} />
            </Section>

            <Section
                id="solutions"
                className="scroll-mt-24"
                eyebrow="Solutions"
                title="Enterprise solutions"
                intro="Integrated AI and security solutions for modern enterprise challenges."
            >
                <div className="flex flex-wrap gap-3 mb-10">
                    {['ai', 'cybersecurity', 'consulting'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                                activeTab === tab
                                    ? 'border-brand-600 bg-brand-600 text-white'
                                    : 'border-ink-200 text-ink-600 hover:border-ink-300 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-800'
                            }`}
                        >
                            {tab === 'ai' && 'AI & Machine Learning'}
                            {tab === 'cybersecurity' && 'Cybersecurity'}
                            {tab === 'consulting' && 'Consulting'}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solutions[activeTab].map((solution) => (
                        <Card key={solution.title}>
                            <div className="flex items-start gap-4 mb-4">
                                <CheckCircle className="text-brand-600 dark:text-brand-400 flex-shrink-0" size={20} strokeWidth={1.5} />
                                <div>
                                    <h3 className="h3 mb-1">{solution.title}</h3>
                                    <p className="text-sm text-ink-500 dark:text-ink-300">{solution.description}</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                {solution.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <span className="text-brand-600 dark:text-brand-400 flex-shrink-0" style={{ width: '0.75em', height: '0.75em', borderRadius: '9999px', background: 'currentColor' }} />
                                        <span className="text-sm text-ink-500 dark:text-ink-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-ink-100 dark:border-ink-800">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 transition-colors"
                                >
                                    Learn more <ArrowRight size={16} strokeWidth={1.5} />
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow="Technology"
                title="Technology stack"
                intro="Built with proven technologies for enterprise-grade performance."
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: 'TensorFlow', category: 'AI/ML' },
                        { name: 'PyTorch', category: 'AI/ML' },
                        { name: 'Kubernetes', category: 'Cloud' },
                        { name: 'Docker', category: 'Cloud' },
                        { name: 'AWS Security', category: 'Security' },
                        { name: 'Azure Sentinel', category: 'Security' },
                        { name: 'ELK Stack', category: 'Analytics' },
                        { name: 'Prometheus', category: 'Monitoring' },
                    ].map((tech) => (
                        <Card key={tech.name}>
                            <div className="text-2xl font-bold text-ink-900 dark:text-white mb-1">{tech.name}</div>
                            <div className="text-sm text-ink-500 dark:text-ink-300">{tech.category}</div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section
                id="case-studies"
                className="scroll-mt-24"
                eyebrow="Case Studies"
                title="Enterprise success stories"
                intro="Real-world solutions delivering measurable business impact."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {caseStudies.map((study) => (
                        <Card key={study.client}>
                            <div className="mb-4">
                                <div className="text-sm font-semibold text-ink-900 dark:text-white mb-1">{study.client}</div>
                                <p className="text-xs text-ink-500 dark:text-ink-300">{study.challenge}</p>
                                <p className="text-xs text-brand-600 dark:text-brand-400 mt-1">{study.solution}</p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-xs font-semibold text-ink-500 dark:text-ink-400 mb-1">Results:</div>
                                {study.results.map((result) => (
                                    <div key={result} className="flex items-start gap-2">
                                        <span className="text-brand-600 dark:text-brand-400 flex-shrink-0" style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', background: 'currentColor', marginTop: '0.35rem' }} />
                                        <span className="text-sm text-ink-500 dark:text-ink-300">{result}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <section className="border-t border-ink-100 dark:border-ink-800 bg-ink-50 dark:bg-ink-800">
                <Section eyebrow="Contact" title="Ready to transform your enterprise?" intro="Schedule a consultation with our experts to discuss your AI and security needs." className="py-0">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button>Request Enterprise Demo</Button>
                        <Button variant="secondary" asChild>
                            <a href="/about">Learn About Our Company</a>
                        </Button>
                    </div>
                </Section>
            </section>
        </>
    )
}
