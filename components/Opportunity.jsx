import { useRef } from 'react'

const stats = [
  { value: '£4.2bn', label: 'Infrastructure Investment' },
  { value: '+18%', label: '5-yr Price Growth (Zone 4)' },
  { value: '6.2%', label: 'Average Gross Yield' },
]

export default function Opportunity() {
  const headRef = useRef(null)
  const headIn = true
  const statsRef = useRef(null)
  const statsIn = true

  return (
    <section
      id="investors"
      className="bg-image-section bg-overlay-heavy"
      style={{
        minHeight: '100vh',
        backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80')`,
        backgroundPosition: 'center 60%',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="section-content h-full min-h-screen flex flex-col justify-between px-6 md:px-16 py-24">
        <div className="flex lg:justify-end mt-8" ref={headRef}>
          <div style={{ maxWidth: 540 }}>
            <div className={`label mb-8 reveal ${headIn ? 'visible' : ''}`}>The Opportunity</div>
            <h2
              className={`font-display reveal reveal-delay-1 ${headIn ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: 24 }}
            >
              Infrastructure-led growth.{' '}
              <span style={{ color: '#fff' }}>Supply constrained.</span>
            </h2>
            <p
              className={`reveal reveal-delay-2 ${headIn ? 'visible' : ''}`}
              style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 32 }}
            >
              The Elizabeth Line reshaped connectivity. Hayes, Southall, and Acton are seeing
              sustained rental demand—yet housing supply remains limited. We acquire before
              the market prices it in.
            </p>
            <a href="#pipeline" className={`link-gold reveal reveal-delay-3 ${headIn ? 'visible' : ''}`}>
              See our target zones →
            </a>
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-auto pt-16"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal reveal-delay-${i + 1} ${statsIn ? 'visible' : ''}`}>
              <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#fff', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
