import { Activity, CheckCircle, Shield, TrendingUp } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideBeneficios() {
  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>Beneficios esperados</Label>
      <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800, marginBottom: 28 }}>Impacto operacional, financiero y normativo</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18, marginBottom: 22 }}>
        {[
          {
            icon: <Activity size={20} color={C.primary} />, title: 'Operacionales', color: C.primary,
            items: [
              'Integración de finanzas, compras, inventario y RRHH en una sola plataforma',
              'Automatización de planillas CCSS, INS y renta',
              'Reportes presupuestales en tiempo real',
              'Eliminación de duplicidades y reprocesos manuales',
            ],
          },
          {
            icon: <TrendingUp size={20} color={C.warning} />, title: 'Financieros', color: C.warning,
            items: [
              'OPEX $910/mes — sin inversión en infraestructura física',
              'Control del techo $150K vía SICOP con trazabilidad completa',
              'Visibilidad de costos operativos reales del SINART',
              'Eliminación de multas por incumplimiento CCSS/Hacienda',
            ],
          },
          {
            icon: <Shield size={20} color={C.success} />, title: 'Normativos', color: C.success,
            items: [
              'Pistas de auditoría digitales para CGR y Contraloría',
              'Cumplimiento Ley 8968 (protección de datos personales)',
              'Integración con CCSS, INS, Hacienda y bancos',
              'Módulo presupuestario alineado con normativa STAP',
            ],
          },
        ].map(cat => (
          <div key={cat.title} style={{ background: C.white, borderRadius: 12, padding: 22, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', borderTop: `4px solid ${cat.color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              {cat.icon}
              <span style={{ fontWeight: 700, color: cat.color, fontSize: 15 }}>{cat.title}</span>
            </div>
            {cat.items.map(it => (
              <div key={it} style={{ fontSize: 12, color: C.muted, padding: '5px 0', display: 'flex', gap: 8, alignItems: 'flex-start', lineHeight: 1.4, borderBottom: `1px solid ${C.light}` }}>
                <CheckCircle size={11} color={cat.color} style={{ flexShrink: 0, marginTop: 2 }} />
                {it}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12 }}>
        {[
          { v: '90%',    l: 'Usuarios capacitados',    sub: 'meta plan 1.5.3',         color: C.primary },
          { v: '>80%',   l: 'Índice de adopción',      sub: 'post Go-Live (encuestas)', color: C.secondary },
          { v: '95%',    l: 'Tickets resueltos en SLA', sub: 'soporte 40 días post-impl', color: C.success },
          { v: '99.97%', l: 'Disponibilidad Azure',    sub: 'SLA contractual mensual',  color: C.warning },
        ].map(k => (
          <div key={k.l} style={{ background: C.white, borderRadius: 10, padding: '14px 18px', boxShadow: '0 1px 5px rgba(0,0,0,0.07)', borderTop: `3px solid ${k.color}` }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: k.color }}>{k.v}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.text, marginTop: 4 }}>{k.l}</div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{k.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
