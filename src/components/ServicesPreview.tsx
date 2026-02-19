import { Cpu, Monitor, Settings, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import Section from "./Section";

const services = [
  {
    icon: Settings,
    title: "Control Panel Design",
    description: "Custom-engineered UL-508A certified electrical control panels built for reliability and regulatory compliance.",
  },
  {
    icon: Cpu,
    title: "PLC Programming",
    description: "Expert programming across all major PLC platforms — Allen-Bradley, Siemens, Mitsubishi — with IoT-ready architecture.",
  },
  {
    icon: Monitor,
    title: "SCADA & HMI Integration",
    description: "Industry 4.0 operator interfaces with real-time monitoring, data analytics, and BIM-based visualization.",
  },
  {
    icon: Wrench,
    title: "Field Services & Support",
    description: "24/7 on-site and remote support including commissioning, preventive maintenance, and rapid troubleshooting.",
  },
];

const ServicesPreview = () => (
  <Section variant="default" padding="lg">
    <SectionHeading
      label="What We Do"
      title="Comprehensive Automation Solutions"
      description="End-to-end industrial automation services designed to optimize your operations and drive measurable performance gains."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, i) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          href="/services"
          delay={i * 0.1}
          variant="compact"
        />
      ))}
    </div>
  </Section>
);

export default ServicesPreview;
