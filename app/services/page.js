'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
    const services = [
        {
            id: 1,
            title: "Penetration Testing",
            description: "Comprehensive security assessment to identify vulnerabilities in your systems, networks, and applications before attackers do.",
            icon: "🔍",
            gradient: "from-red-500 to-orange-600",
            features: ["Web Application Testing", "Network Penetration", "Social Engineering", "Wireless Security"],
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            title: "Enterprise Security",
            description: "End-to-end security solutions for large organizations including infrastructure protection, access control, and security governance.",
            icon: "🏢",
            gradient: "from-blue-500 to-cyan-600",
            features: ["Identity Management", "Network Segmentation", "Security Policies", "Compliance Framework"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            title: "Data Breach Protection",
            description: "Advanced data loss prevention and encryption technologies to safeguard your sensitive information from internal and external threats.",
            icon: "🛡️",
            gradient: "from-green-500 to-teal-600",
            features: ["Data Encryption", "DLP Systems", "Access Monitoring", "Incident Response"],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            title: "AI Threat Detection",
            description: "Machine learning-powered security monitoring that detects and responds to threats in real-time across your entire digital ecosystem.",
            icon: "🤖",
            gradient: "from-purple-500 to-pink-600",
            features: ["Behavioral Analysis", "Anomaly Detection", "Automated Response", "Threat Intelligence"],
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5,
            title: "Cloud Security",
            description: "Secure your cloud infrastructure across AWS, Azure, and Google Cloud with advanced security controls and compliance management.",
            icon: "☁️",
            gradient: "from-indigo-500 to-blue-600",
            features: ["Cloud Compliance", "Container Security", "CSPM", "Serverless Protection"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6,
            title: "Incident Response",
            description: "24/7 security operations and rapid response team to contain and mitigate security incidents when they occur.",
            icon: "🚨",
            gradient: "from-yellow-500 to-red-600",
            features: ["SOC Services", "Forensic Analysis", "Threat Hunting", "Recovery Planning"],
            image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                            Our Cybersecurity
                        </span>
                        <br />
                        <span className="text-white text-3xl md:text-4xl">Services</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive security solutions tailored to protect your business from evolving cyber threats.
                        From proactive testing to rapid incident response, we've got you covered.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Main Service Card */}
                            <div className="relative bg-gray-900/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 h-full flex flex-col">

                                {/* Service Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>

                                    {/* Service Icon */}
                                    <div className="absolute top-4 left-4">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Service Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 mb-4 flex-1 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.features.map((feature, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Link href="/contact">
                                        <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105`}>
                                            Get Started
                                        </button>
                                    </Link>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8 border border-cyan-400/20">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Secure Your Business?
                        </h2>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Get a comprehensive security assessment and discover how our services can protect your organization from cyber threats.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/30 transition-all transform hover:scale-105">
                                    Request Security Audit
                                </button>
                            </Link>
                            <Link href="/technology">
                                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all">
                                    Our Technology
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Process Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl font-bold text-center text-white mb-12">Our Security Process</h2>
                    <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { step: "01", title: "Assessment", desc: "Comprehensive security analysis" },
                            { step: "02", title: "Planning", desc: "Custom security strategy" },
                            { step: "03", title: "Implementation", desc: "Deploy security solutions" },
                            { step: "04", title: "Monitoring", desc: "24/7 threat detection" }
                        ].map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}