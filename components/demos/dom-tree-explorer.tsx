"use client";

import { useState } from "react";

const tree = {
  name: "#document",
  type: 9,
  children: [
    {
      name: "html lang=\"en\"",
      type: 1,
      children: [
        {
          name: "head",
          type: 1,
          children: [
            { name: "meta charset=\"utf-8\"", type: 1 },
            { name: "title \"My Page\"", type: 1 },
          ],
        },
        {
          name: "body",
          type: 1,
          children: [
            {
              name: "header",
              type: 1,
              children: [{ name: "h1 \"Hello World\"", type: 1 }],
            },
            {
              name: "main",
              type: 1,
              children: [
                { name: "p.intro \"Introduction.\"", type: 1 },
                {
                  name: "ul",
                  type: 1,
                  children: [
                    { name: "li \"Item one\"", type: 1 },
                    { name: "li \"Item two\"", type: 1 },
                  ],
                },
              ],
            },
            { name: "footer \"© 2024\"", type: 1 },
          ],
        },
      ],
    },
  ],
};

type TreeNode = {
  name: string;
  type: number;
  children?: TreeNode[];
};

function TreeNodeView({
  node,
  depth = 0,
  selected,
  onSelect,
}: {
  node: TreeNode;
  depth?: number;
  selected: TreeNode | null;
  onSelect: (node: TreeNode) => void;
}) {
  const isSelected = selected === node;

  return (
    <div>
      <button
        type="button"
        onClick={() => onSelect(node)}
        className={`block w-full rounded px-2 py-1 text-left font-mono text-xs transition-colors ${
          isSelected ? "bg-[var(--foreground)] text-[var(--background)]" : "hover:bg-[var(--code-bg)]"
        }`}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        {node.name}
      </button>
      {node.children?.map((child) => (
        <TreeNodeView
          key={child.name + depth}
          node={child}
          depth={depth + 1}
          selected={selected}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export function DomTreeExplorer() {
  const [selected, setSelected] = useState<TreeNode | null>(tree.children?.[0]?.children?.[1]?.children?.[1]?.children?.[0] ?? null);

  return (
    <div className="my-8 rounded-md border border-[var(--border)] p-4">
      <p className="mb-3 text-sm text-[var(--muted)]">dom tree explorer</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="max-h-64 overflow-auto rounded border border-[var(--border)] bg-[var(--code-bg)] p-2">
          <TreeNodeView node={tree} selected={selected} onSelect={setSelected} />
        </div>
        <div className="rounded border border-[var(--border)] bg-[var(--code-bg)] p-3 font-mono text-xs leading-relaxed">
          <p className="mb-2 text-[var(--muted)]">selected node</p>
          <p>{selected?.name ?? "none"}</p>
          <p className="mt-3 text-[var(--muted)]">nodeType: {selected?.type ?? "-"}</p>
          <p>children: {selected?.children?.length ?? 0}</p>
        </div>
      </div>
    </div>
  );
}
