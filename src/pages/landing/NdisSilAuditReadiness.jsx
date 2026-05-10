import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import LandingHero from '../../components/sections/LandingHero'
import LandingPSPCTA from '../../components/sections/LandingPSPCTA'
import AnimatedSection from '../../components/AnimatedSection'

export default function NdisSilAuditReadiness() {
  return (
    <>
      <SEO
        title="Be Audit-Ready Before 1 July 2026"
        description="The NDIS Commission's 1 July 2026 changes raise the bar on clinical implementation evidence. SILLIVE builds audit evidence passively — every shift, against the source clinical document. Free SIL Registration Readiness Checklist."
        path="/ndis-sil-audit-readiness"
        keywords="NDIS SIL audit, NDIS audit readiness, 1 July 2026 NDIS changes, SIL registration audit"
      />

      <LandingHero
        eyebrow="Audit readiness · 1 July 2026"
        h1="Be Audit-Ready Before 1 July 2026"
        sub="The Commission's stronger evidence requirements aren't a documentation upgrade — they're a shift in what auditors expect to verify. Most SIL providers have six weeks to close three specific gaps."
        source="ndis-sil-audit-readiness"
      />

      <section className="py-12 bg-cream border-y border-line">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <div className="bg-white border-2 border-accent rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent">Free download</p>
                <h2 className="text-2xl font-display text-forest mt-1">SIL Registration Readiness Checklist</h2>
                <p className="text-sm text-ink/80 mt-2 max-w-md">A printable, sectioned checklist covering the three audit gaps most providers fail. Built from real audit prep at Caring Hands SA.</p>
              </div>
              <Link to="/audit-checklist" className="flex-shrink-0 bg-accent text-cream font-medium px-5 py-3 rounded-lg hover:bg-accent-600 transition-colors text-center">
                Open checklist →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LandingPSPCTA
        problem={{
          title: "Most audit failures happen because the evidence chain has a gap nobody notices.",
          body: [
            "Plans exist. Shifts ran. Incidents (or lack of them) are documented. But the connection between what the BSP recommended and what actually happened on a specific shift, by a specific worker — that connection is missing in most audit binders.",
            "From 1 July 2026, that's the gap auditors are explicitly looking for.",
          ],
        }}
        solution={{
          title: "Audit evidence that builds itself, every shift.",
          points: [
            "Every shift action is captured against the source clinical document — automatically.",
            "Coordinator visibility logs prove ongoing implementation oversight.",
            "Handover artefacts the next worker actually opened (with timestamps).",
            "One-click audit export per participant, per period, per recommendation.",
            "Aligns with the 1 July 2026 evidence requirements out of the box.",
          ],
        }}
        proof={{
          quote: "Audit evidence should be the natural side-effect of running a good operation. Not a separate task.",
          cite: "Tanurag Gautam · Director, Caring Hands SA",
        }}
      />
    </>
  )
}
