'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// **Crucial verification:** The key is read here.
// Use '|| ""' to ensure it's always a string, not undefined.
const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""; 

export default function RecaptchaProvider({ children }) {
  // We can add a console check here to see what the value is at runtime
  console.log("Recaptcha Key in Provider:", recaptchaKey);
  
  // NOTE: If the key is undefined/empty here, the Google script will fail (as seen in the error).
  
  return (
    <GoogleReCaptchaProvider 
      reCaptchaKey={recaptchaKey} 
      useRecaptchaNet // Good for reliable international access
      scriptProps={{ async: true, defer: true, appendTo: "body" }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}