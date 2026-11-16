'use client'

import { AlertTriangle, Brain, Cpu, Eye, Shield, Zap } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'


export default function DisclaimerPage() {
    const lastUpdated = "January 15, 2024"

    const disclaimers = [
        {
            category: "Research Information",
            icon: <Brain size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
            points: [
                "Our AI research is experimental and may contain inaccuracies",
                "Research findings are subject to peer review and validation",
                "We do not guarantee the accuracy of research predictions",
                "Research data may be updated or corrected without notice"
            ]
        },
        {
            category: "Security Services",
            icon: <Shield size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
            points: [
                "No cybersecurity solution can provide 100% protection",
                "Security effectiveness depends on implementation and environment",
                "We are not liable for security breaches despite using our solutions",
                "Regular security audits and updates are user's responsibility"
            ]
        },
        {
            category: "Professional Advice",
            icon: <Eye size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
            points: [
                "Information provided is for educational purposes only",
                "Not a substitute for professional cybersecurity consultation",
                "Not financial, legal, or medical advice",
                "Consult relevant professionals for specific guidance"
            ]
        },
        {
            category: "Third-Party Content",
            icon: <Zap size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />,
            points: [
                "We are not responsible for third-party websites linked from our site",
                "Third-party product recommendations are not endorsements",
                "We do not control third-party content accuracy or security",
                "Users access third-party links at their own risk"
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200">
            <div className="container-mnc py-8 max-w-4xl">
                <Section
                    eyebrow="Disclaimer"
                    title="Legal Disclaimer"
                    intro="Important limitations and disclosures regarding our services"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 text-ink-500 dark:text-ink-400 text-sm font-medium mb-8">
                        Last Updated: {lastUpdated}
                    </div>
                </Section>

                <Section id="notice" className="scroll-mt-24" eyebrow="Notice"                     title="Important notice" intro="">
                    <div className="p-8 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                        <div className="flex items-center gap-4 mb-4">
                            <AlertTriangle size={32} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />
                            <h2 className="text-xl font-bold text-ink-900 dark:text-white">Important notice</h2>
                        </div>
                        <p className="text-ink-500 dark:text-ink-300 mb-4">
                            This disclaimer outlines important limitations regarding our AI and cybersecurity services.
                            Please read it carefully before using our services or relying on any information provided.
                        </p>
                        <p className="text-ink-500 dark:text-ink-300 font-medium">
                            By accessing our website or using our services, you acknowledge and agree to this disclaimer.
                        </p>
                    </div>
                </Section>

                <Section id="sections" className="scroll-mt-24" eyebrow="Disclaimers" title="" intro="">
                    <div className="space-y-8 mb-12">
                        {disclaimers.map((disclaimer, index) => (
                            <Card key={disclaimer.category}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 flex-shrink-0">
                                        {disclaimer.icon}
                                    </div>
                                    <h2 className="text-xl font-bold text-ink-900 dark:text-white">{disclaimer.category}</h2>
                                </div>

                                <ul className="space-y-4">
                                    {disclaimer.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start p-4 rounded-lg border border-ink-100 dark:border-ink-800 bg-white/50 dark:bg-white/5">
                                            <AlertTriangle size={18} className="text-brand-600 dark:text-brand-400 mr-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                            <span className="text-ink-500 dark:text-ink-300">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </Section>

                <Section id="ai" className="scroll-mt-24" eyebrow="AI Limitations"                     title="AI-specific limitations" intro="Important considerations for AI services">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Algorithmic Bias",
                                content: "AI models may reflect biases present in training data. We continuously work to identify and mitigate biases, but complete elimination may not be possible."
                            },
                            {
                                title: "Model Drift",
                                content: "AI model performance may degrade over time due to changing data patterns. Regular retraining and monitoring are essential."
                            },
                            {
                                title: "Explainability",
                                content: "Complex AI models may lack complete explainability. While we prioritize interpretability, some decisions may not be fully explainable."
                            },
                            {
                                title: "Data Dependency",
                                content: "AI model performance depends heavily on training data quality and quantity. Results may vary based on input data characteristics."
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                                <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-ink-500 dark:text-ink-300">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="risk" className="scroll-mt-24" eyebrow="Risk"                     title="Risk acknowledgement" intro="">
                    <div className="p-8 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 mb-12">
                        <h2 className="text-xl font-bold text-ink-900 dark:text-white mb-6">Risk acknowledgement</h2>

                        <p className="text-ink-500 dark:text-ink-300 mb-6">
                            You acknowledge and agree that using AI and cybersecurity services involves inherent risks, including but not limited to:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Potential security vulnerabilities despite protections",
                                "False positives/negatives in threat detection",
                                "System compatibility issues",
                                "Service interruptions or downtime",
                                "Data loss or corruption",
                                "Evolving cyber threats outpacing defenses"
                            ].map((risk, index) => (
                                <div key={index} className="flex items-center p-4 rounded-lg border border-ink-100 dark:border-ink-800 bg-white/50 dark:bg-white/5">
                                    <span className="w-3 h-3 rounded-full bg-brand-600 mr-3 flex-shrink-0" />
                                    <span className="text-ink-500 dark:text-ink-300">{risk}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-6 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-900/20">
                            <p className="text-ink-500 dark:text-ink-300 font-medium">
                                You assume all risks associated with the use of our services and agree that Techodite
                                shall not be liable for any damages resulting from these inherent risks.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section id="external" className="scroll-mt-24" eyebrow="Research"                     title="External research disclaimer" intro="">
                    <div className="p-8 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 mb-12">
                        <h2 className="text-xl font-bold text-ink-900 dark:text-white mb-6">External research disclaimer</h2>

                        <div className="space-y-4">
                            <p className="text-ink-500 dark:text-ink-300 mb-4">
                                Techodite collaborates with academic institutions, industry partners, and independent researchers.
                                While we strive for accuracy and reliability, please note:
                            </p>

                            <ul className="space-y-3 text-ink-500 dark:text-ink-300">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    Collaborative research findings represent the views of all involved parties and may not reflect Techodite's official position
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    Research publications undergo peer review but may contain errors or require corrections
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    External research data may be subject to different licensing and usage terms
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-brand-600 mr-3 mt-1 flex-shrink-0" />
                                    We do not endorse all views expressed in collaborative research publications
                                </li>
                            </ul>
                        </div>
                    </div>
                </Section>

                <Section id="acknowledgement" className="scroll-mt-24" eyebrow="Acknowledgement"                     title="Your acknowledgement" intro="">
                    <div className="p-8 rounded-lg border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 mb-6">
                        <h2 className="text-xl font-bold text-brand-900 dark:text-white mb-6">Your acknowledgement</h2>

                        <p className="text-brand-700 dark:text-brand-300 mb-4">
                            By using Techodite's services, you acknowledge that:
                        </p>
                        <ul className="space-y-3 text-brand-700 dark:text-brand-300">
                            <li className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-brand-600 mr-3" />
                                You have read and understood this disclaimer in its entirety
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-brand-600 mr-3" />
                                You accept the limitations and risks outlined above
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-brand-600 mr-3" />
                                You will not hold Techodite liable for damages within the scope of this disclaimer
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-brand-600 mr-3" />
                                You will seek professional advice for critical security decisions
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <p className="text-ink-500 dark:text-ink-300">
                            For questions about this disclaimer, contact:{' '}
                            <span className="text-brand-600 dark:text-brand-400">legal@techodite.com</span>
                        </p>
                    </div>
                </Section>
            </div>
        </div>
    )
}
