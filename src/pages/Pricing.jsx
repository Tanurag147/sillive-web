import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'

const APP_URL = 'https://app.sillive.com.au'

const TIERS = [
  {
    key: 'pilot',
    name: 'Clinical Pilot',
    priceLine: '$500 / home / month',
    minLine: '$3,000 minimum · 60 days',
    fit: 'For SIL providers running 1–3 homes who want to prove the value before committing.',
    features: [
      '1–3 homes',
      'Full ERA framework — Extract, Route, Apply',
      'Morning summary email by 6am',
      'Worker mobile app — shift briefings + check-ins',
      'Coordinator visibility portal',
      'Audit evidence trail (passive)',
      'Email support · 1 business day SLA',
    ],
    cta: { label: 'Start your pilot', href: APP_URL, variant: 'primary' },
    note: 'Best for evaluating fit. Convert to Standard or Scale at any point — pilot fees credit toward setup.',
  },
  {
    key: 'standard',
    name: 'Clinical Standard',
    priceLine: '$400 / home / month',
    minLine: 'Annual billing · $450 monthly · 3-home minimum',
    fit: 'For established providers ready to standardise operations across multiple homes.',
    features: [
      '3+ homes',
      'Everything in Pilot',
      'Multi-home director dashboard',
      'Onboarding workshop (2 sessions)',
      'Quarterly compliance review',
      'Phone + email support',
    ],
    cta: { label: 'Talk to us', href: '/contact', variant: 'primary' },
    note: 'Most providers land here after the pilot.',
    highlight: true,
  },
  {
    key: 'scale',
    name: 'Clinical Scale',
    priceLine: '$350 / home / month',
    minLine: 'Annual billing · 10+ homes',
    fit: 'For SIL operators with 10 or more homes who need consistent operations at scale.',
    features: [
      '10+ homes',
      'Everything in Standard',
      'Custom morning summary templates',
      'Dedicated success contact',
      'API access for finance / NDIS billing systems',
      'Quarterly business review',
    ],
    cta: { label: 'Talk to us', href: '/contact', variant: 'secondary' },
    note: 'Volume pricing. We work with you on rollout cadence.',
  },
]

const FAQ = [
  {
    q: 'How long does onboarding actually take?',
    a: 'For one home, you can be live in 5–7 days. We import the active Behaviour Support Plans, set up your worker accounts, and run a single 90-minute workshop. The pilot is genuinely usable in week one.',
  },
  {
    q: 'Will my workers actually use it?',
    a: 'They use it because shift briefings live inside it — and the briefing tells them what the participant needs that day. We designed it for the worker, not the auditor. Adoption inside Caring Hands SA is 100% across active staff.',
  },
  {
    q: 'How does this make us audit-ready?',
    a: 'Every action a worker takes is captured against the source clinical document — automatically. By the time an audit lands, the evidence trail already exists. You don\'t back-fill notes; you export the report.',
  },
  {
    q: 'How long until we see clinical implementation improve?',
    a: 'Most providers see measurable change inside the first 30 days — typically a 3–4× increase in tracked clinical recommendations being delivered on shift. The morning summary makes the gap visible from day one.',
  },
  {
    q: 'What about the setup fee?',
    a: 'A one-time $6,500 covers up to 5 homes — clinical document import, worker accounts, coordinator setup, and a custom morning summary template. For Pilot customers, it\'s waived for the first home.',
  },
  {
    q: 'Where does the data live? Who sees it?',
    a: 'All data stays in Australian-region Supabase. We never send participant data to third-party AI APIs. You own your data — export it any time.',
  },
]

