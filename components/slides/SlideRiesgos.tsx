import { FileText, BarChart2, Code, TestTube, BookOpen } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideRiesgos() {
  const entregables = [
    {
      num: '1',
      icon: <FileText size={18} color={C.primary} />,
      titulo: 'Informe de Estado del Arte',
      desc: 'Sistemas de búsqueda de alojamiento, emparejamiento de compañeros de covivienda, técnicas de ML aplicadas a compatibilidad de perfiles y mecanismos de verificación de identidad digital.',
      obj: 'OE 1',
    },
    {
      num: '2',
      icon: <BarChart2 size={18} color={C.secondary} />,
      titulo: 'Documento de Análisis y Diseño',
      desc: 'Definición de requerimientos, arquitectura de la solución, modelo de datos, diagramas y el diseño del modelo de emparejamiento.',
      obj: 'OE 2',
    },
    {
      num: '3',
      icon: <Code size={18} color={C.warning} />,
      titulo: 'Prototipo Funcional',
      desc: 'Aplicación web operativa que permita registro y validación de usuarios, publicación y búsqueda de alojamientos, y funcionalidades de interacción entre estudiantes.',
      obj: 'OE 3',
    },
    {
      num: '4',
      icon: <TestTube size={18} color={C.success} />,
      titulo: 'Resultados de Pruebas y Validación',
      desc: 'Reporte que incluya pruebas funcionales, pruebas de usabilidad y evaluación del desempeño del sistema; precisión del emparejamiento, experiencia del usuario, etc.',
      obj: 'OE 4',
    },
    {
      num: '5',
      icon: <BookOpen size={18} color={C.muted} />,
      titulo: 'Documento Final del Proyecto',
      desc: 'Informe completo que integre el proceso de investigación, diseño, desarrollo, pruebas y conclusiones, junto con recomendaciones y posibles mejoras futuras.',
      obj: 'OE 5',
    },
  ]

  const cronograma = [
    { actividad: 'Investigación bibliográfica y estado del arte', tiempo: '3 meses' },
    { actividad: 'Recopilación de datos y levantamiento de requerimientos', tiempo: '2 meses' },
    { actividad: 'Desarrollo de software y diseño del algoritmo', tiempo: '4 meses' },
    { actividad: 'Pruebas y evaluación', tiempo: '1 mes' },
    { actividad: 'Revisión y corrección', tiempo: '1 mes' },
  ]

  return (
    <div style={{ padding: '40px 60px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', gap: 24 }}>
      {/* Entregables */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Label>Resultados Esperados</Label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
          {entregables.map(e => (
            <div key={e.num} style={{ background: C.white, borderRadius: 10, padding: '11px 15px', boxShadow: '0 1px 5px rgba(0,0,0,0.04)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ background: C.light, borderRadius: 8, padding: 7, flexShrink: 0, display: 'flex', marginTop: 1 }}>{e.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
                  <span style={{ fontWeight: 700, color: C.text, fontSize: 13 }}>{e.titulo}</span>
                  <span style={{ background: `${C.primary}15`, color: C.primary, fontSize: 10, fontWeight: 700, borderRadius: 5, padding: '2px 8px', flexShrink: 0, marginLeft: 8 }}>{e.obj}</span>
                </div>
                <p style={{ color: C.muted, fontSize: 11.5, lineHeight: 1.55, margin: 0 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cronograma */}
      <div style={{ width: 260, flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
        <Label>Cronograma</Label>
        <div style={{ background: C.white, borderRadius: 12, padding: '16px 14px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ color: C.primary, fontSize: 13, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>~11 meses totales</div>
          {cronograma.map((c, i) => {
            const colors = [C.primary, C.secondary, C.warning, C.success, C.muted]
            return (
              <div key={c.actividad} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: colors[i], flexShrink: 0 }} />
                <div style={{ flex: 1, fontSize: 11.5, color: C.text, lineHeight: 1.4 }}>{c.actividad}</div>
                <div style={{ color: colors[i], fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{c.tiempo}</div>
              </div>
            )
          })}
          <div style={{ marginTop: 12, borderTop: `1px solid ${C.light}`, paddingTop: 10 }}>
            {/* Simple visual bars */}
            {[
              { color: C.primary, w: '27%', label: '' },
              { color: C.secondary, w: '18%', label: '' },
              { color: C.warning, w: '36%', label: '' },
              { color: C.success, w: '9%', label: '' },
              { color: C.muted, w: '9%', label: '' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'inline-block', width: b.w, height: 10, background: b.color, borderRadius: i === 0 ? '4px 0 0 4px' : i === 4 ? '0 4px 4px 0' : 0 }} />
            ))}
            <div style={{ color: C.muted, fontSize: 10, marginTop: 6 }}>Duración total del proyecto</div>
          </div>
        </div>
      </div>
    </div>
  )
}
