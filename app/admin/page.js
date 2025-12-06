'use client'

import { Activity, BarChart3, Calendar, Clock, Download, MessageSquare, TrendingUp, Users } from 'lucide-react'

export default function AdminDashboard() {
    const stats = [
        { label: 'Total Messages', value: '1,248', change: '+12%', icon: <MessageSquare />, color: 'blue' },
        { label: 'Active Users', value: '342', change: '+8%', icon: <Users />, color: 'green' },
        { label: 'Response Rate', value: '94%', change: '+3%', icon: <BarChart3 />, color: 'purple' },
        { label: 'Avg. Response Time', value: '2h 15m', change: '-15%', icon: <Clock />, color: 'cyan' },
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Dashboard Overview</h1>
                    <p className="text-gray-400">Welcome back! Here's what's happening with your messages.</p>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors">
                        <Calendar size={18} />
                        <span>Last 7 days</span>
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 rounded-lg flex items-center space-x-2 transition-all">
                        <Download size={18} />
                        <span>Download Report</span>
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                                <p className="text-3xl font-bold mt-2">{stat.value}</p>
                                <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                    {stat.change} from last week
                                </p>
                            </div>
                            <div className={`w-12 h-12 ${stat.color === 'blue' ? 'bg-blue-900/30 text-blue-400' :
                                    stat.color === 'green' ? 'bg-green-900/30 text-green-400' :
                                        stat.color === 'purple' ? 'bg-purple-900/30 text-purple-400' :
                                            'bg-cyan-900/30 text-cyan-400'
                                } rounded-xl flex items-center justify-center`}>
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Message Activity */}
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Message Activity</h2>
                        <button className="text-sm text-gray-400 hover:text-white">View details →</button>
                    </div>
                    <div className="space-y-4">
                        {[75, 80, 65, 90, 85, 95, 70].map((height, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <span className="text-sm text-gray-400 w-20">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>
                                <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                        style={{ width: `${height}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm font-medium">{height}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Recent Activity</h2>
                        <button className="text-sm text-gray-400 hover:text-white">View all →</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { action: 'New message from Alex Johnson', time: '10 minutes ago', type: 'message' },
                            { action: 'Sarah Williams marked as responded', time: '1 hour ago', type: 'response' },
                            { action: 'System backup completed', time: '2 hours ago', type: 'system' },
                            { action: 'Database optimized', time: '4 hours ago', type: 'system' },
                            { action: 'New user registered', time: '6 hours ago', type: 'user' },
                        ].map((activity, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.type === 'message' ? 'bg-blue-900/30' :
                                        activity.type === 'response' ? 'bg-green-900/30' :
                                            activity.type === 'system' ? 'bg-purple-900/30' : 'bg-cyan-900/30'
                                    }`}>
                                    <Activity size={14} className={
                                        activity.type === 'message' ? 'text-blue-400' :
                                            activity.type === 'response' ? 'text-green-400' :
                                                activity.type === 'system' ? 'text-purple-400' : 'text-cyan-400'
                                    } />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">{activity.action}</p>
                                    <p className="text-sm text-gray-400">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-left">
                        <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                            <MessageSquare className="text-blue-400" />
                        </div>
                        <p className="font-medium">New Message</p>
                        <p className="text-sm text-gray-400">Send a new message</p>
                    </button>

                    <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-left">
                        <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
                            <Users className="text-green-400" />
                        </div>
                        <p className="font-medium">User Management</p>
                        <p className="text-sm text-gray-400">Manage admin users</p>
                    </button>

                    <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-left">
                        <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
                            <TrendingUp className="text-green-400" />
                        </div>
                        <p className="font-medium">Analytics</p>
                        <p className="text-sm text-gray-400">View detailed reports</p>
                    </button>

                    <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-left">
                        <div className="w-10 h-10 bg-cyan-900/30 rounded-lg flex items-center justify-center mb-3">
                            <Activity className="text-cyan-400" />
                        </div>
                        <p className="font-medium">System Health</p>
                        <p className="text-sm text-gray-400">Monitor server status</p>
                    </button>
                </div>
            </div>
        </div>
    )
}