"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/#resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-near-black/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-wider text-off-white hover:text-gold transition-colors"
        >
          {profile.name}
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-widest uppercase text-text-secondary hover:text-off-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-widest uppercase text-gold border border-gold/30 px-4 py-2 hover:bg-gold/10 transition-all duration-200"
          >
            GitHub
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-off-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-near-black/98 backdrop-blur-lg border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="text-sm tracking-widest uppercase py-3 text-text-secondary hover:text-off-white transition-colors border-b border-border/50"
                style={{
                  animationDelay: `${i * 50}ms`,
                  opacity: 0,
                  animation: `fadeInUp 0.3s ease-out ${i * 50}ms forwards`,
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="text-sm tracking-widest uppercase text-gold border border-gold/30 px-4 py-3 text-center hover:bg-gold/10 transition-all duration-200 mt-2"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
