import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import "@/styles/legacy.css";
import { Providers } from "@/components/Providers";
import { RevealController } from "@/components/RevealController";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";



const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ecadoc.ai"),
  title: {
    default: "Ecadoc AI — Intelligent Blueprint Reader",
    template: "%s | Ecadoc AI",
  },
  description:
    "Ecadoc AI pairs architectural insight with computer vision to read, measure, and annotate every drawing with search-ready context.",
  alternates: {
    canonical: "https:
  },
  openGraph: {
    type: "website",
    title: "Ecadoc AI — Intelligent Blueprint Reader",
    description:
      "Translate blueprints into answers with Ecadoc AI. Upload plans, ask questions, and capture precise measurements instantly.",
    url: "https://www.ecadoc.ai",
    siteName: "Ecadoc AI",
    images: [
      {
        url: "/images/social.png",
        width: 1200,
        height: 630,
        alt: "Ecadoc AI blueprint intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ecadocai",
    creator: "@ecadocai",
    title: "Ecadoc AI — Intelligent Blueprint Reader",
    description:
      "Ask a drawing anything. Ecadoc AI answers with measurements, annotations, and context pulled directly from your plans.",
    images: ["/images/social.png"],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={interTight.className}>
      <Providers>
        <RevealController />
        <SiteHeader />
        {children}
        <SiteFooter />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
