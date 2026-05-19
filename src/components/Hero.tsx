import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const subtitles = [
  "CSE Student",
  "Web Developer",
  "AI & Automation Enthusiast"
];

export default function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center pt-20 pb-10 px-4 md:px-8 relative">
      <motion.div 
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <div className="glass-card px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Internships
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6 text-foreground">
          Hi, I'm <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary animate-gradient-x">
            Tipperaveni Balaji
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="h-12 md:h-16 mb-6">
          <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
            I am a <span className="text-foreground font-semibold inline-block min-w-[280px] text-left">
              {subtitles[currentSubtitle]}<span className="animate-pulse text-primary">|</span>
            </span>
          </p>
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate about building modern web applications, exploring automation tools, and developing intelligent AI-powered solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/90 group font-medium"
            onClick={() => scrollTo("#projects")}
            data-testid="button-view-projects"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto rounded-full border-white/10 bg-white/5 hover:bg-white/10 glass-card"
            onClick={() => scrollTo("#contact")}
            data-testid="button-contact"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto rounded-full border-secondary/50 bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 hover:text-white"
            onClick={() => scrollTo("#schedule")}
            data-testid="button-schedule"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Appointment
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
