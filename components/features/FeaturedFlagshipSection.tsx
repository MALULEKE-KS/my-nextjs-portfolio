import Link from "next/link";
import Section from "@/components/ui/Section";
import { fetchFlagshipSystems } from "@/lib/api/portfolio";
import { GraduationCap, Target, Lightbulb, TrendingUp, ArrowRight, ArrowUpRight } from "lucide-react";
import "@/app/featured-flagship.css";

export default async function FeaturedFlagshipSection() {
  const { systems } = await fetchFlagshipSystems();
  const featured = systems.find((s) => s.id === "fundslink-academy");

  return (
    <Section className="space-y-10">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8102E]/80">
            Featured Case Study
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-[#1A1814] md:text-3xl">
            Flagship system in focus
          </h2>
        </div>
        <Link
          href="/flagship"
          className="ffm-secondary-link"
        >
          View all systems
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      {/* Master chef card */}
      <div className="featured-flagship-master">
        <div className="ffm-bg-glow" aria-hidden />
        <div className="ffm-bg-glow-right" aria-hidden />
        <div className="ffm-topbar" aria-hidden />
        <div className="ffm-corner-tl" aria-hidden />
        <div className="ffm-corner-br" aria-hidden />

        <div className="ffm-inner">
          {/* LEFT — System identity */}
          <div className="ffm-left">
            <div className="ffm-system-icon-wrap">
              <GraduationCap className="h-8 w-8" aria-hidden />
            </div>

            <div className="space-y-1">
              <div className="ffm-kicker">
                <span className="ffm-kicker-dot" aria-hidden />
                Case Study
              </div>
              <h3 className="ffm-system-name">
                {featured?.name ?? "FundsLink Academy"}
              </h3>
            </div>

            <p className="ffm-system-desc">
              {featured?.shortDescription ??
                "National education funding platform connecting students with bursaries, NSFAS, SETA funds, scholarships, and emergency support."}
            </p>

            <div className="ffm-system-meta">
              <span className="ffm-phase-badge">
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#3B82F6", display: "inline-block", boxShadow: "0 0 6px rgba(59,130,246,0.8)" }} aria-hidden />
                {featured?.phase ?? "Phase 1 — Active Development"}
              </span>
              <span className="ffm-status-badge">
                <span className="ffm-status-dot" aria-hidden />
                {featured?.status === "active-development" ? "Active Development" : featured?.status === "design-complete" ? "Design Complete" : featured?.status === "planned" ? "Planned" : "Active Development"}
              </span>
            </div>
          </div>

          {/* RIGHT — Problem / Solution / Impact */}
          <div className="ffm-right">
            {/* Problem */}
            <div className="ffm-card-pillar">
              <div className="ffm-pillar-accent problem" aria-hidden />
              <div className="ffm-pillar-label">
                <Target className="h-4 w-4 shrink-0 text-red-600" aria-hidden />
                <span className="ffm-pillar-label-text problem">Problem</span>
              </div>
              <p className="ffm-pillar-body">
                {featured?.problem ??
                  "342,000+ students are excluded yearly due to fragmented bursary applications, duplicated processes, and unused funding sources scattered across disconnected portals."}
              </p>
            </div>

            {/* Solution */}
            <div className="ffm-card-pillar">
              <div className="ffm-pillar-accent solution" aria-hidden />
              <div className="ffm-pillar-label">
                <Lightbulb className="h-4 w-4 shrink-0 text-[#C8102E]" aria-hidden />
                <span className="ffm-pillar-label-text solution">Solution</span>
              </div>
              <p className="ffm-pillar-body">
                {featured?.solution ??
                  "A single digital front door for funding, with structured eligibility capture, centralized applications, and a planned AI-assisted matching layer."}
              </p>
            </div>

            {/* Impact */}
            <div className="ffm-card-pillar">
              <div className="ffm-pillar-accent impact" aria-hidden />
              <div className="ffm-pillar-label">
                <TrendingUp className="h-4 w-4 shrink-0 text-emerald-700" aria-hidden />
                <span className="ffm-pillar-label-text impact">Impact</span>
              </div>
              <p className="ffm-pillar-body">
                A production-grade platform backbone ready for 342,000+ students — with AI matching architecture built in for future phases.
              </p>
            </div>
          </div>
        </div>

        {/* CTA footer */}
        <div className="ffm-cta-wrap">
          <div className="ffm-cta-left">
            <span className="ffm-cta-headline">See the full architecture</span>
            <span className="ffm-cta-sub">Problem framing · Tech stack · Request path diagram</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={`/flagship/fundslink-academy`}
              className="ffm-cta-button"
            >
              Open case study
              <ArrowRight className="ffm-cta-arrow h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="ffm-bottom-line" aria-hidden />
      </div>
    </Section>
  );
}