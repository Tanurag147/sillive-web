import SEO from '../../components/SEO'
import LandingHero from '../../components/sections/LandingHero'
import LandingPSPCTA from '../../components/sections/LandingPSPCTA'

export default function SupportCoordinatorReporting() {
  return (
    <>
      <SEO
        title="Real-Time Participant Progress for Support Coordinators"
        description="Stop chasing providers for implementation updates. SILLIVE gives support coordinators a real-time view of which clinical recommendations are being delivered for their participants, every shift."
        path="/support-coordinator-reporting"
        keywords="NDIS support coordinator reporting, participant progress tracking, BSP implementation visibility, support coordination tools"
      />

      <LandingHero
        eyebrow="Support coordinator visibility"
        h1="Real-Time Participant Progress for Support Coordinators"
        sub="You wrote the plan. You attended the review. You shouldn't have to chase the provider every fortnight to find out whether any of it reached the shift."
        source="support-coordinator-reporting"
      />

      <LandingPSPCTA
        problem={{
          title: "Coordinators see implementation only at the annual review — by which point twelve months have already happened.",
          body: [
            "The current model is retrospective. You write the BSP, hand it to the provider, and find out a year later whether your recommendations took effect. By then, the participant has either had the support they needed, or hasn't — and there's nothing to be done about the past.",
            "From 1 July 2026, the Commission expects coordinators to demonstrate ongoing oversight, not retrospective oversight. The bar is changing.",
          ],
        }}
        solution={{
          title: "Live coordinator portal. See implementation as it happens.",
          points: [
            "Per-participant view of which BSP/OT recommendations are being delivered, week by week.",
            "Trend lines over the last 30/90 days — early signal when implementation drops.",
            "Direct link to the shift evidence behind every data point.",
            "Weekly summary email: \"Here's what was delivered against your plans this week.\"",
            "No app to install. No login burden on the provider. Read-only access by your participant list.",
          ],
        }}
        proof={{
          quote: "Support coordinators stop chasing — they see what their participant actually received.",
          cite: "Tanurag Gautam · Founder, SILLIVE",
        }}
      />
    </>
  )
}
