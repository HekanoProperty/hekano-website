import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Opportunity from '../components/Opportunity'
import Process from '../components/Process'
import TrackRecord from '../components/TrackRecord'
import Pipeline from '../components/Pipeline'
import Insights from '../components/Insights'
import Security from '../components/Security'
import Sellers from '../components/Sellers'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hekano Property Group — West London Off-Market Acquisitions</title>
        <meta
          name="description"
          content="Hekano Property Group acquires residential assets along the Elizabeth Line corridor. Off-market, precision-built, designed for long-term returns."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Hekano Property Group" />
        <meta
          property="og:description"
          content="West London off-market residential acquisitions. Elizabeth Line corridor specialists."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <Navbar />

      <main>
        {/* 1. Hero — full screen, London night, investor pack card */}
        <Hero />

        {/* 2. The Opportunity — Elizabeth Line, aerial shot, stats */}
        <Opportunity />

        {/* 3. Process — "We don't speculate. We verify." */}
        <Process />

        {/* 4. Track Record — case studies */}
        <TrackRecord />

        {/* 5. Live Pipeline — deal cards */}
        <Pipeline />

        {/* 6. Insights — market notes */}
        <Insights />

        {/* 7. Security & Structure */}
        <Security />

        {/* 8. Sellers — off-market sales */}
        <Sellers />

        {/* 9. FAQs */}
        <FAQ />

        {/* 10. Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}
