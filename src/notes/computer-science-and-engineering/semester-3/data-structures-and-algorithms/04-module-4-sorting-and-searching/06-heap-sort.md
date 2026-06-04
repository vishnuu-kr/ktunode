---
title: "Heap Sort"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac4e"
status: "completed"
scrapedAt: "2026-05-20T16:23:12.087Z"
---
# Data Structures and Algorithms - Module 4: Sorting and Searching - Heap Sort

## 1. Introduction to Heap Sort

Heap Sort is an efficient, comparison-based sorting algorithm. It leverages the properties of a binary heap data structure to sort an array. It's known for its guaranteed O(n log n) time complexity in the worst, average, and best cases, making it a reliable sorting algorithm.

**Learning Outcomes:**

*   Understand the principles of Heap Sort.
*   Implement Heap Sort in code.
*   Analyze the time and space complexity of Heap Sort.
*   Compare Heap Sort with other sorting algorithms.

## 2. Key Concepts and Definitions

### 2.1. Binary Heap

*   **Definition:** A binary heap is a complete binary tree that satisfies the heap property.
    *   **Complete Binary Tree:** A binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.
    *   **Heap Property:**  There are two types of heaps:
        *   **Max-Heap:**  The value of each node is greater than or equal to the value of its children.  The largest element is at the root.
        *   **Min-Heap:** The value of each node is less than or equal to the value of its children. The smallest element is at the root.

*   **Representation:** Binary heaps are often represented as arrays, where the root is at index 0.  For a node at index `i`:
    *   Left child is at index `2i + 1`
    *   Right child is at index `2i + 2`
    *   Parent is at index `(i - 1) / 2` (integer division)

### 2.2. Heapify

