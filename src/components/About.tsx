"use client";

import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading index="01" title="About me" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6">
            <ScrollReveal>
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-off-white leading-snug">
                <span className="text-gold">I&apos;m a full-stack developer</span>{" "}
                building web applications, intelligent systems, and automation
                tools across frontend, backend, databases, and AI/ML pipelines.
              </p>
            </ScrollReveal>
            {profile.about.paragraphs.slice(1).map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal delay={120}>
              <div className="rounded-3xl border border-border bg-near-black-light p-8 shadow-card">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-gold mb-6 flex items-center gap-2">
                  <GraduationCap size={14} />
                  Education
                </h3>
                <p className="text-xl font-semibold tracking-tight text-off-white leading-tight mb-1">
                  {profile.education.degree}
                </p>
                <p className="text-sm text-text-secondary mb-4">
                  {profile.education.institution}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs font-mono tracking-wider text-text-tertiary mb-5">
                  <span>CGPA {profile.education.cgpa}</span>
                  <span>{profile.education.period}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.education.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-[11px] font-medium text-text-secondary bg-near-black-lighter/70 px-3 py-1.5 rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-3">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-4">
                  Focus areas
                </h3>
                {profile.about.interests.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center justify-between group cursor-default"
                  >
                    <span className="text-base text-text-secondary group-hover:text-off-white transition-colors">
                      {interest}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}