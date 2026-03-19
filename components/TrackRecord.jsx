const caseStudies = [
  {
    title: 'Hayes Modernisation',
    purchase: '£312k',
    works: '£38k',
    yield: '6.8%',
    description: '3-bed Victorian split into two modern flats. Refinance completed in month 5; capital recycled into next acquisition.',
    location: 'Hayes, UB3',
    status: 'Completed',
  },
  {
    title: 'Southall Refurbishment',
    purchase: '£275k',
    works: '£22k',
    yield: '7.1%',
    description: '2-bed mid-terrace fully modernised and let within 3 weeks of completion. Fixed-term tenancy secured.',
    location: 'Southall, UB1',
    status: 'Let',
  },
]

export default function TrackRecord() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', background: '#0d0b09' }}>
      {/* Left: content */}
      <div
        className="flex-1 flex items-center px-6 md:px-12 lg:px-16 py-24"
        style={{ background: '#0d0b09' }}
      >
        <div style={{ maxWidth: 500 }}>
          <div className="label mb-8">Track Record</div>

          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: 36 }}
          >
            Performance you{' '}
            <br />
            can <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>inspect.</span>
          </h2>

          {/* Case study card */}
          <div
            style={{
              border: '1px solid rgba(201,168,76,0.2)',
              padding: '28px',
              marginBottom: 28,
              background: 'rgba(201,168,76,0.03)',
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span
                className="font-display"
                style={{ fontSize: '1.1rem', fontWeight: 500, color: '#fff' }}
              >
                {caseStudies[0].title}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-5">
              {[
                { v: caseStudies[0].purchase, l: 'Purchase' },
                { v: caseStudies[0].works, l: 'Works' },
                { v: `~${caseStudies[0].yield}`, l: 'Gross Yield' },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="font-display"
                    style={{ fontSize: '1.5rem', fontWeight: 400, color: '#fff', lineHeight: 1 }}
                  >
                    {s.v}
                  </div>
                  <div
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.55rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)',
                      marginTop: 5,
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
              {caseStudies[0].description}
            </p>
          </div>

          <a href="#contact" className="btn-gold">
            View All Case Studies →
          </a>
        </div>
      </div>

      {/* Right: image */}
      <div
        className="hidden lg:block split-image"
        style={{ width: '50%', minHeight: '100vh', flexShrink: 0 }}
      >
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
          alt="London Victorian terrace"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}
