import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automation.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-navy section-shell">
    {/* Background image */}
    <div className="absolute inset-0">
      <img 
        src={heroImage} 
        alt="Industrial automation facility" 
        className="w-full h-full object-cover opacity-40"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
      <div className="absolute inset-0 bg-grid-pattern-dark" />
      <div className="pointer-events-none absolute -top-40 -left-24 w-80 h-80 bg-primary/30 opacity-40 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-56 right-0 w-96 h-96 bg-accent/25 opacity-40 blur-3xl rounded-full" />
    </div>

    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-40 pb-20 section-shell-inner">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-accent text-xs font-heading font-semibold tracking-wider uppercase mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Industrial Automation Excellence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-4 sm:mb-6 tracking-tight"
        >
          Engineering the Future of{" "}
          <span className="text-gradient">Smart Automation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-steel-light/90 max-w-xl mb-8 sm:mb-10 leading-relaxed"
        >
          From PLC programming to full-scale SCADA integration, Haritech Automation delivers precision-engineered control systems that maximize uptime, efficiency, and profitability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto btn-primary-hero font-heading font-semibold gap-2 px-6 sm:px-8">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/services" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-steel-light/40 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10 hover:text-primary-foreground font-heading font-semibold gap-2 px-6 sm:px-8">
              <Play className="w-4 h-4" />
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
