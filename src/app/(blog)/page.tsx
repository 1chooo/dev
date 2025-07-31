import { BlogPosts } from "@/components/posts";
import { Header } from "@/components/header";

export const metadata = {
  title: "Hugo Lin Dev",
  description: "Hugo Lin's Dev Blog",
};

export default function Page() {
  return (
    <>
      <Header />
      <BlogPosts />
    </>
  );
}
