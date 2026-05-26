import { C } from './constants'
import { Label } from './shared'

export function SlideQA() {
  return (
    <div style={{ background: C.primary, height: '100%', display: 'flex' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 72px' }}>
        <Label>Solicitud de aprobación</Label>
        <h2 style={{ color: C.white, fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 24 }}>
          Requerimos la aprobación formal de la Junta Directiva
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          {[
            { l: 'Monto',    v: '$150,000 USD — CAPEX $128,160 + OPEX $21,840' },
            { l: 'Plazo',    v: '108 días · 1 Jun 2026 → 28 Oct 2026' },
            { l: 'Go-Live',  v: '2 de Setiembre de 2026' },
            { l: 'Control',  v: 'SICOP · auditable · plazo inamovible' },
            { l: 'Director', v: 'Josué Montero Villalobos' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', gap: 0, alignItems: 'center' }}>
              <span style={{ color: C.accent, fontSize: 12, fontWeight: 700, width: 90, flexShrink: 0 }}>{r.l}</span>
              <span style={{ color: C.white, fontSize: 13 }}>{r.v}</span>
            </div>
          ))}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
          EIF 500 · Universidad Nacional de Costa Rica · I Ciclo 2026
        </div>
      </div>

      <div style={{ width: 320, background: 'rgba(0,0,0,0.18)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '52px 36px', gap: 12 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 6 }}>PREGUNTAS</div>
        {[
          { q: '¿Por qué Azure?', a: 'Compatibilidad institucional, SLA 99.97% y certificaciones ISO 27001 / SOC 2.' },
          { q: '¿Cómo se controla el gasto?', a: 'Control 100% vía SICOP con línea base CAPEX/OPEX auditada mensualmente.' },
          { q: '¿Si el proveedor falla?', a: 'Cláusula de escrow de datos, garantía de cumplimiento y plan de rescisión activo.' },
        ].map(item => (
          <div key={item.q} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(167,215,197,0.15)', borderRadius: 9, padding: '14px 16px' }}>
            <div style={{ color: C.white, fontWeight: 700, fontSize: 12, marginBottom: 5 }}>{item.q}</div>
            <div style={{ color: 'rgba(167,215,197,0.8)', fontSize: 11, lineHeight: 1.5 }}>{item.a}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
