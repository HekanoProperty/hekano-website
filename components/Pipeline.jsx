import { useRef } from 'react'

const deals = [
  {
    badge: 'Under Offer', badgeColor: '#c9a84c',
    title: 'Acton Acquisition', area: 'Acton, W3',
    type: '2-bed → 3-bed HMO', yield: '7.1%', completion: 'Q3 2026',
    description: 'Off-market purchase from a retiring landlord. Full conversion underway with planning secured.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=70',
  },
  {
    badge: 'Active', badgeColor: '#7eb89a',
    title: 'Hayes Portfolio Add', area: 'Hayes, UB3',
    type: 'Buy-to-let terrace', yield: '6.8%', completion: 'Q4 2026',
    description: 'Mid-terrace, light refurb required. Strong rental demand confirmed. Probate acquisition.',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=70',
  },
  {
    badge: 'Scouting', badgeColor: '#888',
    title: 'Southall Conversion', area: 'Southall, UB1',
    type: 'Victorian terrace split', yield: '6.5%', completion: 'TBC',
    description: 'Early-stage acquisition. 3-bed Victorian with HMO potential. Title and survey pending.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=70',
  },
]

function DealCard({ deal, delay }) {
  const ref = useRef(null)
  const visible = true
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`, background: 'rgba(20,18,15,0.95)', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <img src={deal.img} alt={deal.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }} />
        <div style={{ position: 'absolute', top: 16, left: 16, padding: '4px 12px', background: 'rgba(13,11,9,0.85)', border: `1px solid ${deal.badgeColor}`, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: deal.badgeColor }}>{deal.badge}</div>
      </div>
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 400, color: '#fff' }}>{deal.title}</h3>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)' }}>{deal.area}</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {[{ l: 'Type', v: deal.type }, { l: 'Yield', v: deal.yield }, { l: 'Completion', v: deal.completion }].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.48rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>{s.l}</div>
              <div style={{ fontSize: '0.78rem', color: s.l === 'Yield' ? '#c9a84c' : 'rgba(255,255,255,0.7)', fontWeight: 300 }}>{s.v}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{deal.description}</p>
        <a href="#contact" className="btn-gold" style={{ justifyContent: 'center', fontSize: '0.58rem' }}>Join Priority List →</a>
      </div>
    </div>
  )
}

export default function Pipeline() {
  const titleRef = useRef(null)
  const titleVisible = true
  return (
    <section id="pipeline" style={{ background: '#0a0807', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={titleRef} style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease', marginBottom: 64 }}>
          <div className="label mb-6">Live Pipeline</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 400, lineHeight: 1.05 }}>
              Current opportunities. <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Limited availability.</span>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', maxWidth: 320, lineHeight: 1.7 }}>We typically hold 2–4 active projects. Registered investors get first look.</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {deals.map((deal, i) => <DealCard key={deal.title} deal={deal} delay={i * 120} />)}
        </div>
      </div>
    </section>
  )
}
