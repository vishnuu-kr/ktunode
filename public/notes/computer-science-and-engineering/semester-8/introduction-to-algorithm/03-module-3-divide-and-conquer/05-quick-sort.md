---
title: "Quick Sort"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 3: Divide and Conquer "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbd1"
status: "completed"
scrapedAt: "2026-05-20T17:25:15.424Z"
---
# Introduction to Algorithms: Module 3 - Divide and Conquer

## Topic: Quick Sort

### Learning Outcomes:

*   Understand the fundamental principle of the Quick Sort algorithm.
*   Analyze the time complexity of Quick Sort in its best, average, and worst-case scenarios.
*   Implement Quick Sort using a suitable partitioning strategy.
*   Compare Quick Sort with other sorting algorithms, particularly Merge Sort.

---

### 1. Introduction to Quick Sort

Quick Sort is a highly efficient, comparison-based sorting algorithm that follows the **Divide and Conquer** paradigm. It's known for its speed and is often considered one of the fastest general-purpose sorting algorithms in practice.

#### Key Concept: Divide and Conquer

The Quick Sort algorithm works by recursively breaking down the problem into smaller subproblems, solving them independently, and then combining their solutions.

*   **Divide:** The array is partitioned into two sub-arrays around a chosen element called the **pivot**. Elements smaller than the pivot are placed before it, and elements greater than the pivot are placed after it.
*   **Conquer:** The two sub-arrays are recursively sorted by applying Quick Sort to them.
*   **Combine:** Since the sub-arrays are sorted in place, no explicit combine step is needed. The array is sorted once the recursion unwinds.

---

### 2. The Quick Sort Algorithm: Step-by-Step

The core of Quick Sort lies in its **partitioning strategy**.

#### 2.1. Partitioning

The `PARTITION` procedure takes a sub-array `A[p...r]` and rearranges it such that:

1.  A pivot element `x` (chosen from `A[p...r]`) is placed at its correct sorted position `q`.
2.  All elements in `A[p...q-1]` are less than or equal to `x`.
3.  All elements in `A[q+1...r]` are greater than or equal to `x`.
4.  The procedure returns the index `q` of the pivot.

**Common Partitioning Schemes:**

*   **Lomuto Partition Scheme:**
    *   Chooses the **last element** (`A[r]`) as the pivot.
    *   Maintains an index `i` (initially `p-1`) that tracks the end of the "less than or equal to pivot" section.
    *   Iterates through the array from `p` to `r-1`. If an element `A[j]` is less than or equal to the pivot, `i` is incremented, and `A[i]` is swapped with `A[j]`.
    *   Finally, the pivot (`A[r]`) is swapped with `A[i+1]`.
    *   The pivot's final position is `i+1`.

    **Example: Lomuto Partition**
    Array: `[7, 2, 1, 6, 8, 5, 3, 4]` (p=0, r=7)
    Pivot: `A[7] = 4`

    | Step | Array                 | i   | j   | Action                                      |
    | :--- | :-------------------- | :-- | :-- | :------------------------------------------ |
    | 1    | `[7, 2, 1, 6, 8, 5, 3, 4]` | -1  | 0   | `A[0] = 7 > 4`                              |
    | 2    | `[7, 2, 1, 6, 8, 5, 3, 4]` | -1  | 1   | `A[1] = 2 <= 4`, `i` becomes 0, swap `A[0]` and `A[1]` |
    |      | `[2, 7, 1, 6, 8, 5, 3, 4]` | 0   |     |                                             |
    | 3    | `[2, 7, 1, 6, 8, 5, 3, 4]` | 0   | 2   | `A[2] = 1 <= 4`, `i` becomes 1, swap `A[1]` and `A[2]` |
    |      | `[2, 1, 7, 6, 8, 5, 3, 4]` | 1   |     |                                             |
    | 4    | `[2, 1, 7, 6, 8, 5, 3, 4]` | 1   | 3   | `A[3] = 6 > 4`                              |
    | 5    | `[2, 1, 7, 6, 8, 5, 3, 4]` | 1   | 4   | `A[4] = 8 > 4`                              |
    | 6    | `[2, 1, 7, 6, 8, 5, 3, 4]` | 1   | 5   | `A[5] = 5 > 4`                              |
    | 7    | `[2, 1, 7, 6, 8, 5, 3, 4]` | 1   | 6   | `A[6] = 3 <= 4`, `i` becomes 2, swap `A[2]` and `A[6]` |
    |      | `[2, 1, 3, 6, 8, 5, 7, 4]` | 2   |     |                                             |
    | 8    | `[2, 1, 3, 6, 8, 5, 7, 4]` | 2   | 7   | End of loop. Swap pivot `A[7]` with `A[i+1] = A[3]` |
    |      | `[2, 1, 3, 4, 8, 5, 7, 6]` | 3   |     | Pivot is at index 3. Returns 3.             |

    Sorted sub-array: `[2, 1, 3]` (left), `[4]` (pivot), `[8, 5, 7, 6]` (right)

