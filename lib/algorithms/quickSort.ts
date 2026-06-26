import { SortStep } from "@/types/algorithm";

export function quickSortWithSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const array = [...input];
  const sortedIndices: number[] = [];

  function recordStep(
    comparing: [number, number] | null,
    pivotIndex: number | null,
    swapped: boolean
  ) {
    steps.push({
      array: [...array],
      comparing,
      swapped,
      sortedIndices: [...sortedIndices],
      highlightRange: null,
      pivotIndex,
    });
  }

  function partition(low: number, high: number): number {
    const pivotValue = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      recordStep([j, high], high, false);

      if (array[j] < pivotValue) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        recordStep([i, j], high, true);
      }
    }

    i++;
    [array[i], array[high]] = [array[high], array[i]];
    recordStep([i, high], i, true);

    sortedIndices.push(i);
    return i;
  }

  function quickSort(low: number, high: number) {
    if (low < high) {
      const pivotFinalIndex = partition(low, high);
      quickSort(low, pivotFinalIndex - 1);
      quickSort(pivotFinalIndex + 1, high);
    } else if (low === high) {
      sortedIndices.push(low);
    }
  }

  quickSort(0, array.length - 1);

  const allSorted = Array.from({ length: array.length }, (_, k) => k);
  steps.push({
    array: [...array],
    comparing: null,
    swapped: false,
    sortedIndices: allSorted,
    highlightRange: null,
    pivotIndex: null,
  });

  return steps;
}