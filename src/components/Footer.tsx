import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div>
            <div className="font-mono text-lg font-bold text-foreground mb-2">
              RGV
            </div>
            <p className="font-mono text-sm text-muted-foreground">
              Electrical Engineer · Embedded Systems
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/RubenGonzalezVera"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-border bg-background hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/rubengv4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-border bg-background hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:rubengonvera@gmail.com"
              className="p-2 rounded border border-border bg-background hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Meta */}
          <div className="text-right">
            <p className="font-mono text-sm text-muted-foreground mb-1">
              University of Florida · BSEE '26
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              © {currentYear} · Built with React + Vite
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{'>'}</span> Last updated: Jan 2026
          </div>
          <div className="font-mono text-sm text-muted-foreground flex items-center gap-4">
            <span>Tampa Bay, FL</span>
            <span className="text-primary">·</span>
            <span>29.7604° N, 82.3018° W</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
