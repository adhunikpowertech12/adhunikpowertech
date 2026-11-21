import { MetadataRoute } from 'next';
import { PRIORITY_CLUSTERS } from '@/data/clusters';

// Existing static routes
const STATIC_PAGES = [
  '',
  'our-Company',
  'vision-and-mission',
  'manufacturing-and-rd',
  'certificate-and-accreditation',
  'awards-and-recognitions',
  'product-overview',
  'our-product-clients',
  'air-washer',
  'ducted-air-cooler',
  'ventilation-fans',
  'panel-air-conditioners',
  'chiller-oil-water-coolant',
  'air-handling-unit',
  'air-shower',
  'industrial-cooler',
  'bldc-fans',
  'sensible-cooling-unit',
  'building-management-system',
  'hvac',
  'top-HVAC-Contractor-in-Delhi-NCR-and-India',
  'turnkey-cleanroom-solutions',
  'our-projects',
  'our-client',
  'top-Fire-Fighting-Company-in-Delhi-NCR-And-India',
  'fire-extinguishers',
  'fire-hydrant-system',
  'fire-sprinkler-system',
  'fire-suppression-system',
  'fire-alarm-system',
  'fire-tubing-system',
  'fire-VESDA-system',
  'glow-signage-and-emergency-lights',
  'electrical-panels',
  'lt-panel-manufacturers',
  'mcc-panel-manufacturers',
  'hvac-electrical-control-panels',
  'vfd-control-panels',
  'apfc-panel-manufacturers',
  'fire-fighting-control-panels',
  'annual-maintenance-contract',
  'blog',
  'what-is-an-air-washer',
  'what-is-a-ducted-air-cooler',
  'what-is-panel-air-conditioners',
  'what-is-hvac',
  '10-tips-for-choosing-an-HVAC-contractor-in-india',
  'india-business-award-2025',
  'hire-The-Right-HVAC-Contractor-in-India',
  'top-HVAC-Contractor-Across-Delhi-NCR-and-India',
  'choosing-the-best-HVAC-contractor-for-your-commercial-and-industrial-space',
  'difference-between-bldc-and-normal-fan',
  'hvac-thumb-rule-and-formulas',
  'top-fire-fighting-contractors-in-delhi',
  'how-to-prevent-overheating-in-electrical-cabinets',
  'adhunik-hvac-projects-the-legacy-of-adhunik-powertech',
  'central-air-conditioning-systems-in-delhi-ncr',
  'fire-extinguisher-guide-for-delhi-ncr',
  'the-ultimate-guide-to-fire-safety-and-protection-in-delhi-ncr',
  'top-hvac-contractor-in-noida',
  'reduce-hvac-energy-consumption',
  'why-your-electrical-cabinet-needs-a-panel-ac',
  'a-new-chapter-of-excellence-adhunik-hvac-projects',
  'hvac-experts-in-gurugram',
  'panel-ac-manufacturer-india',
  'why-panel-ac-is-your-best-investment',
  'oil-chiller-maintenance-alerts',
  'best-industrial-air-cooling-solution',
  'panel-air-conditioner-vs-cooling-fans',
  'cleanroom-hvac-guide',
  'choose-right-hvac-company-in-haridwar',
  'top-hvac-companies-in-haridwar',
  'best-hvac-services-haridwar',
  'panel-ac-advantages',
  'hvac-consultants-in-delhi-ncr',
  'panel-ac-maintenance-checklist',
  'air-cooling-haridwar-roorkee',
  'how-to-choose-the-right-panel-ac',
  'air-cooling-haridwar-roorkee',
  'best-air-conditioning-in-roorkee',
  'cleanroom-wall-panels',
  'modular-cleanroom-vs-conventional',
  'cleanroom-manufacturer-in-roorkee-haridwar',
  'hvac-system-product-quality',
  'cleanroom-ceiling-systems',
  'cleanroom-doors',
  'iso-6-vs-7-vs-8-cleanrooms',
  'pharma-cleanroom-contractor-india',
  'pass-box-vs-air-shower',
  'top-10-hvac-companies-in-india',
  'top-fire-fighting-contractors-in-india',
  'panel-ac-for-cnc-machines',
  'panel-air-conditioners-in-gem',
  'panel-air-conditioner-panelac',
  'best-panel-ac-in-india',
  'hvac-contractor-in-rajasthan',
  'hvac-contractor-in-madhya-pradesh',
  'hvac-contractor-in-gujarat',
  'top-best-panel-ac-manufacturer-in-pune',
  'top-panel-ac-manufacturer-in-gujarat',
  'top-panel-ac-manufacturer-in-bangalore',
  'hvac-contractor-in-noida',
  'panel-ac-manufacturer-and-supplier-in-andhra-pradesh',
  'panel-ac-manufacturer-in-ghaziabad',
  'panel-ac-manufacturer-in-kolkata',
  'panel-ac-manufacturer-in-odisha',
  'support-form',
  'sitemap',
];

const CATALOG_PRODUCTS = [
  'panel-air-conditioner',
  'industrial-air-washer',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.adhunikpowertech.com';
  const currentDate = new Date();

  // 1. Map existing static pages
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((route) => ({
    url: `${baseUrl}${route ? `/${route}` : ''}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Programmatically generate all cluster pages
  const dynamicClusterEntries: MetadataRoute.Sitemap = [];
  for (const product of CATALOG_PRODUCTS) {
    for (const cluster of PRIORITY_CLUSTERS) {
      dynamicClusterEntries.push({
        url: `${baseUrl}/${product}/${cluster.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    }
  }

  return [...staticEntries, ...dynamicClusterEntries];
}