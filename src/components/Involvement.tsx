import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Calendar, Award, Trophy, Image as ImageIcon } from "lucide-react";

const involvements = [
  {
    title: "Gator Autonomous Racing",
    role: "President/Founder",
    period: "May 2025 - Present",
    teamSize: 15,
    highlights: [
      "Led a cross-functional team of 15 engineers developing autonomous racing vehicles with real-time control systems and sensor fusion",
      "Architected system integration between electrical, mechanical, and AI subsystems for a custom robotics stack at 40% of cost",
    ],
  },
  {
    title: "Repurpose Project",
    role: "Hobby E-Waste Collector",
    period: "June 2025 - Present",
    stat: "50+",
    statLabel: "Devices Repaired",
    highlights: [
      "Diagnosed and repaired 50+ discarded electronic devices through troubleshooting of power supplies and analog circuits",
      "Reverse-engineered legacy consumer electronics to identify component-level failures and implement cost-effective repairs for resells",
    ],
  },
  {
    title: "UF ECE Ambassador",
    role: "Corporate Outreach, Professional Development",
    period: "June 2025 - Present",
    highlights: [
      "Facilitated workshops to enhance the professional skills of the student body, including resume reviews and interviews",
      "Conducted interviews to matriculate potential team members",
    ],
  },
  {
    title: "Solar Gators",
    role: "MPPT Lead, Business Coordinator",
    period: "Sep 2022 - Summer 2025",
    award: "1st Place FSGP 2023",
    teamSize: 30,
    highlights: [
      "Worked with a team of 30 other engineering students to create a solar-powered car for national endurance competitions",
      "Acted as a project lead for in-house design, guiding design goals for 1 year using Agile planning methodology",
    ],
  },
];

const Involvement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="involvement" className="py-24 bg-card relative" ref={ref}>
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
              {'// SECTION_04'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            LEADERSHIP & ACTIVITIES
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed font-body">
            Organizations and initiatives driving innovation in engineering and community impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {involvements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-lg bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 h-full corner-brackets hover-lift">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Content Section */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-primary/10 text-primary">
                          <Users className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      {item.award && (
                        <span className="flex items-center gap-1.5 px-2 py-1 text-xs font-mono rounded bg-accent/20 text-accent border border-accent/30">
                          <Trophy className="w-3 h-3" />
                          {item.award}
                        </span>
                      )}
                    </div>

                    {/* Role */}
                    <p className="font-mono text-sm text-primary mb-3">{item.role}</p>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="font-mono text-sm">{item.period}</span>
                      </div>
                      {item.teamSize && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-3.5 h-3.5" />
                          <span className="font-mono text-sm">{item.teamSize} members</span>
                        </div>
                      )}
                    </div>

                    {/* Stat if available */}
                    {item.stat && (
                      <div className="mb-4 p-3 rounded bg-primary/5 border border-primary/20">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-2xl text-primary font-bold">{item.stat}</span>
                          <span className="font-mono text-sm text-muted-foreground uppercase">{item.statLabel}</span>
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2 font-body">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {highlight}
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
                        <p className="font-mono text-sm text-muted-foreground mb-1">Team Photos</p>
                        <p className="font-mono text-xs text-muted-foreground/60">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Involvement;
