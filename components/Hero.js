'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      {/* === Background Image (Professional AI Cyber Image) === */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1920&q=80"
          alt="AI Cyber Defense Network"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050510]/80" />
      </div>

      {/* === Main Content === */}
      <div className="z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Empowering the Future of <span className="text-cyan-400">AI Cyber Defense</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Techodite Solutions combines cutting-edge AI with deep cybersecurity intelligence — securing the digital world, one neural node at a time.
        </p>
        <button className="bg-gradient-to-r from-[#00e0ff] to-[#6c63ff] px-8 py-3 rounded-xl text-lg font-semibold hover:shadow-[0_0_30px_rgba(108,99,255,0.8)] transition-all">
          Explore Our Technology
        </button>
      </div>

      {/* === Subtle Floating Glow Effect === */}
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-[#0d0d2b]/70 to-transparent" />
    </section>
  )
}