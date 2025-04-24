
import HeroPage from './HeroPage';


export const metadata = {
  title: "Top & Best HVAC Companies in India - Adhunik Powertech",
  description: "Searching for the top HVAC companies in India? Adhunik Powertech, Delhi's trusted HVAC contractor, manufacturer & supplier, offers expert cooling solutions across India. Contact us now & Get a Free Quote!",
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
    title: "Top & Best HVAC Companies in India - Adhunik Powertech",
    description: "Searching for the top HVAC companies in India? Adhunik Powertech, Delhi's trusted HVAC contractor, manufacturer & supplier, offers expert cooling solutions across India. Contact us now & Get a Free Quote!",
    url: "https://www.adhunikpowertech.com/",
    siteName: "Adhunik Powertech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top & Best HVAC Companies in India - Adhunik Powertech",
    description: "Searching for the top HVAC companies in India? Adhunik Powertech, Delhi's trusted HVAC contractor, manufacturer & supplier, offers expert cooling solutions across India. Contact us now & Get a Free Quote!",
    creator: "@AdhunikPowertech",
  },
  alternates: {
    canonical: "https://www.adhunikpowertech.com/",
  },
};



export default function Hero() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Website",
    "name": "Adhunik Powertech",
    "image": "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841336/dv_oyivkm.webp",
    "description": "Searching for the top HVAC companies in India? Adhunik Powertech, Delhi's trusted HVAC contractor, manufacturer & supplier, offers expert cooling solutions across India. Contact us now & Get a Free Quote!",
    "url": "https://www.adhunikpowertech.com/"
  }


  return (

    <>

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HeroPage />

    </>

  )

}