*   **Hoare Partition Scheme:**
    *   Chooses the **first element** (`A[p]`) as the pivot.
    *   Uses two pointers, `i` starting from `p-1` and `j` starting from `r+1`.
    *   Increments `i` until `A[i] >= pivot`.
    *   Decrements `j` until `A[j] <= pivot`.
    *   If `i < j`, swap `A[i]` and `A[j]`.
    *   The loop continues until `i >= j`.
    *   The partition point is `j`. Note that `j` might not be the final position of the pivot itself, but it correctly divides the array.

    **Example: Hoare Partition**
    Array: `[7, 2, 1, 6, 8, 5, 3, 4]` (p=0, r=7)
    Pivot: `A[0] = 7`

    | Step | Array                 | i   | j   | Action                                                                                                                                   |
    | :--- | :-------------------- | :-- | :-- | :--------------------------------------------------------------------------------------------------------------------------------------- |
    | 1    | `[7, 2, 1, 6, 8, 5, 3, 4]` | -1  | 8   | `i` increments to 0 (`A[0]=7` is not `< 7`). `j` decrements to 7 (`A[7]=4` is `<= 7`). Swap `A[0]` and `A[7]`.                 |
    |      | `[4, 2, 1, 6, 8, 5, 3, 7]` | 0   | 7   |                                                                                                                                          |
    | 2    | `[4, 2, 1, 6, 8, 5, 3, 7]` | 1   | 7   | `i` increments to 1 (`A[1]=2` is `< 7`). `j` decrements to 6 (`A[6]=3` is `<= 7`). Swap `A[1]` and `A[6]`.                 |
    |      | `[4, 3, 1, 6, 8, 5, 2, 7]` | 1   | 6   |                                                                                                                                          |
    | 3    | `[4, 3, 1, 6, 8, 5, 2, 7]` | 2   | 6   | `i` increments to 2 (`A[2]=1` is `< 7`). `j` decrements to 5 (`A[5]=5` is `<= 7`). Swap `A[2]` and `A[5]`.                 |
    |      | `[4, 3, 5, 6, 8, 1, 2, 7]` | 2   | 5   |                                                                                                                                          |
    | 4    | `[4, 3, 5, 6, 8, 1, 2, 7]` | 3   | 5   | `i` increments to 3 (`A[3]=6` is not `< 7`). `j` decrements to 4 (`A[4]=8` is not `<= 7`).                                      |
    | 5    | `[4, 3, 5, 6, 8, 1, 2, 7]` | 3   | 4   | `i` is still 3, `j` is 4. `i < j`. `A[3] = 6`, `A[4] = 8`. `i` increments to 4. `j` decrements to 3. `i >= j`. Loop terminates. |
    |      | `[4, 3, 5, 6, 8, 1, 2, 7]` | 4   | 3   | Partition point is `j = 3`. Returns 3.                                                                                                   |

    Sorted sub-array: `[4, 3, 5]` (left, elements <= 6), `[6, 8, 1, 2, 7]` (right, elements > 6)

