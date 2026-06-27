"use client";

import { useState, useRef } from "react";
import LearningPanel from "@/components/learning/LearningPanel";
import { arrayContent } from "@/content/topics";

const MAX_ARRAY_SIZE = 12;

export default function ArrayPage() {
  const [items, setItems] = useState<number[]>([5, 2, 8, 1, 9]);
  const [valueInput, setValueInput] = useState("");
  const [indexInput, setIndexInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const [traverseIndex, setTraverseIndex] = useState<number | null>(null);

  const traverseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearFeedback() {
    setErrorMessage(null);
    setFoundIndex(null);
  }

  function handleInsert() {
    clearFeedback();
    const value = Number(valueInput);
    const index = indexInput === "" ? items.length : Number(indexInput);

    if (valueInput.trim() === "" || Number.isNaN(value)) {
      setErrorMessage("Enter a valid number to insert.");
      return;
    }
    if (items.length >= MAX_ARRAY_SIZE) {
      setErrorMessage(`Array is full (max ${MAX_ARRAY_SIZE} elements).`);
      return;
    }
    if (Number.isNaN(index) || index < 0 || index > items.length) {
      setErrorMessage(`Index must be between 0 and ${items.length}.`);
      return;
    }

    const next = [...items];
    next.splice(index, 0, value);
    setItems(next);
    setValueInput("");
    setIndexInput("");
    setHighlightIndex(index);
    setTimeout(() => setHighlightIndex(null), 600);
  }

  function handleDelete() {
    clearFeedback();
    const index = indexInput === "" ? items.length - 1 : Number(indexInput);

    if (items.length === 0) {
      setErrorMessage("Array is empty — nothing to delete.");
      return;
    }
    if (Number.isNaN(index) || index < 0 || index >= items.length) {
      setErrorMessage(`Index must be between 0 and ${items.length - 1}.`);
      return;
    }

    const next = [...items];
    next.splice(index, 1);
    setItems(next);
    setIndexInput("");
  }

  function handleSearch() {
    clearFeedback();
    const target = Number(searchInput);

    if (searchInput.trim() === "" || Number.isNaN(target)) {
      setErrorMessage("Enter a valid number to search for.");
      return;
    }

    const index = items.indexOf(target);
    if (index === -1) {
      setErrorMessage(`${target} was not found in the array.`);
    } else {
      setFoundIndex(index);
    }
  }

  function handleTraverse() {
    clearFeedback();
    if (traverseTimeoutRef.current) clearTimeout(traverseTimeoutRef.current);

    let i = 0;
    function step() {
      if (i >= items.length) {
        setTraverseIndex(null);
        return;
      }
      setTraverseIndex(i);
      i++;
      traverseTimeoutRef.current = setTimeout(step, 400);
    }
    step();
  }

  function handleReset() {
    if (traverseTimeoutRef.current) clearTimeout(traverseTimeoutRef.current);
    setItems([]);
    setValueInput("");
    setIndexInput("");
    setSearchInput("");
    setErrorMessage(null);
    setFoundIndex(null);
    setTraverseIndex(null);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-4">
        <h1 className="text-xl font-semibold">Array</h1>
        <p className="text-sm text-zinc-500">
          {items.length} / {MAX_ARRAY_SIZE} elements
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center px-10 py-6">
        <div className="flex gap-1">
          {items.length === 0 && (
            <p className="text-sm text-zinc-400">Array is empty</p>
          )}
          {items.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-xs text-zinc-400 mb-1">{index}</span>
              <div
                className={`w-12 h-12 flex items-center justify-center rounded border font-medium transition-all duration-300 ${
                  index === foundIndex
                    ? "bg-viz-success text-white border-viz-success"
                    : index === highlightIndex
                    ? "bg-viz-active text-white border-viz-active"
                    : index === traverseIndex
                    ? "bg-viz-active text-white border-viz-active border-2"
                    : "bg-white border-zinc-300"
                }`}
              >
                {value}
              </div>
            </div>
          ))}
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
          <button onClick={handleTraverse} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Traverse
          </button>
          <button onClick={handleReset} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
            Reset
          </button>
        </div>

        {errorMessage && (
          <p className="text-sm text-viz-error font-medium">{errorMessage}</p>
        )}
        {foundIndex !== null && (
          <p className="text-sm text-viz-success font-medium">
            Found at index {foundIndex}.
          </p>
        )}
      </div>

      <LearningPanel content={arrayContent} />
    </div>
  );
}