import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Factory, Droplets, Car, Truck, UtensilsCrossed, Zap, Fuel, Package } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Section from "./Section";

const industries = [
  { icon: Factory, name: "Manufacturing", description: "Smart factory automation and process optimization" },
  { icon: Droplets, name: "Water & Wastewater", description: "Pump control and treatment plant automation" },
  { icon: Car, name: "Automotive", description: "Assembly line controls and quality systems" },
  { icon: Truck, name: "Logistics", description: "Warehouse automation and conveyor systems" },
  { icon: UtensilsCrossed, name: "Food & Beverage", description: "Hygienic process control and batch management" },
  { icon: Zap, name: "Power & Energy", description: "Grid management and renewable integration" },
  { icon: Fuel, name: "Oil & Gas", description: "Upstream, midstream, and downstream solutions" },
  { icon: Package, name: "Aggregate & Mining", description: "Crushing, screening, and material handling" },
];

const IndustriesPreview = () => (
  <Section variant="dark" padding="xl">
    <SectionHeading
      label="Industries We Serve"
      title="Tailored Solutions Across Sectors"
      description="Deep domain expertise across eight core industries, delivering specialized automation that addresses unique operational challenges."
      light
    />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {industries.map((ind, i) => (
        <motion.div
          key={ind.name}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <Link
            to="/industries"
            className="group block p-4 md:p-6 rounded-xl bg-navy-light/50 border border-steel/10 hover:border-accent/30 hover:bg-navy-light hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 text-center"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:from-primary group-hover:to-accent group-hover:scale-110 transition-all duration-300">
              <ind.icon className="w-4 h-4 md:w-5 md:h-5 text-accent group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-semibold text-xs md:text-sm text-primary-foreground mb-1">{ind.name}</h3>
            <p className="text-xs text-steel-light leading-relaxed">{ind.description}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default IndustriesPreview;
