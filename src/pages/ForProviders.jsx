import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const features = [
  { title: 'Roster management', desc: 'Shifts, workers, participants \u2014 scheduled and tracked in one place.' },
  { title: 'NDIS billing', desc: 'Rate cards, shift type detection, automatic calculation. SCHADS-aligned.' },
  { title: 'Compliance tracking', desc: 'Worker cert expiry, mandatory document alerts, audit-ready records.' },
  { title: 'SC collaboration', desc: 'Invite SCs, share progress, receive plan review requests \u2014 in platform.' },
  { title: 'ERA AI agents', desc: 'Shift note processing, documentation drafting, compliance queries.' },
  { title: 'Incident management', desc: 'Log, notify, track. NDIS Commission notification workflows built in.' },
]

export default function ForProviders() {
  return (
    <main className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-teal-400 text-sm font-medium mb-4 uppercase tracking-wider">For SIL Providers</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
            Run a tighter NDIS SIL house. Prove it to anyone.
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed mb-10">
            Roster, compliance, billing, shift notes, SC relationships &mdash; one platform. Built by a registered NDIS SIL provider who needed it themselves.
          </p>
          <Link to="/contact"
            className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 rounded-lg transition-colors inline-block">
            Book a 20-min Demo
          </Link>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold mb-10">Everything in one platform</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.07}>
              <div className="bg-slate-900 border border-white/5 hover:border-teal-600/30 rounded-2xl p-6 h-full transition-colors">
                <h3 className="font-display text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection>
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-10 md:p-14">
            <p className="text-teal-400 text-sm font-medium mb-4 uppercase tracking-wider">Proof of concept</p>
            <h2 className="font-display text-3xl font-bold mb-4">Caring Hands SA runs on SILLIVE.</h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl mb-6">
              We are not a tech company that guessed at NDIS. We are a registered NDIS SIL provider &mdash; ABN 23 664 289 892 &mdash; that built the tool we needed and opened it to the sector. Every feature was tested in a real SIL house before it shipped.
            </p>
            <p className="text-slate-600 text-sm">Ingle Farm, Adelaide SA &middot; 3+ active participants &middot; 12+ support workers</p>
          </div>
        </AnimatedSection>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <AnimatedSection>
          <p className="text-slate-400 text-lg mb-4">Pricing from</p>
          <p className="font-display text-5xl font-bold text-white mb-2">$199<span className="text-slate-500 text-2xl font-normal">/participant/month</span></p>
          <p className="text-slate-500 mb-8">SC access always free &middot; No lock-in contract</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/pricing" className="border border-white/10 hover:border-teal-600/40 text-white px-6 py-3 rounded-lg transition-colors">See full pricing</Link>
            <Link to="/contact" className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 rounded-lg transition-colors">Book a Demo</Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
