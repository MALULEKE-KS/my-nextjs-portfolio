import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { fetchProfile } from "@/lib/api/portfolio";
import { CheckCircle2 } from "lucide-react";

export default async function AtAGlanceSection() {
  const profile = await fetchProfile();
  const items = profile.atAGlance ?? [];

  return (
    <Section id="at-a-glance" className="space-y-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C8102E]">
        At a Glance
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {items.map((item: string, i: number) => (
          <Card key={i} className="flex items-start gap-3 border-[#EDE9E3]/80 p-4">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]/80" aria-hidden />
            <span className="text-sm leading-snug text-[#6B645A]">{item}</span>
          </Card>
        ))}
      </div>
    </Section>
  );
}
