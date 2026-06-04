---
title: "Priority Queues"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea04"
status: "completed"
scrapedAt: "2026-05-23T17:55:00.409Z"
---
# Data Structures: Module 1 - Basic Concepts of Data Structures

## Topic: Priority Queues

This module introduces the fundamental concept of Priority Queues, a crucial abstract data type that plays a significant role in various algorithms and applications. We will explore its definition, operations, and common implementations.

---

### 1. Introduction to Priority Queues

A **Priority Queue** is an abstract data type similar to a regular queue or stack, but with an added dimension: **priority**. Each element in a priority queue is associated with a priority value. When elements are dequeued, the element with the **highest priority** is always removed first.

**Key Concepts:**

*   **Priority:** A value assigned to an element that determines its order of removal. Higher priority usually means earlier removal.
*   **Abstract Data Type (ADT):** A conceptual model that defines a set of operations and their behavior, without specifying the underlying implementation.

**Analogy:**
Think of a hospital emergency room. Patients are not treated in the order they arrive (like a regular queue). Instead, patients with more critical conditions (higher priority) are treated first.

**Relationship to Other ADTs:**

*   **Queue:** A regular queue follows a First-In, First-Out (FIFO) principle. Priority queues deviate from this by prioritizing elements.
*   **Stack:** A stack follows a Last-In, First-Out (LIFO) principle. Priority queues also deviate from this.

**Relevance to Course Outcomes:**

*   **CO2:** Priority Queues are a fundamental data structure that can be used to solve real-world problems efficiently, especially when ordering based on importance is required. For example, task scheduling in operating systems, event simulation, and graph algorithms.

---

### 2. Operations of a Priority Queue

The core operations for a priority queue are:

*   **Insert (or Enqueue/Add):** Adds an element with its associated priority to the priority queue.
*   **Delete-Max (or Dequeue-Max/Remove-Max):** Removes and returns the element with the highest priority.
*   **Find-Max (or Peek-Max/Get-Max):** Returns the element with the highest priority without removing it.

**Variations:**
Some priority queue implementations might support:

*   **Insert-Min / Delete-Min / Find-Min:** For cases where the lowest priority element is removed first.
*   **Decrease-Key / Increase-Key:** Modifies the priority of an existing element.

**Important Considerations:**

*   **Priority Definition:** The definition of "highest priority" can vary. It can be the smallest numerical value (e.g., in shortest path algorithms) or the largest numerical value (e.g., in event scheduling). We will generally assume higher numerical value means higher priority, unless stated otherwise.

---

### 3. Implementations of Priority Queues

Priority queues can be implemented using various underlying data structures. The choice of implementation significantly impacts the efficiency of the operations.

#### 3.1. Using Arrays (Unsorted)

**Concept:**
Store elements in an array. Insertion is straightforward, but finding the maximum element requires scanning the entire array.

**Operations:**

*   **Insert:**
    *   Add the new element to the end of the array.
    *   **Time Complexity:** O(1)
*   **Delete-Max:**
    *   Scan the entire array to find the element with the maximum priority.
    *   Swap the maximum element with the last element.
    *   Remove the last element (or adjust the size).
    *   **Time Complexity:** O(n), where 'n' is the number of elements.
*   **Find-Max:**
    *   Scan the entire array to find the element with the maximum priority.
    *   **Time Complexity:** O(n)

**Advantages:**
*   Simple to implement.
*   Fast insertion.

**Disadvantages:**
*   Slow `Delete-Max` and `Find-Max` operations.

**Textbook Reference:**
*   *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Anderson-Freed (Chapter 6 on Arrays, discusses basic array operations which form the foundation)

