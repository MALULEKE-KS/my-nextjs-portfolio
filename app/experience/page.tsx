import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import { fetchProfile } from "@/lib/api/portfolio";
import { Briefcase, ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional work history — freelance engineering across fintech, healthcare, and enterprise.",
};

export default async function ExperiencePage() {
  const profile = await fetchProfile();
  const experience = profile.workExperience ?? [];

  return (
    <PageContainer>
      <div className="pointer-events-none absolute inset-x-0 top-0 min-h-[320px] home-ambient-grid opacity-50" aria-hidden />
      <div className="relative z-[1] space-y-10">
        <nav className="flex items-center gap-2 text-xs text-[#1A1814]0" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#6B645A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]-500/60">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden />
          <span className="font-mono text-[#6B645A]">Experience</span>
        </nav>

        <div className="page-hero">
          <div className="page-hero-glow" aria-hidden />
          <div className="page-hero-content">
            <div className="page-hero-kicker">
              <Briefcase className="h-3 w-3" aria-hidden />
              Professional Background
            </div>
            <h1 className="page-hero-title">Work Experience</h1>
            <p className="page-hero-description">
              Production-grade systems built across freelance engagements — from AI-integrated fintech platforms to scalable healthcare applications.
            </p>
          </div>
        </div>

        <div className="exp-page-timeline">
          {experience.map((item, i) => (
            <div key={i} className="exp-page-card">
              <div className="exp-page-dot" aria-hidden />
              <div className="exp-page-header">
                <h2 className="exp-page-role">{item.role}</h2>
                <p className="exp-page-company">{item.company}</p>
                <p className="exp-page-period">{item.period}</p>
              </div>
              <p className="exp-page-description">{item.description}</p>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="exp-page-highlights">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="exp-page-highlight-item">
                      <span className="exp-page-highlight-dot" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 border-t border-[#EDE9E3]/80 pt-8">
          <Link href="/capabilities" className="wib-cta-primary">
            View capabilities <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="/education" className="wib-cta-secondary">
            Education →
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}