'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { C } from '../components/slides/constants'
import { SlidePortada }   from '../components/slides/SlidePortada'
import { SlideProblema }  from '../components/slides/SlideProblema'
import { SlideSolucion }  from '../components/slides/SlideSolucion'
import { SlideInversion } from '../components/slides/SlideInversion'
import { SlideBeneficios } from '../components/slides/SlideBeneficios'
import { SlideRiesgos }   from '../components/slides/SlideRiesgos'
import { SlideQA }        from '../components/slides/SlideQA'

const SLIDES = [
  { id: 'portada',     label: 'Portada',     component: SlidePortada },
  { id: 'problema',    label: 'Problema',    component: SlideProblema },
  { id: 'solucion',    label: 'Solución',    component: SlideSolucion },
  { id: 'inversion',   label: 'Inversión',   component: SlideInversion },
  { id: 'beneficios',  label: 'Beneficios',  component: SlideBeneficios },
  { id: 'riesgos',     label: 'Riesgos',     component: SlideRiesgos },
  { id: 'qa',          label: 'Cierre',      component: SlideQA },
]

export default function Home() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState<'fwd' | 'bck'>('fwd')
  const touchX = useRef<number | null>(null)

  const go = useCallback((next: number) => {
    if (next < 0 || next >= SLIDES.length) return
    setDir(next > idx ? 'fwd' : 'bck')
    setIdx(next)
  }, [idx])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(idx + 1) }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [idx, go])

  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return
    const dx = touchX.current - e.changedTouches[0].clientX
    if (Math.abs(dx) > 50) go(idx + (dx > 0 ? 1 : -1))
    touchX.current = null
  }

  const Slide = SLIDES[idx].component
  const pct = ((idx + 1) / SLIDES.length) * 100

  return (
    <div
      style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', background: C.text }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        key={`${idx}-${dir}`}
        className={`slide-${dir}`}
        style={{ flex: 1, overflow: 'hidden' }}
        onClick={() => go(idx + 1)}
      >
        <Slide />
      </div>

      <div style={{ background: '#111820', padding: '0 20px', height: 44, display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.08)' }}>
          <div style={{ height: 2, background: C.accent, width: `${pct}%`, transition: 'width 0.3s ease' }} />
        </div>

        <button onClick={e => { e.stopPropagation(); go(idx - 1) }} disabled={idx === 0}
          style={{ background: 'none', border: 'none', cursor: idx === 0 ? 'default' : 'pointer', color: idx === 0 ? 'rgba(255,255,255,0.2)' : C.accent, padding: 4, display: 'flex' }}>
          <ChevronLeft size={18} />
        </button>

        <div style={{ display: 'flex', gap: 6, flex: 1, justifyContent: 'center' }}>
          {SLIDES.map((s, i) => (
            <button key={s.id} onClick={e => { e.stopPropagation(); go(i) }} title={s.label}
              style={{ background: i === idx ? C.accent : 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 3, cursor: 'pointer', width: i === idx ? 22 : 8, height: 8, transition: 'all 0.22s ease', padding: 0, flexShrink: 0 }} />
          ))}
        </div>

        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, flexShrink: 0 }}>
          {SLIDES[idx].label} · {idx + 1} / {SLIDES.length}
        </span>

        <button onClick={e => { e.stopPropagation(); go(idx + 1) }} disabled={idx === SLIDES.length - 1}
          style={{ background: 'none', border: 'none', cursor: idx === SLIDES.length - 1 ? 'default' : 'pointer', color: idx === SLIDES.length - 1 ? 'rgba(255,255,255,0.2)' : C.accent, padding: 4, display: 'flex' }}>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
