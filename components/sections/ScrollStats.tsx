"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const stats = [
  { prefix: "$", value: 350, suffix: "+", label: "Average weekly earnings", decimals: 0 },
  { prefix: "",  value: 5,   suffix: " min", label: "To get started", decimals: 0 },
  { prefix: "",  value: 0,   suffix: " hrs", label: "Of ongoing work required", decimals: 0 },
];

const tickerItems = [
  { name: "Sarah C.",   school: "Stanford",    amount: "+$312.00", week: "Apr 21" },
  { name: "Marcus W.",  school: "MIT",          amount: "+$265.50", week: "Apr 21" },
  { name: "Jordan M.",  school: "UC Berkeley",  amount: "+$287.00", week: "Apr 21" },
  { name: "Priya K.",   school: "USC",          amount: "+$341.80", week: "Apr 14" },
  { name: "Aaliya R.",  school: "NYU",          amount: "+$298.40", week: "Apr 14" },
  { name: "Sam L.",     school: "Columbia",     amount: "+$319.20", week: "Apr 14" },
  { name: "Devon P.",   school: "UCLA",         amount: "+$275.60", week: "Apr 07" },
  { name: "Camille R.", school: "UMich",        amount: "+$305.90", week: "Apr 07" },
];

function useCountUp(target: number, inView: boolean, reduce: boolean | null, duration = 1.6) {
  const [val, setVal] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setVal(target); return; }

    const start = performance.now();

    function tick(now: number) {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 4); // ease-out quart
      setVal(Math.round(eased * target));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    }

    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [inView, target, duration, reduce]);

  return val;
}

function StatCounter({ prefix, value, suffix, label, inView, reduce }: {
  prefix: string; value: number; suffix: string; label: string;
  inView: boolean; reduce: boolean | null;
}) {
  const count = useCountUp(value, inView, reduce);

  return (
    <div className="flex flex-col items-center text-center gap-2">
      <span
        className="text-5xl lg:text-6xl font-bold tabular-nums tracking-tight"
        style={{ color: "var(--ink)" }}
      >
        {prefix}{count}{suffix}
      </span>
      <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
        {label}
      </span>
    </div>
  );
}

// Duplicated items for seamless loop
const loopItems = [...tickerItems, ...tickerItems];

export function ScrollStats() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-24 overflow-hidden"
      style={{ borderBottom: "1px solid var(--rule)", backgroundColor: "var(--surface)" }}
      aria-label="Earnings statistics"
    >
      {/* ── Animated counters ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 mb-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <StatCounter {...s} inView={inView} reduce={reduce} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Live earnings ticker ── */}
      <div
        className="relative"
        style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}
      >
        <motion.div
          className="flex gap-0 py-3"
          animate={reduce ? {} : { x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ width: "max-content" }}
        >
          {loopItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 shrink-0"
              style={{ borderRight: "1px solid var(--rule)" }}
            >
              <span className="font-mono text-xs font-semibold" style={{ color: "#16a34a" }}>
                {item.amount}
              </span>
              <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>
                {item.name} · {item.school}
              </span>
              <span className="font-mono text-[10px]" style={{ color: "var(--dim)" }}>
                week of {item.week}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16"
          style={{ background: "linear-gradient(to right, var(--surface), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16"
          style={{ background: "linear-gradient(to left, var(--surface), transparent)" }}
        />
      </div>
    </section>
  );
}
