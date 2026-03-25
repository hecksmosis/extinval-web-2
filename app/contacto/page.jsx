'use client'
import { useState } from 'react'
import Link from 'next/link'
import EditableField from '@/components/EditableField'
import CMSLoader from '@/components/CMSLoader'

const PAGE = 'contacto'

export default function ContactoPage() {
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

  return (
    <>
      <CMSLoader pageKey={PAGE} />

      <div className="page-hero"><div className="container"><div className="ph-inner">
        <div className="breadcrumb"><Link href="/">Inicio</Link> › <span style={{ color: 'var(--gold)' }}>Contacto</span></div>
        <h1 className="page-title"><EditableField id="ct-title">Contacto Global</EditableField></h1>
        <p className="page-sub"><EditableField id="ct-sub">Respuesta en menos de 24h. Para emergencias, llame directamente al número 24/7.</EditableField></p>
      </div></div></div>

      <section className="section"><div className="container">
        <div className="contact-grid">
          <div>
            <div className="overline light" style={{ color: 'var(--gold)' }}>Envíenos un Mensaje</div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: 'var(--navy)', margin: '.75rem 0 2rem', letterSpacing: '.04em' }}>
              <EditableField id="ct-form-title">SOLICITAR PROPUESTA TÉCNICA</EditableField>
            </h2>

            {status === 'done' ? (
              <div style={{ padding: '2rem', background: '#ECFDF5', border: '1px solid #10B981', color: '#065F46', lineHeight: 1.7 }}>
                <strong style={{ display: 'block', marginBottom: '.35rem' }}>✓ Solicitud recibida correctamente</strong>
                Nuestro equipo técnico le contactará en menos de 24 horas.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.7rem', marginBottom: '.7rem' }}>
                  <input style={{ padding: '.78rem 1rem', border: '1.5px solid var(--border)', fontSize: '.87rem', outline: 'none', fontFamily: 'inherit' }} name="name" placeholder="Nombre / Empresa *" required />
                  <input style={{ padding: '.78rem 1rem', border: '1.5px solid var(--border)', fontSize: '.87rem', outline: 'none', fontFamily: 'inherit' }} name="email" type="email" placeholder="Email *" required />
                </div>
                <select style={{ width: '100%', padding: '.78rem 1rem', border: '1.5px solid var(--border)', fontSize: '.87rem', outline: 'none', marginBottom: '.7rem', fontFamily: 'inherit', background: '#fff' }} name="division" required>
                  <option value="">División de Interés *</option>
                  <option>Oil &amp; Gas</option>
                  <option>Buques Mercantes</option>
                  <option>Náutica de Recreo</option>
                  <option>Industrial &amp; Comercial</option>
                  <option>Repuestos OEM</option>
                </select>
                <textarea style={{ width: '100%', padding: '.78rem 1rem', border: '1.5px solid var(--border)', fontSize: '.87rem', outline: 'none', marginBottom: '.7rem', fontFamily: 'inherit', minHeight: 100, resize: 'vertical' }} name="message" placeholder="Descripción del buque / instalación y necesidad..." required />
                <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '.9rem' }}>
                  {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud →'}
                </button>
              </form>
            )}
          </div>

          <div>
            <div style={{ background: 'var(--off)', border: '1px solid var(--border)', padding: '2rem', marginBottom: '1.5rem' }}>
              <div style={{ fontFamily: 'var(--cond)', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1.25rem' }}>Información de Contacto</div>
              {[
                ['📍', 'Sede Central', 'ct-addr', 'Valencia, España · Algeciras · Barcelona · Canarias · Panamá · Houston · Canadá'],
                ['📞', 'Emergencias 24H', 'ct-phone', '+34 963 XXX XXX'],
                ['✉', 'Email General', 'ct-email', 'info@extinval.com'],
              ].map(([ic, lbl, id, def]) => (
                <div key={id} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--gold)' }}>{ic}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--cond)', fontSize: '.62rem', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.15rem' }}>{lbl}</div>
                    <EditableField id={id} style={{ fontSize: '.87rem', color: 'var(--text)' }}>{def}</EditableField>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--red)', padding: '1.75rem 2rem' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: '#fff', letterSpacing: '.04em' }}>EMERGENCIAS 24/7</div>
              <div style={{ fontFamily: 'var(--cond)', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', margin: '.25rem 0 .75rem' }}>Respuesta Inmediata Global</div>
              <EditableField id="ct-emerg-phone" tag="div" style={{ fontFamily: 'var(--display)', fontSize: '1.85rem', color: '#fff', letterSpacing: '.04em' }}>+34 963 XXX XXX</EditableField>
            </div>
          </div>
        </div>
      </div></section>
    </>
  )
}
