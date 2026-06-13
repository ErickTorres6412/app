import { Target } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideInversion() {
  return (
    <div style={{ background: C.primary, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '64px 100px', boxSizing: 'border-box', gap: 36 }}>
      <Label>Objetivo General</Label>

      <div style={{ background: 'rgba(241,148,138,0.18)', borderRadius: 16, padding: 16, width: 'fit-content' }}>
        <Target size={36} color={C.accent} />
      </div>

      <p style={{ color: C.white, fontSize: 'clamp(18px, 2.2vw, 28px)', fontWeight: 600, lineHeight: 1.7, margin: 0, textAlign: 'center', maxWidth: 820 }}>
        Desarrollar una plataforma web para la comunidad universitaria costarricense que facilite la búsqueda de alojamiento compartido y la conexión entre estudiantes con estilos de vida compatibles, promoviendo una convivencia{' '}
        <span style={{ color: C.accent }}>segura, confiable</span> y una{' '}
        <span style={{ color: C.accent }}>experiencia universitaria más integrada</span>.
      </p>

      <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
        {['Alojamiento', 'Compatibilidad', 'Comunidad universitaria'].map(tag => (
          <div key={tag} style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '8px 18px', color: C.white, fontSize: 13, fontWeight: 700 }}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}
