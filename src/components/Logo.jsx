export default function Logo({ size = 'md', theme = 'dark' }) {
  const s = size === 'sm' ? 28 : size === 'lg' ? 48 : 36
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-xl'
  return (
    <div className="flex items-center gap-2.5">
      <svg width={s} height={s} viewBox="0 0 36 36">
        <rect width="36" height="36" rx="8" fill="#0F766E"/>
        <path d="M5,18 L11,18 L14,9 L18,27 L21,12 L24,18 L31,18"
          stroke="white" strokeWidth="2" fill="none"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className={`${textSize} tracking-tight`}>
        <span className={theme === 'dark' ? 'text-white font-normal' : 'text-slate-900 font-normal'}>SIL</span>
        <span className="text-teal-400 font-bold">LIVE</span>
      </span>
    </div>
  )
}
