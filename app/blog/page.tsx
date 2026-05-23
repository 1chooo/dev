import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import { ProseLayout } from "@/components/prose-layout";

export const metadata = {
  title: "blog",
};

const articlesDirectory = path.join(process.cwd(), "app", "blog", "_articles");

export default async function BlogPage() {
  const articles = await fs.readdir(articlesDirectory);

  const items = [];
  for (const article of articles) {
    if (!article.endsWith(".mdx")) continue;
    const articleModule = await import("./_articles/" + article);

    if (!articleModule.metadata) throw new Error("Missing `metadata` in " + article);
    if (articleModule.metadata.draft) continue;

    items.push({
      slug: article.replace(/\.mdx$/, ""),
      title: articleModule.metadata.title,
      date: articleModule.metadata.date || "-",
      sort: Number(articleModule.metadata.date?.replaceAll(".", "") || 0),
    });
  }
  items.sort((a, b) => b.sort - a.sort);

  return (
    <ProseLayout>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.slug} className="flex items-baseline justify-between gap-4">
            <Link
              href={`/blog/${item.slug}`}
              className="text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-2 hover:decoration-[var(--foreground)]"
            >
              {item.title}
            </Link>
            <span className="shrink-0 text-[var(--muted)]">{item.date}</span>
          </li>
        ))}
      </ul>
    </ProseLayout>
  );
}
