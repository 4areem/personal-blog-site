export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-3xl px-6 py-6 flex items-center justify-between text-sm text-muted">
        <span className="font-mono">kareemdev</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/4areem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/kareem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
