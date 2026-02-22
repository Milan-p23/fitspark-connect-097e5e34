import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, Mail, CheckCircle, Wrench, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ServiceData } from "@/data/serviceData";
import { CITY_DATA } from "@/data/cityData";

interface ServiceLandingPageTemplateProps {
  service: ServiceData;
}

const ServiceLandingPageTemplate = ({ service }: ServiceLandingPageTemplateProps) => {
  const cities = Object.values(CITY_DATA).slice(0, 8);

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://www.goldfitnessrepair.ca/${service.slug}`} />
        <meta property="og:url" content={`https://www.goldfitnessrepair.ca/${service.slug}`} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-36 md:pt-40 pb-20 px-4 bg-section-dark">
          <div className="container mx-auto text-center">
            <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up">
              {service.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up">
              {service.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <a href="tel:+16477120809">
                <Button className="btn-primary text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (647) 712-0809
                </Button>
              </a>
              <Link to="/book">
                <Button className="btn-secondary text-lg px-8 py-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Common Problems Section */}
        <section className="py-20 px-4 bg-section-soft">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-12">Common Problems We Fix</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {service.commonProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-section-dark">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-12">How Our Repair Process Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {service.repairSteps.map((step, index) => (
                <Card key={index} className="card-hover bg-card border-border text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <CardTitle className="text-2xl text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
      {/* Brands Section */}
<section className="py-14 px-4 bg-section-light">
  <div className="container mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#111111]">
      Brands We Service
    </h2>

    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-8">
      {service.brands.map((brand, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-white rounded-full text-[#111111] font-medium shadow-sm border border-gray-200"
        >
          {brand}
        </span>
      ))}
    </div>

   <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto font-semibold">
  And many more. We service all major fitness equipment brands and models, for both residential and commercial gyms.
</p>

  </div>
</section>


        {/* Preventative Tips Section */}
        <section className="py-20 px-4 bg-section-soft">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-heading text-center mb-12">Preventative Maintenance Tips</h2>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.preventativeTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Wrench className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-20 px-4 bg-section-dark">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-8">Areas We Serve</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We provide {service.name.toLowerCase()} services throughout Toronto and the Greater Toronto Area.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-area/${city.slug}`}
                  className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-colors"
                >
                  <MapPin className="text-primary flex-shrink-0" size={18} />
                  <span className="text-foreground font-medium">{city.name}</span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/service-area">
                <Button className="btn-secondary">View All Service Areas</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-section-soft">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Get Your {service.shortName} Fixed?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Book your service today and get back to your workouts. Fast, reliable {service.name.toLowerCase()} in Toronto & GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+16477120809">
                <Button className="bg-[#111111] text-foreground hover:bg-[#1A1A1A] text-lg px-10 py-6 font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (647) 712-0809
                </Button>
              </a>
              <Link to="/book">
                <Button className="bg-[#111111] text-foreground hover:bg-[#1A1A1A] text-lg px-10 py-6 font-bold">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServiceLandingPageTemplate;
