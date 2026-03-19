/**
 * /api/contact
 *
 * Receives form data from the Contact and Register Interest pages,
 * then forwards it to your Netlify CRM webhook.
 *
 * Set CRM_WEBHOOK_URL in your .env.local (or Netlify environment variables).
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    name,
    email,
    phone,
    interest,
    type,
    investAmount,
    timeline,
    propertyAddress,
    propertyType,
    message,
    source = 'contact-form',
  } = req.body

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }

  const payload = {
    // Core fields
    name,
    email,
    phone: phone || '',
    message: message || '',
    source,
    submitted_at: new Date().toISOString(),

    // Lead type
    lead_type: interest || type || 'unknown',

    // Investor fields
    invest_amount: investAmount || '',
    timeline: timeline || '',

    // Seller fields
    property_address: propertyAddress || '',
    property_type: propertyType || '',
  }

  // ── Forward to your CRM ──────────────────────────────────────────────────
  const crmUrl = process.env.CRM_WEBHOOK_URL

  if (crmUrl) {
    try {
      const crmRes = await fetch(crmUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!crmRes.ok) {
        console.error('CRM webhook error:', crmRes.status, await crmRes.text())
        // Still return success to the user — don't expose internal errors
      }
    } catch (err) {
      console.error('CRM fetch failed:', err)
    }
  } else {
    // No CRM URL set yet — log locally during development
    console.log('[HEKANO LEAD]', JSON.stringify(payload, null, 2))
  }

  return res.status(200).json({ success: true })
}
