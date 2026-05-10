import { motion } from 'framer-motion'

const NODES = [
  { label: 'Behaviour Support Plan', x: 8, y: 18, color: 'bg-cream' },
  { label: 'OT Recommendations', x: 8, y: 50, color: 'bg-cream' },
  { label: 'Speech Pathology Plan', x: 8, y: 82, color: 'bg-cream' },
]
const TARGETS = [
  { label: 'Today\'s shift', x: 84, y: 30, color: 'bg-sage/40' },
  { label: 'Tomorrow\'s handover', x: 84, y: 62, color: 'bg-sage/40' },
]

export default function WorkflowFragmentation() {
  return (
    <div
      className="relative w-full bg-cream rounded-2xl border border-line shadow-soft p-6 md:p-10 overflow-hidden"
      role="img"
      aria-label="Diagram showing clinical recommendations failing to reach the shift floor"
    >
      <div className="relative h-[260px] md:h-[300px]">
        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
          {NODES.flatMap((n, i) => TARGETS.map((t, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={`${n.x}%`} y1={`${n.y}%`}
              x2={`${t.x}%`} y2={`${t.y}%`}
              stroke="#D4821A"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 0.45, opacity: 0.55 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2 + i * 0.15 }}
            />
          )))}
        </svg>

        {NODES.map((n, i) => (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{ left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%, -50%)' }}
            className={`absolute ${n.color} border border-line rounded-lg px-3 py-2 shadow-soft min-w-[140px]`}
          >
            <p className="text-[11px] uppercase tracking-wider text-muted">PDF · 24pp</p>
            <p className="text-xs font-medium text-forest mt-0.5">{n.label}</p>
          </motion.div>
        ))}

        {TARGETS.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            style={{ left: `${t.x}%`, top: `${t.y}%`, transform: 'translate(-50%, -50%)' }}
            className={`absolute ${t.color} border border-sage rounded-lg px-3 py-2 min-w-[140px]`}
          >
            <p className="text-[11px] uppercase tracking-wider text-forest/70">Shift floor</p>
            <p className="text-xs font-medium text-forest mt-0.5">{t.label}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-cream rounded-full px-3 py-1 text-xs font-medium shadow-lift"
        >
          recommendations lost
        </motion.div>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cream border border-line"/> Clinical document</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-sage/60"/> Daily shift</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent"/> Information lost in transit</span>
      </div>
    </div>
  )
}
