"use client";

import { motion } from "framer-motion";
import { generateActivityData, getActivityColor } from "@/lib/activity";
import { Activity } from "lucide-react";
import { useMemo } from "react";

export function ActivityTile() {
  const days = useMemo(() => generateActivityData(), []);

  const weeks: typeof days[] = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));

  const totalActive = days.filter(d => d.count > 0).length;

  return (
    <div className="p-5 h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity size={15} color="#39d353" />
          <h2 className="text-sm font-semibold" style={{ color: "#e6edf3" }}>Learning Activity</h2>
        </div>
        <div className="flex gap-4 text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          <span style={{ color: "#8b949e" }}>
            <span style={{ color: "#39d353", fontWeight: 700 }}>{totalActive}</span> active days
          </span>
          <span style={{ color: "#8b949e" }}>
            <span style={{ color: "#00d8ff", fontWeight: 700 }}>14</span> streak
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="flex gap-0.5 overflow-x-auto pb-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-0.5">
            {week.map((day, di) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: wi * 0.008 + di * 0.002,
                  type: "spring", stiffness: 400, damping: 25,
                }}
                title={`${day.date}: ${day.count} sessions`}
                className="w-2.5 h-2.5 rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundColor: getActivityColor(day.count) }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 mt-auto">
        <span className="text-xs" style={{ color: "#484f58", fontFamily: "JetBrains Mono, monospace" }}>Less</span>
        {[0, 2, 4, 7, 10].map(c => (
          <div key={c} className="w-2.5 h-2.5 rounded-sm"
            style={{ backgroundColor: getActivityColor(c) }} />
        ))}
        <span className="text-xs" style={{ color: "#484f58", fontFamily: "JetBrains Mono, monospace" }}>More</span>
      </div>
    </div>
  );
}
