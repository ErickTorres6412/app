'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  AlertTriangle, BarChart2, CheckCircle,
  ChevronLeft, ChevronRight, Cloud, DollarSign,
  Shield, TrendingUp, Users, Activity,
  Layers, Database, Lock, FileText,
} from 'lucide-react'

const C = {
  primary:   '#1F5E4A',
  secondary: '#5F8D7A',
  white:     '#FFFFFF',
  bgAlt:     '#F0F5F3',
  text:      '#1F2933',
  accent:    '#A7D7C5',
  danger:    '#C0392B',
  warning:   '#D68910',
  success:   '#1E8449',
  light:     '#D4EDE5',
  muted:     '#637074',
}

// ─── Shared ───────────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: C.secondary, fontSize: 11, letterSpacing: 2.5, fontWeight: 700, marginBottom: 10, textTransform: 'uppercase' }}>
      {children}
    </div>
  )
}

function HBar({ label, pct, color, note }: { label: string; pct: number; color: string; note: string }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 13, color: C.text, fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 12, color, fontWeight: 700 }}>{note}</span>
      </div>
      <div style={{ background: C.light, borderRadius: 4, height: 8 }}>
        <div style={{ background: color, width: `${pct}%`, height: 8, borderRadius: 4 }} />
      </div>
    </div>
  )
}

function RiskRow({ id, desc, level, score, mitigation }: {
  id: string; desc: string; level: 'EXTREMO' | 'ALTO'; score: number; mitigation: string
}) {
  const color = level === 'EXTREMO' ? '#8B0000' : C.danger
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '52px 1fr 90px 1fr', gap: 0, padding: '10px 18px', borderBottom: `1px solid ${C.light}`, alignItems: 'start' }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: C.primary }}>{id}</span>
      <span style={{ fontSize: 12, color: C.text, paddingRight: 12 }}>{desc}</span>
      <span style={{ background: color, color: '#fff', fontSize: 10, fontWeight: 700, borderRadius: 4, padding: '2px 8px', letterSpacing: 1, width: 'fit-content' }}>
        {level} {score}
      </span>
      <span style={{ fontSize: 11, color: C.muted, paddingLeft: 8 }}>{mitigation}</span>
    </div>
  )
}

// ─── 1. Portada ───────────────────────────────────────────────────────────────

