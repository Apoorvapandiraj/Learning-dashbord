import { Suspense } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { BentoTile } from "@/components/ui/BentoTile";
import { HeroTile } from "@/components/dashboard/HeroTile";
import { ActivityTile } from "@/components/dashboard/ActivityTile";
import { StatsTile } from "@/components/dashboard/StatsTile";
import { CoursesSection } from "@/components/dashboard/CoursesSection";
import { CoursesLoadingFallback } from "@/components/dashboard/CoursesLoadingFallback";
import { BookOpen } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#07090f" }}>
      <Sidebar />

      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        {/* Background grid */}
        <div className="fixed inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(0,216,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,216,255,0.02) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        <div className="relative z-10 p-4 md:p-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Hero — 2 cols */}
            <BentoTile className="col-span-1 md:col-span-2 lg:col-span-2" glow="cyan" index={0}>
              <HeroTile />
            </BentoTile>

            {/* Stats */}
            <BentoTile className="col-span-1 lg:col-span-1" glow="purple" index={1}>
              <StatsTile />
            </BentoTile>

            {/* Next Up */}
            <BentoTile className="col-span-1 lg:col-span-1" glow="amber" index={2}>
              <div className="p-5 flex flex-col gap-3 h-full">
                <h2 className="text-sm font-semibold" style={{ color: "#e6edf3" }}>Next Up</h2>
                <div className="flex-1 space-y-3">
                  {[
                    { title: "React Hooks Deep Dive", time: "Today, 3PM",     color: "#00d8ff" },
                    { title: "TypeScript Generics",   time: "Tomorrow, 10AM", color: "#b060ff" },
                    { title: "System Design Intro",   time: "Thu, 2PM",       color: "#39d353" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: item.color }} />
                      <div>
                        <p className="text-xs font-medium leading-snug" style={{ color: "#e6edf3" }}>{item.title}</p>
                        <p className="text-[10px]" style={{ color: "#484f58", fontFamily: "JetBrains Mono, monospace" }}>{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BentoTile>

            {/* Activity — full width */}
            <BentoTile className="col-span-1 md:col-span-2 lg:col-span-4" glow="green" index={3}>
              <ActivityTile />
            </BentoTile>

            {/* Courses header */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 flex items-center gap-2 mt-1">
              <BookOpen size={14} color="#00d8ff" />
              <h2 className="text-sm font-semibold" style={{ color: "#e6edf3" }}>Active Courses</h2>
              <div className="flex-1 h-px ml-2" style={{ background: "#21262d" }} />
            </div>

            {/* Courses — server fetched */}
            <Suspense fallback={<CoursesLoadingFallback />}>
              <CoursesSection />
            </Suspense>

          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
