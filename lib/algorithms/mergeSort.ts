import { SortStep } from "@/types/algorithm";

export function mergeSortWithSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const array = [...input];
  const sortedIndices: number[] = [];

  function recordStep(
    comparing: [number, number] | null,
    highlightRange: [number, number] | null,
    swapped: boolean
  ) {
    steps.push({
      array: [...array],
      comparing,
      swapped,
      sortedIndices: [...sortedIndices],
      highlightRange,
      pivotIndex: null,
    });
  }

  function mergeSort(start: number, end: number) {
    if (end - start <= 0) return;

    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    merge(start, mid, end);
  }

  function merge(start: number, mid: number, end: number) {
    const left = array.slice(start, mid + 1);
    const right = array.slice(mid + 1, end + 1);
    let i = 0;
    let j = 0;
    let k = start;

    while (i < left.length && j < right.length) {
      recordStep([start + i, mid + 1 + j], [start, end], false);

      if (left[i] <= right[j]) {
        array[k] = left[i];
        i++;
      } else {
        array[k] = right[j];
        j++;
      }
      recordStep(null, [start, end], true);
      k++;
    }

    while (i < left.length) {
      array[k] = left[i];
      recordStep(null, [start, end], true);
      i++;
      k++;
    }

    while (j < right.length) {
      array[k] = right[j];
      recordStep(null, [start, end], true);
      j++;
      k++;
    }

    if (start === 0 && end === array.length - 1) {
      for (let idx = start; idx <= end; idx++) sortedIndices.push(idx);
    }
  }

  mergeSort(0, array.length - 1);

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