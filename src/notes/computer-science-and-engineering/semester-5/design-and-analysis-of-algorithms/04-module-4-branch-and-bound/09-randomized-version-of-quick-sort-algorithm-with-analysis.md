---
title: "Randomized version of Quick Sort algorithm with analysis"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 4: Branch and Bound "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b572"
status: "completed"
scrapedAt: "2026-05-20T16:45:59.285Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS - Module 4: Branch and Bound - Randomized Quick Sort

**Learning Outcomes:**

*   Understand the motivation behind randomized algorithms.
*   Learn the randomized version of the Quick Sort algorithm.
*   Analyze the expected time complexity of Randomized Quick Sort.
*   Compare Randomized Quick Sort with the standard Quick Sort.
*   Understand the principles of Branch and Bound and how Randomized Quick Sort might fit within that framework (though it's a probabilistic rather than deterministic approach).

**1. Introduction: Why Randomized Algorithms?**

*   **Deterministic Algorithms:** Algorithms that, given the same input, will always produce the same output and follow the same execution path.
*   **Randomized Algorithms:** Algorithms that make random choices during execution.  These choices often influence the algorithm's flow, potentially leading to different execution paths and running times for the same input.
*   **Motivation for Randomization:**
    *   **Avoiding Worst-Case Inputs:** Some deterministic algorithms have specific "worst-case" inputs that cause them to perform poorly (e.g., standard Quick Sort on an already sorted array). Randomization can help to avoid or mitigate the impact of these bad inputs *on average*.
    *   **Simplicity and Efficiency:** In some cases, randomized algorithms can be simpler to implement and more efficient than deterministic counterparts.
    *   **Symmetry Breaking:** In distributed systems or parallel algorithms, randomization can be used to break symmetry and avoid contention.
    *   **Approximation Algorithms:** For problems where finding an optimal solution is computationally expensive, randomized algorithms can provide good approximate solutions with a high probability.

**2. Randomized Quick Sort: The Algorithm**

*   **Standard Quick Sort Recap:**
    *   Chooses a pivot element from the array.
    *   Partitions the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
    *   Recursively sorts the sub-arrays.
    *   The performance of standard Quick Sort heavily depends on the pivot choice.  A poor pivot choice (e.g., always choosing the smallest or largest element) leads to O(n^2) worst-case time complexity.

*   **Randomized Quick Sort:**
    *   **Key Idea:** Instead of choosing a pivot deterministically (e.g., always the first element), *randomly* choose a pivot element from the array before partitioning.
    *   **Algorithm Steps:**
        1.  **Random Pivot Selection:** Randomly select an index `i` in the range `[low, high]` where `low` and `high` are the lower and upper bounds of the current sub-array being considered.
        2.  **Swap:** Swap `arr[i]` with `arr[high]` (or `arr[low]` – the specific choice doesn't change the analysis much). This places the chosen pivot at a consistent location for the partition function.
        3.  **Partition:**  Use the standard Quick Sort partition procedure to arrange the elements such that all elements less than the pivot are to its left, and all elements greater than the pivot are to its right.  Let `j` be the index where the pivot ends up after the partition.
        4.  **Recursive Calls:** Recursively call Randomized Quick Sort on the sub-arrays `arr[low...j-1]` and `arr[j+1...high]`.

*   **Pseudocode:**

    ```
    function RandomizedQuickSort(arr, low, high):
      if low < high:
        // 1. Random Pivot Selection
        i = Random(low, high) // Generates a random integer between low and high (inclusive)

        // 2. Swap
        Swap(arr[i], arr[high])

        // 3. Partition
        j = Partition(arr, low, high) // Returns the index of the pivot

        // 4. Recursive Calls
        RandomizedQuickSort(arr, low, j-1)
        RandomizedQuickSort(arr, j+1, high)

    function Partition(arr, low, high):
      pivot = arr[high]
      i = low - 1

      for j = low to high - 1:
        if arr[j] <= pivot:
          i = i + 1
          Swap(arr[i], arr[j])

      Swap(arr[i+1], arr[high])
      return i + 1
    ```

*   **Example:**

    Let's say our array is `arr = [7, 2, 1, 6, 8, 5, 3, 4]` and we want to sort it using Randomized Quick Sort.

    1.  **First Call:** `RandomizedQuickSort(arr, 0, 7)`
        *   `Random(0, 7)` might return `3`. So, `arr[3]` (which is 6) becomes the pivot.
        *   Swap `arr[3]` with `arr[7]` resulting in `arr = [7, 2, 1, 4, 8, 5, 3, 6]`
        *   `Partition(arr, 0, 7)` would rearrange the array (and return the new pivot position, let's say 5): `arr = [2, 1, 3, 4, 5, 6, 7, 8]`
        *   Now, `RandomizedQuickSort(arr, 0, 4)` and `RandomizedQuickSort(arr, 6, 7)` will be called recursively.

    2.  **Recursive Calls:** The process repeats on the sub-arrays until the entire array is sorted. The key difference from standard Quick Sort is the randomized pivot selection in each step.

**3. Analysis of Randomized Quick Sort**

*   **Worst-Case Analysis:** In the worst-case scenario, we might consistently pick a very bad pivot (e.g., the smallest or largest element), even with randomization.  The probability of this happening repeatedly is very low, but the *worst-case time complexity remains O(n^2)*.

*   **Average-Case (Expected Time) Analysis:** The crucial advantage of Randomized Quick Sort is its *expected* or *average-case* performance. We analyze the expected number of comparisons.
    *   Let `X` be the random variable representing the total number of comparisons made by Randomized Quick Sort on an array of size `n`.
    *   Let `x_ij` be an indicator random variable which is 1 if the `i`th smallest element and the `j`th smallest element are compared during the execution of the algorithm, and 0 otherwise.
    *   Therefore, `X = sum(i=1 to n-1) sum(j=i+1 to n) x_ij`.
    *   `E[X] = E[sum(i=1 to n-1) sum(j=i+1 to n) x_ij] = sum(i=1 to n-1) sum(j=i+1 to n) E[x_ij]` (by linearity of expectation).
    *   `E[x_ij] = P(i`th smallest element and `j`th smallest element are compared).

    *   **Key Observation:** Two elements `z_i` and `z_j` are compared *only if* one of them is chosen as the pivot *before* any element between them is chosen as the pivot.  Think of it this way: If an element between `z_i` and `z_j` (e.g., `z_k` where `i < k < j`) is chosen as the pivot first, then `z_i` and `z_j` will be placed in different sub-arrays and never compared again.

    *   The probability that either `z_i` or `z_j` is chosen as the first pivot from the set `{z_i, z_{i+1}, ..., z_j}` is `2 / (j - i + 1)`.

    *   Therefore, `E[x_ij] = 2 / (j - i + 1)`.

    *   Substituting back into the equation for `E[X]`:

        `E[X] = sum(i=1 to n-1) sum(j=i+1 to n) 2 / (j - i + 1)`

    *   After some mathematical manipulation (using substitutions and properties of harmonic numbers), this summation simplifies to:

        `E[X] <= 2 * n * ln(n)`

    *   **Conclusion:**  The *expected time complexity of Randomized Quick Sort is O(n log n)*.  This is a significant improvement over the worst-case O(n^2) of standard Quick Sort and is comparable to other efficient sorting algorithms like Merge Sort.

*   **Space Complexity:**  Like standard Quick Sort, Randomized Quick Sort is an in-place sorting algorithm, meaning it requires only a small amount of extra space (for the recursion stack). In the average case, the space complexity is O(log n) due to the recursive calls. In the worst case, it can be O(n).

**4. Comparison with Standard Quick Sort**

| Feature         | Standard Quick Sort                                      | Randomized Quick Sort                                      |
|-----------------|----------------------------------------------------------|----------------------------------------------------------|
| Pivot Selection | Deterministic (e.g., first element, last element)          | Randomized (randomly chooses a pivot)                      |
| Worst-Case      | O(n^2) - Occurs with specific input (e.g., sorted array) | O(n^2) - Still possible, but probability is extremely low |
| Average-Case    | O(n log n)                                                | O(n log n)                                                |
| Best-Case       | O(n log n)                                                | O(n log n)                                                |
| Input Sensitivity | Highly sensitive to input ordering                      | Less sensitive to input ordering                         |
| Implementation  | Slightly simpler to implement                              | Slightly more complex due to random number generation       |

*   **Key Takeaway:** Randomized Quick Sort significantly reduces the probability of encountering the worst-case scenario, making it a more reliable choice than standard Quick Sort in most situations.

**5. Randomized Quick Sort and Branch and Bound (Brief Discussion)**

*   **Branch and Bound:** A deterministic algorithm design paradigm typically used for optimization problems. It systematically explores the solution space by building a decision tree and pruning branches that cannot lead to an optimal solution.  Branch and Bound relies on deterministic bounds to eliminate sub-problems.
*   **How Randomized Quick Sort Relates (Loosely):** While Randomized Quick Sort *isn't* a Branch and Bound algorithm itself, it shares a similar concept of dividing the problem into sub-problems.  However, the "bounding" aspect of Branch and Bound is absent. Randomized Quick Sort *probabilistically* hopes to divide the problem into roughly equal sub-problems, leading to efficient sorting.  It's not *guaranteed* to do so, unlike the deterministic bounding in Branch and Bound. You wouldn't use Randomized Quick Sort *within* a Branch and Bound framework in a typical scenario.  Branch and Bound deals with *optimization*, whereas Randomized Quick Sort deals with *sorting*.

**6. Important Points to Remember**

*   Randomization can improve the average-case performance and robustness of algorithms.
*   Randomized Quick Sort has an expected time complexity of O(n log n), making it efficient.
*   While the worst-case is still O(n^2), the probability of it occurring is greatly reduced compared to standard Quick Sort.
*   Randomized Quick Sort chooses a pivot randomly, aiming for balanced partitioning.
*   Remember the key idea behind the analysis:  two elements are compared only if one of them is the pivot *before* any element between them.
*  Randomized algorithms guarantee expected performance, not necessarily the best performance on every single run.

**7. Practice Questions/Exercises**

1.  **Explain in your own words why randomization is helpful in the Quick Sort algorithm.**

    *   **Answer:** Randomization helps to avoid consistently picking bad pivots, which can lead to O(n^2) time complexity in standard Quick Sort. By randomly selecting pivots, the algorithm is less susceptible to specific input orderings that cause worst-case behavior.

2.  **Describe the steps involved in the Randomized Quick Sort algorithm.**

    *   **Answer:**
        1.  Randomly select an index in the current sub-array.
        2.  Swap the element at that index with the last element (or a designated end point) of the sub-array to use it as the pivot.
        3.  Partition the array around the pivot.
        4.  Recursively sort the sub-arrays to the left and right of the pivot.

3.  **What is the expected time complexity of Randomized Quick Sort? How does it compare to the worst-case time complexity?**

    *   **Answer:** The expected (average-case) time complexity is O(n log n). The worst-case time complexity is O(n^2).  While the worst-case exists, the probability of it occurring is significantly lower with randomization.

4.  **Consider the array `[5, 2, 8, 1, 9, 4, 7, 3, 6]`. Manually trace the first two levels of recursion of Randomized Quick Sort. Show the array after each partition and clearly indicate the pivot chosen at each step.** (Note: Random number generation is unpredictable, so use hypothetical random numbers for your example).

    *   **Answer (Example):**

        *   **Initial Array:** `[5, 2, 8, 1, 9, 4, 7, 3, 6]`
        *   **Level 1:**
            *   `Random(0, 8)` returns `2`. Pivot = `arr[2]` = 8.
            *   Swap `arr[2]` and `arr[8]`: `[5, 2, 6, 1, 9, 4, 7, 3, 8]`
            *   Partition around 8: `[5, 2, 6, 1, 3, 4, 7, 9, 8]` (Pivot at index 7)
        *   **Level 2 (Two recursive calls):**
            *   `RandomizedQuickSort([5, 2, 6, 1, 3, 4, 7], 0, 6)`
                *   `Random(0, 6)` returns `3`. Pivot = `arr[3]` = 1.
                *   Swap `arr[3]` and `arr[6]`: `[5, 2, 6, 7, 3, 4, 1]`
                *   Partition around 1: `[1, 2, 6, 7, 3, 4, 5]` (Pivot at index 0)
            *   `RandomizedQuickSort([9], 8, 8)`  (Base Case – single element, so no further action)

5.  **Explain why the probability of comparing two elements `x` and `y` in Randomized Quick Sort is related to the number of elements between them.**

    *   **Answer:** The elements `x` and `y` are compared only if either `x` or `y` is selected as the pivot before any element that lies strictly *between* them. If an element between `x` and `y` is chosen as the pivot first, then `x` and `y` will be placed in separate sub-arrays and will never be compared. Therefore, the probability of comparison is inversely proportional to the number of elements between them.

By mastering these notes and answering the practice questions, you should gain a strong understanding of Randomized Quick Sort and its analysis. Remember to focus on the key concepts and the reasoning behind the average-case analysis for a comprehensive understanding.
