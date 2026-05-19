import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Force dark mode on document body
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/80 to-background -z-10" />

      <Navbar />
      
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
        <Schedule />
      </main>

      <Footer />
    </div>
  );
}
