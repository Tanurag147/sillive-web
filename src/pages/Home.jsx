import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import DashboardMockup from '../components/sections/DashboardMockup'
import WorkflowFragmentation from '../components/sections/WorkflowFragmentation'
import ERATimeline from '../components/sections/ERATimeline'
import MorningSummaryUI from '../components/sections/MorningSummaryUI'
import PersonaCard from '../components/sections/PersonaCard'
import StickyMobileCTA from '../components/StickyMobileCTA'

const APP_URL = 'https://app.sillive.com.au'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SILLIVE',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Operations platform for NDIS Supported Independent Living providers. Turns clinical plans into daily shift actions and builds audit evidence automatically.',
  offers: {
    '@type': 'Offer',
    price: '500',
    priceCurrency: 'AUD',
    description: '60-day Clinical Pilot — $500 per home per month',
  },
  publisher: { '@type': 'Organization', name: 'SILLIVE' },
  url: 'https://sillive.com.au',
}

export default function Home() {
  return (
    <>
      <SEO
        title="Clinical plans that actually get implemented"
        description="SILLIVE turns NDIS clinical plans into daily shift actions for SIL providers. Built inside a real SIL home — Caring Hands SA. Audit-ready, coordinator-transparent, worker-friendly."
        path="/"
        keywords="NDIS SIL software, clinical plan implementation, SIL provider operations, supported independent living management"
        schema={SCHEMA}
      />

      <Hero />
      <Problem />
      <OperationalGap />
      <ERAFramework />
      <Personas />
      <Proof />
      <MorningSummary />
      <Outcomes />
      <SocialProof />
      <FinalCTA />
      <StickyMobileCTA />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-container mx-auto px-5 sm:px-8 pt-12 pb-16 md:pt-20 md:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-sage/20 text-forest text-xs font-medium px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse-soft" />
            Built inside Caring Hands SA — a real SIL home
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[40px] leading-[1.1] sm:text-5xl md:text-6xl font-display"
          >
            Clinical plans that actually get implemented.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-lg text-ink/80 max-w-xl"
          >
            SILLIVE turns Behaviour Support Plans, OT recommendations, and clinical reports into daily
            shift actions — so the work that's meant to happen, actually happens. And every shift becomes
            audit-ready evidence, automatically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href={APP_URL} className="inline-flex items-center justify-center bg-forest hover:bg-forest-700 text-cream font-medium px-5 py-3 rounded-lg transition-colors">
              Start your 60-day pilot →
            </a>
            <Link to="/pricing" className="inline-flex items-center justify-center border border-forest/20 hover:border-forest text-forest font-medium px-5 py-3 rounded-lg transition-colors">
              See pricing
            </Link>
          </motion.div>

          <p className="mt-5 text-xs text-muted">
            Registered NDIS SIL Provider · Operating since 2024 · Adelaide, SA
          </p>
        </div>

        <div className="lg:pl-6">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section className="bg-white border-y border-line py-20 md:py-28" aria-labelledby="problem-heading">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <AnimatedSection className="max-w-3xl mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">The problem</p>
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-display">
            Most SIL homes are operating blind.
          </h2>
          <p className="mt-5 text-lg text-ink/80">
            The clinical work is excellent. The plans are written. The recommendations are clear. And then
            they sit in PDFs that no one opens between annual reviews.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { stat: '24-page PDFs', label: 'Workers don\'t read them. Coordinators don\'t track them. Auditors find them.' },
            { stat: 'Missed handovers', label: 'Critical context lost between night and morning shift, every single day.' },
            { stat: 'Invisible implementation', label: 'No one — not even the director — actually knows whether the plan is being followed.' },
          ].map((card, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-cream border border-line rounded-xl p-6 h-full">
                <p className="font-display text-xl text-forest">{card.stat}</p>
                <p className="mt-2 text-sm text-ink/80">{card.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function OperationalGap() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="gap-heading">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <AnimatedSection className="max-w-3xl mb-10">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">The operational gap</p>
          <h2 id="gap-heading" className="text-3xl md:text-4xl font-display">
            Clinical recommendations disappear between the people who write them and the workers who deliver them.
          </h2>
          <p className="mt-5 text-lg text-ink/80">
            Behaviour Support Plans, OT recommendations, speech pathology guidance — all written by professionals,
            all approved by coordinators. Almost none of it reaches the worker on shift at 6am Tuesday.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <WorkflowFragmentation />
        </AnimatedSection>
      </div>
    </section>
  )
}

function ERAFramework() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="era-heading">
      <div className="max-w-container mx-auto px-5 sm:px-8 mb-12 lg:mb-16">
        <AnimatedSection className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">The ERA Framework</p>
          <h2 id="era-heading" className="text-3xl md:text-4xl font-display">
            Extract. Route. Apply.
          </h2>
          <p className="mt-5 text-lg text-ink/80">
            Three steps. No jargon. The way clinical intent should reach the shift floor — and the way
            evidence should flow back to coordinators and auditors.
          </p>
        </AnimatedSection>
      </div>
      <ERATimeline />
    </section>
  )
}

