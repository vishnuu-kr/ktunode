---
title: "Merge Sort and Heap Sort"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea21"
status: "completed"
scrapedAt: "2026-05-23T17:55:18.757Z"
---
# Data Structures: Module 4 - Sorting and Hashing

## Topic: Merge Sort and Heap Sort

This module delves into two powerful comparison-based sorting algorithms: Merge Sort and Heap Sort. We will explore their underlying principles, algorithmic steps, time and space complexities, and compare their performance against other sorting techniques, aligning with Course Outcomes CO1 and CO4.

---

### 1. Merge Sort

Merge Sort is a highly efficient, general-purpose, comparison-based sorting algorithm. It is a classic example of a **divide and conquer** algorithm.

#### 1.1. Key Concepts and Definitions

*   **Divide and Conquer:** A problem-solving paradigm that involves breaking down a complex problem into smaller, more manageable subproblems. The solutions to the subproblems are then combined to solve the original problem.
*   **Merge Operation:** The core of Merge Sort. It takes two *already sorted* subarrays and combines them into a single sorted array.
*   **Recursion:** Merge Sort utilizes recursion to divide the array until it reaches subarrays of size one (which are inherently sorted).

#### 1.2. Algorithmic Steps

1.  **Divide:** If the array has more than one element, divide it into two roughly equal halves.
2.  **Conquer:** Recursively sort the two halves using Merge Sort.
3.  **Combine (Merge):** Merge the two sorted halves into a single sorted array.

#### 1.3. The Merge Operation in Detail

The `merge` function is crucial. It takes three arguments: the array `A`, the start index `p`, the middle index `q`, and the end index `r`. It merges `A[p..q]` and `A[q+1..r]` into a single sorted subarray `A[p..r]`.

**Steps for merging two sorted subarrays `L` and `R` into `A`:**

1.  Create two temporary arrays, `L` and `R`, to hold the elements of the left and right subarrays respectively.
2.  Copy the elements from the original array into these temporary arrays.
3.  Initialize three pointers:
    *   `i` for `L` (starts at 0)
    *   `j` for `R` (starts at 0)
    *   `k` for `A` (starts at `p`)
4.  While `i < length(L)` and `j < length(R)`:
    *   Compare `L[i]` and `R[j]`.
    *   Copy the smaller element into `A[k]`.
    *   Increment the pointer of the array from which the element was copied.
    *   Increment `k`.
5.  Copy any remaining elements from `L` (if `i < length(L)`) into `A`.
6.  Copy any remaining elements from `R` (if `j < length(R)`) into `A`.

**Example of Merge Operation:**

Let's merge `[2, 7]` and `[1, 5]` into `A[0..3]`.

Initial state:
`L = [2, 7]`, `R = [1, 5]`
`A = [?, ?, ?, ?]` (conceptually, we are filling A)

| `i` | `j` | `L[i]` | `R[j]` | Action     | `A`         |
| --- | --- | ------ | ------ | ---------- | ----------- |
| 0   | 0   | 2      | 1      | `A[0]=R[0]` (1) | `[1, ?, ?, ?]` |
| 0   | 1   | 2      | 5      | `A[1]=L[0]` (2) | `[1, 2, ?, ?]` |
| 1   | 1   | 7      | 5      | `A[2]=R[1]` (5) | `[1, 2, 5, ?]` |
| 1   | 2   | 7      | (end)  | `A[3]=L[1]` (7) | `[1, 2, 5, 7]` |

Resulting sorted subarray: `[1, 2, 5, 7]`

#### 1.4. Pseudocode for Merge Sort

