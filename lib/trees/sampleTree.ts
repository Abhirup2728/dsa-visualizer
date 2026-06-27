import { TreeNodeData } from "@/types/tree";

export const sampleTree: TreeNodeData[] = [
  { id: 0, value: 50, x: 300, y: 40, left: 1, right: 2 },
  { id: 1, value: 30, x: 180, y: 130, left: 3, right: 4 },
  { id: 2, value: 70, x: 420, y: 130, left: 5, right: 6 },
  { id: 3, value: 20, x: 100, y: 220, left: null, right: null },
  { id: 4, value: 40, x: 260, y: 220, left: null, right: null },
  { id: 5, value: 60, x: 340, y: 220, left: null, right: null },
  { id: 6, value: 80, x: 500, y: 220, left: null, right: null },
];