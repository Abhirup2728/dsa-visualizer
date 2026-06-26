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
export const mergeSortContent: LearningContent = {
  concept:
    "Merge Sort is an efficient divide-and-conquer sorting algorithm that recursively divides an array into two equal halves until each subarray contains only one element. Since a single-element array is already sorted, the algorithm then repeatedly merges the subarrays by comparing their elements and arranging them in the correct order, producing larger sorted subarrays until the entire array is sorted. Merge Sort guarantees a time complexity of O(n log n) in the best, average, and worst cases, making it much more efficient than simple sorting algorithms such as Bubble Sort and Insertion Sort for large datasets. It is also a stable sorting algorithm, meaning that equal elements preserve their original relative order. However, Merge Sort is not an in-place algorithm, as it requires O(n) additional memory to store temporary arrays during the merging process. Due to its predictable performance and efficiency, Merge Sort is widely used for sorting large datasets, linked lists, and in applications where stability is important.",
  working: [
    "Divide the array into two halves, splitting at the midpoint.",
    "Recursively apply the same splitting process to each half until every piece has one element.",
    "Merge two sorted halves together by repeatedly comparing their front elements and placing the smaller one next.",
    "Continue merging pairs of sorted pieces back together, doubling in size each time.",
    "The process completes when the entire array has been merged back into one fully sorted sequence.",
  ],
  complexity: {
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n log n)",
    space: "O(n)",
  },
};
export const quickSortContent: LearningContent = {
  concept:
    "Quick Sort is a highly efficient divide-and-conquer sorting algorithm that works by selecting a pivot element from the array and partitioning the remaining elements into two groups: those smaller than the pivot and those greater than the pivot. After partitioning, the pivot is placed in its correct sorted position, and the same process is recursively applied to the left and right subarrays until the entire array is sorted. Quick Sort is generally an in-place sorting algorithm, requiring only O(log n) auxiliary space for the recursion stack on average, but it is not stable, as equal elements may not retain their original relative order. Its average and best-case time complexity is O(n log n), while its worst-case time complexity is O(n²), which occurs when poor pivot selection leads to highly unbalanced partitions. Despite this worst-case possibility, Quick Sort is one of the fastest sorting algorithms in practice due to its low overhead, excellent cache performance, and efficient partitioning strategy, making it widely used for sorting large arrays.",
  working: [
    "Choose the last element of the current range as the pivot.",
    "Walk through the range, moving elements smaller than the pivot to the left side.",
    "After scanning the full range, swap the pivot into its correct final position.",
    "Recursively apply the same partitioning process to the elements left of the pivot.",
    "Recursively apply the same partitioning process to the elements right of the pivot.",
    "The array becomes fully sorted once every partition has been processed down to single elements.",
  ],
  complexity: {
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n²)",
    space: "O(log n)",
  },
};