"use client";

import { useState } from "react";
import Link from "next/link";

const dataStructures = [
  { name: "Array", href: "/data-structures/array" },
  { name: "Stack", href: "/data-structures/stack" },
  { name: "Queue", href: "/data-structures/queue" },
  { name: "Linked List", href: "/data-structures/linked-list" },
  { name: "Tree", href: "/data-structures/tree" },
  { name: "Binary Search Tree", href: "/data-structures/bst" },
  { name: "Heap", href: "/data-structures/heap" },
  { name: "Graph", href: "/data-structures/graph" },
];

const sortingAlgorithms = [
  { name: "Bubble Sort", href: "/algorithms/sorting/bubble-sort" },
  { name: "Selection Sort", href: "/algorithms/sorting/selection-sort" },
  { name: "Insertion Sort", href: "/algorithms/sorting/insertion-sort" },
  { name: "Merge Sort", href: "/algorithms/sorting/merge-sort" },
  { name: "Quick Sort", href: "/algorithms/sorting/quick-sort" },
];

const searchingAlgorithms = [
  { name: "Linear Search", href: "/algorithms/searching/linear-search" },
  { name: "Binary Search", href: "/algorithms/searching/binary-search" },
];

const graphAlgorithms = [
  { name: "BFS", href: "/algorithms/graph/bfs" },
  { name: "DFS", href: "/algorithms/graph/dfs" },
];

function SidebarSection({
  title,
  items,
  onLinkClick,
}: {
  title: string;
  items: { name: string; href: string }[];
  onLinkClick: () => void;
}) {
  return (
    <div className="mb-5">
      <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-2 px-2">
        {title}
      </p>
      <nav className="flex flex-col gap-0.5">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onLinkClick}
            className="text-sm text-zinc-700 hover:bg-zinc-100 rounded px-2 py-1.5 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Hamburger button - mobile only */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-3 left-3 z-30 w-9 h-9 flex items-center justify-center rounded-md border border-zinc-200 bg-white shadow-sm"
        aria-label="Open menu"
      >
        <i className="ti ti-menu-2 text-lg"></i>
      </button>

      {/* Dark overlay - mobile only, shown when menu is open */}
      {isOpen && (
        <div
          onClick={close}
          className="md:hidden fixed inset-0 bg-black/40 z-20"
        />
      )}

      {/* Sidebar itself */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-full md:h-auto z-30
          w-64 md:w-56 border-r border-zinc-200 bg-zinc-50 p-3 overflow-y-auto shrink-0
          transform transition-transform duration-200
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <button
          onClick={close}
          className="md:hidden mb-3 w-8 h-8 flex items-center justify-center rounded hover:bg-zinc-200"
          aria-label="Close menu"
        >
          <i className="ti ti-x text-lg"></i>
        </button>

        <SidebarSection title="Data Structures" items={dataStructures} onLinkClick={close} />
        <SidebarSection title="Sorting" items={sortingAlgorithms} onLinkClick={close} />
        <SidebarSection title="Searching" items={searchingAlgorithms} onLinkClick={close} />
        <SidebarSection title="Graph Algorithms" items={graphAlgorithms} onLinkClick={close} />
      </aside>
    </>
  );
}