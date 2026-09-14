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
  title: "L Kevin Daniel — Software Engineer | Systems Builder",
  description:
    "Computer Science student, software engineer and technical leader building real-time systems, cloud-native applications, AI-powered tools and developer infrastructure.",
  keywords: [
    "software engineer",
    "systems builder",
    "computer science",
    "distributed systems",
    "cloud-native",
    "real-time systems",
    "technical leadership",
  ],
  openGraph: {
    title: "L Kevin Daniel — Software Engineer | Systems Builder",
    description:
      "Computer Science student, software engineer and technical leader building real-time systems, cloud-native applications, AI-powered tools and developer infrastructure.",
    type: "website",
    locale: "en_US",
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
