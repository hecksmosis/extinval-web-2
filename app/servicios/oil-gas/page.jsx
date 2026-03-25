import Link from 'next/link'
import EditableField from '@/components/EditableField'
import CMSLoader from '@/components/CMSLoader'

export const metadata = { title: 'Oil & Gas' }
const PAGE = 'oil-gas'

export default function OilGasPage() {
  return (
    <>
      <CMSLoader pageKey={PAGE} />

      <div className="page-hero">
        <div className="container"><div className="ph-inner">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> › <Link href="/#divisiones">Servicios</Link> ›{' '}
            <span style={{ color: 'var(--gold)' }}>Oil &amp; Gas</span>
          </div>
          <div style={{ marginBottom: '.75rem' }}>
            <span style={{ background: 'rgba(192,39,45,.15)', border: '1px solid rgba(192,39,45,.3)', color: '#FF9A9A', fontSize: '.68rem', fontFamily: 'var(--cond)', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', padding: '.3rem .9rem', display: 'inline-block' }}>
              Sector Crítico — Offshore &amp; Refinerías
            </span>
          </div>
          <h1 className="page-title"><EditableField id="og-title">Oil &amp; Gas</EditableField></h1>
          <p className="page-sub">
            <EditableField id="og-subtitle">
              Máxima Fiabilidad en Entornos de Riesgo Crítico. Plataformas offshore, Drillships y refinerías.
            </EditableField>
          </p>
        </div></div>
      </div>

      <section className="section"><div className="container">
        <div className="svc-detail-grid">

          {/* ── LEFT COLUMN ── */}
          <div>
            <EditableField id="og-intro" tag="p" block style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              El sector del Oil &amp; Gas opera bajo los estándares de seguridad más implacables del mundo. Un fallo técnico en una plataforma offshore, un buque perforador (Drillship) o una refinería no es una opción. En Extinval aportamos nuestra máxima capacidad de ingeniería para garantizar la protección de activos de alto valor y, sobre todo, la vida del personal en atmósferas explosivas y entornos hostiles.
            </EditableField>

            {/* INSPECCIÓN Y MANTENIMIENTO */}
            <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.55rem', color: 'var(--navy)', marginBottom: '1.25rem', letterSpacing: '.04em' }}>
              <EditableField id="og-srv-title">Servicios de Inspección y Mantenimiento (FFE &amp; LSA)</EditableField>
            </h2>

            <div className="svc-section-title">
              <EditableField id="og-s1-title">1. Sistemas Fijos de Extinción de Alta Capacidad (FFE)</EditableField>
            </div>
            {[
              ['og-s1-i1-t', 'Sistemas de Espuma, Diluvio y Polvo',
               'og-s1-i1-d', 'Mantenimiento en áreas de proceso. Análisis químico obligatorio de laboratorio para espumógenos (AR-AFFF) sometidos a condiciones marinas extremas. Revisión de grandes estaciones fijas de polvo (Skids) vitales para la extinción de fuegos de gas a presión (Jet Fires). Pruebas de fluidificación y soplado de líneas.'],
              ['og-s1-i2-t', 'Bancos CO₂ y Gases Limpios (Novec 1230 / Inergen)',
               'og-s1-i2-d', 'Inspección de bancos masivos de CO₂ para salas de turbinas y generadores. Sistemas de gases limpios Novec 1230 e Inergen para la protección de las salas de control (CCR) y armarios eléctricos críticos.'],
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
              <EditableField id="og-s2-title">2. Detección de Gases y Atmósferas Peligrosas (ATEX)</EditableField>
            </div>
            {[
              ['og-s2-i1-t', 'Redes de Sensores Fijos en Planta — LEL, H₂S, CO, O₂',
               'og-s2-i1-d', 'Mantenimiento y calibración con gas patrón de redes de sensores fijos: Gases Combustibles (LEL), Sulfuro de Hidrógeno (H₂S, el riesgo más mortal en O&G), Monóxido de Carbono (CO) y deficiencia de Oxígeno. Trazabilidad total de certificados.'],
              ['og-s2-i2-t', 'Detectores Ópticos de Llama IR/UV/CCTV',
               'og-s2-i2-d', 'Pruebas funcionales de detectores ópticos diseñados para no emitir falsas alarmas con la luz solar o los reflejos del mar. Calibración con fuentes de referencia certificadas.'],
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
              <EditableField id="og-s3-title">3. Evacuación y Supervivencia Offshore (LSA)</EditableField>
            </div>
            {[
              ['og-s3-i1-t', 'Botes Salvavidas de Caída Libre (Free-fall Lifeboats)',
               'og-s3-i1-d', 'Inspección anual y quinquenal de sistemas de liberación hidráulica y estructural de botes de evacuación rápida. Sistemas de Transferencia de Personal: revisión de redes, cestas de transferencia (Frog/Billy Pugh) y balsas salvavidas de pescante.'],
              ['og-s3-i2-t', 'Trajes de Supervivencia e Inspección de Sistemas SCBA',
               'og-s3-i2-d', 'Pruebas de estanqueidad y presión para trajes de inmersión y supervivencia adaptados a la industria del petróleo. Mantenimiento de unidades de suministro de aire (Air Cascade Systems) para trabajos en espacios confinados.'],
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
              <EditableField id="og-s4-title">4. Soporte Vital y Calidad de Aire</EditableField>
            </div>
            {[
              ['og-s4-i1-t', 'Sistemas de Cascada y Aire Respirable',
               'og-s4-i1-d', 'Mantenimiento de unidades móviles y fijas de suministro de aire (Air Cascade Systems) para trabajos en espacios confinados. Certificación de compresores de alta presión según EN 12021 / CGA G-7.1 para garantizar que el aire de los equipos SCBA y capuces de escape es 100% seguro.'],
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
              <EditableField id="og-sup-title">Suministros — Tecnología, Repuestos OEM y Seguridad ATEX</EditableField>
            </h2>

            <div className="svc-section-title">
              <EditableField id="og-sup1-title">1. Agentes Extintores de Alto Rendimiento</EditableField>
            </div>
            {[
              ['og-sup1-i1-t', 'Espumógenos Especiales (SFFF y AR-AFFF)',
               'og-sup1-i1-d', 'Suministro de concentrados de espuma sin flúor (SFFF) y resistentes al alcohol (AR-AFFF) en grandes volúmenes — bidones e IBCs de 1.000L — para reposición inmediata tras una emergencia o prueba.'],
              ['og-sup1-i2-t', 'Polvo Químico Seco de Grado Superior',
               'og-sup1-i2-d', 'Polvo químico seco (DCP) tratado con silicona para evitar la compactación por las vibraciones de la plataforma. Cargas certificadas para sistemas fijos y extintores portátiles.'],
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
              <EditableField id="og-sup2-title">2. Equipamiento ATEX y Detección Portátil</EditableField>
            </div>
            {[
              ['og-sup2-i1-t', 'Detectores Multigas Portátiles (ATEX / IECEx)',
               'og-sup2-i1-d', 'Venta y suministro de flotas de detectores personales de 4 a 6 gases para operarios, con certificaciones intrínsecamente seguras ATEX/IECEx. Gestión de contratos de calibración periódica incluida.'],
              ['og-sup2-i2-t', 'Comunicaciones de Emergencia — Radios ATEX y PLBs',
               'og-sup2-i2-d', 'Suministro de radios UHF/VHF intrínsecamente seguras y radiobalizas personales (PLB) para el personal de cubierta en zonas con atmósfera explosiva potencial.'],
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
              <EditableField id="og-sup3-title">3. Protección Respiratoria y Lucha Contra Incendios</EditableField>
            </div>
            {[
              ['og-sup3-i1-t', 'Equipos de Escape H₂S (EEBD) y Equipamiento Pesado',
               'og-sup3-i1-d', 'Capuces de escape rápido específicos para emergencias por fugas de gas tóxico. Extintores móviles de ruedas (hasta 135L o 50kg) con recubrimientos marinos para resistir la corrosión salina extrema.'],
              ['og-sup3-i2-t', 'Cañones de Agua/Espuma de Alto Caudal (Ground Monitors)',
               'og-sup3-i2-d', 'Monitores portátiles de alto caudal para despliegue rápido en áreas de proceso. Estrategia defensiva de primer nivel ante incendios de gran magnitud en plataforma.'],
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
              <div className="svc-cta-title">¿Emergencia técnica en plataforma?</div>
              <p className="svc-cta-text">Nuestros especialistas O&amp;G están disponibles 24/7 para cualquier incidencia en plataforma, Drillship o refinería.</p>
              <Link href="/contacto" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Contacto Urgente 24/7</Link>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontFamily: 'var(--cond)', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1rem', paddingBottom: '.6rem', borderBottom: '2px solid var(--red)' }}>
                Capacidad de Suministro OEM
              </div>
              <div className="svc-supply-grid">
                {[
                  ['🧴', 'Espumógenos AR-AFFF', 'IBCs 1.000L. Sin flúor (SFFF) disponible.'],
                  ['🔍', 'Multigas ATEX/IECEx', '4–6 gases. Detectores para operarios.'],
                  ['📻', 'Radios ATEX', 'UHF/VHF intrínsecamente seguras. PLBs.'],
                  ['🦺', 'EPIs Offshore', 'SCBA, EEBDs, Trajes SOLAS, Ground Monitors.'],
                ].map(([ic, ti, tx]) => (
                  <div key={ti} className="svc-supply-item">
                    <div className="svc-supply-icon">{ic}</div>
                    <div className="svc-supply-title">{ti}</div>
                    <div className="svc-supply-text">{tx}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="svc-badge-area">
              <div className="svc-badge-title">Aprobaciones Aplicables</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
                {['DNV', "Lloyd's Register", 'BV', 'ABS', 'RINA', 'Panamá', 'Liberia', 'Bahamas', 'ATEX/IECEx'].map(b => (
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
            { h: '/servicios/buques-mercantes', i: '⚓', t: 'Buques Mercantes', d: 'Cero deficiencias ante el Port State Control. SOLAS / IMO.' },
            { h: '/servicios/nautica-recreo',   i: '⛵', t: 'Náutica de Recreo', d: 'Servicio "Guante Blanco" para Yates y Superyates.' },
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
