import Link from "next/link";
import { Mail, Linkedin, MessageCircle, Github, ArrowRight, Zap } from "lucide-react";
import "@/app/contact-section.css";
import { fetchContactConfig } from "@/lib/api/portfolio";

const channels = [
  {
    key: "email",
    label: "Email",
    desc: "Best for specs, timelines, and technical depth — direct, fast, and searchable.",
    href: (c: string) => `mailto:${c}`,
    icon: Mail,
    iconClass: "contact-icon-wrap email-icon",
    btnClass: "contact-card-btn email-btn",
    isEmail: true,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    desc: "Formal introductions and role-aligned conversations — professional and permanent.",
    href: (u: string) => u,
    icon: Linkedin,
    iconClass: "contact-icon-wrap linkedin-icon",
    btnClass: "contact-card-btn",
    isEmail: false,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    desc: "Short pings and scheduling when speed matters — async but personal.",
    href: (u: string) => u,
    icon: MessageCircle,
    iconClass: "contact-icon-wrap whatsapp-icon",
    btnClass: "contact-card-btn",
    isEmail: false,
  },
  {
    key: "github",
    label: "GitHub",
    desc: "Public activity, code quality, and org work — look before you engage.",
    href: (u: string) => u,
    icon: Github,
    iconClass: "contact-icon-wrap github-icon",
    btnClass: "contact-card-btn",
    isEmail: false,
  },
] as const;

export default async function ContactSection() {
  const contact = await fetchContactConfig();

  const channelLinks = {
    email: `mailto:${contact.primaryEmail}`,
    linkedin: contact.linkedinUrl,
    whatsapp: contact.whatsappLink,
    github: contact.githubUrl,
  };

  return (
    <section className="contact-master space-y-10 py-16 md:py-20">
      {/* Top divider with glow */}
      <div className="contact-top-divider" aria-hidden />

      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8102E]/80">
            Get In Touch
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-[#1A1814] md:text-3xl">
            Let&apos;s build something serious
          </h2>
          <p className="text-sm text-[#6B645A] max-w-xl">
            Open to software engineering roles and selective platform engagements.
            Pick the channel that fits your style.
          </p>
        </div>
      </div>

      {/* Channel cards */}
      <div className="contact-channels">
        {channels.map((ch) => {
          const href = ch.key === "email"
            ? `mailto:${contact.primaryEmail}`
            : channelLinks[ch.key as keyof typeof channelLinks];
          const Icon = ch.icon;

          return (
            <div
              key={ch.key}
              className={`contact-channel-card${ch.key === "email" ? " email-card" : ""}`}
            >
              <div className={ch.iconClass}>
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="contact-card-label">{ch.label}</h3>
              <p className="contact-card-desc">{ch.desc}</p>
              <a
                href={href}
                className={ch.btnClass}
                {...(ch.key !== "email" ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {ch.isEmail ? "Send Email" : `Open ${ch.label}`}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          );
        })}
      </div>

      {/* Bottom note */}
      <div className="contact-bottom-note">
        <span className="contact-note-dot" aria-hidden />
        <span>
          Email is fastest for technical threads — include context so the response is useful from round one.
        </span>
      </div>
    </section>
  );
}