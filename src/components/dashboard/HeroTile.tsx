"use client";

import { motion } from "framer-motion";
import { Flame, Clock, TrendingUp } from "lucide-react";

const STATS = [
  { icon: Flame,       value: "14",   label: "day streak",  color: "#f5a623" },
  { icon: Clock,       value: "2.5h", label: "today",       color: "#00d8ff" },
  { icon: TrendingUp,  value: "+340", label: "XP today",    color: "#b060ff" },
];

export function HeroTile() {
  const h = new Date().getHours();
  const greeting = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="p-6 h-full flex flex-col justify-between min-h-[200px] relative overflow-hidden">
      {/* BG mesh */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 15% 50%, rgba(0,216,255,0.08) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(176,96,255,0.07) 0%, transparent 50%)",
        }} />

      <div className="relative z-10">
        <p className="text-xs font-semibold tracking-widest uppercase mb-1"
          style={{ color: "#484f58", fontFamily: "JetBrains Mono, monospace" }}>
          {greeting}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#e6edf3" }}>
          Apoorva pandiraj <span style={{ color: "#00d8ff" }}>.</span>
        </h1>
        <p className="text-sm mt-1.5" style={{ color: "#8b949e" }}>
          You&apos;re on a roll — keep the momentum going.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-3 mt-4">
        {STATS.map(({ icon: Icon, value, label, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 + i * 0.08, type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg"
            style={{ background: "#1c2128", border: "1px solid #30363d" }}
          >
            <Icon size={15} color={color} />
            <span className="text-sm font-bold" style={{ color: "#e6edf3", fontFamily: "JetBrains Mono, monospace" }}>{value}</span>
            <span className="text-xs" style={{ color: "#8b949e" }}>{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