#### 2.2. The `QUICKSORT` Procedure

```
QUICKSORT(A, p, r)
  if p < r
    q = PARTITION(A, p, r)  // Partition the array
    QUICKSORT(A, p, q)     // Recursively sort the left sub-array
    QUICKSORT(A, q + 1, r) // Recursively sort the right sub-array
```

**Important Note on Partitioning:** The exact sub-array boundaries passed to the recursive calls depend on the `PARTITION` scheme used.
*   With **Lomuto**, the pivot is at `q`, so we sort `A[p...q-1]` and `A[q+1...r]`.
*   With **Hoare**, the partition point `j` divides the array into `A[p...j]` and `A[j+1...r]`. So we sort `A[p...q]` and `A[q+1...r]` where `q` is the returned partition index.

---

### 3. Time Complexity Analysis

The time complexity of Quick Sort is heavily influenced by the choice of the pivot.

#### 3.1. Best Case

*   **Scenario:** The pivot always partitions the array into two sub-arrays of roughly equal size. This happens when the pivot is always the median element.
*   **Recurrence Relation:** `T(n) = 2T(n/2) + Θ(n)`
    *   `2T(n/2)`: Two recursive calls on sub-arrays of size `n/2`.
    *   `Θ(n)`: The partitioning step takes linear time.
*   **Solution:** Using the Master Theorem, this recurrence solves to `T(n) = Θ(n log n)`.

#### 3.2. Worst Case

*   **Scenario:** The pivot is always the smallest or largest element in the sub-array. This occurs when the input array is already sorted or reverse-sorted and the pivot is consistently chosen as the first or last element.
*   **Recurrence Relation:** `T(n) = T(n-1) + T(0) + Θ(n)` which simplifies to `T(n) = T(n-1) + Θ(n)`
    *   `T(n-1)`: One recursive call on a sub-array of size `n-1`.
    *   `T(0)`: The other sub-array is empty.
    *   `Θ(n)`: The partitioning step.
*   **Solution:** This recurrence relation unfolds to `Θ(n^2)`.

    **Example of Worst Case:**
    Array: `[1, 2, 3, 4, 5]` (already sorted)
    Lomuto partition: Pivot is always 5.
    1. Partition `[1, 2, 3, 4, 5]` -> pivot 5. Array becomes `[1, 2, 3, 4, 5]`. Pivot at index 4.
       Recursive calls on `[1, 2, 3, 4]` and `[]`.
    2. Partition `[1, 2, 3, 4]` -> pivot 4. Array becomes `[1, 2, 3, 4]`. Pivot at index 3.
       Recursive calls on `[1, 2, 3]` and `[]`.
    ...and so on. This leads to `n` levels of recursion, each taking `O(n)` time.

#### 3.3. Average Case

*   **Scenario:** The pivot is "reasonably" balanced, even if not perfectly in the middle. For example, the pivot is always in the middle 10% or 90% of the elements.
*   **Intuition:** While worst-case partitions are bad, they are unlikely to happen frequently in random inputs.
*   **Analysis:** Rigorous mathematical analysis shows that for a randomly chosen pivot or a randomly ordered input array, the expected running time is `Θ(n log n)`. The proof involves analyzing the probabilities of different partition sizes.

---

### 4. Pivot Selection Strategies

To avoid the worst-case `Θ(n^2)` behavior, different pivot selection strategies can be employed.

*   **First Element:** Simple, but prone to worst-case on sorted/reverse-sorted data.
*   **Last Element (Lomuto):** Similar to the first element.
*   **Middle Element:** Can be better than first/last but still not ideal.
*   **Random Element:** Choose a random element as the pivot. This is a very effective strategy in practice, making the worst-case scenario highly improbable for any given input. The expected time complexity remains `Θ(n log n)`.
*   **Median-of-Three:** Choose the median of the first, middle, and last elements of the sub-array as the pivot. This strategy improves performance by reducing the likelihood of picking extreme values.

---

### 5. Quick Sort vs. Merge Sort

