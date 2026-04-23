"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const earningsLines = [
  { type: "header", text: "Venturian · Your earnings" },
  { type: "divider", text: "─────────────────────────────" },
  { type: "blank", text: "" },
  { type: "label", text: "  This week" },
  { type: "amount", text: "  $172.80" },
  { type: "blank", text: "" },
  { type: "source", text: "  ✓  Helix Financial        $14.20" },
  { type: "source", text: "  ✓  Lattice Labs           $16.40" },
  { type: "source", text: "  ✓  Ironclad AI            $12.20" },
  { type: "blank", text: "" },
  { type: "divider", text: "─────────────────────────────" },
  { type: "label", text: "  All-time total" },
  { type: "alltime", text: "  $891.40" },
  { type: "blank", text: "" },
  { type: "next", text: "  Next payout: Friday, Apr 25" },
  { type: "status", text: "  → Direct deposit confirmed" },
];

const colorMap: Record<string, string> = {
  header:  "var(--paper)",
  divider: "var(--code-rule)",
  blank:   "transparent",
  label:   "var(--paper)",
  amount:  "#52B788",
  source:  "var(--paper)",
  alltime: "var(--ink)",
  next:    "var(--paper)",
  status:  "var(--accent)",
};

export function Hero() {
  const reduce = useReducedMotion();

  const up = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.45,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      className="min-h-[88vh] flex items-center py-24 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-center">

        {/* ── Left column ── */}
        <div>
          <motion.p
            {...up(0.05)}
            className="font-mono text-xs tracking-widest uppercase mb-8"
            style={{ color: "var(--muted)" }}
          >
            Venturian AI · Built by students, for students
          </motion.p>

          <motion.h1
            {...up(0.1)}
            id="hero-heading"
            className="text-[clamp(2.75rem,6vw,5rem)] font-bold leading-[1.04] tracking-tight mb-8"
            style={{ color: "var(--ink)" }}
          >
            Earn weekly
            <br />
            by supporting
            <br />
            real AI systems.
          </motion.h1>

          <motion.p
            {...up(0.18)}
            className="text-lg leading-relaxed mb-10"
            style={{ color: "var(--muted)", maxWidth: "52ch" }}
          >
            Venturian connects student accounts to AI training pipelines.
            Sign up with your .edu email. Setup takes 5 minutes. Verification takes 1–3 days.
            After that, $200–$500 deposits to your bank every week — with nothing else required.
          </motion.p>

          <motion.div {...up(0.25)} className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#signup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium transition-colors duration-150 min-h-[44px]"
              style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--ink)")}
            >
              Create your account <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium transition-colors duration-150 min-h-[44px]"
              style={{ border: "1px solid var(--rule)", color: "var(--ink)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--ink)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--rule)")}
            >
              See how it works
            </Link>
          </motion.div>

          <motion.p
            {...up(0.32)}
            className="mt-6 font-mono text-xs"
            style={{ color: "var(--dim)" }}
          >
            .edu email required. No ongoing work. $200–$500 avg weekly via direct deposit.
          </motion.p>
        </div>

        {/* ── Right column: earnings panel ── */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.28,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="rounded-sm overflow-hidden"
          style={{ backgroundColor: "var(--code-bg)", border: "1px solid var(--code-rule)" }}
          aria-label="Example Venturian earnings dashboard"
        >
          {/* Panel chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ borderBottom: "1px solid var(--code-rule)" }}
          >
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" aria-hidden="true" />
            <span className="ml-3 font-mono text-xs" style={{ color: "#71717A" }}>
              member dashboard · week of Apr 21
            </span>
          </div>

          {/* Earnings output */}
          <div className="p-5 lg:p-6">
            {earningsLines.map((line, i) => (
              <motion.div
                key={i}
                initial={reduce ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 + i * 0.022, duration: 0.15 }}
                className="font-mono text-xs leading-6"
                style={{ color: colorMap[line.type] }}
              >
                {line.text || " "}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
