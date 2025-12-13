'use client'

import { motion } from 'framer-motion'
import {
    BadgePercent,
    Check,
    Cloud,
    Code,
    Cpu,
    Database,
    DollarSign,
    Eye,
    IndianRupee,
    Lock,
    Network,
    Play,
    Server,
    Shield,
    TrendingDown,
    Users
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
            'Automated incident response',
            '24/7 monitoring'
        ],
        pricing: {
            starter: { inr: '₹1,499', usd: '$18', period: 'per month' },
            pro: { inr: '₹3,999', usd: '$48', period: 'per month', popular: true },
            enterprise: { inr: 'Custom Quote', usd: 'Contact Sales', period: 'tailored' }
        },
        discount: 'Save 15% on annual billing',
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
            'Compliance ready',
            'Auto-key rotation'
        ],
        pricing: {
            starter: { inr: '₹999', usd: '$12', period: 'per month' },
            pro: { inr: '₹2,499', usd: '$30', period: 'per month' },
            enterprise: { inr: 'Custom Quote', usd: 'Contact Sales', period: 'tailored' }
        },
        discount: 'First month free for startups',
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
            'Secure deployment',
            'Model versioning'
        ],
        pricing: {
            starter: { inr: '₹1,299', usd: '$16', period: 'per month' },
            pro: { inr: '₹3,499', usd: '$42', period: 'per month', popular: true },
            enterprise: { inr: 'Custom Quote', usd: 'Contact Sales', period: 'tailored' }
        },
        discount: 'Save 20% for educational institutions',
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
            'Network segmentation',
            'Device health monitoring'
        ],
        pricing: {
            starter: { inr: '₹499', usd: '$6', period: 'per device/year' },
            pro: { inr: '₹999', usd: '$12', period: 'per device/year' },
            enterprise: { inr: 'Custom Quote', usd: 'Contact Sales', period: 'tailored' }
        },
        discount: 'Bulk discounts for 100+ devices',
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
            'Automated redaction',
            'GDPR/CCPA ready'
        ],
        pricing: {
            starter: { inr: '₹1,999', usd: '$24', period: 'per month' },
            pro: { inr: '₹4,499', usd: '$54', period: 'per month', popular: true },
            enterprise: { inr: 'Custom Quote', usd: 'Contact Sales', period: 'tailored' }
        },
        discount: 'Free compliance audit included',
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
            'Cost optimization',
            'Auto-remediation'
        ],
        pricing: {
            starter: { inr: '₹1,499', usd: '$18', period: 'per month' },
            pro: { inr: '₹3,499', usd: '$42', period: 'per month' },
            enterprise: { inr: 'Custom Quote', usd: 'Contact Sales', period: 'tailored' }
        },
        discount: '30-day free trial available',
        demoLink: '/demo/cloud',
        docsLink: '/docs/cloud'
    }
]

// Helper function to format price display
function PriceDisplay({ price, showPeriod = true }) {
    return (
        <div className="space-y-1">
            <div className="flex items-center gap-2">
                <div className="flex items-center">
                    <IndianRupee size={14} className="text-green-400" />
                    <span className="text-lg font-bold text-white">{price.inr}</span>
                </div>
                <span className="text-gray-400 text-sm">/</span>
                <div className="flex items-center">
                    <DollarSign size={14} className="text-blue-400" />
                    <span className="text-sm text-gray-300">{price.usd}</span>
                </div>
            </div>
            {showPeriod && price.period !== 'tailored' && (
                <p className="text-xs text-gray-500">{price.period}</p>
            )}
        </div>
    )
}

