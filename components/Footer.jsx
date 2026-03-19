import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  const cols = [
    {
      heading: 'Investors',
      links: [
        { label: 'The Opportunity', href: '#investors' },
        { label: 'Our Process', href: '#investors' },
        { label: 'Live Pipeline', href: '#pipeline' },
        { label: 'Track Record', href: '#investors' },
        { label: 'Security & Structure', href: '#investors' },
      ],
    },
    {
      heading: 'Sellers',
      links: [
        { label: 'Sell Off-Market', href: '#sellers' },
        { label: 'How It Works', href: '#sellers' },
        { label: 'Target Areas', href: '#sellers' },
        { label: 'Get an Offer', href: '#contact' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Hekano', href: '#' },
        { label: 'Insights', href: '#' },
        { label: 'FAQs', href: '#faqs' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ]

  return (
    <footer style={{ background: '#080706', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '64px 40px 40px',
        }}
      >
        {/* Top: logo + columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/hekano-logo.png"
                alt="Hekano Property Group"
                width={110}
                height={55}
                style={{ objectFit: 'contain', height: 52, width: 'auto' }}
              />
            </div>

            <p style={{
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.8,
              maxWidth: 220,
            }}>
              West London off-market residential acquisitions. Elizabeth Line corridor specialists.
            </p>

            <div className="mt-6" style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.58rem',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.25)',
              textTransform: 'uppercase',
            }}>
              Hayes · Ealing · Acton · Southall
            </div>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <h4 style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: 20,
              }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 12 }}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: '0.82rem',
                        color: 'rgba(255,255,255,0.4)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        fontWeight: 300,
                      }}
                      onMouseEnter={e => (e.target.style.color = 'rgba(255,255,255,0.8)')}
                      onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.4)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div style={{ height: 1, background: 'rgba(201,168,76,0.12)', marginBottom: 28 }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.58rem',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.2)',
            textTransform: 'uppercase',
          }}>
            © {year} Hekano Property Group Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.58rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.2)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.target.style.color = 'rgba(255,255,255,0.5)')}
                onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.2)')}
              >
                {item}
              </a>
            ))}
          </div>

          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.55rem',
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.15)',
          }}>
            Private acquisitions. No public listings.
          </p>
        </div>

        {/* Risk disclaimer */}
        <p style={{
          marginTop: 24,
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.18)',
          lineHeight: 1.7,
          maxWidth: 900,
        }}>
          Capital is at risk. Property investment is illiquid and past performance is not a guide to future returns.
          Hekano Property Group Ltd is not authorised or regulated by the Financial Conduct Authority.
          All investors should seek independent financial and legal advice before committing capital.
        </p>
      </div>
    </footer>
  )
}
