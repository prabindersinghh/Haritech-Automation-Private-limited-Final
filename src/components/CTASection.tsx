import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy to-navy-light p-8 md:p-12 lg:p-16 text-center shadow-xl"
      >
        <div className="absolute inset-0 bg-grid-pattern-dark" />
        <div className="relative">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-steel-light max-w-xl mx-auto mb-6 md:mb-8 text-sm sm:text-base">
            Partner with Haritech Automation to transform your facility with cutting-edge control systems engineered for performance.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 font-heading font-semibold gap-2 px-6 sm:px-8">
                Request a Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+914709150965" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-steel-light/40 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10 hover:text-primary-foreground font-heading font-semibold px-6 sm:px-8">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
