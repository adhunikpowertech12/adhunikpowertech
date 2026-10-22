import HVACContractorGujarat from "./hvaccontractorgujarat";

export const metadata = {
  title: "Top & Best HVAC Contractor in Gujarat | Adhunik Powertech",
  description:
    "Adhunik Powertech is recognized as the top & best HVAC company in Gujarat with 600+ delivered projects (including BKT Tires ₹32 Cr plant in Bhuj). Turnkey AHU, Cleanrooms, Chillers up to 630 TR & Air Washers in Sanand GIDC, Dahej, Ankleshwar, Vadodara & Surat.",
  keywords: [
    "hvac contractor in gujarat",
    "best hvac contractor in gujarat",
    "top hvac contractor in gujarat",
    "top hvac company in gujarat",
    "best hvac company in gujarat",
    "hvac contractor in ahmedabad",
    "industrial hvac contractor sanand gidc",
    "cleanroom hvac contractor dahej",
    "hvac contractor in ankleshwar",
    "hvac contractor in vadodara",
    "hvac contractor in surat",
    "chiller plant contractor bhuj",
    "ahu manufacturer gujarat",
    "Adhunik Powertech gujarat"
  ],
  alternates: {
    canonical: "https://www.adhunikpowertech.com/hvac-contractor-in-gujarat",
  },
  openGraph: {
    title: "Top & Best HVAC Contractor in Gujarat | 600+ Projects | Adhunik Powertech",
    description:
      "Turnkey industrial HVAC contractor in Gujarat delivering cleanrooms, AHUs, process chiller plants up to 630 TR, and air washers across Sanand GIDC, Dahej PCPIR, Ankleshwar, Vadodara, and Surat.",
    url: "https://www.adhunikpowertech.com/hvac-contractor-in-gujarat",
    siteName: "Adhunik Powertech",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1778587790/How_to_Choose_the_Right_Panel_Air_Conditioner_udm2kc.webp",
        width: 1200,
        height: 630,
        alt: "Top & Best HVAC Contractor in Gujarat - Adhunik Powertech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top & Best HVAC Company in Gujarat | Adhunik Powertech",
    description:
      "Turnkey industrial HVAC engineering across GIDC corridors. 600+ projects delivered under NBC, CPWD & NABH standards in Sanand, Dahej, Vadodara, and Bhuj.",
    images: [
      "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1778587790/How_to_Choose_the_Right_Panel_Air_Conditioner_udm2kc.webp",
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness",
        "@id": "https://www.adhunikpowertech.com/hvac-contractor-in-gujarat/#business",
        "name": "Adhunik Powertech Private Limited - Best HVAC Company in Gujarat",
        "alternateName": "Top HVAC Contractor in Gujarat",
        "description": "Turnkey industrial HVAC contracting, cleanroom ventilation, double skin air handling units, process chillers, and industrial air washers across Gujarat GIDC industrial corridors.",
        "url": "https://www.adhunikpowertech.com/hvac-contractor-in-gujarat",
        "telephone": "+91-8287885885",
        "priceRange": "₹₹₹₹",
        "image": "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1778587790/How_to_Choose_the_Right_Panel_Air_Conditioner_udm2kc.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "DCG1-0102, Tower-1, DLF Corporate Greens, Sector-74A",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122004",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": "Ahmedabad" },
          { "@type": "City", "name": "Sanand" },
          { "@type": "City", "name": "Dahej" },
          { "@type": "City", "name": "Ankleshwar" },
          { "@type": "City", "name": "Vadodara" },
          { "@type": "City", "name": "Surat" },
          { "@type": "City", "name": "Hazira" },
          { "@type": "City", "name": "Bhuj" },
          { "@type": "City", "name": "Gandhidham" },
          { "@type": "State", "name": "Gujarat" }
        ],
        "knowsAbout": [
          "Best HVAC Contractor in Gujarat",
          "Top HVAC Company in Gujarat",
          "Double Skin Air Handling Units (AHU)",
          "Cleanroom HVAC Contracting (ISO 14644 & Schedule M)",
          "Industrial Process Chiller Plants (up to 630 TR)",
          "Industrial Air Washers & Evaporative Systems",
          "Chemical Plant Exhaust & Toxic Gas Scrubbing",
          "Basement Ventilation & Impulse Jet Fans"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.adhunikpowertech.com/hvac-contractor-in-gujarat/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is Adhunik Powertech considered the best industrial HVAC contractor in Gujarat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With over 600+ turnkey projects delivered nationwide since 2005, Adhunik Powertech is trusted by Gujarat's largest enterprises. We completed one of Gujarat's landmark industrial contracts—the ₹32 Crore HVAC, Chiller, AHU & BMS project for BKT Tires in Bhuj. We engineer systems under NBC, CPWD, NABH, ISHRAE, and ASHRAE guidelines for pharmaceutical, chemical, and heavy engineering facilities."
            }
          },
          {
            "@type": "Question",
            "name": "Which industrial GIDC zones in Gujarat does Adhunik Powertech serve directly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide turnkey EPC HVAC contracting across all major GIDC zones, including Sanand GIDC, Changodar, Dahej PCPIR, Ankleshwar, Panoli, Savli (Vadodara), Makarpura, Hazira (Surat), Sachin GIDC, Mundra SEZ, and the Bhuj industrial corridor."
            }
          },
          {
            "@type": "Question",
            "name": "Do you execute certified cleanroom HVAC installations for Pharma & Chemical plants in Gujarat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Gujarat accounts for over 30% of India's pharmaceutical manufacturing. Adhunik Powertech builds turnkey ISO Class 5 to Class 8 cleanrooms compliant with USFDA, cGMP, and Schedule M. Scope includes double-skin antibacterial AHUs, terminal HEPA filter plenums, stainless steel SS304/SS316 ducting, and automated pressure differential cascades."
            }
          },
          {
            "@type": "Question",
            "name": "How do your HVAC designs handle coastal humidity in Dahej, Hazira, and Surat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Coastal Gujarat presents extreme latent heat loads and saline atmospheric corrosion. We deploy specialized AHUs with anti-corrosion blue-fin/Blygold coated coils, moisture eliminators, and precise reheating dehumidification loops. For industrial plant floors, we configure two-stage evaporative air washers that cool without saturating indoor air."
            }
          },
          {
            "@type": "Question",
            "name": "Can PSUs, government entities, and SEZ units in Gujarat procure via GeM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Adhunik Powertech is an authorized OEM on the Government e-Marketplace (GeM) with active registered listings (Variant ID: 5116877-574145587), allowing PSUs and state entities across Gujarat to procure turnkey HVAC equipment and contracting services directly under GFR Rule 149."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HVACContractorGujarat />
      </main>
    </>
  );
}