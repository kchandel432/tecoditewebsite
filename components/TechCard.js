export default function TechCard({ name, detail }) {
    return (
        <div className="border border-blue-500/40 rounded-2xl p-8 bg-black/40 backdrop-blur-md hover:bg-blue-900/20 transition-all">
            <h2 className="text-xl font-semibold mb-3 text-blue-400">{name}</h2>
            <p className="text-gray-300">{detail}</p>
        </div>
    )
}