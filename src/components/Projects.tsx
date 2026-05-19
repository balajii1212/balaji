import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Mail, ClipboardCheck, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Email Spam Detection",
    description:
      "An intelligent machine learning-based system that detects spam emails using NLP and classification algorithms. The project analyzes email content and identifies whether a message is spam or legitimate with high accuracy.",
    tags: ["Python", "NLP", "Machine Learning"],
    icon: Mail,
    accentColor: "from-red-500 to-orange-500",
    borderColor: "border-red-500/20",
    iconBg: "bg-red-500/10 border-red-500/20",
    iconColor: "text-red-400",
    glowColor: "hover:shadow-red-500/10",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Digital Attendance Management System",
    description:
      "A web-based attendance management platform designed to simplify attendance tracking for students and faculty. Features include attendance recording, report generation, and easy data management.",
    tags: ["Web Development", "Database", "React"],
    icon: ClipboardCheck,
    accentColor: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/20",
    iconBg: "bg-green-500/10 border-green-500/20",
    iconColor: "text-green-400",
    glowColor: "hover:shadow-green-500/10",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "AI IDE Assistant",
    description:
      "An AI-powered coding assistant designed to improve developer productivity by providing code suggestions, debugging help, intelligent explanations, and automation features inside the development environment.",
    tags: ["AI", "Automation", "Developer Tools"],
    icon: Code2,
    accentColor: "from-violet-500 to-purple-500",
    borderColor: "border-violet-500/20",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    iconColor: "text-violet-400",
    glowColor: "hover:shadow-violet-500/10",
    githubUrl: "#",
    demoUrl: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="w-full py-24 px-4 md:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="text-primary font-mono text-sm tracking-widest uppercase">What I've Built</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-foreground">Projects</h2>
        <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              data-testid={`card-project-${project.id}`}
              className={`glass-card rounded-2xl border ${project.borderColor} flex flex-col overflow-hidden group hover:shadow-2xl ${project.glowColor} transition-all duration-300`}
            >
              {/* Top gradient accent */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.accentColor}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl border ${project.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-5 w-5 ${project.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-foreground gap-1.5 text-xs"
                    asChild
                    data-testid={`button-github-project-${project.id}`}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className={`flex-1 rounded-full bg-gradient-to-r ${project.accentColor} text-white hover:opacity-90 gap-1.5 text-xs border-0`}
                    asChild
                    data-testid={`button-demo-project-${project.id}`}
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
