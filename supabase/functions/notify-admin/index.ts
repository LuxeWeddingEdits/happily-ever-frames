import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data } = await req.json();
    
    console.log('Admin notification requested:', { type, data });

    if (type === 'contact_submission') {
      // In a real application, you would send an email or push notification
      // For now, we'll just log the submission
      console.log('New contact submission received:', {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        weddingDate: data.weddingDate,
        service: data.serviceNeeded,
        description: data.projectDescription,
        submittedAt: new Date().toISOString()
      });

      // You could integrate with email services like:
      // - SendGrid
      // - Resend
      // - Mailgun
      // - Or any other email service

      // Example webhook to admin email (commented out - requires email service setup)
      /*
      const emailData = {
        to: 'admin@luxeweddingedits.com',
        subject: `New Quote Request from ${data.firstName} ${data.lastName}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Wedding Date:</strong> ${data.weddingDate || 'Not specified'}</p>
          <p><strong>Service:</strong> ${data.serviceNeeded}</p>
          <p><strong>Description:</strong> ${data.projectDescription || 'None provided'}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `
      };
      
      // Send email using your preferred service
      // await sendEmail(emailData);
      */
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Admin notification processed successfully' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error processing admin notification:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to process admin notification' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});