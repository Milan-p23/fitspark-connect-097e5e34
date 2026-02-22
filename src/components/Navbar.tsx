import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Star } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Service Area", path: "/service-area" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#111111]/98 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with phone and Google reviews - visible on desktop */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 border-b border-border/50 text-sm">
          <a
            href="https://share.google/6nfNpGKF2E2sAgEXz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <Star size={16} className="fill-primary" />
            Google Reviews
          </a>
        <div className="flex items-center gap-4">
  <a
    href="tel:+16477120809"
    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
  >
    <Phone size={16} className="text-primary" />
    (647) 712-0809
  </a>

  <a
    href="sms:+16477120809?&body=Hi%20Gold%20Fitness%20Repair,%20I%20would%20like%20to%20book%20a%20service."
    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
  >
   💬Text us
  </a>
</div>

        </div>

        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Gold Fitness Repair"
              className="h-16 md:h-20 lg:h-24 w-auto object-contain"


            />
            <span className="text-xl lg:text-2xl font-bold text-primary hidden sm:inline">
              Gold Fitness Repair
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/book">
              <Button className="btn-primary">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-up">
            {/* Mobile phone and Google links */}
            <div className="flex flex-col gap-3 py-4 mb-4 border-b border-border/50">
              <a
                href="tel:+16477120809"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                <Phone size={18} className="text-primary" />
                (647) 712-0809
              </a>
              <a
                href="https://share.google/6nfNpGKF2E2sAgEXz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                <Star size={18} className="fill-primary" />
                Google Reviews
              </a>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-3 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/book" onClick={() => setIsOpen(false)}>
              <Button className="btn-primary w-full mt-4">Book Now</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
