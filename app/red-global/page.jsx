import Link from 'next/link'
import EditableField from '@/components/EditableField'
import CMSLoader from '@/components/CMSLoader'

export const metadata = { title: 'Red Global' }
const PAGE = 'red-global'

export default function RedGlobalPage() {
  return (
    <>
      <CMSLoader pageKey={PAGE} />
      <div className="page-hero"><div className="container"><div className="ph-inner">
        <div className="breadcrumb"><Link href="/">Inicio</Link> › <span style={{ color: 'var(--gold)' }}>Red Global</span></div>
        <h1 className="page-title"><EditableField id="rg-title">Red Global y Cobertura</EditableField></h1>
        <p className="page-sub"><EditableField id="rg-sub">Cobertura estratégica en las rutas comerciales más críticas del mundo. El mismo nivel de excelencia técnica en cada punto del globo.</EditableField></p>
      </div></div></div>

      <section className="section"><div className="container">
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 3.5rem' }}>
          <div className="overline" style={{ justifyContent: 'center' }}>Eje de Seguridad</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--navy)', marginTop: '.75rem', letterSpacing: '.04em' }}>
            <EditableField id="rg-h2">COBERTURA ESTRATÉGICA EN RUTAS CRÍTICAS</EditableField>
          </h2>
          <EditableField id="rg-lead" tag="p" block style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginTop: '.75rem' }}>
            La seguridad marítima no entiende de fronteras, y los tiempos de escala no permiten errores logísticos. En Extinval Group hemos diseñado nuestra expansión internacional siguiendo las rutas comerciales más exigentes del mundo en ubicaciones clave, como el Mediterráneo y el Canal de Panamá. No somos una red de franquicias dispersa; somos un grupo consolidado con delegaciones propias en el eje Atlántico y Pacífico.
          </EditableField>
        </div>

        <div className="eje-split">
          <div>
            <div className="eje-list">
              {[
                { flag: 'ESP', bg: 'var(--red)', name: 'España', hq: true, id: 'rg-esp', def: 'El corazón de nuestras operaciones. Cobertura total en el eje Mediterráneo-Estrecho.', tags: ['Valencia', 'Algeciras', 'Barcelona'] },
                { flag: 'CNR', bg: '#1565C0', name: 'Islas Canarias', hq: false, id: 'rg-cnr', def: 'Hub del Atlántico Medio. Posición estratégica clave para el tráfico trasatlántico.', tags: ['Las Palmas', 'S/C de Tenerife'] },
                { flag: 'PAN', bg: '#0A5C36', name: 'Panamá', hq: false, id: 'rg-pan', def: 'Punto neurálgico del comercio mundial. Servicios críticos en el Canal, antes y después del tránsito.', tags: ['Canal de Panamá', 'Ciudad de Panamá'] },
                { flag: 'USA', bg: '#B71C1C', name: 'Norteamérica', hq: false, id: 'rg-usa', def: 'Cobertura integral en Costa Este, Oeste y Golfo. Cumplimiento estricto normativa SOLAS.', tags: ['Houston', 'Miami', 'Canadá'] },
              ].map(loc => (
                <div key={loc.flag} className="eje-row">
                  <div className="eje-flag" style={{ background: loc.bg }}>{loc.flag}</div>
                  <div className="eje-body">
                    <div className="eje-name">{loc.name}{loc.hq && <span className="eje-hq">HQ</span>}</div>
                    <div className="eje-desc"><EditableField id={loc.id}>{loc.def}</EditableField></div>
                    <div className="eje-tags">{loc.tags.map(t => <span key={t} className="eje-tag">{t}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="eje-map">
              <div className="eje-map-dots" />
              <div style={{ fontFamily: 'var(--cond)', fontSize: '.6rem', fontWeight: 700, letterSpacing: '.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>Puntos de Operación Directa</div>
              <div className="eje-pins">
                {[
                  { city: 'Valencia, España', region: 'SEDE CENTRAL · HQ', hq: true },
                  { city: 'Algeciras / Barcelona', region: 'Estrecho · Mediterráneo' },
                  { city: 'Las Palmas de Gran Canaria', region: 'Hub Atlántico' },
                  { city: 'Canal de Panamá', region: 'Panamá' },
                  { city: 'Houston · Miami · Canadá', region: 'Norteamérica' },
                ].map(p => (
                  <div key={p.city} className="eje-pin">
                    <span className={`pin-dot${p.hq ? ' hq' : ''}`} />
                    <div><div className="pin-city">{p.city}</div><div className="pin-region">{p.region}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="emergency-panel">
              <span style={{ fontSize: '1.7rem' }}>📞</span>
              <div>
                <div className="ep-title">EMERGENCIAS 24/7</div>
                <div className="ep-sub">Respuesta Inmediata Global</div>
              </div>
              <div className="ep-phone"><EditableField id="rg-emerg">+34 963 XXX XXX</EditableField></div>
            </div>
          </div>
        </div>
      </div></section>
    </>
  )
}
