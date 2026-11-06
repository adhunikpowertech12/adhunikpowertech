import HVACContractorNoida from './hvaccontractornoida';

export const metadata = {
  title: 'Top HVAC Contractor in Noida | Central AC, AHU & Cleanroom Projects',
  description:
    'Adhunik Powertech is a premier HVAC contractor in Noida executing turnkey HVAC systems, central air conditioning plants, cleanrooms, AHUs, and industrial air washers.',
  keywords: [
    'hvac contractor in Noida',
    'Top hvac contractor in Noida',
    'hvac service',
    'hvac system',
    'air conditioning system service',
    'central air conditioning',
    'centre air conditioner',
    'central AC',
    'air handling unit noida',
    'industrial air washer noida',
    'cleanroom hvac contractor',
  ],
  alternates: {
    canonical: 'https://www.adhunikpowertech.com/hvac-contractor-in-noida',
  },
  openGraph: {
    title: 'Top HVAC Contractor in Noida | Adhunik Powertech Private Limited',
    description:
      'Turnkey HVAC contracting, central air conditioning plants, cleanroom ventilation, double-skin AHUs, and industrial air washers across Noida & Greater Noida.',
    url: 'https://www.adhunikpowertech.com/hvac-contractor-in-noida',
    siteName: 'Adhunik Powertech',
    locale: 'en_IN',
    type: 'website',
  },
};

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'Adhunik Powertech Private Limited',
  url: 'https://www.adhunikpowertech.com/hvac-contractor-in-noida',
  logo: 'https://www.adhunikpowertech.com/logo.png',
  description:
    'Leading industrial and commercial HVAC contractor in Noida providing turnkey engineering, central air conditioning, cleanroom HVAC, AHUs, industrial air washers, and air conditioning system service.',
  areaServed: [
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Greater Noida' },
    { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Turnkey HVAC Contracting & Cleanroom Engineering',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Turnkey HVAC System Engineering & Contracting',
          description:
            'Turnkey design, duct fabrication, CFM balancing, and execution of commercial and industrial HVAC systems.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Central Air Conditioning Installation',
          description:
            'Erection, chilled water piping, and commissioning of central chillers, AHUs, and central AC plants.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cleanroom HVAC & Air Handling Units (AHU)',
          description:
            'ISO Class 5-8 cleanroom engineering, pressure cascades, terminal HEPA filtration, and double-skin AHUs.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Industrial Air Washers & Ducted Coolers',
          description:
            'Heavy-duty evaporative air washers and ducted cooling plants for large industrial production floors.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Air Conditioning System Service & Plant AMC',
          description:
            'Comprehensive planned maintenance and servicing for central cooling, chillers, and industrial ventilation systems.',
        },
      },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of industrial HVAC projects does Adhunik Powertech execute in Noida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We execute turnkey commercial and industrial HVAC projects including central air conditioning chiller plants, cleanroom ventilation systems, double-skin Air Handling Units (AHUs), commercial VRF systems, and large-capacity industrial air washers and ducted coolers across Noida and Greater Noida.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you design and execute ISO-certified cleanroom HVAC systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We deliver complete cleanroom HVAC systems for pharmaceutical, electronics, and automotive facilities. This covers pressure cascade balancing, terminal HEPA filtration, dehumidification, and double-skin AHUs aligned with ISO 14644 and cGMP standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do industrial air washers and ducted coolers fit into large factory projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For manufacturing shop floors and high-bay industrial sheds where full refrigerated air conditioning is cost-prohibitive, we engineer single and two-stage industrial air washers and ducted evaporative cooling systems that deliver high-volume treated air at a fraction of central AC operating costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does your commercial air conditioning system service and turnkey AMC cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our project-level hvac service covers chilled water loop chemical flushing, AHU dynamic fan balancing, compressor overhaul, refrigerant leak testing, pressure calibration, and complete airflow/CFM rebalancing.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HVACContractorNoida />
    </>
  );
}