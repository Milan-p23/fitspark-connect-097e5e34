import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Book = () => {
  // useEffect(() => {
  //   // Optional: Auto-redirect to WhatsApp after 3 seconds
  //   const timer = setTimeout(() => {
  //     window.location.href = "https://wa.me/16478957967";
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to book a service for my fitness equipment.";
    window.location.href = `https://wa.me/16477120809?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
    <Helmet>
  <title>Book a Repair | Gold Fitness Repair</title>
  <meta
    name="description"
    content="Book a gym equipment repair appointment in Toronto & the GTA. Fast scheduling for treadmill, elliptical, bike, and weight machine repairs. Call (647) 712-0809."
  />
  <link rel="canonical" href="https://www.goldfitnessrepair.ca/book" />
  <meta property="og:url" content="https://www.goldfitnessrepair.ca/book" />
</Helmet>

    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 flex-grow">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="section-heading mb-6">Book Your Service</h1>
            <p className="text-xl text-muted-foreground">
              Get your fitness equipment running smoothly again. Choose how you'd like to connect with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        

            <Card className="card-hover border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
                <p className="text-muted-foreground mb-6">
                  Prefer email? Fill out our contact form and we'll get back to you soon.
                </p>
                <Button 
                  onClick={() => window.location.href = '/contact'} 
                  className="btn-secondary w-full"
                >
                  Contact Form
                </Button>
              </CardContent>
            </Card>

                <Card className="card-hover border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
                <p className="text-muted-foreground mb-6">
                  Fastest way to book! Chat with us directly and schedule your service.
                </p>
                <Button onClick={handleWhatsAppClick} className="btn-primary w-full">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Contact Us</h4>
                  <p className="text-sm text-muted-foreground">
                    Reach out via WhatsApp or contact form
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Schedule Service</h4>
                  <p className="text-sm text-muted-foreground">
                    We'll find a convenient time that works for you
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Get Fixed</h4>
                  <p className="text-sm text-muted-foreground">
                    Our expert tech arrives and gets you running
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default Book;