**Example:**
Consider inserting elements 10, 5, 20, 15.
*   Insert 10: `[10]`
*   Insert 5: `[10, 5]`
*   Insert 20: `[10, 5, 20]`
*   Insert 15: `[10, 5, 20, 15]`
To `Delete-Max`: Scan to find 20, swap with 15, remove 15. Array becomes `[10, 5, 20]` -> `[10, 5, 20, 15]` -> `[10, 5, 15]` (after swapping 20 and 15 and removing 15's original position). The actual element removed is 20.

#### 3.2. Using Arrays (Sorted)

**Concept:**
Maintain the array in sorted order (e.g., in descending order of priority).

**Operations:**

*   **Insert:**
    *   Find the correct position for the new element using binary search (or linear scan).
    *   Shift existing elements to make space.
    *   Insert the new element.
    *   **Time Complexity:** O(n) (due to shifting), or O(log n + n) which simplifies to O(n).
*   **Delete-Max:**
    *   The maximum element is at the beginning of the array (if sorted descending).
    *   Remove the first element.
    *   **Time Complexity:** O(1) (if we ignore shifting back for some implementations, but typically requires shifting subsequent elements). A more accurate view is that removing the first element of an array and maintaining the contiguous property requires O(n) shifting. However, if we conceptually remove the first element and adjust the "start" pointer, it can be O(1). For practical array implementations, it's O(n).
*   **Find-Max:**
    *   Return the first element of the array.
    *   **Time Complexity:** O(1)

**Advantages:**
*   Fast `Find-Max` and `Delete-Max` (if array management is considered).

**Disadvantages:**
*   Slow insertion due to shifting.

**Textbook Reference:**
*   *Classic Data Structures* by Samanta D. (Chapter 3 on Arrays, covers sorted arrays and their implications for operations)

**Example:**
Consider inserting elements 10, 5, 20, 15 into a sorted array (descending).
*   Insert 10: `[10]`
*   Insert 5: `[10, 5]`
*   Insert 20: `[20, 10, 5]` (find position, shift, insert)
*   Insert 15: `[20, 15, 10, 5]` (find position, shift, insert)
`Delete-Max`: Remove 20. Array becomes `[15, 10, 5]`.

#### 3.3. Using Linked Lists (Unsorted)

**Concept:**
Store elements in a linked list. Insertion is easy, but finding the maximum requires traversing the list.

**Operations:**

*   **Insert:**
    *   Add the new element to the beginning or end of the list.
    *   **Time Complexity:** O(1)
*   **Delete-Max:**
    *   Traverse the entire list to find the node with the maximum priority.
    *   Remove that node.
    *   **Time Complexity:** O(n)
*   **Find-Max:**
    *   Traverse the entire list to find the node with the maximum priority.
    *   **Time Complexity:** O(n)

**Advantages:**
*   Simple to implement.
*   Fast insertion.

**Disadvantages:**
*   Slow `Delete-Max` and `Find-Max` operations.

**Textbook Reference:**
*   *Data Structures: A Pseudocode Approach with C* by Gilberg & Forouzan (Chapter 5 on Linked Lists, covers traversal and deletion)

**Example:**
Insert 10, 5, 20, 15 into an unsorted linked list.
*   Insert 10: `[10]`
*   Insert 5: `[5, 10]` (insert at front)
*   Insert 20: `[20, 5, 10]`
*   Insert 15: `[15, 20, 5, 10]`
To `Delete-Max`: Traverse to find 20 and remove it.

#### 3.4. Using Linked Lists (Sorted)

**Concept:**
Maintain the linked list in sorted order of priority.

**Operations:**

*   **Insert:**
    *   Traverse the list to find the correct position for the new element.
    *   Insert the new node at that position.
    *   **Time Complexity:** O(n) (in the worst case, need to traverse the entire list).
*   **Delete-Max:**
    *   The maximum element is at the beginning of the list (if sorted descending).
    *   Remove the first node.
    *   **Time Complexity:** O(1)
*   **Find-Max:**
    *   Return the data of the first node.
    *   **Time Complexity:** O(1)

**Advantages:**
*   Fast `Find-Max` and `Delete-Max` operations.

**Disadvantages:**
*   Slow insertion.

**Textbook Reference:**
*   *Introduction to Data Structures with Applications* by Tremblay & Sorenson (Chapter 4 on Linked Lists, discusses insertion into sorted lists)

**Example:**
Insert 10, 5, 20, 15 into a sorted linked list (descending priority).
*   Insert 10: `[10]`
*   Insert 5: `[10, 5]`
*   Insert 20: `[20, 10, 5]` (traverse, find position, insert)
*   Insert 15: `[20, 15, 10, 5]` (traverse, find position, insert)
`Delete-Max`: Remove 20. List becomes `[15, 10, 5]`.

#### 3.5. Using Heaps

**Concept:**
A heap is a specialized tree-based data structure that satisfies the **heap property**:
*   **Min-Heap:** The value of each node is greater than or equal to the value of its parent. The smallest element is at the root.
*   **Max-Heap:** The value of each node is less than or equal to the value of its parent. The largest element is at the root.

Priority queues are most efficiently implemented using heaps. A **Max-Heap** is typically used to implement a priority queue where the highest priority element is removed first.

**Heap Properties:**

1.  **Shape Property:** A heap is a complete binary tree. This means all levels are filled except possibly the last one, which is filled from left to right.
2.  **Heap Property:** For a Max-Heap, for every node `i` other than the root, `key(parent(i)) >= key(i)`.

**Heap Operations (Max-Heap):**

*   **Insert (Heap-Increase-Key equivalent):**
    *   Add the new element at the next available position in the complete binary tree (maintaining the shape property).
    *   "Bubble up" (or "heapify-up" / "percolate-up") the new element by repeatedly swapping it with its parent if it has a higher priority than its parent, until the heap property is restored.
    *   **Time Complexity:** O(log n)
*   **Delete-Max (Extract-Max):**
    *   The maximum element is always at the root.
    *   Replace the root with the last element in the heap (to maintain the shape property).
    *   "Bubble down" (or "heapify-down" / "percolate-down") the new root by repeatedly swapping it with its larger child if it has a lower priority than one of its children, until the heap property is restored.
    *   **Time Complexity:** O(log n)
*   **Find-Max (Peek-Max):**
    *   Return the value at the root of the heap.
    *   **Time Complexity:** O(1)

**Advantages:**
*   Efficient `Insert`, `Delete-Max`, and `Find-Max` operations (logarithmic time complexity).

**Disadvantages:**
*   More complex to implement than simple arrays or linked lists.

**Implementation of Heaps:**
Heaps are commonly implemented using arrays due to the complete binary tree property. The relationships between nodes can be calculated directly from their indices:
*   Parent of node `i`: `floor((i-1)/2)`
*   Left child of node `i`: `2*i + 1`
*   Right child of node `i`: `2*i + 2`

**Textbook Reference:**
*   *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Anderson-Freed (Chapter 7 on Trees, specifically section on Heaps)
*   *Classic Data Structures* by Samanta D. (Chapter 6 on Heaps)
*   *Theory and Problems of Data Structures* by Lipschuts S. (Chapter 10 on Heaps)

**Example (Max-Heap):**
Insert 4, 10, 3, 5, 1.
Array representation:
1.  Insert 4: `[4]`
2.  Insert 10: `[4, 10]` -> Bubble up 10: `[10, 4]`
3.  Insert 3: `[10, 4, 3]`
4.  Insert 5: `[10, 4, 3, 5]` -> Bubble up 5: `[10, 5, 3, 4]`
5.  Insert 1: `[10, 5, 3, 4, 1]`

`Find-Max`: Returns 10.
`Delete-Max`:
*   Replace 10 with 1: `[1, 5, 3, 4]`
*   Bubble down 1:
    *   Compare 1 with children 5 and 3. Larger child is 5. Swap 1 and 5: `[5, 1, 3, 4]`
    *   Now at node with value 1 (index 1). It has no children. Heap property restored.
    *   Returned value: 10. Heap: `[5, 1, 3, 4]`

**Course Outcome Alignment:**

*   **CO2:** Using heaps for priority queues is an efficient way to solve problems where ordered retrieval of elements is needed, like task scheduling. This directly supports solving real-world problems efficiently.
*   **CO1:** Understanding the time complexities of heap operations (O(log n)) versus array/list operations (O(n) or O(1)) allows for performance comparison using asymptotic notations.

---

### 4. Applications of Priority Queues

Priority queues are fundamental in many algorithms and applications:

*   **Event-Driven Simulation:** Events with earlier timestamps (higher priority) are processed first.
*   **Task Scheduling:** Operating systems use priority queues to schedule processes, prioritizing critical or time-sensitive tasks.
*   **Graph Algorithms:**
    *   **Dijkstra's Algorithm:** Finds the shortest path from a source vertex to all other vertices in a graph with non-negative edge weights. A priority queue stores vertices, ordered by their current shortest distance from the source.
    *   **Prim's Algorithm:** Finds a Minimum Spanning Tree (MST) for a weighted undirected graph. A priority queue stores edges, ordered by their weights.
*   **Huffman Coding:** A lossless data compression algorithm that uses a priority queue to build an optimal prefix code tree.
*   **Best-First Search:** A search algorithm that explores a graph by expanding the most promising node chosen according to a specified rule (often related to cost or estimated distance to the goal), which is managed by a priority queue.

**Textbook Reference:**
*   *Data Structures and Algorithms* by Aho, Hopcroft, and Ullman (Chapter 9 on Graph Algorithms, specifically discusses Dijkstra's and Prim's algorithms which utilize priority queues)
*   *Advanced Data Structures* by Peter Brass (Chapter 1 on basic concepts, may touch upon applications like scheduling)

**Example (Dijkstra's Algorithm - conceptual):**
Imagine finding the shortest path from A to E in a weighted graph.
1.  Initialize distances: A=0, others=infinity. Priority Queue: `{(0, A)}`.
2.  Extract (0, A). Visit neighbors B (dist 5) and C (dist 2). PQ: `{(2, C), (5, B)}`.
3.  Extract (2, C). Visit neighbors B (dist 2+3=5) and D (dist 2+1=3). PQ: `{(3, D), (5, B), (5, B)}`. Note: If an element with the same priority exists, it's fine; better to have unique elements or handle updates. A typical Dijkstra uses a min-priority queue, so `(2, C)` would be extracted. If `B` was already in the PQ with distance 5, we'd update it if the new path is shorter (which it isn't in this step).
4.  Extract (3, D). Visit neighbor E (dist 3+4=7). PQ: `{(5, B), (5, B), (7, E)}`.
5.  Extract one of the (5, B). Visit neighbors C (dist 5+2=7, but C already visited with dist 2, so ignore) and E (dist 5+1=6). PQ: `{(5, B), (6, E), (7, E)}`.
6.  Extract (6, E). Reached destination. Shortest path is 6.

**Course Outcome Alignment:**

*   **CO2:** Demonstrates how priority queues are used to solve complex problems like finding shortest paths in graphs, a key aspect of the course outcome.

---

### 5. Important Points to Remember

*   **Priority Definition:** Always clarify whether "highest priority" means the smallest or largest numerical value. The implementation (Min-Heap vs. Max-Heap) depends on this.
*   **Efficiency Trade-offs:** While unsorted arrays/lists offer O(1) insertion, they suffer from O(n) retrieval. Sorted arrays/lists offer O(1) retrieval but O(n) insertion. Heaps provide a balanced O(log n) for both insertion and deletion, making them the preferred implementation for most cases.
*   **Heap Structure:** Understanding the array representation of a complete binary tree is crucial for implementing heaps efficiently.
*   **Applications:** Recognize the versatility of priority queues in various algorithmic paradigms.

---

### 6. Practice Questions and Exercises

**Q1. Define a Priority Queue.**
**Answer:** A Priority Queue is an abstract data type that stores elements, each with an associated priority. When elements are removed, the one with the highest priority is always extracted first.

**Q2. What are the basic operations of a Priority Queue?**
**Answer:** The basic operations are:
*   `Insert` (or Enqueue/Add)
*   `Delete-Max` (or Dequeue-Max/Remove-Max)
*   `Find-Max` (or Peek-Max/Get-Max)

**Q3. Compare the time complexities of `Insert` and `Delete-Max` operations for the following implementations: (Assume 'n' is the number of elements)**

| Implementation      | Insert   | Delete-Max | Find-Max |
| :------------------ | :------- | :--------- | :------- |
| Unsorted Array      | O(1)     | O(n)       | O(n)     |
| Sorted Array        | O(n)     | O(1)*      | O(1)     |
| Unsorted Linked List| O(1)     | O(n)       | O(n)     |
| Sorted Linked List  | O(n)     | O(1)       | O(1)     |
| Max-Heap            | O(log n) | O(log n)   | O(1)     |

*Note for Sorted Array Delete-Max: If we consider removing the first element and shifting the rest, it's O(n). If we conceptually just adjust a pointer, it can be seen as O(1), but for a contiguous array, O(n) is more accurate for the structural operation.*

**Q4. Why is a Heap generally considered the most efficient implementation for a Priority Queue?**
**Answer:** A heap provides a balanced logarithmic time complexity (O(log n)) for both insertion and deletion of elements, which are the most frequent operations. This is significantly better than the linear time complexities of array or linked list implementations for at least one of these operations.

**Q5. (Conceptual) If you were designing a system to manage incoming requests for a web server, where each request has a priority (e.g., critical system status requests are high priority, regular user requests are medium, and background tasks are low priority), what data structure would you use to manage these requests, and why?**
**Answer:** A **Max-Heap** would be the most suitable data structure.
*   **Reasoning:**
    *   **Priority-based ordering:** The system needs to process higher priority requests first. A Max-Heap naturally orders elements by their priority.
    *   **Efficiency:** Web servers can receive a high volume of requests. The O(log n) insertion and deletion of a heap ensure that the system can handle the load efficiently without significant delays caused by processing lower-priority items.
    *   **Operations:** `Insert` would be used for new incoming requests, and `Delete-Max` would be used to retrieve and process the next highest priority request. `Find-Max` could be used to check the next request without processing it.

---

This concludes Module 1's topic on Priority Queues. Understanding these concepts will be vital as we explore more complex data structures and algorithms.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
