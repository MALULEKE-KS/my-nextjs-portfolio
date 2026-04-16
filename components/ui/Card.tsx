import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/classNames";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "glow";
};

export default function Card({
  className,
  children,
  variant = "default",
  ...rest
}: CardProps) {
  return (
    <div
      {...rest}
      className={cn(
        "rounded-2xl border border-[#EDE9E3]/90 bg-[#FAF8F5]/55 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-sm motion-safe-hover-lift",
        variant === "glow" &&
          "border-[#C8102E]/25 shadow-[0_0_12px_rgba(200,16,46,0.12)] hover:border-[#C8102E]/40 hover:shadow-[0_0_24px_rgba(200,16,46,0.20)]",
        className
      )}
    >
      {children}
    </div>
  );
}

