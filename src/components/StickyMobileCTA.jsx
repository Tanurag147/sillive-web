import { useEffect, useState } from 'react'

const APP_URL = 'https://app.sillive.com.au'

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-30 transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}
      aria-hidden={!show}
    >
      <div className="m-3 rounded-xl shadow-lift bg-forest text-cream flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-sm font-medium">60-day pilot · $500/home</p>
          <p className="text-xs opacity-80">No setup fee for first home</p>
        </div>
        <a href={APP_URL} className="bg-accent text-cream font-medium text-sm px-4 py-2 rounded-lg">
          Start →
        </a>
      </div>
    </div>
  )
}
