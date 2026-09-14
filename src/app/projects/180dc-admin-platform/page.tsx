import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "180DC Admin Platform — L Kevin Daniel",
  description:
    "Production-oriented web infrastructure for 180 Degrees Consulting built with Turborepo, Cloudflare Workers, and Wrangler.",
};

export default function AdminPlatformPage() {
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
            PRODUCTION-ORIENTED WEB INFRASTRUCTURE
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-off-white mb-4">
            180DC Admin Platform
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Production-oriented web infrastructure for 180 Degrees Consulting.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Turborepo", "Cloudflare Workers", "Wrangler"].map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono tracking-wider text-gold/70 border border-gold/15 px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Kevin272-dot/180dc-admin-website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-gold transition-colors border border-border px-4 py-2"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          </div>
        </header>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Overview
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
            A monorepo-based web infrastructure platform serving organizational
            operations at 180 Degrees Consulting. The repository includes separate
            services for public API, admin API, and job processing.
          </p>
        </section>

        {/* Architecture */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-6">
            Architecture
          </h2>
          <div className="border border-border p-8 space-y-4">
            <div className="text-center">
              <span className="text-xs font-mono text-text-secondary border border-border px-4 py-2 inline-block">
                Monorepo (Turborepo)
              </span>
            </div>
            <div className="text-center text-text-tertiary text-xs">↓</div>
            <div className="grid sm:grid-cols-3 gap-4">
              {["Public API", "Admin API", "Job Processor"].map((service) => (
                <div
                  key={service}
                  className="border border-border p-4 text-center"
                >
                  <span className="text-xs font-mono text-text-secondary">
                    {service}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center text-text-tertiary text-xs">↓</div>
            <div className="text-center">
              <span className="text-xs font-mono text-text-secondary border border-border px-4 py-2 inline-block">
                Cloudflare Workers (Wrangler)
              </span>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-6">
            Services
          </h2>
          <div className="space-y-4">
            {[
              {
                name: "Public API",
                desc: "[ADD PUBLIC API DESCRIPTION]",
              },
              {
                name: "Admin API",
                desc: "[ADD ADMIN API DESCRIPTION]",
              },
              {
                name: "Job Processor",
                desc: "[ADD JOB PROCESSOR DESCRIPTION]",
              },
            ].map((service) => (
              <div key={service.name} className="border border-border p-6">
                <h3 className="text-sm font-medium text-off-white mb-2">
                  {service.name}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {service.desc}
                </p>
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
            {["Turborepo", "Cloudflare Workers", "Wrangler", "TypeScript"].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono tracking-wider text-gold/70 border border-gold/15 px-3 py-1"
                >
                  {tech}
                </span>
              )
            )}
          </div>
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
