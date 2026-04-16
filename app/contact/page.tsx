import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import ContactSection from "@/components/features/ContactSection";
import Card from "@/components/ui/Card";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out via validated form, email, LinkedIn, WhatsApp, or GitHub — optimized for hiring and collaboration threads."
};

export default function ContactPage() {
  return (
    <PageContainer>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 min-h-[360px] home-ambient-grid opacity-60"
        aria-hidden
      />
      <div className="relative z-[1] space-y-10">
        <nav
          className="flex items-center gap-2 text-xs text-[#1A1814]0"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="motion-safe-transition hover:text-[#6B645A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]-500/60"
          >
            Home
          </Link>
          <span className="text-slate-600" aria-hidden>
            /
          </span>
          <span className="font-mono text-[#6B645A]">contact</span>
        </nav>

        <div className="inline-flex items-center gap-2 rounded-full border border-[#C8102E]/25 bg-[#C8102E]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C8102E]">
          <MessageCircle className="h-3 w-3" aria-hidden />
          Channels
        </div>

        <ContactSection />
      </div>
    </PageContainer>
  );
}
