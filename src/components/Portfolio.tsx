import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Eye, Heart } from "lucide-react";

const Portfolio = () => {
  // Portfolio items - using placeholder data for demo
  const portfolioItems = [
    {
      id: 1,
      type: "photo",
      title: "Sarah & Michael",
      location: "Tuscany Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      likes: 127
    },
    {
      id: 2,
      type: "photo",
      title: "Emma & James",
      location: "Coastal Ceremony",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop",
      likes: 89
    },
    {
      id: 3,
      type: "photo",
      title: "Lisa & David",
      location: "Garden Party",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
      likes: 156
    },
    {
      id: 4,
      type: "photo",
      title: "Anna & Robert",
      location: "Mountain Wedding",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop",
      likes: 203
    },
    {
      id: 5,
      type: "photo",
      title: "Grace & Tom",
      location: "Vintage Venue",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
      likes: 178
    },
    {
      id: 6,
      type: "photo",
      title: "Sophie & Alex",
      location: "Beach Ceremony",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop",
      likes: 134
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-wedding-text mb-6 leading-tight">
            Our Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-wedding-text-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover the magic we create for couples around the world
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="default" size="sm">All</Button>
            <Button variant="ghost" size="sm">Portraits</Button>
            <Button variant="ghost" size="sm">Ceremonies</Button>
            <Button variant="ghost" size="sm">Receptions</Button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-card hover-lift group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="icon" variant="elegant" className="rounded-full">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-wedding-gold text-white text-xs font-medium rounded-full">
                    Photo
                  </span>
                </div>

                {/* Likes */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Heart className="h-3 w-3 text-white fill-white" />
                  <span className="text-white text-xs">{item.likes}</span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-heading font-semibold text-wedding-text mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-wedding-text-light text-xs sm:text-sm leading-relaxed">
                  {item.location}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="default" size="lg">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;