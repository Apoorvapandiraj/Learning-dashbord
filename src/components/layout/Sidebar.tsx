"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, BookOpen, BarChart3, Trophy,
  Settings, LogOut, ChevronLeft, ChevronRight, Zap,
} from "lucide-react";

const NAV = [
  { id: "dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { id: "courses",   label: "My Courses", Icon: BookOpen },
  { id: "progress",  label: "Progress",   Icon: BarChart3 },
  { id: "awards",    label: "Achievements", Icon: Trophy },
  { id: "settings",  label: "Settings",   Icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("dashboard");

  return (
    <motion.nav
      initial={false}
      animate={{ width: collapsed ? 64 : 224 }}
      transition={{ type: "spring", stiffness: 320, damping: 30 }}
      className="hidden md:flex flex-col h-screen shrink-0 relative overflow-hidden"
      style={{ background: "#0d1117", borderRight: "1px solid #21262d" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 overflow-hidden"
        style={{ borderBottom: "1px solid #21262d" }}>
        <div className="relative shrink-0 w-8 h-8">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #00d8ff, #b060ff)" }}>
            <Zap size={15} color="#07090f" strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 rounded-lg blur-md opacity-50"
            style={{ background: "linear-gradient(135deg, #00d8ff, #b060ff)" }} />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.18 }}
              className="text-lg font-bold tracking-tight whitespace-nowrap"
              style={{ color: "#e6edf3", fontFamily: "Syne, sans-serif" }}
            >
              LearnOS
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav */}
      <ul className="flex-1 px-2 py-4 space-y-1 list-none">
        {NAV.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <button
                onClick={() => setActive(id)}
                className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer group"
                style={{ background: "transparent", border: "none", outline: "none" }}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,216,255,0.12), rgba(176,96,255,0.08))",
                      border: "1px solid rgba(0,216,255,0.22)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  size={18}
                  className="relative z-10 shrink-0 transition-colors duration-150"
                  style={{ color: isActive ? "#00d8ff" : "#8b949e" }}
                />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="relative z-10 text-sm font-medium whitespace-nowrap"
                      style={{ color: isActive ? "#e6edf3" : "#8b949e" }}
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Bottom */}
      <div className="px-2 pb-4 pt-3" style={{ borderTop: "1px solid #21262d" }}>
        <button
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer"
          style={{ background: "transparent", border: "none", outline: "none" }}
        >
          <LogOut size={18} style={{ color: "#484f58" }} className="shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: "#484f58" }}
              >
                Sign Out
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-[68px] -right-3 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer z-20 transition-colors duration-150"
        style={{
          background: "#1c2128",
          border: "1px solid #30363d",
          color: "#8b949e",
        }}
      >
        {collapsed ? <ChevronRight size={11} /> : <ChevronLeft size={11} />}
      </button>
    </motion.nav>
  );
}
