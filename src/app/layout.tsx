import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}