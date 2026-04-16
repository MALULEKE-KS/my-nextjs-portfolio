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
          <span className="font-mono text-[#6B645A]">methodology</span>
        </nav>

        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C8102E]/25 bg-[#C8102E]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C8102E]">
            <BookOpen className="h-3.5 w-3.5" aria-hidden />
            Blueprint
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-[#1A1814] md:text-4xl">
            {m.pageTitle}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[#6B645A] md:text-base">
            {m.pageDescription}
          </p>
          {m.repoUrl ? (
            <a
              href={m.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="motion-safe-transition inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#C8102E] hover:text-[#C8102E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]-500/60"
            >
              View repository
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          ) : null}
        </header>

        <Card className="border-[#EDE9E3]/85 p-6 md:p-8">
          <p className="text-sm leading-relaxed text-[#6B645A] md:text-base">
            {m.intro}
          </p>
        </Card>

        <div className="space-y-5">
          {m.sections.map((section) => (
            <Card
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-[#EDE9E3]/85 p-6 md:p-8"
            >
              <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                {section.title}
              </h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-[#6B645A]">
                {section.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 border-t border-[#EDE9E3]/80 pt-8">
          <Link
            href="/flagship"
            className="text-sm font-semibold text-[#C8102E] hover:text-[#C8102E]"
          >
            ← Flagship systems
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-[#6B645A] hover:text-[#2D2923]"
          >
            Contact →
          </Link>
        </div>
      </article>
    </PageContainer>
  );
}
