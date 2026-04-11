import { createHighlighter } from "shiki";

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-dark"],
      langs: ["typescript", "javascript", "bash", "json", "python", "go", "rust", "tsx", "jsx", "css", "html", "markdown", "lua"],
    });
  }
  return highlighterPromise;
}

export const mdxComponents = {
  pre: async ({ children, ...props }: React.ComponentProps<"pre">) => {
    const codeElement = children as React.ReactElement<{
      className?: string;
      children?: string;
    }>;

    if (
      codeElement &&
      typeof codeElement === "object" &&
      "props" in codeElement
    ) {
      const className = codeElement.props.className || "";
      const lang = className.replace("language-", "") || "text";
      const code = (codeElement.props.children || "").trim();

      try {
        const highlighter = await getHighlighter();
        const html = highlighter.codeToHtml(code, {
          lang,
          theme: "github-dark",
        });
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
      } catch {
        // Fallback for unsupported languages
      }
    }

    return <pre {...props}>{children}</pre>;
  },
};
