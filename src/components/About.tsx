"use client";

import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[10px] font-mono tracking-widest text-gold">
              01
            </span>
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-text-secondary">
              About
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            {profile.about.paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="space-y-4">
              <h3 className="text-[10px] font-mono tracking-widest text-gold mb-6">
                INTERESTS
              </h3>
              <div className="space-y-3">
                {profile.about.interests.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center gap-3 text-sm text-text-secondary"
                  >
                    <div className="w-1 h-1 bg-gold/40" />
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
