'use client'

import { motion } from 'framer-motion'
import {
    Brain,
    CheckCircle,
    Globe,
    MapPin,
    Shield,
    Target,
    Users
} from 'lucide-react'

export default function AboutPage() {
    const companyInfo = {
        name: 'Techodite Solutions Pvt Ltd',
        founded: 2023,
        employees: '50+',
        location: 'Noida, Uttar Pradesh',
        email: 'techodite@gmail.com',
        phone: '+91-9876543210',
        mission: 'To pioneer secure and ethical artificial intelligence solutions that transform industries while protecting digital ecosystems.',
        vision: 'A world where AI-driven innovation and cybersecurity work in harmony to create a safer, more efficient digital future.'
    }

    const values = [
        {
            icon: <Shield className="text-cyan-400" size={24} />,
            title: 'Security First',
            description: 'Embedding security in every layer of our AI solutions'
        },
        {
            icon: <Brain className="text-blue-400" size={24} />,
            title: 'Innovation',
            description: 'Pushing boundaries in AI research and development'
        },
        {
            icon: <Users className="text-purple-400" size={24} />,
            title: 'Collaboration',
            description: 'Working with partners to solve complex challenges'
        },
        {
            icon: <Target className="text-red-400" size={24} />,
            title: 'Excellence',
            description: 'Striving for the highest quality in everything we do'
        }
    ]

    const achievements = [
        { metric: 'Research Papers', value: '25+', description: 'Published in top journals' },
        { metric: 'AI Models', value: '15+', description: 'Production-ready models' },
        { metric: 'Client Projects', value: '50+', description: 'Successful implementations' },
        { metric: 'Team Members', value: '50+', description: 'Experts in AI & Cybersecurity' },
        { metric: 'Countries Served', value: '12+', description: 'Global presence' },
        { metric: 'Certifications', value: '6', description: 'Industry certifications' }
    ]

    const team = [
        {
            name: 'Kapil Chandel',
            role: 'CEO & Founder',
            designation: 'Chief Executive Officer',
            specialty: 'Strategic Leadership & AI Research',
            image: '/kapil-chandel.jpg'
        },
        {
            name: 'Sanjay Chandel',
            role: 'Management Head',
            designation: 'Chief Operations Officer',
            specialty: 'Finance & Operations Management',
            image: '/sanjay-chandel.jpg'
        },
        {
            name: 'Tushar Chandel',
            role: 'CTO & Co-Founder',
            designation: 'Chief Technology Officer',
            specialty: 'Cybersecurity & AI Development',
            image: '/tushar-chandel.jpg'
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        About Techodite Solutions
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Leading the convergence of artificial intelligence and cybersecurity through
                        innovative research, cutting-edge technology, and expert consulting.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-4 py-2 bg-cyan-900/30 text-cyan-400 rounded-full">ISO 27001 Certified</span>
                        <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full">GDPR Compliant</span>
                        <span className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-full">AI Research Focus</span>
                    </div>
                </motion.div>

                {/* Company Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-16"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl">
                                    <Globe className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Company Overview</h2>
                                    <p className="text-gray-400">Techodite Solutions Pvt Ltd</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gray-900/30 rounded-lg">
                                    <span className="text-gray-400">Founded</span>
                                    <span className="text-white font-bold">{companyInfo.founded}</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-900/30 rounded-lg">
                                    <span className="text-gray-400">Team Size</span>
                                    <span className="text-white font-bold">{companyInfo.employees}</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-900/30 rounded-lg">
                                    <span className="text-gray-400">Headquarters</span>
                                    <span className="text-white font-bold flex items-center gap-2">
                                        <MapPin size={16} />
                                        {companyInfo.location}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-900/30 rounded-lg">
                                    <span className="text-gray-400">Contact Email</span>
                                    <a href={`mailto:${companyInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                                        {companyInfo.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {companyInfo.mission}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {companyInfo.vision}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-6 hover:border-cyan-500 transition-all">
                                <div className="p-3 bg-gray-900/50 rounded-lg mb-4 w-fit">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-300">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-800/30 p-8">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Achievements</h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                                    <div className="text-sm text-gray-300 font-medium mb-1">{achievement.metric}</div>
                                    <div className="text-xs text-gray-500">{achievement.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 mb-16"
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Techodite?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            {[
                                'Expert team with PhDs in AI and decades of cybersecurity experience',
                                'Proven track record of successful research publications and patents',
                                'End-to-end solutions from research to production deployment',
                                'Strict adherence to ethical AI principles and data privacy standards'
                            ].map((point, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                                    <p className="text-gray-300">{point}</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            {[
                                'Cutting-edge research facilities with state-of-the-art infrastructure',
                                'Strategic partnerships with leading academic institutions',
                                'Continuous innovation through dedicated R&D investments',
                                'Global client base with diverse industry expertise'
                            ].map((point, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                                    <p className="text-gray-300">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Leadership Team</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 p-8 text-center hover:border-cyan-500 transition-all group"
                            >
                                <div className="mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                                <p className="text-gray-300 text-sm mb-4">{member.designation}</p>
                                <p className="text-gray-400 text-sm">{member.specialty}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-12 border border-cyan-800/30">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Whether you're looking for AI solutions, cybersecurity expertise, or research collaboration,
                            our team is ready to help you achieve your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
                            >
                                Contact Our Team
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-bold hover:bg-cyan-400/10 transition-all"
                            >
                                Request a Consultation
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}