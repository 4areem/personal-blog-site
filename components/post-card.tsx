import Link from "next/link";

type PostCardProps = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export default function PostCard({ slug, title, date, description }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block py-4">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium group-hover:text-foreground transition-colors">
          {title}
        </h3>
        <span className="shrink-0 font-mono text-sm text-muted">{date}</span>
      </div>
      <p className="mt-1 text-sm text-muted">{description}</p>
    </Link>
  );
}
