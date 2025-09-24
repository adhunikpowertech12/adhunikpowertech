import ProductOverview from "./ProductOverview";

 

export const metadata = {
  title: "Adhunik Powertech | HVAC & Industrial Cooling Products India | Global",
  description: "Discover Adhunik Powertech's HVAC, industrial cooling & air quality products. Energy-efficient air coolers, panel ACs & cleanroom equipment. Made in India, exported globally.",
  keywords: [
    "Adhunik Powertech products",
    "HVAC solutions India",
    "Industrial cooling products Delhi",
    "Air Washer",
    "Ducted Air Cooler",
    "Ventilation Fan",
    "Exhaust Fan",
    "Panel Air Conditioner",
    "Oil Chiller",
    "Air Shower",
    "Air Handling Unit (AHU)",
    "Cleanroom equipment India",
    "Energy-efficient cooling systems",
    "Industrial ventilation systems",
    "Commercial AC units",
    "Process cooling equipment",
    "Air quality solutions"
  ],
  

  openGraph: {
    title: "Adhunik Powertech | HVAC & Industrial Cooling Products India | Global",
    description: "Discover Adhunik Powertech's HVAC, industrial cooling & air quality products. Energy-efficient air coolers, panel ACs & cleanroom equipment. Made in India, exported globally.",
    url: "https://www.adhunikpowertech.com/product-overview",
    type: "website",
    images: [
      {
        url: "/po.webp", 
        width: 1200,
        height: 630,
        alt: "Adhunik Powertech HVAC & Industrial Cooling Products",
      },
    ],
  },
  alternates: {
    canonical: "https://www.adhunikpowertech.com/product-overview",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhunik Powertech | HVAC & Industrial Cooling Products India | Global",
    description: "Discover Adhunik Powertech's HVAC, industrial cooling & air quality products. Energy-efficient air coolers, panel ACs & cleanroom equipment. Made in India, exported globally.",
    image: "/po.webp",  
  },
};


export default function page2() {


  return (
   <>
<ProductOverview/>
   </>
  )
}



