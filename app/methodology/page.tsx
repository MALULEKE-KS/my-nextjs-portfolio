import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Card from "@/components/ui/Card";
import { loadMethodologyConfig } from "@/lib/config-loader";
import { BookOpen, ChevronRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "MVP gates, sequential delivery, mobile-first standards, and how this portfolio is built."
};

export default function MethodologyPage() {
  const m = loadMethodologyConfig();

  return (
    <PageContainer>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 min-h-[320px] home-ambient-grid opacity-50"
        aria-hidden
      />
      <article className="relative z-[1] space-y-10">
        <nav
          className="flex flex-wrap items-center gap-1 text-xs text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden />
          <span className="font-mono text-slate-400">methodology</span>
        </nav>

        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300/95">
            <BookOpen className="h-3.5 w-3.5" aria-hidden />
            Blueprint
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            {m.pageTitle}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            {m.pageDescription}
          </p>
          {m.repoUrl ? (
            <a
              href={m.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="motion-safe-transition inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            >
              View repository
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          ) : null}
        </header>

        <Card className="border-slate-800/85 p-6 md:p-8">
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            {m.intro}
          </p>
        </Card>

        <div className="space-y-5">
          {m.sections.map((section) => (
            <Card
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-slate-800/85 p-6 md:p-8"
            >
              <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400/90">
                {section.title}
              </h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-slate-300">
                {section.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 border-t border-slate-800/80 pt-8">
          <Link
            href="/flagship"
            className="text-sm font-semibold text-blue-400 hover:text-blue-300"
          >
            ← Flagship systems
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-400 hover:text-slate-200"
          >
            Contact →
          </Link>
        </div>
      </article>
    </PageContainer>
  );
}
