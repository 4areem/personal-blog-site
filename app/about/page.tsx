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
          Hi, I&apos;m Kareem — a self-taught software engineer from Florida. I
          build and ship production systems end to end, from data pipelines and
          web scrapers to full-stack apps and the infrastructure they run on.
        </p>
        <p>
          I run Shahwan Systems LLC, my independent software studio, where
          I&apos;ve built things like roofs.agency — a lead platform that turns
          millions of public records into scored, route-clustered leads — and
          SkidBase, a data-breach search engine.
        </p>
        <p>
          I write here about the systems I build, the problems I run into, and
          what I&apos;m learning along the way.
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
          href="mailto:kareemishahwan@gmail.com"
          className="text-muted hover:text-foreground transition-colors"
        >
          Email ↗
        </a>
      </div>
    </div>
  );
}
