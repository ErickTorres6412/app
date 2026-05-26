import { AlertTriangle, BarChart2, Database, Layers } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideProblema() {
  const items = [
    {
      icon: <Layers size={22} color={C.danger} />,
      title: 'Procesos fragmentados',
      desc: 'Finanzas, compras, RRHH y planillas operan en silos desconectados sin integración entre áreas.',
    },
    {
      icon: <Database size={22} color={C.danger} />,
      title: 'Sin trazabilidad',
      desc: 'Registros en Excel y papel — sin auditoría digital ni historial de cambios disponible para la CGR.',
    },
    {
      icon: <AlertTriangle size={22} color={C.warning} />,
      title: 'Riesgo normativo',
      desc: 'Exposición a sanciones de la CGR y la CCSS por incumplimientos en planillas y presupuesto.',
    },
    {
      icon: <BarChart2 size={22} color={C.warning} />,
      title: 'Visibilidad nula',
      desc: 'La dirección no cuenta con costos operativos reales ni reportes presupuestales en tiempo real.',
    },
  ]

  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>Problema</Label>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
        <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800 }}>
          El SINART opera sin sistemas de gestión integrados
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        {items.map(item => (
          <div key={item.title} style={{ background: C.white, borderRadius: 12, padding: '24px 26px', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', borderTop: `4px solid ${C.danger}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              {item.icon}
              <span style={{ fontWeight: 700, color: C.text, fontSize: 15 }}>{item.title}</span>
            </div>
            <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: '10px 16px', background: C.white, borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <AlertTriangle size={14} color={C.danger} />
        <span style={{ fontSize: 12, color: C.text }}>
          Sin intervención, el SINART mantiene <strong>riesgo permanente de sanción</strong> y opera sin visibilidad de costos reales.
        </span>
      </div>
    </div>
  )
}
