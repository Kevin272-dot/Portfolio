"use client";

import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader number="01" title="About" />
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

          <div className="space-y-10">
            <ScrollReveal delay={150}>
              <div className="space-y-4">
                <h3 className="text-[10px] font-mono tracking-widest text-gold mb-6">
                  FOCUS AREAS
                </h3>
                <div className="space-y-3">
                  {profile.about.interests.map((interest) => (
                    <div
                      key={interest}
                      className="flex items-center gap-3 text-sm text-text-secondary group"
                    >
                      <div className="w-1 h-1 bg-gold/40 group-hover:bg-gold transition-colors" />
                      {interest}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="border border-border p-6 bg-near-black-light shadow-card">
                <h3 className="text-[10px] font-mono tracking-widest text-gold mb-5 flex items-center gap-2">
                  <GraduationCap size={12} />
                  EDUCATION
                </h3>
                <p className="text-sm font-medium text-off-white mb-1">
                  {profile.education.institution}
                </p>
                <p className="text-xs text-text-secondary mb-3">
                  {profile.education.degree}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-[10px] font-mono tracking-wider text-text-tertiary mb-4">
                  <span>CGPA: {profile.education.cgpa}</span>
                  <span>{profile.education.period}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {profile.education.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-[9px] font-mono tracking-wider text-text-tertiary border border-border px-2 py-0.5"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-20 border-t border-border pt-16">
          {profile.philosophy.map((item, i) => (
            <ScrollReveal key={item.number} delay={i * 150}>
              <div className="space-y-4 group">
                <span className="text-gold font-mono text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.number}
                </span>
                <h3 className="text-sm tracking-widest uppercase text-off-white font-medium">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}