import Link from "next/link";
import { ArrowUpRight, LayoutTemplate } from "lucide-react";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { loadThemeConfig } from "@/lib/config-loader";
import { lucideFromConfig } from "@/lib/utils/lucide-from-config";

export default function HomeTeasers() {
  const { home } = loadThemeConfig();
  const { teasers, teasersSection } = home;

  return (
    <Section id="routes" className="space-y-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          kicker={teasersSection.kicker}
          title={teasersSection.title}
          description={teasersSection.description}
          className="max-w-2xl"
        />
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E4DFD7]/90 bg-[#F5F2ED]/60 text-[#C8102E] md:h-16 md:w-16">
          <LayoutTemplate className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {[teasers.flagship, teasers.stack].map((t) => {
          const TeaserIcon = lucideFromConfig(t.lucideIcon);
          return (
            <Link key={t.href} href={t.href} className="group block h-full">
              <Card
                variant="glow"
                className="relative flex h-full flex-col justify-between overflow-hidden p-6 transition-colors hover:border-[#C8102E]/35"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#C8102E]/10 opacity-0 blur-2xl motion-safe:transition motion-safe:duration-300 group-hover:opacity-100"
                />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C8102E]/25 bg-[#C8102E]/10 text-[#C8102E]">
                      <TeaserIcon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C8102E]/85">
                      {t.kicker}
                    </p>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1814]">
                    {t.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B645A]">
                    {t.body}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center justify-between gap-3 border-t border-[#EDE9E3]/80 pt-5">
                  <span className="text-sm font-semibold text-[#C8102E]">
                    {t.ctaLabel}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-[#1A1814]0 motion-safe:transition motion-safe:duration-180 group-hover:text-[#C8102E]" />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
