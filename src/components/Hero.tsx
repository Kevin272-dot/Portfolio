"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { GithubIcon } from "./Icons";

function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; phase: number }[] = [];
    for (let i = 0; i < 44; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2.2 + 1.4,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let animFrame: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const pulse = 0.75 + 0.25 * Math.sin(performance.now() / 700 + p.phase);

        ctx.beginPath();
        ctx.fillStyle = `rgba(160, 124, 30, ${0.55 * pulse})`;
        ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = "rgba(160, 124, 30, 0.9)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.fillStyle = `rgba(180, 142, 44, ${0.95 * pulse})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 245, 214, 0.95)";
        ctx.arc(p.x, p.y, p.r * 0.45, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(160, 124, 30, ${0.32 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.9;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animFrame = requestAnimationFrame(draw);
    }

    animFrame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,28,28,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,28,28,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <p
              className="text-[11px] font-mono tracking-[0.3em] text-gold uppercase"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.6s ease-out 100ms forwards",
              }}
            >
              {profile.name}
            </p>
            {profile.hero.headline.map((line, i) => (
              <h1
                key={i}
                className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-off-white"
                style={{
                  animationDelay: `${i * 150}ms`,
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${i * 150}ms forwards`,
                }}
              >
                {i === 1 ? (
                  <span className="text-gold">{line}</span>
                ) : (
                  line
                )}
              </h1>
            ))}
          </div>

          <p
            className="text-text-secondary text-base leading-relaxed max-w-lg"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.6s ease-out 600ms forwards",
            }}
          >
            {profile.hero.supporting}
          </p>

          <div
            className="flex flex-wrap gap-3"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.6s ease-out 800ms forwards",
            }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 bg-gold text-ink px-6 py-3 text-sm font-medium tracking-wider hover:bg-gold-dim transition-all duration-200 hover:shadow-[0_0_20px_rgba(200,168,78,0.15)]"
            >
              VIEW FEATURED PROJECTS
            </Link>
            <Link
              href="/#resume"
              className="inline-flex items-center gap-2 border border-border hover:border-gold/30 px-6 py-3 text-sm font-medium tracking-wider text-text-secondary hover:text-off-white hover:bg-gold/[0.03] transition-all duration-200"
            >
              VIEW RESUME
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wider text-text-tertiary hover:text-text-secondary transition-colors"
            >
              <GithubIcon size={14} />
              GITHUB
            </a>
          </div>

          <div
            className="flex flex-wrap gap-2 pt-4"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.6s ease-out 1000ms forwards",
            }}
          >
            {profile.hero.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono tracking-widest text-text-tertiary border border-border px-3 py-1 hover:border-gold/20 hover:text-text-secondary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="hidden lg:block h-[480px]"
          style={{
            opacity: 0,
            animation: "fadeInUp 0.8s ease-out 400ms forwards",
          }}
        >
          <ParticleGrid />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-near-black to-transparent" />
    </section>
  );
}
