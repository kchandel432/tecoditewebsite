'use client'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
