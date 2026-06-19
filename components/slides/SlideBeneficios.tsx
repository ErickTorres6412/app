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
      desc: 'Capa 1: analiza el perfil declarado (hábitos, preferencias). Capa 2: aprende del comportamiento dentro de la plataforma. Si el usuario es nuevo, la Capa 1 lo sostiene — resuelve el "inicio en frío".',
    },
    {
      icon: <FlaskConical size={20} color={C.success} />,
      titulo: 'Arquitectura desacoplada y verificación',
      desc: 'Frontend (Next.js) y backend (NestJS) son independientes y se comunican vía API REST. El acceso requiere verificación de identidad universitaria mediante mecanismos institucionales, garantizando que solo estudiantes verificados puedan usar la plataforma.',
    },
  ]

  return (
    <div style={{ padding: '48px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <Label>Marco Conceptual</Label>
        <h2 style={{ color: C.primary, fontSize: 26, fontWeight: 800, margin: 0 }}>
          Cuatro conceptos que sustentan la propuesta
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1 }}>
        {conceptos.map(c => (
          <div key={c.titulo} style={{ background: C.white, borderRadius: 12, padding: '22px 22px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ background: C.light, borderRadius: 8, padding: 10, flexShrink: 0, display: 'flex' }}>{c.icon}</div>
            <div>
              <div style={{ fontWeight: 700, color: C.text, fontSize: 14, marginBottom: 6 }}>{c.titulo}</div>
              <p style={{ color: C.muted, fontSize: 12.5, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
