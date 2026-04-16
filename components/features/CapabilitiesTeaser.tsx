import Link from "next/link";
import Section from "@/components/ui/Section";
import { loadCapabilitiesConfig, loadThemeConfig } from "@/lib/config-loader";
import { Layers, ArrowRight } from "lucide-react";
import "@/app/teasers.css";

export default function CapabilitiesTeaser() {
  const cap = loadCapabilitiesConfig();
  const { sections } = loadThemeConfig();

  return (
    <Section className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C8102E]/25 bg-[#C8102E]/10 text-[#C8102E]">
          <Layers className="h-6 w-6" aria-hidden />
        </div>
        <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C8102E]">
              {sections.capabilities.kicker}
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-[#1A1814]">
              {sections.capabilities.title}
            </h2>
          </div>
          <Link
            href="/capabilities"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#C8102E] hover:text-[#C8102E]"
          >
            Full stack
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>

      {/* Teaser Grid — first 4 items */}
      <div className="cap-teaser-grid">
        {cap.groups.slice(0, 4).map((g) => (
          <Link
            key={g.id}
            href="/capabilities"
            className="cap-teaser-card"
          >
            <div className="cap-teaser-inner">
              <p className="cap-teaser-title">{g.title}</p>
              <ul className="cap-teaser-items">
                {g.items.slice(0, 4).map((item) => (
                  <li key={item} className="cap-teaser-item">{item}</li>
                ))}
              </ul>
              <div className="cap-teaser-footer">
                <span className="cap-teaser-link">
                  Full list
                  <ArrowRight className="cap-teaser-arrow h-3.5 w-3.5" aria-hidden />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}