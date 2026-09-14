import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "QNN vs MLP — L Kevin Daniel",
  description:
    "Experimental comparison of a Quantum Neural Network with a classical MLP on binary classification.",
};

export default function QNNvsMLPPage() {
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
            MACHINE LEARNING / EXPERIMENTAL RESEARCH
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-off-white mb-4">
            QNN vs MLP
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Quantum Neural Network vs Classical MLP
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["PennyLane", "PyTorch", "scikit-learn", "NumPy", "Matplotlib"].map(
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

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Overview
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
            An experimental comparison of a Quantum Neural Network (QNN) with a
            classical Multi-Layer Perceptron (MLP) on binary classification. This
            project explores variational quantum circuits, angle encoding,
            strongly entangling layers, and hybrid quantum-classical training.
          </p>
        </section>

        {/* Technical Concepts */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-6">
            Technical Concepts
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Quantum Neural Networks",
              "Variational Quantum Circuits",
              "Angle Encoding",
              "Strongly Entangling Layers",
              "Parameter-Shift Gradients",
              "Hybrid Quantum-Classical Training",
            ].map((concept) => (
              <div
                key={concept}
                className="flex items-center gap-3 text-sm text-text-secondary border border-border p-3"
              >
                <div className="w-1 h-1 bg-gold/40" />
                {concept}
              </div>
            ))}
          </div>
        </section>

        {/* Experimental Setup */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Experimental Setup
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-border p-5">
              <h3 className="text-xs font-mono tracking-widest text-text-tertiary mb-3">
                DATASET
              </h3>
              <p className="text-text-secondary text-sm">[ADD DATASET INFO]</p>
            </div>
            <div className="border border-border p-5">
              <h3 className="text-xs font-mono tracking-widest text-text-tertiary mb-3">
                METRICS
              </h3>
              <p className="text-text-secondary text-sm">[ADD METRICS]</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Results
          </h2>
          <div className="border border-border p-8">
            <p className="text-text-secondary text-sm">
              [ADD RESULTS — DO NOT CLAIM QUANTUM ADVANTAGE]
            </p>
          </div>
        </section>

        {/* Visualization */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Visualization
          </h2>
          <div className="border border-border p-16 text-center">
            <p className="text-xs text-text-tertiary font-mono">
              [ADD VISUALIZATION]
            </p>
          </div>
        </section>

        {/* Research Questions */}
        <section className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4">
            Research Questions
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
            [ADD RESEARCH QUESTIONS]
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
