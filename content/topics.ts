import { LearningContent } from "@/types/learningContent";

export const bubbleSortContent: LearningContent = {
  concept:
    "Bubble Sort repeatedly steps through the array, comparing each pair of adjacent elements and swapping them if they are in the wrong order. Larger elements gradually move toward the end of the array with each pass, like bubbles rising to the surface.",
  working: [
    "Start at the beginning of the array and compare the first two elements.",
    "If the first element is greater than the second, swap them.",
    "Move to the next pair and repeat the comparison until the end of the array.",
    "After one full pass, the largest unsorted element is guaranteed to be in its correct final position.",
    "Repeat the entire process for the remaining unsorted elements, one fewer each time.",
    "Stop early if a full pass completes with no swaps — the array is already sorted.",
  ],
  complexity: {
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
  },
};