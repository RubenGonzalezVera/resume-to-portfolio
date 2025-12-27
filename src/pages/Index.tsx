import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ruben Gonzalez-Vera | Electrical Engineer & Embedded Systems Developer</title>
        <meta
          name="description"
          content="Portfolio of Ruben Gonzalez-Vera, a University of Florida Electrical Engineering student specializing in embedded systems, power electronics, and autonomous vehicles."
        />
        <meta
          name="keywords"
          content="electrical engineer, embedded systems, power electronics, PCB design, autonomous vehicles, University of Florida"
        />
        <meta property="og:title" content="Ruben Gonzalez-Vera | Electrical Engineer" />
        <meta
          property="og:description"
          content="Building the future through innovative embedded systems and power electronics solutions."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://rubengonzalezvera.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
