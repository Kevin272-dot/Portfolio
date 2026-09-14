"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

function ArchitectureVisual() {
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

    const nodes = [
      { label: "IDEA", x: 0.5, y: 0.08 },
      { label: "SYSTEM DESIGN", x: 0.5, y: 0.24 },
      { label: "ENGINEERING", x: 0.5, y: 0.40 },
      { label: "DEPLOYMENT", x: 0.5, y: 0.56 },
      { label: "IMPACT", x: 0.5, y: 0.72 },
      { label: "RESEARCH", x: 0.5, y: 0.88 },
    ];

    let animProgress = 0;
    let animFrame: number;

    function draw() {
      if (!ctx || !canvas) return;
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Draw connecting lines
      for (let i = 0; i < nodes.length - 1; i++) {
        const from = nodes[i];
        const to = nodes[i + 1];
        const fromY = from.y * h;
        const toY = to.y * h;
        const progress = Math.min(1, Math.max(0, (animProgress - i * 0.15) / 0.3));

        ctx.beginPath();
        ctx.strokeStyle = `rgba(200, 168, 78, ${0.15 * progress})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.moveTo(w / 2, fromY + 12);
        ctx.lineTo(w / 2, fromY + 12 + (toY - fromY - 24) * progress);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw nodes
      nodes.forEach((node, i) => {
        const x = node.x * w;
        const y = node.y * h;
        const progress = Math.min(1, Math.max(0, (animProgress - i * 0.15) / 0.3));
        const opacity = progress;

        // Node dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(200, 168, 78, ${0.6 * opacity})`;
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 16);
        gradient.addColorStop(0, `rgba(200, 168, 78, ${0.15 * opacity})`);
        gradient.addColorStop(1, "rgba(200, 168, 78, 0)");
        ctx.fillStyle = gradient;
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = `rgba(245, 245, 240, ${0.5 * opacity})`;
        ctx.font = "500 9px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.label, x + 60, y);
      });

      // Draw side nodes (distributed systems feel)
      const sideNodes = [
        { x: 0.18, y: 0.32, label: "OT" },
        { x: 0.82, y: 0.32, label: "SYNC" },
        { x: 0.18, y: 0.64, label: "AWS" },
        { x: 0.82, y: 0.64, label: "REDIS" },
        { x: 0.18, y: 0.48, label: "SOCKET" },
        { x: 0.82, y: 0.48, label: "GRAPH" },
      ];

      sideNodes.forEach((sn, i) => {
        const progress = Math.min(1, Math.max(0, (animProgress - 0.3 - i * 0.08) / 0.3));
        const x = sn.x * w;
        const y = sn.y * h;

        ctx.beginPath();
        ctx.fillStyle = `rgba(200, 168, 78, ${0.25 * progress})`;
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(245, 245, 240, ${0.2 * progress})`;
        ctx.font = "400 7px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(sn.label, x, y - 8);

        // Connect to center
        ctx.beginPath();
        ctx.strokeStyle = `rgba(200, 168, 78, ${0.06 * progress})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(x, y);
        ctx.lineTo(w / 2, y);
        ctx.stroke();
      });

      if (animProgress < 2) {
        animProgress += 0.008;
        animFrame = requestAnimationFrame(draw);
      }
    }

    // Start animation after a brief delay
    const timeout = setTimeout(() => {
      animFrame = requestAnimationFrame(draw);
    }, 500);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animFrame);
    };
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
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,245,240,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="space-y-8">
          <div className="space-y-2">
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
              className="inline-flex items-center gap-2 bg-gold text-near-black px-6 py-3 text-sm font-medium tracking-wider hover:bg-gold-dim transition-colors"
            >
              VIEW MY WORK
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 border border-border hover:border-border-hover px-6 py-3 text-sm font-medium tracking-wider text-text-secondary hover:text-off-white transition-colors"
            >
              DOWNLOAD RESUME
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wider text-text-tertiary hover:text-text-secondary transition-colors"
            >
              GET IN TOUCH
            </Link>
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
                className="text-[10px] font-mono tracking-widest text-text-tertiary border border-border px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Architecture Visual */}
        <div
          className="hidden lg:block h-[480px]"
          style={{
            opacity: 0,
            animation: "fadeInUp 0.8s ease-out 400ms forwards",
          }}
        >
          <ArchitectureVisual />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-near-black to-transparent" />
    </section>
  );
}
