"use client";

import { experiences } from "@/data/experience";
import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[10px] font-mono tracking-widest text-gold">
              03
            </span>
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-text-secondary">
              Experience
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 100}>
              <div className="border border-border p-8 hover:border-gold/15 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-gold mb-2 block">
                      {exp.role}
                    </span>
                    <h3 className="text-lg font-light text-off-white">
                      {exp.organization}
                    </h3>
                  </div>
                  <span className="text-xs text-text-tertiary font-mono mt-2 sm:mt-0">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {exp.description.map((desc, j) => (
                    <p key={j} className="text-text-secondary text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[10px] font-mono tracking-wider text-gold/70 border border-gold/15 px-3 py-1"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 text-xs text-text-tertiary">
                  <span>Team: {exp.metrics.teamSize}</span>
                  <span>Impact: {exp.metrics.impact}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
