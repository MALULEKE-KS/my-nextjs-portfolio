import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { fetchFlagshipSystems } from "@/lib/api/portfolio";
import {
  lucideFromConfig,
  statusLucideIcon
} from "@/lib/utils/lucide-from-config";
import { ArrowUpRight, ExternalLink, Github, Network } from "lucide-react";

export default async function FlagshipCatalog() {
  const { systems } = await fetchFlagshipSystems();
  const active = systems.filter((s) => s.status === "active-development").length;
  const withDiagram = systems.filter((s) => s.architectureDiagramSrc).length;
  const withLinks = systems.filter((s) => s.githubUrl || s.liveUrl).length;

  return (
    <>
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-[#EDE9E3]/90 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A1814]0">CATALOG_SIZE</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-[#1A1814]">{systems.length}</p>
          <p className="mt-1 text-xs text-[#1A1814]0">flagship systems indexed</p>
        </Card>
        <Card className="border-[#EDE9E3]/90 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A1814]0">ACTIVE_BUILD</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-[#C8102E]">{active}</p>
          <p className="mt-1 text-xs text-[#1A1814]0">in active development</p>
        </Card>
        <Card className="border-[#EDE9E3]/90 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A1814]0">DEEP_EVIDENCE</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-[#D4A017]">{withDiagram}</p>
          <p className="mt-1 text-xs text-[#1A1814]0">case studies with architecture diagrams</p>
        </Card>
        <Card className="border-[#EDE9E3]/90 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A1814]0">REPO_LINKS</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-orange-300/90">{withLinks}</p>
          <p className="mt-1 text-xs text-[#1A1814]0">systems with GitHub or live links</p>
        </Card>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {systems.map((system) => {
          const SysIcon = lucideFromConfig(system.lucideIcon);
          const StatusIcon = statusLucideIcon(system.status);
          return (
            <div key={system.id} className="flex flex-col h-full">
              <Link href={`/flagship/${system.id}`} className="group block h-full flex-1">
                <Card variant="glow" className="h-full p-0">
                  <div className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C8102E]/30 bg-[#C8102E]/10 text-[#C8102E] shadow-[0_0_12px_rgba(200,16,46,0.12)]">
                          <SysIcon className="h-6 w-6" aria-hidden />
                        </div>
                        <div className="min-w-0 space-y-1">
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1A1814]0">
                            {system.id.replace(/-/g, "_")}
                          </p>
                          <h2 className="text-lg font-semibold text-[#1A1814]">{system.name}</h2>
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-[#1A1814]0 motion-safe:transition motion-safe:duration-180 group-hover:text-[#C8102E]" aria-hidden />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[#6B645A]">{system.shortDescription}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#EDE9E3]/80 pt-5">
                      <Badge>{system.phase}</Badge>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#EDE9E3]/90 bg-[#F5F2ED]/50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#6B645A]">
                        <StatusIcon className="h-3 w-3" aria-hidden />
                        {system.status.replace(/-/g, "_")}
                      </span>
                      {system.architectureDiagramSrc ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#D4A017]">
                          <Network className="h-3 w-3" aria-hidden />
                          Diagram
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Card>
              </Link>

              {/* Repository & Live Links */}
              {(system.githubUrl || system.liveUrl) && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {system.githubUrl && (
                    <a
                      href={system.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4DFD7]/80 bg-[#F5F2ED]/60 px-3 py-1.5 font-mono text-[10px] text-[#6B645A] transition-colors hover:border-[#C4BFB4] hover:text-[#2D2923]"
                    >
                      <Github className="h-3 w-3" aria-hidden />
                      View Source
                    </a>
                  )}
                  {system.liveUrl && (
                    <a
                      href={system.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#C8102E]/30 bg-[#C8102E]/10 px-3 py-1.5 font-mono text-[10px] text-[#C8102E] transition-colors hover:border-blue-400/50 hover:text-[#C8102E]"
                    >
                      <ExternalLink className="h-3 w-3" aria-hidden />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
