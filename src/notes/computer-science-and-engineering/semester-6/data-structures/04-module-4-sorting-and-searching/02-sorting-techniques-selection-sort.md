---
title: "Sorting Techniques :- Selection Sort"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8beaa"
status: "completed"
scrapedAt: "2026-05-20T16:52:06.254Z"
---
# Data Structures: Module 4 - Sorting and Searching

## Topic: Sorting Techniques - Selection Sort

---

### 1. Introduction to Sorting

*   **Definition:** Sorting is the process of arranging elements of a list or array in a specific order, typically ascending or descending.
*   **Importance:** Sorting is a fundamental operation in computer science, enabling efficient searching, data processing, and various other algorithms.
*   **Types of Sorting Algorithms:** There are many sorting algorithms, each with different time and space complexities, making them suitable for different scenarios. We will explore several of these in this module.

---

### 2. Selection Sort: Overview

*   **Concept:** Selection Sort is a simple, in-place comparison-based sorting algorithm. It works by repeatedly finding the minimum (or maximum) element from the unsorted part of the list and putting it at the beginning (or end) of the sorted part.
*   **In-place:** It sorts the array by swapping elements within the original array, meaning it doesn't require significant additional memory.
*   **Comparison-based:** It relies on comparing elements to determine their relative order.

---

### 3. How Selection Sort Works: Step-by-Step

Selection Sort divides the input list into two parts:
1.  **The sorted sublist:** Initially empty, grows from the left.
2.  **The unsorted sublist:** Initially the entire list, shrinks from the left.

The algorithm iterates through the unsorted sublist to find the minimum element and swaps it with the first element of the unsorted sublist. This process continues until the entire list is sorted.

**Detailed Steps:**

1.  **Find the minimum element:** Iterate through the unsorted sublist (starting from the current position) to find the element with the smallest value.
2.  **Swap:** Swap the found minimum element with the first element of the unsorted sublist.
3.  **Move the boundary:** Consider the first element of the unsorted sublist now as part of the sorted sublist.
4.  **Repeat:** Repeat steps 1-3 for the remaining unsorted sublist until the entire list is sorted.

---

### 4. Example: Sorting an Array using Selection Sort

Let's sort the following array in ascending order: `[64, 25, 12, 22, 11]`

**Pass 1:**

*   **Unsorted Sublist:** `[64, 25, 12, 22, 11]` (indices 0 to 4)
*   **Find minimum:** The minimum element is `11` at index `4`.
*   **Swap:** Swap `64` (at index `0`) with `11` (at index `4`).
*   **Array after swap:** `[11, 25, 12, 22, 64]`
*   **Sorted Sublist:** `[11]`
*   **Unsorted Sublist:** `[25, 12, 22, 64]` (indices 1 to 4)

**Pass 2:**

*   **Unsorted Sublist:** `[25, 12, 22, 64]` (indices 1 to 4)
*   **Find minimum:** The minimum element is `12` at index `2`.
*   **Swap:** Swap `25` (at index `1`) with `12` (at index `2`).
*   **Array after swap:** `[11, 12, 25, 22, 64]`
*   **Sorted Sublist:** `[11, 12]`
*   **Unsorted Sublist:** `[25, 22, 64]` (indices 2 to 4)

**Pass 3:**

*   **Unsorted Sublist:** `[25, 22, 64]` (indices 2 to 4)
*   **Find minimum:** The minimum element is `22` at index `3`.
*   **Swap:** Swap `25` (at index `2`) with `22` (at index `3`).
*   **Array after swap:** `[11, 12, 22, 25, 64]`
*   **Sorted Sublist:** `[11, 12, 22]`
*   **Unsorted Sublist:** `[25, 64]` (indices 3 to 4)

**Pass 4:**

