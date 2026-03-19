# Skill: Video-to-Scroll-Animation Website

## What this skill does
Turns a video file into a premium, scroll-driven animated website section. Each frame of the video is tied to a scroll position — as the user scrolls down, the video plays frame by frame like stop-motion cinema.

## When to use
When a user drops in a video file and wants it used as a scroll-driven hero or section animation.

## Step-by-step implementation

### 1. Extract frames from the video
Use ffmpeg to extract frames as webp images. Always use webp for performance.

```bash
mkdir -p public/frames
ffmpeg -i <video_file> -vf "fps=24,scale=1920:-1" -q:v 80 public/frames/frame_%04d.webp
```

Aim for 80-150 frames total. If the video is long, reduce fps:
```bash
ffmpeg -i <video_file> -vf "fps=12,scale=1920:-1" -q:v 80 public/frames/frame_%04d.webp
```

After extraction, count the frames:
```bash
ls public/frames | wc -l
```

### 2. Create the scroll animation component

The core technique:
- Stack frames in a `<canvas>` or `<img>` element
- Listen to `window.scrollY`
- Map scroll position to a frame index
- Swap the image src or draw to canvas on each scroll event
- Use `requestAnimationFrame` for smooth performance

### 3. Component structure (React / Next.js)

```jsx
import { useEffect, useRef, useState } from 'react'

export default function ScrollVideo({ frameCount = 120, frameDir = '/frames' }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const imagesRef = useRef([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Preload all frames
    const images = []
    let loadedCount = 0

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()
      const num = String(i).padStart(4, '0')
      img.src = `${frameDir}/frame_${num}.webp`
      img.onload = () => {
        loadedCount++
        if (loadedCount === frameCount) setLoaded(true)
      }
      images.push(img)
    }
    imagesRef.current = images
  }, [frameCount, frameDir])

  useEffect(() => {
    if (!loaded) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const container = containerRef.current

    // Set canvas size to match first frame
    const firstImg = imagesRef.current[0]
    canvas.width = firstImg.naturalWidth
    canvas.height = firstImg.naturalHeight
    ctx.drawImage(firstImg, 0, 0)

    const handleScroll = () => {
      const { top, height } = container.getBoundingClientRect()
      const scrollable = height - window.innerHeight
      const scrolled = Math.max(0, -top)
      const progress = Math.min(1, scrolled / scrollable)
      const frameIndex = Math.min(
        Math.floor(progress * (imagesRef.current.length - 1)),
        imagesRef.current.length - 1
      )
      requestAnimationFrame(() => {
        ctx.drawImage(imagesRef.current[frameIndex], 0, 0)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loaded])

  return (
    // Container height controls how long the scroll animation lasts
    // 400vh = user scrolls 4 full screen heights to play entire video
    <div ref={containerRef} style={{ height: '400vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        {!loaded && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            background: '#0d0b09', zIndex: 2,
          }}>
            <span style={{ color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.2em', fontSize: '0.7rem' }}>
              LOADING...
            </span>
          </div>
        )}
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </div>
  )
}
```

### 4. Overlay text on the scroll animation

Text should be sticky and layered on top of the canvas. Fade in at specific scroll progress thresholds.

```jsx
// Text overlay — positioned sticky over the canvas
<div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
  <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center' }}>
    <div style={{ padding: '0 80px' }}>
      <h1>Your headline here</h1>
    </div>
  </div>
</div>
```

### 5. Performance rules — always follow these

- **Always use webp** — never jpg or png for frames
- **Preload all images** before enabling scroll listener
- **Use requestAnimationFrame** — never update DOM directly in scroll handler
- **Use passive scroll listeners** — `{ passive: true }`
- **Scale frames to 1920px width max** — no need for 4K
- **Canvas over img tags** — canvas redraws are faster than src swaps
- Target 80-120 frames for smooth animation without huge file size
- Add a loading state while frames preload

### 6. Scroll height formula

```
container height = (number of frames / target fps) * scroll speed factor * 100vh
```

A good default: `height: '400vh'` for a 120-frame sequence.
Adjust up if animation feels too fast, down if too slow.

### 7. Folder structure

```
public/
  frames/
    frame_0001.webp
    frame_0002.webp
    ...
    frame_0120.webp
components/
  ScrollVideo.jsx
```

### 8. Hekano-specific implementation notes

- Dark overlay on canvas: `rgba(10, 8, 6, 0.35)` — keeps text readable
- Gold accent: `#c9a84c`
- Text fades in at 20% scroll progress, fades out at 80%
- "HEKANO PROPERTY GROUP" label appears first (small caps, gold)
- Then headline: "West London. Off-Market. Precision-Built."
- Then subtext and CTA buttons
- Keep nav fixed above everything (z-index: 50)

### 9. Ideal video characteristics for Hekano

- Aerial drone footage of West London / Elizabeth Line corridor
- Or: slow push-in on a period terrace property
- Or: interior walkthrough of a modernised flat
- Duration: 4-8 seconds at 24fps = 96-192 frames
- Compress before extracting: `ffmpeg -i input.mp4 -crf 28 -vf scale=1920:-1 compressed.mp4`
- Must have ffmpeg installed: `brew install ffmpeg` (Mac) or `choco install ffmpeg` (Windows)
