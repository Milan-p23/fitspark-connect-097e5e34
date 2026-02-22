import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, Mail, MapPin, CheckCircle, Dumbbell } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCityBySlug } from "@/data/cityData";
import { ALL_SERVICES } from "@/data/serviceData";

const CityAreaPage = () => {
  const { city } = useParams<{ city: string }>();
  const cityData = city ? getCityBySlug(city) : undefined;

  if (!cityData) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-grow flex items-center justify-center px-4 pt-36">
          <Card className="max-w-lg text-center bg-card border-border p-8">
            <CardContent>
              <h1 className="text-3xl font-bold text-foreground mb-4">City Not Found</h1>
              <p className="text-muted-foreground mb-6">
                We couldn't find information for that location. Please check our service areas.
              </p>
              <Link to="/service-area">
                <Button className="btn-primary">View All Service Areas</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const metaTitle = `Gym Equipment Repair in ${cityData.name} | Gold Fitness Repair`;
  const metaDescription = `Professional gym equipment repair in ${cityData.name} & Toronto GTA. Treadmills, ellipticals, bikes, and more. Fast service. Call (647) 712-0809.`;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://www.goldfitnessrepair.ca/service-area/${cityData.slug}`} />
        <meta property="og:url" content={`https://www.goldfitnessrepair.ca/service-area/${cityData.slug}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-36 md:pt-40 pb-20 px-4 bg-section-dark">
          <div className="container mx-auto text-center">
            <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up">
              Gym Equipment Repair in {cityData.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up">
              {cityData.shortIntro}
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

        {/* Services Available Section */}
        <section className="py-20 px-4 bg-section-soft">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-12">Services Available in {cityData.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {ALL_SERVICES.map((service) => (
                <Link key={service.slug} to={`/${service.slug}`}>
                  <Card className="card-hover h-full bg-card border-border hover:border-primary transition-colors">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Dumbbell className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm">
                        Professional {service.name.toLowerCase()} in {cityData.name}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-20 px-4 bg-section-dark">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-12">Neighborhoods We Serve in {cityData.name}</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {cityData.neighborhoods.map((neighborhood, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card rounded-full text-foreground font-medium border border-border"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="py-20 px-4 bg-section-light">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#111111]">
              Common Issues We Fix in {cityData.name}
            </h2>
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cityData.commonRepairs.map((repair, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#111111]">{repair}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-section-soft">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-heading text-center mb-12">Frequently Asked Questions - {cityData.name}</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {cityData.localFaqs.map((faq, index) => (
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
              Need Fitness Equipment Repair in {cityData.name}?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Book your service today. Fast, reliable gym equipment repair across {cityData.name} and the GTA.
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

export default CityAreaPage;
