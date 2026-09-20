"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group p-6 border border-border hover:border-gold/25 transition-all duration-300 bg-near-black-light shadow-card hover:shadow-card-lg h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-light tracking-tight text-off-white group-hover:text-gold transition-colors">
          {project.title}
        </h3>
        <ArrowUpRight
          size={16}
          className="text-text-tertiary group-hover:text-gold transition-colors shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200"
        />
      </div>

      <p className="text-text-secondary text-xs leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
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

      <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-text-tertiary hover:text-gold border border-border hover:border-gold/30 px-3 py-1.5 transition-all duration-200"
          aria-label={`View ${project.title} on GitHub`}
        >
          <GithubIcon size={12} />
          GitHub
          <ExternalLink size={8} className="opacity-50" />
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-gold/70 hover:text-gold border border-gold/20 hover:border-gold/40 px-3 py-1.5 transition-all duration-200"
            aria-label={`View ${project.title} live demo`}
          >
            Live Demo
            <ExternalLink size={8} className="opacity-50" />
          </a>
        )}

        {project.membersPage && (
          <a
            href={project.membersPage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-text-tertiary hover:text-gold border border-border hover:border-gold/30 px-3 py-1.5 transition-all duration-200"
            aria-label={`View ${project.title} members page`}
          >
            Members Page
            <ExternalLink size={8} className="opacity-50" />
          </a>
        )}
      </div>
    </div>
  );
}
