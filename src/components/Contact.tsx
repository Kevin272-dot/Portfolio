"use client";

import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[10px] font-mono tracking-widest text-gold">
              03
            </span>
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-text-secondary">
              Contact
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h3 className="text-2xl font-light text-off-white mb-4">
                Get in touch
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I&apos;m always interested in discussing software projects,
                collaboration opportunities, hackathon teams, and anything
                related to full-stack development or AI/ML.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-gold transition-colors group"
                aria-label="GitHub Profile"
              >
                <GithubIcon
                  size={18}
                  className="text-text-tertiary group-hover:text-gold transition-colors"
                />
                GitHub
              </a>

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-gold transition-colors group"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon
                    size={18}
                    className="text-text-tertiary group-hover:text-gold transition-colors"
                  />
                  LinkedIn
                </a>
              )}

              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-gold transition-colors group"
                  aria-label="Send Email"
                >
                  <Mail
                    size={18}
                    className="text-text-tertiary group-hover:text-gold transition-colors"
                  />
                  Email
                </a>
              )}

              <a
                href="/Kevin_Daniel_Resume.pdf"
                download
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-gold transition-colors group"
                aria-label="Download Resume"
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-text-tertiary group-hover:text-gold transition-colors"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Resume
              </a>
            </div>

            <div className="pt-8">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 bg-gold text-near-black px-8 py-3 text-sm font-medium tracking-wider hover:bg-gold-dim transition-all duration-200 hover:shadow-[0_0_20px_rgba(200,168,78,0.15)]"
              >
                SEND A MESSAGE
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
