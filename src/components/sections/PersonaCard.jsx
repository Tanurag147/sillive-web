import { motion } from 'framer-motion'

export default function PersonaCard({ icon, role, pain, solution, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -3 }}
      className="bg-white border border-line rounded-2xl p-6 shadow-soft hover:shadow-lift transition-shadow flex flex-col h-full"
    >
      <div className="w-11 h-11 rounded-xl bg-forest/5 text-forest flex items-center justify-center mb-4" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-lg font-display text-forest mb-3">{role}</h3>
      <div className="space-y-3 text-sm flex-1">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted mb-1">The pain</p>
          <p className="text-ink/80">{pain}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted mb-1">How SILLIVE helps</p>
          <p className="text-ink">{solution}</p>
        </div>
      </div>
    </motion.article>
  )
}
