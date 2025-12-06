'use client'

import ComplianceDashboard from '@/components/ComplianceDashboard'
import CookieManager from '@/components/CookieManager'
import { motion } from 'framer-motion'
import { ChevronDown, Cookie, Database, Settings, Shield, Target } from 'lucide-react'
import { useState } from 'react'

export default function CookiesPage() {
    const [activeTab, setActiveTab] = useState('manage')

    const cookieCategories = [
        {
            id: 'essential',
            name: 'Essential Cookies',
            icon: <Shield className="text-green-400" size={24} />,
            description: 'Required for website functionality',
            examples: ['Authentication', 'Security tokens', 'Session management'],
            required: true
        },
        {
            id: 'analytics',
            name: 'Analytics Cookies',
            icon: <Database className="text-blue-400" size={24} />,
            description: 'Help us improve our website',
            examples: ['Page visits', 'Time on site', 'Error tracking'],
            required: false
        },
        {
            id: 'marketing',
            name: 'Marketing Cookies',
            icon: <Target className="text-purple-400" size={24} />,
            description: 'Show relevant advertisements',
            examples: ['Ad targeting', 'Conversion tracking', 'Remarketing'],
            required: false
        },
        {
            id: 'personalization',
            name: 'Personalization Cookies',
            icon: <Settings className="text-cyan-400" size={24} />,
            description: 'Remember your preferences',
            examples: ['Language settings', 'Theme preferences', 'Layout choices'],
            required: false
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
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl mb-6">
                        <Cookie className="text-green-400" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        Cookie Management Center
                    </h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Control your privacy preferences in real-time
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex border-b border-gray-700 mb-8">
                    <button
                        onClick={() => setActiveTab('manage')}
                        className={`px-6 py-3 border-b-2 transition-all ${activeTab === 'manage' ? 'border-cyan-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
                    >
                        Manage Cookies
                    </button>
                    <button
                        onClick={() => setActiveTab('compliance')}
                        className={`px-6 py-3 border-b-2 transition-all ${activeTab === 'compliance' ? 'border-blue-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
                    >
                        Compliance Dashboard
                    </button>
                    <button
                        onClick={() => setActiveTab('learn')}
                        className={`px-6 py-3 border-b-2 transition-all ${activeTab === 'learn' ? 'border-green-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
                    >
                        Learn More
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'manage' && <CookieManager />}

                {activeTab === 'compliance' && <ComplianceDashboard />}

                {activeTab === 'learn' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Understanding Cookies</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {cookieCategories.map((category) => (
                                    <div key={category.id} className="p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-gray-900/50 rounded-lg">
                                                {category.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                                                <p className="text-gray-400">{category.description}</p>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {category.examples.map((example, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm">
                                                        {example}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={`px-4 py-2 rounded-lg ${category.required ? 'bg-green-900/30 text-green-400' : 'bg-gray-800/50 text-gray-300'}`}>
                                            {category.required ? 'Required - Cannot be disabled' : 'Optional - Can be disabled'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>

                            <div className="space-y-4">
                                {[
                                    {
                                        question: 'How do I change my cookie preferences?',
                                        answer: 'You can change your cookie preferences at any time using the Cookie Manager above. Your changes take effect immediately.'
                                    },
                                    {
                                        question: 'What happens if I reject all cookies?',
                                        answer: 'Essential cookies will remain active for website functionality. Non-essential cookies will be blocked, which may affect some website features.'
                                    },
                                    {
                                        question: 'How often should I review my preferences?',
                                        answer: 'We recommend reviewing your cookie preferences every 6 months or whenever you clear your browser cookies.'
                                    },
                                    {
                                        question: 'Are my preferences saved across devices?',
                                        answer: 'Preferences are saved locally on each device. You need to set preferences separately on each device.'
                                    }
                                ].map((faq, idx) => (
                                    <div key={idx} className="border border-gray-700 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => { }}
                                            className="w-full p-6 flex items-center justify-between bg-gray-900/30 hover:bg-gray-800/30 transition-colors"
                                        >
                                            <h3 className="text-lg font-bold text-white text-left">{faq.question}</h3>
                                            <ChevronDown className="text-gray-400" size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}