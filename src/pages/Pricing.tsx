import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Wrench, Shield, Package, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Helmet } from "react-helmet-async";

const Pricing = () => {
  const pricingPlans = [
    {
      icon: Wrench,
      title: "Repair Service",
      price: "$100",
      subtitle: "First Visit",
      description: "Flat fee includes travel, full diagnostic, and any repairs completed during the first visit  no time limit. If replacement parts are needed, we'll schedule a follow-up to install them and ensure your equipment is fully functional.",
      features: [
        "Travel included",
        "Complete diagnostic",
        "Repairs completed on first visit",
        "Unlimited time for repairs",
        "Second visit: $80-$100 for parts installation",
        "Maximum 2 visits guarantee",
        "Third visit FREE if needed",
      ],
    },
    {
      icon: Shield,
      title: "Maintenance / Tune-up",
      price: "$80",
      subtitle: "Per Visit",
      description: "All-inclusive maintenance service to keep your equipment in top condition with complete peace of mind.",
      features: [
        "Technician travel included",
        "Complete inspection",
        "Internal & external cleaning",
        "Belt & deck lubrication",
        "Adjustments & tune-ups",
        "No hidden costs",
        "Detailed health report",
      ],
    },
    {
      icon: Package,
      title: "Assembly & Disassembly",
      price: "$100",
      subtitle: "Flat Rate",
      description: "Complete assembly or disassembly service with no hidden charges.",
      features: [
        "Technician travel included",
        "Professional assembly",
        "Equipment setup",
        "Adjustments & calibration",
        "Final testing",
        "Safety verification",
        "No hidden fees",
      ],
    },
  ];

  return (
    <>
    <Helmet>
  <title>Pricing | Gold Fitness Repair</title>
  <meta
    name="description"
    content="Transparent pricing for gym equipment repairs in Toronto & the GTA. Get fast, reliable service for treadmills, ellipticals, bikes, and weight machines. Call (647) 712-0809."
  />
  <link rel="canonical" href="https://www.goldfitnessrepair.ca/pricing" />
  <meta property="og:url" content="https://www.goldfitnessrepair.ca/pricing" />
</Helmet>

    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-36 md:pt-40 pb-20 px-4 flex-grow bg-section-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="section-heading mb-6">Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Clear, upfront pricing with no hidden fees. You know exactly what you're paying for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="card-hover border-2 border-border hover:border-primary/50 transition-colors bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-4 bg-primary/20 rounded-lg w-fit mb-4">
                    <plan.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-2xl mb-2 text-foreground">{plan.title}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <p className="text-muted-foreground mt-1">{plan.subtitle}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 min-h-[80px]">
                    {plan.description}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert className="max-w-4xl mx-auto border-primary/40 bg-primary/10">
            <Info className="h-5 w-5 text-primary" />
            <AlertDescription className="ml-2 text-foreground">
              <strong>Our Commitment:</strong> We are committed to getting your equipment fully repaired within a maximum of two visits. In the unlikely event that a third visit is needed, we will return at no additional labor cost to complete the job.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default Pricing;
