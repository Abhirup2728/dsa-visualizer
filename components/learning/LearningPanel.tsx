"use client";

import { useState } from "react";
import { LearningContent } from "@/types/learningContent";

type LearningPanelProps = {
  content: LearningContent;
};

const TABS = ["Concept", "Working", "Complexity", "Code"] as const;
type Tab = (typeof TABS)[number];

const LANGUAGES = ["cpp", "python", "java"] as const;
type Language = (typeof LANGUAGES)[number];

const LANGUAGE_LABELS: Record<Language, string> = {
  cpp: "C++",
  python: "Python",
  java: "Java",
};

export default function LearningPanel({ content }: LearningPanelProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Concept");
  const [activeLanguage, setActiveLanguage] = useState<Language>("cpp");

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
        <p className="text-sm text-zinc-600 leading-relaxed">{content.concept}</p>
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

      {activeTab === "Code" && (
        <div>
          <div className="flex gap-2 mb-3">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  activeLanguage === lang
                    ? "bg-viz-default text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {LANGUAGE_LABELS[lang]}
              </button>
            ))}
          </div>
          <pre className="bg-zinc-900 text-zinc-100 rounded-lg p-4 text-xs overflow-x-auto leading-relaxed">
            <code>{content.code[activeLanguage]}</code>
          </pre>
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