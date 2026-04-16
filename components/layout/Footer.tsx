import Link from "next/link";
import { loadProfile } from "@/lib/config-loader";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const profile = loadProfile();

  const socialIcons: Record<string, typeof Github> = {
    github: Github,
    linkedin: Linkedin,
    email: Mail
  };

  return (
    <footer className="mt-16 border-t border-[#EDE9E3]/80 bg-[#FAF8F5]/80">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-mono text-sm font-semibold text-[#2D2923]">
              {profile.name}
            </p>
            <p className="font-mono text-xs text-[#1A1814]0">
              {profile.education?.institution} · {profile.education?.degree}
            </p>
            <p className="text-xs text-[#1A1814]0">
              Building practical digital systems that solve real-world challenges.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-x-4 gap-y-2 sm:flex-wrap">
              {profile.socialLinks.map((link) => {
                const Icon = socialIcons[link.type];
                return (
                  <a
                    key={link.type}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs text-[#6B645A] transition-colors hover:text-[#2D2923]"
                  >
                    {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden /> : null}
                    <span>{link.type.charAt(0).toUpperCase() + link.type.slice(1)}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#EDE9E3]/80 pt-6">
          <p className="text-xs text-[#1A1814]0">
            © 2026 {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/methodology"
              className="text-xs text-[#1A1814]0 transition-colors hover:text-[#6B645A]"
            >
              Philosophy
            </Link>
            <Link
              href="/flagship"
              className="text-xs text-[#1A1814]0 transition-colors hover:text-[#6B645A]"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-xs text-[#1A1814]0 transition-colors hover:text-[#6B645A]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-slate-600">
            Built with Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