export default function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState('sentinel-ai')
    const [selectedPlan, setSelectedPlan] = useState('pro')

    const product = aiProducts.find(p => p.id === selectedProduct)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
            <div className="container mx-auto px-6">
                {/* Hero Section with Pricing Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-900/20 text-green-400 rounded-full">
                        <BadgePercent size={16} />
                        <span className="text-sm">Startup-Friendly Pricing</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        AI Security Solutions
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        Enterprise-grade protection at startup prices. All plans include Indian Rupees (INR) and USD pricing.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <span className="px-4 py-2 bg-cyan-900/30 text-cyan-400 rounded-full flex items-center">
                            <TrendingDown size={16} className="mr-2" />
                            Affordable Plans
                        </span>
                        <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full flex items-center">
                            <IndianRupee size={16} className="mr-2" />
                            INR + USD Billing
                        </span>
                        <span className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-full flex items-center">
                            <Shield size={16} className="mr-2" />
                            Free Demos
                        </span>
                    </div>
                </motion.div>

                {/* Product Grid */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-white">Our Products</h2>
                        <div className="text-sm text-gray-400">
                            Showing {aiProducts.length} security solutions
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiProducts.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => setSelectedProduct(product.id)}
                                className={`cursor-pointer p-6 rounded-xl border transition-all relative ${selectedProduct === product.id
                                    ? 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500'
                                    : 'bg-gray-800/30 border-gray-700 hover:border-cyan-400'
                                    }`}
                            >
                                {product.discount && (
                                    <div className="absolute -top-2 right-4 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full">
                                        {product.discount}
                                    </div>
                                )}
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
                                <div className="flex items-center justify-between mt-4">
                                    <PriceDisplay price={product.pricing.starter} />
                                    <div className="flex gap-2">
                                        <span className="text-sm text-cyan-400">Starts from</span>
                                    </div>
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
                                                {product.discount && (
                                                    <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">
                                                        <BadgePercent size={12} />
                                                        {product.discount}
                                                    </div>
                                                )}
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
                                            <h3 className="text-xl font-bold text-white mb-4">Ideal For</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="p-4 bg-gray-900/30 rounded-lg">
                                                    <Users className="text-blue-400 mb-2" size={20} />
                                                    <p className="text-white font-medium">Startups & SMEs</p>
                                                    <p className="text-gray-400 text-sm">Affordable enterprise security</p>
                                                </div>
                                                <div className="p-4 bg-gray-900/30 rounded-lg">
                                                    <Server className="text-green-400 mb-2" size={20} />
                                                    <p className="text-white font-medium">Growing Businesses</p>
                                                    <p className="text-gray-400 text-sm">Scalable with your growth</p>
                                                </div>
                                                <div className="p-4 bg-gray-900/30 rounded-lg">
                                                    <Network className="text-purple-400 mb-2" size={20} />
                                                    <p className="text-white font-medium">Indian Enterprises</p>
                                                    <p className="text-gray-400 text-sm">INR billing & local support</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pricing & Actions */}
                                    <div className="lg:w-1/3">
                                        <div className="bg-gray-900/50 rounded-xl p-6 sticky top-6">
                                            <div className="flex items-center gap-2 mb-6">
                                                <h3 className="text-xl font-bold text-white">Pricing Plans</h3>
                                                <div className="flex items-center gap-1 px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">
                                                    <IndianRupee size={12} />
                                                    <DollarSign size={12} />
                                                    <span>Dual Currency</span>
                                                </div>
                                            </div>

                                            <div className="space-y-4 mb-6">
                                                {Object.entries(product.pricing).map(([plan, price]) => (
                                                    <div
                                                        key={plan}
                                                        onClick={() => setSelectedPlan(plan)}
                                                        className={`p-4 rounded-lg border cursor-pointer transition-all relative ${selectedPlan === plan
                                                            ? 'border-cyan-500 bg-cyan-900/20'
                                                            : 'border-gray-700 hover:border-gray-600'
                                                            }`}
                                                    >
                                                        {price.popular && (
                                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-cyan-600 text-white text-xs font-bold rounded-full">
                                                                Most Popular
                                                            </div>
                                                        )}
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className="text-white font-medium capitalize">
                                                                {plan}
                                                            </span>
                                                            <div className="text-right">
                                                                <div className="flex items-center justify-end gap-2">
                                                                    <span className="text-cyan-400 font-bold text-lg">
                                                                        {price.inr}
                                                                    </span>
                                                                    <span className="text-gray-400 text-sm">
                                                                        {price.usd}
                                                                    </span>
                                                                </div>
                                                                {price.period !== 'tailored' && (
                                                                    <p className="text-xs text-gray-500 mt-1">{price.period}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <p className="text-gray-400 text-sm">
                                                            {plan === 'starter' && 'Perfect for small teams and startups'}
                                                            {plan === 'pro' && 'Ideal for growing businesses with advanced needs'}
                                                            {plan === 'enterprise' && 'Custom solutions for large organizations'}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-4">
                                                <a
                                                    href={product.demoLink}
                                                    className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 text-center transition-all flex items-center justify-center"
                                                >
                                                    <Play size={18} className="mr-2" />
                                                    Request Free Demo
                                                </a>
                                                <a
                                                    href={product.docsLink}
                                                    className="block w-full px-4 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-800 text-center transition-all flex items-center justify-center"
                                                >
                                                    <Code size={18} className="mr-2" />
                                                    View Documentation
                                                </a>
                                                <div className="flex gap-2">
                                                    <a
                                                        href="/contact"
                                                        className="flex-1 px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 text-center transition-all"
                                                    >
                                                        Contact Sales
                                                    </a>
                                                    <a
                                                        href="tel:+919753089649"
                                                        className="flex-1 px-4 py-3 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400/10 text-center transition-all"
                                                    >
                                                        Call Now
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-gray-700">
                                                <p className="text-sm text-gray-400 mb-2">All plans include:</p>
                                                <ul className="space-y-2 text-sm text-gray-300">
                                                    <li className="flex items-center">
                                                        <Check size={14} className="text-green-400 mr-2" />
                                                        Indian Rupees (INR) billing
                                                    </li>
                                                    <li className="flex items-center">
                                                        <Check size={14} className="text-green-400 mr-2" />
                                                        Free product training
                                                    </li>
                                                    <li className="flex items-center">
                                                        <Check size={14} className="text-green-400 mr-2" />
                                                        Priority email support
                                                    </li>
                                                    <li className="flex items-center">
                                                        <Check size={14} className="text-green-400 mr-2" />
                                                        Regular security updates
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
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <IndianRupee className="text-green-400" />
                            <h2 className="text-3xl font-bold text-white">Indian Startup Special</h2>
                        </div>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
                            Get additional 20% discount for Indian startups and MSMEs registered under Startup India.
                        </p>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            All prices shown are in Indian Rupees with USD equivalents. Contact us for annual billing discounts and custom enterprise solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-green-500/30 transition-all"
                            >
                                <IndianRupee className="inline mr-2" size={20} />
                                Claim Startup Discount
                            </a>
                            <a
                                href="tel:+919753089649"
                                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-bold hover:bg-cyan-400/10 transition-all"
                            >
                                Call: +91 9753089649
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
