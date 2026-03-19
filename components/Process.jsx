import { useRef } from 'react'

const steps = [
  { n: '01', title: 'Source off-market', sub: 'Direct vendor relationships', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>) },
  { n: '02', title: 'Vet & underwrite', sub: '25-point framework', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>) },
  { n: '03', title: 'Modernise efficiently', sub: 'Cost-disciplined delivery', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>) },
  { n: '04', title: 'Let or refinance', sub: 'Cash flow optimisation', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>) },
]

export default function Process() {
  const imgRef = useRef(null)
  const contentRef = useRef(null)
  const imgIn = true
  const contentIn = true

  return (
    <section style={{ minHeight: '100vh', display: 'flex', background: '#0d0b09' }}>
      <div ref={imgRef} className="hidden lg:block split-image" style={{ width: '53%', minHeight: '100vh', flexShrink: 0, overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1200&q=80"
          alt="Modern West London interior"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85) grayscale(0.2)', transform: imgIn ? 'scale(1)' : 'scale(1.06)', transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)' }}
        />
      </div>

      <div ref={contentRef} className="flex-1 flex items-center px-6 md:px-12 lg:px-16 py-24" style={{ background: '#111010' }}>
        <div style={{ maxWidth: 520 }}>
          <h2 className={`font-display reveal ${contentIn ? 'visible' : ''}`} style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: 20 }}>
            We don't speculate.<br />
            We <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>verify.</span>
          </h2>
          <p className={`reveal reveal-delay-1 ${contentIn ? 'visible' : ''}`} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 40 }}>
            Every deal passes a 25-point vetting framework: planning, tenancy, title,
            and exit. Then we modernise with cost discipline—and let cash flow do the work.
          </p>

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.n} className={`flex items-start gap-4 py-5 reveal reveal-delay-${i + 2} ${contentIn ? 'visible' : ''}`} style={{ borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div style={{ width: 36, height: 36, border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c', flexShrink: 0 }}>
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.15em', color: '#c9a84c' }}>{step.n}</span>
                    <span className="font-display" style={{ fontSize: '1.05rem', fontWeight: 400, color: '#fff' }}>{step.title}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>{step.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-10 reveal reveal-delay-6 ${contentIn ? 'visible' : ''}`}>
            <a href="#contact" className="btn-gold">Read the Full Framework →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
