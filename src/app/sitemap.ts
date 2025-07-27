import { getBlogPosts } from "@/lib/api/blog";
import { BASE_URL, POSTS_DIR } from "@/lib/constants";

async function sitemap() {
  let blogs = getBlogPosts(POSTS_DIR).map((post) => ({
    url: `${BASE_URL}/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  let routes = [""].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}

export default sitemap;
