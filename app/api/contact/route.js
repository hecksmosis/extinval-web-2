// app/api/contact/route.js
// POST /api/contact → proxies to Formspree server-side
// Keeps Formspree form ID off the client (optional extra layer)

import { NextResponse } from 'next/server'

export async function POST(request) {
  const body = await request.json()
  const formId = process.env.FORMSPREE_ID || process.env.NEXT_PUBLIC_FORMSPREE_ID
  if (!formId) {
    // No Formspree configured — still return ok (log to console in dev)
    console.log('[Contact form submission]', body)
    return NextResponse.json({ ok: true })
  }
  try {
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data?.error || 'Formspree error')
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