const PRICING_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SILLIVE',
  description: 'Operations platform for NDIS SIL providers',
  brand: { '@type': 'Brand', name: 'SILLIVE' },
  offers: [
    { '@type': 'Offer', name: 'Clinical Pilot', price: '500', priceCurrency: 'AUD', description: 'Per home per month, 60-day pilot, 1–3 homes' },
    { '@type': 'Offer', name: 'Clinical Standard', price: '400', priceCurrency: 'AUD', description: 'Per home per month annual, 3+ homes' },
    { '@type': 'Offer', name: 'Clinical Scale', price: '350', priceCurrency: 'AUD', description: 'Per home per month annual, 10+ homes' },
  ],
}

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing — Clinical Pilot from $500/home"
        description="Transparent SIL software pricing. Clinical Pilot from $500/home, Standard from $400, Scale from $350. One-time $6,500 setup covers up to 5 homes. Built for NDIS providers."
        path="/pricing"
        keywords="NDIS SIL software pricing, SIL provider pricing Australia, supported independent living software cost"
        schema={PRICING_SCHEMA}
      />

      <section className="max-w-container mx-auto px-5 sm:px-8 pt-12 pb-10 md:pt-20 md:pb-14 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-display max-w-3xl mx-auto">
            Honest pricing. Built around homes, not seats.
          </h1>
          <p className="mt-5 text-lg text-ink/80 max-w-2xl mx-auto">
            One number per home, per month. No per-worker upcharges. No usage cliffs. The price you see
            below is the price your finance team will pay.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-container mx-auto px-5 sm:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-5">
          {TIERS.map((tier, i) => (
            <AnimatedSection key={tier.key} delay={i * 0.06}>
              <article
                className={`h-full rounded-2xl border p-6 md:p-7 flex flex-col ${
                  tier.highlight
                    ? 'bg-forest text-cream border-forest shadow-lift'
                    : 'bg-white text-ink border-line shadow-soft'
                }`}
              >
                {tier.highlight && (
                  <span className="inline-block self-start text-[10px] font-medium uppercase tracking-wider bg-accent text-cream px-2 py-1 rounded mb-3">
                    Most providers
                  </span>
                )}
                <h2 className={`text-2xl font-display ${tier.highlight ? 'text-cream' : 'text-forest'}`}>{tier.name}</h2>
                <p className={`mt-2 text-2xl font-display ${tier.highlight ? 'text-cream' : 'text-forest'}`}>{tier.priceLine}</p>
                <p className={`text-sm ${tier.highlight ? 'text-cream/70' : 'text-muted'}`}>{tier.minLine}</p>
                <p className={`mt-4 text-sm ${tier.highlight ? 'text-cream/85' : 'text-ink/80'}`}>{tier.fit}</p>

                <ul className={`mt-5 space-y-2 text-sm flex-1 ${tier.highlight ? 'text-cream/90' : 'text-ink'}`}>
                  {tier.features.map(f => (
                    <li key={f} className="flex gap-2">
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full ${tier.highlight ? 'bg-sage' : 'bg-forest'}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {tier.cta.href.startsWith('http') ? (
                  <a
                    href={tier.cta.href}
                    className={`mt-6 inline-flex items-center justify-center font-medium px-4 py-3 rounded-lg transition-colors ${
                      tier.highlight ? 'bg-accent text-cream hover:bg-accent-600' : 'bg-forest text-cream hover:bg-forest-700'
                    }`}
                  >
                    {tier.cta.label} →
                  </a>
                ) : (
                  <Link
                    to={tier.cta.href}
                    className={`mt-6 inline-flex items-center justify-center font-medium px-4 py-3 rounded-lg transition-colors ${
                      tier.cta.variant === 'primary'
                        ? tier.highlight
                          ? 'bg-accent text-cream hover:bg-accent-600'
                          : 'bg-forest text-cream hover:bg-forest-700'
                        : 'border border-forest/30 text-forest hover:border-forest'
                    }`}
                  >
                    {tier.cta.label} →
                  </Link>
                )}

                <p className={`mt-4 text-xs ${tier.highlight ? 'text-cream/70' : 'text-muted'}`}>{tier.note}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-cream border border-line rounded-xl p-6">
              <h3 className="font-display text-lg text-forest">One-time setup · $6,500</h3>
              <p className="mt-2 text-sm text-ink/80">Covers up to 5 homes. Includes clinical document import, worker accounts, coordinator setup, and a custom morning summary template. Waived for first home in Pilot.</p>
            </div>
            <div className="bg-forest text-cream rounded-xl p-6">
              <h3 className="font-display text-lg text-cream">Enterprise — talk to us</h3>
              <p className="mt-2 text-sm text-cream/85">Multi-state operators, custom integrations with NDIS billing systems, white-label deployments. <Link to="/contact" className="underline">Get in touch</Link>.</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-white border-y border-line py-20" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">FAQ</p>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-display mb-10">Common questions before you sign up.</h2>
          </AnimatedSection>
          <div className="divide-y divide-line border-y border-line">
            {FAQ.map((item, i) => <FAQItem key={i} item={item} />)}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-5 sm:px-8 py-20 text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-display">Still have questions?</h2>
          <p className="mt-3 text-ink/80">A 30-minute walkthrough on a real shift workflow answers most of them.</p>
          <Link to="/contact" className="inline-block mt-6 bg-forest text-cream font-medium px-5 py-3 rounded-lg hover:bg-forest-700 transition-colors">
            Book a walkthrough →
          </Link>
        </AnimatedSection>
      </section>
    </>
  )
}

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="py-5">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-display text-forest">{item.q}</span>
        <span className={`mt-1 text-accent transition-transform ${open ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-ink/80">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
