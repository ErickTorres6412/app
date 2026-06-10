import { Target, CheckCircle } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideInversion() {
  const especificos = [
    {
      num: '01',
      accion: 'Analizar',
      desc: 'las necesidades y problemáticas de los estudiantes universitarios en CR en relación con la búsqueda de alojamiento y la convivencia, identificando los factores clave de compatibilidad.',
    },
    {
      num: '02',
      accion: 'Definir',
      desc: 'el diseño metodológico y la arquitectura de la plataforma, considerando los componentes de validación de usuarios, emparejamiento de perfiles y espacios de interacción social.',
    },
    {
      num: '03',
      accion: 'Implementar',
      desc: 'la plataforma web integrando verificación de identidad estudiantil, gestión de alojamientos y un modelo de emparejamiento basado en preferencias, hábitos y estilos de vida.',
    },
    {
      num: '04',
      accion: 'Realizar',
      desc: 'pruebas funcionales y de usabilidad para validar el correcto funcionamiento del sistema y la experiencia del usuario en los distintos módulos desarrollados.',
    },
    {
      num: '05',
      accion: 'Evaluar',
      desc: 'la precisión del sistema de emparejamiento y la utilidad de la plataforma, mediante la satisfacción de los usuarios y la efectividad en la generación de coincidencias compatibles.',
    },
  ]

  return (
    <div style={{ padding: '44px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', gap: 28 }}>
      {/* Objetivo General */}
      <div style={{ width: 292, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Label>Objetivo General</Label>
        <div style={{ background: C.primary, borderRadius: 14, padding: '24px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'rgba(241,148,138,0.2)', borderRadius: 8, padding: 10, width: 'fit-content' }}>
            <Target size={22} color={C.accent} />
          </div>
          <p style={{ color: C.white, fontSize: 'clamp(12px, 1.25vw, 15px)', fontWeight: 600, lineHeight: 1.65, margin: 0 }}>
            Desarrollar una plataforma web para la comunidad universitaria costarricense que facilite la búsqueda de alojamiento compartido y la conexión entre estudiantes con estilos de vida compatibles, promoviendo una convivencia segura, confiable y una experiencia universitaria más integrada.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 'auto' }}>
            {['Sistemas Web', 'IA / ML', 'Comunidad UNA'].map(tag => (
              <div key={tag} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 6, padding: '4px 10px', color: C.accent, fontSize: 10.5, fontWeight: 700 }}>{tag}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Objetivos Específicos */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Label>Objetivos Específicos</Label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
          {especificos.map(obj => (
            <div key={obj.num} style={{ background: C.white, borderRadius: 10, padding: '11px 15px', boxShadow: '0 1px 6px rgba(0,0,0,0.04)', display: 'flex', gap: 13, alignItems: 'flex-start' }}>
              <div style={{ background: C.primary, color: C.white, borderRadius: 8, width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{obj.num}</div>
              <p style={{ margin: 0, fontSize: 12.5, color: C.text, lineHeight: 1.55 }}>
                <strong style={{ color: C.secondary }}>{obj.accion}</strong>{' '}{obj.desc}
              </p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, padding: '8px 14px', background: `${C.primary}10`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8, border: `1px solid ${C.primary}20` }}>
          <CheckCircle size={13} color={C.primary} />
          <span style={{ fontSize: 11.5, color: C.primary, fontWeight: 600 }}>5 objetivos específicos alineados directamente a los 5 entregables del proyecto</span>
        </div>
      </div>
    </div>
  )
}
