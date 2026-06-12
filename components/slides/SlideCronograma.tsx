'use client'
import { ShieldCheck, Sparkles, Users, UserPlus, Gauge, HeartHandshake, ArrowRight } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideCronograma() {
  const pilares = [
    {
      icon: <ShieldCheck size={24} color={C.primary} />,
      titulo: 'Pertenencia institucional',
      desc: 'Solo comunidad universitaria, con identidad verificada.',
      color: C.primary,
    },
    {
      icon: <Sparkles size={24} color={C.secondary} />,
      titulo: 'Emparejamiento inteligente',
      desc: 'Compatibilidad según hábitos y estilo de vida.',
      color: C.secondary,
    },
    {
      icon: <Users size={24} color={C.warning} />,
      titulo: 'Comunidad activa',
      desc: 'Foros y grupos de interés más allá de la vivienda.',
      color: C.warning,
    },
  ]

  const flujo = [
    { icon: <UserPlus size={20} color={C.primary} />, paso: 'Entrada', desc: 'Registro y preferencias', color: C.primary },
    { icon: <Sparkles size={20} color={C.secondary} />, paso: 'Procesamiento', desc: 'Cálculo de afinidad', color: C.secondary },
    { icon: <Gauge size={20} color={C.warning} />, paso: 'Análisis', desc: 'Puntaje de compatibilidad', color: C.warning },
    { icon: <HeartHandshake size={20} color={C.success} />, paso: 'Resultados', desc: 'Compañeros y alojamiento ideales', color: C.success },
  ]

  return (
    <div style={{ padding: '46px 60px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 26 }}>
      <div>
        <Label>Propuesta de Solución</Label>
        <h2 style={{ color: C.primary, fontSize: 27, fontWeight: 800, margin: 0 }}>
          Una red, tres pilares
        </h2>
      </div>

      {/* Pilares */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, flex: 1 }}>
        {pilares.map(p => (
          <div key={p.titulo} style={{ background: C.white, borderRadius: 14, padding: '24px 22px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderTop: `4px solid ${p.color}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: `${p.color}15`, borderRadius: 12, padding: 12, width: 'fit-content' }}>{p.icon}</div>
            <span style={{ fontWeight: 800, color: C.text, fontSize: 16, lineHeight: 1.25 }}>{p.titulo}</span>
            <p style={{ color: C.muted, fontSize: 13.5, lineHeight: 1.55, margin: 0 }}>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Flujo: cómo funciona */}
      <div>
        <div style={{ color: C.muted, fontSize: 10, letterSpacing: 2, fontWeight: 700, marginBottom: 14, textTransform: 'uppercase' }}>¿Cómo funciona?</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {flujo.map((f, i) => (
            <div key={f.paso} style={{ display: 'contents' }}>
              <div style={{ flex: 1, background: C.white, borderRadius: 12, padding: '14px 16px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', borderBottom: `3px solid ${f.color}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <div style={{ background: `${f.color}15`, borderRadius: 8, padding: 7, display: 'flex' }}>{f.icon}</div>
                  <span style={{ fontWeight: 800, color: f.color, fontSize: 13.5 }}>{f.paso}</span>
                </div>
                <span style={{ color: C.muted, fontSize: 12, lineHeight: 1.4 }}>{f.desc}</span>
              </div>
              {i < flujo.length - 1 && (
                <ArrowRight size={20} color={C.accent} style={{ flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