*   **Definition:** The process of rearranging the elements of a subtree to satisfy the heap property.  Heapify is typically performed recursively.
*   **Max-Heapify:**  If a node violates the max-heap property (i.e., it's smaller than one of its children), swap it with the larger child and recursively heapify the affected subtree.
*   **Min-Heapify:**  If a node violates the min-heap property (i.e., it's larger than one of its children), swap it with the smaller child and recursively heapify the affected subtree.

### 2.3. Heap Sort Algorithm

Heap Sort involves the following steps:

1.  **Build a Max-Heap:**  Convert the input array into a max-heap.  This is done by calling max-heapify on all internal nodes (from the last non-leaf node upwards).
2.  **Extract Maximum Element:** Repeatedly extract the maximum element (root) and replace it with the last element in the heap.  Then, reduce the heap size by one and call max-heapify on the root to restore the heap property.

## 3. Heap Sort Algorithm in Detail

### 3.1. Building the Max-Heap

*   Start from the last non-leaf node in the array. This node is located at index `(n / 2) - 1`, where `n` is the size of the array.
*   Iterate from `(n / 2) - 1` down to 0.
*   For each node, call `max_heapify` to ensure that the subtree rooted at that node satisfies the max-heap property.

**Example:**

Consider the array: `[4, 10, 3, 5, 1, 2]`

1.  `n = 6`
2.  Last non-leaf node: `(6 / 2) - 1 = 2`.  This is the element `3`.
3.  Call `max_heapify(array, 2, 6)`. (Array, index, array size)
4.  Continue this process for nodes at indices 1 and 0.

### 3.2. Sorting the Array

1.  After building the max-heap, the largest element is at the root (index 0).
2.  Swap the root element with the last element in the heap (index `n - 1`).
3.  Reduce the heap size by 1 (decrement `n`).
4.  Call `max_heapify(array, 0, n)` to restore the max-heap property for the reduced heap.
5.  Repeat steps 2-4 until the heap size is 1.

**Example (Continuing from the previous example after the heap is built):**

Assume after building the max-heap, the array is: `[10, 5, 3, 4, 1, 2]`

1.  Swap `10` (root) with `2` (last element):  `[2, 5, 3, 4, 1, 10]`
2.  Reduce heap size: `n = 5`
3.  Call `max_heapify(array, 0, 5)`.
4.  Repeat until the array is sorted.

## 4. Implementation in Python

```python
def max_heapify(arr, n, i):
    """Heapifies a subtree rooted at index i.

    Args:
        arr: The array representing the heap.
        n: The size of the heap.
        i: The index of the root of the subtree.
    """
    largest = i  # Initialize largest as root
    left = 2 * i + 1  # left = 2*i + 1
    right = 2 * i + 2  # right = 2*i + 2

    # See if left child of root exists and is greater than root
    if left < n and arr[i] < arr[left]:
        largest = left

    # See if right child of root exists and is greater than largest so far
    if right < n and arr[largest] < arr[right]:
        largest = right

    # If largest is not root
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]  # swap

        # Recursively heapify the affected sub-tree
        max_heapify(arr, n, largest)


def heap_sort(arr):
    """Sorts an array using Heap Sort.

    Args:
        arr: The array to be sorted.
    """
    n = len(arr)

    # Build a maxheap.
    for i in range(n // 2 - 1, -1, -1):
        max_heapify(arr, n, i)

    # One by one extract elements
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # swap
        max_heapify(arr, i, 0)


# Example usage:
arr = [4, 10, 3, 5, 1, 2]
heap_sort(arr)
print("Sorted array is", arr)  # Output: Sorted array is [1, 2, 3, 4, 5, 10]
```

## 5. Time and Space Complexity

*   **Time Complexity:**
    *   **Building the heap:** O(n)
    *   **Sorting:** O(n log n) (n extractions, each taking O(log n) time)
    *   **Overall:** O(n + n log n) which simplifies to **O(n log n)** for all cases (best, average, and worst).
*   **Space Complexity:** **O(1)** (in-place sorting algorithm). Heap sort requires only a constant amount of extra space for temporary variables during swapping.

## 6. Comparison with Other Sorting Algorithms

| Algorithm       | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| --------------- | ---------------------- | ------------------------- | ----------------------- | ---------------- |
| Heap Sort       | O(n log n)            | O(n log n)               | O(n log n)             | O(1)             |
| Merge Sort      | O(n log n)            | O(n log n)               | O(n log n)             | O(n)             |
| Quick Sort      | O(n log n)            | O(n log n)               | O(n^2)                 | O(log n) (Avg)   |
| Insertion Sort  | O(n)                  | O(n^2)                    | O(n^2)                 | O(1)             |
| Bubble Sort     | O(n)                  | O(n^2)                    | O(n^2)                 | O(1)             |
| Selection Sort  | O(n^2)                | O(n^2)                    | O(n^2)                 | O(1)             |

**Observations:**

*   Heap Sort has a guaranteed O(n log n) time complexity, unlike Quick Sort which can degrade to O(n^2) in the worst case.
*   Merge Sort also has O(n log n) complexity, but it requires O(n) extra space, while Heap Sort is in-place (O(1) space).
*   For nearly sorted data, Insertion Sort can be more efficient than Heap Sort.
*   Heap Sort is generally preferred over Selection and Bubble Sort due to its better time complexity.

## 7. Practice Questions/Exercises

1.  **Question:** Given the array `[12, 11, 13, 5, 6, 7]`, show the step-by-step process of building a max-heap using the bottom-up approach.
    *   **Answer:**

        *   Original array: `[12, 11, 13, 5, 6, 7]`
        *   Last non-leaf node: `(6 / 2) - 1 = 2` (element `13`). `max_heapify(arr, 6, 2)` - No change as 13 is the largest.
        *   Next node: `1` (element `11`). `max_heapify(arr, 6, 1)`: `[12, 11, 13, 5, 6, 7]` -> `[12, 6, 13, 5, 11, 7]` -> `[12, 6, 13, 5, 11, 7]`
        *   Next node: `0` (element `12`). `max_heapify(arr, 6, 0)`: `[12, 6, 13, 5, 11, 7]` -> `[13, 6, 12, 5, 11, 7]` ->  `[13, 6, 12, 5, 11, 7]`

2.  **Question:** What is the time complexity of building a heap from an unsorted array of size n?
    *   **Answer:** O(n)

3.  **Question:** Explain why Heap Sort is considered an in-place sorting algorithm.
    *   **Answer:** Heap Sort is considered in-place because it sorts the array without requiring a significant amount of extra memory.  It primarily uses the input array itself to store the heap and perform the sorting. The extra space required is only for a few temporary variables used during swaps, which is considered constant (O(1)).

4.  **Question:** Implement a `min_heapify` function in Python.
    *   **Answer:**

```python
def min_heapify(arr, n, i):
    """Heapifies a subtree rooted at index i to satisfy the min-heap property."""
    smallest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] < arr[smallest]:
        smallest = left

    if right < n and arr[right] < arr[smallest]:
        smallest = right

    if smallest != i:
        arr[i], arr[smallest] = arr[smallest], arr[i]
        min_heapify(arr, n, smallest)
```

5. **Question:** Describe a situation where Heap Sort might be preferable to Quick Sort.
 *   **Answer:** Heap Sort is preferable to Quick Sort when a guaranteed O(n log n) time complexity is crucial. Quick Sort has a worst-case time complexity of O(n^2), which can occur with certain input data. Heap Sort ensures consistent performance, making it suitable for scenarios where predictable execution time is important, such as real-time systems or applications with strict performance requirements.

## 8. Important Points to Remember

*   Heap Sort leverages the heap data structure, which is a complete binary tree that satisfies the heap property.
*   Building the heap has a time complexity of O(n), and sorting takes O(n log n).
*   Heap Sort is an in-place sorting algorithm with O(1) space complexity.
*   It's a good choice when a guaranteed O(n log n) time complexity is required, and memory usage is a concern.
*   Understand the `max_heapify` (or `min_heapify`) operation is fundamental to building and maintaining the heap property.
*   Remember that the heap can be represented as an array, and the parent-child relationships can be calculated using index arithmetic.
