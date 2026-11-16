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
    Users,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
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
        const fetchComplianceData = async () => {
            setTimeout(() => {
                setComplianceData(prev => ({
                    ...prev,
                    lastCheck: new Date().toISOString()
                }))
            }, 1000)
        }

        fetchComplianceData()
        const interval = setInterval(fetchComplianceData, 60000)

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

    const statusProps = {
        compliant: { label: 'Compliant', color: 'text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800/30' },
        certified: { label: 'Certified', color: 'text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800/30' },
        pending: { label: 'Pending', color: 'text-ink-500 bg-ink-100 dark:bg-ink-800/30 border border-ink-200 dark:border-ink-700' },
        'non-compliant': { label: 'Non-compliant', color: 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/30' },
    }

    const statusIcon = (status) => {
        switch (status) {
            case 'compliant':
            case 'certified':
                return <CheckCircle className="text-ink-600 dark:text-ink-400" size={20} strokeWidth={1.5} />
            case 'pending':
                return <Clock className="text-ink-500 dark:text-ink-400" size={20} strokeWidth={1.5} />
            default:
                return <AlertCircle className="text-ink-600 dark:text-ink-400" size={20} strokeWidth={1.5} />
        }
    }

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-50 rounded-xl border border-brand-100 dark:bg-brand-900/20 dark:border-brand-800/30">
                        <Shield className="text-brand-600" size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-ink-900 dark:text-white">Compliance dashboard</h2>
                        <p className="text-sm text-ink-500 dark:text-ink-300">Real-time compliance monitoring and management</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="secondary" onClick={runComplianceCheck} size="sm">
                        <RefreshCw size={16} strokeWidth={1.5} />
                        <span className="ml-2">Run Check</span>
                    </Button>
                    <Button onClick={generateComplianceReport} size="sm">
                        <Download size={16} strokeWidth={1.5} />
                        <span className="ml-2">Export Report</span>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(complianceData).map(([regulation, data]) => {
                    const props = statusProps[data.status] || statusProps.pending
                    return (
                        <Card key={regulation}>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-ink-50 dark:bg-ink-800/50 rounded-lg border border-ink-200 dark:border-ink-700">
                                        {regulation.includes('iso') || regulation.includes('soc') ? (
                                            <FileText className="text-brand-600 dark:text-brand-400" size={20} strokeWidth={1.5} />
                                        ) : (
                                            <Globe className="text-ink-600 dark:text-ink-400" size={20} strokeWidth={1.5} />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-ink-900 dark:text-white">
                                            {regulation.toUpperCase()}
                                            {regulation.includes('iso') && ' Certification'}
                                            {regulation.includes('soc') && ' Report'}
                                        </h3>
                                        <p className="text-xs text-ink-500 dark:text-ink-300">
                                            {regulation === 'gdpr' && 'General Data Protection Regulation'}
                                            {regulation === 'ccpa' && 'California Consumer Privacy Act'}
                                            {regulation === 'lgpd' && 'Brazilian General Data Protection Law'}
                                            {regulation === 'pipeda' && 'Personal Information Protection Act'}
                                            {regulation === 'iso27001' && 'Information Security Management'}
                                            {regulation === 'soc2' && 'Service Organization Controls'}
                                        </p>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 rounded-lg text-xs flex items-center gap-1 ${props.color}`}>
                                    {statusIcon(data.status)}
                                    <span>{props.label}</span>
                                </span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-ink-500 dark:text-ink-400">Last Check</span>
                                    <span className="text-ink-900 dark:text-white">{new Date(data.lastCheck).toLocaleDateString()}</span>
                                </div>

                                {'issues' in data && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-ink-500 dark:text-ink-400">Open Issues</span>
                                        <span className={data.issues === 0 ? 'text-brand-700' : 'text-rose-600'}>
                                            {data.issues} issue{data.issues !== 1 ? 's' : ''}
                                        </span>
                                    </div>
                                )}

                                {'expires' in data && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-ink-500 dark:text-ink-400">Valid Until</span>
                                        <span className="text-brand-600 dark:text-brand-400">{data.expires}</span>
                                    </div>
                                )}
                            </div>
                        </Card>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Card>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-2">Data subject requests</h3>
                                <p className="text-sm text-ink-500 dark:text-ink-300">Recent GDPR/CCPA data requests</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-ink-900 dark:text-white">{dataRequests.length}</p>
                                <p className="text-sm text-ink-500 dark:text-ink-300">Active requests</p>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-ink-200 dark:border-ink-700">
                                        <th className="text-left p-3 text-ink-500 dark:text-ink-400 font-semibold">Request ID</th>
                                        <th className="text-left p-3 text-ink-500 dark:text-ink-400 font-semibold">Type</th>
                                        <th className="text-left p-3 text-ink-500 dark:text-ink-400 font-semibold">User</th>
                                        <th className="text-left p-3 text-ink-500 dark:text-ink-400 font-semibold">Status</th>
                                        <th className="text-left p-3 text-ink-500 dark:text-ink-400 font-semibold">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataRequests.map((request) => (
                                        <tr key={request.id} className="border-b border-ink-50 dark:border-ink-800/50 last:border-b-0">
                                            <td className="p-3">
                                                <code className="text-ink-600 dark:text-ink-300 font-mono">DSR-{request.id.toString().padStart(4, '0')}</code>
                                            </td>
                                            <td className="p-3">
                                                <span className={`px-2 py-0.5 rounded text-xs border ${request.type === 'access' ? 'border-brand-200 text-brand-700 bg-brand-50 dark:border-brand-800/30 dark:bg-brand-900/20' :
                                                    request.type === 'deletion' ? 'border-rose-200 text-rose-700 bg-rose-50 dark:border-rose-800/30 dark:bg-rose-900/20' :
                                                        request.type === 'export' ? 'border-emerald-200 text-emerald-700 bg-emerald-50 dark:border-emerald-800/30 dark:bg-emerald-900/20' :
                                                            'border-ink-200 text-ink-700 bg-ink-50 dark:border-ink-800/30 dark:bg-ink-900/20'
                                                }`}>
                                                    {request.type}
                                                </span>
                                            </td>
                                            <td className="p-3 text-ink-900 dark:text-white">{request.user}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-0.5 rounded text-xs border ${request.status === 'completed' ? 'border-brand-200 text-brand-700 bg-brand-50 dark:border-brand-800/30 dark:bg-brand-900/20' :
                                                    request.status === 'processing' ? 'border-ink-200 text-ink-700 bg-ink-50 dark:border-ink-800/30 dark:bg-ink-900/20' :
                                                        'border-ink-200 text-ink-500 bg-ink-100 dark:border-ink-700 dark:bg-ink-800'
                                                }`}>
                                                    {request.status}
                                                </span>
                                            </td>
                                            <td className="p-3 text-ink-900 dark:text-white">{request.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-2">User consents</h3>
                                <p className="text-sm text-ink-500 dark:text-ink-300">Consent management overview</p>
                            </div>
                            <Users className="text-brand-600" size={24} strokeWidth={1.5} />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-ink-500 dark:text-ink-400">Total Consents</span>
                                    <span className="text-white font-bold">{userConsents.total.toLocaleString()}</span>
                                </div>
                                <div className="w-full bg-ink-200 dark:bg-ink-800 rounded-full h-2">
                                    <div className="h-2 rounded-full bg-brand-600" style={{ width: '100%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-ink-500 dark:text-ink-400">Last 30 Days</span>
                                    <span className="text-white font-bold">{userConsents.last30Days.toLocaleString()}</span>
                                </div>
                                <div className="w-full bg-ink-200 dark:bg-ink-800 rounded-full h-2">
                                    <div
                                        className="h-2 rounded-full bg-brand-600"
                                        style={{ width: `${(userConsents.last30Days / userConsents.total) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-ink-200 dark:border-ink-700">
                            <h4 className="font-bold text-ink-900 dark:text-white mb-3">By Region</h4>
                            <div className="space-y-3">
                                {Object.entries(userConsents.byRegion).map(([region, count]) => (
                                    <div key={region} className="flex justify-between">
                                        <span className="text-ink-500 dark:text-ink-400 capitalize">{region.toUpperCase()}</span>
                                        <span className="text-ink-900 dark:text-white">{count.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-4">Quick actions</h3>
                        <div className="space-y-3">
                            <Button variant="secondary" className="w-full text-left" asChild>
                                <a href="#" className="flex items-center gap-3">
                                    <Database size={18} strokeWidth={1.5} />
                                    <span>View Data Processing Register</span>
                                </a>
                            </Button>
                            <Button variant="secondary" className="w-full text-left" asChild>
                                <a href="#" className="flex items-center gap-3">
                                    <Lock size={18} strokeWidth={1.5} />
                                    <span>Audit Log Access</span>
                                </a>
                            </Button>
                            <Button variant="ghost" className="w-full text-left" asChild>
                                <a href="#" className="flex items-center gap-3">
                                    <TrendingUp size={18} strokeWidth={1.5} />
                                    <span>Compliance Analytics</span>
                                </a>
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Compliance Rate', value: '100%', icon: <CheckCircle size={24} strokeWidth={1.5} /> },
                    { label: 'Response Time', value: '24h', icon: <Clock size={24} strokeWidth={1.5} /> },
                    { label: 'Certifications', value: '6', icon: <Shield size={24} strokeWidth={1.5} /> },
                    { label: 'Uptime', value: '99.9%', icon: <TrendingUp size={24} strokeWidth={1.5} /> },
                ].map((metric, idx) => (
                    <Card key={idx}>
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-brand-50 rounded-lg border border-brand-100 dark:bg-brand-900/20 dark:border-brand-800/30">
                                {metric.icon}
                            </div>
                            <span className="text-2xl font-bold text-ink-900 dark:text-white">{metric.value}</span>
                        </div>
                        <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-2">{metric.label}</h3>
                        <p className="text-sm text-ink-500 dark:text-ink-300">{idx === 0 ? 'All regulations met' : idx === 1 ? 'Average DSR response' : idx === 2 ? 'Active certifications' : 'Compliance monitoring'}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}
