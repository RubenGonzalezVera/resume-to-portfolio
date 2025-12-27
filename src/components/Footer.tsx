const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ruben Gonzalez-Vera. Built with passion.
          </p>
          <p className="text-muted-foreground text-sm">
            University of Florida • BSEE '26
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
