import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { fetchFlagshipSystems } from "@/lib/api/portfolio";
import type { FlagshipSystem } from "@/types/config";
import { lucideFromConfig, statusLucideIcon } from "@/lib/utils/lucide-from-config";
import { ChevronRight, Code2, ExternalLink, Github, Lightbulb, Network, Target } from "lucide-react";

type Params = {
  params: {
    id: string;
  };
};

async function getSystem(id: string): Promise<FlagshipSystem | null> {
  const { systems } = await fetchFlagshipSystems();
  return systems.find((s) => s.id === id) ?? null;
}

export async function generateMetadata({
  params
}: Params): Promise<Metadata> {
  const system = await getSystem(params.id);
  if (!system) {
    return { title: "System not found" };
  }
  return {
    title: system.name,
    description: system.shortDescription
  };
}

export default async function FlagshipDetailPage({ params }: Params) {
  const system = await getSystem(params.id);

  if (!system) {
    return (
      <PageContainer>
        <Card className="border-[#EDE9E3]/90">
          <p className="text-sm text-[#6B645A]">System not found.</p>
          <Link
            href="/flagship"
            className="mt-4 inline-flex text-sm font-semibold text-[#C8102E] hover:text-[#C8102E]"
          >
            Back to catalog
          </Link>
        </Card>
      </PageContainer>
    );
  }

  const SysIcon = lucideFromConfig(system.lucideIcon);
  const StatusIcon = statusLucideIcon(system.status);

  return (
    <PageContainer>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 min-h-[320px] home-ambient-grid opacity-50"
        aria-hidden
      />
      <article className="relative z-[1] space-y-10">
        <nav
          className="flex flex-wrap items-center gap-1 text-xs text-[#1A1814]0"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-[#6B645A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]-500/60"
          >
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden />
          <Link
            href="/flagship"
            className="hover:text-[#6B645A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]-500/60"
          >
            Flagship
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden />
          <span className="font-mono text-[#6B645A]">{system.id}</span>
        </nav>

        <header className="overflow-hidden rounded-2xl border border-[#EDE9E3]/90 bg-gradient-to-br from-[#FAF8F5]/90 via-[#FAF8F5]/70 to-blue-950/20 p-8 shadow-[0_0_12px_rgba(200,16,46,0.12)] md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-1 flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C8102E]/35 bg-[#C8102E]/15 text-[#C8102E]">
                  <SysIcon className="h-7 w-7" aria-hidden />
                </div>
                <div className="min-w-0 space-y-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C8102E]">
                    CASE_STUDY
                  </p>
                  <h1 className="text-3xl font-semibold tracking-tight text-[#1A1814] md:text-4xl">
                    {system.name}
                  </h1>
                  <p className="max-w-2xl text-sm leading-relaxed text-[#6B645A] md:text-base">
                    {system.shortDescription}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge>{system.phase}</Badge>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#EDE9E3]/90 bg-[#F5F2ED]/50 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#6B645A]">
                  <StatusIcon className="h-3.5 w-3.5" aria-hidden />
                  {system.status.replace(/-/g, "_")}
                </span>
              </div>
            </div>
            <div className="shrink-0 font-mono text-[10px] leading-relaxed text-slate-600 md:text-right">
              <div>DOC_ID · {system.id.toUpperCase().replace(/-/g, "_")}</div>
              <div>RTE · PRODUCTION_POSTURE</div>
            </div>
          </div>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          <Card className="border-[#EDE9E3]/85">
            <div className="mb-4 flex items-center gap-2 text-[#C8102E]">
              <Target className="h-4 w-4" aria-hidden />
              <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]">
                Problem
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[#6B645A]">
              {system.problem}
            </p>
          </Card>
          <Card className="border-[#EDE9E3]/85">
            <div className="mb-4 flex items-center gap-2 text-[#C8102E]">
              <Lightbulb className="h-4 w-4" aria-hidden />
              <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]">
                Solution
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[#6B645A]">
              {system.solution}
            </p>
          </Card>
        </div>

        <Card className="border-[#EDE9E3]/85" variant="glow">
          <div className="mb-4 flex items-center gap-2 text-[#C8102E]">
            <Network className="h-4 w-4" aria-hidden />
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]">
              Architecture
            </h2>
          </div>
          <p className="whitespace-pre-line text-sm leading-relaxed text-[#6B645A]">
            {system.architecture}
          </p>
          {system.architectureDiagramSrc ? (
            <figure className="mt-8 space-y-3">
              <div className="overflow-hidden rounded-xl border border-[#EDE9E3]/90 bg-[#FAF8F5]/80">
                <Image
                  src={system.architectureDiagramSrc}
                  alt={
                    system.architectureDiagramCaption ??
                    `Architecture diagram for ${system.name}`
                  }
                  className="h-auto w-full"
                  width={920}
                  height={420}
                  loading="lazy"
                  unoptimized
                />
              </div>
              {system.architectureDiagramCaption ? (
                <figcaption className="text-xs leading-relaxed text-[#1A1814]0">
                  {system.architectureDiagramCaption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </Card>

        <Card className="border-[#EDE9E3]/85">
          <div className="mb-4 flex items-center gap-2 text-[#C8102E]">
            <Code2 className="h-4 w-4" aria-hidden />
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]">
              Tech stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {system.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-[#EDE9E3]/90 bg-[#F5F2ED]/50 px-3 py-1.5 font-mono text-[11px] text-[#2D2923]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>

        <div className="flex flex-wrap gap-4 border-t border-[#EDE9E3]/80 pt-8">
          {(system.githubUrl || system.liveUrl) && (
            <div className="flex flex-wrap gap-3">
              {system.githubUrl && (
                <a
                  href={system.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E4DFD7]/80 bg-[#F5F2ED]/60 px-4 py-2 text-sm font-semibold text-[#2D2923] transition-colors hover:border-[#C4BFB4] hover:text-[#2D2923]"
                >
                  <Github className="h-4 w-4" aria-hidden />
                  View Source
                </a>
              )}
              {system.liveUrl && (
                <a
                  href={system.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-500/40 bg-[#C8102E]/10 px-4 py-2 text-sm font-semibold text-[#C8102E] transition-colors hover:border-blue-400/60 hover:text-[#C8102E]"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  Live Demo
                </a>
              )}
            </div>
          )}
          <Link
            href="/flagship"
            className="ml-auto text-sm font-semibold text-[#C8102E] hover:text-[#C8102E]"
          >
            ← All systems
          </Link>
        </div>
      </article>
    </PageContainer>
  );
}
