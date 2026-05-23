"use client";

import { useState } from "react";

const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;

const responses: Record<(typeof methods)[number], { status: number; body: string }> = {
  GET: { status: 200, body: '{ "id": 1, "title": "Hello" }' },
  POST: { status: 201, body: '{ "id": 2, "title": "Created" }' },
  PUT: { status: 200, body: '{ "id": 1, "title": "Updated" }' },
  PATCH: { status: 200, body: '{ "id": 1, "title": "Patched" }' },
  DELETE: { status: 204, body: "" },
};

export function RestApiDemo() {
  const [method, setMethod] = useState<(typeof methods)[number]>("GET");
  const response = responses[method];

  return (
    <div className="my-8 rounded-md border border-[var(--border)] p-4">
      <div className="mb-4 flex flex-wrap gap-2">
        {methods.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setMethod(item)}
            className={`rounded px-3 py-1 font-mono text-sm ${
              method === item ? "bg-[var(--foreground)] text-[var(--background)]" : "border border-[var(--border)]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="rounded border border-[var(--border)] bg-[var(--code-bg)] p-4 font-mono text-sm">
        <p className="text-[var(--muted)]">{method} /api/posts/1</p>
        <p className="mt-3">HTTP/1.1 {response.status}</p>
        {response.body && <pre className="mt-3 whitespace-pre-wrap">{response.body}</pre>}
      </div>
    </div>
  );
}
