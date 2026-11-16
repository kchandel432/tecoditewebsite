'use client'

import { Bell, ChevronDown, Download, Eye, FileText, Globe, Settings, Shield, Trash2, User } from 'lucide-react'
import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'


export default function CompliancePage() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        requestType: 'access',
        description: ''
    })

    const userRights = [
        {
            right: 'Right to Access',
            icon: <Eye size={20} strokeWidth={1.5} />,
            description: 'Request a copy of your personal data',
            gdpr: 'Article 15',
            ccpa: 'Section 1798.100',
            action: 'access'
        },
        {
            right: 'Right to Rectification',
            icon: <FileText size={20} strokeWidth={1.5} />,
            description: 'Correct inaccurate personal data',
            gdpr: 'Article 16',
            ccpa: 'N/A',
            action: 'rectify'
        },
        {
            right: 'Right to Erasure',
            icon: <Trash2 size={20} strokeWidth={1.5} />,
            description: 'Request deletion of your personal data',
            gdpr: 'Article 17',
            ccpa: 'Section 1798.105',
            action: 'delete'
        },
        {
            right: 'Right to Restrict',
            icon: <Settings size={20} strokeWidth={1.5} />,
            description: 'Limit processing of your personal data',
            gdpr: 'Article 18',
            ccpa: 'N/A',
            action: 'restrict'
        },
        {
            right: 'Right to Portability',
            icon: <Download size={20} strokeWidth={1.5} />,
            description: 'Receive your data in machine-readable format',
            gdpr: 'Article 20',
            ccpa: 'Section 1798.100',
            action: 'export'
        },
        {
            right: 'Right to Object',
            icon: <Bell size={20} strokeWidth={1.5} />,
            description: 'Object to processing of your personal data',
            gdpr: 'Article 21',
            ccpa: 'Section 1798.120',
            action: 'object'
        }
    ]

    const complianceStatus = [
        {
            regulation: 'GDPR',
            region: 'European Union',
            status: 'Fully Compliant',
            icon: <Globe size={24} strokeWidth={1.5} />,
            lastAudit: '2024-01-15',
            dpa: 'appointed',
            ropa: 'maintained'
        },
        {
            regulation: 'CCPA/CPRA',
            region: 'California, USA',
            status: 'Fully Compliant',
            icon: <User size={24} strokeWidth={1.5} />,
            lastAudit: '2024-01-20',
            dpa: 'N/A',
            ropa: 'maintained'
        },
        {
            regulation: 'LGPD',
            region: 'Brazil',
            status: 'Fully Compliant',
            icon: <Globe size={24} strokeWidth={1.5} />,
            lastAudit: '2024-01-10',
            dpa: 'appointed',
            ropa: 'maintained'
        },
        {
            regulation: 'PIPEDA',
            region: 'Canada',
            status: 'Fully Compliant',
            icon: <Globe size={24} strokeWidth={1.5} />,
            lastAudit: '2023-12-15',
            dpa: 'appointed',
            ropa: 'maintained'
        }
    ]

    const dataProcessingActivities = [
        {
            activity: 'Research Data Collection',
            purpose: 'AI model training and research',
            legalBasis: 'Legitimate Interest',
            dataCategories: ['Anonymized data', 'Research consent'],
            retention: '5 years'
        },
        {
            activity: 'Client Services',
            purpose: 'Service delivery and support',
            legalBasis: 'Contractual Necessity',
            dataCategories: ['Contact info', 'Service data', 'Communication'],
            retention: '7 years'
        },
        {
            activity: 'Website Analytics',
            purpose: 'Website improvement and security',
            legalBasis: 'Consent/Legitimate Interest',
            dataCategories: ['Usage data', 'Device info', 'Cookies'],
            retention: '2 years'
        },
        {
            activity: 'Marketing Communications',
            purpose: 'Product updates and newsletters',
            legalBasis: 'Consent',
            dataCategories: ['Email', 'Preferences', 'Engagement'],
            retention: 'Until withdrawal'
        }
    ]

    const statusStyle = (status) => {
        switch (status) {
            case 'compliant':
            case 'certified':
                return 'text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800/30'
            case 'pending':
                return 'text-ink-500 bg-ink-100 dark:bg-ink-800/30 border border-ink-200 dark:border-ink-700'
            default:
                return 'text-ink-500 bg-ink-100 dark:bg-ink-800/30 border border-ink-200 dark:border-ink-700'
        }
    }

    const statusLabel = (status) => {
        switch (status) {
            case 'compliant':
            case 'certified':
                return status === 'certified' ? 'Certified' : 'Compliant'
            case 'pending':
                return 'Pending'
            default:
                return 'Non-compliant'
        }
    }

    const handleRequestSubmit = (e) => {
        e.preventDefault()
        alert(`Data request submitted: ${userData.requestType} for ${userData.email}`)
        setUserData({
            name: '',
            email: '',
            requestType: 'access',
            description: ''
        })
    }

    return (
        <div className="min-h-screen bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200">
            <div className="container-mnc py-8 max-w-6xl">
                <Section
                    eyebrow="Compliance"
                    title="Data Privacy Compliance"
                    intro="Tools and resources for exercising your data privacy rights"
                />

                <div className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20">
                                <Shield size={32} strokeWidth={1.5} className="text-brand-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-ink-900 dark:text-white mb-1">Global compliance status</h2>
                                <p className="text-sm text-ink-500 dark:text-ink-300">Regulatory standing across all markets</p>
                            </div>
                        </div>
                        <Button variant="secondary" size="sm">
                            <Download size={16} strokeWidth={1.5} className="mr-2" />
                            Export Status
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {complianceStatus.map((regulation, idx) => (
                            <Card key={idx}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50">
                                        {regulation.icon}
                                    </div>
                                    <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${statusStyle(regulation.status)}`}>
                                        {statusLabel(regulation.status)}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-2">{regulation.regulation}</h3>
                                <p className="text-sm text-ink-500 dark:text-ink-300 mb-4">{regulation.region}</p>

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-ink-500 dark:text-ink-400">Last Audit</span>
                                        <span className="text-ink-900 dark:text-white">{regulation.lastAudit}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-ink-500 dark:text-ink-400">DPA</span>
                                        <span className="text-ink-900 dark:text-white">{regulation.dpa}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-ink-500 dark:text-ink-400">ROPA</span>
                                        <span className="text-ink-900 dark:text-white">{regulation.ropa}</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <Card>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-xl border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20">
                            <div>
                                <h3 className="text-lg font-bold text-brand-900 dark:text-white mb-2">Data protection officer</h3>
                                <p className="text-sm text-brand-700 dark:text-brand-300">Dr. Sarah Chen - dpo@techodite.com</p>
                            </div>
                            <a
                                href="mailto:dpo@techodite.com"
                                className="px-4 py-2 text-sm border border-brand-600 dark:border-brand-400 rounded-lg text-brand-700 dark:text-brand-300 hover:bg-brand-600 dark:hover:bg-brand-500 dark:hover:text-white transition-colors whitespace-nowrap"
                            >
                                Contact DPO
                            </a>
                        </div>
                    </Card>
                </div>

                <Section id="rights" className="scroll-mt-24" eyebrow="Your Rights" title="Your Data Privacy Rights" intro="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {userRights.map((right, idx) => (
                            <Card key={idx} onClick={() => setUserData({ ...userData, requestType: right.action })} className="cursor-pointer hover:border-brand-300 dark:hover:border-brand-700 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50">
                                        {right.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-ink-900 dark:text-white">{right.right}</h3>
                                        <p className="text-sm text-ink-500 dark:text-ink-300">{right.description}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm mt-2">
                                    <span className="text-ink-500 dark:text-ink-400">GDPR: {right.gdpr}</span>
                                    <span className="text-ink-500 dark:text-ink-400">CCPA: {right.ccpa}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Section>

                <Section id="activities" className="scroll-mt-24" eyebrow="Data Processing" title="Data Processing Activities" intro="">
                    <div className="overflow-x-auto mb-8">
                        <table className="w-full text-sm">
                            <thead className="bg-ink-50 dark:bg-ink-900/30">
                                <tr>
                                    <th className="text-left p-4 text-ink-500 dark:text-ink-400 font-semibold">Activity</th>
                                    <th className="text-left p-4 text-ink-500 dark:text-ink-400 font-semibold">Purpose</th>
                                    <th className="text-left p-4 text-ink-500 dark:text-ink-400 font-semibold">Legal Basis</th>
                                    <th className="text-left p-4 text-ink-500 dark:text-ink-400 font-semibold">Data Categories</th>
                                    <th className="text-left p-4 text-ink-500 dark:text-ink-400 font-semibold">Retention</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataProcessingActivities.map((activity, idx) => (
                                    <tr key={idx} className="border-b border-ink-100 dark:border-ink-800 last:border-b-0">
                                        <td className="p-4">
                                            <p className="text-ink-900 dark:text-white font-medium">{activity.activity}</p>
                                        </td>
                                        <td className="p-4">
                                            <p className="text-ink-500 dark:text-ink-300">{activity.purpose}</p>
                                        </td>
                                        <td className="p-4">
                                            <span className="px-3 py-1 border border-brand-200 dark:border-brand-800/30 rounded-lg text-xs font-medium bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400">
                                                {activity.legalBasis}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="space-y-1">
                                                {activity.dataCategories.map((cat, i) => (
                                                    <span key={i} className="block text-sm text-ink-500 dark:text-ink-300">• {cat}</span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="px-3 py-1 border border-ink-200 dark:border-ink-700 rounded-lg text-xs font-medium bg-ink-50 dark:bg-ink-800/50 text-ink-700 dark:text-ink-300">
                                                {activity.retention}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section id="request" className="scroll-mt-24" eyebrow="Submit Request" title="Submit Data Request" intro="">
                    <Card>
                        <h2 className="text-lg font-bold text-ink-900 dark:text-white mb-6">Submit Data Request</h2>

                        <form onSubmit={handleRequestSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={userData.name}
                                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        value={userData.email}
                                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Request Type</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { value: 'access', label: 'Access Data', icon: <Eye size={18} strokeWidth={1.5} /> },
                                        { value: 'delete', label: 'Delete Data', icon: <Trash2 size={18} strokeWidth={1.5} /> },
                                        { value: 'export', label: 'Export Data', icon: <Download size={18} strokeWidth={1.5} /> }
                                    ].map((option) => (
                                        <label key={option.value} className="flex items-center p-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 cursor-pointer hover:border-brand-300 dark:hover:border-brand-700 transition-colors">
                                            <input
                                                type="radio"
                                                name="requestType"
                                                value={option.value}
                                                checked={userData.requestType === option.value}
                                                onChange={(e) => setUserData({ ...userData, requestType: e.target.value })}
                                                className="mr-3 text-brand-600"
                                            />
                                            <div className="flex items-center gap-3">
                                                <div className="text-brand-600 dark:text-brand-400">{option.icon}</div>
                                                <span className="text-sm text-ink-700 dark:text-ink-200">{option.label}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Description (Optional)</label>
                                <textarea
                                    value={userData.description}
                                    onChange={(e) => setUserData({ ...userData, description: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
                                    placeholder="Please provide additional details about your request..."
                                />
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-ink-100 dark:border-ink-800">
                                <div className="text-sm text-ink-500 dark:text-ink-400">
                                    We will respond to your request within 30 days as required by law.
                                </div>
                                <Button type="submit">
                                    Submit Request
                                </Button>
                            </div>
                        </form>
                    </Card>
                </Section>

                <Section id="resources" className="scroll-mt-24" eyebrow="Resources" title="Compliance Resources" intro="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Data Protection Impact Assessments',
                                description: 'Our DPIA reports for high-risk processing activities',
                                link: '/compliance/dpias'
                            },
                            {
                                title: 'Record of Processing Activities',
                                description: 'Detailed ROPA documenting all data processing',
                                link: '/compliance/ropa'
                            },
                            {
                                title: 'Data Breach Response Plan',
                                description: 'Our procedures for handling data breaches',
                                link: '/compliance/breach-plan'
                            },
                            {
                                title: 'International Data Transfer Mechanisms',
                                description: 'SCCs and other transfer safeguards',
                                link: '/compliance/transfers'
                            },
                            {
                                title: 'Vendor Management Framework',
                                description: 'How we ensure third-party compliance',
                                link: '/compliance/vendors'
                            },
                            {
                                title: 'Training and Awareness Program',
                                description: 'Employee data protection training',
                                link: '/compliance/training'
                            }
                        ].map((resource, idx) => (
                            <a
                                key={idx}
                                href={resource.link}
                                className="p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 hover:border-brand-300 dark:hover:border-brand-700 transition-colors flex flex-col h-full"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 flex items-center justify-center">
                                        <FileText size={24} strokeWidth={1.5} className="text-ink-400 dark:text-ink-500" />
                                    </div>
                                    <ChevronDown size={18} strokeWidth={1.5} className="text-ink-400 dark:text-ink-500" />
                                </div>
                                <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-2">{resource.title}</h3>
                                <p className="text-sm text-ink-500 dark:text-ink-300">{resource.description}</p>
                            </a>
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    )
}
