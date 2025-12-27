import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0v30M50 70v30M0 50h30M70 50h30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-primary" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-primary font-display text-sm md:text-base tracking-widest uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Electrical Engineer • Embedded Systems
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-foreground">Ruben</span>
            <br />
            <span className="text-gradient">Gonzalez-Vera</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            University of Florida BSEE student specializing in power electronics, 
            embedded systems, and autonomous vehicles. Building the future one circuit at a time.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://github.com/rubengv4"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/rubengv4"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="mailto:rubengonvera@gmail.com"
              className="group p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-medium">Explore my work</span>
              <ArrowDown className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
