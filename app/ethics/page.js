'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Brain, CheckCircle, Eye, Globe, Heart, Scale, Shield, Target, Users } from 'lucide-react'
import { useState } from 'react'

export default function ResearchEthicsPage() {
    const [activePrinciple, setActivePrinciple] = useState(0)

    const ethicalPrinciples = [
        {
            id: 'fairness',
            title: 'Fairness & Bias Mitigation',
            icon: <Scale className="text-green-400" size={24} />,
            description: 'Ensuring AI systems treat all individuals and groups fairly',
            practices: [
                'Bias detection and mitigation algorithms',
                'Diverse training data collection',
                'Regular fairness audits',
                'Transparent decision metrics'
            ],
            standards: ['IEEE Ethically Aligned Design', 'EU AI Act']
        },
        {
            id: 'transparency',
            title: 'Transparency & Explainability',
            icon: <Eye className="text-cyan-400" size={24} />,
            description: 'Making AI decisions understandable and interpretable',
            practices: [
                'Explainable AI (XAI) techniques',
                'Clear documentation of limitations',
                'Audit trails for AI decisions',
                'Stakeholder education programs'
            ],
            standards: ['GDPR Right to Explanation', 'Algorithmic Accountability']
        },
        {
            id: 'privacy',
            title: 'Privacy & Data Protection',
            icon: <Shield className="text-blue-400" size={24} />,
            description: 'Protecting individual privacy in AI research and applications',
            practices: [
                'Differential privacy implementation',
                'Federated learning approaches',
                'Privacy-preserving AI techniques',
                'Regular privacy impact assessments'
            ],
            standards: ['GDPR', 'CCPA', 'ISO 27701']
        },
        {
            id: 'safety',
            title: 'Safety & Security',
            icon: <Target className="text-red-400" size={24} />,
            description: 'Ensuring AI systems operate safely and securely',
            practices: [
                'Robustness testing against attacks',
                'Fail-safe mechanisms',
                'Security by design approach',
                'Continuous vulnerability assessments'
            ],
            standards: ['NIST AI Risk Management', 'ISO/IEC 27001']
        },
        {
            id: 'accountability',
            title: 'Accountability & Governance',
            icon: <Users className="text-purple-400" size={24} />,
            description: 'Establishing clear responsibility for AI systems',
            practices: [
                'AI governance frameworks',
                'Ethics review boards',
                'Clear lines of accountability',
                'Regular ethical audits'
            ],
            standards: ['OECD AI Principles', 'UNESCO Recommendations']
        },
        {
            id: 'sustainability',
            title: 'Sustainability & Social Impact',
            icon: <Globe className="text-emerald-400" size={24} />,
            description: 'Considering environmental and societal impacts of AI',
            practices: [
                'Energy-efficient AI models',
                'Environmental impact assessments',
                'Social benefit analysis',
                'Sustainable AI development'
            ],
            standards: ['UN Sustainable Development Goals', 'Green AI Principles']
        }
    ]

    const reviewProcess = [
        {
            stage: 'Research Proposal',
            description: 'Initial ethics screening of research objectives and methods',
            duration: '2 weeks',
            requirements: ['Ethics checklist', 'Data management plan', 'Risk assessment']
        },
        {
            stage: 'Ethics Committee Review',
            description: 'Comprehensive review by multidisciplinary ethics committee',
            duration: '4 weeks',
            requirements: ['Detailed protocol', 'Participant safeguards', 'Mitigation strategies']
        },
        {
            stage: 'Approval & Monitoring',
            description: 'Ongoing monitoring throughout research lifecycle',
            duration: 'Project duration',
            requirements: ['Regular progress reports', 'Incident reporting', 'Final audit']
        },
        {
            stage: 'Post-Research Review',
            description: 'Assessment of ethical outcomes and lessons learned',
            duration: '2 weeks',
            requirements: ['Outcomes report', 'Impact assessment', 'Knowledge sharing']
        }
    ]

    const prohibitedResearch = [
        {
            category: 'Autonomous Weapons',
            description: 'AI systems designed for autonomous lethal force',
            justification: 'Violates principles of human dignity and control'
        },
        {
            category: 'Social Scoring Systems',
            description: 'AI for mass surveillance and social control',
            justification: 'Undermines democratic values and individual freedoms'
        },
        {
            category: 'Manipulative AI',
            description: 'AI designed to exploit psychological vulnerabilities',
            justification: 'Violates autonomy and informed consent principles'
        },
        {
            category: 'Genetic Discrimination AI',
            description: 'AI for genetic profiling and discrimination',
            justification: 'Violates principles of equality and non-discrimination'
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
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl mb-6">
                        <Brain className="text-purple-400" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        AI research ethics
                    </h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Guiding principles for responsible AI and cybersecurity research
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <span className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-full">
                            Ethical AI Development
                        </span>
                        <span className="px-4 py-2 bg-cyan-900/30 text-cyan-400 rounded-full">
                            Responsible Innovation
                        </span>
                        <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full">
                            Human-Centered Design
                        </span>
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
                        <div className="p-3 bg-purple-900/30 rounded-xl">
                            <Heart className="text-purple-400" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Our ethical commitment</h2>
                            <p className="text-gray-400">Building AI that benefits humanity</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-300 mb-6">
                                At Techodite, we believe that AI and cybersecurity research must be conducted with the highest
                                ethical standards. Our ethical framework guides every aspect of our research, from initial
                                conception to deployment and beyond.
                            </p>
                            <div className="p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                                <h3 className="text-lg font-bold text-white mb-3">Core belief</h3>
                                <p className="text-gray-300">
                                    "Technology should empower humanity, not diminish it. AI must be developed with
                                    compassion, foresight, and respect for human dignity."
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    value: '2018',
                                    label: 'Ethics Committee Established',
                                    desc: 'First in AI research in India'
                                },
                                {
                                    value: '43',
                                    label: 'Ethics Reviews Completed',
                                    desc: 'In the past year'
                                },
                                {
                                    value: '100%',
                                    label: 'Compliance Rate',
                                    desc: 'With ethical guidelines'
                                },
                                {
                                    value: '15',
                                    label: 'Ethics Publications',
                                    desc: 'In top journals'
                                }
                            ].map((stat, idx) => (
                                <div key={idx} className="p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                                    <p className="text-sm text-gray-300 font-medium">{stat.label}</p>
                                    <p className="text-xs text-gray-500">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Ethical Principles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Ethical principles</h2>

                    <div className="flex overflow-x-auto pb-4 mb-8">
                        <div className="flex space-x-4">
                            {ethicalPrinciples.map((principle, idx) => (
                                <button
                                    key={principle.id}
                                    onClick={() => setActivePrinciple(idx)}
                                    className={`flex-shrink-0 px-6 py-3 rounded-xl border transition-all ${activePrinciple === idx ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500' : 'bg-gray-800/30 border-gray-700 hover:border-gray-600'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        {principle.icon}
                                        <span className="text-white font-medium whitespace-nowrap">{principle.title}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {ethicalPrinciples.map((principle, idx) => (
                        activePrinciple === idx && (
                            <motion.div
                                key={principle.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-gray-900/50 rounded-xl">
                                                {principle.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{principle.title}</h3>
                                                <p className="text-gray-400">{principle.description}</p>
                                            </div>
                                        </div>

                                        <div className="mb-8">
                                            <h4 className="text-lg font-bold text-white mb-4">Implementation Practices</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {principle.practices.map((practice, i) => (
                                                    <div key={i} className="flex items-center p-3 bg-gray-900/30 rounded-lg border border-gray-700">
                                                        <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                                                        <span className="text-gray-300">{practice}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-800/30">
                                        <h4 className="text-lg font-bold text-white mb-4">Alignment with Standards</h4>
                                        <div className="space-y-3">
                                            {principle.standards.map((standard, i) => (
                                                <div key={i} className="p-3 bg-gray-900/30 rounded-lg">
                                                    <p className="text-gray-300">{standard}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-purple-800/30">
                                            <h4 className="text-lg font-bold text-white mb-3">Responsible Team</h4>
                                            <p className="text-gray-300 text-sm">
                                                Each principle is overseen by dedicated ethics champions from our research teams.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    ))}
                </motion.div>

                {/* Ethics Review Process */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Ethics review process</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reviewProcess.map((stage, idx) => (
                            <div key={idx} className="relative">
                                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-6 h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                            <span className="text-white font-bold">{idx + 1}</span>
                                        </div>
                                        <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">
                                            {stage.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-3">{stage.stage}</h3>
                                    <p className="text-gray-300 text-sm mb-4">{stage.description}</p>

                                    <div className="pt-4 border-t border-gray-700">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h4>
                                        <ul className="space-y-2">
                                            {stage.requirements.map((req, i) => (
                                                <li key={i} className="text-xs text-gray-400">• {req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {idx < reviewProcess.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Prohibited Research */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Prohibited Research Areas</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {prohibitedResearch.map((area, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl border border-red-800/30 p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-2 bg-red-900/30 rounded-lg">
                                        <AlertCircle className="text-red-400" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{area.category}</h3>
                                        <p className="text-gray-300 text-sm mb-3">{area.description}</p>
                                        <p className="text-red-300 text-sm">{area.justification}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Ethics Committee */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Ethics committee</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4">Committee composition</h3>
                            <p className="text-gray-300 mb-6">
                                Our Ethics Committee includes diverse perspectives to ensure comprehensive ethical oversight:
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { role: 'AI Researchers', count: 4 },
                                    { role: 'Ethics Philosophers', count: 2 },
                                    { role: 'Legal Experts', count: 2 },
                                    { role: 'Community Representatives', count: 3 },
                                    { role: 'Industry Experts', count: 2 },
                                    { role: 'Social Scientists', count: 2 }
                                ].map((member, idx) => (
                                    <div key={idx} className="p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                                        <p className="text-2xl font-bold text-white mb-1">{member.count}</p>
                                        <p className="text-sm text-gray-300">{member.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-800/30">
                            <h3 className="text-lg font-bold text-white mb-4">Contact the ethics committee</h3>
                            <p className="text-gray-300 mb-6">
                                For ethics-related inquiries, research proposals, or concerns:
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <a href="mailto:ethics@techodite.com" className="text-purple-400 hover:text-purple-300">
                                        ethics@techodite.com
                                    </a>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Chairperson</p>
                                    <p className="text-gray-300">Dr. Ananya Sharma</p>
                                    <p className="text-sm text-gray-400">Professor of AI Ethics</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Meeting Schedule</p>
                                    <p className="text-gray-300">Bi-weekly meetings, open to research teams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-800/30">
                        <h2 className="text-2xl font-bold text-white mb-6">Join our ethical AI community</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Download our ethics guidelines or collaborate with us on responsible AI research.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/ethics/guidelines.pdf"
                                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-purple-500/30 transition-all"
                            >
                                Download Ethics Guidelines
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 border border-purple-400 text-purple-400 rounded-lg font-bold hover:bg-purple-400/10 transition-all"
                            >
                                Propose Ethical Research
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}