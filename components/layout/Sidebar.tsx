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
}: {
  title: string;
  items: { name: string; href: string }[];
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
  return (
    <aside className="w-56 border-r border-zinc-200 bg-zinc-50 p-3 overflow-y-auto shrink-0">
      <SidebarSection title="Data Structures" items={dataStructures} />
      <SidebarSection title="Sorting" items={sortingAlgorithms} />
      <SidebarSection title="Searching" items={searchingAlgorithms} />
      <SidebarSection title="Graph Algorithms" items={graphAlgorithms} />
    </aside>
  );
}