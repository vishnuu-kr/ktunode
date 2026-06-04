---
title: "Insertion Sort"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea1f"
status: "completed"
scrapedAt: "2026-05-23T17:55:17.344Z"
---
# Data Structures: Module 4 - Sorting and Hashing

## Topic: Insertion Sort

### Learning Outcomes Covered:

*   Understand the fundamental principles of Insertion Sort.
*   Analyze the time and space complexity of Insertion Sort.
*   Implement Insertion Sort algorithm.
*   Compare Insertion Sort with other sorting algorithms.

### Course Outcomes Alignment:

*   **CO4 (K3): Apply and compare various techniques for searching and sorting.** This topic directly addresses the application and comparison of sorting techniques.

### 1. Introduction to Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, Insertion Sort provides several advantages:

*   **Simplicity:** It is easy to implement.
*   **Efficiency for small data sets:** It performs well for small inputs or for arrays that are already partially sorted.
*   **In-place sorting:** It requires minimal extra memory.
*   **Stable sorting:** It preserves the relative order of equal elements.

**Key Concept:** The core idea is to iterate through the input array, picking up each element and inserting it into its correct position within the *already sorted* portion of the array.

### 2. How Insertion Sort Works

Imagine you have a hand of playing cards. You pick up cards one by one and insert them into their correct sorted position in your hand. This is analogous to how Insertion Sort works.

The algorithm divides the input array into two parts:

1.  **A sorted sub-array:** Initially, this sub-array contains only the first element of the array.
2.  **An unsorted sub-array:** This contains the remaining elements.

The algorithm proceeds as follows:

*   **Iterate:** Start from the second element of the array (index 1).
*   **Select Element:** Take the current element from the unsorted part and store it in a temporary variable (often called `key` or `current_element`).
*   **Compare and Shift:** Compare this `key` with the elements in the sorted sub-array, moving from right to left. If an element in the sorted sub-array is greater than the `key`, shift that element one position to the right to make space for the `key`.
*   **Insert:** Continue shifting until you find an element in the sorted sub-array that is less than or equal to the `key`, or you reach the beginning of the array. Then, insert the `key` into the position immediately after the element that is less than or equal to it (or at the beginning if no such element is found).
*   **Repeat:** Repeat this process for all elements in the unsorted sub-array until the entire array is sorted.

### 3. Example Walkthrough

Let's sort the array: `[12, 11, 13, 5, 6]`

**Initial Array:** `[12, 11, 13, 5, 6]`

**Iteration 1:**
*   Consider `11` (at index 1). `key = 11`.
*   Sorted sub-array: `[12]`
*   Compare `11` with `12`. `12 > 11`.
*   Shift `12` to the right: `[ , 12, 13, 5, 6]`
*   Insert `11` at index 0: `[11, 12, 13, 5, 6]`
*   Sorted sub-array is now: `[11, 12]`

**Iteration 2:**
*   Consider `13` (at index 2). `key = 13`.
*   Sorted sub-array: `[11, 12]`
*   Compare `13` with `12`. `12 < 13`. No shifting needed.
*   Insert `13` at its current position: `[11, 12, 13, 5, 6]`
*   Sorted sub-array is now: `[11, 12, 13]`

**Iteration 3:**
*   Consider `5` (at index 3). `key = 5`.
*   Sorted sub-array: `[11, 12, 13]`
*   Compare `5` with `13`. `13 > 5`. Shift `13` right: `[11, 12, , 13, 6]`
*   Compare `5` with `12`. `12 > 5`. Shift `12` right: `[11, , 12, 13, 6]`
*   Compare `5` with `11`. `11 > 5`. Shift `11` right: `[ , 11, 12, 13, 6]`
*   Insert `5` at index 0: `[5, 11, 12, 13, 6]`
*   Sorted sub-array is now: `[5, 11, 12, 13]`

**Iteration 4:**
*   Consider `6` (at index 4). `key = 6`.
*   Sorted sub-array: `[5, 11, 12, 13]`
*   Compare `6` with `13`. `13 > 6`. Shift `13` right: `[5, 11, 12, , 13]`
*   Compare `6` with `12`. `12 > 6`. Shift `12` right: `[5, 11, , 12, 13]`
*   Compare `6` with `11`. `11 > 6`. Shift `11` right: `[5, , 11, 12, 13]`
*   Compare `6` with `5`. `5 < 6`. Stop shifting.
*   Insert `6` at index 1: `[5, 6, 11, 12, 13]`
*   Sorted sub-array is now: `[5, 6, 11, 12, 13]`

