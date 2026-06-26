export type SortStep = {
  array: number[];
  comparing: [number, number] | null;
  swapped: boolean;
  sortedIndices: number[];
  highlightRange: [number, number] | null;
  pivotIndex: number | null;
};