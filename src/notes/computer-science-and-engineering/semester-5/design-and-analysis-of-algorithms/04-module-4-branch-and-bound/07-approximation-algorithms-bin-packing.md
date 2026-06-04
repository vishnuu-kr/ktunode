---
title: "Approximation algorithms - Bin Packing"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 4: Branch and Bound "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b570"
status: "completed"
scrapedAt: "2026-05-20T16:45:57.877Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS: Module 4 - Branch and Bound: Approximation Algorithms - Bin Packing

### Introduction

This module delves into approximation algorithms for the Bin Packing problem.  Since Bin Packing is an NP-Hard problem, finding optimal solutions for large instances is computationally expensive. Approximation algorithms offer a trade-off: they provide solutions that are *close* to optimal in a reasonable amount of time. We'll explore some common approximation algorithms for Bin Packing and analyze their approximation ratios.

**Learning Outcomes:**

*   Understand the Bin Packing problem and its complexity.
*   Describe and implement common approximation algorithms for Bin Packing: Next-Fit, First-Fit, Best-Fit, and First-Fit Decreasing.
*   Analyze the approximation ratios of these algorithms.
*   Apply these algorithms to practical scenarios.

### 1. Understanding the Bin Packing Problem

*   **Definition:** Given a set of *n* items with sizes *s<sub>1</sub>, s<sub>2</sub>, ..., s<sub>n</sub>*, where 0 < *s<sub>i</sub>* ≤ 1 for all *i*, and an unlimited number of bins of size 1, the Bin Packing problem aims to pack all the items into the minimum number of bins.

*   **Complexity:**  The Bin Packing problem is NP-Hard. This means that there's no known polynomial-time algorithm that guarantees an optimal solution for all instances.

*   **Objective Function:**  Minimize the number of bins used.

*   **Real-World Applications:**

    *   Container loading (shipping).
    *   Resource allocation.
    *   Storage management.
    *   Virtual Machine placement.

*   **Mathematical Formulation:**  (Though rarely used directly in algorithmic implementation)

    Let *x<sub>ij</sub>* be a binary variable that is 1 if item *i* is placed in bin *j*, and 0 otherwise. Let *y<sub>j</sub>* be a binary variable that is 1 if bin *j* is used, and 0 otherwise.

    Minimize: ∑ *y<sub>j</sub>*
    Subject to:
    *   ∑ *s<sub>i</sub>* *x<sub>ij</sub>* ≤ *y<sub>j</sub>*  for all *j*  (The sum of sizes of items in a bin cannot exceed the bin capacity if the bin is used)
    *   ∑ *x<sub>ij</sub>* = 1  for all *i*  (Each item is placed in exactly one bin)
    *   *x<sub>ij</sub>*, *y<sub>j</sub>* ∈ {0, 1}
### 2. Approximation Algorithms for Bin Packing

These algorithms aim to find a feasible solution, even if not optimal, in polynomial time.

*   **2.1 Next-Fit (NF)**

    *   **Algorithm:**
        1.  Place the first item in the first bin.
        2.  For each subsequent item, try to place it in the current (most recently opened) bin.
        3.  If the item doesn't fit, open a new bin and place the item there.
    *   **Key Idea:** Simple and fast; only considers the current bin.
    *   **Example:**  Items: 0.2, 0.5, 0.4, 0.7, 0.1, 0.3

        *   Bin 1: 0.2, 0.5, 0.4 (Total: 1.1 > 1 - Open new bin)
        *   Bin 2: 0.7 (Total: 0.7)
        *   Bin 3: 0.1, 0.3 (Total: 0.4)
    *   **Approximation Ratio:**  *NF(I)* ≤ 2 *OPT(I)* - where *NF(I)* is the number of bins used by Next-Fit for instance *I*, and *OPT(I)* is the optimal number of bins. This means the number of bins used by Next-Fit is at most twice the optimal number.  This is a worst-case bound; the algorithm may perform much better on many instances.

