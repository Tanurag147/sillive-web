import { Link } from 'react-router-dom'
import AnimatedSection from '../AnimatedSection'

export default function LandingPSPCTA({ problem, solution, proof }) {
  return (
    <>
      <section className="py-16 md:py-20 bg-white border-y border-line">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">{problem.eyebrow || 'The problem'}</p>
            <h2 className="text-2xl md:text-3xl font-display">{problem.title}</h2>
            <div className="mt-4 text-ink/80 space-y-3">
              {problem.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">{solution.eyebrow || 'The solution'}</p>
            <h2 className="text-2xl md:text-3xl font-display">{solution.title}</h2>
            <ul className="mt-5 space-y-3">
              {solution.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-ink/85">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-forest" aria-hidden="true" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-y border-line">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">{proof.eyebrow || 'Proof'}</p>
            <blockquote className="border-l-4 border-accent pl-5 py-2 text-lg text-forest font-display">
              {proof.quote}
            </blockquote>
            <p className="mt-3 text-sm text-muted">{proof.cite}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <div className="bg-forest text-cream rounded-2xl p-10 md:p-14 text-center">
              <h2 className="text-2xl md:text-3xl font-display text-cream">Ready to see it on your operation?</h2>
              <p className="mt-3 text-cream/80 max-w-xl mx-auto">A 30-minute walkthrough is the fastest way to find out if SILLIVE fits.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="bg-accent text-cream font-medium px-5 py-3 rounded-lg hover:bg-accent-600 transition-colors">
                  Book a walkthrough →
                </Link>
                <Link to="/pricing" className="border border-cream/30 hover:border-cream text-cream font-medium px-5 py-3 rounded-lg transition-colors">
                  See pricing
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
