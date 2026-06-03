"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ProgressBar({ value, color = "#00d8ff" }: { value: number; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: "#0d1117" }}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}66, ${color})` }}
        initial={{ width: "0%" }}
        animate={inView ? { width: `${value}%` } : { width: "0%" }}
        transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
      />
    </div>
  );
}
