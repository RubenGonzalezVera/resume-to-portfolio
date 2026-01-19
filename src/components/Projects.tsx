import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Github, ExternalLink, ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background relative grid-overlay" ref={ref}>
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
              {'// SECTION_03'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            TECHNICAL PROJECTS
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed font-body">
            Hardware and software projects showcasing embedded systems, power electronics,
            and protocol implementation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link to={`/projects/${project.slug}`} className="block h-full">
                <div className="rounded-lg bg-gradient-card border border-border hover:border-primary/50 overflow-hidden transition-all duration-500 h-full flex flex-col corner-brackets hover-lift cursor-pointer">
                {/* Header with blueprint-style decoration */}
                <div className="p-6 border-b border-border">
                  {/* Top row with type and status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm text-primary uppercase tracking-wider px-2 py-1 rounded bg-primary/10 border border-primary/30">
                      {project.type}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${project.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-primary/50'}`} />
                      <span className="font-mono text-sm text-muted-foreground">{project.status}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Hours metric */}
                  {project.hours && (
                    <div className="flex items-center gap-2 mt-3">
                      <Clock className="w-4 h-4 text-primary" />
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono text-lg text-primary font-bold">~{project.hours}</span>
                        <span className="font-mono text-sm text-muted-foreground">hours</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 font-body">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-3 block">
                      Key Achievements
                    </span>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-xs text-muted-foreground flex items-start gap-2 font-body">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-border">
                    <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-3 block">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 font-mono text-sm rounded border border-border bg-card text-foreground hover:border-primary/50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="aspect-video rounded-lg bg-gradient-card border-2 border-dashed border-border group-hover:border-primary/30 transition-colors flex flex-col items-center justify-center gap-2 p-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <ImageIcon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-mono text-xs text-muted-foreground/60">Project Image</p>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-primary group-hover:text-primary/80 transition-colors">
                      <span className="font-mono text-sm uppercase tracking-wider">View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/RubenGonzalezVera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded border border-border bg-card hover:bg-primary hover:border-primary transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            <span className="font-mono text-sm text-foreground group-hover:text-primary-foreground transition-colors">
              View All Projects on GitHub
            </span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
