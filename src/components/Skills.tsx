import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Zap, Brain, Bot, Workflow } from "lucide-react";
import {
  SiPython, SiJavascript, SiReact, SiTailwindcss,
  SiHtml5, SiCss,
} from "react-icons/si";
import { Coffee } from "lucide-react";

const techSkills = [
  { name: "Web Development", icon: Globe, color: "text-primary", bg: "bg-primary/10 border-primary/20" },
  { name: "Python", icon: SiPython, color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
  { name: "Java", icon: Coffee, color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/20" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/20" },
  { name: "CSS", icon: SiCss, color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300", bg: "bg-yellow-300/10 border-yellow-300/20" },
  { name: "React", icon: SiReact, color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/20" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", bg: "bg-teal-400/10 border-teal-400/20" },
];

const exploringSkills = [
  { name: "Automation Tools", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
  { name: "Agentic AI", icon: Brain, color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20" },
  { name: "AI Assistants", icon: Bot, color: "text-primary", bg: "bg-primary/10 border-primary/20" },
  { name: "Workflow Automation", icon: Workflow, color: "text-pink-400", bg: "bg-pink-400/10 border-pink-400/20" },
];

function SkillCard({ name, icon: Icon, color, bg, delay }: { name: string; icon: React.ElementType; color: string; bg: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 border border-white/10 cursor-default group hover:border-white/20 transition-all duration-300"
    >
      <div className={`p-3 rounded-xl border ${bg} transition-all duration-300 group-hover:scale-110`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <span className="text-sm font-medium text-foreground text-center leading-tight">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="w-full py-24 px-4 md:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="text-primary font-mono text-sm tracking-widest uppercase">What I Know</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-foreground">Skills</h2>
        <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </motion.div>

      <div className="space-y-12">
        {/* Technical Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg font-semibold text-muted-foreground mb-6 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techSkills.map((skill, i) => (
              <SkillCard key={skill.name} {...skill} delay={0.1 + i * 0.06} />
            ))}
          </div>
        </div>

        {/* Currently Exploring */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-semibold text-muted-foreground mb-6 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse" />
            Currently Exploring
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {exploringSkills.map((skill, i) => (
              <SkillCard key={skill.name} {...skill} delay={0.2 + i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
