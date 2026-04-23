"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { CalendarCheck, Banknote, ShieldCheck, Eye } from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    outcome: "Zero hours of ongoing work. Earnings arrive every week.",
    description:
      "Once your account is set up, Venturian manages every interaction with AI training pipelines on your behalf. No weekly tasks, no check-ins, no decisions to make. Whether you're in class, at the library, or asleep — you're earning.",
    label: "Passive",
  },
  {
    icon: Banknote,
    outcome: "$200–$500 deposited directly to your account each week.",
    description:
      "Earnings are calculated weekly and deposited directly via ACH or PayPal — your choice. Students average $200–$500 per week depending on pipeline activity. No experience or ongoing work required.",
    label: "Weekly pay",
  },
  {
    icon: Eye,
    outcome: "See exactly where your money came from.",
    description:
      "Your dashboard shows a line-by-line breakdown of every AI company your account supported that week, the amount earned from each, and your all-time total. No black boxes — full transparency on every dollar.",
    label: "Transparent",
  },
  {
    icon: ShieldCheck,
    outcome: "Every AI company is vetted before we accept them.",
    description:
      "Venturian only works with companies that have passed our compliance review — verified business registration, data handling agreements, and responsible AI use policies. Your account is never connected to an unvetted pipeline.",
    label: "Verified",
  },
];

export function Features() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-16 lg:mb-20"
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            Why it works
          </p>
          <h2 id="features-heading" className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
            Built around your time.
            <br />Not your effort.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden" style={{ backgroundColor: "var(--rule)" }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.label}
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="p-8 lg:p-10 transition-colors duration-200"
                style={{ backgroundColor: "var(--surface)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--overlay)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface)")}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="p-2 rounded-sm"
                    style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, var(--surface))" }}
                  >
                    <Icon size={18} aria-hidden="true" style={{ color: "var(--accent)" }} />
                  </div>
                  <span className="font-mono text-xs tracking-widest uppercase mt-2.5" style={{ color: "var(--muted)" }}>
                    {f.label}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-snug tracking-tight mb-4" style={{ color: "var(--ink)" }}>
                  {f.outcome}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", maxWidth: "48ch" }}>
                  {f.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
