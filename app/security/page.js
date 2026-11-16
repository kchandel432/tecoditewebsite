'use client'

import { Bell, CheckCircle, Clock, Cpu, Database, Eye, Lock, Shield, Users } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'


const securityMeasures = [
    {
        category: 'Infrastructure Security',
        icon: <Cpu size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
        measures: [
            {
                title: 'Zero-Trust Architecture',
                description: 'Strict access controls with continuous verification',
                compliance: ['NIST', 'ISO 27001']
            },
            {
                title: 'DDoS Protection',
                description: 'Multi-layer DDoS mitigation with AI-based threat detection',
                compliance: ['SOC 2']
            },
            {
                title: 'Redundant Infrastructure',
                description: 'Geographically distributed data centers with automatic failover',
                compliance: ['ISO 22301']
            }
        ]
    },
    {
        category: 'Data Protection',
        icon: <Database size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
        measures: [
            {
                title: 'End-to-End Encryption',
                description: 'AES-256 encryption for data at rest and in transit',
                compliance: ['GDPR', 'CCPA']
            },
            {
                title: 'Data Loss Prevention',
                description: 'AI-powered monitoring to prevent unauthorized data exfiltration',
                compliance: ['HIPAA', 'PCI DSS']
            },
            {
                title: 'Secure Backup Strategy',
                description: '3-2-1 backup methodology with air-gapped storage',
                compliance: ['ISO 27001']
            }
        ]
    },
    {
        category: 'Access Control',
        icon: <Users size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
        measures: [
            {
                title: 'Multi-Factor Authentication',
                description: 'Required for all privileged access with biometric options',
                compliance: ['NIST 800-63B']
            },
            {
                title: 'Role-Based Access Control',
                description: 'Least privilege principle with regular access reviews',
                compliance: ['ISO 27001']
            },
            {
                title: 'Privileged Access Management',
                description: 'Just-in-time access with session recording',
                compliance: ['SOC 2']
            }
        ]
    },
    {
        category: 'Monitoring & Response',
        icon: <Eye size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
        measures: [
            {
                title: '24/7 SOC Monitoring',
                description: 'Security Operations Center with AI threat detection',
                compliance: ['ISO 27035']
            },
            {
                title: 'Real-time Alerting',
                description: 'Automated alerts for suspicious activities',
                compliance: ['GDPR']
            },
            {
                title: 'Incident Response Plan',
                description: 'Tested response procedures with regular drills',
                compliance: ['NIST 800-61']
            }
        ]
    }
]

const certifications = [
    {
        name: 'ISO 27001',
        description: 'Information Security Management',
        status: 'Certified',
        validity: '2024-2027'
    },
    {
        name: 'SOC 2 Type II',
        description: 'Security, Availability, Processing Integrity',
        status: 'Certified',
        validity: 'Annual Audit'
    },
    {
        name: 'GDPR Compliance',
        description: 'Data Protection Regulation',
        status: 'Fully Compliant',
        validity: 'Ongoing'
    },
    {
        name: 'PCI DSS',
        description: 'Payment Card Industry Security',
        status: 'Level 1 Compliant',
        validity: 'Annual Assessment'
    }
]

const incidentResponse = [
    {
        phase: 'Preparation',
        description: 'Regular training, incident response plan, tool readiness',
        timeline: 'Ongoing',
        tools: ['SIEM', 'EDR', 'SOAR']
    },
    {
        phase: 'Detection & Analysis',
        description: 'Continuous monitoring, threat intelligence, log analysis',
        timeline: 'Real-time',
        tools: ['AI Analytics', 'Threat Hunting', 'Behavior Analysis']
    },
    {
        phase: 'Containment',
        description: 'Isolate affected systems, preserve evidence, implement mitigations',
        timeline: 'Immediate',
        tools: ['Network Segmentation', 'Endpoint Isolation']
    },
    {
        phase: 'Eradication',
        description: 'Remove threat actors, malware, and vulnerabilities',
        timeline: '48 hours',
        tools: ['Forensic Analysis', 'Patch Management']
    },
    {
        phase: 'Recovery',
        description: 'Restore systems, validate security, resume operations',
        timeline: 'Variable',
        tools: ['Backup Recovery', 'System Validation']
    },
    {
        phase: 'Post-Incident',
        description: 'Review lessons learned, update policies, report to stakeholders',
        timeline: '30 days',
        tools: ['Root Cause Analysis', 'Policy Updates']
    }
]

