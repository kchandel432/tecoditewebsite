export default function ServiceCard({ title, desc, icon }) {
    return (
        <div className="bg-[#0a0a2a]/70 border border-cyan-500/30 rounded-2xl p-8 hover:shadow-cyan-500/50 transition-all hover:-translate-y-2">
            <div className="text-4xl mb-4">{icon}</div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-300 text-sm">{desc}</p>
        </div>
    )
}