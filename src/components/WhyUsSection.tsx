import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Section from "./Section";
import aboutImage from "@/assets/about-automation.jpg";

const reasons = [
  { icon: Shield, title: "Certified Excellence", description: "UL-508A certified panels with rigorous quality assurance at every stage." },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical assistance from our experienced field engineers." },
  { icon: Award, title: "15+ Years Experience", description: "Proven track record delivering complex automation projects across industries." },
  { icon: Users, title: "Dedicated Teams", description: "Specialized engineering teams aligned to your project from start to finish." },
];

const WhyUsSection = () => (
  <Section variant="muted" padding="xl">
    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={aboutImage} 
            alt="Haritech automation control room" 
            className="w-full h-64 sm:h-80 lg:h-[480px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        </div>
      </motion.div>

      <div>
        <SectionHeading
          label="Why Choose Us"
          title="Trusted by Industry Leaders Nationwide"
          description="Haritech Automation combines deep technical expertise with an unwavering commitment to client success."
          centered={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-3 md:gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm mb-1">{r.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default WhyUsSection;
