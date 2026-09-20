"use client";

import { research } from "@/data/research";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";

export function Research() {
  return (
    <section id="research" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader number="05" title="Research" />
        </ScrollReveal>

        {/* Primary research */}
        <ScrollReveal>
          <div className="border border-border p-8 mb-8 hover:border-gold/25 transition-all duration-300 bg-near-black-light shadow-card hover:shadow-card-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-gold mb-2 block">
                  {research.primary.status}
                </span>
                <h3 className="text-xl font-light text-off-white">
                  {research.primary.subtitle}
                </h3>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-text-tertiary border border-border px-3 py-1">
                TARGET: {research.primary.target}
              </span>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl">
              {research.primary.description}
            </p>

            <div className="mb-6">
              <h4 className="text-[10px] font-mono tracking-widest text-text-tertiary mb-3">
                RESEARCH INTERSECTION
              </h4>
              <div className="flex flex-wrap gap-2">
                {research.primary.intersection.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-mono tracking-wider text-gold/70 border border-gold/15 px-3 py-1 hover:border-gold/30 hover:text-gold/90 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-mono tracking-widest text-text-tertiary mb-3">
                RESEARCH PIPELINE
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {research.primary.pipeline.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary font-mono">
                      {step}
                    </span>
                    {i < research.primary.pipeline.length - 1 && (
                      <span className="text-text-tertiary">&#x2192;</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Secondary research */}
        <ScrollReveal delay={100}>
          <div className="border border-border p-8 mb-12 hover:border-gold/25 transition-all duration-300 bg-near-black-light shadow-card hover:shadow-card-lg">
            <h3 className="text-lg font-light text-off-white mb-2">
              {research.secondary.title}
            </h3>
            <p className="text-text-secondary text-xs mb-4">
              {research.secondary.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {research.secondary.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono tracking-wider text-text-tertiary border border-border px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Research interests */}
        <ScrollReveal delay={200}>
          <div>
            <h4 className="text-[10px] font-mono tracking-widest text-text-tertiary mb-4">
              RESEARCH INTERESTS
            </h4>
            <div className="flex flex-wrap gap-3">
              {research.interests.map((interest) => (
                <span
                  key={interest}
                  className="text-xs text-text-secondary border border-border px-4 py-2 hover:border-gold/20 hover:text-off-white transition-all duration-200 cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
