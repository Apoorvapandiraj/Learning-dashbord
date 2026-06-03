"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { Course } from "@/types";

const PALETTES = [
  { bg: "rgba(0,216,255,0.08)",   accent: "#00d8ff", glow: "rgba(0,216,255,0.15)" },
  { bg: "rgba(176,96,255,0.08)",  accent: "#b060ff", glow: "rgba(176,96,255,0.15)" },
  { bg: "rgba(57,211,83,0.08)",   accent: "#39d353", glow: "rgba(57,211,83,0.15)" },
  { bg: "rgba(245,166,35,0.08)",  accent: "#f5a623", glow: "rgba(245,166,35,0.15)" },
];

export function CourseCard({ course, index }: { course: Course; index: number }) {
  const p = PALETTES[index % PALETTES.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 + index * 0.09, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="relative rounded-xl overflow-hidden cursor-pointer flex flex-col h-full"
      style={{
        background: "#161b22",
        border: "1px solid #21262d",
        boxShadow: "0 2px 8px rgba(0,0,0,0.35)",
        minHeight: 180,
      }}
    >
      {/* Gradient mesh */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 0% 0%, ${p.glow} 0%, transparent 65%)` }} />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${p.accent}88, transparent)` }} />

      <div className="relative z-10 p-5 flex flex-col gap-4 h-full">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: p.bg }}>
          <DynamicIcon name={course.icon_name} size={18} color={p.accent} />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold leading-snug mb-1" style={{ color: "#e6edf3" }}>
            {course.title}
          </h3>
          <p className="text-xs" style={{ color: "#484f58", fontFamily: "JetBrains Mono, monospace" }}>
            {course.progress}% complete
          </p>
        </div>

        {/* Progress */}
        <div className="space-y-1.5">
          <ProgressBar value={course.progress} color={p.accent} />
          <div className="flex justify-between">
            <span className="text-xs" style={{ color: "#484f58", fontFamily: "JetBrains Mono, monospace" }}>Progress</span>
            <span className="text-xs font-semibold" style={{ color: p.accent, fontFamily: "JetBrains Mono, monospace" }}>
              {course.progress}%
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
