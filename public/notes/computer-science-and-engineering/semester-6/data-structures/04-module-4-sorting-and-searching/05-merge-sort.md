---
title: "Merge Sort"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bead"
status: "completed"
scrapedAt: "2026-05-20T16:52:08.384Z"
---
# Data Structures: Module 4 - Sorting and Searching

## Topic: Merge Sort

### 1. Introduction to Merge Sort

Merge Sort is a highly efficient, comparison-based sorting algorithm known for its **divide and conquer** approach. It's a stable sorting algorithm, meaning that the relative order of equal elements is preserved.

#### Key Concepts:

*   **Divide and Conquer:** This strategy involves breaking down a problem into smaller, similar subproblems until they are trivial to solve, and then combining the solutions of the subproblems to solve the original problem.
*   **Recursive Algorithm:** Merge Sort is typically implemented using recursion.
*   **Stability:** A sorting algorithm is stable if it maintains the relative order of records with equal keys.

#### When to Use Merge Sort:

*   When stability is important.
*   When the data size is large and efficiency is a priority.
*   When external sorting (sorting data that doesn't fit entirely in memory) is required.

### 2. How Merge Sort Works (The Algorithm)

Merge Sort operates in two main phases:

1.  **Divide:** The unsorted list is recursively divided into two halves until each sublist contains only one element. A list with one element is considered sorted.
2.  **Conquer (Merge):** The sublists are then recursively merged back together in sorted order. This merging process is the core of the algorithm.

#### Detailed Steps:

1.  **Base Case:** If the list has 0 or 1 element, it's already sorted. Return.
2.  **Divide:**
    *   Find the middle point of the list.
    *   Divide the list into two halves: a left sublist and a right sublist.
3.  **Recursively Sort:**
    *   Recursively call Merge Sort on the left sublist.
    *   Recursively call Merge Sort on the right sublist.
4.  **Merge:**
    *   Merge the two sorted sublists back into a single sorted list. This is done by comparing elements from both sublists and placing the smaller element into a temporary array.

### 3. The Merge Operation (Crucial Step)

The `merge` operation is where the actual sorting happens. It takes two already sorted sublists and combines them into a single sorted list.

#### How the Merge Operation Works:

Let's assume we have two sorted sublists: `Left` and `Right`, and we want to merge them into a single sorted list `MergedList`.

1.  **Pointers/Indices:** Initialize three pointers/indices:
    *   `i`: Pointer for the `Left` sublist (starts at 0).
    *   `j`: Pointer for the `Right` sublist (starts at 0).
    *   `k`: Pointer for the `MergedList` (starts at 0).
2.  **Comparison:**
    *   While `i` is within the bounds of `Left` AND `j` is within the bounds of `Right`:
        *   If `Left[i]` is less than or equal to `Right[j]`:
            *   Copy `Left[i]` to `MergedList[k]`.
            *   Increment `i`.
        *   Else (`Right[j]` is smaller):
            *   Copy `Right[j]` to `MergedList[k]`.
            *   Increment `j`.
        *   Increment `k` in either case.
3.  **Copy Remaining Elements:**
    *   After the loop, one of the sublists might still have remaining elements.
    *   If there are remaining elements in `Left` (i.e., `i` is still within bounds):
        *   Copy all remaining elements from `Left` to `MergedList`.
    *   If there are remaining elements in `Right` (i.e., `j` is still within bounds):
        *   Copy all remaining elements from `Right` to `MergedList`.

#### Example of Merge Operation:

Let's merge two sorted sublists:
`Left = [2, 5, 8]`
`Right = [1, 3, 6, 9]`

| i | j | k | Left[i] | Right[j] | MergedList[k] | Action                               |
|---|---|---|---------|----------|---------------|--------------------------------------|
| 0 | 0 | 0 | 2       | 1        | 1             | `Right[0]` is smaller. Copy 1. `j++`. |
| 0 | 1 | 1 | 2       | 3        | 2             | `Left[0]` is smaller. Copy 2. `i++`.  |
| 1 | 1 | 2 | 5       | 3        | 3             | `Right[1]` is smaller. Copy 3. `j++`. |
| 1 | 2 | 3 | 5       | 6        | 5             | `Left[1]` is smaller. Copy 5. `i++`.  |
| 2 | 2 | 4 | 8       | 6        | 6             | `Right[2]` is smaller. Copy 6. `j++`. |
| 2 | 3 | 5 | 8       | 9        | 8             | `Left[2]` is smaller. Copy 8. `i++`.  |
| 3 | 3 | 6 | -       | 9        | 9             | `Left` exhausted. `Right[3]` is smaller. Copy 9. `j++`. |

*   `Left` is exhausted (`i` is now 3).
*   `Right` is exhausted (`j` is now 4).

The merged sorted list is: `[1, 2, 3, 5, 6, 8, 9]`

### 4. Pseudocode for Merge Sort

```
MergeSort(array A, start, end):
  if start < end:
    mid = floor((start + end) / 2)
    MergeSort(A, start, mid)        // Sort left half
    MergeSort(A, mid + 1, end)      // Sort right half
    Merge(A, start, mid, end)       // Merge sorted halves

Merge(array A, start, mid, end):
  // Create temporary arrays
  left_size = mid - start + 1
  right_size = end - mid
  LeftArray = array[left_size]
  RightArray = array[right_size]

  // Copy data to temp arrays
  for i from 0 to left_size - 1:
    LeftArray[i] = A[start + i]
  for j from 0 to right_size - 1:
    RightArray[j] = A[mid + 1 + j]

  // Merge the temp arrays back into A[start...end]
  i = 0 // Initial index of left subarray
  j = 0 // Initial index of right subarray
  k = start // Initial index of merged subarray

  while i < left_size AND j < right_size:
    if LeftArray[i] <= RightArray[j]:
      A[k] = LeftArray[i]
      i = i + 1
    else:
      A[k] = RightArray[j]
      j = j + 1
    k = k + 1

  // Copy the remaining elements of LeftArray[], if any
  while i < left_size:
    A[k] = LeftArray[i]
    i = i + 1
    k = k + 1

  // Copy the remaining elements of RightArray[], if any
  while j < right_size:
    A[k] = RightArray[j]
    j = j + 1
    k = k + 1
```

### 5. Time and Space Complexity

#### Time Complexity:

*   **Best Case:** O(n log n)
*   **Average Case:** O(n log n)
*   **Worst Case:** O(n log n)

**Explanation:**
The `divide` step takes O(log n) levels of recursion. At each level, the `merge` operation processes all `n` elements. Therefore, the total time complexity is O(n log n).

#### Space Complexity:

*   **O(n)**

**Explanation:**
Merge Sort requires auxiliary space for the temporary arrays used during the `merge` operation. In the worst case, these temporary arrays can hold up to `n` elements, leading to a space complexity of O(n).

### 6. Advantages and Disadvantages of Merge Sort

#### Advantages:

*   **Guaranteed Performance:** Always O(n log n) time complexity, regardless of the input array's initial order.
*   **Stable:** Preserves the relative order of equal elements.
*   **Efficient for Large Datasets:** Performs well even with very large amounts of data.
*   **Suitable for Linked Lists:** Can be efficiently implemented for linked lists with O(n log n) time and O(log n) or O(1) space (depending on implementation).
*   **Can be Parallelized:** The divide and conquer nature makes it amenable to parallel processing.

#### Disadvantages:

*   **Requires Extra Space:** The need for O(n) auxiliary space can be a limitation in memory-constrained environments.
*   **Not In-Place:** Unlike algorithms like Bubble Sort or Insertion Sort (in their typical implementations), Merge Sort is not an in-place sorting algorithm.
*   **Slower for Small Datasets:** For very small arrays, simpler algorithms like Insertion Sort might be slightly faster due to lower overhead.

### 7. Practice Questions and Exercises

**Question 1:**

Trace the execution of Merge Sort on the following array: `[38, 27, 43, 3, 9, 82, 10]`

**Question 2:**

What is the time complexity of Merge Sort in the worst case? Explain why.

**Question 3:**

Explain why Merge Sort is considered a stable sorting algorithm.

**Question 4:**

If you have an array of size `N`, what is the space complexity of Merge Sort and why?

**Question 5:**

Consider two sorted sub-arrays: `[10, 20, 30]` and `[5, 15, 25, 35]`. Merge these two sub-arrays into a single sorted array.

---

### Answers to Practice Questions

**Answer 1:**

Let's trace the execution:

**Initial Array:** `[38, 27, 43, 3, 9, 82, 10]`

**Divide:**
*   `[38, 27, 43]` and `[3, 9, 82, 10]`
*   `[38, 27]` and `[43]` | `[3, 9]` and `[82, 10]`
*   `[38]` and `[27]` | `[43]` | `[3]` and `[9]` | `[82]` and `[10]`

**Merge (bottom-up):**

1.  Merge `[38]` and `[27]` -> `[27, 38]`
2.  Merge `[27, 38]` and `[43]` -> `[27, 38, 43]`

3.  Merge `[3]` and `[9]` -> `[3, 9]`
4.  Merge `[82]` and `[10]` -> `[10, 82]`

5.  Merge `[3, 9]` and `[10, 82]` -> `[3, 9, 10, 82]`

6.  Merge `[27, 38, 43]` and `[3, 9, 10, 82]`

    *   Compare 27 and 3 -> 3
    *   Compare 27 and 9 -> 9
    *   Compare 27 and 10 -> 10
    *   Compare 27 and 82 -> 27
    *   Compare 38 and 82 -> 38
    *   Compare 43 and 82 -> 43
    *   Remaining: 82

    **Final Sorted Array:** `[3, 9, 10, 27, 38, 43, 82]`

**Answer 2:**

The time complexity of Merge Sort in the worst case is **O(n log n)**. This is because the algorithm always divides the array into two halves recursively until single-element arrays are formed. This process creates `log n` levels of recursion. At each level, the merge operation iterates through all `n` elements to combine the sorted sub-arrays. Therefore, the total time complexity is `n` (for merging) multiplied by `log n` (for the levels of recursion), resulting in O(n log n). This holds true for best, average, and worst cases because the division and merging steps are performed regardless of the initial order of elements.

**Answer 3:**

Merge Sort is stable because during the merge operation, when elements from the left and right sub-arrays are compared, if they are equal, the element from the **left sub-array is chosen first**. This ensures that if two elements have the same value, their original relative order is maintained in the merged list.

**Answer 4:**

The space complexity of Merge Sort is **O(n)**. This is due to the requirement of auxiliary space for temporary arrays used during the merge step. For an array of size `N`, the merge operation typically needs two temporary arrays whose combined size can be up to `N` to hold the elements of the two sub-arrays being merged.

**Answer 5:**

Let `Left = [10, 20, 30]` and `Right = [5, 15, 25, 35]`.

Initialize pointers: `i = 0` (for Left), `j = 0` (for Right), `k = 0` (for merged array).

1.  `Left[0]` (10) vs `Right[0]` (5). `5` is smaller. Merged: `[5]`. `j++`.
2.  `Left[0]` (10) vs `Right[1]` (15). `10` is smaller. Merged: `[5, 10]`. `i++`.
3.  `Left[1]` (20) vs `Right[1]` (15). `15` is smaller. Merged: `[5, 10, 15]`. `j++`.
4.  `Left[1]` (20) vs `Right[2]` (25). `20` is smaller. Merged: `[5, 10, 15, 20]`. `i++`.
5.  `Left[2]` (30) vs `Right[2]` (25). `25` is smaller. Merged: `[5, 10, 15, 20, 25]`. `j++`.
6.  `Left[2]` (30) vs `Right[3]` (35). `30` is smaller. Merged: `[5, 10, 15, 20, 25, 30]`. `i++`.

Now, `Left` is exhausted (`i` is 3). Copy remaining elements from `Right`.

7.  Copy `Right[3]` (35). Merged: `[5, 10, 15, 20, 25, 30, 35]`. `j++`.

The merged sorted array is: `[5, 10, 15, 20, 25, 30, 35]`

---

### 8. Important Points to Remember

*   **Divide and Conquer:** The fundamental principle behind Merge Sort.
*   **Recursive Nature:** It breaks down the problem recursively.
*   **Merge Operation:** The critical step where two sorted sub-arrays are combined efficiently.
*   **Time Complexity:** Consistently O(n log n) for all cases.
*   **Space Complexity:** O(n) due to auxiliary space.
*   **Stability:** A key advantage, preserving the order of equal elements.
*   **Not In-Place:** Requires extra memory.
*   **Versatile:** Effective for various data types and structures, including linked lists.
