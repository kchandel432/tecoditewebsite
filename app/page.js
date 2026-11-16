'use client'

import Hero from '@/components/Hero'
import { LogoStrip } from '@/components/ui/LogoStrip'
import { StatBand } from '@/components/ui/StatBand'


// TODO: Replace with actual client logo images once available.
const clientLogos = [
    { src: '', alt: 'Techodite enterprise customer logo shown on the homepage' },
    { src: '', alt: 'Techodite enterprise customer logo shown on the homepage' },
    { src: '', alt: 'Techodite enterprise customer logo shown on the homepage' },
    { src: '', alt: 'Techodite enterprise customer logo shown on the homepage' },
    { src: '', alt: 'Techodite enterprise customer logo shown on the homepage' },
]

export default function HomePage() {
    return (
        <>
            <Hero />

            <section className="py-10 border-b border-ink-100 dark:border-ink-800">
                <div className="container-mnc">
                    <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-ink-400 mb-6">
                        Trusted by security and engineering teams worldwide
                    </p>
                    <LogoStrip logos={clientLogos} />
                </div>
            </section>

            <section className="section">
                <StatBand
                    items={[
                        { value: '99.99%', label: 'Platform availability' },
                        { value: '0', label: 'Reported breaches' },
                        { value: '50+', label: 'Enterprise clients' },
                        { value: '12', label: 'Countries served' },
                    ]}
                />
            </section>
        </>
    )
}
