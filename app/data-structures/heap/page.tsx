"use client";

import { useState } from "react";
import { insertIntoHeap, extractMin, getNodePositions } from "@/lib/dataStructures/heap";
import LearningPanel from "@/components/learning/LearningPanel";
import { heapContent } from "@/content/topics";

const MAX_SIZE = 15;

export default function HeapPage() {
  const [heap, setHeap] = useState<number[]>([10, 20, 15, 30, 40]);
  const [valueInput, setValueInput] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastExtracted, setLastExtracted] = useState<number | null>(null);

  function handleInsert() {
    const value = Number(valueInput);
    setErrorMessage(null);
    setLastExtracted(null);

    if (valueInput.trim() === "" || Number.isNaN(value)) {
      setErrorMessage("Enter a valid number to insert.");
      return;
    }
    if (heap.length >= MAX_SIZE) {
      setErrorMessage(`Heap is full (max ${MAX_SIZE} elements).`);
      return;
    }

    setHeap(insertIntoHeap(heap, value));
    setValueInput("");
  }

  function handleExtractMin() {
    setErrorMessage(null);
    if (heap.length === 0) {
      setErrorMessage("Heap is empty — nothing to extract.");
      return;
    }
    setLastExtracted(heap[0]);
    setHeap(extractMin(heap));
  }

  function handleReset() {
    setHeap([]);
    setErrorMessage(null);
    setLastExtracted(null);
    setValueInput("");
  }

  const positions = getNodePositions(heap);

  function renderEdges() {
    const lines = [];
    for (let i = 0; i < heap.length; i++) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < heap.length) {
        lines.push(
          <line key={`l-${i}`} x1={positions[i].x} y1={positions[i].y} x2={positions[left].x} y2={positions[left].y} stroke="#d4d4d8" strokeWidth={2} />
        );
      }
      if (right < heap.length) {
        lines.push(
          <line key={`r-${i}`} x1={positions[i].x} y1={positions[i].y} x2={positions[right].x} y2={positions[right].y} stroke="#d4d4d8" strokeWidth={2} />
        );
      }
    }
    return lines;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-4">
        <h1 className="text-xl font-semibold">Heap (Min-Heap)</h1>
        <p className="text-sm text-zinc-500">{heap.length} / {MAX_SIZE} elements</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-10 py-6 gap-4">
        {heap.length === 0 ? (
          <p className="text-sm text-zinc-400">Heap is empty</p>
        ) : (
          <svg viewBox="0 0 600 280" className="w-full max-w-2xl">
            {renderEdges()}
            {heap.map((value, i) => (
              <g key={i}>
                <circle cx={positions[i].x} cy={positions[i].y} r={20} fill={i === 0 ? "var(--color-active)" : "var(--color-default)"} className="transition-all duration-300" />
                <text x={positions[i].x} y={positions[i].y} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={14} fontWeight={500}>
                  {value}
                </text>
              </g>
            ))}
          </svg>
        )}

        <div className="flex gap-1 flex-wrap justify-center">
          <span className="text-xs text-zinc-400 mr-1 self-center">Array view:</span>
          {heap.map((value, i) => (
            <div key={i} className="w-9 h-9 flex items-center justify-center rounded border border-zinc-300 text-sm bg-white">
              {value}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 px-6 py-4 border-t border-zinc-200 bg-zinc-50">
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            placeholder="Value"
            className="w-24 border border-zinc-300 rounded px-2 py-2 text-sm"
          />
          <button onClick={handleInsert} className="px-4 py-2 rounded bg-viz-default text-white text-sm font-medium hover:opacity-90">
            Insert
          </button>
          <button onClick={handleExtractMin} className="px-4 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Extract Min
          </button>
          <button onClick={handleReset} className="px-4 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Reset
          </button>
        </div>
        {errorMessage && <p className="text-sm text-viz-error font-medium">{errorMessage}</p>}
        {lastExtracted !== null && <p className="text-sm text-viz-success font-medium">Extracted: {lastExtracted}</p>}
      </div>

      <LearningPanel content={heapContent} />
    </div>
  );
}