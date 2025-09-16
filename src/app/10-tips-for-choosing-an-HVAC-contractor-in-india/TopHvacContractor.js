"use client"

import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import Link from 'next/link';



const tips = [
  {
    title: "1. Verify Licensing and Accreditation",
    content:
      "In India, ensure that the contractor complies with local government regulations and industry standards. Look for contractors certified by recognized bodies like the Indian Society of Heating, Refrigerating, and Air Conditioning Engineers (ISHRAE), which ensures quality and professionalism in the HVAC sector.",
  },
  {
    title: "2. Seek Referrals and Online Reviews",
    content:
      "Ask for recommendations from friends, family, or colleagues who have hired HVAC contractors. Additionally, browse online platforms such as Justdial, IndiaMART, or Google reviews to gauge the contractor's reputation and customer satisfaction levels.",
  },
  {
    title: "3. Check for Insurance Coverage",
    content:
      "Confirm that the contractor has insurance to cover any potential damage to property or injuries during the project. This is particularly important in India, where construction-related risks are common.",
  },
  {
    title: "4. Request Detailed Quotes",
    content:
      "Obtain written estimates from multiple contractors. The quote should outline labor costs, equipment specifications, and additional expenses. Avoid contractors offering significantly lower prices, as this could indicate compromised quality or hidden charges.",
  },
  {
    title: "5. Assess Experience and Expertise",
    content:
      "Experience is a key factor in the Indian HVAC market. Opt for contractors with a proven track record and expertise in handling systems suitable for Indian climatic conditions. Contractors experienced in managing high humidity or extreme temperatures are particularly valuable.",
  },
  {
    title: (
      <>
        6. Inquire About{" "}
        <Link
          href="/annual-maintenance-contract"
          className="text-cyan-500 hover:underline pr-1"
        >
          AMC (Annual Maintenance Contracts)
        </Link>
      </>
    ),
    content:
      "A reliable contractor should offer Annual Maintenance Contracts to ensure the efficient operation of your HVAC system. In India, AMCs are vital due to frequent power fluctuations and dusty conditions that can impact HVAC performance.",
  },
  {
    title: "7. Inspect References and Portfolio",
    content:
      "Request references and case studies from previous projects. Contact past clients to learn about their experience with the contractor. Reviewing portfolios can provide insights into the contractor’s ability to handle residential or commercial projects in India.",
  },
  {
    title: "8. Prioritize Energy Efficiency",
    content:
      "Energy efficiency is a major concern in India due to rising electricity costs. Choose a contractor knowledgeable about energy-efficient solutions like inverter technology and BEE-rated systems. Discuss options to optimize energy consumption and reduce long-term costs.",
  },
  {
    title: "9. Ensure Clear Communication",
    content:
      "Effective communication is crucial for a successful project. The contractor should be willing to explain system options, installation processes, and timelines. Transparency about costs and potential challenges is a sign of professionalism.",
  },
  {
    title: "10. Review Warranties and After-Sales Support",
    content:
      "In India, after-sales support is a critical aspect of HVAC services. Ensure that the contractor provides warranties on both equipment and installation. Reliable after-sales service, including quick response times for repairs, adds significant value.",
  },
];

export default function TopHvacContractor() {

  const WhyChoose = {
  title: (
    <>
      Why Choose{" "}
      <Link href="/" className="text-cyan-500 hover:underline pr-1">
        Adhunik Powertech
      </Link>{" "}
      for Your{" "}
      <Link href="/hvac" className="text-cyan-500 hover:underline pr-1">
        HVAC
      </Link>{" "}
      Needs?
    </>
  ),
  content:
    "At Adhunik Powertech Private Limited, we understand the unique requirements of the Indian market. As a trusted HVAC contractor, we specialize in delivering comprehensive solutions that cater to India's diverse climatic conditions. From efficient installation to timely maintenance and expert repairs, we offer end-to-end services designed to ensure optimal comfort and energy efficiency. Our certified professionals are dedicated to providing personalized support and unmatched after-sales service, making us the preferred choice for HVAC needs across industrial and commercial spaces.\n\nBy following these 10 tips and partnering with a trusted contractor like Adhunik Powertech, you can ensure your HVAC systems provide optimal performance and comfort. Contact us today to learn more about our services and how we can meet your heating and cooling needs.",
};

  return (


    <>

      <section className="overview py-8 mt-32  lg:px-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div>
                <section className=' md:p-5 flex flex-col md:flex-row mb-5 gap-4'>
                  <div className="box md:w-6/12 justify-center flex items-center mx-auto">

                    <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <Image
                        className="   h-full w-full  object-center object-fill rounded-2xl "
                        fetchPriority="high"
                        decoding="async"
                        alt="Air washer"
                        src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738837317/top10_ekhsnl.jpg"
                        width="300"
                        height="300"
                      />

                    </div>

                  </div>


                  <div className="box  md:w-6/12 py-4 px-4 flex justify-center items-start flex-col ">

                    <h1 className=" text-xl lg:text-2xl md:text-left font-bold mb-4 text-center">
                      10 Tips for Choosing an HVAC Contractor in India

                    </h1>


                    <p className="mb-4 text-sm text-gray-700 font-sans font-normal  text-justify md:text-start">
                      Ensuring your workplace remains comfortable throughout the year is essential, and choosing the right HVAC contractor plays a vital role in this. In the Indian market, where climatic conditions vary greatly and energy efficiency is crucial, selecting a dependable contractor can save you time, money, and stress. Here are 10 tips tailored for the Indian HVAC market to help you make the best choice.

                    </p>

                  </div>
                </section>







<h2 className='  text-lg md:text-4xl text-center   py-4 text-cyan-800'>How to Select a Reliable HVAC Contractor : 10 Key Factors</h2>

            <div className="space-y-6">
      {tips.map((tip, index) => (
        <div key={index}>
          <h2 className=" text-lg md:text-xl text-cyan-700 font-semibold mb-3">{tip.title}</h2>
          <p className="mb-4 text-sm text-gray-700 font-sans font-normal text-justify md:text-start">
            {tip.content}
          </p>
        </div>
      ))}

      <div>
        <h2 className=" text-lg md:text-xl text-cyan-700 font-semibold mb-3">{WhyChoose.title}</h2>
        <p className="mb-4 text-sm text-gray-700 font-sans font-normal text-justify md:text-start">
          {WhyChoose.content}
        </p>
      </div>
    </div>


              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  )
}
