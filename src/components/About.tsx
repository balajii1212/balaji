import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Code2 } from "lucide-react";

const stats = [
  { value: "1+", label: "Years Learning" },
  { value: "10+", label: "Projects Built" },
  { value: "8+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="w-full py-24 px-4 md:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="text-primary font-mono text-sm tracking-widest uppercase">Who I Am</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-foreground">About Me</h2>
        <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Education card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="glass-card rounded-2xl p-8 border border-white/10 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-foreground">Bachelor of Technology</p>
                <p className="text-primary font-medium">Computer Science Engineering</p>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-secondary" />
                <span>CMR College of Engineering and Technology, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4 shrink-0 text-secondary" />
                <span>2023 – Present &nbsp;·&nbsp; 4th Year</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-xl bg-white/5 border border-white/10 p-4 text-center"
                >
                  <p className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: About text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="glass-card rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-xl bg-secondary/10 border border-secondary/20">
                <Code2 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">My Story</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                I'm a passionate Computer Science Engineering student with a deep love for software development and emerging technologies. My journey began with curiosity about how software shapes the world around us — and that curiosity hasn't stopped since.
              </p>
              <p>
                I enjoy building modern, user-centric web applications that solve real-world problems. Whether it's crafting clean UI or architecting backend logic, I bring a problem-solving mindset to everything I build.
              </p>
              <p>
                Currently, I'm diving deep into the world of <span className="text-primary font-medium">Agentic AI</span> and <span className="text-secondary font-medium">automation tools</span> — exploring how intelligent workflows can augment human productivity. I believe AI isn't the future — it's the now, and I want to be at the frontier of it.
              </p>
              <p>
                When I'm not coding, I'm reading about new tech, experimenting with AI tools, or working on projects that push my boundaries.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
