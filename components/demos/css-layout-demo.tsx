"use client";

import { useState } from "react";

const layouts = ["block", "flex", "grid"] as const;

export function CssLayoutDemo() {
  const [layout, setLayout] = useState<(typeof layouts)[number]>("flex");

  return (
    <div className="my-8 rounded-md border border-[var(--border)] p-4">
      <div className="mb-4 flex gap-2">
        {layouts.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setLayout(item)}
            className={`rounded px-3 py-1 text-sm capitalize ${
              layout === item ? "bg-[var(--foreground)] text-[var(--background)]" : "border border-[var(--border)]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div
        className={`min-h-32 rounded border border-[var(--border)] bg-[var(--code-bg)] p-4 ${
          layout === "flex" ? "flex gap-3" : layout === "grid" ? "grid grid-cols-3 gap-3" : ""
        }`}
      >
        {["A", "B", "C"].map((item) => (
          <div
            key={item}
            className={`flex h-16 items-center justify-center rounded border border-[var(--border)] bg-[var(--background)] font-mono text-sm ${
              layout === "block" ? "mb-3 last:mb-0" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-[var(--muted)]">
        Compare how the same three boxes behave under {layout} layout.
      </p>
    </div>
  );
}
