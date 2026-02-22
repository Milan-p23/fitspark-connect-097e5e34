import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronRight, Wrench, Clock, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CITY_DATA } from "@/data/cityData";

const ServiceArea = () => {
  const cities = Object.values(CITY_DATA).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const topCitiesText =
    "Etobicoke, North York, Scarborough, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, and more.";

  return (
    <>
      <Helmet>
        <title>Service Area | Gold Fitness Repair</title>
        <meta
          name="description"
          content="Gold Fitness Repair provides on-site fitness equipment repair across Toronto & the GTA. We service treadmills, ellipticals, bikes, rowers, and home gyms in Etobicoke, North York, Scarborough, Mississauga, Brampton, Vaughan, Markham, and more."
        />
        <link
          rel="canonical"
          href="https://www.goldfitnessrepair.ca/service-area"
        />
        <meta
          property="og:url"
          content="https://www.goldfitnessrepair.ca/service-area"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        <main className="pt-36 md:pt-40 pb-20 px-4 flex-grow bg-section-dark">
          <div className="container mx-auto">
            {/* HERO */}
            <header className="text-center mb-14">
              <h1 className="section-heading mb-6">
                Fitness Equipment Repair Service Area
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide on-site treadmill, elliptical, bike, rower, and home
                gym repair across Toronto, the GTA, and surrounding regions.
              </p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-4">
                Popular areas we service include {topCitiesText}
              </p>
            </header>

            {/* HOW IT WORKS / VALUE */}
            <Card className="max-w-5xl mx-auto mb-10 bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-10 h-10 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    How Our Service Area Works
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="rounded-xl border border-border bg-muted/30 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench className="text-primary" size={20} />
                      <h3 className="font-semibold text-foreground">
                        We come to you
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mobile repair service for homes, condos, and small gyms —
                      no need to move heavy equipment.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-muted/30 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="text-primary" size={20} />
                      <h3 className="font-semibold text-foreground">
                        Fast scheduling
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Same-day or next-day availability in many GTA areas,
                      depending on demand and distance.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-muted/30 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="text-primary" size={20} />
                      <h3 className="font-semibold text-foreground">
                        Transparent pricing
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Clear quotes and honest recommendations — no pressure, no
                      unnecessary replacements.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-border bg-muted/20 p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Repairs available in all locations
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    No matter which city you’re in, we support common equipment
                    issues like belt slips, motor errors, console problems,
                    squeaks, calibration, and maintenance.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/services"
                      className="text-primary hover:text-accent transition-colors font-medium"
                    >
                      View all services →
                    </Link>
                    <span className="text-muted-foreground">•</span>
                    <Link
                      to="/pricing"
                      className="text-primary hover:text-accent transition-colors font-medium"
                    >
                      See pricing →
                    </Link>
                    <span className="text-muted-foreground">•</span>
                    <Link
                      to="/book"
                      className="text-primary hover:text-accent transition-colors font-medium"
                    >
                      Book a repair →
                    </Link>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4">
                    Service availability may vary by distance. Travel fees may
                    apply for areas outside our core GTA coverage — we’ll always
                    confirm before booking.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FEATURED CITIES */}
            {(() => {
              const featured = Object.values(CITY_DATA).filter(c => c.featuredBlurb);
              if (featured.length === 0) return null;
              return (
                <Card className="max-w-5xl mx-auto mb-10 bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                      Featured Service Areas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {featured.map(city => (
                        <Link
                          key={city.slug}
                          to={`/service-area/${city.slug}`}
                          className="block p-5 rounded-xl border border-border bg-muted/30 hover:bg-primary/10 hover:border-primary transition-colors group"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="text-primary" size={20} />
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {city.name}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground">{city.featuredBlurb}</p>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })()}

            {/* CITY LIST */}
            <Card className="max-w-5xl mx-auto mb-10 bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-10 h-10 text-primary" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Cities We Serve
                    </h2>
                    <p className="text-muted-foreground mt-1">
                      Choose your city to see local coverage details. If your
                      area isn’t listed, contact us — we’re expanding.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/service-area/${city.slug}`}
                      className="flex items-center justify-between gap-3 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-colors group"
                      aria-label={`Service area: ${city.name}`}
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="text-primary flex-shrink-0" size={20} />
                        <span className="font-medium text-foreground">
                          {city.name}
                        </span>
                      </div>
                      <ChevronRight
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                        size={20}
                      />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ (SEO BOOST) */}
            <Card className="max-w-5xl mx-auto mb-10 bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Service Area FAQs
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Do you service areas outside Toronto and the GTA?
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Yes. We often service nearby regions depending on
                      distance and scheduling. If your city isn’t listed, reach
                      out and we’ll confirm availability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Do you charge a travel fee?
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Travel fees may apply for locations outside our core GTA
                      coverage. We confirm any fees up front before booking.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Is this on-site repair, or do I need to bring the machine?
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      It’s on-site. We come to your home or facility, diagnose
                      the issue, and complete the repair whenever possible on
                      the first visit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="max-w-5xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Not Sure If We Cover Your Neighborhood?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Send us your postal code and the equipment type — we’ll
                  confirm availability and the soonest appointment options.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link to="/contact">
                    <Button className="btn-primary">Contact Us</Button>
                  </Link>
                  <Link to="/book">
                    <Button variant="outline">Book Service</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServiceArea;
