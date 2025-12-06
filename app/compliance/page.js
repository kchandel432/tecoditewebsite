'use client'

import { motion } from 'framer-motion'
import { Bell, ChevronDown, Download, Eye, FileText, Globe, Settings, Shield, Trash2, User } from 'lucide-react'
import { useState } from 'react'

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
            icon: <Eye className="text-cyan-400" size={20} />,
            description: 'Request a copy of your personal data',
            gdpr: 'Article 15',
            ccpa: 'Section 1798.100',
            action: 'access'
        },
        {
            right: 'Right to Rectification',
            icon: <FileText className="text-blue-400" size={20} />,
            description: 'Correct inaccurate personal data',
            gdpr: 'Article 16',
            ccpa: 'N/A',
            action: 'rectify'
        },
        {
            right: 'Right to Erasure',
            icon: <Trash2 className="text-red-400" size={20} />,
            description: 'Request deletion of your personal data',
            gdpr: 'Article 17',
            ccpa: 'Section 1798.105',
            action: 'delete'
        },
        {
            right: 'Right to Restrict',
            icon: <Settings className="text-purple-400" size={20} />,
            description: 'Limit processing of your personal data',
            gdpr: 'Article 18',
            ccpa: 'N/A',
            action: 'restrict'
        },
        {
            right: 'Right to Portability',
            icon: <Download className="text-green-400" size={20} />,
            description: 'Receive your data in machine-readable format',
            gdpr: 'Article 20',
            ccpa: 'Section 1798.100',
            action: 'export'
        },
        {
            right: 'Right to Object',
            icon: <Bell className="text-yellow-400" size={20} />,
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
            icon: <Globe className="text-blue-400" size={24} />,
            lastAudit: '2024-01-15',
            dpa: 'appointed',
            ropa: 'maintained'
        },
        {
            regulation: 'CCPA/CPRA',
            region: 'California, USA',
            status: 'Fully Compliant',
            icon: <User className="text-green-400" size={24} />,
            lastAudit: '2024-01-20',
            dpa: 'N/A',
            ropa: 'maintained'
        },
        {
            regulation: 'LGPD',
            region: 'Brazil',
            status: 'Fully Compliant',
            icon: <Globe className="text-yellow-400" size={24} />,
            lastAudit: '2024-01-10',
            dpa: 'appointed',
            ropa: 'maintained'
        },
        {
            regulation: 'PIPEDA',
            region: 'Canada',
            status: 'Fully Compliant',
            icon: <Globe className="text-red-400" size={24} />,
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

    const handleRequestSubmit = (e) => {
        e.preventDefault()
        // In a real application, this would connect to your backend
        alert(`Data request submitted: ${userData.requestType} for ${userData.email}`)
        setUserData({
            name: '',
            email: '',
            requestType: 'access',
            description: ''
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl mb-6">
                        <Shield className="text-blue-400" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Data Privacy Compliance
                    </h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Tools and resources for exercising your data privacy rights
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full">
                            GDPR Compliant
                        </span>
                        <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full">
                            CCPA Compliant
                        </span>
                        <span className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-full">
                            Global Standards
                        </span>
                    </div>
                </motion.div>

                {/* Compliance Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-8">Global Compliance Status</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {complianceStatus.map((regulation, idx) => (
                            <div key={idx} className="bg-gray-900/30 rounded-xl border border-gray-700 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-gray-900/50 rounded-lg">
                                        {regulation.icon}
                                    </div>
                                    <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">
                                        {regulation.status}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2">{regulation.regulation}</h3>
                                <p className="text-gray-400 text-sm mb-4">{regulation.region}</p>

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Last Audit</span>
                                        <span className="text-gray-300">{regulation.lastAudit}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">DPA</span>
                                        <span className="text-gray-300">{regulation.dpa}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">ROPA</span>
                                        <span className="text-gray-300">{regulation.ropa}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-800/30">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Data Protection Officer</h3>
                                <p className="text-gray-300">Dr. Sarah Chen - dpo@techodite.com</p>
                            </div>
                            <a
                                href="mailto:dpo@techodite.com"
                                className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors whitespace-nowrap"
                            >
                                Contact DPO
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Your Data Rights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Data Privacy Rights</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {userRights.map((right, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-6 hover:border-cyan-500 transition-all cursor-pointer"
                                onClick={() => setUserData({ ...userData, requestType: right.action })}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-gray-900/50 rounded-lg">
                                        {right.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{right.right}</h3>
                                        <p className="text-sm text-gray-400">{right.description}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">GDPR: {right.gdpr}</span>
                                    <span className="text-gray-400">CCPA: {right.ccpa}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Data Processing Activities */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-white mb-8">Data Processing Activities</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-900/50">
                                <tr>
                                    <th className="text-left p-4 text-gray-300 font-semibold">Activity</th>
                                    <th className="text-left p-4 text-gray-300 font-semibold">Purpose</th>
                                    <th className="text-left p-4 text-gray-300 font-semibold">Legal Basis</th>
                                    <th className="text-left p-4 text-gray-300 font-semibold">Data Categories</th>
                                    <th className="text-left p-4 text-gray-300 font-semibold">Retention</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataProcessingActivities.map((activity, idx) => (
                                    <tr key={idx} className="border-t border-gray-700 hover:bg-gray-800/30">
                                        <td className="p-4">
                                            <p className="text-white font-medium">{activity.activity}</p>
                                        </td>
                                        <td className="p-4">
                                            <p className="text-gray-300">{activity.purpose}</p>
                                        </td>
                                        <td className="p-4">
                                            <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                                                {activity.legalBasis}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="space-y-1">
                                                {activity.dataCategories.map((cat, i) => (
                                                    <span key={i} className="block text-sm text-gray-400">• {cat}</span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm">
                                                {activity.retention}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Request Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8">
                        <h2 className="text-2xl font-bold text-white mb-8">Submit Data Request</h2>

                        <form onSubmit={handleRequestSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        value={userData.name}
                                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={userData.email}
                                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Request Type
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { value: 'access', label: 'Access Data', icon: <Eye size={18} /> },
                                        { value: 'delete', label: 'Delete Data', icon: <Trash2 size={18} /> },
                                        { value: 'export', label: 'Export Data', icon: <Download size={18} /> }
                                    ].map((option) => (
                                        <label key={option.value} className="flex items-center p-4 bg-gray-900/30 rounded-lg border border-gray-700 cursor-pointer hover:border-gray-600">
                                            <input
                                                type="radio"
                                                name="requestType"
                                                value={option.value}
                                                checked={userData.requestType === option.value}
                                                onChange={(e) => setUserData({ ...userData, requestType: e.target.value })}
                                                className="mr-3"
                                            />
                                            <div className="flex items-center gap-3">
                                                <div className="text-cyan-400">
                                                    {option.icon}
                                                </div>
                                                <span className="text-white">{option.label}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Description (Optional)
                                </label>
                                <textarea
                                    value={userData.description}
                                    onChange={(e) => setUserData({ ...userData, description: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                                    placeholder="Please provide additional details about your request..."
                                />
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                                <div className="text-sm text-gray-400">
                                    We will respond to your request within 30 days as required by law.
                                </div>
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
                                >
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* Resources */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-8">Compliance Resources</h2>

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
                                className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-gray-900/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-900/30 transition-colors">
                                        <FileText className="text-gray-400 group-hover:text-cyan-400" size={24} />
                                    </div>
                                    <ChevronDown className="text-gray-500 group-hover:text-cyan-400 transform rotate-270" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {resource.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{resource.description}</p>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Compliance Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-800/30">
                        <h2 className="text-2xl font-bold text-white mb-6">Compliance Timeline</h2>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            {[
                                { year: '2021', event: 'GDPR Compliance Achieved' },
                                { year: '2022', event: 'CCPA/CPRA Implementation' },
                                { year: '2023', event: 'Global Privacy Framework' },
                                { year: '2024', event: 'AI Ethics Integration' }
                            ].map((milestone, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold">{milestone.year}</span>
                                    </div>
                                    <p className="text-gray-300">{milestone.event}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}