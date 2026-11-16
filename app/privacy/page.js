'use client'

import { Database, Eye, Globe, Key, Lock, Mail, Shield, Users } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export default function PrivacyPolicyPage() {
    const lastUpdated = "January 15, 2024"

    const sections = [
        {
            title: "Data We Collect",
            icon: <Database size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
            content: `As an AI and cybersecurity research company, we collect only essential data necessary for our services:`
        },
        {
            title: "How We Use Your Data",
            icon: <Eye size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
            content: `Your data is used exclusively for research and service improvement purposes.`
        },
        {
            title: "Data Security",
            icon: <Lock size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
            content: `We employ industry-standard encryption and security protocols to protect your information.`
        },
        {
            title: "Your Rights",
            icon: <Users size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
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
        <div className="min-h-screen bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200">
            <div className="container-mnc py-8 max-w-4xl">
                <Section
                    eyebrow="Privacy"
                    title="Privacy Policy"
                    intro="Your privacy and data security are our top priorities"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 text-ink-500 dark:text-ink-400 text-sm font-medium mb-8">
                        Last Updated: {lastUpdated}
                    </div>
                </Section>

                <Section id="introduction" className="scroll-mt-24" eyebrow="Introduction"                     title="Techodite's commitment to privacy" intro="">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 rounded-lg border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 flex-shrink-0">
                            <Globe size={24} strokeWidth={1.5} className="text-brand-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-ink-900 dark:text-white">Introduction</h2>
                            <p className="text-ink-500 dark:text-ink-300">Techodite's Commitment to Privacy</p>
                        </div>
                    </div>
                    <p className="text-ink-500 dark:text-ink-300 mb-6">
                        At Techodite, we are committed to protecting your privacy and ensuring the security of your personal data.
                        As an AI and cybersecurity research company, we understand the critical importance of data privacy and
                        implement the highest standards of security in all our operations.
                    </p>
                    <p className="text-ink-500 dark:text-ink-300">
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
                        our services, visit our website, or participate in our research projects.
                    </p>
                </Section>

                <Section id="overview" eyebrow="Quick Overview" title="" intro="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {sections.map((section, index) => (
                            <Card key={section.title}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 flex-shrink-0">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-ink-900 dark:text-white">{section.title}</h3>
                                </div>
                                <p className="text-ink-500 dark:text-ink-300">{section.content}</p>
                            </Card>
                        ))}
                    </div>
                </Section>

                <Section id="data-collection" className="scroll-mt-24" eyebrow="Data Collection"                     title="Types of data we collect" intro="">
                    <div className="space-y-6">
                        {dataTypes.map((type, index) => (
                            <div key={type.category} className="p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-ink-900 dark:text-white">{type.category}</h3>
                                    <span className="px-3 py-1 text-xs border border-brand-200 dark:border-brand-800/30 rounded-lg text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20">
                                        Purpose: {type.purpose}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400 mb-2">Examples Include:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {type.examples.map((example, idx) => (
                                            <span key={idx} className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-600 dark:text-ink-300 bg-ink-50 dark:bg-ink-800/50">
                                                {example}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="security" className="scroll-mt-24" eyebrow="Security"                     title="Our security measures" intro="Protecting your data with advanced security">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                            <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-4">Technical Safeguards</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-ink-500 dark:text-ink-300">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    End-to-end encryption for all data transmissions
                                </li>
                                <li className="flex items-start text-ink-500 dark:text-ink-300">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    Regular security audits and penetration testing
                                </li>
                                <li className="flex items-start text-ink-500 dark:text-ink-300">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    Multi-factor authentication for all systems
                                </li>
                                <li className="flex items-start text-ink-500 dark:text-ink-300">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    AI-powered threat detection and monitoring
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                            <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-4">Organizational measures</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-ink-500 dark:text-ink-300">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    Employee privacy and security training
                                </li>
                                <li className="flex items-start text-ink-500 dark:text-ink-300">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    Strict access controls and role-based permissions
                                </li>
                                <li className="flex items-start text-ink-500 dark:text-ink-300">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    Data protection impact assessments
                                </li>
                                <li className="flex items-start text-ink-500 dark:text-ink-300">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    Regular compliance audits and certifications
                                </li>
                            </ul>
                        </div>
                    </div>
                </Section>

                <Section id="rights" className="scroll-mt-24" eyebrow="Rights"                     title="Your data protection rights" intro="You control your data">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
                            <Card key={index}>
                                <h4 className="font-bold text-ink-900 dark:text-white mb-2">{item.right}</h4>
                                <p className="text-sm text-ink-500 dark:text-ink-300">{item.desc}</p>
                            </Card>
                        ))}
                    </div>

                    <div className="rounded-lg border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 p-6">
                        <h3 className="text-lg font-bold text-brand-900 dark:text-white mb-4">Exercising your rights</h3>
                        <p className="text-brand-700 dark:text-brand-300 mb-4">
                            To exercise any of these rights, please contact our Data Protection Officer:
                        </p>
                        <div className="flex items-center gap-3 text-brand-600 dark:text-brand-400">
                            <Mail size={20} strokeWidth={1.5} />
                            <a href="mailto:privacy@techodite.com" className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">
                                privacy@techodite.com
                            </a>
                        </div>
                        <p className="text-xs text-brand-700 dark:text-brand-300 mt-4">
                            We will respond to your request within 30 days as required by law.
                        </p>
                    </div>
                </Section>

                <Section id="contact" className="scroll-mt-24" eyebrow="Contact"                     title="Contact information" intro="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                            <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-4">Data protection officer</h3>
                            <p className="text-ink-500 dark:text-ink-300 mb-2">Dr. Sarah Chen</p>
                            <p className="text-ink-500 dark:text-ink-300">Email: dpo@techodite.com</p>
                            <p className="text-ink-500 dark:text-ink-300">Phone: +91-9753089649</p>
                        </div>
                        <div className="p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                            <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-4">Company information</h3>
                            <p className="text-ink-500 dark:text-ink-300 mb-2">Techodite Solutions Pvt. Ltd.</p>
                            <p className="text-ink-500 dark:text-ink-300">Registered Office: Cyber Tower, Sector 67, Noida, UP 201301</p>
                            <p className="text-ink-500 dark:text-ink-300">CIN: U72900DL2023PTC123456</p>
                        </div>
                    </div>
                </Section>

                <div className="mt-12 p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                    <p className="text-ink-500 dark:text-ink-300 text-center">
                        This Privacy Policy may be updated periodically. We will notify you of any material changes
                        by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                </div>
            </div>
        </div>
    )
}