*   **2.2 First-Fit (FF)**

    *   **Algorithm:**
        1.  For each item, iterate through the bins in order of creation.
        2.  Place the item in the first bin where it fits.
        3.  If the item doesn't fit in any existing bin, open a new bin and place the item there.
    *   **Key Idea:** Tries to utilize partially filled bins before opening new ones.
    *   **Example:** Items: 0.2, 0.5, 0.4, 0.7, 0.1, 0.3

        *   Bin 1: 0.2, 0.5 (Total: 0.7)
        *   Bin 2: 0.4, 0.1, 0.3 (Total: 0.8)
        *   Bin 3: 0.7 (Total: 0.7)

    *   **Approximation Ratio:** *FF(I)* ≤ (17/10)*OPT(I) + 2.   This is a tighter bound than Next-Fit.

*   **2.3 Best-Fit (BF)**

    *   **Algorithm:**
        1.  For each item, iterate through the bins.
        2.  Place the item in the bin that has the *least* remaining space after placing the item, but still fits.
        3.  If the item doesn't fit in any existing bin, open a new bin and place the item there.
    *   **Key Idea:** Aims to minimize wasted space in each bin.
    *   **Example:**  Items: 0.2, 0.5, 0.4, 0.7, 0.1, 0.3

        *   Bin 1: 0.2, 0.5 (Total: 0.7)
        *   Bin 2: 0.4, 0.3 (Total: 0.7)
        *   Bin 3: 0.1, 0.7 (Total: 0.8)

    *   **Approximation Ratio:** *BF(I)* ≤ (17/10)*OPT(I) + 2.  Same as First-Fit. While the theoretical approximation ratio is the same as First-Fit, Best-Fit often performs better in practice.

*   **2.4 First-Fit Decreasing (FFD)**

    *   **Algorithm:**
        1.  Sort the items in decreasing order of size.
        2.  Apply the First-Fit algorithm to the sorted items.
    *   **Key Idea:** Sorting the items allows larger items to be placed early, potentially reducing fragmentation.
    *   **Example:** Items: 0.2, 0.5, 0.4, 0.7, 0.1, 0.3
        *   Sorted Items: 0.7, 0.5, 0.4, 0.3, 0.2, 0.1
        *   Bin 1: 0.7, 0.3 (Total: 1.0)
        *   Bin 2: 0.5, 0.4, 0.1 (Total: 1.0)
        *   Bin 3: 0.2 (Total 0.2)
    *   **Approximation Ratio:** *FFD(I)* ≤ (11/9) *OPT(I) + 4. FFD provides a better approximation ratio compared to First-Fit, Best-Fit, and Next-Fit.

### 3. Implementation Considerations

*   **Data Structures:**
    *   Bins can be represented as lists or arrays containing the items they hold.
    *   Sorting (for FFD) can be done using efficient sorting algorithms like merge sort or quicksort.
*   **Computational Complexity:**
    *   Next-Fit: O(n)
    *   First-Fit: O(n<sup>2</sup>)
    *   Best-Fit: O(n<sup>2</sup>)
    *   First-Fit Decreasing: O(n log n) + O(n<sup>2</sup>)  (O(n log n) for sorting, O(n<sup>2</sup>) for First-Fit)

### 4. Comparison of Algorithms

| Algorithm             | Approximation Ratio        | Complexity     | Simplicity  | Typical Performance |
|-----------------------|-----------------------------|-----------------|-------------|---------------------|
| Next-Fit             | 2 *OPT(I)* - 1            | O(n)           | High        | Worst               |
| First-Fit             | (17/10)*OPT(I) + 2         | O(n<sup>2</sup>)        | Medium      | Average             |
| Best-Fit              | (17/10)*OPT(I) + 2         | O(n<sup>2</sup>)        | Medium      | Better than FF       |
| First-Fit Decreasing | (11/9) *OPT(I) + 4          | O(n log n) + O(n<sup>2</sup>) | Medium      | Best                |

### 5. Practical Considerations

*   The choice of algorithm depends on the specific application and the desired trade-off between solution quality and computational cost.
*   For large datasets, FFD is often a good choice due to its better approximation ratio, despite the overhead of sorting.
*   If speed is critical and a less optimal solution is acceptable, Next-Fit may be sufficient.
*   Remember that these are *approximation* algorithms, and their performance can vary depending on the input. In some cases, the simpler algorithms (like First-Fit or Best-Fit) can outperform FFD, especially if the items are not particularly disparate in size.

