import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rashmi Singh - Senior Software Engineer & Tech Leader",
  description: "Experienced Senior Software Engineer with 13+ years in full-stack development, cloud architecture, and team leadership. Specialized in Java, React, AWS, and modern web technologies.",
  keywords: "Rashmi Singh, Software Engineer, Full Stack Developer, Java, React, AWS, Team Lead, Senior Engineer",
  authors: [{ name: "Rashmi Singh" }],
  creator: "Rashmi Singh",
  openGraph: {
    title: "Rashmi Singh - Senior Software Engineer & Tech Leader",
    description: "Experienced Senior Software Engineer with 13+ years in full-stack development, cloud architecture, and team leadership.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashmi Singh - Senior Software Engineer & Tech Leader",
    description: "Experienced Senior Software Engineer with 13+ years in full-stack development, cloud architecture, and team leadership.",
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