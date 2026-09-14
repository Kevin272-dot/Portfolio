import { Metadata } from "next";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { research } from "@/data/research";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Resume — L Kevin Daniel",
  description: "Technical resume of L. Kevin Daniel — Software Engineer, Systems Builder, Computer Science Student.",
};

export default function ResumePage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Resume content — designed for print/PDF */}
        <div className="bg-near-black border border-border p-8 sm:p-12 print:p-8 print:border-none">
          {/* Header */}
          <header className="mb-8 border-b border-border pb-6">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-off-white mb-2">
              {profile.name}
            </h1>
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
              <span>LinkedIn: [ADD LINK]</span>
              <span>Portfolio: [PORTFOLIO URL]</span>
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
                  [DATES]
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                [DEGREE] — [CGPA]
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
                      <span className="text-gold/40 mt-0.5">•</span>
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
                  <p className="text-[10px] text-gold/70 mb-1">
                    {project.subtitle}
                  </p>
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
                    {cat.skills.join(" · ")}
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
                {research.primary.status} · Target: {research.primary.target}
              </p>
              <p className="text-xs text-text-tertiary mt-1">
                Intersection: {research.primary.intersection.join(" + ")}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
