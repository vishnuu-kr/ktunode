---
title: "Binary Search"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea16"
status: "completed"
scrapedAt: "2026-05-23T17:55:11.784Z"
---
# DATA STRUCTURES - Module 3: Trees and Graphs

## Topic: Binary Search

### Introduction

Binary Search is a fundamental and highly efficient searching algorithm that operates on **sorted data**. Unlike linear search, which checks each element sequentially, binary search repeatedly divides the search interval in half. This makes it significantly faster for large datasets. While not directly a tree or graph structure itself, binary search is often applied to **Binary Search Trees (BSTs)**, which are a core topic in this module. Understanding binary search is crucial for efficiently navigating and searching within BSTs.

### 1. Core Concepts and Definitions

*   **Sorted Data:** Binary search **requires** the data collection (e.g., an array) to be sorted in ascending or descending order.
*   **Search Interval:** The portion of the sorted data that the algorithm is currently considering. Initially, this is the entire dataset.
*   **Midpoint:** The middle element within the current search interval.
*   **Comparison:** The algorithm compares the target value with the element at the midpoint.
*   **Elimination:** Based on the comparison, one half of the search interval is discarded, effectively eliminating half of the remaining data from consideration.

### 2. How Binary Search Works (Algorithm)

Let's assume we are searching for a `target` value in a sorted array `arr` of size `n`.

1.  **Initialization:**
    *   Set `low` to the index of the first element (0).
    *   Set `high` to the index of the last element (`n-1`).

2.  **Iteration (while `low <= high`):**
    *   **Calculate Midpoint:** `mid = low + (high - low) / 2`
        *   *(This formula is preferred over `(low + high) / 2` to prevent potential integer overflow if `low` and `high` are very large).*
    *   **Comparison:**
        *   If `arr[mid] == target`: The element is found at index `mid`. Return `mid`.
        *   If `arr[mid] < target`: The target must be in the right half of the current interval. Discard the left half by setting `low = mid + 1`.
        *   If `arr[mid] > target`: The target must be in the left half of the current interval. Discard the right half by setting `high = mid - 1`.

3.  **Not Found:** If the loop finishes (i.e., `low > high`), the target element is not present in the array. Return an indicator like -1.

### 3. Examples

**Example 1: Searching in an Array**

Let `arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]` and `target = 23`.

*   **Initial:** `low = 0`, `high = 9`
*   **Iteration 1:**
    *   `mid = 0 + (9 - 0) / 2 = 4`
    *   `arr[4] = 16`
    *   `16 < 23`, so `low = 4 + 1 = 5`
*   **Iteration 2:**
    *   `low = 5`, `high = 9`
    *   `mid = 5 + (9 - 5) / 2 = 5 + 2 = 7`
    *   `arr[7] = 56`
    *   `56 > 23`, so `high = 7 - 1 = 6`
*   **Iteration 3:**
    *   `low = 5`, `high = 6`
    *   `mid = 5 + (6 - 5) / 2 = 5 + 0 = 5`
    *   `arr[5] = 23`
    *   `23 == 23`. Target found at index 5.

**Example 2: Target Not Found**

Let `arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]` and `target = 50`.

*   **Initial:** `low = 0`, `high = 9`
*   **Iteration 1:** `mid = 4`, `arr[4] = 16`. `16 < 50`, `low = 5`.
*   **Iteration 2:** `low = 5`, `high = 9`, `mid = 7`, `arr[7] = 56`. `56 > 50`, `high = 6`.
*   **Iteration 3:** `low = 5`, `high = 6`, `mid = 5`, `arr[5] = 23`. `23 < 50`, `low = 6`.
*   **Iteration 4:** `low = 6`, `high = 6`, `mid = 6`, `arr[6] = 38`. `38 < 50`, `low = 7`.
*   **Termination:** Now `low = 7` and `high = 6`. Since `low > high`, the loop terminates. Target not found.

### 4. Variations of Binary Search

*   **Recursive Binary Search:** The same logic can be implemented using recursion. The base cases are finding the element or the interval becoming invalid.
*   **Iterative Binary Search:** This is the most common implementation, as shown in the algorithm above.