### 6. Practice Questions and Exercises

1.  **Problem:** Given the item sizes: 0.8, 0.5, 0.4, 0.2, 0.3, 0.6. Apply the following algorithms to pack them into bins of size 1: Next-Fit, First-Fit, Best-Fit, and First-Fit Decreasing.  How many bins are used by each algorithm?

    **Answer:**

    *   **Next-Fit:**

        *   Bin 1: 0.8
        *   Bin 2: 0.5
        *   Bin 3: 0.4
        *   Bin 4: 0.2, 0.3
        *   Bin 5: 0.6

        Total bins: 5

    *   **First-Fit:**

        *   Bin 1: 0.8
        *   Bin 2: 0.5, 0.4
        *   Bin 3: 0.2, 0.3
        *   Bin 4: 0.6

        Total bins: 4

    *   **Best-Fit:**

        *   Bin 1: 0.8
        *   Bin 2: 0.5, 0.4
        *   Bin 3: 0.2, 0.3
        *   Bin 4: 0.6

        Total bins: 4

    *   **First-Fit Decreasing:**

        *   Sorted: 0.8, 0.6, 0.5, 0.4, 0.3, 0.2
        *   Bin 1: 0.8, 0.2
        *   Bin 2: 0.6, 0.4
        *   Bin 3: 0.5, 0.3

        Total bins: 3

2.  **Problem:** What are the time complexities of the Next-Fit, First-Fit, and First-Fit Decreasing algorithms for Bin Packing? Explain why FFD has a higher complexity than Next-Fit.

    **Answer:**

    *   Next-Fit: O(n)
    *   First-Fit: O(n<sup>2</sup>)
    *   First-Fit Decreasing: O(n log n) + O(n<sup>2</sup>)

    FFD has a higher complexity because it requires sorting the items (O(n log n)) before applying the First-Fit algorithm (O(n<sup>2</sup>)). Next-Fit, on the other hand, simply iterates through the items once, resulting in linear time complexity.

3.  **Problem:** Explain why Next-Fit is the worst among the approximation algorithms discussed.

    **Answer:** Next-Fit is the worst because it only considers the most recently opened bin for placing an item. This can lead to significant wasted space and a higher number of bins used compared to the other algorithms, which attempt to utilize existing bins more efficiently.  It has the loosest approximation bound.

4. **Problem:** Suppose you have items of sizes 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9. Using the First-Fit algorithm, how many bins would you need? How many would you need using the First-Fit Decreasing Algorithm?

    **Answer:**

    * **First-Fit:**

        * Bin 1: 0.1, 0.2, 0.3, 0.4
        * Bin 2: 0.5
        * Bin 3: 0.6
        * Bin 4: 0.7
        * Bin 5: 0.8
        * Bin 6: 0.9
        Total bins: 6

    * **First-Fit Decreasing:**

        * Items sorted in decreasing order: 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1
        * Bin 1: 0.9, 0.1
        * Bin 2: 0.8, 0.2
        * Bin 3: 0.7, 0.3
        * Bin 4: 0.6, 0.4
        * Bin 5: 0.5
        Total Bins: 5

### 7. Important Points to Remember

*   Bin Packing is NP-Hard, so approximation algorithms are essential for solving large instances in a reasonable time.
*   The choice of approximation algorithm depends on the specific requirements of the application (speed vs. solution quality).
*   First-Fit Decreasing (FFD) generally provides a better approximation ratio than the other algorithms.
*   Understanding the approximation ratios provides a bound on the worst-case performance of the algorithms.
*   Real-world performance can vary depending on the input data distribution.
*   Approximation algorithms offer a practical approach to tackling intractable optimization problems.

This comprehensive set of notes should provide a good foundation for understanding approximation algorithms for the Bin Packing problem. Remember to practice applying these algorithms to different scenarios to solidify your understanding. Good luck!
