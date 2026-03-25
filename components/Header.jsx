'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/contexts/LangContext'

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [ddOpen,     setDdOpen]     = useState(false)
  const ddRef = useRef(null)
  const path  = usePathname()
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const fn = (e) => { if (ddRef.current && !ddRef.current.contains(e.target)) setDdOpen(false) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  // Close dropdown on route change
  useEffect(() => { setDdOpen(false) }, [path])

  const isActive = (href) => path === href || path.startsWith(href + '/')
  const close    = () => { setDrawerOpen(false); document.body.style.overflow = '' }
  const open     = () => { setDrawerOpen(true);  document.body.style.overflow = 'hidden' }

  const serviceLinks = [
    { href: '/servicios/oil-gas',              icon: '⚙', key: 'nav.oilGas'       },
    { href: '/servicios/buques-mercantes',     icon: '⚓', key: 'nav.merchant'     },
    { href: '/servicios/nautica-recreo',       icon: '⛵', key: 'nav.recreational' },
    { href: '/servicios/industrial-comercial', icon: '🏭', key: 'nav.industrial'   },
  ]

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <div className="tb-emergency">
              <span className="tb-pulse" />
              <span>{t('topbar.emergency')}: +34 963 XXX XXX</span>
            </div>
            <div className="tb-links">
              <Link href="/nosotros">{t('topbar.about')}</Link>
              <Link href="/autoridad">{t('topbar.certs')}</Link>
              <Link href="/contacto">{t('topbar.contact')}</Link>
              <Link href="/area-clientes" className="tb-cta">{t('topbar.clientArea')}</Link>
            </div>
          </div>
        </div>
      </div>

      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="logo-wrap">
              <div className="logo-chevron">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
                  <path d="M3 10a7 7 0 1114 0A7 7 0 013 10zm7-5v5l3.5 2-1 1.7L9 11.5V5h1z"/>
                </svg>
              </div>
              <div>
                <div className="logo-name">EXTINVAL</div>
                <div className="logo-sub">GROUP · Maritime &amp; Industrial Safety</div>
              </div>
            </Link>

            <nav className="main-nav">
              {/* Click-based services dropdown */}
              <div className={`nav-dd${ddOpen ? ' open' : ''}`} ref={ddRef}>
                <button
                  className={`nav-dd-trigger${isActive('/servicios') ? ' active' : ''}`}
                  onClick={() => setDdOpen(o => !o)}
                  aria-expanded={ddOpen}
                >
                  {t('nav.services')}
                  <span className="nav-dd-arrow">▾</span>
                </button>
                <div className="dd-menu" role="menu">
                  {serviceLinks.map(s => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`dd-item${isActive(s.href) ? ' dd-item-active' : ''}`}
                      role="menuitem"
                      onClick={() => setDdOpen(false)}
                    >
                      <span className="dd-icon">{s.icon}</span>
                      {t(s.key)}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/nosotros"   className={isActive('/nosotros')   ? 'active' : ''}>{t('nav.about')}</Link>
              <Link href="/autoridad"  className={isActive('/autoridad')  ? 'active' : ''}>{t('nav.authority')}</Link>
              <Link href="/red-global" className={isActive('/red-global') ? 'active' : ''}>{t('nav.network')}</Link>
              <Link href="/contacto"   className={isActive('/contacto')   ? 'active' : ''}>{t('nav.contact')}</Link>
            </nav>

            <div className="header-actions">
              <div className="lang-switch">
                <button className={`lang-btn${lang==='es'?' lang-active':''}`} onClick={()=>setLang('es')}>ES</button>
                <span className="lang-sep">|</span>
                <button className={`lang-btn${lang==='en'?' lang-active':''}`} onClick={()=>setLang('en')}>EN</button>
              </div>
              <Link href="/contacto" className="btn btn-primary btn-sm">{t('nav.cta')}</Link>
            </div>

            <div className="ham" onClick={open}><span/><span/><span/></div>
          </div>
        </div>
      </header>

      <div className={`mobile-scrim${drawerOpen ? ' show' : ''}`} onClick={close} />
      <div className={`mobile-drawer${drawerOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={close}>✕</button>
        <div className="mobile-lang">
          <button className={`lang-btn${lang==='es'?' lang-active':''}`} onClick={()=>setLang('es')}>ES</button>
          <span className="lang-sep">|</span>
          <button className={`lang-btn${lang==='en'?' lang-active':''}`} onClick={()=>setLang('en')}>EN</button>
        </div>
        {serviceLinks.map(s => (
          <Link key={s.href} href={s.href} onClick={close}>{s.icon} {t(s.key)}</Link>
        ))}
        <Link href="/nosotros"   onClick={close}>{t('nav.about')}</Link>
        <Link href="/autoridad"  onClick={close}>{t('nav.authority')}</Link>
        <Link href="/red-global" onClick={close}>{t('nav.network')}</Link>
        <Link href="/contacto"   onClick={close} style={{color:'var(--gold)',marginTop:'1rem'}}>{t('nav.contact')}</Link>
      </div>
    </>
  )
}