### 5. Applications of Binary Search

*   **Searching in sorted arrays:** The most direct application.
*   **Implementing Binary Search Trees (BSTs):** Binary search is the fundamental principle behind BST operations like search, insertion, and deletion. Finding an element in a BST involves a similar process of comparing with the current node's value and deciding whether to go left or right.
*   **Finding square roots, cube roots, etc.:** By searching for a value within a range.
*   **Finding the first or last occurrence of an element:** Modified binary search can find the boundaries of repeated elements.
*   **Finding the insertion point for a new element:** To maintain sorted order.

### 6. Time and Space Complexity (CO1)

*   **Time Complexity:**
    *   **Best Case:** O(1) - The target element is the middle element in the first comparison.
    *   **Average Case:** O(log n) - With each step, the search space is halved.
    *   **Worst Case:** O(log n) - The target element is at the last possible position, or it's not found.

    This logarithmic complexity arises because the number of comparisons is roughly proportional to the number of times you can divide the dataset in half, which is the definition of log base 2.

*   **Space Complexity:**
    *   **Iterative Binary Search:** O(1) - It uses a constant amount of extra space for variables like `low`, `high`, and `mid`.
    *   **Recursive Binary Search:** O(log n) - Due to the recursive call stack. In the worst case, the depth of recursion can be log n.

**Important Point to Remember:** The efficiency of binary search (O(log n)) is significantly better than linear search (O(n)) for large datasets. This is a key aspect when comparing algorithm performance (CO1).

### 7. Relation to Trees and Graphs (Module 3 Context) (CO3)

Binary search is intrinsically linked to **Binary Search Trees (BSTs)**.

*   **BST Search:** The process of searching for a key in a BST mirrors binary search.
    *   Start at the root.
    *   If the key matches the current node's key, the search is successful.
    *   If the key is less than the current node's key, search in the left subtree.
    *   If the key is greater than the current node's key, search in the right subtree.
    *   If you reach a null pointer, the key is not present.

*   **Performance:** On average, searching in a balanced BST takes O(log n) time, similar to binary search on an array. However, in the worst case (a skewed BST, resembling a linked list), searching can degrade to O(n).

**(CO3: Make use of nonlinear data structures like trees and graphs to design algorithms for various applications.)** Binary search on BSTs is a prime example of using a nonlinear data structure (a tree) to design an efficient search algorithm.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Textbooks and References (Incorporation)

This topic is extensively covered in the provided textbooks:

