import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import AuthDialog from "@/components/auth/AuthDialog";
import { LogOut, User } from "lucide-react";
import { toast } from "sonner";

const Navigation = () => {
  console.log('Navigation component rendering')
  
  const { user, signOut, loading } = useAuth();

  console.log('Navigation - Auth state:', { user: !!user, loading })

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully!");
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-heading font-bold text-white">
          LuxeWeddingEdits
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white hover:text-primary-light transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-white hover:text-primary-light transition-colors">
            Portfolio
          </a>
          <a href="#about" className="text-white hover:text-primary-light transition-colors">
            About
          </a>
          <a href="#careers" className="text-white hover:text-primary-light transition-colors">
            Careers
          </a>
          
          {loading ? (
            <div className="w-24 h-9 bg-white/20 rounded animate-pulse" />
          ) : user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white">
                <User className="h-4 w-4" />
                <span className="text-sm">{user.user_metadata?.full_name || user.email}</span>
              </div>
              <Button 
                variant="elegant" 
                size="sm" 
                onClick={handleSignOut}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          ) : (
            <AuthDialog>
              <Button variant="elegant" size="sm">
                Sign In
              </Button>
            </AuthDialog>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;