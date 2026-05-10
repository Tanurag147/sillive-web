import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'

export default function About() {
  return (
    <>
      <SEO
        title="About — Operator first, founder second"
        description="SILLIVE is built by Tanurag Gautam, a registered NDIS SIL operator running Caring Hands SA in Adelaide. Every workflow is pressure-tested in a real SIL home before it ships."
        path="/about"
        keywords="SILLIVE founder, NDIS SIL operator, Caring Hands SA, Tanurag Gautam"
      />

      <section className="max-w-container mx-auto px-5 sm:px-8 pt-12 pb-12 md:pt-20 md:pb-16">
        <AnimatedSection className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">About SILLIVE</p>
          <h1 className="text-4xl md:text-5xl font-display">
            Operator first. Founder second.
          </h1>
          <p className="mt-6 text-lg text-ink/80">
            SILLIVE is not a software company that decided to enter NDIS. It's an NDIS SIL home that
            had to build its own operations platform — because nothing on the market was honest about
            the gap between clinical plans and what actually happens on shift.
          </p>
        </AnimatedSection>
      </section>

      <section className="bg-white border-y border-line py-20 md:py-24" aria-labelledby="founder-heading">
        <div className="max-w-container mx-auto px-5 sm:px-8 grid md:grid-cols-3 gap-10 md:gap-16">
          <AnimatedSection className="md:col-span-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-forest to-forest-700 flex items-center justify-center text-cream font-display text-6xl shadow-lift">
              TG
            </div>
            <p className="mt-3 text-xs text-muted text-center">Tanurag Gautam · Adelaide, SA</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="md:col-span-2">
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">The founder</p>
            <h2 id="founder-heading" className="text-3xl font-display">Tanurag Gautam</h2>
            <div className="mt-5 space-y-4 text-ink/85">
              <p>
                Years of competitive cue sports taught me one thing: discipline compounds. Every shot is
                practice for the shot that decides the match. Operations is the same — every shift is practice
                for the audit that decides whether you stay registered.
              </p>
              <p>
                I founded Caring Hands SA in 2024 to run a SIL home the way I'd want one run if it were
                my brother. Within months I saw the same gap every operator sees: brilliant clinical
                plans, written by professionals, that almost never reached the worker on shift at 6am.
              </p>
              <p>
                I tried the existing platforms. They were built for billing, or for reporting, or for
                rostering — not for the actual question I had to answer every morning: <em>what happened
                in the home while I was asleep, and is the plan being followed?</em>
              </p>
              <p>
                So I built SILLIVE. First for myself. Then, when other operators started asking how we
                ran our morning, for them too.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-cream" aria-labelledby="caring-heading">
        <div className="max-w-container mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Pressure-tested</p>
            <h2 id="caring-heading" className="text-3xl md:text-4xl font-display">Caring Hands SA</h2>
            <div className="mt-5 space-y-4 text-ink/85">
              <p>
                Every workflow inside SILLIVE was pressure-tested inside a real SIL environment — our own.
                The morning summary you see in the demo is the same email I receive at 6am every day.
                The shift briefing is the one our workers open before walking through the door.
              </p>
              <p>
                We don't ship features that haven't survived a Tuesday morning at Caring Hands SA. That's
                the difference between SILLIVE and anything you've used before.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: 'Operating since', v: '2024' },
                { k: 'Active participants', v: '2' },
                { k: 'Active workers', v: '7+' },
                { k: 'Region', v: 'Adelaide, SA' },
              ].map(it => (
                <div key={it.k} className="bg-white border border-line rounded-xl p-5">
                  <p className="text-xs uppercase tracking-wider text-muted">{it.k}</p>
                  <p className="mt-1 text-2xl font-display text-forest">{it.v}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white border-y border-line" aria-labelledby="mission-heading">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Our mission</p>
            <h2 id="mission-heading" className="text-3xl md:text-5xl font-display">
              Every participant deserves a clinical plan that actually reaches the shift.
            </h2>
            <p className="mt-6 text-lg text-ink/80">
              Not a plan that exists in a PDF. Not a plan that gets quoted at the annual review. A plan
              that shapes what happens in the home tonight.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24" aria-labelledby="philosophy-heading">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Philosophy</p>
            <h2 id="philosophy-heading" className="text-3xl md:text-4xl font-display">
              Operational transparency over administrative theatre.
            </h2>
          </AnimatedSection>
          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-8 text-ink/85 max-w-4xl">
            <AnimatedSection delay={0.05}>
              <h3 className="text-lg font-display mb-2">Visibility, not surveillance.</h3>
              <p>The point isn't to monitor workers. It's to make the work visible to everyone who needs to see it — the director, the coordinator, the auditor.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h3 className="text-lg font-display mb-2">Evidence is a by-product.</h3>
              <p>Audit-ready documentation should be the natural side-effect of running a good operation. Not a separate task.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h3 className="text-lg font-display mb-2">No participant data into third-party AI.</h3>
              <p>Sensitive data stays in our Australian-region database. AI processing happens on de-identified content only. Always.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h3 className="text-lg font-display mb-2">Built for the worker, judged by the auditor.</h3>
              <p>If workers don't use it, the audit trail is fiction. We design for adoption first.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <div className="bg-forest text-cream rounded-2xl p-10 md:p-14 text-center">
              <h2 className="text-3xl font-display text-cream">See it on a real shift.</h2>
              <p className="mt-3 text-cream/80">A 30-minute walkthrough using a live workflow from Caring Hands SA.</p>
              <Link to="/contact" className="inline-block mt-6 bg-accent text-cream font-medium px-5 py-3 rounded-lg hover:bg-accent-600 transition-colors">
                Book a walkthrough →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
