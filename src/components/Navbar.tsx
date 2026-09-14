"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#research", label: "Research" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs tracking-widest uppercase transition-colors",
                pathname === link.href
                  ? "text-gold"
                  : "text-text-secondary hover:text-off-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="text-xs tracking-widest uppercase text-gold border border-gold/30 px-4 py-2 hover:bg-gold/10 transition-colors"
          >
            Resume
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-off-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-near-black/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={cn(
                  "text-sm tracking-widest uppercase py-2 transition-colors",
                  pathname === link.href
                    ? "text-gold"
                    : "text-text-secondary hover:text-off-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resume"
              onClick={closeMobile}
              className="text-sm tracking-widest uppercase text-gold border border-gold/30 px-4 py-3 text-center hover:bg-gold/10 transition-colors"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
