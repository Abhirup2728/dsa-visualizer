import { SortStep } from "@/types/algorithm";

export function selectionSortWithSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const array = [...input];
  const n = array.length;
  const sortedIndices: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      steps.push({
        array: [...array],
        comparing: [minIndex, j],
        swapped: false,
        sortedIndices: [...sortedIndices],
      });

      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      steps.push({
        array: [...array],
        comparing: [i, minIndex],
        swapped: true,
        sortedIndices: [...sortedIndices],
      });
    }

    sortedIndices.push(i);
  }

  sortedIndices.push(n - 1);
  steps.push({
    array: [...array],
    comparing: null,
    swapped: false,
    sortedIndices: [...sortedIndices],
  });

  return steps;
}