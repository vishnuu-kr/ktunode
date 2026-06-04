---
title: "Insertion Sort"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing: Sorting Techniques – Selection Sort"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363f4"
status: "completed"
scrapedAt: "2026-05-23T16:20:50.575Z"
---
# Data Structures: Module 4 - Sorting and Hashing: Insertion Sort

## 1. Introduction to Sorting

Sorting is the process of arranging elements of a list or array in a specific order, typically ascending or descending. It's a fundamental operation in computer science with numerous applications, from searching efficiently to data analysis and database management.

**Importance of Sorting (Relates to CO4):**
*   **Efficient Searching:** Sorted data allows for faster searching algorithms like Binary Search (K3).
*   **Data Analysis:** Sorting is crucial for tasks like finding median, mode, and understanding data distributions (K3).
*   **Database Operations:** Databases heavily rely on sorting for indexing and retrieval (K3).
*   **Foundation for other Algorithms:** Many advanced algorithms utilize sorted data as a prerequisite.

## 2. Insertion Sort Algorithm

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

*   **Simplicity:** Easy to understand and implement.
*   **Efficiency on Small Data:** Performs well on small arrays or arrays that are already partially sorted.
*   **In-place Sorting:** Requires minimal extra memory.
*   **Stable:** Preserves the relative order of equal elements.

**Core Idea:**
Imagine sorting a hand of playing cards. You pick up one card at a time and insert it into its correct position within the cards you already hold, which are kept sorted. Insertion Sort applies this same principle to an array.

### 2.1 How Insertion Sort Works

The algorithm divides the input array into two parts: a sorted subarray and an unsorted subarray. Initially, the sorted subarray contains only the first element of the array. The algorithm then iterates through the unsorted subarray, taking one element at a time and inserting it into its correct position within the sorted subarray.

**Steps:**

1.  **Initialization:** The first element of the array (index 0) is considered sorted.
2.  **Iteration:** Start from the second element (index 1).
3.  **Key Selection:** Select the current element to be inserted as the `key`.
4.  **Comparison and Shifting:** Compare the `key` with elements in the sorted subarray (elements to its left) from right to left.
    *   If an element in the sorted subarray is greater than the `key`, shift that element one position to the right to make space for the `key`.
    *   Continue this shifting process until an element smaller than or equal to the `key` is encountered, or the beginning of the array is reached.
5.  **Insertion:** Insert the `key` into the position immediately after the last element that was smaller than or equal to it.
6.  **Repeat:** Repeat steps 2-5 for all remaining elements in the unsorted subarray.

### 2.2 Illustrative Example

Let's sort the array: `[12, 11, 13, 5, 6]`

**Iteration 1 (i = 1):**
*   `key = 11`
*   Sorted subarray: `[12]`
*   Compare `11` with `12`: `12 > 11`. Shift `12` to the right.
*   Array becomes: `[12, 12, 13, 5, 6]` (conceptually, the original 12 is now at index 1)
*   Insert `11` at index 0.
*   Array becomes: `[11, 12, 13, 5, 6]` (Sorted: `[11, 12]`)

**Iteration 2 (i = 2):**
*   `key = 13`
*   Sorted subarray: `[11, 12]`
*   Compare `13` with `12`: `12 < 13`. No shifting needed.
*   Insert `13` at its current position (index 2).
*   Array becomes: `[11, 12, 13, 5, 6]` (Sorted: `[11, 12, 13]`)

**Iteration 3 (i = 3):**
*   `key = 5`
*   Sorted subarray: `[11, 12, 13]`
*   Compare `5` with `13`: `13 > 5`. Shift `13` to the right.
*   Array becomes: `[11, 12, 13, 13, 6]`
*   Compare `5` with `12`: `12 > 5`. Shift `12` to the right.
*   Array becomes: `[11, 12, 12, 13, 6]`
*   Compare `5` with `11`: `11 > 5`. Shift `11` to the right.
*   Array becomes: `[11, 11, 12, 13, 6]`
*   Reached the beginning of the array. Insert `5` at index 0.
*   Array becomes: `[5, 11, 12, 13, 6]` (Sorted: `[5, 11, 12, 13]`)

