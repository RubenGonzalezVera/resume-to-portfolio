import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Target,
  Wrench,
  TrendingUp,
  Image as ImageIcon,
} from "lucide-react";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const adjacentProjects = slug ? getAdjacentProjects(slug) : { previous: null, next: null };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Ruben Gonzalez-Vera</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={project.tags.join(", ")} />
        <meta property="og:title" content={`${project.title} | Ruben Gonzalez-Vera`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-background via-background to-card/20 relative grid-overlay">
          <div className="container mx-auto px-6">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono text-sm uppercase tracking-wider">Back to Projects</span>
              </Link>
            </motion.div>

            {/* Project Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl"
            >
              {/* Status & Type */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="font-mono text-sm text-primary uppercase tracking-wider px-3 py-1 rounded bg-primary/10 border border-primary/30">
                  {project.type}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      project.status === "Active" ? "bg-green-500 animate-pulse" : "bg-primary/50"
                    }`}
                  />
                  <span className="font-mono text-sm text-muted-foreground">{project.status}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm">
                    <span className="text-primary font-bold">~{project.hours}</span> hours
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-6">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-body">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 font-mono text-sm rounded border border-border bg-card text-foreground hover:border-primary/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-display font-bold text-foreground">Project Overview</h2>
              </div>
              <div className="space-y-4">
                {project.overview.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-lg font-body">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Goals */}
              <div className="mt-8 p-6 rounded-lg bg-card border border-border corner-brackets">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">
                  Project Goals
                </h3>
                <ul className="space-y-3">
                  {project.overview.goals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-body">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm text-muted-foreground">Timeline:</span>
                  <span className="font-mono text-sm text-foreground">{project.overview.timeline}</span>
                </div>
              </div>
            </motion.section>

            {/* Technical Implementation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Technical Implementation
                </h2>
              </div>

              {/* Subsystems */}
              <div className="space-y-6">
                {project.technicalDetails.subsystems.map((subsystem, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-gradient-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      {subsystem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-body">
                      {subsystem.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tools & Technologies */}
              <div className="mt-8 p-6 rounded-lg bg-card border border-border">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">
                  Tools & Technologies Used
                </h3>
                <ul className="space-y-2">
                  {project.technicalDetails.tools.map((tool, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-body">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Approach */}
              <div className="mt-6 p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
                  Development Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  {project.technicalDetails.approach}
                </p>
              </div>
            </motion.section>

            {/* Key Features & Achievements */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Key Features & Achievements
                </h2>
              </div>
              <div className="grid gap-4">
                {project.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-gradient-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <span className="font-mono text-sm text-primary">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed font-body pt-1">{highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Challenges & Solutions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Challenges & Solutions
                </h2>
              </div>
              <div className="space-y-6">
                {project.challenges.map((item, index) => (
                  <div key={index} className="space-y-4">
                    {/* Challenge */}
                    <div className="p-6 rounded-lg bg-card border border-border border-l-4 border-l-orange-500">
                      <div className="flex items-start gap-3 mb-2">
                        <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <h3 className="font-mono text-sm uppercase tracking-wider text-orange-500">
                          Challenge
                        </h3>
                      </div>
                      <p className="text-foreground font-body leading-relaxed ml-8">{item.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="p-6 rounded-lg bg-gradient-card border border-border border-l-4 border-l-green-500">
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <h3 className="font-mono text-sm uppercase tracking-wider text-green-500">
                          Solution
                        </h3>
                      </div>
                      <p className="text-muted-foreground font-body leading-relaxed ml-8">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Project Outcomes */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-display font-bold text-foreground">Project Outcomes</h2>
              </div>

              {/* Results */}
              <div className="space-y-3">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">
                  Results
                </h3>
                {project.outcomes.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground font-body">{result}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">
                  Key Metrics
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.outcomes.metrics.map((metric, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-mono text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Work */}
              {project.outcomes.futureWork && (
                <div className="mt-6 p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
                    Future Enhancements
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    {project.outcomes.futureWork}
                  </p>
                </div>
              )}

              {/* Links */}
              {project.outcomes.links && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {project.outcomes.links.github && (
                    <a
                      href={project.outcomes.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border bg-card hover:bg-primary hover:border-primary transition-all duration-300 group"
                    >
                      <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                      <span className="font-mono text-sm text-foreground group-hover:text-primary-foreground transition-colors">
                        View on GitHub
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </a>
                  )}
                  {project.outcomes.links.documentation && (
                    <a
                      href={project.outcomes.links.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border bg-card hover:bg-primary hover:border-primary transition-all duration-300 group"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                      <span className="font-mono text-sm text-foreground group-hover:text-primary-foreground transition-colors">
                        Documentation
                      </span>
                    </a>
                  )}
                </div>
              )}
            </motion.section>

            {/* Visual Documentation Placeholders */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <ImageIcon className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Visual Documentation
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {project.visualPlaceholders.map((placeholder, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-lg bg-gradient-card border border-border border-dashed hover:border-primary/50 transition-colors"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-foreground">{placeholder.title}</h3>
                      <p className="text-sm text-muted-foreground font-body">{placeholder.description}</p>
                      <span className="font-mono text-xs uppercase tracking-wider text-primary/70">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Navigation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pt-8 border-t border-border"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                {/* Previous Project */}
                <div className="w-full sm:w-auto">
                  {adjacentProjects.previous ? (
                    <Link
                      to={`/projects/${adjacentProjects.previous.slug}`}
                      className="group flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform" />
                      <div className="text-left">
                        <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          Previous
                        </div>
                        <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                          {adjacentProjects.previous.title}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="invisible">Placeholder</div>
                  )}
                </div>

                {/* Back to All Projects */}
                <Link
                  to="/#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border bg-card hover:bg-primary hover:border-primary transition-all duration-300 group"
                >
                  <span className="font-mono text-sm text-foreground group-hover:text-primary-foreground transition-colors">
                    All Projects
                  </span>
                </Link>

                {/* Next Project */}
                <div className="w-full sm:w-auto">
                  {adjacentProjects.next ? (
                    <Link
                      to={`/projects/${adjacentProjects.next.slug}`}
                      className="group flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                    >
                      <div className="text-right">
                        <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          Next
                        </div>
                        <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                          {adjacentProjects.next.title}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <div className="invisible">Placeholder</div>
                  )}
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
