import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageSquare, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Backend API URL - change this to your backend URL
const API_URL = "https://gymharrybackend.onrender.com/api/send-email";
                

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        toast({
          title: "Message Sent Successfully! ✓",
          description: "We'll get back to you as soon as possible.",
        });
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", message: "" });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error(data.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      toast({
        title: "Failed to Send Message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Helmet>
  <title>Contact | Gold Fitness Repair</title>

  <meta
    name="description"
    content="Contact Gold Fitness Repair for fast, professional gym equipment repair across Toronto & the GTA. Call (647) 712-0809 or send us a message."
  />

  <link rel="canonical" href="https://www.goldfitnessrepair.ca/contact" />
  <meta property="og:url" content="https://www.goldfitnessrepair.ca/contact" />
</Helmet>

    
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-36 md:pt-40 pb-20 px-4 flex-grow bg-section-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="section-heading mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Have questions or ready to book? Get in touch with us today!
            </p>
            
            {/* Phone number CTA */}
            <a 
              href="tel:+16477120809" 
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-primary hover:text-accent transition-colors"
            >
              <Phone className="w-8 h-8" />
              Call us: (647) 712-0809
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-lg bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-foreground">
                  <MessageSquare className="text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="mt-2 bg-input border-border text-foreground"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="mt-2 bg-input border-border text-foreground"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="mt-2 bg-input border-border text-foreground"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your fitness equipment needs..."
                      className="mt-2 min-h-[150px] bg-input border-border text-foreground"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="btn-primary w-full transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <CheckCircle2 className="text-green-400 mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-green-300">Success!</p>
                        <p className="text-sm text-green-400">
                          Your message has been sent successfully. We'll get back to you soon!
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <AlertCircle className="text-red-400 mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-red-300">Error</p>
                        <p className="text-sm text-red-400">
                          Failed to send message. Please try again or contact us directly.
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1 text-foreground">Phone</h4>
                        <a 
                          href="tel:+16477120809" 
                          className="text-primary hover:text-accent transition-colors text-lg font-medium"
                        >
                          (647) 712-0809
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1 text-foreground">Email</h4>
                        <a 
                          href="mailto:goldfitnessrepair@gmail.com" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          goldfitnessrepair@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1 text-foreground">Service Area</h4>
                        <p className="text-muted-foreground">
                          Greater Toronto Area including Toronto, Mississauga, Brampton, Oakville, Burlington, and surrounding regions
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "Fast, reliable service",
                      "Transparent pricing",
                      "Expert technicians",
                      "All major brands serviced",
                      "100% satisfaction guarantee",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default Contact;
