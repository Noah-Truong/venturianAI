"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { AlertCircle, GitBranch, Layers, Code2 } from "lucide-react";

const features = [
  {
    icon: AlertCircle,
    outcome: "Your AI features stop regressing in production.",
    description:
      "Automated evaluation catches model quality drift before your users do. Set pass/fail thresholds, get paged when outputs degrade, and see exactly which cases broke and why.",
    label: "Evaluation",
  },
  {
    icon: GitBranch,
    outcome: "Debug LLM failures in minutes, not days.",
    description:
      "Structured tracing built for call chains. Every prompt, completion, and tool call is logged with full context, token counts, and latency — searchable and filterable by run.",
    label: "Observability",
  },
  {
    icon: Layers,
    outcome: "Handle 10× traffic without rearchitecting.",
    description:
      "Managed inference that auto-scales and supports hot model swaps. Your team ships features; we handle capacity, routing, and failover.",
    label: "Deployment",
  },
  {
    icon: Code2,
    outcome: "Type-safe LLM responses in your existing codebase.",
    description:
      "SDK with Zod-validated outputs. Define the shape you expect, and Meridian parses model responses into typed objects — with fallbacks when the output doesn't conform.",
    label: "SDK",
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

        {/* Section header */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20"
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            What you get from day one
          </p>
          <h2 id="features-heading" className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
            Four problems solved.<br />One platform.
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--rule)" }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.label}
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 lg:p-10 transition-colors duration-200"
                style={{ backgroundColor: "var(--paper)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "color-mix(in srgb, var(--ink) 3%, var(--paper))";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--paper)";
                }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="p-2 rounded-sm"
                    style={{ backgroundColor: "color-mix(in srgb, var(--accent) 12%, var(--paper))" }}
                  >
                    <Icon size={18} aria-hidden="true" style={{ color: "var(--accent)" }} />
                  </div>
                  <span
                    className="font-mono text-xs tracking-widest uppercase mt-2.5"
                    style={{ color: "var(--muted)" }}
                  >
                    {f.label}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug tracking-tight mb-4" style={{ color: "var(--ink)" }}>
                  {f.outcome}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", maxWidth: "48ch" }}>
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
