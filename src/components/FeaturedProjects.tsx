"use client";

import { useState } from "react";
import { projects, categories, type ProjectCategory } from "@/data/projects";
import { ScrollReveal } from "./ScrollReveal";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader number="04" title="Featured Projects" />
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <button
              onClick={() => setActiveCategory("All")}
              className={cn(
                "text-[10px] font-mono tracking-widest px-4 py-2 border transition-all duration-200",
                activeCategory === "All"
                  ? "text-ink bg-gold border-gold"
                  : "text-text-tertiary border-border hover:border-gold/30 hover:text-text-secondary"
              )}
              aria-pressed={activeCategory === "All"}
            >
              ALL
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-[10px] font-mono tracking-widest px-4 py-2 border transition-all duration-200",
                  activeCategory === cat
                    ? "text-ink bg-gold border-gold"
                    : "text-text-tertiary border-border hover:border-gold/30 hover:text-text-secondary"
                )}
                aria-pressed={activeCategory === cat}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 60}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-tertiary text-sm py-12">
            No projects in this category.
          </p>
        )}
      </div>
    </section>
  );
}
