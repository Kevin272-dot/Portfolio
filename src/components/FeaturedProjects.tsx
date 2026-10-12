"use client";

import { useState } from "react";
import { projects, categories, type ProjectCategory } from "@/data/projects";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filters: (ProjectCategory | "All")[] = ["All", ...categories];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHeading index="04" title="Selected work" className="mb-0" />
            <div className="flex flex-wrap gap-2">
              {filters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200",
                    activeCategory === cat
                      ? "bg-gold text-white border-gold"
                      : "text-text-secondary border-border hover:border-gold/50 hover:text-gold bg-transparent"
                  )}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i % 2) * 80}>
              <article className="group rounded-3xl border border-border bg-near-black-light p-8 sm:p-10 shadow-card hover:shadow-card-lg hover:border-gold/40 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/[0.07] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-4xl font-bold tracking-tight text-near-black-lighter group-hover:text-gold/30 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-dim bg-gold-subtle border border-gold/25 px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-off-white group-hover:text-gold transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-off-white bg-near-black-lighter/60 px-3 py-1.5 rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[11px] font-semibold text-off-white bg-gold-subtle px-3 py-1.5 rounded-full border border-gold/30">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 pt-5 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-off-white hover:text-gold transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    GitHub
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-dim transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      Live demo
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-tertiary text-base py-16">
            No projects in this category.
          </p>
        )}
      </div>
    </section>
  );
}