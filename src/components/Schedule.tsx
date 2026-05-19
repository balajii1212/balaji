import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, User, Mail, MessageSquare } from "lucide-react";
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

const scheduleSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().min(5, "Please describe the purpose of the appointment"),
});

type ScheduleFormValues = z.infer<typeof scheduleSchema>;

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: { name: "", email: "", date: "", time: "", message: "" },
  });

  const onSubmit = (_data: ScheduleFormValues) => {
    toast.success("Appointment scheduled! I'll confirm via email.");
    form.reset();
  };

  return (
    <section id="schedule" className="w-full py-24 px-4 md:px-8 max-w-3xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="text-primary font-mono text-sm tracking-widest uppercase">Let's Talk</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-foreground">Schedule Appointment</h2>
        <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
          Want to discuss a project, opportunity, or just have a tech conversation? Book a time that works for you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div className="glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-sm flex items-center gap-2">
                        <User className="h-3.5 w-3.5" /> Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          className="bg-white/5 border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60"
                          data-testid="input-schedule-name"
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
                      <FormLabel className="text-muted-foreground text-sm flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5" /> Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-white/5 border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60"
                          data-testid="input-schedule-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-sm flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5" /> Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          className="bg-white/5 border-white/10 focus:border-primary/50 text-foreground [color-scheme:dark]"
                          data-testid="input-schedule-date"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-sm flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5" /> Time
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          className="bg-white/5 border-white/10 focus:border-primary/50 text-foreground [color-scheme:dark]"
                          data-testid="input-schedule-time"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground text-sm flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5" /> Purpose / Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Briefly describe what you'd like to discuss..."
                        rows={4}
                        className="bg-white/5 border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 resize-none"
                        data-testid="input-schedule-message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 font-semibold gap-2 border-0 text-base"
                data-testid="button-schedule-appointment"
              >
                <Calendar className="h-4 w-4" />
                Schedule Appointment
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </section>
  );
}
