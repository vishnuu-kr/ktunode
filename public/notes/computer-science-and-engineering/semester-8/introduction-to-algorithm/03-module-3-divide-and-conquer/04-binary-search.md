---
title: "Binary Search"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 3: Divide and Conquer "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbd0"
status: "completed"
scrapedAt: "2026-05-20T17:25:14.730Z"
---
# Introduction to Algorithms: Module 3 - Divide and Conquer

## Topic: Binary Search

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the fundamental principle of binary search:** Grasp how the "divide and conquer" strategy is applied to efficiently search a sorted list.
*   **Describe the steps involved in the binary search algorithm:** Articulate the process of repeatedly dividing the search interval in half.
*   **Analyze the time complexity of binary search:** Determine how the number of operations grows with the input size.
*   **Implement binary search in a programming language:** Write code to perform binary search on a sorted array.
*   **Identify the prerequisites for binary search:** Recognize why the input data must be sorted.
*   **Compare binary search with linear search:** Understand the trade-offs and efficiency differences between the two algorithms.
*   **Apply binary search to solve problems:** Recognize scenarios where binary search is an optimal searching technique.

---

### 2. Key Concepts and Definitions

#### 2.1. What is Binary Search?

Binary Search is a highly efficient searching algorithm that works on **sorted** arrays or lists. It's a classic example of the **Divide and Conquer** paradigm.

#### 2.2. Divide and Conquer Principle

The Divide and Conquer paradigm involves three main steps:

1.  **Divide:** Break down the problem into smaller, independent subproblems of the same type.
2.  **Conquer:** Solve the subproblems recursively. If the subproblems are small enough, solve them directly (base case).
3.  **Combine:** Combine the solutions to the subproblems to get the solution to the original problem.

#### 2.3. How Binary Search Works (The "Divide" Step)

Binary search repeatedly divides the search interval in half. The core idea is to compare the target value with the middle element of the array.

*   If the target value matches the middle element, the search is complete.
*   If the target value is less than the middle element, the search continues in the **left half** of the array.
*   If the target value is greater than the middle element, the search continues in the **right half** of the array.

This process continues until the target value is found or the search interval becomes empty.

#### 2.4. Prerequisites for Binary Search

*   **The array/list MUST be sorted.** Binary search relies on the ordered nature of the data to eliminate half of the remaining search space in each step. If the data is not sorted, binary search will not work correctly.

#### 2.5. Key Components of the Algorithm

*   **Sorted Array/List:** The data structure to be searched.
*   **Target Value (Key):** The element we are looking for.
*   **Low/Left Boundary:** The index of the first element in the current search interval.
*   **High/Right Boundary:** The index of the last element in the current search interval.
*   **Midpoint:** The index of the middle element in the current search interval.

---

### 3. Steps Involved in Binary Search Algorithm

Let's consider searching for a `target` value in a sorted array `arr` of size `n`.

1.  **Initialization:**
    *   Set `low = 0` (index of the first element).
    *   Set `high = n - 1` (index of the last element).

2.  **Iteration (While `low <= high`):**
    *   **Calculate Midpoint:** `mid = low + (high - low) / 2` (This formula prevents potential integer overflow compared to `(low + high) / 2`).
    *   **Compare Target with Middle Element:**
        *   **If `arr[mid] == target`:** The element is found. Return `mid` (the index).
        *   **If `target < arr[mid]`:** The target, if present, must be in the left half. Discard the right half by setting `high = mid - 1`.
        *   **If `target > arr[mid]`:** The target, if present, must be in the right half. Discard the left half by setting `low = mid + 1`.

3.  **Element Not Found:**
    *   If the loop finishes without finding the target (i.e., `low > high`), the element is not present in the array. Return `-1` or indicate failure.

---

### 4. Examples

#### Example 1: Searching for an existing element

Let's search for `target = 23` in the sorted array: `arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]`

*   **Initial:** `low = 0`, `high = 9`

*   **Iteration 1:**
    *   `mid = 0 + (9 - 0) / 2 = 4`
    *   `arr[4] = 16`
    *   `target (23) > arr[mid] (16)`
    *   Update: `low = mid + 1 = 5`
    *   Current interval: `[5, 9]` (elements: `[23, 38, 56, 72, 91]`)

*   **Iteration 2:**
    *   `mid = 5 + (9 - 5) / 2 = 5 + 4 / 2 = 5 + 2 = 7`
    *   `arr[7] = 56`
    *   `target (23) < arr[mid] (56)`
    *   Update: `high = mid - 1 = 6`
    *   Current interval: `[5, 6]` (elements: `[23, 38]`)

*   **Iteration 3:**
    *   `mid = 5 + (6 - 5) / 2 = 5 + 1 / 2 = 5 + 0 = 5`
    *   `arr[5] = 23`
    *   `arr[mid] (23) == target (23)`
    *   **Element Found! Return index `5`.**

#### Example 2: Searching for a non-existing element

Let's search for `target = 30` in the same sorted array: `arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]`

*   **Initial:** `low = 0`, `high = 9`

*   **Iteration 1:**
    *   `mid = 4`, `arr[4] = 16`. `target (30) > arr[mid] (16)`.
    *   Update: `low = 5`. Interval: `[5, 9]` (`[23, 38, 56, 72, 91]`)

*   **Iteration 2:**
    *   `mid = 7`, `arr[7] = 56`. `target (30) < arr[mid] (56)`.
    *   Update: `high = 6`. Interval: `[5, 6]` (`[23, 38]`)

*   **Iteration 3:**
    *   `mid = 5`, `arr[5] = 23`. `target (30) > arr[mid] (23)`.
    *   Update: `low = 6`. Interval: `[6, 6]` (`[38]`)

