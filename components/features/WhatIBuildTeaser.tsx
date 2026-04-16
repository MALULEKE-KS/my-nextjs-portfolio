"use client";

import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight, Scale, HeartPulse, Building2, GraduationCap, Landmark, ShoppingCart } from "lucide-react";
import Section from "@/components/ui/Section";
import "@/app/what-i-build.css";

const iconMap: Record<string, LucideIcon> = {
  Scale, HeartPulse, Building2, GraduationCap, Landmark, ShoppingCart
};

const industryIcons: Record<string, string> = {
  Fintech: "Scale",
  Healthcare: "HeartPulse",
  "Enterprise SaaS": "Building2",
  EdTech: "GraduationCap",
  GovTech: "Landmark",
  "E-commerce": "ShoppingCart"
};

export default function WhatIBuildTeaser() {
  const profile = require("@/config/profile.json");
  const industries = profile.industries as string[];

  return (
    <Section className="wib-teaser-section space-y-8">
      <div className="space-y-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C8102E]">
          02 // What I Build
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-[#1A1814]">
          Industry reach
        </h2>
      </div>

      <div className="wib-industry-grid">
        {industries.map((industry) => {
          const Icon = iconMap[industryIcons[industry] ?? "Building2"];
          return (
            <div key={industry} className="wib-industry-card">
              <span className="wib-industry-icon">
                {Icon && <Icon className="h-4 w-4" aria-hidden />}
              </span>
              <span className="wib-industry-label">{industry}</span>
            </div>
          );
        })}
      </div>

      <p className="text-sm leading-relaxed text-[#6B645A]">
        Scalable full-stack systems integrated with AI — across every industry above.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link href="/capabilities" className="wib-cta-primary">
          Full capabilities <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/live-work" className="wib-cta-secondary">
          Live work <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}