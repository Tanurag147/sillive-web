import { useState } from 'react'

const WEB3FORMS_KEY = 'd83defea-430e-4f1e-a6df-b000e6e115a2'

export default function LeadForm({ subject = 'New lead from sillive.com.au', source }) {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      if (!res.ok) throw new Error('submit failed')
      setStatus('done')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="bg-sage/20 border border-sage rounded-xl p-5 text-forest">
        <p className="font-medium">Got it — we'll be in touch within one business day.</p>
        <p className="text-sm mt-1 opacity-80">In the meantime, you can <a href="https://app.sillive.com.au" className="underline">start the free trial</a>.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" aria-label="Lead capture form">
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value={subject} />
      {source && <input type="hidden" name="source" value={source} />}

      <div className="grid sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="sr-only">Name</span>
          <input
            required name="name" type="text" placeholder="Your name"
            className="w-full bg-white border border-line rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder-muted focus:border-forest focus:ring-0 outline-none"
          />
        </label>
        <label className="block">
          <span className="sr-only">Organisation</span>
          <input
            required name="organisation" type="text" placeholder="Organisation"
            className="w-full bg-white border border-line rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder-muted focus:border-forest outline-none"
          />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Email</span>
        <input
          required name="email" type="email" placeholder="Work email"
          className="w-full bg-white border border-line rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder-muted focus:border-forest outline-none"
        />
      </label>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-forest hover:bg-forest-700 disabled:opacity-60 text-cream font-medium px-4 py-3 rounded-lg transition-colors"
      >
        {status === 'sending' ? 'Sending…' : 'Request a walkthrough →'}
      </button>
      {status === 'error' && <p className="text-xs text-accent">Something went wrong — email hello@sillive.com.au and we'll respond directly.</p>}
      <p className="text-[11px] text-muted">No participant data shared. We'll respond within one business day.</p>
    </form>
  )
}
