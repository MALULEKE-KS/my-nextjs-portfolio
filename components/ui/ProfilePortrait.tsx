import Image from "next/image";
import { cn } from "@/lib/utils/classNames";

export type ProfilePortraitProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function ProfilePortrait({
  src,
  alt,
  className,
  priority
}: ProfilePortraitProps) {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-[280px] shrink-0 overflow-hidden rounded-2xl border border-[#E4DFD7]/85 bg-[#F5F2ED] shadow-[0_0_12px_rgba(200,16,46,0.12)] ring-1 ring-blue-500/15 motion-safe-hover-lift md:mx-0",
        "aspect-[4/5]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) min(280px, 100vw), 280px"
        priority={priority}
      />
    </figure>
  );
}
