import { Cloud, DollarSign, FileText, Shield, Users } from 'lucide-react'
import { C } from './constants'

export function SlidePortada() {
  return (
    <div style={{ background: C.primary, height: '100%', display: 'flex' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 72px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(167,215,197,0.15)', border: '1px solid rgba(167,215,197,0.3)', borderRadius: 6, padding: '6px 14px', marginBottom: 80, width: 'fit-content' }}>
          <FileText size={12} color={C.accent} />
          <span style={{ color: C.accent, fontSize: 11, letterSpacing: 2, fontWeight: 700 }}>PRESENTACIÓN EJECUTIVA </span>
        </div>
        <h1 style={{ color: C.white, fontSize: 'clamp(26px,4vw,440px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 40, maxWidth: 600 }}>
          Implementación ERP y RRHH en la Nube para SINART
        </h1>
        <p style={{ color: C.accent, fontSize: 15, marginBottom: 100, lineHeight: 1.6, maxWidth: 600 }}>
          Arrendamiento Operativo SaaS · Microsoft Azure · Contratación Pública SICOP
        </p>
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          {['Josué Montero', 'Pablo Alvarado', 'Erick Torres', 'Kristel Duarte', 'Siandi Araya'].map(n => (
            <div key={n} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 14px', color: C.white, fontSize: 12 }}>{n}</div>
          ))}
        </div>
      </div>
      <div style={{ width: 260, background: 'rgba(0,0,0,0.18)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 28, padding: 36 }}>
        {[
          { icon: <DollarSign size={20} color={C.accent} />, v: '$150,000', l: 'Presupuesto USD' },
          { icon: <Cloud size={20} color={C.accent} />, v: '108 días', l: '1 Jun – 28 Oct 2026' },
          { icon: <Users size={20} color={C.accent} />, v: 'Go-Live', l: '2 Sep 2026' },
          { icon: <Shield size={20} color={C.accent} />, v: '99.97%', l: 'SLA Azure garantizado' },
        ].map(s => (
          <div key={s.l} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>{s.icon}</div>
            <div style={{ color: C.white, fontSize: 19, fontWeight: 800 }}>{s.v}</div>
            <div style={{ color: 'rgba(167,215,197,0.65)', fontSize: 11, marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
