import { BookOpen, Users, ShieldCheck, TrendingUp } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideSolucion() {
  const justificacion = [
    {
      icon: <BookOpen size={20} color={C.primary} />,
      titulo: 'Valor académico',
      desc: 'Se enmarca en la investigación aplicada de la Escuela de Informática y aporta un modelo de emparejamiento basado en aprendizaje automático.',
    },
    {
      icon: <ShieldCheck size={20} color={C.secondary} />,
      titulo: 'Valor institucional y social',
      desc: 'Ofrece un espacio seguro y verificado frente a los canales informales que utilizan actualmente los estudiantes.',
    },
    {
      icon: <Users size={20} color={C.warning} />,
      titulo: 'Beneficia a los usuarios',
      desc: 'Brinda una herramienta confiable, accesible e inteligente para encontrar no solo dónde vivir, sino una comunidad.',
    },
    {
      icon: <TrendingUp size={20} color={C.success} />,
      titulo: 'Mejora procesos y decisiones',
      desc: 'Reduce el riesgo de fraude y la incompatibilidad de convivencia, asociada a conflictos y bajo rendimiento académico.',
    },
  ]

  return (
    <div style={{ padding: '48px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      <Label>Planteamiento del Problema y Justificación</Label>

      {/* Pregunta generadora */}
      <div style={{ background: C.primary, borderRadius: 12, padding: '22px 28px', marginBottom: 28 }}>
        <div style={{ color: 'rgba(241,148,138,0.7)', fontSize: 10, letterSpacing: 2, fontWeight: 700, marginBottom: 10, textTransform: 'uppercase' }}>Pregunta de Investigación</div>
        <p style={{ color: C.white, fontSize: 'clamp(13px, 1.4vw, 17px)', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
          ¿De qué manera el desarrollo de una plataforma web orientada a la comunidad universitaria costarricense —que integre búsqueda de alojamiento compartido, emparejamiento entre perfiles afines y espacios de interacción social— puede contribuir a mejorar el acceso a vivienda estudiantil y fortalecer la integración entre estudiantes?
        </p>
      </div>

      {/* Justificación */}
      <div style={{ color: C.muted, fontSize: 11, letterSpacing: 2, fontWeight: 700, marginBottom: 14, textTransform: 'uppercase' }}>¿Por qué es importante?</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, flex: 1 }}>
        {justificacion.map(j => (
          <div key={j.titulo} style={{ background: C.white, borderRadius: 10, padding: '16px 20px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ background: C.light, borderRadius: 8, padding: 10, flexShrink: 0, display: 'flex' }}>
              {j.icon}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: C.text, fontSize: 14, marginBottom: 6 }}>{j.titulo}</div>
              <p style={{ color: C.muted, fontSize: 12.5, lineHeight: 1.55, margin: 0 }}>{j.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, padding: '10px 16px', background: `${C.primary}12`, borderRadius: 8, border: `1px solid ${C.primary}25`, fontSize: 12, color: C.primary, lineHeight: 1.5 }}>
        La plataforma operará bajo la <strong>Ley N.° 8968</strong> de Protección de la Persona frente al Tratamiento de sus Datos Personales, garantizando un manejo responsable y transparente de la información.
      </div>
    </div>
  )
}
