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
export const linearSearchContent: LearningContent = {
  concept:
    "Linear Search is the simplest searching algorithm used to find a specific element in a collection of data. It works by examining each element sequentially from the beginning of the array or list and comparing it with the target value until the desired element is found or the end of the collection is reached. If the target element is found, the algorithm returns its position; otherwise, it reports that the element is not present. Linear Search does not require the data to be sorted, making it suitable for searching in both sorted and unsorted datasets. Its time complexity is O(1) in the best case (when the element is found at the first position) and O(n) in the average and worst cases (when the element is located at the end or is absent). It requires O(1) extra space, making it a simple and memory-efficient algorithm for small datasets or unsorted collections.",
  working: [
    "Start at the first element of the array.",
    "Compare the current element to the target value.",
    "If they match, the search is complete and the index is returned.",
    "If they do not match, move to the next element and repeat.",
    "If the end of the array is reached with no match, the target is not present.",
  ],
  complexity: {
    best: "O(1)",
    average: "O(n)",
    worst: "O(n)",
    space: "O(1)",
  },
};
export const binarySearchContent: LearningContent = {
  concept:
    "Binary Search is an efficient searching algorithm used to find a specific element in a sorted array or list. It works by repeatedly dividing the search space into two halves and comparing the target element with the middle element of the current range. If the target matches the middle element, the search is successful. If the target is smaller, the search continues in the left half; otherwise, it continues in the right half. This process is repeated until the element is found or the search range becomes empty, indicating that the element is not present. Binary Search requires the data to be sorted before searching, which is its primary limitation. Its time complexity is O(1) in the best case (when the target is the middle element), and O(log n) in the average and worst cases, making it significantly faster than Linear Search for large datasets. It requires O(1) extra space in the iterative implementation (or O(log n) in the recursive implementation due to the recursion stack), making it one of the most efficient searching algorithms for sorted data.",
  working: [
    "Confirm the array is sorted, since Binary Search depends on this.",
    "Check the middle element of the current search range.",
    "If it matches the target, the search is complete.",
    "If the target is smaller, discard the right half and search only the left half.",
    "If the target is larger, discard the left half and search only the right half.",
    "Repeat until the target is found or the search range becomes empty.",
  ],
  complexity: {
    best: "O(1)",
    average: "O(log n)",
    worst: "O(log n)",
    space: "O(1)",
  },
};
export const bfsContent: LearningContent = {
  concept:
    "Breadth-First Search (BFS) is a graph traversal algorithm that explores the vertices of a graph level by level, starting from a specified source vertex. It first visits the starting vertex, then all of its adjacent (neighboring) vertices, followed by the neighbors of those vertices, continuing until all reachable vertices have been visited. BFS uses a queue (FIFO) data structure to keep track of the next vertex to visit and a visited array or set to ensure that each vertex is processed only once. It is widely used for finding the shortest path in unweighted graphs, checking graph connectivity, traversing trees level by level, and solving network and routing problems. The time complexity of BFS is O(V + E), where V is the number of vertices and E is the number of edges, while its space complexity is O(V) due to the storage required for the queue and the visited array.",
  working: [
    "Start at the chosen node and mark it as visited.",
    "Add the starting node to a queue.",
    "Remove a node from the front of the queue and record it as visited.",
    "Find all unvisited neighbors of that node and add them to the back of the queue.",
    "Repeat until the queue is empty, meaning every reachable node has been visited.",
  ],
  complexity: {
    best: "O(V + E)",
    average: "O(V + E)",
    worst: "O(V + E)",
    space: "O(V)",
  },
};

export const dfsContent: LearningContent = {
  concept:
    "Depth-First Search (DFS) is a graph traversal algorithm that explores a graph by visiting a vertex and then recursively exploring as far as possible along each branch before backtracking. Starting from a specified source vertex, DFS visits an unvisited adjacent vertex and continues this process until it reaches a vertex with no unvisited neighbors. It then backtracks to the previous vertex to explore any remaining unexplored paths. DFS can be implemented using recursion or an explicit stack (LIFO) data structure, along with a visited array or set to prevent revisiting vertices. It is widely used for graph traversal, detecting cycles, finding connected components, performing topological sorting, solving maze and pathfinding problems, and generating spanning trees. The time complexity of DFS is O(V + E), where V is the number of vertices and E is the number of edges, while its space complexity is O(V) due to the recursion stack or explicit stack and the visited array.",
  working: [
    "Start at the chosen node and mark it as visited.",
    "Pick an unvisited neighbor and move to it, marking it as visited.",
    "Continue moving to unvisited neighbors as deep as possible along this path.",
    "When no unvisited neighbors remain, backtrack to the previous node.",
    "Repeat until backtracking returns all the way to the start with no unvisited nodes left.",
  ],
  complexity: {
    best: "O(V + E)",
    average: "O(V + E)",
    worst: "O(V + E)",
    space: "O(V)",
  },
};
export const stackContent: LearningContent = {
  concept:
    "Stack is a linear data structure that follows the Last In, First Out (LIFO) principle, meaning the last element inserted into the stack is the first one to be removed. Elements are added to the stack using the push operation and removed using the pop operation, while the peek (or top) operation allows access to the top element without removing it. Since all insertions and deletions occur at one end, called the top of the stack, these operations are performed efficiently. Stacks are widely used in function call management, recursion, expression evaluation, syntax parsing, backtracking algorithms, undo/redo operations in text editors, browser history navigation, and Depth-First Search (DFS). The basic stack operations—push, pop, and peek—have a time complexity of O(1), while the space complexity is O(n), where n is the number of elements stored in the stack.",
  working: [
    "Push adds a new element to the top of the stack.",
    "Pop removes and returns the element currently at the top of the stack.",
    "Peek (optional) views the top element without removing it.",
    "Attempting to pop from an empty stack is an invalid operation and produces an error.",
    "Only the top element is ever directly accessible — elements below it must wait their turn.",
  ],
  complexity: {
    best: "O(1)",
    average: "O(1)",
    worst: "O(1)",
    space: "O(n)",
  },
};
export const arrayContent: LearningContent = {
  concept:
    "Array is a fundamental linear data structure used to store a collection of elements of the same data type in a contiguous block of memory. Each element in an array is assigned a unique index, typically starting from 0, which allows direct and efficient access to any element using its index. Because the memory locations are contiguous, arrays provide constant-time access (O(1)) to elements, making them highly efficient for retrieving and updating data. Arrays can be either one-dimensional or multidimensional (such as two-dimensional arrays used to represent matrices). However, their size is usually fixed at the time of creation, meaning they cannot be easily resized without creating a new array. Insertion and deletion operations in the middle of an array require shifting elements, resulting in a time complexity of O(n), whereas accessing or modifying an element by index takes O(1) time. Arrays are widely used as the foundation for many other data structures, including stacks, queues, heaps, hash tables, and matrices, and they play a crucial role in implementing algorithms that require fast random access to data. Their simplicity, memory efficiency, and predictable performance make arrays one of the most commonly used data structures in computer science and software development.",
  working: [
    "Insert adds a new element at a specified index, shifting later elements to the right.",
    "Delete removes the element at a specified index, shifting later elements to the left.",
    "Search scans the array to find the index of a target value.",
    "Traverse visits every element of the array in order, from the first index to the last.",
    "Accessing an element by its index is a constant-time operation, since its memory location can be calculated directly.",
  ],
  complexity: {
    best: "O(1)",
    average: "O(n)",
    worst: "O(n)",
    space: "O(n)",
  },
};