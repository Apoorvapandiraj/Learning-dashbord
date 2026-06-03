"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const GLOWS: Record<string, string> = {
  cyan:   "rgba(0,216,255,0.55)",
  purple: "rgba(176,96,255,0.55)",
  green:  "rgba(57,211,83,0.55)",
  amber:  "rgba(245,166,35,0.55)",
  none:   "transparent",
};

interface BentoTileProps {
  children: ReactNode;
  className?: string;
  glow?: "cyan" | "purple" | "green" | "amber" | "none";
  index?: number;
}

export function BentoTile({ children, className = "", glow = "none", index = 0 }: BentoTileProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.015, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{
        background: "#161b22",
        border: "1px solid #21262d",
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      {/* Top glow line */}
      {glow !== "none" && (
        <div
          className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
          style={{ background: `linear-gradient(90deg, transparent, ${GLOWS[glow]}, transparent)` }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </motion.article>
  );
}
