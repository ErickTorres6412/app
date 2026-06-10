'use client'
import { ShieldCheck, Users, Cpu } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideCronograma() {
  const pilares = [
    {
      icon: <ShieldCheck size={22} color={C.primary} />,
      titulo: 'Pertenencia Institucional',
      desc: 'Garantiza que todos sus usuarios forman parte activa de la comunidad universitaria costarricense, mediante validación de carné estudiantil y confirmación de identidad.',
      color: C.primary,
    },
    {
      icon: <Cpu size={22} color={C.secondary} />,
      titulo: 'Emparejamiento Inteligente',
      desc: 'Analiza de manera automática gustos, hábitos y preferencias de estilo de vida para predecir la compatibilidad entre perfiles, maximizando las posibilidades de una convivencia armoniosa.',
      color: C.secondary,
    },
    {
      icon: <Users size={22} color={C.warning} />,
      titulo: 'Comunidad Activa',
      desc: 'Más allá de la búsqueda de vivienda, ofrece espacios de interacción social donde los estudiantes pueden formar grupos de interés, participar en foros temáticos y conectar.',
      color: C.warning,
    },
  ]

  const stack = [
    { layer: 'Frontend', tech: 'Next.js + TypeScript', color: C.primary },
    { layer: 'Backend', tech: 'NestJS + TypeScript', color: C.secondary },
    { layer: 'Base de datos', tech: 'PostgreSQL + Prisma ORM', color: C.warning },
    { layer: 'IA / ML', tech: 'Módulo emparejamiento híbrido', color: C.success },
    { layer: 'Verificación', tech: 'Carné estudiantil + correo institucional', color: C.muted },
  ]

  return (
    <div style={{ padding: '44px 60px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <Label>Propuesta de Solución</Label>
        <h2 style={{ color: C.primary, fontSize: 26, fontWeight: 800, margin: 0 }}>
          COINKI: Tres pilares fundamentales
        </h2>
      </div>

      {/* Pilares */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, flex: 1 }}>
        {pilares.map(p => (
          <div key={p.titulo} style={{ background: C.white, borderRadius: 12, padding: '20px 18px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderTop: `4px solid ${p.color}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ background: `${p.color}15`, borderRadius: 8, padding: 8 }}>{p.icon}</div>
              <span style={{ fontWeight: 700, color: C.text, fontSize: 14, lineHeight: 1.3 }}>{p.titulo}</span>
            </div>
            <p style={{ color: C.muted, fontSize: 12.5, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Stack técnico */}
      <div>
        <div style={{ color: C.muted, fontSize: 10, letterSpacing: 2, fontWeight: 700, marginBottom: 10, textTransform: 'uppercase' }}>Stack Técnico</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {stack.map(s => (
            <div key={s.layer} style={{ background: C.white, borderRadius: 8, padding: '8px 14px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', borderLeft: `3px solid ${s.color}`, display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ color: s.color, fontSize: 10, fontWeight: 700 }}>{s.layer}</span>
              <span style={{ color: C.text, fontSize: 11.5, fontWeight: 600 }}>{s.tech}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '10px 16px', background: `${C.primary}10`, borderRadius: 8, border: `1px solid ${C.primary}20`, fontSize: 12, color: C.primary, lineHeight: 1.5 }}>
        <strong>Arquitectura desacoplada:</strong> cliente Next.js → API REST → servidor NestJS → PostgreSQL/Prisma, con módulo de IA de emparejamiento independiente.
      </div>
    </div>
  )
}
