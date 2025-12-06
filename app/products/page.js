'use client'

import { motion } from 'framer-motion'
import {
    Brain,
    Check,
    Cloud,
    Code,
    Cpu,
    Database,
    Eye,
    Lock,
    Network,
    Play,
    Server,
    Shield,
    Users,
    Zap
} from 'lucide-react'
import { useState } from 'react'

const aiProducts = [
    {
        id: 'sentinel-ai',
        name: 'Sentinel AI',
        category: 'Threat Detection',
        description: 'Real-time AI-powered threat detection platform using deep learning for anomaly detection.',
        icon: <Eye className="text-red-400" size={24} />,
        features: [
            'Real-time anomaly detection',
            'Behavioral analysis',
            'Predictive threat intelligence',
            'Automated incident response'
        ],
        pricing: {
            starter: '$999/month',
            pro: '$2,999/month',
            enterprise: 'Custom'
        },
        demoLink: '/demo/sentinel',
        docsLink: '/docs/sentinel'
    },
    {
        id: 'quantum-shield',
        name: 'QuantumShield',
        category: 'Encryption',
        description: 'Post-quantum cryptographic suite for future-proof data encryption.',
        icon: <Lock className="text-purple-400" size={24} />,
        features: [
            'Quantum-resistant algorithms',
            'Hardware acceleration',
            'Key management system',
            'Compliance ready'
        ],
        pricing: {
            starter: '$499/month',
            pro: '$1,499/month',
            enterprise: 'Custom'
        },
        demoLink: '/demo/quantum',
        docsLink: '/docs/quantum'
    },
    {
        id: 'ai-secure',
        name: 'AISecure',
        category: 'ML Security',
        description: 'Protect machine learning models from adversarial attacks and data poisoning.',
        icon: <Shield className="text-blue-400" size={24} />,
        features: [
            'Adversarial robustness testing',
            'Model watermarking',
            'Data integrity verification',
            'Secure deployment'
        ],
        pricing: {
            starter: '$799/month',
            pro: '$2,199/month',
            enterprise: 'Custom'
        },
        demoLink: '/demo/aisecure',
        docsLink: '/docs/aisecure'
    },
    {
        id: 'edge-guard',
        name: 'EdgeGuard',
        category: 'IoT Security',
        description: 'Lightweight security framework for IoT and edge computing environments.',
        icon: <Cpu className="text-green-400" size={24} />,
        features: [
            'Device authentication',
            'Secure firmware updates',
            'Edge AI security',
            'Network segmentation'
        ],
        pricing: {
            starter: '$299/device/year',
            pro: '$599/device/year',
            enterprise: 'Custom'
        },
        demoLink: '/demo/edgeguard',
        docsLink: '/docs/edgeguard'
    },
    {
        id: 'data-shield',
        name: 'DataShield AI',
        category: 'Data Security',
        description: 'AI-driven data loss prevention and privacy protection platform.',
        icon: <Database className="text-cyan-400" size={24} />,
        features: [
            'Data classification',
            'Privacy compliance',
            'User behavior analytics',
            'Automated redaction'
        ],
        pricing: {
            starter: '$1,299/month',
            pro: '$3,499/month',
            enterprise: 'Custom'
        },
        demoLink: '/demo/datashield',
        docsLink: '/docs/datashield'
    },
    {
        id: 'cloud-sentinel',
        name: 'CloudSentinel',
        category: 'Cloud Security',
        description: 'Comprehensive cloud security with AI-powered monitoring and automation.',
        icon: <Cloud className="text-yellow-400" size={24} />,
        features: [
            'Multi-cloud protection',
            'Zero-trust architecture',
            'Compliance automation',
            'Cost optimization'
        ],
        pricing: {
            starter: '$899/month',
            pro: '$2,499/month',
            enterprise: 'Custom'
        },
        demoLink: '/demo/cloud',
        docsLink: '/docs/cloud'
    }
]

