import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Wrench,
  Shield,
  Package,
  CheckCircle,
  Mail,
  MessageSquare,
  Loader2,
  AlertCircle,
  Phone,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

// Backend API URL - change this to your backend URL
const API_URL = "https://gymharrybackend.onrender.com/api/send-email";

const Home = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  // Load Elfsight script (Google Reviews widget)
  useEffect(() => {
    const ELFSIGHT_SRC = "https://elfsightcdn.com/platform.js";

    // If already loaded, don't load again
    const alreadyLoaded = document.querySelector(
      `script[src="${ELFSIGHT_SRC}"]`
    );
    if (alreadyLoaded) return;

    const script = document.createElement("script");
    script.src = ELFSIGHT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Do not remove on unmount (prevents widget breaking on route changes)
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        toast({
          title: "Message Sent Successfully! ✓",
          description: "We'll get back to you as soon as possible.",
        });

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", message: "" });
          setSubmitStatus("idle");
        }, 3000);
      } else {
        throw new Error(data.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      toast({
        title: "Failed to Send Message",
        description:
          error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const services = [
    {
      icon: Wrench,
      title: "Repairs",
      description:
        "We troubleshoot and fix belt slippage, motor malfunctions, noisy operation, power failures, speed inconsistencies, and electronic console errors.",
    },
    {
      icon: Shield,
      title: "Preventative Maintenance",
      description:
        "Regular maintenance extends equipment lifespan. Includes multi-point inspection, cleaning, lubrication, alignment, torque checks, and firmware updates.",
    },
    {
      icon: Package,
      title: "Assembly & Disassembly",
      description:
        "Professional assembly for new equipment and safe relocation services including disassembly, transport, and reassembly with full testing.",
    },
  ];

  const features = [
    "Transparent pricing - no hidden fees",
    "Expert, friendly technicians",
    "Service most major brands",
    "Fast, reliable service",
    "Complete health reports",
    "Maximum 2-visit guarantee for repairs",
  ];

  return (
    <>
      <Helmet>
        <title>
          Gold Fitness Repair | Professional Gym Equipment Repair Toronto & GTA
        </title>
        <meta
          name="description"
          content="Professional gym equipment repair in Toronto & the GTA. We service treadmills, ellipticals, bikes, and weight machines. Fast on-site service. Call (647) 712-0809."
        />
        <link rel="canonical" href="https://www.goldfitnessrepair.ca/" />
        <meta property="og:url" content="https://www.goldfitnessrepair.ca/" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-36 md:pt-40 pb-20 px-4 bg-section-dark">
          <div className="container mx-auto text-center">
            <h1 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-up">
              Fast, reliable treadmill & gym equipment repair.
            </h1>
         <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up">
  Transparent pricing. Certified technicians. Reliable results. Complete fitness equipment service including repairs, preventative maintenance, and professional assembly & disassembly for treadmills, ellipticals, bikes, rowers, and more.
</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <Link to="/book">
                <Button className="btn-primary text-lg px-10 py-6">
                  Book a Service
                </Button>
              </Link>
              <Link to="/services">
                <Button className="btn-secondary text-lg px-10 py-6">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="py-16 px-4 bg-section-soft relative">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-primary fill-primary"
                    />
                  ))}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Rated 5.00 on Google
              </h2>
              <p className="text-muted-foreground">
                See what our customers are saying
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Elfsight Google Reviews */}
              <div className="min-h-[400px] relative">
                <div
                  className="elfsight-app-39e64343-81c1-466c-a0e3-0557237ddc66"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-section-dark">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-hover border-border bg-card">
                  <CardContent className="p-8">
                    <service.icon
                      className="w-16 h-16 text-primary mb-6"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Light Section */}
        <section className="py-20 px-4 bg-section-light">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-[#111111]">
              Why Choose Gold Fitness Repair?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-accent flex-shrink-0 mt-1"
                    size={24}
                  />
                  <p className="text-lg text-[#111111]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 bg-section-soft">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="section-heading mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Have questions? Send us a message and we'll get back to you soon.
              </p>

              {/* Phone number CTA */}
              <a
                href="tel:+16477120809"
                className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors mb-6"
              >
                <Phone className="w-6 h-6" />
                Call us: (647) 712-0809
              </a>
            </div>

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
                    <Label htmlFor="name" className="text-foreground">
                      Name *
                    </Label>
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
                    <Label htmlFor="email" className="text-foreground">
                      Email *
                    </Label>
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
                    <Label htmlFor="phone" className="text-foreground">
                      Phone
                    </Label>
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
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
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
                    ) : submitStatus === "success" ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
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
                  {submitStatus === "success" && (
                    <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <CheckCircle
                        className="text-green-400 mt-0.5 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="font-semibold text-green-300">
                          Success!
                        </p>
                        <p className="text-sm text-green-400">
                          Your message has been sent successfully. We'll get
                          back to you soon!
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 flex items-start gap-3 animate-in fade-in-from-top-2 duration-300">
                      <AlertCircle
                        className="text-red-400 mt-0.5 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="font-semibold text-red-300">Error</p>
                        <p className="text-sm text-red-400">
                          Failed to send message. Please try again or contact us
                          directly.
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Get Your Equipment Running?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Book your service today and experience professional fitness
              equipment care.
            </p>
            <Link to="/book">
              <Button className="bg-[#111111] text-foreground hover:bg-[#1A1A1A] text-lg px-10 py-6 font-bold">
                Book Now
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
