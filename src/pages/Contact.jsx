import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import { useState } from 'react'

const WEB3FORMS_KEY = 'd83defea-430e-4f1e-a6df-b000e6e115a2'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact — Book a walkthrough"
        description="Talk to Tanurag directly. Book a 30-minute walkthrough using a live SIL workflow from Caring Hands SA in Adelaide."
        path="/contact"
      />

      <section className="max-w-container mx-auto px-5 sm:px-8 pt-12 pb-8 md:pt-20 md:pb-12">
        <AnimatedSection className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Get in touch</p>
          <h1 className="text-4xl md:text-5xl font-display">Talk to a real operator.</h1>
          <p className="mt-5 text-lg text-ink/80">
            Send us the shape of your operation — number of homes, current pain — and we'll come back
            with a 30-minute walkthrough on a real workflow from Caring Hands SA. No sales script.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-container mx-auto px-5 sm:px-8 pb-20 grid lg:grid-cols-5 gap-10 lg:gap-16">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <aside className="lg:col-span-2 space-y-8">
          <AnimatedSection delay={0.1}>
            <h2 className="text-xl font-display text-forest mb-3">What happens next</h2>
            <ol className="space-y-3 text-sm text-ink/85">
              <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest text-cream text-xs flex items-center justify-center font-medium">1</span> We reply within one business day with a couple of time slots.</li>
              <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest text-cream text-xs flex items-center justify-center font-medium">2</span> 30-minute walkthrough using a live SIL workflow from Caring Hands SA — your camera optional.</li>
              <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest text-cream text-xs flex items-center justify-center font-medium">3</span> If it fits, we scope a 60-day pilot. If it doesn't, we'll tell you.</li>
            </ol>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-cream border border-line rounded-xl p-5">
              <h3 className="text-sm font-medium text-forest mb-2">Direct</h3>
              <p className="text-sm text-ink"><a href="mailto:hello@sillive.com.au" className="hover:text-forest underline">hello@sillive.com.au</a></p>
              <p className="mt-3 text-xs text-muted">Adelaide, South Australia · ABN 23 664 289 892</p>
              <p className="mt-1 text-xs text-muted">Registered NDIS SIL Provider · Operating since 2024</p>
            </div>
          </AnimatedSection>
        </aside>
      </section>
    </>
  )
}

function ContactForm() {
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
      <div className="bg-sage/20 border border-sage rounded-2xl p-8">
        <p className="text-xs font-medium uppercase tracking-wider text-forest mb-2">Got it</p>
        <h2 className="text-2xl font-display text-forest">We'll be in touch within one business day.</h2>
        <p className="mt-3 text-ink/80">In the meantime, you can <a href="https://app.sillive.com.au" className="underline">start the free trial</a> — no setup needed for the first home.</p>
      </div>
    )
  }

  return (
    <AnimatedSection>
      <form onSubmit={onSubmit} className="bg-white border border-line rounded-2xl p-6 md:p-8 shadow-soft space-y-4" aria-label="Contact form">
        <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
        <input type="hidden" name="subject" value="New SILLIVE walkthrough request" />
        <input type="hidden" name="from_name" value="sillive.com.au /contact" />

        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Your name" name="name" type="text" required />
          <Field label="Organisation" name="organisation" type="text" required />
        </div>
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone (optional)" name="phone" type="tel" />

        <label className="block">
          <span className="block text-sm font-medium text-forest mb-1.5">How big is your operation?</span>
          <select name="homes" className="w-full bg-cream border border-line rounded-lg px-3 py-2.5 text-sm text-ink focus:border-forest outline-none">
            <option>1 home — exploring</option>
            <option>2–3 homes</option>
            <option>4–9 homes</option>
            <option>10+ homes</option>
            <option>Support coordinator (not a SIL provider)</option>
          </select>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-forest mb-1.5">What's the most pressing problem?</span>
          <textarea
            name="message" rows="5" required
            placeholder="e.g. audit prep is consuming weekends, we can't tell if BSPs are being followed, coordinators keep chasing us…"
            className="w-full bg-cream border border-line rounded-lg px-3 py-2.5 text-sm text-ink placeholder-muted focus:border-forest outline-none resize-none"
          />
        </label>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-forest hover:bg-forest-700 disabled:opacity-60 text-cream font-medium px-4 py-3 rounded-lg transition-colors"
        >
          {status === 'sending' ? 'Sending…' : 'Send → we reply within 1 business day'}
        </button>

        {status === 'error' && (
          <p className="text-sm text-accent">Something went wrong — email <a href="mailto:hello@sillive.com.au" className="underline">hello@sillive.com.au</a> directly.</p>
        )}
        <p className="text-[11px] text-muted">No participant data, please. Send only operational context.</p>
      </form>
    </AnimatedSection>
  )
}

function Field({ label, name, type, required }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-forest mb-1.5">{label}</span>
      <input
        name={name} type={type} required={required}
        className="w-full bg-cream border border-line rounded-lg px-3 py-2.5 text-sm text-ink placeholder-muted focus:border-forest outline-none"
      />
    </label>
  )
}
