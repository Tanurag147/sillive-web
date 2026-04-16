import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    const data = new FormData(e.target)
    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
    if (res.ok) setSent(true)
    setSending(false)
  }

  return (
    <main className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Let's talk.</h1>
          <p className="text-slate-400 text-xl">We respond within 24 hours. No sales pitch &mdash; just the platform.</p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection>
            {sent ? (
              <div className="bg-teal-900/20 border border-teal-600/20 rounded-2xl p-10 text-center">
                <p className="text-teal-400 text-4xl mb-4">&check;</p>
                <h2 className="font-display text-2xl font-bold mb-3">Message sent.</h2>
                <p className="text-slate-400">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY"/>
                <input type="hidden" name="subject" value="New SILLIVE enquiry"/>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Name</label>
                  <input name="name" required placeholder="Your name"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-600/50 placeholder:text-slate-600"/>
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Email</label>
                  <input name="email" type="email" required placeholder="your@email.com"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-600/50 placeholder:text-slate-600"/>
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">I am a</label>
                  <select name="role" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-600/50">
                    <option value="provider">SIL Provider</option>
                    <option value="sc">Support Coordinator</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Organisation</label>
                  <input name="organisation" placeholder="Organisation name"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-600/50 placeholder:text-slate-600"/>
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Message</label>
                  <textarea name="message" rows={5} placeholder="What would you like to know?"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-600/50 placeholder:text-slate-600 resize-none"/>
                </div>
                <button type="submit" disabled={sending}
                  className="bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-white font-medium py-3.5 rounded-xl transition-colors">
                  {sending ? 'Sending...' : 'Send message \u2192'}
                </button>
              </form>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-6 pt-4">
              <div>
                <p className="text-teal-400 text-sm font-medium mb-2">Email</p>
                <a href="mailto:hello@sillive.com.au" className="text-white hover:text-teal-400 transition-colors">hello@sillive.com.au</a>
              </div>
              <div>
                <p className="text-teal-400 text-sm font-medium mb-2">Based in</p>
                <p className="text-white">Adelaide, South Australia</p>
              </div>
              <div>
                <p className="text-teal-400 text-sm font-medium mb-2">Response time</p>
                <p className="text-white">Within 24 hours</p>
              </div>
              <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 mt-4">
                <p className="text-slate-400 text-sm leading-relaxed">
                  "I ran a SIL house before I built the software. If you're running SIL, I know exactly what your week looks like."
                </p>
                <p className="text-slate-600 text-sm mt-3">&mdash; Tanurag Gautam, Founder</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
