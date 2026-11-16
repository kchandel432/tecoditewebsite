export default function Section({ id, eyebrow, title, intro, className, children }) {
    return (
        <section id={id} className={`section ${className || ''}`}>
            <div className="container-mnc">
                {(eyebrow || title || intro) && (
                    <header className="max-w-3xl mb-10 md:mb-14">
                        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
                        {title && <h2 className="h2">{title}</h2>}
                        {intro && <p className="lead mt-4">{intro}</p>}
                    </header>
                )}
                {children}
            </div>
        </section>
    )
}

export { Section }
