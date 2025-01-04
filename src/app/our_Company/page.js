import OurCompany from "./OurCompany";

export const metadata = {

  title: {
    default: " About Us ",
    template: " %s - Hvac Under One Roof "
  },

  description: "Discover Adhunik Powertech Private Limited, a leader in HVAC solutions and air cooling systems. Based in Gurugram, India, we specialize in innovative, turnkey projects for industrial and commercial cooling needs",
  
  twitter:{
    card:"summary_large_image",
  }
  
}


export default function AirWasher() {


  return <OurCompany/> ;
}
