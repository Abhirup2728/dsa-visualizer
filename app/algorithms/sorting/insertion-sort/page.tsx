"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import ArrayBar from "@/components/visualizer/ArrayBar";
import { insertionSortWithSteps } from "@/lib/algorithms/insertionSort";
import LearningPanel from "@/components/learning/LearningPanel";
import { insertionSortContent } from "@/content/topics";

const INITIAL_ARRAY = [5, 2, 8, 1, 9, 3, 7, 4, 6];

export default function InsertionSortPage() {
  const [originalArray] = useState(INITIAL_ARRAY);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(3);

  const steps = useMemo(
    () => insertionSortWithSteps(originalArray),
    [originalArray]
  );

  const currentStep = steps[currentStepIndex];
  const maxValue = Math.max(...originalArray);

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
    if (currentStepIndex >= steps.length - 1) {
      setCurrentStepIndex(0);
    }
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

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-4">
        <h1 className="text-xl font-semibold">Insertion Sort</h1>
        <p className="text-sm text-zinc-500">
          Step {currentStepIndex + 1} of {steps.length}
        </p>
      </div>

      <div className="flex-1 flex items-end justify-center gap-2 px-10 py-6">
        {currentStep.array.map((value, index) => (
          <ArrayBar
            key={index}
            value={value}
            maxValue={maxValue}
            isComparing={currentStep.comparing?.includes(index) ?? false}
            isSorted={currentStep.sortedIndices.includes(index)}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 px-6 py-4 border-t border-zinc-200 bg-zinc-50">
        <button
          onClick={handleRestart}
          className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100"
        >
          Restart
        </button>
        <button
          onClick={handleStepForward}
          className="px-3 py-2 rounded border border-zinc-300 text-sm hover:bg-zinc-100"
        >
          Step
        </button>
        <button
          onClick={handlePlayPause}
          className="px-4 py-2 rounded bg-viz-default text-white text-sm font-medium hover:opacity-90"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div className="flex items-center gap-2 ml-2">
          <span className="text-sm text-zinc-500">Speed</span>
          <input
            type="range"
            min={1}
            max={5}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
        </div>

        <span className="text-sm text-zinc-500 ml-auto">
          {currentStep.comparing
            ? `Comparing index ${currentStep.comparing[0]} and ${currentStep.comparing[1]}`
            : "Done"}
        </span>
      </div>

      <LearningPanel content={insertionSortContent} />
    </div>
  );
}