"use client";

import { useState, useRef } from "react";
import LearningPanel from "@/components/learning/LearningPanel";
import { graphContent } from "@/content/topics";

type Node = { id: number; x: number; y: number };
type Edge = { from: number; to: number };

export default function GraphPage() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: 1, x: 150, y: 80 },
    { id: 2, x: 350, y: 80 },
    { id: 3, x: 250, y: 200 },
  ]);
  const [edges, setEdges] = useState<Edge[]>([
    { from: 1, to: 2 },
    { from: 2, to: 3 },
  ]);
  const nextIdRef = useRef(4);

  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [deleteNodeInput, setDeleteNodeInput] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [highlightId, setHighlightId] = useState<number | null>(null);

  function handleAddNode() {
    setErrorMessage(null);
    if (nodes.length >= 12) {
      setErrorMessage("Maximum of 12 nodes reached.");
      return;
    }
    const id = nextIdRef.current;
    nextIdRef.current += 1;
    const x = 80 + Math.random() * 440;
    const y = 60 + Math.random() * 200;
    setNodes((prev) => [...prev, { id, x, y }]);
    setHighlightId(id);
    setTimeout(() => setHighlightId(null), 600);
  }

  function handleAddEdge() {
    setErrorMessage(null);
    const from = Number(fromInput);
    const to = Number(toInput);

    if (fromInput.trim() === "" || toInput.trim() === "" || Number.isNaN(from) || Number.isNaN(to)) {
      setErrorMessage("Enter valid node IDs for both endpoints.");
      return;
    }
    const fromExists = nodes.some((n) => n.id === from);
    const toExists = nodes.some((n) => n.id === to);
    if (!fromExists || !toExists) {
      setErrorMessage("Both node IDs must exist in the graph.");
      return;
    }
    if (from === to) {
      setErrorMessage("Cannot connect a node to itself.");
      return;
    }
    const alreadyExists = edges.some(
      (e) => (e.from === from && e.to === to) || (e.from === to && e.to === from)
    );
    if (alreadyExists) {
      setErrorMessage("This edge already exists.");
      return;
    }

    setEdges((prev) => [...prev, { from, to }]);
    setFromInput("");
    setToInput("");
  }

  function handleDeleteNode() {
    setErrorMessage(null);
    const id = Number(deleteNodeInput);

    if (deleteNodeInput.trim() === "" || Number.isNaN(id)) {
      setErrorMessage("Enter a valid node ID to delete.");
      return;
    }
    if (!nodes.some((n) => n.id === id)) {
      setErrorMessage(`Node ${id} does not exist.`);
      return;
    }

    setNodes((prev) => prev.filter((n) => n.id !== id));
    setEdges((prev) => prev.filter((e) => e.from !== id && e.to !== id));
    setDeleteNodeInput("");
  }

  function handleReset() {
    setNodes([]);
    setEdges([]);
    setErrorMessage(null);
    setFromInput("");
    setToInput("");
    setDeleteNodeInput("");
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-4">
        <h1 className="text-xl font-semibold">Graph</h1>
        <p className="text-sm text-zinc-500">{nodes.length} nodes, {edges.length} edges</p>
      </div>

      <div className="flex-1 flex items-center justify-center px-10 py-6">
        {nodes.length === 0 ? (
          <p className="text-sm text-zinc-400">Graph is empty — add a node to begin</p>
        ) : (
          <svg viewBox="0 0 600 280" className="w-full max-w-2xl">
            {edges.map((edge, i) => {
              const fromNode = nodes.find((n) => n.id === edge.from);
              const toNode = nodes.find((n) => n.id === edge.to);
              if (!fromNode || !toNode) return null;
              return (
                <line key={i} x1={fromNode.x} y1={fromNode.y} x2={toNode.x} y2={toNode.y} stroke="#d4d4d8" strokeWidth={2} />
              );
            })}
            {nodes.map((node) => (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={20}
                  fill={node.id === highlightId ? "var(--color-active)" : "var(--color-default)"}
                  className="transition-all duration-300"
                />
                <text x={node.x} y={node.y} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={13} fontWeight={500}>
                  {node.id}
                </text>
              </g>
            ))}
          </svg>
        )}
      </div>

      <div className="flex flex-col gap-3 px-6 py-4 border-t border-zinc-200 bg-zinc-50">
        <div className="flex items-center gap-2">
          <button onClick={handleAddNode} className="px-3 py-2 rounded bg-viz-default text-white text-sm font-medium hover:opacity-90">
            Add Node
          </button>
          <input
            type="number"
            value={deleteNodeInput}
            onChange={(e) => setDeleteNodeInput(e.target.value)}
            placeholder="Node ID"
            className="w-24 border border-zinc-300 rounded px-2 py-2 text-sm"
          />
          <button onClick={handleDeleteNode} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Delete Node
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={fromInput}
            onChange={(e) => setFromInput(e.target.value)}
            placeholder="From ID"
            className="w-24 border border-zinc-300 rounded px-2 py-2 text-sm"
          />
          <input
            type="number"
            value={toInput}
            onChange={(e) => setToInput(e.target.value)}
            placeholder="To ID"
            className="w-24 border border-zinc-300 rounded px-2 py-2 text-sm"
          />
          <button onClick={handleAddEdge} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Add Edge
          </button>
          <button onClick={handleReset} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Reset
          </button>
        </div>
        {errorMessage && <p className="text-sm text-viz-error font-medium">{errorMessage}</p>}
      </div>

      <LearningPanel content={graphContent} />
    </div>
  );
}