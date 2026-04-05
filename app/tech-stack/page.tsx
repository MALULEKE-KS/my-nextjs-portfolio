import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import TechStackSection from "@/components/features/TechStackSection";
import { loadThemeConfig } from "@/lib/config-loader";
import { Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech stack",
  description:
    "Frontend, API, data, AI, and delivery tools — grouped by layer for technical reviewers."
};

export default function TechStackPage() {
  const { sections } = loadThemeConfig();
  const copy = sections.stack;

  return (
    <PageContainer>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 min-h-[360px] home-ambient-grid opacity-60"
        aria-hidden
      />
      <div className="relative z-[1] space-y-12">
        <nav
          className="flex items-center gap-2 text-xs text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="motion-safe-transition hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            Home
          </Link>
          <span className="text-slate-600" aria-hidden>
            /
          </span>
          <span className="font-mono text-slate-400">tech-stack</span>
        </nav>

        <header className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/50 p-8 shadow-glow-sm backdrop-blur-sm md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl"
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              kicker={copy.kicker}
              title={copy.title}
              description={copy.description}
              className="max-w-2xl"
            />
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-700/90 bg-slate-900/60 text-blue-400">
              <Code2 className="h-8 w-8" aria-hidden />
            </div>
          </div>
        </header>

        <TechStackSection omitHeader />
      </div>
    </PageContainer>
  );
}
