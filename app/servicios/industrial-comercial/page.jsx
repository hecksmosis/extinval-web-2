import Link from 'next/link'
import EditableField from '@/components/EditableField'
import CMSLoader from '@/components/CMSLoader'

export const metadata = { title: 'Industrial & Comercial' }

const PAGE = 'industrial-comercial'

export default function IndustrialComercialPage() {
  return (
    <>
      <CMSLoader pageKey={PAGE} />

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="ph-inner">
            <div className="breadcrumb">
              <Link href="/">Inicio</Link> ›{' '}
              <Link href="/#divisiones">Servicios</Link> ›{' '}
              <span style={{ color: 'var(--gold)' }}>Industrial &amp; Comercial</span>
            </div>
            <div style={{ marginBottom: '.75rem' }}>
              <span style={{ background: 'rgba(100,70,10,.2)', border: '1px solid rgba(201,168,76,.35)', color: 'var(--gold)', fontSize: '.68rem', fontFamily: 'var(--cond)', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', padding: '.3rem .9rem', display: 'inline-block' }}>Rigor Naval en Tierra Firme</span>
            </div>
            <h1 className="page-title">
              <EditableField id="ic-page-title">Industrial &amp; Comercial</EditableField>
            </h1>
            <p className="page-sub">
              <EditableField id="ic-page-subtitle">
                La seguridad en una planta industrial o un complejo comercial no admite márgenes de error. En Extinval trasladamos la exigencia extrema, la disciplina y las certificaciones del sector marítimo directamente a sus instalaciones en tierra.
              </EditableField>
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="section">
        <div className="container">
          <div className="svc-detail-grid">
            <div>
              <EditableField id="ic-intro" tag="p" block style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
                En Extinval no creemos que la seguridad en tierra sea una disciplina diferente a la seguridad marítima — es la misma exigencia aplicada a un entorno diferente. Las mismas certificaciones IACS, los mismos protocolos de inspección y la misma trazabilidad documental que blindan a sus buques ante el Port State Control son los que aplicamos en sus naves industriales, centros logísticos y edificios comerciales. Ofrecemos desde el mantenimiento de sistemas convencionales hasta la integración de las tecnologías más modernas y ecológicas del mercado.
              </EditableField>

              {/* ── SERVICIOS ── */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '1.25rem', letterSpacing: '.04em' }}>
                  <EditableField id="ic-srv-title">Servicios — Mantenimiento, Diagnóstico y Calibración</EditableField>
                </h2>

                {/* 1. Mantenimiento FFE */}
                <div className="svc-section-title">
                  <EditableField id="ic-srv1-title">1. Mantenimiento y Resolución de Averías FFE</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="ic-srv1-item1-title">Mantenimiento Integral de Sistemas Fijos</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="ic-srv1-item1-text">
                        Revisiones preventivas y correctivas de sistemas fijos de extinción de incendios — rociadores, gases, espuma y polvo — en naves industriales, centros logísticos y edificios comerciales. Planificamos el mantenimiento para minimizar las interrupciones de su actividad productiva.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item" style={{ marginBottom: '1.75rem' }}>
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="ic-srv1-item2-title">Respuesta Técnica y Resolución de Averías</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="ic-srv1-item2-text">
                        Diagnóstico rápido y resolución de averías en sistemas críticos para evitar paradas de producción o cierres de instalaciones por incumplimiento de seguridad. Tiempo de respuesta comprometido con contratos de mantenimiento. Disponibilidad 24/7 para instalaciones críticas.
                      </EditableField>
                    </span>
                  </div>
                </div>

                {/* 2. Detección de Incendios */}
                <div className="svc-section-title">
                  <EditableField id="ic-srv2-title">2. Detección de Incendios y Alarmas</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="ic-srv2-item1-title">Mantenimiento de Sistemas Centralizados de Detección</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="ic-srv2-item1-text">
                        Verificación de paneles de detección y lazos en entornos industriales complejos: alta densidad de polvo, humedad extrema, altas temperaturas o atmósferas corrosivas. Trabajamos con las principales marcas del mercado: Siemens, Honeywell, Hochiki, Apollo y Notifier.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item" style={{ marginBottom: '1.75rem' }}>
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="ic-srv2-item2-title">Auditoría de Sensibilidad — Sin Falsas Alarmas</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="ic-srv2-item2-text">
                        Pruebas funcionales de detectores de humo, calor y llama para asegurar una respuesta temprana sin falsas alarmas que paralicen la operativa diaria. Las falsas alarmas en entornos industriales tienen un coste económico y de reputación muy elevado — nuestro protocolo de auditoría elimina esta problemática de raíz.
                      </EditableField>
                    </span>
                  </div>
                </div>

                {/* 3. Calibración de Gases */}
                <div className="svc-section-title">
                  <EditableField id="ic-srv3-title">3. Calibración de Gases Industriales</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="ic-srv3-item1-title">Control de Atmósferas y Espacios Confinados</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="ic-srv3-item1-text">
                        Calibración certificada de detectores de gas fijos y portátiles — explosímetros, detectores de gases tóxicos y deficiencia de oxígeno — vitales para el personal de mantenimiento en silos, tanques de almacenamiento y plantas químicas. La normativa de espacios confinados exige calibración con patrones verificados antes de cada entrada.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item" style={{ marginBottom: '1.75rem' }}>
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="ic-srv3-item2-title">Trazabilidad Total — Certificados para Inspección</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="ic-srv3-item2-text">
                        Emisión de certificados de calibración con patrones trazables a organismos nacionales (ENAC/PTB/NIST) para superar cualquier inspección de la Administración de Industria o de Riesgos Laborales. La misma trazabilidad documental que aplicamos en clasificación marítima, ahora disponible para su planta.
                      </EditableField>
                    </span>
                  </div>
                </div>
              </div>

              {/* ── SUMINISTROS ── */}
              <div>
                <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '1.25rem', letterSpacing: '.04em' }}>
                  <EditableField id="ic-sup-title">Suministros — Innovación, Venta y Reposición</EditableField>
                </h2>

                {/* 1. Aerosoles Condensados */}
                <div className="svc-section-title">
                  <EditableField id="ic-sup1-title">1. Soluciones Ecológicas de Extinción — Vanguardia Tecnológica</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="ic-sup1-item1-title">Aerosoles Condensados — La Tecnología más Avanzada</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="ic-sup1-item1-text">
                        Suministro e instalación de la tecnología de extinción más avanzada y respetuosa con el medioambiente del mercado. Estos sistemas compactos ahogan el fuego a nivel molecular sin agotar el oxígeno de la sala, sin dañar la electrónica sensible y sin impacto en la capa de ozono. Ideales para salas de servidores, cuadros eléctricos de alta tensión y centros de transformación. No requieren obra civil — instalación en un solo día.
                      </EditableField>
                    </span>
                  </div>
                </div>

                {/* 2. Detección Inalámbrica */}
                <div className="svc-section-title" style={{ marginTop: '1.75rem' }}>
                  <EditableField id="ic-sup2-title">2. Sistemas de Detección Inalámbrica</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="ic-sup2-item1-title">Detección sin Cables — Sin Obra Civil</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="ic-sup2-item1-text">
                        Proveemos e instalamos sistemas de detección de incendios inalámbricos de última generación. La solución perfecta para naves industriales, edificios históricos con protección patrimonial o locales comerciales que necesitan actualizar su seguridad rápidamente. Los tiempos de instalación se reducen a la mitad frente a los sistemas cableados, sin necesidad de realizar obras civiles complejas ni rozas en paredes.
                      </EditableField>
                    </span>
                  </div>
                </div>

                {/* 3. Equipamiento Convencional */}
                <div className="svc-section-title" style={{ marginTop: '1.75rem' }}>
                  <EditableField id="ic-sup3-title">3. Equipamiento Convencional y Portátil</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="ic-sup3-item1-title">Extintores de Alta Eficacia — Adaptados a su Carga de Fuego</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="ic-sup3-item1-text">
                        Venta y reposición de extintores de alta eficacia (Polvo ABC, CO₂, Hídricos y Espuma) adaptados a la carga de fuego específica de su negocio y al tipo de materiales presentes en cada zona. Realizamos el estudio de la carga de fuego y determinamos el agente extintor óptimo para cada área de su instalación.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="ic-sup3-item2-title">Señalización de Seguridad y Detección Portátil</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="ic-sup3-item2-text">
                        Equipamiento complementario completo: señalización fotoluminiscente de evacuación y extinción, mantas ignífugas para cocinas industriales, detectores portátiles de gas y CO para el personal de mantenimiento, y equipos de protección respiratoria para espacios confinados.
                      </EditableField>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* STICKY SIDEBAR */}
            <div className="svc-sticky">
              <div className="svc-cta-box">
                <div className="svc-cta-title">¿Necesita un diagnóstico?</div>
                <p className="svc-cta-text">Le realizamos una auditoría gratuita de su instalación actual y le presentamos un plan de mantenimiento adaptado a sus necesidades y presupuesto.</p>
                <Link href="/contacto" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Solicitar Auditoría</Link>
              </div>

              {/* Destacados */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--cond)', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1rem', paddingBottom: '.6rem', borderBottom: '2px solid var(--red)' }}>
                  Tecnologías Destacadas
                </div>
                <div className="svc-supply-grid">
                  <div className="svc-supply-item">
                    <div className="svc-supply-icon">🌿</div>
                    <div className="svc-supply-title">Aerosoles Condensados</div>
                    <div className="svc-supply-text">Extinción molecular. Sin daño electrónico. Sin obra civil.</div>
                  </div>
                  <div className="svc-supply-item">
                    <div className="svc-supply-icon">📡</div>
                    <div className="svc-supply-title">Detección Wireless</div>
                    <div className="svc-supply-text">Sin cables, sin obras. Instalación en un día.</div>
                  </div>
                  <div className="svc-supply-item">
                    <div className="svc-supply-icon">🧪</div>
                    <div className="svc-supply-title">Calibración ATEX</div>
                    <div className="svc-supply-text">Certificados trazables ENAC/PTB/NIST.</div>
                  </div>
                  <div className="svc-supply-item">
                    <div className="svc-supply-icon">🔥</div>
                    <div className="svc-supply-title">Extintores</div>
                    <div className="svc-supply-text">Polvo, CO₂, Hídricos, Espuma. Adaptados por zona.</div>
                  </div>
                </div>
              </div>

              {/* Por qué Extinval */}
              <div style={{ background: 'var(--navy)', padding: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--cond)', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
                  Ventaja Competitiva
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  {[
                    ['LR · RINA · DNV · ABS · BV', 'Las mismas certificaciones marítimas aplicadas a tierra'],
                    ['ISO 9001:2015', 'Trazabilidad total de cada intervención'],
                    ['Respuesta 24/7', 'Para instalaciones críticas con contrato de mantenimiento'],
                  ].map(([label, text]) => (
                    <div key={label} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '.7rem', marginTop: '.15rem', flexShrink: 0 }}>✓</span>
                      <div><strong style={{ color: '#fff', fontSize: '.82rem', display: 'block', marginBottom: '.1rem' }}>{label}</strong><span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.5 }}>{text}</span></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="svc-badge-area">
                <div className="svc-badge-title">Sectores que Atendemos</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
                  {['Naves Industriales','Centros Logísticos','Edificios Comerciales','Plantas Químicas','Centros de Datos','Hospitales','Edificios Históricos','Sector Retail'].map(s => (
                    <span key={s} className="aut-badge">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section-sm section-gray">
        <div className="container">
          <div className="overline red" style={{ marginBottom: '1.5rem' }}>Otras Divisiones</div>
          <div className="related-grid">
            <Link href="/servicios/oil-gas" className="related-card">
              <div className="rc-icon">⚙</div>
              <div className="rc-title">Oil &amp; Gas</div>
              <div className="rc-text">Máxima fiabilidad en entornos de riesgo crítico offshore.</div>
              <div className="rc-link">Explorar →</div>
            </Link>
            <Link href="/servicios/buques-mercantes" className="related-card">
              <div className="rc-icon">⚓</div>
              <div className="rc-title">Buques Mercantes</div>
              <div className="rc-text">Cero deficiencias ante el Port State Control. SOLAS / IMO.</div>
              <div className="rc-link">Explorar →</div>
            </Link>
            <Link href="/servicios/nautica-recreo" className="related-card">
              <div className="rc-icon">⛵</div>
              <div className="rc-title">Náutica de Recreo</div>
              <div className="rc-text">Servicio "Guante Blanco" para Yates y Superyates.</div>
              <div className="rc-link">Explorar →</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
