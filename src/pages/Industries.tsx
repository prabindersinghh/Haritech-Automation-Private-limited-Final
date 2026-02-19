import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Factory, Droplets, Car, Truck, UtensilsCrossed, Zap, Fuel, Package } from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing", description: "We transform manufacturing processes through strategic automation — from discrete parts assembly to continuous process control. Our solutions encompass robotic integration, quality inspection systems, production line automation, and MES connectivity." },
  { icon: Droplets, name: "Water & Wastewater", description: "Reliable lift station controls, treatment plant SCADA systems, and remote monitoring platforms that ensure safe, compliant water management. We specialize in pump control, chemical dosing automation, and regulatory reporting." },
  { icon: Car, name: "Automotive", description: "Assembly line control systems, paint booth automation, quality testing equipment, and vision inspection systems. Our solutions help automotive manufacturers achieve higher throughput with consistent quality standards." },
  { icon: Truck, name: "Logistics & Warehousing", description: "Warehouse control systems, conveyor automation, sortation systems, and inventory tracking solutions that optimize supply chain operations and reduce fulfillment times." },
  { icon: UtensilsCrossed, name: "Food & Beverage", description: "Hygienic process automation for batch management, recipe control, CIP systems, and packaging lines. We help F&B companies meet stringent safety standards while scaling production capacity." },
  { icon: Zap, name: "Power & Energy", description: "Grid management systems, renewable energy integration, substation automation, and plant-wide DCS solutions. Our controls help energy producers optimize generation and distribution efficiency." },
  { icon: Fuel, name: "Oil & Gas", description: "Turnkey automation for upstream, midstream, and downstream operations — including wellhead monitoring, pipeline SCADA, compressor controls, and refinery process optimization." },
  { icon: Package, name: "Aggregate & Mining", description: "Crushing, screening, and material handling automation with integrated weighing, batching, and loadout systems. Rugged control solutions built for harsh operating environments." },
];

const Industries = () => (
  <main>
    <Navbar />
    <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-accent text-xs font-heading font-semibold tracking-widest uppercase mb-4 block">Industries</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Deep Expertise Across<br />Key Sectors
          </h1>
          <p className="text-steel-light max-w-2xl text-lg leading-relaxed">
            Every industry has unique operational demands. We bring specialized knowledge and proven solutions tailored to each sector's critical requirements.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  <ind.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-3">{ind.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </main>
);

export default Industries;
