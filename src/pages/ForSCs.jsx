import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

export default function ForSCs() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-teal-400 text-sm font-medium mb-4 uppercase tracking-wider">For Support Coordinators</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
            The SC portal that finally respects your time.
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed mb-10">
            SILLIVE gives NDIS Support Coordinators real participant visibility &mdash; without chasing providers for updates.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact?role=sc"
              className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Request SC Access &mdash; It's Free
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Pain points */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold mb-10">Sound familiar?</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { before: 'Waiting weeks for a progress update', after: 'Shift notes updated in real time \u2014 every shift, every worker.' },
            { before: 'No visibility between plan reviews', after: 'Live participant dashboard. Log in any time and see what happened this week.' },
            { before: 'Email chains for every question', after: 'Secure in-platform messaging and requests \u2014 no inbox archaeology.' },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-slate-900 border border-white/5 rounded-2xl p-6">
                <p className="text-slate-500 text-sm line-through mb-3">{item.before}</p>
                <p className="text-teal-400 text-sm font-medium">&check; {item.after}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold mb-12">What you get</h2>
        </AnimatedSection>
        {[
          { title: 'Participant progress dashboard', desc: 'One screen. Every shift, every note, every mood check. Updated by workers in real time. No login sharing, no PDF attachments.' },
          { title: 'Quarterly PDF reports \u2014 one click', desc: 'SILLIVE generates professional quarterly reports from shift data. Download, attach to your review, done. No more chasing providers for summaries.' },
          { title: 'Incident visibility', desc: 'Incidents flagged in SILLIVE are visible to you immediately. No more finding out a week later in a phone call.' },
          { title: 'Ask ERA about your participant', desc: 'ERA is SILLIVE\'s AI agent. Ask it about your participant\'s week in plain English. "How has mood been this month?" "Any incidents in the last 30 days?" ERA answers instantly.' },
        ].map((f, i) => (
          <AnimatedSection key={f.title} delay={0.1}>
            <div className={`flex flex-col md:flex-row gap-8 items-start py-10 border-b border-white/5 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <p className="text-teal-400 text-sm font-medium mb-2">0{i + 1}</p>
                <h3 className="font-display text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
              <div className="flex-1 bg-slate-900 border border-white/5 rounded-2xl p-8 min-h-32 flex items-center justify-center">
                <p className="text-slate-600 text-sm text-center">[ Platform screenshot ]</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>

      {/* Trust */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection>
          <div className="bg-teal-900/20 border border-teal-600/20 rounded-3xl p-10 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">SC access is free. Always.</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              SILLIVE is funded by providers, not coordinators. Your login, your view, your participant data &mdash; at no cost. Currently piloting with Community Assist.
            </p>
            <Link to="/contact?role=sc"
              className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-block">
              Request your free SC access &rarr;
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
