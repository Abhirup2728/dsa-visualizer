"use client";

import { useState } from "react";
import { LearningContent } from "@/types/learningContent";

type LearningPanelProps = {
  content: LearningContent;
};

const TABS = ["Concept", "Working", "Complexity"] as const;
type Tab = (typeof TABS)[number];

export default function LearningPanel({ content }: LearningPanelProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Concept");

  return (
    <div className="border-t border-zinc-200 px-6 py-4">
      <div className="flex gap-4 mb-3">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm pb-1 border-b-2 transition-colors ${
              activeTab === tab
                ? "text-viz-default border-viz-default font-medium"
                : "text-zinc-400 border-transparent hover:text-zinc-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Concept" && (
        <p className="text-sm text-zinc-600 leading-relaxed">
          {content.concept}
        </p>
      )}

      {activeTab === "Working" && (
        <ol className="text-sm text-zinc-600 leading-relaxed list-decimal pl-5 space-y-1">
          {content.working.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      )}

      {activeTab === "Complexity" && (
        <div className="grid grid-cols-4 gap-3">
          <ComplexityCard label="Best" value={content.complexity.best} />
          <ComplexityCard label="Average" value={content.complexity.average} />
          <ComplexityCard label="Worst" value={content.complexity.worst} />
          <ComplexityCard label="Space" value={content.complexity.space} />
        </div>
      )}
    </div>
  );
}

function ComplexityCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-zinc-50 rounded p-3 text-center">
      <p className="text-xs text-zinc-400 mb-1">{label}</p>
      <p className="text-sm font-mono font-medium">{value}</p>
    </div>
  );
}