**Iteration 4 (i = 4):**
*   `key = 6`
*   Sorted subarray: `[5, 11, 12, 13]`
*   Compare `6` with `13`: `13 > 6`. Shift `13` to the right.
*   Array becomes: `[5, 11, 12, 13, 13]`
*   Compare `6` with `12`: `12 > 6`. Shift `12` to the right.
*   Array becomes: `[5, 11, 12, 12, 13]`
*   Compare `6` with `11`: `11 > 6`. Shift `11` to the right.
*   Array becomes: `[5, 11, 11, 12, 13]`
*   Compare `6` with `5`: `5 < 6`. Stop shifting.
*   Insert `6` at index 1 (after `5`).
*   Array becomes: `[5, 6, 11, 12, 13]` (Sorted: `[5, 6, 11, 12, 13]`)

The array is now sorted.

### 2.3 Pseudocode (as seen in Gilberg & Forouzan)

```
InsertionSort(array A, int n)
  // A is an array of size n
  for i from 1 to n-1
    key = A[i]
    j = i - 1
    // Move elements of A[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while j >= 0 and A[j] > key
      A[j+1] = A[j]
      j = j - 1
    A[j+1] = key
```

### 2.4 C Implementation Example (Conceptual)

```c
void insertionSort(int arr[], int n) {
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
```

*(Refer to Horowitz, Sahni, & Anderson-Freed for detailed C implementations and explanations of array manipulation)*

## 3. Analysis of Insertion Sort

Understanding the performance of algorithms is crucial for selecting the most appropriate one for a given task. This relates to **CO1: Compare performance of algorithms using asymptotic notations**.

### 3.1 Time Complexity

The time complexity of Insertion Sort depends on the initial order of the elements in the array.

*   **Best Case:** **O(n)**
    *   This occurs when the array is already sorted. In this scenario, the inner `while` loop will execute at most once for each element (to check the first element of the sorted subarray), and no shifts will occur.
*   **Average Case:** **O(n^2)**
    *   This occurs when the array elements are in a random order. On average, each element will need to be compared with about half of the elements in the sorted subarray, and about half of the elements will be shifted.
*   **Worst Case:** **O(n^2)**
    *   This occurs when the array is sorted in reverse order. For each element, we have to compare it with all the preceding elements in the sorted subarray and shift them to the right.

**Explanation of O(n^2):**
The outer loop runs `n-1` times (for `i` from 1 to `n-1`). The inner `while` loop, in the worst case, can run up to `i` times for each iteration of the outer loop. This leads to a sum of `1 + 2 + 3 + ... + (n-1)`, which is approximately `n^2/2`. In Big O notation, we drop constant factors and lower-order terms, resulting in O(n^2).

*(Refer to Samanta, D. "Classic Data Structures" for a clear breakdown of average and worst-case scenarios and their relation to loops.)*

### 3.2 Space Complexity

*   **O(1)**
    *   Insertion Sort is an **in-place** sorting algorithm. It only requires a constant amount of extra memory for storing the `key` variable and a few loop control variables. It does not use any auxiliary data structures that grow with the input size.

### 3.3 When to Use Insertion Sort (Relates to CO4)

Insertion Sort is a good choice for:

