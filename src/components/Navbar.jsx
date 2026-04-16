import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/for-scs', label: 'For SCs' },
    { to: '/for-providers', label: 'For Providers' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/"><Logo /></Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`text-sm transition-colors ${pathname === l.to ? 'text-teal-400' : 'text-slate-400 hover:text-white'}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact"
            className="bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Book Demo
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 p-2">
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all origin-center ${open ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block h-0.5 bg-current transition-all ${open ? 'opacity-0' : ''}`}/>
            <span className={`block h-0.5 bg-current transition-all origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-slate-950 border-b border-white/5">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-white text-sm py-1">{l.label}</Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)}
                className="bg-teal-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center mt-1">
                Book Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
