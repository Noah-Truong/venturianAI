"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";

const team = [
  {
    id: "emp_001",
    name: "Soren Halverson",
    title: "Co-Founder & CEO",
    dept: "Leadership",
    location: "San Francisco, CA",
    bio: "Previously led ML infrastructure at Stripe. Obsessed with making AI systems reliable at scale.",
    initials: "SH",
  },
  {
    id: "emp_002",
    name: "Priya Nambiar",
    title: "VP of Engineering",
    dept: "Engineering",
    location: "San Francisco, CA",
    bio: "Distributed systems engineer. Built core infra at Databricks before joining as employee #4.",
    initials: "PN",
  },
  {
    id: "emp_003",
    name: "James Okafor",
    title: "Staff Research Scientist",
    dept: "Research",
    location: "New York, NY",
    bio: "PhD in computational linguistics from CMU. Focus on evaluation frameworks and model robustness.",
    initials: "JO",
  },
  {
    id: "emp_004",
    name: "Camille Renard",
    title: "Head of Product",
    dept: "Product",
    location: "San Francisco, CA",
    bio: "Former PM at Linear and Vercel. Brings a developer-tools lens to every product decision.",
    initials: "CR",
  },
  {
    id: "emp_005",
    name: "Tariq Essawi",
    title: "Senior Software Engineer",
    dept: "Engineering",
    location: "London, UK",
    bio: "Full-stack with a backend lean. Owns the API layer and developer SDK.",
    initials: "TE",
  },
  {
    id: "emp_006",
    name: "Yuki Tanaka",
    title: "Lead Designer",
    dept: "Design",
    location: "San Francisco, CA",
    bio: "Previously at Figma. Believes that design systems are the highest-impact work a designer can do.",
    initials: "YT",
  },
  {
    id: "emp_007",
    name: "Amara Diallo",
    title: "Research Engineer",
    dept: "Research",
    location: "San Francisco, CA",
    bio: "Masters from Stanford AI Lab. Bridges research and production, turning papers into shipped features.",
    initials: "AD",
  },
  {
    id: "emp_008",
    name: "Devon Park",
    title: "Enterprise Account Executive",
    dept: "GTM",
    location: "New York, NY",
    bio: "Focused on financial services and healthcare verticals. Loves the consultative, technical sale.",
    initials: "DP",
  },
];

const deptColor: Record<string, string> = {
  Leadership: "#B85C38",
  Engineering: "#2C7A7B",
  Research:    "#4A5568",
  Product:     "#6B46C1",
  Design:      "#B7791F",
  GTM:         "#276749",
};

export function Team() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            The team
          </p>
          <h2 id="team-heading" className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>
            Built by people who've
            <br />shipped AI at scale before.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "var(--rule)" }}>
          {team.map((person, i) => (
            <motion.article
              key={person.id}
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 transition-colors duration-150"
              style={{ backgroundColor: "var(--paper)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "color-mix(in srgb, var(--ink) 3%, var(--paper))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--paper)";
              }}
            >
              {/* Avatar */}
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center text-sm font-bold text-white mb-5"
                style={{ backgroundColor: deptColor[person.dept] ?? "#555" }}
                aria-hidden="true"
              >
                {person.initials}
              </div>

              {/* Name + title */}
              <p className="text-sm font-medium mb-0.5" style={{ color: "var(--ink)" }}>
                {person.name}
              </p>
              <p className="text-xs mb-1" style={{ color: "var(--accent)" }}>
                {person.title}
              </p>
              <p className="font-mono text-[10px] tracking-wider uppercase mb-4" style={{ color: "var(--muted)" }}>
                {person.location}
              </p>

              {/* Bio */}
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
