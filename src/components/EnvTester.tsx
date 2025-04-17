import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { supabase, isSupabaseConfigured } from '@/integrations/supabase/client';

interface TestResponse {
  openAIKeyExists: boolean;
  openAIKeyFirstChars: string | null;
  supabaseUrlExists: boolean;
  supabaseAnonKeyExists: boolean;
  timestamp: string;
  availableEnvVars: string[];
  error?: string;
}

const EnvTester = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TestResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [supabaseConfigured, setSupabaseConfigured] = useState(false);

  useEffect(() => {
    // Check if Supabase is configured in environment
    setSupabaseConfigured(isSupabaseConfigured());
  }, []);

  const testEnvironmentVariables = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!supabaseConfigured) {
        throw new Error("Supabase is not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment.");
      }
      
      const { data, error } = await supabase.functions.invoke('test-env', {
        method: 'POST',
      });
      
      if (error) throw new Error(error.message);
      
      setResult(data);
      toast({
        title: "Test Completed",
        description: "Environment variables test completed successfully.",
      });
    } catch (err: any) {
      console.error("Error testing environment variables:", err);
      setError(err.message || "An unknown error occurred");
      toast({
        variant: "destructive",
        title: "Test Failed",
        description: err.message || "Failed to test environment variables",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Card className="neuro">
        <CardHeader>
          <CardTitle>Environment Variables Tester</CardTitle>
          <CardDescription>
            Test connection to Supabase environment variables
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {!supabaseConfigured && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Configuration Missing</AlertTitle>
              <AlertDescription>
                Supabase is not configured. To use this tester, please add these environment variables:
                <ul className="list-disc ml-6 mt-2">
                  <li>VITE_SUPABASE_URL</li>
                  <li>VITE_SUPABASE_ANON_KEY</li>
                </ul>
              </AlertDescription>
            </Alert>
          )}
          
          <Button 
            onClick={testEnvironmentVariables} 
            disabled={isLoading || !supabaseConfigured}
            className="neuro-sm neuro-hover neuro-active"
          >
            {isLoading ? "Testing..." : "Test Environment Variables"}
          </Button>
          
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded text-sm text-red-800">
              {error}
            </div>
          )}
          
          {result && (
            <div className="mt-4 space-y-4">
              <div className="neuro-inset p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Test Results:</h3>
                <ul className="space-y-2 text-sm">
                  <li>OpenAI API Key: {result.openAIKeyExists ? 
                    <span className="text-green-600 font-medium">Present ({result.openAIKeyFirstChars})</span> : 
                    <span className="text-red-600 font-medium">Missing</span>
                  }</li>
                  <li>Supabase URL: {result.supabaseUrlExists ? 
                    <span className="text-green-600 font-medium">Present</span> : 
                    <span className="text-red-600 font-medium">Missing</span>
                  }</li>
                  <li>Supabase Anon Key: {result.supabaseAnonKeyExists ? 
                    <span className="text-green-600 font-medium">Present</span> : 
                    <span className="text-red-600 font-medium">Missing</span>
                  }</li>
                  <li>Test Time: {new Date(result.timestamp).toLocaleString()}</li>
                </ul>
              </div>
              
              <div className="neuro-inset p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Available Environment Variables:</h3>
                <div className="max-h-40 overflow-y-auto text-xs">
                  <ul className="space-y-1">
                    {result.availableEnvVars.map((envVar, i) => (
                      <li key={i} className="font-mono">{envVar}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="text-xs text-muted-foreground">
          Note: This only shows if the variables exist, not their actual values (for security).
        </CardFooter>
      </Card>
    </div>
  );
};

export default EnvTester;
