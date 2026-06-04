---
title: "Basic Randomized Algorithms - Randomized quicksort, Randomized selection, Randomized data structures."
subject: "RANDOMIZED ALGORITHMS"
module: "Module 1: Basics of Randomization "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd57"
status: "completed"
scrapedAt: "2026-05-20T16:57:06.664Z"
---
# RANDOMIZED ALGORITHMS - Module 1: Basics of Randomization - Basic Randomized Algorithms

## Topic: Randomized Quicksort, Randomized Selection, Randomized Data Structures

### Learning Outcomes:

*   Understand the concept of randomization in algorithms.
*   Describe and analyze Randomized Quicksort.
*   Describe and analyze Randomized Selection.
*   Understand basic randomized data structures like Skip Lists (brief introduction).
*   Apply probabilistic analysis to analyze the expected performance of these algorithms.

### 1. Introduction to Randomization in Algorithms

*   **Definition:** A randomized algorithm is an algorithm that employs randomness as part of its logic. The algorithm's behavior depends on the input *and* the random numbers it generates.

*   **Key Idea:** Instead of always making the same deterministic choice, a randomized algorithm makes some decisions randomly.

*   **Types of Randomized Algorithms:**
    *   **Las Vegas Algorithms:** Always produce a correct result, but the running time is a random variable.
        *   Example: Randomized Quicksort - always sorts correctly, but the runtime varies.
    *   **Monte Carlo Algorithms:** May produce an incorrect result with a certain (usually small) probability.
        *   Example: Primality testing algorithms. We focus on Las Vegas in this module.

*   **Why Use Randomization?**
    *   **Simplicity:** Randomized algorithms can be simpler to implement and understand than deterministic algorithms.
    *   **Efficiency:** In some cases, randomization can lead to more efficient algorithms, especially when dealing with adversarial inputs.
    *   **Avoidance of Worst-Case Scenarios:**  Deterministic algorithms can have worst-case inputs that cause them to perform poorly.  Randomization "averages out" the performance over all possible random choices, reducing the impact of adversarial inputs.
    *   **Breaking Symmetry:**  Randomization is useful for breaking symmetry in distributed systems.

### 2. Randomized Quicksort

*   **Concept:** A variation of the deterministic Quicksort algorithm where the pivot element is chosen randomly.

*   **Deterministic Quicksort (Review):**
    1.  Choose a pivot element (e.g., the first element).
    2.  Partition the array into two subarrays: elements less than the pivot and elements greater than the pivot.
    3.  Recursively sort the two subarrays.
    *   **Worst-Case Scenario:**  O(n<sup>2</sup>) when the pivot is consistently the smallest or largest element.

*   **Randomized Quicksort Algorithm:**
    1.  **Random Pivot Selection:** Choose the pivot element uniformly at random from the subarray.
    2.  Partition the array around the chosen pivot, as in deterministic Quicksort.
    3.  Recursively sort the subarrays less than and greater than the pivot.

*   **Pseudocode:**

    ```python
    def randomized_quicksort(arr, low, high):
        if low < high:
            # 1. Choose a random pivot index
            pivot_index = random.randint(low, high)

            # 2. Partition the array
            pivot_index = partition(arr, low, high, pivot_index) # Function swaps values and returns location of final pivot

            # 3. Recursively sort the subarrays
            randomized_quicksort(arr, low, pivot_index - 1)
            randomized_quicksort(arr, pivot_index + 1, high)

    def partition(arr, low, high, pivot_index):
        pivot = arr[pivot_index]
        arr[pivot_index], arr[high] = arr[high], arr[pivot_index]  # Move pivot to end
        i = low - 1
        for j in range(low, high): # Not including the pivot
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i+1], arr[high] = arr[high], arr[i+1] # move pivot to correct position
        return i+1
    ```

