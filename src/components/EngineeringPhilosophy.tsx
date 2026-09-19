"use client";

import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";

export function EngineeringPhilosophy() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-xs tracking-[0.3em] uppercase text-text-secondary mb-16 text-center">
            How I Build
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12">
          {profile.philosophy.map((item, i) => (
            <ScrollReveal key={item.number} delay={i * 150}>
              <div className="space-y-4 group">
                <span className="text-gold font-mono text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.number}
                </span>
                <h3 className="text-sm tracking-widest uppercase text-off-white font-medium">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
