const reasons = [
  {
    title: 'No agents. No fees.',
    sub: 'Direct purchase — you keep every penny of the agreed price.',
    icon: '♦',
  },
  {
    title: 'Discreet & private.',
    sub: 'No boards, no portals, no neighbours knowing your business.',
    icon: '♦',
  },
  {
    title: 'Fast completion.',
    sub: 'We move on our own timeline. Typical completion in 4–8 weeks.',
    icon: '♦',
  },
  {
    title: 'Any condition.',
    sub: 'Tenanted, vacant, in need of repair — we buy as-is.',
    icon: '♦',
  },
]

export default function Sellers() {
  return (
    <section
      id="sellers"
      style={{ minHeight: '100vh', display: 'flex', background: '#0d0b09' }}
    >
      {/* Left: image */}
      <div
        className="hidden lg:block split-image"
        style={{ width: '50%', minHeight: '100vh', flexShrink: 0 }}
      >
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
          alt="Residential property"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }}
        />
      </div>

      {/* Right: content */}
      <div
        className="flex-1 flex items-center px-6 md:px-12 lg:px-16 py-24"
        style={{ background: '#111010' }}
      >
        <div style={{ maxWidth: 520 }}>
          <div className="label mb-8">For Sellers</div>

          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: 20 }}
          >
            Sell without the{' '}
            <br />
            <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>noise.</span>
          </h2>

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 40 }}>
            If you own a residential property in West London and want a straightforward,
            agent-free sale — we buy directly. No viewings, no chains, no surprises.
          </p>

          <div className="flex flex-col gap-0 mb-10">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="flex items-start gap-4 py-5"
                style={{ borderBottom: i < reasons.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
              >
                <span style={{ color: '#c9a84c', fontSize: '0.75rem', marginTop: 3, flexShrink: 0 }}>
                  {r.icon}
                </span>
                <div>
                  <div
                    className="font-display"
                    style={{ fontSize: '1.05rem', fontWeight: 400, color: '#fff', marginBottom: 4 }}
                  >
                    {r.title}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
                    {r.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-gold">
            Get a Confidential Offer →
          </a>
        </div>
      </div>
    </section>
  )
}
