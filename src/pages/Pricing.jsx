import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const plans = [
  { name: 'Starter', price: 199, desc: 'For providers getting started', features: ['Up to 2 participants', 'Full provider portal', 'SC portal access (free for SCs)', 'ERA AI agents', 'Shift notes & roster', 'Email support'] },
  { name: 'Growth', price: 399, desc: 'For growing SIL providers', featured: true, features: ['3\u20135 participants', 'Everything in Starter', 'Advanced reporting', 'Quarterly PDF generation', 'Incident workflows', 'Priority support'] },
  { name: 'Scale', price: 699, desc: 'For established providers', features: ['6+ participants', 'Everything in Growth', 'Custom reporting', 'Dedicated onboarding', 'SLA support', 'Multi-property management'] },
]

const faqs = [
  { q: 'Do Support Coordinators pay anything?', a: 'No. SC access is free forever. SILLIVE is funded by providers, not coordinators.' },
  { q: 'Is there a setup fee or lock-in contract?', a: 'No setup fee. No lock-in. Cancel any time with 30 days notice.' },
  { q: 'What happens if I add a participant mid-month?', a: 'Billing is prorated from the day you add them. You only pay for what you use.' },
  { q: 'Is my data secure?', a: 'SILLIVE is built on Supabase with row-level security. No data is shared between providers. Each provider\'s data is completely isolated.' },
  { q: 'Can I try before I commit?', a: 'Yes \u2014 book a 20-min demo and we\'ll walk you through the live platform with real data.' },
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null)
  return (
    <main className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Transparent pricing.</h1>
          <p className="text-slate-400 text-xl">Providers pay. Support Coordinators always get free access.</p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.1}>
              <div className={`rounded-2xl p-8 h-full flex flex-col ${p.featured ? 'bg-teal-900/20 border-2 border-teal-600/40' : 'bg-slate-900 border border-white/5'}`}>
                {p.featured && <span className="bg-teal-600/20 text-teal-400 text-xs font-medium px-3 py-1 rounded-full self-start mb-4">Most popular</span>}
                <h2 className="font-display text-2xl font-bold mb-1">{p.name}</h2>
                <p className="text-slate-500 text-sm mb-6">{p.desc}</p>
                <div className="mb-8">
                  <span className="font-display text-4xl font-bold">${p.price}</span>
                  <span className="text-slate-500 text-sm">/participant/month</span>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-teal-400 mt-0.5 shrink-0">&check;</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className={`text-center py-3 rounded-lg font-medium text-sm transition-colors ${p.featured ? 'bg-teal-600 hover:bg-teal-500 text-white' : 'border border-white/10 hover:border-teal-600/40 text-white'}`}>
                  Book a Demo
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <AnimatedSection>
          <div className="bg-teal-900/20 border border-teal-600/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-teal-400 text-sm font-medium mb-2">2026 Pilot Pricing</p>
              <h2 className="font-display text-3xl font-bold mb-3">$99/participant/month</h2>
              <p className="text-slate-400 leading-relaxed max-w-xl">Lock in pilot pricing for 12 months &mdash; available to the first 5 providers only. No lock-in contract. Converts to Starter after 12 months at your discretion.</p>
            </div>
            <Link to="/contact?type=pilot"
              className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-8 py-3.5 rounded-lg transition-colors whitespace-nowrap shrink-0">
              Apply for Pilot Pricing
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold mb-10">Common questions</h2>
        </AnimatedSection>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-slate-900 border border-white/5 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4">
                  <span className="text-white font-medium text-sm">{faq.q}</span>
                  <span className={`text-teal-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  )
}
