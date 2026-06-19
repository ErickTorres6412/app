'use client'

import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { C } from '../components/slides/constants'
import { SlidePortada } from '../components/slides/SlidePortada'
import { SlideProblema } from '../components/slides/SlideProblema'
import { SlideSolucion } from '../components/slides/SlideSolucion'
import { SlideInversion } from '../components/slides/SlideInversion'
import { SlideObjetivos } from '../components/slides/SlideObjetivos'
import { SlideBeneficios } from '../components/slides/SlideBeneficios'
import { SlideMetodologia } from '../components/slides/SlideMetodologia'
import { SlideCronograma } from '../components/slides/SlideCronograma'
import { SlideRiesgos } from '../components/slides/SlideRiesgos'
import { SlideQA } from '../components/slides/SlideQA'

const SLIDES = [
  { id: 'portada',    label: 'Portada',           component: SlidePortada },
  { id: 'contexto',   label: 'Contexto',           component: SlideProblema },
  { id: 'problema',   label: 'Problema',           component: SlideSolucion },
  { id: 'obj-general',  label: 'Objetivo General',    component: SlideInversion },
  { id: 'obj-especif',  label: 'Obj. Específicos',   component: SlideObjetivos },
  { id: 'marco',        label: 'Marco Conceptual',    component: SlideBeneficios },
  { id: 'metodologia',  label: 'Metodología',         component: SlideMetodologia },
  { id: 'solucion',     label: 'Propuesta COINKI',    component: SlideCronograma },
  { id: 'resultados', label: 'Resultados',         component: SlideRiesgos },
  { id: 'cierre',     label: 'Cierre / Q&A',       component: SlideQA },
]

export default function Home() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState<'fwd' | 'bck'>('fwd')

  const go = useCallback((next: number) => {
    if (next < 0 || next >= SLIDES.length) return
    setDir(next > idx ? 'fwd' : 'bck')
    setIdx(next)
  }, [idx])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(idx + 1)
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   go(idx - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [idx, go])

  const Slide = SLIDES[idx].component
  const pct = ((idx + 1) / SLIDES.length) * 100

  return (
    <div
      style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', background: C.text }}
    >
      <div key={`${idx}-${dir}`} className={`slide-${dir}`} style={{ flex: 1, overflow: 'hidden' }}>
        <Slide />
      </div>

      <div style={{ background: '#1a0a0a', padding: '0 20px', height: 44, display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.08)' }}>
          <div style={{ height: 2, background: C.accent, width: `${pct}%`, transition: 'width 0.3s ease' }} />
        </div>

        <button onClick={e => { e.stopPropagation(); go(idx - 1) }} disabled={idx === 0}
          style={{ background: 'none', border: 'none', cursor: idx === 0 ? 'default' : 'pointer', color: idx === 0 ? 'rgba(255,255,255,0.2)' : C.accent, padding: 4, display: 'flex' }}>
          <ChevronLeft size={18} />
        </button>

        <div style={{ flex: 1 }} />

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
