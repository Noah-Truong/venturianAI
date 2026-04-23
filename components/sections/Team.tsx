"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { employees } from "@/lib/data";

const deptColor: Record<string, string> = {
  Leadership: "#B85C38",
  Engineering: "#2C7A7B",
  Research:    "#4A5568",
  Product:     "#6B46C1",
  Design:      "#B7791F",
  GTM:         "#276749",
};

const deptOrder = ["Leadership", "Engineering", "Research", "Product", "Design", "GTM"];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("");
}

export function Team() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const sorted = [...employees].sort((a, b) => {
    const ai = deptOrder.indexOf(a.department);
    const bi = deptOrder.indexOf(b.department);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  return (
    <section
      id="team"
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            The team
          </p>
          <h2 id="team-heading" className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>
            Built by people who&apos;ve
            <br />shipped AI at scale before.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "var(--rule)" }}>
          {sorted.map((person, i) => (
            <motion.article
              key={person.id}
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="p-7 transition-colors duration-150"
              style={{ backgroundColor: "var(--surface)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--overlay)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface)")}
            >
              {/* Avatar — replace with real photos per reference.json tc_003 */}
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center text-sm font-bold text-white mb-5 select-none"
                style={{ backgroundColor: deptColor[person.department] ?? "#555" }}
                aria-hidden="true"
              >
                {getInitials(person.name)}
              </div>

              <p className="text-sm font-medium mb-0.5" style={{ color: "var(--ink)" }}>
                {person.name}
              </p>
              <p className="text-xs mb-1" style={{ color: "var(--accent)" }}>
                {person.title}
              </p>
              <p className="font-mono text-[10px] tracking-wider uppercase mb-4" style={{ color: "var(--muted)" }}>
                {person.location}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                {person.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
