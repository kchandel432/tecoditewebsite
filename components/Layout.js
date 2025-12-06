'use client'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main page content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}
