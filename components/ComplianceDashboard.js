'use client'

import {
    AlertCircle,
    CheckCircle,
    Clock,
    Database,
    Download,
    FileText,
    Globe,
    Lock,
    RefreshCw,
    Shield,
    TrendingUp,
    Users
} from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ComplianceDashboard() {
    const [complianceData, setComplianceData] = useState({
        gdpr: { status: 'compliant', lastCheck: new Date().toISOString(), issues: 0 },
        ccpa: { status: 'compliant', lastCheck: new Date().toISOString(), issues: 0 },
        lgpd: { status: 'compliant', lastCheck: new Date().toISOString(), issues: 0 },
        pipeda: { status: 'compliant', lastCheck: new Date().toISOString(), issues: 0 },
        iso27001: { status: 'certified', lastCheck: new Date().toISOString(), expires: '2025-12-31' },
        soc2: { status: 'certified', lastCheck: new Date().toISOString(), expires: '2024-12-31' }
    })

    const [dataRequests, setDataRequests] = useState([])
    const [userConsents, setUserConsents] = useState({
        total: 15432,
        last30Days: 1243,
        byRegion: {
            eu: 6543,
            us: 5432,
            other: 3457
        }
    })

    useEffect(() => {
        // Simulate fetching compliance data
        const fetchComplianceData = async () => {
            // In a real app, this would be an API call
            setTimeout(() => {
                setComplianceData(prev => ({
                    ...prev,
                    lastCheck: new Date().toISOString()
                }))
            }, 1000)
        }

        fetchComplianceData()
        const interval = setInterval(fetchComplianceData, 60000) // Update every minute

        // Simulate data requests
        const mockRequests = [
            { id: 1, type: 'access', user: 'user@example.com', status: 'completed', date: '2024-01-15' },
            { id: 2, type: 'deletion', user: 'user2@example.com', status: 'pending', date: '2024-01-16' },
            { id: 3, type: 'export', user: 'user3@example.com', status: 'processing', date: '2024-01-16' },
            { id: 4, type: 'rectification', user: 'user4@example.com', status: 'completed', date: '2024-01-14' },
        ]
        setDataRequests(mockRequests)

        return () => clearInterval(interval)
    }, [])

    const runComplianceCheck = () => {
        // Simulate running compliance checks
        setComplianceData(prev => ({
            ...prev,
            lastCheck: new Date().toISOString(),
            gdpr: { ...prev.gdpr, issues: Math.floor(Math.random() * 3) }
        }))
    }

    const generateComplianceReport = () => {
        const report = {
            timestamp: new Date().toISOString(),
            complianceStatus: complianceData,
            userConsents,
            dataRequests: dataRequests.length,
            summary: 'Techodite Compliance Report'
        }

        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `compliance-report-${new Date().toISOString().split('T')[0]}.json`
        a.click()
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'compliant':
            case 'certified':
                return 'text-green-400 bg-green-900/30'
            case 'pending':
                return 'text-yellow-400 bg-yellow-900/30'
            case 'non-compliant':
                return 'text-red-400 bg-red-900/30'
            default:
                return 'text-gray-400 bg-gray-900/30'
        }
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case 'compliant':
            case 'certified':
                return <CheckCircle className="text-green-400" size={20} />
            case 'pending':
                return <Clock className="text-yellow-400" size={20} />
            default:
                return <AlertCircle className="text-red-400" size={20} />
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl">
                        <Shield className="text-blue-400" size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Compliance Dashboard</h2>
                        <p className="text-gray-400">Real-time compliance monitoring and management</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={runComplianceCheck}
                        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors flex items-center gap-2"
                    >
                        <RefreshCw size={18} />
                        <span>Run Check</span>
                    </button>
                    <button
                        onClick={generateComplianceReport}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-700 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2"
                    >
                        <Download size={18} />
                        <span>Export Report</span>
                    </button>
                </div>
            </div>

            {/* Compliance Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(complianceData).map(([regulation, data]) => (
                    <div key={regulation} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-900/50 rounded-lg">
                                    {regulation.includes('iso') || regulation.includes('soc') ? (
                                        <FileText className="text-blue-400" size={20} />
                                    ) : (
                                        <Globe className="text-cyan-400" size={20} />
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">
                                        {regulation.toUpperCase()}
                                        {regulation.includes('iso') && ' Certification'}
                                        {regulation.includes('soc') && ' Report'}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {regulation === 'gdpr' && 'General Data Protection Regulation'}
                                        {regulation === 'ccpa' && 'California Consumer Privacy Act'}
                                        {regulation === 'lgpd' && 'Brazilian General Data Protection Law'}
                                        {regulation === 'pipeda' && 'Personal Information Protection Act'}
                                        {regulation === 'iso27001' && 'Information Security Management'}
                                        {regulation === 'soc2' && 'Service Organization Controls'}
                                    </p>
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${getStatusColor(data.status)}`}>
                                {getStatusIcon(data.status)}
                                <span className="capitalize">{data.status}</span>
                            </span>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Last Check</span>
                                <span className="text-gray-300">
                                    {new Date(data.lastCheck).toLocaleDateString()}
                                </span>
                            </div>

                            {'issues' in data && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Open Issues</span>
                                    <span className={data.issues === 0 ? 'text-green-400' : 'text-red-400'}>
                                        {data.issues} issue{data.issues !== 1 ? 's' : ''}
                                    </span>
                                </div>
                            )}

                            {'expires' in data && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Valid Until</span>
                                    <span className="text-cyan-400">{data.expires}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Data Requests */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Data Subject Requests</h3>
                                <p className="text-gray-400">Recent GDPR/CCPA data requests</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-white">{dataRequests.length}</p>
                                <p className="text-sm text-gray-400">Active requests</p>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-900/50">
                                    <tr>
                                        <th className="text-left p-3 text-gray-300 font-semibold">Request ID</th>
                                        <th className="text-left p-3 text-gray-300 font-semibold">Type</th>
                                        <th className="text-left p-3 text-gray-300 font-semibold">User</th>
                                        <th className="text-left p-3 text-gray-300 font-semibold">Status</th>
                                        <th className="text-left p-3 text-gray-300 font-semibold">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataRequests.map((request) => (
                                        <tr key={request.id} className="border-t border-gray-700 hover:bg-gray-800/30">
                                            <td className="p-3">
                                                <code className="text-cyan-400 font-mono">DSR-{request.id.toString().padStart(4, '0')}</code>
                                            </td>
                                            <td className="p-3">
                                                <span className={`px-3 py-1 rounded-full text-xs capitalize ${request.type === 'access' ? 'bg-blue-900/30 text-blue-400' :
                                                        request.type === 'deletion' ? 'bg-red-900/30 text-red-400' :
                                                            request.type === 'export' ? 'bg-green-900/30 text-green-400' :
                                                                'bg-purple-900/30 text-purple-400'
                                                    }`}>
                                                    {request.type}
                                                </span>
                                            </td>
                                            <td className="p-3 text-gray-300">{request.user}</td>
                                            <td className="p-3">
                                                <span className={`px-3 py-1 rounded-full text-xs ${request.status === 'completed' ? 'bg-green-900/30 text-green-400' :
                                                        request.status === 'processing' ? 'bg-yellow-900/30 text-yellow-400' :
                                                            'bg-gray-900/30 text-gray-400'
                                                    }`}>
                                                    {request.status}
                                                </span>
                                            </td>
                                            <td className="p-3 text-gray-300">{request.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* User Consents */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">User Consents</h3>
                                <p className="text-gray-400">Consent management overview</p>
                            </div>
                            <Users className="text-cyan-400" size={24} />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-400">Total Consents</span>
                                    <span className="text-white font-bold">{userConsents.total.toLocaleString()}</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                                        style={{ width: '100%' }}
                                    ></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-400">Last 30 Days</span>
                                    <span className="text-white font-bold">{userConsents.last30Days.toLocaleString()}</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                                        style={{ width: `${(userConsents.last30Days / userConsents.total) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-700">
                            <h4 className="font-bold text-white mb-3">By Region</h4>
                            <div className="space-y-3">
                                {Object.entries(userConsents.byRegion).map(([region, count]) => (
                                    <div key={region} className="flex justify-between">
                                        <span className="text-gray-400 capitalize">{region.toUpperCase()}</span>
                                        <span className="text-white">{count.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-800/30 p-6">
                        <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-700 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-3">
                                <Database size={18} />
                                <span>View Data Processing Register</span>
                            </button>
                            <button className="w-full px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all flex items-center gap-3">
                                <Lock size={18} />
                                <span>Audit Log Access</span>
                            </button>
                            <button className="w-full px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-all flex items-center gap-3">
                                <TrendingUp size={18} />
                                <span>Compliance Analytics</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compliance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-green-900/30 rounded-lg">
                            <CheckCircle className="text-green-400" size={24} />
                        </div>
                        <span className="text-2xl font-bold text-white">100%</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Compliance Rate</h3>
                    <p className="text-sm text-gray-400">All regulations met</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-cyan-900/30 rounded-lg">
                            <Clock className="text-cyan-400" size={24} />
                        </div>
                        <span className="text-2xl font-bold text-white">24h</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Response Time</h3>
                    <p className="text-sm text-gray-400">Average DSR response</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-900/30 rounded-lg">
                            <Shield className="text-blue-400" size={24} />
                        </div>
                        <span className="text-2xl font-bold text-white">6</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Certifications</h3>
                    <p className="text-sm text-gray-400">Active certifications</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-purple-900/30 rounded-lg">
                            <TrendingUp className="text-purple-400" size={24} />
                        </div>
                        <span className="text-2xl font-bold text-white">99.9%</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Uptime</h3>
                    <p className="text-sm text-gray-400">Compliance monitoring</p>
                </div>
            </div>
        </div>
    )
}