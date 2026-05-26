import { Cloud, DollarSign, Lock, Users, ShieldCheck } from 'lucide-react'
import { C } from './constants'
import { Label } from './shared'

export function SlideSolucion() {
  const pilares = [
    { 
      icon: <DollarSign size={22} color={C.primary} />, 
      title: 'Gestión de Finanzas', 
      desc: 'Centraliza Contabilidad, Compras, Inventarios y Activos Fijos. Resuelve la fragmentación operativa y elimina los silos de información en tiempo real.', 
      color: C.primary 
    },
    { 
      icon: <Users size={22} color={C.primary} />, 
      title: 'Gestión de Capital Humano', 
      desc: 'Automatiza expedientes y el cálculo de planillas bajo la ley de Costa Rica. Mitiga por completo el riesgo de multas ante la CCSS y Hacienda.', 
      color: C.primary 
    },
    { 
      icon: <Cloud size={22} color={C.secondary} />, 
      title: 'Infraestructura Azure Cloud', 
      desc: 'Arquitectura SaaS en la nube que elimina servidores locales, reduce costos de mantenimiento y asegura alta disponibilidad del sistema.', 
      color: C.secondary 
    },
    { 
      icon: <Lock size={22} color={C.secondary} />, 
      title: 'Seguridad de Datos (PBAC)', 
      desc: 'Control estricto de accesos confidenciales basado en roles. Resuelve el riesgo de fuga o manipulación de datos sensibles del SINART.', 
      color: C.secondary 
    },
  ]

  return (
    <div style={{ 
      padding: 'clamp(24px, 6vh, 72px) clamp(40px, 10%, 140px)',
      background: C.bgAlt, 
      height: '100vh',
      width: '100%',
      boxSizing: 'border-box', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'clamp(12px, 2vh, 24px)',
    }}>
      
      {/* HEADER */}
      <div style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <Label>Solución</Label>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '12px',
          marginBottom: 'clamp(10px, 2vh, 24px)',
        }}>
          <h2 style={{ color: C.primary, fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>
            Ecosistema ERP + RRHH
          </h2>
          <div style={{ 
            background: C.primary, 
            color: C.white, 
            borderRadius: 6, 
            padding: 'clamp(5px, 0.6vw, 10px) clamp(10px, 1.2vw, 18px)',
            fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)',
            fontWeight: 700, 
            letterSpacing: '0.5px',
            whiteSpace: 'nowrap'
          }}>
            Arrendamiento Operativo SaaS
          </div>
        </div>

        {/* Grid:  2 columnas × 2 filas */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: 'clamp(20px, 1vh, 30px) clamp(20px, 2vw, 30px)',
          flex: 1,
          minHeight: 0,
        }}>
          {pilares.map(pilar => (
            <div key={pilar.title} style={{ 
              background: C.white, 
              borderRadius: 12, 
              padding: 'clamp(14px, 2.5vh, 32px) clamp(14px, 2vw, 28px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)', 
              borderTop: `4px solid ${pilar.color}`, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'clamp(8px, 1.2vh, 16px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1vw, 14px)' }}>
                <div style={{ background: `${pilar.color}12`, padding: 'clamp(6px, 0.8vw, 10px)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {pilar.icon}
                </div>
                <h3 style={{ fontWeight: 700, color: C.text, fontSize: 'clamp(0.95rem, 1.4vw, 1.3rem)', margin: 0 }}>{pilar.title}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {pilar.desc.split('. ').map((sentence, i, arr) => (
                  <p key={i} style={{ fontSize: 'clamp(0.8rem, 1.1vw, 1rem)', color: C.muted, lineHeight: 1.55, margin: 0 }}>
                    {i < arr.length - 1 ? sentence + '.' : sentence}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER: MITIGACIÓN Y ASEGURAMIENTO */}
      <div style={{ 
        padding: 'clamp(10px, 1.5vh, 18px) clamp(12px, 1.5vw, 22px)',
        background: `${C.primary}10`, 
        borderRadius: 8, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 'clamp(8px, 1vw, 14px)',
        border: `1px solid ${C.primary}20`,
        width: '100%',
        boxSizing: 'border-box',
        flexShrink: 0,
      }}>
        <ShieldCheck size={22} color={C.primary} style={{ flexShrink: 0 }} />
        <span style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)', color: C.primary, fontWeight: 600, lineHeight: 1.45 }}>
          <strong style={{ fontWeight: 800 }}>Control de Calidad Integrado:</strong> El cumplimiento total de los requerimientos y la resolución del problema técnico se garantizó mediante la aprobación del 100% de las pruebas UAT por las Jefaturas del SINART en SICOP.
        </span>
      </div>
      
    </div>
  )
}