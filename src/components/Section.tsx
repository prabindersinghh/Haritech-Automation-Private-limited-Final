import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "muted";
  padding?: "sm" | "md" | "lg" | "xl";
  id?: string;
}

const MotionSection = motion.section;

const Section = ({ children, className, variant = "default", padding = "lg", id }: SectionProps) => {
  const variantClasses = {
    default: "bg-background/90 backdrop-blur-sm",
    dark: "bg-navy",
    muted: "bg-muted/60",
  };

  const paddingClasses = {
    sm: "py-12",
    md: "py-16",
    lg: "py-24",
    xl: "py-32",
  };

  return (
    <MotionSection
      id={id}
      className={cn("section-shell", variantClasses[variant], paddingClasses[padding], className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {variant === "dark" && (
        <>
          <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
          <div className="pointer-events-none absolute -top-32 -left-16 w-72 h-72 bg-primary/30 opacity-30 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-40 right-0 w-80 h-80 bg-accent/25 opacity-30 blur-3xl rounded-full" />
        </>
      )}
      <div className="container mx-auto px-4 lg:px-8 relative section-shell-inner">
        {children}
      </div>
    </MotionSection>
  );
};

export default Section;
