"use client";

import { skillCategories } from "@/data/skills";
import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { Marquee } from "./Marquee";

export function Skills() {
  const chips = skillCategories.flatMap((cat) => cat.skills);
  const mid = Math.ceil(chips.length / 2);
  const rowA = chips.slice(0, mid);
  const rowB = chips.slice(mid);

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading index="03" title="Skills" />
        </ScrollReveal>
      </div>

      <div className="space-y-5 mb-20">
        <Marquee items={rowA} reverse={false} />
        <Marquee items={rowB} reverse={true} />
        <Marquee items={profile.marquee.slice(0, 4)} reverse={false} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={i * 60}>
              <div className="rounded-3xl border border-border bg-near-black-light p-7 shadow-card hover:border-gold/30 transition-colors duration-300 h-full">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-gold mb-5">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-medium text-text-secondary bg-near-black px-3.5 py-1.5 rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}