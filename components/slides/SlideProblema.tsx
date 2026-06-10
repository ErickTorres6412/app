import { Home, AlertTriangle, ShieldAlert } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideProblema() {
  const items = [
    {
      icon: <Home size={22} color={C.secondary} />,
      borderColor: C.secondary,
      title: 'Sobredemanda habitacional universitaria',
      desc: 'Miles de estudiantes costarricenses deben migrar a otras provincias para estudiar. El ingreso estudiantil desde zonas alejadas genera una sobredemanda que supera la capacidad de las residencias universitarias oficiales.',
      fuente: 'Programa Estado de la Nación, 2023',
    },
    {
      icon: <AlertTriangle size={22} color={C.warning} />,
      borderColor: C.warning,
      title: 'Búsqueda informal y ecosistema desregulado',
      desc: 'La búsqueda de alojamiento se traslada a redes sociales y plataformas no especializadas, sin verificación de identidad ni filtros de compatibilidad, creando un ecosistema desregulado y vulnerable.',
      fuente: 'OIJ, 2023',
    },
    {
      icon: <ShieldAlert size={22} color={C.danger} />,
      borderColor: C.danger,
      title: 'Riesgos de fraude, identidad y seguridad',
      desc: 'La exposición en canales informales incrementa los riesgos de fraude inmobiliario, suplantación de identidad y vulnerabilidad física o patrimonial para los estudiantes universitarios.',
      fuente: 'FTC, 2023',
    },
  ]

  return (
    <div style={{ padding: '48px 64px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      <Label>Contexto y Antecedentes</Label>
      <h2 style={{ color: C.primary, fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
        Miles de estudiantes enfrentan una búsqueda de alojamiento insegura
      </h2>
      <p style={{ color: C.muted, fontSize: 13, marginBottom: 24, lineHeight: 1.6, maxWidth: 700 }}>
        El tema surge por la movilidad estudiantil universitaria en Costa Rica y la ausencia de una plataforma especializada que resuelva de forma segura y verificada la convivencia compartida.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, flex: 1, marginBottom: 18 }}>
        {items.map(item => (
          <div key={item.title} style={{ background: C.white, borderRadius: 12, padding: '22px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderTop: `4px solid ${item.borderColor}`, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {item.icon}
              <span style={{ fontWeight: 700, color: C.text, fontSize: 14, lineHeight: 1.3 }}>{item.title}</span>
            </div>
            <p style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.6, margin: 0, flex: 1 }}>{item.desc}</p>
            <div style={{ background: `${item.borderColor}12`, borderRadius: 6, padding: '4px 10px', fontSize: 10.5, color: item.borderColor, fontWeight: 600 }}>
              Fuente: {item.fuente}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '12px 18px', background: C.white, borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <AlertTriangle size={16} color={C.secondary} style={{ flexShrink: 0 }} />
        <span style={{ fontSize: 12.5, color: C.text, lineHeight: 1.5 }}>
          <strong>Consecuencias:</strong> Mayores niveles de conflicto entre compañeros, menor rendimiento académico y un debilitamiento del sentido de pertenencia institucional.{' '}
          <span style={{ color: C.muted }}>(Adeniyi et al., 2024)</span>
        </span>
      </div>
    </div>
  )
}
