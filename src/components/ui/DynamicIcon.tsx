import {
  Code2, Brain, Database, Globe, Cpu, Layers,
  Terminal, Palette, BookOpen, Atom, Server, Shield,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Code2, Brain, Database, Globe, Cpu, Layers,
  Terminal, Palette, BookOpen, Atom, Server, Shield,
};

export function DynamicIcon({ name, size = 18, color }: { name: string; size?: number; color?: string }) {
  const Icon = MAP[name] ?? BookOpen;
  return <Icon size={size} color={color} />;
}
