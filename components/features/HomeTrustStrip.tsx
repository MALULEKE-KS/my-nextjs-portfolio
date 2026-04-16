import Link from "next/link";
import { loadThemeConfig } from "@/lib/config-loader";
import { cn } from "@/lib/utils/classNames";

export default function HomeTrustStrip() {
  const { home } = loadThemeConfig();
  const { items } = home.trustStrip;

  return (
    <div className="border-y border-black/[0.06] bg-[#FAF8F5]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:py-5">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-10 md:justify-between">
          {items.map((item) => {
            const inner = (
              <>
                <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-[#1A1814]0">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-sm font-medium text-[#2D2923]">
                  {item.value}
                </span>
              </>
            );
            return (
              <li key={`${item.label}-${item.value}`} className="min-w-[140px] flex-1 sm:flex-none">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "motion-safe-transition block rounded-lg outline-none ring-offset-2 ring-offset-stone-950",
                      "min-h-[44px] py-1 focus-visible:ring-2 focus-visible:ring-[#C8102E]-500/70",
                      "hover:text-[#C8102E]"
                    )}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="min-h-[44px] py-1">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
