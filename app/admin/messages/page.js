'use client'

import { useToast } from '@/hooks/useToast'
import {
    AlertCircle,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Download,
    Eye,
    Filter,
    Mail,
    MessageSquare,
    RefreshCw,
    Reply,
    Search,
    Trash2,
    TrendingUp,
    User
} from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

// Mock data - replace with your actual API call
const mockMessages = [
    {
        id: 1,
        name: "Alex Johnson",
        email: "alex@techcompany.com",
        message: "Interested in your cybersecurity audit services for our fintech startup. We need a comprehensive security assessment.",
        status: "new",
        priority: "high",
        createdAt: "2024-01-15T10:30:00Z",
        read: false
    },
    {
        id: 2,
        name: "Sarah Williams",
        email: "sarah@healthcare.org",
        message: "Looking for AI solutions to optimize our patient diagnosis system. Can we schedule a demo?",
        status: "responded",
        priority: "medium",
        createdAt: "2024-01-14T14:20:00Z",
        read: true
    },
    {
        id: 3,
        name: "Michael Chen",
        email: "michael@enterprise.co",
        message: "Need urgent consultation for data breach incident. Our system was compromised yesterday.",
        status: "urgent",
        priority: "high",
        createdAt: "2024-01-15T09:15:00Z",
        read: false
    },
    {
        id: 4,
        name: "Emma Davis",
        email: "emma@startup.io",
        message: "Great webinar yesterday! Interested in your penetration testing package for our mobile app.",
        status: "new",
        priority: "low",
        createdAt: "2024-01-13T16:45:00Z",
        read: true
    },
    {
        id: 5,
        name: "Robert Wilson",
        email: "robert@banking.com",
        message: "Requesting information about your enterprise security solutions. Need compliance with PCI DSS.",
        status: "scheduled",
        priority: "high",
        createdAt: "2024-01-12T11:30:00Z",
        read: true
    },
]

