---
title: "Binary Heaps - Binary Heap Operations"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac42"
status: "completed"
scrapedAt: "2026-05-20T16:23:04.196Z"
---
## Module 3: Trees and Graphs - Binary Heaps - Binary Heap Operations

**Learning Outcomes:**

*   Understand the properties of a binary heap.
*   Differentiate between min-heaps and max-heaps.
*   Implement the key binary heap operations: `insert`, `extract_min` (or `extract_max`), `heapify`, `peek`, and `decrease_key` (or `increase_key`).
*   Analyze the time complexity of each operation.
*   Apply binary heaps to solve real-world problems like priority queues.

**1. Introduction to Binary Heaps**

*   **Definition:** A binary heap is a complete binary tree that satisfies the heap property.  It's typically implemented using an array, making it very efficient for storing priority queue data.

*   **Complete Binary Tree:** A binary tree where all levels are completely filled, except possibly the last level, which is filled from left to right.  This makes array-based storage efficient because there are no gaps.

*   **Heap Property:**  This is the core characteristic that defines a binary heap. There are two variations:

    *   **Min-Heap:**  For every node `i`, the key (value) of `i` is less than or equal to the key of its children.  Therefore, the root node contains the smallest element.
    *   **Max-Heap:** For every node `i`, the key of `i` is greater than or equal to the key of its children. Therefore, the root node contains the largest element.

*   **Array Representation:** A binary heap is often implemented using an array.  If a node is at index `i`:

    *   Left Child: Index `2*i + 1`
    *   Right Child: Index `2*i + 2`
    *   Parent: Index `(i - 1) // 2` (integer division)

    This array-based representation avoids the overhead of explicitly storing tree nodes and pointers.

**2. Min-Heaps vs. Max-Heaps**

