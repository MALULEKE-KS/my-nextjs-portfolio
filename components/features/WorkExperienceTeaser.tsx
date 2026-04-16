import Link from "next/link";
import Section from "@/components/ui/Section";
import { fetchProfile } from "@/lib/api/portfolio";
import { ArrowRight, Briefcase } from "lucide-react";

export default async function WorkExperienceTeaser() {
  const profile = await fetchProfile();
  const orgs = profile.organizations ?? [];
  const hasExperience = orgs.length > 0;

  if (!hasExperience) return null;

  return (
    <Section className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C8102E]/25 bg-[#C8102E]/10 text-[#C8102E]">
          <Briefcase className="h-6 w-6" aria-hidden />
        </div>
        <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C8102E]">
              Experience
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-[#1A1814]">
              Professional Background
            </h2>
          </div>
          <Link
            href="/experience"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#C8102E] hover:text-[#C8102E]"
          >
            View full history
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>

      {/* Teaser Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {orgs.map((org, i) => (
          <Link
            key={i}
            href="/experience"
            className="wet-card group block"
          >
            <div className="wet-card-inner">
              <div className="wet-card-header">
                <div className="wet-card-org-info">
                  <p className="wet-org-name">{org.name}</p>
                  <p className="wet-org-role">{org.role}</p>
                </div>
                {org.periodLabel ? (
                  <span className="wet-period-badge">{org.periodLabel}</span>
                ) : null}
              </div>
              <p className="wet-card-description">{org.description}</p>
              <div className="wet-card-footer">
                <span className="wet-view-link">
                  View details
                  <ArrowRight className="h-3.5 w-3.5 wet-arrow" aria-hidden />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}