export default function AdminMessagesPage() {
    const { showSuccess, showError } = useToast()
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedMessages, setSelectedMessages] = useState([])
    const [filter, setFilter] = useState('all')
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    // Fetch messages
    const fetchMessages = useCallback(async () => {
        try {
            setLoading(true)

            let url = `/api/admin/messages?page=${currentPage}&limit=${itemsPerPage}`

            if (search) url += `&search=${encodeURIComponent(search)}`
            if (filter !== 'all') url += `&status=${filter}`

            const res = await fetch(url)
            const data = await res.json()

            if (data.success) {
                setMessages(data.messages)
                // For now, using mock data stats since API may not have all fields
                // In production, adjust based on your API response
            } else {
                showError(data.error || 'Failed to fetch messages')
            }
        } catch (error) {
            showError('Network error while fetching messages')
            console.error('Fetch error:', error)
        } finally {
            setLoading(false)
        }
    }, [currentPage, search, filter, showError])

    useEffect(() => {
        fetchMessages()
    }, [fetchMessages])

    // Calculate stats
    const stats = {
        total: messages.length,
        new: messages.filter(m => !m.read).length,
        urgent: messages.filter(m => m.priority === 'high').length,
        responded: messages.filter(m => m.status === 'responded').length
    }

    const totalMessages = messages.length

    // Filtered messages
    const filteredMessages = messages.filter(msg => {
        const matchesFilter = filter === 'all' ||
            (filter === 'new' && !msg.read) ||
            (filter === 'high' && msg.priority === 'high') ||
            (filter === 'unread' && !msg.read)

        const matchesSearch = search === '' ||
            msg.name.toLowerCase().includes(search.toLowerCase()) ||
            msg.email.toLowerCase().includes(search.toLowerCase()) ||
            msg.message.toLowerCase().includes(search.toLowerCase())

        return matchesFilter && matchesSearch
    })

    // Pagination
    const totalPages = Math.ceil(filteredMessages.length / itemsPerPage)
    const paginatedMessages = filteredMessages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedMessages(paginatedMessages.map(m => m.id))
        } else {
            setSelectedMessages([])
        }
    }

    const handleSelectMessage = (id) => {
        setSelectedMessages(prev =>
            prev.includes(id)
                ? prev.filter(msgId => msgId !== id)
                : [...prev, id]
        )
    }

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this message?')) return

        try {
            const res = await fetch(`/api/admin/messages?id=${id}`, {
                method: 'DELETE',
            })
            const data = await res.json()

            if (data.success) {
                showSuccess('Message deleted successfully')
                fetchMessages() // Refresh list
            } else {
                showError(data.error || 'Failed to delete message')
            }
        } catch (error) {
            showError('Network error')
        }
    }

    const handleMarkAsRead = async (id) => {
        try {
            const res = await fetch('/api/admin/messages', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, read: true }),
            })
            const data = await res.json()

            if (data.success) {
                // Update local state
                setMessages(prev => prev.map(msg =>
                    msg.id === id ? { ...msg, read: true } : msg
                ))
                showSuccess('Marked as read')
            }
        } catch (error) {
            showError('Failed to update message')
        }
    }

    const handleBulkDelete = async () => {
        if (selectedMessages.length === 0) return

        if (!window.confirm(`Delete ${selectedMessages.length} selected messages?`)) return

        try {
            // Delete each selected message
            const deletePromises = selectedMessages.map(id =>
                fetch(`/api/admin/messages?id=${id}`, { method: 'DELETE' })
            )

            await Promise.all(deletePromises)
            showSuccess(`${selectedMessages.length} messages deleted`)
            setSelectedMessages([])
            fetchMessages() // Refresh
        } catch (error) {
            showError('Failed to delete messages')
        }
    }

    const handleBulkMarkAsRead = async () => {
        if (selectedMessages.length === 0) return

        try {
            const updatePromises = selectedMessages.map(id =>
                fetch('/api/admin/messages', {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id, read: true }),
                })
            )

            await Promise.all(updatePromises)

            // Update local state
            setMessages(prev => prev.map(msg =>
                selectedMessages.includes(msg.id) ? { ...msg, read: true } : msg
            ))

            showSuccess(`Marked ${selectedMessages.length} messages as read`)
            setSelectedMessages([])
        } catch (error) {
            showError('Failed to update messages')
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const now = new Date()
        const diff = now - date

        if (diff < 60000) return 'Just now'
        if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`

        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        })
    }

    const exportCSV = () => {
        const headers = ['ID', 'Name', 'Email', 'Message', 'Date', 'Status']
        const rows = messages.map(msg => [
            msg.id,
            msg.name,
            msg.email,
            msg.message,
            new Date(msg.createdAt).toLocaleString(),
            msg.read ? 'Read' : 'Unread',
        ])

        const csv = [headers, ...rows].map(row => row.map(cell =>
            `"${cell.toString().replace(/"/g, '""')}"`
        ).join(','))

        const blob = new Blob([csv.join('\n')], { type: 'text/csv' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `techodite-messages-${new Date().toISOString().split('T')[0]}.csv`
        a.click()
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Contact Messages</h1>
                    <p className="text-gray-400">Manage and respond to customer inquiries</p>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={fetchMessages}
                        disabled={loading}
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors disabled:opacity-50"
                    >
                        <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
                        <span>Refresh</span>
                    </button>
                    <button
                        onClick={exportCSV}
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                        <Download size={18} />
                        <span>Export CSV</span>
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm">Total Messages</p>
                            <p className="text-3xl font-bold mt-2">{stats.total}</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center">
                            <MessageSquare className="text-blue-400" size={24} />
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400">All time messages received</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm">Unread</p>
                            <p className="text-3xl font-bold mt-2 text-cyan-400">{stats.new}</p>
                        </div>
                        <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center">
                            <Mail className="text-cyan-400" size={24} />
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400">Requires attention</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm">High Priority</p>
                            <p className="text-3xl font-bold mt-2 text-red-400">{stats.urgent}</p>
                        </div>
                        <div className="w-12 h-12 bg-red-900/30 rounded-xl flex items-center justify-center">
                            <AlertCircle className="text-red-400" size={24} />
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400">Needs immediate response</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm">Response Rate</p>
                            <p className="text-3xl font-bold mt-2 text-green-400">
                                {totalMessages > 0 ? Math.round((stats.responded / totalMessages) * 100) : 0}%
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-green-900/30 rounded-xl flex items-center justify-center">
                            <TrendingUp className="text-green-400" size={24} />
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400">Messages responded to</p>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-gray-800/30 rounded-xl border border-gray-700 p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                            <input
                                type="text"
                                placeholder="Search messages..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                    setCurrentPage(1)
                                }}
                                className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 w-full md:w-64"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Filter size={18} className="text-gray-500" />
                            <select
                                value={filter}
                                onChange={(e) => {
                                    setFilter(e.target.value)
                                    setCurrentPage(1)
                                }}
                                className="bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                            >
                                <option value="all">All Messages</option>
                                <option value="new">New (Unread)</option>
                                <option value="responded">Responded</option>
                            </select>
                        </div>
                    </div>

                    {selectedMessages.length > 0 && (
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">{selectedMessages.length} selected</span>
                            <button
                                onClick={handleBulkDelete}
                                className="px-3 py-1 bg-red-900/30 hover:bg-red-900/50 text-red-400 rounded-lg text-sm transition-colors"
                            >
                                Delete Selected
                            </button>
                            <button
                                onClick={handleBulkMarkAsRead}
                                className="px-3 py-1 bg-blue-900/30 hover:bg-blue-900/50 text-blue-400 rounded-lg text-sm transition-colors"
                            >
                                Mark as Read
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Loading State */}
            {loading ? (
                <div className="flex flex-col items-center justify-center p-12">
                    <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-400">Loading messages...</p>
                </div>
            ) : (
                <>
                    {/* Messages Table */}
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-900/50">
                                    <tr>
                                        <th className="text-left p-4">
                                            <input
                                                type="checkbox"
                                                checked={paginatedMessages.length > 0 && selectedMessages.length === paginatedMessages.length}
                                                onChange={handleSelectAll}
                                                className="rounded border-gray-600 bg-gray-800"
                                            />
                                        </th>
                                        <th className="text-left p-4 text-gray-300 font-semibold">Sender</th>
                                        <th className="text-left p-4 text-gray-300 font-semibold">Message</th>
                                        <th className="text-left p-4 text-gray-300 font-semibold">Status</th>
                                        <th className="text-left p-4 text-gray-300 font-semibold">Date</th>
                                        <th className="text-left p-4 text-gray-300 font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedMessages.map((message) => (
                                        <tr
                                            key={message.id}
                                            className={`border-t border-gray-700 hover:bg-gray-800/30 transition-all ${!message.read ? 'bg-gray-900/20' : ''}`}
                                        >
                                            <td className="p-4">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedMessages.includes(message.id)}
                                                    onChange={() => handleSelectMessage(message.id)}
                                                    className="rounded border-gray-600 bg-gray-800"
                                                />
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                                                        <User size={18} className="text-blue-400" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-white">{message.name}</p>
                                                        <p className="text-sm text-gray-400">{message.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="max-w-md">
                                                    <p className={`${!message.read ? 'font-medium text-white' : 'text-gray-300'} line-clamp-2`}>
                                                        {message.message}
                                                    </p>
                                                    {!message.read && (
                                                        <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${!message.read ? 'bg-cyan-900/30 text-cyan-400' :
                                                    message.responded ? 'bg-green-900/30 text-green-400' :
                                                        'bg-gray-900/30 text-gray-400'
                                                    }`}>
                                                    {!message.read ? 'New' : message.responded ? 'Responded' : 'Read'}
                                                </span>
                                            </td>
                                            <td className="p-4 text-gray-400">
                                                <div className="flex items-center space-x-2">
                                                    <Calendar size={14} />
                                                    <span>{formatDate(message.createdAt)}</span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center space-x-2">
                                                    {!message.read && (
                                                        <button
                                                            onClick={() => handleMarkAsRead(message.id)}
                                                            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                                                            title="Mark as read"
                                                        >
                                                            <Eye size={16} />
                                                        </button>
                                                    )}
                                                    <a
                                                        href={`mailto:${message.email}?subject=Re: Your message to Techodite&body=Dear ${message.name},%0D%0A%0D%0AThank you for contacting Techodite.`}
                                                        className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                                                        title="Reply"
                                                    >
                                                        <Reply size={16} />
                                                    </a>
                                                    <button
                                                        onClick={() => handleDelete(message.id)}
                                                        className="p-2 hover:bg-red-900/30 rounded-lg transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Empty State */}
                        {filteredMessages.length === 0 && (
                            <div className="p-12 text-center">
                                <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="text-gray-500" size={24} />
                                </div>
                                <p className="text-gray-400 text-lg">No messages found</p>
                                <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
                            </div>
                        )}

                        {/* Pagination */}
                        {filteredMessages.length > 0 && (
                            <div className="flex items-center justify-between p-4 border-t border-gray-700">
                                <div className="text-sm text-gray-400">
                                    Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredMessages.length)} of {filteredMessages.length} messages
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="p-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>

                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        let pageNum
                                        if (totalPages <= 5) {
                                            pageNum = i + 1
                                        } else if (currentPage <= 3) {
                                            pageNum = i + 1
                                        } else if (currentPage >= totalPages - 2) {
                                            pageNum = totalPages - 4 + i
                                        } else {
                                            pageNum = currentPage - 2 + i
                                        }

                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => setCurrentPage(pageNum)}
                                                className={`w-10 h-10 rounded-lg transition-colors ${currentPage === pageNum
                                                    ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white'
                                                    : 'hover:bg-gray-800'
                                                    }`}
                                            >
                                                {pageNum}
                                            </button>
                                        )
                                    })}

                                    <button
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className="p-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}