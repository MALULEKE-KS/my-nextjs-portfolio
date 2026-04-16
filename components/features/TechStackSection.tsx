import { Suspense } from "react";
import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";
import { fetchTechStack } from "@/lib/api/portfolio";
import { loadThemeConfig } from "@/lib/config-loader";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { lucideFromConfig } from "@/lib/utils/lucide-from-config";

type TechStackSectionProps = {
  omitHeader?: boolean;
};

async function TechStackContent() {
  const { categories } = await fetchTechStack();

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {categories.map((category) => {
        const CategoryIcon = lucideFromConfig(category.lucideIcon);
        return (
          <Card
            key={category.id}
            className="border-[#EDE9E3]/85 transition-colors hover:border-[#E4DFD7]/90"
          >
            <div className="mb-5 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C8102E]/25 bg-[#C8102E]/10 text-[#C8102E]">
                <CategoryIcon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8102E]/85">
                  {category.name}
                </h3>
                <p className="mt-1 text-[11px] text-[#1A1814]0">
                  Layer · {category.id.replace(/-/g, "_")}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item.name}
                  className="rounded-md border border-[#EDE9E3]/90 bg-[#F5F2ED]/40 px-2.5 py-1 font-mono text-[11px] text-[#6B645A] motion-safe:transition motion-safe:duration-180 motion-safe:hover:border-[#C8102E]/35 motion-safe:hover:text-[#2D2923]"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default function TechStackSection({ omitHeader = false }: TechStackSectionProps) {
  const { sections } = loadThemeConfig();
  const copy = sections.stack;

  return (
    <Section className="space-y-10">
      {omitHeader ? null : (
        <SectionHeader
          kicker={copy.kicker}
          title={copy.title}
          description={copy.description}
        />
      )}
      <Suspense
        fallback={
          <div className="grid gap-5 md:grid-cols-2">
            <Skeleton className="h-48 rounded-2xl" />
            <Skeleton className="h-48 rounded-2xl" />
          </div>
        }
      >
        <TechStackContent />
      </Suspense>
    </Section>
  );
}
