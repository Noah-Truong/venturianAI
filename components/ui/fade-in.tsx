"use client";

import { motion, useReducedMotion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  children: React.ReactNode;
}

export function FadeIn({
  delay = 0,
  direction = "up",
  children,
  ...props
}: FadeInProps) {
  const shouldReduce = useReducedMotion();

  const offsets = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  };

  return (
    <motion.div
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, ...offsets[direction] }}
      whileInView={shouldReduce ? {} : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
