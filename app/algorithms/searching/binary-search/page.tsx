"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import SearchBar from "@/components/visualizer/SearchBar";
import { binarySearchWithSteps } from "@/lib/algorithms/binarySearch";
import LearningPanel from "@/components/learning/LearningPanel";
import { binarySearchContent } from "@/content/topics";

const ARRAY = [5, 2, 8, 1, 9, 3, 7, 4, 6];

export default function BinarySearchPage() {
  const [target, setTarget] = useState(7);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(3);

  const steps = useMemo(
    () => binarySearchWithSteps(ARRAY, target),
    [target]
  );

  const currentStep = steps[currentStepIndex];
  const maxValue = Math.max(...ARRAY);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const delay = 600 - speed * 100;
      intervalRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, delay);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, speed, steps.length]);

  function handlePlayPause() {
    if (currentStepIndex >= steps.length - 1) setCurrentStepIndex(0);
    setIsPlaying((prev) => !prev);
  }

  function handleStepForward() {
    setIsPlaying(false);
    setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  }

  function handleRestart() {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  }

  function handleTargetChange(newTarget: number) {
    setTarget(newTarget);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Binary Search</h1>
          <p className="text-sm text-zinc-500">
            Step {currentStepIndex + 1} of {steps.length}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-zinc-500">Search for</label>
          <input
            type="number"
            value={target}
            onChange={(e) => handleTargetChange(Number(e.target.value))}
            className="w-16 border border-zinc-300 rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      <div className="flex-1 flex items-end justify-center gap-2 px-10 py-6">
        {currentStep.array.map((value, index) => (
          <SearchBar
            key={index}
            value={value}
            maxValue={maxValue}
            isCurrent={currentStep.currentIndex === index}
            isFound={currentStep.foundIndex === index}
            isEliminated={currentStep.eliminatedIndices.includes(index)}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 px-6 py-4 border-t border-zinc-200 bg-zinc-50">
        <button onClick={handleRestart} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
          Restart
        </button>
        <button onClick={handleStepForward} className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100">
          Step
        </button>
        <button onClick={handlePlayPause} className="px-4 py-2 rounded bg-viz-default text-white text-sm font-medium hover:opacity-90">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <div className="flex items-center gap-2 ml-2">
          <span className="text-sm text-zinc-500">Speed</span>
          <input type="range" min={1} max={5} value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
        </div>
        <span className="text-sm text-zinc-500 ml-auto">
          {currentStep.foundIndex !== null
            ? `Found at index ${currentStep.foundIndex}`
            : currentStep.currentIndex !== null
            ? `Checking index ${currentStep.currentIndex}`
            : "Not found"}
        </span>
      </div>

      <LearningPanel content={binarySearchContent} />
    </div>
  );
}