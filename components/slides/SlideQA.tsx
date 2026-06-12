'use client'
import { ShieldCheck, Heart, Users } from 'lucide-react'
import { C } from './constants'

const TAKEAWAYS = [
  { icon: <ShieldCheck size={22} color={C.white} />, label: 'Seguridad' },
  { icon: <Heart size={22} color={C.white} />, label: 'Bienestar' },
  { icon: <Users size={22} color={C.white} />, label: 'Comunidad' },
]

export function SlideQA() {
  return (
    <div style={{ padding: '56px 80px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex' }}>
      <div style={{ background: `linear-gradient(150deg, ${C.primary}, ${C.danger})`, borderRadius: 22, padding: '56px 64px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30 }}>
        <div style={{ color: 'rgba(241,148,138,0.85)', fontSize: 12, letterSpacing: 3, fontWeight: 700, textTransform: 'uppercase' }}>Cierre</div>

        <h2 style={{ color: C.white, fontSize: 46, fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
          Conectamos estudiantes,<br />no solo cuartos.
        </h2>

        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, lineHeight: 1.65, margin: 0, maxWidth: 680 }}>
          Una plataforma con verificación de identidad y emparejamiento inteligente para que migrar a estudiar sea más seguro y más humano.
        </p>

        <div style={{ display: 'flex', gap: 14, marginTop: 4 }}>
          {TAKEAWAYS.map(t => (
            <div key={t.label} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '16px 26px', display: 'flex', alignItems: 'center', gap: 12 }}>
              {t.icon}
              <span style={{ color: C.white, fontSize: 16, fontWeight: 700 }}>{t.label}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 14, color: C.accent, fontSize: 20, fontWeight: 700 }}>
          ¡Muchas gracias por su atención!
        </div>
      </div>
    </div>
  )
}
