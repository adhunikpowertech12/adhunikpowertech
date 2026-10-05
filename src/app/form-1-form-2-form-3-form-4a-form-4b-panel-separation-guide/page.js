import PanelSeparationGuidePage from './PanelSeparationGuidePage';

export const metadata = {
  title: 'Form 1, 2, 3, 4a, 4b Panel Separation Guide (IEC 61439-2) | Adhunik Powertech',
  description:
    'Complete engineering guide to internal panel segregation (Form 1, Form 2b, Form 3b, Form 4a, Form 4b) under IEC 61439-2 for LT switchboards, PCCs, and MCCs in Delhi NCR.',
  keywords: [
    'internal panel segregation',
    'form 1 form 2 form 3 form 4a form 4b panel separation',
    'form 3b vs form 4b',
    'iec 61439 internal separation',
    'lt panel manufacturer delhi ncr',
    'pcc panel separation standards',
  ],
  alternates: {
    canonical:
      'https://www.adhunikpowertech.com/blog/form-1-form-2-form-3-form-4a-form-4b-panel-separation-guide',
  },
  openGraph: {
    title: 'Form 1 to Form 4b Internal Panel Segregation Guide (IEC 61439)',
    description:
      'Understand the engineering differences between Form 1, Form 2b, Form 3b, Form 4a, and Form 4b for low-voltage switchboards and MCCs.',
    url: 'https://www.adhunikpowertech.com/blog/form-1-form-2-form-3-form-4a-form-4b-panel-separation-guide',
    siteName: 'Adhunik Powertech',
    locale: 'en_IN',
    type: 'article',
  },
};

export default function Page() {
  return <PanelSeparationGuidePage />;
}