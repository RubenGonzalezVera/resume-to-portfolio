import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Zap, Radio, Code, Image as ImageIcon } from "lucide-react";

const skills = {
  languages: ["C/C++", "Python", "VHDL", "Assembly"],
  protocols: ["I2C", "SPI", "USART", "UART", "CAN", "Bluetooth", "USB", "PCIe"],
  software: ["Altium", "KiCAD", "LTSpice", "Quartus", "MATLAB", "Git", "Linux", "iOS", "ROS", "Bash"],
  hardware: ["Raspberry Pi", "STM32", "ESP32", "Arduino", "Nordic"],
};

const highlights = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Custom firmware development for microcontrollers and FPGA-based systems",
    stat: "5+",
    statLabel: "MCU Platforms",
  },
  {
    icon: Zap,
    title: "Power Electronics",
    description: "High-voltage control systems, inverters, and power conversion circuits",
    stat: "10kV",
    statLabel: "Max Voltage",
  },
  {
    icon: Radio,
    title: "Communication Protocols",
    description: "Implementation and debugging of I2C, SPI, CAN, and wireless protocols",
    stat: "8",
    statLabel: "Protocols",
  },
  {
    icon: Code,
    title: "PCB Design",
    description: "Multi-layer board design with EMI shielding and signal integrity focus",
    stat: "4",
    statLabel: "Layer Max",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative grid-overlay" ref={ref}>
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
              {'// SECTION_01'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            SYSTEM SPECIFICATIONS
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed font-body">
            Pursuing a Bachelor of Science in Electrical Engineering at the University of Florida
            with a minor in Mathematics. Passionate about building systems that push the boundaries
            of what's possible in robotics and embedded technology.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-lg bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 corner-brackets hover-lift h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded bg-primary/10 text-primary group-hover:glow transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-2xl text-primary font-bold block">{item.stat}</span>
                    <span className="font-mono text-sm text-muted-foreground uppercase">{item.statLabel}</span>
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-10">
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Technical Stack
            </h3>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Languages */}
            <div>
              <h4 className="font-mono text-sm uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="px-3 py-1.5 font-mono text-sm rounded border border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Protocols */}
            <div>
              <h4 className="font-mono text-sm uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Protocols
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.protocols.map((protocol, index) => (
                  <motion.span
                    key={protocol}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="px-3 py-1.5 font-mono text-sm rounded border border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    {protocol}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Software */}
            <div>
              <h4 className="font-mono text-sm uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Software
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.software.map((sw, index) => (
                  <motion.span
                    key={sw}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    className="px-3 py-1.5 font-mono text-sm rounded border border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    {sw}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Hardware */}
            <div>
              <h4 className="font-mono text-sm uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Hardware Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.hardware.map((hw, index) => (
                  <motion.span
                    key={hw}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    className="px-3 py-1.5 font-mono text-sm rounded border border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    {hw}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Placeholder Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <div className="flex items-center gap-4 mb-10">
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Photo Gallery
            </h3>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Lab Setup & Equipment",
              "PCB Design Work",
              "Testing & Debugging"
            ].map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                <div className="aspect-square rounded-lg bg-gradient-card border-2 border-dashed border-border hover:border-primary/30 transition-colors flex flex-col items-center justify-center gap-3 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-sm text-muted-foreground mb-1">{label}</p>
                    <p className="font-mono text-xs text-muted-foreground/60">Coming Soon</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
