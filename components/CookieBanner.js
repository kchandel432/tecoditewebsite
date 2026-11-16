'use client'

import { Check, Cookie, Settings, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

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
        const bannerDismissed = localStorage.getItem('cookie-banner-dismissed')
        const savedPreferences = localStorage.getItem('techodite-cookie-preferences')

        if (!bannerDismissed) {
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
        if (key === 'essential') return
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    return (
        <>
            {showBanner && (
                <>
                    {showSettings && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <div className="fixed inset-0 bg-ink-900/60 backdrop-blur-sm" />
                            <div className="relative z-10 w-full max-w-lg rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 p-6 shadow-card">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 flex-shrink-0">
                                            <Settings size={24} strokeWidth={1.5} className="text-ink-600 dark:text-ink-400" />
                                        </div>
                                        <h3 className="text-lg font-bold text-ink-900 dark:text-white">Cookie preferences</h3>
                                    </div>
                                    <button
                                        onClick={() => setShowSettings(false)}
                                        className="p-2 rounded-lg text-ink-400 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800 transition-colors"
                                    >
                                        <X size={20} strokeWidth={1.5} />
                                    </button>
                                </div>

                                <div className="space-y-4 mb-6">
                                    {[
                                        { key: 'essential', label: 'Essential Cookies', description: 'Required for website functionality', required: true },
                                        { key: 'analytics', label: 'Analytics Cookies', description: 'Help us improve our website' },
                                        { key: 'marketing', label: 'Marketing Cookies', description: 'Show relevant advertisements' },
                                        { key: 'personalization', label: 'Personalization Cookies', description: 'Remember your preferences' }
                                    ].map((cookie) => (
                                        <div key={cookie.key} className="flex items-start justify-between p-4 rounded-lg border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900/50">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-semibold text-ink-900 dark:text-white">{cookie.label}</h4>
                                                    {cookie.required && (
                                                        <span className="px-2 py-0.5 rounded text-xs border border-brand-200 dark:border-brand-800/30 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400">Required</span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-ink-500 dark:text-ink-300">{cookie.description}</p>
                                            </div>
                                            {cookie.required ? (
                                                <div className="px-3 py-1 rounded text-xs border border-ink-200 dark:border-ink-700 bg-ink-100 dark:bg-ink-800 text-ink-500 dark:text-ink-300">
                                                    Always on
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => togglePreference(cookie.key)}
                                                    className={`relative w-12 h-6 rounded-full transition-colors ${preferences[cookie.key] ? 'bg-brand-600' : 'bg-ink-200 dark:bg-ink-700'}`}
                                                >
                                                    <span className={`absolute top-0.5 ${preferences[cookie.key] ? 'right-0.5' : 'left-0.5'} w-5 h-5 rounded-full bg-white transition-transform`} />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-3 pt-4 border-t border-ink-100 dark:border-ink-800">
                                    <Button variant="secondary" onClick={handleRejectAll}>
                                        Reject All
                                    </Button>
                                    <Button onClick={handleSavePreferences}>
                                        Save Preferences
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                        <div className="container-mnc px-6 py-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 flex-shrink-0">
                                        <Cookie size={24} strokeWidth={1.5} className="text-brand-600 dark:text-brand-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-ink-900 dark:text-white mb-1">We use cookies</h3>
                                        <p className="text-sm text-ink-500 dark:text-ink-300">
                                            We use cookies to enhance your browsing experience, analyze site traffic, and personalise content. By clicking “Accept All”, you consent to our use of cookies.
                                        </p>
                                        <a
                                            href="/cookies"
                                            className="text-sm text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 transition-colors inline-flex items-center gap-1 mt-2"
                                        >
                                            Learn more about our Cookie Policy
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setShowSettings(true)}
                                        className="px-4 py-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-700 dark:text-white text-sm font-medium hover:bg-ink-50 dark:hover:bg-ink-700 transition-colors"
                                    >
                                        <Settings size={16} strokeWidth={1.5} className="mr-2" />
                                        Manage
                                    </button>
                                    <Button variant="secondary" onClick={handleRejectAll} size="sm">
                                        Reject All
                                    </Button>
                                    <Button onClick={handleAcceptAll} size="sm">
                                        Accept All
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