*   **Min-Heap:**

    *   Root holds the *smallest* element.
    *   Parent nodes are always smaller than or equal to their children.
    *   Used for applications like priority queues where you need to efficiently retrieve the smallest element (e.g., Dijkstra's Algorithm).

*   **Max-Heap:**

    *   Root holds the *largest* element.
    *   Parent nodes are always larger than or equal to their children.
    *   Used for applications like finding the k-th largest element in an array.

**Example:**

*   **Min-Heap Array:** `[2, 5, 6, 8, 9, 7, 10]`

    Corresponding Tree:

       ```
           2
         /   \
        5     6
       / \   / \
      8   9 7  10
       ```

*   **Max-Heap Array:** `[10, 9, 7, 8, 5, 6, 2]`

    Corresponding Tree:

       ```
           10
         /    \
        9      7
       / \    / \
      8   5  6   2
       ```

**3. Binary Heap Operations**

We'll focus on Min-Heap operations for illustration. Max-Heap operations are analogous.

*   **3.1. `peek()`**

    *   **Purpose:** Returns the minimum element (root node) of the heap without removing it.
    *   **Implementation:** Simply return the element at index 0 of the array.
    *   **Time Complexity:** O(1) - Constant time.

*   **3.2. `insert(key)`**

    *   **Purpose:** Inserts a new element `key` into the heap.
    *   **Steps:**
        1.  Append `key` to the end of the array.  This maintains the complete binary tree property.
        2.  *Heapify Up (Bubble Up):* Compare the new element with its parent. If the new element is smaller than its parent (min-heap), swap them. Repeat this process until the heap property is restored.
    *   **Implementation (Python):**

        ```python
        class MinHeap:
            def __init__(self):
                self.heap = []

            def peek(self):
                if self.heap:
                    return self.heap[0]
                return None

            def insert(self, key):
                self.heap.append(key)
                self._heapify_up(len(self.heap) - 1)

            def _heapify_up(self, index):
                parent_index = (index - 1) // 2
                if index > 0 and self.heap[index] < self.heap[parent_index]:
                    self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                    self._heapify_up(parent_index)
        ```

    *   **Time Complexity:** O(log n) - where n is the number of elements in the heap.  In the worst case, the new element might have to bubble up to the root. The height of a complete binary tree is log n.

*   **3.3. `extract_min()`**

    *   **Purpose:** Removes and returns the minimum element (root node) from the heap.
    *   **Steps:**
        1.  Replace the root node with the last element in the array.
        2.  Remove the last element from the array (effectively removing the old root).
        3.  *Heapify Down (Bubble Down):* Compare the new root node with its children. If the root node is larger than either of its children (min-heap), swap it with the smaller child.  Repeat this process until the heap property is restored.
    *   **Implementation (Python, continued):**

        ```python
            def extract_min(self):
                if not self.heap:
                    return None
                if len(self.heap) == 1:
                    return self.heap.pop()

                min_val = self.heap[0]
                self.heap[0] = self.heap.pop()  # Move last element to root
                self._heapify_down(0)
                return min_val

            def _heapify_down(self, index):
                left_child_index = 2 * index + 1
                right_child_index = 2 * index + 2
                smallest = index

                if left_child_index < len(self.heap) and self.heap[left_child_index] < self.heap[smallest]:
                    smallest = left_child_index

                if right_child_index < len(self.heap) and self.heap[right_child_index] < self.heap[smallest]:
                    smallest = right_child_index

                if smallest != index:
                    self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
                    self._heapify_down(smallest)
        ```

    *   **Time Complexity:** O(log n) - where n is the number of elements in the heap. In the worst case, the new root element might have to bubble down to a leaf.

*   **3.4. `heapify(array)`**

    *   **Purpose:** Converts an arbitrary array into a binary heap (min-heap or max-heap).
    *   **Method:**  Build the heap from the bottom up.  Start from the last non-leaf node and heapify down each node until the root is reached. This is known as Floyd's Heap Construction Algorithm. The last non-leaf node is at index (n//2) - 1.
    *   **Implementation (Python):**

        ```python
            def heapify(self, arr):
                self.heap = arr
                n = len(arr)
                for i in range((n // 2) - 1, -1, -1):
                    self._heapify_down(i)
        ```

    *   **Time Complexity:** O(n) -  Although it involves heapifying down which is O(log n), doing it from the bottom up results in a linear time complexity amortized. Intuitively, nodes near the bottom of the tree require less heapifying.

*   **3.5. `decrease_key(index, new_val)` (or `increase_key` for Max-Heap)**

    *   **Purpose:** Decreases the value of an element at a given `index` to `new_val`.  (For Max-Heap, this would be `increase_key`). Crucially, `new_val` *must* be less than the current value at `index`.
    *   **Steps:**
        1.  Set `heap[index] = new_val`.
        2.  *Heapify Up:* Since decreasing the key might violate the heap property, bubble the element up until the heap property is restored.
    *   **Implementation (Python, continued):**

        ```python
            def decrease_key(self, index, new_val):
                if index < 0 or index >= len(self.heap):
                    raise IndexError("Index out of bounds")
                if new_val > self.heap[index]:
                    raise ValueError("New value must be smaller than current value")

                self.heap[index] = new_val
                self._heapify_up(index)
        ```

    *   **Time Complexity:** O(log n) - Similar to `insert`, in the worst case, the element might have to bubble up to the root.

**4. Important Points to Remember**

*   Binary heaps provide efficient implementations of priority queues.
*   Heapify operations are crucial for maintaining the heap property.
*   The array-based implementation is memory-efficient and improves performance.
*   Understanding the differences between min-heaps and max-heaps is essential for choosing the appropriate data structure for a given problem.
*   Pay close attention to edge cases (e.g., empty heap, single-element heap, invalid indices).

**5. Applications**

*   **Priority Queues:**  Fundamental building block for many algorithms.
*   **Heap Sort:** An efficient (O(n log n)) sorting algorithm.
*   **Dijkstra's Algorithm:**  Used to find the shortest path in a graph.
*   **Huffman Coding:** Used for data compression.
*   **Median Maintenance:** Efficiently track the median of a stream of numbers.

**6. Practice Questions and Exercises**

1.  **Build a Min-Heap:** Given the array `[9, 3, 10, 1, 6, 4, 2]`, construct a min-heap using the `heapify` method. Show the array representation after each step of the heapification process.

    *   **Answer:**

    1.  Initial array: `[9, 3, 10, 1, 6, 4, 2]`
    2.  Heapify index 2 (10): No change, as it's a leaf.
    3.  Heapify index 1 (3): Swap 3 and 2 -> `[9, 2, 10, 1, 6, 4, 3]`
    4.  Heapify index 0 (9): Swap 9 and 1 -> `[1, 2, 10, 9, 6, 4, 3]`
        Swap 9 and 3 -> `[1, 2, 10, 3, 6, 4, 9]`
    5.  Final Min-Heap: `[1, 2, 10, 3, 6, 4, 9]`

2.  **Insert and Extract:** Start with an empty min-heap. Insert the following values in order: `5, 12, 3, 8, 1`. Then, perform two `extract_min` operations. Show the heap's array representation after each operation.

    *   **Answer:**

    1.  Insert 5: `[5]`
    2.  Insert 12: `[5, 12]`
    3.  Insert 3: `[3, 12, 5]`
    4.  Insert 8: `[3, 8, 5, 12]`
    5.  Insert 1: `[1, 3, 5, 12, 8]`
    6.  Extract Min: `[3, 8, 5, 12]`  Returned: 1
    7.  Extract Min: `[5, 8, 12]` Returned: 3

3.  **Time Complexity Analysis:** Explain why the `heapify` operation has a time complexity of O(n) despite involving O(log n) heapify down steps.

    *   **Answer:**

        The `heapify` operation, when building the heap from the bottom up, has an amortized time complexity of O(n) because the number of nodes at each level of the tree increases as we move down, but the amount of work (heapify down steps) required for each node decreases.  Most of the nodes are near the bottom of the tree, and they require minimal heapification. A more rigorous mathematical analysis confirms this O(n) bound.

4.  **Max-Heap Implementation:** Modify the provided MinHeap code to implement a MaxHeap class.

    *   **Answer:**  (Main changes involve reversing comparisons in `_heapify_up` and `_heapify_down` to prioritize larger values.)

        ```python
        class MaxHeap:
            def __init__(self):
                self.heap = []

            def peek(self):
                if self.heap:
                    return self.heap[0]
                return None

            def insert(self, key):
                self.heap.append(key)
                self._heapify_up(len(self.heap) - 1)

            def _heapify_up(self, index):
                parent_index = (index - 1) // 2
                if index > 0 and self.heap[index] > self.heap[parent_index]:  # Changed comparison
                    self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                    self._heapify_up(parent_index)

            def extract_max(self): # Renamed extract_min to extract_max
                if not self.heap:
                    return None
                if len(self.heap) == 1:
                    return self.heap.pop()

                max_val = self.heap[0]
                self.heap[0] = self.heap.pop()
                self._heapify_down(0)
                return max_val

            def _heapify_down(self, index):
                left_child_index = 2 * index + 1
                right_child_index = 2 * index + 2
                largest = index

                if left_child_index < len(self.heap) and self.heap[left_child_index] > self.heap[largest]: # Changed comparison
                    largest = left_child_index

                if right_child_index < len(self.heap) and self.heap[right_child_index] > self.heap[largest]: # Changed comparison
                    largest = right_child_index

                if largest != index:
                    self.heap[index], self.heap[largest] = self.heap[largest], self.heap[index]
                    self._heapify_down(largest)

            def heapify(self, arr):
                self.heap = arr
                n = len(arr)
                for i in range((n // 2) - 1, -1, -1):
                    self._heapify_down(i)

            def increase_key(self, index, new_val): # Renamed decrease_key to increase_key
                if index < 0 or index >= len(self.heap):
                    raise IndexError("Index out of bounds")
                if new_val < self.heap[index]: # Changed comparison
                    raise ValueError("New value must be larger than current value")

                self.heap[index] = new_val
                self._heapify_up(index)
        ```

These notes provide a comprehensive overview of binary heaps and their operations, along with examples, code snippets, and practice questions to help solidify your understanding. Remember to practice implementing these operations yourself to gain a deeper grasp of the concepts.
