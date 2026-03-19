import { useState } from 'react'

const faqs = [
  {
    q: 'What is the minimum investment?',
    a: 'Our typical minimum is £50,000. For certain structured deals we can be flexible depending on the opportunity and your circumstances. Reach out and we can discuss what works.',
  },
  {
    q: 'How is my capital secured?',
    a: 'All investments are secured against physical UK property. Legal charges are registered at HMLR before funds are deployed, giving you a formal first or second charge over the asset.',
  },
  {
    q: 'What returns should I expect?',
    a: 'Target gross yields range from 6–8% per annum. Net returns depend on the deal structure, your tax position, and whether returns are paid monthly or rolled up. We provide full projections before commitment.',
  },
  {
    q: 'How long is the typical term?',
    a: 'Most deals run 12–36 months, aligned to the acquisition, refurbishment, and refinance or sale cycle. We set clear timelines upfront and communicate any changes early.',
  },
  {
    q: 'Can I exit early?',
    a: 'Early exit provisions are deal-specific and agreed in writing at the outset. We build defined exit pathways into every agreement and aim to accommodate investor needs wherever possible.',
  },
  {
    q: 'How do you source properties?',
    a: 'Through direct vendor relationships, probate and estate networks, and our proprietary data pipeline that monitors motivated seller signals across West London postcodes. We never rely on portals.',
  },
  {
    q: 'Which areas do you focus on?',
    a: 'Our primary focus is Hayes (UB3/UB4), Southall (UB1/UB2), and Acton (W3), all along the Elizabeth Line corridor. We also monitor opportunities in Ealing and Greenford.',
  },
  {
    q: 'Are you regulated?',
    a: 'Hekano Property Group operates as an unregulated property investment firm. We recommend all investors take independent financial and legal advice before committing capital. We are happy to liaise with your advisors.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="faqs"
      style={{ background: '#0a0807', padding: '96px 24px' }}
    >
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <h2
          className="font-display text-center"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, marginBottom: 64, color: '#fff' }}
        >
          Common questions.
        </h2>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '22px 24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: 16,
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      color: isOpen ? '#c9a84c' : '#fff',
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isOpen ? '#c9a84c' : 'rgba(255,255,255,0.4)'}
                    strokeWidth="1.5"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease, stroke 0.2s',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 24px' }}>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.8,
                        margin: 0,
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        paddingTop: 20,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
