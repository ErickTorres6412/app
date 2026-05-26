import { AlertTriangle, Shield } from 'lucide-react'
import { C } from './constants'
import { Label, RiskRow } from './shared'

export function SlideRiesgos() {
  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>Riesgos clave</Label>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
        <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800 }}>Top riesgos del proyecto</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ padding: '4px 12px', borderRadius: 5, background: '#8B0000', color: '#fff', fontSize: 11, fontWeight: 700 }}>EXTREMO ≥ 48</span>
          <span style={{ padding: '4px 12px', borderRadius: 5, background: C.danger,  color: '#fff', fontSize: 11, fontWeight: 700 }}>ALTO 13–32</span>
        </div>
      </div>

      <div style={{ background: C.white, borderRadius: 12, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', overflow: 'hidden', marginBottom: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '52px 1fr 90px 1fr', background: C.primary, padding: '10px 18px', gap: 0 }}>
          {['ID', 'Descripción', 'Nivel', 'Mitigación clave'].map(h => (
            <div key={h} style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: 1 }}>{h}</div>
          ))}
        </div>
        <RiskRow id="R2.2"  desc="Incumplimiento del plazo final 28/Oct/2026 — penalizaciones contractuales"      level="EXTREMO" score={48} mitigation="Monitoreo permanente ruta crítica · plan de recuperación acelerada con recursos adicionales" />
        <RiskRow id="R5.2"  desc="Resistencia al cambio del personal del SINART ante el nuevo sistema"           level="ALTO"    score={32} mitigation="Plan gestión del cambio desde el inicio · talleres · campeones por área" />
        <RiskRow id="R6.2"  desc="Incumplimiento SLA 99.97% de disponibilidad del sistema en Azure"              level="ALTO"    score={32} mitigation="SLA con penalizaciones contractuales · DRP probado · monitoreo continuo" />
        <RiskRow id="R6.3"  desc="Vulnerabilidades de seguridad o brechas de datos en la plataforma ERP"         level="ALTO"    score={32} mitigation="ISO 27001 · backups diarios · protocolo de respuesta a incidentes 24/7" />
        <RiskRow id="R1.1"  desc="Requerimientos funcionales incompletos o ambiguos — re-trabajos"               level="ALTO"    score={32} mitigation="Talleres con stakeholders clave · aprobación formal del alcance antes de iniciar" />
        <RiskRow id="R10.1" desc="Incumplimiento normativa CGR/STAP en módulo de presupuesto"                    level="ALTO"    score={32} mitigation="Revisión con expertos CGR antes de implementar · pruebas de cumplimiento previo Go-Live" />
      </div>

      <div style={{ display: 'flex', gap: 14 }}>
        <div style={{ flex: 1, padding: '10px 16px', background: C.white, borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Shield size={15} color={C.primary} />
          <span style={{ fontSize: 12, color: C.text }}><strong>23 riesgos</strong> identificados · CCB: Josué Montero + Erick Torres + Jefaturas SINART</span>
        </div>
        <div style={{ flex: 1, padding: '10px 16px', background: C.white, borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <AlertTriangle size={15} color={C.warning} />
          <span style={{ fontSize: 12, color: C.text }}>Alertas en <strong>≤ 4 horas</strong> · revisión <strong>semanal</strong> de la ruta crítica vía MS Teams + SICOP</span>
        </div>
      </div>
    </div>
  )
}
