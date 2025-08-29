import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Award, Camera, Heart, Star, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Heart,
      number: "2,500+",
      label: "Weddings Edited"
    },
    {
      icon: Users,
      number: "50+",
      label: "Professional Editors"
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: Clock,
      number: "24-48hrs",
      label: "Turnaround Time"
    }
  ];

  const teamFeatures = [
    {
      icon: Camera,
      title: "Expert Photographers",
      description: "Our team includes award-winning photographers who understand the art of wedding imagery"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "We maintain the highest standards in photo and video editing using industry-leading software"
    },
    {
      icon: Heart,
      title: "Passion for Love Stories",
      description: "Every wedding is unique, and we pour our hearts into telling each couple's special story"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-wedding-text mb-6 leading-tight">
            About LuxeWeddingEdits
          </h2>
          <p className="text-lg sm:text-xl text-wedding-text-light max-w-3xl mx-auto leading-relaxed">
            Founded in 2018, we're a passionate team of visual storytellers dedicated to preserving 
            your most precious moments through expert photo and video editing.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wedding-gold rounded-full mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-wedding-text mb-2">
                {stat.number}
              </div>
              <p className="text-wedding-text-light text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-wedding-text mb-6 leading-tight">
              Crafting Timeless Wedding Memories
            </h3>
            <p className="text-wedding-text-light mb-6 leading-relaxed">
              Every love story is unique, and we believe your wedding photos and videos should reflect that. 
              Our team of skilled editors combines technical expertise with artistic vision to transform 
              your raw footage into cinematic masterpieces.
            </p>
            <p className="text-wedding-text-light mb-6 leading-relaxed">
              From subtle color corrections to dramatic cinematic effects, we work closely with photographers 
              and videographers worldwide to ensure every frame captures the emotion and beauty of your special day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg">
                View Our Process
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop&auto=format" 
              alt="Professional wedding editing workspace"
              className="rounded-lg shadow-elegant w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-wedding-gold rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-heading font-bold">5+</div>
                <div className="text-xs">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamFeatures.map((feature, index) => (
            <Card key={index} className="p-6 sm:p-8 text-center shadow-card hover-lift group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wedding-gold/10 rounded-full mb-6 group-hover:bg-wedding-gold group-hover:text-white transition-colors">
                <feature.icon className="h-8 w-8 text-wedding-gold group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-wedding-text mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-wedding-text-light text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;