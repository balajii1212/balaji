import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection observer alternative for scroll spy
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => scrollTo(e, "#home")}
          className="text-2xl font-heading font-bold tracking-tighter"
          data-testid="link-logo"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">TB</span>
          <span className="text-foreground">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 glass-card px-4 py-2 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors ${
                    activeSection === link.href.substring(1) 
                      ? "bg-primary/20 text-primary border border-primary/20" 
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                  data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
