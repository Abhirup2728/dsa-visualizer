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
export const queueContent: LearningContent = {
  concept:
    "Queue is a linear data structure that follows the First In, First Out (FIFO) principle, meaning the first element inserted into the queue is the first one to be removed. Elements are inserted at the rear (enqueue) and removed from the front (dequeue), ensuring that data is processed in the same order in which it arrives. In addition to the enqueue and dequeue operations, a queue also supports front (or peek) to view the first element without removing it and isEmpty or isFull operations in certain implementations. Queues can be implemented using arrays or linked lists and have several variations, including Circular Queue, Priority Queue, and Deque (Double-Ended Queue). They are widely used in CPU scheduling, printer spooling, process scheduling in operating systems, network packet handling, breadth-first search (BFS), buffering, task scheduling, and simulation systems where requests must be processed in the order they are received. The basic queue operations—enqueue, dequeue, front (peek), and rear—are performed in O(1) time in an efficient implementation, while the space complexity is O(n), where n is the number of elements stored in the queue. Due to its orderly processing mechanism, the queue is one of the most important data structures in computer science and is extensively used in real-world applications that require sequential processing of data.",
  working: [
    "Enqueue adds a new element to the rear of the queue.",
    "Dequeue removes and returns the element at the front of the queue.",
    "The front element is always the one that has been waiting the longest.",
    "Attempting to dequeue from an empty queue is an invalid operation and produces an error.",
  ],
  complexity: {
    best: "O(1)",
    average: "O(1)",
    worst: "O(1)",
    space: "O(n)",
  },
};
export const linkedListContent: LearningContent = {
  concept:
    "Linked List is a dynamic linear data structure consisting of a sequence of nodes, where each node contains two parts: a data field that stores the value and a link (or pointer) that stores the address of the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations, allowing them to grow or shrink dynamically without requiring a fixed size. Since elements are connected through pointers, insertion and deletion operations can be performed efficiently without shifting other elements, making them particularly useful when the size of the data changes frequently. However, accessing a specific element requires traversing the list from the beginning, resulting in slower access compared to arrays. There are several types of linked lists, including Singly Linked List, Doubly Linked List, and Circular Linked List, each designed for different applications. Linked lists are widely used in implementing stacks, queues, hash tables, adjacency lists for graphs, memory management, and dynamic memory allocation. The time complexity for insertion and deletion at known positions is O(1), while searching and accessing elements require O(n) time. The space complexity is O(n), with additional memory required to store pointers along with the data. Due to their flexibility and efficient insertion and deletion operations, linked lists are one of the most important dynamic data structures in computer science.",
  working: [
    "Each node stores a value and a pointer to the next node in the sequence.",
    "Insert creates a new node and adjusts pointers to link it into the correct position.",
    "Delete removes a node and reconnects the pointers of its neighbors.",
    "Search traverses the list from the head, following pointers until the value is found.",
    "The last node points to null, marking the end of the list.",
  ],
  complexity: {
    best: "O(1)",
    average: "O(n)",
    worst: "O(n)",
    space: "O(n)",
  },
};
export const treeContent: LearningContent = {
  concept:
    "Tree is a hierarchical, non-linear data structure consisting of a collection of nodes connected by edges, used to represent relationships between data elements. The topmost node is called the root, and each node may have zero or more child nodes, while a node with no children is called a leaf node. Every child node has exactly one parent, and there is a unique path from the root to every node, ensuring that a tree contains no cycles. Trees are widely used to organize and manage hierarchical data efficiently, such as file systems, organizational structures, XML/HTML documents, and database indexes. Common types of trees include Binary Tree, Binary Search Tree (BST), AVL Tree, Heap, B-Tree, and Trie, each designed for specific applications. Tree traversal techniques such as Preorder, Inorder, Postorder, and Level Order Traversal are used to visit and process nodes in different orders. The time complexity of search, insertion, and deletion depends on the type and balance of the tree; for example, a balanced binary search tree performs these operations in O(log n) time, while an unbalanced tree may require O(n) time. The space complexity of a tree is O(n), where n is the number of nodes. Due to their hierarchical structure, efficient searching capabilities, and versatility, trees are among the most important data structures used in computer science, databases, compilers, operating systems, and networking applications.",
  working: [
    "Inorder traversal visits the left subtree, then the current node, then the right subtree.",
    "Preorder traversal visits the current node first, then the left subtree, then the right subtree.",
    "Postorder traversal visits the left subtree, then the right subtree, then the current node last.",
    "Each traversal method is typically implemented recursively, processing subtrees before or after the current node depending on the order.",
  ],
  complexity: {
    best: "O(n)",
    average: "O(n)",
    worst: "O(n)",
    space: "O(h)",
  },
};
export const bstContent: LearningContent = {
  concept:
    "Binary Search Tree (BST) is a specialized type of binary tree in which each node contains at most two children, known as the left child and the right child, and follows a specific ordering property: all values in the left subtree of a node are smaller than the node's value, while all values in the right subtree are greater than the node's value. This property is maintained recursively for every node in the tree, enabling efficient searching, insertion, and deletion operations. A BST allows data to be stored in a sorted manner, and an Inorder Traversal of a BST visits the elements in ascending order. The efficiency of a BST depends on its height; in a balanced BST, search, insertion, and deletion operations take O(log n) time, whereas in the worst case, when the tree becomes skewed, these operations degrade to O(n) time. The space complexity of a BST is O(n), where n is the number of nodes. Binary Search Trees are widely used in database indexing, dictionaries, symbol tables, dynamic sets, searching applications, and other systems that require efficient storage, retrieval, and maintenance of sorted data.",
  working: [
    "Insert compares the new value to each node, going left if smaller or right if larger, until an empty spot is found.",
    "Search follows the same left/right comparison path until the value is found or a null position is reached.",
    "Delete locates the node, then replaces it with its in-order successor if it has two children.",
    "Because of the ordering property, each operation only needs to explore one path from the root, not the entire tree.",
  ],
  complexity: {
    best: "O(log n)",
    average: "O(log n)",
    worst: "O(n)",
    space: "O(n)",
  },
};
export const heapContent: LearningContent = {
  concept:
    "Heap is a specialized tree-based data structure that satisfies the heap property, where each parent node is either greater than or equal to its children (Max Heap) or less than or equal to its children (Min Heap). A heap is typically implemented as a complete binary tree, meaning that all levels are completely filled except possibly the last level, which is filled from left to right. Unlike a Binary Search Tree, a heap does not maintain a sorted order among sibling nodes; it only guarantees the heap property between a parent and its children. The root node always contains the largest element in a Max Heap or the smallest element in a Min Heap, allowing efficient access to the highest- or lowest-priority element. Common operations include insertion, deletion of the root, and heapify, each having a time complexity of O(log n), while accessing the root element takes O(1) time. The space complexity of a heap is O(n). Heaps are widely used to implement Priority Queues, Heap Sort, graph algorithms such as Dijkstra's Algorithm and Prim's Algorithm, scheduling systems, and memory management. Due to their efficient handling of priority-based operations, heaps are one of the most important data structures in computer science and software development.",
  working: [
    "Insert adds the new value at the end of the array, then repeatedly swaps it with its parent until the heap property is restored (bubble up).",
    "Extract Min removes the root, moves the last element to the root position, then repeatedly swaps it with the smaller child until the heap property is restored (bubble down).",
    "A node at array index i has its left child at index 2i+1 and right child at index 2i+2.",
    "The dual array/tree view shows that a heap is really just an array, with the tree structure implied by index relationships.",
  ],
  complexity: {
    best: "O(1)",
    average: "O(log n)",
    worst: "O(log n)",
    space: "O(n)",
  },
};