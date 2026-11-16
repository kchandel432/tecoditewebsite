'use client'
import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState({ text: '', type: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ text: 'Submitting…', type: '' })

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await res.json()
            if (data.success) {
                setStatus({ text: 'Message sent successfully!', type: 'success' })
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus({ text: 'Failed to send message', type: 'error' })
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setStatus({ text: 'Error connecting to server', type: 'error' })
        }
    }

    return (
        <Section eyebrow="Contact" title="Contact us" intro="Have questions about AI solutions or cybersecurity? Reach out to our expert team.">
            <Card className="max-w-lg mx-auto">
                <h2 className="h3 mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Full Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Email Address</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-2">Message</label>
                        <textarea
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows="4"
                            className="w-full px-4 py-3 rounded border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
                            required
                        ></textarea>
                    </div>
                    <Button type="submit" className="w-auto">
                        Send Message
                    </Button>
                </form>
                {status.text && (
                    <p className={`mt-5 text-sm ${status.type === 'success' ? 'text-emerald-700 dark:text-emerald-400' : status.type === 'error' ? 'text-rose-700 dark:text-rose-400' : 'text-ink-500 dark:text-ink-300'}`}>
                        {status.text}
                    </p>
                )}
            </Card>
        </Section>
    )
}
