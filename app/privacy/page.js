'use client'

import { motion } from 'framer-motion'
import { Database, Eye, Globe, Key, Lock, Mail, Shield, Users } from 'lucide-react'

export default function PrivacyPolicyPage() {
    const lastUpdated = "January 15, 2024"

    const sections = [
        {
            title: "Data We Collect",
            icon: <Database className="text-cyan-400" size={24} />,
            content: `As an AI and cybersecurity research company, we collect only essential data necessary for our services:`
        },
        {
            title: "How We Use Your Data",
            icon: <Eye className="text-blue-400" size={24} />,
            content: `Your data is used exclusively for research and service improvement purposes.`
        },
        {
            title: "Data Security",
            icon: <Lock className="text-green-400" size={24} />,
            content: `We employ military-grade encryption and security protocols to protect your information.`
        },
        {
            title: "Your Rights",
            icon: <Users className="text-purple-400" size={24} />,
            content: `You have full control over your personal data under GDPR, CCPA, and other regulations.`
        }
    ]

    const dataTypes = [
        {
            category: "Contact Information",
            examples: ["Name", "Email", "Phone", "Company"],
            purpose: "Communication and service delivery"
        },
        {
            category: "Research Data",
            examples: ["Anonymized security logs", "Research participation data", "Survey responses"],
            purpose: "AI model training and cybersecurity research"
        },
        {
            category: "Technical Data",
            examples: ["IP addresses", "Device information", "Browser type", "Usage patterns"],
            purpose: "Security monitoring and service optimization"
        },
        {
            category: "Financial Information",
            examples: ["Payment details", "Billing addresses", "Transaction history"],
            purpose: "Processing payments and accounting"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl mb-6">
                        <Shield className="text-cyan-400" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Your privacy and data security are our top priorities
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full text-gray-400">
                        <span>Last Updated: {lastUpdated}</span>
                    </div>
                </motion.div>

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-cyan-900/30 rounded-xl">
                            <Globe className="text-cyan-400" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Introduction</h2>
                            <p className="text-gray-400">Techodite's Commitment to Privacy</p>
                        </div>
                    </div>
                    <p className="text-gray-300 mb-6">
                        At Techodite, we are committed to protecting your privacy and ensuring the security of your personal data.
                        As an AI and cybersecurity research company, we understand the critical importance of data privacy and
                        implement the highest standards of security in all our operations.
                    </p>
                    <p className="text-gray-300">
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
                        our services, visit our website, or participate in our research projects.
                    </p>
                </motion.div>

                {/* Quick Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-6"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-gray-900/50 rounded-lg">
                                    {section.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{section.title}</h3>
                            </div>
                            <p className="text-gray-300">{section.content}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Data Collection Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-8">Types of Data We Collect</h2>

                    <div className="space-y-6">
                        {dataTypes.map((type, index) => (
                            <div key={type.category} className="p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white">{type.category}</h3>
                                    <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">
                                        Purpose: {type.purpose}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-gray-400 mb-2">Examples Include:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {type.examples.map((example, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm">
                                                {example}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Security Measures */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-green-900/30 rounded-xl">
                            <Lock className="text-green-400" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Our Security Measures</h2>
                            <p className="text-gray-400">Protecting Your Data with Advanced Security</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-900/30 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-4">Technical Safeguards</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    End-to-end encryption for all data transmissions
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    Regular security audits and penetration testing
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    Multi-factor authentication for all systems
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    AI-powered threat detection and monitoring
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 bg-gray-900/30 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-4">Organizational Measures</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Employee privacy and security training
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Strict access controls and role-based permissions
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Data protection impact assessments
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Regular compliance audits and certifications
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Your Rights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-purple-900/30 rounded-xl">
                            <Key className="text-purple-400" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Your Data Protection Rights</h2>
                            <p className="text-gray-400">You Control Your Data</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            { right: "Access", desc: "Request copies of your data" },
                            { right: "Rectification", desc: "Correct inaccurate data" },
                            { right: "Erasure", desc: "Request data deletion" },
                            { right: "Restriction", desc: "Limit data processing" },
                            { right: "Portability", desc: "Transfer your data" },
                            { right: "Objection", desc: "Object to processing" },
                            { right: "Withdraw Consent", desc: "Revoke consent anytime" },
                            { right: "Complain", desc: "Lodge complaints with authorities" }
                        ].map((item, index) => (
                            <div key={index} className="p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                                <h4 className="font-bold text-white mb-2">{item.right}</h4>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl p-6 border border-cyan-800/30">
                        <h3 className="text-xl font-bold text-white mb-4">Exercising Your Rights</h3>
                        <p className="text-gray-300 mb-4">
                            To exercise any of these rights, please contact our Data Protection Officer:
                        </p>
                        <div className="flex items-center gap-3 text-cyan-400">
                            <Mail size={20} />
                            <a href="mailto:privacy@techodite.com" className="hover:text-cyan-300">
                                privacy@techodite.com
                            </a>
                        </div>
                        <p className="text-sm text-gray-400 mt-4">
                            We will respond to your request within 30 days as required by law.
                        </p>
                    </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4">Data Protection Officer</h3>
                            <p className="text-gray-300 mb-2">Dr. Sarah Chen</p>
                            <p className="text-gray-400">Email: dpo@techodite.com</p>
                            <p className="text-gray-400">Phone: +91-9753089649</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4">Company Information</h3>
                            <p className="text-gray-300 mb-2">Techodite Research Pvt. Ltd.</p>
                            <p className="text-gray-400">Registered Office: Cyber Tower, Sector 67, Noida, UP 201301</p>
                            <p className="text-gray-400">CIN: U72900DL2023PTC123456</p>
                        </div>
                    </div>
                </motion.div>

                {/* Update Notice */}
                <div className="mt-12 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                    <p className="text-gray-400 text-center">
                        This Privacy Policy may be updated periodically. We will notify you of any material changes
                        by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                </div>
            </div>
        </div>
    )
}