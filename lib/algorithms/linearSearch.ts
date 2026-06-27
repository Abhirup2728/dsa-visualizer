import { SearchStep } from "@/types/search";

export function linearSearchWithSteps(
  input: number[],
  target: number
): SearchStep[] {
  const steps: SearchStep[] = [];
  const eliminatedIndices: number[] = [];

  for (let i = 0; i < input.length; i++) {
    steps.push({
      array: [...input],
      currentIndex: i,
      foundIndex: null,
      eliminatedIndices: [...eliminatedIndices],
    });

    if (input[i] === target) {
      steps.push({
        array: [...input],
        currentIndex: null,
        foundIndex: i,
        eliminatedIndices: [...eliminatedIndices],
      });
      return steps;
    }

    eliminatedIndices.push(i);
  }

  steps.push({
    array: [...input],
    currentIndex: null,
    foundIndex: null,
    eliminatedIndices: [...eliminatedIndices],
  });

  return steps;
}