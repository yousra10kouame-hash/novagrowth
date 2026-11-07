import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { DemoNotice } from "@/components/DemoNotice";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

// next/font downloads the font at build time and serves it from your own
// domain, so the visitor's browser never calls Google.
const font = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaGrowth GmbH | Sales technology for B2B teams",
  description:
    "NovaGrowth GmbH is a Zurich-based B2B software company with about 140 employees, offering customer acquisition, lead management, CRM integrations and sales analytics. Fictional demonstration company.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.variable}>
      <body className="antialiased">
        <DemoNotice />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
