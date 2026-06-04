---
title: "Merge Sort and Heap Sort"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing: Sorting Techniques – Selection Sort"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363f6"
status: "completed"
scrapedAt: "2026-05-23T16:20:52.081Z"
---
# Data Structures: Module 4 - Sorting and Hashing: Sorting Techniques

## Topic: Merge Sort and Heap Sort

---

### Introduction to Module 4: Sorting and Hashing

This module delves into two fundamental areas of data management: sorting and hashing. Sorting algorithms arrange data in a specific order, which is crucial for efficient searching and retrieval. Hashing techniques provide a fast way to store and access data using hash functions.

**Course Outcomes Addressed in this Module:**
*   **CO1: Compare performance of algorithms using asymptotic notations (Knowledge Level: K2)**
*   **CO4: Apply and compare various techniques for searching and sorting. (Knowledge Level: K3)**
*   **CO5: Apply appropriate hash function to store and access a given dataset (Knowledge Level: K3)**

---

### 1. Merge Sort

Merge Sort is a classic **divide and conquer** sorting algorithm. It works by recursively dividing the input array into two halves, sorting each half, and then merging the sorted halves.

#### 1.1. Key Concepts and Definitions

*   **Divide and Conquer:** A problem-solving paradigm where a problem is broken down into smaller, similar subproblems, solved recursively, and then the solutions are combined to solve the original problem.
*   **Merging:** The process of combining two already sorted lists into a single sorted list.

#### 1.2. How Merge Sort Works

1.  **Divide:** If the array has more than one element, split it into two halves.
2.  **Conquer:** Recursively sort the two halves using Merge Sort.
3.  **Combine:** Merge the two sorted halves into a single sorted array.

#### 1.3. The Merge Process

The core of Merge Sort is the `Merge` procedure. It takes two sorted subarrays and merges them into a single sorted array. This is typically done using a temporary array.

**Algorithm for `Merge(arr, left, mid, right)`:**

1.  Create two temporary arrays, `L` and `R`, to hold the elements of the left subarray (`arr[left...mid]`) and the right subarray (`arr[mid+1...right]`), respectively.
2.  Initialize three pointers:
    *   `i` for the left subarray `L` (starts at 0).
    *   `j` for the right subarray `R` (starts at 0).
    *   `k` for the original array `arr` (starts at `left`).
3.  While `i` is less than the size of `L` and `j` is less than the size of `R`:
    *   If `L[i] <= R[j]`, copy `L[i]` to `arr[k]` and increment `i` and `k`.
    *   Else, copy `R[j]` to `arr[k]` and increment `j` and `k`.
4.  Copy any remaining elements from `L` (if `i` has not reached the end of `L`) to `arr`.
5.  Copy any remaining elements from `R` (if `j` has not reached the end of `R`) to `arr`.

#### 1.4. Pseudocode for Merge Sort

```
MergeSort(arr, left, right):
  if left < right:
    mid = floor((left + right) / 2)
    MergeSort(arr, left, mid)      // Sort first half
    MergeSort(arr, mid + 1, right) // Sort second half
    Merge(arr, left, mid, right)    // Merge the sorted halves
```

#### 1.5. Example Walkthrough

Let's sort the array: `[38, 27, 43, 3, 9, 82, 10]`

1.  **Divide:**
    *   `[38, 27, 43, 3]` and `[9, 82, 10]`
2.  **Recursive Calls:**
    *   Sort `[38, 27, 43, 3]` -> `[3, 27, 38, 43]`
    *   Sort `[9, 82, 10]` -> `[9, 10, 82]`
3.  **Merge:** Merge `[3, 27, 38, 43]` and `[9, 10, 82]`

    *   Compare 3 and 9. 3 is smaller. `arr` becomes `[3, ...]`. Left: `[27, 38, 43]`, Right: `[9, 10, 82]`
    *   Compare 27 and 9. 9 is smaller. `arr` becomes `[3, 9, ...]`. Left: `[27, 38, 43]`, Right: `[10, 82]`
    *   Compare 27 and 10. 10 is smaller. `arr` becomes `[3, 9, 10, ...]`. Left: `[27, 38, 43]`, Right: `[82]`
    *   Compare 27 and 82. 27 is smaller. `arr` becomes `[3, 9, 10, 27, ...]`. Left: `[38, 43]`, Right: `[82]`
    *   Compare 38 and 82. 38 is smaller. `arr` becomes `[3, 9, 10, 27, 38, ...]`. Left: `[43]`, Right: `[82]`
    *   Compare 43 and 82. 43 is smaller. `arr` becomes `[3, 9, 10, 27, 38, 43, ...]`. Left: `[]`, Right: `[82]`
    *   Left array is empty. Copy remaining from Right. `arr` becomes `[3, 9, 10, 27, 38, 43, 82]`.

    **Final Sorted Array:** `[3, 9, 10, 27, 38, 43, 82]`

#### 1.6. Time and Space Complexity (CO1)

*   **Time Complexity:**
    *   **Best Case:** O(n log n)
    *   **Average Case:** O(n log n)
    *   **Worst Case:** O(n log n)
    *   *Explanation:* The recurrence relation for Merge Sort is T(n) = 2T(n/2) + O(n). This results in O(n log n) time complexity. The dividing step takes O(log n) levels, and at each level, the merging step takes O(n) time.

*   **Space Complexity:** O(n)
    *   *Explanation:* Merge Sort requires an auxiliary array of size `n` to perform the merging operation.

#### 1.7. Advantages and Disadvantages

*   **Advantages:**
    *   Stable sorting algorithm (maintains relative order of equal elements).
    *   Guaranteed O(n log n) performance.
    *   Well-suited for external sorting (data too large to fit in memory).
*   **Disadvantages:**
    *   Requires extra space for the auxiliary array.
    *   Not in-place sorting algorithm.
