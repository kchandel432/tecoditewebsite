'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Code, FileText, Globe, Scale, Shield, UserCheck } from 'lucide-react'

export default function TermsAndConditionsPage() {
    const effectiveDate = "January 15, 2024"

    const sections = [
        {
            title: "Acceptance of Terms",
            icon: <UserCheck className="text-cyan-400" size={24} />,
            content: "By accessing and using our services, you agree to be bound by these Terms."
        },
        {
            title: "Use of Services",
            icon: <Code className="text-blue-400" size={24} />,
            content: "Our services are for lawful purposes only. You agree not to misuse our AI/cybersecurity tools."
        },
        {
            title: "Intellectual Property",
            icon: <FileText className="text-purple-400" size={24} />,
            content: "All research, algorithms, and software are protected by intellectual property laws."
        },
        {
            title: "Limitation of Liability",
            icon: <AlertCircle className="text-red-400" size={24} />,
            content: "We are not liable for indirect damages resulting from service use."
        }
    ]

    const prohibitedActivities = [
        "Reverse engineering or decompiling our AI models",
        "Using our services for illegal activities",
        "Attempting to breach our security systems",
        "Scraping or data mining without permission",
        "Impersonating Techodite or its employees",
        "Distributing malware or harmful code"
    ]

    const licenses = [
        {
            type: "Research License",
            description: "For academic and research institutions",
            restrictions: ["Non-commercial use", "Attribution required", "No redistribution"],
            duration: "Perpetual for research"
        },
        {
            type: "Commercial License",
            description: "For business and commercial use",
            restrictions: ["Annual renewal", "Usage limits apply", "No resale"],
            duration: "Annual subscription"
        },
        {
            type: "Enterprise License",
            description: "For large organizations",
            restrictions: ["Custom terms", "Dedicated support", "White-label options"],
            duration: "Custom agreement"
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
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl mb-6">
                        <Scale className="text-blue-400" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Terms and Conditions
                    </h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Legal agreement governing your use of Techodite services
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full text-gray-400">
                        <span>Effective Date: {effectiveDate}</span>
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
                        <div className="p-3 bg-blue-900/30 rounded-xl">
                            <Globe className="text-blue-400" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Agreement Overview</h2>
                            <p className="text-gray-400">Your contract with Techodite</p>
                        </div>
                    </div>
                    <p className="text-gray-300 mb-6">
                        These Terms and Conditions ("Terms") constitute a legally binding agreement between you
                        ("User" or "You") and Techodite Research Pvt. Ltd. ("Techodite," "We," "Us," or "Our")
                        regarding your access to and use of our AI and cybersecurity research services, software,
                        and related materials (collectively, "Services").
                    </p>
                    <p className="text-gray-300">
                        By accessing or using our Services, you acknowledge that you have read, understood, and agree
                        to be bound by these Terms. If you do not agree with these Terms, you must not use our Services.
                    </p>
                </motion.div>

                {/* Key Sections */}
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

                {/* Prohibited Activities */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-red-900/30 rounded-xl">
                            <Shield className="text-red-400" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Prohibited Activities</h2>
                            <p className="text-gray-400">Restricted uses of our services</p>
                        </div>
                    </div>

                    <p className="text-gray-300 mb-6">
                        You agree not to engage in any of the following prohibited activities:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {prohibitedActivities.map((activity, index) => (
                            <div key={index} className="flex items-start p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                                <AlertCircle className="text-red-400 mr-3 mt-1 flex-shrink-0" size={18} />
                                <span className="text-gray-300">{activity}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl border border-red-800/30">
                        <h3 className="text-lg font-bold text-white mb-3">Consequences of Violation</h3>
                        <p className="text-gray-300 mb-3">
                            Violation of these Terms may result in:
                        </p>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                Immediate termination of your access to Services
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                Legal action and pursuit of damages
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                Reporting to law enforcement authorities
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                Permanent ban from all Techodite services
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Intellectual Property */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property Rights</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-4">Our Property</h3>
                        <p className="text-gray-300 mb-6">
                            All intellectual property rights in the Services, including but not limited to:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                "AI algorithms and models",
                                "Research papers and findings",
                                "Software code and applications",
                                "Patents and inventions",
                                "Trademarks and logos",
                                "Documentation and manuals"
                            ].map((item, index) => (
                                <div key={index} className="p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                                    <p className="text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Your Content</h3>
                        <p className="text-gray-300 mb-4">
                            You retain ownership of any data, content, or materials you submit to our Services ("User Content").
                            However, by submitting User Content, you grant us a license to use, reproduce, and modify such content
                            solely for the purpose of providing and improving our Services.
                        </p>
                        <div className="p-6 bg-gray-900/30 rounded-xl">
                            <h4 className="font-bold text-white mb-3">Research Data Usage</h4>
                            <p className="text-gray-300">
                                For research participation, you grant Techodite a non-exclusive, worldwide, royalty-free license
                                to use anonymized and aggregated data for AI model training and cybersecurity research purposes.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Licensing Options */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-8">Software Licensing</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {licenses.map((license, index) => (
                            <div key={license.type} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{license.type}</h3>
                                <p className="text-gray-300 text-sm mb-4">{license.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-gray-400 text-sm mb-2">Restrictions:</h4>
                                    <ul className="space-y-2">
                                        {license.restrictions.map((restriction, idx) => (
                                            <li key={idx} className="text-sm text-gray-300 flex items-start">
                                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                                {restriction}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-gray-700">
                                    <p className="text-sm text-gray-400">Duration:</p>
                                    <p className="text-cyan-400 font-bold">{license.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Disclaimer and Limitation of Liability */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Disclaimer and Limitation of Liability</h2>

                    <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-xl border border-orange-800/30">
                            <h3 className="text-lg font-bold text-white mb-3">No Warranty</h3>
                            <p className="text-gray-300">
                                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                                EITHER EXPRESS OR IMPLIED. TECHDITE DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO
                                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                            </p>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-xl border border-red-800/30">
                            <h3 className="text-lg font-bold text-white mb-3">Limitation of Liability</h3>
                            <p className="text-gray-300 mb-3">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, TECHDITE SHALL NOT BE LIABLE FOR:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    Indirect, incidental, special, consequential, or punitive damages
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    Loss of profits, revenue, data, or use
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    Damages resulting from unauthorized access or alterations
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    Any third-party conduct or content
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-bold text-white mb-3">Indemnification</h3>
                            <p className="text-gray-300">
                                You agree to indemnify, defend, and hold harmless Techodite and its officers, directors,
                                employees, and agents from and against any claims, liabilities, damages, losses, and expenses
                                arising out of or in any way connected with your access to or use of the Services, your violation
                                of these Terms, or your infringement of any intellectual property or other rights.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Governing Law */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Governing Law and Dispute Resolution</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-3">Governing Law</h3>
                            <p className="text-gray-300">
                                These Terms shall be governed by and construed in accordance with the laws of India,
                                without regard to its conflict of law provisions.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-white mb-3">Dispute Resolution</h3>
                            <p className="text-gray-300">
                                Any disputes arising from these Terms shall first be attempted to be resolved through
                                good-faith negotiations. If unresolved, disputes shall be submitted to binding arbitration
                                in Noida, Uttar Pradesh, India.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-800/30">
                        <h3 className="text-lg font-bold text-white mb-3">Contact for Legal Inquiries</h3>
                        <p className="text-gray-300">
                            For any questions regarding these Terms, please contact our legal department:
                        </p>
                        <div className="mt-3 text-cyan-400">
                            <p>Email: legal@techodite.com</p>
                            <p>Address: Legal Department, Techodite Research Pvt. Ltd., Cyber Tower, Sector 67, Noida, UP 201301</p>
                        </div>
                    </div>
                </motion.div>

                {/* Update Notice */}
                <div className="mt-12 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                    <p className="text-gray-400 text-center">
                        Techodite reserves the right to modify these Terms at any time. We will notify users of
                        material changes via email or through our Services. Your continued use of our Services
                        after such modifications constitutes acceptance of the updated Terms.
                    </p>
                </div>
            </div>
        </div>
    )
}