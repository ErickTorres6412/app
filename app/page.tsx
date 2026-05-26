'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  AlertTriangle, BarChart2, BookOpen, Calendar, CheckCircle,
  ChevronLeft, ChevronRight, Cloud, DollarSign, FileText,
  Layers, Settings, Shield, TrendingUp, Users, Clock,
  Target, Activity, Database, Lock, Zap, Award, Server,
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

// ─── Shared UI ────────────────────────────────────────────────────────────────

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

function StatCard({ label, value, sub, color = C.primary }: { label: string; value: string; sub: string; color?: string }) {
  return (
    <div style={{ background: C.white, borderRadius: 10, padding: '20px 22px', boxShadow: '0 1px 6px rgba(0,0,0,0.08)', borderTop: `3px solid ${color}` }}>
      <div style={{ fontSize: 28, fontWeight: 900, color }}>{value}</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginTop: 4 }}>{label}</div>
      <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{sub}</div>
    </div>
  )
}

function RiskBadge({ level }: { level: 'EXTREMO' | 'ALTO' | 'MODERADO' | 'BAJO' }) {
  const map = {
    EXTREMO: '#8B0000',
    ALTO:    C.danger,
    MODERADO: C.warning,
    BAJO:    C.success,
  }
  return (
    <span style={{ background: map[level], color: '#fff', fontSize: 10, fontWeight: 700, borderRadius: 4, padding: '2px 8px', letterSpacing: 1 }}>
      {level}
    </span>
  )
}

function MilestoneRow({ id, label, date, done }: { id: string; label: string; date: string; done?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: `1px solid ${C.light}` }}>
      <div style={{ width: 20, height: 20, borderRadius: '50%', background: done ? C.primary : C.light, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {done && <CheckCircle size={12} color={C.white} />}
      </div>
      <span style={{ fontSize: 11, fontWeight: 700, color: C.secondary, width: 40, flexShrink: 0 }}>{id}</span>
      <span style={{ fontSize: 13, color: C.text, flex: 1 }}>{label}</span>
      <span style={{ fontSize: 12, fontWeight: 600, color: C.primary, flexShrink: 0 }}>{date}</span>
    </div>
  )
}

function PhaseGantt({ phase, pct, offset, color, cost, days }: {
  phase: string; pct: number; offset: number; color: string; cost: string; days: string
}) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{phase}</span>
        <div style={{ display: 'flex', gap: 16 }}>
          <span style={{ fontSize: 11, color: C.muted }}>{days}</span>
          <span style={{ fontSize: 11, color, fontWeight: 700 }}>{cost}</span>
        </div>
      </div>
      <div style={{ background: C.light, borderRadius: 4, height: 12, position: 'relative' }}>
        <div style={{ position: 'absolute', left: `${offset}%`, width: `${pct}%`, height: 12, borderRadius: 4, background: color }} />
      </div>
    </div>
  )
}

// ─── Slides ───────────────────────────────────────────────────────────────────

