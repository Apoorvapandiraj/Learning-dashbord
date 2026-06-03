import type { ActivityDay } from "@/types";

export function generateActivityData(): ActivityDay[] {
  
  const seeded = (seed: string) => {
    
    let h = 2166136261 >>> 0;
    for (let i = 0; i < seed.length; i++) {
      h ^= seed.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return (h >>> 0) / 0xffffffff;
  };

  const days: ActivityDay[] = [];
  const now = new Date();
  for (let i = 364; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const iso = date.toISOString().split("T")[0];


  const r1 = seeded(iso + "-a");
  const r2 = seeded(iso + "-b");

  let count = 0;
  if (r1 > 0.55) count = Math.floor(r2 * 3) + 1;
  if (r1 > 0.80) count = Math.floor(r2 * 4) + 3;
  if (r1 > 0.93) count = Math.floor(r2 * 3) + 7;

    days.push({ date: iso, count });
  }
  return days;
}

export function getActivityColor(count: number): string {
  if (count === 0) return "#161b22";
  if (count <= 2) return "#0e4429";
  if (count <= 4) return "#006d32";
  if (count <= 7) return "#26a641";
  return "#39d353";
}
