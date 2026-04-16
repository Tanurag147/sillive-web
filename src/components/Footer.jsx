import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Logo />
            <p className="text-slate-500 text-sm mt-4 leading-relaxed">
              Built by an NDIS operator, for NDIS operators.
            </p>
            <p className="text-slate-600 text-xs mt-3">ABN 23 664 289 892</p>
          </div>
          <div>
            <p className="text-white text-sm font-medium mb-4">Platform</p>
            <div className="flex flex-col gap-3">
              {[['/', 'Home'], ['/for-scs', 'For Support Coordinators'], ['/for-providers', 'For Providers'], ['/pricing', 'Pricing']].map(([to, label]) => (
                <Link key={to} to={to} className="text-slate-500 hover:text-white text-sm transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white text-sm font-medium mb-4">Company</p>
            <div className="flex flex-col gap-3">
              {[['/contact', 'Contact'], ['/contact', 'Book a Demo']].map(([to, label]) => (
                <Link key={label} to={to} className="text-slate-500 hover:text-white text-sm transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white text-sm font-medium mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@sillive.com.au" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">hello@sillive.com.au</a>
              <p className="text-slate-600 text-sm">Adelaide, South Australia</p>
              <p className="text-slate-600 text-sm">Response within 24 hours</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">&copy; 2026 SILLIVE &middot; Gautam Aust Pty Ltd &middot; ABN 23 664 289 892</p>
          <p className="text-slate-600 text-sm">NDIS Registered SIL Provider &middot; Adelaide SA</p>
        </div>
      </div>
    </footer>
  )
}
