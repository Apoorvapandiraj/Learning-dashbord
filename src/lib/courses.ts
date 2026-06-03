import { getSupabaseClient } from "./supabase";
import type { Course } from "@/types";

// Mock data shown when Supabase isn't configured or fails
export const MOCK_COURSES: Course[] = [
  {
    id: "1",
    title: "Advanced React Patterns",
    progress: 75,
    icon_name: "Code2",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "TypeScript Mastery",
    progress: 48,
    icon_name: "Layers",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Database Design with PostgreSQL",
    progress: 32,
    icon_name: "Database",
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "System Design Fundamentals",
    progress: 60,
    icon_name: "Cpu",
    created_at: new Date().toISOString(),
  },
];

export type CoursesResult =
  | { data: Course[]; error: null; source: "database" | "mock" }
  | { data: Course[]; error: string; source: "mock" };

export async function getCourses(): Promise<CoursesResult> {
  const supabase = getSupabaseClient();

  // No env vars set — use mock data silently
  if (!supabase) {
    return { data: MOCK_COURSES, error: null, source: "mock" };
  }

  try {
    const { data, error } = await supabase
      .from("courses")
      .select("id, title, progress, icon_name, created_at")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("[Supabase] Query error:", error.message);
      return { data: MOCK_COURSES, error: error.message, source: "mock" };
    }

    if (!data || data.length === 0) {
      // Table exists but empty — still show mock so dashboard looks good
      return { data: MOCK_COURSES, error: null, source: "mock" };
    }

    return { data, error: null, source: "database" };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown fetch error";
    console.error("[Supabase] Fetch failed:", message);
    return { data: MOCK_COURSES, error: message, source: "mock" };
  }
}
