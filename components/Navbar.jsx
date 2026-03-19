import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Investors', href: '#investors' },
    { label: 'Sellers', href: '#sellers' },
    { label: 'Pipeline', href: '#pipeline' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(13, 11, 9, 0.96)'
          : 'rgba(13, 11, 9, 0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : 'none',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', lineHeight: 0 }}>
          <Image
            src="/hekano-logo.png"
            alt="Hekano Property Group"
            width={160}
            height={80}
            style={{ height: 56, width: 'auto', objectFit: 'contain', display: 'block' }}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.62rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.target.style.color = '#c9a84c')}
                onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.75)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px transition-all"
              style={{ background: '#c9a84c' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6"
          style={{ background: 'rgba(13, 11, 9, 0.98)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
