'use client'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="solutions" className="py-20 bg-gradient-to-b from-transparent to-black/5">
            <div className="container">
                <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-center mb-6">The Cybersecurity Challenge & Our Solution</motion.h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 text-black shadow-lg">
                        <h3 className="mb-4">Facing Sophisticated Cyber Threats?</h3>
                        <ul className="list-disc ml-5 space-y-2 text-sm">
                            <li>Zero-day exploits bypassing traditional defenses</li>
                            <li>Alert fatigue and overwhelmed teams</li>
                            <li>Ransomware & supply-chain threats</li>
                            <li>Compliance complexity across cloud/hybrid</li>
                        </ul>
                    </div>

                    <div className="bg-[color:var(--panel)] rounded-2xl p-6 glass border border-white/6 text-slate-200">
                        <h3 className="mb-4">Our AI-Powered Platform</h3>
                        <ul className="ml-5 space-y-2 list-disc text-slate-300">
                            <li>Predictive threat modeling with high precision</li>
                            <li>Automated incident containment & remediation</li>
                            <li>Behavioral analytics to detect unknown attacks</li>
                            <li>Unified visibility across all assets</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
