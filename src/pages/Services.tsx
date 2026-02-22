import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Shield, Package, Dumbbell, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CITY_DATA } from "@/data/cityData";

const Services = () => {
  const equipmentTypes = [
    { name: "Treadmill Repair", slug: "treadmill-repair", description: "Belt, motor, incline, and console repairs" },
    { name: "Elliptical Repair", slug: "elliptical-repair", description: "Resistance, noise, and stride issues" },
    { name: "Exercise Bike Repair", slug: "exercise-bike-repair", description: "Pedals, resistance, and console fixes" },
    { name: "Fitness Equipment Repair", slug: "fitness-equipment-repair", description: "Rowers, cables, strength machines" },
  ];

  const services = [
    {
      icon: Wrench,
      title: "Repairs",
      description: "We troubleshoot and fix a wide range of issues, including belt slippage, motor malfunctions, noisy operation, power failures, speed inconsistencies, and electronic console errors. Our technicians are trained to service most major fitness equipment brands, ensuring your machines are safe, reliable, and ready to use.",
      features: [
        "Belt slippage & wear",
        "Motor malfunctions",
        "Noisy operation",
        "Power failures",
        "Speed inconsistencies",
        "Electronic console errors",
        "All major brands serviced",
      ],
    },
    {
      icon: Shield,
      title: "Preventative Maintenance",
      description: "Regular maintenance extends the lifespan of your equipment and helps avoid costly breakdowns. Our maintenance visits include a complete multi-point inspection, cleaning of internal and external components, belt and deck lubrication, roller and belt alignment, torque checks, and firmware updates. We provide a detailed health report with every visit so you know exactly how your machines are performing.",
      features: [
        "Multi-point inspection",
        "Internal & external cleaning",
        "Belt & deck lubrication",
        "Roller & belt alignment",
        "Torque checks",
        "Firmware updates",
        "Detailed health report",
      ],
    },
    {
      icon: Package,
      title: "Assembly & Disassembly",
      description: "Whether you've purchased a brand-new treadmill, elliptical, bike, or weight machine, our team can professionally assemble it for you. We also handle equipment disassembly, ensuring each unit is safely taken apart and properly prepared for maintenance, storage or moving.",
      features: [
        "Professional assembly",
        "Treadmills, ellipticals, bikes",
        "Weight machines & rowers",
        "Equipment relocation",
        "Safe disassembly",
        "Reassembly & testing",
        "Post-setup calibration",
      ],
    },
  ];

  const cities = Object.values(CITY_DATA).slice(0, 8);

  return (
    <>
    <Helmet>
      <title>Services | Gold Fitness Repair</title>
      <meta
        name="description"
        content="Gym equipment repair services across Toronto & the GTA. Treadmill, elliptical, exercise bike, and weight machine repairs by expert technicians. Call (647) 712-0809."
      />
      <link rel="canonical" href="https://www.goldfitnessrepair.ca/services" />
      <meta property="og:url" content="https://www.goldfitnessrepair.ca/services" />
    </Helmet>

    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-36 md:pt-40 pb-20 px-4 flex-grow bg-section-dark">
        <div className="container mx-auto">
          <h1 className="section-heading text-center mb-6">Our Services</h1>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Professional fitness equipment repair, maintenance, and assembly services across the Greater Toronto Area
          </p>

          {/* Repairs by Equipment Type */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Repairs by Equipment Type</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {equipmentTypes.map((equipment) => (
                <Link key={equipment.slug} to={`/${equipment.slug}`}>
                  <Card className="card-hover h-full bg-card border-border hover:border-primary transition-colors">
                    <CardHeader className="text-center pb-2">
                      <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                        <Dumbbell className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-foreground">{equipment.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <p className="text-muted-foreground text-sm">{equipment.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Service Categories */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="card-hover overflow-hidden bg-card border-border">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-primary/20 rounded-lg">
                      <service.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-3xl text-foreground">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Areas Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Service Areas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-area/${city.slug}`}
                  className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-colors"
                >
                  <MapPin className="text-primary flex-shrink-0" size={16} />
                  <span className="text-foreground font-medium text-sm">{city.name}</span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link to="/service-area" className="text-primary hover:text-accent font-medium">
                View all service areas →
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default Services;
