// lib/translations.js
// Flat-key translation dictionary for ES / EN.
// EditableField CMS content is stored per-locale using page_key suffix:
//   e.g. page_key = 'home-es' or 'home-en'
// Static chrome (nav, footer, labels) is handled here.

export const translations = {
  es: {
    // ── TOP BAR ──────────────────────────────────────────────
    'topbar.emergency':    'EMERGENCIA 24H',
    'topbar.about':        'Sobre Nosotros',
    'topbar.certs':        'Certificaciones',
    'topbar.contact':      'Contacto',
    'topbar.clientArea':   'Área Clientes →',

    // ── NAV ──────────────────────────────────────────────────
    'nav.services':        'Servicios',
    'nav.oilGas':          'Oil & Gas',
    'nav.merchant':        'Buques Mercantes',
    'nav.recreational':    'Náutica de Recreo',
    'nav.industrial':      'Industrial & Comercial',
    'nav.about':           'Nosotros',
    'nav.authority':       'Autoridad',
    'nav.network':         'Red Global',
    'nav.contact':         'Contacto',
    'nav.cta':             'Solicitar Propuesta',

    // ── HERO ─────────────────────────────────────────────────
    'hero.badge1':         'Seguridad Marítima e Industrial · Desde 1980',
    'hero.title1.l1':      'SOLUCIONES',
    'hero.title1.l2':      'INTEGRALES EN',
    'hero.title1.l3':      'SEGURIDAD',
    'hero.title1.l4':      'MARÍTIMA',
    'hero.lead1':          'Más de 40 años protegiendo vidas y activos en alta mar. Oil & Gas, Flota Mercante, Náutica de Recreo e Industria con aprobaciones IACS.',
    'hero.cta1.primary':   'Nuestros Servicios',
    'hero.cta1.secondary': 'Conocer Extinval',

    'hero.badge2':         'Buques Mercantes · SOLAS / IMO',
    'hero.title2.l1':      'CERO',
    'hero.title2.l2':      'DEFICIENCIAS.',
    'hero.title2.l3':      'CERO',
    'hero.title2.l4':      'RETRASOS.',
    'hero.lead2':          'Blindaje técnico total ante el Port State Control. Logística de precisión adaptada a los tiempos de escala de su buque.',
    'hero.cta2.primary':   'División Mercante',
    'hero.cta2.secondary': 'Aprobaciones IACS',

    'hero.badge3':         'Industrial & Comercial · Rigor Naval en Tierra',
    'hero.title3.l1':      'RIGOR',
    'hero.title3.l2':      'NAVAL EN',
    'hero.title3.l3':      'TIERRA',
    'hero.title3.l4':      'FIRME.',
    'hero.lead3':          'Trasladamos la exigencia extrema del sector marítimo a sus instalaciones industriales. Aerosoles condensados, detección inalámbrica, trazabilidad total.',
    'hero.cta3.primary':   'Soluciones Industriales',
    'hero.cta3.secondary': 'Contactar',

    // ── STATS STRIP ──────────────────────────────────────────
    'stats.years':         'Años de Experiencia',
    'stats.countries':     'Países con Sede Propia',
    'stats.iacs':          'Aprobaciones IACS',
    'stats.response':      'Respuesta de Emergencia',

    // ── TRUST BAR ────────────────────────────────────────────
    'trust.label':         'Aprobaciones IACS',

    // ── DIVISIONES ───────────────────────────────────────────
    'div.overline':        'Líneas de Servicio',
    'div.title':           'DIVISIONES ESPECIALIZADAS',
    'div.lead':            'Hiper-especialización para cada entorno operativo. La misma excelencia IACS aplicada con la máxima precisión técnica.',

    'srv1.title':          'Oil & Gas',
    'srv1.sub':            'Riesgo Crítico',
    'srv1.text':           'Plataformas offshore, Drillships y refinerías. Sistemas FFE de alta capacidad, calibración ATEX, inspección LSA y botes de caída libre.',
    'srv1.cta':            'Más información',

    'srv2.title':          'Buques Mercantes',
    'srv2.sub':            'SOLAS / IMO',
    'srv2.text':           'Cero deficiencias ante el Port State Control. CO₂, Niebla y Espumas. Load Testing de pescantes. Calibración UTI. OEM Hatecke & Global Davit.',
    'srv2.cta':            'Más información',

    'srv3.title':          'Náutica de Recreo',
    'srv3.sub':            'Excelencia al Detalle',
    'srv3.text':           'Servicio "Guante Blanco". Agentes limpios Novec 1230. Balsas ISO 9650. GMDSS: EPIRB, AIS, SART. Gestión pirotecnia caducada.',
    'srv3.cta':            'Más información',

    'srv4.title':          'Industrial & Comercial',
    'srv4.sub':            'Rigor Naval en Tierra',
    'srv4.text':           'Mantenimiento FFE en naves y centros logísticos. Aerosoles condensados de vanguardia. Detección inalámbrica sin obra civil. Calibración ATEX.',
    'srv4.cta':            'Más información',

    // ── CIFRAS ───────────────────────────────────────────────
    'cifras.overline':     'Cifras de Confianza',
    'cifras.title':        '+40 AÑOS SALVAGUARDANDO LA VIDA EN EL MAR',
    'cifra1':              'Años de Experiencia',
    'cifra2':              'Países con Sede Propia',
    'cifra3':              'Sociedades IACS Aprobadas',
    'cifra4':              'Respuesta Global',

    // ── EJE SEGURIDAD ─────────────────────────────────────────
    'eje.overline':        'Red Global',
    'eje.title':           'EJE DE SEGURIDAD',
    'eje.lead':            'Cobertura estratégica en las rutas comerciales más críticas del mundo. España, Canarias, Panamá y Norteamérica.',
    'eje.esp.name':        'España',
    'eje.esp.hq':          'HQ',
    'eje.esp.desc':        'Sede Central en Valencia. Cobertura total en el eje Mediterráneo-Estrecho.',
    'eje.cnr.name':        'Islas Canarias',
    'eje.cnr.desc':        'Hub del Atlántico Medio. Posición estratégica para el tráfico trasatlántico.',
    'eje.pan.name':        'Panamá',
    'eje.pan.desc':        'Punto neurálgico del comercio mundial. Servicios críticos antes y después del tránsito.',
    'eje.usa.name':        'Norteamérica',
    'eje.usa.desc':        'Presencia consolidada en Costa Este, Oeste y Golfo. Cumplimiento SOLAS.',
    'eje.mapLabel':        'Puntos de Operación Directa',
    'eje.emergency.title': 'EMERGENCIAS 24/7',
    'eje.emergency.sub':   'Respuesta Inmediata Global',

    // ── ABOUT ────────────────────────────────────────────────
    'about.overline':      'Quiénes Somos',
    'about.title':         'TRAYECTORIA & MISIÓN',
    'about.lead':          'Extinval es sinónimo de seguridad naval a ambos lados del Atlántico. Especializados en mantenimiento, inspección y suministro de sistemas FFE y LSA.',
    'about.quote':         'Diferenciamos nuestro servicio integrando tres ejes clave: Excelencia Certificada, Logística de Precisión y Cumplimiento Normativo.',
    'about.body':          'Nuestra estructura da respuesta experta a tres sectores vitales: la operativa crítica de Buques Mercantes, la seguridad masiva en Pasaje y el detalle para la Náutica de Recreo.',
    'about.cta1':          'Conocer Extinval',
    'about.cta2':          'Solicitar Propuesta',
    'about.feat1.title':   'Stock Descentralizado',
    'about.feat1.text':    'Repuestos OEM en almacenes de Panamá y EE.UU. — mínimos tiempos de aduana.',
    'about.feat2.title':   'Flying Squads',
    'about.feat2.text':    'Equipos técnicos listos para desplazarse a cualquier puerto secundario.',
    'about.feat3.title':   'Coordinación Global',
    'about.feat3.text':    'Un solo punto de contacto para inspecciones en múltiples puertos.',

    // ── PORTFOLIO ────────────────────────────────────────────
    'pt.overline':         'Capacidades Técnicas',
    'pt.title':            'SERVICIOS DE INSPECCIÓN Y MANTENIMIENTO',
    'pt.cta':              'Solicitar Presupuesto',

    // ── AUTORIDAD ────────────────────────────────────────────
    'aut.overline':        'Respaldo de Autoridad',
    'aut.title':           'EL PASAPORTE PARA OPERAR GLOBALMENTE',
    'aut.lead':            'En la industria marítima, la confianza no se pide — se demuestra con auditorías. Cada certificado emitido es un documento legal válido ante cualquier PSC, RightShip o Vetting.',
    'aut1.title':          'Sociedades IACS',
    'aut1.sub':            'Auditoría al Máximo Nivel',
    'aut1.text':           'Procedimientos, técnicos e instalaciones auditados periódicamente. El seguro H&M de su buque mantiene su validez intacta.',
    'aut2.title':          'Aprobaciones de Bandera',
    'aut2.sub':            'Competencia Legal Internacional',
    'aut2.text':           'Actuamos como "Proveedores de Servicio Aprobados" ante las administraciones marítimas que agrupan el mayor tonelaje de la flota mundial.',
    'aut3.title':          'Partners OEM Autorizados',
    'aut3.sub':            'Acceso a Tecnología Original',
    'aut3.text':           'Acuerdos de Servicio Técnico Autorizado directo con los fabricantes. Manuales actualizados y repuestos OEM con trazabilidad garantizada.',
    'iso.text':            'Nuestra estructura interna asegura la trazabilidad de cada inspección, desde la entrada del pedido hasta la emisión del certificado final.',
    'iso.cta':             'Ver Certificaciones',

    // ── PARTNERS ─────────────────────────────────────────────
    'partners.label':      'Partners & Fabricantes Autorizados',

    // ── CONTACT ──────────────────────────────────────────────
    'contact.overline':    'Red Global & Contacto',
    'contact.title':       'HABLEMOS DE SU PROYECTO DE SEGURIDAD',
    'contact.lead':        'Rellene el formulario y nuestro equipo técnico le contactará en menos de 24 horas. Para emergencias, llame directamente al número 24/7.',
    'contact.addr.label':  'Sede Central',
    'contact.phone.label': 'Teléfono 24H',
    'contact.email.label': 'Email',
    'contact.form.title':  'Solicitar Propuesta Técnica',
    'contact.form.name':   'Nombre / Empresa *',
    'contact.form.email':  'Email *',
    'contact.form.div':    'División de Interés *',
    'contact.form.msg':    'Descripción del buque / instalación y necesidad...',
    'contact.form.submit': 'Enviar Solicitud →',
    'contact.form.sending':'Enviando...',
    'contact.form.ok.title':  '✓ Solicitud recibida correctamente',
    'contact.form.ok.body':   'Nuestro equipo técnico le contactará en menos de 24 horas.',
    'contact.div.opt1':    'Oil & Gas',
    'contact.div.opt2':    'Buques Mercantes',
    'contact.div.opt3':    'Náutica de Recreo',
    'contact.div.opt4':    'Industrial & Comercial',
    'contact.div.opt5':    'Repuestos OEM',

    // ── FOOTER ───────────────────────────────────────────────
    'footer.tagline':      'Safety. Service. Solutions. Cuando la seguridad es crítica y el tiempo es limitado, la respuesta es Extinval.',
    'footer.services':     'Servicios',
    'footer.company':      'Empresa',
    'footer.contactTitle': 'Contacto Global',
    'footer.nosotros':     'Sobre Nosotros',
    'footer.trayectoria':  'Trayectoria',
    'footer.certs':        'Certificaciones',
    'footer.partners':     'Partners OEM',
    'footer.clientArea':   'Área Clientes',
    'footer.copy':         '© {year} Extinval Group. Todos los derechos reservados.',
    'footer.legal':        'Aviso Legal',
    'footer.privacy':      'Privacidad',
    'footer.cookies':      'Cookies',

    // ── PAGE HEROES ──────────────────────────────────────────
    'page.home':           'Inicio',
    'breadcrumb.services': 'Servicios',
    'related.title':       'Otras Divisiones',
    'related.cta':         'Explorar →',
    'sidebar.cta.label':   'Solicitar Propuesta Técnica',
    'sidebar.badges.title':'Aprobaciones Aplicables',
  },

  en: {
    // ── TOP BAR ──────────────────────────────────────────────
    'topbar.emergency':    'EMERGENCY 24H',
    'topbar.about':        'About Us',
    'topbar.certs':        'Certifications',
    'topbar.contact':      'Contact',
    'topbar.clientArea':   'Client Area →',

    // ── NAV ──────────────────────────────────────────────────
    'nav.services':        'Services',
    'nav.oilGas':          'Oil & Gas',
    'nav.merchant':        'Merchant Vessels',
    'nav.recreational':    'Recreational Maritime',
    'nav.industrial':      'Industrial & Commercial',
    'nav.about':           'About',
    'nav.authority':       'Authority',
    'nav.network':         'Global Network',
    'nav.contact':         'Contact',
    'nav.cta':             'Request a Proposal',

    // ── HERO ─────────────────────────────────────────────────
    'hero.badge1':         'Maritime & Industrial Safety · Since 1980',
    'hero.title1.l1':      'INTEGRATED',
    'hero.title1.l2':      'SOLUTIONS IN',
    'hero.title1.l3':      'MARITIME',
    'hero.title1.l4':      'SAFETY',
    'hero.lead1':          'Over 40 years protecting lives and assets at sea. Oil & Gas, Merchant Fleet, Recreational Maritime and Industry with IACS approvals.',
    'hero.cta1.primary':   'Our Services',
    'hero.cta1.secondary': 'About Extinval',

    'hero.badge2':         'Merchant Vessels · SOLAS / IMO',
    'hero.title2.l1':      'ZERO',
    'hero.title2.l2':      'DEFICIENCIES.',
    'hero.title2.l3':      'ZERO',
    'hero.title2.l4':      'DELAYS.',
    'hero.lead2':          'Full technical protection against Port State Control. Precision logistics adapted to your vessel\'s port call schedule.',
    'hero.cta2.primary':   'Merchant Division',
    'hero.cta2.secondary': 'IACS Approvals',

    'hero.badge3':         'Industrial & Commercial · Naval Rigour Onshore',
    'hero.title3.l1':      'NAVAL',
    'hero.title3.l2':      'RIGOUR',
    'hero.title3.l3':      'APPLIED',
    'hero.title3.l4':      'ONSHORE.',
    'hero.lead3':          'We apply the extreme standards of the maritime sector to your industrial facilities. Condensed aerosols, wireless detection, full traceability.',
    'hero.cta3.primary':   'Industrial Solutions',
    'hero.cta3.secondary': 'Contact Us',

    // ── STATS STRIP ──────────────────────────────────────────
    'stats.years':         'Years of Experience',
    'stats.countries':     'Countries with Own Office',
    'stats.iacs':          'IACS Approvals',
    'stats.response':      'Emergency Response',

    // ── TRUST BAR ────────────────────────────────────────────
    'trust.label':         'IACS Approvals',

    // ── DIVISIONES ───────────────────────────────────────────
    'div.overline':        'Service Lines',
    'div.title':           'SPECIALISED DIVISIONS',
    'div.lead':            'Hyper-specialisation for every operating environment. The same IACS excellence applied with maximum technical precision.',

    'srv1.title':          'Oil & Gas',
    'srv1.sub':            'Critical Risk',
    'srv1.text':           'Offshore platforms, Drillships and refineries. High-capacity FFE systems, ATEX calibration, LSA inspection and free-fall lifeboats.',
    'srv1.cta':            'Learn more',

    'srv2.title':          'Merchant Vessels',
    'srv2.sub':            'SOLAS / IMO',
    'srv2.text':           'Zero deficiencies against Port State Control. CO₂, Water Mist & Foam. Davit load testing. UTI calibration. OEM Hatecke & Global Davit.',
    'srv2.cta':            'Learn more',

    'srv3.title':          'Recreational Maritime',
    'srv3.sub':            'Excellence in Detail',
    'srv3.text':           '"White Glove" service for Yachts & Superyachts. Novec 1230 clean agents. ISO 9650 liferafts. GMDSS: EPIRB, AIS, SART. Expired pyrotechnics management.',
    'srv3.cta':            'Learn more',

    'srv4.title':          'Industrial & Commercial',
    'srv4.sub':            'Naval Rigour Onshore',
    'srv4.text':           'FFE maintenance in warehouses and logistics centres. Cutting-edge condensed aerosols. Wireless detection with no civil works. ATEX calibration.',
    'srv4.cta':            'Learn more',

    // ── CIFRAS ───────────────────────────────────────────────
    'cifras.overline':     'Track Record',
    'cifras.title':        '+40 YEARS SAFEGUARDING LIVES AT SEA',
    'cifra1':              'Years of Experience',
    'cifra2':              'Countries with Own Office',
    'cifra3':              'IACS Societies Approved',
    'cifra4':              'Global Response',

    // ── EJE SEGURIDAD ─────────────────────────────────────────
    'eje.overline':        'Global Network',
    'eje.title':           'SECURITY AXIS',
    'eje.lead':            'Strategic coverage on the world\'s most critical trade routes. Spain, Canary Islands, Panama and North America.',
    'eje.esp.name':        'Spain',
    'eje.esp.hq':          'HQ',
    'eje.esp.desc':        'Central Headquarters in Valencia. Full coverage of the Mediterranean-Strait axis.',
    'eje.cnr.name':        'Canary Islands',
    'eje.cnr.desc':        'Mid-Atlantic Hub. Strategic position for trans-Atlantic traffic.',
    'eje.pan.name':        'Panama',
    'eje.pan.desc':        'Nerve centre of world trade. Critical services in the Canal, before and after transit.',
    'eje.usa.name':        'North America',
    'eje.usa.desc':        'Established presence on East, West and Gulf Coasts. Strict SOLAS compliance.',
    'eje.mapLabel':        'Direct Operation Points',
    'eje.emergency.title': 'EMERGENCY 24/7',
    'eje.emergency.sub':   'Immediate Global Response',

    // ── ABOUT ────────────────────────────────────────────────
    'about.overline':      'Who We Are',
    'about.title':         'HISTORY & MISSION',
    'about.lead':          'Extinval is synonymous with maritime safety on both sides of the Atlantic. Specialised in maintenance, inspection and supply of FFE and LSA systems.',
    'about.quote':         'We differentiate our service through three key pillars: Certified Excellence, Precision Logistics and Regulatory Compliance.',
    'about.body':          'Our structure provides expert response to three vital sectors: the critical operations of Merchant Vessels, large-scale Passenger safety, and the precision required by Recreational Maritime.',
    'about.cta1':          'About Extinval',
    'about.cta2':          'Request a Proposal',
    'about.feat1.title':   'Decentralised Stock',
    'about.feat1.text':    'OEM spare parts in Panama and US warehouses — minimal customs delays.',
    'about.feat2.title':   'Flying Squads',
    'about.feat2.text':    'Technical teams ready to deploy to any secondary port.',
    'about.feat3.title':   'Global Coordination',
    'about.feat3.text':    'A single point of contact for inspections across multiple ports.',

    // ── PORTFOLIO ────────────────────────────────────────────
    'pt.overline':         'Technical Capabilities',
    'pt.title':            'INSPECTION & MAINTENANCE SERVICES',
    'pt.cta':              'Request a Quote',

    // ── AUTORIDAD ────────────────────────────────────────────
    'aut.overline':        'Authority & Backing',
    'aut.title':           'THE PASSPORT TO OPERATE GLOBALLY',
    'aut.lead':            'In the maritime industry, trust is not asked for — it is demonstrated through audits. Every certificate we issue is a legal document valid before any PSC, RightShip or oil company Vetting.',
    'aut1.title':          'IACS Classification Societies',
    'aut1.sub':            'Top-Level Audit',
    'aut1.text':           'Procedures, technicians and facilities periodically audited. Your vessel\'s H&M insurance maintains full validity.',
    'aut2.title':          'Flag State Approvals',
    'aut2.sub':            'International Legal Competence',
    'aut2.text':           'We act as "Approved Service Providers" for maritime administrations covering the world\'s largest tonnage.',
    'aut3.title':          'Authorised OEM Partners',
    'aut3.sub':            'Direct Access to Original Technology',
    'aut3.text':           'Authorised Technical Service Agreements with manufacturers. Updated manuals and OEM spare parts with guaranteed traceability.',
    'iso.text':            'Our internal structure ensures full traceability of every inspection, from order receipt to final certificate issuance.',
    'iso.cta':             'View Certifications',

    // ── PARTNERS ─────────────────────────────────────────────
    'partners.label':      'Authorised Partners & Manufacturers',

    // ── CONTACT ──────────────────────────────────────────────
    'contact.overline':    'Global Network & Contact',
    'contact.title':       'LET\'S DISCUSS YOUR SAFETY PROJECT',
    'contact.lead':        'Fill in the form and our technical team will get back to you within 24 hours. For emergencies, call the 24/7 number directly.',
    'contact.addr.label':  'Headquarters',
    'contact.phone.label': '24H Telephone',
    'contact.email.label': 'Email',
    'contact.form.title':  'Request a Technical Proposal',
    'contact.form.name':   'Name / Company *',
    'contact.form.email':  'Email *',
    'contact.form.div':    'Division of Interest *',
    'contact.form.msg':    'Description of the vessel / installation and requirement...',
    'contact.form.submit': 'Send Request →',
    'contact.form.sending':'Sending...',
    'contact.form.ok.title':  '✓ Request received successfully',
    'contact.form.ok.body':   'Our technical team will contact you within 24 hours.',
    'contact.div.opt1':    'Oil & Gas',
    'contact.div.opt2':    'Merchant Vessels',
    'contact.div.opt3':    'Recreational Maritime',
    'contact.div.opt4':    'Industrial & Commercial',
    'contact.div.opt5':    'OEM Spare Parts',

    // ── FOOTER ───────────────────────────────────────────────
    'footer.tagline':      'Safety. Service. Solutions. When safety is critical and time is limited, the answer is Extinval.',
    'footer.services':     'Services',
    'footer.company':      'Company',
    'footer.contactTitle': 'Global Contact',
    'footer.nosotros':     'About Us',
    'footer.trayectoria':  'History',
    'footer.certs':        'Certifications',
    'footer.partners':     'OEM Partners',
    'footer.clientArea':   'Client Area',
    'footer.copy':         '© {year} Extinval Group. All rights reserved.',
    'footer.legal':        'Legal Notice',
    'footer.privacy':      'Privacy',
    'footer.cookies':      'Cookies',

    // ── PAGE HEROES ──────────────────────────────────────────
    'page.home':           'Home',
    'breadcrumb.services': 'Services',
    'related.title':       'Other Divisions',
    'related.cta':         'Explore →',
    'sidebar.cta.label':   'Request a Technical Proposal',
    'sidebar.badges.title':'Applicable Approvals',
  },
}
