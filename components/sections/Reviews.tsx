"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { Star } from "lucide-react";
import { reviews } from "@/lib/data";

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
      id="careers"
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
            Life at Meridian
          </p>
          <h2 id="reviews-heading" className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>
            Honest accounts from
            <br />people who work here.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--rule)" }}>
          {reviews.map((r, i) => (
            <motion.article
              key={r.id}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.07 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="p-8 flex flex-col gap-5 transition-colors duration-150"
              style={{ backgroundColor: "var(--surface)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--overlay)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface)")}
            >
              <div className="flex items-center justify-between">
                <Stars count={r.rating} />
                <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: "var(--muted)" }}>
                  <time dateTime={r.date}>{r.date}</time>
                </span>
              </div>

              <h3 className="text-base font-bold leading-snug" style={{ color: "var(--ink)" }}>
                &ldquo;{r.title}&rdquo;
              </h3>

              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {r.body}
              </p>

              <div className="space-y-2 pt-2" style={{ borderTop: "1px solid var(--rule)" }}>
                <div className="flex gap-2 text-xs">
                  <span className="font-medium" style={{ color: "#52B788" }}>+</span>
                  <span style={{ color: "var(--muted)" }}>{r.pros}</span>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="font-medium" style={{ color: "#E63946" }}>−</span>
                  <span style={{ color: "var(--muted)" }}>{r.cons}</span>
                </div>
              </div>

              <p className="font-mono text-[11px] tracking-wide uppercase" style={{ color: "var(--muted)" }}>
                {r.role}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
