"use client";

import { useState, useRef } from "react";
import LearningPanel from "@/components/learning/LearningPanel";
import { linkedListContent } from "@/content/topics";

const MAX_SIZE = 10;

export default function LinkedListPage() {
  const [nodes, setNodes] = useState<{ id: number; value: number }[]>([
    { id: 1, value: 5 },
    { id: 2, value: 2 },
    { id: 3, value: 8 },
  ]);
  const nextIdRef = useRef(4);

  const [valueInput, setValueInput] = useState("");
  const [indexInput, setIndexInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [highlightId, setHighlightId] = useState<number | null>(null);
  const [foundId, setFoundId] = useState<number | null>(null);

  function clearFeedback() {
    setErrorMessage(null);
    setFoundId(null);
  }

  function handleInsert() {
    clearFeedback();
    const value = Number(valueInput);
    const index = indexInput === "" ? nodes.length : Number(indexInput);

    if (valueInput.trim() === "" || Number.isNaN(value)) {
      setErrorMessage("Enter a valid number to insert.");
      return;
    }
    if (nodes.length >= MAX_SIZE) {
      setErrorMessage(`Linked list is full (max ${MAX_SIZE} nodes).`);
      return;
    }
    if (Number.isNaN(index) || index < 0 || index > nodes.length) {
      setErrorMessage(`Index must be between 0 and ${nodes.length}.`);
      return;
    }

    const newNode = { id: nextIdRef.current, value };
    nextIdRef.current += 1;

    const next = [...nodes];
    next.splice(index, 0, newNode);
    setNodes(next);
    setHighlightId(newNode.id);
    setValueInput("");
    setIndexInput("");
    setTimeout(() => setHighlightId(null), 600);
  }

  function handleDelete() {
    clearFeedback();
    const index = indexInput === "" ? nodes.length - 1 : Number(indexInput);

    if (nodes.length === 0) {
      setErrorMessage("Linked list is empty — nothing to delete.");
      return;
    }
    if (Number.isNaN(index) || index < 0 || index >= nodes.length) {
      setErrorMessage(`Index must be between 0 and ${nodes.length - 1}.`);
      return;
    }

    const next = [...nodes];
    next.splice(index, 1);
    setNodes(next);
    setIndexInput("");
  }

  function handleSearch() {
    clearFeedback();
    const target = Number(searchInput);
    if (searchInput.trim() === "" || Number.isNaN(target)) {
      setErrorMessage("Enter a valid number to search for.");
      return;
    }
    const match = nodes.find((n) => n.value === target);
    if (!match) {
      setErrorMessage(`${target} was not found in the list.`);
    } else {
      setFoundId(match.id);
    }
  }

  function handleReset() {
    setNodes([]);
    setErrorMessage(null);
    setFoundId(null);
    setValueInput("");
    setIndexInput("");
    setSearchInput("");
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-4">
        <h1 className="text-xl font-semibold">Linked List</h1>
        <p className="text-sm text-zinc-500">{nodes.length} / {MAX_SIZE} nodes</p>
      </div>

      <div className="flex-1 flex items-center justify-center px-10 py-6 overflow-x-auto">
        <div className="flex items-center gap-1">
          {nodes.length === 0 && <p className="text-sm text-zinc-400">List is empty</p>}
          {nodes.map((node, index) => (
            <div key={node.id} className="flex items-center">
              <div
                className={`flex items-center border rounded transition-all duration-300 ${
                  node.id === foundId
                    ? "bg-viz-success text-white border-viz-success"
                    : node.id === highlightId
                    ? "bg-viz-active text-white border-viz-active"
                    : "bg-white border-zinc-300"
                }`}
              >
                <div className="w-10 h-10 flex items-center justify-center font-medium">
                  {node.value}
                </div>
                <div className="w-6 h-10 flex items-center justify-center border-l border-zinc-300 text-xs">
                  •
                </div>
              </div>
              {index < nodes.length - 1 && (
                <span className="text-zinc-400 mx-1">→</span>
              )}
              {index === nodes.length - 1 && (
                <span className="text-zinc-400 mx-1 text-sm">→ null</span>
              )}
            </div>
          ))}
          {nodes.length === 0 && <span className="text-zinc-400 text-sm">null</span>}
        </div>
      </div>

      <div className="flex flex-col gap-3 px-6 py-4 border-t border-zinc-200 bg-zinc-50">
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            placeholder="Value"
            className="w-20 border border-zinc-300 rounded px-2 py-2 text-sm"
          />
          <input
            type="number"
            value={indexInput}
            onChange={(e) => setIndexInput(e.target.value)}
            placeholder="Index (optional)"
            className="w-28 border border-zinc-300 rounded px-2 py-2 text-sm"
          />
          <button onClick={handleInsert} className="px-3 py-2 rounded bg-viz-default text-white text-sm font-medium hover:opacity-90">
            Insert
          </button>
          <button onClick={handleDelete} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Delete
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search value"
            className="w-28 border border-zinc-300 rounded px-2 py-2 text-sm"
          />
          <button onClick={handleSearch} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Search
          </button>
          <button onClick={handleReset} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Reset
          </button>
        </div>
        {errorMessage && <p className="text-sm text-viz-error font-medium">{errorMessage}</p>}
        {foundId !== null && <p className="text-sm text-viz-success font-medium">Value found in the list.</p>}
      </div>

      <LearningPanel content={linkedListContent} />
    </div>
  );
}