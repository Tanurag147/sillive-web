import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'

const APP_URL = 'https://app.sillive.com.au'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors ${scrolled ? 'bg-cream/90 backdrop-blur border-b border-line' : 'bg-cream'}`}
      role="banner"
    >
      <nav className="max-w-container mx-auto px-5 sm:px-8 h-16 flex items-center justify-between" aria-label="Primary">
        <Link to="/" aria-label="SILLIVE home">
          <Logo size="md" theme="light" />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-forest' : 'text-ink hover:text-forest'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href={APP_URL} className="text-sm font-medium text-forest hover:text-forest-700">Sign in</a>
          <a
            href={APP_URL}
            className="bg-forest text-cream text-sm font-medium px-4 py-2 rounded-lg hover:bg-forest-700 transition-colors"
          >
            Start Free Trial
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="#1B4332" strokeWidth="2" fill="none" aria-hidden="true">
            {open
              ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round"/>
              : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/>}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-cream">
          <ul className="px-5 py-4 flex flex-col gap-4">
            {NAV.map(item => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} onClick={closeMenu} className="block py-1 text-base text-ink">
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2 border-t border-line">
              <a href={APP_URL} onClick={closeMenu} className="block bg-forest text-cream text-center font-medium px-4 py-2.5 rounded-lg">
                Start Free Trial
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