**Final Sorted Array:** `[5, 6, 11, 12, 13]`

### 4. Pseudocode

```
InsertionSort(A)
  n = length(A)
  for i from 1 to n-1:
    key = A[i]
    j = i - 1
    // Move elements of A[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while j >= 0 and A[j] > key:
      A[j+1] = A[j]
      j = j - 1
    A[j+1] = key
```

### 5. Implementation (Conceptual C-like code)

```c
void insertionSort(int arr[], int n) {
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
```

**Reference:** This implementation aligns with the principles described in *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Anderson-Freed.

### 6. Time Complexity Analysis

The time complexity of Insertion Sort depends on the initial order of the array.

*   **Best Case:** The array is already sorted.
    *   In this case, the inner `while` loop condition `A[j] > key` will always be false.
    *   Each element is compared only once with its preceding element.
    *   Number of comparisons: `n-1`
    *   Number of shifts: `0`
    *   **Time Complexity: O(n)** (linear time)

*   **Worst Case:** The array is sorted in reverse order.
    *   In this case, each element `key` needs to be compared with all preceding elements in the sorted sub-array and shifted to the beginning.
    *   For the `i`-th element, we perform `i` comparisons and `i` shifts.
    *   Total comparisons: `1 + 2 + 3 + ... + (n-1) = n(n-1)/2`
    *   Total shifts: `1 + 2 + 3 + ... + (n-1) = n(n-1)/2`
    *   **Time Complexity: O(n^2)** (quadratic time)

*   **Average Case:** The array is in a random order.
    *   On average, each element will need to be compared with half of the elements in the sorted sub-array.
    *   **Time Complexity: O(n^2)** (quadratic time)

**Key Concept:** The number of inversions in the array is directly related to the number of swaps/shifts performed by Insertion Sort.

### 7. Space Complexity Analysis

*   Insertion Sort is an **in-place** sorting algorithm.
*   It only requires a constant amount of extra space for storing the `key` (the current element being inserted) and loop variables.
*   **Space Complexity: O(1)** (constant space)

**Reference:** This is a common characteristic highlighted in most data structures textbooks, including *Classic Data Structures* by Samanta D.

### 8. When to Use Insertion Sort?

*   **Small datasets:** For arrays with fewer than 50 elements, Insertion Sort can be competitive with more complex algorithms due to its low overhead.
*   **Nearly sorted datasets:** If the input array is already partially sorted, Insertion Sort performs very efficiently (close to O(n)).
*   **Online sorting:** Insertion Sort can sort data as it arrives, meaning it doesn't need the entire dataset to be available at once.
*   **As a subroutine:** It is often used as a subroutine in more advanced sorting algorithms like **Hybrid Sorts** (e.g., Timsort, Introsort) where it's used to sort small sub-arrays.

### 9. Comparison with Other Sorting Algorithms

| Algorithm         | Best Case Time | Average Case Time | Worst Case Time | Space Complexity | Stability | Notes                                      |
| :---------------- | :------------- | :---------------- | :-------------- | :--------------- | :-------- | :----------------------------------------- |
| **Insertion Sort**| O(n)           | O(n^2)            | O(n^2)          | O(1)             | Yes       | Simple, efficient for small/nearly sorted |
| Bubble Sort       | O(n)           | O(n^2)            | O(n^2)          | O(1)             | Yes       | Simple, but generally less efficient      |
| Selection Sort    | O(n^2)         | O(n^2)            | O(n^2)          | O(1)             | No        | Always performs n*(n-1)/2 comparisons      |
| Merge Sort        | O(n log n)     | O(n log n)        | O(n log n)      | O(n)             | Yes       | Efficient, but requires extra space       |
| QuickSort         | O(n log n)     | O(n log n)        | O(n^2)          | O(log n) avg     | No        | Generally fastest in practice            |
| HeapSort          | O(n log n)     | O(n log n)        | O(n log n)      | O(1)             | No        | In-place, efficient, but not stable     |

**CO4 Alignment:** This table directly supports comparing Insertion Sort with other techniques for sorting.

### 10. Practice Questions

**Question 1:**
What is the time complexity of Insertion Sort in the best-case scenario?
(a) O(n^2)
(b) O(n log n)
(c) O(n)
(d) O(log n)

