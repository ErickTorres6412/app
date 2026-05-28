'use client'
import { useState } from 'react'
import { X } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

const PHASES = [
  { id: '1.1', label: '1.1 Gestión y Gobernanza',  sub: 'Acta · Control · Riesgos',     l: 0,    w: 6.0,  color: C.muted,     days: '8d',  cost: '$6,200'  },
  { id: '1.2', label: '1.2 Infraestructura Cloud', sub: 'Azure · Seguridad · Respaldos', l: 4.7,  w: 19.5, color: '#3A7D6E',   days: '22d', cost: '$11,080' },
  { id: '1.3', label: '1.3 Parametrización ERP',   sub: 'Financiero · RRHH · PBAC',      l: 4.7,  w: 29.5, color: C.secondary, days: '33d', cost: '$28,320' },
  { id: '1.4', label: '1.4 Migración y Pruebas',   sub: 'Datos históricos · UAT',         l: 14.1, w: 33.6, color: C.warning,   days: '37d', cost: '$18,760' },
  { id: '1.5', label: '1.5 Gestión del Cambio',    sub: 'Capacitación · Soporte',         l: 14.1, w: 85.9, color: C.primary,   days: '93d', cost: '$63,800' },
]

type Task = { id: string; name: string; dates: string; d: string; resp: string }
const SUBTASKS: Record<string, Task[]> = {
  '1.1': [
    { id: '1.1.1', name: 'Acta de Constitución y Plan de Dirección',     dates: '1/6 – 5/6',   d: '5d', resp: 'Josué Montero · Siandi Araya' },
    { id: '1.1.2', name: 'Control de Costos y Flujo de Caja (SICOP)',    dates: '8/6 – 10/6',  d: '3d', resp: 'Erick Torres' },
    { id: '1.1.3', name: 'Monitoreo de Riesgos y Comité de Cambios',     dates: '8/6 – 9/6',   d: '2d', resp: 'Erick Torres · Josué Montero' },
    { id: '1.1.4', name: 'Minutas de Avance e Informes Mensuales',       dates: '8/6 – 9/6',   d: '2d', resp: 'Siandi Araya' },
  ],
  '1.2': [
    { id: '1.2.1', name: 'Arquitectura Técnica y Topología de Red Azure',  dates: '8/6 – 16/6',  d: '7d',  resp: 'Pablo Alvarado · Ing. Cloud' },
    { id: '1.2.2', name: 'Aprovisionamiento Servidores y Entornos SaaS',   dates: '17/6 – 30/6', d: '10d', resp: 'Pablo Alvarado · Ing. Cloud' },
    { id: '1.2.3', name: 'Seguridad, Redundancia y Respaldos',             dates: '1/7 – 7/7',   d: '5d',  resp: 'Pablo Alvarado · Esp. Seg.' },
  ],
  '1.3': [
    { id: '1.3.1', name: 'Requerimientos y Matriz de Trazabilidad',     dates: '8/6 – 19/6',  d: '10d', resp: 'Siandi Araya · Consultor ERP' },
    { id: '1.3.2', name: 'Módulos Financieros y Contables',             dates: '22/6 – 10/7', d: '15d', resp: 'Josué Montero · Siandi Araya' },
    { id: '1.3.3', name: 'Módulos de RRHH y Planillas',                 dates: '22/6 – 10/7', d: '15d', resp: 'Josué Montero · Siandi Araya' },
    { id: '1.3.4', name: 'Seguridad y Matriz de Accesos (PBAC)',        dates: '13/7 – 22/7', d: '8d',  resp: 'Pablo Alvarado · Esp. Seg.' },
  ],
  '1.4': [
    { id: '1.4.1', name: 'Limpieza, Mapeo y Carga de Datos Históricos', dates: '22/6 – 7/7',  d: '12d', resp: 'Erick Torres · Pablo Alvarado' },
    { id: '1.4.2', name: 'Pruebas Unitarias e Integrales de Software',  dates: '23/7 – 31/7', d: '7d',  resp: 'Pablo Alvarado · Siandi Araya' },
    { id: '1.4.3', name: 'Pruebas en Sitio (Conectividad y Carga)',     dates: '31/7 – 11/8', d: '7d',  resp: 'Pablo Alvarado · Jimmy Téllez' },
  ],
  '1.5': [
    { id: '1.5.1', name: 'Diagnóstico de Impacto y Talleres',           dates: '22/6 – 26/6', d: '5d',  resp: 'Kristel Duarte' },
    { id: '1.5.2', name: 'Manuales de Usuario y Material Didáctico',    dates: '23/7 – 12/8', d: '15d', resp: 'Kristel Duarte · Siandi Araya' },
    { id: '1.5.3', name: 'Plan de Capacitación Institucional',          dates: '13/8 – 2/9',  d: '15d', resp: 'Kristel Duarte' },
    { id: '1.5.4', name: 'Índice de Adopción y Mitigación',             dates: '3/9 – 30/9',  d: '20d', resp: 'Kristel Duarte' },
    { id: '1.5.5', name: 'Soporte Técnico Post-Implementación',         dates: '3/9 – 28/10', d: '40d', resp: 'Erick Torres · Josué Montero' },
    { id: '★',     name: 'Cierre Técnico y Entrega Final',              dates: '28/10',        d: '0d',  resp: 'Josué Montero · Carlos Álvarez' },
  ],
}

