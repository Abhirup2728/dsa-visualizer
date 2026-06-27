import { SearchStep } from "@/types/search";

export function binarySearchWithSteps(
  input: number[],
  target: number
): SearchStep[] {
  const sorted = [...input].sort((a, b) => a - b);
  const steps: SearchStep[] = [];
  let low = 0;
  let high = sorted.length - 1;
  const eliminatedIndices: number[] = [];

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    steps.push({
      array: [...sorted],
      currentIndex: mid,
      foundIndex: null,
      eliminatedIndices: [...eliminatedIndices],
    });

    if (sorted[mid] === target) {
      steps.push({
        array: [...sorted],
        currentIndex: null,
        foundIndex: mid,
        eliminatedIndices: [...eliminatedIndices],
      });
      return steps;
    }

    if (sorted[mid] < target) {
      for (let k = low; k <= mid; k++) eliminatedIndices.push(k);
      low = mid + 1;
    } else {
      for (let k = mid; k <= high; k++) eliminatedIndices.push(k);
      high = mid - 1;
    }
  }

  steps.push({
    array: [...sorted],
    currentIndex: null,
    foundIndex: null,
    eliminatedIndices: [...eliminatedIndices],
  });

  return steps;
}