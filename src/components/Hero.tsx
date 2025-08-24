import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Beautiful wedding couple dancing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 overlay-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-up">
          Luxury Wedding Memories Through
          <span className="block hero-gradient bg-clip-text text-transparent">
            Perfect Edits
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
          Professional wedding photo and video editing that transforms your precious moments into timeless masterpieces
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up [animation-delay:400ms]">
          <Button variant="hero" size="lg" className="group">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="elegant" size="lg" className="group">
            <Play className="mr-2 h-5 w-5" />
            View Our Work
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8 text-center animate-fade-up [animation-delay:600ms]">
          <div>
            <div className="text-3xl font-heading font-bold hero-gradient bg-clip-text text-transparent">500+</div>
            <div className="text-sm text-white/80">Weddings Edited</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold hero-gradient bg-clip-text text-transparent">24h</div>
            <div className="text-sm text-white/80">Quick Turnaround</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold hero-gradient bg-clip-text text-transparent">4.9★</div>
            <div className="text-sm text-white/80">Client Rating</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;