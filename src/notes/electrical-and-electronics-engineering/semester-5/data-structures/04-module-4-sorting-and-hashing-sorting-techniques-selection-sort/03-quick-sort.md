---
title: "Quick Sort"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing: Sorting Techniques – Selection Sort"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363f5"
status: "completed"
scrapedAt: "2026-05-23T16:20:51.327Z"
---
# Data Structures: Module 4 - Sorting and Hashing: Sorting Techniques – Quick Sort

## 1. Introduction to Quick Sort

Quick Sort is a highly efficient, comparison-based sorting algorithm known for its excellent average-case performance. It is a divide-and-conquer algorithm, meaning it breaks down a problem into smaller subproblems, solves them independently, and then combines their solutions.

**Key Concept:** Quick Sort works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

**Algorithm Idea:**
1. **Pick a Pivot:** Choose an element from the array as the pivot.
2. **Partition:** Rearrange the array such that all elements less than the pivot come before it, and all elements greater than the pivot come after it. Elements equal to the pivot can go on either side. After partitioning, the pivot is in its final sorted position.
3. **Recurse:** Recursively apply Quick Sort to the sub-array of elements with smaller values and the sub-array of elements with larger values.

**When to Use:** Quick Sort is generally preferred for large datasets due to its average-case time complexity.

## 2. Algorithm Steps and Logic

### 2.1. The Partitioning Process

The core of Quick Sort lies in its partitioning strategy. A common partitioning scheme is the **Lomuto Partition Scheme** or the **Hoare Partition Scheme**. We'll focus on the Lomuto scheme for clarity, as it's often presented in introductory texts.

**Lomuto Partition Scheme:**
This scheme selects the last element of the sub-array as the pivot. It maintains an index `i` that tracks the boundary between elements smaller than the pivot and elements greater than or equal to the pivot.

**Steps:**
1. Choose the last element of the array (or sub-array) as the **pivot**.
2. Initialize an index `i` to `low - 1` (where `low` is the starting index of the sub-array). This `i` will point to the last element that is smaller than the pivot.
3. Iterate through the array from `low` to `high - 1` (exclusive of the pivot). Let this current index be `j`.
4. If `array[j]` is less than or equal to the `pivot`:
   - Increment `i`.
   - Swap `array[i]` and `array[j]`.
5. After the loop finishes, swap the pivot element (`array[high]`) with the element at `array[i + 1]`.
6. The pivot is now at index `i + 1`. Return `i + 1` as the partition index.

**Example of Lomuto Partition:**
Consider the array: `[10, 80, 30, 90, 40, 50, 70]`
Let `low = 0`, `high = 6`. Pivot is `array[6] = 70`.

Initialize `i = -1`.

| j | array[j] | Condition (array[j] <= pivot) | Action           | i | array after swap |
|---|----------|-------------------------------|------------------|---|------------------|
| 0 | 10       | True                          | i++, swap(arr[0], arr[0]) | 0 | [10, 80, 30, 90, 40, 50, 70] |
| 1 | 80       | False                         |                  | 0 | [10, 80, 30, 90, 40, 50, 70] |
| 2 | 30       | True                          | i++, swap(arr[1], arr[2]) | 1 | [10, 30, 80, 90, 40, 50, 70] |
| 3 | 90       | False                         |                  | 1 | [10, 30, 80, 90, 40, 50, 70] |
| 4 | 40       | True                          | i++, swap(arr[2], arr[4]) | 2 | [10, 30, 40, 90, 80, 50, 70] |
| 5 | 50       | True                          | i++, swap(arr[3], arr[5]) | 3 | [10, 30, 40, 50, 80, 90, 70] |

End of loop. Swap `array[i+1]` (which is `array[4]`) with `array[high]` (`array[6]`).
Swap `80` and `70`.
Array becomes: `[10, 30, 40, 50, 70, 90, 80]`
The pivot `70` is now at index `4`. The partition index is `4`.

**Hoare Partition Scheme:** (Often more efficient but slightly more complex to implement correctly)
This scheme uses two pointers, one starting from the left (`i`) and one from the right (`j`). It moves `i` forward until it finds an element greater than or equal to the pivot, and `j` backward until it finds an element less than or equal to the pivot. If `i < j`, it swaps `array[i]` and `array[j]`. The process continues until `i >= j`. The partition index returned is typically `j`.

