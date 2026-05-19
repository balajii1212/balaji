import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    label: "Email",
    value: "tipperavenibalaji172@gmail.com",
    icon: Mail,
    href: "mailto:tipperavenibalaji172@gmail.com",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    copyable: true,
  },
  {
    label: "GitHub",
    value: "github.com/balajii1212",
    icon: Github,
    href: "https://github.com/balajii1212",
    color: "text-foreground",
    bg: "bg-white/5 border-white/10",
    copyable: false,
  },
  {
    label: "LinkedIn",
    value: "tipperaveni-balaji",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tipperaveni-balaji-b9ba0932b/",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
    copyable: false,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tipperavenibalaji172@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = (_data: ContactFormValues) => {
    toast.success("Message sent! I'll get back to you soon.");
    form.reset();
  };

  return (
    <section id="contact" className="w-full py-24 px-4 md:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="text-primary font-mono text-sm tracking-widest uppercase">Get In Touch</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-foreground">Contact Me</h2>
        <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-5"
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm always open to new opportunities, collaborations, or just a friendly conversation about tech. Feel free to reach out!
          </p>
          {contactInfo.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-xl p-4 border border-white/10 flex items-center gap-4 group hover:border-white/20 transition-all duration-300"
              >
                <div className={`p-2.5 rounded-xl border ${item.bg} shrink-0`}>
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`text-sm font-medium ${item.color} hover:underline truncate block`}
                    data-testid={`link-contact-${item.label.toLowerCase()}`}
                  >
                    {item.value}
                  </a>
                </div>
                {item.copyable && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="shrink-0 h-8 w-8 p-0 hover:bg-primary/10"
                    onClick={handleCopyEmail}
                    data-testid="button-copy-email"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                  </Button>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass-card rounded-2xl p-7 border border-white/10">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-sm">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="bg-white/5 border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60"
                          data-testid="input-contact-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-sm">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-white/5 border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60"
                          data-testid="input-contact-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-sm">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          rows={4}
                          className="bg-white/5 border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 resize-none"
                          data-testid="input-contact-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 font-medium gap-2 border-0"
                  data-testid="button-send-message"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
