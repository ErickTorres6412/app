import { C } from './constants'
import { Label } from './shared'

const fases = [
  { num: '1', nombre: 'Análisis',    desc: 'Estudio del problema y levantamiento de necesidades', color: C.primary },
  { num: '2', nombre: 'Diseño',      desc: 'Arquitectura, modelo de datos y diseño del algoritmo', color: C.secondary },
  { num: '3', nombre: 'Desarrollo',  desc: 'Implementación de la plataforma y motor de emparejamiento', color: C.warning },
  { num: '4', nombre: 'Pruebas',     desc: 'Funcionales, usabilidad y métricas de desempeño', color: C.success },
  { num: '5', nombre: 'Validación',  desc: 'Evaluación con usuarios reales y ajustes finales', color: C.muted },
]

const items = [
  { label: 'Tipo',       value: 'Aplicada · Mixta (cuantitativa + cualitativa)' },
  { label: 'Recolección', value: 'Revisión bibliográfica · Entrevistas semiestructuradas · Grupos de discusión' },
  { label: 'Gestión',    value: 'Metodología ágil Scrum · Perfiles sintéticos para prototipo' },
]

export function SlideMetodologia() {
  return (
    <div style={{ padding: '48px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <Label>Metodología</Label>
        <h2 style={{ color: C.primary, fontSize: 26, fontWeight: 800, margin: 0 }}>
          Enfoque y fases de ejecución
        </h2>
      </div>

      {/* Enfoque */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map(m => (
          <div key={m.label} style={{ background: C.white, borderRadius: 10, padding: '11px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', display: 'flex', gap: 12, alignItems: 'baseline' }}>
            <span style={{ color: C.primary, fontWeight: 800, fontSize: 11, flexShrink: 0, minWidth: 80 }}>{m.label}</span>
            <span style={{ color: C.text, fontSize: 13, lineHeight: 1.5 }}>{m.value}</span>
          </div>
        ))}
      </div>

      {/* Diagrama de fases */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ color: C.muted, fontSize: 10, letterSpacing: 2, fontWeight: 700, textTransform: 'uppercase' }}>Diagrama de fases · ~11 meses</div>

        {/* Barra visual */}
        <div style={{ display: 'flex', borderRadius: 10, overflow: 'hidden', height: 36 }}>
          {fases.map((f, i) => (
            <div key={f.num} style={{ flex: 1, background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: i < fases.length - 1 ? '2px solid #fff' : 'none' }}>
              <span style={{ color: '#fff', fontSize: 12, fontWeight: 800 }}>{f.num}</span>
            </div>
          ))}
        </div>

        {/* Tarjetas de fases */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, flex: 1 }}>
          {fases.map(f => (
            <div key={f.num} style={{ background: C.white, borderRadius: 10, padding: '14px 12px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', borderTop: `3px solid ${f.color}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ background: f.color, color: '#fff', borderRadius: 6, width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{f.num}</div>
                <span style={{ fontWeight: 800, color: C.text, fontSize: 13 }}>{f.nombre}</span>
              </div>
              <p style={{ color: C.muted, fontSize: 11, lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
