import { Card } from '@/components/ui/Card'

export default function TechCard({ name, detail }) {
    return (
        <Card>
            <h3 className="h3 mb-2">{name}</h3>
            <p className="text-sm text-ink-500 dark:text-ink-300">{detail}</p>
        </Card>
    )
}
