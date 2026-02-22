import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/Gemini_Generated_Image_cj9bzscj9bzscj9b.png" 
              alt="Haritech Automation Logo" 
              className="h-10 w-auto"
             />
            <div>
              <span className="font-heading font-bold text-lg text-primary-foreground leading-none block">
                Haritech
              </span>
              <span className="text-xs text-steel-light tracking-wider uppercase">Automation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-steel-light hover:text-primary-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+914709150965" className="flex items-center gap-2 text-steel-light hover:text-primary-foreground transition-colors text-sm">
              <Phone className="w-4 h-4" />
              <span>+91 470 915 0965</span>
            </a>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity font-heading font-semibold">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-steel/20"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "text-accent bg-navy-light"
                      : "text-steel-light hover:text-primary-foreground hover:bg-navy-light"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="mt-2">
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-heading font-semibold">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
