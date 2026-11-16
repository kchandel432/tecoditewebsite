'use client'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export default function About() {
    return (
        <Section
            id="about"
            eyebrow="About"
            title="The cybersecurity challenge & our solution"
            intro=""
        >
            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <h3 className="h3 mb-3">Facing sophisticated cyber threats?</h3>
                    <ul className="list-disc ml-5 space-y-2 text-sm text-ink-500 dark:text-ink-300">
                        <li>Zero-day exploits bypassing traditional defenses</li>
                        <li>Alert fatigue and overwhelmed teams</li>
                        <li>Ransomware &amp; supply-chain threats</li>
                        <li>Compliance complexity across cloud/hybrid</li>
                    </ul>
                </Card>

                <Card>
                    <h3 className="h3 mb-3">Our AI-powered platform</h3>
                    <ul className="list-disc ml-5 space-y-2 text-sm text-ink-500 dark:text-ink-300">
                        <li>Predictive threat modeling with high precision</li>
                        <li>Automated incident containment &amp; remediation</li>
                        <li>Behavioral analytics to detect unknown attacks</li>
                        <li>Unified visibility across all assets</li>
                    </ul>
                </Card>
            </div>
        </Section>
    )
}
