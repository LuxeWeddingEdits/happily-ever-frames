import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Palette, Clock, Award, Heart, Image } from "lucide-react";
import photoEditingImage from "@/assets/photo-editing.jpg";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Wedding Photo Editing",
      description: "Professional retouching, color correction, and artistic enhancement to make your wedding photos absolutely stunning",
      image: photoEditingImage,
      features: ["Color Correction", "Skin Retouching", "Background Enhancement", "Lighting Adjustment"]
    },
    {
      icon: Image,
      title: "Portrait Enhancement",
      description: "Specialized portrait editing to enhance the natural beauty of couples and wedding party members",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop",
      features: ["Portrait Retouching", "Expression Enhancement", "Blemish Removal", "Eye Brightening"]
    },
    {
      icon: Palette,
      title: "Artistic Photo Effects",
      description: "Creative photo editing with artistic filters and effects to give your photos a unique, dreamy look",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
      features: ["Vintage Effects", "Black & White", "Soft Focus", "Creative Filters"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "24-48 hour delivery for urgent requests"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Industry-leading editing standards"
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Every edit tells your unique love story"
    }
  ];

  return (
    <section id="services" className="py-20 elegant-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-wedding-text mb-6 leading-tight">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-wedding-text-light max-w-2xl mx-auto leading-relaxed">
            We specialize in transforming your wedding memories into stunning visual masterpieces
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover-lift group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 p-3 bg-white/90 rounded-full">
                  <service.icon className="h-6 w-6 text-wedding-gold" />
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-wedding-text mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-wedding-text-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-wedding-text-light">
                      <div className="w-2 h-2 bg-wedding-gold rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button variant="default" className="w-full">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wedding-gold rounded-full mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-wedding-text mb-2 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-wedding-text-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;