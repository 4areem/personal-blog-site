import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
  featured?: boolean;
  main?: boolean;
  content: string;
};

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      name: data.name ?? slug,
      description: data.description ?? "",
      tech: data.tech ?? [],
      url: data.url,
      repo: data.repo,
      featured: data.featured ?? false,
      main: data.main ?? false,
      content,
    };
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    name: data.name ?? slug,
    description: data.description ?? "",
    tech: data.tech ?? [],
    url: data.url,
    repo: data.repo,
    featured: data.featured ?? false,
    main: data.main ?? false,
    content,
  };
}
