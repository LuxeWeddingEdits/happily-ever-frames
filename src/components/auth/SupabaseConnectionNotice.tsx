import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SupabaseConnectionNotice() {
  return (
    <Alert className="border-yellow-200 bg-yellow-50">
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800">
        <div className="flex items-center justify-between">
          <span>
            Authentication requires Supabase connection. Please connect your project to Supabase to enable sign-in functionality.
          </span>
          <Button 
            variant="outline" 
            size="sm"
            className="ml-4 text-yellow-700 border-yellow-300 hover:bg-yellow-100"
            onClick={() => window.open('https://docs.lovable.dev/integrations/supabase/', '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Setup Guide
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}