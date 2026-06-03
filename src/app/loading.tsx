import { HeroSkeleton, ActivitySkeleton, CourseCardSkeleton } from "@/components/ui/Skeletons";

export default function Loading() {
  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#07090f" }}>
      <div className="hidden md:flex flex-col w-56 h-screen shrink-0 p-3 gap-2"
        style={{ background: "#0d1117", borderRight: "1px solid #21262d" }}>
        <div className="h-10 w-full rounded-lg skeleton mb-1" />
        {[...Array(5)].map((_, i) => <div key={i} className="h-9 w-full rounded-lg skeleton" />)}
      </div>
      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="col-span-1 md:col-span-2 rounded-xl" style={{ background: "#161b22", border: "1px solid #21262d" }}>
            <HeroSkeleton />
          </div>
          <div className="rounded-xl p-5" style={{ background: "#161b22", border: "1px solid #21262d" }}>
            <div className="h-4 w-20 skeleton mb-3" />
            <div className="grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => <div key={i} className="h-20 rounded-lg skeleton" />)}
            </div>
          </div>
          <div className="rounded-xl p-5" style={{ background: "#161b22", border: "1px solid #21262d" }}>
            <div className="h-4 w-16 skeleton mb-4" />
            {[...Array(3)].map((_, i) => <div key={i} className="h-8 w-full skeleton mb-2 rounded" />)}
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4 rounded-xl"
            style={{ background: "#161b22", border: "1px solid #21262d" }}>
            <ActivitySkeleton />
          </div>
          {[...Array(4)].map((_, i) => <CourseCardSkeleton key={i} />)}
        </div>
      </main>
    </div>
  );
}
