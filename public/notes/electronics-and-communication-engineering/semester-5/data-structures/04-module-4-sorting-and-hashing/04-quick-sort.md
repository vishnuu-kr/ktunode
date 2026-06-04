---
title: "Quick Sort"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea20"
status: "completed"
scrapedAt: "2026-05-23T17:55:18.051Z"
---
# Module 4: Sorting and Hashing - Quick Sort

## Introduction to Quick Sort

Quick Sort is a highly efficient, comparison-based sorting algorithm known for its speed. It follows the **divide and conquer** paradigm, similar to Merge Sort. However, unlike Merge Sort, Quick Sort performs the division of the problem into subproblems **in-place**, meaning it doesn't require additional auxiliary space proportional to the input size.

**Key Idea:** Quick Sort works by picking an element as a **pivot** and partitioning the given array around the chosen pivot. All elements smaller than the pivot are moved to its left, and all elements greater than the pivot are moved to its right. This process is then recursively applied to the sub-arrays on either side of the pivot.

**Textbook References:**
*   **Fundamentals of Data Structures in C by Horowitz, Sahni, and Anderson-Freed:** This textbook likely covers Quick Sort in its chapter on sorting algorithms, emphasizing its recursive nature and in-place partitioning.
*   **Classic Data Structures by Samanta D:** Expect a detailed explanation of the Quick Sort algorithm, its partitioning strategies, and average/worst-case time complexity.
*   **Data Structures: A Pseudocode Approach with C by Gilberg and Forouzan:** This reference is valuable for understanding the step-by-step implementation details and partitioning logic in pseudocode.

## Learning Outcomes Covered:

This module focuses on Quick Sort, directly contributing to:

*   **CO4: Apply and compare various techniques for searching and sorting.** (Knowledge Level: K3) - By studying Quick Sort, you will be able to apply its logic and compare its performance against other sorting algorithms like Merge Sort, Bubble Sort, Insertion Sort, etc.

## Key Concepts and Definitions

*   **Divide and Conquer:** A problem-solving paradigm where a problem is broken down into smaller, similar subproblems. These subproblems are solved independently, and their solutions are combined to solve the original problem.
*   **Pivot:** An element chosen from the array to partition it. The goal is to place the pivot at its correct sorted position.
*   **Partitioning:** The process of rearranging the array elements such that all elements less than the pivot come before it, and all elements greater than the pivot come after it. The pivot itself ends up in its final sorted position.
*   **In-place Sorting:** A sorting algorithm that sorts an array by modifying it directly, without requiring significant extra memory space (beyond a few temporary variables). Quick Sort is an in-place sorting algorithm.

## How Quick Sort Works (Algorithm Steps)

1.  **Choose a Pivot:** Select an element from the array. Common strategies include:
    *   First element
    *   Last element
    *   Middle element
    *   Random element
    *   Median of three (first, middle, last elements) - this is often preferred to mitigate worst-case scenarios.

2.  **Partition the Array:** Rearrange the array elements such that:
    *   All elements less than the pivot are placed to its left.
    *   All elements greater than the pivot are placed to its right.
    *   The pivot element is placed at its correct sorted position.

3.  **Recursively Sort Sub-arrays:** Apply the Quick Sort algorithm recursively to the sub-array of elements to the left of the pivot and the sub-array of elements to the right of the pivot.

4.  **Base Case:** The recursion stops when a sub-array contains zero or one element, as such sub-arrays are already sorted.

## Partitioning Strategies

The efficiency of Quick Sort heavily depends on the partitioning strategy. Here are a few common ones:

### 1. Lomuto Partition Scheme

This is a commonly used partitioning scheme. It typically chooses the **last element** as the pivot.

**Steps:**

