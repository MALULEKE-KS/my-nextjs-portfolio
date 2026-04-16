import { cn } from "@/lib/utils/classNames";

export type SectionHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeader({
  kicker,
  title,
  description,
  className
}: SectionHeaderProps) {
  return (
    <header className={cn("max-w-2xl space-y-3", className)}>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[#C8102E]">
        {kicker}
      </p>
      <div className="h-px w-12 bg-gradient-to-r from-[#C8102E] to-transparent" />
      <h2 className="text-2xl font-semibold tracking-tight text-[#1A1814] md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-relaxed text-[#6B645A] md:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
