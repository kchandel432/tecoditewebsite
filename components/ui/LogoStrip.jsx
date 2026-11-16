export default function LogoStrip({ logos }) {
    return (
        <div className="flex flex-wrap gap-x-12 gap-y-8 items-center justify-center">
            {logos.map(({ src, alt }, index) => {
                if (!src) {
                    return (
                        <div
                            key={alt || index}
                            className="h-8 w-24 bg-ink-100 dark:bg-ink-800 rounded"
                            aria-label={alt}
                        />
                    )
                }

                return (
                    <img
                        key={alt || src || index}
                        src={src}
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                        className="h-8 w-auto opacity-60 grayscale hover:opacity-100 transition-opacity"
                        width="120"
                        height="32"
                    />
                )
            })}
        </div>
    )
}

export { LogoStrip }
