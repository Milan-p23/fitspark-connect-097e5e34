import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Phone, Calendar, Mail, MapPin, CheckCircle, Dumbbell, BookOpen, Wrench, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCityBySlug, CITY_DATA, CityData } from "@/data/cityData";
import { ALL_SERVICES } from "@/data/serviceData";

function buildCityJsonLd(cityData: CityData) {
  const baseUrl = "https://www.goldfitnessrepair.ca";
  const cityUrl = `${baseUrl}/service-area/${cityData.slug}`;

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Service Area", "item": `${baseUrl}/service-area` },
      { "@type": "ListItem", "position": 3, "name": cityData.name, "item": cityUrl }
    ]
  };

  const service = {
    "@type": "Service",
    "serviceType": "Fitness Equipment Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Gold Fitness Repair",
      "telephone": "+1-647-712-0809",
      "url": baseUrl,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Etobicoke",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": cityData.name,
      "addressRegion": "ON",
      "addressCountry": "CA"
    }
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "name": "Gold Fitness Repair",
    "telephone": "+1-647-712-0809",
    "url": baseUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Etobicoke",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "areaServed": {
      "@type": "City",
      "name": cityData.name
    }
  };

  const graph: any[] = [breadcrumb, service, localBusiness];

  const faqEnabled = cityData.faqSchemaEnabled !== false;
  if (faqEnabled && cityData.localFaqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": cityData.localFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a }
      }))
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

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

  const seoTitle = cityData.seoTitle || `Gym Equipment Repair in ${cityData.name} | Gold Fitness Repair`;
  const seoDescription = cityData.seoDescription || `Professional gym equipment repair in ${cityData.name} & Toronto GTA. Treadmills, ellipticals, bikes, and more. Fast service. Call (647) 712-0809.`;
  const canonicalUrl = `https://www.goldfitnessrepair.ca/service-area/${cityData.slug}`;
  const jsonLd = buildCityJsonLd(cityData);

  const neighborhoodsTitle = cityData.headingVariants?.neighborhoodsTitle || `Neighborhoods We Serve in ${cityData.name}`;
  const issuesTitle = cityData.headingVariants?.issuesTitle || `Common Issues We Fix in ${cityData.name}`;
  const faqTitle = cityData.headingVariants?.faqTitle || `Frequently Asked Questions - ${cityData.name}`;

  const nearbyCityData = (cityData.nearbyCities || [])
    .map(slug => CITY_DATA[slug])
    .filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        {/* Breadcrumb */}
        <div className="container mx-auto pt-28 md:pt-32 px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/service-area">Service Area</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{cityData.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="relative pt-6 md:pt-8 pb-20 px-4 bg-section-dark">
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

        {/* Local Overview Section (longIntro + localServiceNotes + serviceScenarios) */}
        {(cityData.longIntro || cityData.localServiceNotes || cityData.serviceScenarios) && (
          <section className="py-20 px-4 bg-section-soft">
            <div className="container mx-auto max-w-4xl">
              {/* Long intro paragraphs */}
              {cityData.longIntro && cityData.longIntro.length > 0 && (
                <div className="mb-12">
                  <h2 className="section-heading text-center mb-8">About Our Service in {cityData.name}</h2>
                  <div className="space-y-4">
                    {cityData.longIntro.map((para, i) => (
                      <p key={i} className="text-muted-foreground text-lg leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Local service notes */}
              {cityData.localServiceNotes && cityData.localServiceNotes.length > 0 && (
                <Card className="bg-card border-border mb-12">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <BookOpen className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">What to Know About Service in {cityData.name}</h3>
                    </div>
                    <ul className="space-y-3">
                      {cityData.localServiceNotes.map((note, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                          <span className="text-muted-foreground">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Service scenarios */}
              {cityData.serviceScenarios && cityData.serviceScenarios.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-foreground text-center mb-8">Real Repair Scenarios in {cityData.name}</h3>
                  <div className="space-y-6">
                    {cityData.serviceScenarios.map((scenario, i) => (
                      <Card key={i} className="bg-card border-border">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3 mb-3">
                            <Wrench className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <h4 className="text-lg font-semibold text-foreground">{scenario.title}</h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed pl-8">{scenario.body}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Services Available Section */}
        <section className="py-20 px-4 bg-section-dark">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-12">Services Available in {cityData.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {ALL_SERVICES.map((service) => {
                const tagline = cityData.serviceTaglines?.[service.slug]
                  || `Professional ${service.name.toLowerCase()} in ${cityData.name}`;
                return (
                  <Link key={service.slug} to={`/${service.slug}`}>
                    <Card className="card-hover h-full bg-card border-border hover:border-primary transition-colors">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <Dumbbell className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-foreground">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-muted-foreground text-sm">{tagline}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-20 px-4 bg-section-soft">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-12">{neighborhoodsTitle}</h2>
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
        <section className="py-20 px-4 bg-section-dark">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-heading text-center mb-12">{issuesTitle}</h2>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cityData.commonRepairs.map((repair, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-foreground">{repair}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Brands & Compatibility Section */}
        {cityData.brandNotes && (
          <section className="py-20 px-4 bg-section-soft">
            <div className="container mx-auto max-w-4xl">
              <h2 className="section-heading text-center mb-8">Brands & Equipment We Service in {cityData.name}</h2>
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{cityData.brandNotes}</p>
                  <p className="text-muted-foreground">
                    We service all major fitness equipment brands including <strong className="text-foreground">NordicTrack, ProForm, Life Fitness, Precor, Bowflex, Sole, Peloton, Schwinn, Horizon, Technogym, Concept2,</strong> and many more — regardless of where you purchased the equipment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-section-dark">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-heading text-center mb-12">{faqTitle}</h2>
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

        {/* Nearby Areas Section */}
        {nearbyCityData.length > 0 && (
          <section className="py-20 px-4 bg-section-soft">
            <div className="container mx-auto max-w-4xl">
              <h2 className="section-heading text-center mb-8">Also Serving Nearby Areas</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                In addition to {cityData.name}, we provide the same professional fitness equipment repair in these nearby cities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {nearbyCityData.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    to={`/service-area/${nearby.slug}`}
                    className="flex items-center justify-between gap-3 p-4 bg-card rounded-lg hover:bg-primary/10 hover:border-primary border border-border transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="text-primary flex-shrink-0" size={18} />
                      <span className="font-medium text-foreground">{nearby.name}</span>
                    </div>
                    <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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
