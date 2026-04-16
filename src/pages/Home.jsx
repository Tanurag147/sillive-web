import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const words = ["NDIS", "SIL", "transparency,", "built", "by", "an", "operator."]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#5DCAA5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="600" height="300" viewBox="0 0 600 300">
            <path d="M20,150 L100,150 L140,40 L200,260 L250,80 L310,150 L580,150"
              stroke="#5DCAA5" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-teal-600/10 border border-teal-600/20 rounded-full px-4 py-1.5 text-teal-400 text-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"/>
            Live &middot; Currently piloting in Adelaide SA
          </motion.div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            {words.map((word, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-4">
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-slate-400 text-xl max-w-2xl mb-10 leading-relaxed">
            Real-time shift visibility, SC collaboration, and NDIS compliance &mdash; all in one platform. Built from lived experience inside a SIL house.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-wrap gap-4">
            <Link to="/contact"
              className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Book a 20-min Demo
            </Link>
            <Link to="/for-scs"
              className="border border-white/10 hover:border-teal-600/50 text-white hover:text-teal-400 font-medium px-6 py-3 rounded-lg transition-colors">
              For Support Coordinators &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <AnimatedSection>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-4 border border-white/5 rounded-2xl p-6 bg-slate-900/50">
            {[['3+', 'Active participants'], ['12+', 'Support workers'], ['Live', 'Since April 2026']].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="font-display text-3xl font-bold text-teal-400">{val}</p>
                <p className="text-slate-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* What is SILLIVE */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <AnimatedSection>
          <p className="text-teal-400 text-sm font-medium mb-4 uppercase tracking-wider">What is SILLIVE</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-16">
            The single source of truth for a participant's life.
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '\ud83d\udccb', title: 'Real-time shift notes', desc: 'Workers document every shift. Support Coordinators see it instantly \u2014 no chasing, no delays.' },
            { icon: '\ud83d\udd17', title: 'SC portal access', desc: 'Your SC gets their own login, their own view. Professional. Transparent. No more email chains.' },
            { icon: '\u2705', title: 'Compliance built in', desc: 'NDIS Practice Standards embedded in every workflow. Worker certs, incident flags, document expiry \u2014 tracked automatically.' },
          ].map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 h-full hover:border-teal-600/30 transition-colors">
                <span className="text-2xl mb-4 block">{f.icon}</span>
                <h3 className="font-display text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ERA section */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <AnimatedSection>
          <div className="bg-teal-900/20 border border-teal-600/20 rounded-3xl p-10 md:p-14">
            <p className="text-teal-400 text-sm font-medium mb-4 uppercase tracking-wider">AI Intelligence</p>
            <h2 className="font-display text-4xl font-bold mb-4">Meet ERA.</h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
              Ask ERA anything. Draft case notes, check compliance, write SC emails, generate handovers. ERA is trained on NDIS Practice Standards and lives inside every shift.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['DOCS', 'ECHO', 'GUARDIAN', 'PULSE', 'SCRIBE'].map(name => (
                <span key={name} className="bg-teal-600/10 border border-teal-600/20 text-teal-400 text-sm font-medium px-4 py-1.5 rounded-full">
                  {name}
                </span>
              ))}
            </div>
            <Link to="/contact"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors">
              See ERA in action &rarr;
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Founder quote */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-400 text-4xl font-display font-bold leading-none mb-6">&ldquo;</p>
              <p className="text-xl text-white leading-relaxed mb-6">
                I ran a SIL house before I built the software. I know what gets missed at shift handover at 2am.
              </p>
              <p className="text-slate-500 text-sm">&mdash; Tanurag Gautam, Founder</p>
            </div>
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-8">
              <p className="text-teal-400 text-sm font-medium mb-2">Caring Hands SA</p>
              <p className="text-white font-display font-bold text-xl mb-3">NDIS Registered SIL Provider</p>
              <p className="text-slate-400 text-sm leading-relaxed">ABN 23 664 289 892 &middot; Adelaide SA &middot; Currently supporting 3+ participants with 12+ workers &mdash; all running on SILLIVE.</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 mb-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to see it live?</h2>
            <p className="text-slate-400 mb-10 text-lg">20 minutes. No pitch deck. Just the platform.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact?role=provider"
                className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-8 py-3.5 rounded-lg transition-colors">
                I'm a SIL Provider &rarr;
              </Link>
              <Link to="/contact?role=sc"
                className="border border-white/10 hover:border-teal-600/40 text-white hover:text-teal-400 font-medium px-8 py-3.5 rounded-lg transition-colors">
                I'm a Support Coordinator &rarr;
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
