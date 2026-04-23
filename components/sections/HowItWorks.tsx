"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Connect your model endpoint",
    description:
      "Point Meridian at any model API — self-hosted, fine-tuned, or a third-party provider. No agent code to run, no SDK to integrate. One environment variable.",
    code: `MERIDIAN_ENDPOINT=https://api.your-model.com\nMERIDIAN_KEY=mk_live_...`,
  },
  {
    number: "02",
    title: "Define your evaluation suite",
    description:
      "Write test cases in plain JSON or import from your existing datasets. Define what correct looks like — exact match, LLM-as-judge, or custom Python scorers.",
    code: `{\n  "suite": "production-v2",\n  "cases": 1240,\n  "scorers": ["accuracy", "hallucination", "latency"]\n}`,
  },
  {
    number: "03",
    title: "Deploy with a verified green signal",
    description:
      "Meridian runs your suite on every build and gates deployment. If scores regress past your threshold, the deploy stops and you get a diff showing exactly what changed.",
    code: `✓ All checks passed (1240/1240)\n✓ No regressions vs baseline\n✓ Deploying to production...`,
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            How it works
          </p>
          <h2 id="how-heading" className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>
            Up and running
            <br />in an afternoon.
          </h2>
        </motion.div>

        {steps.map(({ number, title, description, code }, i) => (
          <motion.div
            key={number}
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 py-12 border-t"
            style={{ borderColor: "var(--rule)" }}
          >
            <div className="flex flex-col gap-4">
              <span
                className="text-5xl font-bold tabular-nums"
                style={{ color: "color-mix(in srgb, var(--rule) 60%, var(--paper))" }}
              >
                {number}
              </span>
              <h3 className="text-xl font-bold" style={{ color: "var(--ink)" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", maxWidth: "45ch" }}>
                {description}
              </p>
            </div>
            <div
              className="rounded-sm p-5"
              style={{ backgroundColor: "var(--code-bg)", border: "1px solid var(--code-rule)" }}
            >
              <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap overflow-x-auto" style={{ color: "#52B788" }}>
                <code>{code}</code>
              </pre>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
