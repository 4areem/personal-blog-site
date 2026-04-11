import Link from "next/link";
import PostCard from "@/components/post-card";
import ProjectCard from "@/components/project-card";
import { getAllPosts } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  const projects = getAllProjects();
  const mainProject = projects.find((p) => p.main);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-3xl font-semibold tracking-tight">Kareem</h1>
        <p className="mt-3 text-lg text-muted">
          Software engineer. Building things for the web.
        </p>
      </section>

      {recentPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="font-mono text-sm text-muted uppercase tracking-wider mb-4">
            Recent Posts
          </h2>
          <div className="divide-y divide-border">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      )}

      {mainProject && (
        <section className="mb-16">
          <p className="font-mono text-sm text-muted uppercase tracking-wider mb-3">
            Currently building
          </p>
          <Link href={`/projects/${mainProject.slug}`} className="group block">
            <h2 className="text-3xl font-semibold tracking-tight group-hover:text-foreground transition-colors">
              {mainProject.name}
            </h2>
          </Link>
          <p className="mt-3 text-lg text-muted">{mainProject.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <div className="flex gap-2">
              {mainProject.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-muted bg-[#1a1a1a] px-2 py-0.5 rounded">
                  {t.toLowerCase()}
                </span>
              ))}
            </div>
            {(mainProject.url || mainProject.repo) && (
              <a
                href={mainProject.url || mainProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {mainProject.url ? "demo ↗" : "repo ↗"}
              </a>
            )}
          </div>
        </section>
      )}

      {featuredProjects.length > 0 && (
        <section>
          <h2 className="font-mono text-sm text-muted uppercase tracking-wider mb-4">
            Selected Projects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
