import { SortStep } from "@/types/algorithm";

export function insertionSortWithSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const array = [...input];
  const n = array.length;

  steps.push({
    array: [...array],
    comparing: null,
    swapped: false,
    sortedIndices: [0],
  });

  for (let i = 1; i < n; i++) {
    const current = array[i];
    let j = i - 1;

    while (j >= 0) {
      steps.push({
        array: [...array],
        comparing: [j, j + 1],
        swapped: false,
        sortedIndices: Array.from({ length: i }, (_, k) => k),
      });

      if (array[j] > current) {
        array[j + 1] = array[j];
        j--;

        steps.push({
          array: [...array],
          comparing: [j + 1, j + 2],
          swapped: true,
          sortedIndices: Array.from({ length: i }, (_, k) => k),
        });
      } else {
        break;
      }
    }

    array[j + 1] = current;
  }

  const allSorted = Array.from({ length: n }, (_, k) => k);
  steps.push({
    array: [...array],
    comparing: null,
    swapped: false,
    sortedIndices: allSorted,
  });

  return steps;
}