import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import { fetchProfile } from "@/lib/api/portfolio";
import { GraduationCap, ChevronRight, ArrowRight, MapPin, Calendar, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Education",
  description: "BSc Computer Science & Mathematics — North-West University, Final Year.",
};

export default async function EducationPage() {
  const profile = await fetchProfile();
  const edu = profile.education ?? { degree: "BSc Computer Science & Mathematics", institution: "North-West University", status: "Final Year" };

  return (
    <PageContainer>
      <div className="pointer-events-none absolute inset-x-0 top-0 min-h-[320px] home-ambient-grid opacity-50" aria-hidden />
      <div className="relative z-[1] space-y-10">
        <nav className="flex items-center gap-2 text-xs text-[#1A1814]0" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#6B645A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]-500/60">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden />
          <span className="font-mono text-[#6B645A]">Education</span>
        </nav>

        <div className="page-hero">
          <div className="page-hero-glow" aria-hidden />
          <div className="page-hero-content">
            <div className="page-hero-kicker">
              <GraduationCap className="h-3 w-3" aria-hidden />
              Academic Background
            </div>
            <h1 className="page-hero-title">Education</h1>
            <p className="page-hero-description">
              Formal computer science and mathematics foundation — building the theoretical and practical base for scalable engineering.
            </p>
          </div>
        </div>

        <div className="edu-page-card">
          <div className="edu-page-glow" aria-hidden />
          <div className="edu-page-header">
            <div className="edu-page-icon">
              <GraduationCap className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h2 className="edu-page-degree">{edu.degree}</h2>
              <p className="edu-page-institution">{edu.institution}</p>
              <span className="edu-page-status">{edu.status}</span>
            </div>
          </div>
          <div className="edu-page-details">
            <div className="edu-page-detail-item">
              <span className="edu-page-detail-dot" aria-hidden />
              <span>Final year of a four-year degree programme</span>
            </div>
            <div className="edu-page-detail-item">
              <span className="edu-page-detail-dot" aria-hidden />
              <span>Strong foundation in algorithms, data structures, and discrete mathematics</span>
            </div>
            <div className="edu-page-detail-item">
              <span className="edu-page-detail-dot" aria-hidden />
              <span>Applied through personal projects: AI systems, full-stack platforms, and deployment pipelines</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 border-t border-[#EDE9E3]/80 pt-8">
          <Link href="/experience" className="wib-cta-primary">
            View experience <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="/capabilities" className="wib-cta-secondary">
            Capabilities →
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
