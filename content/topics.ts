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
export const insertionSortContent: LearningContent = {
  concept:
    "Insertion Sort is a simple comparison-based sorting algorithm that builds the sorted array one element at a time. It works by assuming that the first element is already sorted and then repeatedly selecting the next element (called the key) from the unsorted portion of the array. The algorithm compares the key with the elements in the sorted portion, shifts all larger elements one position to the right, and inserts the key into its correct position. This process continues until all elements have been inserted into their appropriate positions, resulting in a fully sorted array. Insertion Sort is an in-place algorithm, requiring only O(1) extra space, and it is stable, meaning that equal elements maintain their original relative order. Its time complexity is O(n) in the best case (when the array is already sorted) and O(n²) in the average and worst cases, making it suitable for sorting small datasets or nearly sorted arrays.",
  working: [
    "Treat the first element as a sorted region of size one.",
    "Take the next element and compare it to the elements in the sorted region, moving from right to left.",
    "Shift any element greater than the current value one position to the right.",
    "Stop shifting once an element smaller than or equal to the current value is found, or the start of the array is reached.",
    "Insert the current value into the gap created by the shifting.",
    "Repeat for every remaining element until the whole array is sorted.",
  ],
  complexity: {
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
  },
};