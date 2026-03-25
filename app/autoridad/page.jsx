import Link from 'next/link'
import EditableField from '@/components/EditableField'
import CMSLoader from '@/components/CMSLoader'

export const metadata = { title: 'Respaldo de Autoridad' }
const PAGE = 'autoridad'

export default function AutoridadPage() {
  return (
    <>
      <CMSLoader pageKey={PAGE} />

      <div className="page-hero"><div className="container"><div className="ph-inner">
        <div className="breadcrumb"><Link href="/">Inicio</Link> › <span style={{ color: 'var(--gold)' }}>Autoridad</span></div>
        <h1 className="page-title"><EditableField id="aut-pg-title">Respaldo de Autoridad</EditableField></h1>
        <p className="page-sub"><EditableField id="aut-pg-sub">El pasaporte para operar globalmente. Certificaciones IACS, aprobaciones de Bandera y partners OEM.</EditableField></p>
      </div></div></div>

      <section className="section"><div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 3.5rem' }}>
          <div className="overline" style={{ justifyContent: 'center' }}>Competencia Verificada</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--navy)', marginTop: '.75rem', letterSpacing: '.04em' }}>
            <EditableField id="aut-pg-h2">EL PASAPORTE PARA OPERAR GLOBALMENTE</EditableField>
          </h2>
          <EditableField id="aut-pg-lead" tag="p" block style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginTop: '.75rem' }}>
            En la industria marítima, la confianza no se pide; se demuestra con auditorías. Nuestra competencia técnica no es una promesa de marketing, es un hecho validado por los organismos más exigentes del mundo. Cada certificado que emitimos es un documento legal blindado ante cualquier PSC, RightShip o Vetting de petroleras.
          </EditableField>
        </div>

        <div className="aut-grid">
          {/* IACS */}
          <div className="aut-card">
            <span className="aut-icon">🏅</span>
            <div className="aut-title"><EditableField id="aut-iacs-t">Sociedades de Clasificación (IACS)</EditableField></div>
            <div className="aut-sub">Auditoría al Máximo Nivel</div>
            <div className="aut-badges">
              {['DNV', "Lloyd's Register", 'BV', 'ABS', 'RINA'].map(b => <span key={b} className="aut-badge">{b}</span>)}
            </div>
            <p className="aut-text"><EditableField id="aut-iacs-d">Nuestros procedimientos, técnicos e instalaciones son auditados periódicamente por los miembros de la IACS. Operamos bajo los estándares más estrictos para garantizar que el seguro de Casco y Máquinas (H&M) de su buque mantenga su validez intacta.</EditableField></p>
          </div>
          {/* BANDERA */}
          <div className="aut-card">
            <span className="aut-icon">🏴</span>
            <div className="aut-title"><EditableField id="aut-flag-t">Aprobaciones de Bandera</EditableField></div>
            <div className="aut-sub">Competencia Legal Internacional</div>
            <div className="aut-badges">
              {['Panamá', 'Liberia', 'Bahamas', 'Islas Marshall', 'España/UE'].map(b => <span key={b} className="aut-badge">{b}</span>)}
            </div>
            <p className="aut-text"><EditableField id="aut-flag-d">Actuamos como "Proveedores de Servicio Aprobados" ante las administraciones marítimas que agrupan el mayor tonelaje de la flota mundial. Certificamos equipos en buques bajo pabellones estratégicos sin restricciones geográficas.</EditableField></p>
          </div>
          {/* OEM */}
          <div className="aut-card" id="partners">
            <span className="aut-icon">🔧</span>
            <div className="aut-title"><EditableField id="aut-oem-t">Aprobaciones de Fabricantes (OEM)</EditableField></div>
            <div className="aut-sub">Acceso Directo a Tecnología Original</div>
            <div className="aut-badges">
              {['Hatecke', 'Global Davit', 'Viking', 'Zodiac/Survitec', 'ACR Electronics'].map(b => <span key={b} className="aut-badge">{b}</span>)}
            </div>
            <p className="aut-text"><EditableField id="aut-oem-d">Acuerdos de Servicio Técnico Autorizado con los fabricantes. Acceso a manuales actualizados, software de diagnóstico propietario y repuestos legítimos. A diferencia de los talleres multimarca genéricos, somos el enlace directo.</EditableField></p>
          </div>
        </div>

        {/* ISO */}
        <div className="iso-strip" style={{ marginTop: '3rem' }}>
          <div style={{ fontSize: '2.2rem' }}>✅</div>
          <div>
            <div className="iso-title">ISO 9001:2015</div>
            <div className="iso-sub">Gestión de Calidad Certificada</div>
          </div>
          <p className="iso-text"><EditableField id="aut-iso-d">Nuestra estructura interna se rige por sistemas de gestión integrados que aseguran la trazabilidad de cada inspección, desde la entrada del pedido hasta la emisión del certificado final. Excelencia estandarizada en cada servicio.</EditableField></p>
        </div>

        {/* Repuestos */}
        <div style={{ marginTop: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="overline" style={{ justifyContent: 'center' }}>Repuestos OEM</div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: 'var(--navy)', marginTop: '.75rem', letterSpacing: '.04em' }}>
              <EditableField id="aut-rep-title">SUMINISTRO ORIGINAL:<br />LA GARANTÍA DE NO DETENCIÓN</EditableField>
            </h2>
            <EditableField id="aut-rep-lead" tag="p" block style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: 580, margin: '.75rem auto 0' }}>
              En el sector naval, un repuesto no conforme puede significar la inmovilización del buque. En Extinval gestionamos una división exclusiva de Repuestos Originales (OEM) con stock estratégico en nuestros almacenes de España y EE.UU.
            </EditableField>
          </div>
          <div className="aut-grid">
            {[
              ['🔗', 'aut-rep1-t', 'Alianzas Estratégicas — Botes y Pescantes', 'aut-rep1-d', 'Partners oficiales de Hatecke y Global Davit. Eliminamos intermediarios que encarecen y retrasan el suministro. Stock prioritario disponible en nuestros almacenes de España y EE.UU.'],
              ['🧯', 'aut-rep2-t', 'Suministros FFE y Seguridad', 'aut-rep2-d', 'Garrafas de 20L de espumas AFFF y AR-AFFF (Baja y Alta expansión) con certificación de lote reciente. Cargas certificadas de polvo químico DCP para sistemas fijos y extintores portátiles.'],
              ['📡', 'aut-rep3-t', 'Electrónica y Supervivencia — ACR Electronics', 'aut-rep3-d', 'Estación autorizada para EPIRB, PLB y SART de ACR Electronics. Distribuidores de sistemas Onguard. Stock rotativo de pirotecnia para garantizar fechas de caducidad máximas.'],
            ].map(([ic, tId, tDef, dId, dDef]) => (
              <div key={tId} className="aut-card">
                <span className="aut-icon">{ic}</span>
                <div className="aut-title"><EditableField id={tId}>{tDef}</EditableField></div>
                <p className="aut-text"><EditableField id={dId}>{dDef}</EditableField></p>
              </div>
            ))}
          </div>
        </div>
      </div></section>
    </>
  )
}
