'use client'
import { motion } from 'framer-motion'

const cards = [
    { title: 'AI Threat Detection', desc: 'Advanced ML models that detect anomalies in real-time across cloud and endpoint telemetry.' },
    { title: 'Security Automation', desc: 'Automated playbooks to contain and remediate threats with minimal manual work.' },
    { title: 'Compliance & Risk', desc: 'Continuous compliance monitoring and actionable risk reporting for audits.' }
]

export default function Services() {
    return (
        <section id="services" className="py-20">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-6">Our AI Cybersecurity Services</h2>
                <p className="text-center text-slate-400 max-w-2xl mx-auto mb-10">We combine telemetry, ML, and automation to deliver enterprise-grade protection.</p>

                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((c, i) => (
                        <motion.div key={i} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 * i }} className="glass p-6 rounded-2xl border border-white/6">
                            <h3 className="text-xl font-semibold mb-2 text-white">{c.title}</h3>
                            <p className="text-slate-300">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
