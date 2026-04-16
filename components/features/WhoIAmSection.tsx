import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { loadThemeConfig } from "@/lib/config-loader";
import { fetchProfile } from "@/lib/api/portfolio";
import { User } from "lucide-react";
import ProfilePortrait from "@/components/ui/ProfilePortrait";

export default async function WhoIAmSection() {
  const profile = await fetchProfile();
  const { sections } = loadThemeConfig();
  const copy = sections.profile;
  const orgs = profile.organizations ?? [];

  return (
    <Section id="profile" className="space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          kicker={copy.kicker}
          title={copy.title}
          description={copy.description}
          className="max-w-2xl"
        />
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E4DFD7]/90 bg-[#F5F2ED]/60 text-[#C8102E] md:h-16 md:w-16">
          <User className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-10">
        {profile.portraitSrc ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-stretch lg:flex-col xl:flex-row xl:items-stretch">
            <ProfilePortrait
              src={profile.portraitSrc}
              alt={profile.portraitAlt ?? profile.name}
              className="max-w-[260px] md:max-w-[220px] xl:max-w-[240px]"
            />
            <Card className="min-w-0 flex-1 border-[#EDE9E3]/80">
              <p className="text-sm leading-relaxed text-[#6B645A] md:text-base">
                {profile.summary}
              </p>
            </Card>
          </div>
        ) : (
          <Card className="border-[#EDE9E3]/80">
            <p className="text-sm leading-relaxed text-[#6B645A] md:text-base">
              {profile.summary}
            </p>
          </Card>
        )}
        <div className="space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A1814]0">
            ORGS
          </p>
          <div className="space-y-3">
            {orgs.map((c) => (
              <Card
                key={c.name}
                className="p-4 transition-colors hover:border-[#E4DFD7]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <span className="font-mono text-xs text-[#C8102E]/90">
                    {c.name}
                  </span>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#1A1814]0">
                    <span>{c.role}</span>
                    {c.periodLabel ? (
                      <span className="rounded border border-[#EDE9E3]/90 px-2 py-0.5 text-[#6B645A]">
                        {c.periodLabel}
                      </span>
                    ) : null}
                  </div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#6B645A]">
                  {c.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
