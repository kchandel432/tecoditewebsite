'use client'

import {
    BarChart3,
    Bell,
    Database,
    Home,
    LogOut,
    Menu,
    MessageSquare,
    Search,
    Settings,
    Shield,
    TrendingUp,
    Users,
    X
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function AdminLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [notifications] = useState(3)
    const pathname = usePathname()

    const navItems = [
        { name: 'Dashboard', icon: <BarChart3 size={20} />, href: '/admin', active: pathname === '/admin' },
        { name: 'Messages', icon: <MessageSquare size={20} />, href: '/admin/messages', active: pathname === '/admin/messages' },
        { name: 'Users', icon: <Users size={20} />, href: '/admin/users', active: pathname === '/admin/users' },
        { name: 'Analytics', icon: <TrendingUp size={20} />, href: '/admin/analytics', active: pathname === '/admin/analytics' },
        { name: 'Database', icon: <Database size={20} />, href: '/admin/database', active: pathname === '/admin/database' },
        { name: 'Security', icon: <Shield size={20} />, href: '/admin/security', active: pathname === '/admin/security' },
        { name: 'Settings', icon: <Settings size={20} />, href: '/admin/settings', active: pathname === '/admin/settings' },
    ]

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Top Navbar */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 z-50">
                <div className="h-full px-6 flex items-center justify-between">
                    {/* Left: Logo & Toggle */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <Link href="/admin" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                                <Shield size={20} />
                            </div>
                            <span className="text-xl font-bold">Techodite<span className="text-cyan-400">Admin</span></span>
                        </Link>
                    </div>

                    {/* Center: Search */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-6">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                            <input
                                type="text"
                                placeholder="Search messages, users, or analytics..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                            />
                        </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 rounded-lg hover:bg-gray-800 transition-colors">
                            <Bell size={20} />
                            {notifications > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-xs rounded-full flex items-center justify-center">
                                    {notifications}
                                </span>
                            )}
                        </button>

                        <div className="h-8 w-px bg-gray-700"></div>

                        <Link href="/" className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                            <Home size={18} />
                            <span>View Site</span>
                        </Link>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 rounded-lg transition-all">
                            <LogOut size={18} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <aside className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-gray-900 border-r border-gray-800 z-40 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
                <div className="h-full py-6 px-4 overflow-y-auto">
                    {/* User Profile */}
                    <div className="mb-8 px-2">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                <span className="font-bold">A</span>
                            </div>
                            <div>
                                <p className="font-semibold">Admin User</p>
                                <p className="text-sm text-gray-400">admin@techodite.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${item.active
                                        ? 'bg-gradient-to-r from-cyan-900/30 to-blue-900/30 text-cyan-300 border-l-4 border-cyan-500'
                                        : 'hover:bg-gray-800/50 text-gray-300 hover:text-white'
                                    }`}
                            >
                                <span className={item.active ? 'text-cyan-400' : 'text-gray-400'}>{item.icon}</span>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Stats */}
                    <div className="mt-8 px-4">
                        <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                            <p className="text-sm text-gray-400 mb-2">Server Status</p>
                            <div className="flex items-center justify-between">
                                <span className="text-green-400 font-semibold">● Online</span>
                                <span className="text-xs text-gray-500">99.9% uptime</span>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-700">
                                <p className="text-sm text-gray-400 mb-2">Storage</p>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">65% used • 2.1 GB / 5 GB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`pt-16 transition-all duration-300 ${sidebarOpen ? 'pl-64' : 'pl-0'}`}>
                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}