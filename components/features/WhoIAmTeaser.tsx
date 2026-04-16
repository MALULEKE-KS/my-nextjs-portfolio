"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, Layers, Zap, Github } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { fetchProfile } from "@/lib/api/portfolio";
import "@/app/what-i-build.css";

export default async function WhoIAmTeaser() {
  const profile = await fetchProfile();

  return (
    <Section id="profile" className="wib-teaser-section space-y-8">
      <div className="space-y-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C8102E]">
          01 // Who I Am
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-[#1A1814]">
          {profile.name}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-[#6B645A]">
          {profile.summary}
        </p>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium text-[#6B645A]">
            {profile.titles.join(" · ")}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {profile.socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="wib-social-pill"
              >
                <Github className="h-3.5 w-3.5" aria-hidden />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-medium uppercase tracking-widest text-[#1A1814]0">
          Organizations
        </p>
        <div className="flex flex-col gap-3">
          {profile.organizations?.map((org) => (
            <Card key={org.name} className="wib-org-card">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="wib-org-name">{org.name}</p>
                  <p className="wib-org-role">{org.role}</p>
                  {org.periodLabel && (
                    <p className="wib-org-period">{org.periodLabel}</p>
                  )}
                </div>
                {org.githubUrl ? (
                  <a
                    href={org.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="wib-github-btn"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden />
                  </a>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/experience" className="wib-cta-primary">
          Experience <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/education" className="wib-cta-secondary">
          Education <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
