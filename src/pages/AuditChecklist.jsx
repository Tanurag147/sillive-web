import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const SECTIONS = [
  {
    title: '1. Clinical-to-shift traceability',
    items: [
      'Single sheet listing every active clinical recommendation across all participants',
      'Each recommendation tagged with its source document (BSP §, OT §, etc.)',
      'Each recommendation has an owner — who is responsible for it being delivered',
      'At least 3 recommendations from each active plan visible in the daily shift briefing',
      'Worker can answer: "What does this participant need from me today?" in 90 seconds',
    ],
  },
  {
    title: '2. Continuity of support across handovers',
    items: [
      'Structured handover artefact (not verbal-only) at every shift change',
      'Handover document timestamps when the next worker opened it',
      'Critical context from overnight reaches the morning shift before participants wake',
      'Outgoing worker marks which planned actions were delivered vs not',
      'Any incident or change in participant state is acknowledged in writing by the next worker',
    ],
  },
  {
    title: '3. Coordinator-visible implementation',
    items: [
      'Support coordinator receives weekly summary of plan implementation per participant',
      'Coordinator has read-only access to per-participant implementation log (not just an annual review)',
      'Coordinator-flagged concerns generate an actionable item for the provider within 48 hours',
      'Documented coordinator engagement: dates, decisions, follow-ups',
    ],
  },
  {
    title: '4. Audit evidence chain (the one most providers fail)',
    items: [
      'Every shift action recorded against its source clinical recommendation',
      'Evidence trail per recommendation, exportable on demand',
      'Incidents linked to relevant BSP triggers and to the planned response',
      'Goal progress tracked at the shift level, not the monthly review level',
      'Evidence is accumulated passively — no weekend back-fill required before audit',
    ],
  },
  {
    title: '5. Worker capability and adoption',
    items: [
      'Every worker has been onboarded to the shift briefing tool, with date logged',
      'Worker app login rate > 90% per shift',
      'Each worker can demonstrate finding the BSP recommendations for at least one participant',
      'Refresher training scheduled at least quarterly',
    ],
  },
  {
    title: '6. Data, privacy and policy',
    items: [
      'Participant data hosted in Australian region',
      'No participant data sent to third-party AI APIs without de-identification',
      'Data access log: who accessed which participant record, when',
      'Worker access removed within 24 hours of role end',
      'Participant consent records up to date and accessible',
    ],
  },
]

export default function AuditChecklist() {
  return (
    <>
      <SEO
        title="SIL Registration Readiness Checklist"
        description="Print-ready audit readiness checklist for NDIS SIL providers. Built from real audit prep at Caring Hands SA."
        path="/audit-checklist"
      />

      <div className="bg-white text-ink min-h-screen">
        <div className="no-print bg-cream border-b border-line">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between text-sm">
            <Link to="/ndis-sil-audit-readiness" className="text-forest hover:underline">← Back to audit readiness</Link>
            <button
              onClick={() => window.print()}
              className="bg-forest text-cream font-medium px-4 py-2 rounded-lg hover:bg-forest-700"
            >
              Print / Save PDF
            </button>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-5 sm:px-8 py-10 print:py-6">
          <header className="border-b-2 border-forest pb-6 mb-8">
            <p className="text-xs font-medium uppercase tracking-wider text-accent">SILLIVE · sillive.com.au</p>
            <h1 className="text-3xl md:text-4xl font-display mt-2">SIL Registration Readiness Checklist</h1>
            <p className="mt-3 text-ink/80">
              Six sections. Thirty checks. Built from real audit prep inside Caring Hands SA — a registered
              NDIS SIL provider in Adelaide, South Australia.
            </p>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-muted">
              <div><strong className="text-forest block">Provider</strong>__________________</div>
              <div><strong className="text-forest block">Audit date</strong>__________________</div>
              <div><strong className="text-forest block">Reviewed by</strong>__________________</div>
              <div><strong className="text-forest block">Version</strong>2026-Q2</div>
            </div>
          </header>

          {SECTIONS.map((section, i) => (
            <section key={i} className="mb-8 break-inside-avoid">
              <h2 className="text-xl font-display text-forest mb-3">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-ink">
                    <span className="flex-shrink-0 w-4 h-4 border-2 border-forest rounded-sm mt-0.5" aria-hidden="true" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <footer className="mt-12 pt-6 border-t border-line text-xs text-muted">
            <p>This checklist is provided as guidance. It is not a substitute for legal or compliance advice.</p>
            <p className="mt-2">
              SILLIVE · hello@sillive.com.au · ABN 23 664 289 892 · Adelaide, South Australia · © 2026
            </p>
          </footer>
        </article>
      </div>
    </>
  )
}
