import { FileText, BarChart2, Code, TestTube, BookOpen } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideRiesgos() {
  const entregables = [
    { icon: <FileText size={20} color={C.primary} />, titulo: 'Investigación previa', desc: 'Qué soluciones existen hoy en alojamiento, emparejamiento e identidad.', color: C.primary },
    { icon: <BarChart2 size={20} color={C.secondary} />, titulo: 'Análisis y diseño', desc: 'Requerimientos, arquitectura y modelo de la plataforma.', color: C.secondary },
    { icon: <Code size={20} color={C.warning} />, titulo: 'Prototipo funcional', desc: 'App web operativa: registro, búsqueda de alojamiento e interacción.', color: C.warning },
    { icon: <TestTube size={20} color={C.success} />, titulo: 'Pruebas y validación', desc: 'Resultados de funcionalidad, usabilidad y desempeño del sistema.', color: C.success },
    { icon: <BookOpen size={20} color={C.muted} />, titulo: 'Documento final', desc: 'Conclusiones y mejoras futuras del proyecto.', color: C.muted },
  ]

  const fases = [
    { actividad: 'Investigación', meses: 3, color: C.primary },
    { actividad: 'Requerimientos', meses: 1, color: C.secondary },
    { actividad: 'Desarrollo y algoritmo', meses: 5, color: C.warning },
    { actividad: 'Pruebas y evaluación', meses: 1, color: C.success },
    { actividad: 'Revisión y corrección', meses: 1, color: C.muted },
  ]
  const total = fases.reduce((s, f) => s + f.meses, 0)

  return (
    <div style={{ padding: '46px 60px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 30 }}>
      {/* Entregables */}
      <div>
        <Label>Resultados Esperados</Label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {entregables.map(e => (
            <div key={e.titulo} style={{ background: C.white, borderRadius: 14, padding: '20px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderTop: `4px solid ${e.color}`, display: 'flex', flexDirection: 'column', gap: 11, alignItems: 'flex-start' }}>
              <div style={{ background: `${e.color}15`, borderRadius: 10, padding: 10, display: 'flex' }}>{e.icon}</div>
              <span style={{ fontWeight: 800, color: C.text, fontSize: 14, lineHeight: 1.3 }}>{e.titulo}</span>
              <p style={{ color: C.muted, fontSize: 12, lineHeight: 1.5, margin: 0 }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cronograma — timeline horizontal proporcional */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18 }}>
          <span style={{ color: C.muted, fontSize: 11, letterSpacing: 2, fontWeight: 700, textTransform: 'uppercase' }}>Cronograma</span>
          <span style={{ color: C.primary, fontSize: 15, fontWeight: 800 }}>~{total} meses</span>
        </div>

        {/* Barra proporcional tipo Gantt */}
        <div style={{ display: 'flex', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', height: 44 }}>
          {fases.map((f, i) => (
            <div key={f.actividad} style={{ flex: f.meses, background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: i < fases.length - 1 ? '2px solid #fff' : 'none' }}>
              <span style={{ color: '#fff', fontSize: 13, fontWeight: 800 }}>{f.meses}m</span>
            </div>
          ))}
        </div>

        {/* Etiquetas de fases */}
        <div style={{ display: 'flex', marginTop: 14, gap: 0 }}>
          {fases.map((f, i) => (
            <div key={f.actividad} style={{ flex: f.meses, display: 'flex', alignItems: 'flex-start', gap: 8, paddingRight: 12, borderLeft: i === 0 ? 'none' : `1px solid ${C.light}`, paddingLeft: i === 0 ? 0 : 12 }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: f.color, flexShrink: 0, marginTop: 4 }} />
              <span style={{ fontSize: 12, color: C.text, fontWeight: 600, lineHeight: 1.35 }}>{f.actividad}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
