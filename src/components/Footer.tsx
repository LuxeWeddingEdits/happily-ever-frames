import { Heart, Instagram, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wedding-text text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-heading font-bold mb-4 hero-gradient bg-clip-text text-transparent">
              LensLove
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              We're passionate about preserving your most precious moments through expert photo editing. Every love story deserves to be told beautifully.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-wedding-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-wedding-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-wedding-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-wedding-gold transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Photo Editing</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Color Correction</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Retouching</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Cinematic Videos</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-wedding-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-wedding-gold fill-wedding-gold" /> for couples in love
          </p>
          <p className="mt-2">© 2024 LensLove. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;