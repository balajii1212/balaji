import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/balajii1212",
    label: "GitHub",
    color: "hover:text-foreground hover:border-white/30",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tipperaveni-balaji-b9ba0932b/",
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:border-blue-400/30",
  },
  {
    icon: Mail,
    href: "mailto:tipperavenibalaji172@gmail.com",
    label: "Email",
    color: "hover:text-primary hover:border-primary/30",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-10 border-t border-white/5 relative overflow-hidden">
      {/* Gradient top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="text-xl font-heading font-bold mb-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">TB</span>
            <span className="text-foreground">.</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Designed &amp; Developed by{" "}
            <span className="text-foreground font-medium">Tipperaveni Balaji</span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            &copy; {new Date().getFullYear()} · All rights reserved
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-9 h-9 rounded-xl glass-card border border-white/10 flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                data-testid={`link-footer-${social.label.toLowerCase()}`}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card border border-white/10 hover:border-primary/30 hover:text-primary text-muted-foreground p-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-medium"
          data-testid="button-back-to-top"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="hidden md:inline">Back to top</span>
        </motion.button>
      </div>
    </footer>
  );
}
