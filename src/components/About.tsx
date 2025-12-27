import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Zap, Radio, Code } from "lucide-react";

const skills = {
  languages: ["C/C++", "Python", "VHDL", "Verilog", "Assembly"],
  protocols: ["I2C", "SPI", "UART", "CAN", "Bluetooth", "USB", "PCIe"],
  software: ["Altium", "KiCAD", "LTSpice", "Quartus", "MATLAB", "Git", "Linux", "ROS"],
  hardware: ["STM32", "ESP32", "Arduino", "Raspberry Pi", "Nordic", "DE10 Lite"],
};

const highlights = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Custom firmware development for microcontrollers and FPGA-based systems",
  },
  {
    icon: Zap,
    title: "Power Electronics",
    description: "High-voltage control systems, inverters, and power conversion circuits",
  },
  {
    icon: Radio,
    title: "Communication Protocols",
    description: "Implementation and debugging of I2C, SPI, CAN, and wireless protocols",
  },
  {
    icon: Code,
    title: "PCB Design",
    description: "Multi-layer board design with EMI shielding and signal integrity focus",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Engineering the Future
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
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
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-10">
            Technical Stack
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
              >
                <h4 className="text-primary font-display text-sm tracking-widest uppercase mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
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
