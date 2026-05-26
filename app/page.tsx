'use client'

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const NAV = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'contexto', label: 'Contexto' },
  { id: 'objetivos', label: 'Objetivos' },
  { id: 'presupuesto', label: 'Presupuesto' },
  { id: 'cronograma', label: 'Cronograma' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'comunicacion', label: 'Comunicación' },
]

const CAPEX_PHASES = [
  { phase: '1.1 Gestión y Gobernanza', hours: 124, cost: 6200 },
  { phase: '1.2 Infraestructura Cloud y Azure', hours: 292, cost: 11080 },
  { phase: '1.3 Parametrización e Implementación ERP', hours: 672, cost: 28320 },
  { phase: '1.4 Migración de Datos y Pruebas', hours: 436, cost: 18760 },
  { phase: '1.5 Gestión del Cambio y Capacitación', hours: 1340, cost: 63800 },
]
const CAPEX_TOTAL = 128160

const OPEX_ITEMS = [
  { label: 'Licencia SaaS ERP', monthly: 455, desc: 'Módulos financieros, logísticos y contables' },
  { label: 'Licencia SaaS RRHH', monthly: 250, desc: 'Módulo de RRHH y planillas' },
  { label: 'Infraestructura Cloud', monthly: 135, desc: 'Microsoft Azure · 99.97% SLA' },
  { label: 'Soporte Técnico 24/7', monthly: 70, desc: 'Resolución de tickets conforme a SLA' },
]

const CASH_FLOW = [
  { period: 'Jun 2026', activity: 'Gobernanza + Infraestructura + Parametrización + Migración (inicio)', capex: 34640, opex: null },
  { period: 'Jul 2026', activity: 'Seguridad + Parametrización (fin) + Pruebas unitarias + Manuales', capex: 33120, opex: null },
  { period: 'Ago 2026', activity: 'Pruebas en sitio + Manuales (fin) + Plan de capacitación', capex: 12800, opex: null },
  { period: 'Sep 2026', activity: 'Go-Live (02/09) · Capacitación + Índice de adopción + Soporte', capex: 26200, opex: 910, highlight: true },
  { period: 'Oct 2026', activity: 'Soporte post-implementación + Cierre contractual (28/10)', capex: 21400, opex: 910 },
  { period: 'Nov 2026 – May 2028', activity: 'Servicio SaaS activo (19 meses restantes del contrato)', capex: null, opex: 17290 },
]

const TIMELINE = [
  {
    month: 'JUN', year: '2026', label: 'Inicio', accent: 'bg-slate-900',
    items: ['Acta constitutiva', 'Infraestructura Azure', 'Parametrización ERP', 'Migración datos'],
  },
  {
    month: 'JUL', year: '2026', label: 'Desarrollo', accent: 'bg-slate-700',
    items: ['Seguridad PBAC', 'Fin parametrización', 'Pruebas unitarias', 'Manuales (inicio)'],
  },
  {
    month: 'AGO', year: '2026', label: 'Pruebas UAT', accent: 'bg-slate-600',
    items: ['Pruebas en sitio', 'Fin manuales', 'Plan de capacitación', 'Aprobaciones UAT'],
  },
  {
    month: 'SEP', year: '2026', label: 'Go-Live', accent: 'bg-blue-600', highlight: true,
    items: ['Go-Live 02/09', 'Capacitación', 'Índice adopción', 'Soporte activo'],
  },
  {
    month: 'OCT', year: '2026', label: 'Cierre', accent: 'bg-emerald-700',
    items: ['Soporte post-impl.', 'Estabilización', 'Cierre contractual', '28/10 — SICOP'],
  },
]

const CONSULTANTS = [
  { name: 'Josué Montero', role: 'Director del Proyecto', hours: 336, cost: 16800, rate: 50 },
  { name: 'Pablo Alvarado', role: 'Líder Infraestructura Cloud', hours: 472, cost: 23600, rate: 50 },
  { name: 'Erick Torres', role: 'Líder Costos y Adquisiciones', hours: 276, cost: 13800, rate: 50 },
  { name: 'Kristel Duarte', role: 'Líder Gestión del Cambio', hours: 480, cost: 24000, rate: 50 },
  { name: 'Siandi Araya', role: 'Asistente Técnico / Analista Funcional', hours: 548, cost: 27400, rate: 50 },
]

