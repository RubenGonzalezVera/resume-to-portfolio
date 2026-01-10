import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden grid-overlay">
      {/* Animated circuit traces */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="traceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(25 95% 53% / 0)" />
              <stop offset="50%" stopColor="hsl(25 95% 53% / 0.6)" />
              <stop offset="100%" stopColor="hsl(25 95% 53% / 0)" />
            </linearGradient>
          </defs>
          {/* Horizontal traces */}
          <motion.path
            d="M0 200 H400 L450 250 H800"
            stroke="url(#traceGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M1200 400 H900 L850 450 H600"
            stroke="url(#traceGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          {/* Vertical traces */}
          <motion.path
            d="M300 0 V150 L350 200 V400"
            stroke="url(#traceGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.1 }}
          />
          {/* Circuit nodes */}
          <motion.circle
            cx="450"
            cy="250"
            r="4"
            fill="hsl(25 95% 53%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5 }}
          />
          <motion.circle
            cx="850"
            cy="450"
            r="4"
            fill="hsl(25 95% 53%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.8 }}
          />
        </svg>

        {/* Gradient orbs with warm tones */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Terminal style intro */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border bg-card/50 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
                  System Online
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="font-mono text-primary text-sm tracking-wider">
                {'>'} initializing portfolio...
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-gradient">RUBEN</span>
              <br />
              <span className="text-gradient">GONZALEZ-VERA</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <span className="px-3 py-1 rounded border border-primary/30 bg-primary/10 font-mono text-sm text-primary uppercase tracking-wider">
                Electrical Engineer
              </span>
              <span className="px-3 py-1 rounded border border-primary/30 bg-primary/10 font-mono text-sm text-primary uppercase tracking-wider">
                Embedded Systems
              </span>
              <span className="px-3 py-1 rounded border border-primary/30 bg-primary/10 font-mono text-sm text-primary uppercase tracking-wider">
                Power Electronics
              </span>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Building the future through innovative embedded systems and power electronics solutions.
              Specializing in autonomous vehicles and robotics.
            </motion.p>

            <motion.div
              className="flex items-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="https://github.com/RubenGonzalezVera"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded border border-border bg-card hover:bg-primary hover:border-primary transition-all duration-300 hover-lift"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/rubengv4"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded border border-border bg-card hover:bg-primary hover:border-primary transition-all duration-300 hover-lift"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="mailto:rubengonvera@gmail.com"
                className="group p-3 rounded border border-border bg-card hover:bg-primary hover:border-primary transition-all duration-300 hover-lift"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right side - Data readouts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative p-8 rounded-lg border border-border bg-card/30 backdrop-blur-sm corner-brackets">
              <div className="absolute top-4 right-4">
                <span className="font-mono text-sm text-muted-foreground">v2026.01</span>
              </div>

              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">
                System Status
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-primary/10 text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-1">
                      Location
                    </span>
                    <span className="font-mono text-lg text-foreground">Tampa Bay, FL</span>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-primary/10 text-primary">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-1">
                      Institution
                    </span>
                    <span className="font-mono text-lg text-foreground">University of Florida</span>
                    <span className="font-mono text-sm text-muted-foreground block">BSEE · Minor in Mathematics</span>
                  </div>
                </div>

                {/* Graduation */}
                <div>
                  <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-2">
                    Expected Graduation
                  </span>
                  <span className="font-mono text-lg text-foreground">May 2026</span>
                </div>

                {/* Status bar */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                      Degree Progress
                    </span>
                    <span className="font-mono text-sm text-primary">87%</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-mono text-sm uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
