import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const STEPS = [
  {
    key: 'extract',
    label: 'Extract',
    title: 'Lift the recommendations out of the PDF.',
    body: 'We turn each clinical document — Behaviour Support Plan, OT plan, speech pathology — into structured, attributable actions tied to the participant.',
    visual: (
      <div className="space-y-2 text-xs">
        <div className="bg-cream border border-line rounded p-3 text-muted line-through">"Encourage independent meal preparation with verbal prompts only…"</div>
        <div className="text-center text-accent">↓</div>
        <div className="bg-forest text-cream rounded p-3">
          <div className="font-medium">Action · Independent meal prep</div>
          <div className="text-cream/80 text-[11px] mt-1">Verbal prompts only · Track shifts complete · Source: BSP §4.2</div>
        </div>
      </div>
    ),
  },
  {
    key: 'route',
    label: 'Route',
    title: 'Send the right action to the right shift.',
    body: 'Actions appear inside the shift briefing — automatically, on the worker\'s phone, before they walk into the home.',
    visual: (
      <div className="space-y-2 text-xs">
        <div className="bg-cream border border-line rounded p-3">
          <div className="text-muted text-[11px] uppercase tracking-wider">Tomorrow · 06:00 — Sarah</div>
          <div className="text-forest font-medium mt-1">Shift briefing · 3 actions</div>
        </div>
        <div className="bg-cream border border-line rounded p-3">
          <div className="text-muted text-[11px] uppercase tracking-wider">Tomorrow · 14:00 — Lily</div>
          <div className="text-forest font-medium mt-1">Shift briefing · 2 actions</div>
        </div>
      </div>
    ),
  },
  {
    key: 'apply',
    label: 'Apply',
    title: 'Capture what actually happened.',
    body: 'Workers tick off what they did. Coordinators see real implementation. Auditors see the evidence trail — without anyone writing a separate report.',
    visual: (
      <div className="space-y-2 text-xs">
        <div className="bg-cream border border-line rounded p-3">
          <div className="flex items-center justify-between">
            <span className="text-forest font-medium">Independent meal prep</span>
            <span className="text-sage-600">✓ delivered</span>
          </div>
          <div className="text-muted text-[11px] mt-1">Sarah · 18:42 · "Aizezi made pasta with verbal prompts only."</div>
        </div>
        <div className="bg-sage/20 border border-sage rounded p-3 text-forest text-[11px]">
          Audit evidence created automatically · linked to BSP §4.2
        </div>
      </div>
    ),
  },
]

export default function ERATimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="relative">
      <div className="hidden lg:block sticky top-24 z-0 max-w-container mx-auto px-8">
        <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-line" aria-hidden="true" />
        <motion.div
          className="absolute left-[calc(50%-1px)] top-0 w-0.5 bg-accent origin-top"
          style={{ height: lineHeight }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-container mx-auto px-5 sm:px-8 space-y-24 lg:space-y-40">
        {STEPS.map((step, i) => (
          <Step key={step.key} step={step} index={i} flip={i % 2 === 1} />
        ))}
      </div>
    </div>
  )
}

function Step({ step, index, flip }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
      <div className={`${flip ? 'lg:order-2' : ''}`}>
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-forest text-cream flex items-center justify-center text-sm font-medium">
            {index + 1}
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-accent">{step.label}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-display text-forest mb-3">{step.title}</h3>
        <p className="text-ink/80 leading-relaxed">{step.body}</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className={`${flip ? 'lg:order-1' : ''} bg-white rounded-xl border border-line shadow-soft p-5`}
      >
        {step.visual}
      </motion.div>

      <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-cream z-10" aria-hidden="true" />
    </div>
  )
}