*   **Small datasets:** Its simplicity and low overhead make it efficient for small arrays.
*   **Nearly sorted datasets:** If the input array is already mostly sorted, Insertion Sort performs very well, approaching O(n) complexity.
*   **Situations where simplicity of implementation is prioritized.**
*   **As a component of more complex sorting algorithms:** For example, in some hybrid sorting algorithms like Introsort (used in C++'s `std::sort`), Insertion Sort is used to sort small subarrays because of its efficiency on small inputs.

*(Refer to Aho, Hopcroft, & Ullman for discussions on algorithm efficiency and practical considerations for choosing sorting algorithms.)*

## 4. Strengths and Weaknesses of Insertion Sort

| Strengths                                      | Weaknesses                                  |
| :--------------------------------------------- | :------------------------------------------ |
| Simple to implement.                           | Inefficient for large datasets (O(n^2)).    |
| Efficient for small or nearly sorted arrays.   | Generally outperformed by O(n log n) sorts. |
| In-place sorting (O(1) space complexity).      |                                             |
| Stable sorting algorithm.                      |                                             |
| Adaptive: The number of operations depends on how far the elements are from their sorted position. |                                             |

## 5. Relation to Course Outcomes

*   **CO1 (Asymptotic Notations):** We analyzed Insertion Sort's time complexity in best, average, and worst cases (O(n), O(n^2)), and its space complexity (O(1)). This allows for comparison with other sorting algorithms. (Knowledge Level: K2)
*   **CO4 (Apply and compare techniques for searching and sorting):** Understanding Insertion Sort is directly applicable to applying and comparing sorting techniques. We can contrast its performance with algorithms like Bubble Sort, Selection Sort, Merge Sort, etc. (Knowledge Level: K3)

*(Note: While CO2, CO3, and CO5 are course outcomes, Insertion Sort itself doesn't directly address data structures like linked lists, trees, graphs, or hashing. However, the study of sorting is a foundational part of data structures and algorithms.)*

## 6. Practice Questions and Exercises

**Question 1:**
Trace the execution of Insertion Sort on the array `[30, 10, 40, 20, 50]`. Show the state of the array after each pass.

**Answer 1:**
Initial Array: `[30, 10, 40, 20, 50]`

**Pass 1 (i=1, key=10):**
*   `[30, 10, 40, 20, 50]` -> Compare 10 with 30. 30 > 10. Shift 30.
*   `[30, 30, 40, 20, 50]`
*   Insert 10.
*   Array: `[10, 30, 40, 20, 50]`

**Pass 2 (i=2, key=40):**
*   `[10, 30, 40, 20, 50]` -> Compare 40 with 30. 30 < 40. No shift.
*   Insert 40.
*   Array: `[10, 30, 40, 20, 50]`

**Pass 3 (i=3, key=20):**
*   `[10, 30, 40, 20, 50]` -> Compare 20 with 40. 40 > 20. Shift 40.
*   `[10, 30, 40, 40, 50]`
*   Compare 20 with 30. 30 > 20. Shift 30.
*   `[10, 30, 30, 40, 50]`
*   Compare 20 with 10. 10 < 20. Stop.
*   Insert 20.
*   Array: `[10, 20, 30, 40, 50]`

**Pass 4 (i=4, key=50):**
*   `[10, 20, 30, 40, 50]` -> Compare 50 with 40. 40 < 50. No shift.
*   Insert 50.
*   Array: `[10, 20, 30, 40, 50]`

Final Sorted Array: `[10, 20, 30, 40, 50]`

---

**Question 2:**
What is the time complexity of Insertion Sort in the best-case scenario, and when does this scenario occur?

**Answer 2:**
The time complexity in the best-case scenario is **O(n)**. This occurs when the input array is already sorted in ascending order.

---

**Question 3:**
If you need to sort a small array (e.g., 15 elements) that is known to be almost sorted, would Insertion Sort be a good choice? Justify your answer.

**Answer 3:**
Yes, Insertion Sort would be a good choice. Its strength lies in its efficiency for small datasets and its adaptive nature, meaning it performs well on nearly sorted arrays. The O(n^2) worst-case complexity is less of a concern for a small number of elements, and its simplicity makes it easy to implement.

---

**Question 4:**
What is the space complexity of Insertion Sort, and what does "in-place" sorting mean in this context?

**Answer 4:**
The space complexity of Insertion Sort is **O(1)**. "In-place" sorting means that the algorithm sorts the array without requiring significant additional memory. It only uses a constant amount of extra space for variables like `key` and loop counters, regardless of the input array's size.

---

## 7. Key Points to Remember

*   **Insertion Sort:** Builds a sorted array by iteratively inserting elements into their correct position within an already sorted subarray.
*   **Mechanism:** Compares the current element (`key`) with elements to its left and shifts larger elements to the right to create space.
*   **Time Complexity:**
    *   Best: O(n) (already sorted)
    *   Average: O(n^2)
    *   Worst: O(n^2) (reverse sorted)
*   **Space Complexity:** O(1) (in-place).
*   **Stability:** Yes, it preserves the relative order of equal elements.
*   **Use Cases:** Small datasets, nearly sorted datasets, simplicity.
*   **Comparison:** Less efficient than O(n log n) algorithms for large, unsorted datasets.

This concludes the study notes for Insertion Sort. Remember to refer back to the textbooks for more detailed explanations and formal proofs of complexity.
