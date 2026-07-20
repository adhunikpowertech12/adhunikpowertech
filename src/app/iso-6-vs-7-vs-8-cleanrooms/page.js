import IsoClassification from "./IsoClassification";

export const metadata = {
  title: "ISO Class 6 vs 7 vs 8 Cleanroom Comparison & HVAC Guide",
  description: "Compare ISO Class 6, 7, and 8 cleanrooms under ISO 14644-1. Learn HVAC design, ACH, HEPA filtration, particle limits, validation, and applications.",
  keywords: [
    // Core Keywords
    "ISO Class 6 cleanroom guide",
    "ISO Class 7 cleanroom guide",
    "ISO Class 8 cleanroom guide",
    "cleanroom hvac design parameters",
    "air changes per hour cleanroom",
    "cleanroom ach standards",
    "iso 14644-1 classification rules",
    
    // Technical & Engineering Keywords
    "cleanroom filtration strategies",
    "laminar airflow cleanroom design",
    "turbulent dilution airflow cleanrooms",
    "differential pressure cascade cleanroom",
    "hepa filter cleanroom compliance",
    "cleanroom validation parameters",
    
    // Sector & Brand Specific
    "turnkey cleanroom solutions india",
    "pharmaceutical cleanroom constructors",
    "sterile compounding cleanroom hvac",
    "cleanroom manufacturer in haridwar",
    "cleanroom manufacturer in roorkee",
    "adhunik powertech cleanroom systems"
  ],

  openGraph: {
    title: "ISO Class 6 vs 7 vs 8 Cleanroom Comparison & HVAC Guide",
    description: "Compare ISO Class 6, 7, and 8 cleanrooms under ISO 14644-1. Learn HVAC design, ACH, HEPA filtration, particle limits, validation, and applications.",
    url: "https://www.adhunikpowertech.com/iso-6-vs-7-vs-8-cleanrooms",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1784531334/Iso_Classifications_osayue.webp",
        width: 1200,
        height: 630,
        alt: "ISO Class 6 vs ISO Class 7 vs ISO Class 8 cleanroom comparison showing HVAC design, airflow, and Air Changes per Hour (ACH) requirements under ISO 14644-1.",
      },
    ],
  },

  robots: "index, follow",
  alternates: {
    canonical: "https://www.adhunikpowertech.com/iso-6-vs-7-vs-8-cleanrooms",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO Class 6 vs 7 vs 8 Cleanroom Comparison & HVAC Guide",
    description: "Compare ISO Class 6, 7, and 8 cleanrooms under ISO 14644-1. Learn HVAC design, ACH, HEPA filtration, particle limits, validation, and applications.",
    images: ["https://res.cloudinary.com/ddkyx2jhh/image/upload/v1784531334/Iso_Classifications_osayue.webp"],
  },
};

export default function Page() {
  return (
    <>
      <IsoClassification/>
    </>
  );
}