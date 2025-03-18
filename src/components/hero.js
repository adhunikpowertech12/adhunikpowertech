
import HeroPage from './HeroPage';
import Head from 'next/head';


export const metadata = {
  title: "Adhunik Powertech | HVAC & Air Cooling Systems Gurugram",
  description: "Discover Adhunik Powertech Private Limited, a leader in HVAC solutions and air cooling systems. Based in Gurugram, India, we specialize in innovative, turnkey projects for industrial and commercial cooling needs.",
  keywords: [
    "HVAC solutions",
    "air cooling systems",
    "industrial cooling",
    "commercial cooling solutions",
    "Adhunik Powertech",
    "energy-efficient cooling",
    "Gurugram cooling systems"
  ],
  openGraph: {
    title: "Adhunik Powertech",
    description: "Discover Adhunik Powertech Private Limited, a leader in HVAC solutions and air cooling systems. Based in Gurugram, India, we specialize in innovative, turnkey projects for industrial and commercial cooling needs.",
    url: "https://www.adhunikpowertech.com/",
    siteName: "Adhunik Powertech", 
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhunik Powertech | HVAC & Air Cooling Systems Gurugram",
    description: "Discover Adhunik Powertech Private Limited, a leader in HVAC solutions and air cooling systems. Based in Gurugram, India, we specialize in innovative, turnkey projects for industrial and commercial cooling needs.",
    creator: "@AdhunikPowertech",
  },
  alternates: {
    canonical: "https://adhunikpowertech.com/",
  },
};



export default function Hero() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Website",
    "name": "Adhunik Powertech",
    "image": "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841336/dv_oyivkm.webp",
    "description": "Discover Adhunik Powertech Private Limited, a leader in HVAC solutions and air cooling systems",
    "url": "https://www.adhunikpowertech.com/"
  }


  return (

    <>
    <Head>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/d.svg" />
      <meta name="google-site-verification" content="ZZcgUmCTYjVHPEYAV2XPTWfgp_PXc7M2GOEgeg6kYW0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Adhunik Powertech" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta httpEquiv="X-UA-Compatible" content="IE=EmulateIE7" />
      <meta name="twitter:site" content="@adhunikpowertech" />
      <meta name="twitter:image" content="https://adhunikpowertech.com/img/logo.png" />
      <meta name="twitter:image:alt" content="Adhunik Powertech" />
      <meta property="og:image" content="https://adhunikpowertech.com/img/logo.png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      <meta name="robots" content="index,follow" />
      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data" />
      <meta property="og:title" content="Adhunik Powertech" />
      <meta name="twitter:title" content="Top HVAC Solutions in Gurugram | Adhunik Powertech" />
      <meta name="twitter:description" content="Adhunik Powertech: Gurugram’s top HVAC solutions provider, specializing in air cooling, industrial ventilation, and energy-efficient systems." />
      <meta name="keywords" content="HVAC solutions, industrial cooling, air washers, air handling units, ventilation systems, energy-efficient cooling, Adhunik Powertech" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://adhunikpowertech.com/" />
      <meta property="og:site_name" content="Adhunik Powertech - HVAC Experts" />
      <meta name="twitter:card" content="summary" />
      <link rel="preconnect" href="http://cdn12.lemnisk.co" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Adhunik Powertech",
          "image": "https://adhunikpowertech.com/logo.jpg",
          "description": "Leading HVAC solutions provider in Gurugram, specializing in air cooling and industrial ventilation systems.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sector 70, Gurugram",
            "addressLocality": "Gurugram",
            "addressRegion": "Haryana",
            "postalCode": "122001",
            "addressCountry": "India"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.3909507",
            "longitude": "77.0294258"
          },
          "telephone": "+91-9289126052",
          "url": "https://adhunikpowertech.com/",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "21:00"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "7"
          },
          "sameAs": [
            "https://www.facebook.com/adhunikpowertech",
            "https://www.instagram.com/adhunikpowertech/",
            "https://www.linkedin.com/company/adhunikpowertech/"
          ]
        })
      }} />
    </Head>
 <script   type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

<HeroPage/>

    </>

  )
  
}
