'use client'

import Link from 'next/link'

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            {/* Header & Navigation */}
            <header className="bg-gradient-to-r from-slate-800 to-slate-950 py-6 border-b border-slate-700">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">🛡️</span>
                            <div>
                                <div className="text-xl font-bold text-blue-400">Techodite</div>
                            </div>
                        </div>
                        <nav className="hidden md:flex gap-6">
                            <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">Products</Link>
                            <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">Solutions</Link>
                            <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">Pricing</Link>
                            <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">Resources</Link>
                            <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-950">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        AI Security Solutions
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                        Enterprise-grade protection at startup prices. All plans include Indian Rupees (INR) and USD pricing.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 text-blue-400 rounded-full">Affordable Plans</span>
                        <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 text-blue-400 rounded-full">INR + USD Billing</span>
                        <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 text-blue-400 rounded-full">Free Demos</span>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
                        <p className="text-slate-400">Showing 7 security solutions</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* Sentinel AI */}
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:-translate-y-2">
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold absolute -top-2 right-4">Save 15%</span>
                            <h3 className="text-xl font-bold text-white mb-3">Sentinel AI</h3>
                            <p className="text-slate-400 mb-4">Real-time AI-powered threat detection platform using deep learning for anomaly detection.</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-white">₹1,499</span>
                                <span className="text-lg text-slate-500 ml-2">$18</span>
                                <span className="text-slate-500 ml-1">per month</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-3">Starts from</p>
                            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20">First month free for startups</span>
                        </div>

                        {/* QuantumShield */}
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-white mb-3">QuantumShield</h3>
                            <p className="text-slate-400 mb-4">Post-quantum cryptographic suite for future-proof data encryption.</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-white">₹999</span>
                                <span className="text-lg text-slate-500 ml-2">$12</span>
                                <span className="text-slate-500 ml-1">per month</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-3">Starts from</p>
                            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20">Save 20% for educational institutions</span>
                        </div>

                        {/* AISecure */}
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-white mb-3">AISecure</h3>
                            <p className="text-slate-400 mb-4">Protect machine learning models from adversarial attacks and data poisoning.</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-white">₹1,299</span>
                                <span className="text-lg text-slate-500 ml-2">$16</span>
                                <span className="text-slate-500 ml-1">per month</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-3">Starts from</p>
                            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20">Bulk discounts for 100+ devices</span>
                        </div>

                        {/* EdgeGuard */}
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-white mb-3">EdgeGuard</h3>
                            <p className="text-slate-400 mb-4">Lightweight security framework for IoT and edge computing environments.</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-white">₹499</span>
                                <span className="text-lg text-slate-500 ml-2">$6</span>
                                <span className="text-slate-500 ml-1">per device/year</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-3">Starts from</p>
                            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20">Free compliance audit included</span>
                        </div>

                        {/* DataShield AI */}
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-white mb-3">DataShield AI</h3>
                            <p className="text-slate-400 mb-4">AI-driven data loss prevention and privacy protection platform.</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-white">₹1,999</span>
                                <span className="text-lg text-slate-500 ml-2">$24</span>
                                <span className="text-slate-500 ml-1">per month</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-3">Starts from</p>
                            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20">30-day free trial available</span>
                        </div>

                        {/* CloudSentinel */}
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-white mb-3">CloudSentinel</h3>
                            <p className="text-slate-400 mb-4">Comprehensive cloud security with AI-powered monitoring and automation.</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-white">₹1,499</span>
                                <span className="text-lg text-slate-500 ml-2">$18</span>
                                <span className="text-slate-500 ml-1">per month</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-3">Starts from</p>
                            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20">Custom enterprise plans</span>
                        </div>

                        {/* AI Malware Scanner */}
                        <Link href="/products/malware-scanner">
                            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:-translate-y-2 relative cursor-pointer">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold absolute -top-2 right-4">Beta</span>
                                <h3 className="text-xl font-bold text-white mb-3">🔍 AI Malware Scanner</h3>
                                <p className="text-slate-400 mb-4">Advanced threat detection using machine learning to analyze files and URLs.</p>
                                <div className="mb-4">
                                    <span className="text-slate-400 text-sm">Try Now</span>
                                </div>
                                <p className="text-slate-500 text-sm mb-3">Free Beta Testing</p>
                                <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm border border-green-500/20">Live Scanner Available →</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Guardian Scan AI Detailed Section */}
            <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-950">
                <div className="container mx-auto px-6">
                    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                        <div className="text-center mb-12">
                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Save 15% on annual billing</span>
                            <h3 className="text-3xl font-bold text-white mt-4 mb-4">Guardian Scan AI</h3>
                            <p className="text-slate-400 max-w-2xl mx-auto">Advanced AI-powered malware detection and removal with real-time protection for endpoints, networks, and cloud environments.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            <div className="bg-slate-700/50 rounded-lg p-6">
                                <h4 className="text-blue-400 font-semibold mb-2">Real-time Scanning</h4>
                                <p className="text-slate-400 text-sm">Continuous monitoring and scanning of all system activities and files in real-time.</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-6">
                                <h4 className="text-blue-400 font-semibold mb-2">Heuristic Analysis</h4>
                                <p className="text-slate-400 text-sm">Detects unknown malware using behavioral analysis and machine learning algorithms.</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-6">
                                <h4 className="text-blue-400 font-semibold mb-2">Ransomware Protection</h4>
                                <p className="text-slate-400 text-sm">Specialized protection against ransomware attacks with automatic backup and recovery.</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-6">
                                <h4 className="text-blue-400 font-semibold mb-2">Cloud Integration</h4>
                                <p className="text-slate-400 text-sm">Seamlessly integrates with cloud storage and services for comprehensive protection.</p>
                            </div>
                        </div>

                        <h4 className="text-white font-semibold mb-6">Ideal For</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="text-center p-6">
                                <h4 className="text-white font-semibold mb-2">All Businesses</h4>
                                <p className="text-slate-400 text-sm">Essential malware protection for organizations of any size</p>
                            </div>
                            <div className="text-center p-6">
                                <h4 className="text-white font-semibold mb-2">Remote Teams</h4>
                                <p className="text-slate-400 text-sm">Protect endpoints across distributed workforces</p>
                            </div>
                            <div className="text-center p-6">
                                <h4 className="text-white font-semibold mb-2">Indian Enterprises</h4>
                                <p className="text-slate-400 text-sm">INR billing with local compliance support</p>
                            </div>
                        </div>

                        <h4 className="text-white font-semibold mb-6">Pricing Plans</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-slate-700 rounded-xl p-6 border border-slate-600">
                                <h4 className="text-xl font-bold text-white mb-4">Basic</h4>
                                <div className="mb-6">
                                    <span className="text-3xl font-bold text-white">₹899</span>
                                    <span className="text-lg text-slate-500 ml-2">$11</span>
                                    <span className="text-slate-500 ml-1">per month</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-6">Essential malware protection</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> Real-time file scanning</li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> Basic threat removal</li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> Email protection</li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> 24/7 monitoring</li>
                                </ul>
                                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">Get Started</button>
                            </div>

                            <div className="bg-slate-700 rounded-xl p-6 border-2 border-blue-500 relative transform scale-105">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</span>
                                <h4 className="text-xl font-bold text-white mb-4">Professional</h4>
                                <div className="mb-6">
                                    <span className="text-3xl font-bold text-white">₹1,799</span>
                                    <span className="text-lg text-slate-500 ml-2">$22</span>
                                    <span className="text-slate-500 ml-1">per month</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-6">Advanced protection suite</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> All Basic features</li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> Heuristic analysis</li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> Ransomware protection</li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> Cloud integration</li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> Priority support</li>
                                </ul>
                                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">Get Started</button>
                            </div>

                            <div className="bg-slate-700 rounded-xl p-6 border border-slate-600">
                                <h4 className="text-xl font-bold text-white mb-4">Enterprise</h4>
                                <div className="mb-6">
                                    <span className="text-3xl font-bold text-white">Custom</span>
                                    <span className="text-slate-500 ml-2">Quote</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-6">Complete security solution</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> All Professional features</li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> Custom deployment</li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> Dedicated support</li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> Compliance reporting</li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-green-400">✓</span> API access</li>
                                </ul>
                                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">Contact Sales</button>
                            </div>
                        </div>

                        <div className="text-center text-slate-400 text-sm">
                            <p>All plans include: Indian Rupees (INR) billing • Free product training • Priority email support • Regular security updates</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Offer Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 border border-blue-500/30 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Indian Startup Special</h3>
                        <p className="text-slate-300 mb-4">Get additional 20% discount for Indian startups and MSMEs registered under Startup India.</p>
                        <p className="text-slate-400 text-sm">All prices shown are in Indian Rupees with USD equivalents. Contact us for annual billing discounts and custom enterprise solutions.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-slate-950 border-t border-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-slate-400">© 2024 Techodite. All rights reserved.</p>
                    <p className="text-slate-500 text-sm mt-2">AI & Cybersecurity Solutions</p>
                </div>
            </footer>
        </div>
    )
}
