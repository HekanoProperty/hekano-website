import { useEffect, useRef, useState } from 'react'

export default function ScrollVideo({ frameCount = 0, frameDir = '/frames', scrollHeight = 400, overlayOpacity = 0.45, children }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const framesRef = useRef([])
  const rafRef = useRef(null)
  const lastIdxRef = useRef(-1)
  const [loaded, setLoaded] = useState(0)

  const draw = (idx) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const f = framesRef.current[idx]
    if (!f || !f.complete || !f.naturalWidth) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const scale = Math.max(canvas.width / f.naturalWidth, canvas.height / f.naturalHeight)
    const x = (canvas.width - f.naturalWidth * scale) / 2
    const y = (canvas.height - f.naturalHeight * scale) / 2
    ctx.drawImage(f, x, y, f.naturalWidth * scale, f.naturalHeight * scale)
  }

  useEffect(() => {
    if (!frameCount) return
    const imgs = []
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()
      img.src = `${frameDir}/frame_${String(i).padStart(4,'0')}.jpg`
      img.onload = () => {
        setLoaded(n => n + 1)
        if (i === 1) draw(0)
      }
      imgs.push(img)
    }
    framesRef.current = imgs
  }, [frameCount, frameDir])

  useEffect(() => {
    const container = containerRef.current
    if (!container || !frameCount) return
    const onScroll = () => {
      const rect = container.getBoundingClientRect()
      const scrollable = container.offsetHeight - window.innerHeight
      const progress = Math.min(1, Math.max(0, -rect.top) / Math.max(1, scrollable))
      const idx = Math.min(Math.floor(progress * (frameCount - 1)), frameCount - 1)
      if (idx === lastIdxRef.current) return
      lastIdxRef.current = idx
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => draw(idx))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', () => draw(lastIdxRef.current >= 0 ? lastIdxRef.current : 0))
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [frameCount])

  const pct = Math.round(loaded / Math.max(1, frameCount) * 100)

  return (
    <div ref={containerRef} style={{ height: frameCount ? `${scrollHeight}vh` : '100vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#0d0b09' }}>

        {frameCount && <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />}

        {!frameCount && <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }} />}

        <div style={{ position: 'absolute', inset: 0, background: `rgba(10,8,6,${overlayOpacity})`, zIndex: 1 }} />

        {pct < 100 && frameCount > 0 && (
          <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 10, textAlign: 'center' }}>
            <div style={{ width: 160, height: 1, background: 'rgba(201,168,76,0.2)', position: 'relative', margin: '0 auto 8px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${pct}%`, background: '#c9a84c', transition: 'width 0.1s' }} />
            </div>
            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.5rem', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.4)' }}>{pct}%</div>
          </div>
        )}

        <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
