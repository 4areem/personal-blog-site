import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">About</h1>

      <div className="prose">
        <p>
          Hi, I&apos;m Kareem — a software engineer who likes building things
          that are fast, simple, and useful.
        </p>
        <p>
          I write about software engineering, systems design, and the tools I
          use day to day. This site is where I share what I&apos;m learning
          and working on.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring new technologies
          or contributing to open source.
        </p>
      </div>

      <div className="mt-10 flex gap-6 text-sm">
        <a
          href="https://github.com/4areem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
        >
          GitHub ↗
        </a>
        <a
          href="https://linkedin.com/in/kareem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:kareem@example.com"
          className="text-muted hover:text-foreground transition-colors"
        >
          Email ↗
        </a>
      </div>
    </div>
  );
}
