<div align="center">

# DSA Visualizer

**Interactive platform for learning Data Structures & Algorithms through real-time, controllable visualizations**

[Live Demo](https://dsa-visualizer-abhirup2728.vercel.app) · [Report an Issue](https://github.com/Abhirup2728/dsa-visualizer/issues)

</div>

---

## Overview

DSA Visualizer turns abstract algorithmic concepts into something you can actually watch happen. Pick any of 17 classic data structures and algorithms, then step through their execution with full **Play / Pause / Step / Speed** controls — no external resources needed.

Every topic ships with a Concept explanation, a step-by-step Working breakdown, and a Best/Average/Worst/Space Complexity table, making this a self-contained interview preparation tool as well as a learning aid.

## Features

### Sorting Algorithms
| Algorithm | Best Case | Average Case | Worst Case |
|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | O(n²) |
| Selection Sort | O(n²) | O(n²) | O(n²) |
| Insertion Sort | O(n) | O(n²) | O(n²) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) |

### Searching & Graph Algorithms
- **Linear Search** — O(n)
- **Binary Search** — O(log n)
- **BFS** — level-by-level traversal, O(V + E)
- **DFS** — depth-first traversal, O(V + E)

### Data Structures
Array · Stack · Queue · Linked List · Tree · Binary Search Tree · Heap · Graph

Each structure supports live Insert / Delete / Search / Traverse / Reset, with immediate visual feedback and meaningful error messages on invalid operations (e.g. popping an empty stack).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Visualization | SVG, CSS transitions |
| Deployment | Vercel |

No backend, no database — fully client-side.

## Getting Started

```bash
git clone https://github.com/Abhirup2728/dsa-visualizer.git
cd dsa-visualizer
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure
dsa-visualizer/

├── app/

│   ├── algorithms/

│   │   ├── sorting/         5 sorting algorithm pages

│   │   ├── searching/       Linear & Binary search pages

│   │   └── graph/           BFS & DFS pages

│   └── data-structures/     8 data structure pages

├── components/

│   ├── layout/               Navbar, Sidebar

│   ├── visualizer/            ArrayBar, SearchBar, GraphCanvas, TreeCanvas

│   └── learning/              LearningPanel (Concept / Working / Complexity)

├── lib/

│   ├── algorithms/            Step-generating logic per algorithm

│   ├── dataStructures/        BST and Heap logic

│   └── graphs/                 Sample graph data

├── content/

│   └── topics.ts               All learning content, centralized

└── types/                      Shared TypeScript definitions
## Design Notes

Rather than animating algorithms live, each algorithm runs instantly and records a snapshot at every comparison, swap, or traversal step. The UI then plays back through this pre-computed sequence — the same mechanism powers Play, Pause, Step Forward, and Speed control across every algorithm, including recursive ones like Merge Sort and Quick Sort.

## Author

**Abhirup Gumtya**
[GitHub](https://github.com/Abhirup2728) · [LinkedIn](https://linkedin.com/in/abhirupgumtya) · [Portfolio](https://abhirup-gumtya-portfolio.netlify.app)