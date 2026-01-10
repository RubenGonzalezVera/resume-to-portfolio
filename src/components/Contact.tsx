import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-background relative grid-overlay" ref={ref}>
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
              {'// SECTION_05'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            ESTABLISH CONNECTION
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed font-body">
            Ready to discuss opportunities, collaborative projects, or innovative ideas
            in embedded systems and power electronics.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Communication Channels
              </h3>

              {/* Email */}
              <a
                href="mailto:rubengonvera@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-card/80 transition-all duration-300 corner-brackets"
              >
                <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-1">
                    Email
                  </span>
                  <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    rubengonvera@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+19413484401"
                className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-card/80 transition-all duration-300 corner-brackets"
              >
                <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-1">
                    Phone
                  </span>
                  <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    (941) 348-4401
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50">
                <div className="p-3 rounded bg-muted text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-1">
                    Location
                  </span>
                  <span className="font-mono text-sm text-foreground">
                    Tampa Bay Area, Florida
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">
                External Links
              </h3>

              <div className="space-y-4 mb-8">
                <a
                  href="https://github.com/RubenGonzalezVera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 corner-brackets"
                >
                  <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-1">
                      GitHub
                    </span>
                    <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                      github.com/RubenGonzalezVera
                    </span>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {'->'}
                  </span>
                </a>

                <a
                  href="https://linkedin.com/in/rubengv4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 corner-brackets"
                >
                  <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-1">
                      LinkedIn
                    </span>
                    <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                      linkedin.com/in/rubengv4
                    </span>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {'->'}
                  </span>
                </a>
              </div>

              {/* CTA Button */}
              <a
                href="mailto:rubengonvera@gmail.com"
                className="group flex items-center justify-center gap-3 w-full p-4 rounded-lg bg-primary text-primary-foreground font-mono font-semibold hover:glow transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
