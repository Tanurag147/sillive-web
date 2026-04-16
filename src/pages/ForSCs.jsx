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
        {/* Feature 01 — Participant progress dashboard */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8 items-start py-10 border-b border-white/5">
            <div className="flex-1">
              <p className="text-teal-400 text-sm font-medium mb-2">01</p>
              <h3 className="font-display text-2xl font-bold mb-4">Participant progress dashboard</h3>
              <p className="text-slate-400 leading-relaxed">One screen. Every shift, every note, every mood check. Updated by workers in real time. No login sharing, no PDF attachments.</p>
            </div>
            <div className="flex-1 bg-slate-900 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white text-sm font-medium">Participant overview</p>
                <span className="bg-teal-600/20 text-teal-400 text-xs px-2 py-1 rounded-full">Live</span>
              </div>
              <div className="space-y-3">
                {[['Morning shift', 'Alex Sanya', 'good', '06:00–14:00'],
                  ['Afternoon shift', 'Gurpreet Singh', 'neutral', '14:00–22:00'],
                  ['Night shift', 'Raj Napit', 'good', '22:00–06:00']].map(([shift, worker, mood, time]) => (
                  <div key={shift} className="bg-slate-800 rounded-xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-white text-xs font-medium">{shift}</p>
                      <p className="text-slate-500 text-xs">{worker} · {time}</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${mood === 'good' ? 'bg-teal-900/40 text-teal-400' : 'bg-slate-700 text-slate-400'}`}>{mood}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Feature 02 — Quarterly PDF report */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start py-10 border-b border-white/5">
            <div className="flex-1">
              <p className="text-teal-400 text-sm font-medium mb-2">02</p>
              <h3 className="font-display text-2xl font-bold mb-4">Quarterly PDF reports &mdash; one click</h3>
              <p className="text-slate-400 leading-relaxed">SILLIVE generates professional quarterly reports from shift data. Download, attach to your review, done. No more chasing providers for summaries.</p>
            </div>
            <div className="flex-1 bg-slate-900 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white text-sm font-medium">Q1 2026 Report</p>
                <button className="bg-teal-600 text-white text-xs px-3 py-1.5 rounded-lg">Download PDF</button>
              </div>
              <div className="space-y-3">
                {[['Shifts delivered', '84'], ['Goals progressed', '6 of 8'], ['Incidents', '1 (resolved)'], ['Mood — good or neutral', '91%']].map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between border-b border-white/5 pb-2">
                    <p className="text-slate-400 text-xs">{label}</p>
                    <p className="text-white text-xs font-medium">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Feature 03 — Incident visibility */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8 items-start py-10 border-b border-white/5">
            <div className="flex-1">
              <p className="text-teal-400 text-sm font-medium mb-2">03</p>
              <h3 className="font-display text-2xl font-bold mb-4">Incident visibility</h3>
              <p className="text-slate-400 leading-relaxed">Incidents flagged in SILLIVE are visible to you immediately. No more finding out a week later in a phone call.</p>
            </div>
            <div className="flex-1 bg-slate-900 border border-white/5 rounded-2xl p-6">
              <p className="text-white text-sm font-medium mb-4">Incident log</p>
              <div className="space-y-3">
                <div className="bg-red-900/20 border border-red-800/30 rounded-xl px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-red-300 text-xs font-medium">⚠ Incident flagged</p>
                    <span className="text-slate-500 text-xs">7 Mar 2026</span>
                  </div>
                  <p className="text-slate-400 text-xs">Reported by worker · Notified to BSP · Commission notified</p>
                </div>
                <div className="bg-slate-800 rounded-xl px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-slate-300 text-xs font-medium">✓ Resolved</p>
                    <span className="text-slate-500 text-xs">14 Mar 2026</span>
                  </div>
                  <p className="text-slate-400 text-xs">Follow-up completed · Documentation archived</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Feature 04 — Ask ERA */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start py-10 border-b border-white/5">
            <div className="flex-1">
              <p className="text-teal-400 text-sm font-medium mb-2">04</p>
              <h3 className="font-display text-2xl font-bold mb-4">Ask ERA about your participant</h3>
              <p className="text-slate-400 leading-relaxed">ERA is SILLIVE's AI agent. Ask it about your participant's week in plain English. "How has mood been this month?" "Any incidents in the last 30 days?" ERA answers instantly.</p>
            </div>
            <div className="flex-1 bg-slate-900 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 36 36"><path d="M5,18 L11,18 L14,9 L18,27 L21,12 L24,18 L31,18" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
                </div>
                <p className="text-white text-sm font-medium">ERA</p>
              </div>
              <div className="space-y-3">
                <div className="bg-slate-800 rounded-xl px-4 py-3">
                  <p className="text-slate-400 text-xs">How has mood been this month?</p>
                </div>
                <div className="bg-teal-900/20 border border-teal-800/30 rounded-xl px-4 py-3">
                  <p className="text-teal-300 text-xs leading-relaxed">Mood has been good or neutral across 91% of shifts this month. One low mood recorded on 12 April &mdash; flagged for your review.</p>
                </div>
                <div className="bg-slate-800 rounded-xl px-4 py-3">
                  <p className="text-slate-400 text-xs">Any incidents in the last 30 days?</p>
                </div>
                <div className="bg-teal-900/20 border border-teal-800/30 rounded-xl px-4 py-3">
                  <p className="text-teal-300 text-xs leading-relaxed">One incident recorded on 7 March &mdash; resolved 14 March. Commission notified. Documentation complete.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
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
