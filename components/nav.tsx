import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight">
          kareemdev
        </Link>
        <div className="flex gap-6 text-sm text-muted">
          <Link href="/blog" className="hover:text-foreground transition-colors">
            blog
          </Link>
          <Link href="/projects" className="hover:text-foreground transition-colors">
            projects
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            about
          </Link>
        </div>
      </div>
    </nav>
  );
}