*   **Analysis of Randomized Quicksort:**

    *   **Expected Running Time:** O(n log n). The randomization avoids the worst-case scenario of deterministic Quicksort with high probability.

    *   **Intuition:**  On average, the random pivot will be close to the median, leading to a balanced partitioning of the array.

    *   **Derivation Sketch (Simplified):**
        *   Let X be the number of comparisons performed.
        *   Let  `z1, z2, ..., zn` be the elements of the array in sorted order.
        *   Define indicator random variable `Xij = 1` if `zi` is compared to `zj` and `0` otherwise.
        *   The total number of comparisons `X = sum (i=1 to n-1) sum (j=i+1 to n) Xij`.
        *   Expected number of comparisons `E[X] = sum (i=1 to n-1) sum (j=i+1 to n) E[Xij]`
        *   `E[Xij] = Pr(zi is compared to zj)`.
        *   The probability that `zi` is compared to `zj` is `2 / (j - i + 1)`.  This comes from the fact that for `zi` and `zj` to be compared, one of them must be the first pivot selected from the set `{zi, zi+1, ..., zj}`.  Otherwise, they'll be partitioned into different subarrays.
        *   `E[X] = sum (i=1 to n-1) sum (j=i+1 to n) 2 / (j - i + 1) = O(n log n)`. This follows because the double summation simplifies to something on the order of the harmonic series.

*   **Advantages:**
    *   Simple to implement.
    *   O(n log n) expected running time.
    *   Performance is less sensitive to the input data compared to deterministic Quicksort.

### 3. Randomized Selection

*   **Concept:**  An algorithm for finding the *i*-th smallest element in an unsorted array.  Deterministic selection can be done in O(n) time, but randomized selection is simpler and often faster in practice.

*   **Problem:** Given an array `A` of `n` distinct elements, find the element that would be at index `i` if the array were sorted (0-indexed).

*   **Deterministic Selection (Review - Median of Medians):**
    *   Involves dividing the array into groups, finding the median of each group, recursively finding the median of the medians, and then partitioning around that element.
    *   Guarantees O(n) worst-case time complexity, but is more complex to implement.

*   **Randomized Selection Algorithm:**
    1.  **Random Pivot Selection:** Choose a pivot element `p` uniformly at random from the array.
    2.  **Partitioning:** Partition the array around `p`. Let `k` be the index of `p` after partitioning.
    3.  **Comparison:**
        *   If `i == k`, then `p` is the *i*-th smallest element.  Return `p`.
        *   If `i < k`, recursively search for the *i*-th smallest element in the subarray `A[low...k-1]`.
        *   If `i > k`, recursively search for the *(i - k - 1)*-th smallest element in the subarray `A[k+1...high]`.

*   **Pseudocode:**

    ```python
    import random

    def randomized_select(arr, low, high, i):
        """
        Finds the i-th smallest element in arr[low...high].
        Note: i is 0-indexed.
        """
        if low == high:
            return arr[low]

        pivot_index = random.randint(low, high)
        pivot_index = partition(arr, low, high, pivot_index)

        if i == pivot_index:
            return arr[pivot_index]
        elif i < pivot_index:
            return randomized_select(arr, low, pivot_index - 1, i)
        else:
            return randomized_select(arr, pivot_index + 1, high, i)

    def partition(arr, low, high, pivot_index):
        pivot = arr[pivot_index]
        arr[pivot_index], arr[high] = arr[high], arr[pivot_index]
        i = low - 1
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i+1], arr[high] = arr[high], arr[i+1]
        return i+1
    ```

*   **Analysis of Randomized Selection:**

    *   **Expected Running Time:** O(n).
    *   **Worst-Case Running Time:** O(n<sup>2</sup>), but this is very unlikely.
    *   **Intuition:**  Similar to Quicksort, the random pivot is likely to be reasonably close to the median, leading to a good reduction in the size of the subarray in each recursive call.

*   **Advantages:**
    *   Simple to implement.
    *   O(n) expected running time.
    *   Generally faster than deterministic selection in practice.

