import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Box,
  PackageOpen,
  Share2,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  FileText,
  Github,
  Cpu,
  Zap,
  Radio,
  Gauge,
  CircuitBoard,
  Sparkles,
  Crosshair,
  Layers,
} from "lucide-react";
import {
  projects,
  getProjectBySlug,
  getAdjacentProjects,
  type Project,
} from "@/data/projects";

/* Per-project "crate" identity: accent hue + icon + shelf category.
   ponytail: explicit per-slug map — values genuinely differ per project. */
const crateMeta: Record<
  string,
  { accent: string; icon: typeof Box; category: string }
> = {
  "hasel-power-supply": { accent: "25 95% 53%", icon: Zap, category: "HV POWER" },
  "communication-protocols": { accent: "190 90% 50%", icon: Radio, category: "PROTOCOL STACK" },
  "digital-multimeter": { accent: "150 80% 45%", icon: Gauge, category: "TEST GEAR" },
  "solar-inverter": { accent: "45 95% 55%", icon: CircuitBoard, category: "POWER STAGE" },
  "buck-converter": { accent: "265 85% 65%", icon: Cpu, category: "CONTROL DESIGN" },
};

const metaFor = (slug: string) =>
  crateMeta[slug] ?? { accent: "25 95% 53%", icon: Box, category: "MODULE" };

