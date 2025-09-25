import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, Loader as Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  weddingDate: z.string().optional(),
  serviceNeeded: z.string().min(1, "Please select a service"),
  projectDescription: z.string().optional()
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      weddingDate: "",
      serviceNeeded: "Photo Editing",
      projectDescription: ""
    }
  })

  const handleSubmit = async (data: ContactFormData) => {
    setLoading(true)
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          wedding_date: data.weddingDate || null,
          service_needed: data.serviceNeeded,
          project_description: data.projectDescription || null,
          user_id: user?.id || null
        })
      
      if (error) {
        toast.error("Failed to submit your request. Please try again.")
        console.error("Submission error:", error)
      } else {
        toast.success("Your quote request has been submitted successfully! We'll get back to you soon.")
        form.reset()
        
        // Send admin notification
        try {
          await supabase.functions.invoke('notify-admin', {
            body: {
              type: 'contact_submission',
              data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                weddingDate: data.weddingDate,
                serviceNeeded: data.serviceNeeded,
                projectDescription: data.projectDescription
              }
            }
          })
        } catch (notifyError) {
          console.log("Admin notification failed:", notifyError)
          // Don't show error to user as main submission was successful
        }
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.")
      console.error("Unexpected error:", err)
    }
    
    setLoading(false)
  }

  return (
    <section className="py-20 elegant-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-wedding-text mb-6 leading-tight">
              Let's Create Magic Together
            </h2>
            <p className="text-lg sm:text-xl text-wedding-text-light mb-8 leading-relaxed">
              Ready to transform your wedding memories? Get in touch and let's discuss how we can make your photos extraordinary.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-wedding-gold rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-wedding-text text-sm sm:text-base">Email Us</div>
                  <div className="text-wedding-text-light text-sm sm:text-base">hello@luxeweddingedits.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-wedding-gold rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-wedding-text text-sm sm:text-base">Call Us</div>
                  <div className="text-wedding-text-light text-sm sm:text-base">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-wedding-gold rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-wedding-text text-sm sm:text-base">Visit Us</div>
                  <div className="text-wedding-text-light text-sm sm:text-base">123 Creative Street, Studio City, CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-card">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-wedding-text mb-6 leading-tight">
              Get Your Free Quote
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-wedding-text">
                          First Name *
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-wedding-text">
                          Last Name *
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-wedding-text">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="weddingDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-wedding-text">
                        Wedding Date
                      </FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="serviceNeeded"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-wedding-text">
                        Service Needed *
                      </FormLabel>
                      <FormControl>
                        <select 
                          className="w-full p-3 border border-input rounded-md bg-background text-wedding-text"
                          {...field}
                        >
                          <option value="Photo Editing">Photo Editing</option>
                          <option value="Portrait Enhancement">Portrait Enhancement</option>
                          <option value="Artistic Effects">Artistic Effects</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-wedding-text">
                        Tell us about your project
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your vision, style preferences, and any special requirements..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" variant="default" size="lg" className="w-full group" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;