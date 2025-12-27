import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Clock, Users } from "lucide-react";

const projects = [
  {
    title: "Communication Protocols Rebuilt",
    description: "Reconstructed 5 communication protocols (I2C, SPI, UART, CAN, USB) from first principles using bare-metal C programming with oscilloscope verification.",
    tags: ["C", "Bare-Metal", "I2C", "SPI", "UART", "CAN", "USB"],
    hours: 150,
    type: "Open-Source",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    highlights: [
      "Built test circuits with breadboard prototyping",
      "Generated open-source PCB designs with KiCAD/Altium",
    ],
  },
  {
    title: "Homebrew Digital Multimeter",
    description: "Compact multimeter using I2C/SPI protocols for ADC and OLED display, achieving 3% accuracy with wireless Bluetooth probe unit.",
    tags: ["Altium", "I2C", "SPI", "BLE", "EMI Shielding"],
    hours: 100,
    type: "Open-Source",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    highlights: [
      "4-layer PCB design with EMI shielding",
      "Integrated voltage, current, resistance, capacitance measurements",
    ],
  },
  {
    title: "Custom Solar Power Inverter",
    description: "Custom 60V/30A Input Synchronous Boost-Converter PCB design outputting 120V DC with 90% efficiency.",
    tags: ["Power Electronics", "Altium", "CAN", "Agile"],
    hours: 300,
    type: "Team",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    highlights: [
      "Perturb and Observe MPPT algorithm implementation",
      "Reduced cost from $1,500 to $300 per unit over 5 iterations",
    ],
  },
  {
    title: "Gator Autonomous Racing",
    description: "Leading a cross-functional team of 15 engineers developing autonomous racing vehicles with real-time control systems and sensor fusion.",
    tags: ["Robotics", "LIDAR", "ROS", "STM32", "Leadership"],
    hours: null,
    type: "Team Lead",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    highlights: [
      "System integration between electrical, mechanical, and AI subsystems",
      "Built custom robotics stack at 40% of standard cost",
    ],
  },
  {
    title: "Solar Gators - 1st Place FSGP 2023",
    description: "Worked with a team of 30 engineers to create a solar-powered car for national endurance competitions.",
    tags: ["MPPT", "Solar", "Agile", "Fundraising"],
    hours: null,
    type: "Team Lead",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
    highlights: [
      "MPPT Lead and Business Coordinator",
      "Secured $5,000+ through fundraising and cost reduction",
    ],
  },
  {
    title: "Hive - Mobile Notification System",
    description: "Designed mobile notification system that reduced daily average screen time by 20% for beta testers.",
    tags: ["React Native", "JavaScript", "Figma", "NumPy"],
    hours: null,
    type: "Team",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    highlights: [
      "Amassed 100,000+ views and 600 sign-ups",
      "Built iteratively using Figma and React Native",
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of hardware and software projects showcasing embedded systems, 
            power electronics, and autonomous vehicle development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="rounded-xl bg-gradient-card border border-border hover:border-primary/50 overflow-hidden transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                      {project.type}
                    </span>
                    {project.hours && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        ~{project.hours}h
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground">
                        +{project.tags.length - 4}
                      </span>
                    )}
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

export default Projects;
