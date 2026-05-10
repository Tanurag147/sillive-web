export default function Logo({ size = 'md', theme = 'light' }) {
  const s = size === 'sm' ? 28 : size === 'lg' ? 48 : 36
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-xl'
  const wordmark = theme === 'dark' ? 'text-cream' : 'text-forest'
  const accent = 'text-accent'
  return (
    <div className="flex items-center gap-2.5" aria-label="SILLIVE home">
      <svg width={s} height={s} viewBox="0 0 36 36" role="img" aria-label="SILLIVE logo">
        <rect width="36" height="36" rx="8" fill="#1B4332"/>
        <path d="M5,18 L11,18 L14,9 L18,27 L21,12 L24,18 L31,18"
          stroke="#FAF8F4" strokeWidth="2" fill="none"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className={`${textSize} font-display tracking-tight`}>
        <span className={`${wordmark} font-medium`}>SIL</span>
        <span className={`${accent} font-bold`}>LIVE</span>
      </span>
    </div>
  )
}
