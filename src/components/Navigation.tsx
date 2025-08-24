import { Button } from "@/components/ui/button";

const Navigation = () => {
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
          <Button variant="elegant" size="sm">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;