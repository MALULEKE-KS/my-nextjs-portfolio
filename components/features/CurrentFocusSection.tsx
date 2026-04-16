import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { loadThemeConfig } from "@/lib/config-loader";
import { Code2, BrainCircuit, Cloud } from "lucide-react";

const iconMap = [Code2, BrainCircuit, Cloud];

export default function CurrentFocusSection() {
  const { home } = loadThemeConfig();
  const cf = home.currentFocusSection;
  if (!cf) return null;

  return (
    <Section id="current-focus" className="space-y-6">
      <div className="space-y-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C8102E]">
          {cf.kicker}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-[#1A1814] md:text-3xl">
          {cf.title}
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {cf.items.map((item, i) => {
          const Icon = iconMap[i] ?? Code2;
          return (
            <Card key={item.title} variant="glow" className="border-[#EDE9E3]/85 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#C8102E]/25 bg-[#C8102E]/10 text-[#C8102E]">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mb-2 text-base font-semibold text-[#2D2923]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#6B645A]">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
