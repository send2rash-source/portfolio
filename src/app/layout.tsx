import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rashmi Singh - Senior Product Manager & Growth Strategist",
  description: "Senior Product Manager with 13+ years of experience driving growth and building B2C, SaaS, and platform products. Specialized in customer acquisition, platform strategy, and user-centric problem-solving.",
  keywords: "Rashmi Singh, Product Manager, Senior Product Manager, B2C Products, SaaS, Platform Strategy, Growth, Customer Acquisition",
  authors: [{ name: "Rashmi Singh" }],
  creator: "Rashmi Singh",
  openGraph: {
    title: "Rashmi Singh - Senior Product Manager & Growth Strategist",
    description: "Senior Product Manager with 13+ years of experience driving growth and building B2C, SaaS, and platform products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashmi Singh - Senior Product Manager & Growth Strategist",
    description: "Senior Product Manager with 13+ years of experience driving growth and building B2C, SaaS, and platform products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}