'use client'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const cards = [
    { title: 'AI threat detection', desc: 'Advanced ML models that detect anomalies in real-time across cloud and endpoint telemetry.' },
    { title: 'Security automation', desc: 'Automated playbooks to contain and remediate threats with minimal manual work.' },
    { title: 'Compliance & risk', desc: 'Continuous compliance monitoring and actionable risk reporting for audits.' }
]

export default function Services() {
    return (
        <Section
            id="services"
            eyebrow="Services"
            title="Our services"
            intro="We combine telemetry, ML, and automation to deliver enterprise-grade protection."
        >
            <div className="grid md:grid-cols-3 gap-6">
                {cards.map((c) => (
                    <Card key={c.title} className="min-h-[260px] flex flex-col">
                        <h3 className="h3 mb-2">{c.title}</h3>
                        <p className="text-sm text-ink-500 dark:text-ink-300">{c.desc}</p>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
