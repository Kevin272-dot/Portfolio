"use client";

import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Blue ambient glow */}
      <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-gold/[0.14] blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-48 -left-40 w-[480px] h-[480px] rounded-full bg-gold/[0.09] blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-20 w-full">
        <p
          className="text-xs sm:text-sm font-semibold text-gold font-mono tracking-[0.25em] uppercase mb-6"
          style={{ opacity: 0, animation: "fadeInUp 0.6s ease-out 50ms forwards" }}
        >
          {profile.name} &middot; Full-Stack Developer &middot; VIT Chennai
        </p>

        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-off-white"
          style={{ opacity: 0, animation: "fadeInUp 0.7s ease-out 150ms forwards" }}
        >
          Building <span className="text-gold">web apps.</span>
          <br />
          Crafting <span className="text-gold">intelligent systems.</span>
          <br />
          Shipping at <span className="text-gold">hackathons.</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-dim transition-all duration-200 hover:shadow-[0_12px_32px_-8px_rgba(37,99,235,0.55)]"
          >
            View selected work
            <ArrowUpRight size={18} />
          </Link>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 border-2 border-border text-off-white px-8 py-4 rounded-full text-base font-semibold hover:border-gold hover:text-gold transition-all duration-200"
          >
            <Download size={16} />
            Download resume
          </a>
        </div>

        <p
          className="mt-10 max-w-xl text-base sm:text-lg text-text-secondary leading-relaxed"
          style={{ opacity: 0, animation: "fadeInUp 0.6s ease-out 350ms forwards" }}
        >
          {profile.hero.supporting}
        </p>
      </div>

      {/* Stats strip */}
      <div
        className="relative z-10 border-y border-border bg-near-black-light/60"
        style={{ opacity: 0, animation: "fadeInUp 0.6s ease-out 500ms forwards" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-off-white">
                {stat.value}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 py-5 border-b border-border overflow-hidden">
        <Marquee items={profile.marquee} />
      </div>
    </section>
  );
}