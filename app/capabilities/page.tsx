import { type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import { loadCapabilitiesConfig } from "@/lib/config-loader";
import { Layers, ChevronRight, ArrowRight, Code2, Server, Database, Brain, Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Full technical stack and engineering capabilities — frontend, backend, data, AI, and deployment.",
};

const groupIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  systems: Server,
  "data-ai": Database,
  tooling: Cloud,
};

export default function CapabilitiesPage() {
  const cap = loadCapabilitiesConfig();

  return (
    <PageContainer>
      <div className="pointer-events-none absolute inset-x-0 top-0 min-h-[320px] home-ambient-grid opacity-50" aria-hidden />
      <div className="relative z-[1] space-y-10">
        <nav className="flex items-center gap-2 text-xs text-[#1A1814]0" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#6B645A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]-500/60">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden />
          <span className="font-mono text-[#6B645A]">Capabilities</span>
        </nav>

        <div className="page-hero">
          <div className="page-hero-glow" aria-hidden />
          <div className="page-hero-content">
            <div className="page-hero-kicker">
              <Layers className="h-3 w-3" aria-hidden />
              Technical Stack
            </div>
            <h1 className="page-hero-title">Engineering Capabilities</h1>
            <p className="page-hero-description">
              A coherent toolchain for shipping typed, observable, maintainable systems. Grouped by layer — not a badge collage.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {cap.groups.map((g) => {
            const Icon = groupIcons[g.id] ?? Brain;
            return (
              <div key={g.id} className="cap-page-group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#C8102E]/25 bg-[#C8102E]/10 text-[#C8102E]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </div>
                  <p className="cap-page-group-title" style={{ marginBottom: 0 }}>{g.title}</p>
                </div>
                <ul className="cap-page-items">
                  {g.items.map((item) => (
                    <li key={item} className="cap-page-item">{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4 border-t border-[#EDE9E3]/80 pt-8">
          <Link href="/experience" className="wib-cta-primary">
            View experience <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="/live-work" className="wib-cta-secondary">
            Live work →
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
