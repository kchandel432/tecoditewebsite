'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Check, Cookie, Settings, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [preferences, setPreferences] = useState({
        essential: true,
        analytics: false,
        marketing: false,
        personalization: false
    })

    useEffect(() => {
        // Check if user has already made a choice
        const savedPreferences = localStorage.getItem('techodite-cookie-preferences')
        const bannerDismissed = localStorage.getItem('cookie-banner-dismissed')

        if (!bannerDismissed) {
            // Show banner after 1 second
            const timer = setTimeout(() => {
                setShowBanner(true)
            }, 1000)

            return () => clearTimeout(timer)
        }

        if (savedPreferences) {
            setPreferences(JSON.parse(savedPreferences))
        }
    }, [])

    const handleAcceptAll = () => {
        const allAccepted = {
            essential: true,
            analytics: true,
            marketing: true,
            personalization: true
        }
        setPreferences(allAccepted)
        localStorage.setItem('techodite-cookie-preferences', JSON.stringify(allAccepted))
        localStorage.setItem('cookie-banner-dismissed', 'true')
        setShowBanner(false)

        // Emit event for other components
        window.dispatchEvent(new CustomEvent('cookiePreferencesUpdated', {
            detail: allAccepted
        }))
    }

    const handleSavePreferences = () => {
        localStorage.setItem('techodite-cookie-preferences', JSON.stringify(preferences))
        localStorage.setItem('cookie-banner-dismissed', 'true')
        setShowBanner(false)
        setShowSettings(false)

        window.dispatchEvent(new CustomEvent('cookiePreferencesUpdated', {
            detail: preferences
        }))
    }

    const handleRejectAll = () => {
        const onlyEssential = {
            essential: true,
            analytics: false,
            marketing: false,
            personalization: false
        }
        setPreferences(onlyEssential)
        localStorage.setItem('techodite-cookie-preferences', JSON.stringify(onlyEssential))
        localStorage.setItem('cookie-banner-dismissed', 'true')
        setShowBanner(false)

        window.dispatchEvent(new CustomEvent('cookiePreferencesUpdated', {
            detail: onlyEssential
        }))
    }

    const togglePreference = (key) => {
        if (key === 'essential') return // Essential cookies cannot be disabled
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-0 left-0 right-0 z-50"
                >
                    {/* Settings Modal */}
                    {showSettings && (
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-gray-900 rounded-2xl border border-gray-700 w-full max-w-lg"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-purple-900/30 rounded-lg">
                                                <Settings className="text-purple-400" size={24} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Cookie Preferences</h3>
                                        </div>
                                        <button
                                            onClick={() => setShowSettings(false)}
                                            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                                        >
                                            <X className="text-gray-400" size={20} />
                                        </button>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        {[
                                            { key: 'essential', label: 'Essential Cookies', description: 'Required for website functionality', required: true },
                                            { key: 'analytics', label: 'Analytics Cookies', description: 'Help us improve our website' },
                                            { key: 'marketing', label: 'Marketing Cookies', description: 'Show relevant advertisements' },
                                            { key: 'personalization', label: 'Personalization Cookies', description: 'Remember your preferences' }
                                        ].map((cookie) => (
                                            <div key={cookie.key} className="flex items-start justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h4 className="font-bold text-white">{cookie.label}</h4>
                                                        {cookie.required && (
                                                            <span className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded-full text-xs">Required</span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-gray-400">{cookie.description}</p>
                                                </div>
                                                {cookie.required ? (
                                                    <div className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm">
                                                        Always on
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() => togglePreference(cookie.key)}
                                                        className={`w-12 h-6 rounded-full transition-all relative ${preferences[cookie.key] ? 'bg-green-500' : 'bg-gray-700'}`}
                                                    >
                                                        <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${preferences[cookie.key] ? 'left-7' : 'left-1'}`} />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={handleSavePreferences}
                                            className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                                        >
                                            Save Preferences
                                        </button>
                                        <button
                                            onClick={handleRejectAll}
                                            className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                                        >
                                            Reject All
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}

                    {/* Main Banner */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
                        <div className="container mx-auto px-6 py-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg">
                                        <Cookie className="text-cyan-400" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-white mb-1">We use cookies</h3>
                                        <p className="text-sm text-gray-400">
                                            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.
                                        </p>
                                        <a
                                            href="/cookies"
                                            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 mt-2"
                                        >
                                            Learn more about our Cookie Policy
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setShowSettings(true)}
                                        className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
                                    >
                                        <Settings size={16} />
                                        <span>Customize</span>
                                    </button>
                                    <button
                                        onClick={handleRejectAll}
                                        className="px-4 py-2 border border-red-800 text-red-400 rounded-lg hover:bg-red-900/20 transition-colors"
                                    >
                                        Reject All
                                    </button>
                                    <button
                                        onClick={handleAcceptAll}
                                        className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2"
                                    >
                                        <Check size={16} />
                                        <span>Accept All</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}