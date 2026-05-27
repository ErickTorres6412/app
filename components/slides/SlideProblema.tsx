import { AlertTriangle, BarChart2, Database, Layers, ShieldAlert, FileText } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideProblema() {
  const items = [
    {
      icon: <Layers size={22} color={C.danger} />,
      borderColor: C.danger,
      title: 'Desconexión Operativa y Silos de Información',
      desc: 'Las áreas de Finanzas, Compras, Recursos Humanos y Planillas procesan datos de forma aislada. La falta de interfaces automatizadas provoca duplicidad de digitación, errores humanos en cálculos y retrasos críticos en la consolidación institucional.',
    },
    {
      icon: <Database size={22} color={C.danger} />,
      borderColor: C.danger,
      title: 'Ausencia de Trazabilidad y Quiebre de Auditoría',
      desc: 'La dependencia extrema de archivos de Excel locales y registros físicos impide un control centralizado. No existen bitácoras digitales de cambios, comprometiendo los históricos requeridos ante auditorías de la CGR y revisiones fiscales.',
    },
    {
      icon: <ShieldAlert size={22} color={C.danger} />,
      borderColor: C.danger,
      title: 'Exposición a Sanciones Legales y Normativas',
      desc: 'Vulnerabilidad crítica ante la CGR, la CCSS y el Ministerio de Trabajo de Costa Rica. El procesamiento desarticulado de planillas, marcas y presupuestos eleva exponencialmente el riesgo de multas institucionales y apercibimientos.',
    },
    {
      icon: <BarChart2 size={22} color={C.warning} />,
      borderColor: C.warning,
      title: 'Incapacidad de Toma de Decisiones y Ausencia de control financiero',
      desc: 'La dirección ejecutiva carece de visibilidad sobre los costos operativos reales y la ejecución presupuestaria en tiempo real. Generar reportes financieros toma semanas, anulando la capacidad de respuesta estratégica ante cambios del entorno.',
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        {items.map(item => (
          <div
            key={item.title}
            style={{
              background: C.white,
              borderRadius: 12,
              padding: '20px 24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              borderTop: `4px solid ${item.borderColor}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                {item.icon}
                <span style={{ fontWeight: 700, color: C.text, fontSize: 15 }}>{item.title}</span>
              </div>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '12px 18px', background: C.white, borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <AlertTriangle size={16} color={C.danger} style={{ flexShrink: 0 }} />
        <span style={{ fontSize: 12.5, color: C.text, lineHeight: 1.4 }}>
          <strong>Impacto en la Continuidad:</strong> Mantener el esquema actual perpetúa la ineficiencia de recursos públicos, inhabilita el control interno y expone a la organización a un <strong>estado de vulnerabilidad legal permanente</strong> ante los entes reguladores de Costa Rica.
        </span>
      </div>
    </div>
  )
}