function SlidePortada() {
  return (
    <div style={{ background: C.primary, height: '100%', display: 'flex' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 72px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(167,215,197,0.15)', border: '1px solid rgba(167,215,197,0.3)', borderRadius: 6, padding: '6px 14px', marginBottom: 32, width: 'fit-content' }}>
          <FileText size={12} color={C.accent} />
          <span style={{ color: C.accent, fontSize: 11, letterSpacing: 2, fontWeight: 700 }}>PRESENTACIÓN EJECUTIVA · EIF 500</span>
        </div>
        <h1 style={{ color: C.white, fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16, maxWidth: 600 }}>
          Implementación ERP y RRHH en la Nube para el SINART
        </h1>
        <p style={{ color: C.accent, fontSize: 15, marginBottom: 12, lineHeight: 1.6, maxWidth: 500 }}>
          Arrendamiento Operativo SaaS · Microsoft Azure · Contratación Pública SICOP
        </p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 48 }}>
          MSc. Walter Díaz Argueta · Universidad Nacional de Costa Rica · I Ciclo 2026
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
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

// ─── 2. Justificación ─────────────────────────────────────────────────────────

function SlideJustificacion() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Problema */}
      <div style={{ background: C.primary, width: '42%', padding: '52px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Label>Problema</Label>
        <h2 style={{ color: C.white, fontSize: 26, fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
          El SINART opera sin sistemas de gestión integrados
        </h2>
        <p style={{ color: C.accent, fontSize: 13, lineHeight: 1.7, marginBottom: 28 }}>
          Finanzas, compras, RRHH y planillas corren en silos desconectados. Sin trazabilidad, sin visibilidad de costos reales, con riesgo de sanción de la CGR y la CCSS.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { icon: <Layers size={14} color={C.accent} />, t: 'Procesos fragmentados sin integración' },
            { icon: <Database size={14} color={C.accent} />, t: 'Registros en Excel y papel — sin auditoría' },
            { icon: <AlertTriangle size={14} color={C.accent} />, t: 'Exposición a sanciones CGR y CCSS' },
            { icon: <BarChart2 size={14} color={C.accent} />, t: 'Dirección sin costos operativos reales' },
          ].map(p => (
            <div key={p.t} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 14px', background: 'rgba(255,255,255,0.08)', borderRadius: 7 }}>
              {p.icon}
              <span style={{ color: C.white, fontSize: 12 }}>{p.t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Solución */}
      <div style={{ flex: 1, padding: '52px 44px', background: C.bgAlt, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Label>Solución</Label>
        <h2 style={{ color: C.primary, fontSize: 26, fontWeight: 800, marginBottom: 8 }}>ERP + RRHH integrado en la nube</h2>
        <p style={{ color: C.muted, fontSize: 13, marginBottom: 24, lineHeight: 1.5 }}>
          Plataforma SaaS sobre Microsoft Azure bajo arrendamiento operativo — sin infraestructura física, con SLA contractual.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          {[
            { icon: <DollarSign size={16} color={C.primary} />, title: 'Módulos Financieros', items: ['Contabilidad · Compras · Inventario · Activos Fijos'] },
            { icon: <Users size={16} color={C.primary} />, title: 'Módulos RRHH', items: ['Expedientes · Planillas CCSS/INS/Renta · Evaluaciones'] },
            { icon: <Cloud size={16} color={C.secondary} />, title: 'Azure Cloud', items: ['99.97% disponibilidad · Backups · Redundancia geográfica'] },
            { icon: <Lock size={16} color={C.secondary} />, title: 'Seguridad PBAC', items: ['Roles por área · ISO 27001 · SOC 2 · Ley 8968 CR'] },
          ].map(m => (
            <div key={m.title} style={{ background: C.white, borderRadius: 10, padding: '14px 16px', borderLeft: `3px solid ${C.primary}`, boxShadow: '0 1px 5px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
                {m.icon}
                <span style={{ fontWeight: 700, color: C.text, fontSize: 12 }}>{m.title}</span>
              </div>
              <div style={{ fontSize: 11, color: C.muted }}>{m.items[0]}</div>
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
    </div>
  )
}

// ─── 3. Inversión ─────────────────────────────────────────────────────────────

function SlideInversion() {
  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>Inversión requerida</Label>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
        <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800 }}>Estructura financiera del proyecto</h2>
        <div style={{ background: C.primary, color: C.white, borderRadius: 8, padding: '8px 18px', fontSize: 13, fontWeight: 700 }}>
          Techo contractual: $150,000 USD
        </div>
      </div>

      {/* 3 stat cards */}
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

      {/* Desglose lado a lado */}
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

// ─── 4. Beneficios ────────────────────────────────────────────────────────────

function SlideBeneficios() {
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

      {/* KPI strip */}
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

// ─── 5. Riesgos ───────────────────────────────────────────────────────────────

function SlideRiesgos() {
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
        <RiskRow id="R2.2" desc="Incumplimiento del plazo final 28/Oct/2026 — penalizaciones contractuales" level="EXTREMO" score={48} mitigation="Monitoreo permanente ruta crítica · plan de recuperación acelerada con recursos adicionales" />
        <RiskRow id="R5.2" desc="Resistencia al cambio del personal del SINART ante el nuevo sistema" level="ALTO"    score={32} mitigation="Plan gestión del cambio desde el inicio · talleres · campeones por área" />
        <RiskRow id="R6.2" desc="Incumplimiento SLA 99.97% de disponibilidad del sistema en Azure" level="ALTO"    score={32} mitigation="SLA con penalizaciones contractuales · DRP probado · monitoreo continuo" />
        <RiskRow id="R6.3" desc="Vulnerabilidades de seguridad o brechas de datos en la plataforma ERP" level="ALTO" score={32} mitigation="ISO 27001 · backups diarios · protocolo de respuesta a incidentes 24/7" />
        <RiskRow id="R1.1" desc="Requerimientos funcionales incompletos o ambiguos — re-trabajos" level="ALTO"    score={32} mitigation="Talleres con stakeholders clave · aprobación formal del alcance antes de iniciar" />
        <RiskRow id="R10.1" desc="Incumplimiento normativa CGR/STAP en módulo de presupuesto" level="ALTO"   score={32} mitigation="Revisión con expertos CGR antes de implementar · pruebas de cumplimiento previo Go-Live" />
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

// ─── 6. Cierre / Q&A ─────────────────────────────────────────────────────────

function SlideQA() {
  return (
    <div style={{ background: C.primary, height: '100%', display: 'flex' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 72px' }}>
        <Label>Solicitud de aprobación</Label>
        <h2 style={{ color: C.white, fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 24 }}>
          Requerimos la aprobación formal de la Junta Directiva
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          {[
            { l: 'Monto',           v: '$150,000 USD — CAPEX $128,160 + OPEX $21,840' },
            { l: 'Plazo',           v: '108 días · 1 Jun 2026 → 28 Oct 2026' },
            { l: 'Go-Live',         v: '2 de Setiembre de 2026' },
            { l: 'Control',         v: 'SICOP · auditable · plazo inamovible' },
            { l: 'Director',        v: 'Josué Montero Villalobos' },
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

// ─── Registry ─────────────────────────────────────────────────────────────────

const SLIDES = [
  { id: 'portada',     label: 'Portada',        component: SlidePortada },
  { id: 'justif',      label: 'Justificación',  component: SlideJustificacion },
  { id: 'inversion',   label: 'Inversión',      component: SlideInversion },
  { id: 'beneficios',  label: 'Beneficios',     component: SlideBeneficios },
  { id: 'riesgos',     label: 'Riesgos',        component: SlideRiesgos },
  { id: 'qa',          label: 'Cierre',         component: SlideQA },
]

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState<'fwd' | 'bck'>('fwd')
  const touchX = useRef<number | null>(null)

  const go = useCallback((next: number) => {
    if (next < 0 || next >= SLIDES.length) return
    setDir(next > idx ? 'fwd' : 'bck')
    setIdx(next)
  }, [idx])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(idx + 1) }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [idx, go])

  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return
    const dx = touchX.current - e.changedTouches[0].clientX
    if (Math.abs(dx) > 50) go(idx + (dx > 0 ? 1 : -1))
    touchX.current = null
  }

  const Slide = SLIDES[idx].component
  const pct = ((idx + 1) / SLIDES.length) * 100

  return (
    <div
      style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', background: C.text }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        key={`${idx}-${dir}`}
        className={`slide-${dir}`}
        style={{ flex: 1, overflow: 'hidden' }}
        onClick={() => go(idx + 1)}
      >
        <Slide />
      </div>

      <div style={{ background: '#111820', padding: '0 20px', height: 44, display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.08)' }}>
          <div style={{ height: 2, background: C.accent, width: `${pct}%`, transition: 'width 0.3s ease' }} />
        </div>

        <button onClick={e => { e.stopPropagation(); go(idx - 1) }} disabled={idx === 0}
          style={{ background: 'none', border: 'none', cursor: idx === 0 ? 'default' : 'pointer', color: idx === 0 ? 'rgba(255,255,255,0.2)' : C.accent, padding: 4, display: 'flex' }}>
          <ChevronLeft size={18} />
        </button>

        <div style={{ display: 'flex', gap: 6, flex: 1, justifyContent: 'center' }}>
          {SLIDES.map((s, i) => (
            <button key={s.id} onClick={e => { e.stopPropagation(); go(i) }} title={s.label}
              style={{ background: i === idx ? C.accent : 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 3, cursor: 'pointer', width: i === idx ? 22 : 8, height: 8, transition: 'all 0.22s ease', padding: 0, flexShrink: 0 }} />
          ))}
        </div>

        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, flexShrink: 0 }}>
          {SLIDES[idx].label} · {idx + 1} / {SLIDES.length}
        </span>

        <button onClick={e => { e.stopPropagation(); go(idx + 1) }} disabled={idx === SLIDES.length - 1}
          style={{ background: 'none', border: 'none', cursor: idx === SLIDES.length - 1 ? 'default' : 'pointer', color: idx === SLIDES.length - 1 ? 'rgba(255,255,255,0.2)' : C.accent, padding: 4, display: 'flex' }}>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
