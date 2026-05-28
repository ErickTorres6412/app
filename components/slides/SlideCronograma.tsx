import { C } from './constants'
import { Label } from './shared'

const PHASES = [
  { label: '1.1 Gestión y Gobernanza',  sub: 'Acta · Control · Riesgos',     l: 0,    w: 6.0,  color: C.muted,     days: '8d',  cost: '$6,200'  },
  { label: '1.2 Infraestructura Cloud', sub: 'Azure · Seguridad · Respaldos', l: 4.7,  w: 19.5, color: '#3A7D6E',   days: '22d', cost: '$11,080' },
  { label: '1.3 Parametrización ERP',   sub: 'Financiero · RRHH · PBAC',      l: 4.7,  w: 29.5, color: C.secondary, days: '33d', cost: '$28,320' },
  { label: '1.4 Migración y Pruebas',   sub: 'Datos históricos · UAT',         l: 14.1, w: 33.6, color: C.warning,   days: '37d', cost: '$18,760' },
  { label: '1.5 Gestión del Cambio',    sub: 'Capacitación · Soporte',         l: 14.1, w: 85.9, color: C.primary,   days: '93d', cost: '$63,800' },
]

// Posiciones en % del span Jun 1 → Oct 28 (149 días)
// JUL 1 = día 30 → 20.1% | AGO 1 = día 61 → 40.9% | SEP 1 = día 92 → 61.7% | OCT 1 = día 122 → 81.9%
const MONTH_DIVIDERS = [20.1, 40.9, 61.7, 81.9]
const MONTH_LABELS = [
  { label: 'JUN 2026', l: 0 },
  { label: 'JUL',      l: 20.1 },
  { label: 'AGO',      l: 40.9 },
  // SEP omitido: reemplazado por chip Go-Live
  { label: 'OCT',      l: 81.9 },
]

const GL = 62.4  // Go-Live 02/Sep → día 93 / 149 días

function Badge({ children, bg, color, border }: { children: React.ReactNode; bg: string; color: string; border?: boolean }) {
  return (
    <div style={{ background: bg, color, borderRadius: 8, padding: '6px 14px', fontSize: 12, fontWeight: 700, border: border ? `1.5px solid ${color}` : 'none' }}>
      {children}
    </div>
  )
}

export function SlideCronograma() {
  return (
    <div style={{ padding: '44px 56px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
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

      <div style={{ flex: 1, background: C.white, borderRadius: 14, padding: '18px 22px', boxShadow: '0 1px 8px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>

        <div style={{ display: 'flex', flex: 1 }}>

          {/* Sidebar con nombres de fases */}
          <div style={{ width: 218, flexShrink: 0 }}>
            <div style={{ height: 28 }} />
            {PHASES.map(ph => (
              <div key={ph.label} style={{ height: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 14 }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: C.text, lineHeight: 1.3 }}>{ph.label}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
                  <span style={{ fontSize: 10, color: C.muted }}>{ph.sub}</span>
                  <span style={{ fontSize: 10, color: ph.color, fontWeight: 700 }}>{ph.cost}</span>
                </div>
              </div>
            ))}
            <div style={{ height: 34, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' }}>Hitos clave</span>
            </div>
          </div>

          {/* Área del Gantt */}
          <div style={{ flex: 1, position: 'relative' }}>

            {/* Líneas divisoras de meses */}
            {MONTH_DIVIDERS.map(x => (
              <div key={x} style={{ position: 'absolute', left: `${x}%`, top: 0, bottom: 0, width: 1, background: 'rgba(0,0,0,0.07)', zIndex: 0 }} />
            ))}

            {/* Línea vertical Go-Live */}
            <div style={{ position: 'absolute', left: `${GL}%`, top: 0, bottom: 0, width: 2, background: C.success, opacity: 0.75, zIndex: 5 }} />

            {/* Encabezado de meses */}
            <div style={{ height: 28, position: 'relative', zIndex: 1 }}>
              {MONTH_LABELS.map(m => (
                <span key={m.label} style={{
                  position: 'absolute',
                  left: `${m.l}%`,
                  transform: m.l === 0 ? 'none' : 'translateX(-50%)',
                  fontSize: 9.5, fontWeight: 700, color: C.muted, letterSpacing: 0.8,
                  lineHeight: '28px',
                }}>
                  {m.label}
                </span>
              ))}
              {/* Chip Go-Live reemplaza la etiqueta SEP */}
              <div style={{
                position: 'absolute', left: `${GL}%`, top: '50%',
                transform: 'translate(-50%, -50%)',
                background: C.success, color: C.white,
                fontSize: 8.5, fontWeight: 700, borderRadius: 4,
                padding: '2px 8px', whiteSpace: 'nowrap', zIndex: 6,
              }}>
                GO-LIVE
              </div>
            </div>

            {/* Barras por fase */}
            {PHASES.map((ph, i) => (
              <div key={ph.label} style={{
                position: 'relative', height: 50, zIndex: 1,
                background: i % 2 ? 'rgba(0,0,0,0.015)' : 'transparent',
                display: 'flex', alignItems: 'center',
              }}>
                {/* Track de fondo */}
                <div style={{ position: 'absolute', left: 0, right: 0, height: 18, background: C.light, borderRadius: 5 }} />
                {/* Barra de la fase */}
                <div style={{
                  position: 'absolute', left: `${ph.l}%`, width: `${ph.w}%`,
                  height: 18, background: ph.color, borderRadius: 5, zIndex: 2,
                  display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 7,
                }}>
                  {ph.w > 9 && (
                    <span style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>{ph.days}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Fila de hitos */}
            <div style={{ height: 34, position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center' }}>
              <div style={{
                position: 'absolute', left: `${GL}%`, transform: 'translateX(-50%)',
                background: C.success, color: C.white, borderRadius: 6,
                padding: '4px 12px', fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap', zIndex: 6,
              }}>
                Go-Live · 02/Sep/2026
              </div>
              <div style={{
                position: 'absolute', right: 0,
                background: C.primary, color: C.white, borderRadius: 6,
                padding: '4px 12px', fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap', zIndex: 6,
              }}>
                Cierre · 28/Oct/2026
              </div>
            </div>

          </div>
        </div>

        {/* Franja OPEX SaaS */}
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

      </div>
    </div>
  )
}
