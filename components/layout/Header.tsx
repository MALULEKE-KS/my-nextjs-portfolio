"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Briefcase, Cpu, GraduationCap, Home, Layers, Mail, Menu, Scale, X } from "lucide-react";
import { useState } from "react";
import "@/app/header.css";
import { loadNavigationConfig, loadProfile } from "@/lib/config-loader";

const navIconMap = {
  home: Home,
  bookOpen: BookOpen,
  layers: Layers,
  cpu: Cpu,
  mail: Mail,
  briefcase: Briefcase,
  graduationCap: GraduationCap,
  scale: Scale
} as const;

export default function Header() {
  const nav = loadNavigationConfig();
  const profile = loadProfile();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="hdr-master">
      <div className="hdr-glow-line" aria-hidden />
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2.5">
        {/* Logo */}
        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-3">
          <div className="hdr-logo-mark">
            <span className="hdr-logo-letter">M</span>
          </div>
          <div className="hdr-logo-text">
            <span className="hdr-name">{profile.name}</span>
            <span className="hdr-titles">{profile.titles.join(" · ")}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hdr-nav hidden sm:flex" aria-label="Primary">
          {nav.items.map((item) => {
            const Icon = navIconMap[item.icon as keyof typeof navIconMap];
            const active = isActive(item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`hdr-nav-link${active ? " active" : ""}`}
              >
                {Icon && <Icon className="hdr-nav-icon h-4 w-4 shrink-0" aria-hidden />}
                {item.label}
                <span className="hdr-nav-dot" aria-hidden />
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="hdr-mobile-btn ml-auto sm:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#1A1814]/5 bg-[#FAF8F5]/95 backdrop-blur-sm sm:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1" aria-label="Mobile">
            {nav.items.map((item) => {
              const Icon = navIconMap[item.icon as keyof typeof navIconMap];
              const active = isActive(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`hdr-nav-link${active ? " active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden />}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}