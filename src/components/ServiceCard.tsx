import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  features?: string[];
  className?: string;
  delay?: number;
  variant?: "default" | "compact";
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  href = "/services",
  features,
  className,
  delay = 0,
  variant = "default",
}: ServiceCardProps) => {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group h-full p-6 md:p-8 rounded-xl bg-card border border-border",
        "hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
        "transition-all duration-300",
        variant === "compact" && "p-6",
        className
      )}
    >
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-accent transition-all duration-300 group-hover:scale-110">
        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="font-heading font-semibold text-lg md:text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      {features && features.length > 0 && (
        <div className="space-y-2 mb-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent group-hover:gap-2 transition-all">
        Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <Link to={href} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ServiceCard;
