import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "L Kevin Daniel — Full-Stack Developer | Software Developer | AI/ML Enthusiast",
  description:
    "Full-stack developer and AI/ML enthusiast building web applications, intelligent systems, productivity tools, and hackathon projects.",
  keywords: [
    "full-stack developer",
    "software developer",
    "AI/ML",
    "web applications",
    "hackathon projects",
    "productivity tools",
    "Next.js",
    "React",
    "Python",
    "machine learning",
  ],
  openGraph: {
    title: "L Kevin Daniel — Full-Stack Developer | Software Developer | AI/ML Enthusiast",
    description:
      "Full-stack developer and AI/ML enthusiast building web applications, intelligent systems, productivity tools, and hackathon projects.",
    type: "website",
    locale: "en_US",
    url: "https://github.com/Kevin272-dot/Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "L Kevin Daniel — Full-Stack Developer | Software Developer | AI/ML Enthusiast",
    description:
      "Full-stack developer and AI/ML enthusiast building web applications, intelligent systems, productivity tools, and hackathon projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-near-black text-off-white antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
