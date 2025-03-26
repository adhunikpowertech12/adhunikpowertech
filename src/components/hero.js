
import HeroPage from './HeroPage';


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
    "description": "Discover Adhunik Powertech Private Limited, a leader in HVAC solutions and air cooling systems. Based in Gurugram, India, we specialize in innovative, turnkey projects for industrial and commercial cooling needs.",
    "url": "https://www.adhunikpowertech.com/"
  }


  return (

    <>
   
 <script   type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

<HeroPage/>

    </>

  )
  
}
