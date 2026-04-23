"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { HandshakeIcon } from "@/components/ui/handshake-icon";

const steps = [
  {
    number: "01",
    time: "~1 minute",
    title: "Create your Handshake account",
    description:
      "Sign up using your .edu email address and connect your Handshake profile. This takes about a minute. No credit card, no fee, no commitment.",
    code: `Email:   jordan@university.edu\nPlatform: Handshake\n\n→ Account created. Check your email.`,
  },
  {
    number: "02",
    time: "1–3 business days",
    title: "We verify your profile",
    description:
      "Our team reviews your information to confirm you're an active student. Most verifications complete in under 24 hours. You'll get an email the moment you're confirmed.",
    code: `Status:   Verification in progress\nSubmitted: Apr 22, 9:41 AM\n\n✓ .edu email confirmed\n✓ Handshake profile reviewed\n→ Email confirmation incoming`,
  },
  {
    number: "03",
    time: "seamless — nothing on your end",
    title: "We handle setup and integration",
    description:
      "Your account is connected to our partner AI training pipeline. There's nothing technical required from you — our team handles the entire integration.",
    code: `Pipeline:  Connected\nPartners:  3 active\nStatus:    Running\n\n→ Setup complete. Earnings active.`,
  },
  {
    number: "04",
    time: "every week after that",
    title: "You receive weekly payments",
    description:
      "Earnings are deposited directly to your account every week. Average students earn $200–$500 per week with zero ongoing work after the initial setup.",
    code: `✓ Week of Apr 21 — $312.00\n✓ Week of Apr 14 — $287.50\n✓ Week of Apr 07 — $341.80\n\n→ Deposited to account ****4821`,
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
            From signup to
            <br />weekly payments.
          </h2>
        </motion.div>

        {steps.map(({ number, time, title, description, code }, i) => (
          <motion.div
            key={number}
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 py-12 border-t"
            style={{ borderColor: "var(--rule)" }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-4">
                <span
                  className="text-5xl font-bold tabular-nums"
                  style={{ color: "color-mix(in srgb, var(--rule) 60%, var(--paper))" }}
                >
                  {number}
                </span>
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                  {time}
                </span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: "var(--ink)" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", maxWidth: "45ch" }}>
                {description}
              </p>
              {number === "01" && (
                <Link
                  href="https://app.joinhandshake.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 self-start px-4 py-2.5 text-sm font-medium transition-colors duration-150 min-h-[44px]"
                  style={{
                    border: "1px solid var(--rule)",
                    color: "var(--ink)",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#B4E234";
                    el.style.backgroundColor = "#F6FCEA";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--rule)";
                    el.style.backgroundColor = "transparent";
                  }}
                >
                  <HandshakeIcon size={18} />
                  Sign up on Handshake <span aria-hidden="true">→</span>
                </Link>
              )}
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
