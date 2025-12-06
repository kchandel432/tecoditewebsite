'use client'
import { useState } from "react"

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('Submitting...')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await res.json()
            if (data.success) {
                setStatus('✅ Message sent successfully!')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('❌ Failed to send message')
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setStatus('⚠️ Error connecting to server')
        }
    }

    return (
        <div className="max-w-lg mx-auto bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full mb-4 p-3 rounded bg-gray-800 text-white border border-gray-700"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full mb-4 p-3 rounded bg-gray-800 text-white border border-gray-700"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full mb-4 p-3 rounded bg-gray-800 text-white border border-gray-700"
                    rows="4"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded"
                >
                    Submit
                </button>
            </form>
            {status && <p className="mt-4 text-sm">{status}</p>}
        </div>
    )
}
