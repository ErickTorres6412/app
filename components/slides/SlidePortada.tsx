import { BookOpen, Clock, Users, GraduationCap } from 'lucide-react'
import { C } from './constants'

export function SlidePortada() {
  return (
    <div style={{ background: C.primary, height: '100%', display: 'flex' }}>
      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '56px 72px' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(241,148,138,0.18)', border: '1px solid rgba(241,148,138,0.35)', borderRadius: 6, padding: '6px 14px', marginBottom: 32, width: 'fit-content' }}>
          <BookOpen size={12} color={C.accent} />
          <span style={{ color: C.accent, fontSize: 11, letterSpacing: 2, fontWeight: 700 }}>ANTEPROYECTO · GRUPO 55 · EIF501 · I CICLO 2026</span>
        </div>

        {/* Title */}
        <h1 style={{ color: C.white, fontSize: 'clamp(28px, 4.2vw, 56px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16, maxWidth: 640 }}>
          COINKI
        </h1>
        <h2 style={{ color: C.accent, fontSize: 'clamp(15px, 2vw, 26px)', fontWeight: 600, lineHeight: 1.3, marginBottom: 32, maxWidth: 640 }}>
          Red de alojamiento y comunidad universitaria
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, marginBottom: 48, lineHeight: 1.7, maxWidth: 580 }}>
          Plataforma web orientada a la comunidad universitaria costarricense que facilita la búsqueda de alojamiento compartido y la conexión entre estudiantes con estilos de vida compatibles.
        </p>

        {/* Team */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, letterSpacing: 2, fontWeight: 700, marginBottom: 10, textTransform: 'uppercase' }}>Proponentes</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { name: 'Erick Torres Hernández', sections: 'Secciones 1–4' },
              { name: 'Josué Montero Villalobos', sections: 'Secciones 5–8' },
              { name: 'Pablo A. Alvarado Umaña', sections: 'Secciones 9–12' },
            ].map(p => (
              <div key={p.name} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: '8px 16px' }}>
                <div style={{ color: C.white, fontSize: 13, fontWeight: 700 }}>{p.name}</div>
                <div style={{ color: C.accent, fontSize: 10, marginTop: 2 }}>{p.sections}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Committee */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[
            { role: 'Tutor', name: 'Pablo Gamboa Camacho' },
            { role: 'Asesor 1', name: 'Rodolfo A. Sánchez Sánchez' },
            { role: 'Asesor 2', name: 'José Pablo Carvajal Chaves' },
            { role: 'Prof. Invest.', name: 'Johnny Villalobos M.' },
          ].map(c => (
            <div key={c.role} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11 }}>
              <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: 4 }}>{c.role}:</span>
              {c.name}
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div style={{ width: 220, background: 'rgba(0,0,0,0.22)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 32, padding: 36 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, letterSpacing: 1.5, fontWeight: 700, marginBottom: 18, textTransform: 'uppercase' }}>Universidad Nacional</div>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(241,148,138,0.2)', border: '2px solid rgba(241,148,138,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
            <GraduationCap size={28} color={C.accent} />
          </div>
          <div style={{ color: C.white, fontSize: 11, fontWeight: 700, lineHeight: 1.5 }}>Escuela de Informática<br />Licenciatura<br />Sistemas Web</div>
        </div>

        {[
          { icon: <Users size={18} color={C.accent} />, v: '3 presentadores', l: 'Grupo 55' },
          { icon: <Clock size={18} color={C.accent} />, v: '~16.5 min', l: 'Tiempo total' },
          { icon: <BookOpen size={18} color={C.accent} />, v: '12 secciones', l: 'Anteproyecto' },
        ].map(s => (
          <div key={s.l} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>{s.icon}</div>
            <div style={{ color: C.white, fontSize: 16, fontWeight: 800 }}>{s.v}</div>
            <div style={{ color: 'rgba(241,148,138,0.65)', fontSize: 10, marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
