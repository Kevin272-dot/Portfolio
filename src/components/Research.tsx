"use client";

import { research } from "@/data/research";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Research() {
  return (
    <section id="research" className="py-24 sm:py-32 px-6 border-t border-border bg-near-black-light/40">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading index="05" title="Research" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-6 mb-8">
          <ScrollReveal className="lg:col-span-3">
            <article className="rounded-3xl border border-border bg-near-black p-10 shadow-card hover:shadow-card-lg transition-shadow duration-300 h-full">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-white bg-gold px-3 py-1.5 rounded-full">
                  {research.primary.status}
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-text-tertiary bg-near-black-lighter/70 px-3 py-1.5 rounded-full">
                  Target: {research.primary.target}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-off-white mb-2">
                {research.primary.title}
              </h3>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-gold mb-6">
                {research.primary.subtitle}
              </p>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                {research.primary.description}
              </p>

              <div className="mb-8">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-3">
                  Research intersection
                </h4>
                <div className="flex flex-wrap gap-2">
                  {research.primary.intersection.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-medium text-gold bg-gold-subtle px-3.5 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <ScrollReveal delay={100} className="flex-1">
              <article className="rounded-3xl border border-border bg-near-black p-10 shadow-card hover:shadow-card-lg transition-shadow duration-300 h-full">
                <h3 className="text-2xl font-bold tracking-tight text-off-white mb-2">
                  {research.secondary.title}
                </h3>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-gold block mb-4">
                  {research.secondary.subtitle}
                </span>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {research.secondary.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {research.secondary.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-text-secondary bg-near-black-lighter/70 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <article className="rounded-3xl border border-border bg-near-black p-10 shadow-card">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-4">
                  Research interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {research.interests.map((interest) => (
                    <span
                      key={interest}
                      className="text-sm font-medium text-text-secondary hover:text-gold hover:bg-gold-subtle px-4 py-2 rounded-full border border-border transition-all duration-200 cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>

        {/* Pipeline */}
        <ScrollReveal>
          <div className="rounded-3xl border border-border bg-near-black-light p-10 shadow-card">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-6">
              Research pipeline
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {research.primary.pipeline.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-off-white bg-gold-subtle px-4 py-2 rounded-full">
                    {step}
                  </span>
                  {i < research.primary.pipeline.length - 1 && (
                    <span className="text-gold font-mono">&#x2192;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}