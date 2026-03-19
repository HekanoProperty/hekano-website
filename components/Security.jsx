const points = [
  {
    title: 'Asset-backed security',
    sub: 'Every investment secured against physical property',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Quarterly reporting',
    sub: 'Transparent updates on performance and progress',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
  },
  {
    title: 'Independent audit',
    sub: 'Third-party verification of all financials',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Clear exit options',
    sub: 'Defined pathways for capital return',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
]

export default function Security() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', background: '#0d0b09' }}>
      {/* Left: content */}
      <div
        className="flex-1 flex items-center px-6 md:px-12 lg:px-16 py-24"
        style={{ background: '#0d0b09' }}
      >
        <div style={{ maxWidth: 500 }}>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: 20 }}
          >
            Security &{' '}
            <br />
            <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>structure.</span>
          </h2>

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 40 }}>
            Asset-backed. Insured. Audited. We publish quarterly updates and maintain
            clear exit documentation from day one.
          </p>

          {/* Diamond points */}
          <div className="flex flex-col gap-0">
            {points.map((p, i) => (
              <div
                key={p.title}
                className="flex items-start gap-4 py-5"
                style={{ borderBottom: i < points.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
              >
                <span style={{ color: '#c9a84c', fontSize: '0.75rem', marginTop: 2, flexShrink: 0 }}>♦</span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span style={{ color: '#c9a84c' }}>{p.icon}</span>
                    <span
                      className="font-display"
                      style={{ fontSize: '1.05rem', fontWeight: 400, color: '#fff' }}
                    >
                      {p.title}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', margin: 0, paddingLeft: 28 }}>
                    {p.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href="#contact" className="btn-gold">
              Download Governance Summary →
            </a>
          </div>
        </div>
      </div>

      {/* Right: image */}
      <div
        className="hidden lg:block split-image"
        style={{ width: '50%', minHeight: '100vh', flexShrink: 0 }}
      >
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80"
          alt="Business meeting with documents"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.75) grayscale(0.15)' }}
        />
      </div>
    </section>
  )
}
