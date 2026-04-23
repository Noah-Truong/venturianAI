"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const evalLines = [
  { type: "cmd",    text: "$ meridian eval run --suite production-v2" },
  { type: "blank",  text: "" },
  { type: "info",   text: "  Loading 127 evaluation cases..." },
  { type: "info",   text: "  ████████████████████ 100%" },
  { type: "blank",  text: "" },
  { type: "pass",   text: "  ✓  124 passed" },
  { type: "fail",   text: "  ✗    3 regressions detected" },
  { type: "blank",  text: "" },
  { type: "alert",  text: "  ALERT  gpt-4o · summary model" },
  { type: "detail", text: "         ROUGE-L  0.71 → 0.62  (−12.4%)" },
  { type: "detail", text: "         Threshold breached at 0.65" },
  { type: "blank",  text: "" },
  { type: "cmd",    text: "  → Paging soren@meridianai.com" },
];

const colorMap: Record<string, string> = {
  cmd:    "#8ECAE6",
  info:   "var(--muted)",
  pass:   "#52B788",
  fail:   "#E63946",
  alert:  "#F4A261",
  detail: "#9A9590",
  blank:  "transparent",
};

export function Hero() {
  const reduce = useReducedMotion();

  const up = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  });

  return (
    <section
      className="min-h-[88vh] flex items-center py-24 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 lg:gap-20 items-center">

        {/* ── Left column ── */}
        <div>
          <motion.p
            {...up(0.05)}
            className="font-mono text-xs tracking-widest uppercase mb-8"
            style={{ color: "var(--muted)" }}
          >
            AI Infrastructure · San Francisco, CA · Est. 2022
          </motion.p>

          <motion.h1
            {...up(0.1)}
            id="hero-heading"
            className="text-[clamp(2.75rem,6vw,5rem)] font-bold leading-[1.04] tracking-tight mb-8"
            style={{ color: "var(--ink)" }}
          >
            AI infrastructure
            <br />
            that holds up
            <br />
            under real load.
          </motion.h1>

          <motion.p
            {...up(0.18)}
            className="text-lg leading-relaxed mb-10"
            style={{ color: "var(--muted)", maxWidth: "54ch" }}
          >
            Meridian gives engineering teams the evaluation frameworks,
            deployment tooling, and reliability primitives to ship AI models
            in production — without flying blind.
          </motion.p>

          <motion.div {...up(0.25)} className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium transition-colors duration-150 min-h-[44px]"
              style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--ink)";
              }}
            >
              Request infrastructure access <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium transition-colors duration-150 min-h-[44px]"
              style={{ border: "1px solid var(--rule)", color: "var(--ink)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--rule)";
              }}
            >
              See how it works
            </Link>
          </motion.div>
        </div>

        {/* ── Right column: eval terminal ── */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-sm overflow-hidden"
          style={{
            backgroundColor: "var(--code-bg)",
            border: "1px solid var(--code-rule)",
          }}
          aria-label="Meridian AI evaluation output example"
        >
          {/* Terminal chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ borderBottom: "1px solid var(--code-rule)" }}
          >
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F56" }} aria-hidden="true" />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }} aria-hidden="true" />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27C93F" }} aria-hidden="true" />
            <span className="ml-3 font-mono text-xs" style={{ color: "#6B6560" }}>
              meridian eval · production-v2
            </span>
          </div>

          {/* Terminal output */}
          <div className="p-5 lg:p-6">
            {evalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={reduce ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 + i * 0.018, duration: 0.15 }}
                className="font-mono text-xs leading-6"
                style={{ color: colorMap[line.type] }}
              >
                {line.text || " "}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
