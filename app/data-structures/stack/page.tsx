"use client";

import { useState } from "react";
import LearningPanel from "@/components/learning/LearningPanel";
import { stackContent } from "@/content/topics";

const MAX_STACK_SIZE = 10;

export default function StackPage() {
  const [items, setItems] = useState<number[]>([5, 2, 8]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastPushedIndex, setLastPushedIndex] = useState<number | null>(null);

  function handlePush() {
    const value = Number(inputValue);

    if (inputValue.trim() === "" || Number.isNaN(value)) {
      setErrorMessage("Please enter a valid number before pushing.");
      return;
    }

    if (items.length >= MAX_STACK_SIZE) {
      setErrorMessage(`Stack is full (max ${MAX_STACK_SIZE} items).`);
      return;
    }

    setItems((prev) => [...prev, value]);
    setLastPushedIndex(items.length);
    setInputValue("");
    setErrorMessage(null);

    setTimeout(() => setLastPushedIndex(null), 600);
  }

  function handlePop() {
    if (items.length === 0) {
      setErrorMessage("Stack is empty — nothing to pop.");
      return;
    }

    setItems((prev) => prev.slice(0, -1));
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
        <h1 className="text-xl font-semibold">Stack</h1>
        <p className="text-sm text-zinc-500">
          {items.length} / {MAX_STACK_SIZE} items
        </p>
      </div>

      <div className="flex-1 flex items-end justify-center px-10 py-6">
        <div className="flex flex-col-reverse border-l-2 border-r-2 border-b-2 border-zinc-300 rounded-b min-h-[60px] w-32">
          {items.length === 0 && (
            <p className="text-center text-sm text-zinc-400 py-4">Empty</p>
          )}
          {items.map((value, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-12 border-t border-zinc-200 font-medium transition-all duration-300 ${
                index === lastPushedIndex
                  ? "bg-viz-active text-white"
                  : index === items.length - 1
                  ? "bg-viz-default text-white"
                  : "bg-zinc-100 text-zinc-700"
              }`}
            >
              {value}
              {index === items.length - 1 && (
                <span className="ml-2 text-xs opacity-80">← top</span>
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
          <button
            onClick={handlePush}
            className="px-4 py-2 rounded bg-viz-default text-white text-sm font-medium hover:opacity-90"
          >
            Push
          </button>
          <button
            onClick={handlePop}
            className="px-4 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100"
          >
            Pop
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100"
          >
            Reset
          </button>
        </div>

        {errorMessage && (
          <p className="text-sm text-viz-error font-medium">{errorMessage}</p>
        )}
      </div>

      <LearningPanel content={stackContent} />
    </div>
  );
}