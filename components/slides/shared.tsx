import { C } from './constants'

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: C.secondary, fontSize: 11, letterSpacing: 2.5, fontWeight: 700, marginBottom: 10, textTransform: 'uppercase' }}>
      {children}
    </div>
  )
}

export function HBar({ label, pct, color, note }: { label: string; pct: number; color: string; note: string }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 13, color: C.text, fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 12, color, fontWeight: 700 }}>{note}</span>
      </div>
      <div style={{ background: C.light, borderRadius: 4, height: 8 }}>
        <div style={{ background: color, width: `${pct}%`, height: 8, borderRadius: 4 }} />
      </div>
    </div>
  )
}

export function RiskRow({ id, desc, level, score, mitigation }: {
  id: string; desc: string; level: 'EXTREMO' | 'ALTO'; score: number; mitigation: string
}) {
  const color = level === 'EXTREMO' ? '#8B0000' : C.danger
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '52px 1fr 90px 1fr', gap: 0, padding: '10px 18px', borderBottom: `1px solid ${C.light}`, alignItems: 'start' }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: C.primary }}>{id}</span>
      <span style={{ fontSize: 12, color: C.text, paddingRight: 12 }}>{desc}</span>
      <span style={{ background: color, color: '#fff', fontSize: 10, fontWeight: 700, borderRadius: 4, padding: '2px 8px', letterSpacing: 1, width: 'fit-content' }}>
        {level} {score}
      </span>
      <span style={{ fontSize: 11, color: C.muted, paddingLeft: 8 }}>{mitigation}</span>
    </div>
  )
}
