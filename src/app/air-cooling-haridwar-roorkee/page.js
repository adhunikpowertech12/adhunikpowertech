import AirCoolingHaridwar from "./AirCoolingHaridwar";

export const metadata = {
  title: "Best Industrial Air Cooling in Haridwar & Roorkee",
  description: "Discover energy-efficient industrial air cooling and HVAC solutions in Haridwar, Roorkee, and Uttarakhand with Adhunik Powertech for better airflow, ventilation, and operational efficiency. Call us now!",
  
  keywords: [
    "industrial air cooling solutions Uttarakhand",
    "industrial air cooling Haridwar",
    "industrial air cooling Roorkee",
    "air cooling solutions Uttarakhand",
    "industrial cooling systems Haridwar",
    "industrial cooling solutions Roorkee",
    "best air cooling contractor Haridwar",
    "industrial HVAC systems Uttarakhand",
    "industrial ventilation systems",
    "pharmaceutical HVAC systems",
    "factory air cooling systems",
    "energy-efficient industrial cooling",
    "industrial air washer systems",
    "evaporative cooling systems Uttarakhand",
    "ducted air cooling solutions",
    "pharma cleanroom ventilation",
    "industrial cooling contractor Roorkee",
    "HVAC integrated cooling systems",
    "factory ventilation systems Uttarakhand",
    "industrial airflow management systems"
    
  ],

  openGraph: {
    title: "Best Industrial Air Cooling in Haridwar & Roorkee",
    description:
      "Discover energy-efficient industrial air cooling and HVAC solutions in Haridwar, Roorkee, and Uttarakhand with Adhunik Powertech for better airflow, ventilation, and operational efficiency. Call us now!",
    url: "https://www.adhunikpowertech.com/air-cooling-haridwar-roorkee",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1779273157/Air_Cooling_in_Haridwar_Roorkee_bfo5dw.webp",
        width: 1200,
        height: 630,
        alt: "Industrial air cooling system installation at a factory in Haridwar & Roorkee by Adhunik Powertech.",
      },
    ],
  },

  robots: "index, follow",

  alternates: {
    canonical:
      "https://www.adhunikpowertech.com/air-cooling-haridwar-roorkee",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Industrial Air Cooling in Haridwar & Roorkee",
    description: "Discover energy-efficient industrial air cooling and HVAC solutions in Haridwar, Roorkee, and Uttarakhand with Adhunik Powertech for better airflow, ventilation, and operational efficiency. Call us now!",
    image:
      "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1779273157/Air_Cooling_in_Haridwar_Roorkee_bfo5dw.webp",
  },
};

export default function page() {
  return (
    <>
      {/* BREADCRUMB SCHEMA JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.adhunikpowertech.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Best Industrial Air Cooling",
                "item": "https://www.adhunikpowertech.com/air-cooling-haridwar-roorkee"
              }
            ]
          })
        }}
      />
      <AirCoolingHaridwar />
    </>
  );
}