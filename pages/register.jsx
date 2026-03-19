import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  type: 'investor',
  investAmount: '',
  timeline: '',
  propertyAddress: '',
  propertyType: '',
  message: '',
}

export default function RegisterInterest() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'register-interest' }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>Register Interest — Hekano Property Group</title>
      </Head>
      <Navbar />

      <main style={{ background: '#0d0b09', minHeight: '100vh', paddingTop: 80 }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '80px 24px' }}>
          {/* Header */}
          <div style={{ marginBottom: 56 }}>
            <div className="label mb-8">Register Interest</div>
            <h1
              className="font-display"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, lineHeight: 1.05, marginBottom: 16 }}
            >
              Join the{' '}
              <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>priority list.</span>
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 500 }}>
              Registered contacts get first access to new deals, investor packs, and off-market
              seller opportunities before external outreach begins.
            </p>
          </div>

          {status === 'success' ? (
            <div
              style={{
                border: '1px solid rgba(201,168,76,0.4)',
                padding: '48px 32px',
                textAlign: 'center',
              }}
            >
              <div style={{ color: '#c9a84c', fontSize: '2.5rem', marginBottom: 16 }}>✓</div>
              <h2 className="font-display" style={{ fontSize: '1.75rem', color: '#fff', marginBottom: 10 }}>
                You're on the list.
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
                We'll be in touch within 48 hours with next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Type toggle */}
              <div className="mb-8">
                <label className="input-label mb-3 block">I am a</label>
                <div className="flex gap-0">
                  {['investor', 'seller', 'both'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, type: opt })}
                      style={{
                        flex: 1,
                        padding: '12px 0',
                        background: form.type === opt ? '#c9a84c' : 'rgba(255,255,255,0.04)',
                        border: '1px solid',
                        borderColor: form.type === opt ? '#c9a84c' : 'rgba(255,255,255,0.1)',
                        color: form.type === opt ? '#0d0b09' : 'rgba(255,255,255,0.5)',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.6rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name + email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="input-label">Full Name *</label>
                  <input type="text" required className="input-hk" value={form.name} onChange={set('name')} placeholder="Your name" />
                </div>
                <div>
                  <label className="input-label">Email *</label>
                  <input type="email" required className="input-hk" value={form.email} onChange={set('email')} placeholder="you@example.com" />
                </div>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="input-label">Phone</label>
                <input type="tel" className="input-hk" value={form.phone} onChange={set('phone')} placeholder="+44 7700 900000" />
              </div>

              {/* Investor fields */}
              {(form.type === 'investor' || form.type === 'both') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="input-label">Investment Range</label>
                    <select className="input-hk" value={form.investAmount} onChange={set('investAmount')}
                      style={{ background: 'rgba(255,255,255,0.04)', appearance: 'none', cursor: 'pointer' }}>
                      <option value="" style={{ background: '#111' }}>Select range</option>
                      <option value="50-100k" style={{ background: '#111' }}>£50k – £100k</option>
                      <option value="100-250k" style={{ background: '#111' }}>£100k – £250k</option>
                      <option value="250-500k" style={{ background: '#111' }}>£250k – £500k</option>
                      <option value="500k+" style={{ background: '#111' }}>£500k+</option>
                    </select>
                  </div>
                  <div>
                    <label className="input-label">Timeline</label>
                    <select className="input-hk" value={form.timeline} onChange={set('timeline')}
                      style={{ background: 'rgba(255,255,255,0.04)', appearance: 'none', cursor: 'pointer' }}>
                      <option value="" style={{ background: '#111' }}>Select timeline</option>
                      <option value="asap" style={{ background: '#111' }}>ASAP</option>
                      <option value="1-3months" style={{ background: '#111' }}>1–3 months</option>
                      <option value="3-6months" style={{ background: '#111' }}>3–6 months</option>
                      <option value="6months+" style={{ background: '#111' }}>6+ months</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Seller fields */}
              {(form.type === 'seller' || form.type === 'both') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="input-label">Property Address</label>
                    <input type="text" className="input-hk" value={form.propertyAddress} onChange={set('propertyAddress')} placeholder="Street, Postcode" />
                  </div>
                  <div>
                    <label className="input-label">Property Type</label>
                    <select className="input-hk" value={form.propertyType} onChange={set('propertyType')}
                      style={{ background: 'rgba(255,255,255,0.04)', appearance: 'none', cursor: 'pointer' }}>
                      <option value="" style={{ background: '#111' }}>Select type</option>
                      <option value="terraced" style={{ background: '#111' }}>Terraced</option>
                      <option value="semi" style={{ background: '#111' }}>Semi-detached</option>
                      <option value="detached" style={{ background: '#111' }}>Detached</option>
                      <option value="flat" style={{ background: '#111' }}>Flat / Apartment</option>
                      <option value="hmo" style={{ background: '#111' }}>HMO</option>
                      <option value="other" style={{ background: '#111' }}>Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="mb-8">
                <label className="input-label">Anything else we should know?</label>
                <textarea
                  rows={4}
                  className="input-hk"
                  style={{ resize: 'vertical' }}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell us about your situation or goals..."
                />
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn-gold-solid">
                {status === 'sending' ? 'Submitting...' : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Register My Interest
                  </>
                )}
              </button>

              {status === 'error' && (
                <p style={{ color: '#e07070', fontSize: '0.8rem', marginTop: 12, textAlign: 'center' }}>
                  Something went wrong. Please email hello@hekano.com directly.
                </p>
              )}
            </form>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
