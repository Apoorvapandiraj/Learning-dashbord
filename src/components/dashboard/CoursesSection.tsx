import { getCourses } from "@/lib/courses";
import { CourseCard } from "./CourseCard";
import { Database } from "lucide-react";

export async function CoursesSection() {
  const result = await getCourses();

  return (
    <>
   
      {result.error && (
        <div
          className="col-span-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs"
          style={{
            background: "rgba(245,166,35,0.08)",
            border: "1px solid rgba(245,166,35,0.2)",
            color: "#f5a623",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          <Database size={13} />
          <span>
            Showing demo data — Supabase error: {result.error}. Check your .env.local and RLS policies.
          </span>
        </div>
      )}

     
      {result.source === "database" && (
        <div
          className="col-span-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs"
          style={{
            background: "rgba(57,211,83,0.07)",
            border: "1px solid rgba(57,211,83,0.18)",
            color: "#39d353",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          <Database size={13} />
          <span>Live data from Supabase ({result.data.length} courses)</span>
        </div>
      )}

      {result.data.map((course, i) => (
        <CourseCard key={course.id} course={course} index={i} />
      ))}
    </>
  );
}
