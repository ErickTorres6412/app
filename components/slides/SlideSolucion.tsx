import { CheckCircle, Cloud, DollarSign, Lock, Users } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideSolucion() {
  const modulos = [
    { icon: <DollarSign size={20} color={C.primary} />, title: 'Módulos Financieros', desc: 'Contabilidad · Compras · Inventario · Activos Fijos', color: C.primary },
    { icon: <Users size={20} color={C.primary} />, title: 'Módulos RRHH', desc: 'Expedientes · Planillas CCSS/INS/Renta · Evaluaciones', color: C.primary },
    { icon: <Cloud size={20} color={C.secondary} />, title: 'Azure Cloud', desc: '99.97% disponibilidad · Backups · Redundancia geográfica', color: C.secondary },
    { icon: <Lock size={20} color={C.secondary} />, title: 'Seguridad PBAC', desc: 'Roles por área · ISO 27001 · SOC 2 · Ley 8968 CR', color: C.secondary },
  ]

  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>Solución</Label>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
        <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800 }}>ERP + RRHH integrado en la nube</h2>
        <div style={{ background: C.primary, color: C.white, borderRadius: 8, padding: '8px 18px', fontSize: 13, fontWeight: 700 }}>
          Arrendamiento Operativo SaaS
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        {modulos.map(m => (
          <div key={m.title} style={{ background: C.white, borderRadius: 12, padding: '24px 26px', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', borderTop: `4px solid ${m.color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              {m.icon}
              <span style={{ fontWeight: 700, color: C.text, fontSize: 15 }}>{m.title}</span>
            </div>
            <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.55, margin: 0 }}>{m.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: '10px 16px', background: C.light, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
        <CheckCircle size={14} color={C.primary} />
        <span style={{ fontSize: 12, color: C.primary, fontWeight: 600 }}>
          Criterio de éxito: aprobación 100% de pruebas UAT por Jefaturas Fiscalizadoras del SINART
        </span>
      </div>
    </div>
  )
}
