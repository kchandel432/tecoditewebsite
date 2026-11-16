import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const HERO_IMAGE = '/hero-dashboard.svg'

export default function Hero() {
    return (
        <section className="border-b border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900">
            <div className="container-mnc grid lg:grid-cols-12 gap-10 py-20 md:py-28 items-center">
                <div className="lg:col-span-6">
                    <p className="eyebrow mb-4">AI · Cybersecurity · Cloud</p>
                    <h1 className="h1">Enterprise security and AI, engineered for scale.</h1>
                    <p className="lead mt-5 max-w-xl">
                        Techodite helps regulated enterprises modernize security operations,
                        deploy production AI, and meet compliance obligations — without
                        slowing delivery.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button>Talk to sales</Button>
                        <Button variant="secondary" asChild>
                            <a href="/case-studies">View case studies</a>
                        </Button>
                    </div>
                    <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500 dark:text-ink-400">
                        <li className="flex items-center gap-1.5">
                            <span className="text-brand-600 dark:text-brand-400">✓</span>
                            ISO 27001 aligned
                        </li>
                        <li className="flex items-center gap-1.5">
                            <span className="text-brand-600 dark:text-brand-400">✓</span>
                            SOC 2 readiness
                        </li>
                        <li className="flex items-center gap-1.5">
                            <span className="text-brand-600 dark:text-brand-400">✓</span>
                            99.99% SLA
                        </li>
                    </ul>
                </div>
                <div className="lg:col-span-6">
                    <div className="rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800 p-2 shadow-card">
                        <img
                            src={HERO_IMAGE}
                            alt="Techodite platform overview — dashboard showing uptime, active threats, threat activity chart, and recent security alerts"
                            className="rounded-lg w-full"
                            loading="eager"
                            width={1280}
                            height={800}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
