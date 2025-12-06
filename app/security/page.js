'use client'

import { motion } from 'framer-motion'
import { Bell, CheckCircle, Clock, Cpu, Database, Eye, Lock, Shield, Users } from 'lucide-react'

export default function SecurityPolicyPage() {
    const securityMeasures = [
        {
            category: 'Infrastructure Security',
            icon: <Cpu className="text-cyan-400" size={24} />,
            measures: [
                {
                    title: 'Zero-Trust Architecture',
                    description: 'Implementing strict access controls with continuous verification',
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
            icon: <Database className="text-blue-400" size={24} />,
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
            icon: <Users className="text-purple-400" size={24} />,
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
            icon: <Eye className="text-green-400" size={24} />,
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl mb-6">
                        <Shield className="text-cyan-400" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Security Policy
                    </h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Enterprise-grade security measures protecting our research and clients
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <span className="px-4 py-2 bg-cyan-900/30 text-cyan-400 rounded-full flex items-center">
                            <Clock size={16} className="mr-2" />
                            24/7 Monitoring
                        </span>
                        <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full flex items-center">
                            <Lock size={16} className="mr-2" />
                            Zero Trust
                        </span>
                        <span className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-full flex items-center">
                            <Bell size={16} className="mr-2" />
                            AI-Powered Defense
                        </span>
                    </div>
                </motion.div>

                {/* Security Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-white mb-6">Our Security Philosophy</h2>
                            <p className="text-gray-300 mb-6">
                                As an AI and cybersecurity research company, security is embedded in everything we do.
                                We follow a defense-in-depth approach with multiple layers of security controls to protect
                                our research, infrastructure, and client data.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                                    <p className="text-sm text-gray-400">Security Incidents</p>
                                    <p className="text-3xl font-bold text-white">0</p>
                                    <p className="text-xs text-green-400">Last 12 months</p>
                                </div>
                                <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                                    <p className="text-sm text-gray-400">Penetration Tests</p>
                                    <p className="text-3xl font-bold text-white">48</p>
                                    <p className="text-xs text-cyan-400">Successfully defended</p>
                                </div>
                                <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                                    <p className="text-sm text-gray-400">Vulnerabilities Patched</p>
                                    <p className="text-3xl font-bold text-white">327</p>
                                    <p className="text-xs text-blue-400">Within 24 hours</p>
                                </div>
                                <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                                    <p className="text-sm text-gray-400">Security Team</p>
                                    <p className="text-3xl font-bold text-white">42</p>
                                    <p className="text-xs text-purple-400">Certified experts</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-6 border border-cyan-800/30">
                            <h3 className="text-lg font-bold text-white mb-4">Security Principles</h3>
                            <ul className="space-y-3">
                                {[
                                    'Least Privilege Access',
                                    'Defense in Depth',
                                    'Continuous Monitoring',
                                    'Assume Breach Mindset',
                                    'Automated Response',
                                    'Zero Trust Architecture'
                                ].map((principle, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                                        {principle}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Security Measures */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Measures</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {securityMeasures.map((category, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-gray-900/50 rounded-xl">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                                </div>

                                <div className="space-y-4">
                                    {category.measures.map((measure, i) => (
                                        <div key={i} className="p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                                            <h4 className="text-lg font-bold text-white mb-2">{measure.title}</h4>
                                            <p className="text-gray-300 text-sm mb-3">{measure.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {measure.compliance.map((comp, j) => (
                                                    <span key={j} className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">
                                                        {comp}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications & Compliance</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-gray-900/50 rounded-lg">
                                        <Shield className="text-cyan-400" size={24} />
                                    </div>
                                    <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">
                                        {cert.status}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{cert.description}</p>

                                <div className="pt-4 border-t border-gray-700">
                                    <p className="text-sm text-gray-400">Valid Until</p>
                                    <p className="text-cyan-400 font-bold">{cert.validity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Incident Response */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Incident Response Framework</h2>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

                        <div className="space-y-12">
                            {incidentResponse.map((phase, idx) => (
                                <div key={idx} className={`relative flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                                    <div className="w-1/2"></div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full flex items-center justify-center z-10">
                                        <span className="text-white font-bold">{idx + 1}</span>
                                    </div>
                                    <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                                        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">{phase.phase}</h3>
                                            <p className="text-gray-300 mb-4">{phase.description}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">
                                                    {phase.timeline}
                                                </span>
                                                <div className="flex flex-wrap gap-2">
                                                    {phase.tools.map((tool, i) => (
                                                        <span key={i} className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">
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
                    </div>
                </motion.div>

                {/* Reporting */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-800/30">
                        <h2 className="text-2xl font-bold text-white mb-6">Report Security Issues</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            We take security vulnerabilities seriously. Please report any security concerns immediately.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:security@techodite.com"
                                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-red-500/30 transition-all"
                            >
                                Report Vulnerability
                            </a>
                            <a
                                href="mailto:abuse@techodite.com"
                                className="px-8 py-4 border border-orange-400 text-orange-400 rounded-lg font-bold hover:bg-orange-400/10 transition-all"
                            >
                                Report Abuse
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}