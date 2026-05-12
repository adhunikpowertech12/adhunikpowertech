import PanelACSelectionGuide from "./PanelACSelectionGuide";

export const metadata = {
  title: "Panel AC Selection | Right Industrial Cooling",
  description:
   "Need the right Panel AC for your control panel? Learn heat load calculation and choose from 250W–7000W industrial cooling solutions with expert guidance.",
  
keywords: [
    "panel air conditioner selection guide",
    "industrial panel AC India",
    "heat load calculation panel AC",
    "electrical panel cooling system",
    "panel cooling solution HVAC",
    "cabinet air conditioner selection",
    "industrial enclosure cooling",
    "panel AC 250W to 7000W",
    "how to select panel air conditioner",
    "panel AC sizing guide",
    "industrial control panel cooling",
    "PLC cabinet cooling system",
    "VFD panel cooling solution",
    "IP rated panel air conditioner",
    "closed loop cooling system panel",
    "Adhunik Powertech panel AC",
    "industrial HVAC solutions India",
    "panel air conditioner manufacturer India",
    "energy efficient panel cooling",
    "electrical cabinet thermal management",
    "prevent panel overheating solution"
  ],

  openGraph: {
    title:
      "Panel AC Selection | Right Industrial Cooling",
    description:
      "Learn how to choose the right Panel AC for your industrial control panel with our comprehensive selection guide.",
    url: "https://www.adhunikpowertech.com/how-to-choose-the-right-panel-ac",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1778587790/How_to_Choose_the_Right_Panel_Air_Conditioner_udm2kc.webp",
        width: 1200,
        height: 630,
        alt: "Technician demonstrating how to choose the right panel AC for industrial electrical panels in a modern manufacturing facility",
      },
    ],
  },

  robots: "index, follow",

  alternates: {
    canonical:
      "https://www.adhunikpowertech.com/how-to-choose-the-right-panel-ac",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Panel AC Selection | Right Industrial Cooling",
    description:
      "Learn how to choose the right Panel AC for your industrial control panel with our comprehensive selection guide.",
    image:
      "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1778587790/How_to_Choose_the_Right_Panel_Air_Conditioner_udm2kc.webp",
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
                "name": "Panel Air Conditioners",
                "item": "https://www.adhunikpowertech.com/panel-air-conditioners"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Selection Guide",
                "item": "https://www.adhunikpowertech.com/how-to-choose-the-right-panel-ac"
              }
            ]
          })
        }}
      />
      <PanelACSelectionGuide />
    </>
  );
}