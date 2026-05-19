import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Code, Cpu, Zap } from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech in Computer Science Engineering",
    description:
      "Enrolled at CMR College of Engineering and Technology, Hyderabad. Began building strong foundations in programming, algorithms, and software engineering principles.",
    icon: GraduationCap,
    color: "text-primary",
    dotColor: "bg-primary",
    borderColor: "border-primary/20",
    bg: "bg-primary/10",
  },
  {
    year: "2023 – 2024",
    title: "Learned Web Development",
    description:
      "Mastered the modern web stack — HTML, CSS, JavaScript, React, and Tailwind CSS. Built multiple projects to sharpen front-end skills and understand full-stack fundamentals.",
    icon: Code,
    color: "text-blue-400",
    dotColor: "bg-blue-400",
    borderColor: "border-blue-400/20",
    bg: "bg-blue-400/10",
  },
  {
    year: "2024",
    title: "Built AI Projects",
    description:
      "Developed the Email Spam Detection system using NLP and Machine Learning, and the Digital Attendance Management System. Started applying AI techniques to real-world problems.",
    icon: Cpu,
    color: "text-secondary",
    dotColor: "bg-secondary",
    borderColor: "border-secondary/20",
    bg: "bg-secondary/10",
  },
  {
    year: "2024 – Present",
    title: "Exploring Automation & Agentic AI",
    description:
      "Diving into the frontier of Agentic AI workflows, automation tools, and AI assistants. Building systems that reason, plan, and act autonomously to augment human productivity.",
    icon: Zap,
    color: "text-yellow-400",
    dotColor: "bg-yellow-400",
    borderColor: "border-yellow-400/20",
    bg: "bg-yellow-400/10",
  },
];

export default function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="w-full py-24 px-4 md:px-8 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="text-primary font-mono text-sm tracking-widest uppercase">My Path</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-foreground">Journey</h2>
        <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden md:block" />

        <div className="flex flex-col gap-10">
          {timeline.map((item, i) => {
            const Icon = item.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                className={`relative flex items-center gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Card */}
                <div className={`flex-1 md:${isLeft ? "pr-12" : "pl-12"}`}>
                  <div className={`glass-card rounded-2xl p-6 border ${item.borderColor} hover:border-white/20 transition-all duration-300`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-xl border ${item.borderColor} ${item.bg}`}>
                        <Icon className={`h-4 w-4 ${item.color}`} />
                      </div>
                      <span className={`text-xs font-mono font-semibold ${item.color} tracking-wider uppercase`}>
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-background items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${item.dotColor} shadow-lg`} />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
