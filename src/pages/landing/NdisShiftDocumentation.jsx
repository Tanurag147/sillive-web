import SEO from '../../components/SEO'
import LandingHero from '../../components/sections/LandingHero'
import LandingPSPCTA from '../../components/sections/LandingPSPCTA'

export default function NdisShiftDocumentation() {
  return (
    <>
      <SEO
        title="Shift Documentation That Builds Audit Evidence Automatically"
        description="Shift notes that are also audit evidence. Every action a worker captures is linked to its source clinical document — no separate documentation task, no weekend back-fills."
        path="/ndis-shift-documentation"
        keywords="NDIS shift documentation, SIL shift notes software, audit evidence shift notes, support worker documentation NDIS"
      />

      <LandingHero
        eyebrow="Shift documentation"
        h1="Shift Documentation That Builds Audit Evidence Automatically"
        sub="The shift note and the audit evidence trail should be the same artefact. If they're separate, workers will skip one of them — they always do."
        source="ndis-shift-documentation"
      />

      <LandingPSPCTA
        problem={{
          title: "Most shift notes are useless to the next worker, the coordinator, and the auditor.",
          body: [
            "\"All well. Dinner at 6:30pm. TV until 9. Bed by 10.\" That's a typical shift note in many SIL homes. It documents that a shift happened. It documents nothing about what was delivered against the participant's plan.",
            "When an audit lands, the provider has weeks of these notes and no thread connecting any of them to the BSP. So the weekend back-fill begins.",
          ],
        }}
        solution={{
          title: "Structured shift documentation tied to clinical intent.",
          points: [
            "Workers tick off the briefing they opened at the start of the shift — not a fresh blank form.",
            "Each captured action links automatically to its BSP/OT/speech pathology source.",
            "Mobile-first: 4 minutes at end of shift, not 20.",
            "Handover artefact for the next shift is generated from the same captures.",
            "Audit export by participant, by recommendation, by date range — one click.",
          ],
        }}
        proof={{
          quote: "Audit-ready documentation should be the natural side-effect of running a good operation. Not a separate task.",
          cite: "Tanurag Gautam · Director, Caring Hands SA",
        }}
      />
    </>
  )
}
