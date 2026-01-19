import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin, Image as ImageIcon } from "lucide-react";

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
      "Engineered PCB for custom lab equipment (BSL-2 Cert), accounting for servo motor control and BLE with a custom testbench",
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
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-border max-w-[100px]" />
            <span className="font-mono text-sm uppercase tracking-widest text-primary">
              {'// SECTION_02'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            WORK HISTORY
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed font-body">
            Professional experience in embedded systems, power electronics, and hardware development.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Circuit trace timeline */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px">
            <div className="h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
          </div>

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
              {/* Circuit node / solder joint */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="circuit-node" />
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-16 md:pl-0`}>
                <div className="p-6 rounded-lg bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 group corner-brackets hover-lift">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Content Section */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                      {/* Date badge */}
                      <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/30">
                          <Calendar className="w-3 h-3 text-primary" />
                          <span className="font-mono text-sm text-primary">{exp.period}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>

                      {/* Company & Location */}
                      <div className={`flex flex-wrap items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Building2 className="w-3.5 h-3.5" />
                          <span className="font-mono text-sm">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="font-mono text-sm">{exp.location}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-muted-foreground text-sm leading-relaxed font-body flex items-start gap-2">
                            {index % 2 !== 0 && <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />}
                            <span>{highlight}</span>
                            {index % 2 === 0 && <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0 md:order-first" />}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image Placeholder */}
                    <div className={`w-full md:w-2/5 flex-shrink-0 mt-6 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 border-border ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                      <div className="aspect-video rounded-lg bg-gradient-card border-2 border-dashed border-border hover:border-primary/30 transition-colors flex flex-col items-center justify-center gap-3 p-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-center">
                          <p className="font-mono text-sm text-muted-foreground mb-1">Project Photos</p>
                          <p className="font-mono text-xs text-muted-foreground/60">Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}

          {/* End node */}
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 bottom-0">
            <div className="w-2 h-2 rounded-full bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
