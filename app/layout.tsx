import "./globals.css";
import "./page.css";
import "./teasers.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/app/providers";
import BackToTop from "@/components/ui/BackToTop";
import { fontMono, fontSans } from "@/app/fonts";

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://ksdrill-portfolio.vercel.app";

const defaultTitle = "Maluleke Kurhula Success – Engineering Portfolio";
const defaultDescription =
  "Software Engineer and AI Integrator building production-grade digital systems across fintech, healthcare, enterprise, and AI.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s · Portfolio"
  },
  description: defaultDescription,
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: defaultTitle,
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    images: [
      {
        url: "/images/og-image_1.png",
        width: 1200,
        height: 800,
        alt: "Maluleke Kurhula Success – Engineering Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="bg-[#FAF8F5] text-[#1A1814] antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
            <BackToTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
