import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import { fetchProfile } from "@/lib/api/portfolio";
import { ExternalLink, Github, ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Live Work",
  description: "Live projects, portfolios, and production systems — all publicly accessible.",
};

export default async function LiveWorkPage() {
  const profile = await fetchProfile();
  const liveWork = profile.liveWork ?? [];

  return (
    <PageContainer>
      <div className="pointer-events-none absolute inset-x-0 top-0 min-h-[320px] home-ambient-grid opacity-50" aria-hidden />
      <div className="relative z-[1] space-y-10">
        <nav className="flex items-center gap-2 text-xs text-[#1A1814]0" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#6B645A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]-500/60">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden />
          <span className="font-mono text-[#6B645A]">Live Work</span>
        </nav>

        <div className="page-hero">
          <div className="page-hero-glow" aria-hidden />
          <div className="page-hero-content">
            <div className="page-hero-kicker">
              <ExternalLink className="h-3 w-3" aria-hidden />
              Live Systems
            </div>
            <h1 className="page-hero-title">Live Work</h1>
            <p className="page-hero-description">
              Publicly accessible projects, portfolios, and production systems — no sign-up required to inspect the output.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {liveWork.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="live-page-card group"
            >
              <div className="live-page-header">
                <h2 className="live-page-name">{item.name}</h2>
                <span className="live-page-type-badge">{item.type}</span>
              </div>
              <p className="live-page-description">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="live-page-url">{item.url.replace("https://", "")}</span>
                <ExternalLink className="h-4 w-4 text-[#1A1814]0 transition-colors group-hover:text-[#C8102E]" aria-hidden />
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 border-t border-[#EDE9E3]/80 pt-8">
          <Link href="/capabilities" className="wib-cta-primary">
            View capabilities <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="/flagship" className="wib-cta-secondary">
            Flagship systems →
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
