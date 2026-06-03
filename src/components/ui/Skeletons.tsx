export function CourseCardSkeleton() {
  return (
    <div className="rounded-xl p-5 flex flex-col gap-4 min-h-[180px]"
      style={{ background: "#161b22", border: "1px solid #21262d" }}>
      <div className="w-10 h-10 rounded-lg skeleton" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-3/4 skeleton" />
        <div className="h-3 w-1/3 skeleton" />
      </div>
      <div className="space-y-2">
        <div className="h-1.5 w-full rounded-full skeleton" />
        <div className="flex justify-between">
          <div className="h-3 w-14 skeleton" />
          <div className="h-3 w-8 skeleton" />
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="p-6 flex flex-col justify-between min-h-[200px]">
      <div className="space-y-2">
        <div className="h-3 w-24 skeleton" />
        <div className="h-9 w-52 skeleton" />
        <div className="h-3 w-64 skeleton" />
      </div>
      <div className="flex gap-3 mt-4 flex-wrap">
        {[1, 2, 3].map(i => <div key={i} className="h-9 w-28 rounded-lg skeleton" />)}
      </div>
    </div>
  );
}

export function ActivitySkeleton() {
  return (
    <div className="p-5">
      <div className="h-4 w-28 skeleton mb-4" />
      <div className="flex gap-0.5">
        {Array.from({ length: 53 }).map((_, wi) => (
          <div key={wi} className="flex flex-col gap-0.5">
            {Array.from({ length: 7 }).map((_, di) => (
              <div key={di} className="w-2.5 h-2.5 rounded-sm skeleton" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
