export default function Card({ className, children, ...props }) {
    return (
        <div
            {...props}
            className={[
                'rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 p-6',
                'transition-colors duration-200 hover:border-brand-300 dark:hover:border-brand-700',
                className,
            ].filter(Boolean).join(' ')}
        >
            {children}
        </div>
    )
}

export { Card }