```pseudocode
MERGE_SORT(A, p, r):
  if p < r:
    q = floor((p + r) / 2)
    MERGE_SORT(A, p, q)
    MERGE_SORT(A, q + 1, r)
    MERGE(A, p, q, r)

MERGE(A, p, q, r):
  n1 = q - p + 1
  n2 = r - q

  // Create temporary arrays L and R
  L[0..n1-1]
  R[0..n2-1]

  // Copy data to temporary arrays
  for i from 0 to n1-1:
    L[i] = A[p + i]
  for j from 0 to n2-1:
    R[j] = A[q + 1 + j]

  // Merge the temporary arrays back into A[p..r]
  i = 0 // Initial index of first subarray
  j = 0 // Initial index of second subarray
  k = p // Initial index of merged subarray

  while i < n1 and j < n2:
    if L[i] <= R[j]:
      A[k] = L[i]
      i = i + 1
    else:
      A[k] = R[j]
      j = j + 1
    k = k + 1

  // Copy the remaining elements of L, if any
  while i < n1:
    A[k] = L[i]
    i = i + 1
    k = k + 1

  // Copy the remaining elements of R, if any
  while j < n2:
    A[k] = R[j]
    j = j + 1
    k = k + 1
```

#### 1.5. Time Complexity

*   **Best Case:** O(n log n)
*   **Average Case:** O(n log n)
*   **Worst Case:** O(n log n)

**Explanation:**
The recurrence relation for Merge Sort is:
T(n) = 2T(n/2) + O(n)  (where O(n) is for the merge operation)

Using the Master Theorem or substitution, we find that T(n) is O(n log n). The depth of the recursion is log n, and at each level, the merge operation takes O(n) time.

#### 1.6. Space Complexity

*   **Worst Case:** O(n)

**Explanation:**
Merge Sort requires auxiliary space to store the temporary arrays `L` and `R` during the merge operation. In the worst case, these temporary arrays can together hold all `n` elements of the array.

#### 1.7. Advantages and Disadvantages

