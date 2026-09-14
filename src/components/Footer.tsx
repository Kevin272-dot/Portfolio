import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-tertiary tracking-wider">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-tertiary hover:text-text-secondary transition-colors tracking-wider"
          >
            GitHub
          </Link>
          {profile.linkedin !== "[ADD LINK]" && (
            <Link
              href={profile.linkedin}
              className="text-xs text-text-tertiary hover:text-text-secondary transition-colors tracking-wider"
            >
              LinkedIn
            </Link>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="text-xs text-text-tertiary hover:text-text-secondary transition-colors tracking-wider"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
