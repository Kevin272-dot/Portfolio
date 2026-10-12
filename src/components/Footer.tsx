import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-text-tertiary font-medium">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <Link
            href="/#resume"
            className="text-sm font-medium text-text-tertiary hover:text-off-white transition-colors"
          >
            Resume
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-tertiary hover:text-off-white transition-colors"
          >
            GitHub
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-tertiary hover:text-off-white transition-colors"
            >
              LinkedIn
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-medium text-text-tertiary hover:text-off-white transition-colors"
            >
              Email
            </a>
          )}
          <a
            href="#top"
            className="flex items-center gap-1.5 text-sm font-medium text-text-tertiary hover:text-gold transition-colors"
            aria-label="Back to top"
          >
            Top
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}