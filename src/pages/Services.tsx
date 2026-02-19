import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Settings, Cpu, Monitor, Wrench, ArrowUpDown, Wifi, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Control Panel Design & Manufacturing",
    description: "Custom-engineered UL-508A certified electrical control panels designed to meet exact specifications. From single-panel builds to multi-panel lineups, we handle design, fabrication, wiring, and testing under one roof.",
    features: ["UL-508A Certified", "Custom Engineering", "In-House Fabrication", "Full Testing & QA"],
  },
  {
    icon: Cpu,
    title: "PLC Programming & Integration",
    description: "Expert programming across all major PLC platforms including Allen-Bradley, Siemens, Mitsubishi, and Schneider. We develop robust, scalable logic for process control, motion control, and safety systems.",
    features: ["Multi-Platform Expertise", "IoT-Ready Architecture", "Safety System Integration", "Remote Monitoring"],
  },
  {
    icon: Monitor,
    title: "SCADA & HMI Development",
    description: "Industry 4.0 operator interfaces with real-time process visualization, data historization, alarm management, and advanced analytics. BIM-based graphics for intuitive plant-wide monitoring.",
    features: ["Real-Time Visualization", "Data Analytics", "Alarm Management", "Cloud Connectivity"],
  },
  {
    icon: Wrench,
    title: "Field Services & Commissioning",
    description: "Comprehensive on-site services including installation, startup, commissioning, preventive maintenance, and 24/7 emergency support from our experienced field engineering team.",
    features: ["24/7 Support", "Installation & Startup", "Preventive Maintenance", "Emergency Response"],
  },
  {
    icon: ArrowUpDown,
    title: "System Migration & Upgrades",
    description: "Seamless migration from legacy control systems to modern platforms with minimal downtime. We handle hardware retrofits, software conversion, and operator retraining.",
    features: ["Legacy System Conversion", "Minimal Downtime", "Hardware Retrofits", "Operator Training"],
  },
  {
    icon: Wifi,
    title: "Instrumentation & Calibration",
    description: "Procurement, installation, and precision calibration of a wide array of field instruments for process measurement, flow control, level sensing, and temperature management.",
    features: ["Precision Calibration", "Field Instruments", "Process Measurement", "Loop Testing"],
  },
];

const Services = () => (
  <main>
    <Navbar />
    <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-accent text-xs font-heading font-semibold tracking-widest uppercase mb-4 block">Our Services</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            End-to-End Automation<br />Services
          </h1>
          <p className="text-steel-light max-w-2xl text-lg leading-relaxed">
            From concept to commissioning, our comprehensive suite of industrial automation services is designed to optimize every aspect of your operations.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <div className="space-y-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-foreground">{f}</span>
                    </div>
                  ))}
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

export default Services;
