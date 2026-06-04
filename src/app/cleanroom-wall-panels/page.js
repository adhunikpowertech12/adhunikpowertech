import CleanroomWallPanels from "./CleanroomWallPanels";

export const metadata = {
  title: "Modular Cleanroom Wall Panels for Pharma Facilities",
  description: "Discover GMP & ISO compliant cleanroom wall panels designed for pharmaceutical, healthcare, biotechnology, and industrial facilities. Explore materials, insulation options, and turnkey solutions. Request a free project consultation!",
  
  keywords: [
    "cleanroom wall panels",
  "modular cleanroom wall panels",
  "gmp cleanroom wall panels",
  "iso compliant cleanroom wall panels",
  "pharmaceutical cleanroom wall panels",
  "cleanroom partition panels",
  "cleanroom panel systems",
  "cleanroom wall panel solutions",
  "hpl cleanroom wall panels",
  "stainless steel cleanroom wall panels",
  "powder coated cleanroom panels",
  "puf insulated cleanroom panels",
  "cleanroom insulation panel options",
  "cleanroom construction materials",
  "pharmaceutical cleanroom infrastructure",
  "healthcare cleanroom wall panels",
  "biotech cleanroom wall systems",
  "industrial cleanroom wall panels",
  "turnkey cleanroom solutions",
  "adhunik powertech cleanroom solutions"
  ],

  openGraph: {
    title: "Cleanroom Wall Panels for GMP & ISO Cleanrooms | Adhunik Powertech",
    description:
      "Discover GMP & ISO compliant cleanroom wall panels designed for pharmaceutical, healthcare, biotechnology, and industrial facilities. Explore materials, insulation options, and turnkey solutions. Request a free project consultation!",
    url: "https://www.adhunikpowertech.com/cleanroom-wall-panels",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1780555671/modular-cleanroom-wall-panels_nkbgjv.webp",
        width: 1200,
        height: 630,
        alt: "Modular cleanroom wall panels for GMP-compliant pharmaceutical cleanroom applications.",
      },
    ],
  },

  robots: "index, follow",

  alternates: {
    canonical:
      "https://www.adhunikpowertech.com/cleanroom-wall-panels",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cleanroom Wall Panels for GMP & ISO Cleanrooms | Adhunik Powertech",
    description: "Discover GMP & ISO compliant cleanroom wall panels designed for pharmaceutical, healthcare, biotechnology, and industrial facilities. Explore materials, insulation options, and turnkey solutions. Request a free project consultation!",
    image:
      "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1780555671/modular-cleanroom-wall-panels_nkbgjv.webp",
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
                "name": "Turnkey Cleanroom Solutions",
                "item": "https://www.adhunikpowertech.com/turnkey-cleanroom-solutions"
                },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Cleanroom Wall Panels for GMP & ISO Cleanrooms",
                "item": "https://www.adhunikpowertech.com/cleanroom-wall-panels"
              }
            ]
          })
        }}
      />
      <CleanroomWallPanels />
    </>
  );
}