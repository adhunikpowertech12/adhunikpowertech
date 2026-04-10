import React from 'react'; 
import Link from 'next/link';

export default function SiteMap() {
    const sitemapLinks = [
    { href: '/', text: 'Landing Page', title: 'Go to homepage ADHUNIK POWERTECH' },
    { href: '/our-Company', text: 'About Us ', title: 'Learn more about our company' },
    { href: '/vision-&-mission', text: 'Vision & Mission ', title: 'Vision & Mission about our company' },
    { href: '/certificate-&-accreditation', text: 'Certificate & Accreditation', title: 'Certificate & Accreditation about our company' },
    { href: '/awards-and-recognitions', text: 'Awards and Recognitions', title: 'Company awards and recognitions' },
    { href: '/product-overview', text: 'Product Overview', title: 'View our full product overview' },
    { href: '/our-product-clients', text: 'OUR PRODUCTS CLIENTS', title: 'Clients who use our products' },
    { href: '/air-washer', text: ' Air Washer', title: 'Understand the purpose and function of air washers' },
    { href: '/ducted-air-cooler', text: 'Ducted Air Coolers', title: 'Find ducted air coolers from a reliable manufacturer' },
    { href: '/ventilation-fans', text: 'Ventilation Fan', title: 'Explore Ventilation Fan, axial flow fans and their applications' },
    { href: '/panel-air-conditioners', text: 'Panel Air Conditioner', title: 'Discover our panel air conditioning solutions' },
    { href: '/air-handling-unit', text: 'Air Handling Unit', title: 'Explore our range of air handling units' },
    { href: '/chiller-oil-water-coolant', text: ' OIL/COOLANT CHILLER', title: 'Details about our oil chiller units' },
    { href: '/air-shower', text: 'Air Shower & Pass Box', title: 'Cleanroom accessories: Air Showers and Pass Boxes' },
    { href: '/industrial-cooler', text: 'Heavy-Duty Industrial Air Cooler', title: 'Cooling solutions for industrial environments' },
    { href: '/hvac', text: 'Hvac Overview', title: 'OUR ACHIEVEMENTS TOTAL PROJECTS DELIVERED in Hvac' },
    { href: '/top-HVAC-Contractor-in-Delhi-NCR-&-India', text: 'HVAC Contractor', title: 'Hire a trusted HVAC Contractor expert in Delhi NCR' },
    { href: '/our-projects', text: 'OUR PROJECTS', title: 'View our completed and ongoing projects' },
    { href: '/our-client', text: ' OUR PROJECT CLIENTS', title: 'Our clients and sustainable solutions' },
    { href: '/top-Fire-Fighting-Company-in-Delhi-NCR-And-India', text: ' ADHUNIK FIREXPERT Landing Page', title: 'Explore our  ADHUNIK FIREXPERT fire protection equipment offerings' },
    { href: '/fire-extinguishers', text: 'Fire Extinguishers', title: 'Explore various fire extinguisher types and uses' },
    { href: '/fire-hydrant-system', text: 'Fire Hydrant System', title: 'Details on our fire hydrant systems' },
    { href: '/fire-sprinkler-system', text: 'Fire Sprinkler System', title: 'Explore our fire sprinkler system options' },
    { href: '/fire-suppression-system', text: 'Fire Suppression System', title: 'Details about our suppression system solutions' },
    { href: '/fire-alarm-system', text: 'Fire Alarm System', title: 'Learn about fire alarm systems' },
    { href: '/fire-tubing-system', text: 'Fire Tubing System', title: 'Fire suppression through tubing systems' },
    { href: '/fire-VESDA-system', text: 'Fire VESDA System', title: 'Very Early Smoke Detection Apparatus (VESDA)' },
    { href: '/glow-signage-&-emergency-lights', text: 'Glow Signage and Emergency Lights', title: 'Explore emergency lighting and signage' },
    { href: '/manufacturing-and-r-&-d', text: 'Manufacturing and Research & Development ', title: 'Our R&D and manufacturing initiatives' },
    { href: '/annual-maintenance-contract', text: 'Annual Maintenance Contracts', title: 'Information on our AMC services' },
    { href: '/top-HVAC-Contractor-Across-Delhi-NCR-and-India', text: 'Premier HVAC Contractor Across Delhi NCR and India', title: 'HVAC Contractor Across Delhi NCR and India Explore our top contractor services' },
    { href: '/hire-The-Right-HVAC-Contractor-in-India', text: 'Finding the Right Contractor in India', title: 'Steps to hire the best HVAC contractor' },
    { href: '/india-business-award-2025', text: 'Award-Winning HVAC Services', title: 'Our award-winning HVAC solutions' },
    { href: '/10-tips-for-choosing-an-HVAC-contractor-in-india', text: '10 Tips for Choosing an HVAC Contractor in India', title: 'Guide to choosing HVAC contractors in India' },
    { href: '/what-is-hvac', text: 'What is HVAC ?', title: 'Understanding HVAC systems' },
    { href: '/a-new-chapter-of-excellence-adhunik-hvac-projects', text: 'Introducing Adhunik HVAC Projects', title: 'A New Chapter of Engineering Excellence' },
    { href: '/what-is-panel-air-conditioners', text: 'What is a Panel Air Conditioner?', title: 'Learn about panel ACs and their uses' },
    { href: '/what-is-a-ducted-air-cooler', text: 'What is a Ducted Air Cooler?', title: 'Guide to ducted air cooler systems' },
    { href: '/blog', text: 'Blog Page', title: 'Read our blog articles and updates' },
    { href: '/what-is-an-air-washer', text: 'What is an Air Washer?', title: 'Learn about Air Washer and their uses' },
    { href: '/industrial-cooler', text: 'Industrial Cooling Solutions', title: 'Industrial Cooling Solutions' },
    { href: '/bldc-fans', text: 'Ceiling Fans', title: 'Ceiling Fans' },
    { href: '/support-form', text: 'Contact Us', title: 'Contact us for expert HVAC advice' },
    { href: '/why-your-electrical-cabinet-needs-a-panel-ac', text: 'Why Your Electrical Cabinet Needs a Panel AC', title: 'Panel AC Benefits: Preventing Downtime in Electrical Cabinets' },
    { href: '/top-hvac-contractor-in-noida', text: 'Top HVAC Contractors in Noida', title: 'Best HVAC Contractor & Services in Noida for Commercial & Industrial Needs' },
    { href: '/reduce-hvac-energy-consumption', text: 'Reduce HVAC Energy Consumption', title: 'Top 5 Ways to Reduce HVAC Energy Consumption & Save Costs' }, 
    { href: '/the-ultimate-guide-to-fire-safety-and-protection-in-delhi-ncr', text: 'Fire Safety Guide-Delhi NCR Protection Systems', title: 'Essential fire safety tips, compliance, and top protection services in Delhi/NCR' },
    { href: '/fire-extinguisher-guide-for-delhi-ncr', text: 'Fire Extinguisher Guide for Delhi NCR ', title: 'Know which fire extinguisher to use. Selection, types, and installation rules for Delhi NCR. ' },
    { href: '/central-air-conditioning-systems-in-delhi-ncr', text: 'Central AC Systems for Delhi NCR Commercial Spaces ', title: 'Expert installation and maintenance of Central Air Conditioning for businesses in Delhi NCR ' },
    { href: '/adhunik-hvac-projects-the-legacy-of-adhunik-powertech', text: 'Adhunik HVAC Projects: Powertech Engineering Legacy', title: 'Explore the successful HVAC projects defining the engineering legacy of Adhunik Powertech. ' },
    { href: '/how-to-prevent-overheating-in-electrical-cabinets', text: 'Prevent Electrical Cabinet Overheating ', title: 'Prevent Electrical Cabinet Overheating: Essential Tips ' },
    { href: '/top-fire-fighting-contractors-in-delhi', text: ' Top Fire Fighting Contractors in Delhi', title: 'Top Fire Fighting Contractors in Delhi' },
    { href: '/hvac-thumb-rule-and-formulas', text: 'Thumb Rules & Formulas ', title: 'Essential HVAC Thumb Rules & Formulas for Quick Design' },
    { href: '/difference-between-bldc-and-normal-fan', text: 'BLDC vs Normal fan ', title: 'BLDC vs. Normal Fans: Energy Savings Compared' },
    { href: '/choosing-the-best-HVAC-contractor-for-your-commercial-and-industrial-space', text: 'HVAC Contractor for Commercial & Industrial Sites ', title: 'Best HVAC Contractor for Commercial & Industrial Sites' },
    { href: '/hvac-experts-in-gurugram', text: 'HVAC Experts in Gurugram ', title: 'HVAC Experts in Gurugram: Best Air Conditioning & Heating Services' },
    { href: '/why-panel-ac-is-your-best-investment', text: 'why-panel-ac-is-your-best-investment ', title: 'Best Investment for 2025: Panel AC Explained | Trusted Govt-Authorized Provider' },
    { href: '/panel-ac-manufacturers-&-authorised-govt-supplier', text: 'Panel Ac manufactures with authorised govt supplier ', title: 'Panel AC Manufacturer & Govt Supplier in India | Adhunik Powertech' },
    { href: '/oil-chiller-maintenance-alerts', text: 'Maintaince Alterts for Oil Chiller ', title: '7-Point Checklist to Maintain Your Hydraulic Oil Chiller' },
    { href: '/industrial-turnkey-hvac-solutions', text: 'Industrial Turnkey HVAC Solutions', title: 'Industrial Turnkey HVAC Solutions | The Complete Industrial Guide' },
    { href: '/best-industrial-air-cooling-solution', text: 'Best Industrial Air Cooling Solution', title: 'Best Industrial Air Cooling Solution | Adhunik Powertech' },
    { href: '/panel-air-conditioner-vs-cooling-fans',text:'Panel Air Conditioner vs Cooling fans', title: 'Panel Ac vs Cooling Fans:Industrial Cooling Guide'},
    { href: '/hvac-turnkey-projects',text:'HVAC Turnkey Projects', title: 'HVAC Turnkey Projects in Delhi NCR | Industrial Cost-Saving Solutions'},
    { href: '/best-air-cooling-solutions',text:'Best Industrial Air Cooling Solutions', title: 'Best Industrial Air Cooling Solutions in Delhi NCR | Adhunik Powertech'},
    { href: '/what-makes-a-contractor-reliable',text:'What Makes a Contractor Reliable?', title: 'Top HVAC Contractor in Delhi NCR | Reliable Company Guide'},
    { href: '/ahu-vs-ffu-in-pharma-clean-rooms',text:'AHU vs FFU in Pharma Clean Rooms', title: 'AHU vs FFU in Pharma Clean Rooms | Adhunik Powertech'},
    { href: '/top-hvac-contractor-in-delhi-ncr',text:'Top HVAC Contractor in Delhi NCR', title: 'Top HVAC Contractor in Delhi NCR for Industrial & Commercial Projects'},
    { href: '/cleanroom-hvac-guide',text:'Cleanroom HVAC Guide', title: 'Cleanroom HVAC Guide: Pharma Manufacturing (2026)'},
    { href: '/choose-right-hvac-company-in-haridwar', text:'Choose the Best HVAC Company in Haridwar | Expert Guide', title: 'Choose the Best HVAC Company in Haridwar | Expert Guide'}
    ];

  return (
    <>
 


    <main className="  mx-auto px-4 py-8 mt-24">
                <h1 className=" px-4 text-2xl md:text-5xl font-bold mb-6">Sitemap</h1>
                <p className=' text-3xl py-4 underline px-4'> Pages </p>
                <div className=" ">
                    {sitemapLinks.map((link, index) => (
                        <div key={index} className=" p-4 rounded  ">
                            <Link href={link.href} title={link.title} className="text-gray-600 hover:text-cyan-600 hover:underline">
                                {link.text}
                            </Link>
                        </div>
                    ))}
                </div>
             
            </main>

    </>
  )
}
