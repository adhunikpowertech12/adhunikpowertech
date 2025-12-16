// app/api/verify-recaptcha/route.js
// This code runs ONLY on the server

export async function POST(request) {
  const body = await request.json();
  const { gReCaptchaToken } = body;

  if (!gReCaptchaToken) {
    return new Response(JSON.stringify({ success: false, message: 'reCAPTCHA token missing.' }), { status: 400 });
  }

  // Private key is accessed here
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
 const MINIMUM_SCORE = 0.5;

  try {
    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify';

    // Prepare data for Google's API
    const params = new URLSearchParams();
    params.append('secret', secretKey);
    params.append('response', gReCaptchaToken);

    const verifyResponse = await fetch(verificationUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await verifyResponse.json();

    if (data.success && data.score >= MINIMUM_SCORE) {
      // Verification passed
      return new Response(JSON.stringify({ success: true, score: data.score }), { status: 200 });
    } else {
      // Verification failed (low score)
      console.warn(`reCAPTCHA failed. Score: ${data.score}`);
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Low reCAPTCHA score or verification failed.', 
        score: data.score 
      }), { status: 403 });
    }
  } catch (error) {
    console.error('reCAPTCHA Server Error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Server verification failed.' }), { status: 500 });
  }
}