import { Brain, Layers, Search, FlaskConical } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideBeneficios() {
  const conceptos = [
    {
      icon: <Brain size={20} color={C.primary} />,
      titulo: 'Compatibilidad de convivencia',
      desc: 'Convivir bien depende de múltiples factores: horarios, tolerancia al ruido, orden y socialización. El modelo OCEAN mide rasgos de personalidad para predecir si dos personas pueden vivir juntas armoniosamente.',
    },
    {
      icon: <Search size={20} color={C.secondary} />,
      titulo: 'Sistemas de recomendación',
      desc: 'Algoritmos tipo Netflix o Spotify, adaptados a personas. COINKI combina dos enfoques: comparar perfiles directamente (contenido) y aprender del comportamiento de usuarios similares (colaborativo).',
    },
    {
      icon: <Layers size={20} color={C.warning} />,
      titulo: 'Algoritmo híbrido de dos capas',
      desc: 'Capa 1: analiza el perfil declarado (hábitos, preferencias). Capa 2: aprende del comportamiento dentro de la plataforma. Si el usuario es nuevo y no hay historial, la Capa 1 lo sostiene — resuelve el "inicio en frío".',
    },
    {
      icon: <FlaskConical size={20} color={C.success} />,
      titulo: 'Arquitectura desacoplada y verificación',
      desc: 'Frontend (Next.js) y backend (NestJS) son independientes y se comunican vía API REST. El acceso requiere verificación de identidad universitaria: carné estudiantil o correo institucional.',
    },
  ]

  const metodologia = [
    { label: 'Tipo', value: 'Aplicada · Mixta (cuantitativa + cualitativa)' },
    { label: 'Recolección', value: 'Revisión bibliográfica, entrevistas semiestructuradas, grupos de discusión' },
    { label: 'Gestión', value: 'Metodología ágil Scrum en ciclos iterativos con perfiles sintéticos' },
  ]

  return (
    <div style={{ padding: '44px 60px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <Label>Marco Conceptual y Metodología</Label>
        <h2 style={{ color: C.primary, fontSize: 26, fontWeight: 800, margin: 0 }}>
          Bases teóricas y enfoque de investigación
        </h2>
      </div>

      {/* Marco conceptual */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {conceptos.map(c => (
          <div key={c.titulo} style={{ background: C.white, borderRadius: 10, padding: '14px 18px', boxShadow: '0 1px 6px rgba(0,0,0,0.04)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ background: C.light, borderRadius: 8, padding: 8, flexShrink: 0, display: 'flex' }}>{c.icon}</div>
            <div>
              <div style={{ fontWeight: 700, color: C.text, fontSize: 13, marginBottom: 4 }}>{c.titulo}</div>
              <p style={{ color: C.muted, fontSize: 12, lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Metodología */}
      <div>
        <div style={{ color: C.muted, fontSize: 10, letterSpacing: 2, fontWeight: 700, marginBottom: 10, textTransform: 'uppercase' }}>Metodología</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {metodologia.map(m => (
            <div key={m.label} style={{ background: C.white, borderRadius: 8, padding: '10px 14px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', display: 'flex', gap: 10, alignItems: 'baseline' }}>
              <span style={{ color: C.primary, fontWeight: 800, fontSize: 11, flexShrink: 0, minWidth: 72 }}>{m.label}</span>
              <span style={{ color: C.text, fontSize: 12, lineHeight: 1.5 }}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fases */}
      <div style={{ background: C.primary, borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ color: 'rgba(241,148,138,0.75)', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', flexShrink: 0 }}>5 Fases</span>
        <div style={{ display: 'flex', gap: 8, flex: 1, justifyContent: 'space-between' }}>
          {['1. Análisis', '2. Diseño', '3. Desarrollo', '4. Pruebas', '5. Validación'].map((f, i) => (
            <div key={f} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 6, padding: '5px 12px', color: C.white, fontSize: 11.5, fontWeight: 600, textAlign: 'center' }}>
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
