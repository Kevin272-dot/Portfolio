import { Metadata } from "next";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { research } from "@/data/research";
import { projects } from "@/data/projects";
import { Download, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume — L Kevin Daniel",
  description:
    "Technical resume of L. Kevin Daniel — Software Engineer, Systems Builder, Computer Science Student.",
};

export default function ResumePage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header with download */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-off-white mb-1">
              Resume
            </h1>
            <p className="text-xs text-text-tertiary font-mono tracking-wider">
              VIEW ONLINE OR DOWNLOAD PDF
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/L_Kevin_Daniel_Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-gold text-near-black px-5 py-2.5 text-xs font-medium tracking-wider hover:bg-gold-dim transition-colors"
            >
              <Download size={14} />
              DOWNLOAD PDF
            </a>
            <a
              href="/L_Kevin_Daniel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-xs font-medium tracking-wider text-text-secondary hover:text-off-white hover:border-border-hover transition-colors"
            >
              <ExternalLink size={14} />
              OPEN IN NEW TAB
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="mb-12 border border-border bg-near-black-light overflow-hidden">
          <iframe
            src="/L_Kevin_Daniel_Resume.pdf"
            className="w-full h-[800px] sm:h-[1000px]"
            title="Resume PDF Viewer"
          />
        </div>

        {/* Resume content — designed for print/PDF */}
        <div className="bg-near-black border border-border p-8 sm:p-12 print:p-8 print:border-none">
          {/* Header */}
          <header className="mb-8 border-b border-border pb-6">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-off-white mb-2">
              {profile.name}
            </h2>
            <p className="text-sm text-text-secondary mb-4">
              Computer Science Student | Software Engineer | Systems Builder
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-tertiary">
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-gold transition-colors"
              >
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                github.com/Kevin272-dot
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                linkedin.com/in/lkevindaniel
              </a>
            </div>
          </header>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-[10px] font-mono tracking-widest text-gold mb-4 uppercase">
              Education
            </h2>
            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-medium text-off-white">
                  VIT Chennai
                </h3>
                <span className="text-xs text-text-tertiary font-mono">
                  2023 — 2027
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                B.Tech Computer Science — CGPA: 8.5+
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-[10px] font-mono tracking-widest text-gold mb-4 uppercase">
              Experience
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-medium text-off-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-text-tertiary font-mono">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p className="text-xs text-text-secondary mb-2">
                  {exp.organization}
                </p>
                <ul className="space-y-1">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-xs text-text-secondary leading-relaxed flex gap-2"
                    >
                      <span className="text-gold/40 mt-0.5">&#x2022;</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-[10px] font-mono tracking-widest text-gold mb-4 uppercase">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-medium text-off-white">
                      {project.title}
                    </h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-text-tertiary hover:text-gold transition-colors font-mono"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[8px] font-mono tracking-wider text-text-tertiary border border-border px-1.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-[10px] font-mono tracking-widest text-gold mb-4 uppercase">
              Skills
            </h2>
            <div className="space-y-3">
              {skillCategories.map((cat) => (
                <div key={cat.category}>
                  <span className="text-[10px] font-mono tracking-widest text-text-tertiary block mb-1">
                    {cat.category}
                  </span>
                  <p className="text-xs text-text-secondary">
                    {cat.skills.join(" \u00B7 ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Research */}
          <section>
            <h2 className="text-[10px] font-mono tracking-widest text-gold mb-4 uppercase">
              Research
            </h2>
            <div>
              <h3 className="text-sm font-medium text-off-white">
                {research.primary.title} — {research.primary.subtitle}
              </h3>
              <p className="text-xs text-text-secondary">
                {research.primary.status} &#x00B7; Target:{" "}
                {research.primary.target}
              </p>
              <p className="text-xs text-text-tertiary mt-1">
                Intersection:{" "}
                {research.primary.intersection.join(" + ")}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