### 2.2. The Recursive Quick Sort Function

The `quickSort` function takes the array and the `low` and `high` indices of the sub-array to be sorted.

**Function Signature:** `quickSort(array, low, high)`

**Steps:**
1. **Base Case:** If `low < high` (meaning there's at least one element to sort):
   a. **Partition:** Call the `partition` function to partition the sub-array `array[low...high]` and get the pivot index `pi`.
   b. **Recurse on Left Sub-array:** Call `quickSort(array, low, pi - 1)`.
   c. **Recurse on Right Sub-array:** Call `quickSort(array, pi + 1, high)`.

**Example of Recursive Calls:**
Consider `[3, 6, 8, 10, 1, 2, 1]`

1. `quickSort([3, 6, 8, 10, 1, 2, 1], 0, 6)`
   - Pivot (last element): `1`
   - Partitioning: (e.g., using Lomuto) might result in `[1, 1, 3, 2, 6, 8, 10]`, pivot at index `1`.
   - Call `quickSort([1, 1, 3, 2, 6, 8, 10], 0, 0)` (left sub-array)
   - Call `quickSort([1, 1, 3, 2, 6, 8, 10], 2, 6)` (right sub-array)

2. `quickSort([1, 1, 3, 2, 6, 8, 10], 2, 6)`
   - Sub-array: `[3, 2, 6, 8, 10]`
   - Pivot: `10`
   - Partitioning: might result in `[3, 2, 6, 8, 10]`, pivot at index `6`.
   - Call `quickSort([1, 1, 3, 2, 6, 8, 10], 2, 5)`
   - Call `quickSort([1, 1, 3, 2, 6, 8, 10], 7, 6)` (base case, `low > high`)

This process continues until all sub-arrays are sorted.

## 3. Analysis of Quick Sort

### 3.1. Time Complexity

*   **Best Case:** O(n log n)
    *   This occurs when the pivot selection consistently divides the array into two nearly equal halves. The depth of the recursion tree is O(log n), and at each level, we do O(n) work for partitioning.
*   **Average Case:** O(n log n)
    *   On average, Quick Sort performs very well. Even with slightly unbalanced partitions, the total work remains proportional to n log n.
*   **Worst Case:** O(n^2)
    *   This happens when the pivot selection is consistently poor, leading to highly unbalanced partitions. For example, if the array is already sorted or reverse-sorted, and we always pick the first or last element as the pivot, one sub-array will have `n-1` elements and the other will have `0`. This degenerates the algorithm into something similar to Selection Sort.

**Why is the worst case O(n^2)?**
If at each step, the partition divides the array into sizes `k` and `n-1-k`, the recurrence relation is `T(n) = T(k) + T(n-1-k) + O(n)`. If `k` is always `0` or `n-1`, then `T(n) = T(n-1) + O(n)`. This sums up to `O(n) + O(n-1) + ... + O(1)`, which is `O(n^2)`.

### 3.2. Space Complexity

*   **O(log n)** (average case)
*   **O(n)** (worst case)

**Why?**
The space complexity is determined by the depth of the recursion stack.
*   In the average case, the recursion depth is O(log n) due to balanced partitions.
*   In the worst case, the recursion depth can be O(n) if partitions are highly unbalanced.

**Note:** While the space complexity is often stated as O(log n), it's important to remember the O(n) worst-case scenario due to recursion. In-place partitioning algorithms don't add significant extra space beyond the recursion stack.

### 3.3. Comparison with other Sorting Algorithms

*   **vs. Merge Sort:** Both have O(n log n) average and worst-case time complexity. Merge Sort has a stable space complexity of O(n) (for the auxiliary array), whereas Quick Sort's space complexity varies with recursion depth. Quick Sort is generally faster in practice due to better cache locality and lower constant factors.
*   **vs. Heap Sort:** Both have O(n log n) average and worst-case time complexity. Heap Sort has a guaranteed O(n log n) worst-case, while Quick Sort does not. Heap Sort is also in-place (O(1) space complexity beyond the array itself). Quick Sort is often preferred for its speed in practice.
*   **vs. Selection Sort:** Quick Sort is significantly faster (O(n log n) vs. O(n^2)). Selection Sort is simple but inefficient for larger datasets.

## 4. Pivot Selection Strategies

The performance of Quick Sort heavily relies on the pivot selection strategy. A good pivot strategy aims to ensure balanced partitions.

*   **First Element:** Simple but prone to O(n^2) for sorted/reverse-sorted arrays.
*   **Last Element (Lomuto's default):** Similar to the first element, susceptible to O(n^2).
*   **Middle Element:** Better than first/last but still can lead to bad partitions.
*   **Random Pivot:** Choosing a random element as the pivot makes the worst-case scenario highly unlikely on any given input. The expected time complexity is O(n log n).
*   **Median-of-Three:** Select the median of the first, middle, and last elements as the pivot. This strategy significantly reduces the probability of hitting the worst-case scenario by avoiding the smallest or largest element as the pivot if the array is nearly sorted.

**Recommendation:** For practical implementations, **random pivot selection** or **median-of-three** are highly recommended.

## 5. Implementation Considerations

### 5.1. In-Place Sorting

Quick Sort is typically implemented as an **in-place sorting algorithm**, meaning it sorts the array without requiring a large amount of additional memory (beyond the recursion stack). The partitioning step rearranges elements within the original array.

### 5.2. Tail Recursion Optimization

In some languages or compilers, tail recursion can be optimized to prevent stack overflow for very deep recursion. However, Quick Sort's recursive calls are not strictly tail calls in the standard implementation (`quickSort(low, pi-1)` is followed by `quickSort(pi+1, high)`). A common optimization is to make the recursive call on the *smaller* sub-array as a tail call, and then recursively call on the larger sub-array. This limits the recursion depth to O(log n).

### 5.3. Handling Small Sub-arrays

For very small sub-arrays (e.g., of size less than 10-20 elements), the overhead of recursion and partitioning in Quick Sort can be greater than simpler algorithms like Insertion Sort. A common optimization is to switch to Insertion Sort when the sub-array size falls below a certain threshold.

## 6. Advantages and Disadvantages

### 6.1. Advantages

*   **Fast on Average:** Excellent average-case time complexity of O(n log n).
*   **In-Place:** Generally requires minimal additional memory (apart from the recursion stack).
*   **Efficient in Practice:** Often faster than Merge Sort and Heap Sort due to lower constant factors and good cache locality.
*   **Widely Used:** A popular and robust sorting algorithm.

### 6.2. Disadvantages

*   **Worst-Case Performance:** Susceptible to O(n^2) time complexity if pivot selection is poor.
*   **Not Stable:** Quick Sort is not a stable sort, meaning the relative order of equal elements might not be preserved.
*   **Recursive Nature:** Can lead to stack overflow issues for very large datasets with naive implementations or poor pivot choices, although this can be mitigated.

## 7. Applications

Quick Sort is used in a variety of scenarios:

*   **General-purpose sorting:** When speed is critical and stability is not a requirement.
*   **Operating System Kernels:** For managing processes and memory.
*   **Databases:** For sorting query results.
*   **In Libraries:** Many standard library sorting functions (e.g., `qsort` in C, `Arrays.sort` in Java for primitive types) often use Quick Sort or a hybrid of Quick Sort.

## 8. Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain the divide-and-conquer strategy as applied in Quick Sort. What is the role of the pivot element?

**Answer:**
The divide-and-conquer strategy involves breaking the problem of sorting an array into smaller subproblems. In Quick Sort, the array is divided into two sub-arrays based on a chosen **pivot** element. Elements smaller than the pivot go into the left sub-array, and elements larger than the pivot go into the right sub-array. The pivot itself is placed in its correct sorted position. These sub-arrays are then recursively sorted until the entire array is ordered. The pivot acts as a dividing point, ensuring that once partitioned, it's correctly placed relative to all other elements.

**Question 2 (Analysis):**
What is the time complexity of Quick Sort in its best, average, and worst cases? Briefly explain why the worst-case complexity arises.

**Answer:**
*   **Best Case:** O(n log n) - occurs when the pivot consistently divides the array into roughly equal halves.
*   **Average Case:** O(n log n) - even with somewhat unbalanced partitions, the overall performance remains efficient.
*   **Worst Case:** O(n^2) - occurs when the pivot selection consistently leads to highly unbalanced partitions (e.g., always picking the smallest or largest element in a nearly sorted/reverse-sorted array).

The worst-case complexity arises because the partitioning step effectively reduces the problem size by only one element at each recursive step, leading to a linear chain of comparisons and swaps, similar to Selection Sort.

**Question 3 (Implementation Logic):**
Consider the following array: `[5, 2, 8, 1, 9, 4, 7]`
If we use the **Lomuto Partition Scheme** with the last element as the pivot, what is the state of the array after the first partitioning step, and what is the pivot's final index?

**Answer:**
Array: `[5, 2, 8, 1, 9, 4, 7]`
`low = 0`, `high = 6`. Pivot is `7`.
Initialize `i = -1`.

| j | array[j] | Condition (array[j] <= pivot) | Action           | i | array after swap |
|---|----------|-------------------------------|------------------|---|------------------|
| 0 | 5        | True                          | i++, swap(arr[0], arr[0]) | 0 | [5, 2, 8, 1, 9, 4, 7] |
| 1 | 2        | True                          | i++, swap(arr[1], arr[1]) | 1 | [5, 2, 8, 1, 9, 4, 7] |
| 2 | 8        | False                         |                  | 1 | [5, 2, 8, 1, 9, 4, 7] |
| 3 | 1        | True                          | i++, swap(arr[2], arr[3]) | 2 | [5, 2, 1, 8, 9, 4, 7] |
| 4 | 9        | False                         |                  | 2 | [5, 2, 1, 8, 9, 4, 7] |
| 5 | 4        | True                          | i++, swap(arr[3], arr[5]) | 3 | [5, 2, 1, 4, 9, 8, 7] |

End of loop. Swap `array[i+1]` (which is `array[4]`, value `9`) with `array[high]` (`array[6]`, value `7`).
Swap `9` and `7`.

The array after the first partitioning step is: `[5, 2, 1, 4, 7, 8, 9]`
The pivot `7` is now at index `4`. So, the pivot's final index is `4`.

**Question 4 (Comparison):**
Compare Quick Sort with Merge Sort in terms of stability and space complexity.

**Answer:**
*   **Stability:** Quick Sort is **not stable**, while Merge Sort **is stable**. This means that if two elements have the same value, their relative order might change after Quick Sort, whereas Merge Sort preserves their original relative order.
*   **Space Complexity:**
    *   Quick Sort: O(log n) on average, O(n) in the worst case (due to recursion stack).
    *   Merge Sort: O(n) (due to the auxiliary array needed for merging).

**Question 5 (Optimization):**
Name two common strategies to improve the pivot selection in Quick Sort and explain why they are effective.

**Answer:**
1.  **Random Pivot Selection:** By choosing a pivot randomly, the probability of encountering the worst-case scenario (O(n^2)) for any specific input array is significantly reduced. The expected time complexity remains O(n log n).
2.  **Median-of-Three:** This strategy involves selecting the median of the first, middle, and last elements of the sub-array as the pivot. This is effective because it's less likely to pick the smallest or largest element as the pivot, especially in nearly sorted or reverse-sorted arrays, thus leading to more balanced partitions.

## 9. Important Points to Remember

*   Quick Sort is a **divide-and-conquer** algorithm.
*   It relies on a **partitioning** procedure to place a pivot element in its correct sorted position.
*   Its average and best-case time complexity is **O(n log n)**.
*   Its worst-case time complexity is **O(n^2)**, which can be triggered by poor pivot selection.
*   It is typically implemented as an **in-place** sorting algorithm.
*   It is **not a stable sort**.
*   **Pivot selection strategy** is crucial for Quick Sort's performance. Random pivot or median-of-three are recommended.
*   Consider switching to **Insertion Sort** for small sub-arrays as an optimization.
