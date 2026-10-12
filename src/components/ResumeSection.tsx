"use client";

import { Download, ExternalLink, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { ResumePreview } from "./ResumePreview";

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHeading index="06" title="Resume" className="mb-0" />
            <div className="flex gap-3">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gold-dim transition-all duration-200 hover:shadow-[0_8px_24px_-6px_rgba(37,99,235,0.5)]"
              >
                <Download size={15} />
                Download PDF
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-border text-off-white px-6 py-3 rounded-full text-sm font-semibold hover:border-gold hover:text-gold transition-all duration-200"
              >
                Open in new tab
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <ResumePreview file={profile.resumeUrl} />
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <a
            href={profile.resumeUrl}
            download
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dim transition-colors"
          >
            Browse the full resume
            <ArrowUpRight size={15} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}