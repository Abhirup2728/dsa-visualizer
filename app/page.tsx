"use client";

import { useState } from "react";
import Link from "next/link";

type Topic = {
  name: string;
  description: string;
  href: string;
  icon: string;
};

type Category = {
  label: string;
  icon: string;
  topics: Topic[];
};

const categories: Category[] = [
  {
    label: "Data Structures",
    icon: "ti-box",
    topics: [
      { name: "Array", description: "Insert, delete, search, traverse", href: "/data-structures/array", icon: "ti-grid-dots" },
      { name: "Stack", description: "Push, pop — LIFO", href: "/data-structures/stack", icon: "ti-stack-2" },
      { name: "Queue", description: "Enqueue, dequeue — FIFO", href: "/data-structures/queue", icon: "ti-stack-pop" },
      { name: "Linked List", description: "Pointer-based traversal", href: "/data-structures/linked-list", icon: "ti-link" },
      { name: "Tree", description: "Inorder, preorder, postorder", href: "/data-structures/tree", icon: "ti-binary-tree" },
      { name: "Binary Search Tree", description: "Insert, search, delete", href: "/data-structures/bst", icon: "ti-sitemap" },
      { name: "Heap", description: "Min-heap, array and tree view", href: "/data-structures/heap", icon: "ti-stairs" },
      { name: "Graph", description: "Nodes, edges, connections", href: "/data-structures/graph", icon: "ti-affiliate" },
    ],
  },
  {
    label: "Sorting",
    icon: "ti-arrows-sort",
    topics: [
      { name: "Bubble Sort", description: "O(n²) average case", href: "/algorithms/sorting/bubble-sort", icon: "ti-arrows-up-down" },
      { name: "Selection Sort", description: "O(n²), single swap per pass", href: "/algorithms/sorting/selection-sort", icon: "ti-target-arrow" },
      { name: "Insertion Sort", description: "O(n), great on near-sorted data", href: "/algorithms/sorting/insertion-sort", icon: "ti-cards" },
      { name: "Merge Sort", description: "O(n log n), divide and conquer", href: "/algorithms/sorting/merge-sort", icon: "ti-git-merge" },
      { name: "Quick Sort", description: "O(n log n) average, pivot-based", href: "/algorithms/sorting/quick-sort", icon: "ti-bolt" },
    ],
  },
  {
    label: "Searching",
    icon: "ti-search",
    topics: [
      { name: "Linear Search", description: "O(n), checks every element", href: "/algorithms/searching/linear-search", icon: "ti-list-search" },
      { name: "Binary Search", description: "O(log n), needs sorted data", href: "/algorithms/searching/binary-search", icon: "ti-binary" },
    ],
  },
  {
    label: "Graph Algorithms",
    icon: "ti-route",
    topics: [
      { name: "BFS", description: "Breadth-first, level by level", href: "/algorithms/graph/bfs", icon: "ti-layers-subtract" },
      { name: "DFS", description: "Depth-first, goes deep first", href: "/algorithms/graph/dfs", icon: "ti-arrow-down-right" },
    ],
  },
];

export default function Home() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | null>(null);
  const [selectedTopicHref, setSelectedTopicHref] = useState("");

  const selectedCategory =
    selectedCategoryIndex !== null ? categories[selectedCategoryIndex] : null;

  function handleCategoryChange(value: string) {
    const index = value === "" ? null : Number(value);
    setSelectedCategoryIndex(index);
    setSelectedTopicHref("");
  }

  return (
    <div className="flex flex-col">
      <section className="text-center px-6 py-16 border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-2xl bg-viz-default flex items-center justify-center">
            <i className="ti ti-binary-tree text-white text-3xl"></i>
          </div>
        </div>

        <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-3">
          Interactive Learning Platform
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 max-w-2xl mx-auto leading-tight text-zinc-900">
          Learn data structures and algorithms by watching them run
        </h1>
        <p className="text-zinc-600 max-w-lg mx-auto mb-2 leading-relaxed">
          DSA Visualizer turns abstract algorithms into real, controllable
          animations. Pick a topic below, press play, and watch exactly how
          each sort, search, and traversal works step by step.
        </p>
        <p className="text-sm text-zinc-500 max-w-lg mx-auto mb-8 leading-relaxed">
          Built for students, interview candidates, and anyone who learns
          better by seeing rather than reading.
        </p>

        <div className="max-w-md mx-auto bg-white border border-zinc-200 rounded-xl p-4 shadow-sm text-left">
          <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-3">
            Find a topic
          </p>

          <div className="flex flex-col gap-3">
            <div className="relative">
              <i className="ti ti-category absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"></i>
              <select
                value={selectedCategoryIndex ?? ""}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-zinc-300 text-sm appearance-none bg-white"
              >
                <option value="">Choose a category</option>
                {categories.map((cat, index) => (
                  <option key={cat.label} value={index}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {selectedCategory && (
              <div className="relative">
                <i className="ti ti-list-details absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"></i>
                <select
                  value={selectedTopicHref}
                  onChange={(e) => setSelectedTopicHref(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-zinc-300 text-sm appearance-none bg-white"
                >
                  <option value="">Choose a topic</option>
                  {selectedCategory.topics.map((topic) => (
                    <option key={topic.href} value={topic.href}>
                      {topic.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <Link
              href={selectedTopicHref || "#"}
              className={`text-center py-2.5 rounded-lg text-sm font-medium transition-colors ${
                selectedTopicHref
                  ? "bg-viz-default text-white hover:opacity-90"
                  : "bg-zinc-100 text-zinc-400 cursor-not-allowed pointer-events-none"
              }`}
            >
              Open visualizer
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <Link
            href="/algorithms/sorting/bubble-sort"
            className="text-sm text-viz-default hover:underline"
          >
            Or just browse all topics in the sidebar →
          </Link>
        </div>
      </section>

      <section className="px-10 py-10">
        {categories.map((category) => (
          <div key={category.label} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <i className={`ti ${category.icon} text-viz-default text-lg`}></i>
              <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                {category.label}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {category.topics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="border border-zinc-200 rounded-lg p-4 hover:border-viz-default hover:shadow-sm transition-all bg-white flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-viz-default/10 flex items-center justify-center shrink-0">
                    <i className={`ti ${topic.icon} text-viz-default text-lg`}></i>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-0.5">{topic.name}</p>
                    <p className="text-xs text-zinc-500 leading-snug">{topic.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-wrap justify-around gap-6 px-10 py-8 border-t border-zinc-200 bg-zinc-50">
        <Stat icon="ti-list-numbers" value="17" label="Topics covered" />
        <Stat icon="ti-arrows-sort" value="5" label="Sorting algorithms" />
        <Stat icon="ti-box" value="8" label="Data structures" />
        <Stat icon="ti-route" value="2" label="Graph algorithms" />
      </section>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center">
        <i className={`ti ${icon} text-viz-default`}></i>
      </div>
      <div>
        <p className="text-xl font-semibold leading-none">{value}</p>
        <p className="text-xs text-zinc-500">{label}</p>
      </div>
    </div>
  );
}