1.  Choose the last element of the array (or sub-array) as the pivot.
2.  Initialize an index `i` (say, `pIndex`) to `low - 1`. This index will track the position of the last element smaller than the pivot.
3.  Iterate through the array from `low` to `high - 1` (let's call the current element `arr[j]`):
    *   If `arr[j]` is less than or equal to the pivot:
        *   Increment `i`.
        *   Swap `arr[i]` and `arr[j]`.
4.  After the loop, swap the pivot element (`arr[high]`) with `arr[i + 1]`.
5.  Return `i + 1`, which is the final position of the pivot.

**Example (Lomuto Partition):**

Let's partition the array `[7, 2, 1, 6, 8, 5, 3, 4]` with `low = 0` and `high = 7`. The pivot is `arr[7] = 4`.

*   `pIndex = -1`
*   `j = 0`: `arr[0] = 7` > 4. No swap.
*   `j = 1`: `arr[1] = 2` <= 4. `pIndex` becomes 0. Swap `arr[0]` and `arr[1]`. Array: `[2, 7, 1, 6, 8, 5, 3, 4]`.
*   `j = 2`: `arr[2] = 1` <= 4. `pIndex` becomes 1. Swap `arr[1]` and `arr[2]`. Array: `[2, 1, 7, 6, 8, 5, 3, 4]`.
*   `j = 3`: `arr[3] = 6` > 4. No swap.
*   `j = 4`: `arr[4] = 8` > 4. No swap.
*   `j = 5`: `arr[5] = 5` > 4. No swap.
*   `j = 6`: `arr[6] = 3` <= 4. `pIndex` becomes 2. Swap `arr[2]` and `arr[6]`. Array: `[2, 1, 3, 6, 8, 5, 7, 4]`.

Loop ends. Swap `arr[pIndex + 1]` (which is `arr[3]`) with `arr[high]` (which is `arr[7]`).
Array: `[2, 1, 3, 4, 8, 5, 7, 6]`. The pivot `4` is now at index `3`.
Return `3`.

### 2. Hoare Partition Scheme

This scheme is generally considered slightly more efficient than Lomuto's in practice due to fewer swaps. It typically chooses the **first element** as the pivot.

**Steps:**

1.  Choose the first element of the array (or sub-array) as the pivot.
2.  Initialize two pointers, `i` starting from `low - 1` and `j` starting from `high + 1`.
3.  **Outer Loop:**
    *   **Inner Loop (for `i`):** Increment `i` until `arr[i]` is greater than or equal to the pivot.
    *   **Inner Loop (for `j`):** Decrement `j` until `arr[j]` is less than or equal to the pivot.
    *   If `i` is less than `j`: Swap `arr[i]` and `arr[j]`.
    *   If `i` is greater than or equal to `j`: The partition is complete. Return `j`. (Note: Hoare's scheme doesn't guarantee the pivot is at the returned index).

**Example (Hoare Partition):**

Let's partition `[7, 2, 1, 6, 8, 5, 3, 4]` with `low = 0` and `high = 7`. The pivot is `arr[0] = 7`.

*   `i = -1`, `j = 8`
*   **Outer Loop:**
    *   Increment `i`: `i = 0`. `arr[0] = 7` (>= pivot).
    *   Decrement `j`: `j = 7`. `arr[7] = 4` (<= pivot).
    *   `i < j` is false (`0 < 7` is true). Swap `arr[0]` and `arr[7]`. Array: `[4, 2, 1, 6, 8, 5, 3, 7]`.
    *   Increment `i`: `i = 1`. `arr[1] = 2` (< pivot).
    *   Decrement `j`: `j = 6`. `arr[6] = 3` (< pivot).
    *   `i < j` is true (`1 < 6`). Swap `arr[1]` and `arr[6]`. Array: `[4, 3, 1, 6, 8, 5, 2, 7]`.
    *   Increment `i`: `i = 2`. `arr[2] = 1` (< pivot).
    *   Decrement `j`: `j = 5`. `arr[5] = 5` (< pivot).
    *   `i < j` is true (`2 < 5`). Swap `arr[2]` and `arr[5]`. Array: `[4, 3, 5, 6, 8, 1, 2, 7]`.
    *   Increment `i`: `i = 3`. `arr[3] = 6` (< pivot).
    *   Decrement `j`: `j = 4`. `arr[4] = 8` (>= pivot).
    *   `i < j` is true (`3 < 4`). Swap `arr[3]` and `arr[4]`. Array: `[4, 3, 5, 8, 6, 1, 2, 7]`.
    *   Increment `i`: `i = 4`. `arr[4] = 6` (< pivot).
    *   Decrement `j`: `j = 3`. `arr[3] = 8` (>= pivot).
    *   `i < j` is false (`4 < 3` is false). Partition ends. Return `j = 3`.

The sub-arrays to sort would be `[4, 3, 5]` (from `low=0` to `j=3`) and `[8, 6, 1, 2, 7]` (from `j+1=4` to `high=7`).

**Textbook References:**
*   **Classic Data Structures by Samanta D:** Likely provides detailed pseudocode and examples for both Lomuto and Hoare partition schemes.
*   **Data Structures: A Pseudocode Approach with C by Gilberg and Forouzan:** Excellent for visualizing the partition logic with clear diagrams.

## Quick Sort Algorithm (Recursive Structure)

```
QuickSort(arr, low, high):
  if low < high:
    // pi is the partitioning index, arr[pi] is now at the right place
    pi = Partition(arr, low, high)

    // Recursively sort elements before partition and after partition
    QuickSort(arr, low, pi - 1)
    QuickSort(arr, pi + 1, high)

// Note: For Hoare partition, the recursive calls might be:
// QuickSort(arr, low, pi)
// QuickSort(arr, pi + 1, high)
```

## Time Complexity

Quick Sort's time complexity varies significantly based on the pivot selection and the input array.

*   **Best Case:** $O(n \log n)$
    *   Occurs when the pivot selection consistently divides the array into two roughly equal halves.
    *   Example: If the pivot is always the median element.

*   **Average Case:** $O(n \log n)$
    *   This is the most common scenario, as random pivot selection or median-of-three generally avoids worst-case partitions.
    *   Even with some unbalanced partitions, the overall average performance is excellent.

*   **Worst Case:** $O(n^2)$
    *   Occurs when the pivot selection consistently results in highly unbalanced partitions.
    *   Example:
        *   If the input array is already sorted (ascending or descending) and the pivot is always the first or last element.
        *   If all elements in the array are identical.

**Analysis (Intuitive):**
Each level of recursion involves a partitioning step that takes $O(n)$ time.
In the best and average cases, the recursion depth is $O(\log n)$, leading to a total time complexity of $O(n \log n)$.
In the worst case, the recursion depth becomes $O(n)$ (like a linked list), leading to $O(n^2)$.

**Textbook References:**
*   **Fundamentals of Data Structures in C by Horowitz, Sahni, and Anderson-Freed:** Will provide a rigorous mathematical analysis of Quick Sort's time complexity, including average-case analysis.
*   **Data Structures and Algorithms by Aho, Hopcroft, and Ullman:** Classic text that delves deep into the theoretical analysis of algorithms, including Quick Sort's average-case performance using probability.

## Space Complexity

*   **$O(\log n)$ (Average Case):** This is due to the recursion call stack. The depth of the recursion tree is logarithmic on average.
*   **$O(n)$ (Worst Case):** In the worst-case scenario (e.g., a sorted array and a poor pivot choice), the recursion depth can be $n$, leading to $O(n)$ space complexity for the call stack.

**Important Note:** Quick Sort is an **in-place** algorithm in terms of data manipulation. The space complexity arises *only* from the recursion stack, not from creating auxiliary arrays for partitioning.

**Textbook References:**
*   **Introduction to Data Structures with Applications by Tremblay and Sorenson:** Likely discusses the space requirements for Quick Sort, focusing on the recursive stack.

## Quick Sort Variants and Optimizations

1.  **Median-of-Three Pivot Selection:**
    *   **Concept:** Instead of picking the first, last, or middle element, choose the median of the first, middle, and last elements of the current sub-array as the pivot.
    *   **Benefit:** Significantly reduces the probability of hitting the worst-case $O(n^2)$ scenario, especially for nearly sorted or reverse-sorted arrays.

2.  **Switch to Insertion Sort for Small Sub-arrays:**
    *   **Concept:** When the size of a sub-array becomes small (e.g., less than 10-20 elements), switch to a simpler algorithm like Insertion Sort.
    *   **Benefit:** Insertion Sort has a lower overhead for small arrays and can be faster than Quick Sort for very small inputs. This optimization helps reduce the overhead of recursive calls.

3.  **Tail Recursion Elimination:**
    *   **Concept:** The recursive call on the larger partition can be transformed into a loop, reducing the recursion depth by one in each step. This helps mitigate the worst-case space complexity.

4.  **Three-Way Partitioning (Dutch National Flag Problem):**
    *   **Concept:** Used when there are many duplicate elements. It partitions the array into three parts: elements less than the pivot, elements equal to the pivot, and elements greater than the pivot.
    *   **Benefit:** Improves performance when duplicates are abundant, avoiding unnecessary recursive calls on sub-arrays of identical elements.

**Textbook References:**
*   **Advanced Data Structures by Peter Brass:** Might discuss advanced optimizations like three-way partitioning.
*   **Theory and Problems of Data Structures by Lipschuts S. (Schaum’s Series):** Often presents variations and optimizations of standard algorithms.

## Comparison with Other Sorting Algorithms

| Feature          | Quick Sort         | Merge Sort         | Heap Sort          |
| :--------------- | :----------------- | :----------------- | :----------------- |
| **Time (Avg)**   | $O(n \log n)$      | $O(n \log n)$      | $O(n \log n)$      |
| **Time (Worst)** | $O(n^2)$           | $O(n \log n)$      | $O(n \log n)$      |
| **Space**        | $O(\log n)$ avg, $O(n)$ worst (recursion stack) | $O(n)$ (auxiliary array) | $O(1)$ (in-place) |
| **Stability**    | Not Stable         | Stable             | Not Stable         |
| **In-place**     | Yes (mostly)       | No                 | Yes                |
| **Data Movement**| Few swaps (efficient) | More data copying | More data copying |

**CO4 Alignment:** Understanding these comparisons allows you to apply and compare sorting techniques effectively. Quick Sort is often the fastest in practice for general-purpose sorting due to its good average-case performance and low constant factors, but Merge Sort guarantees $O(n \log n)$ and is stable.

## Applications of Quick Sort

*   **General-purpose sorting:** It's one of the most widely used sorting algorithms.
*   **Quickselect:** A related algorithm that finds the k-th smallest element in an unsorted array in $O(n)$ average time. Quick Sort's partitioning logic is fundamental to Quickselect.
*   **Sorting large datasets:** When implemented with optimizations, it can be very effective.

## Important Points to Remember

*   Quick Sort is a **divide and conquer** algorithm.
*   It's primarily an **in-place** sorting algorithm (space complexity is for recursion stack).
*   Its performance is highly dependent on **pivot selection**.
*   The **worst-case time complexity is $O(n^2)$**, which can occur with naive pivot selection on sorted or reverse-sorted data.
*   The **average and best-case time complexity is $O(n \log n)$**.
*   **Median-of-three** pivot selection and switching to **Insertion Sort** for small sub-arrays are common optimizations.
*   It is **not a stable sort**.
*   It's often the **fastest sorting algorithm in practice** for general use due to low overhead and good average-case performance.

## Practice Questions

1.  **Question:** What is the primary advantage of Quick Sort over Merge Sort in terms of space complexity?
    *   **Answer:** Quick Sort is typically an in-place algorithm, requiring only $O(\log n)$ auxiliary space on average for the recursion stack, whereas Merge Sort requires $O(n)$ auxiliary space for its temporary array.

2.  **Question:** Describe a scenario where Quick Sort would exhibit its worst-case time complexity of $O(n^2)$.
    *   **Answer:** If the input array is already sorted (either ascending or descending) and the pivot is consistently chosen as the first or last element of the sub-array. In this case, each partition step would only reduce the problem size by one element, leading to a recursion depth of $n$.

3.  **Question:** Explain the "median-of-three" pivot selection strategy and its benefit.
    *   **Answer:** Median-of-three involves selecting the median of the first, middle, and last elements of the current sub-array as the pivot. This strategy helps to avoid the worst-case $O(n^2)$ performance by ensuring a more balanced partition, especially for already sorted or nearly sorted data.

4.  **Question:** If Quick Sort is not a stable sort, what does this mean for elements with equal values?
    *   **Answer:** It means that the relative order of elements with equal values might not be preserved after sorting. For example, if you have two elements with the value `5`, their original order might be swapped during the Quick Sort process.

5.  **Question:** Consider the array `[3, 6, 8, 10, 1, 2, 1]`. If you use the Lomuto partition scheme with the last element as the pivot (pivot = 1), what will be the array state after the partition and what is the pivot's final index?
    *   **Answer:**
        *   Pivot: `1` (from `arr[6]`)
        *   `low = 0`, `high = 6`, `pIndex = -1`
        *   `j=0`: `arr[0]=3` > 1.
        *   `j=1`: `arr[1]=6` > 1.
        *   `j=2`: `arr[2]=8` > 1.
        *   `j=3`: `arr[3]=10` > 1.
        *   `j=4`: `arr[4]=1` <= 1. `pIndex` becomes 0. Swap `arr[0]` and `arr[4]`. Array: `[1, 6, 8, 10, 3, 2, 1]`.
        *   `j=5`: `arr[5]=2` > 1.
        *   Loop ends. Swap `arr[pIndex + 1]` (i.e., `arr[1]`) with `arr[high]` (i.e., `arr[6]`).
        *   Final Array State: `[1, 1, 8, 10, 3, 2, 6]`
        *   Pivot's Final Index: `1`

6.  **Question:** What is the time complexity of Quick Sort if the pivot selection always picks the smallest element in the current sub-array and the input array is `[5, 4, 3, 2, 1]`?
    *   **Answer:** This scenario leads to the worst-case complexity. The pivot selection will consistently be the smallest element, resulting in unbalanced partitions. The recursion depth will be $O(n)$, and the time complexity will be $O(n^2)$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## Further Reading and Textbook Content

*   **Horowitz, Sahni, and Anderson-Freed:** This book is a classic for fundamental data structures. The chapter on sorting will provide a clear explanation of Quick Sort's mechanics and its analysis. Pay attention to the pseudocode and complexity derivations.
*   **Samanta:** Likely offers a more practical perspective with detailed C implementations or pseudocode, making the partitioning logic easy to grasp.
*   **Gilberg and Forouzan:** Their "Pseudocode Approach" is excellent for understanding the flow of the algorithm and the logic behind partitioning without getting bogged down in specific language syntax initially.

By studying Quick Sort from these resources, you will gain a deep understanding of its working principles, its performance characteristics, and how to implement it effectively. This knowledge is directly applicable to **CO4**, enabling you to apply and compare sorting techniques.