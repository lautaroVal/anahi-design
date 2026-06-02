'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-beige-200">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-beige-300 rounded-lg flex items-center justify-center">
              <span className="text-xl font-serif font-bold text-beige-900">A</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-beige-900">Anahí Design</p>
              <p className="text-xs text-beige-600">Interiorismo</p>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-beige-900"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <div className={`absolute top-full left-0 right-0 bg-cream-50 border-b border-beige-200 md:static md:border-none md:bg-transparent ${
            isMenuOpen ? 'block' : 'hidden md:block'
          }`}>
            <div className="container-custom flex flex-col md:flex-row items-center gap-8 py-4 md:py-0">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-beige-900 hover:text-rose-500 font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="text-beige-900 hover:text-rose-500 font-medium transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection('acerca-de')}
                className="text-beige-900 hover:text-rose-500 font-medium transition-colors"
              >
                Acerca de mí
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-6 py-2.5 bg-rose-400 text-white rounded-lg hover:bg-rose-500 font-medium transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
