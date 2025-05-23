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
    { href: '/what-is-panel-air-conditioners', text: 'What is a Panel Air Conditioner?', title: 'Learn about panel ACs and their uses' },
    { href: '/what-is-a-ducted-air-cooler', text: 'What is a Ducted Air Cooler?', title: 'Guide to ducted air cooler systems' },
    { href: '/blog', text: 'Blog Page', title: 'Read our blog articles and updates' },
    { href: '/what-is-an-air-washer', text: 'What is an Air Washer?', title: 'Learn about Air Washer and their uses' },
    { href: '/contact-Us', text: 'Contact Us', title: 'Contact us for expert HVAC advice' },
     
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
