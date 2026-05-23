"use client";

import { useMemo, useState } from "react";

function normalPdf(x: number, mean: number, std: number) {
  const z = (x - mean) / std;
  return Math.exp(-0.5 * z * z) / (std * Math.sqrt(2 * Math.PI));
}

export function BellCurveDemo() {
  const [mean, setMean] = useState(0);
  const [std, setStd] = useState(1);

  const points = useMemo(() => {
    const result: string[] = [];
    for (let x = -4; x <= 4; x += 0.1) {
      const y = normalPdf(x, mean, std);
      const px = ((x + 4) / 8) * 300;
      const py = 100 - y * 80;
      result.push(`${px},${py}`);
    }
    return result.join(" ");
  }, [mean, std]);

  return (
    <div className="my-8 rounded-md border border-[var(--border)] p-4">
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          mean: {mean.toFixed(1)}
          <input
            type="range"
            min={-2}
            max={2}
            step={0.1}
            value={mean}
            onChange={(e) => setMean(Number(e.target.value))}
            className="mt-1 w-full"
          />
        </label>
        <label className="text-sm">
          std dev: {std.toFixed(1)}
          <input
            type="range"
            min={0.3}
            max={2}
            step={0.1}
            value={std}
            onChange={(e) => setStd(Number(e.target.value))}
            className="mt-1 w-full"
          />
        </label>
      </div>
      <svg viewBox="0 0 300 100" className="w-full rounded border border-[var(--border)] bg-[var(--code-bg)]">
        <polyline fill="none" stroke="currentColor" strokeWidth="2" points={points} />
      </svg>
    </div>
  );
}
