import { C } from './constants'
import { HBar, Label } from './shared'

export function SlideInversion() {
  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>Inversión requerida</Label>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
        <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800 }}>Estructura financiera del proyecto</h2>
        <div style={{ background: C.primary, color: C.white, borderRadius: 8, padding: '8px 18px', fontSize: 13, fontWeight: 700 }}>
          Techo contractual: $150,000 USD
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 24 }}>
        <div style={{ background: C.primary, borderRadius: 12, padding: '24px 28px', color: C.white }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>INVERSIÓN TOTAL</div>
          <div style={{ fontSize: 40, fontWeight: 900 }}>$150,000</div>
          <div style={{ color: 'rgba(167,215,197,0.7)', fontSize: 12, marginTop: 4 }}>CAPEX + OPEX · 2 años</div>
        </div>
        <div style={{ background: C.white, borderRadius: 12, padding: '24px 28px', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>
          <div style={{ color: C.warning, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>CAPEX — Implementación</div>
          <div style={{ fontSize: 36, fontWeight: 900, color: C.text }}>$128,160</div>
          <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>85.44% del total · 2,864 horas</div>
        </div>
        <div style={{ background: C.white, borderRadius: 12, padding: '24px 28px', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>
          <div style={{ color: C.secondary, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>OPEX — Arrendamiento SaaS</div>
          <div style={{ fontSize: 36, fontWeight: 900, color: C.text }}>$21,840</div>
          <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>$910/mes × 24 meses · 14.56%</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ background: C.white, borderRadius: 12, padding: 22, boxShadow: '0 1px 6px rgba(0,0,0,0.07)' }}>
          <div style={{ fontWeight: 700, color: C.text, marginBottom: 16, fontSize: 13 }}>CAPEX por fase WBS</div>
          <HBar label="1.5 Gestión del Cambio y Capacitación" pct={50} color={C.primary}   note="$63,800" />
          <HBar label="1.3 Parametrización ERP y RRHH"        pct={22} color={C.secondary} note="$28,320" />
          <HBar label="1.4 Migración de Datos y Pruebas"      pct={15} color={C.warning}   note="$18,760" />
          <HBar label="1.2 Infraestructura Cloud Azure"        pct={9}  color={C.accent}    note="$11,080" />
          <HBar label="1.1 Gobernanza del Proyecto"            pct={5}  color={C.muted}     note="$6,200" />
        </div>
        <div style={{ background: C.white, borderRadius: 12, padding: 22, boxShadow: '0 1px 6px rgba(0,0,0,0.07)' }}>
          <div style={{ fontWeight: 700, color: C.text, marginBottom: 16, fontSize: 13 }}>OPEX mensual — $910/mes</div>
          <HBar label="Licencia SaaS ERP (módulos financieros)"    pct={50} color={C.primary}   note="$455/mes" />
          <HBar label="Licencia SaaS RRHH (planillas y talento)"   pct={27} color={C.secondary} note="$250/mes" />
          <HBar label="Infraestructura Azure (99.97% SLA)"         pct={15} color={C.warning}   note="$135/mes" />
          <HBar label="Soporte Técnico 24/7 (SLA contractual)"     pct={8}  color={C.muted}     note="$70/mes" />
          <div style={{ marginTop: 14, padding: '8px 12px', background: C.light, borderRadius: 6, fontSize: 12, color: C.primary, fontWeight: 600 }}>
            OPEX inicia Go-Live 2/Sep/2026 · vigencia 24 meses
          </div>
        </div>
      </div>
    </div>
  )
}
