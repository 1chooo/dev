"use client";

import { useState } from "react";

type LogEntry = { phase: string; target: string };

export function EventPropagationDemo() {
  const [mode, setMode] = useState<"bubble" | "capture">("bubble");
  const [stopAtMiddle, setStopAtMiddle] = useState(false);
  const [log, setLog] = useState<LogEntry[]>([]);

  function handleClick(target: string, phase: string, e: React.MouseEvent) {
    if (stopAtMiddle && target === "middle" && phase === (mode === "bubble" ? "bubble" : "capture")) {
      e.stopPropagation();
    }
    setLog((prev) => [...prev, { phase, target }]);
  }

  function reset() {
    setLog([]);
  }

  return (
    <div className="my-8 rounded-md border border-[var(--border)] p-4">
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => { setMode("bubble"); reset(); }}
          className={`rounded px-3 py-1 text-sm ${mode === "bubble" ? "bg-[var(--foreground)] text-[var(--background)]" : "border border-[var(--border)]"}`}
        >
          bubbling
        </button>
        <button
          type="button"
          onClick={() => { setMode("capture"); reset(); }}
          className={`rounded px-3 py-1 text-sm ${mode === "capture" ? "bg-[var(--foreground)] text-[var(--background)]" : "border border-[var(--border)]"}`}
        >
          capturing
        </button>
        <label className="flex items-center gap-2 text-sm text-[var(--muted)]">
          <input type="checkbox" checked={stopAtMiddle} onChange={(e) => setStopAtMiddle(e.target.checked)} />
          stopPropagation at middle
        </label>
      </div>
      <div
        className="rounded border border-[var(--border)] bg-[var(--code-bg)] p-4"
        onClickCapture={(e) => mode === "capture" && handleClick("outer", "capture", e)}
        onClick={(e) => mode === "bubble" && handleClick("outer", "bubble", e)}
      >
        <p className="mb-2 text-sm text-[var(--muted)]">outer div</p>
        <div
          className="rounded border border-[var(--border)] p-4"
          onClickCapture={(e) => mode === "capture" && handleClick("middle", "capture", e)}
          onClick={(e) => mode === "bubble" && handleClick("middle", "bubble", e)}
        >
          <p className="mb-2 text-sm text-[var(--muted)]">middle div</p>
          <button
            type="button"
            className="rounded border border-[var(--border)] px-3 py-1 text-sm"
            onClick={(e) => handleClick("button", "target", e)}
          >
            click me
          </button>
        </div>
      </div>
      <div className="mt-4 font-mono text-xs">
        <p className="mb-2 text-[var(--muted)]">event log</p>
        {log.length === 0 ? (
          <p className="text-[var(--muted)]">click any element above</p>
        ) : (
          <ul className="space-y-1">
            {log.map((entry, i) => (
              <li key={i}>{entry.phase} → {entry.target}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
