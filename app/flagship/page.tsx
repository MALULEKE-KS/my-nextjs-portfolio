import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import Skeleton from "@/components/ui/Skeleton";
import FlagshipCatalog from "@/components/features/FlagshipCatalog";
import { loadThemeConfig } from "@/lib/config-loader";
import { Layers, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Flagship systems",
  description:
    "Case studies for FundsLink Academy, Maphophe, KSDRILL Reserve Bank, SyncUp — problem, architecture, stack, and phase."
};

export default function FlagshipPage() {
  const { sections } = loadThemeConfig();
  const copy = sections.flagship;

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
          <span className="font-mono text-slate-400">flagship</span>
        </nav>

        <header className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/50 p-8 shadow-glow-sm backdrop-blur-sm md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-16 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl"
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300/95">
                <Sparkles className="h-3 w-3" aria-hidden />
                Systems catalog
              </div>
              <SectionHeader
                kicker={copy.kicker}
                title={copy.title}
                description={copy.description}
                className="max-w-2xl"
              />
              <p className="max-w-xl text-xs leading-relaxed text-slate-500">
                Prefer process over hype? See{" "}
                <Link
                  href="/methodology"
                  className="font-medium text-blue-400/90 underline-offset-2 hover:text-blue-300 hover:underline"
                >
                  methodology
                </Link>{" "}
                for MVP gates and how these builds are sequenced.
              </p>
            </div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-700/90 bg-slate-900/60 text-blue-400">
              <Layers className="h-8 w-8" aria-hidden />
            </div>
          </div>
        </header>

        <Suspense
          fallback={
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-3">
                <Skeleton className="h-28 rounded-2xl" />
                <Skeleton className="h-28 rounded-2xl" />
                <Skeleton className="h-28 rounded-2xl" />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Skeleton className="h-64 rounded-2xl" />
                <Skeleton className="h-64 rounded-2xl" />
              </div>
            </div>
          }
        >
          <FlagshipCatalog />
        </Suspense>
      </div>
    </PageContainer>
  );
}
