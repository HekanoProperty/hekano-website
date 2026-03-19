# Hekano Property Group — Website

Dark luxury property investment website for Hekano Property Group. Built with Next.js 14, Tailwind CSS, and deployed on Netlify.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (React) |
| Styling | Tailwind CSS + custom CSS variables |
| Fonts | Cormorant Garamond (display), DM Sans (body), JetBrains Mono (labels) |
| Deployment | Netlify |
| CRM integration | POST webhook to your existing Netlify CRM |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example env file:

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and set:

```
CRM_WEBHOOK_URL=https://your-crm.netlify.app/api/leads
```

This is the API endpoint on your existing Netlify CRM that accepts new leads.
If you leave it blank, leads will be logged to the console during development.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
hekano/
├── components/
│   ├── Navbar.jsx          # Fixed nav, blur backdrop, gold logo
│   ├── Hero.jsx            # Full-screen hero with investor pack card
│   ├── Opportunity.jsx     # Elizabeth Line stats section
│   ├── Process.jsx         # 4-step acquisition framework
│   ├── TrackRecord.jsx     # Case studies
│   ├── Pipeline.jsx        # Live deal cards (carousel)
│   ├── Insights.jsx        # Market notes / blog
│   ├── Security.jsx        # Security & structure
│   ├── Sellers.jsx         # Off-market seller section
│   ├── FAQ.jsx             # Accordion FAQs
│   ├── Contact.jsx         # Contact form → CRM
│   └── Footer.jsx          # Full footer with nav columns
│
├── pages/
│   ├── _app.jsx            # Global CSS import
│   ├── _document.jsx       # Custom HTML head (fonts)
│   ├── index.jsx           # Home page (all sections)
│   ├── register.jsx        # Register Interest standalone page
│   └── api/
│       └── contact.js      # API route — forwards leads to CRM
│
├── styles/
│   └── globals.css         # Design tokens, utility classes
│
├── .env.local.example      # Environment variable template
├── netlify.toml            # Netlify build config
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## CRM Integration

All form submissions (Contact page + Register Interest page) POST to `/api/contact`.

The API route at `pages/api/contact.js` then forwards the payload to your `CRM_WEBHOOK_URL`.

### Payload sent to CRM

```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+44 7700 900000",
  "message": "Interested in investing £150k",
  "source": "contact-form",
  "submitted_at": "2026-03-19T10:30:00.000Z",
  "lead_type": "investing",
  "invest_amount": "100-250k",
  "timeline": "1-3months",
  "property_address": "",
  "property_type": ""
}
```

### To connect your CRM

In your Netlify CRM, create an endpoint that accepts this JSON body and creates a new lead/contact. Then set `CRM_WEBHOOK_URL` to that endpoint URL.

---

## Deploying to Netlify

1. Push to GitHub
2. Connect repo in Netlify
3. Set environment variables in Netlify dashboard: **Site settings → Environment variables**
4. Build command: `npm run build`
5. Publish directory: `.next`

The `netlify.toml` and `@netlify/plugin-nextjs` handle the rest automatically.

---

## Customisation

### Updating deal pipeline
Edit the `deals` array in `components/Pipeline.jsx`

### Updating FAQs
Edit the `faqs` array in `components/FAQ.jsx`

### Updating case studies
Edit the `caseStudies` array in `components/TrackRecord.jsx`

### Changing stats
Edit the `stats` array in `components/Opportunity.jsx`

### Colour scheme
All colours are CSS variables in `styles/globals.css`:
```css
--gold: #c9a84c;
--bg: #0d0b09;
```

---

## Images

Currently using Unsplash URLs. Before going live, replace with:
- Your own property photos
- Hekano-specific imagery
- Update `src` props in each component

Images are referenced in: `Hero.jsx`, `Opportunity.jsx`, `Process.jsx`, `TrackRecord.jsx`, `Insights.jsx`, `Security.jsx`, `Sellers.jsx`, `Contact.jsx`
