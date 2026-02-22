import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Star } from "lucide-react";

const SERVICE_CITIES = [
  { name: "North York", slug: "north-york" },
  { name: "Etobicoke", slug: "etobicoke" },
  { name: "Scarborough", slug: "scarborough" },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Brampton", slug: "brampton" },
  { name: "Oakville", slug: "oakville" },
  { name: "Burlington", slug: "burlington" },
  { name: "Milton", slug: "milton" },
  { name: "Richmond Hill", slug: "richmond-hill" },
  { name: "Georgetown", slug: "georgetown" },
];

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Gold Fitness Repair</h3>
            <p className="text-muted-foreground mb-4">
              Fast, reliable fitness equipment repair. We keep your home gym running smoothly.
            </p>

            <a
              className="text-muted-foreground hover:text-primary transition-colors block mb-4"
              href="https://www.google.com/maps?q=35+Jansusie+Road,+Etobicoke,+M9W+4V4"
              target="_blank"
              rel="noopener noreferrer"
            >
              35 Jansusie Road<br />
              Etobicoke<br />
              M9W 4V4
            </a>

            <a
              href="tel:+16477120809"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold text-lg mb-3"
            >
              <Phone size={20} />
              (647) 712-0809
            </a>

            <a
              href="https://share.google/6nfNpGKF2E2sAgEXz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <Star size={18} className="fill-primary" />
              See our Google Reviews
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/service-area" className="text-muted-foreground hover:text-primary transition-colors">
                  Service Area
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas (NEW) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Service Areas</h4>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {SERVICE_CITIES.slice(0, 10).map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/service-area/${city.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Link
                to="/service-area"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                View all service areas →
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-muted-foreground">
                  Greater Toronto Area & Surrounding Regions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                <a
                  href="tel:+16477120809"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (647) 712-0809
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                <a
                  href="mailto:goldfitnessrepair@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  goldfitnessrepair@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gold Fitness Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
