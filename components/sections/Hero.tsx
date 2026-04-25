"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

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

        {/* ── Right column: lifestyle image with earnings overlay ── */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.28,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="relative rounded-sm overflow-hidden"
          style={{ aspectRatio: "4/5" }}
          aria-label="Student earning weekly income with Venturian AI"
        >
          <Image
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=840&q=80"
            alt="Student working on laptop at a coffee shop, earning passive income"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 420px"
          />

          {/* Bottom gradient for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(9,9,11,0.92) 0%, rgba(9,9,11,0.25) 50%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Earnings overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs mb-2" style={{ color: "var(--paper)" }}>
              week of Apr 21 · direct deposit
            </p>
            <p
              className="text-4xl font-bold mb-1 tabular-nums"
              style={{ color: "#52B788" }}
            >
              $312.00
            </p>
            <p className="text-sm" style={{ color: "var(--paper)" }}>
              → Deposited to account ****4821
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
