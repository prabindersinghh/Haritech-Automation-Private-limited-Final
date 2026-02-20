import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ label, title, description, centered = true, light = false }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`max-w-2xl mb-12 ${centered ? "mx-auto text-center" : ""}`}
  >
    {label && (
      <span className="inline-block text-xs font-heading font-semibold tracking-widest uppercase text-accent mb-3">
        {label}
      </span>
    )}
    <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-3 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div
      className={`h-1 w-16 rounded-full bg-gradient-to-r from-primary via-[hsl(var(--electric))] to-accent mb-5 ${
        centered ? "mx-auto" : ""
      }`}
    />
    {description && (
      <p className={`text-base leading-relaxed ${light ? "text-steel-light" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
