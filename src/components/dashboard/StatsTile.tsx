"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Clock, Zap } from "lucide-react";

const STATS = [
  { label: "Active",    value: "4",   sub: "courses",    Icon: BookOpen, color: "#00d8ff" },
  { label: "Done",      value: "12",  sub: "completed",  Icon: Award,    color: "#b060ff" },
  { label: "Hours",     value: "148", sub: "total",      Icon: Clock,    color: "#39d353" },
  { label: "Level",     value: "24",  sub: "rank #142",  Icon: Zap,      color: "#f5a623" },
];

export function StatsTile() {
  return (
    <div className="p-5 h-full flex flex-col gap-3">
      <h2 className="text-sm font-semibold" style={{ color: "#e6edf3" }}>Overview</h2>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {STATS.map(({ label, value, sub, Icon, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.06, type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col gap-1.5 p-3 rounded-lg"
            style={{ background: "#1c2128", border: "1px solid #21262d" }}
          >
            <Icon size={13} color={color} />
            <div>
              <div className="text-xl font-bold leading-none"
                style={{ color, fontFamily: "JetBrains Mono, monospace" }}>{value}</div>
              <div className="text-xs font-medium mt-0.5" style={{ color: "#8b949e" }}>{label}</div>
              <div className="text-[10px]" style={{ color: "#484f58", fontFamily: "JetBrains Mono, monospace" }}>{sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
