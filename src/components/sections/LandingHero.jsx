import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import LeadForm from '../LeadForm'

export default function LandingHero({ eyebrow, h1, sub, source }) {
  return (
    <section className="bg-cream pt-12 md:pt-16 pb-12 md:pb-16">
      <div className="max-w-container mx-auto px-5 sm:px-8 grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-sage/20 text-forest text-xs font-medium px-3 py-1.5 rounded-full mb-5"
          >
            {eyebrow}
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display leading-[1.1]">{h1}</h1>
          <p className="mt-5 text-lg text-ink/80">{sub}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
            <Trust>Registered NDIS SIL Provider</Trust>
            <Trust>Operating since 2024</Trust>
            <Trust>ABN 23 664 289 892</Trust>
          </div>
        </div>
        <div className="lg:col-span-2 lg:sticky lg:top-24">
          <div className="bg-white border border-line rounded-2xl shadow-soft p-5 md:p-6">
            <h2 className="text-lg font-display text-forest">Get a 30-minute walkthrough</h2>
            <p className="text-sm text-muted mt-1 mb-4">Real workflow from Caring Hands SA. No sales script.</p>
            <LeadForm source={source} subject={`Lead from /${source}`} />
          </div>
          <p className="text-xs text-muted mt-3 text-center">
            Or <Link to="/pricing" className="underline">see pricing</Link> ·{' '}
            <a href="https://app.sillive.com.au" className="underline">start free trial</a>
          </p>
        </div>
      </div>
    </section>
  )
}

function Trust({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-sage" aria-hidden="true" />
      {children}
    </span>
  )
}
