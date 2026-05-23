import Link from "next/link";
import { ProseLayout } from "@/components/prose-layout";

export default function NotFound() {
  return (
    <ProseLayout>
      <h1 className="mb-4 text-2xl font-extrabold text-[var(--foreground)]">404</h1>
      <p>
        this page doesn&apos;t exist.{" "}
        <Link href="/" className="underline underline-offset-2">
          go home
        </Link>
        .
      </p>
    </ProseLayout>
  );
}
