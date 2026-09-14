"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[10px] font-mono tracking-widest text-gold">
              02
            </span>
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-text-secondary">
              Featured Projects
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        {/* Synapse — flagship */}
        <ScrollReveal>
          <Link
            href={`/projects/${featured[0].slug}`}
            className="group block mb-16 p-8 border border-border hover:border-gold/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-gold mb-2 block">
                  FLAGSHIP
                </span>
                <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-off-white group-hover:text-gold transition-colors">
                  {featured[0].title}
                </h3>
                <p className="text-text-secondary text-sm mt-1">
                  {featured[0].subtitle}
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-text-tertiary group-hover:text-gold transition-colors mt-2"
              />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-2xl mb-6">
              {featured[0].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono tracking-wider text-text-tertiary border border-border px-3 py-1 group-hover:border-gold/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </ScrollReveal>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 gap-6">
          {featured.slice(1).map((project, i) => (
            <ScrollReveal key={project.id} delay={(i + 1) * 100}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block p-6 border border-border hover:border-gold/20 transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-light tracking-tight text-off-white group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-text-tertiary group-hover:text-gold transition-colors shrink-0 mt-1"
                  />
                </div>
                <p className="text-text-secondary text-xs mb-4">
                  {project.subtitle}
                </p>
                <p className="text-text-tertiary text-xs leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono tracking-wider text-text-tertiary border border-border px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[9px] font-mono tracking-wider text-text-tertiary px-2 py-0.5">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
