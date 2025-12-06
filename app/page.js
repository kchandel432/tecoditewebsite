'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80"
                    alt="Cyber Security Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-black/90"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-pulse delay-300"></div>

                {/* Glow effects */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-12">

                    {/* Text Content Section */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl lg:text-6xl font-bold mb-6"
                        >
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Techodite
                            </span>
                            <br />
                            <span className="text-white text-3xl lg:text-4xl">AI-Powered Cyber Defense</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-xl text-gray-200 mb-8 leading-relaxed"
                        >
                            Protecting your digital future with cutting-edge artificial intelligence and advanced cybersecurity systems.
                            Real-time threat detection, automated response, and intelligent protection.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            {/* Get Started Button - Links to Contact Page */}
                            <Link href="/contact">
                                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 w-full sm:w-auto">
                                    Get Started Free
                                </button>
                            </Link>

                            <Link href="/services">
                                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all w-full sm:w-auto">
                                    View Services
                                </button>
                            </Link>
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="grid grid-cols-3 gap-6 mt-12 max-w-md"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                                <div className="text-gray-300 text-sm">Detection Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">24/7</div>
                                <div className="text-gray-300 text-sm">Protection</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">AI</div>
                                <div className="text-gray-300 text-sm">Powered</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Circular Images Section */}
                    <div className="lg:w-1/2 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative"
                        >
                            {/* Main Circular Image Container */}
                            <div className="relative w-80 h-80 lg:w-96 lg:h-96">

                                {/* Outer Animated Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full p-1"
                                >
                                    <div className="w-full h-full bg-gray-900 rounded-full"></div>
                                </motion.div>

                                {/* Main Circular Image */}
                                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
                                        alt="AI Neural Network"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                                </div>

                                {/* Floating Circular Elements */}
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity
                                    }}
                                    className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-4 border-white/20 shadow-lg flex items-center justify-center"
                                >
                                    <Image
                                        src="/logo.png"
                                        alt="Techodite Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [0, 15, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: 1
                                    }}
                                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-4 border-white/20 shadow-lg flex items-center justify-center"
                                >
                                    <span className="text-white font-bold text-xs">SEC</span>
                                </motion.div>

                                <motion.div
                                    animate={{
                                        x: [0, 10, 0],
                                        rotate: [0, 10, 0]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity
                                    }}
                                    className="absolute top-1/2 -right-10 w-14 h-14 bg-gradient-to-br from-green-400 to-teal-500 rounded-full border-4 border-white/20 shadow-lg flex items-center justify-center"
                                >
                                    <span className="text-white font-bold text-xs">ML</span>
                                </motion.div>
                            </div>

                            {/* Background Pattern for Circular Section */}
                            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-400 mb-6">Trusted by industry leaders</p>
                    <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
                        <div className="text-white font-bold text-lg">TechGlobal</div>
                        <div className="text-white font-bold text-lg">FinSecure</div>
                        <div className="text-white font-bold text-lg">DataCore</div>
                        <div className="text-white font-bold text-lg">CloudNine</div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <Link href="/services">
                    <div className="text-center text-gray-400 cursor-pointer hover:text-cyan-400 transition-colors">
                        <div className="text-sm mb-2">Explore Services</div>
                        <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center hover:border-cyan-400 transition-colors">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                            ></motion.div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </div>
    )
}