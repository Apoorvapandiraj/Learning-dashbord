"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, BarChart3, Trophy, Settings } from "lucide-react";

const NAV = [
  { id: "dashboard", label: "Home",     Icon: LayoutDashboard },
  { id: "courses",   label: "Courses",  Icon: BookOpen },
  { id: "progress",  label: "Progress", Icon: BarChart3 },
  { id: "awards",    label: "Awards",   Icon: Trophy },
  { id: "settings",  label: "Settings", Icon: Settings },
];

export function MobileNav() {
  const [active, setActive] = useState("dashboard");

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: "rgba(13,17,23,0.95)",
        borderTop: "1px solid #21262d",
        backdropFilter: "blur(20px)",
      }}
    >
      <ul className="flex items-center justify-around px-2 py-2 list-none">
        {NAV.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <button
                onClick={() => setActive(id)}
                className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg relative cursor-pointer"
                style={{ background: "transparent", border: "none", outline: "none" }}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-active"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(0,216,255,0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  size={20}
                  className="relative z-10"
                  style={{ color: isActive ? "#00d8ff" : "#484f58" }}
                />
                <span
                  className="relative z-10 text-[10px] font-medium"
                  style={{ color: isActive ? "#00d8ff" : "#484f58" }}
                >
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
