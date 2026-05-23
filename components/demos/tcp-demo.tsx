"use client";

import { useState } from "react";

const steps = [
  { id: "syn", label: "SYN" },
  { id: "syn-ack", label: "SYN-ACK" },
  { id: "ack", label: "ACK" },
  { id: "data", label: "DATA" },
  { id: "fin", label: "FIN" },
];

export function TcpDemo() {
  const [step, setStep] = useState(0);

  return (
    <div className="my-8 rounded-md border border-[var(--border)] p-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="text-sm font-medium">client</div>
        <div className="text-sm font-medium">server</div>
      </div>
      <div className="relative min-h-40 rounded border border-[var(--border)] bg-[var(--code-bg)] p-4">
        {steps.slice(0, step + 1).map((item, index) => (
          <div key={item.id} className="mb-3 flex items-center justify-between text-sm font-mono">
            <span>{index % 2 === 0 ? item.label : ""}</span>
            <span className="text-[var(--muted)]">→</span>
            <span>{index % 2 === 1 ? item.label : ""}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          disabled={step >= steps.length - 1}
          onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
          className="rounded border border-[var(--border)] px-3 py-1 text-sm disabled:opacity-40"
        >
          next packet
        </button>
        <button
          type="button"
          onClick={() => setStep(0)}
          className="rounded border border-[var(--border)] px-3 py-1 text-sm"
        >
          reset
        </button>
      </div>
    </div>
  );
}
