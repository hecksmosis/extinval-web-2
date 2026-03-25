import Link from 'next/link'
import EditableField from '@/components/EditableField'
import CMSLoader from '@/components/CMSLoader'

export const metadata = { title: 'Buques Mercantes' }
const PAGE = 'buques-mercantes'

export default function BuquesMercantesPage() {
  return (
    <>
      <CMSLoader pageKey={PAGE} />

      <div className="page-hero">
        <div className="container"><div className="ph-inner">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> › <Link href="/#divisiones">Servicios</Link> ›{' '}
            <span style={{ color: 'var(--gold)' }}>Buques Mercantes</span>
          </div>
          <div style={{ marginBottom: '.75rem' }}>
            <span style={{ background: 'rgba(30,58,138,.25)', border: '1px solid rgba(30,58,138,.45)', color: '#93C5FD', fontSize: '.68rem', fontFamily: 'var(--cond)', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', padding: '.3rem .9rem', display: 'inline-block' }}>
              SOLAS / IMO — Cumplimiento Normativo
            </span>
          </div>
          <h1 className="page-title"><EditableField id="bm-title">Buques Mercantes</EditableField></h1>
          <p className="page-sub">
            <EditableField id="bm-subtitle">
              Cero Deficiencias. Cero Retrasos. Blindaje técnico total ante el Port State Control para buques de carga, tanqueros, graneleros y portacontenedores.
            </EditableField>
          </p>
        </div></div>
      </div>

      <section className="section"><div className="container">
        <div className="svc-detail-grid">

          {/* ── LEFT COLUMN ── */}
          <div>
            <EditableField id="bm-intro" tag="p" block style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              Nuestra división mercante está diseñada para blindar técnicamente a buques de carga, tanqueros, graneleros y portacontenedores. Entendemos la presión del Port State Control; por ello, nuestros protocolos aseguran la operatividad total de los sistemas críticos en Sala de Máquinas, Cubierta y Puente.
            </EditableField>

            {/* INSPECCIÓN Y MANTENIMIENTO */}
            <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.55rem', color: 'var(--navy)', marginBottom: '1.25rem', letterSpacing: '.04em' }}>
              <EditableField id="bm-srv-title">Servicios de Inspección y Mantenimiento (FFE &amp; LSA)</EditableField>
            </h2>

            <div className="svc-section-title">
              <EditableField id="bm-s1-title">1. Sistemas Fijos de Extinción</EditableField>
            </div>
            {[
              ['bm-s1-i1-t', 'CO₂ (+200 cilindros), Water Mist y Espuma',
               'bm-s1-i1-d', 'Inspección anual y quinquenal de sistemas CO₂ (escalable a más de 200 cilindros), Water Mist (Niebla de Agua) y Espuma de Baja y Alta expansión. Análisis de laboratorio obligatorio para espumógenos sometidos a condiciones marinas extremas.'],
              ['bm-s1-i2-t', 'Niebla de Agua para Sala de Máquinas y Cocina',
               'bm-s1-i2-d', 'Revisión de sistemas de niebla de agua para la protección de sala de máquinas, freidoras (deep fat fryers) y espacios de carga de alto riesgo. Comprobación de presiones de activación y boquillas.'],
            ].map(([tId, tDef, dId, dDef]) => (
              <div key={tId} className="svc-item">
                <span className="svc-dot" />
                <div>
                  <strong className="svc-item-title"><EditableField id={tId}>{tDef}</EditableField></strong>
                  <span className="svc-item-text"><EditableField id={dId}>{dDef}</EditableField></span>
                </div>
              </div>
            ))}

            <div className="svc-section-title" style={{ marginTop: '1.5rem' }}>
              <EditableField id="bm-s2-title">2. Botes y Pescantes (Lifeboats &amp; Davits) — Load Testing</EditableField>
            </div>
            {[
              ['bm-s2-i1-t', 'Fabricantes Líderes Certificados — Europa y Asia',
               'bm-s2-i1-d', 'Inspección anual y quinquenal con aprobaciones IACS y de Bandera/Clase. Europa: Hatecke, Global Davit. Asian Key Players: Jiangsu Jiaoyan, Shigi, Mansei, Oriental, Hyundai Lifeboats (Bada), Qingdao Beihai.'],
              ['bm-s2-i2-t', 'Pruebas de Carga Estructural — Grúas, Pescantes y Pasarelas',
               'bm-s2-i2-d', 'Certificación estructural de grúas de provisiones y pescantes. Inspección crítica de pasarelas y escaleras de acomodación. Documentación completa para PSC y IACS.'],
            ].map(([tId, tDef, dId, dDef]) => (
              <div key={tId} className="svc-item">
                <span className="svc-dot" />
                <div>
                  <strong className="svc-item-title"><EditableField id={tId}>{tDef}</EditableField></strong>
                  <span className="svc-item-text"><EditableField id={dId}>{dDef}</EditableField></span>
                </div>
              </div>
            ))}

            <div className="svc-section-title" style={{ marginTop: '1.5rem' }}>
              <EditableField id="bm-s3-title">3. Calibración e Instrumentación en una Sola Visita</EditableField>
            </div>
            {[
              ['bm-s3-i1-t', 'Detectores de Gas, Alcoholímetros, Manómetros y UTI',
               'bm-s3-i1-d', 'Servicio integral en una sola visita a bordo: detectores de gas, alcoholímetros, manómetros y medidores UTI (Interfase/Temperatura). Certificados con trazabilidad total para PSC y vetting de petroleras.'],
              ['bm-s3-i2-t', 'Aire Respirable — EEBD, SCBA y Compresores',
               'bm-s3-i2-d', 'Calidad de aire de compresores según EN 12021. Inspección de EEBD (Emergency Escape Breathing Devices) para evacuación rápida. Revisión de equipos SCBA para la brigada de incendios de a bordo.'],
            ].map(([tId, tDef, dId, dDef]) => (
              <div key={tId} className="svc-item">
                <span className="svc-dot" />
                <div>
                  <strong className="svc-item-title"><EditableField id={tId}>{tDef}</EditableField></strong>
                  <span className="svc-item-text"><EditableField id={dId}>{dDef}</EditableField></span>
                </div>
              </div>
            ))}

            {/* SUMINISTROS */}
            <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.55rem', color: 'var(--navy)', margin: '2.5rem 0 1.25rem', letterSpacing: '.04em' }}>
              <EditableField id="bm-sup-title">Suministros — Venta, Repuestos OEM y Avituallamiento</EditableField>
            </h2>

            <div className="svc-section-title">
              <EditableField id="bm-sup1-title">1. Repuestos Originales (OEM Parts)</EditableField>
            </div>
            {[
              ['bm-sup1-i1-t', 'Componentes LSA para Hatecke y Global Davit',
               'bm-sup1-i1-d', 'Distribución oficial de repuestos: cables de acero, ganchos de suelta hidrostática, piezas de motor de pescante. Trazabilidad absoluta desde el fabricante hasta la cubierta del barco. Sin intermediarios que encarezcan y retrasen el suministro.'],
            ].map(([tId, tDef, dId, dDef]) => (
              <div key={tId} className="svc-item">
                <span className="svc-dot" />
                <div>
                  <strong className="svc-item-title"><EditableField id={tId}>{tDef}</EditableField></strong>
                  <span className="svc-item-text"><EditableField id={dId}>{dDef}</EditableField></span>
                </div>
              </div>
            ))}

            <div className="svc-section-title" style={{ marginTop: '1.5rem' }}>
              <EditableField id="bm-sup2-title">2. Equipamiento de Extinción (FFE)</EditableField>
            </div>
            {[
              ['bm-sup2-i1-t', 'Extintores de Gran Capacidad — Polvo y Espuma',
               'bm-sup2-i1-d', 'Carros móviles de Polvo (50kg) y Espuma (45L / 135L) para cubierta y sala de máquinas. Recubrimientos resistentes a la corrosión marina para máxima durabilidad en entornos salinos.'],
              ['bm-sup2-i2-t', 'Mangueras, Lanzas y Acoples Internacionales',
               'bm-sup2-i2-d', 'Mangueras de alta presión, lanzas de doble efecto y acoples internacionales (Storz, Nakajima, Barcelona). Hachas de bombero y herramientas de apertura forcible certificadas SOLAS.'],
              ['bm-sup2-i3-t', 'Agentes Extintores — Espumógenos Certificados y Polvo',
               'bm-sup2-i3-d', 'Bidones de espumógeno certificado (AFFF y AR-AFFF) de última caducidad. Cargas de polvo químico DCP para sistemas fijos y extintores portátiles. Disponible en entregas directas a bordo en nuestros puertos de operación.'],
            ].map(([tId, tDef, dId, dDef]) => (
              <div key={tId} className="svc-item">
                <span className="svc-dot" />
                <div>
                  <strong className="svc-item-title"><EditableField id={tId}>{tDef}</EditableField></strong>
                  <span className="svc-item-text"><EditableField id={dId}>{dDef}</EditableField></span>
                </div>
              </div>
            ))}

            <div className="svc-section-title" style={{ marginTop: '1.5rem' }}>
              <EditableField id="bm-sup3-title">3. Seguridad Personal y Protección</EditableField>
            </div>
            {[
              ['bm-sup3-i1-t', 'Trajes Técnicos — Bombero, Químico e Inmersión',
               'bm-sup3-i1-d', 'Trajes de bombero (SOLAS), trajes de protección química y trajes de inmersión certificados. Material de dotación y repuesto para la brigada de incendios de a bordo.'],
              ['bm-sup3-i2-t', 'Equipos SCBA Nuevos, Botellas y EEBDs',
               'bm-sup3-i2-d', 'Venta de equipos SCBA completos de nueva generación. Botellas de recambio (6L y 9L). Unidades EEBD de escape rápido para puntos de evacuación en sala de máquinas y espacios confinados.'],
              ['bm-sup3-i3-t', 'Detectores Portátiles — Explosímetros y Multigas',
               'bm-sup3-i3-d', 'Suministro de explosímetros y detectores multigas de última generación para personal de cubierta y operaciones en espacios confinados. Contrato de calibración periódica disponible.'],
            ].map(([tId, tDef, dId, dDef]) => (
              <div key={tId} className="svc-item">
                <span className="svc-dot" />
                <div>
                  <strong className="svc-item-title"><EditableField id={tId}>{tDef}</EditableField></strong>
                  <span className="svc-item-text"><EditableField id={dId}>{dDef}</EditableField></span>
                </div>
              </div>
            ))}
          </div>

          {/* ── STICKY SIDEBAR ── */}
          <div className="svc-sticky">
            <div className="svc-cta-box">
              <div className="svc-cta-title">¿Buque en puerto?</div>
              <p className="svc-cta-text">Minimizamos el downtime. Nuestros Flying Squads se desplazan al buque en escala. Un solo punto de contacto para gestionar todas las inspecciones.</p>
              <Link href="/contacto" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Contacto Urgente 24/7</Link>
            </div>

            {/* Logística */}
            <div style={{ background: 'var(--off)', border: '1px solid var(--border)', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ fontFamily: 'var(--cond)', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1rem' }}>Logística de Precisión</div>
              {[
                ['1', 'Stock Descentralizado', 'Repuestos OEM en Panamá y EE.UU. — mínimos tiempos de aduana y envío.'],
                ['2', 'Flying Squads', 'Equipos técnicos a cualquier puerto secundario. El barco no tiene que desviarse.'],
                ['3', 'Coordinación Global', 'Un solo punto de contacto para toda la flota y múltiples puertos.'],
              ].map(([n, ti, tx]) => (
                <div key={n} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start', marginBottom: '.75rem' }}>
                  <span style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'rgba(196,18,48,.18)', lineHeight: 1, minWidth: '1.6rem' }}>{n}</span>
                  <div>
                    <strong style={{ fontSize: '.84rem', color: 'var(--navy)', display: 'block', marginBottom: '.15rem' }}>{ti}</strong>
                    <span style={{ fontSize: '.78rem', color: 'var(--muted)', lineHeight: 1.5 }}>{tx}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="svc-badge-area">
              <div className="svc-badge-title">Aprobaciones</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
                {["DNV", "Lloyd's Register", "BV", "ABS", "RINA", "Panamá", "Liberia", "Bahamas", "Islas Marshall", "España/UE"].map(b => (
                  <span key={b} className="aut-badge">{b}</span>
                ))}
                <span className="aut-badge gold">ISO 9001:2015</span>
              </div>
            </div>
          </div>

        </div>
      </div></section>

      {/* RELATED */}
      <section className="section-sm section-gray"><div className="container">
        <div className="overline red" style={{ marginBottom: '1.5rem' }}>Otras Divisiones</div>
        <div className="related-grid">
          {[
            { h: '/servicios/oil-gas', i: '⚙', t: 'Oil & Gas', d: 'Máxima fiabilidad en entornos offshore y de riesgo crítico.' },
            { h: '/servicios/nautica-recreo', i: '⛵', t: 'Náutica de Recreo', d: 'Servicio "Guante Blanco" para Yates y Superyates.' },
            { h: '/servicios/industrial-comercial', i: '🏭', t: 'Industrial & Comercial', d: 'Rigor naval aplicado a instalaciones industriales en tierra.' },
          ].map(c => (
            <Link key={c.h} href={c.h} className="related-card">
              <div className="rc-icon">{c.i}</div>
              <div className="rc-title">{c.t}</div>
              <div className="rc-text">{c.d}</div>
              <div className="rc-link">Explorar →</div>
            </Link>
          ))}
        </div>
      </div></section>
    </>
  )
}
