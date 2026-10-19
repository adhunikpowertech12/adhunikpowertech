import PanelACGeMGuide from "./panelacgemguide";

export const metadata = {
  title: "Procure Panel AC on GeM | Adhunik Powertech",
  description:
    "Complete technical guide to procuring industrial panel air conditioners on GeM. GFR 149 compliance, PSU tender specs, and direct catalog procurement.",
  keywords: [
    "panel air conditioner in Gem",
    "GeM OEM panel ac manufacturer",
    "PSU electrical panel cooling tender",
    "enclosure air conditioner GeM portal",
    "industrial panel cooler govt tender",
    "Adhunik Powertech GeM supplier",
    "panel air conditioner Adhunik Powertech"
  ],
  alternates: {
    canonical: "https://www.adhunikpowertech.com/blog/panel-air-conditioners-in-gem",
  },
  openGraph: {
    title: "How to Procure Industrial Panel Air Conditioners on GeM | Adhunik Powertech",
    description:
      "Statutory guidelines, GFR 149 procurement modes, technical BOQ parameters, and verified GeM product listing for panel air conditioners.",
    url: "https://www.adhunikpowertech.com/blog/panel-air-conditioners-in-gem",
    siteName: "Adhunik Powertech",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1778587790/How_to_Choose_the_Right_Panel_Air_Conditioner_udm2kc.webp",
        width: 1200,
        height: 630,
        alt: "Procure Industrial Panel Air Conditioners on GeM",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Procure Panel AC on GeM | Adhunik Powertech",
    description:
      "Tender specifications, GFR Rule 149 modes, and quality verifications for government panel air conditioner procurement.",
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
        "@type": "TechArticle",
        "@id": "https://www.adhunikpowertech.com/blog/panel-air-conditioners-in-gem/#article",
        "headline": "How to Procure Industrial Panel Air Conditioners on GeM: Complete Guide for PSUs & Government Tenders",
        "description": "Comprehensive engineering and statutory guide for public sector purchase officers procuring enclosure cooling systems through the Government e-Marketplace (GeM).",
        "url": "https://www.adhunikpowertech.com/blog/panel-air-conditioners-in-gem",
        "image": "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1778587790/How_to_Choose_the_Right_Panel_Air_Conditioner_udm2kc.webp",
        "author": {
          "@type": "Organization",
          "name": "Adhunik Powertech Private Limited",
          "url": "https://www.adhunikpowertech.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Adhunik Powertech Private Limited",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.adhunikpowertech.com/images/logo.png"
          }
        },
        "mainEntityOfPage": "https://www.adhunikpowertech.com/blog/panel-air-conditioners-in-gem",
        "about": [
          {
            "@type": "Thing",
            "name": "Industrial Panel Air Conditioner",
            "sameAs": "https://www.adhunikpowertech.com/panel-air-conditioners"
          },
          {
            "@type": "Thing",
            "name": "Government e-Marketplace (GeM) Procurement",
            "sameAs": "https://mkp.gem.gov.in/panel-air-conditioner/panel-air-conditioner/p-5116877-574145587-cat.html#variant_id=5116877-574145587"
          }
        ],
        "inLanguage": "en-IN"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.adhunikpowertech.com/blog/panel-air-conditioners-in-gem/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can PSUs procure Adhunik Panel Air Conditioners directly through GeM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Adhunik Powertech is an authorized OEM with active catalog listings on the Government e-Marketplace (GeM). PSUs, defense units, railways, and state departments can purchase directly or compare our listed catalog variant (ID: 5116877-574145587) under GFR Rule 149."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I inspect the complete technical specifications and dimensional drawings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Detailed technical cutouts, CMH airflow charts, and parametric sizing tables across our Wall-Mount (WMS), Top-Mount (TMT), and Stand-Alone (SA) series are available directly on our official Panel Air Conditioners product portal at https://www.adhunikpowertech.com/panel-air-conditioners."
            }
          },
          {
            "@type": "Question",
            "name": "What certifications are required for panel air conditioners in government tenders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Government tenders mandate ISO 9001:2015 for quality management, CE marking for electrical and operational safety, ZED certification (Zero Defect Zero Effect), MSME registration, and compliance with the Public Procurement (Preference to Make in India) Order."
            }
          },
          {
            "@type": "Question",
            "name": "How can buyers specify panel ACs for extreme high-ambient factory environments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Buyers can utilize GeM's Custom Specification Bid feature to mandate industrial specifications, including operating ambient ratings up to +55°C, IP54/IP55 enclosure integrity, hermetic compressors (Danfoss/Emerson), and SS 304 stainless steel housings."
            }
          },
          {
            "@type": "Question",
            "name": "What benefits do MSE-registered OEMs receive on GeM bids?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Eligible MSE-registered manufacturers benefit from Earnest Money Deposit (EMD) exemptions, relaxation of prior turnover and experience criteria (subject to technical capability validation), and purchase preference under the 25% public procurement mandate."
            }
          },
          {
            "@type": "Question",
            "name": "Does Adhunik Powertech provide Manufacturer Authorization Forms (MAF) for channel partners?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. For authorized GeM tenders, Adhunik Powertech provides tender-specific Manufacturer Authorization Forms (MAF), validated datasheets, compliance matrices, and 2D/3D GA layout drawings to authorized bidding partners."
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
        <PanelACGeMGuide />
      </main>
    </>
  );
}