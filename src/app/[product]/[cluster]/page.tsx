import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PRIORITY_CLUSTERS, IndustrialCluster } from '@/data/clusters';

// 1. Standard Product Catalog Configuration
interface ProductSpec {
  slug: string;
  name: string;
  category: string;
  series: string;
  capacityRange: string;
  airflowRange: string;
  complianceRating: string;
  compressorOrBlower: string;
  constructionMaterial: string;
  refrigerantOrMedia: string;
  basePriceINR: number;
}

const CATALOG_PRODUCTS: ProductSpec[] = [
  {
    slug: 'panel-air-conditioner',
    name: 'Industrial Panel Air Conditioner',
    category: 'Panel Air Conditioner',
    series: 'ProCool CNC & VFD Series',
    capacityRange: '250 W to 7,500 W (1,500 to 25,600 BTU/hr)',
    airflowRange: '180 CFM to 1,450 CFM Closed Loop',
    complianceRating: 'IP55 Enclosure Separation / CE Certified',
    compressorOrBlower: 'High-Ambient Tropicalized Hermetic Rotary',
    constructionMaterial: '1.6mm CRCA Powder Coated / Optional SS304',
    refrigerantOrMedia: 'R134a / R410A Eco-Friendly Refrigerant',
    basePriceINR: 18500,
  },
  {
    slug: 'industrial-air-washer',
    name: 'Factory Evaporative Air Washer Unit',
    category: 'Air Washer System',
    series: 'HydroBreeze Two-Stage & Single-Stage Series',
    capacityRange: '5,000 CFM to 120,000 CFM Turnkey Plants',
    airflowRange: '5,000 CFM to 120,000 CFM',
    complianceRating: 'AMCA Certified Impeller / ASHRAE 52.2 Filter Class',
    compressorOrBlower: 'Techmark Backward/Forward Curved DIDW Centrifugal Blower',
    constructionMaterial: 'GSS Sheet Metal 18–22 Gauge / Extruded Aluminum Frame',
    refrigerantOrMedia: 'CelDek 5090 / 7090 High-Efficiency Cellulose Media (100–300mm)',
    basePriceINR: 85000,
  },
];

// Async params interface for Next.js 15+ / 16+ Turbopack
interface PageProps {
  params: Promise<{
    product: string;
    cluster: string;
  }>;
}

// 2. Pre-render every combination at build time
export async function generateStaticParams() {
  const paths: { product: string; cluster: string }[] = [];

  for (const product of CATALOG_PRODUCTS) {
    for (const cluster of PRIORITY_CLUSTERS) {
      paths.push({
        product: product.slug,
        cluster: cluster.slug,
      });
    }
  }

  return paths;
}

// 3. Programmatic Metadata & Open Graph for AEO/GEO Search Bots
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const productSlug = resolvedParams?.product?.toLowerCase();
  const clusterSlug = resolvedParams?.cluster?.toLowerCase();

  const product = CATALOG_PRODUCTS.find((p) => p.slug.toLowerCase() === productSlug);
  const cluster = PRIORITY_CLUSTERS.find((c) => c.slug.toLowerCase() === clusterSlug);

  if (!product || !cluster) return {};

  const title = `${product.name} in ${cluster.city}, ${cluster.state} | ${cluster.regionName}`;
  const description = `Direct OEM manufacturer supply of ${product.name} for ${cluster.regionName}. Engineered for ${cluster.ambientMaxSummerC}°C peak summer ambient temperatures and ${cluster.primarySectors[0]} environments.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.adhunikpowertech.com/${product.slug}/${cluster.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.adhunikpowertech.com/${product.slug}/${cluster.slug}`,
      siteName: 'Adhunik Powertech Private Limited',
      locale: 'en_IN',
      type: 'website',
    },
    keywords: [
      `${product.name} ${cluster.city}`,
      `${product.name} ${cluster.regionName}`,
      `Industrial cooling equipment ${cluster.city}`,
      `Panel AC manufacturer ${cluster.state}`,
      `Air washer unit supplier ${cluster.city}`,
    ],
  };
}

