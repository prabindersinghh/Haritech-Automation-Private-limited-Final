import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import aboutImage from "@/assets/about-automation.jpg";
import { Target, Eye, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Precision Engineering", description: "Every system we design is built to exacting standards, ensuring reliable performance in the most demanding environments." },
  { icon: Eye, title: "Innovation-Driven", description: "We continuously invest in emerging technologies — from IIoT to AI-driven analytics — to keep our clients ahead." },
  { icon: Lightbulb, title: "Client-Centric Approach", description: "Your operational goals drive every decision. We listen first, then engineer solutions tailored to your unique requirements." },
  { icon: Users, title: "Collaborative Partnership", description: "We embed with your team to ensure seamless integration, knowledge transfer, and long-term operational success." },
];

const About = () => (
  <main>
    <Navbar />
    {/* Hero */}
    <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-accent text-xs font-heading font-semibold tracking-widest uppercase mb-4 block">About Us</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Pioneering Automation<br />Since Day One
          </h1>
          <p className="text-steel-light max-w-2xl text-lg leading-relaxed">
            Haritech Automation Private Limited is a full-service industrial automation firm specializing in control system design, PLC programming, SCADA integration, and electrical panel manufacturing.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={aboutImage} alt="Haritech control room" className="rounded-2xl w-full h-96 object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeading label="Our Story" title="Built on Engineering Excellence" centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Founded with a vision to bridge the gap between legacy infrastructure and modern automation, Haritech Automation has grown into a trusted partner for enterprises seeking reliable, scalable control systems.</p>
              <p>Our multidisciplinary team of engineers brings deep domain expertise across manufacturing, water treatment, oil & gas, power generation, and more — delivering solutions that reduce downtime, cut costs, and drive measurable productivity gains.</p>
              <p>We hold ourselves to the highest standards of quality and safety, with UL-508A certified panel fabrication and adherence to international electrical codes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 rounded-2xl bg-navy-light/50 border border-steel/10">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">Our Mission</h3>
            <p className="text-steel-light leading-relaxed">To empower industries with intelligent automation technologies that optimize operations, enhance safety, and deliver sustainable competitive advantages — combining cutting-edge engineering with human ingenuity.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-10 rounded-2xl bg-navy-light/50 border border-steel/10">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">Our Vision</h3>
            <p className="text-steel-light leading-relaxed">To be the most trusted name in industrial automation — recognized globally for innovation, reliability, and an unwavering commitment to transforming how industries operate and grow.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading label="Our Values" title="What Drives Us Forward" description="Our core values define every project we undertake and every relationship we build." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </main>
);

export default About;
