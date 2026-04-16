import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/app/providers";
import { fontMono, fontSans } from "@/app/fonts";

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://ksdrill-portfolio.vercel.app";

const defaultTitle = "Maluleke Kurhula Success – Engineering Portfolio";
const defaultDescription =
  "Software Engineer and AI Integrator building scalable, production-grade platforms across fintech, healthcare, enterprise, and AI. BSc Computer Science & Mathematics — North-West University.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s · Portfolio"
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: defaultTitle,
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    images: ["/images/og-image_1.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/og-image_1.png"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  other: {
    "og:image": "/images/og-image_1.png"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

