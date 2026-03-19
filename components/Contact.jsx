import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  interest: 'investing',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      style={{ minHeight: '100vh', display: 'flex', background: '#0d0b09' }}
    >
      {/* Left: image */}
      <div
        className="hidden lg:block split-image"
        style={{ width: '53%', minHeight: '100vh', flexShrink: 0 }}
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
          alt="Contact"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }}
        />
      </div>

      {/* Right: form */}
      <div
        className="flex-1 flex items-center px-6 md:px-12 lg:px-14 py-24"
        style={{ background: '#111010' }}
      >
        <div style={{ maxWidth: 520, width: '100%' }}>
          {/* Gold rule */}
          <div style={{ width: 48, height: 1, background: '#c9a84c', marginBottom: 36 }} />

          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: 12 }}
          >
            Start the{' '}
            <br />
            <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>conversation.</span>
          </h2>

          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 40 }}>
            Tell us what you're looking for. We'll respond within 48 hours with next steps.
          </p>

          {status === 'success' ? (
            <div
              style={{
                border: '1px solid rgba(201,168,76,0.4)',
                padding: 32,
                textAlign: 'center',
              }}
            >
              <div style={{ color: '#c9a84c', fontSize: '2rem', marginBottom: 12 }}>✓</div>
              <p className="font-display" style={{ fontSize: '1.25rem', color: '#fff', marginBottom: 8 }}>
                Enquiry received.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
                We'll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="input-label">Name</label>
                  <input
                    type="text"
                    required
                    className="input-hk"
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Rohit Kumar"
                  />
                </div>
                <div>
                  <label className="input-label">Email</label>
                  <input
                    type="email"
                    required
                    className="input-hk"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="input-label">Phone</label>
                <input
                  type="tel"
                  className="input-hk"
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="+44 7700 900000"
                />
              </div>

              {/* Interest radio */}
              <div className="mb-6">
                <label className="input-label mb-3 block">I'm interested in</label>
                <div className="flex gap-6">
                  {['investing', 'selling', 'both'].map((opt) => (
                    <label
                      key={opt}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        color: form.interest === opt ? '#c9a84c' : 'rgba(255,255,255,0.6)',
                        transition: 'color 0.2s',
                      }}
                    >
                      <input
                        type="radio"
                        name="interest"
                        value={opt}
                        checked={form.interest === opt}
                        onChange={set('interest')}
                        style={{ accentColor: '#c9a84c' }}
                      />
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="input-label">Message</label>
                <textarea
                  rows={5}
                  className="input-hk"
                  style={{ resize: 'vertical' }}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell us about your goals..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-gold-solid"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Enquiry
                  </>
                )}
              </button>

              {status === 'error' && (
                <p style={{ color: '#e07070', fontSize: '0.8rem', marginTop: 12, textAlign: 'center' }}>
                  Something went wrong. Please email us directly at hello@hekano.com
                </p>
              )}
            </form>
          )}

          {/* Contact details */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-8 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <a
              href="mailto:hello@hekano.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              hello@hekano.com
            </a>
            <a
              href="tel:+442079460958"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +44 (0)20 7946 0958
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
