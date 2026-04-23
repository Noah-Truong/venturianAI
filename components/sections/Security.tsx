"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { ShieldCheck, Lock, FileCheck, Eye, Server, Mail } from "lucide-react";

const signals = [
  {
    icon: ShieldCheck,
    label: "SOC 2 Type II",
    detail: "Independently audited. Report available under NDA for enterprise prospects.",
  },
  {
    icon: Lock,
    label: "AES-256 encryption",
    detail: "All data encrypted at rest and in transit over TLS 1.3. Keys managed per-tenant.",
  },
  {
    icon: FileCheck,
    label: "GDPR & CCPA ready",
    detail: "Data processing agreements available. Deletion and export requests honoured within 72 hours.",
  },
  {
    icon: Eye,
    label: "Zero-log inference",
    detail: "Opt-in mode: no prompt or completion data is stored or used for training. Verified in audit.",
  },
  {
    icon: Server,
    label: "Single-tenant deployment",
    detail: "Data processing runs in an isolated VPC. Your account information never touches shared infrastructure.",
  },
  {
    icon: Mail,
    label: "Responsible disclosure",
    detail: "Report vulnerabilities to security@meridianai.com. We triage within 24 hours and patch within 14 days.",
  },
];

export function Security() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="security"
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-labelledby="security-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
              Security
            </p>
            <h2 id="security-heading" className="text-4xl font-bold tracking-tight leading-tight mb-6" style={{ color: "var(--ink)" }}>
              Your data is protected.
              Full stop.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)", maxWidth: "40ch" }}>
              We share anonymised signals with AI companies — never your name, payment
              info, or identifying details. Our compliance standards are the same ones
              banks and healthcare companies operate under.
            </p>
            <a
              href="mailto:security@meridianai.com"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--accent)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-dim)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
            >
              Contact security team <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: "var(--rule)" }}>
            {signals.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={reduce ? {} : { opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.07 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="p-7 transition-colors duration-150"
                  style={{ backgroundColor: "var(--surface)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--overlay)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface)")}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={16} aria-hidden="true" style={{ color: "var(--accent)" }} />
                    <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                      {s.label}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                    {s.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
