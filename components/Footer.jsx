'use client'
import Link from 'next/link'
import EditableField from './EditableField'
import { useTranslation } from '@/contexts/LangContext'

export default function Footer() {
  const t = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="ft-grid">
          <div>
            <Link href="/" className="logo-wrap" style={{ display:'inline-flex', marginBottom:'1.25rem' }}>
              <div className="logo-chevron">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
                  <path d="M3 10a7 7 0 1114 0A7 7 0 013 10zm7-5v5l3.5 2-1 1.7L9 11.5V5h1z"/>
                </svg>
              </div>
              <div>
                <div className="logo-name" style={{ color:'#fff' }}>EXTINVAL</div>
                <div className="logo-sub" style={{ color:'rgba(255,255,255,.3)' }}>GROUP · Maritime &amp; Industrial Safety</div>
              </div>
            </Link>
            <EditableField id="ft-desc" tag="p" className="ft-brand-text">
              {t('footer.tagline')}
            </EditableField>
            <div className="ft-iso">
              <span style={{ background:'var(--gold)', color:'var(--navy)', fontWeight:800, fontSize:'.65rem', padding:'.12rem .4rem' }}>ISO</span>
              <span style={{ fontSize:'.62rem', letterSpacing:'.12em', color:'rgba(255,255,255,.28)' }}>9001:2015 CERTIFIED</span>
            </div>
          </div>

          <div>
            <div className="ft-col-title">{t('footer.services')}</div>
            <div className="ft-links">
              <Link href="/servicios/oil-gas">Oil &amp; Gas</Link>
              <Link href="/servicios/buques-mercantes">{t('nav.merchant')}</Link>
              <Link href="/servicios/nautica-recreo">{t('nav.recreational')}</Link>
              <Link href="/servicios/industrial-comercial">{t('nav.industrial')}</Link>
              <Link href="/contacto">Repuestos OEM</Link>
            </div>
          </div>

          <div>
            <div className="ft-col-title">{t('footer.company')}</div>
            <div className="ft-links">
              <Link href="/nosotros">{t('footer.nosotros')}</Link>
              <Link href="/nosotros#trayectoria">{t('footer.trayectoria')}</Link>
              <Link href="/autoridad">{t('footer.certs')}</Link>
              <Link href="/autoridad#partners">{t('footer.partners')}</Link>
              <Link href="/area-clientes">{t('footer.clientArea')}</Link>
            </div>
          </div>

          <div>
            <div className="ft-col-title">{t('footer.contactTitle')}</div>
            <div className="ft-contact">
              <div className="ft-ci">
                <span className="ft-ci-icon">📍</span>
                <EditableField id="ft-address">
                  <span>Sede Central: Valencia, España<br />Algeciras · Barcelona · Canarias<br />Panamá · Houston · Canadá</span>
                </EditableField>
              </div>
              <div className="ft-ci">
                <span className="ft-ci-icon">📞</span>
                <EditableField id="ft-phone">
                  <span>+34 963 XXX XXX<br /><small style={{ opacity:.6 }}>Emergencias 24H</small></span>
                </EditableField>
              </div>
              <div className="ft-ci">
                <span className="ft-ci-icon">✉</span>
                <EditableField id="ft-email">info@extinval.com</EditableField>
              </div>
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <div className="ft-copy">{t('footer.copy', { year })}</div>
          <div className="ft-legal">
            <Link href="/legal">{t('footer.legal')}</Link>
            <Link href="/privacidad">{t('footer.privacy')}</Link>
            <Link href="/cookies">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
