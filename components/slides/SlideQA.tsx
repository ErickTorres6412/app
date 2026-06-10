'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

const QA = [
  {
    q: '¿Por qué escogieron este tema?',
    a: 'Miles de estudiantes deben migrar para estudiar y enfrentan una búsqueda de alojamiento informal, insegura y desorganizada; no existe en Costa Rica una plataforma especializada para esta población.',
  },
  {
    q: '¿Cuál es la innovación del proyecto?',
    a: 'El algoritmo de emparejamiento híbrido de dos capas (contenido + colaborativo) combinado con verificación de identidad institucional y espacios de comunidad, en una sola plataforma para universitarios.',
  },
  {
    q: '¿Qué lo diferencia de trabajos anteriores?',
    a: 'A nivel internacional existen sistemas de asignación de roommates con IA, pero en Costa Rica hay un vacío: ninguna plataforma local integra verificación + emparejamiento por ML + comunidad.',
  },
  {
    q: '¿Es técnicamente viable?',
    a: 'Sí. Se usa un stack maduro (NestJS, Next.js, PostgreSQL, Prisma/TypeScript) y un modelo de prueba de concepto con datos sintéticos que reduce el riesgo técnico.',
  },
  {
    q: '¿Cómo validarán los resultados?',
    a: 'Con pruebas funcionales (caja negra y blanca), sesiones de usabilidad con estudiantes de la sede interuniversitaria de la UNA, y métricas de precisión, exhaustividad y F1.',
  },
  {
    q: '¿Cuáles son los riesgos del proyecto?',
    a: 'El problema del inicio en frío (mitigado por el diseño adaptativo de dos capas), la disponibilidad de datos reales (abordada con perfiles sintéticos) y el cumplimiento normativo de datos personales.',
  },
  {
    q: '¿Quiénes serán los beneficiarios?',
    a: 'Los estudiantes universitarios costarricenses que buscan alojamiento compartido y compañeros compatibles, y de forma indirecta los arrendadores sin canales formales.',
  },
  {
    q: '¿Qué limitaciones tiene la propuesta?',
    a: 'En la etapa de TFG la verificación usa base de datos de prueba y perfiles sintéticos (no integración registral completa), y el alcance se centra en un prototipo validado en condiciones controladas.',
  },
]

export function SlideQA() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ padding: '40px 60px', background: C.bgAlt, height: '100%', boxSizing: 'border-box', display: 'flex', gap: 28 }}>
      {/* Cierre */}
      <div style={{ width: 270, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Label>Cierre</Label>
        <div style={{ background: C.primary, borderRadius: 14, padding: '24px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ color: C.white, fontSize: 13.5, fontWeight: 600, lineHeight: 1.7, margin: 0 }}>
            Este anteproyecto propone una solución para el acceso a vivienda estudiantil compartida y la integración entre universitarios costarricenses, utilizando una plataforma web con verificación de identidad y un algoritmo híbrido de emparejamiento basado en aprendizaje automático.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12.5, lineHeight: 1.65, margin: 0 }}>
            Esperamos que los resultados contribuyan a mejorar la seguridad, el bienestar y el sentido de comunidad de los estudiantes que deben migrar para estudiar.
          </p>
          <div style={{ marginTop: 'auto', background: 'rgba(241,148,138,0.2)', borderRadius: 8, padding: '10px 14px', color: C.accent, fontSize: 13, fontWeight: 700, lineHeight: 1.5 }}>
            "Muchas gracias por su atención. Quedamos atentos a sus consultas y observaciones."
          </div>
        </div>
      </div>

      {/* Q&A */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <MessageCircle size={14} color={C.secondary} />
          <span style={{ color: C.muted, fontSize: 10, letterSpacing: 2, fontWeight: 700, textTransform: 'uppercase' }}>Posibles preguntas del tribunal</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1, overflowY: 'auto' }}>
          {QA.map((item, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 10, overflow: 'hidden', boxShadow: '0 1px 5px rgba(0,0,0,0.04)', border: open === i ? `1px solid ${C.secondary}` : '1px solid transparent' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, textAlign: 'left' }}
              >
                <span style={{ fontSize: 12.5, fontWeight: 700, color: open === i ? C.secondary : C.text, lineHeight: 1.4 }}>{i + 1}. {item.q}</span>
                {open === i ? <ChevronUp size={14} color={C.secondary} style={{ flexShrink: 0 }} /> : <ChevronDown size={14} color={C.muted} style={{ flexShrink: 0 }} />}
              </button>
              {open === i && (
                <div style={{ padding: '0 14px 12px', fontSize: 12, color: C.muted, lineHeight: 1.6 }}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
