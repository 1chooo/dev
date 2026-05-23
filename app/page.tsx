import Link from "next/link";
import { ProseLayout } from "@/components/prose-layout";

export const metadata = {
  title: "lin hugo",
};

export default function HomePage() {
  return (
    <ProseLayout>
      <div className="space-y-6">
        <p>
          I&apos;m a{" "}
          <a href="https://1chooo.com/bio">software builder and writer</a>. I study Computer
          Science at{" "}
          <a href="https://viterbischool.usc.edu/">USC Viterbi</a>.
        </p>
        <p>
          While my professional work focuses on high-quality, large-scale software systems. On
          weekends, I&apos;m a photographer capturing the human touch in fleeting moments, using
          light and lines to construct my perspective.
        </p>
        <p>
          You can gain further insights into my background and interests through my{" "}
          <Link href="/blog">thoughts</Link>, <Link href="/projects">projects</Link>, or{" "}
          <a href="https://github.com/1chooo">code</a>.{" "}
          <a href="https://www.linkedin.com/in/1chooo">Reach out</a> if you&apos;d love to connect.
        </p>
      </div>
    </ProseLayout>
  );
}
