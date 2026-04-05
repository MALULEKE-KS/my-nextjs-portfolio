import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { fetchFlagshipSystems } from "@/lib/api/portfolio";
import {
  lucideFromConfig,
  statusLucideIcon
} from "@/lib/utils/lucide-from-config";
import { ArrowUpRight, Network } from "lucide-react";

export default async function FlagshipCatalog() {
  const { systems } = await fetchFlagshipSystems();
  const active = systems.filter((s) => s.status === "active-development").length;
  const withDiagram = systems.filter((s) => s.architectureDiagramSrc).length;

  return (
    <>
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-slate-800/90 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            CATALOG_SIZE
          </p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-slate-50">
            {systems.length}
          </p>
          <p className="mt-1 text-xs text-slate-500">flagship systems indexed</p>
        </Card>
        <Card className="border-slate-800/90 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            ACTIVE_BUILD
          </p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-blue-300">
            {active}
          </p>
          <p className="mt-1 text-xs text-slate-500">in active development</p>
        </Card>
        <Card className="border-slate-800/90 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            DEEP_EVIDENCE
          </p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-emerald-300/95">
            {withDiagram}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            case studies with architecture diagrams
          </p>
        </Card>
        <Card className="border-slate-800/90 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            CASE_FILE
          </p>
          <p className="mt-2 text-sm font-semibold leading-snug text-slate-100">
            Problem · Solution · Architecture · Stack
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Same scaffold on every deep-dive route
          </p>
        </Card>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {systems.map((system) => {
          const SysIcon = lucideFromConfig(system.lucideIcon);
          const StatusIcon = statusLucideIcon(system.status);
          return (
            <Link
              key={system.id}
              href={`/flagship/${system.id}`}
              className="group block h-full"
            >
              <Card variant="glow" className="h-full p-0">
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 shadow-glow-sm">
                        <SysIcon className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="min-w-0 space-y-1">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                          {system.id.replace(/-/g, "_")}
                        </p>
                        <h2 className="text-lg font-semibold text-slate-50">
                          {system.name}
                        </h2>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-slate-500 motion-safe:transition motion-safe:duration-180 group-hover:text-blue-400"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {system.shortDescription}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-800/80 pt-5">
                    <Badge>{system.phase}</Badge>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/90 bg-slate-900/50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      <StatusIcon className="h-3 w-3" aria-hidden />
                      {system.status.replace(/-/g, "_")}
                    </span>
                    {system.architectureDiagramSrc ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300/95">
                        <Network className="h-3 w-3" aria-hidden />
                        Diagram
                      </span>
                    ) : null}
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
}
