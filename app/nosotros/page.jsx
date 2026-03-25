import Link from 'next/link'
import EditableField from '@/components/EditableField'
import CMSLoader from '@/components/CMSLoader'

export const metadata = { title: 'Sobre Nosotros' }
const PAGE = 'nosotros'

export default function NosotrosPage() {
  return (
    <>
      <CMSLoader pageKey={PAGE} />

      <div className="page-hero"><div className="container"><div className="ph-inner">
        <div className="breadcrumb"><Link href="/">Inicio</Link> › <span style={{ color: 'var(--gold)' }}>Nosotros</span></div>
        <h1 className="page-title"><EditableField id="nos-title">Quiénes Somos</EditableField></h1>
        <p className="page-sub"><EditableField id="nos-sub">Más de 40 años salvaguardando la vida en el mar y en tierra. Extinval Group: Safety. Service. Solutions.</EditableField></p>
      </div></div></div>

      {/* TRAYECTORIA */}
      <section className="section"><div className="container">
        <div className="about-split">
          <div>
            <div className="overline" id="trayectoria">Trayectoria</div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--navy)', margin: '.75rem 0', letterSpacing: '.04em' }}>
              <EditableField id="nos-h1">NUESTRA HISTORIA</EditableField>
            </h2>
            <div style={{ width: '3rem', height: '2px', background: 'var(--red)', margin: '1.5rem 0' }} />
            <EditableField id="nos-p1" tag="p" block style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              Extinval es sinónimo de seguridad naval a ambos lados del Atlántico. Especializados en mantenimiento, inspección y suministro de sistemas FFE y LSA, hemos crecido junto a nuestros clientes expandiendo nuestra operativa desde España hacia EE. UU.
            </EditableField>
            <EditableField id="nos-p2" tag="p" block style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              Nuestra estructura da respuesta experta a tres sectores vitales: la operativa crítica de Buques Mercantes, la seguridad masiva en Pasaje y el detalle para la Náutica de Recreo. Protegemos grandes activos y vidas humanas con la misma pasión.
            </EditableField>
            <blockquote style={{ borderLeft: '3px solid var(--red)', paddingLeft: '1.4rem', margin: '1.75rem 0' }}>
              <EditableField id="nos-quote" tag="p" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.65 }}>
                Más de 40 años salvaguardando la vida en el mar.
              </EditableField>
            </blockquote>
          </div>
          <div>
            <div className="about-img">
              <div className="about-img-bg" />
              <div className="about-img-icon">⚓</div>
            </div>
            <div className="about-years" style={{ right: '0', bottom: '-1.5rem' }}>
              <div className="ay-num">40+</div>
              <div className="ay-text">Años de<br />Experiencia</div>
            </div>
          </div>
        </div>
      </div></section>

      {/* PROPUESTA DE VALOR */}
      <section className="section section-gray"><div className="container">
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 3.5rem' }}>
          <div className="overline" style={{ justifyContent: 'center' }}>Propuesta de Valor</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--navy)', marginTop: '.75rem', letterSpacing: '.04em' }}>
            <EditableField id="nos-pv-title">TRES GARANTÍAS,<br />UNA MISIÓN GLOBAL</EditableField>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
          {[
            ['nos-pv1-t', 'Excelencia Certificada', 'nos-pv1-d', 'Homologaciones IACS con las cinco principales sociedades de clasificación. Partners oficiales de fabricantes como ACR Electronics y Onguard. Cada certificado emitido es un documento legal blindado.'],
            ['nos-pv2-t', 'Logística de Precisión', 'nos-pv2-d', 'Adaptada a los tiempos de escala de su buque. Stock descentralizado en Panamá y EE.UU. Flying Squads desplegables en cualquier puerto dentro de nuestras áreas de influencia.'],
            ['nos-pv3-t', 'Cumplimiento Normativo', 'nos-pv3-d', 'Blindamos su operativa ante cualquier inspección internacional: Port State Control, RightShip y Vetting de petroleras. La misma exigencia naval, ahora también en tierra.'],
          ].map(([tId, tDef, dId, dDef]) => (
            <div key={tId} className="aut-card">
              <div className="aut-title"><EditableField id={tId}>{tDef}</EditableField></div>
              <p className="aut-text"><EditableField id={dId}>{dDef}</EditableField></p>
            </div>
          ))}
        </div>
      </div></section>

      {/* LOGÍSTICA */}
      <section className="section"><div className="container">
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="overline">Logística de Precisión</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--navy)', margin: '.75rem 0 2rem', letterSpacing: '.04em' }}>
            <EditableField id="nos-log-title">MINIMIZAMOS EL DOWNTIME EN ESCALA</EditableField>
          </h2>
          <div className="about-features">
            {[
              ['nos-log1-t', 'Stock Descentralizado', 'nos-log1-d', 'Mantenemos repuestos críticos (OEM Hatecke/Global Davit, válvulas, espumógenos) en nuestros almacenes de Panamá y EE.UU. para reducir los tiempos de aduanas y envío.'],
              ['nos-log2-t', 'Flying Squads — Movilidad Técnica', 'nos-log2-d', 'Nuestros equipos están listos para desplazarse a cualquier puerto secundario dentro de nuestras áreas de influencia, asegurando que el barco no tenga que desviarse para recibir servicio.'],
              ['nos-log3-t', 'Coordinación Global', 'nos-log3-d', 'Un solo punto de contacto para gestionar inspecciones en múltiples puertos. Planificamos el mantenimiento de su flota aprovechando las paradas naturales de la ruta comercial.'],
            ].map(([tId, tDef, dId, dDef], i) => (
              <div key={tId} className="af-item">
                <div className="af-num">{i + 1}</div>
                <div>
                  <div className="af-title"><EditableField id={tId}>{tDef}</EditableField></div>
                  <div className="af-text"><EditableField id={dId}>{dDef}</EditableField></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div></section>
    </>
  )
}
