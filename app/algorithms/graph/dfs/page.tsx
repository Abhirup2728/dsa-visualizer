"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import GraphCanvas from "@/components/visualizer/GraphCanvas";
import { dfsWithSteps } from "@/lib/algorithms/dfs";
import { sampleGraph } from "@/lib/graphs/sampleGraph";
import LearningPanel from "@/components/learning/LearningPanel";
import { dfsContent } from "@/content/topics";

export default function DFSPage() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(3);

  const steps = useMemo(() => dfsWithSteps(sampleGraph, 0), []);
  const currentStep = steps[currentStepIndex];

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const delay = 1000 - speed * 150;
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

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-4">
        <h1 className="text-xl font-semibold">Depth-First Search (DFS)</h1>
        <p className="text-sm text-zinc-500">
          Step {currentStepIndex + 1} of {steps.length}
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center px-10 py-6">
        <GraphCanvas graph={sampleGraph} step={currentStep} />
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
          {currentStep.currentNode !== null
            ? `Visiting node ${currentStep.currentNode}`
            : `Visit order: ${currentStep.visitOrder.join(" → ")}`}
        </span>
      </div>

      <LearningPanel content={dfsContent} />
    </div>
  );
}