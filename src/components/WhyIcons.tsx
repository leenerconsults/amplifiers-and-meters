import {
  BadgeCheck,
  Clapperboard,
  Cpu,
  Layers,
  Package,
  Route,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  package: Package,
  "badge-check": BadgeCheck,
  cpu: Cpu,
  layers: Layers,
  route: Route,
  clapperboard: Clapperboard,
};

export function WhyIcon({ name }: { name: string }) {
  const Icon = MAP[name] || Package;
  return <Icon size={22} strokeWidth={1.6} color="var(--blue)" aria-hidden />;
}

/** Pick a synced column class for even feature grids. */
export function syncGridClass(count: number) {
  if (count % 4 === 0) return "grid-sync-4";
  if (count % 3 === 0) return "grid-sync-3";
  if (count % 2 === 0) return "grid-sync-2";
  return "grid-sync-3";
}
