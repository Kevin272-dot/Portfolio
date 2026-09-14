import { Metadata } from "next";
import Link from "next/link";
import { synapseDetails } from "@/data/projects";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "SYNAPSE — L Kevin Daniel",
  description:
    "Cloud-native real-time collaborative knowledge platform with custom Operational Transformation, knowledge graph, and AI study tools.",
};

function PipelineDiagram({
  steps,
  direction = "vertical",
}: {
  steps: string[];
  direction?: "vertical" | "horizontal";
}) {
  if (direction === "horizontal") {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="text-xs font-mono text-text-secondary border border-border px-3 py-1.5">
              {step}
            </span>
            {i < steps.length - 1 && (
              <span className="text-text-tertiary">→</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-3">
          <div className="w-2 h-2 bg-gold/40" />
          <span className="text-xs font-mono text-text-secondary">{step}</span>
          {i < steps.length - 1 && (
            <span className="text-text-tertiary text-xs">↓</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function SynapsePage() {
  return (
    <article className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs text-text-tertiary hover:text-text-secondary transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          BACK TO PROJECTS
        </Link>

        {/* Header */}
        <header className="mb-16">
          <span className="text-[10px] font-mono tracking-widest text-gold mb-4 block">
            FLAGSHIP PROJECT
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-off-white mb-4">
            SYNAPSE
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            {synapseDetails.overview}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {synapseDetails.techStack.map((tech) => (
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
            <span className="inline-flex items-center gap-2 text-xs text-text-tertiary border border-border px-4 py-2">
              <ExternalLink size={14} />
              Live Demo [ADD LINK]
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-text-tertiary border border-border px-4 py-2">
              <FileText size={14} />
              Research Paper [ADD LINK]
            </span>
          </div>
        </header>

        {/* Screenshot placeholder */}
        <div className="border border-border p-16 text-center mb-16">
          <p className="text-xs text-text-tertiary font-mono">
            [SCREENSHOT / DEMO IMAGE]
          </p>
        </div>

        {/* Why I Built It */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Why I Built It
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
            {synapseDetails.whyBuilt}
          </p>
        </section>

        {/* Architecture */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-6">
            Architecture
          </h2>
          <div className="border border-border p-8">
            <PipelineDiagram
              steps={synapseDetails.cloudArchitecture.pipeline}
            />
            <p className="text-xs text-text-tertiary mt-4 font-mono">
              {synapseDetails.cloudArchitecture.currentDirection}
            </p>
          </div>
        </section>

        {/* Real-Time Collaboration */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Real-Time Collaboration
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl">
            {synapseDetails.collaboration.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {synapseDetails.collaboration.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-sm text-text-secondary border border-border p-3"
              >
                <div className="w-1 h-1 bg-gold/40" />
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Operational Transformation */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Operational Transformation
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl">
            {synapseDetails.ot.description}
          </p>
          <div className="space-y-2">
            {synapseDetails.ot.concepts.map((concept) => (
              <div
                key={concept}
                className="flex items-center gap-3 text-sm text-text-secondary"
              >
                <div className="w-1 h-1 bg-gold/40" />
                {concept}
              </div>
            ))}
          </div>
        </section>

        {/* Knowledge Graph */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Knowledge Graph
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl">
            {synapseDetails.knowledgeGraph.description}
          </p>
          <div className="border border-border p-8">
            <PipelineDiagram steps={synapseDetails.knowledgeGraph.pipeline} />
          </div>
        </section>

        {/* AI Pipeline */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            AI Pipeline
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl">
            {synapseDetails.aiPipeline.description}
          </p>
          <div className="border border-border p-8 space-y-6">
            <div>
              <h4 className="text-[10px] font-mono tracking-widest text-text-tertiary mb-3">
                INPUTS
              </h4>
              <div className="flex gap-2">
                {synapseDetails.aiPipeline.inputs.map((input) => (
                  <span
                    key={input}
                    className="text-xs font-mono text-text-secondary border border-border px-3 py-1.5"
                  >
                    {input}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-text-tertiary text-xs">↓</div>
            <div>
              <h4 className="text-[10px] font-mono tracking-widest text-text-tertiary mb-3">
                AI PROCESSING
              </h4>
            </div>
            <div className="text-text-tertiary text-xs">↓</div>
            <div>
              <h4 className="text-[10px] font-mono tracking-widest text-text-tertiary mb-3">
                OUTPUTS
              </h4>
              <div className="flex flex-wrap gap-2">
                {synapseDetails.aiPipeline.outputs.map((output) => (
                  <span
                    key={output}
                    className="text-xs font-mono text-gold/70 border border-gold/15 px-3 py-1.5"
                  >
                    {output}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Infrastructure */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Cloud Infrastructure
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl">
            {synapseDetails.cloudArchitecture.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {synapseDetails.cloudArchitecture.services.map((service) => (
              <div
                key={service}
                className="border border-border p-4 text-center"
              >
                <span className="text-sm font-mono text-text-secondary">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Scaling */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Scaling
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl">
            {synapseDetails.scaling.description}
          </p>
          <div className="space-y-2">
            {synapseDetails.scaling.approaches.map((approach) => (
              <div
                key={approach}
                className="flex items-center gap-3 text-sm text-text-secondary"
              >
                <div className="w-1 h-1 bg-gold/40" />
                {approach}
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Challenges */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-6">
            Engineering Challenges
          </h2>
          <div className="space-y-6">
            {synapseDetails.challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="border border-border p-6"
              >
                <h3 className="text-sm font-medium text-off-white mb-2">
                  {challenge.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Decisions */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-6">
            Technical Decisions
          </h2>
          <div className="space-y-4">
            {synapseDetails.technicalDecisions.map((decision) => (
              <div
                key={decision.decision}
                className="border border-border p-6"
              >
                <h3 className="text-sm font-medium text-off-white mb-2">
                  {decision.decision}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {decision.rationale}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            From Engineering Project to Systems Research
          </h2>
          <div className="border border-border p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-gold">
                {synapseDetails.research.status}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-text-tertiary border border-border px-3 py-1">
                TARGET: {synapseDetails.research.target}
              </span>
            </div>

            <div className="mb-6">
              <h4 className="text-[10px] font-mono tracking-widest text-text-tertiary mb-3">
                RESEARCH INTERSECTION
              </h4>
              <div className="flex flex-wrap gap-2">
                {synapseDetails.research.intersection.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-mono tracking-wider text-gold/70 border border-gold/15 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {Object.entries(synapseDetails.research.placeholders).map(
                ([key, value]) => (
                  <div key={key} className="border border-border p-3">
                    <span className="text-[10px] font-mono tracking-widest text-text-tertiary block mb-1">
                      {key.toUpperCase()}
                    </span>
                    <span className="text-xs text-text-secondary">{value}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Future Work */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Future Work
          </h2>
          <div className="space-y-2">
            {synapseDetails.futureWork.map((item) => (
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

        {/* Back */}
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
