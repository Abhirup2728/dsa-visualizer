"use client";

import { useState, useRef } from "react";
import {
  BSTNode,
  insertNode,
  searchPath,
  deleteNode,
  assignPositions,
  getAllNodes,
} from "@/lib/dataStructures/bst";
import LearningPanel from "@/components/learning/LearningPanel";
import { bstContent } from "@/content/topics";

export default function BSTPage() {
  const [root, setRoot] = useState<BSTNode | null>(null);
  const [valueInput, setValueInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [highlightPath, setHighlightPath] = useState<number[]>([]);
  const [foundId, setFoundId] = useState<number | null>(null);
  const versionRef = useRef(0);

  function handleInsert() {
    const value = Number(valueInput);
    setErrorMessage(null);
    setFoundId(null);
    setHighlightPath([]);

    if (valueInput.trim() === "" || Number.isNaN(value)) {
      setErrorMessage("Enter a valid number to insert.");
      return;
    }

    const newRoot = insertNode(root, value);
    setRoot(newRoot);
    versionRef.current += 1;
    setValueInput("");
  }

  function handleSearch() {
    const target = Number(searchInput);
    setErrorMessage(null);
    setFoundId(null);

    if (searchInput.trim() === "" || Number.isNaN(target)) {
      setErrorMessage("Enter a valid number to search for.");
      return;
    }

    const path = searchPath(root, target);
    setHighlightPath(path);

    if (path.length === 0) {
      setErrorMessage(`${target} was not found — tree is empty.`);
      return;
    }

    const lastId = path[path.length - 1];
    const allNodes = getAllNodes(root);
    const lastNode = allNodes.find((n) => n.id === lastId);

    if (lastNode?.value === target) {
      setFoundId(lastId);
    } else {
      setErrorMessage(`${target} was not found in the tree.`);
    }
  }

  function handleDelete() {
    const value = Number(searchInput);
    setErrorMessage(null);
    setFoundId(null);
    setHighlightPath([]);

    if (searchInput.trim() === "" || Number.isNaN(value)) {
      setErrorMessage("Enter a valid number to delete.");
      return;
    }

    const newRoot = deleteNode(root, value);
    setRoot(newRoot);
    versionRef.current += 1;
    setSearchInput("");
  }

  function handleReset() {
    setRoot(null);
    setErrorMessage(null);
    setFoundId(null);
    setHighlightPath([]);
    setValueInput("");
    setSearchInput("");
  }

  const positions = new Map<number, { x: number; y: number }>();
  assignPositions(root, positions);
  const allNodes = getAllNodes(root);

  function getColor(id: number): string {
    if (id === foundId) return "var(--color-success)";
    if (highlightPath.includes(id)) return "var(--color-active)";
    return "var(--color-default)";
  }

  function renderEdges(node: BSTNode | null): React.ReactElement[] {
    if (node === null) return [];
    const pos = positions.get(node.id)!;
    const lines: React.ReactElement[] = [];
    if (node.left) {
      const childPos = positions.get(node.left.id)!;
      lines.push(
        <line key={`l-${node.id}`} x1={pos.x} y1={pos.y} x2={childPos.x} y2={childPos.y} stroke="#d4d4d8" strokeWidth={2} />
      );
      lines.push(...renderEdges(node.left));
    }
    if (node.right) {
      const childPos = positions.get(node.right.id)!;
      lines.push(
        <line key={`r-${node.id}`} x1={pos.x} y1={pos.y} x2={childPos.x} y2={childPos.y} stroke="#d4d4d8" strokeWidth={2} />
      );
      lines.push(...renderEdges(node.right));
    }
    return lines;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-4">
        <h1 className="text-xl font-semibold">Binary Search Tree</h1>
        <p className="text-sm text-zinc-500">{allNodes.length} nodes</p>
      </div>

      <div className="flex-1 flex items-center justify-center px-10 py-6">
        {root === null ? (
          <p className="text-sm text-zinc-400">Tree is empty — insert a value to begin</p>
        ) : (
          <svg viewBox="0 0 600 320" className="w-full max-w-2xl">
            {renderEdges(root)}
            {allNodes.map((node) => {
              const pos = positions.get(node.id)!;
              return (
                <g key={node.id}>
                  <circle cx={pos.x} cy={pos.y} r={20} fill={getColor(node.id)} className="transition-all duration-300" />
                  <text x={pos.x} y={pos.y} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={14} fontWeight={500}>
                    {node.value}
                  </text>
                </g>
              );
            })}
          </svg>
        )}
      </div>

      <div className="flex flex-col gap-3 px-6 py-4 border-t border-zinc-200 bg-zinc-50">
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            placeholder="Value to insert"
            className="w-32 border border-zinc-300 rounded px-2 py-2 text-sm"
          />
          <button onClick={handleInsert} className="px-3 py-2 rounded bg-viz-default text-white text-sm font-medium hover:opacity-90">
            Insert
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Value to search/delete"
            className="w-32 border border-zinc-300 rounded px-2 py-2 text-sm"
          />
          <button onClick={handleSearch} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Search
          </button>
          <button onClick={handleDelete} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Delete
          </button>
          <button onClick={handleReset} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Reset
          </button>
        </div>
        {errorMessage && <p className="text-sm text-viz-error font-medium">{errorMessage}</p>}
        {foundId !== null && <p className="text-sm text-viz-success font-medium">Value found.</p>}
      </div>

      <LearningPanel content={bstContent} />
    </div>
  );
}