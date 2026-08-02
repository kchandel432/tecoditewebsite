'use client'

import { useTheme } from '@/context/ThemeContext'
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileDropdowns, setMobileDropdowns] = useState({})
  const dropdownRef = useRef(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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
        { name: '🔍 Malware Scanner', href: '/products/malware-scanner' },
        { name: '🌐 Web Scanner', href: '/products/web-scanner' },
        { name: '🛰️ XDR Platform', href: '/products', comingSoon: true },
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
        { name: 'About Us', href: '/about' },
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-lg py-3 border-b border-gray-800' :
      'bg-transparent py-5'
      }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <img src="/company-logo.jpg" alt="Techodite Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium py-2"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-xl shadow-xl shadow-black/40 py-2">
                        {item.children.map((child) => (
                          child.comingSoon ? (
                            <span
                              key={child.name}
                              className="block px-4 py-2.5 text-sm text-gray-500 cursor-not-allowed select-none"
                            >
                              <span className="flex items-center justify-between">
                                {child.name}
                                <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                                  COMING SOON
                                </span>
                              </span>
                            </span>
                          ) : (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-800/70 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-indigo-500/10 transition-colors"
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
                    className="text-gray-300 hover:text-white transition-colors font-medium py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-blue-400" />
              )}
            </button>

            <Link
              href="/signup"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-blue-400" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 bg-gray-900/95 backdrop-blur-lg rounded-xl border border-gray-800 p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-colors font-medium py-3"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${mobileDropdowns[item.name] ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {mobileDropdowns[item.name] && (
                        <div className="pl-4 space-y-1 border-l-2 border-gray-800 ml-2 mb-2">
                          {item.children.map((child) => (
                            child.comingSoon ? (
                              <span
                                key={child.name}
                                className="block py-2 text-sm text-gray-500 cursor-not-allowed select-none"
                              >
                                <span className="flex items-center justify-between">
                                  {child.name}
                                  <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                                    COMING SOON
                                  </span>
                                </span>
                              </span>
                            ) : (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
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
                      className="block text-gray-300 hover:text-white transition-colors font-medium py-3"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 mt-2 border-t border-gray-800">
                <Link
                  href="/signup"
                  onClick={closeMobileMenu}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg font-semibold text-white text-center hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

