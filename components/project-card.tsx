import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
};

export default function ProjectCard({ slug, name, description, tech, url, repo }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block border border-border rounded-lg p-5 hover:border-muted transition-all duration-200 hover:scale-[1.03] hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-medium group-hover:text-foreground transition-colors">{name}</h3>
        {(url || repo) && (
          <span className="shrink-0 text-sm text-muted">
            {url ? "demo ↗" : "repo ↗"}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-muted">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="font-mono text-xs text-muted bg-[#1a1a1a] px-2 py-0.5 rounded">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
