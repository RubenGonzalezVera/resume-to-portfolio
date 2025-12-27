import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-card relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Let's Build Something
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            I'm always interested in discussing new opportunities, collaborative projects, 
            or innovative ideas in embedded systems and power electronics.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
          >
            <a
              href="mailto:rubengonvera@gmail.com"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold hover:glow-strong transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>rubengonvera@gmail.com</span>
            </a>
            <a
              href="tel:+19413484401"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-secondary/50 text-foreground font-display font-medium hover:border-primary/50 transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>(941) 348-4401</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span>Tampa Bay Area, Florida</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/rubengv4"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl border border-border bg-secondary/30 hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/rubengv4"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl border border-border bg-secondary/30 hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
