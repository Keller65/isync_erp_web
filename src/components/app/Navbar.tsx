"use client"

import Image from 'next/image'
import { useState } from 'react'
import { Nata_Sans } from 'next/font/google'
import Link from 'next/link'

const nataSans = Nata_Sans({ subsets: ['latin'] })

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/beneficios", label: "Beneficios" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300 ${nataSans.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/iSync_logo.svg"
              alt="Logo iSync"
              width={36}
              height={36}
              className="w-9 h-9"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link target="_blank" href="https://wa.me/50495955397?text=Cotizar" className="bg-[#1a3d59] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
              Realizar Cotizacion
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 border-t border-gray-100">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link target="_blank" href="https://wa.me/50495955397?text=Cotizar" className="w-full bg-[#1a3d59] text-white px-4 py-2 rounded-full text-sm font-medium">
                Realizar Cotizacion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar