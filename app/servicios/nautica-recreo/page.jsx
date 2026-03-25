import Link from 'next/link'
import EditableField from '@/components/EditableField'
import CMSLoader from '@/components/CMSLoader'

export const metadata = { title: 'Náutica de Recreo' }

const PAGE = 'nautica-recreo'

export default function NauticaRecreoPAge() {
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
              <span style={{ color: 'var(--gold)' }}>Náutica de Recreo</span>
            </div>
            <div style={{ marginBottom: '.75rem' }}>
              <span style={{ background: 'rgba(10,100,60,.2)', border: '1px solid rgba(10,100,60,.4)', color: '#6EE7B7', fontSize: '.68rem', fontFamily: 'var(--cond)', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', padding: '.3rem .9rem', display: 'inline-block' }}>Yates &amp; Superyates · Chárter</span>
            </div>
            <h1 className="page-title">
              <EditableField id="nr-page-title">Náutica de Recreo</EditableField>
            </h1>
            <p className="page-sub">
              <EditableField id="nr-page-subtitle">
                Un servicio "Guante Blanco" para Yates, Superyates y Chárter. Nos encargamos de la complejidad normativa para que el armador solo se preocupe de disfrutar del mar.
              </EditableField>
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="svc-detail-grid">
            <div>
              <EditableField id="nr-intro" tag="p" block style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
                En Extinval entendemos que un yate o superyate es la combinación perfecta entre el placer de navegar y la más estricta responsabilidad de seguridad. A diferencia de los servicios de mantenimiento convencionales, nuestro enfoque &ldquo;Guante Blanco&rdquo; protege la estética de su embarcación durante cada intervención, garantizando que las revisiones normativas no dejen huella en sus espacios interiores o cubierta de teca. Máxima seguridad, mínimo impacto visual.
              </EditableField>

              {/* ── SERVICIOS DE INSPECCIÓN Y MANTENIMIENTO ── */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '1.25rem', letterSpacing: '.04em' }}>
                  <EditableField id="nr-srv-title">Servicios de Mantenimiento, Inspección y Certificación</EditableField>
                </h2>

                {/* 1. FFE Clean & Safe */}
                <div className="svc-section-title">
                  <EditableField id="nr-srv1-title">1. Protección Contra Incendios "Clean &amp; Safe" (FFE)</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-srv1-item1-title">Sistemas de Agentes Limpios</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-srv1-item1-text">
                        Mantenimiento y recarga de sistemas de extinción automática en salas de máquinas con gases Novec 1230, FM-200 o HFC-227ea. Estos agentes extinguen el fuego sin dejar residuos, protegiendo la electrónica y los motores de alto valor del yate.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-srv1-item2-title">Generadores de Aerosol (Stat-X / FirePro)</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-srv1-item2-text">
                        Revisión de sistemas compactos de extinción que se activan térmica o eléctricamente, ideales para espacios reducidos en veleros y motoras. Sin necesidad de tuberías ni agentes a presión.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-srv1-item3-title">Extintores Portátiles — Inspección "White Glove"</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-srv1-item3-text">
                        Inspección cuidadosa de extintores de polvo, espuma y CO₂. Protegemos las cubiertas de teca y los interiores premium durante toda la revisión. Acabados cromados, negro mate y fibra de carbono disponibles.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item" style={{ marginBottom: '1.75rem' }}>
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-srv1-item4-title">Sistemas de Parada y Fire Dampers</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-srv1-item4-text">
                        Comprobación del cierre automático de válvulas de combustible y ventiladores (Fire Dampers) al activarse la extinción, conforme a los requisitos de la zona de navegación.
                      </EditableField>
                    </span>
                  </div>
                </div>

                {/* 2. Detección de Gases */}
                <div className="svc-section-title">
                  <EditableField id="nr-srv2-title">2. Detección de Gases y Seguridad Ambiental</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-srv2-item1-title">Gases Pesados GLP / Butano en Sentinas</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-srv2-item1-text">
                        Instalación y calibración de sensores en sentinas (donde se acumula el gas pesado) para prevenir explosiones en cocinas y zonas de generadores. Los gases GLP son más pesados que el aire y se acumulan en los puntos bajos de la embarcación.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-srv2-item2-title">Monóxido de Carbono (CO) en Camarotes</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-srv2-item2-text">
                        Revisión de detectores de CO en camarotes, vital para evitar intoxicaciones silenciosas por mala combustión de generadores o motores auxiliares. El CO es inodoro e incoloro — un riesgo frecuentemente infravalorado a bordo.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item" style={{ marginBottom: '1.75rem' }}>
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-srv2-item3-title">Alarmas de Sentina y Sensores de Nivel</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-srv2-item3-text">
                        Verificación de los sensores de nivel alto de agua en sentina. Revisión funcional de la bomba automática de achique y sus alarmas para garantizar la integridad de la embarcación.
                      </EditableField>
                    </span>
                  </div>
                </div>

                {/* 3. Salvamento y Electrónica */}
                <div className="svc-section-title">
                  <EditableField id="nr-srv3-title">3. Salvamento y Electrónica de Seguridad (LSA &amp; GMDSS)</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-srv3-item1-title">Balsas Salvavidas de Recreo — ISO 9650</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-srv3-item1-text">
                        Revisión certificada de balsas ISO 9650-1 y 9650-2 (Marcas homologadas: Almara Live, Neptuno, Seawolf). Servicio de recogida y entrega en pantalán, disponible tanto en Valija como en Contenedor. Sin necesidad de desplazarse al taller.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-srv3-item2-title">Radiobalizas EPIRB — Servicio Oficial ACR Electronics</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-srv3-item2-text">
                        Cambio de batería, sustitución de zafas hidrostáticas y programación de MMSI conforme a las autoridades marítimas. Somos estación de servicio oficial ACR Electronics para EPIRB, PLB y SART.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-srv3-item3-title">Transpondedores AIS — Clase A y B</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-srv3-item3-text">
                        Servicio técnico y configuración de transpondedores AIS Clase A y Clase B. Programación de MMSI, pruebas de recepción y transmisión, y verificación de integración con el plotter de a bordo.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item" style={{ marginBottom: '1.75rem' }}>
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-srv3-item4-title">Gestión de Pirotecnia Caducada</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-srv3-item4-text">
                        Servicio profesional de retirada y destrucción certificada de pirotecnia caducada (bengalas de mano, cohetes paracaídas, botes de humo). Emitimos el certificado oficial de gestión de residuos peligrosos conforme a la normativa ambiental vigente.
                      </EditableField>
                    </span>
                  </div>
                </div>
              </div>

              {/* ── SUMINISTROS ── */}
              <div>
                <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '1.25rem', letterSpacing: '.04em' }}>
                  <EditableField id="nr-sup-title">Suministros — Venta, Repuestos y Avituallamiento</EditableField>
                </h2>

                {/* Equipamiento Diseño y Confort */}
                <div className="svc-section-title">
                  <EditableField id="nr-sup1-title">1. Equipamiento de Diseño y Confort</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-sup1-item1-title">Extintores "Yacht Line" — Acabados Premium</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-sup1-item1-text">
                        Suministro de extintores con acabados premium que cumplen la normativa sin romper la estética del salón o la cubierta: Cromado, Negro Mate, Blanco y Fibra de Carbono. El extintor de diseño más solicitado por los superyates en el Mediterráneo.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item" style={{ marginBottom: '1.75rem' }}>
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-sup1-item2-title">Mantas Ignífugas — Formato Compacto para Galley</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-sup1-item2-text">
                        Modelos en cajas rígidas ultra-compactas diseñadas para cocinas náuticas (Galley). Cumplimiento normativo con mínimo impacto visual. Disponibles en varios acabados para integración en el mobiliario de cocina.
                      </EditableField>
                    </span>
                  </div>
                </div>

                {/* Seguridad Personal */}
                <div className="svc-section-title">
                  <EditableField id="nr-sup2-title">2. Seguridad Personal (Life Saving)</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-sup2-item1-title">Chalecos Autoinflables de Alto Confort</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-sup2-item1-text">
                        Venta de chalecos ergonómicos con arnés integrado para navegación a vela y regatas. Modelos Ocean, Coastal y Offshore según la zona de navegación. Máxima comodidad sin sacrificar la seguridad certificada.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-sup2-item2-title">Dispositivos Hombre al Agua (MOB)</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-sup2-item2-text">
                        Suministro de AIS-MOB personales que se integran en el chaleco salvavidas y transmiten automáticamente la posición al plotter. Balizas Personales (PLB) con activación manual para emergencias fuera de la cobertura VHF.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item" style={{ marginBottom: '1.75rem' }}>
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-sup2-item3-title">Botiquines Reglamentarios y Oxígeno Medicinal</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-sup2-item3-text">
                        Kits de primeros auxilios conforme a los requisitos de cada zona de navegación (Costa, Altura, Ilimitada). Botellas de oxígeno medicinal con mascarilla y regulador, esenciales para emergencias de buceo o cardíacas a bordo.
                      </EditableField>
                    </span>
                  </div>
                </div>

                {/* Pirotecnia y Supervivencia */}
                <div className="svc-section-title">
                  <EditableField id="nr-sup3-title">3. Pirotecnia y Supervivencia</EditableField>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-sup3-item1-title">Kits de Señales Pirotécnicas</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-sup3-item1-text">
                        Bengalas de mano, cohetes paracaídas y botes de humo flotantes con aprobación SOLAS o Marina Mercante según zona de navegación. Stock rotativo garantiza caducidades máximas en el momento de la entrega. Nuestro almacén cumple todos los requisitos legales de almacenamiento de material pirotécnico.
                      </EditableField>
                    </span>
                  </div>
                </div>
                <div className="svc-item">
                  <span className="svc-dot" /><div>
                    <strong className="svc-item-title">
                      <EditableField id="nr-sup3-item2-title">Accesorios de Balsa y Equipos de Supervivencia</EditableField>
                    </strong>
                    <span className="svc-item-text">
                      <EditableField id="nr-sup3-item2-text">
                        Grab-bags (bolsas de abandono) equipadas y personalizadas según la ruta de navegación. Raciones de emergencia, agua potable desalinizadora y material de señalización para el interior de la balsa. Completamos y actualizamos el equipo de balsa según las últimas exigencias SOLAS.
                      </EditableField>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* STICKY SIDEBAR */}
            <div className="svc-sticky">
              <div className="svc-cta-box">
                <div className="svc-cta-title">¿Necesita asistencia para su yate?</div>
                <p className="svc-cta-text">Servicio de recogida en pantalán y visita a bordo disponible en nuestras delegaciones de Valencia, Algeciras, Las Palmas y Canarias.</p>
                <Link href="/contacto" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Solicitar Servicio a Bordo</Link>
              </div>

              {/* Supply highlights */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--cond)', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1rem', paddingBottom: '.6rem', borderBottom: '2px solid var(--red)' }}>
                  Suministros Destacados
                </div>
                <div className="svc-supply-grid">
                  <div className="svc-supply-item">
                    <div className="svc-supply-icon">⛵</div>
                    <div className="svc-supply-title">Extintores Yacht Line</div>
                    <div className="svc-supply-text">Cromado, Negro Mate, Blanco, Fibra de Carbono.</div>
                  </div>
                  <div className="svc-supply-item">
                    <div className="svc-supply-icon">🛟</div>
                    <div className="svc-supply-title">Balsas ISO 9650</div>
                    <div className="svc-supply-text">Recogida en pantalán. Almara Live, Neptuno, Seawolf.</div>
                  </div>
                  <div className="svc-supply-item">
                    <div className="svc-supply-icon">📡</div>
                    <div className="svc-supply-title">EPIRB &amp; AIS-MOB</div>
                    <div className="svc-supply-text">Servicio oficial ACR Electronics.</div>
                  </div>
                  <div className="svc-supply-item">
                    <div className="svc-supply-icon">🧯</div>
                    <div className="svc-supply-title">Novec 1230 / FM-200</div>
                    <div className="svc-supply-text">Recarga de sistemas agentes limpios.</div>
                  </div>
                </div>
              </div>

              <div className="svc-badge-area">
                <div className="svc-badge-title">Normativa Aplicable</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
                  <span className="aut-badge">ISO 9650-1 y 9650-2</span>
                  <span className="aut-badge">SOLAS</span>
                  <span className="aut-badge">Marina Mercante</span>
                  <span className="aut-badge gold">ISO 9001:2015</span>
                  <span className="aut-badge">ACR Electronics</span>
                  <span className="aut-badge">GMDSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section-sm section-gray">
        <div className="container">
          <div className="overline red" style={{ marginBottom: '1.5rem' }}>Otras Divisiones</div>
          <div className="related-grid">
            <Link href="/servicios/oil-gas" className="related-card">
              <div className="rc-icon">⚙</div>
              <div className="rc-title">Oil &amp; Gas</div>
              <div className="rc-text">Máxima fiabilidad en entornos de riesgo crítico. Plataformas offshore, Drillships y refinerías.</div>
              <div className="rc-link">Explorar →</div>
            </Link>
            <Link href="/servicios/buques-mercantes" className="related-card">
              <div className="rc-icon">⚓</div>
              <div className="rc-title">Buques Mercantes</div>
              <div className="rc-text">Cero deficiencias ante el Port State Control. SOLAS / IMO.</div>
              <div className="rc-link">Explorar →</div>
            </Link>
            <Link href="/servicios/industrial-comercial" className="related-card">
              <div className="rc-icon">🏭</div>
              <div className="rc-title">Industrial &amp; Comercial</div>
              <div className="rc-text">Rigor naval aplicado a instalaciones industriales en tierra.</div>
              <div className="rc-link">Explorar →</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
