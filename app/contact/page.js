'use client';

import { useToast } from '@/components/ToastProvider';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

export default function ContactPage() {
    const Map = useMemo(
        () =>
            dynamic(() => import('@/app/components/Map'), {
                loading: () => <p className="text-center py-10">Map is loading...</p>,
                ssr: false,
            }),
        []
    );

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: 'General Inquiry'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { showToast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                showToast('Message sent successfully! We will get back to you soon.', 'success');
                setFormData({ name: '', email: '', message: '', subject: 'General Inquiry' });
            } else {
                showToast(data.error || 'Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            showToast('Network error. Please check your connection.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24">
            <div className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have questions about AI solutions or cybersecurity? Reach out to our expert team.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
                        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                                <select
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
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
                                <label className="block text-sm font-medium mb-2 text-gray-300">Message *</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows="6"
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                                    placeholder="Tell us about your project or inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-900/30 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <a href="mailto:techodite@gmail.com" className="text-blue-400 hover:text-blue-300">
                                            techodite@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-900/30 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <a href="tel:+919753089649" className="text-green-400 hover:text-green-300">
                                            +91 97530 89649
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-900/30 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Based In</h3>
                                        <p className="text-gray-300">India</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-900/30 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Response Time</h3>
                                        <p className="text-gray-300">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services Overview */}
                        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>AI Research & Development</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span>Cybersecurity Solutions</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>Enterprise AI Integration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <span>Security Consulting</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <section className="my-12 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                    <div className="bg-gray-800 rounded-2xl p-4 shadow-2xl">
                        {/* The map will only render in the browser */}
                        <Map />
                    </div>
                </section>
            </div>
        </div>
    );
}