export default function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState('sentinel-ai')
    const [selectedPlan, setSelectedPlan] = useState('pro')

    const product = aiProducts.find(p => p.id === selectedProduct)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        AI-Powered Security Solutions
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Enterprise-grade AI and cybersecurity products built on years of research and real-world testing.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <span className="px-4 py-2 bg-cyan-900/30 text-cyan-400 rounded-full flex items-center">
                            <Brain size={16} className="mr-2" />
                            AI-Powered
                        </span>
                        <span className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-full flex items-center">
                            <Shield size={16} className="mr-2" />
                            Enterprise Ready
                        </span>
                        <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full flex items-center">
                            <Zap size={16} className="mr-2" />
                            Real-time Protection
                        </span>
                    </div>
                </motion.div>

                {/* Product Grid */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8">Our Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiProducts.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => setSelectedProduct(product.id)}
                                className={`cursor-pointer p-6 rounded-xl border transition-all ${selectedProduct === product.id
                                        ? 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500'
                                        : 'bg-gray-800/30 border-gray-700 hover:border-cyan-400'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-gray-900/50 rounded-lg">
                                        {product.icon}
                                    </div>
                                    <span className="px-3 py-1 bg-gray-900/50 text-gray-300 rounded-full text-sm">
                                        {product.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-cyan-400 font-bold">{product.pricing.starter}</span>
                                    <span className="text-sm text-gray-500">Starts from</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                {product && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20"
                    >
                        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 overflow-hidden">
                            <div className="p-8">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Product Info */}
                                    <div className="lg:w-2/3">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-4 bg-gray-900/50 rounded-xl">
                                                {product.icon}
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-bold text-white">{product.name}</h2>
                                                <p className="text-gray-400">{product.description}</p>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {product.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center p-3 bg-gray-900/50 rounded-lg">
                                                        <Check size={16} className="text-green-400 mr-3" />
                                                        <span className="text-gray-300">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Use Cases */}
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="p-4 bg-gray-900/30 rounded-lg">
                                                    <Users className="text-blue-400 mb-2" size={20} />
                                                    <p className="text-white font-medium">Enterprise Security</p>
                                                    <p className="text-gray-400 text-sm">Large organization protection</p>
                                                </div>
                                                <div className="p-4 bg-gray-900/30 rounded-lg">
                                                    <Server className="text-green-400 mb-2" size={20} />
                                                    <p className="text-white font-medium">Critical Infrastructure</p>
                                                    <p className="text-gray-400 text-sm">SCADA & industrial systems</p>
                                                </div>
                                                <div className="p-4 bg-gray-900/30 rounded-lg">
                                                    <Network className="text-purple-400 mb-2" size={20} />
                                                    <p className="text-white font-medium">Government & Defense</p>
                                                    <p className="text-gray-400 text-sm">National security applications</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pricing & Actions */}
                                    <div className="lg:w-1/3">
                                        <div className="bg-gray-900/50 rounded-xl p-6 sticky top-6">
                                            <h3 className="text-xl font-bold text-white mb-6">Pricing Plans</h3>

                                            <div className="space-y-4 mb-6">
                                                {['starter', 'pro', 'enterprise'].map((plan) => (
                                                    <div
                                                        key={plan}
                                                        onClick={() => setSelectedPlan(plan)}
                                                        className={`p-4 rounded-lg border cursor-pointer transition-all ${selectedPlan === plan
                                                                ? 'border-cyan-500 bg-cyan-900/20'
                                                                : 'border-gray-700 hover:border-gray-600'
                                                            }`}
                                                    >
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className="text-white font-medium capitalize">{plan}</span>
                                                            <span className="text-cyan-400 font-bold">
                                                                {product.pricing[plan]}
                                                            </span>
                                                        </div>
                                                        <p className="text-gray-400 text-sm">
                                                            {plan === 'starter' && 'Perfect for small teams'}
                                                            {plan === 'pro' && 'Ideal for growing businesses'}
                                                            {plan === 'enterprise' && 'Custom solutions for large organizations'}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-4">
                                                <a
                                                    href={product.demoLink}
                                                    className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 text-center transition-all"
                                                >
                                                    <Play size={18} className="inline mr-2" />
                                                    Request Demo
                                                </a>
                                                <a
                                                    href={product.docsLink}
                                                    className="block w-full px-4 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-800 text-center transition-all"
                                                >
                                                    <Code size={18} className="inline mr-2" />
                                                    View Documentation
                                                </a>
                                                <a
                                                    href="/contact"
                                                    className="block w-full px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 text-center transition-all"
                                                >
                                                    Contact Sales
                                                </a>
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-gray-700">
                                                <p className="text-sm text-gray-400 mb-2">Includes:</p>
                                                <ul className="space-y-2 text-sm text-gray-300">
                                                    <li className="flex items-center">
                                                        <Check size={14} className="text-green-400 mr-2" />
                                                        24/7 Support
                                                    </li>
                                                    <li className="flex items-center">
                                                        <Check size={14} className="text-green-400 mr-2" />
                                                        Regular Updates
                                                    </li>
                                                    <li className="flex items-center">
                                                        <Check size={14} className="text-green-400 mr-2" />
                                                        Security Audits
                                                    </li>
                                                    <li className="flex items-center">
                                                        <Check size={14} className="text-green-400 mr-2" />
                                                        Training Sessions
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-12 border border-cyan-800/30">
                        <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Our research team can develop tailored AI and cybersecurity solutions for your specific business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
                            >
                                Request Custom Solution
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-bold hover:bg-cyan-400/10 transition-all"
                            >
                                Schedule Technical Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}