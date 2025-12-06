'use client'

import { Cookie, Database, Download, RefreshCw, Settings, Shield, Target } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CookieManager() {
    const [preferences, setPreferences] = useState(null)
    const [activeCookies, setActiveCookies] = useState([])
    const [cookieList, setCookieList] = useState([])

    useEffect(() => {
        // Load saved preferences
        const saved = localStorage.getItem('techodite-cookie-preferences')
        if (saved) {
            const parsed = JSON.parse(saved)
            setPreferences(parsed)

            // Set active cookies based on preferences
            const active = []
            if (parsed.essential) active.push('Essential')
            if (parsed.analytics) active.push('Analytics')
            if (parsed.marketing) active.push('Marketing')
            if (parsed.personalization) active.push('Personalization')
            setActiveCookies(active)
        }

        // Listen for cookie updates
        const handleCookieUpdate = (event) => {
            setPreferences(event.detail)
        }

        window.addEventListener('cookiePreferencesUpdated', handleCookieUpdate)

        // Simulate fetching actual cookies
        const simulatedCookies = [
            { name: 'session_id', category: 'Essential', expires: 'Session', domain: '.techodite.com' },
            { name: '_ga', category: 'Analytics', expires: '2 years', domain: '.techodite.com' },
            { name: '_gid', category: 'Analytics', expires: '24 hours', domain: '.techodite.com' },
            { name: 'consent_status', category: 'Essential', expires: '1 year', domain: '.techodite.com' },
            { name: 'user_preferences', category: 'Personalization', expires: '1 year', domain: '.techodite.com' },
        ]
        setCookieList(simulatedCookies)

        return () => {
            window.removeEventListener('cookiePreferencesUpdated', handleCookieUpdate)
        }
    }, [])

    const updatePreference = (category, value) => {
        if (category === 'essential') return // Can't change essential

        const newPrefs = { ...preferences, [category]: value }
        setPreferences(newPrefs)
        localStorage.setItem('techodite-cookie-preferences', JSON.stringify(newPrefs))

        window.dispatchEvent(new CustomEvent('cookiePreferencesUpdated', {
            detail: newPrefs
        }))
    }

    const exportCookies = () => {
        const data = {
            preferences,
            activeCookies: cookieList.filter(c => preferences[c.category.toLowerCase()]),
            timestamp: new Date().toISOString()
        }

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `techodite-cookies-${new Date().toISOString().split('T')[0]}.json`
        a.click()
    }

    const clearNonEssential = () => {
        const onlyEssential = {
            essential: true,
            analytics: false,
            marketing: false,
            personalization: false
        }
        setPreferences(onlyEssential)
        localStorage.setItem('techodite-cookie-preferences', JSON.stringify(onlyEssential))

        window.dispatchEvent(new CustomEvent('cookiePreferencesUpdated', {
            detail: onlyEssential
        }))
    }

    if (!preferences) return null

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl">
                        <Cookie className="text-cyan-400" size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Cookie Manager</h2>
                        <p className="text-gray-400">Manage your cookie preferences in real-time</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={exportCookies}
                        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors flex items-center gap-2"
                    >
                        <Download size={18} />
                        <span>Export Data</span>
                    </button>
                    <button
                        onClick={clearNonEssential}
                        className="px-4 py-2 border border-red-400 text-red-400 rounded-lg hover:bg-red-400/10 transition-colors flex items-center gap-2"
                    >
                        <RefreshCw size={18} />
                        <span>Clear Non-Essential</span>
                    </button>
                </div>
            </div>

            {/* Current Status */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-cyan-900/30 rounded-lg">
                            <Shield className="text-cyan-400" size={20} />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs ${preferences.essential ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                            {preferences.essential ? 'Active' : 'Inactive'}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Essential</h3>
                    <p className="text-sm text-gray-400">Required for website functionality</p>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-xs text-gray-500">Cannot be disabled</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-blue-900/30 rounded-lg">
                            <Database className="text-blue-400" size={20} />
                        </div>
                        <button
                            onClick={() => updatePreference('analytics', !preferences.analytics)}
                            className={`w-12 h-6 rounded-full transition-all relative ${preferences.analytics ? 'bg-blue-500' : 'bg-gray-700'}`}
                        >
                            <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${preferences.analytics ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Analytics</h3>
                    <p className="text-sm text-gray-400">Website usage analysis</p>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-xs text-gray-500">{preferences.analytics ? 'Cookies active' : 'Cookies blocked'}</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-purple-900/30 rounded-lg">
                            <Target className="text-purple-400" size={20} />
                        </div>
                        <button
                            onClick={() => updatePreference('marketing', !preferences.marketing)}
                            className={`w-12 h-6 rounded-full transition-all relative ${preferences.marketing ? 'bg-purple-500' : 'bg-gray-700'}`}
                        >
                            <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${preferences.marketing ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Marketing</h3>
                    <p className="text-sm text-gray-400">Personalized advertisements</p>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-xs text-gray-500">{preferences.marketing ? 'Cookies active' : 'Cookies blocked'}</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-green-900/30 rounded-lg">
                            <Settings className="text-green-400" size={20} />
                        </div>
                        <button
                            onClick={() => updatePreference('personalization', !preferences.personalization)}
                            className={`w-12 h-6 rounded-full transition-all relative ${preferences.personalization ? 'bg-green-500' : 'bg-gray-700'}`}
                        >
                            <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${preferences.personalization ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Personalization</h3>
                    <p className="text-sm text-gray-400">Customized experience</p>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-xs text-gray-500">{preferences.personalization ? 'Cookies active' : 'Cookies blocked'}</p>
                    </div>
                </div>
            </div>

            {/* Active Cookies List */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-2">Active Cookies</h3>
                    <p className="text-gray-400">Cookies currently stored on your device</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-900/50">
                            <tr>
                                <th className="text-left p-4 text-gray-300 font-semibold">Cookie Name</th>
                                <th className="text-left p-4 text-gray-300 font-semibold">Category</th>
                                <th className="text-left p-4 text-gray-300 font-semibold">Expires</th>
                                <th className="text-left p-4 text-gray-300 font-semibold">Domain</th>
                                <th className="text-left p-4 text-gray-300 font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cookieList
                                .filter(cookie => preferences[cookie.category.toLowerCase()])
                                .map((cookie, index) => (
                                    <tr key={index} className="border-t border-gray-700 hover:bg-gray-800/30">
                                        <td className="p-4">
                                            <code className="text-cyan-400 font-mono">{cookie.name}</code>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-xs ${cookie.category === 'Essential' ? 'bg-cyan-900/30 text-cyan-400' :
                                                    cookie.category === 'Analytics' ? 'bg-blue-900/30 text-blue-400' :
                                                        cookie.category === 'Marketing' ? 'bg-purple-900/30 text-purple-400' :
                                                            'bg-green-900/30 text-green-400'
                                                }`}>
                                                {cookie.category}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-300">{cookie.expires}</td>
                                        <td className="p-4 text-gray-300">{cookie.domain}</td>
                                        <td className="p-4">
                                            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs">
                                                Active
                                            </span>
                                        </td>
                                    </tr>
                                ))}

                            {cookieList.filter(cookie => preferences[cookie.category.toLowerCase()]).length === 0 && (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center">
                                        <div className="text-gray-500">
                                            No cookies are currently active based on your preferences
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-lg font-bold text-white mb-4">Cookie Summary</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-gray-400">Essential Cookies</span>
                            <span className="text-green-400 font-bold">Active</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Analytics Cookies</span>
                            <span className={preferences.analytics ? 'text-green-400' : 'text-red-400'}>{preferences.analytics ? 'Active' : 'Blocked'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Marketing Cookies</span>
                            <span className={preferences.marketing ? 'text-green-400' : 'text-red-400'}>{preferences.marketing ? 'Active' : 'Blocked'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Personalization Cookies</span>
                            <span className={preferences.personalization ? 'text-green-400' : 'text-red-400'}>{preferences.personalization ? 'Active' : 'Blocked'}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-6 border border-cyan-800/30 md:col-span-2">
                    <h3 className="text-lg font-bold text-white mb-4">What do these preferences mean?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-white mb-2">Active Cookies</h4>
                            <p className="text-sm text-gray-300">
                                Websites can store and read data from these cookies. They help provide personalized experiences and gather analytics.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">Blocked Cookies</h4>
                            <p className="text-sm text-gray-300">
                                These cookies are not stored on your device. Some website features may not work as expected without them.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-cyan-800/30">
                        <p className="text-sm text-cyan-400">
                            Your preferences are saved automatically and apply across all Techodite services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}