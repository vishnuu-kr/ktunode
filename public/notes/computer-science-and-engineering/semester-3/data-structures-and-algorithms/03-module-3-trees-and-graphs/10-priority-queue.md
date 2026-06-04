---
title: "Priority Queue"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac43"
status: "completed"
scrapedAt: "2026-05-20T16:23:04.916Z"
---
# DATA STRUCTURES AND ALGORITHMS: Module 3 - Trees and Graphs: Priority Queue

## Learning Outcomes:

*   Understand the concept of a priority queue and its applications.
*   Distinguish between different implementations of priority queues (e.g., arrays, linked lists, heaps).
*   Implement a priority queue using a heap data structure.
*   Analyze the time complexity of priority queue operations (insertion, deletion).
*   Apply priority queues to solve real-world problems.

## 1. Introduction to Priority Queues

*   **Definition:** A priority queue is an abstract data type similar to a regular queue or stack data structure, but each element additionally has a "priority" associated with it.

*   **Key Difference from Regular Queues:**  In a regular queue, elements are dequeued in a FIFO (First-In, First-Out) manner. In a priority queue, elements are dequeued based on their priority.  The element with the highest priority is dequeued first.

*   **Applications:**

    *   **Operating Systems:** Job scheduling (e.g., processes with higher priority get CPU time first).
    *   **Network Routing:**  Finding the shortest path in a network (e.g., Dijkstra's algorithm).
    *   **Event Simulation:**  Simulating events based on their time of occurrence (e.g., simulating traffic flow).
    *   **Data Compression:**  Huffman coding uses a priority queue to build the Huffman tree.
    *   **Heap Sort:** The heap data structure, fundamental to priority queues, is used in heap sort.
    *   **Medical Emergency Rooms:** Patients are often seen based on the severity of their condition (priority).

*   **Priority Definition:** Priority can be defined in several ways.  It can be a numerical value (smaller or larger representing higher priority), or it can be based on other criteria defined by a custom comparison function. The key is that it allows for consistent ordering.

## 2. Implementations of Priority Queues

Several data structures can be used to implement a priority queue.  Each has different performance characteristics for the core operations (insert and delete-min/max).

*   **Unordered Array:**

    *   **Insertion:**  Simply add the element to the end of the array.  O(1) time complexity.
    *   **Deletion (findMin/findMax and remove):** Requires searching the entire array to find the element with the highest priority, then removing it. O(n) time complexity.
    *   **Advantages:** Simple to implement.
    *   **Disadvantages:** Inefficient for frequent deletion operations.

*   **Ordered Array:**

    *   **Insertion:** Requires finding the correct position to insert the element to maintain the sorted order. O(n) time complexity (in the worst case, requires shifting all existing elements).
    *   **Deletion (findMin/findMax and remove):** The element with the highest priority is at the beginning (or end) of the array, so deletion is efficient. O(1) if the array is ordered in ascending order and you are deleting the minimum.  O(n) if further shifting is required to fill the gap.
    *   **Advantages:** Efficient deletion (if the array is ordered and you are deleting the minimum/maximum).
    *   **Disadvantages:** Inefficient insertion.

*   **Unordered Linked List:**

    *   **Insertion:** Simply add the element to the beginning or end of the list. O(1) time complexity.
    *   **Deletion (findMin/findMax and remove):** Requires traversing the entire list to find the element with the highest priority, then removing it. O(n) time complexity.
    *   **Advantages:** Simple to implement.
    *   **Disadvantages:** Inefficient for frequent deletion operations.

*   **Ordered Linked List:**

    *   **Insertion:** Requires traversing the list to find the correct position to insert the element to maintain the sorted order. O(n) time complexity.
    *   **Deletion (findMin/findMax and remove):** The element with the highest priority is at the beginning (or end) of the list, so deletion is efficient. O(1).
    *   **Advantages:** Efficient deletion.
    *   **Disadvantages:** Inefficient insertion.

*   **Binary Search Tree (BST):**

    *   **Insertion:**  O(log n) on average, O(n) in the worst case (skewed tree).
    *   **Deletion (findMin/findMax and remove):** O(log n) on average, O(n) in the worst case.
    *   **Advantages:** Provides a good balance of insertion and deletion performance *on average*.
    *   **Disadvantages:** Performance degrades to O(n) for skewed trees.

*   **Heap (Binary Heap - usually the data structure of choice):**

    *   **Insertion:** O(log n) time complexity.
    *   **Deletion (findMin/findMax and remove):** O(log n) time complexity.
    *   **Advantages:**  Efficient insertion and deletion.  Provides guaranteed logarithmic time complexity for these operations.  Excellent for priority queue implementation.  Also, it can be built "in-place" inside an array with minimal overhead.
    *   **Disadvantages:** Can be slightly more complex to implement than simpler data structures.

## 3. Heap-Based Priority Queue Implementation

A heap is a tree-based data structure that satisfies the heap property:

*   **Min-Heap:**  The value of each node is less than or equal to the value of its children. The minimum element is always at the root.
*   **Max-Heap:** The value of each node is greater than or equal to the value of its children. The maximum element is always at the root.

We'll focus on using a *min-heap* to implement a priority queue, where smaller values represent higher priority.

*   **Heap Implementation Details:**

    *   Heaps are typically implemented as *complete binary trees*.  This means that all levels are completely filled except possibly the last level, which is filled from left to right.
    *   Complete binary trees can be efficiently represented using an array.
    *   Given a node at index `i`:
        *   Its left child is at index `2i + 1`.
        *   Its right child is at index `2i + 2`.
        *   Its parent is at index `(i - 1) / 2` (integer division).

*   **Core Heap Operations for Priority Queue:**

    *   **`insert(priority, value)`:**  Adds a new element to the heap.

        1.  Add the new element to the end of the array (at the next available index).
        2.  "Heapify Up" (also called "bubble up" or "percolate up"): Compare the new element with its parent.  If the new element has higher priority (smaller value in a min-heap) than its parent, swap them.
        3.  Repeat step 2 until the new element is in its correct position (heap property is satisfied) or it reaches the root.  O(log n) time complexity.

    *   **`deleteMin()`:**  Removes and returns the element with the highest priority (the root element in a min-heap).

        1.  Replace the root element with the last element in the array.
        2.  Remove the last element from the array (effectively shrinking the heap size).
        3.  "Heapify Down" (also called "bubble down" or "percolate down"): Compare the new root element with its children.  If either child has higher priority (smaller value in a min-heap) than the root, swap the root with the child that has the *highest* priority (smallest value).
        4.  Repeat step 3 until the heap property is satisfied.  O(log n) time complexity.

*   **Example Implementation (Conceptual - Python):**

```python
import heapq  # Python's built-in heap implementation

class PriorityQueue:
    def __init__(self):
        self._data = []  # Internal list to store heap elements (tuples: (priority, value))
        heapq.heapify(self._data) # Ensures the list satisfies the heap invariant

    def insert(self, priority, value):
        heapq.heappush(self._data, (priority, value))

    def delete_min(self):
        if self.is_empty():
            return None  # Or raise an exception
        return heapq.heappop(self._data)

    def peek_min(self):
        if self.is_empty():
            return None #Or raise an exception
        return self._data[0]

    def is_empty(self):
        return len(self._data) == 0

    def size(self):
        return len(self._data)


# Example Usage
pq = PriorityQueue()
pq.insert(3, "Task C")
pq.insert(1, "Task A")
pq.insert(2, "Task B")

print(pq.delete_min())  # Output: (1, 'Task A')
print(pq.delete_min())  # Output: (2, 'Task B')
print(pq.delete_min())  # Output: (3, 'Task C')

```

*   **Important Points about Heap Implementation:**

    *   The `heapify` operation is crucial for efficient heap creation from an arbitrary array.  It ensures the heap property is satisfied.
    *   The `heapq` module in Python provides a min-heap implementation. If you need a max-heap, you can either negate the priorities or write your own heap implementation.
    *   Languages like C++ provide priority queues via the `std::priority_queue` container.

## 4. Time Complexity Analysis

*   **Heap-Based Priority Queue:**

    *   **`insert(priority, value)`:** O(log n) - due to heapify up.
    *   **`deleteMin()`:** O(log n) - due to heapify down.
    *   **`peekMin()`:** O(1) - Accessing the root element.
    *   **`isEmpty()` and `size()`:** O(1).

*   **Comparison with other implementations (Worst Case):**

    | Operation   | Unordered Array | Ordered Array | Unordered Linked List | Ordered Linked List | BST (avg) | Heap     |
    |-------------|-----------------|---------------|-----------------------|-----------------------|-----------|----------|
    | Insert      | O(1)            | O(n)          | O(1)                  | O(n)                  | O(log n)  | O(log n) |
    | Delete Min  | O(n)            | O(n)          | O(n)                  | O(1)                  | O(log n)  | O(log n) |
    | Get Min/Max | O(n)            | O(1)          | O(n)                  | O(1)                  | O(log n) | O(1)     |

*   **Key Takeaway:**  Heap-based priority queues provide the best overall performance for both insertion and deletion operations, making them the preferred choice for many applications.

## 5. Applying Priority Queues to Solve Real-World Problems

*   **Example 1: Dijkstra's Algorithm (Shortest Path)**

    *   Dijkstra's algorithm finds the shortest path from a starting node to all other nodes in a weighted graph.
    *   A priority queue is used to keep track of the nodes to visit, prioritized by their distance from the starting node.  Nodes with smaller distances are visited first.
    *   The algorithm iteratively extracts the node with the smallest distance from the priority queue, updates the distances to its neighbors, and adds them to the priority queue.
    *   Without a priority queue, finding the node with the smallest distance would take O(n) time, resulting in a slower overall algorithm.  Using a heap-based priority queue reduces the time complexity to O(E log V), where E is the number of edges and V is the number of vertices.

*   **Example 2: Huffman Coding (Data Compression)**

    *   Huffman coding is a variable-length encoding scheme used for data compression.
    *   A priority queue is used to build the Huffman tree.  The frequencies of each character are used as priorities.
    *   The algorithm repeatedly merges the two nodes with the lowest frequencies from the priority queue until only one node remains (the root of the Huffman tree).
    *   This process ensures that characters that appear more frequently are assigned shorter codes, leading to better compression.

*   **Example 3: Task Scheduling**

    *   An operating system uses a priority queue to schedule tasks for execution.
    *   Tasks are assigned priorities based on factors such as their importance, deadlines, or resource requirements.
    *   The scheduler selects the task with the highest priority from the priority queue and allocates CPU time to it.
    *   This ensures that important tasks are executed promptly and that system resources are used efficiently.

## 6. Practice Questions / Exercises

1.  **Question:** Explain the difference between a min-heap and a max-heap. Provide an example of when you might use a min-heap versus a max-heap.

    **Answer:** A min-heap has the property that the value of each node is less than or equal to the value of its children, so the smallest element is at the root. A max-heap has the property that the value of each node is greater than or equal to the value of its children, so the largest element is at the root.  A min-heap is useful for finding the smallest element efficiently (e.g., finding the shortest path in a graph). A max-heap is useful for finding the largest element efficiently (e.g., finding the k-largest elements in a dataset).

2.  **Question:** Given the following numbers and priorities, build a min-heap: (5, "A"), (2, "B"), (8, "C"), (1, "D"), (4, "E").  Show the steps involved in inserting each element.

    **Answer:**

    1.  Insert (5, "A"):  `[(5, 'A')]`
    2.  Insert (2, "B"):  `[(5, 'A'), (2, 'B')]`  Heapify up:  `[(2, 'B'), (5, 'A')]`
    3.  Insert (8, "C"):  `[(2, 'B'), (5, 'A'), (8, 'C')]`
    4.  Insert (1, "D"):  `[(2, 'B'), (5, 'A'), (8, 'C'), (1, 'D')]`  Heapify up: `[(2, 'B'), (1, 'D'), (8, 'C'), (5, 'A')]`  Heapify up: `[(1, 'D'), (2, 'B'), (8, 'C'), (5, 'A')]`
    5.  Insert (4, "E"):  `[(1, 'D'), (2, 'B'), (8, 'C'), (5, 'A'), (4, 'E')]` Heapify up: `[(1, 'D'), (2, 'B'), (8, 'C'), (5, 'A'), (4, 'E')]` Heapify up: `[(1, 'D'), (2, 'B'), (4, 'E'), (5, 'A'), (8, 'C')]`

    Final Heap: `[(1, 'D'), (2, 'B'), (4, 'E'), (5, 'A'), (8, 'C')]`

3.  **Question:** Explain how the `deleteMin()` operation works in a heap-based priority queue. Include the heapify down process.

    **Answer:**
    *   The `deleteMin()` operation removes and returns the element with the highest priority (the root) in a min-heap.
    *   It replaces the root element with the last element in the heap's array representation.
    *   Then, the last element is removed from the array, reducing the heap size.
    *   `Heapify Down` is then applied to maintain the heap property:
        1.  The new root is compared with its children.
        2.  If either child has higher priority than the root, the root is swapped with the child that has the *highest* priority (smallest value in a min-heap).
        3.  This process is repeated until the new root element is in its correct position, satisfying the min-heap property (or until it has no children).

4.  **Question:** Write pseudo-code for inserting an element into a heap.

    **Answer:**

    ```
    function insert(priority, value):
        // Add the new element to the end of the heap array
        heap_array[heap_size] = (priority, value)
        heap_size = heap_size + 1

        // Heapify Up (bubble up)
        i = heap_size - 1 // index of the newly added element
        while i > 0 and heap_array[i].priority < heap_array[parent(i)].priority:
            // Swap the element with its parent
            swap(heap_array[i], heap_array[parent(i)])
            i = parent(i) // move to the parent's index

    function parent(i):
        return (i - 1) / 2  // integer division
    ```

## 7. Important Points to Remember

*   Priority queues are abstract data types that order elements based on priority.
*   Heaps are the most common and efficient data structure for implementing priority queues.
*   Heap-based priority queues provide O(log n) time complexity for insertion and deletion operations.
*   Understand the differences between min-heaps and max-heaps.
*   Know how to perform heapify up and heapify down operations.
*   Be able to apply priority queues to solve real-world problems like Dijkstra's algorithm and Huffman coding.
