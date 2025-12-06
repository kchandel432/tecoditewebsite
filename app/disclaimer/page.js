'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Brain, Cpu, Eye, Shield, Zap } from 'lucide-react'

export default function DisclaimerPage() {
    const lastUpdated = "January 15, 2024"

    const disclaimers = [
        {
            category: "Research Information",
            icon: <Brain className="text-cyan-400" size={24} />,
            points: [
                "Our AI research is experimental and may contain inaccuracies",
                "Research findings are subject to peer review and validation",
                "We do not guarantee the accuracy of research predictions",
                "Research data may be updated or corrected without notice"
            ]
        },
        {
            category: "Security Services",
            icon: <Shield className="text-blue-400" size={24} />,
            points: [
                "No cybersecurity solution can provide 100% protection",
                "Security effectiveness depends on implementation and environment",
                "We are not liable for security breaches despite using our solutions",
                "Regular security audits and updates are user's responsibility"
            ]
        },
        {
            category: "Professional Advice",
            icon: <Eye className="text-purple-400" size={24} />,
            points: [
                "Information provided is for educational purposes only",
                "Not a substitute for professional cybersecurity consultation",
                "Not financial, legal, or medical advice",
                "Consult relevant professionals for specific guidance"
            ]
        },
        {
            category: "Third-Party Content",
            icon: <Zap className="text-yellow-400" size={24} />,
            points: [
                "We are not responsible for third-party websites linked from our site",
                "Third-party product recommendations are not endorsements",
                "We do not control third-party content accuracy or security",
                "Users access third-party links at their own risk"
            ]
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
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl mb-6">
                        <AlertTriangle className="text-yellow-400" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        Legal Disclaimer
                    </h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Important limitations and disclosures regarding our services
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full text-gray-400">
                        <span>Last Updated: {lastUpdated}</span>
                    </div>
                </motion.div>

                {/* Warning Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl border border-yellow-800/30 p-8 mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <AlertTriangle className="text-yellow-400" size={32} />
                        <h2 className="text-2xl font-bold text-white">Important Notice</h2>
                    </div>
                    <p className="text-gray-300 mb-4">
                        This disclaimer outlines important limitations regarding our AI and cybersecurity services.
                        Please read it carefully before using our services or relying on any information provided.
                    </p>
                    <p className="text-gray-300 font-medium">
                        By accessing our website or using our services, you acknowledge and agree to this disclaimer.
                    </p>
                </motion.div>

                {/* Disclaimer Sections */}
                <div className="space-y-8 mb-12">
                    {disclaimers.map((disclaimer, index) => (
                        <motion.div
                            key={disclaimer.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-900/50 rounded-xl">
                                    {disclaimer.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-white">{disclaimer.category}</h2>
                            </div>

                            <ul className="space-y-4">
                                {disclaimer.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start p-4 bg-gray-900/30 rounded-lg">
                                        <AlertTriangle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={18} />
                                        <span className="text-gray-300">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* AI-Specific Disclaimers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-cyan-900/30 rounded-xl">
                            <Cpu className="text-cyan-400" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">AI-Specific Limitations</h2>
                            <p className="text-gray-400">Important considerations for AI services</p>
                        </div>
                    </div>

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
                            <div key={index} className="p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-300">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Risk Acknowledgement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl border border-red-800/30 p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Risk Acknowledgement</h2>

                    <div className="space-y-4">
                        <p className="text-gray-300">
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
                                <div key={index} className="flex items-center p-4 bg-gray-900/50 rounded-lg">
                                    <span className="w-3 h-3 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-300">{risk}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-6 bg-black/30 rounded-xl">
                            <p className="text-gray-300 font-medium">
                                You assume all risks associated with the use of our services and agree that Techodite
                                shall not be liable for any damages resulting from these inherent risks.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* External Research Disclaimer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">External Research Disclaimer</h2>

                    <div className="space-y-4">
                        <p className="text-gray-300">
                            Techodite collaborates with academic institutions, industry partners, and independent researchers.
                            While we strive for accuracy and reliability, please note:
                        </p>

                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                Collaborative research findings represent the views of all involved parties and may not reflect Techodite's official position
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                Research publications undergo peer review but may contain errors or require corrections
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                External research data may be subject to different licensing and usage terms
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                We do not endorse all views expressed in collaborative research publications
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Final Acknowledgement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Your Acknowledgement</h2>

                    <div className="p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl border border-green-800/30 mb-6">
                        <p className="text-gray-300 mb-4">
                            By using Techodite's services, you acknowledge that:
                        </p>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                You have read and understood this disclaimer in its entirety
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                You accept the limitations and risks outlined above
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                You will not hold Techodite liable for damages within the scope of this disclaimer
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                You will seek professional advice for critical security decisions
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-400">
                            For questions about this disclaimer, contact: <span className="text-cyan-400">legal@techodite.com</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}