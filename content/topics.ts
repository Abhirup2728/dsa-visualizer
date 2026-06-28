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
  code: {
    cpp: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}`,
    python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr`,
    java: `void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        boolean swapped = false;
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}`,
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
  code: {
    cpp: `void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            swap(arr[i], arr[minIndex]);
        }
    }
}`,
    python: `def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr`,
    java: `void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}`,
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
  code: {
    cpp: `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int current = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}`,
    python: `def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        current = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > current:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = current
    return arr`,
    java: `void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int current = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}`,
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
   code: {
    cpp: `void merge(int arr[], int low, int mid, int high) {
    vector<int> left(arr + low, arr + mid + 1);
    vector<int> right(arr + mid + 1, arr + high + 1);
    int i = 0, j = 0, k = low;

    while (i < left.size() && j < right.size()) {
        arr[k++] = (left[i] <= right[j]) ? left[i++] : right[j++];
    }
    while (i < left.size()) arr[k++] = left[i++];
    while (j < right.size()) arr[k++] = right[j++];
}

void mergeSort(int arr[], int low, int high) {
    if (low >= high) return;
    int mid = (low + high) / 2;
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}`,
    python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result`,
    java: `void mergeSort(int[] arr, int low, int high) {
    if (low >= high) return;
    int mid = (low + high) / 2;
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

void merge(int[] arr, int low, int mid, int high) {
    int[] left = Arrays.copyOfRange(arr, low, mid + 1);
    int[] right = Arrays.copyOfRange(arr, mid + 1, high + 1);
    int i = 0, j = 0, k = low;

    while (i < left.length && j < right.length) {
        arr[k++] = (left[i] <= right[j]) ? left[i++] : right[j++];
    }
    while (i < left.length) arr[k++] = left[i++];
    while (j < right.length) arr[k++] = right[j++];
}`,
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
  code: {
    cpp: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}`,
    python: `def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pivot_index = partition(arr, low, high)
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)`,
    java: `int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}`,
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
  code: {
    cpp: `int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`,
    python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
    java: `int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`,
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
  code: {
    cpp: `int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;

    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`,
    python: `def binary_search(arr, target):
    low, high = 0, len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`,
    java: `int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;

    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`,
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
  code: {
    cpp: `void bfs(unordered_map<int, vector<int>>& adjList, int start) {
    queue<int> q;
    unordered_set<int> visited;

    q.push(start);
    visited.insert(start);

    while (!q.empty()) {
        int current = q.front();
        q.pop();
        cout << current << " ";

        for (int neighbor : adjList[current]) {
            if (visited.find(neighbor) == visited.end()) {
                visited.insert(neighbor);
                q.push(neighbor);
            }
        }
    }
}`,
    python: `from collections import deque

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    order = []

    while queue:
        current = queue.popleft()
        order.append(current)

        for neighbor in graph[current]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return order`,
    java: `void bfs(Map<Integer, List<Integer>> adjList, int start) {
    Queue<Integer> queue = new LinkedList<>();
    Set<Integer> visited = new HashSet<>();

    queue.add(start);
    visited.add(start);

    while (!queue.isEmpty()) {
        int current = queue.poll();
        System.out.print(current + " ");

        for (int neighbor : adjList.get(current)) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor);
                queue.add(neighbor);
            }
        }
    }
}`,
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
  code: {
    cpp: `void dfs(unordered_map<int, vector<int>>& adjList, int current, unordered_set<int>& visited) {
    visited.insert(current);
    cout << current << " ";

    for (int neighbor : adjList[current]) {
        if (visited.find(neighbor) == visited.end()) {
            dfs(adjList, neighbor, visited);
        }
    }
}`,
    python: `def dfs(graph, current, visited=None, order=None):
    if visited is None:
        visited = set()
        order = []

    visited.add(current)
    order.append(current)

    for neighbor in graph[current]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited, order)

    return order`,
    java: `void dfs(Map<Integer, List<Integer>> adjList, int current, Set<Integer> visited) {
    visited.add(current);
    System.out.print(current + " ");

    for (int neighbor : adjList.get(current)) {
        if (!visited.contains(neighbor)) {
            dfs(adjList, neighbor, visited);
        }
    }
}`,
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
  code: {
    cpp: `class Stack {
    vector<int> items;
public:
    void push(int value) {
        items.push_back(value);
    }

    int pop() {
        if (items.empty()) throw runtime_error("Stack is empty");
        int top = items.back();
        items.pop_back();
        return top;
    }

    int peek() {
        if (items.empty()) throw runtime_error("Stack is empty");
        return items.back();
    }

    bool isEmpty() {
        return items.empty();
    }
};`,
    python: `class Stack:
    def __init__(self):
        self.items = []

    def push(self, value):
        self.items.append(value)

    def pop(self):
        if not self.items:
            raise IndexError("Stack is empty")
        return self.items.pop()

    def peek(self):
        if not self.items:
            raise IndexError("Stack is empty")
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0`,
    java: `class Stack {
    private List<Integer> items = new ArrayList<>();

    public void push(int value) {
        items.add(value);
    }

    public int pop() {
        if (items.isEmpty()) throw new RuntimeException("Stack is empty");
        return items.remove(items.size() - 1);
    }

    public int peek() {
        if (items.isEmpty()) throw new RuntimeException("Stack is empty");
        return items.get(items.size() - 1);
    }

    public boolean isEmpty() {
        return items.isEmpty();
    }
}`,
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
  code: {
    cpp: `void insertAt(int arr[], int& n, int index, int value) {
    for (int i = n; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = value;
    n++;
}

void deleteAt(int arr[], int& n, int index) {
    for (int i = index; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    n--;
}

int search(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`,
    python: `def insert_at(arr, index, value):
    arr.insert(index, value)
    return arr

def delete_at(arr, index):
    arr.pop(index)
    return arr

def search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
    java: `void insertAt(int[] arr, int size, int index, int value) {
    for (int i = size; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = value;
}

void deleteAt(int[] arr, int size, int index) {
    for (int i = index; i < size - 1; i++) {
        arr[i] = arr[i + 1];
    }
}

int search(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`,
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
  code: {
    cpp: `class Queue {
    deque<int> items;
public:
    void enqueue(int value) {
        items.push_back(value);
    }

    int dequeue() {
        if (items.empty()) throw runtime_error("Queue is empty");
        int front = items.front();
        items.pop_front();
        return front;
    }

    int peek() {
        if (items.empty()) throw runtime_error("Queue is empty");
        return items.front();
    }

    bool isEmpty() {
        return items.empty();
    }
};`,
    python: `from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()

    def enqueue(self, value):
        self.items.append(value)

    def dequeue(self):
        if not self.items:
            raise IndexError("Queue is empty")
        return self.items.popleft()

    def peek(self):
        if not self.items:
            raise IndexError("Queue is empty")
        return self.items[0]

    def is_empty(self):
        return len(self.items) == 0`,
    java: `class Queue {
    private LinkedList<Integer> items = new LinkedList<>();

    public void enqueue(int value) {
        items.addLast(value);
    }

    public int dequeue() {
        if (items.isEmpty()) throw new RuntimeException("Queue is empty");
        return items.removeFirst();
    }

    public int peek() {
        if (items.isEmpty()) throw new RuntimeException("Queue is empty");
        return items.getFirst();
    }

    public boolean isEmpty() {
        return items.isEmpty();
    }
}`,
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
  code: {
    cpp: `struct Node {
    int value;
    Node* next;
    Node(int val) : value(val), next(nullptr) {}
};

class LinkedList {
    Node* head = nullptr;
public:
    void insertAt(int index, int value) {
        Node* newNode = new Node(value);
        if (index == 0) {
            newNode->next = head;
            head = newNode;
            return;
        }
        Node* current = head;
        for (int i = 0; i < index - 1; i++) current = current->next;
        newNode->next = current->next;
        current->next = newNode;
    }

    void deleteAt(int index) {
        if (index == 0) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return;
        }
        Node* current = head;
        for (int i = 0; i < index - 1; i++) current = current->next;
        Node* temp = current->next;
        current->next = temp->next;
        delete temp;
    }
};`,
    python: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at(self, index, value):
        new_node = Node(value)
        if index == 0:
            new_node.next = self.head
            self.head = new_node
            return
        current = self.head
        for _ in range(index - 1):
            current = current.next
        new_node.next = current.next
        current.next = new_node

    def delete_at(self, index):
        if index == 0:
            self.head = self.head.next
            return
        current = self.head
        for _ in range(index - 1):
            current = current.next
        current.next = current.next.next`,
    java: `class Node {
    int value;
    Node next;
    Node(int value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    Node head;

    void insertAt(int index, int value) {
        Node newNode = new Node(value);
        if (index == 0) {
            newNode.next = head;
            head = newNode;
            return;
        }
        Node current = head;
        for (int i = 0; i < index - 1; i++) current = current.next;
        newNode.next = current.next;
        current.next = newNode;
    }

    void deleteAt(int index) {
        if (index == 0) {
            head = head.next;
            return;
        }
        Node current = head;
        for (int i = 0; i < index - 1; i++) current = current.next;
        current.next = current.next.next;
    }
}`,
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
  code: {
    cpp: `struct Node {
    int value;
    Node* left;
    Node* right;
    Node(int val) : value(val), left(nullptr), right(nullptr) {}
};

void inorder(Node* root) {
    if (root == nullptr) return;
    inorder(root->left);
    cout << root->value << " ";
    inorder(root->right);
}

void preorder(Node* root) {
    if (root == nullptr) return;
    cout << root->value << " ";
    preorder(root->left);
    preorder(root->right);
}

void postorder(Node* root) {
    if (root == nullptr) return;
    postorder(root->left);
    postorder(root->right);
    cout << root->value << " ";
}`,
    python: `class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def inorder(root, result=None):
    if result is None:
        result = []
    if root is None:
        return result
    inorder(root.left, result)
    result.append(root.value)
    inorder(root.right, result)
    return result

def preorder(root, result=None):
    if result is None:
        result = []
    if root is None:
        return result
    result.append(root.value)
    preorder(root.left, result)
    preorder(root.right, result)
    return result

def postorder(root, result=None):
    if result is None:
        result = []
    if root is None:
        return result
    postorder(root.left, result)
    postorder(root.right, result)
    result.append(root.value)
    return result`,
    java: `class Node {
    int value;
    Node left, right;
    Node(int value) {
        this.value = value;
    }
}

void inorder(Node root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.value + " ");
    inorder(root.right);
}

void preorder(Node root) {
    if (root == null) return;
    System.out.print(root.value + " ");
    preorder(root.left);
    preorder(root.right);
}

void postorder(Node root) {
    if (root == null) return;
    postorder(root.left);
    postorder(root.right);
    System.out.print(root.value + " ");
}`,
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
  code: {
    cpp: `struct Node {
    int value;
    Node* left;
    Node* right;
    Node(int val) : value(val), left(nullptr), right(nullptr) {}
};

Node* insert(Node* root, int value) {
    if (root == nullptr) return new Node(value);
    if (value < root->value) {
        root->left = insert(root->left, value);
    } else if (value > root->value) {
        root->right = insert(root->right, value);
    }
    return root;
}

Node* search(Node* root, int value) {
    if (root == nullptr || root->value == value) return root;
    if (value < root->value) return search(root->left, value);
    return search(root->right, value);
}

Node* deleteNode(Node* root, int value) {
    if (root == nullptr) return nullptr;
    if (value < root->value) {
        root->left = deleteNode(root->left, value);
    } else if (value > root->value) {
        root->right = deleteNode(root->right, value);
    } else {
        if (root->left == nullptr) return root->right;
        if (root->right == nullptr) return root->left;
        Node* successor = root->right;
        while (successor->left != nullptr) successor = successor->left;
        root->value = successor->value;
        root->right = deleteNode(root->right, successor->value);
    }
    return root;
}`,
    python: `class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def insert(root, value):
    if root is None:
        return Node(value)
    if value < root.value:
        root.left = insert(root.left, value)
    elif value > root.value:
        root.right = insert(root.right, value)
    return root

def search(root, value):
    if root is None or root.value == value:
        return root
    if value < root.value:
        return search(root.left, value)
    return search(root.right, value)

def delete_node(root, value):
    if root is None:
        return None
    if value < root.value:
        root.left = delete_node(root.left, value)
    elif value > root.value:
        root.right = delete_node(root.right, value)
    else:
        if root.left is None:
            return root.right
        if root.right is None:
            return root.left
        successor = root.right
        while successor.left is not None:
            successor = successor.left
        root.value = successor.value
        root.right = delete_node(root.right, successor.value)
    return root`,
    java: `class Node {
    int value;
    Node left, right;
    Node(int value) {
        this.value = value;
    }
}

Node insert(Node root, int value) {
    if (root == null) return new Node(value);
    if (value < root.value) {
        root.left = insert(root.left, value);
    } else if (value > root.value) {
        root.right = insert(root.right, value);
    }
    return root;
}

Node search(Node root, int value) {
    if (root == null || root.value == value) return root;
    if (value < root.value) return search(root.left, value);
    return search(root.right, value);
}

Node deleteNode(Node root, int value) {
    if (root == null) return null;
    if (value < root.value) {
        root.left = deleteNode(root.left, value);
    } else if (value > root.value) {
        root.right = deleteNode(root.right, value);
    } else {
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;
        Node successor = root.right;
        while (successor.left != null) successor = successor.left;
        root.value = successor.value;
        root.right = deleteNode(root.right, successor.value);
    }
    return root;
}`,
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
  code: {
    cpp: `class MinHeap {
    vector<int> heap;
public:
    void insert(int value) {
        heap.push_back(value);
        int i = heap.size() - 1;
        while (i > 0 && heap[(i - 1) / 2] > heap[i]) {
            swap(heap[(i - 1) / 2], heap[i]);
            i = (i - 1) / 2;
        }
    }

    int extractMin() {
        int min = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        int i = 0;
        while (true) {
            int left = 2 * i + 1, right = 2 * i + 2, smallest = i;
            if (left < heap.size() && heap[left] < heap[smallest]) smallest = left;
            if (right < heap.size() && heap[right] < heap[smallest]) smallest = right;
            if (smallest == i) break;
            swap(heap[i], heap[smallest]);
            i = smallest;
        }
        return min;
    }
};`,
    python: `class MinHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        self.heap.append(value)
        i = len(self.heap) - 1
        while i > 0 and self.heap[(i - 1) // 2] > self.heap[i]:
            parent = (i - 1) // 2
            self.heap[parent], self.heap[i] = self.heap[i], self.heap[parent]
            i = parent

    def extract_min(self):
        min_val = self.heap[0]
        self.heap[0] = self.heap.pop()
        i = 0
        n = len(self.heap)
        while True:
            left, right, smallest = 2 * i + 1, 2 * i + 2, i
            if left < n and self.heap[left] < self.heap[smallest]:
                smallest = left
            if right < n and self.heap[right] < self.heap[smallest]:
                smallest = right
            if smallest == i:
                break
            self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]
            i = smallest
        return min_val`,
    java: `class MinHeap {
    private List<Integer> heap = new ArrayList<>();

    public void insert(int value) {
        heap.add(value);
        int i = heap.size() - 1;
        while (i > 0 && heap.get((i - 1) / 2) > heap.get(i)) {
            int parent = (i - 1) / 2;
            Collections.swap(heap, i, parent);
            i = parent;
        }
    }

    public int extractMin() {
        int min = heap.get(0);
        heap.set(0, heap.remove(heap.size() - 1));
        int i = 0;
        while (true) {
            int left = 2 * i + 1, right = 2 * i + 2, smallest = i;
            if (left < heap.size() && heap.get(left) < heap.get(smallest)) smallest = left;
            if (right < heap.size() && heap.get(right) < heap.get(smallest)) smallest = right;
            if (smallest == i) break;
            Collections.swap(heap, i, smallest);
            i = smallest;
        }
        return min;
    }
}`,
  },
};
export const graphContent: LearningContent = {
  concept:
    "Graph is a non-linear data structure consisting of a collection of vertices (or nodes) connected by edges, which represent relationships between pairs of vertices. Unlike trees, graphs do not have a hierarchical structure and may contain cycles, multiple paths, or disconnected components. Depending on the direction of edges, graphs are classified as Directed Graphs (Digraphs), where edges have a specific direction, and Undirected Graphs, where edges allow movement in both directions. Graphs can also be weighted, where each edge has an associated cost or distance, or unweighted, where all edges are considered equal. They are commonly represented using an Adjacency Matrix or an Adjacency List, with the latter being more space-efficient for sparse graphs. Fundamental graph traversal algorithms include Breadth-First Search (BFS) and Depth-First Search (DFS), which are used to visit and explore vertices systematically. Graphs are widely used in computer science for modeling real-world networks such as social networks, computer networks, road maps, airline routes, recommendation systems, web page linking, and communication systems. The time complexity of graph traversal using BFS or DFS is O(V + E), where V is the number of vertices and E is the number of edges, while the space complexity is O(V). Due to their ability to efficiently represent complex relationships and interconnected data, graphs are among the most important and widely used data structures in algorithms, networking, databases, artificial intelligence, and many real-world applications.",
  working: [
    "Each node represents an entity, and each edge represents a connection between two nodes.",
    "Adding a node introduces a new vertex with no initial connections.",
    "Adding an edge creates a connection between two existing nodes.",
    "Deleting a node also removes every edge connected to it, to keep the graph consistent.",
    "Graphs can be traversed using algorithms like BFS or DFS to visit all reachable nodes.",
  ],
  complexity: {
    best: "O(1)",
    average: "O(V + E)",
    worst: "O(V + E)",
    space: "O(V + E)",
  },
  code: {
    cpp: `class Graph {
    unordered_map<int, vector<int>> adjList;
public:
    void addNode(int id) {
        adjList[id];
    }

    void addEdge(int from, int to) {
        adjList[from].push_back(to);
        adjList[to].push_back(from);
    }

    void removeNode(int id) {
        for (int neighbor : adjList[id]) {
            auto& neighbors = adjList[neighbor];
            neighbors.erase(remove(neighbors.begin(), neighbors.end(), id), neighbors.end());
        }
        adjList.erase(id);
    }
};`,
    python: `class Graph:
    def __init__(self):
        self.adj_list = {}

    def add_node(self, node_id):
        if node_id not in self.adj_list:
            self.adj_list[node_id] = []

    def add_edge(self, from_id, to_id):
        self.adj_list[from_id].append(to_id)
        self.adj_list[to_id].append(from_id)

    def remove_node(self, node_id):
        for neighbor in self.adj_list.get(node_id, []):
            self.adj_list[neighbor].remove(node_id)
        self.adj_list.pop(node_id, None)`,
    java: `class Graph {
    private Map<Integer, List<Integer>> adjList = new HashMap<>();

    public void addNode(int id) {
        adjList.putIfAbsent(id, new ArrayList<>());
    }

    public void addEdge(int from, int to) {
        adjList.get(from).add(to);
        adjList.get(to).add(from);
    }

    public void removeNode(int id) {
        for (int neighbor : adjList.get(id)) {
            adjList.get(neighbor).remove(Integer.valueOf(id));
        }
        adjList.remove(id);
    }
}`,
  },
};