// 4. Main Page Component (Async Component awaiting params)
export default async function ClusterProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const productSlug = resolvedParams?.product?.toLowerCase();
  const clusterSlug = resolvedParams?.cluster?.toLowerCase();

  const product = CATALOG_PRODUCTS.find((p) => p.slug.toLowerCase() === productSlug);
  const cluster = PRIORITY_CLUSTERS.find((c) => c.slug.toLowerCase() === clusterSlug);

  if (!product || !cluster) {
    notFound();
  }

  // Schema.org Structured Data: Product + AggregateRating + Merchant Listings / Offers
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.name} - ${cluster.regionName} Specification`,
    image: 'https://www.adhunikpowertech.com/images/products/industrial-cooling-hero.jpg',
    description: `Heavy-duty ${product.name} built for manufacturing units in ${cluster.regionName}. Rated for extreme ambient design: ${cluster.ambientMaxSummerC}°C Dry Bulb and ${cluster.designWetBulbC}°C Wet Bulb.`,
    brand: {
      '@type': 'Brand',
      name: 'Adhunik Powertech',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Adhunik Powertech Private Limited',
      url: 'https://www.adhunikpowertech.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '48',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.basePriceINR,
      priceValidUntil: '2027-12-31',
      validFrom: '2026-01-01',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Adhunik Powertech Private Limited',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: `${cluster.city}, ${cluster.state}`,
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'INR',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'IN',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 2,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 4,
            unitCode: 'DAY',
          },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'IN',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 15,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
    },
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-40">
        {/* Navigation Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex text-xs sm:text-sm text-slate-500 space-x-2">
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="capitalize">{product.category}</span>
              <span>/</span>
              <span className="text-slate-800 font-semibold">{cluster.city} Hub</span>
            </nav>
          </div>
        </div>

        {/* Hero Banner with Cluster-Specific Engineering Context */}
        <section className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-blue-500">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {cluster.regionName} — Engineering Deployment Zone
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {product.name} Supply in <span className="text-blue-400">{cluster.city}</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              Factory-direct supply, installation, and field commissioning engineered to endure peak local summer conditions of{' '}
              <strong className="text-white underline decoration-blue-500">{cluster.ambientMaxSummerC}°C</strong> across{' '}
              {cluster.primarySectors.join(', ')}.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#rfq-form"
                className="bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold px-6 py-3 rounded-lg shadow-md transition-all text-sm uppercase tracking-wider inline-flex items-center gap-2"
              >
                Request BOQ Sizing & Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="tel:8287885885"
                className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-lg border border-slate-700 transition-all text-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Toll Free Number: 8287885885
              </a>
            </div>
          </div>
        </section>

        {/* Technical Specification Matrix */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Regional Climate & Operational Stress Factors */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="p-6 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-amber-100 text-amber-800 rounded-md">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">Cluster Climate Envelope</h2>
                  </div>
                  <span className="text-xs font-mono bg-slate-200 px-2 py-0.5 rounded text-slate-700">
                    {cluster.state}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Design Dry Bulb</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">{cluster.ambientMaxSummerC}°C</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Design Wet Bulb</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">{cluster.designWetBulbC}°C</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Dust & Particulate Severity</p>
                    <span className="inline-block mt-1 px-2.5 py-1 rounded text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                      {cluster.ambientDustSeverity}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Primary Target Industries</p>
                    <ul className="mt-2 space-y-1">
                      {cluster.primarySectors.map((sector, index) => (
                        <li key={index} className="text-xs font-medium text-slate-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                          {sector}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
                Data calibrated against ISHRAE / ASHRAE regional summer meteorological tables.
              </div>
            </div>

            {/* Card 2: Field Engineering Challenge & Regional Recommendation */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="p-6 bg-slate-100/70 border-b border-slate-200 flex items-center gap-3">
                  <span className="p-2 bg-blue-100 text-blue-800 rounded-md">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">Engineering Recommendation</h2>
                </div>

                <div className="p-6 space-y-5">
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Thermal Stress Analysis
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed bg-blue-50/60 p-3 rounded-lg border border-blue-200/60">
                      {cluster.coolingChallenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Recommended Air Washer Architecture
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {cluster.recommendedAirWasherType}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Recommended Panel Enclosure Protection
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {cluster.recommendedPanelAcRating}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
                Configured to prevent VFD drive tripping and condensation ingress.
              </div>
            </div>

            {/* Card 3: Machine Specs & Logistics Node */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="p-6 bg-slate-100/70 border-b border-slate-200 flex items-center gap-3">
                  <span className="p-2 bg-emerald-100 text-emerald-800 rounded-md">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">Dispatch & Factory Spec</h2>
                </div>

                <div className="p-6 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Series:</span>
                    <span className="font-semibold text-slate-800 text-right">{product.series}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Capacities:</span>
                    <span className="font-semibold text-slate-800 text-right">{product.capacityRange}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Airflow:</span>
                    <span className="font-semibold text-slate-800 text-right">{product.airflowRange}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Protection Standard:</span>
                    <span className="font-semibold text-slate-800 text-right">{product.complianceRating}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Regional Supply Node:</span>
                    <span className="font-semibold text-emerald-700 text-right">{cluster.logisticsHub}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Freight Lead Time:</span>
                    <span className="font-semibold text-slate-900 text-right">{cluster.dispatchTransitTime}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 border-t border-emerald-100 flex items-center gap-2 text-xs font-medium text-emerald-800">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2 2 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                MSME Registered OEM / Direct Tax Invoice & GeM Compatible
              </div>
            </div>

          </div>

          {/* Quick Technical RFQ Form */}
          <section id="rfq-form" className="mt-16 bg-white rounded-xl border border-slate-200 shadow-sm p-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900">
                Deploy {product.name} in {cluster.regionName}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Submit panel enclosure measurements, CFM static pressure targets, or single-line diagrams (SLD). Our engineering desk provides validated thermal heat load sizing and line-item BOQs within 3 hours.
              </p>
            </div>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-end">
                <Link
                  href="/support-form"
                  className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-md text-sm transition-all shadow block"
                >
                  Submit for Technical BOQ
                </Link>
              </div>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}