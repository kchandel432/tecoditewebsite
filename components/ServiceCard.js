import { Card } from '@/components/ui/Card'

export default function ServiceCard({ title, desc, icon }) {
    return (
        <Card className="flex flex-col">
            <div className="mb-4">{icon}</div>
            <h3 className="h3 mb-2">{title}</h3>
            <p className="text-sm text-ink-500 dark:text-ink-300">{desc}</p>
        </Card>
    )
}
