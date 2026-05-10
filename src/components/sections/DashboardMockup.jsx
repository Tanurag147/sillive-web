import { motion } from 'framer-motion'

const cardBase = 'bg-cream rounded-xl border border-line p-3'

export default function DashboardMockup() {
  return (
    <div
      className="relative w-full max-w-[520px] mx-auto"
      role="img"
      aria-label="Animated SILLIVE dashboard mockup showing morning summary, shift coverage, and goal progress"
    >
      <div className="absolute -inset-4 bg-sage/20 rounded-[28px] blur-2xl" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white rounded-2xl shadow-lift border border-line overflow-hidden"
      >
        <div className="flex items-center justify-between bg-forest text-cream px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cream/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-cream/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-cream/30" />
            </div>
            <span className="text-xs font-body opacity-80 ml-2">app.sillive.com.au</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider opacity-70">Live</span>
        </div>

        <div className="p-5 space-y-4 bg-cream">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted">Morning summary · Wed 11 May</p>
            <h3 className="text-lg font-display text-forest mt-1">Good morning, Tanurag</h3>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className={`${cardBase} flex items-center justify-between`}
          >
            <div>
              <p className="text-xs text-muted">Overnight events</p>
              <p className="text-2xl font-display text-forest">0 incidents</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-sage/30 flex items-center justify-center" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2.5">
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className={cardBase}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-muted">Today's shifts</p>
              <span className="text-[10px] font-medium text-accent bg-accent/10 px-1.5 py-0.5 rounded">3 of 3 covered</span>
            </div>
            <div className="space-y-2">
              {[
                { name: 'Sarah', time: '06:00 — 14:00', state: 'on shift' },
                { name: 'Lily', time: '14:00 — 22:00', state: 'scheduled' },
                { name: 'James', time: '22:00 — 06:00', state: 'scheduled' },
              ].map((s, i) => (
                <div key={s.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-sage' : 'bg-line'}`} />
                    <span className="text-ink font-medium">{s.name}</span>
                    <span className="text-muted">{s.time}</span>
                  </div>
                  <span className="text-muted">{s.state}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className={cardBase}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-muted">Goal: Independent meal prep · Aizezi</p>
              <span className="text-[10px] text-forest font-medium">7 / 10 shifts</span>
            </div>
            <div className="h-1.5 bg-line rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '70%' }}
                transition={{ delay: 0.85, duration: 0.9, ease: 'easeOut' }}
                className="h-full bg-accent rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