*   **Unsorted Sublist:** `[25, 64]` (indices 3 to 4)
*   **Find minimum:** The minimum element is `25` at index `3`.
*   **Swap:** Swap `25` (at index `3`) with `25` (at index `3`). (No actual swap occurs as it's already in place).
*   **Array after swap:** `[11, 12, 22, 25, 64]`
*   **Sorted Sublist:** `[11, 12, 22, 25]`
*   **Unsorted Sublist:** `[64]` (index 4)

**Pass 5:**

*   The unsorted sublist has only one element (`64`). The algorithm terminates.

**Final Sorted Array:** `[11, 12, 22, 25, 64]`

---

### 5. Pseudocode for Selection Sort

```
function selectionSort(arr):
  n = length(arr)

  // Traverse through all array elements
  for i from 0 to n-2:
    // Find the minimum element in the unsorted array
    min_index = i
    for j from i+1 to n-1:
      if arr[j] < arr[min_index]:
        min_index = j

    // Swap the found minimum element with the first element
    swap(arr[i], arr[min_index])

  return arr
```

---

### 6. Time and Space Complexity of Selection Sort

*   **Time Complexity:**
    *   **Best Case:** O(n^2) - The number of comparisons is always the same, regardless of the initial order of elements.
    *   **Average Case:** O(n^2)
    *   **Worst Case:** O(n^2)
    *   **Explanation:** The algorithm has two nested loops. The outer loop runs `n-1` times, and the inner loop runs approximately `n` times for each iteration of the outer loop. Thus, the total number of comparisons is roughly proportional to n * n.
*   **Space Complexity:**
    *   **O(1)** - Selection Sort is an in-place sorting algorithm. It only requires a constant amount of extra space for temporary variables (e.g., to store the minimum index and for swapping).

---

### 7. Advantages of Selection Sort

*   **Simple to understand and implement:** Its logic is straightforward.
*   **In-place sorting:** Requires minimal extra memory.
*   **Minimizes swaps:** It performs at most `n-1` swaps, which can be beneficial if write operations are expensive.

---

### 8. Disadvantages of Selection Sort

*   **Inefficient for large datasets:** The O(n^2) time complexity makes it slow for large arrays.
*   **Performance does not improve with sorted input:** Even if the array is already sorted, it will still perform all the comparisons.
*   **Not adaptive:** It doesn't change its behavior based on the input data.

---

### 9. When to Use Selection Sort

*   **Small datasets:** Where its inefficiency is not a major concern.
*   **When the number of writes (swaps) is critical:** If writing to memory is significantly more expensive than reading, Selection Sort's minimal swaps can be an advantage.
*   **As a pedagogical tool:** To introduce basic sorting concepts due to its simplicity.

---

### 10. Practice Questions & Exercises

**Question 1:**
Trace the execution of Selection Sort on the following array to sort it in ascending order: `[5, 1, 4, 2, 8]`
Show the state of the array after each pass.

**Answer 1:**
Let's trace the array `[5, 1, 4, 2, 8]`

*   **Initial Array:** `[5, 1, 4, 2, 8]`

*   **Pass 1:**
    *   Unsorted: `[5, 1, 4, 2, 8]`
    *   Minimum is `1` at index `1`.
    *   Swap `5` (index 0) with `1` (index 1).
    *   **Array:** `[1, 5, 4, 2, 8]`

*   **Pass 2:**
    *   Unsorted: `[5, 4, 2, 8]` (starting from index 1)
    *   Minimum is `2` at index `3`.
    *   Swap `5` (index 1) with `2` (index 3).
    *   **Array:** `[1, 2, 4, 5, 8]`

*   **Pass 3:**
    *   Unsorted: `[4, 5, 8]` (starting from index 2)
    *   Minimum is `4` at index `2`.
    *   Swap `4` (index 2) with `4` (index 2). (No swap)
    *   **Array:** `[1, 2, 4, 5, 8]`

*   **Pass 4:**
    *   Unsorted: `[5, 8]` (starting from index 3)
    *   Minimum is `5` at index `3`.
    *   Swap `5` (index 3) with `5` (index 3). (No swap)
    *   **Array:** `[1, 2, 4, 5, 8]`

*   **Final Sorted Array:** `[1, 2, 4, 5, 8]`

---

**Question 2:**
What is the time complexity of Selection Sort, and why?

**Answer 2:**
The time complexity of Selection Sort is **O(n^2)**. This is because it uses two nested loops. The outer loop iterates `n-1` times, and the inner loop iterates roughly `n` times for each outer loop iteration to find the minimum element. This results in approximately n * n comparisons, leading to a quadratic time complexity. The number of comparisons doesn't change based on whether the input array is already sorted or not.

---

**Question 3:**
What is the space complexity of Selection Sort? Explain why.

**Answer 3:**
The space complexity of Selection Sort is **O(1)**. This is because it is an **in-place** sorting algorithm. It sorts the array by modifying the original array directly and only uses a constant amount of extra memory for auxiliary variables (like `min_index` and for the swap operation). It does not require any additional data structures whose size depends on the input size.

---

**Question 4:**
Consider an array `[3, 1, 4, 1, 5, 9, 2, 6]`.
a) How many swaps will Selection Sort perform to sort this array in ascending order?
b) What is the final sorted array?

**Answer 4:**
Let's trace for swaps: `[3, 1, 4, 1, 5, 9, 2, 6]`

*   **Pass 1:** Min is `1` at index `1`. Swap `3` with `1`. Array: `[1, 3, 4, 1, 5, 9, 2, 6]`. **1 swap**.
*   **Pass 2:** Min is `1` at index `3`. Swap `3` with `1`. Array: `[1, 1, 4, 3, 5, 9, 2, 6]`. **1 swap**.
*   **Pass 3:** Min is `2` at index `6`. Swap `4` with `2`. Array: `[1, 1, 2, 3, 5, 9, 4, 6]`. **1 swap**.
*   **Pass 4:** Min is `3` at index `3`. Swap `3` with `3`. No swap. Array: `[1, 1, 2, 3, 5, 9, 4, 6]`. **0 swaps**.
*   **Pass 5:** Min is `4` at index `6`. Swap `5` with `4`. Array: `[1, 1, 2, 3, 4, 9, 5, 6]`. **1 swap**.
*   **Pass 6:** Min is `5` at index `6`. Swap `9` with `5`. Array: `[1, 1, 2, 3, 4, 5, 9, 6]`. **1 swap**.
*   **Pass 7:** Min is `6` at index `7`. Swap `9` with `6`. Array: `[1, 1, 2, 3, 4, 5, 6, 9]`. **1 swap**.

a) Total swaps: 1 + 1 + 1 + 0 + 1 + 1 + 1 = **6 swaps**.
b) Final sorted array: **`[1, 1, 2, 3, 4, 5, 6, 9]`**

---

### 11. Key Points to Remember

*   Selection Sort is **simple and in-place**.
*   It guarantees to perform at most **n-1 swaps**.
*   Its time complexity is **O(n^2)** in all cases (best, average, worst).
*   It is **not adaptive** and does not perform better on partially sorted arrays.
*   Its main advantage is minimizing swaps, which can be useful if write operations are costly.
*   It is generally **not recommended for large datasets** due to its quadratic time complexity.
