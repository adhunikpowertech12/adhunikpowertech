import PanelACForCNCMachines from "./panelacforcncmachines";

// SEO & SERP Optimization for Next.js App Router
export const metadata = {
  title: "Panel AC for CNC Machines | Adhunik Powertech",
  description:
    "Eliminate CNC drive burnout, VFD trips, and cutting oil mist damage. Learn thermal load sizing calculations, mounting options, and protection best practices.",
  keywords: [
    "panel ac for cnc machines",
    "cnc panel air conditioner",
    "vfd cooling panel ac",
    "electrical panel cooler cnc",
    "enclosure air conditioner manufacturer",
    "Adhunik Powertech panel ac"
  ],
  alternates: {
    canonical: "https://www.adhunikpowertech.com/panel-ac-for-cnc-machines",
  },
  openGraph: {
    title: "Panel AC for CNC Machines: Sizing, Installation & VFD Protection",
    description:
      "Prevent spindle drive trips, capacitor degradation, and coolant mist damage with closed-loop industrial panel air conditioners by Adhunik Powertech.",
    url: "https://www.adhunikpowertech.com/panel-ac-for-cnc-machines",
    siteName: "Adhunik Powertech",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1778587790/How_to_Choose_the_Right_Panel_Air_Conditioner_udm2kc.webp",
        width: 1200,
        height: 630,
        alt: "Panel AC for CNC Machines by Adhunik Powertech",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panel AC for CNC Machines | Adhunik Powertech",
    description:
      "Engineering sizing guide, mounting comparison, and VFD protection for CNC electrical enclosures.",
    images: [
      "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1778587790/How_to_Choose_the_Right_Panel_Air_Conditioner_udm2kc.webp",
    ],
  },
};

export default function Page() {
  // Structured Schema for Google Rich Results, AI Overviews & Perplexity
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://www.adhunikpowertech.com/panel-ac-for-cnc-machines/#article",
        "headline": "Panel AC for CNC Machines: Sizing, Installation & VFD Protection Guide",
        "description": "Comprehensive engineering guide detailing thermal sizing calculations, closed-loop cooling benefits, and oil mist protection for CNC electrical panels.",
        "url": "https://www.adhunikpowertech.com/panel-ac-for-cnc-machines",
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
        "inLanguage": "en-IN"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.adhunikpowertech.com/panel-ac-for-cnc-machines/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do standard exhaust fans fail in CNC machine enclosures?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Exhaust fans pull in ambient plant air laden with cutting fluid aerosols, vaporized synthetic coolants, and conductive metallic swarf. This sticky film deposits across delicate spindle drives, servo boards, and optical encoder circuits, resulting in insulation breakdown, tracking shorts, and frequent over-temperature drive trips (OH / AL-022)."
            }
          },
          {
            "@type": "Question",
            "name": "What is the recommended temperature setpoint for a CNC panel air conditioner?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The ideal setpoint is between 32°C and 35°C (90°F to 95°F). Setting temperature setpoints too low wastes continuous power and drops internal cabinet surfaces below the surrounding room's dew point, risking condensation on high-voltage terminals."
            }
          },
          {
            "@type": "Question",
            "name": "How does closed-loop cooling protect sensitive VFDs and servo drives?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A closed-loop panel AC isolates the internal cabinet air completely. It continuously draws warm air from the top of the enclosure, dehumidifies and chills it across an evaporator coil, and returns it to drive racks at a controlled temperature without introducing exterior contaminants or compromising the IP54/IP55 integrity of the panel."
            }
          },
          {
            "@type": "Question",
            "name": "What size panel AC is required for a CNC milling center?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cooling capacity depends on total internal heat dissipation (typically 2.5% to 3% continuous heat loss from spindle drives and servo modules) plus ambient transmission heat through the enclosure walls. For typical 3-axis to 5-axis CNC machining centers in 45°C ambient shops, units ranging from 1000W to 2000W (such as Adhunik WMS-0010 or WMS-0015) are standard."
            }
          },
          {
            "@type": "Question",
            "name": "How often should condenser air filters be maintained on the shop floor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In machine shop environments containing active coolant mist, washable aluminum mesh filters should be inspected and cleaned with a neutral degreaser every 15 to 30 days to prevent high-pressure compressor cutouts."
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
        <PanelACForCNCMachines />
      </main>
    </>
  );
}