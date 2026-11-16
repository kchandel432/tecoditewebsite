'use client'

import { AlertCircle, Code, FileText, Globe, Scale, Shield, UserCheck } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export default function TermsAndConditionsPage() {
    const effectiveDate = "January 15, 2024"

    const sections = [
        {
            title: "Acceptance of Terms",
            icon: <UserCheck size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
            content: "By accessing and using our services, you agree to be bound by these Terms."
        },
        {
            title: "Use of Services",
            icon: <Code size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
            content: "Our services are for lawful purposes only. You agree not to misuse our AI/cybersecurity tools."
        },
        {
            title: "Intellectual Property",
            icon: <FileText size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
            content: "All research, algorithms, and software are protected by intellectual property laws."
        },
        {
            title: "Limitation of Liability",
            icon: <AlertCircle size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
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
        <div className="min-h-screen bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200">
            <div className="container-mnc py-8 max-w-4xl">
                <Section
                    eyebrow="Legal"
                    title="Terms and Conditions"
                    intro="Legal agreement governing your use of Techodite services"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 text-ink-500 dark:text-ink-400 text-sm font-medium mb-8">
                        Effective Date: {effectiveDate}
                    </div>
                </Section>

                <Section id="overview" className="scroll-mt-24" eyebrow="Overview"                     title="Agreement overview" intro="Your contract with Techodite">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 rounded-lg border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 flex-shrink-0">
                            <Globe size={24} strokeWidth={1.5} className="text-brand-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-ink-900 dark:text-white">Agreement overview</h2>
                            <p className="text-ink-500 dark:text-ink-300">Your contract with Techodite</p>
                        </div>
                    </div>
                    <p className="text-ink-500 dark:text-ink-300 mb-6">
                        These Terms and Conditions ("Terms") constitute a legally binding agreement between you
                        ("User" or "You") and Techodite Solutions Pvt. Ltd. ("Techodite," "We," "Us," or "Our")
                        regarding your access to and use of our AI and cybersecurity research services, software,
                        and related materials (collectively, "Services").
                    </p>
                    <p className="text-ink-500 dark:text-ink-300">
                        By accessing or using our Services, you acknowledge that you have read, understood, and agree
                        to be bound by these Terms. If you do not agree with these Terms, you must not use our Services.
                    </p>
                </Section>

                <Section id="key-sections" className="scroll-mt-24" eyebrow="Key Sections" title="" intro="">
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

                <Section id="prohibited" className="scroll-mt-24" eyebrow="Restrictions"                     title="Prohibited activities" intro="Restricted uses of our services">
                    <p className="text-ink-500 dark:text-ink-300 mb-6">
                        You agree not to engage in any of the following prohibited activities:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {prohibitedActivities.map((activity, index) => (
                            <div key={index} className="flex items-start p-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                                <AlertCircle size={18} className="text-rose-600 dark:text-rose-400 mr-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <span className="text-ink-500 dark:text-ink-300">{activity}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 rounded-lg border border-rose-200 dark:border-rose-800/30 bg-rose-50 dark:bg-rose-900/20">
                        <h3 className="text-lg font-bold text-rose-900 dark:text-rose-100 mb-3">Consequences of violation</h3>
                        <p className="text-rose-700 dark:text-rose-300 mb-3">
                            Violation of these Terms may result in:
                        </p>
                        <ul className="space-y-2 text-rose-600 dark:text-rose-400">
                            <li className="flex items-start">
                                <span className="w-2 h-2 rounded-full bg-rose-500 mr-3 mt-1 flex-shrink-0" />
                                Immediate termination of your access to Services
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 rounded-full bg-rose-500 mr-3 mt-1 flex-shrink-0" />
                                Legal action and pursuit of damages
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 rounded-full bg-rose-500 mr-3 mt-1 flex-shrink-0" />
                                Reporting to law enforcement authorities
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 rounded-full bg-rose-500 mr-3 mt-1 flex-shrink-0" />
                                Permanent ban from all Techodite services
                            </li>
                        </ul>
                    </div>
                </Section>

                <Section id="ip" className="scroll-mt-24" eyebrow="Intellectual Property"                     title="Intellectual property rights" intro="">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-ink-900 dark:text-white mb-4">Our property</h2>
                        <p className="text-ink-500 dark:text-ink-300 mb-6">
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
                                <div key={index} className="p-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                                    <p className="text-ink-500 dark:text-ink-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-4">Your content</h3>
                        <p className="text-ink-500 dark:text-ink-300 mb-4">
                            You retain ownership of any data, content, or materials you submit to our Services ("User Content").
                            However, by submitting User Content, you grant us a license to use, reproduce, and modify such content
                            solely for the purpose of providing and improving our Services.
                        </p>
                        <div className="p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                            <h4 className="font-bold text-ink-900 dark:text-white mb-3">Research Data Usage</h4>
                            <p className="text-ink-500 dark:text-ink-300">
                                For research participation, you grant Techodite a non-exclusive, worldwide, royalty-free license
                                to use anonymized and aggregated data for AI model training and cybersecurity research purposes.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section id="licensing" className="scroll-mt-24" eyebrow="Licensing"                     title="Software licensing" intro="">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {licenses.map((license, index) => (
                            <Card key={license.type}>
                                <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-3">{license.type}</h3>
                                <p className="text-sm text-ink-500 dark:text-ink-300 mb-4">{license.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400 mb-2">Restrictions:</h4>
                                    <ul className="space-y-2">
                                        {license.restrictions.map((restriction, idx) => (
                                            <li key={idx} className="text-sm text-ink-500 dark:text-ink-300 flex items-start">
                                                <span className="w-1.5 h-1.5 rounded-full bg-ink-500 mr-2 mt-1.5 flex-shrink-0" />
                                                {restriction}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-ink-100 dark:border-ink-800">
                                    <p className="text-sm text-ink-500 dark:text-ink-400">Duration:</p>
                                    <p className="text-brand-600 dark:text-brand-400 font-bold">{license.duration}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Section>

                <Section id="liability" className="scroll-mt-24" eyebrow="Liability"                     title="Disclaimer and limitation of liability" intro="">
                    <div className="space-y-6">
                        <div className="p-6 rounded-lg border border-amber-200 dark:border-amber-800/30 bg-amber-50 dark:bg-amber-900/20">
                            <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-3">No warranty</h3>
                            <p className="text-amber-700 dark:text-amber-400">
                                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                                EITHER EXPRESS OR IMPLIED. TECHDITE DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO
                                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                            </p>
                        </div>

                        <div className="p-6 rounded-lg border border-rose-200 dark:border-rose-800/30 bg-rose-50 dark:bg-rose-900/20">
                            <h3 className="text-lg font-bold text-rose-900 dark:text-rose-100 mb-3">Limitation of liability</h3>
                            <p className="text-rose-700 dark:text-rose-400 mb-3">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, TECHDITE SHALL NOT BE LIABLE FOR:
                            </p>
                            <ul className="space-y-2 text-rose-600 dark:text-rose-400">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-rose-500 mr-3 mt-1 flex-shrink-0" />
                                    Indirect, incidental, special, consequential, or punitive damages
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-rose-500 mr-3 mt-1 flex-shrink-0" />
                                    Loss of profits, revenue, data, or use
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-rose-500 mr-3 mt-1 flex-shrink-0" />
                                    Damages resulting from unauthorized access or alterations
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-rose-500 mr-3 mt-1 flex-shrink-0" />
                                    Any third-party conduct or content
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                            <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-3">Indemnification</h3>
                            <p className="text-ink-500 dark:text-ink-300">
                                You agree to indemnify, defend, and hold harmless Techodite and its officers, directors,
                                employees, and agents from and against any claims, liabilities, damages, losses, and expenses
                                arising out of or in any way connected with your access to or use of the Services, your violation
                                of these Terms, or your infringement of any intellectual property or other rights.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section id="governing" className="scroll-mt-24" eyebrow="Governing Law"                     title="Governing law and dispute resolution" intro="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                            <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-3">Governing law</h3>
                            <p className="text-ink-500 dark:text-ink-300">
                                These Terms shall be governed by and construed in accordance with the laws of India,
                                without regard to its conflict of law provisions.
                            </p>
                        </div>

                        <div className="p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                            <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-3">Dispute resolution</h3>
                            <p className="text-ink-500 dark:text-ink-300">
                                Any disputes arising from these Terms shall first be attempted to be resolved through
                                good-faith negotiations. If unresolved, disputes shall be submitted to binding arbitration
                                in Bazarpati Bhadarpur Burhanpur Madhya Pradesh, India.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 p-6 rounded-lg border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20">
                        <h3 className="text-lg font-bold text-brand-900 dark:text-white mb-3">Contact for legal inquiries</h3>
                        <p className="text-brand-700 dark:text-brand-300 mb-3">
                            For any questions regarding these Terms, please contact our legal department:
                        </p>
                        <div className="mt-3 text-brand-600 dark:text-brand-400">
                            <p>Email: legal@techodite.com</p>
                            <p>Address: Legal Department, Techodite Solutions Pvt. Ltd., Cyber Tower, Sector 67, Noida, UP 201301</p>
                        </div>
                    </div>
                </Section>

                <div className="mt-12 p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                    <p className="text-ink-500 dark:text-ink-300 text-center">
                        Techodite reserves the right to modify these Terms at any time. We will notify users of
                        material changes via email or through our Services. Your continued use of our Services
                        after such modifications constitutes acceptance of the updated Terms.
                    </p>
                </div>
            </div>
        </div>
    )
}