function Personas() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-line" aria-labelledby="personas-heading">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <AnimatedSection className="max-w-3xl mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Who it's for</p>
          <h2 id="personas-heading" className="text-3xl md:text-4xl font-display">
            Three people. One source of truth.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          <PersonaCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21V8l9-5 9 5v13M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            role="SIL Provider Directors"
            pain="You can't tell whether what's in your participant's plan is actually happening on shift."
            solution="A morning summary in your inbox by 6am. Real implementation visibility — across every home — without reading 47 shift notes."
            delay={0}
          />
          <PersonaCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            role="Quality & Compliance Managers"
            pain="Audit prep takes weeks of back-filling notes. Half the clinical recommendations have no evidence trail."
            solution="Every shift action is captured against the source clinical document automatically. Audit evidence builds itself."
            delay={0.08}
          />
          <PersonaCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            role="Support Coordinators"
            pain="You write the BSP. You attend the review. You have no idea if any of it reached the shift."
            solution="Real-time view of which recommendations are being implemented for your participants — without chasing the provider."
            delay={0.16}
          />
        </div>
      </div>
    </section>
  )
}

function Proof() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="proof-heading">
      <div className="max-w-container mx-auto px-5 sm:px-8 grid lg:grid-cols-5 gap-10 items-start">
        <AnimatedSection className="lg:col-span-2">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Proof</p>
          <h2 id="proof-heading" className="text-3xl md:text-4xl font-display">
            We built this because we needed it ourselves.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="lg:col-span-3">
          <div className="bg-forest text-cream rounded-2xl p-8 md:p-10 shadow-lift">
            <p className="text-cream/90 text-lg leading-relaxed">
              "ERA runs inside our own SIL home — Caring Hands SA — every shift. Every workflow inside SILLIVE
              has been pressure-tested in a real environment, on real shifts, with real participants."
            </p>
            <div className="mt-6 pt-6 border-t border-cream/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center font-display text-cream">T</div>
              <div>
                <p className="text-sm font-medium">Tanurag Gautam</p>
                <p className="text-xs text-cream/70">Director · Caring Hands SA · Founder, SILLIVE</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function MorningSummary() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="morning-heading">
      <div className="max-w-container mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Morning summary</p>
          <h2 id="morning-heading" className="text-3xl md:text-4xl font-display">
            What happened in the home while you were asleep?
          </h2>
          <p className="mt-5 text-lg text-ink/80">
            One short, structured email by 6am. Overnight events, engagement, goal progress, support delivered,
            and what needs your attention today. So your first decision of the day is informed — not reactive.
          </p>
          <ul className="mt-6 space-y-2 text-ink/80 text-sm">
            <li className="flex gap-2"><span className="text-forest">✓</span> Replaces 47 shift notes you'll never read</li>
            <li className="flex gap-2"><span className="text-forest">✓</span> Highlights what genuinely needs you</li>
            <li className="flex gap-2"><span className="text-forest">✓</span> Same structure across every home you operate</li>
          </ul>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <MorningSummaryUI />
        </AnimatedSection>
      </div>
    </section>
  )
}

function Outcomes() {
  const items = [
    { t: 'Reduced audit stress', b: 'Evidence is built passively, shift by shift. No more weekend back-fills before an audit.' },
    { t: 'Real implementation visibility', b: 'You can answer "is the plan being followed?" in 10 seconds, with a number.' },
    { t: 'Coordinator transparency', b: 'Support coordinators stop chasing — they see what their participant actually received.' },
    { t: 'Participant consistency', b: 'Workers walk in already knowing what the participant needs that day. Continuity by default.' },
  ]
  return (
    <section className="py-20 md:py-28 bg-white border-y border-line" aria-labelledby="outcomes-heading">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <AnimatedSection className="max-w-3xl mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Outcomes</p>
          <h2 id="outcomes-heading" className="text-3xl md:text-4xl font-display">
            What changes when clinical intent reaches the shift floor.
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {items.map((it, i) => (
            <AnimatedSection key={it.t} delay={i * 0.05}>
              <h3 className="text-xl font-display mb-2">{it.t}</h3>
              <p className="text-ink/80">{it.b}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="max-w-container mx-auto px-5 sm:px-8 grid sm:grid-cols-3 gap-6 text-sm text-muted">
        <div className="flex items-center gap-2"><span className="text-forest">●</span> Used by SIL providers in South Australia</div>
        <div className="flex items-center gap-2"><span className="text-forest">●</span> Built on real shift data from Caring Hands SA</div>
        <div className="flex items-center gap-2"><span className="text-forest">●</span> No participant data sent to third-party AI</div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="relative bg-forest text-cream rounded-3xl px-6 py-14 md:px-16 md:py-20 text-center overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-sage/20 rounded-full blur-3xl" aria-hidden="true" />
            <h2 className="relative text-3xl md:text-5xl font-display text-cream">
              The future of SIL operations is visible.
            </h2>
            <p className="relative mt-5 text-cream/80 max-w-xl mx-auto">
              Start your 60-day pilot. One home, one director, one month of mornings that begin informed.
            </p>
            <div className="relative mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={APP_URL} className="bg-accent hover:bg-accent-600 text-cream font-medium px-6 py-3 rounded-lg transition-colors">
                Start your free 60-day pilot →
              </a>
              <Link to="/contact" className="border border-cream/30 hover:border-cream text-cream font-medium px-6 py-3 rounded-lg transition-colors">
                Book a walkthrough
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
