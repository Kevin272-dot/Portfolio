"use client";

import { experiences } from "@/data/experience";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 border-t border-border bg-near-black-light/40">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading index="02" title="Experience" />
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 100}>
              <article className="rounded-3xl border border-border bg-near-black p-10 sm:p-12 shadow-card hover:shadow-card-lg transition-shadow duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-gold mb-3 block">
                      {exp.role}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-off-white leading-tight">
                      {exp.organization}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-semibold text-text-secondary bg-near-black-lighter/70 px-4 py-2 rounded-full whitespace-nowrap self-start sm:self-auto">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mb-8">
                  {exp.description.map((desc, j) => (
                    <p key={j} className="text-text-secondary text-sm sm:text-base leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs font-medium text-gold bg-gold-subtle px-3.5 py-1.5 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-x-12 gap-y-4 pt-8 border-t border-border">
                  <div>
                    <span className="block text-3xl font-bold tracking-tight text-off-white">
                      {exp.metrics.teamSize.split(" ")[0]}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary">
                      {exp.metrics.teamSize.split(" ").slice(1).join(" ") || "team members"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold tracking-tight text-off-white">
                      {exp.metrics.impact.split(" ")[0]}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary">
                      {exp.metrics.impact.split(" ").slice(1).join(" ") || "people supported"}
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}