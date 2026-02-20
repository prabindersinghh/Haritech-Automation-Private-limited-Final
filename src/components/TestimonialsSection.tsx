import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Section from "./Section";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Plant Manager",
    company: "ABC Manufacturing Ltd.",
    content: "Haritech Automation transformed our production line with their PLC programming expertise. Downtime reduced by 40% and our operators love the intuitive SCADA interface.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Operations Director",
    company: "CleanWater Solutions",
    content: "Their control panel design exceeded our expectations. UL-508A certified, delivered on time, and the field support team is always responsive. Highly recommended!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Engineering Head",
    company: "PowerGrid Industries",
    content: "We've worked with Haritech on multiple projects over the past 5 years. Their technical depth and commitment to quality make them our go-to automation partner.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Project Manager",
    company: "FoodTech Corp",
    content: "The system migration was seamless with minimal production disruption. Their team's attention to detail and thorough testing process gave us complete confidence.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <Section variant="muted" padding="lg">
      <SectionHeading
        label="Client Testimonials"
        title="Trusted by Industry Leaders"
        description="Hear from companies that have transformed their operations with Haritech Automation solutions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-8 rounded-2xl card-elevated card-elevated-hover"
          >
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Quote className="w-16 h-16 text-primary" />
            </div>
            
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
              "{testimonial.content}"
            </p>

            <div className="border-t border-border pt-6">
              <p className="font-heading font-semibold text-foreground mb-1">
                {testimonial.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;