Both Quick Sort and Merge Sort are efficient `Θ(n log n)` sorting algorithms.

| Feature          | Quick Sort                                     | Merge Sort                                     |
| :--------------- | :--------------------------------------------- | :--------------------------------------------- |
| **Paradigm**     | Divide and Conquer                             | Divide and Conquer                             |
| **In-place?**    | Yes (typically, though recursion stack uses space) | No (requires auxiliary space)                  |
| **Time Complexity (Best)** | `Θ(n log n)`                                   | `Θ(n log n)`                                   |
| **Time Complexity (Average)** | `Θ(n log n)`                                   | `Θ(n log n)`                                   |
| **Time Complexity (Worst)** | `Θ(n^2)` (mitigated by good pivot selection) | `Θ(n log n)`                                   |
| **Space Complexity** | `O(log n)` average (recursion stack), `O(n)` worst | `O(n)` (for auxiliary array)                   |
| **Stability**    | Not stable (relative order of equal elements can change) | Stable (preserves relative order of equal elements) |
| **Practical Performance** | Generally faster in practice due to better cache performance and lower constant factors. | Can be slightly slower in practice due to auxiliary space. |

**When to use which:**

*   **Quick Sort:** When memory is a concern and stability is not required. It's often the default choice for general-purpose sorting in libraries.
*   **Merge Sort:** When stability is crucial or when guaranteed `Θ(n log n)` performance is needed (e.g., to avoid the `Θ(n^2)` worst-case of Quick Sort). It's also useful for sorting linked lists efficiently.

---

### 6. Implementation Details and Variations

*   **Iterative Quick Sort:** The recursive nature of Quick Sort can be converted to an iterative version using an explicit stack to manage the sub-array ranges, reducing the recursion depth and potential stack overflow issues for very large inputs.
*   **Tail Recursion Elimination:** Can be used to optimize the recursive calls to reduce stack usage.

---

### 7. Important Points to Remember

*   Quick Sort is a **divide and conquer** algorithm.
*   Its efficiency hinges on the **pivot selection** and the quality of the **partitioning** step.
*   **Best and Average Case:** `Θ(n log n)`
*   **Worst Case:** `Θ(n^2)` (occurs with bad pivot choices, e.g., always picking the smallest/largest element).
*   **Pivot Selection Strategies** like random selection or median-of-three are crucial for achieving good average-case performance.
*   Quick Sort is an **in-place** sorting algorithm (aside from the recursion stack space).
*   It is **not a stable** sorting algorithm.
*   It generally outperforms Merge Sort in practice due to better cache locality and lower constant factors, but Merge Sort offers guaranteed performance and stability.

---

### 8. Practice Questions and Exercises

**Question 1:**
Consider the array `A = [3, 1, 4, 1, 5, 9, 2, 6]`. Using the Lomuto partition scheme with the last element as the pivot, trace the steps of partitioning the sub-array `A[0...7]`. What is the final position of the pivot and the resulting array?

**Answer 1:**
Array: `[3, 1, 4, 1, 5, 9, 2, 6]` (p=0, r=7)
Pivot: `A[7] = 6`

