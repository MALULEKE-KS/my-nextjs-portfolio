import Link from "next/link";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { loadCapabilitiesConfig, loadThemeConfig } from "@/lib/config-loader";
import { Layers } from "lucide-react";

export default function CapabilitiesSection() {
  const cap = loadCapabilitiesConfig();
  const { sections } = loadThemeConfig();

  return (
    <Section className="space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          kicker={sections.capabilities.kicker}
          title={sections.capabilities.title}
          description={sections.capabilities.description}
          className="max-w-2xl"
        />
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E4DFD7]/90 bg-[#F5F2ED]/60 text-[#C8102E] md:h-16 md:w-16">
          <Layers className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cap.groups.map((g) => (
          <Card
            key={g.id}
            className="motion-safe-hover-lift border-[#EDE9E3]/85 p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1A1814]0">
              {g.title}
            </p>
            <ul className="mt-3 space-y-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-snug text-[#6B645A]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className="flex justify-start">
        <Link
          href={cap.stackHref}
          className="motion-safe-transition inline-flex min-h-[44px] items-center rounded-lg border border-[#D4CFC4]/90 bg-[#FAF8F5]/40 px-5 py-2.5 text-sm font-semibold text-[#2D2923] backdrop-blur-sm hover:border-[#C4BFB4] hover:bg-[#F5F2ED]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          {cap.stackCtaLabel}
        </Link>
      </div>
    </Section>
  );
}
