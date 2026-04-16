import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/classNames";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export default function Button(props: ButtonProps) {
  const { className, variant = "primary", size = "md", ...rest } = props;

  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants: Record<Variant, string> = {
    primary:
      "bg-[#C8102E] text-white hover:bg-[#C8102E] focus-visible:ring-[#C8102E]-500",
    secondary:
      "bg-[#EDE9E3] text-[#2D2923] hover:bg-[#E4DFD7] focus-visible:ring-stone-500",
    ghost:
      "bg-transparent text-[#2D2923] hover:bg-[#EDE9E3] focus-visible:ring-stone-500"
  };

  const sizes: Record<Size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base"
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    />
  );
}