| Step | Array                 | i   | j   | Action                                      |
| :--- | :-------------------- | :-- | :-- | :------------------------------------------ |
| 1    | `[3, 1, 4, 1, 5, 9, 2, 6]` | -1  | 0   | `A[0]=3 <= 6`, i=0, swap A[0] with A[0]     |
|      | `[3, 1, 4, 1, 5, 9, 2, 6]` | 0   |     |                                             |
| 2    | `[3, 1, 4, 1, 5, 9, 2, 6]` | 0   | 1   | `A[1]=1 <= 6`, i=1, swap A[1] with A[1]     |
|      | `[3, 1, 4, 1, 5, 9, 2, 6]` | 1   |     |                                             |
| 3    | `[3, 1, 4, 1, 5, 9, 2, 6]` | 1   | 2   | `A[2]=4 <= 6`, i=2, swap A[2] with A[2]     |
|      | `[3, 1, 4, 1, 5, 9, 2, 6]` | 2   |     |                                             |
| 4    | `[3, 1, 4, 1, 5, 9, 2, 6]` | 2   | 3   | `A[3]=1 <= 6`, i=3, swap A[3] with A[3]     |
|      | `[3, 1, 4, 1, 5, 9, 2, 6]` | 3   |     |                                             |
| 5    | `[3, 1, 4, 1, 5, 9, 2, 6]` | 3   | 4   | `A[4]=5 <= 6`, i=4, swap A[4] with A[4]     |
|      | `[3, 1, 4, 1, 5, 9, 2, 6]` | 4   |     |                                             |
| 6    | `[3, 1, 4, 1, 5, 9, 2, 6]` | 4   | 5   | `A[5]=9 > 6`                                |
| 7    | `[3, 1, 4, 1, 5, 9, 2, 6]` | 4   | 6   | `A[6]=2 <= 6`, i=5, swap A[5] with A[6]     |
|      | `[3, 1, 4, 1, 2, 9, 5, 6]` | 5   |     |                                             |
| 8    | `[3, 1, 4, 1, 2, 9, 5, 6]` | 5   | 7   | End of loop. Swap pivot `A[7]` with `A[i+1] = A[6]` |
|      | `[3, 1, 4, 1, 2, 6, 5, 9]` | 6   |     | Pivot (6) is at index 6. Returns 6.         |

Resulting array: `[3, 1, 4, 1, 2, 6, 5, 9]`. Pivot `6` is at index `6`.

**Question 2:**
What is the worst-case time complexity of Quick Sort and under what conditions does it occur?

**Answer 2:**
The worst-case time complexity of Quick Sort is **`Θ(n^2)`**. This occurs when the pivot selection consistently results in highly unbalanced partitions, meaning one sub-array is empty or has only one element, and the other sub-array contains almost all the remaining elements. This typically happens when the input array is already sorted or reverse-sorted, and the pivot is chosen as either the first or last element of the sub-array.

**Question 3:**
Compare Quick Sort and Merge Sort in terms of space complexity and stability.

**Answer 3:**
*   **Space Complexity:**
    *   **Quick Sort:** Average space complexity is `O(log n)` due to the recursion stack. In the worst case, it can be `O(n)`.
    *   **Merge Sort:** Requires `O(n)` auxiliary space to store the merged sub-arrays.
*   **Stability:**
    *   **Quick Sort:** Is **not stable**. The relative order of equal elements might change during sorting.
    *   **Merge Sort:** Is **stable**. It preserves the relative order of equal elements.

**Question 4 (Conceptual):**
If you were asked to sort a very large array where memory is a critical constraint, and the data is likely to be already sorted or reverse-sorted, which sorting algorithm (Quick Sort or Merge Sort) would you lean towards, and why? Consider the trade-offs.

**Answer 4:**
If memory is a critical constraint and the data might be sorted/reverse-sorted, I would lean towards **Quick Sort with a robust pivot selection strategy (like random selection or median-of-three)**.

**Reasoning:**
*   **Memory Constraint:** Quick Sort is generally in-place (apart from the recursion stack), making it more memory-efficient than Merge Sort, which requires `O(n)` auxiliary space.
*   **Potential Worst-Case:** The risk of Quick Sort's `Θ(n^2)` worst-case on sorted/reverse-sorted data is a concern. However, using a good pivot selection strategy (randomization is highly effective) makes this worst-case scenario extremely improbable. The expected `O(log n)` space complexity of the recursion stack is manageable.
*   **Merge Sort Trade-off:** Merge Sort guarantees `Θ(n log n)` time and is stable, but its `O(n)` space requirement could be prohibitive if memory is severely limited.

Therefore, while Quick Sort has a theoretical worst-case, its practical in-place nature and good average-case performance (with proper pivot selection) make it a strong contender when memory is the primary concern, even with potentially ordered data. If absolute guaranteed `Θ(n log n)` performance was paramount, or if stability was also a requirement, then Merge Sort would be the preferred choice despite its higher memory footprint.
