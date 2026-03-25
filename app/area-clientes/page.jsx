import Link from 'next/link'
import EditableField from '@/components/EditableField'
import CMSLoader from '@/components/CMSLoader'

export const metadata = { title: 'Área Clientes' }
const PAGE = 'area-clientes'

export default function AreaClientesPage() {
  return (
    <>
      <CMSLoader pageKey={PAGE} />
      <div className="page-hero"><div className="container"><div className="ph-inner">
        <div className="breadcrumb"><Link href="/">Inicio</Link> › <span style={{ color: 'var(--gold)' }}>Área Clientes</span></div>
        <h1 className="page-title"><EditableField id="ac-title">Área de Clientes</EditableField></h1>
        <p className="page-sub"><EditableField id="ac-sub">Acceso exclusivo a documentación técnica, certificados y portal de seguimiento de servicios.</EditableField></p>
      </div></div></div>

      <section className="section"><div className="container" style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🔒</div>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem', letterSpacing: '.04em' }}>
          <EditableField id="ac-h2">ACCESO RESTRINGIDO</EditableField>
        </h2>
        <EditableField id="ac-body" tag="p" block style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Esta área está reservada para clientes activos de Extinval Group. Si es cliente y necesita acceder a sus certificados y documentación técnica, contacte con su delegación asignada para recibir sus credenciales de acceso.
        </EditableField>
        <Link href="/contacto" className="btn btn-primary" style={{ display: 'inline-flex' }}>Solicitar Acceso</Link>
      </div></section>
    </>
  )
}
