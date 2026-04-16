import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BackgroundImage from "@/components/ui/BackgroundImage";
import { loadThemeConfig } from "@/lib/config-loader";
import { fetchProfile } from "@/lib/api/portfolio";
import ProfilePortrait from "@/components/ui/ProfilePortrait";

async function HeroContent() {
  const profile = await fetchProfile();
  const theme = loadThemeConfig();
  const { home } = theme;

  return (
    <div className="relative mx-auto flex min-h-0 max-w-6xl flex-col gap-10 px-4 py-16 sm:py-20 md:flex-row md:items-stretch md:py-24 lg:py-28">
      <div className="flex flex-1 flex-col justify-center space-y-8">
        <div className="space-y-5">
          {profile.openToWork && (
            <div className="hero-open-to-work">
              <span className="hero-open-dot" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300/95">
                {profile.openToWorkLabel}
              </span>
            </div>
          )}
          <h1 className="hero-name-text">
            {profile.name}
          </h1>
          <p className="font-mono text-sm font-medium uppercase tracking-wider text-blue-400/90 md:text-base">
            {profile.titles.join(" · ")}
          </p>
          <p className="hero-tagline-text">
            {profile.tagline}
          </p>
          {profile.location && (
            <p className="font-mono text-xs text-slate-500 md:text-sm">
              {profile.location}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={home.primaryCtaHref}
              className="hero-primary-cta"
            >
              {home.primaryCtaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            {home.secondaryCtaLabel && home.secondaryCtaHref ? (
              <Link
                href={home.secondaryCtaHref}
                className="hero-secondary-cta"
              >
                {home.secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="hero-social-links">
          {profile.socialLinks.map((link) => {
            const label = link.type === "email" ? "Email Me" : link.type === "github" ? "GitHub" : link.type === "linkedin" ? "LinkedIn" : link.type === "whatsapp" ? "WhatsApp" : link.label;
            return (
              <a
                key={link.type}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                className="hero-social-btn"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-6">
        {profile.portraitSrc ? (
          <div className="hero-portrait-wrapper">
            <div className="hero-portrait-ring" aria-hidden="true" />
            <div className="hero-portrait-glow" aria-hidden="true" />
            <div className="hero-portrait-ambient" aria-hidden="true" />
            <figure
              className={cn(
                "relative mx-auto w-full max-w-[280px] shrink-0 overflow-hidden rounded-2xl border border-slate-700/85 bg-slate-900 shadow-glow-sm ring-1 ring-blue-500/15 motion-safe-hover-lift md:mx-0",
                "aspect-[4/5]",
                "hero-portrait md:max-w-[280px] lg:max-w-[300px]"
              )}
            >
              <Image
                src={profile.portraitSrc}
                alt={profile.portraitAlt ?? profile.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) min(280px, 100vw), 280px"
                priority={priority}
              />
            </figure>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function HomeHero() {
  const theme = loadThemeConfig();
  return (
    <BackgroundImage
      imageDesktop={theme.hero.backgroundImage.desktop}
      imageMobile={theme.hero.backgroundImage.mobile}
      fallback={theme.hero.backgroundImage.fallback}
      alt={theme.hero.backgroundAlt}
      backgroundSize={theme.hero.backgroundSize}
      backgroundPosition={theme.hero.backgroundPosition}
      overlayColor={theme.hero.overlay.color}
      overlayOpacity={theme.hero.overlay.opacity}
      blur={theme.hero.overlay.blur}
      priority
    >
      <div className="hero-mesh pointer-events-none absolute inset-0" />
      <div className="hero-scanline" aria-hidden />
      <div className="relative">
        <HeroContent />
      </div>
    </BackgroundImage>
  );
}