*   **Advantages:**
    *   Stable sort: Maintains the relative order of equal elements.
    *   Guaranteed O(n log n) performance, regardless of initial array order.
    *   Well-suited for external sorting (when data doesn't fit into memory).
*   **Disadvantages:**
    *   Requires O(n) auxiliary space, making it less space-efficient than in-place sorts like QuickSort (average case) or HeapSort.
    *   Can be slower than QuickSort on average due to the overhead of merging and the guaranteed worst-case performance.

#### 1.8. Relevance to Course Outcomes

*   **CO1 (Asymptotic Notations):** We analyze Merge Sort's performance using O(n log n) time and O(n) space, demonstrating understanding of asymptotic notations.
*   **CO4 (Compare Searching and Sorting):** Merge Sort is a key algorithm to compare against others like Insertion Sort, Bubble Sort, and later, Heap Sort, in terms of efficiency and characteristics.

---

### 2. Heap Sort

Heap Sort is another efficient, comparison-based sorting algorithm that uses the **heap data structure**. It is an **in-place** sorting algorithm, meaning it sorts the array without requiring significant additional memory.

#### 2.1. Key Concepts and Definitions

*   **Heap:** A specialized tree-based data structure that satisfies the heap property.
    *   **Max-Heap:** In a max-heap, for any given node `i`, the value of `i` is greater than or equal to the values of its children. The root node contains the maximum element.
    *   **Min-Heap:** In a min-heap, the value of `i` is less than or equal to the values of its children. The root node contains the minimum element.
*   **Heapify:** A procedure to maintain the heap property. `heapify(A, i, heap_size)` rearranges the subtree rooted at index `i` to satisfy the heap property, assuming the subtrees rooted at its children are already heaps.
*   **Build Heap:** A procedure to convert an arbitrary array into a heap. This is typically done by calling `heapify` on all non-leaf nodes in a bottom-up manner.
*   **In-place Sorting:** Sorting algorithms that use a constant amount of auxiliary memory, typically O(1).

#### 2.2. Algorithmic Steps

Heap Sort typically uses a Max-Heap to sort an array in ascending order.

1.  **Build Max-Heap:** Convert the input array into a max-heap. This means the largest element will be at the root (index 0).
2.  **Sort:** Repeat the following process until the heap is empty (or reduced to a single element):
    *   **Extract Max:** Swap the root element (the largest element) with the last element of the heap.
    *   **Reduce Heap Size:** Decrease the effective size of the heap by one.
    *   **Heapify:** Call `heapify` on the root (index 0) to restore the max-heap property for the reduced heap.

#### 2.3. Building a Max-Heap (Build-Max-Heap)

To build a max-heap from an array `A` of size `n`:

1.  Start from the last non-leaf node. The index of the last non-leaf node in a 0-indexed array of size `n` is `floor(n/2) - 1`.
2.  Iterate backwards from this node up to the root (index 0).
3.  For each node, call `heapify` to ensure the max-heap property is maintained for the subtree rooted at that node.

#### 2.4. Heapify (Max-Heapify)

`MAX-HEAPIFY(A, i, heap_size)` assumes that the binary trees rooted at `LEFT(i)` and `RIGHT(i)` are max-heaps, but that `A[i]` might be smaller than its children, thus violating the max-heap property. `MAX-HEAPIFY` lets the value at `A[i]` "float down" in the max-heap so that the subtree rooted at `i` becomes a max-heap.

**Steps for `MAX-HEAPIFY(A, i, heap_size)`:**

1.  Let `largest = i`.
2.  Calculate the indices of the left child: `l = 2*i + 1`.
3.  Calculate the indices of the right child: `r = 2*i + 2`.
4.  If `l < heap_size` and `A[l] > A[largest]`, then set `largest = l`.
5.  If `r < heap_size` and `A[r] > A[largest]`, then set `largest = r`.
6.  If `largest` is not `i`:
    *   Swap `A[i]` and `A[largest]`.
    *   Recursively call `MAX-HEAPIFY(A, largest, heap_size)` to ensure the subtree rooted at the new `largest` index is also a max-heap.

#### 2.5. Pseudocode for Heap Sort

```pseudocode
HEAP-SORT(A):
  n = length(A)

  // Build Max-Heap
  BUILD-MAX-HEAP(A, n)

  // One by one extract an element from heap
  for i from n-1 down to 1:
    // Move current root to end
    swap A[0] with A[i]

    // call max heapify on the reduced heap
    MAX-HEAPIFY(A, 0, i) // heap_size is now 'i'

BUILD-MAX-HEAP(A, n):
  // Index of last non-leaf node
  start_index = floor(n / 2) - 1
  // Perform reverse level order traversal from last non-leaf node
  // and heapify each node
  for i from start_index down to 0:
    MAX-HEAPIFY(A, i, n)

MAX-HEAPIFY(A, i, heap_size):
  largest = i
  l = 2 * i + 1
  r = 2 * i + 2

  // If left child is larger than root
  if l < heap_size and A[l] > A[largest]:
    largest = l

  // If right child is larger than largest so far
  if r < heap_size and A[r] > A[largest]:
    largest = r

  // If largest is not root
  if largest != i:
    swap A[i] with A[largest]
    // Recursively heapify the affected sub-tree
    MAX-HEAPIFY(A, largest, heap_size)
```

#### 2.6. Time Complexity

*   **Best Case:** O(n log n)
*   **Average Case:** O(n log n)
*   **Worst Case:** O(n log n)

**Explanation:**
*   **Build-Max-Heap:** Building the heap takes O(n) time. While it appears to be O(n log n) because `heapify` is O(log n) and it's called n/2 times, a tighter analysis shows it's O(n).
*   **Sorting Phase:** The loop runs `n-1` times. In each iteration, we perform a swap (O(1)) and a `heapify` operation (O(log n)). Therefore, this phase takes O(n log n) time.
*   **Overall:** O(n) + O(n log n) = O(n log n).

#### 2.7. Space Complexity

*   **Worst Case:** O(1)

**Explanation:**
Heap Sort is an in-place sorting algorithm because it only requires a constant amount of auxiliary space for a few variables (like `largest`, `l`, `r`, and the temporary variable for swapping).

#### 2.8. Advantages and Disadvantages

*   **Advantages:**
    *   In-place sorting (O(1) space complexity).
    *   Guaranteed O(n log n) time complexity for all cases.
    *   Efficient for finding the k-largest/smallest elements.
*   **Disadvantages:**
    *   Not a stable sort. The relative order of equal elements might change.
    *   Generally slower than QuickSort on average due to higher constant factors.
    *   Can be less cache-friendly than other algorithms like QuickSort.

#### 2.9. Relevance to Course Outcomes

*   **CO1 (Asymptotic Notations):** We analyze Heap Sort's performance using O(n log n) time and O(1) space, reinforcing the understanding of asymptotic notations.
*   **CO4 (Compare Searching and Sorting):** Heap Sort is another key algorithm to compare against Merge Sort, QuickSort, and others, highlighting its unique characteristics (in-place, stability).

---

### 3. Comparison of Merge Sort and Heap Sort

| Feature          | Merge Sort                  | Heap Sort                   |
| :--------------- | :-------------------------- | :-------------------------- |
| **Time Complexity** | O(n log n) (Best, Avg, Worst) | O(n log n) (Best, Avg, Worst) |
| **Space Complexity** | O(n) (Auxiliary)            | O(1) (In-place)             |
| **Stability**    | Stable                      | Not Stable                  |
| **Data Structure** | Uses no specific data structure (recursive divide and conquer) | Uses Heap data structure    |
| **Suitability**  | External sorting, when stability is required, predictable performance | When memory is limited, when stability is not crucial, finding k-largest/smallest |

#### 3.1. When to Use Which?

*   **Use Merge Sort when:**
    *   You need a **stable sort**.
    *   You are sorting data that doesn't fit entirely in memory (external sorting).
    *   You need a guaranteed O(n log n) performance and the O(n) auxiliary space is acceptable.
*   **Use Heap Sort when:**
    *   **Memory is a constraint** (O(1) space is a significant advantage).
    *   You need a guaranteed O(n log n) performance, and stability is not a concern.
    *   You need to efficiently find the k-largest or k-smallest elements from a collection.

#### 3.2. Relevance to Course Outcomes

*   **CO1 (Asymptotic Notations):** Directly comparing their complexities reinforces understanding.
*   **CO4 (Compare Searching and Sorting):** This comparison is a core part of this outcome, enabling students to choose the appropriate sorting algorithm for different scenarios.

---

### 4. Practice Questions and Exercises

**Question 1:**
Consider an array `A = [12, 11, 13, 5, 6, 7]`. Trace the execution of Heap Sort on this array. Show the state of the array after building the max-heap and after each extraction.

**Answer 1:**

1.  **Initial Array:** `A = [12, 11, 13, 5, 6, 7]`, `n = 6`

2.  **Build Max-Heap:**
    *   Last non-leaf node index: `floor(6/2) - 1 = 3 - 1 = 2`.
    *   Call `MAX-HEAPIFY(A, 2, 6)`: `A[2]=13`. Children are `A[5]=7`. `13` is fine.
    *   Call `MAX-HEAPIFY(A, 1, 6)`: `A[1]=11`. Children are `A[3]=5`, `A[4]=6`. `11` is fine.
    *   Call `MAX-HEAPIFY(A, 0, 6)`: `A[0]=12`. Children are `A[1]=11`, `A[2]=13`. `13` is larger than `12`. Swap `A[0]` and `A[2]`.
        *   Array becomes: `[13, 11, 12, 5, 6, 7]`
        *   Recursively call `MAX-HEAPIFY(A, 2, 6)` (since `A[2]` is now 12, its child is `A[5]=7`). `12` is fine.
    *   **Array after Build-Max-Heap:** `[13, 11, 12, 5, 6, 7]`

3.  **Sorting Phase:**
    *   **Iteration 1 (i = 5):**
        *   Swap `A[0]` (13) with `A[5]` (7).
        *   Array: `[7, 11, 12, 5, 6, 13]`
        *   Call `MAX-HEAPIFY(A, 0, 5)` (heap size is now 5).
            *   `A[0]=7`. Children are `A[1]=11`, `A[2]=12`. `12` is largest. Swap `A[0]` and `A[2]`.
            *   Array: `[12, 11, 7, 5, 6, 13]`
            *   Recursively call `MAX-HEAPIFY(A, 2, 5)`. `A[2]=7`. Child is `A[5]` (but index 5 is out of heap_size=5). `A[2]=7` is fine.
        *   **Array after Iteration 1:** `[12, 11, 7, 5, 6, 13]` (Sorted part: `[13]`)

    *   **Iteration 2 (i = 4):**
        *   Swap `A[0]` (12) with `A[4]` (6).
        *   Array: `[6, 11, 7, 5, 12, 13]`
        *   Call `MAX-HEAPIFY(A, 0, 4)` (heap size is now 4).
            *   `A[0]=6`. Children are `A[1]=11`, `A[2]=7`. `11` is largest. Swap `A[0]` and `A[1]`.
            *   Array: `[11, 6, 7, 5, 12, 13]`
            *   Recursively call `MAX-HEAPIFY(A, 1, 4)`. `A[1]=6`. Child is `A[3]=5`. `6` is fine.
        *   **Array after Iteration 2:** `[11, 6, 7, 5, 12, 13]` (Sorted part: `[12, 13]`)

    *   **Iteration 3 (i = 3):**
        *   Swap `A[0]` (11) with `A[3]` (5).
        *   Array: `[5, 6, 7, 11, 12, 13]`
        *   Call `MAX-HEAPIFY(A, 0, 3)` (heap size is now 3).
            *   `A[0]=5`. Children are `A[1]=6`, `A[2]=7`. `7` is largest. Swap `A[0]` and `A[2]`.
            *   Array: `[7, 6, 5, 11, 12, 13]`
            *   Recursively call `MAX-HEAPIFY(A, 2, 3)`. `A[2]=5`. No children within heap size. `5` is fine.
        *   **Array after Iteration 3:** `[7, 6, 5, 11, 12, 13]` (Sorted part: `[11, 12, 13]`)

    *   **Iteration 4 (i = 2):**
        *   Swap `A[0]` (7) with `A[2]` (5).
        *   Array: `[5, 6, 7, 11, 12, 13]`
        *   Call `MAX-HEAPIFY(A, 0, 2)` (heap size is now 2).
            *   `A[0]=5`. Child is `A[1]=6`. `6` is largest. Swap `A[0]` and `A[1]`.
            *   Array: `[6, 5, 7, 11, 12, 13]`
            *   Recursively call `MAX-HEAPIFY(A, 1, 2)`. `A[1]=5`. No children. `5` is fine.
        *   **Array after Iteration 4:** `[6, 5, 7, 11, 12, 13]` (Sorted part: `[7, 11, 12, 13]`)

    *   **Iteration 5 (i = 1):**
        *   Swap `A[0]` (6) with `A[1]` (5).
        *   Array: `[5, 6, 7, 11, 12, 13]`
        *   Call `MAX-HEAPIFY(A, 0, 1)` (heap size is now 1).
            *   `A[0]=5`. No children. `5` is fine.
        *   **Array after Iteration 5:** `[5, 6, 7, 11, 12, 13]` (Sorted part: `[6, 7, 11, 12, 13]`)

4.  **Final Sorted Array:** `[5, 6, 7, 11, 12, 13]`

**Question 2:**
Explain the stability of Merge Sort and Heap Sort. If stability is required, which algorithm would you choose and why?

**Answer 2:**

*   **Merge Sort Stability:** Merge Sort is a **stable** sorting algorithm. This means that if two elements have the same value, their relative order in the sorted output will be the same as their relative order in the input. This is because during the merge step, when elements from the left and right subarrays are equal, the element from the left subarray is always placed first.

*   **Heap Sort Stability:** Heap Sort is **not a stable** sorting algorithm. The process of swapping elements to maintain the heap property can disrupt the original relative order of equal elements. For example, if an element is moved down the heap, its original position relative to another equal element might be lost.

*   **Choice for Stability:** If stability is a requirement, **Merge Sort** should be chosen. Its inherent property of preserving the relative order of equal elements makes it suitable for scenarios where the original ordering of duplicates is important.

**Question 3:**
What is the primary advantage of Heap Sort over Merge Sort in terms of memory usage?

**Answer 3:**
The primary advantage of Heap Sort over Merge Sort in terms of memory usage is that Heap Sort is an **in-place sorting algorithm**, requiring only **O(1) auxiliary space**. In contrast, Merge Sort requires **O(n) auxiliary space** to store temporary arrays during the merge operation. This makes Heap Sort preferable when memory is a significant constraint.

---

### 5. Important Points to Remember

*   **Merge Sort is Divide and Conquer:** Break into halves, sort halves, merge sorted halves.
*   **Merge Sort's Bottleneck:** The `merge` operation, which takes O(n) time.
*   **Merge Sort's Space:** O(n) auxiliary space is its main drawback.
*   **Merge Sort's Stability:** It is a stable sort.
*   **Heap Sort Uses Heaps:** It leverages the heap data structure (specifically Max-Heap for ascending sort).
*   **Heapify is Key:** The `heapify` operation maintains the heap property.
*   **Build-Heap is O(n):** Converting an array to a heap is efficient.
*   **Heap Sort's Space:** O(1) auxiliary space, making it in-place.
*   **Heap Sort's Stability:** It is not a stable sort.
*   **Guaranteed Performance:** Both Merge Sort and Heap Sort offer O(n log n) performance in all cases (best, average, worst).
*   **Trade-offs:** Choose Merge Sort for stability and external sorting; choose Heap Sort for space efficiency.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 6. Textbook and Reference Incorporations

*   **Horowitz, Sahni, Anderson-Freed:** These authors provide a detailed explanation of Merge Sort's divide and conquer approach and Heap Sort's heapify operations, including pseudocode and complexity analysis. (Chapter 6 for Sorting and Chapter 4 for Heaps).
*   **Samanta D:** This book also covers Merge Sort and Heap Sort with clear examples and emphasis on their algorithmic steps and efficiency, often providing array-based visualizations. (Chapters on Sorting Algorithms).
*   **Gilberg, Forouzan:** Their "Pseudocode Approach" makes the algorithms very clear. The pseudocode provided earlier is representative of their style. (Chapters on Sorting Algorithms).
*   **Aho, Hopcroft, Ullman:** This foundational text offers rigorous mathematical analysis of algorithms, including the recurrence relations for Merge Sort and the proof for Heap Sort's O(n) build-heap time. (Chapters on Sorting and Heaps).
*   **Tremblay, Sorenson:** They often present these algorithms with a focus on their implementation details and practical applications. (Chapters on Sorting Algorithms).
*   **Brass:** Advanced texts like Brass's might explore variations or optimizations of these algorithms, but the core principles remain consistent.
*   **Lipschutz:** Schaum's Outlines are excellent for quick review and problem-solving practice, often including step-by-step walkthroughs for algorithms like Merge Sort and Heap Sort.

These notes have been structured to align with the learning outcomes by covering the algorithms, their complexities (CO1), their application in sorting (CO4), and the underlying data structures (heaps for Heap Sort). The comparison between them is also crucial for CO4. The problem-solving exercises cater to practical understanding, aligning with CO4.