export default function SecurityPolicyPage() {
    return (
        <div className="min-h-screen bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200">
            <div className="container-mnc py-8 max-w-6xl">
                <Section
                    eyebrow="Security Policy"
                    title="Enterprise Security"
                    intro="Enterprise-grade security measures protecting our research and clients"
                >
                    <div className="flex flex-wrap gap-3 mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 text-sm font-medium">
                            <Clock size={16} strokeWidth={1.5} className="mr-2" />
                            24/7 Monitoring
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-600 dark:text-ink-300 text-sm font-medium">
                            <Lock size={16} strokeWidth={1.5} className="mr-2" />
                            Zero Trust
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-600 dark:text-ink-300 text-sm font-medium">
                            <Bell size={16} strokeWidth={1.5} className="mr-2" />
                            AI-Powered Defense
                        </div>
                    </div>
                </Section>

                <Section id="philosophy" className="scroll-mt-24" eyebrow="Approach"                     title="Our security philosophy" intro="">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-ink-900 dark:text-white mb-6">Defense in depth</h2>
                            <p className="text-ink-500 dark:text-ink-300 mb-6 leading-relaxed">
                                As an AI and cybersecurity research company, security is embedded in everything we do.
                                We follow a defense-in-depth approach with multiple layers of security controls to protect
                                our research, infrastructure, and client data.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50">
                                    <p className="text-sm text-ink-500 dark:text-ink-400">Security Incidents</p>
                                    <p className="text-3xl font-bold text-ink-900 dark:text-white mt-1">0</p>
                                    <p className="text-xs text-brand-700 dark:text-brand-400">Last 12 months</p>
                                </div>
                                <div className="p-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50">
                                    <p className="text-sm text-ink-500 dark:text-ink-400">Penetration Tests</p>
                                    <p className="text-3xl font-bold text-ink-900 dark:text-white mt-1">48</p>
                                    <p className="text-xs text-brand-700 dark:text-brand-400">Successfully defended</p>
                                </div>
                                <div className="p-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50">
                                    <p className="text-sm text-ink-500 dark:text-ink-400">Vulnerabilities Patched</p>
                                    <p className="text-3xl font-bold text-ink-900 dark:text-white mt-1">327</p>
                                    <p className="text-xs text-brand-700 dark:text-brand-400">Within 24 hours</p>
                                </div>
                                <div className="p-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50">
                                    <p className="text-sm text-ink-500 dark:text-ink-400">Security Team</p>
                                    <p className="text-3xl font-bold text-ink-900 dark:text-white mt-1">42</p>
                                    <p className="text-xs text-brand-700 dark:text-brand-400">Certified experts</p>
                                </div>
                            </div>
                        </div>
                        <Card>
                            <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-4">Security principles</h3>
                            <ul className="space-y-3">
                                {[
                                    'Least Privilege Access',
                                    'Defense in Depth',
                                    'Continuous Monitoring',
                                    'Assume Breach Mindset',
                                    'Automated Response',
                                    'Zero Trust Architecture'
                                ].map((principle, idx) => (
                                    <li key={idx} className="flex items-center text-ink-600 dark:text-ink-300">
                                        <CheckCircle size={16} className="text-brand-600 dark:text-brand-400 mr-3 flex-shrink-0" strokeWidth={1.5} />
                                        {principle}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </Section>

                <Section id="measures" className="scroll-mt-24" eyebrow="Controls"                     title="Security measures" intro="">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {securityMeasures.map((category, idx) => (
                            <Card key={idx}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 flex-shrink-0">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-ink-900 dark:text-white">{category.category}</h3>
                                </div>

                                <div className="space-y-4">
                                    {category.measures.map((measure, i) => (
                                        <div key={i} className="p-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50">
                                            <h4 className="text-lg font-bold text-ink-900 dark:text-white mb-2">{measure.title}</h4>
                                            <p className="text-sm text-ink-500 dark:text-ink-300 mb-3">{measure.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {measure.compliance.map((comp, j) => (
                                                    <span key={j} className="px-2 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-500 dark:text-ink-400 bg-white dark:bg-ink-800">
                                                        {comp}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </Section>

                <Section id="certs" className="scroll-mt-24" eyebrow="Certifications" title="Certifications &amp; compliance" intro="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, idx) => (
                            <Card key={idx}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 rounded-lg border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 flex-shrink-0">
                                        <Shield size={24} strokeWidth={1.5} className="text-brand-600" />
                                    </div>
                                    <span className="px-3 py-1 rounded-lg text-xs font-semibold text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800/30">
                                        {cert.status}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-2">{cert.name}</h3>
                                <p className="text-sm text-ink-500 dark:text-ink-300 mb-4">{cert.description}</p>

                                <div className="pt-4 border-t border-ink-100 dark:border-ink-800">
                                    <p className="text-sm text-ink-500 dark:text-ink-400">Valid Until</p>
                                    <p className="text-brand-600 dark:text-brand-400 font-bold">{cert.validity}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Section>

                <Section id="incident" className="scroll-mt-24" eyebrow="Response"                     title="Incident response framework" intro="">
                    <div className="space-y-12">
                        {incidentResponse.map((phase, idx) => (
                            <div key={idx} className={`relative flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                                <div className="w-1/2"></div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-brand-600 dark:border-brand-400 bg-white dark:bg-ink-900 flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-brand-600">{idx + 1}</span>
                                </div>
                                <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                                    <div className="p-6 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                                        <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-2">{phase.phase}</h3>
                                        <p className="text-ink-500 dark:text-ink-300 mb-4">{phase.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="px-3 py-1 border border-brand-200 dark:border-brand-800/30 rounded-lg text-xs font-semibold bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400">
                                                {phase.timeline}
                                            </span>
                                            <div className="flex flex-wrap gap-2">
                                                {phase.tools.map((tool, i) => (
                                                    <span key={i} className="px-2 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-500 dark:text-ink-400 bg-white dark:bg-ink-800">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <section className="border-t border-ink-100 dark:border-ink-800">
                    <Section className="py-0" eyebrow="Reporting"                     title="Report security issues" intro="We take security vulnerabilities seriously. Please report any security concerns immediately.">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:security@techodite.com"
                                className="px-8 py-4 rounded-lg border border-brand-600 dark:border-brand-400 bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors"
                            >
                                Report Vulnerability
                            </a>
                            <a
                                href="mailto:abuse@techodite.com"
                                className="px-8 py-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-700 dark:text-white font-bold hover:bg-ink-50 dark:hover:bg-ink-700 transition-colors"
                            >
                                Report Abuse
                            </a>
                        </div>
                    </Section>
                </section>
            </div>
        </div>
    )
}
