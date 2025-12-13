'use client'

import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const companyInfo = {
    name: 'Techodite Solutions Pvt Ltd',
    email: 'techodite@gmail.com',
    phone: '+91-9753089649',
    address: 'Bazarpati Bhadarpur Burhanpur Madhya Pradesh',
    instagram: 'techoditesolutionpvt',
    linkedin: 'techodite-solutions',
    twitter: 'techodite_ai',
    github: 'techodite',
    youtube: 'techodite',
    facebook: 'techodite.solutions'
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Research', href: '/research' },
    { name: 'Products', href: '/products' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Services', href: '/services' },
    { name: 'Technology', href: '/technology' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'AI Research & Development', href: '/services/ai-research' },
    { name: 'Cybersecurity Consulting', href: '/services/cybersecurity' },
    { name: 'Machine Learning Solutions', href: '/services/ml-solutions' },
    { name: 'Data Privacy Compliance', href: '/services/compliance' },
    { name: 'Quantum Computing Research', href: '/services/quantum' },
    { name: 'IoT Security', href: '/services/iot-security' },
  ]


  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Techodite</h2>
                <p className="text-sm text-gray-400">AI & Cybersecurity Solutions</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Pioneering the future of secure artificial intelligence through innovative research
              and cutting-edge technology development.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-cyan-400" size={18} />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                  {companyInfo.email}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-cyan-400" size={18} />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-cyan-400 mt-1" size={18} />
                <p className="text-gray-300">{companyInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
            <p className="text-gray-300 mb-6">
              Follow us for the latest updates in AI and cybersecurity research.
            </p>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex items-center space-x-4">
                <a
                  href={`https://instagram.com/${companyInfo.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                >
                  <Instagram className="text-white" size={20} />
                </a>

                <a
                  href={`https://linkedin.com/company/${companyInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  <Linkedin className="text-white" size={20} />
                </a>

                <a
                  href={`https://twitter.com/${companyInfo.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  <Twitter className="text-white" size={20} />
                </a>

                <a
                  href={`https://github.com/${companyInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-gray-500/30 transition-all"
                >
                  <Github className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Contact Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                Disclaimer
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-white transition-colors">
                Security Policy
              </Link>
              <Link href="/ethics" className="text-gray-400 hover:text-white transition-colors">
                Research Ethics
              </Link>
              <Link href="/compliance" className="text-gray-400 hover:text-white transition-colors">
                Compliance
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Registered:</span>
              <span className="text-white font-medium">Techodite Solutions Pvt Ltd</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">CIN: U72900DL2023PTC123456</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Techodite Solutions Pvt Ltd. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Pioneering AI & Cybersecurity Research | ISO 27001 Certified | GDPR Compliant
          </p>
        </div>
      </div>
    </footer>
  )
}
