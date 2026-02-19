import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "muted";
  padding?: "sm" | "md" | "lg" | "xl";
  id?: string;
}

const Section = ({ children, className, variant = "default", padding = "lg", id }: SectionProps) => {
  const variantClasses = {
    default: "bg-background",
    dark: "bg-navy relative overflow-hidden",
    muted: "bg-muted/30",
  };

  const paddingClasses = {
    sm: "py-12",
    md: "py-16",
    lg: "py-24",
    xl: "py-32",
  };

  return (
    <section
      id={id}
      className={cn(variantClasses[variant], paddingClasses[padding], className)}
    >
      {variant === "dark" && (
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
      )}
      <div className="container mx-auto px-4 lg:px-8 relative">
        {children}
      </div>
    </section>
  );
};

export default Section;
