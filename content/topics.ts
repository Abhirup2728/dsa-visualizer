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
export const selectionSortContent: LearningContent = {
  concept:
    "Selection Sort divides the array into a sorted and an unsorted region. On each pass, it scans the entire unsorted region to find the smallest remaining element, then swaps it into the next position in the sorted region.",
  working: [
    "Assume the first element is the minimum of the unsorted region.",
    "Scan the rest of the unsorted region, comparing each element to the current minimum.",
    "Whenever a smaller element is found, update which index holds the minimum.",
    "After scanning the full unsorted region, swap the minimum into its correct sorted position.",
    "Move the boundary between sorted and unsorted regions forward by one, and repeat.",
  ],
  complexity: {
    best: "O(n²)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
  },
};