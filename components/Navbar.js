'use client'

import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/Button'
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileDropdowns, setMobileDropdowns] = useState({})
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      const root = document.querySelector('nav')
      if (root && !root.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      href: '/products',
      children: [
        { name: 'Malware Scanner', href: '/products/malware-scanner' },
        { name: 'Web Scanner', href: '/products/web-scanner' },
        { name: 'XDR Platform', href: '/products', comingSoon: true },
        { name: 'All Products', href: '/products' },
      ],
    },
    {
      name: 'Resources',
      href: '/blog',
      children: [
        { name: 'Blog', href: '/blog' },
        { name: 'Technology', href: '/technology' },
      ],
    },
    {
      name: 'Company',
      href: '/about',
      children: [
        { name: 'About', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Investors', href: '/investors' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ]

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
    setMobileDropdowns({})
  }

  return (
    <nav className={`sticky top-0 z-40 h-16 border-b border-ink-100 dark:border-ink-800 ${scrolled ? 'bg-white/85 backdrop-blur' : 'bg-white/60 backdrop-blur'} dark:bg-ink-900/85`}>
      <div className="container-mnc flex h-full items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Techodite home" className="flex items-center gap-2.5 shrink-0" onClick={closeMobileMenu}>
            <Image src="/logo.png" alt="Techodite" width={140} height={36} className="h-8 w-auto object-contain" priority />
            <span className="font-display font-semibold text-lg tracking-tight text-ink-900 dark:text-white">Techodite</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="text-sm font-medium text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white transition-colors flex items-center gap-1 px-2 py-2"
                  >
                    {item.name}
                    <ChevronDown size={14} className="transition-transform duration-150" />
                  </button>

                  {openDropdown === item.name && (
                    <div className="z-50 absolute top-full left-0 mt-1.5 w-64 border border-ink-200 dark:border-ink-700 rounded-xl shadow-card bg-white p-2 dark:bg-ink-800 transition-opacity duration-150">
                      {item.children.map((child) => (
                        child.comingSoon ? (
                          <span
                            key={child.name}
                            className="block px-3 py-2 text-sm text-ink-400 dark:text-ink-500 cursor-not-allowed select-none"
                          >
                            {child.name}
                          </span>
                        ) : (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-3 py-2 text-sm text-ink-600 rounded-lg hover:bg-ink-50 dark:text-ink-300 dark:hover:bg-ink-800/50 transition-colors"
                          >
                            {child.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-sm font-medium text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white transition-colors px-2 py-2"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={closeMobileMenu}>
              Sign in
            </Button>
            <Button size="sm" asChild>
              <a href="/contact">Talk to sales</a>
            </Button>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex w-full max-w-xs flex-col border-l border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 transition-transform duration-300 ease-corporate transform translate-x-0">
          <div className="container-mnc flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" aria-label="Techodite home" className="flex items-center gap-2.5 shrink-0" onClick={closeMobileMenu}>
                <Image src="/logo.png" alt="Techodite" width={140} height={36} className="h-8 w-auto object-contain" priority />
                <span className="font-display font-semibold text-lg tracking-tight text-ink-900 dark:text-white">Techodite</span>
              </Link>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-1 border-t border-ink-100 dark:border-ink-800">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="w-full flex items-center justify-between text-sm font-medium text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white border-b border-ink-50 dark:border-ink-800/50 py-4 transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-150 ${mobileDropdowns[item.name] ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {mobileDropdowns[item.name] && (
                        <div className="pl-4 space-y-1 border-b border-ink-50 dark:border-ink-800/50">
                          {item.children.map((child) => (
                            child.comingSoon ? (
                              <span
                                key={child.name}
                                className="block px-3 py-2 text-sm text-ink-400 dark:text-ink-500 cursor-not-allowed select-none"
                              >
                                {child.name}
                              </span>
                            ) : (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="block px-3 py-2 text-sm text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white transition-colors"
                              >
                                {child.name}
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block text-sm font-medium text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white border-b border-ink-50 dark:border-ink-800/50 py-4 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="border-t border-ink-100 dark:border-ink-800">
                <button
                  onClick={toggleTheme}
                  className="w-full text-sm font-medium text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white border-b border-ink-50 dark:border-ink-800/50 py-4 transition-colors flex items-center justify-between"
                >
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
                <div className="py-4">
                  <Button variant="ghost" size="sm" className="w-full" onClick={closeMobileMenu}>
                    Sign in
                  </Button>
                  <Button size="sm" className="w-full mt-3" asChild>
                    <a href="/contact">Talk to sales</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
