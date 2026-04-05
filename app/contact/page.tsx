import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import ContactSection from "@/components/features/ContactSection";
import ContactForm from "@/components/forms/ContactForm";
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
          className="flex items-center gap-2 text-xs text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="motion-safe-transition hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            Home
          </Link>
          <span className="text-slate-600" aria-hidden>
            /
          </span>
          <span className="font-mono text-slate-400">contact</span>
        </nav>

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300/95">
          <MessageCircle className="h-3 w-3" aria-hidden />
          Channels
        </div>

        <Card className="border-slate-800/85 p-6 md:p-8">
          <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400/90">
            Message
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Validated on submit. When email delivery is configured on the server,
            you get a copy in the inbox; otherwise the form still validates and
            acknowledges. For sensitive threads, direct email works best.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Card>

        <ContactSection variant="page" />
      </div>
    </PageContainer>
  );
}
