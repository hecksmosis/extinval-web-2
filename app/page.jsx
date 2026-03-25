'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import EditableField from '@/components/EditableField'
import CMSLoader from '@/components/CMSLoader'
import { useTranslation } from '@/contexts/LangContext'

const PAGE = 'home'

export default function HomePage() {
  const t = useTranslation()
  const [slide, setSlide] = useState(0)
  const TOTAL = 3

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % TOTAL), 5500)
    return () => clearInterval(timer)
  }, [])

  // Counter animation
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return
      document.querySelectorAll('[data-count]').forEach(el => {
        const target = +el.dataset.count, dur = 1400
        let start = null
        const step = ts => {
          if (!start) start = ts
          const p = Math.min((ts - start) / dur, 1)
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)))
          if (p < 1) requestAnimationFrame(step); else el.textContent = target
        }
        requestAnimationFrame(step)
      })
      obs.disconnect()
    }, { threshold: .3 })
    const el = document.getElementById('cifras-trigger')
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Reveal animations
  useEffect(() => {
    const ro = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target) } }),
      { threshold: .08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el))
    return () => ro.disconnect()
  }, [])

  const slides = [
    {
      badge: 'hero.badge1',
      lines: ['hero.title1.l1','hero.title1.l2','hero.title1.l3','hero.title1.l4'],
      emIdx: 2,
      lead: 'hero.lead1',
      cta1: { label:'hero.cta1.primary',   href:'#divisiones' },
      cta2: { label:'hero.cta1.secondary', href:'/nosotros' },
    },
    {
      badge: 'hero.badge2',
      lines: ['hero.title2.l1','hero.title2.l2','hero.title2.l3','hero.title2.l4'],
      emIdx: 2,
      lead: 'hero.lead2',
      cta1: { label:'hero.cta2.primary',   href:'/servicios/buques-mercantes' },
      cta2: { label:'hero.cta2.secondary', href:'/autoridad' },
    },
    {
      badge: 'hero.badge3',
      lines: ['hero.title3.l1','hero.title3.l2','hero.title3.l3','hero.title3.l4'],
      emIdx: 2,
      lead: 'hero.lead3',
      cta1: { label:'hero.cta3.primary',   href:'/servicios/industrial-comercial' },
      cta2: { label:'hero.cta3.secondary', href:'/contacto' },
    },
  ]

  const services = [
    { n:'01', icon:'⚙', titleKey:'srv1.title', subKey:'srv1.sub', textKey:'srv1.text', ctaKey:'srv1.cta', href:'/servicios/oil-gas',              cmsId:'1' },
    { n:'02', icon:'⚓', titleKey:'srv2.title', subKey:'srv2.sub', textKey:'srv2.text', ctaKey:'srv2.cta', href:'/servicios/buques-mercantes',     cmsId:'2' },
    { n:'03', icon:'⛵', titleKey:'srv3.title', subKey:'srv3.sub', textKey:'srv3.text', ctaKey:'srv3.cta', href:'/servicios/nautica-recreo',       cmsId:'3' },
    { n:'04', icon:'🏭', titleKey:'srv4.title', subKey:'srv4.sub', textKey:'srv4.text', ctaKey:'srv4.cta', href:'/servicios/industrial-comercial', cmsId:'4' },
  ]

  return (
    <>
      <CMSLoader pageKey={PAGE} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-diagonal" />
        <div className="hero-circle" />

        <div className="hero-body" style={{ minHeight: '78vh', position: 'relative' }}>
          {slides.map((sl, i) => (
            <div key={i} className={`hero-slide${slide === i ? ' active' : ''}`}>
              <div className="hero-content">
                <div className="hero-badge">{t(sl.badge)}</div>
                <h1 className="hero-title">
                  {sl.lines.map((lk, li) => (
                    <span key={li}>
                      {li === sl.emIdx ? <em>{t(lk)}</em> : t(lk)}
                      {li < sl.lines.length - 1 && <br />}
                    </span>
                  ))}
                </h1>
                <p className="hero-lead">{t(sl.lead)}</p>
                <div className="hero-btns">
                  <Link href={sl.cta1.href} className="btn btn-primary">{t(sl.cta1.label)}</Link>
                  <Link href={sl.cta2.href} className="btn btn-outline">{t(sl.cta2.label)}</Link>
                </div>
              </div>
            </div>
          ))}

          {/* Slide dots */}
          <div className="hero-nav">
            {slides.map((_, i) => (
              <button key={i} className={`hero-dot${slide === i ? ' active' : ''}`} onClick={() => setSlide(i)} />
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-stats">
          <div className="container">
            <div className="hs-grid" id="cifras-trigger">
              <div className="hs-item">
                <div className="hs-val"><span data-count="40">0</span><span className="accent">+</span></div>
                <div className="hs-label">{t('stats.years')}</div>
              </div>
              <div className="hs-item">
                <div className="hs-val"><span data-count="4">0</span></div>
                <div className="hs-label">{t('stats.countries')}</div>
              </div>
              <div className="hs-item">
                <div className="hs-val"><span data-count="5">0</span></div>
                <div className="hs-label">{t('stats.iacs')}</div>
              </div>
              <div className="hs-item">
                <div className="hs-val">24<span className="accent">/7</span></div>
                <div className="hs-label">{t('stats.response')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST BAR ═══════════ */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-inner">
            <span className="trust-label">{t('trust.label')}</span>
            <span className="trust-pipe" />
            {['DNV', "LLOYD'S", 'BV', 'ABS', 'RINA'].map((name, i) => (
              <span key={name}>
                <span className="trust-item">{name}</span>
                {i < 4 && <span className="trust-pipe" />}
              </span>
            ))}
            <span className="trust-pipe" />
            <span className="trust-iso">ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* ═══════════ DIVISIONES ═══════════ */}
      <section className="section services-strip" id="divisiones">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">
            <div className="overline" style={{ justifyContent: 'center' }}>{t('div.overline')}</div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--navy)', marginTop: '.75rem', letterSpacing: '.04em' }}>
              <EditableField id="div-title">{t('div.title')}</EditableField>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 520, margin: '.75rem auto 0', lineHeight: 1.8 }}>
              <EditableField id="div-lead">{t('div.lead')}</EditableField>
            </p>
          </div>
        </div>
        <div className="container-wide">
          <div className="srv-grid reveal">
            {services.map(s => (
              <div key={s.n} className="srv-card" onClick={() => window.location.href = s.href} style={{ cursor: 'pointer' }}>
                <div className="sc-num">{s.n}</div>
                <div className="sc-icon">{s.icon}</div>
                <div className="sc-title">
                  <EditableField id={`srv${s.cmsId}-title`}>{t(s.titleKey)}</EditableField>
                </div>
                <div className="sc-sub">{t(s.subKey)}</div>
                <p className="sc-text">
                  <EditableField id={`srv${s.cmsId}-text`}>{t(s.textKey)}</EditableField>
                </p>
                <Link href={s.href} className="sc-link" onClick={e => e.stopPropagation()}>
                  {t(s.ctaKey)} <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CIFRAS ═══════════ */}
      <section className="section cifras-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">
            <div className="overline gold" style={{ justifyContent: 'center' }}>{t('cifras.overline')}</div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,4vw,3.2rem)', color: '#fff', marginTop: '.75rem', letterSpacing: '.04em' }}>
              <EditableField id="cifras-title">{t('cifras.title')}</EditableField>
            </h2>
          </div>
          <div className="cifras-grid reveal">
            {[
              { count: 40, suffix: '+', key: 'cifra1' },
              { count: 4,  suffix: '',  key: 'cifra2' },
              { count: 5,  suffix: '',  key: 'cifra3' },
              { count: null, special: '24/7', key: 'cifra4' },
            ].map((c, i) => (
              <div key={i} className="cifra-item">
                <div className="cifra-val">
                  {c.special
                    ? <>24<span className="accent">/7</span></>
                    : <><span data-count={c.count}>0</span><span className="accent">{c.suffix}</span></>
                  }
                </div>
                <div className="cifra-label">
                  <EditableField id={`cifra${i+1}-label`}>{t(c.key)}</EditableField>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EJE DE SEGURIDAD ═══════════ */}
      <section className="section section-gray" id="red-global">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">
            <div className="overline" style={{ justifyContent: 'center' }}>{t('eje.overline')}</div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--navy)', marginTop: '.75rem', letterSpacing: '.04em' }}>
              <EditableField id="eje-title">{t('eje.title')}</EditableField>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 560, margin: '.75rem auto 0', lineHeight: 1.8 }}>
              <EditableField id="eje-lead">{t('eje.lead')}</EditableField>
            </p>
          </div>
          <div className="eje-split">
            <div className="reveal">
              <div className="eje-list">
                {[
                  { flag:'ESP', bg:'var(--red)', nameKey:'eje.esp.name', hq:true, descId:'loc-esp', descKey:'eje.esp.desc', tags:['Valencia','Algeciras','Barcelona'] },
                  { flag:'CNR', bg:'#1565C0',   nameKey:'eje.cnr.name', hq:false, descId:'loc-cnr', descKey:'eje.cnr.desc', tags:['Las Palmas','S/C de Tenerife'] },
                  { flag:'PAN', bg:'#0A5C36',   nameKey:'eje.pan.name', hq:false, descId:'loc-pan', descKey:'eje.pan.desc', tags:['Canal de Panamá','Ciudad de Panamá'] },
                  { flag:'USA', bg:'#B71C1C',   nameKey:'eje.usa.name', hq:false, descId:'loc-usa', descKey:'eje.usa.desc', tags:['Houston','Miami','Canadá'] },
                ].map(loc => (
                  <div key={loc.flag} className="eje-row">
                    <div className="eje-flag" style={{ background: loc.bg }}>{loc.flag}</div>
                    <div className="eje-body">
                      <div className="eje-name">
                        {t(loc.nameKey)}{loc.hq && <span className="eje-hq">{t('eje.esp.hq')}</span>}
                      </div>
                      <div className="eje-desc">
                        <EditableField id={loc.descId}>{t(loc.descKey)}</EditableField>
                      </div>
                      <div className="eje-tags">{loc.tags.map(tag => <span key={tag} className="eje-tag">{tag}</span>)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal d2">
              <div className="eje-map">
                <div className="eje-map-dots" />
                <div style={{ fontFamily:'var(--cond)', fontSize:'.6rem', fontWeight:700, letterSpacing:'.2em', color:'var(--gold)', textTransform:'uppercase', marginBottom:'1rem', position:'relative', zIndex:2 }}>
                  {t('eje.mapLabel')}
                </div>
                <div className="eje-pins">
                  {[
                    { city:'Valencia, España', region:'SEDE CENTRAL · HQ', hq:true },
                    { city:'Algeciras / Barcelona', region:'Estrecho · Mediterráneo' },
                    { city:'Las Palmas de Gran Canaria', region:'Hub Atlántico' },
                    { city:'Canal de Panamá', region:'Panamá' },
                    { city:'Houston · Miami · Canadá', region:'Norteamérica' },
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
                  <div className="ep-title">{t('eje.emergency.title')}</div>
                  <div className="ep-sub">{t('eje.emergency.sub')}</div>
                </div>
                <div className="ep-phone">
                  <EditableField id="emergency-phone">+34 963 XXX XXX</EditableField>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SOBRE NOSOTROS ═══════════ */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="about-split">
            <div className="about-img-box reveal">
              <div className="about-img">
                <div className="about-img-bg" />
                <div className="about-img-icon">⚓</div>
              </div>
              <div className="about-years">
                <div className="ay-num">40+</div>
                <div className="ay-text">Años de<br/>Experiencia</div>
              </div>
              <div className="about-features">
                {[
                  { n:'1', titleKey:'about.feat1.title', textKey:'about.feat1.text' },
                  { n:'2', titleKey:'about.feat2.title', textKey:'about.feat2.text' },
                  { n:'3', titleKey:'about.feat3.title', textKey:'about.feat3.text' },
                ].map(f => (
                  <div key={f.n} className="af-item">
                    <div className="af-num">{f.n}</div>
                    <div>
                      <div className="af-title">{t(f.titleKey)}</div>
                      <div className="af-text">{t(f.textKey)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal d2">
              <div className="overline">{t('about.overline')}</div>
              <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(2rem,4vw,3rem)', color:'var(--navy)', margin:'.75rem 0', letterSpacing:'.04em' }}>
                <EditableField id="about-title">{t('about.title')}</EditableField>
              </h2>
              <div style={{ width:'3rem', height:'2px', background:'var(--red)', margin:'1.5rem 0' }} />
              <p style={{ fontSize:'1.05rem', color:'var(--muted)', lineHeight:1.85 }}>
                <EditableField id="about-lead">{t('about.lead')}</EditableField>
              </p>
              <blockquote style={{ borderLeft:'3px solid var(--red)', paddingLeft:'1.4rem', margin:'1.75rem 0' }}>
                <EditableField id="about-quote" tag="p" style={{ fontSize:'1rem', fontWeight:600, color:'var(--navy)', lineHeight:1.65 }}>
                  {t('about.quote')}
                </EditableField>
              </blockquote>
              <p style={{ fontSize:'.88rem', color:'var(--muted)', lineHeight:1.8 }}>
                <EditableField id="about-body">{t('about.body')}</EditableField>
              </p>
              <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'2rem' }}>
                <Link href="/nosotros" className="btn btn-navy">{t('about.cta1')}</Link>
                <Link href="/contacto" className="btn btn-outline-dark">{t('about.cta2')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PORTFOLIO ═══════════ */}
      <section className="section-sm" style={{ background:'var(--off)' }}>
        <div className="container">
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:'2rem', flexWrap:'wrap', marginBottom:'2.5rem' }} className="reveal">
            <div>
              <div className="overline red">{t('pt.overline')}</div>
              <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(2rem,4vw,3rem)', color:'var(--navy)', marginTop:'.6rem', letterSpacing:'.04em' }}>
                <EditableField id="pt-title">{t('pt.title')}</EditableField>
              </h2>
            </div>
            <Link href="/contacto" className="btn btn-outline-dark" style={{ flexShrink:0 }}>{t('pt.cta')}</Link>
          </div>
        </div>
        <div className="container-wide">
          <div className="pt-grid reveal">
            {[
              { cat:'FFE — Extinción', name:'Sistemas Fijos CO₂, Espuma & Niebla', desc:'Inspección anual y quinquenal IACS. Análisis laboratorio AR-AFFF.', icon:'🔥', grad:'pt-grad-1', large:true },
              { cat:'LSA — Salvamento', name:'Botes & Pescantes Caída Libre', desc:'Hatecke, Global Davit, Jiangsu Jiaoyan. Load Testing certificado.', icon:'⚓', grad:'pt-grad-2', large:false },
              { cat:'ATEX — Detección', name:'Calibración Gases H₂S / LEL', desc:'Certificados trazables para PSC y vetting de petroleras.', icon:'🧪', grad:'pt-grad-3', large:false },
            ].map(item => (
              <div key={item.cat} className={`pt-item${item.large ? ' pt-item-lg' : ''}`}>
                <div className={`pt-bg ${item.grad}`} />
                <div className="pt-icon">{item.icon}</div>
                <div className="pt-overlay" />
                <div className="pt-content">
                  <div className="pt-cat">{item.cat}</div>
                  <div className="pt-name">{item.name}</div>
                  <div className="pt-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-grid-2 reveal d1">
            {[
              { cat:'Náutica', name:'Balsas ISO & Pirotecnia', desc:'ISO 9650. Gestión certificada de pirotecnia caducada.', icon:'🛟', grad:'pt-grad-4' },
              { cat:'GMDSS / Radio', name:'EPIRB · AIS · SART', desc:'Servicio oficial ACR Electronics. Programación MMSI.', icon:'📡', grad:'pt-grad-5' },
              { cat:'Industrial', name:'Aerosoles & Detección Wireless', desc:'Extinción molecular. Sin obra civil. Tecnología ecológica.', icon:'🏭', grad:'pt-grad-6' },
              { cat:'OEM Repuestos', name:'Stock Estratégico ESP/USA', desc:'Distribución oficial Hatecke, Global Davit, Viking, Zodiac.', icon:'🔧', grad:'pt-grad-7' },
            ].map(item => (
              <div key={item.cat} className="pt-item">
                <div className={`pt-bg ${item.grad}`} />
                <div className="pt-icon">{item.icon}</div>
                <div className="pt-overlay" />
                <div className="pt-content">
                  <div className="pt-cat">{item.cat}</div>
                  <div className="pt-name">{item.name}</div>
                  <div className="pt-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ AUTORIDAD ═══════════ */}
      <section className="section" style={{ background:'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign:'center', maxWidth:580, margin:'0 auto 3.5rem' }} className="reveal">
            <div className="overline" style={{ justifyContent:'center' }}>{t('aut.overline')}</div>
            <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(2rem,4vw,3rem)', color:'var(--navy)', marginTop:'.75rem', letterSpacing:'.04em' }}>
              <EditableField id="aut-title">{t('aut.title')}</EditableField>
            </h2>
            <p style={{ fontSize:'1rem', color:'var(--muted)', marginTop:'.75rem', lineHeight:1.8 }}>
              <EditableField id="aut-lead">{t('aut.lead')}</EditableField>
            </p>
          </div>
          <div className="aut-grid reveal">
            {[
              { icon:'🏅', titleId:'aut1-title', titleKey:'aut1.title', sub:'aut1.sub', badges:['DNV',"Lloyd's Register",'BV','ABS','RINA'], textId:'aut1-text', textKey:'aut1.text' },
              { icon:'🏴', titleId:'aut2-title', titleKey:'aut2.title', sub:'aut2.sub', badges:['Panamá','Liberia','Bahamas','Islas Marshall','España/UE'], textId:'aut2-text', textKey:'aut2.text' },
              { icon:'🔧', titleId:'aut3-title', titleKey:'aut3.title', sub:'aut3.sub', badges:['Hatecke','Global Davit','Viking','Zodiac','ACR Electronics'], textId:'aut3-text', textKey:'aut3.text' },
            ].map(c => (
              <div key={c.titleId} className="aut-card">
                <span className="aut-icon">{c.icon}</span>
                <div className="aut-title"><EditableField id={c.titleId}>{t(c.titleKey)}</EditableField></div>
                <div className="aut-sub">{t(c.sub)}</div>
                <div className="aut-badges">{c.badges.map(b => <span key={b} className="aut-badge">{b}</span>)}</div>
                <p className="aut-text"><EditableField id={c.textId}>{t(c.textKey)}</EditableField></p>
              </div>
            ))}
          </div>
          <div className="iso-strip reveal">
            <div style={{ fontSize:'2.2rem' }}>✅</div>
            <div>
              <div className="iso-title">ISO 9001:2015</div>
              <div className="iso-sub">Gestión de Calidad Certificada</div>
            </div>
            <p className="iso-text"><EditableField id="iso-text">{t('iso.text')}</EditableField></p>
            <Link href="/autoridad" className="btn btn-navy btn-sm" style={{ flexShrink:0 }}>{t('iso.cta')}</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ PARTNERS ═══════════ */}
      <div className="partners-bar">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'1.5rem' }}>
            <span style={{ fontFamily:'var(--cond)', fontSize:'.6rem', fontWeight:700, letterSpacing:'.2em', color:'var(--light)', textTransform:'uppercase' }}>
              {t('partners.label')}
            </span>
          </div>
          <div className="partners-inner">
            {['HATECKE','GLOBAL DAVIT','VIKING','ZODIAC','ACR'].map((p, i) => (
              <span key={p} style={{ display:'contents' }}>
                <span className="partner-name">{p}</span>
                {i < 4 && <span className="partner-sep" />}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ CONTACT ═══════════ */}
      <section className="section contact-dark" id="contacto">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal">
              <div className="overline light">{t('contact.overline')}</div>
              <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(2rem,4vw,3rem)', color:'#fff', margin:'.75rem 0 .5rem', letterSpacing:'.04em' }}>
                <EditableField id="contact-title">{t('contact.title')}</EditableField>
              </h2>
              <p style={{ fontSize:'.92rem', color:'rgba(255,255,255,.5)', lineHeight:1.8, marginBottom:'2.5rem' }}>
                <EditableField id="contact-lead">{t('contact.lead')}</EditableField>
              </p>
              {[
                { icon:'📍', labelKey:'contact.addr.label',  id:'contact-addr',  def:'Valencia, España · Algeciras · Barcelona · Canarias · Panamá · Houston · Canadá' },
                { icon:'📞', labelKey:'contact.phone.label', id:'contact-phone', def:'+34 963 XXX XXX' },
                { icon:'✉',  labelKey:'contact.email.label', id:'contact-email', def:'info@extinval.com' },
              ].map(item => (
                <div key={item.id} style={{ display:'flex', gap:'1rem', alignItems:'flex-start', marginBottom:'1.25rem' }}>
                  <span style={{ color:'var(--gold)', fontSize:'1rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily:'var(--cond)', fontSize:'.62rem', fontWeight:700, letterSpacing:'.15em', textTransform:'uppercase', color:'rgba(255,255,255,.32)', marginBottom:'.15rem' }}>
                      {t(item.labelKey)}
                    </div>
                    <EditableField id={item.id} style={{ fontSize:'.87rem', color:'rgba(255,255,255,.6)' }}>{item.def}</EditableField>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal d2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactForm() {
  const t = useTranslation()
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const fd = new FormData(e.target)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(fd)),
      })
    } catch {}
    setStatus('done')
  }

  if (status === 'done') {
    return (
      <div style={{ padding:'2rem', background:'rgba(16,185,129,.1)', border:'1px solid rgba(16,185,129,.3)', color:'#6EE7B7', lineHeight:1.7 }}>
        <strong style={{ display:'block', marginBottom:'.35rem' }}>{t('contact.form.ok.title')}</strong>
        {t('contact.form.ok.body')}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="cf-section-title">{t('contact.form.title')}</div>
      <div className="cf-row">
        <input className="cf-input" name="name"  placeholder={t('contact.form.name')}  required />
        <input className="cf-input" name="email" placeholder={t('contact.form.email')} required type="email" />
      </div>
      <select className="cf-select" name="division" required style={{ width:'100%', marginBottom:'.7rem' }}>
        <option value="">{t('contact.form.div')}</option>
        {['opt1','opt2','opt3','opt4','opt5'].map(k => (
          <option key={k}>{t(`contact.div.${k}`)}</option>
        ))}
      </select>
      <textarea className="cf-textarea" name="message" placeholder={t('contact.form.msg')} required />
      <button type="submit" disabled={status==='loading'} className="btn btn-gold" style={{ width:'100%', justifyContent:'center', padding:'.9rem' }}>
        {status==='loading' ? t('contact.form.sending') : t('contact.form.submit')}
      </button>
    </form>
  )
}
