import { motion } from 'framer-motion'

const ROWS = [
  { label: 'Overnight events', value: 'Quiet · 1 wake at 03:14, settled in 4 min', kind: 'neutral' },
  { label: 'Engagement', value: 'Emma watched cooking videos with Lily after dinner', kind: 'good' },
  { label: 'Goals supported', value: '2 of 3 — meal prep ✓, social outing ✓', kind: 'good' },
  { label: 'Support delivered', value: '6.5 hrs active · 9.5 hrs passive · 1:1 ratio held', kind: 'neutral' },
  { label: 'Needs your attention', value: 'GP follow-up form — due Friday', kind: 'attention' },
]

export default function MorningSummaryUI() {
  return (
    <div className="relative bg-white rounded-2xl border border-line shadow-soft overflow-hidden">
      <div className="bg-forest text-cream px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider opacity-70">Morning summary</p>
          <h3 className="text-xl font-display mt-1">Emma's home · Wed 11 May, 6:14 AM</h3>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-cream/10 px-2 py-1 rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse-soft" />
          Live
        </span>
      </div>
      <div className="divide-y divide-line">
        {ROWS.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2"
          >
            <p className="text-xs uppercase tracking-wider text-muted sm:col-span-1">{row.label}</p>
            <p className={`text-sm sm:col-span-2 ${row.kind === 'attention' ? 'text-accent font-medium' : 'text-ink'}`}>
              {row.value}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="px-6 py-3 border-t border-line bg-cream text-xs text-muted flex items-center justify-between">
        <span>Auto-generated from overnight shift notes</span>
        <span>SILLIVE · ERA Framework</span>
      </div>
    </div>
  )
}
