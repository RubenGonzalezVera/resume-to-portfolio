import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Engineering Research Assistant",
    company: "Fluid and Adaptive Systems Lab",
    location: "Gainesville, FL",
    period: "July 2025 - Present",
    highlights: [
      "Designed custom high voltage power electronics for autonomous soft robotic fish with 8-channel independent HASEL muscle control",
      "Achieved 1000x signal amplification (0-10V to 0-10kV) for actuator systems",
      "Integrated microcontroller-based monitoring for wireless waveform generation",
    ],
  },
  {
    title: "Embedded Systems Intern",
    company: "VOS Systems",
    location: "Gainesville, FL",
    period: "May 2025 - Present",
    highlights: [
      "Examined 1,500+ consumer electronic devices through PCBA Quality Assurance testing",
      "Analyzed 20+ complex PCB schematics for power electronics and radio communications",
      "Completed Nordic Semiconductor RTOS development training",
    ],
  },
  {
    title: "Engineering Research Assistant",
    company: "Trustworthy Engineered Autonomy Lab",
    location: "Gainesville, FL",
    period: "Jan 2025 - May 2025",
    highlights: [
      "Redesigned power systems for autonomous racecars using Altium/KiCAD",
      "Reduced bootloop error rates by 80%",
      "Created technical documentation for open-source repositories",
    ],
  },
  {
    title: "Electrical Engineering Intern",
    company: "CACI International",
    location: "Sarasota, FL",
    period: "May 2024 - Aug 2024",
    highlights: [
      "Architected auxiliary circuit board for satellite dish troubleshooting using Altium",
      "Reduced field failure repair time from 3 hours to 1 hour across dozens of sites",
      "Delivered 6+ sprint deliverables using Agile, achieving 40% faster deployments",
    ],
  },
  {
    title: "Embedded Systems Intern",
    company: "RaveBio Inc",
    location: "Gainesville, FL",
    period: "Sep 2023 - May 2024",
    highlights: [
      "Directly recruited by CEO for custom research equipment development",
      "Engineered PCB for BSL-2 certified lab equipment with servo motor control and BLE",
      "Reduced software iteration time from 6 hours to 2 hours",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-card relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Professional Journey
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow z-10" />

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-8 md:pl-0`}>
                <div className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 group">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <div className={`flex items-center gap-2 mb-4 text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm">{exp.company} • {exp.location}</span>
                  </div>
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-muted-foreground text-sm leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
