import { CheckCircle } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideObjetivos() {
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
    <div style={{ padding: '48px 72px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <h2 style={{ color: C.primary, fontSize: 26, fontWeight: 800, margin: 0 }}>
          Objetivos Específicos
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {especificos.map(obj => (
          <div key={obj.num} style={{ background: C.white, borderRadius: 12, padding: '14px 20px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ background: C.primary, color: C.white, borderRadius: 10, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{obj.num}</div>
            <p style={{ margin: 0, fontSize: 13.5, color: C.text, lineHeight: 1.6 }}>
              <strong style={{ color: C.secondary }}>{obj.accion}</strong>{' '}{obj.desc}
            </p>
          </div>
        ))}
      </div>


    </div>
  )
}
