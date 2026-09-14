"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";
import { Send, Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Invalid email address";
    if (!form.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus("error");
      setErrorMsg(error);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[10px] font-mono tracking-widest text-gold">
              06
            </span>
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-text-secondary">
              Contact
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light text-off-white mb-4">
                  Get in touch
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  I&apos;m always interested in discussing systems engineering,
                  research opportunities, technical leadership, and meaningful
                  software projects.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 text-sm text-text-secondary hover:text-gold transition-colors group"
                >
                  <Mail
                    size={16}
                    className="text-text-tertiary group-hover:text-gold"
                  />
                  {profile.email}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-sm text-text-secondary hover:text-gold transition-colors group"
                >
                  <GithubIcon
                    size={16}
                    className="text-text-tertiary group-hover:text-gold"
                  />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  className="flex items-center gap-4 text-sm text-text-secondary hover:text-gold transition-colors group"
                >
                  <LinkedinIcon
                    size={16}
                    className="text-text-tertiary group-hover:text-gold"
                  />
                  LinkedIn
                </a>
                <a
                  href="/resume"
                  className="flex items-center gap-4 text-sm text-text-secondary hover:text-gold transition-colors group"
                >
                  <Download
                    size={16}
                    className="text-text-tertiary group-hover:text-gold"
                  />
                  Download Resume
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="bg-transparent border border-border px-4 py-3 text-sm text-off-white placeholder:text-text-tertiary focus:border-gold/30 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="bg-transparent border border-border px-4 py-3 text-sm text-off-white placeholder:text-text-tertiary focus:border-gold/30 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                className="w-full bg-transparent border border-border px-4 py-3 text-sm text-off-white placeholder:text-text-tertiary focus:border-gold/30 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full bg-transparent border border-border px-4 py-3 text-sm text-off-white placeholder:text-text-tertiary focus:border-gold/30 focus:outline-none transition-colors resize-none"
              />

              {status === "error" && (
                <p className="text-red-400 text-xs">{errorMsg}</p>
              )}
              {status === "success" && (
                <p className="text-gold text-xs">
                  Message sent successfully.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-gold text-near-black px-6 py-3 text-sm font-medium tracking-wider hover:bg-gold-dim transition-colors disabled:opacity-50"
              >
                {status === "loading" ? (
                  "SENDING..."
                ) : (
                  <>
                    <Send size={14} />
                    SEND MESSAGE
                  </>
                )}
              </button>

              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(form.subject || "Contact from Portfolio")}`}
                className="block text-center text-xs text-text-tertiary hover:text-text-secondary transition-colors"
              >
                Or email me directly
              </a>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
