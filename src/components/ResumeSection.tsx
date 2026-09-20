"use client";

import { Download, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { ResumePreview } from "./ResumePreview";

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader number="06" title="Resume" />
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <p className="text-text-secondary text-sm max-w-md">
              A one-page overview of my experience, projects, and technical
              skills. Preview it below, or download the PDF.
            </p>
            <div className="flex gap-3 shrink-0">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 bg-gold text-ink px-5 py-2.5 text-xs font-medium tracking-wider hover:bg-gold-dim transition-colors"
              >
                <Download size={14} />
                DOWNLOAD PDF
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-xs font-medium tracking-wider text-text-secondary hover:text-off-white hover:border-border-hover transition-colors"
              >
                <ExternalLink size={14} />
                OPEN IN NEW TAB
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ResumePreview file={profile.resumeUrl} />
        </ScrollReveal>
      </div>
    </section>
  );
}