*   **Fundamentals of Data Structures in C by Horowitz, Sahni, and Anderson-Freed:** Likely discusses binary search in the context of arrays and its role in tree algorithms.
*   **Classic Data Structures by Samanta D:** Will also cover the implementation and analysis of binary search, including its application in BSTs.
*   **Data Structures: A Pseudocode Approach with C by Gilberg and Forouzan:** Provides practical pseudocode for binary search and its variations.
*   **Data Structures and Algorithms by Aho, Hopcroft, and Ullman:** Offers a theoretical foundation for search algorithms like binary search and their complexity.
*   **Introduction to Data Structures with Applications by Tremblay and Sorenson:** Likely presents binary search with applications and complexity analysis.
*   **Theory and Problems of Data Structures by Lipschutz (Schaum's Series):** Excellent for problem-solving practice, including many examples and exercises on binary search.

### 9. Practice Questions and Exercises

**Question 1:** (CO1, CO4)
An array `A` is sorted in ascending order. You want to search for an element `x`.
(a) Describe the binary search algorithm in pseudocode.
(b) What is the time complexity of binary search in the best, average, and worst cases?
(c) How does the time complexity of binary search compare to linear search?

**Question 2:** (CO2, CO3)
Consider a Binary Search Tree (BST). If you are searching for a key `k`, what is the similarity between the search process in a BST and the binary search algorithm on a sorted array? Discuss the potential performance differences.

**Question 3:** (CO4)
Given the sorted array `[3, 7, 10, 14, 18, 20, 22, 25]` and you want to find the element `18`. Trace the steps of the binary search algorithm.

**Question 4:** (CO4)
Write a recursive function in C (or pseudocode) to perform binary search.

### 10. Answers to Practice Questions

**Answer 1:**
(a) **Pseudocode for Iterative Binary Search:**
```
function BinarySearch(arr, target):
  low = 0
  high = arr.length - 1

  while low <= high:
    mid = low + (high - low) / 2

    if arr[mid] == target:
      return mid  // Element found at index mid
    else if arr[mid] < target:
      low = mid + 1 // Search in the right half
    else:
      high = mid - 1 // Search in the left half

  return -1 // Element not found
```
(b) **Time Complexity:**
    *   Best Case: O(1)
    *   Average Case: O(log n)
    *   Worst Case: O(log n)
(c) **Comparison to Linear Search:** Binary search (O(log n)) is significantly faster than linear search (O(n)) for large datasets because it eliminates half of the search space in each step.

**Answer 2:**
The search process in a BST involves comparing the target key with the current node's key and deciding to move to the left subtree (if the target is smaller) or the right subtree (if the target is larger). This decision-making process is analogous to how binary search on a sorted array narrows down the search interval by comparing with the middle element. Both algorithms leverage a divide-and-conquer strategy.

**Performance Differences:**
*   **Average Case:** Both binary search on arrays and searching in a balanced BST have an average time complexity of O(log n).
*   **Worst Case:** Searching in a BST can degrade to O(n) if the tree becomes unbalanced (e.g., if elements are inserted in strictly increasing or decreasing order, forming a degenerate tree resembling a linked list). Binary search on a sorted array, however, consistently maintains its O(log n) worst-case performance.

**Answer 3:**
`arr = [3, 7, 10, 14, 18, 20, 22, 25]`, `target = 18`

*   **Initial:** `low = 0`, `high = 7`
*   **Iteration 1:**
    *   `mid = 0 + (7 - 0) / 2 = 3`
    *   `arr[3] = 14`
    *   `14 < 18`, so `low = 3 + 1 = 4`
*   **Iteration 2:**
    *   `low = 4`, `high = 7`
    *   `mid = 4 + (7 - 4) / 2 = 4 + 1 = 5`
    *   `arr[5] = 20`
    *   `20 > 18`, so `high = 5 - 1 = 4`
*   **Iteration 3:**
    *   `low = 4`, `high = 4`
    *   `mid = 4 + (4 - 4) / 2 = 4`
    *   `arr[4] = 18`
    *   `18 == 18`. Target found at index 4.

**Answer 4:**
```c
// Recursive Binary Search Function
int recursiveBinarySearch(int arr[], int low, int high, int target) {
    if (high >= low) {
        // Calculate mid point
        int mid = low + (high - low) / 2;

        // If element is present at the middle itself
        if (arr[mid] == target)
            return mid;

        // If element is smaller than mid, then it can only be present in left subarray
        if (arr[mid] > target)
            return recursiveBinarySearch(arr, low, mid - 1, target);

        // Else the element can only be present in right subarray
        return recursiveBinarySearch(arr, mid + 1, high, target);
    }

    // We reach here when element is not present in the array
    return -1;
}

// Example usage:
/*
int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
int n = sizeof(arr) / sizeof(arr[0]);
int target = 23;
int result = recursiveBinarySearch(arr, 0, n - 1, target);
if (result == -1)
    printf("Element is not present in array\n");
else
    printf("Element is present at index %d\n", result);
*/
```

### 11. Important Points to Remember

*   **Data Must Be Sorted:** This is the most critical prerequisite for binary search.
*   **Efficiency:** Binary search is extremely efficient with O(log n) time complexity, making it ideal for large datasets.
*   **Iterative vs. Recursive:** Both implementations achieve the same result, but the iterative version has better space complexity (O(1) vs. O(log n)).
*   **Integer Overflow:** Use `mid = low + (high - low) / 2` to prevent potential overflow issues.
*   **BST Connection:** Binary search is the underlying principle for efficient searching in Binary Search Trees.
*   **Applications:** Beyond arrays, it's used in various algorithms for searching, finding bounds, and optimizing numerical problems.

This concludes the study notes for Binary Search. Remember to practice implementing it and understand its core principles for success in this module.