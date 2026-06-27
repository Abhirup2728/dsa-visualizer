"use client";

import { useState } from "react";
import LearningPanel from "@/components/learning/LearningPanel";
import { queueContent } from "@/content/topics";

const MAX_QUEUE_SIZE = 10;

export default function QueuePage() {
  const [items, setItems] = useState<number[]>([5, 2, 8]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastEnqueuedIndex, setLastEnqueuedIndex] = useState<number | null>(null);

  function handleEnqueue() {
    const value = Number(inputValue);
    if (inputValue.trim() === "" || Number.isNaN(value)) {
      setErrorMessage("Please enter a valid number.");
      return;
    }
    if (items.length >= MAX_QUEUE_SIZE) {
      setErrorMessage(`Queue is full (max ${MAX_QUEUE_SIZE} items).`);
      return;
    }
    setItems((prev) => [...prev, value]);
    setLastEnqueuedIndex(items.length);
    setInputValue("");
    setErrorMessage(null);
    setTimeout(() => setLastEnqueuedIndex(null), 600);
  }

  function handleDequeue() {
    if (items.length === 0) {
      setErrorMessage("Queue is empty — nothing to dequeue.");
      return;
    }
    setItems((prev) => prev.slice(1));
    setErrorMessage(null);
  }

  function handleReset() {
    setItems([]);
    setErrorMessage(null);
    setInputValue("");
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-4">
        <h1 className="text-xl font-semibold">Queue</h1>
        <p className="text-sm text-zinc-500">{items.length} / {MAX_QUEUE_SIZE} items</p>
      </div>

      <div className="flex-1 flex items-center justify-center px-10 py-6">
        <div className="flex items-center gap-1 border-t-2 border-b-2 border-zinc-300 min-h-[60px] px-2">
          {items.length === 0 && <p className="text-sm text-zinc-400 px-4">Empty</p>}
          {items.map((value, index) => (
            <div
              key={index}
              className={`w-14 h-12 flex flex-col items-center justify-center rounded font-medium transition-all duration-300 ${
                index === lastEnqueuedIndex
                  ? "bg-viz-active text-white"
                  : index === 0
                  ? "bg-viz-default text-white"
                  : "bg-zinc-100 text-zinc-700"
              }`}
            >
              {value}
              {index === 0 && <span className="text-[10px] opacity-80">front</span>}
              {index === items.length - 1 && index !== 0 && (
                <span className="text-[10px] opacity-80">rear</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 px-6 py-4 border-t border-zinc-200 bg-zinc-50">
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Value"
            className="w-24 border border-zinc-300 rounded px-2 py-2 text-sm"
          />
          <button onClick={handleEnqueue} className="px-4 py-2 rounded bg-viz-default text-white text-sm font-medium hover:opacity-90">
            Enqueue
          </button>
          <button onClick={handleDequeue} className="px-4 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Dequeue
          </button>
          <button onClick={handleReset} className="px-4 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Reset
          </button>
        </div>
        {errorMessage && <p className="text-sm text-viz-error font-medium">{errorMessage}</p>}
      </div>

      <LearningPanel content={queueContent} />
    </div>
  );
}