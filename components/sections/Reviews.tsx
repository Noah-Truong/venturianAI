"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "t_001",
    rating: 5,
    quote:
      "I earned $1,200 in my first month without lifting a finger. The team did everything.",
    name: "Sarah Chen",
    detail: "Stanford · Class of 2026",
    earned: "$300 avg/week",
  },
  {
    id: "t_002",
    rating: 5,
    quote:
      "Finally something legit for students. Felt skeptical at first — now my friends are joining.",
    name: "Marcus Wright",
    detail: "MIT · Class of 2025",
    earned: "$265 avg/week",
  },
  {
    id: "t_003",
    rating: 5,
    quote:
      "I signed up during finals week, forgot about it completely, and had $800 sitting in my account three weeks later. I've been getting consistent weekly deposits ever since.",
    name: "Jordan M.",
    detail: "UC Berkeley · member since Nov 2025",
    earned: "$210 avg/week",
  },
  {
    id: "t_004",
    rating: 5,
    quote:
      "I was skeptical — it sounds too simple. But the identity check was legitimate, the dashboard is transparent about where every dollar comes from, and payouts have never missed a week.",
    name: "Priya K.",
    detail: "Grad student, Computer Science · member since Sep 2025",
    earned: "$240 avg/week",
  },
  {
    id: "t_005",
    rating: 5,
    quote:
      "Setup was exactly as advertised — five minutes, verified in two days. My only gripe is that I wish I'd found this earlier. Over $4,000 paid out so far with zero effort after signup.",
    name: "Aaliya R.",
    detail: "NYU · member since Aug 2025",
    earned: "$380 avg/week",
  },
  {
    id: "t_006",
    rating: 5,
    quote:
      "Every week my account gets a deposit. I don't do anything for it. I've referred three roommates and all of them are active. Easiest extra income I've ever had.",
    name: "Sam L.",
    detail: "Columbia University · member since Oct 2025",
    earned: "$290 avg/week",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          aria-hidden="true"
          fill={i < count ? "var(--accent)" : "none"}
          style={{ color: i < count ? "var(--accent)" : "var(--rule)" }}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            For students
          </p>
          <h2 id="reviews-heading" className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>
            Built around
            <br />your schedule.
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: "var(--muted)", maxWidth: "52ch" }}>
            Whether you&apos;re between classes, in the library, or asleep — you&apos;re earning.
            No tasks, no quotas, no pressure. Just steady weekly income while you focus on school.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--rule)" }}>
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.07 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="p-8 flex flex-col gap-5 transition-colors duration-150"
              style={{ backgroundColor: "var(--surface)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--overlay)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface)")}
            >
              <div className="flex items-center justify-between">
                <Stars count={t.rating} />
                <span className="font-mono text-xs font-medium" style={{ color: "var(--accent)" }}>
                  {t.earned}
                </span>
              </div>

              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "1rem" }}>
                <p className="text-sm font-medium mb-0.5" style={{ color: "var(--ink)" }}>{t.name}</p>
                <p className="font-mono text-[11px]" style={{ color: "var(--muted)" }}>{t.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
