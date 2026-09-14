import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "MCP — L Kevin Daniel",
  description:
    "Protocol engineering project implementing a JSON-RPC 2.0 MCP endpoint with live visualization and sandboxed filesystem tools.",
};

export default function MCPPage() {
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
            PROTOCOL ENGINEERING / DEVELOPER INFRASTRUCTURE
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-off-white mb-4">
            MCP
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Understanding the Why and the What
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Next.js",
              "TypeScript",
              "React Flow",
              "Puppeteer",
              "JSON-RPC 2.0",
              "Event-Driven Architecture",
            ].map((tech) => (
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
              href="https://github.com/Kevin272-dot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-gold transition-colors border border-border px-4 py-2"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          </div>
        </header>

        {/* Screenshot placeholder */}
        <div className="border border-border p-16 text-center mb-16">
          <p className="text-xs text-text-tertiary font-mono">
            [SCREENSHOT / DEMO IMAGE]
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Overview
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
            MCP is a protocol engineering project that demonstrates
            understanding beyond frontend development. It implements a real
            JSON-RPC 2.0 MCP endpoint with initialize, ping, tools/list, and
            tools/call methods, paired with a live React Flow visualization of
            the system architecture.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-6">
            Key Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "JSON-RPC 2.0 MCP Endpoint",
                desc: "Real protocol implementation with initialize/ping/tools/list/tools/call",
              },
              {
                title: "Live System Visualization",
                desc: "React Flow-based real-time visualization of the system architecture",
              },
              {
                title: "Filesystem Tools",
                desc: "Sandboxed filesystem access with defined security boundaries",
              },
              {
                title: "Headless Chromium",
                desc: "Puppeteer integration for browser automation capabilities",
              },
              {
                title: "Event-Driven Architecture",
                desc: "Non-blocking event-driven system design",
              },
              {
                title: "Security Boundaries",
                desc: "Sandboxed filesystem access with controlled permissions",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border p-5">
                <h3 className="text-sm font-medium text-off-white mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What It Demonstrates */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            What It Demonstrates
          </h2>
          <div className="space-y-3">
            {[
              "Protocols — Understanding and implementing JSON-RPC 2.0",
              "Server engineering — Building a real MCP endpoint",
              "Developer tooling — Creating tools for other developers",
              "API design — Designing clean, protocol-compliant interfaces",
              "Security boundaries — Implementing sandboxed filesystem access",
              "System visualization — Making system architecture observable",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-text-secondary"
              >
                <div className="w-1 h-1 bg-gold/40" />
                {item}
              </div>
            ))}
          </div>
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
