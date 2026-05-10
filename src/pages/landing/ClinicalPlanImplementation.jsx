import SEO from '../../components/SEO'
import LandingHero from '../../components/sections/LandingHero'
import LandingPSPCTA from '../../components/sections/LandingPSPCTA'

export default function ClinicalPlanImplementation() {
  return (
    <>
      <SEO
        title="Turn Clinical Plans Into Daily Shift Actions"
        description="Behaviour Support Plans, OT recommendations, speech pathology — extracted, routed to shift briefings, and tracked at the action level. The ERA framework, built inside a real SIL home."
        path="/clinical-plan-implementation"
        keywords="clinical plan implementation NDIS, BSP implementation tracking, behaviour support plan execution, OT recommendation tracking SIL"
      />

      <LandingHero
        eyebrow="Clinical implementation"
        h1="Turn Clinical Plans Into Daily Shift Actions"
        sub="A 47-page Behaviour Support Plan is useless if the worker on shift at 6am has never opened it. SILLIVE turns clinical documents into shift-readable actions — automatically."
        source="clinical-plan-implementation"
      />

      <LandingPSPCTA
        problem={{
          title: "Brilliant clinical work routinely goes unimplemented at the shift floor.",
          body: [
            "The BSP is written by a clinician with years of training. The shift document is a 4-line text note from a worker on her third casual shift. There's no shared structure, no shared vocabulary, no link between them.",
            "The recommendation about verbal-only prompting during meals never reaches the worker. The participant doesn't get the support that was funded. The plan exists, but it isn't lived.",
          ],
        }}
        solution={{
          title: "Extract → Route → Apply. The ERA framework in three steps.",
          points: [
            "Extract: clinical documents become structured, attributable actions within 48 hours of arrival.",
            "Route: actions appear in the shift briefing on the worker's phone, before the shift starts.",
            "Apply: workers tick off what they delivered. Audit evidence and coordinator visibility build automatically.",
            "Source-linked: every action ties back to its BSP/OT/speech pathology section.",
            "Worker-friendly: a 90-second briefing replaces a 47-page document.",
          ],
        }}
        proof={{
          quote: "Most providers see a 3–4× increase in tracked clinical recommendations being delivered on shift within the first 30 days.",
          cite: "Implementation pattern across Caring Hands SA and pilot providers",
        }}
      />
    </>
  )
}
