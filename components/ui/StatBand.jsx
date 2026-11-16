export default function StatBand({ items }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink-100 dark:divide-ink-800">
            {items.map(({ value, label }, index) => (
                <div key={label || index} className="p-4 border-b border-b-ink-50 dark:border-b-ink-800 md:border-b-0 last:border-b-0">
                    <h3 className="h3">{value}</h3>
                    <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">{label}</p>
                </div>
            ))}
        </div>
    )
}

export { StatBand }
