import { SortStep } from "@/types/algorithm";

export function bubbleSortWithSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const array = [...input];
  const n = array.length;
  const sortedIndices: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    let swappedThisPass = false;

    for (let j = 0; j < n - 1 - i; j++) {
      steps.push({
        array: [...array],
        comparing: [j, j + 1],
        swapped: false,
        sortedIndices: [...sortedIndices],
      });

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swappedThisPass = true;

        steps.push({
          array: [...array],
          comparing: [j, j + 1],
          swapped: true,
          sortedIndices: [...sortedIndices],
        });
      }
    }

    sortedIndices.unshift(n - 1 - i);

    if (!swappedThisPass) break;
  }

  sortedIndices.length = 0;
  for (let k = 0; k < n; k++) sortedIndices.push(k);
  steps.push({
    array: [...array],
    comparing: null,
    swapped: false,
    sortedIndices: [...sortedIndices],
  });

  return steps;
}