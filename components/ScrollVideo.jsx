import { useEffect, useRef, useState } from 'react'

export default function ScrollVideo({ frameCount = 0, frameDir = '/frames', scrollHeight = 400, overlayOpacity = 0.45, children }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const framesRef = useRef([])
  const rafRef = useRef(null)
  const lastIdxRef = useRef(-1)
  const [loadPct, setLoadPct] = useState(0)

  // Size canvas once — never inside draw
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Redraw current frame after resize
      const f = framesRef.current[Math.max(0, lastIdxRef.current)]
      if (f && f.complete && f.naturalWidth) drawCover(canvas, f)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  useEffect(() => {
    if (!frameCount) return
    const imgs = []
    let loaded = 0

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()
      img.src = `${frameDir}/frame_${String(i).padStart(4,'0')}.jpg`
      img.onload = () => {
        loaded++
        setLoadPct(Math.round(loaded / frameCount * 100))
        // Draw first frame as soon as it loads
        if (i === 1) {
          const canvas = canvasRef.current
          if (canvas) drawCover(canvas, img)
        }
      }
      img.onerror = () => { loaded++ }
      imgs.push(img)
    }
    framesRef.current = imgs

    const container = containerRef.current
    const onScroll = () => {
      if (!container) return
      const rect = container.getBoundingClientRect()
      const scrollable = container.offsetHeight - window.innerHeight
      const progress = Math.min(1, Math.max(0, -rect.top) / Math.max(1, scrollable))
      const idx = Math.min(Math.floor(progress * (frameCount - 1)), frameCount - 1)
      if (idx === lastIdxRef.current) return
      lastIdxRef.current = idx
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const f = framesRef.current[idx]
        const canvas = canvasRef.current
        if (f && f.complete && f.naturalWidth && canvas) drawCover(canvas, f)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [frameCount, frameDir])

  return (
    <div ref={containerRef} style={{ height: frameCount ? `${scrollHeight}vh` : '100vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#0d0b09' }}>
        {frameCount
          ? <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, display: 'block' }} />
          : <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }} />
        }
        <div style={{ position: 'absolute', inset: 0, background: `rgba(10,8,6,${overlayOpacity})`, zIndex: 1 }} />
        {frameCount > 0 && loadPct < 100 && (
          <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 10, textAlign: 'center' }}>
            <div style={{ width: 160, height: 1, background: 'rgba(201,168,76,0.2)', position: 'relative', margin: '0 auto 8px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${loadPct}%`, background: '#c9a84c', transition: 'width 0.1s' }} />
            </div>
            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.5rem', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.4)' }}>{loadPct}%</div>
          </div>
        )}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

function drawCover(canvas, img) {
  const ctx = canvas.getContext('2d')
  const s = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight)
  const x = (canvas.width - img.naturalWidth * s) / 2
  const y = (canvas.height - img.naturalHeight * s) / 2
  ctx.drawImage(img, x, y, img.naturalWidth * s, img.naturalHeight * s)
}
