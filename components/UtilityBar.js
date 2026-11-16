export default function UtilityBar() {
  return (
    <div className="hidden md:block h-9 bg-ink-900 text-ink-300 text-xs">
      <div className="container-mnc flex h-full items-center justify-between">
        <div className="flex items-center gap-4 whitespace-nowrap">
          <span>ISO 27001 Aligned</span>
          <span>·</span>
          <span>SOC 2 Ready</span>
          <span>·</span>
          <span>Gurugram, IN — London, UK</span>
        </div>
        <div className="flex items-center gap-6 whitespace-nowrap">
          <a href="tel:+919753089649" className="hover:text-brand-400 transition-colors">
            +91 97530 89649
          </a>
          <a href="/contact" className="hover:text-brand-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
