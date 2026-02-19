import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Facebook, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-steel-light relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-50" />
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-heading font-bold text-lg">H</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-primary-foreground leading-none block">Haritech</span>
                <span className="text-xs tracking-wider uppercase text-steel-light">Automation</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-steel-light">
              Delivering precision-engineered automation solutions that drive operational excellence across industries.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25" 
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-primary-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Industries", path: "/industries" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-primary-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Control Panel Design", "PLC Programming", "SCADA Integration", "Field Services", "System Migration"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm hover:text-accent transition-colors inline-block hover:translate-x-1 transition-transform duration-300">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-primary-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-steel-light">Haritech Automation Pvt. Ltd., India</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+914709150965" className="text-sm hover:text-accent transition-colors">+91 470 915 0965</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@haritechautomation.com" className="text-sm hover:text-accent transition-colors break-all">info@haritechautomation.com</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="border-t border-steel/10 relative">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-light">© 2026 Haritech Automation Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="text-xs hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-xs hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
