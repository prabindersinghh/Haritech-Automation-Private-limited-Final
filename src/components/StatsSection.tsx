import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years of Expertise" },
  { value: 50, suffix: "+", label: "Industry Partners" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-gradient">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => (
  <Section variant="muted" padding="md" className="bg-grid-pattern">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center"
        >
          <Counter target={stat.value} suffix={stat.suffix} />
          <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default StatsSection;
