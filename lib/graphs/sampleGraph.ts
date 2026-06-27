import { GraphData } from "@/types/graph";

export const sampleGraph: GraphData = {
  nodes: [
    { id: 0, x: 300, y: 40 },
    { id: 1, x: 150, y: 140 },
    { id: 2, x: 450, y: 140 },
    { id: 3, x: 80, y: 260 },
    { id: 4, x: 220, y: 260 },
    { id: 5, x: 380, y: 260 },
    { id: 6, x: 520, y: 260 },
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 2, to: 6 },
  ],
}