const TECHNICAL = [
  { name: 'Ingeniero Cloud', role: 'Ejecutor Técnico · Azure', hours: 136, cost: 4080, rate: 30 },
  { name: 'Consultor ERP', role: 'Ejecutor Técnico · Parametrización', hours: 416, cost: 12480, rate: 30 },
  { name: 'Especialista Seguridad', role: 'Ejecutor Técnico · Ciberseguridad', hours: 104, cost: 3120, rate: 30 },
  { name: 'Ingeniero Datos', role: 'Ejecutor Técnico · Migración', hours: 96, cost: 2880, rate: 30 },
]

const fmt = (n: number) => `$${n.toLocaleString('en-US')}`

function Initials({ name }: { name: string }) {
  const parts = name.split(' ')
  return <>{parts[0][0]}{parts[1]?.[0] ?? ''}</>
}

function SectionHeader({ n, title, sub }: { n: string; title: string; sub: string }) {
  return (
    <div className="flex items-start gap-3 mb-14">
      <span className="text-8xl font-light leading-none select-none text-slate-100 -mt-4">{n}</span>
      <div>
        <h2 className="text-3xl font-light text-slate-900 leading-snug">{title}</h2>
        <p className="text-sm text-slate-400 mt-1">{sub}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-semibold text-slate-800 tracking-wide uppercase">SINART</span>
            <span className="w-px h-3 bg-slate-300" />
            <span className="text-slate-500">ERP &amp; RRHH · 2026</span>
          </div>
          <div className="hidden md:flex items-center gap-7">
            {NAV.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── 00 · Hero ── */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center pt-14">
        <div className="max-w-7xl mx-auto px-6 py-24 w-full">

          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-8">
            EIF 500 · Administración de Proyectos · Universidad Nacional de Costa Rica · I Ciclo 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-extralight text-slate-900 leading-tight mb-6 max-w-4xl">
            Implementación<br />
            <span className="font-semibold">ERP &amp; RRHH</span><br />
            en la Nube
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-16">
            Contratación para la modernización tecnológica del Sistema Nacional de Radio y Televisión
            de Costa Rica mediante una plataforma SaaS unificada sobre Microsoft Azure.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: '108', label: 'Días de implementación', accent: true },
              { value: '$150K', label: 'Presupuesto total USD', accent: false },
              { value: '9', label: 'Recursos del equipo', accent: false },
              { value: '24', label: 'Meses contrato SaaS', accent: false },
            ].map(({ value, label, accent }) => (
              <div key={label} className={`border-l-2 pl-4 ${accent ? 'border-blue-600' : 'border-slate-200'}`}>
                <div className="text-4xl font-light text-slate-900">{value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide mt-1">{label}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Cliente', value: 'SINART S.A.' },
              { label: 'Director del Proyecto', value: 'Josué Montero' },
              { label: 'Fecha de Inicio', value: '1 de junio, 2026' },
              { label: 'Cierre Contractual', value: '28 de octubre, 2026' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">{label}</div>
                <div className="text-sm font-medium text-slate-800">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 · Contexto ── */}
      <section id="contexto" className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader n="01" title="Contexto y Justificación" sub="Situación actual del SINART y propósito del proyecto" />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">El Problema</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                El SINART enfrenta retos operativos críticos debido a la{' '}
                <strong className="font-semibold text-slate-900">fragmentación de su información</strong>{' '}
                financiera, administrativa y de planillas, procesada en sistemas aislados o de forma manual.
                Esto limita la visibilidad en tiempo real de los costos de producción y la toma de
                decisiones estratégicas.
              </p>
              <ul className="space-y-3">
                {[
                  'Sistemas de información aislados y desconectados',
                  'Procesamiento manual de planillas y datos financieros',
                  'Sin visibilidad en tiempo real de costos de producción',
                  'Toma de decisiones estratégicas sin datos integrados',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">La Solución</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Modernizar y centralizar la gestión institucional mediante un{' '}
                <strong className="font-semibold text-slate-900">sistema ERP y RRHH unificado</strong>{' '}
                bajo el modelo SaaS en infraestructura Microsoft Azure de nivel empresarial, garantizando
                el cumplimiento legal y normativo del sector público costarricense.
              </p>
              <ul className="space-y-3">
                {[
                  'Plataforma ERP + RRHH integrada en la nube (SaaS)',
                  'Microsoft Azure con disponibilidad garantizada del 99.97%',
                  'Automatización de flujos de trabajo institucionales',
                  'Gestión vía plataforma SICOP conforme a derecho público',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 · Objetivos ── */}
      <section id="objetivos" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader n="02" title="Objetivos del Proyecto" sub="Triple restricción ampliada: Alcance · Tiempo · Costo" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: '01',
                title: 'Alcance y Calidad',
                body: 'Implementar el 100% de los módulos críticos adquiridos y desplegar un plan integral de gestión del cambio organizacional.',
                criterion: 'Aprobación formal del 100% de los casos de prueba UAT por las jefaturas fiscalizadoras de cada departamento del SINART.',
                tags: ['Financiero', 'Administrativo', 'Recursos Humanos', 'Control de Planillas'],
              },
              {
                n: '02',
                title: 'Tiempo y Cronograma',
                body: 'Cumplir estrictamente la ventana de 108 días con Go-Live modular el 1 de septiembre de 2026 y cierre operativo el 28 de octubre.',
                criterion: 'Plazo institucional inamovible. Cualquier desviación en hitos críticos afecta los compromisos legales en SICOP.',
                tags: ['Go-Live: 01/09/2026', 'Cierre: 28/10/2026', '108 días', 'SICOP'],
              },
              {
                n: '03',
                title: 'Costos y Presupuesto',
                body: 'Mantener la inversión de implementación y los costos de licenciamiento dentro del techo contractual de $150,000 USD.',
                criterion: 'Registro preciso de cada orden de compra y avance de contrato en la plataforma de contratación pública SICOP.',
                tags: ['CAPEX: $128,160', 'OPEX: $21,840', 'Total: $150,000', 'SICOP'],
              },
            ].map(({ n, title, body, criterion, tags }) => (
              <div
                key={n}
                className="border border-slate-100 rounded-xl p-8 flex flex-col hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="text-5xl font-extralight text-slate-100 mb-6 leading-none">{n}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-3">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{body}</p>
                <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-800 leading-relaxed mb-5">
                  <span className="font-semibold">Criterio de éxito: </span>{criterion}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span key={t} className="text-xs bg-slate-50 border border-slate-100 text-slate-600 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 · Enfoque ── */}
      <section className="bg-slate-900 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-3 mb-14">
            <span className="text-8xl font-light leading-none select-none text-slate-800 -mt-4">03</span>
            <div>
              <h2 className="text-3xl font-light text-white leading-snug">Enfoque Híbrido</h2>
              <p className="text-sm text-slate-500 mt-1">Marcos predictivo y adaptativo integrados</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Componente Predictivo</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Aplicado de manera estricta en la gestión de costos, gobernanza contractual y reportes
                financieros en SICOP. El marco normativo de la contratación pública costarricense exige
                planificación detallada desde el inicio del ciclo de vida.
              </p>
              <ul className="space-y-2">
                {['Gestión de costos y presupuesto', 'Gobernanza contractual (SICOP)', 'Adquisiciones del Estado', 'Control de entregables formales', 'Fecha límite inamovible: 28/10/2026'].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Componente Adaptativo</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Utilizado en la parametrización modular, migración de datos, diseño de arquitectura cloud
                y retroalimentación con usuarios finales. Permite entregas de valor incrementales y
                ajustes rápidos antes del Go-Live.
              </p>
              <ul className="space-y-2">
                {['Parametrización modular del software', 'Migración inicial de datos históricos', 'Arquitectura cloud interactiva (Azure)', 'Pruebas UAT con retroalimentación continua', 'Iteraciones rápidas previas al Go-Live'].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 · Presupuesto ── */}
      <section id="presupuesto" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader n="04" title="Presupuesto del Proyecto" sub="Estructura CAPEX / OPEX · Techo contractual: $150,000 USD" />

          {/* Overview cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            <div className="bg-slate-900 text-white rounded-xl p-8">
              <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">Presupuesto Total</div>
              <div className="text-4xl font-light mb-1">$150,000</div>
              <div className="text-xs text-slate-400">Techo contractual · 2 años</div>
            </div>
            <div className="border border-slate-100 rounded-xl p-8">
              <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">CAPEX · 85.44%</div>
              <div className="text-4xl font-light text-slate-900 mb-1">$128,160</div>
              <div className="text-xs text-slate-500 mb-4">Implementación · Jun–Oct 2026 · 2,864 h</div>
              <div className="h-1 bg-slate-100 rounded-full">
                <div className="h-1 bg-slate-900 rounded-full" style={{ width: '85.44%' }} />
              </div>
            </div>
            <div className="border border-slate-100 rounded-xl p-8">
              <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">OPEX · 14.56%</div>
              <div className="text-4xl font-light text-slate-900 mb-1">$21,840</div>
              <div className="text-xs text-slate-500 mb-4">SaaS · 24 meses · $910/mes</div>
              <div className="h-1 bg-slate-100 rounded-full">
                <div className="h-1 bg-blue-500 rounded-full" style={{ width: '14.56%' }} />
              </div>
            </div>
          </div>

          {/* CAPEX phases */}
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            CAPEX — Desglose por Fase
          </h3>
          <div className="space-y-3 mb-16">
            {CAPEX_PHASES.map(({ phase, hours, cost }) => {
              const pct = (cost / CAPEX_TOTAL) * 100
              return (
                <div key={phase} className="flex items-center gap-4">
                  <div className="w-72 text-sm text-slate-600 flex-shrink-0 hidden md:block truncate">{phase}</div>
                  <div className="flex-1 h-8 bg-slate-50 rounded-lg relative overflow-hidden border border-slate-100">
                    <div
                      className="h-full bg-slate-800 rounded-lg transition-all"
                      style={{ width: `${pct}%` }}
                    />
                    <span className="absolute inset-0 flex items-center px-3 text-xs font-medium text-white">
                      {fmt(cost)}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 w-14 text-right flex-shrink-0">{hours}h</div>
                </div>
              )
            })}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-100">
              <div className="w-72 text-sm font-semibold text-slate-900 hidden md:block">Total CAPEX</div>
              <div className="flex-1 text-sm font-semibold text-slate-900">{fmt(CAPEX_TOTAL)}</div>
              <div className="text-xs text-slate-600 w-14 text-right font-medium">2,864h</div>
            </div>
          </div>

          {/* OPEX */}
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            OPEX — Arrendamiento Mensual · $910/mes · 24 meses = $21,840
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {OPEX_ITEMS.map(({ label, monthly, desc }) => (
              <div key={label} className="border border-slate-100 rounded-xl p-5">
                <div className="text-2xl font-light text-slate-900 mb-1">
                  ${monthly}<span className="text-xs text-slate-400 font-normal">/mes</span>
                </div>
                <div className="text-sm font-medium text-slate-700 mb-1">{label}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>

          {/* Cash flow table */}
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Flujo de Caja del Proyecto
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  {['Período', 'Actividad Principal', 'CAPEX', 'OPEX', 'Total'].map((h, i) => (
                    <th
                      key={h}
                      className={`py-3 text-xs font-semibold uppercase tracking-widest text-slate-400 ${i > 1 ? 'text-right' : 'text-left'} ${i === 1 ? 'pr-8' : i > 0 ? 'pl-4' : 'pr-4'}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CASH_FLOW.map((row) => {
                  const total = (row.capex ?? 0) + (row.opex ?? 0)
                  return (
                    <tr
                      key={row.period}
                      className={`border-b border-slate-50 ${(row as { highlight?: boolean }).highlight ? 'bg-blue-50' : ''}`}
                    >
                      <td className="py-3 pr-4 font-medium text-slate-700 whitespace-nowrap">{row.period}</td>
                      <td className="py-3 pr-8 text-slate-500 text-xs leading-relaxed">{row.activity}</td>
                      <td className="py-3 pl-4 text-right text-slate-700">{row.capex ? fmt(row.capex) : '—'}</td>
                      <td className="py-3 pl-4 text-right text-slate-700">{row.opex ? fmt(row.opex) : '—'}</td>
                      <td className="py-3 pl-4 text-right font-semibold text-slate-900">{fmt(total)}</td>
                    </tr>
                  )
                })}
                <tr className="bg-slate-50">
                  <td className="py-3 pr-4 font-semibold text-slate-900">TOTAL</td>
                  <td className="py-3 pr-8 text-xs text-slate-500">Implementación completa + 24 meses SaaS</td>
                  <td className="py-3 pl-4 text-right font-semibold text-slate-900">$128,160</td>
                  <td className="py-3 pl-4 text-right font-semibold text-slate-900">$21,840</td>
                  <td className="py-3 pl-4 text-right font-semibold text-slate-900">$150,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 05 · Cronograma ── */}
      <section id="cronograma" className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader n="05" title="Cronograma del Proyecto" sub="Hitos clave · Junio – Octubre 2026 · 108 días" />

          <div className="relative">
            <div className="hidden md:block absolute left-8 right-8 h-px bg-slate-200 top-8 z-0" />
            <div className="grid md:grid-cols-5 gap-5">
              {TIMELINE.map(({ month, year, label, accent, items, highlight }) => (
                <div key={month} className="relative z-10">
                  <div className={`w-16 h-16 rounded-full ${accent} flex flex-col items-center justify-center mb-5 mx-auto md:mx-0 shadow-sm`}>
                    <span className="text-white text-xs font-bold leading-tight">{month}</span>
                    <span className="text-white/60 text-xs leading-tight">{year}</span>
                  </div>
                  <div className={`rounded-xl p-5 ${highlight ? 'bg-blue-600 text-white' : 'bg-white border border-slate-100'}`}>
                    <div className={`text-sm font-semibold mb-3 ${highlight ? 'text-white' : 'text-slate-900'}`}>{label}</div>
                    <ul className="space-y-1">
                      {items.map((item) => (
                        <li key={item} className={`text-xs ${highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                          · {item}
                        </li>
                      ))}
                    </ul>
                    {highlight && (
                      <div className="mt-3 text-xs font-semibold text-blue-200 bg-blue-700 rounded px-2 py-1 text-center">
                        Hito crítico
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-5">
            {[
              { label: 'Inicio del Proyecto', value: '1 Jun 2026' },
              { label: 'Go-Live modular', value: '2 Sep 2026' },
              { label: 'Cierre contractual', value: '28 Oct 2026' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white border border-slate-100 rounded-xl p-5 text-center">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">{label}</div>
                <div className="text-lg font-semibold text-slate-900">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 · Equipo ── */}
      <section id="equipo" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader n="06" title="Equipo del Proyecto" sub="5 consultores de gestión + 4 ejecutores técnicos · 2,864 horas totales" />

          {/* Org hierarchy */}
          <div className="flex flex-col items-center mb-14">
            <div className="bg-slate-900 text-white rounded-xl px-6 py-3 text-center text-sm mb-4">
              <div className="font-medium">Dirección Ejecutiva SINART S.A.</div>
              <div className="text-slate-400 text-xs">Patrocinador</div>
            </div>
            <div className="w-px h-5 bg-slate-200" />
            <div className="border-2 border-slate-300 rounded-xl px-6 py-3 text-center text-sm mb-4">
              <div className="font-medium text-slate-700">Comité de Control de Cambios</div>
              <div className="text-slate-400 text-xs">Álvarez · Castro · Salazar · Téllez</div>
            </div>
            <div className="w-px h-5 bg-slate-200" />
            <div className="bg-blue-600 text-white rounded-xl px-8 py-3 text-center text-sm">
              <div className="font-semibold">Josué Montero</div>
              <div className="text-blue-200 text-xs">Director del Proyecto (PM)</div>
            </div>
          </div>

          {/* Consultants */}
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
            Equipo Consultor · $50/h
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {CONSULTANTS.filter(c => c.name !== 'Josué Montero').map(({ name, role, hours, cost }) => (
              <div
                key={name}
                className="border border-slate-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-sm font-semibold mb-3">
                  <Initials name={name} />
                </div>
                <div className="text-sm font-semibold text-slate-900 mb-0.5">{name}</div>
                <div className="text-xs text-slate-400 leading-tight mb-4">{role}</div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-50 text-xs">
                  <span className="text-slate-400">{hours}h</span>
                  <span className="font-semibold text-slate-700">{fmt(cost)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical */}
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
            Equipo de Ejecución Técnica · $30/h
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TECHNICAL.map(({ name, role, hours, cost }) => (
              <div key={name} className="border border-dashed border-slate-200 rounded-xl p-5">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 text-xs font-semibold mb-3">
                  <Initials name={name} />
                </div>
                <div className="text-sm font-medium text-slate-700 mb-0.5">{name}</div>
                <div className="text-xs text-slate-400 leading-tight mb-4">{role}</div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-50 text-xs">
                  <span className="text-slate-400">{hours}h</span>
                  <span className="font-medium text-slate-600">{fmt(cost)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 · Comunicación ── */}
      <section id="comunicacion" className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader n="07" title="Plan de Comunicación" sub="Estrategia híbrida contractual y operativa · 2 años de vigencia" />

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {[
              {
                title: 'Comunicación Contractual y de Gobernanza',
                body: 'Flujos de información formales, escritos y auditables dirigidos a las jefaturas del SINART y administradores del contrato.',
                items: ['Informes mensuales de rendimiento (CAPEX/OPEX)', 'Minutas de reunión de avance (semanal)', 'Notificaciones y entregables en SICOP', 'Cartas de aceptación de hitos con firma digital'],
              },
              {
                title: 'Comunicación Operativa y de Adopción',
                body: 'Canales dinámicos e interactivos orientados al equipo consultor ejecutor y a los usuarios finales del SINART.',
                items: ['Sesiones diarias de sincronización (15 min · Teams)', 'Reportes de pruebas en sitio modulares', 'Convocatorias de capacitación (2 semanas antes)', 'Reporte quincenal de índice de adopción'],
              },
            ].map(({ title, body, items }) => (
              <div key={title} className="bg-white border border-slate-100 rounded-xl p-8">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{body}</p>
                <ul className="space-y-2">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tools */}
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
            Herramientas Oficiales
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { tool: 'Microsoft Teams', use: 'Sincronización diaria, reuniones virtuales de seguimiento con jefaturas SINART y comités extraordinarios de control de cambios.' },
              { tool: 'Microsoft OneDrive', use: 'Repositorio centralizado en Azure para minutas, planos técnicos, manuales de usuario y cartas de aceptación de hitos.' },
              { tool: 'SICOP', use: 'Canal legal y obligatorio regulado por la legislación costarricense para oficialización de entregables, cambios contractuales y facturación.' },
            ].map(({ tool, use }) => (
              <div key={tool} className="bg-white border border-slate-100 rounded-xl p-6">
                <div className="text-sm font-semibold text-slate-900 mb-2">{tool}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{use}</div>
              </div>
            ))}
          </div>

          {/* Escalation */}
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
            Protocolo de Escalamiento — 3 Niveles
          </h3>
          <div className="space-y-3">
            {[
              {
                n: '1',
                level: 'Nivel Operativo',
                desc: 'Desviaciones técnicas menores en parametrización ERP o contratiempos en Azure. Resolución directa entre Pablo Alvarado y la contraparte técnica del SINART (Jimmy Téllez / Francisco Castro).',
                trigger: 'Inmediato',
              },
              {
                n: '2',
                level: 'Nivel de Gestión',
                desc: 'Si el problema persiste más de 48 horas sin resolución o requiere ajuste al cronograma, se traslada al Director del Proyecto para negociación con jefes de departamento SINART.',
                trigger: '> 48h sin resolución',
              },
              {
                n: '3',
                level: 'Nivel Directivo',
                desc: 'Si el conflicto compromete el alcance original, el techo de $150,000 USD o la fecha del 28/10/2026, el PM convoca formalmente al Comité de Control de Cambios e informa a la Dirección Ejecutiva.',
                trigger: 'Impacto en triple restricción',
              },
            ].map(({ n, level, desc, trigger }) => (
              <div key={n} className="bg-white border border-slate-100 rounded-xl p-6 flex gap-5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 flex-shrink-0">
                  {n}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-900 mb-1">{level}</div>
                  <div className="text-sm text-slate-500 leading-relaxed">{desc}</div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-xs text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                    {trigger}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            <div>
              <div className="text-sm font-semibold text-slate-900 mb-1">
                ERP &amp; RRHH en la Nube · SINART S.A.
              </div>
              <div className="text-xs text-slate-400">
                EIF 500: Administración de Proyectos · Universidad Nacional de Costa Rica · I Ciclo 2026
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                MSc. Walter Díaz Argueta
              </div>
            </div>
            <div className="text-xs text-slate-400 space-y-0.5 md:text-right">
              <div>Presupuesto total: $150,000 USD</div>
              <div>108 días de implementación · 24 meses SaaS</div>
              <div>Go-Live: 2 Sep 2026 · Cierre: 28 Oct 2026</div>
            </div>
          </div>
          <div className="border-t border-slate-50 pt-6 flex flex-wrap gap-x-8 gap-y-1 text-xs text-slate-400">
            <span>Pablo Alvarado Umaña</span>
            <span>Kristel Duarte Perez</span>
            <span>Erick Torres Hernández</span>
            <span>Siandi Araya Bello</span>
            <span>Josue Montero Villalobos</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