function SlidePortada() {
  return (
    <div style={{ background: C.primary, height: '100%', display: 'flex' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 72px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(167,215,197,0.15)', border: '1px solid rgba(167,215,197,0.3)', borderRadius: 6, padding: '6px 14px', marginBottom: 32, width: 'fit-content' }}>
          <BookOpen size={12} color={C.accent} />
          <span style={{ color: C.accent, fontSize: 11, letterSpacing: 2, fontWeight: 700 }}>EIF 500 · ADMINISTRACIÓN DE PROYECTOS</span>
        </div>
        <h1 style={{ color: C.white, fontSize: 'clamp(26px,4vw,46px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16, maxWidth: 620 }}>
          Contratación para la Implementación y Alquiler de Software ERP y RRHH en la Nube
        </h1>
        <p style={{ color: C.accent, fontSize: 16, marginBottom: 12, lineHeight: 1.6, maxWidth: 520 }}>
          Arrendamiento Operativo bajo modalidad SaaS sobre Microsoft Azure para el SINART
        </p>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginBottom: 48 }}>
          MSc. Walter Díaz Argueta · I Ciclo 2026
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[
            { name: 'Josué Montero', role: 'Director' },
            { name: 'Pablo Alvarado', role: 'Cloud' },
            { name: 'Erick Torres', role: 'Costos' },
            { name: 'Kristel Duarte', role: 'Cambio' },
            { name: 'Siandi Araya', role: 'Analista' },
          ].map(m => (
            <div key={m.name} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '7px 14px' }}>
              <div style={{ color: C.white, fontSize: 12, fontWeight: 600 }}>{m.name}</div>
              <div style={{ color: C.accent, fontSize: 10 }}>{m.role}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: 280, background: 'rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, padding: 32 }}>
        {[
          { icon: <DollarSign size={22} color={C.accent} />, v: '$150,000', l: 'Presupuesto USD' },
          { icon: <Calendar size={22} color={C.accent} />, v: '108 días', l: 'Jun–Oct 2026' },
          { icon: <Users size={22} color={C.accent} />, v: '9 recursos', l: '5 consult. + 4 téc.' },
          { icon: <Cloud size={22} color={C.accent} />, v: '99.97%', l: 'SLA Azure' },
        ].map(s => (
          <div key={s.l} style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 6 }}>{s.icon}</div>
            <div style={{ color: C.white, fontSize: 20, fontWeight: 800 }}>{s.v}</div>
            <div style={{ color: 'rgba(167,215,197,0.7)', fontSize: 11 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SlideAgenda() {
  const items = [
    { icon: <AlertTriangle size={20} color={C.danger} />, n: '01', title: 'Justificación', desc: 'El problema del SINART y por qué actuar ahora', color: C.danger },
    { icon: <Cloud size={20} color={C.primary} />, n: '02', title: 'La Solución', desc: 'ERP + RRHH en la nube Azure — enfoque híbrido', color: C.primary },
    { icon: <DollarSign size={20} color={C.warning} />, n: '03', title: 'Inversión', desc: 'Estructura CAPEX/OPEX · $150,000 USD · 2 años', color: C.warning },
    { icon: <Calendar size={20} color={C.secondary} />, n: '04', title: 'Cronograma', desc: '108 días · 5 hitos · Go-Live 2/Sep/2026', color: C.secondary },
    { icon: <TrendingUp size={20} color={C.success} />, n: '05', title: 'Beneficios', desc: 'Operacionales, financieros y normativos', color: C.success },
    { icon: <Shield size={20} color={C.muted} />, n: '06', title: 'Riesgos', desc: '23 riesgos identificados · top críticos', color: C.muted },
  ]
  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>Agenda</Label>
      <h2 style={{ color: C.primary, fontSize: 32, fontWeight: 800, marginBottom: 32 }}>Estructura de la presentación</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
        {items.map(it => (
          <div key={it.n} style={{ background: C.white, borderRadius: 10, padding: '18px 20px', borderLeft: `4px solid ${it.color}`, boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              {it.icon}
              <span style={{ fontSize: 22, fontWeight: 900, color: it.color, opacity: 0.3 }}>{it.n}</span>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 4 }}>{it.title}</div>
            <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.4 }}>{it.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, display: 'flex', gap: 24, padding: '12px 20px', background: C.light, borderRadius: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Clock size={14} color={C.primary} />
          <span style={{ fontSize: 13, color: C.primary, fontWeight: 600 }}>20 min exposición</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Users size={14} color={C.primary} />
          <span style={{ fontSize: 13, color: C.primary, fontWeight: 600 }}>5 min preguntas</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Award size={14} color={C.primary} />
          <span style={{ fontSize: 13, color: C.primary, fontWeight: 600 }}>Simulación Junta Directiva SINART</span>
        </div>
      </div>
    </div>
  )
}

function SlideJustificacion() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ background: C.primary, width: '40%', padding: '52px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Label>01 — Justificación</Label>
        <h2 style={{ color: C.white, fontSize: 28, fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
          El SINART opera con gestión fragmentada y sin visibilidad en tiempo real
        </h2>
        <p style={{ color: C.accent, fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
          La institución carece de un sistema integrado para gestionar sus procesos financieros, administrativos y de recursos humanos. Cada área opera en silos, con herramientas inconexas y datos no auditables.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '16px 20px' }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>OBJETIVO DEL PROYECTO</div>
          <p style={{ color: C.white, fontSize: 13, lineHeight: 1.6, margin: 0 }}>
            Centralizar la gestión financiera, administrativa y de planillas mediante una plataforma SaaS integrada, permitiendo visualizar en tiempo real los costos operativos y optimizar recursos públicos.
          </p>
        </div>
      </div>
      <div style={{ flex: 1, padding: '52px 44px', background: C.bgAlt, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 18 }}>Problemas identificados en el SINART</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {[
            { icon: <Layers size={18} color={C.danger} />, title: 'Procesos fragmentados', desc: 'Finanzas, compras, RRHH y planillas operan en sistemas desconectados sin integración.' },
            { icon: <Database size={18} color={C.danger} />, title: 'Sin trazabilidad de datos', desc: 'Registros en Excel y papel. Imposible auditar o rastrear cambios históricos.' },
            { icon: <FileText size={18} color={C.warning} />, title: 'Riesgo de Contraloría', desc: 'Exposición a sanciones de la CGR y la CCSS por falta de pistas de auditoría digital.' },
            { icon: <BarChart2 size={18} color={C.warning} />, title: 'Decisiones sin información', desc: 'La Dirección Ejecutiva no tiene acceso a costos operativos reales en tiempo real.' },
          ].map(p => (
            <div key={p.title} style={{ background: C.white, borderRadius: 10, padding: 18, boxShadow: '0 1px 6px rgba(0,0,0,0.07)' }}>
              <div style={{ marginBottom: 8 }}>{p.icon}</div>
              <div style={{ fontWeight: 700, color: C.text, fontSize: 13, marginBottom: 5 }}>{p.title}</div>
              <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5 }}>{p.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, padding: '10px 16px', background: '#FEF9E7', borderRadius: 8, border: `1px solid ${C.warning}`, display: 'flex', alignItems: 'center', gap: 10 }}>
          <AlertTriangle size={16} color={C.warning} />
          <span style={{ fontSize: 12, color: C.text }}>
            <strong>Criterio de éxito primario:</strong> Aprobación y firma del 100% de los casos de prueba UAT por las Jefaturas Fiscalizadoras del SINART.
          </span>
        </div>
      </div>
    </div>
  )
}

function SlideSolucion() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flex: 1, padding: '52px 44px', background: C.bgAlt }}>
        <Label>02 — La Solución</Label>
        <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800, marginBottom: 8 }}>ERP + RRHH integrado en la nube</h2>
        <p style={{ color: C.muted, fontSize: 13, marginBottom: 24, lineHeight: 1.5 }}>
          Plataforma SaaS sobre Microsoft Azure bajo arrendamiento operativo — sin inversión en infraestructura física.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {[
            { icon: <DollarSign size={16} color={C.primary} />, name: 'Módulos Financieros', items: ['Contabilidad General', 'Control Presupuestario', 'Compras e Inventario', 'Activos Fijos'] },
            { icon: <Users size={16} color={C.primary} />, name: 'Módulos RRHH y Planillas', items: ['Expedientes de empleados', 'Cálculo CCSS/INS/Renta', 'Evaluación de desempeño', 'Control de vacaciones'] },
            { icon: <Server size={16} color={C.secondary} />, name: 'Infraestructura Azure', items: ['Servidores virtuales y BD', 'Redundancia geográfica', 'Backups automáticos diarios', 'Firewall y encriptación'] },
            { icon: <Lock size={16} color={C.secondary} />, name: 'Seguridad PBAC', items: ['Roles y perfiles por área', 'Acceso solo a datos propios', 'ISO 27001 / SOC 2', 'Monitoreo continuo 24/7'] },
          ].map(m => (
            <div key={m.name} style={{ background: C.white, borderRadius: 10, padding: '16px 18px', borderTop: `3px solid ${C.primary}`, boxShadow: '0 1px 6px rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                {m.icon}
                <span style={{ fontWeight: 700, color: C.text, fontSize: 13 }}>{m.name}</span>
              </div>
              {m.items.map(it => (
                <div key={it} style={{ fontSize: 11, color: C.muted, padding: '3px 0', display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: C.secondary, flexShrink: 0, display: 'block' }} />
                  {it}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: C.primary, width: '34%', padding: '52px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <Cloud size={28} color={C.accent} />
          <span style={{ color: C.white, fontSize: 20, fontWeight: 800 }}>Microsoft Azure</span>
        </div>
        <p style={{ color: C.accent, fontSize: 13, lineHeight: 1.7, marginBottom: 28 }}>
          Seleccionado estratégicamente por su compatibilidad con el entorno institucional del SINART, presencia regional y respaldo normativo en Costa Rica.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { icon: <CheckCircle size={14} color={C.accent} />, t: 'ISO 27001 certificado' },
            { icon: <CheckCircle size={14} color={C.accent} />, t: 'SOC 2 Type II' },
            { icon: <CheckCircle size={14} color={C.accent} />, t: 'Ley 8968 CR (datos personales)' },
            { icon: <CheckCircle size={14} color={C.accent} />, t: '99.97% disponibilidad mensual' },
            { icon: <CheckCircle size={14} color={C.accent} />, t: 'Soporte técnico 24/7/365' },
          ].map(b => (
            <div key={b.t} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', background: 'rgba(255,255,255,0.08)', borderRadius: 7 }}>
              {b.icon}
              <span style={{ color: C.white, fontSize: 12 }}>{b.t}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, padding: '12px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: 8 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>ENFOQUE HÍBRIDO</div>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
            Predictivo en gobernanza y SICOP · Adaptativo en parametrización y pruebas
          </p>
        </div>
      </div>
    </div>
  )
}

function SlideInversion() {
  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>03 — Inversión requerida</Label>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
        <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800 }}>Estructura financiera del proyecto</h2>
        <div style={{ background: C.primary, color: C.white, borderRadius: 8, padding: '8px 20px', fontSize: 13, fontWeight: 700 }}>Techo contractual: $150,000 USD</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 22 }}>
        <div style={{ background: C.primary, borderRadius: 12, padding: '24px 28px', color: C.white }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <DollarSign size={18} color={C.accent} />
            <span style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>INVERSIÓN TOTAL</span>
          </div>
          <div style={{ fontSize: 40, fontWeight: 900 }}>$150,000</div>
          <div style={{ color: 'rgba(167,215,197,0.7)', fontSize: 12, marginTop: 4 }}>CAPEX + OPEX 24 meses</div>
        </div>
        <div style={{ background: C.white, borderRadius: 12, padding: '24px 28px', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Zap size={16} color={C.warning} />
            <span style={{ color: C.warning, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>CAPEX</span>
          </div>
          <div style={{ fontSize: 34, fontWeight: 900, color: C.text }}>$128,160</div>
          <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>Implementación · 85.44% · 2,864h</div>
        </div>
        <div style={{ background: C.white, borderRadius: 12, padding: '24px 28px', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Activity size={16} color={C.secondary} />
            <span style={{ color: C.secondary, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>OPEX</span>
          </div>
          <div style={{ fontSize: 34, fontWeight: 900, color: C.text }}>$21,840</div>
          <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>$910/mes × 24 meses · 14.56%</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ background: C.white, borderRadius: 12, padding: 22, boxShadow: '0 1px 6px rgba(0,0,0,0.07)' }}>
          <div style={{ fontWeight: 700, color: C.text, marginBottom: 16, fontSize: 13 }}>Desglose CAPEX por Fase WBS</div>
          <HBar label="1.5 Gestión del Cambio y Capacitación" pct={50} color={C.primary}   note="$63,800 · 1,340h" />
          <HBar label="1.3 Parametrización ERP"                pct={22} color={C.secondary} note="$28,320 · 672h" />
          <HBar label="1.4 Migración y Pruebas"                pct={15} color={C.warning}   note="$18,760 · 436h" />
          <HBar label="1.2 Infraestructura Azure"              pct={9}  color={C.accent}    note="$11,080 · 292h" />
          <HBar label="1.1 Gestión y Gobernanza"               pct={5}  color={C.muted}     note="$6,200 · 124h" />
        </div>
        <div style={{ background: C.white, borderRadius: 12, padding: 22, boxShadow: '0 1px 6px rgba(0,0,0,0.07)' }}>
          <div style={{ fontWeight: 700, color: C.text, marginBottom: 16, fontSize: 13 }}>Componentes OPEX mensual ($910/mes)</div>
          <HBar label="Licencia SaaS ERP (módulos financieros)"      pct={50} color={C.primary}   note="$455/mes" />
          <HBar label="Licencia SaaS RRHH (planillas y talento)"     pct={27} color={C.secondary} note="$250/mes" />
          <HBar label="Infraestructura Azure (99.97% disponibilidad)" pct={15} color={C.warning}   note="$135/mes" />
          <HBar label="Soporte Técnico 24/7 (SLA contractual)"        pct={8}  color={C.muted}     note="$70/mes" />
          <div style={{ marginTop: 14, padding: '8px 14px', background: C.light, borderRadius: 6, fontSize: 12, color: C.primary, fontWeight: 600 }}>
            OPEX inicia el 02/Sep/2026 · Vigencia 24 meses contractuales
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideCronograma() {
  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>04 — Cronograma</Label>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 26 }}>
        <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800 }}>108 días calendarios · 1 Jun → 28 Oct 2026</h2>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ background: C.primary, color: C.white, borderRadius: 8, padding: '7px 16px', fontSize: 12, fontWeight: 700 }}>Go-Live: 2/Sep/2026</div>
          <div style={{ background: C.success, color: C.white, borderRadius: 8, padding: '7px 16px', fontSize: 12, fontWeight: 700 }}>Cierre: 28/Oct/2026</div>
        </div>
      </div>
      <div style={{ background: C.white, borderRadius: 12, padding: 22, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', marginBottom: 18 }}>
        <PhaseGantt phase="1.1 Gestión y Gobernanza"         pct={7}  offset={0}  color={C.muted}     cost="$6,200"    days="8d · 01–10 Jun" />
        <PhaseGantt phase="1.2 Infraestructura Cloud Azure"  pct={20} offset={7}  color={C.secondary} cost="$11,080"   days="22d · 08 Jun–07 Jul" />
        <PhaseGantt phase="1.3 Parametrización ERP y RRHH"  pct={31} offset={7}  color={C.primary}   cost="$28,320"   days="33d · 08 Jun–22 Jul" />
        <PhaseGantt phase="1.4 Migración y Pruebas"          pct={34} offset={20} color={C.warning}   cost="$18,760"   days="37d · 22 Jun–11 Ago" />
        <PhaseGantt phase="1.5 Cambio · Capacitación · Op."  pct={86} offset={20} color={C.accent}    cost="$63,800"   days="93d · 22 Jun–28 Oct" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10 }}>
        {[
          { id: 'H1', label: 'Acta constitutiva', date: '01/06', icon: <FileText size={14} color={C.secondary} />, done: true },
          { id: 'H2', label: 'Azure aprovisionado', date: '16/06', icon: <Cloud size={14} color={C.primary} />, done: true },
          { id: 'H3', label: 'Parametrización cerrada', date: '22/07', icon: <Settings size={14} color={C.warning} />, done: false },
          { id: 'H4', label: 'Go-Live modular', date: '01/09', icon: <Zap size={14} color={C.success} />, done: false },
          { id: 'H5', label: 'Cierre contractual', date: '28/10', icon: <Award size={14} color={C.muted} />, done: false },
        ].map(h => (
          <div key={h.id} style={{ background: C.white, borderRadius: 10, padding: '14px 12px', textAlign: 'center', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', borderBottom: `3px solid ${h.done ? C.primary : C.light}` }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>{h.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, marginBottom: 4 }}>{h.id}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.text, marginBottom: 4 }}>{h.label}</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.primary }}>{h.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SlideEquipo() {
  const members = [
    { name: 'Josué Montero Villalobos', role: 'Director del Proyecto', resp: 'Integración · Comunicación · Control de cambios · Ruta crítica', icon: <Target size={22} color={C.primary} /> },
    { name: 'Pablo Alvarado Umaña', role: 'Líder Infraestructura Cloud y Arquitectura', resp: 'Azure · Seguridad · Pruebas en sitio · Soporte post Go-Live', icon: <Cloud size={22} color={C.primary} /> },
    { name: 'Erick Torres Hernández', role: 'Líder de Costos, Presupuesto y Adquisiciones', resp: 'CAPEX/OPEX · SICOP · Flujo de caja · Cláusulas contractuales', icon: <DollarSign size={22} color={C.primary} /> },
    { name: 'Kristel Duarte Pérez', role: 'Líder Gestión del Cambio y Comunicación', resp: 'Capacitación · Índice de adopción · Talleres · Plan comunicación', icon: <Users size={22} color={C.primary} /> },
    { name: 'Siandi Araya Bello', role: 'Asistente Técnica y Analista Funcional', resp: 'Requerimientos · Minutas · RTM · Registro de riesgos · QA', icon: <FileText size={22} color={C.primary} /> },
  ]
  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>Equipo del proyecto</Label>
      <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800, marginBottom: 8 }}>Equipo consultor ejecutor</h2>
      <p style={{ color: C.muted, fontSize: 13, marginBottom: 26 }}>Universidad Nacional de Costa Rica · Escuela de Informática · EIF 500 · I Ciclo 2026</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {members.map(m => (
          <div key={m.name} style={{ background: C.white, borderRadius: 10, padding: '16px 22px', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ background: C.light, borderRadius: 10, padding: 12, flexShrink: 0 }}>{m.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, color: C.text, fontSize: 14 }}>{m.name}</div>
              <div style={{ color: C.primary, fontSize: 12, fontWeight: 600, margin: '2px 0' }}>{m.role}</div>
              <div style={{ fontSize: 11, color: C.muted }}>{m.resp}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, padding: '10px 18px', background: C.light, borderRadius: 8, fontSize: 12, color: C.primary, fontWeight: 600, display: 'flex', gap: 32 }}>
        <span>Equipo Técnico externo: Ing. Cloud · Consultor ERP · Esp. Seguridad · Ing. Datos</span>
        <span>Total: 9 recursos · 2,864 horas</span>
      </div>
    </div>
  )
}

function SlideBeneficios() {
  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>05 — Beneficios esperados</Label>
      <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800, marginBottom: 28 }}>Impacto operacional, financiero y normativo</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
        <div style={{ background: C.white, borderRadius: 12, padding: 22, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', borderTop: `4px solid ${C.primary}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <Settings size={18} color={C.primary} />
            <span style={{ fontWeight: 700, color: C.primary, fontSize: 14 }}>Operacionales</span>
          </div>
          {['Integración de finanzas, compras, inventario y RRHH en una sola plataforma', 'Automatización de planillas CCSS, INS y renta', 'Reportes de avance presupuestal en tiempo real', 'Eliminación de duplicidades y reprocesos manuales'].map(it => (
            <div key={it} style={{ fontSize: 12, color: C.muted, padding: '4px 0', display: 'flex', gap: 8, alignItems: 'flex-start', lineHeight: 1.4 }}>
              <CheckCircle size={12} color={C.primary} style={{ flexShrink: 0, marginTop: 2 }} />{it}
            </div>
          ))}
        </div>
        <div style={{ background: C.white, borderRadius: 12, padding: 22, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', borderTop: `4px solid ${C.warning}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <TrendingUp size={18} color={C.warning} />
            <span style={{ fontWeight: 700, color: C.warning, fontSize: 14 }}>Financieros</span>
          </div>
          {['Modelo OPEX $910/mes — sin inversión en servidores físicos', 'Control del techo presupuestario $150K vía SICOP', 'Visibilidad de costos operativos reales del SINART', 'Eliminación de multas por incumplimiento CCSS/Hacienda'].map(it => (
            <div key={it} style={{ fontSize: 12, color: C.muted, padding: '4px 0', display: 'flex', gap: 8, alignItems: 'flex-start', lineHeight: 1.4 }}>
              <CheckCircle size={12} color={C.warning} style={{ flexShrink: 0, marginTop: 2 }} />{it}
            </div>
          ))}
        </div>
        <div style={{ background: C.white, borderRadius: 12, padding: 22, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', borderTop: `4px solid ${C.success}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <Shield size={18} color={C.success} />
            <span style={{ fontWeight: 700, color: C.success, fontSize: 14 }}>Normativos</span>
          </div>
          {['Pistas de auditoría digitales para CGR y Contraloría', 'Cumplimiento Ley 8968 (protección datos personales)', 'Integración con CCSS, bancos, INS y Tributación', 'Módulo presupuestario alineado con normativa STAP'].map(it => (
            <div key={it} style={{ fontSize: 12, color: C.muted, padding: '4px 0', display: 'flex', gap: 8, alignItems: 'flex-start', lineHeight: 1.4 }}>
              <CheckCircle size={12} color={C.success} style={{ flexShrink: 0, marginTop: 2 }} />{it}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12 }}>
        <StatCard label="Adopción usuarios clave" value="90%" sub="Meta capacitación (Plan 1.5.3)" color={C.primary} />
        <StatCard label="Índice de adopción sistema" value=">80%" sub="Encuestas post Go-Live (1.5.4)" color={C.secondary} />
        <StatCard label="Tickets resueltos en SLA" value="95%" sub="Soporte post-implementación" color={C.success} />
        <StatCard label="Disponibilidad Azure" value="99.97%" sub="SLA contractual mensual" color={C.warning} />
      </div>
    </div>
  )
}

function SlideRiesgos() {
  const top = [
    { id: 'R2.2', cat: 'Cronograma', desc: 'Incumplimiento del plazo final 28/Oct/2026', level: 'EXTREMO' as const, score: 48, resp: 'PM · C. Álvarez · A. Salazar' },
    { id: 'R1.1', cat: 'Requerimientos', desc: 'Requerimientos funcionales incompletos o ambiguos', level: 'ALTO' as const, score: 32, resp: 'PM · Jefatura TIC' },
    { id: 'R5.2', cat: 'RRHH', desc: 'Resistencia al cambio del personal del SINART', level: 'ALTO' as const, score: 32, resp: 'F. Castro · PM' },
    { id: 'R6.2', cat: 'Tecnología', desc: 'Incumplimiento del SLA de disponibilidad 99.97%', level: 'ALTO' as const, score: 32, resp: 'J. Téllez · Proveedor ERP' },
    { id: 'R6.3', cat: 'Tecnología', desc: 'Vulnerabilidades de seguridad o brechas de datos', level: 'ALTO' as const, score: 32, resp: 'A. Salazar · J. Téllez' },
    { id: 'R10.1', cat: 'Legal', desc: 'Incumplimiento normativa CGR/STAP en módulo presupuesto', level: 'ALTO' as const, score: 32, resp: 'Jefatura Financiero · A. Salazar' },
  ]
  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>06 — Riesgos clave</Label>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
        <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800 }}>Gestión de riesgos — Top críticos</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ padding: '5px 12px', borderRadius: 5, background: '#8B0000', color: '#fff', fontSize: 11, fontWeight: 700 }}>EXTREMO ≥48</div>
          <div style={{ padding: '5px 12px', borderRadius: 5, background: C.danger, color: '#fff', fontSize: 11, fontWeight: 700 }}>ALTO 13–32</div>
          <div style={{ padding: '5px 12px', borderRadius: 5, background: C.warning, color: '#fff', fontSize: 11, fontWeight: 700 }}>MODERADO 7–12</div>
        </div>
      </div>
      <div style={{ background: C.white, borderRadius: 12, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '60px 90px 1fr 80px 1fr', gap: 0, background: C.primary, padding: '10px 18px' }}>
          {['ID', 'Categoría', 'Descripción del Riesgo', 'Nivel', 'Responsable'].map(h => (
            <div key={h} style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: 1 }}>{h}</div>
          ))}
        </div>
        {top.map((r, i) => (
          <div key={r.id} style={{ display: 'grid', gridTemplateColumns: '60px 90px 1fr 80px 1fr', gap: 0, padding: '10px 18px', background: i % 2 === 0 ? C.white : C.bgAlt, borderBottom: `1px solid ${C.light}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.primary }}>{r.id}</div>
            <div style={{ fontSize: 11, color: C.muted }}>{r.cat}</div>
            <div style={{ fontSize: 12, color: C.text, paddingRight: 12 }}>{r.desc}</div>
            <div><RiskBadge level={r.level} /></div>
            <div style={{ fontSize: 11, color: C.muted }}>{r.resp}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, display: 'flex', gap: 16 }}>
        <div style={{ flex: 1, padding: '10px 16px', background: C.white, borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Shield size={16} color={C.primary} />
          <span style={{ fontSize: 12, color: C.text }}><strong>23 riesgos</strong> identificados · CCB: Josué Montero + Erick Torres + Jefaturas SINART</span>
        </div>
        <div style={{ flex: 1, padding: '10px 16px', background: C.white, borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Activity size={16} color={C.primary} />
          <span style={{ fontSize: 12, color: C.text }}>Revisión <strong>semanal</strong> de la ruta crítica · Alertas en <strong>≤4 horas</strong> vía MS Teams + SICOP</span>
        </div>
      </div>
    </div>
  )
}

function SlideFlujoCaja() {
  const rows = [
    { per: 'Jun 2026', act: 'Gobernanza + Azure + Parametrización (inicio)', cap: '$34,640', ope: '—', tot: '$34,640' },
    { per: 'Jul 2026', act: 'Seguridad + PBAC + Pruebas unitarias + Manuales', cap: '$33,120', ope: '—', tot: '$33,120' },
    { per: 'Ago 2026', act: 'Pruebas en sitio + Manuales (fin) + Capacitación', cap: '$12,800', ope: '—', tot: '$12,800' },
    { per: 'Sep 2026', act: 'Go-Live 02/09 · Capacitación + Adopción + Soporte', cap: '$26,200', ope: '$910', tot: '$27,110' },
    { per: 'Oct 2026', act: 'Soporte post-impl. + Cierre contractual 28/10', cap: '$21,400', ope: '$910', tot: '$22,310' },
    { per: 'Nov 26 – May 28', act: 'Servicio SaaS activo (19 meses restantes)', cap: '—', ope: '$17,290', tot: '$17,290' },
  ]
  return (
    <div style={{ padding: '52px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box' }}>
      <Label>Flujo de caja del proyecto</Label>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
        <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800 }}>Distribución de desembolsos</h2>
        <div style={{ display: 'flex', gap: 12, fontSize: 12 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 12, height: 12, background: C.warning, borderRadius: 2, display: 'block' }} /> CAPEX</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 12, height: 12, background: C.secondary, borderRadius: 2, display: 'block' }} /> OPEX</span>
        </div>
      </div>
      <div style={{ background: C.white, borderRadius: 12, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 100px 80px 100px', background: C.primary, padding: '10px 18px', gap: 0 }}>
          {['Período', 'Actividad Principal', 'CAPEX', 'OPEX', 'Total'].map(h => (
            <div key={h} style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: 1 }}>{h}</div>
          ))}
        </div>
        {rows.map((r, i) => (
          <div key={r.per} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 100px 80px 100px', padding: '10px 18px', background: i % 2 === 0 ? C.white : C.bgAlt, borderBottom: `1px solid ${C.light}`, gap: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.primary }}>{r.per}</div>
            <div style={{ fontSize: 12, color: C.muted, paddingRight: 12 }}>{r.act}</div>
            <div style={{ fontSize: 12, color: C.warning, fontWeight: 600 }}>{r.cap}</div>
            <div style={{ fontSize: 12, color: C.secondary, fontWeight: 600 }}>{r.ope}</div>
            <div style={{ fontSize: 12, color: C.text, fontWeight: 700 }}>{r.tot}</div>
          </div>
        ))}
        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 100px 80px 100px', padding: '12px 18px', background: C.primary, gap: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: C.accent }}>TOTAL</div>
          <div style={{ fontSize: 12, color: C.accent }}>Implementación + 24 meses SaaS</div>
          <div style={{ fontSize: 12, color: C.white, fontWeight: 700 }}>$128,160</div>
          <div style={{ fontSize: 12, color: C.white, fontWeight: 700 }}>$21,840</div>
          <div style={{ fontSize: 13, color: C.white, fontWeight: 900 }}>$150,000</div>
        </div>
      </div>
      <div style={{ padding: '10px 18px', background: C.light, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
        <BarChart2 size={16} color={C.primary} />
        <span style={{ fontSize: 12, color: C.primary, fontWeight: 600 }}>Mayor concentración de gasto: Jun–Jul 2026 ($67,760). A partir del Go-Live el flujo es constante y predecible: $910/mes.</span>
      </div>
    </div>
  )
}

function SlideAprobacion() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flex: 1, padding: '52px 44px', background: C.bgAlt, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Label>Solicitud de aprobación</Label>
        <h2 style={{ color: C.primary, fontSize: 30, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
          Requerimos la aprobación formal de la Junta Directiva del SINART
        </h2>
        <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
          El SINART tiene la oportunidad de modernizar su gestión institucional con una inversión prudente, bajo el marco legal de contratación pública de Costa Rica, con control total vía SICOP y un plazo de ejecución definido e inamovible.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {[
            { icon: <DollarSign size={15} color={C.primary} />, label: 'Monto solicitado', value: '$150,000 USD · CAPEX $128,160 + OPEX $21,840', color: C.primary },
            { icon: <Calendar size={15} color={C.secondary} />, label: 'Período de ejecución', value: '108 días · 1 Jun 2026 – 28 Oct 2026', color: C.secondary },
            { icon: <Zap size={15} color={C.success} />, label: 'Go-Live comprometido', value: '2 de Setiembre de 2026', color: C.success },
            { icon: <FileText size={15} color={C.warning} />, label: 'Control contractual', value: 'SICOP · plataforma oficial CR · auditable', color: C.warning },
            { icon: <Users size={15} color={C.muted} />, label: 'Director del Proyecto', value: 'Josué Montero Villalobos', color: C.muted },
          ].map(r => (
            <div key={r.label} style={{ background: C.white, borderRadius: 9, padding: '12px 16px', boxShadow: '0 1px 5px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', gap: 12 }}>
              {r.icon}
              <span style={{ fontSize: 13, color: C.muted, width: 180, flexShrink: 0 }}>{r.label}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: r.color }}>{r.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: C.primary, width: '38%', padding: '52px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <CheckCircle size={24} color={C.accent} />
          <span style={{ color: C.white, fontSize: 18, fontWeight: 800 }}>Aprobaciones requeridas</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            'Aprobación presupuestaria $150,000 USD',
            'Autorización para inicio del proceso SICOP',
            'Designación de Administradores de Contrato',
            'Confirmación disponibilidad personal SINART',
            'Inicio formal del proyecto: 01/06/2026',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 14px', background: 'rgba(255,255,255,0.1)', borderRadius: 8 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', border: `2px solid ${C.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: C.accent, fontSize: 11, fontWeight: 800 }}>{i + 1}</span>
              </div>
              <span style={{ color: C.white, fontSize: 13, lineHeight: 1.4 }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, padding: '14px 16px', background: 'rgba(167,215,197,0.15)', borderRadius: 8, border: '1px solid rgba(167,215,197,0.3)' }}>
          <div style={{ color: C.accent, fontSize: 12, lineHeight: 1.6 }}>
            Con su aprobación hoy, el sistema ERP y RRHH del SINART estará operando en producción el <strong style={{ color: C.white }}>2 de Setiembre de 2026</strong>.
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideQA() {
  return (
    <div style={{ background: C.primary, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 64 }}>
      <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(167,215,197,0.15)', border: `2px solid ${C.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
        <Users size={30} color={C.accent} />
      </div>
      <h2 style={{ color: C.white, fontSize: 44, fontWeight: 900, marginBottom: 12 }}>Preguntas</h2>
      <p style={{ color: C.accent, fontSize: 18, marginBottom: 48, maxWidth: 480, lineHeight: 1.5 }}>
        El equipo consultor está a disposición de la Junta Directiva para responder cualquier consulta técnica, financiera o normativa.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, maxWidth: 720 }}>
        {[
          { icon: <Cloud size={16} color={C.accent} />, q: '¿Por qué Microsoft Azure?', a: 'Compatibilidad institucional, presencia regional CR, SLA 99.97% y certificaciones ISO 27001 / SOC 2.' },
          { icon: <DollarSign size={16} color={C.accent} />, q: '¿Cómo se controla el gasto?', a: 'Control 100% via SICOP. Línea base CAPEX/OPEX auditada mensualmente por Jefatura Financiera.' },
          { icon: <Shield size={16} color={C.accent} />, q: '¿Qué pasa si el proveedor falla?', a: 'Cláusula de escrow de datos, garantía de cumplimiento y proceso de rescisión con contingencia activa.' },
        ].map(item => (
          <div key={item.q} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(167,215,197,0.2)', borderRadius: 10, padding: '18px 20px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>{item.icon}</div>
            <div style={{ color: C.white, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{item.q}</div>
            <div style={{ color: 'rgba(167,215,197,0.8)', fontSize: 12, lineHeight: 1.5 }}>{item.a}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 48, color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>
        EIF 500 · Administración de Proyectos · Universidad Nacional de Costa Rica · I Ciclo 2026
      </div>
    </div>
  )
}

// ─── Slide Registry ───────────────────────────────────────────────────────────

const SLIDES = [
  { id: 'portada',      label: 'Portada',       component: SlidePortada },
  { id: 'agenda',       label: 'Agenda',        component: SlideAgenda },
  { id: 'justif',       label: 'Justificación', component: SlideJustificacion },
  { id: 'solucion',     label: 'Solución',      component: SlideSolucion },
  { id: 'inversion',    label: 'Inversión',     component: SlideInversion },
  { id: 'cronograma',   label: 'Cronograma',    component: SlideCronograma },
  { id: 'equipo',       label: 'Equipo',        component: SlideEquipo },
  { id: 'beneficios',   label: 'Beneficios',    component: SlideBeneficios },
  { id: 'riesgos',      label: 'Riesgos',       component: SlideRiesgos },
  { id: 'flujo',        label: 'Flujo Caja',    component: SlideFlujoCaja },
  { id: 'aprobacion',   label: 'Aprobación',    component: SlideAprobacion },
  { id: 'qa',           label: 'Q&A',           component: SlideQA },
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

      {/* Nav bar */}
      <div style={{ background: '#111820', padding: '0 20px', height: 46, display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.08)' }}>
          <div style={{ height: 2, background: C.accent, width: `${pct}%`, transition: 'width 0.3s ease' }} />
        </div>

        <button onClick={e => { e.stopPropagation(); go(idx - 1) }} disabled={idx === 0}
          style={{ background: 'none', border: 'none', cursor: idx === 0 ? 'default' : 'pointer', color: idx === 0 ? 'rgba(255,255,255,0.2)' : C.accent, padding: 4, display: 'flex' }}>
          <ChevronLeft size={18} />
        </button>

        <div style={{ display: 'flex', gap: 4, flex: 1, justifyContent: 'center', overflow: 'hidden' }}>
          {SLIDES.map((s, i) => (
            <button key={s.id} onClick={e => { e.stopPropagation(); go(i) }} title={s.label}
              style={{ background: i === idx ? C.accent : 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 3, cursor: 'pointer', width: i === idx ? 20 : 7, height: 7, transition: 'all 0.22s ease', padding: 0, flexShrink: 0 }} />
          ))}
        </div>

        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>
          {SLIDES[idx].label} · {idx + 1}/{SLIDES.length}
        </span>

        <button onClick={e => { e.stopPropagation(); go(idx + 1) }} disabled={idx === SLIDES.length - 1}
          style={{ background: 'none', border: 'none', cursor: idx === SLIDES.length - 1 ? 'default' : 'pointer', color: idx === SLIDES.length - 1 ? 'rgba(255,255,255,0.2)' : C.accent, padding: 4, display: 'flex' }}>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}