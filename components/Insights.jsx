const articles = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: 'Elizabeth Line 2.0: What it means for Zone 4 yields',
    date: 'Jan 2026',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="11" y2="15"/>
      </svg>
    ),
    title: 'HMO licensing updates in Ealing and what to expect',
    date: 'Dec 2025',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    title: 'Q2 2026: Pipeline & pricing notes from West London',
    date: 'Dec 2025',
  },
]

export default function Insights() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', background: '#0d0b09' }}>
      {/* Left: image */}
      <div
        className="hidden lg:block split-image"
        style={{ width: '53%', minHeight: '100vh', flexShrink: 0 }}
      >
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
          alt="London maps and planning documents"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
        />
      </div>

      {/* Right: content */}
      <div
        className="flex-1 flex items-center px-6 md:px-12 lg:px-16 py-24"
        style={{ background: '#111010' }}
      >
        <div style={{ maxWidth: 520, width: '100%' }}>
          {/* Gold rule */}
          <div style={{ width: 48, height: 1, background: '#c9a84c', marginBottom: 36 }} />

          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: 16 }}
          >
            What we're{' '}
            <br />
            <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>watching.</span>
          </h2>

          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 40 }}>
            Short reads on planning changes, yield shifts, and the corridors we're tracking.
          </p>

          {/* Article list */}
          <div className="flex flex-col">
            {articles.map((a, i) => (
              <a
                key={i}
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '18px 16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  marginBottom: 8,
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
                  e.currentTarget.style.background = 'rgba(201,168,76,0.04)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: 'rgba(201,168,76,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {a.icon}
                </div>
                <span
                  style={{ flex: 1, fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}
                >
                  {a.title}
                </span>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6rem',
                    color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.1em',
                    whiteSpace: 'nowrap',
                    marginRight: 12,
                  }}
                >
                  {a.date}
                </span>
                <span style={{ color: '#c9a84c', fontSize: '0.875rem' }}>→</span>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <a href="#" className="btn-gold">
              Read All Insights →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