// Posiciones en % del span Jun 1 → Oct 28 (149 días)
const MONTH_DIVIDERS = [20.1, 40.9, 61.7, 81.9]
const MONTH_LABELS = [
  { label: 'JUN 2026', l: 0 },
  { label: 'JUL',      l: 20.1 },
  { label: 'AGO',      l: 40.9 },
  { label: 'OCT',      l: 81.9 },
]
const GL = 62.4

function Badge({ children, bg, color, border }: { children: React.ReactNode; bg: string; color: string; border?: boolean }) {
  return (
    <div style={{ background: bg, color, borderRadius: 8, padding: '6px 14px', fontSize: 12, fontWeight: 700, border: border ? `1.5px solid ${color}` : 'none' }}>
      {children}
    </div>
  )
}

export function SlideCronograma() {
  const [selected, setSelected] = useState<string | null>(null)

  const phase = selected ? PHASES.find(p => p.id === selected) : null
  const tasks = selected ? SUBTASKS[selected] ?? [] : []

  const toggle = (id: string) => setSelected(prev => prev === id ? null : id)

  return (
    <div
      style={{ padding: '44px 56px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}
      onClick={() => setSelected(null)}
    >
      <Label>Cronograma del proyecto</Label>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 18 }}>
        <h2 style={{ color: C.primary, fontSize: 28, fontWeight: 800, margin: 0 }}>
          Línea de tiempo · Implementación ERP SINART
        </h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <Badge bg={C.primary} color={C.white}>108 días hábiles</Badge>
          <Badge bg={C.success} color={C.white}>Go-Live 02/Sep/2026</Badge>
          <Badge bg={C.white} color={C.primary} border>Cierre 28/Oct/2026</Badge>
        </div>
      </div>

      <div
        style={{ flex: 1, background: C.white, borderRadius: 14, padding: '18px 22px', boxShadow: '0 1px 8px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', flex: 1 }}>

          {/* Sidebar: nombres de fases */}
          <div style={{ width: 218, flexShrink: 0 }}>
            <div style={{ height: 28 }} />
            {PHASES.map(ph => (
              <div
                key={ph.id}
                onClick={() => toggle(ph.id)}
                style={{
                  height: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  paddingRight: 14, cursor: 'pointer', borderRadius: 6,
                  background: selected === ph.id ? `${ph.color}18` : 'transparent',
                  transition: 'background 0.18s',
                  paddingLeft: 4,
                }}
              >
                <div style={{ fontSize: 11.5, fontWeight: 700, color: selected === ph.id ? ph.color : C.text, lineHeight: 1.3 }}>{ph.label}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
                  <span style={{ fontSize: 10, color: C.muted }}>{ph.sub}</span>
                  <span style={{ fontSize: 10, color: ph.color, fontWeight: 700 }}>{ph.cost}</span>
                </div>
              </div>
            ))}
            <div style={{ height: 34, display: 'flex', alignItems: 'center', paddingLeft: 4 }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' }}>Hitos clave</span>
            </div>
          </div>

          {/* Área del Gantt */}
          <div style={{ flex: 1, position: 'relative' }}>
            {MONTH_DIVIDERS.map(x => (
              <div key={x} style={{ position: 'absolute', left: `${x}%`, top: 0, bottom: 0, width: 1, background: 'rgba(0,0,0,0.07)', zIndex: 0 }} />
            ))}
            <div style={{ position: 'absolute', left: `${GL}%`, top: 0, bottom: 0, width: 2, background: C.success, opacity: 0.75, zIndex: 5 }} />

            {/* Encabezado de meses */}
            <div style={{ height: 28, position: 'relative', zIndex: 1 }}>
              {MONTH_LABELS.map(m => (
                <span key={m.label} style={{
                  position: 'absolute', left: `${m.l}%`,
                  transform: m.l === 0 ? 'none' : 'translateX(-50%)',
                  fontSize: 9.5, fontWeight: 700, color: C.muted, letterSpacing: 0.8, lineHeight: '28px',
                }}>
                  {m.label}
                </span>
              ))}
              <div style={{
                position: 'absolute', left: `${GL}%`, top: '50%',
                transform: 'translate(-50%, -50%)',
                background: C.success, color: C.white,
                fontSize: 8.5, fontWeight: 700, borderRadius: 4,
                padding: '2px 8px', whiteSpace: 'nowrap', zIndex: 6,
              }}>GO-LIVE</div>
            </div>

            {/* Barras por fase */}
            {PHASES.map((ph, i) => (
              <div
                key={ph.id}
                onClick={() => toggle(ph.id)}
                style={{
                  position: 'relative', height: 50, zIndex: 1, cursor: 'pointer',
                  background: i % 2 ? 'rgba(0,0,0,0.015)' : 'transparent',
                  display: 'flex', alignItems: 'center',
                }}
              >
                <div style={{ position: 'absolute', left: 0, right: 0, height: 18, background: C.light, borderRadius: 5 }} />
                <div style={{
                  position: 'absolute', left: `${ph.l}%`, width: `${ph.w}%`,
                  height: 18, background: ph.color, borderRadius: 5, zIndex: 2,
                  display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 7,
                  outline: selected === ph.id ? `2px solid ${ph.color}` : 'none',
                  outlineOffset: 2,
                  transition: 'outline 0.15s',
                }}>
                  {ph.w > 9 && (
                    <span style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>{ph.days}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Hitos */}
            <div style={{ height: 34, position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center' }}>
              <div style={{
                position: 'absolute', left: `${GL}%`, transform: 'translateX(-50%)',
                background: C.success, color: C.white, borderRadius: 6,
                padding: '4px 12px', fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap', zIndex: 6,
              }}>Go-Live · 02/Sep/2026</div>
              <div style={{
                position: 'absolute', right: 0,
                background: C.primary, color: C.white, borderRadius: 6,
                padding: '4px 12px', fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap', zIndex: 6,
              }}>Cierre · 28/Oct/2026</div>
            </div>
          </div>
        </div>

        {/* OPEX SaaS */}
        <div style={{ borderTop: `1px solid ${C.light}`, marginTop: 10, paddingTop: 10, display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 218, flexShrink: 0, fontSize: 10, fontWeight: 700, color: C.muted, letterSpacing: 1 }}>
            OPEX SaaS ACTIVO
          </div>
          <div style={{ flex: 1, position: 'relative', height: 16 }}>
            <div style={{ position: 'absolute', left: 0, right: 0, height: 16, background: C.light, borderRadius: 5 }} />
            <div style={{
              position: 'absolute', left: `${GL}%`, right: 0, height: 16,
              background: C.accent, borderRadius: 5,
              display: 'flex', alignItems: 'center', paddingLeft: 10,
            }}>
              <span style={{ fontSize: 9.5, color: C.primary, fontWeight: 700, whiteSpace: 'nowrap' }}>
                Sep 2026 → Ago 2028 · 24 meses · $598/mes →
              </span>
            </div>
          </div>
        </div>

        {/* Panel deslizable de sub-tareas */}
        <div
          onClick={e => e.stopPropagation()}
          style={{
            position: 'absolute', top: 0, right: 0, bottom: 0,
            width: 360,
            background: C.white,
            borderLeft: `3px solid ${phase?.color ?? C.accent}`,
            boxShadow: '-6px 0 24px rgba(0,0,0,0.13)',
            display: 'flex', flexDirection: 'column',
            transform: selected ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1)',
            zIndex: 20,
            borderRadius: '0 14px 14px 0',
          }}
        >
          {phase && (
            <>
              {/* Cabecera del panel */}
              <div style={{ padding: '14px 16px 10px', borderBottom: `1px solid ${C.light}`, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: phase.color, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>
                    {phase.id} · {phase.days}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.text, lineHeight: 1.3 }}>{phase.label.replace(phase.id + ' ', '')}</div>
                  <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>{phase.sub} · <span style={{ color: phase.color, fontWeight: 700 }}>{phase.cost}</span></div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.muted, padding: 4, display: 'flex', flexShrink: 0 }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Lista de tareas */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
                {tasks.map((t, i) => (
                  <div
                    key={t.id}
                    style={{
                      padding: '9px 16px',
                      borderBottom: i < tasks.length - 1 ? `1px solid ${C.light}` : 'none',
                      background: i % 2 ? 'rgba(0,0,0,0.015)' : 'transparent',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                      <span style={{ fontSize: 10, fontWeight: 800, color: phase.color, flexShrink: 0 }}>{t.id}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, color: C.muted, flexShrink: 0 }}>{t.d}</span>
                    </div>
                    <div style={{ fontSize: 11.5, fontWeight: 600, color: C.text, margin: '2px 0' }}>{t.name}</div>
                    <div style={{ fontSize: 10, color: C.muted }}>
                      <span style={{ fontWeight: 600, color: C.secondary }}>{t.dates}</span> · {t.resp}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pie del panel */}
              <div style={{ padding: '8px 16px', borderTop: `1px solid ${C.light}`, fontSize: 9.5, color: C.muted, textAlign: 'center' }}>
                {tasks.length} {tasks.length === 1 ? 'tarea' : 'tareas'} · haz clic fuera para cerrar
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  )
}