*   **Iteration 4:**
    *   `mid = 6`, `arr[6] = 38`. `target (30) < arr[mid] (38)`.
    *   Update: `high = 5`. Interval: `[6, 5]`

*   **Loop Termination:** The condition `low <= high` (6 <= 5) is now false.
*   **Element Not Found! Return `-1`.**

---

### 5. Time Complexity Analysis

Binary search's efficiency comes from halving the search space in each step.

*   Let `n` be the number of elements in the array.
*   After 1 step, the search space is `n/2`.
*   After 2 steps, the search space is `n/4`.
*   After `k` steps, the search space is `n / 2^k`.

The search stops when the search space becomes 1 (or empty).
So, we want to find `k` such that:
`n / 2^k = 1`
`n = 2^k`
Taking the logarithm base 2 on both sides:
`log₂(n) = k`

Therefore, the **time complexity of binary search is O(log n)**.

*   **Best Case:** O(1) - When the target element is the middle element in the first comparison.
*   **Worst Case:** O(log n) - When the target element is at the end of the search, or not present.
*   **Average Case:** O(log n)

**Comparison with Linear Search:**
*   **Linear Search:** Iterates through each element one by one. Time complexity is O(n).
*   **Binary Search:** Significantly faster for large datasets due to its O(log n) complexity.

---

### 6. Implementation (Conceptual - Python-like Pseudocode)

```python
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = low + (high - low) // 2  # Integer division

        if arr[mid] == target:
            return mid  # Element found at index mid
        elif target < arr[mid]:
            high = mid - 1 # Search in the left half
        else: # target > arr[mid]
            low = mid + 1  # Search in the right half

    return -1 # Element not found
```

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary prerequisite for performing binary search on an array?
a) The array must be unsorted.
b) The array must contain unique elements.
c) The array must be sorted in ascending or descending order.
d) The array must have an even number of elements.

**Question 2:**
If an array has 16 elements, what is the maximum number of comparisons needed in the worst case for binary search?

**Question 3:**
Trace the binary search algorithm to find the element `42` in the following sorted array: `[10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]`
Show the `low`, `high`, and `mid` values in each step.

**Question 4:**
Explain why `mid = low + (high - low) / 2` is a preferred way to calculate the midpoint compared to `mid = (low + high) / 2`.

**Question 5:**
When would you choose binary search over linear search for finding an element in a collection?

---

### 8. Answers to Practice Questions

**Answer 1:**
c) The array must be sorted in ascending or descending order.

**Answer 2:**
For an array of 16 elements, the maximum number of comparisons is `log₂(16) = 4`.
*   Step 1: 16 elements -> 8 elements
*   Step 2: 8 elements -> 4 elements
*   Step 3: 4 elements -> 2 elements
*   Step 4: 2 elements -> 1 element

**Answer 3:**
Array: `[10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]` (n=11)
Target: `42`

*   **Initial:** `low = 0`, `high = 10`
*   **Iteration 1:**
    *   `mid = 0 + (10 - 0) / 2 = 5`
    *   `arr[5] = 35`
    *   `target (42) > arr[mid] (35)`
    *   Update: `low = 5 + 1 = 6`. Interval: `[6, 10]` (`[40, 45, 50, 55, 60]`)
*   **Iteration 2:**
    *   `mid = 6 + (10 - 6) / 2 = 6 + 4 / 2 = 6 + 2 = 8`
    *   `arr[8] = 50`
    *   `target (42) < arr[mid] (50)`
    *   Update: `high = 8 - 1 = 7`. Interval: `[6, 7]` (`[40, 45]`)
*   **Iteration 3:**
    *   `mid = 6 + (7 - 6) / 2 = 6 + 1 / 2 = 6 + 0 = 6`
    *   `arr[6] = 40`
    *   `target (42) > arr[mid] (40)`
    *   Update: `low = 6 + 1 = 7`. Interval: `[7, 7]` (`[45]`)
*   **Iteration 4:**
    *   `mid = 7 + (7 - 7) / 2 = 7`
    *   `arr[7] = 45`
    *   `target (42) < arr[mid] (45)`
    *   Update: `high = 7 - 1 = 6`. Interval: `[7, 6]`
*   **Loop Termination:** `low (7) > high (6)`. Element not found.

*(Note: If the target was `45`, it would be found at index `7` in Iteration 4.)*

**Answer 4:**
The formula `mid = low + (high - low) / 2` is preferred because it helps prevent potential **integer overflow**. If `low` and `high` are very large positive numbers, their sum `(low + high)` might exceed the maximum value that an integer data type can hold, leading to incorrect results or a program crash. The `(high - low) / 2` calculation first reduces the range, and then adding it to `low` is less likely to cause an overflow.

**Answer 5:**
You would choose binary search over linear search when:

1.  **The dataset is large:** The logarithmic time complexity of binary search makes it dramatically faster than linear search for large numbers of elements.
2.  **The dataset is already sorted or can be efficiently sorted:** The prerequisite of a sorted array is crucial. If the data is frequently searched, the initial cost of sorting is amortized over many searches, making binary search very beneficial.
3.  **Efficiency is a critical requirement:** For performance-sensitive applications, binary search is the go-to for searching sorted data.

---

### 9. Important Points to Remember

*   **Binary search *only* works on sorted data.** This is the most critical requirement.
*   It is a **Divide and Conquer** algorithm.
*   Its time complexity is **O(log n)**, making it very efficient for large datasets.
*   The formula for calculating the midpoint `mid = low + (high - low) / 2` is safer against integer overflow.
*   The search continues as long as `low <= high`. If `low` becomes greater than `high`, the element is not present.
*   Binary search is fundamentally different from linear search (O(n)) and is generally preferred for searching sorted data.
