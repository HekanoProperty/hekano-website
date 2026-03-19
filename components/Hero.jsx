import { useEffect, useRef, useState } from 'react'
import ScrollVideo from './ScrollVideo'

export default function Hero() {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const FRAME_COUNT = 450

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const scrollable = containerRef.current.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      setProgress(Math.min(1, scrolled / Math.max(1, scrollable)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" ref={containerRef}>
      <ScrollVideo frameCount={FRAME_COUNT} frameDir="/frames" scrollHeight={400} overlayOpacity={0.48}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

          <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: 'clamp(24px,5vw,80px)', paddingTop: 'clamp(80px,10vh,120px)' }}>
            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="hero-grid">

              {/* Left: text — always visible, fades out near end */}
              <div style={{ opacity: progress > 0.8 ? Math.max(0, 1 - (progress - 0.8) / 0.15) : 1, transition: 'opacity 0.1s' }}>
                <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>
                  Hekano Property Group
                </div>
                <div style={{ width: 32, height: 1, background: '#c9a84c', marginBottom: 32 }} />

                <div style={{ fontFamily: 'Cormorant Garamond,Georgia,serif', fontSize: 'clamp(3rem,5.5vw,5.5rem)', fontWeight: 400, lineHeight: 1.02, color: '#fff' }}>
                  West London.
                </div>
                <div style={{ fontFamily: 'Cormorant Garamond,Georgia,serif', fontSize: 'clamp(3rem,5.5vw,5.5rem)', fontWeight: 400, lineHeight: 1.02, color: '#fff' }}>
                  Off-Market.
                </div>
                <div style={{ fontFamily: 'Cormorant Garamond,Georgia,serif', fontSize: 'clamp(3rem,5.5vw,5.5rem)', fontWeight: 400, lineHeight: 1.02, color: '#c9a84c', marginBottom: 32 }}>
                  Precision-Built.
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', fontWeight: 300, maxWidth: 420 }}>
                  We acquire residential assets along the Elizabeth Line corridor—modernised, tenanted, and designed for long-term returns.
                </p>
              </div>

              {/* Right: investor card — fades in at 30% scroll */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', opacity: Math.min(1, Math.max(0, (progress - 0.25) / 0.15)), transition: 'opacity 0.1s' }}>
                <div style={{ background: 'rgba(13,11,9,0.82)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', padding: '40px 36px', maxWidth: 400, width: '100%' }}>
                  <h3 style={{ fontFamily: 'Cormorant Garamond,Georgia,serif', fontSize: '1.75rem', fontWeight: 400, lineHeight: 1.2, color: '#fff', marginBottom: 12 }}>
                    Request the Investor Pack
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: 28 }}>
                    Access off-market opportunities, projected returns, and our acquisition criteria.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <a href="#contact" className="btn-gold" style={{ justifyContent: 'center' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                      Download Pack
                    </a>
                    <a href="#sellers" style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 0', textDecoration: 'none' }}>
                      Or Sell a Property →
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom strip */}
          <div style={{ padding: 'clamp(16px,3vw,32px) clamp(24px,5vw,80px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.06)', opacity: progress > 0.7 ? Math.max(0, 1 - (progress - 0.7) / 0.2) : 1 }}>
            <p style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
              Private acquisitions. No public listings.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Hayes','Ealing','Acton','Southall'].map(a => (
                <span key={a} style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>{a}</span>
              ))}
            </div>
          </div>

        </div>
      </ScrollVideo>
      <style>{`@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important;gap:32px!important}}`}</style>
    </section>
  )
}