### 4. Randomized Data Structures: Skip Lists (Brief Introduction)

*   **Concept:** A probabilistic data structure that allows for efficient search, insertion, and deletion operations, similar to balanced trees.

*   **Basic Idea:** A skip list consists of multiple levels of linked lists, where each level is a sublist of the level below.

*   **Construction:**
    1.  Start with a sorted linked list at the bottom level (level 0).
    2.  For each element in the bottom list, flip a coin (e.g., probability `p = 1/2`).
    3.  If the coin lands heads, promote the element to the next level.
    4.  Repeat steps 2 and 3 until the top level is empty or contains only a few elements.

*   **Search Operation:** Start at the top level and move right until you find an element greater than the search key. Then, drop down to the next level and repeat.

*   **Expected Performance:** O(log n) for search, insertion, and deletion operations.

*   **Advantages:**
    *   Simpler to implement than balanced trees (e.g., AVL trees, red-black trees).
    *   Good expected performance.
    *   Less sensitive to insertion order compared to deterministic tree structures.

*   **Note:** We are only providing a brief introduction here. A full discussion of skip lists involves more detailed analysis and implementation considerations.

### 5. Practice Questions/Exercises

1.  **Randomized Quicksort:**
    *   Implement Randomized Quicksort in your favorite programming language.
    *   Compare its performance with deterministic Quicksort on different input datasets (e.g., already sorted, reverse sorted, random).

    *   **Answer (Conceptual):** The randomized version should perform better than deterministic Quicksort on sorted or reverse sorted arrays, as it avoids the O(n<sup>2</sup>) worst-case scenario.  On random data, both will be close to O(n log n), but the randomized version will generally be less sensitive to specific patterns.

2.  **Randomized Selection:**
    *   Implement Randomized Selection.
    *   Write a test case to find the median of an array using Randomized Selection.

    *   **Answer (Conceptual):** To find the median, use `randomized_select(arr, 0, len(arr) - 1, len(arr) // 2)` if `len(arr)` is odd, or average `randomized_select(arr, 0, len(arr) - 1, len(arr) // 2 -1)` and `randomized_select(arr, 0, len(arr) - 1, len(arr) // 2)` if `len(arr)` is even.

3.  **Probabilistic Analysis:**
    *   Explain why the probability that `zi` is compared to `zj` in Randomized QuickSort is `2 / (j - i + 1)`.
    *   **Answer (Explanation):**  As explained above, for `zi` and `zj` to be compared, one of them must be the first pivot selected from the set `{zi, zi+1, ..., zj}`.  There are `j-i+1` elements in that set. The probability of either `zi` or `zj` being selected is `2 / (j - i + 1)`.

4.  **Skip Lists:**
    *   Draw a diagram of a possible skip list constructed by inserting the numbers 1, 2, 3, 4, 5, 6, 7, and 8 with probability p=1/2 for promotion to the next level.
    *   Describe how you would search for the value 5 in your skip list.

    *   **Answer (Example Skip List):** A possible skip list might look like this. Note that multiple valid structures exist based on random coin flips. The search would begin at the top level, traversing the levels until we find 5.
```
Level 2:  -- 2 -- 4 --
Level 1:  -- 1 -- 2 -- 4 -- 6 -- 7 --
Level 0:  -- 1 -- 2 -- 3 -- 4 -- 5 -- 6 -- 7 -- 8 --
```

### 6. Important Points to Remember

*   Randomization can simplify algorithms and improve their performance, especially in the face of adversarial inputs.
*   Randomized Quicksort has an expected running time of O(n log n), making it robust and efficient in practice.
*   Randomized Selection has an expected running time of O(n) for finding the *i*-th smallest element.
*   Randomized data structures like Skip Lists offer a probabilistic alternative to balanced trees with good expected performance.
*   The analysis of randomized algorithms often involves probabilistic arguments and the use of expected values.
