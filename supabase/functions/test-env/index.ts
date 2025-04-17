
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

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
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
    
    // Test object to send back
    const response = {
      openAIKeyExists: !!openAIApiKey,
      openAIKeyFirstChars: openAIApiKey ? `${openAIApiKey.substring(0, 5)}...` : null,
      supabaseUrlExists: !!supabaseUrl,
      supabaseAnonKeyExists: !!anonKey,
      timestamp: new Date().toISOString(),
      // List all available environment variables (just the names, not values)
      availableEnvVars: Object.keys(Deno.env.toObject())
    };

    console.log("Environment variables test completed successfully");
    
    return new Response(
      JSON.stringify(response),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (error) {
    console.error("Error in test-env function:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});