**Question 2:**
Which of the following best describes Insertion Sort?
(a) It divides the array into two halves and sorts them recursively.
(b) It repeatedly finds the minimum element and swaps it with the first unsorted element.
(c) It iterates through the array, inserting each element into its correct position within the already sorted portion.
(d) It uses a stack-like approach to sort elements.

**Question 3:**
Is Insertion Sort a stable sorting algorithm? Explain why or why not.

**Question 4:**
Consider the array: `[3, 1, 4, 1, 5, 9, 2, 6]`
Trace the execution of Insertion Sort on this array, showing the state of the array after each pass (or major insertion).

**Question 5:**
For what type of input data is Insertion Sort most efficient compared to other O(n^2) sorting algorithms like Bubble Sort and Selection Sort?

### 11. Answers to Practice Questions

**Answer 1:**
(c) O(n)
**Explanation:** In the best-case scenario, the array is already sorted. The inner `while` loop condition `A[j] > key` will never be met, resulting in only a single comparison for each element.

**Answer 2:**
(c) It iterates through the array, inserting each element into its correct position within the already sorted portion.
**Explanation:** This accurately describes the "builds the final sorted array one item at a time" nature of Insertion Sort.

**Answer 3:**
Yes, Insertion Sort is a stable sorting algorithm.
**Explanation:** Stability means that if two elements have the same value, their relative order in the sorted output will be the same as their relative order in the input. In Insertion Sort, when an element `key` is inserted, it is placed *after* any elements that are equal to it in the sorted sub-array. This is because the `while` loop condition is `A[j] > key`. If `A[j] == key`, the loop terminates, and `key` is inserted at `j+1`, preserving the original order of equal elements.

**Answer 4:**
Initial: `[3, 1, 4, 1, 5, 9, 2, 6]`

1.  `key = 1`, `[3]`. `3 > 1`. Shift `3`. Insert `1`.
    Array: `[1, 3, 4, 1, 5, 9, 2, 6]`
2.  `key = 4`, `[1, 3]`. `3 < 4`. Insert `4`.
    Array: `[1, 3, 4, 1, 5, 9, 2, 6]`
3.  `key = 1`, `[1, 3, 4]`. `4 > 1`, shift `4`. `3 > 1`, shift `3`. `1 == 1`. Insert `1`.
    Array: `[1, 1, 3, 4, 5, 9, 2, 6]`
4.  `key = 5`, `[1, 1, 3, 4]`. `4 < 5`. Insert `5`.
    Array: `[1, 1, 3, 4, 5, 9, 2, 6]`
5.  `key = 9`, `[1, 1, 3, 4, 5]`. `5 < 9`. Insert `9`.
    Array: `[1, 1, 3, 4, 5, 9, 2, 6]`
6.  `key = 2`, `[1, 1, 3, 4, 5, 9]`. `9 > 2`, shift `9`. `5 > 2`, shift `5`. `4 > 2`, shift `4`. `3 > 2`, shift `3`. `1 < 2`. Insert `2`.
    Array: `[1, 1, 2, 3, 4, 5, 9, 6]`
7.  `key = 6`, `[1, 1, 2, 3, 4, 5, 9]`. `9 > 6`, shift `9`. `5 < 6`. Insert `6`.
    Array: `[1, 1, 2, 3, 4, 5, 6, 9]`

**Final Sorted Array:** `[1, 1, 2, 3, 4, 5, 6, 9]`

**Answer 5:**
Insertion Sort is most efficient for **nearly sorted datasets**.
**Explanation:** When the dataset is nearly sorted, the number of elements that need to be shifted for each insertion is very small, bringing the performance closer to the best-case O(n) complexity. This is in contrast to Bubble Sort, which can still perform many swaps even on nearly sorted data, and Selection Sort, which always performs O(n^2) comparisons regardless of the initial order.

### 12. Important Points to Remember

*   **In-place:** Requires only O(1) extra space.
*   **Stable:** Preserves the relative order of equal elements.
*   **Adaptive:** Performance improves as the input array becomes more sorted.
*   **Complexity:** O(n^2) in the average and worst cases, O(n) in the best case.
*   **Good for:** Small datasets, nearly sorted datasets, and as a subroutine in hybrid sorting algorithms.
*   **Comparison:** Better than Bubble Sort and Selection Sort for nearly sorted data, but generally outperformed by O(n log n) algorithms for larger, randomly ordered datasets.

This concludes our detailed notes on Insertion Sort. Remember to practice implementing and tracing it to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
