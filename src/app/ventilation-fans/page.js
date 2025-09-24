

import VentilationFans from "./VentilationFans";

export const metadata = {
  title: "Axial & Exhaust Fan Manufaturer in India | Adhunik Powertech",
  description: "India's leading manufacturer of industrial vantilation fans. We offer durable axial flow, PP & SS exhaust fans for factories, kitchens & warehouses. Get your quote!",
  
  keywords: [ 
    "industrial vantilation fans",
    "commercial exhaust fans",
    "axial flow fan manufacturer",
    "PP exhaust fan",
    "SS exhaust fan",
    "heavy-duty exhaust fan",
    "corrosion-resistant fan", 
    "factory vantilation",
    "warehouse exhaust fans",
    "kitchen exhaust systems",
    "industrial fume extraction",
    "workshop vantilation", 
    "vantilation fans India",
    "exhaust fan manufacturer Delhi NCR", 
    "Adhunik Powertech fans",
  ],

  

  openGraph: {
    title: "High-Performance Industrial Ventilation Fans | Adhunik Powertech",
    description: "Engineered for durability and efficiency, our axial flow, PP, and SS exhaust fans are the trusted choice for factories, warehouses, and commercial kitchens across India.",
    url: "https://www.adhunikpowertech.com/vantilation-fans",  
    type: "website",
    images: [
      {
        url: "https://www.adhunikpowertech.com/efss.jpeg",  
        width: 1200, 
        height: 630, 
        alt: "Adhunik Powertech Industrial Axial Flow and Exhaust Fans",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikpowertech.com/vantilation-fans",  
  },

  twitter: {
    card: "summary_large_image",
    title: "High-Performance Industrial Ventilation Fans | Adhunik Powertech",
    description: "Engineered for durability and efficiency, our axial flow, PP, and SS exhaust fans are the trusted choice for factories, warehouses, and commercial kitchens across India.",
    image: "https://www.adhunikpowertech.com/efss.jpeg",  
  },
};


export default function DuctedAirCooler() {
  return (
    <>
<VentilationFans/>
    </>

  )
}
