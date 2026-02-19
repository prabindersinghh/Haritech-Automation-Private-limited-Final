import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { CheckCircle, Building2 } from "lucide-react";

const projects = [
  {
    title: "Wastewater Treatment Plant — Full SCADA Overhaul",
    industry: "Water & Wastewater",
    description: "Complete SCADA system replacement and PLC migration for a municipal wastewater treatment facility, integrating remote monitoring and automated chemical dosing.",
    results: ["40% reduction in manual intervention", "99.8% system uptime achieved", "Full regulatory compliance"],
  },
  {
    title: "Automotive Assembly Line Automation",
    industry: "Automotive",
    description: "Designed and commissioned a multi-station robotic assembly line with integrated vision inspection, achieving higher throughput and consistent quality output.",
    results: ["30% increase in throughput", "Zero unplanned downtime in Year 1", "Integrated quality inspection"],
  },
  {
    title: "Food Processing Batch Control System",
    industry: "Food & Beverage",
    description: "Implemented ISA-88 batch control with recipe management across three production lines, enabling rapid product changeovers and full traceability.",
    results: ["50% faster changeovers", "Complete batch traceability", "Reduced ingredient waste by 15%"],
  },
  {
    title: "Oil & Gas Pipeline Monitoring Network",
    industry: "Oil & Gas",
    description: "Deployed a 200+ mile pipeline SCADA monitoring network with leak detection, pressure management, and satellite communication for remote sites.",
    results: ["Real-time leak detection", "200+ miles monitored", "Satellite-connected remote sites"],
  },
  {
    title: "Aggregate Plant Control System Upgrade",
    industry: "Aggregate & Mining",
    description: "Modernized crushing and screening controls with new PLCs, VFDs, and operator interface, reducing energy consumption and improving material handling throughput.",
    results: ["20% energy savings", "Improved material throughput", "Reduced maintenance costs"],
  },
  {
    title: "Power Plant DCS Migration",
    industry: "Power & Energy",
    description: "Migrated a 250MW power plant from a legacy DCS to a modern distributed control platform with advanced analytics and predictive maintenance capabilities.",
    results: ["Seamless cutover with zero generation loss", "Predictive maintenance enabled", "15-year system lifecycle"],
  },
];

const Projects = () => (
  <main>
    <Navbar />
    <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-accent text-xs font-heading font-semibold tracking-widest uppercase mb-4 block">Our Projects</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Proven Results,<br />Measurable Impact
          </h1>
          <p className="text-steel-light max-w-2xl text-lg leading-relaxed">
            A portfolio of successful automation projects showcasing our engineering capabilities across diverse industrial sectors.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-4 h-4 text-accent" />
                <span className="text-xs font-heading font-semibold text-accent uppercase tracking-wider">{project.industry}</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{project.description}</p>
              <div className="space-y-2 pt-4 border-t border-border">
                {project.results.map((r) => (
                  <div key={r} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span>{r}</span>
                  </div>
                ))}
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

export default Projects;
