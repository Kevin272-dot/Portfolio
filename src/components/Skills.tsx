"use client";

import { skillCategories } from "@/data/skills";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader number="03" title="Technical Skills" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={i * 80}>
              <div className="space-y-4">
                <h3 className="text-[10px] font-mono tracking-widest text-gold">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-text-secondary border border-border px-3 py-1.5 hover:border-gold/20 hover:text-off-white hover:bg-gold/[0.03] transition-all duration-200 cursor-default"
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
