'use client'

import { useToast } from '@/components/ToastProvider'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
    const Map = dynamic(() => import('@/app/components/Map'), {
        loading: () => <p className="text-center py-10">Map is loading...</p>,
        ssr: false,
    })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: 'General Inquiry'
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { showSuccess, showError } = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (data.success) {
                showSuccess('Message sent successfully! We will get back to you soon.')
                setFormData({ name: '', email: '', message: '', subject: 'General Inquiry' })
            } else {
                showError(data.error || 'Failed to send message. Please try again.')
            }
        } catch (error) {
            showError('Network error. Please check your connection.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200">
            <div className="container-mnc py-12">
                <Section
                    eyebrow="Contact"
                    title="Contact us"
                    intro="Have questions about AI solutions or cybersecurity? Reach out to our expert team."
                />

                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    <Card className="flex flex-col h-full">
                        <h2 className="h3 mb-6">Send us a message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Subject</label>
                                <select
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
                                >
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="AI Solutions">AI Solutions</option>
                                    <option value="Cybersecurity Services">Cybersecurity Services</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Career Opportunity">Career Opportunity</option>
                                    <option value="Investor Relations">Investor Relations</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Message *</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500 resize-none"
                                    placeholder="Tell us about your project or inquiry..."
                                />
                            </div>

                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </Card>

                    <div className="space-y-8">
                        <Card>
                            <h2 className="h3 mb-6">Contact information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                                        <svg className="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-ink-900 dark:text-white">Email</h3>
                                        <a href="mailto:techodite@gmail.com" className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 transition-colors">
                                            techodite@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                                        <svg className="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-ink-900 dark:text-white">Phone</h3>
                                        <a href="tel:+919753089649" className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 transition-colors">
                                            +91 97530 89649
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                                        <svg className="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-ink-900 dark:text-white">Based In</h3>
                                        <p className="text-ink-500 dark:text-ink-300">India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800">
                                        <svg className="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-ink-900 dark:text-white">Response Time</h3>
                                        <p className="text-ink-500 dark:text-ink-300">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h2 className="h3 mb-4">What We Offer</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                                    <span className="text-ink-600 dark:text-ink-300">AI Research &amp; Development</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                                    <span className="text-ink-600 dark:text-ink-300">Cybersecurity Solutions</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                                    <span className="text-ink-600 dark:text-ink-300">Enterprise AI Integration</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                                    <span className="text-ink-600 dark:text-ink-300">Security Consulting</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>

                <section className="my-12 max-w-6xl mx-auto">
                    <h2 className="h3 mb-4">Our Location</h2>
                    <Card className="p-0">
                        <div className="aspect-video bg-ink-100 dark:bg-ink-800 rounded-xl overflow-hidden">
                            {/* The map will only render in the browser */}
                            <Map />
                        </div>
                    </Card>
                </section>
            </div>
        </div>
    )
}
