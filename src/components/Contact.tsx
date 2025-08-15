import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 elegant-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-wedding-text mb-6">
              Let's Create Magic Together
            </h2>
            <p className="text-xl text-wedding-text-light mb-8">
              Ready to transform your wedding memories? Get in touch and let's discuss how we can make your photos and videos extraordinary.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-wedding-gold rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-wedding-text">Email Us</div>
                  <div className="text-wedding-text-light">hello@lenslove.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-wedding-gold rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-wedding-text">Call Us</div>
                  <div className="text-wedding-text-light">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-wedding-gold rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-wedding-text">Visit Us</div>
                  <div className="text-wedding-text-light">123 Creative Street, Studio City, CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-card">
            <h3 className="text-2xl font-heading font-semibold text-wedding-text mb-6">
              Get Your Free Quote
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-wedding-text mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-wedding-text mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-wedding-text mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-wedding-text mb-2 block">
                  Wedding Date
                </label>
                <Input type="date" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-wedding-text mb-2 block">
                  Service Needed
                </label>
                <select className="w-full p-3 border border-input rounded-md bg-background text-wedding-text">
                  <option>Photo Editing</option>
                  <option>Video Editing</option>
                  <option>Both Photo & Video</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-wedding-text mb-2 block">
                  Tell us about your project
                </label>
                <Textarea 
                  placeholder="Describe your vision, style preferences, and any special requirements..."
                  rows={4}
                />
              </div>
              
              <Button variant="default" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;