import Link from "next/link";
import Section from "@/components/ui/Section";
import { fetchProfile } from "@/lib/api/portfolio";
import { GraduationCap, ArrowRight } from "lucide-react";

export default async function EducationTeaser() {
  const profile = await fetchProfile();
  const edu = profile.education;

  if (!edu) return null;

  return (
    <Section className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/25 bg-[#D4A017]/10 text-emerald-700">
          <GraduationCap className="h-6 w-6" aria-hidden />
        </div>
        <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-700/80">
              Education
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-[#1A1814]">
              Academic Background
            </h2>
          </div>
          <Link
            href="/education"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-300"
          >
            Full details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>

      {/* Teaser Card */}
      <Link
        href="/education"
        className="edu-teaser-card group block"
      >
        <div className="edu-teaser-inner">
          <div className="edu-teaser-header">
            <div>
              <p className="edu-teaser-degree">{edu.degree}</p>
              <p className="edu-teaser-institution">{edu.institution}</p>
            </div>
            {edu.status ? (
              <span className="edu-teaser-status">{edu.status}</span>
            ) : null}
          </div>
          <div className="edu-teaser-footer">
            <span className="edu-teaser-link">
              View full education details
              <ArrowRight className="edu-teaser-arrow h-3.5 w-3.5" aria-hidden />
            </span>
          </div>
        </div>
      </Link>
    </Section>
  );
}