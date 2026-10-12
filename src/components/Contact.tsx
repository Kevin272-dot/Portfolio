"use client";

import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-36 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-gold/[0.08] blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <SectionHeading index="07" title="Let's talk" className="justify-center mb-12" />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h3 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-off-white leading-[1.02] mb-8">
            Want to build something{" "}
            <span className="text-gold">great?</span>
          </h3>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed mb-12">
            I&apos;m always up for discussing software projects, collaboration
            opportunities, hackathon teams, and anything full-stack or AI/ML.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-gold text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-gold-dim transition-all duration-200 hover:shadow-[0_16px_40px_-10px_rgba(37,99,235,0.6)]"
            >
              <Mail size={18} />
              {profile.email}
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="flex items-center justify-center gap-10">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-sm font-semibold text-text-secondary hover:text-gold transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
              GitHub
              <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <span className="w-1 h-1 rounded-full bg-text-tertiary/40" />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-sm font-semibold text-text-secondary hover:text-gold transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
              LinkedIn
              <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <span className="w-1 h-1 rounded-full bg-text-tertiary/40" />
            <a
              href={profile.resumeUrl}
              download
              className="group flex items-center gap-2.5 text-sm font-semibold text-text-secondary hover:text-gold transition-colors"
              aria-label="Download Resume"
            >
              Resume
              <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}