'use client'
import { ShieldCheck, Sparkles, Users, Check, HeartHandshake } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideCronograma() {
  const pilares = [
    {
      icon: <ShieldCheck size={30} color={C.primary} />,
      titulo: 'Pertenencia institucional',
      desc: 'Solo comunidad universitaria, con identidad verificada.',
      detalle: 'Identidad verificada y confiable',
      color: C.primary,
    },
    {
      icon: <Sparkles size={30} color={C.secondary} />,
      titulo: 'Emparejamiento inteligente',
      desc: 'Compatibilidad según hábitos y estilo de vida.',
      detalle: 'Puntaje de afinidad entre perfiles',
      color: C.secondary,
    },
    {
      icon: <Users size={30} color={C.warning} />,
      titulo: 'Comunidad activa',
      desc: 'Foros y grupos de interés más allá de la vivienda.',
      detalle: 'Espacios de interacción social',
      color: C.warning,
    },
  ]

  return (
    <div style={{ padding: '46px 60px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <Label>Propuesta de Solución</Label>
        <h2 style={{ color: C.primary, fontSize: 27, fontWeight: 800, margin: '0 0 6px' }}>
          Una red, tres pilares
        </h2>
        <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.5, margin: 0, maxWidth: 760 }}>
          COINKI une vivienda compartida, convivencia compatible y comunidad universitaria en una sola plataforma.
        </p>
      </div>

      {/* Pilares */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, flex: 1 }}>
        {pilares.map(p => (
          <div key={p.titulo} style={{ background: C.white, borderRadius: 14, padding: '26px 24px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderTop: `4px solid ${p.color}`, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: `${p.color}15`, borderRadius: 14, padding: 14, width: 'fit-content' }}>{p.icon}</div>
            <span style={{ fontWeight: 800, color: C.text, fontSize: 17, lineHeight: 1.25 }}>{p.titulo}</span>
            <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 9, background: `${p.color}0D`, borderRadius: 9, padding: '10px 12px' }}>
              <Check size={15} color={p.color} style={{ flexShrink: 0 }} />
              <span style={{ color: p.color, fontSize: 12.5, fontWeight: 600, lineHeight: 1.35 }}>{p.detalle}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Resultado esperado */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, background: `${C.primary}10`, border: `1px solid ${C.primary}20`, borderRadius: 12, padding: '16px 22px' }}>
        <div style={{ background: C.primary, borderRadius: 10, padding: 9, display: 'flex', flexShrink: 0 }}>
          <HeartHandshake size={20} color={C.white} />
        </div>
        <span style={{ color: C.primary, fontSize: 14.5, lineHeight: 1.5 }}>
          <strong>El resultado:</strong> estudiantes conectados con compañeros y alojamientos compatibles, de forma segura y eficiente.
        </span>
      </div>
    </div>
  )
}
