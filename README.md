# DSA Visualizer

An interactive web platform for learning Data Structures and Algorithms through real-time, controllable visualizations. Built to turn abstract algorithmic concepts into something you can actually watch happen, step by step.

**Live demo:** https://dsa-visualizer-abhirup2728.vercel.app

Developed by Abhirup Gumtya

---

## What this is

DSA Visualizer lets you pick any of 17 classic data structures and algorithms, then watch them execute with full Play / Pause / Step / Speed controls. Every topic includes a plain-English explanation, a step-by-step breakdown of how it works, and its time/space complexity — so the platform doubles as a self-contained interview prep tool, with no external resources needed.

## Features

- **5 sorting algorithms**: Bubble, Selection, Insertion, Merge, Quick Sort
- **2 searching algorithms**: Linear Search, Binary Search
- **2 graph algorithms**: BFS, DFS, with live traversal animation on an interactive graph
- **8 data structures**: Array, Stack, Queue, Linked List, Tree, Binary Search Tree, Heap, Graph — each with full Insert / Delete / Search / Traverse / Reset support and real-time visual feedback
- Every topic includes a Concept / Working / Complexity learning panel
- Invalid operations (e.g. popping an empty stack) show clear, immediate feedback
- Fully responsive layout, built with accessibility in mind (keyboard navigation, color-independent highlighting)

## Tech stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Visualization**: SVG-based rendering, plain CSS transitions
- **Deployment**: Vercel

No backend or database — the entire application runs client-side in the browser.

## Getting started locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/Abhirup2728/dsa-visualizer.git
cd dsa-visualizer
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure