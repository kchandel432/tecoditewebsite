'use client'

import { motion } from 'framer-motion'
import {
    CheckCircle,
    Clock,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send,
    Twitter
} from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const contactInfo = {
        email: 'techodite@gmail.com',
        phone: '+91-9876543210',
        address: 'Cyber Tower, Sector 67, Noida, Uttar Pradesh 201301',
        hours: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
        responseTime: 'Within 24 hours',
        instagram: 'https://instagram.com/techoditesolutionpvt',
        linkedin: 'https://linkedin.com/company/techodite-solutions',
        twitter: 'https://twitter.com/techodite_ai'
    }

    const departments = [
        {
            name: 'Research & Development',
            email: 'research@techodite.com',
            focus: 'AI Models, Cybersecurity Research'
        },
        {
            name: 'Technical Support',
            email: 'support@techodite.com',
            focus: 'Product Implementation, Troubleshooting'
        },
        {
            name: 'Business Development',
            email: 'business@techodite.com',
            focus: 'Partnerships, Enterprise Solutions'
        },
        {
            name: 'Media & PR',
            email: 'media@techodite.com',
            focus: 'Press, Collaborations, Speaking'
        }
    ]

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setSubmitted(true)
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    subject: '',
                    message: ''
                })
            }
        } catch (error) {
            console.error('Error submitting form:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Connect with our AI and cybersecurity experts to discuss your requirements,
                        explore partnerships, or learn more about our research.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 space-y-8"
                    >
                        {/* Company Card */}
                        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">T</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Techodite Solutions</h3>
                                    <p className="text-gray-400">Pvt Ltd</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-cyan-900/30 rounded-lg">
                                        <Mail className="text-cyan-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <a
                                            href={`mailto:${contactInfo.email}`}
                                            className="text-white hover:text-cyan-400 transition-colors"
                                        >
                                            {contactInfo.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-900/30 rounded-lg">
                                        <Phone className="text-blue-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Phone</p>
                                        <a
                                            href={`tel:${contactInfo.phone}`}
                                            className="text-white hover:text-cyan-400 transition-colors"
                                        >
                                            {contactInfo.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-purple-900/30 rounded-lg">
                                        <MapPin className="text-purple-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Office Address</p>
                                        <p className="text-white">{contactInfo.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-green-900/30 rounded-lg">
                                        <Clock className="text-green-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Business Hours</p>
                                        <p className="text-white">{contactInfo.hours}</p>
                                        <p className="text-gray-400 text-sm mt-1">Response: {contactInfo.responseTime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>

                            <div className="space-y-4">
                                <a
                                    href={contactInfo.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-gray-700 hover:border-pink-500 transition-all group"
                                >
                                    <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg">
                                        <Instagram className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Instagram</p>
                                        <p className="text-gray-400 text-sm">@techoditesolutionpvt</p>
                                    </div>
                                </a>

                                <a
                                    href={contactInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-gray-700 hover:border-blue-500 transition-all group"
                                >
                                    <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
                                        <Linkedin className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">LinkedIn</p>
                                        <p className="text-gray-400 text-sm">Techodite Solutions</p>
                                    </div>
                                </a>

                                <a
                                    href={contactInfo.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all group"
                                >
                                    <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                                        <Twitter className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Twitter</p>
                                        <p className="text-gray-400 text-sm">@techodite_ai</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Departments */}
                        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-800/30 p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Contact Departments</h3>

                            <div className="space-y-4">
                                {departments.map((dept, idx) => (
                                    <div key={idx} className="p-4 bg-gray-900/30 rounded-lg">
                                        <h4 className="font-bold text-white mb-1">{dept.name}</h4>
                                        <a
                                            href={`mailto:${dept.email}`}
                                            className="text-cyan-400 hover:text-cyan-300 text-sm"
                                        >
                                            {dept.email}
                                        </a>
                                        <p className="text-gray-400 text-xs mt-2">{dept.focus}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="text-white" size={32} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h2>
                                    <p className="text-gray-300 mb-8">
                                        Thank you for contacting Techodite Solutions. Our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl">
                                            <MessageSquare className="text-cyan-400" size={24} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                                            <p className="text-gray-400">Fill out the form below and we'll respond promptly</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                                                    placeholder="john@company.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Company/Organization
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                                                    placeholder="Your company name"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                                                required
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="Research Collaboration">Research Collaboration</option>
                                                <option value="Product Inquiry">Product Inquiry</option>
                                                <option value="Technical Support">Technical Support</option>
                                                <option value="Business Partnership">Business Partnership</option>
                                                <option value="Media Inquiry">Media Inquiry</option>
                                                <option value="Career Opportunities">Career Opportunities</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={6}
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                                                placeholder="Please describe your requirements or questions in detail..."
                                                required
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-gray-400">
                                                * Required fields
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {loading ? (
                                                    <span className="flex items-center gap-2">
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-2">
                                                        <Send size={18} />
                                                        Send Message
                                                    </span>
                                                )}
                                            </button>
                                        </div>

                                        <p className="text-sm text-gray-500 text-center">
                                            By submitting this form, you agree to our Privacy Policy and consent to
                                            receiving communications from Techodite Solutions.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
