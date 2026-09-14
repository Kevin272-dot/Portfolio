import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Advanced Club Management System — L Kevin Daniel",
  description:
    "An organizational management platform built for real-world club operations.",
};

export default function ClubManagementPage() {
  return (
    <article className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs text-text-tertiary hover:text-text-secondary transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          BACK TO PROJECTS
        </Link>

        <header className="mb-16">
          <span className="text-[10px] font-mono tracking-widest text-gold mb-4 block">
            FEATURED PROJECT
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-off-white mb-4">
            Advanced Club Management System
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            An organizational management platform built for real-world club
            operations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Kevin272-dot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-gold transition-colors border border-border px-4 py-2"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
            <span className="inline-flex items-center gap-2 text-xs text-text-tertiary border border-border px-4 py-2">
              <ExternalLink size={14} />
              Live Demo [ADD LINK]
            </span>
          </div>
        </header>

        {/* Screenshot placeholder */}
        <div className="border border-border p-16 text-center mb-16">
          <p className="text-xs text-text-tertiary font-mono">
            [SCREENSHOT / DEMO IMAGE]
          </p>
        </div>

        {/* Problem */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Problem
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
            [ADD PROBLEM DESCRIPTION]
          </p>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Solution
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
            [ADD SOLUTION DESCRIPTION]
          </p>
        </section>

        {/* Architecture */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Architecture
          </h2>
          <div className="border border-border p-8">
            <p className="text-xs text-text-tertiary font-mono">
              [ADD ARCHITECTURE DIAGRAM]
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-text-secondary border border-border p-3"
              >
                <div className="w-1 h-1 bg-gold/40" />
                [ADD FEATURE {i}]
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Technology
          </h2>
          <div className="flex flex-wrap gap-2">
            {["[ADD TECH STACK]"].map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono tracking-wider text-gold/70 border border-gold/15 px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Engineering Challenges
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
            [ADD CHALLENGES]
          </p>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Impact
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
            [ADD IMPACT]
          </p>
        </section>

        {/* Future Work */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Future Work
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
            [ADD FUTURE WORK]
          </p>
        </section>

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs text-text-tertiary hover:text-text-secondary transition-colors"
        >
          <ArrowLeft size={14} />
          BACK TO PROJECTS
        </Link>
      </div>
    </article>
  );
}
