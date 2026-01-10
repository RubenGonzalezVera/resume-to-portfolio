import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { label: "About", href: "#about", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Projects", href: "#projects", num: "03" },
  { label: "Involvement", href: "#involvement", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              RGV
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group px-4 py-2 text-muted-foreground hover:text-foreground transition-colors relative"
              >
                <span className="font-mono text-sm text-primary/50 group-hover:text-primary mr-1 transition-colors">
                  {item.num}.
                </span>
                <span className="font-mono text-sm">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <a
              href="mailto:rubengonvera@gmail.com"
              className="ml-4 px-4 py-2 rounded border border-primary bg-primary/10 text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {'> contact'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground rounded border border-border hover:border-primary/50 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-6 border-t border-border"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-sm text-primary">{item.num}.</span>
                  <span className="font-mono text-sm">{item.label}</span>
                </a>
              ))}
              <a
                href="mailto:rubengonvera@gmail.com"
                className="mt-4 px-4 py-3 rounded bg-primary text-primary-foreground font-mono text-sm text-center"
              >
                {'> contact'}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
