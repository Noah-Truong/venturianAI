"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";

// Replace with real customer logos (WebP/AVIF) and obtain written permission per reference.json tc_001
const companies = [
  { name: "Helix Financial", sector: "Financial Services" },
  { name: "Arc Health Systems", sector: "Healthcare" },
  { name: "Bastion Security", sector: "Cybersecurity" },
  { name: "Vanta Data", sector: "Data & Analytics" },
  { name: "Lattice Labs", sector: "Enterprise SaaS" },
  { name: "Ironclad AI", sector: "Legal Tech" },
];

const stats = [
  { value: "$41", label: "average weekly payout" },
  { value: "12,400+", label: "active members" },
  { value: "$2.1M+", label: "paid out to date" },
  { value: "99.8%", label: "payout success rate" },
];

// Replace with real linked press coverage per reference.json tc_006
const press = [
  { name: "TechCrunch", detail: "Series A Coverage" },
  { name: "The Information", detail: "AI Infrastructure Report" },
  { name: "MIT Tech Review", detail: "2025 Innovators" },
  { name: "VentureBeat", detail: "AI & Future of Work" },
  { name: "Bloomberg", detail: "Passive Income & AI" },
];

export function SocialProof() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-label="Member stats and company partners"
    >
      <div className="max-w-7xl mx-auto">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20 lg:mb-28" style={{ backgroundColor: "var(--rule)" }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? {} : { opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="flex flex-col items-center justify-center py-10 px-4 text-center"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <span className="text-3xl font-bold tracking-tight mb-1" style={{ color: "var(--accent)" }}>
                {s.value}
              </span>
              <span className="font-mono text-[11px] tracking-wider uppercase" style={{ color: "var(--muted)" }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* AI companies */}
        <motion.p
          initial={reduce ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-xs tracking-widest uppercase text-center mb-10"
          style={{ color: "var(--muted)" }}
        >
          AI companies your account supports
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px mb-20 lg:mb-28" style={{ backgroundColor: "var(--rule)" }}>
          {companies.map((c, i) => (
            <motion.div
              key={c.name}
              initial={reduce ? {} : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + 0.05 * i }}
              className="flex flex-col items-center justify-center py-8 px-4 text-center transition-colors duration-150"
              style={{ backgroundColor: "var(--surface)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--overlay)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface)")}
            >
              <span className="text-sm font-medium mb-1" style={{ color: "var(--ink)" }}>
                {c.name}
              </span>
              <span className="font-mono text-[11px]" style={{ color: "var(--muted)" }}>
                {c.sector}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="h-px mb-20" style={{ backgroundColor: "var(--rule)" }} />

        {/* Press */}
        <motion.p
          initial={reduce ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-mono text-xs tracking-widest uppercase text-center mb-10"
          style={{ color: "var(--muted)" }}
        >
          Coverage from
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {press.map((p, i) => (
            <motion.div
              key={p.name}
              initial={reduce ? {} : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + 0.06 * i }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-base font-bold tracking-tight" style={{ color: "var(--ink)" }}>
                {p.name}
              </span>
              <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: "var(--muted)" }}>
                {p.detail}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
