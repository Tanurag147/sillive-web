import { Link } from 'react-router-dom'
import Logo from './Logo'

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SILLIVE',
  url: 'https://sillive.com.au',
  logo: 'https://sillive.com.au/favicon.svg',
  email: 'hello@sillive.com.au',
  description: 'Operations platform for NDIS Supported Independent Living providers.',
  address: { '@type': 'PostalAddress', addressRegion: 'SA', addressCountry: 'AU' },
  identifier: { '@type': 'PropertyValue', propertyID: 'ABN', value: '23 664 289 892' },
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream" role="contentinfo">
      <div className="max-w-container mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2">
            <Logo size="md" theme="light" />
            <p className="mt-4 text-sm text-muted max-w-xs">
              Clinical plans that actually get implemented. Built inside a real SIL home in Adelaide.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-forest mb-3 font-body">Product</h4>
            <ul className="space-y-2 text-sm text-ink">
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-forest mb-3 font-body">Built for</h4>
            <ul className="space-y-2 text-sm text-ink">
              <li><Link to="/sil-software-australia">SIL providers</Link></li>
              <li><Link to="/support-coordinator-reporting">Support coordinators</Link></li>
              <li><Link to="/ndis-sil-audit-readiness">Audit readiness</Link></li>
              <li><Link to="/clinical-plan-implementation">Clinical implementation</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-muted">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="mailto:hello@sillive.com.au" className="hover:text-forest">hello@sillive.com.au</a>
            <span aria-hidden="true">·</span>
            <span>ABN 23 664 289 892</span>
            <span aria-hidden="true">·</span>
            <span>© 2026 SILLIVE</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs">
            <span className="w-2 h-2 rounded-full bg-sage" aria-hidden="true"></span>
            Adelaide, South Australia
          </span>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
    </footer>
  )
}
