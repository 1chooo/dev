import { promises as fs } from "fs";
import path from "path";
import { ProseLayout } from "@/components/prose-layout";

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { default: MDXContent } = await import("../_articles/" + `${params.slug}.mdx`);

  return (
    <ProseLayout>
      <MDXContent />
    </ProseLayout>
  );
}

export async function generateStaticParams() {
  const articles = await fs.readdir(
    path.join(process.cwd(), "app", "blog", "_articles"),
  );

  return articles
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => ({
      slug: name.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const articleModule = await import("../_articles/" + `${params.slug}.mdx`);

  return {
    title: articleModule.metadata?.title,
    description: articleModule.metadata?.description,
  };
}