/* ---------------------------------------------------------------- */
/* A single isometric shipping crate built from preserve-3d faces.   */
/* `opened` flips the lid and lifts the "device" out.                */
/* ---------------------------------------------------------------- */
function Crate({
  accent,
  Icon,
  label,
  category,
  opened,
  size = 200,
}: {
  accent: string;
  Icon: typeof Box;
  label: string;
  category: string;
  opened: boolean;
  size?: number;
}) {
  const W = size;
  const H = size * 0.78;
  const D = size * 0.82;
  const ac = `hsl(${accent})`;

  const panel = (extra: React.CSSProperties): React.CSSProperties => ({
    position: "absolute",
    background:
      "linear-gradient(145deg, hsl(20 14% 11%) 0%, hsl(20 14% 6%) 100%)",
    border: `2px solid ${ac}`,
    boxShadow: `inset 0 0 30px hsl(20 14% 2% / 0.8)`,
    ...extra,
  });

  return (
    <div
      className="preserve-3d relative"
      style={{
        width: W,
        height: H,
        transform: "rotateX(-22deg) rotateY(-28deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* FRONT face */}
      <div
        className="preserve-3d flex flex-col items-center justify-center gap-2"
        style={panel({
          width: W,
          height: H,
          transform: `translateZ(${D / 2}px)`,
        })}
      >
        {/* corner rivets */}
        {["top-1 left-1", "top-1 right-1", "bottom-1 left-1", "bottom-1 right-1"].map(
          (p) => (
            <span
              key={p}
              className={`absolute ${p} w-2 h-2 rounded-full`}
              style={{ background: ac, boxShadow: `0 0 6px ${ac}` }}
            />
          )
        )}
        <span
          className="stencil text-[10px] px-2 py-0.5 rounded"
          style={{ color: ac, border: `1px solid ${ac}` }}
        >
          {category}
        </span>
        <span className="stencil text-foreground text-xs text-center px-3 leading-tight">
          {label}
        </span>
        <span className="stencil text-[9px] text-muted-foreground">FRAGILE // THIS SIDE UP</span>
      </div>

      {/* RIGHT side face */}
      <div
        style={panel({
          width: D,
          height: H,
          left: W / 2 - D / 2,
          transform: `rotateY(90deg) translateZ(${W / 2}px)`,
          filter: "brightness(0.7)",
        })}
      />

      {/* LID — hinged at the rear-top edge. -90° lays it flat as the top
          face (closed); swinging to -200° flips it up and back (open). */}
      <motion.div
        className="flex items-center justify-center"
        style={panel({
          width: W,
          height: D,
          top: 0,
          left: 0,
          transformOrigin: "top center",
          filter: "brightness(1.15)",
        })}
        initial={false}
        animate={{ rotateX: opened ? -200 : -90 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: opened ? 0.2 : 0 }}
      >
        <Crosshair className="w-6 h-6 opacity-30" style={{ color: ac }} />
      </motion.div>

      {/* DEVICE rising out of the crate when opened */}
      <AnimatePresence>
        {opened && (
          <motion.div
            className="preserve-3d absolute left-1/2 top-1/2"
            style={{ transformStyle: "preserve-3d" }}
            initial={{ x: "-50%", y: "-50%", z: -40, opacity: 0 }}
            animate={{ x: "-50%", y: "-150%", z: 80, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* mini "PCB" puck */}
            <div
              className="rounded-md flex items-center justify-center animate-crate-float"
              style={{
                width: W * 0.55,
                height: W * 0.55,
                background: `radial-gradient(circle at 30% 30%, hsl(${accent} / 0.35), hsl(20 14% 6%))`,
                border: `2px solid ${ac}`,
                boxShadow: `0 0 40px ${ac}, inset 0 0 20px hsl(20 14% 2%)`,
              }}
            >
              <Icon className="w-10 h-10" style={{ color: ac }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Warehouse backdrop: receding floor + ambient haze.                */
/* ---------------------------------------------------------------- */
function Backdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="scene-3d absolute inset-x-0 bottom-0 h-[70%]">
        <div className="warehouse-floor absolute inset-0" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 20%, hsl(25 95% 53% / 0.08), transparent 70%)",
        }}
      />
    </div>
  );
}

/* ================================================================ */
/* OVERVIEW: the shelf of crates at /demo                            */
/* ================================================================ */
function WarehouseOverview() {
  return (
    <>
      <Helmet>
        <title>Project Warehouse | Ruben Gonzalez-Vera</title>
        <meta
          name="description"
          content="Step into the warehouse and unbox each engineering project — an interactive 3D demo of every design."
        />
        <meta property="og:title" content="Project Warehouse — 3D Demo" />
        <meta
          property="og:description"
          content="Open the crates. Inspect every board, subsystem, and spec."
        />
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-hidden scanlines">
        <Backdrop />

        {/* Top HUD */}
        <div className="relative z-10 container mx-auto px-6 pt-28 pb-10 text-center">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm uppercase tracking-wider">Exit to Portfolio</span>
          </Link>
          <div className="flex items-center justify-center gap-3 mb-3">
            <Box className="w-7 h-7 text-primary" />
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient">
              PROJECT WAREHOUSE
            </h1>
          </div>
          <p className="font-mono text-sm uppercase tracking-widest text-primary/80">
            {"// SELECT A CRATE TO UNBOX"}
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 font-body">
            Every project is sealed in a crate on the floor. Pop one open to inspect its
            boards, subsystems, and specs up close.
          </p>
        </div>

        {/* Crate floor */}
        <div className="relative z-10 scene-3d container mx-auto px-6 pb-32">
          <div className="flex flex-wrap items-end justify-center gap-x-16 gap-y-24 pt-16">
            {projects.map((project, i) => {
              const m = metaFor(project.slug);
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group"
                >
                  <Link
                    to={`/demo/${project.slug}`}
                    className="block focus:outline-none"
                    aria-label={`Open crate: ${project.title}`}
                  >
                    <div
                      className="animate-crate-float transition-transform duration-300 group-hover:-translate-y-3"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    >
                      <Crate
                        accent={m.accent}
                        Icon={m.icon}
                        label={project.title}
                        category={m.category}
                        opened={false}
                        size={180}
                      />
                    </div>
                    {/* shadow + prompt */}
                    <div className="mt-4 flex flex-col items-center">
                      <div
                        className="h-2 w-32 rounded-full blur-md opacity-40"
                        style={{ background: `hsl(${m.accent})` }}
                      />
                      <span className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        ▸ Press to open
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

/* ================================================================ */
/* DETAIL: an opened crate + HUD dossier at /demo/:slug             */
/* ================================================================ */
function CrateDetail({ project }: { project: Project }) {
  const navigate = useNavigate();
  const m = metaFor(project.slug);
  const ac = `hsl(${m.accent})`;
  const { previous, next } = getAdjacentProjects(project.slug);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpened(false);
    const t = setTimeout(() => setOpened(true), 350);
    return () => clearTimeout(t);
  }, [project.slug]);

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Crate link copied — share it anywhere.");
    } catch {
      toast.error("Couldn't copy link.");
    }
  };

  return (
    <>
      <Helmet>
        <title>{project.title} — Unboxed | Ruben Gonzalez-Vera</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} — 3D Unboxing`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-hidden scanlines">
        <Backdrop />

        {/* ---- Stage: the opening crate ---- */}
        <section className="relative z-10 scene-3d">
          <div className="container mx-auto px-6 pt-24 pb-8">
            <div className="flex items-center justify-between mb-6">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-mono text-sm uppercase tracking-wider">Back to Warehouse</span>
              </Link>
              <button
                onClick={share}
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border bg-card/70 hover:border-primary hover:text-primary transition-colors font-mono text-sm"
              >
                <Share2 className="w-4 h-4" />
                Share crate
              </button>
            </div>

            {/* crate stage */}
            <div className="relative flex items-center justify-center" style={{ minHeight: 360 }}>
              {/* inspection beam */}
              <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none">
                <div
                  className="animate-scan-sweep mx-auto w-72 h-24 blur-2xl"
                  style={{ background: `radial-gradient(ellipse, ${ac}, transparent 70%)`, opacity: 0.25 }}
                />
              </div>
              <Crate
                accent={m.accent}
                Icon={m.icon}
                label={project.title}
                category={m.category}
                opened={opened}
                size={260}
              />
            </div>

            {/* unboxed banner */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="text-center mt-8"
            >
              <div className="inline-flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: ac }}>
                <PackageOpen className="w-4 h-4" />
                Crate opened · {m.category}
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-3">
                {project.title}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                {project.description}
              </p>
              {/* quick stat chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
                <Chip label={project.type} ac={ac} />
                <Chip label={project.status} ac={ac} dot />
                <Chip label={`~${project.hours} HRS`} ac={ac} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ---- Dossier ---- */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="relative z-10 container mx-auto px-6 py-12 max-w-6xl space-y-14"
        >
          {/* DESIGN COMPONENTS — the unpacked items */}
          <HudHeader icon={Layers} title="DESIGN COMPONENTS" sub={`${project.technicalDetails.subsystems.length} modules unpacked`} ac={ac} />
          <div className="grid md:grid-cols-2 gap-5">
            {project.technicalDetails.subsystems.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20, rotateX: -8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="relative p-5 rounded-lg bg-gradient-card border border-border corner-brackets"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="shrink-0 w-9 h-9 rounded flex items-center justify-center font-mono text-sm font-bold"
                    style={{ background: `hsl(${m.accent} / 0.12)`, color: ac, border: `1px solid ${ac}` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* KEY FEATURES */}
          <HudHeader icon={Sparkles} title="KEY FEATURES" sub="headline achievements" ac={ac} />
          <div className="grid gap-4">
            {project.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border-l-4"
                style={{ borderLeftColor: ac }}
              >
                <Sparkles className="w-4 h-4 mt-1 shrink-0" style={{ color: ac }} />
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{h}</p>
              </motion.div>
            ))}
          </div>

          {/* SPEC SHEET — metrics as HUD readouts */}
          <HudHeader icon={Gauge} title="SPEC SHEET" sub="measured / target values" ac={ac} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.outcomes.metrics.map((metric, i) => {
              const [head, ...rest] = metric.split(":");
              const value = rest.join(":").trim();
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="p-4 rounded-lg bg-gradient-card border border-border"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: ac, boxShadow: `0 0 6px ${ac}` }} />
                    <span className="data-label">{value ? head : "SPEC"}</span>
                  </div>
                  <div className="font-mono text-sm text-foreground tabular-nums leading-snug">
                    {value || head}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* TECH LOADOUT — tags + tools */}
          <HudHeader icon={Cpu} title="TECH LOADOUT" sub="tools & stack" ac={ac} />
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 font-mono text-xs rounded border bg-card text-foreground"
                style={{ borderColor: `hsl(${m.accent} / 0.4)` }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded font-mono text-sm font-bold transition-all"
              style={{ background: ac, color: "hsl(20 14% 4%)" }}
            >
              <FileText className="w-4 h-4" />
              Read Full Dossier
            </Link>
            {project.outcomes.links?.github && (
              <a
                href={project.outcomes.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-border bg-card hover:border-primary transition-colors font-mono text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            <button
              onClick={share}
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-border bg-card hover:border-primary transition-colors font-mono text-sm"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Crate-to-crate nav */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <button
              disabled={!previous}
              onClick={() => previous && navigate(`/demo/${previous.slug}`)}
              className="group flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              {previous ? previous.title : "—"}
            </button>
            <Link to="/demo" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">
              All crates
            </Link>
            <button
              disabled={!next}
              onClick={() => next && navigate(`/demo/${next.slug}`)}
              className="group flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              {next ? next.title : "—"}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.section>
      </div>
    </>
  );
}

function Chip({ label, ac, dot }: { label: string; ac: string; dot?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 rounded font-mono text-xs uppercase tracking-wider"
      style={{ border: `1px solid ${ac}`, color: ac, background: "hsl(20 14% 7% / 0.6)" }}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full" style={{ background: ac }} />}
      {label}
    </span>
  );
}

function HudHeader({
  icon: Icon,
  title,
  sub,
  ac,
}: {
  icon: typeof Box;
  title: string;
  sub: string;
  ac: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-5 h-5" style={{ color: ac }} />
      <h2 className="font-display font-bold text-xl text-foreground tracking-wide">{title}</h2>
      <div className="h-px flex-1 bg-border" />
      <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{sub}</span>
    </div>
  );
}

/* ================================================================ */
/* Route entry: dispatch on :slug                                    */
/* ================================================================ */
const Warehouse = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <WarehouseOverview />;

  const project = getProjectBySlug(slug);
  if (!project) return <Navigate to="/demo" replace />;

  return <CrateDetail project={project} />;
};

export default Warehouse;
