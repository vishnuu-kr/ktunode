---
title: "Quick Sort"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8beac"
status: "completed"
scrapedAt: "2026-05-20T16:52:07.677Z"
---
# Data Structures: Module 4 - Sorting and Searching

## Topic: Quick Sort

### Introduction

Quick Sort is a highly efficient, comparison-based sorting algorithm known for its speed and effectiveness. It's a divide-and-conquer algorithm, meaning it breaks down a problem into smaller subproblems, solves them recursively, and then combines their solutions. Unlike Merge Sort, Quick Sort sorts in-place, requiring minimal extra memory.

### Learning Outcomes Covered

*   **Understanding the Quick Sort Algorithm:** Grasp the fundamental principles of how Quick Sort operates.
*   **Implementation Details:** Learn how to implement Quick Sort using different partitioning strategies.
*   **Time and Space Complexity Analysis:** Analyze the worst-case, average-case, and best-case time complexities, as well as its space complexity.
*   **Advantages and Disadvantages:** Identify the pros and cons of using Quick Sort compared to other sorting algorithms.
*   **Applications of Quick Sort:** Understand where Quick Sort is commonly used.

---

### Key Concepts and Definitions

*   **Divide and Conquer:** A problem-solving paradigm where a problem is broken into smaller, independent subproblems. These subproblems are solved recursively, and their solutions are combined to solve the original problem.
*   **Pivot:** An element chosen from the array that is used to partition the array into two subarrays. Elements smaller than the pivot are placed before it, and elements larger than the pivot are placed after it.
*   **Partitioning:** The core operation of Quick Sort. It rearranges the array (or subarray) such that all elements less than the pivot come before it, and all elements greater than the pivot come after it. The pivot is then placed in its final sorted position.
*   **In-place Sorting:** A sorting algorithm that sorts an array by modifying it directly, without requiring significant additional memory space.
*   **Recursion:** A programming technique where a function calls itself to solve smaller instances of the same problem.

---

### How Quick Sort Works (The Algorithm)

Quick Sort follows these steps:

1.  **Choose a Pivot:** Select an element from the array as the pivot. The choice of pivot can significantly impact performance.
2.  **Partition:** Rearrange the array such that:
    *   All elements less than the pivot are placed to its left.
    *   All elements greater than the pivot are placed to its right.
    *   The pivot element is placed at its correct sorted position.
3.  **Recursively Sort:** Apply Quick Sort recursively to the subarray of elements to the left of the pivot and the subarray of elements to the right of the pivot.

The recursion stops when a subarray contains zero or one element, as these are considered sorted by definition.

---

### Partitioning Strategies

The efficiency of Quick Sort heavily relies on the partitioning strategy. Here are a few common ones:

#### 1. Lomuto Partition Scheme

*   **Description:** This scheme picks the last element as the pivot. It maintains an index `i` that tracks the boundary between elements smaller than the pivot and elements greater than or equal to the pivot.
*   **Steps:**
    1.  Choose the last element of the array (or subarray) as the pivot.
    2.  Initialize an index `i` to `low - 1`.
    3.  Iterate through the array from `low` to `high - 1` (let's call the current element `arr[j]`).
    4.  If `arr[j]` is less than or equal to the pivot:
        *   Increment `i`.
        *   Swap `arr[i]` and `arr[j]`.
    5.  After the loop, swap `arr[i + 1]` and `arr[high]` (the pivot).
    6.  Return `i + 1`, which is the index of the pivot.

*   **Example (Lomuto Partition):**
    Array: `[10, 80, 30, 90, 40, 50, 70]`
    Pivot (last element): `70`

    1.  `i = -1` (initially)
    2.  `j = 0`, `arr[0] = 10`. `10 <= 70`. `i` becomes `0`. Swap `arr[0]` and `arr[0]` (no change). Array: `[10, 80, 30, 90, 40, 50, 70]`
    3.  `j = 1`, `arr[1] = 80`. `80 > 70`. Do nothing. Array: `[10, 80, 30, 90, 40, 50, 70]`
    4.  `j = 2`, `arr[2] = 30`. `30 <= 70`. `i` becomes `1`. Swap `arr[1]` and `arr[2]`. Array: `[10, 30, 80, 90, 40, 50, 70]`
    5.  `j = 3`, `arr[3] = 90`. `90 > 70`. Do nothing. Array: `[10, 30, 80, 90, 40, 50, 70]`
    6.  `j = 4`, `arr[4] = 40`. `40 <= 70`. `i` becomes `2`. Swap `arr[2]` and `arr[4]`. Array: `[10, 30, 40, 90, 80, 50, 70]`
    7.  `j = 5`, `arr[5] = 50`. `50 <= 70`. `i` becomes `3`. Swap `arr[3]` and `arr[5]`. Array: `[10, 30, 40, 50, 80, 90, 70]`
    8.  End of loop. Swap `arr[i+1]` (which is `arr[4]`) and `arr[high]` (which is `arr[6]`). Swap `80` and `70`.
    Array after partition: `[10, 30, 40, 50, 70, 90, 80]`
    Pivot index returned: `4`

#### 2. Hoare Partition Scheme

*   **Description:** This scheme is generally more efficient than Lomuto's. It picks the first element as the pivot (or a median of three). It uses two pointers, one starting from the left and one from the right, moving inwards.
*   **Steps:**
    1.  Choose the first element of the array (or subarray) as the pivot.
    2.  Initialize two pointers, `i` to `low - 1` and `j` to `high + 1`.
    3.  Loop indefinitely:
        *   Increment `i` until `arr[i]` is greater than or equal to the pivot.
        *   Decrement `j` until `arr[j]` is less than or equal to the pivot.
        *   If `i >= j`, the partition is complete. Return `j`.
        *   Swap `arr[i]` and `arr[j]`.

*   **Example (Hoare Partition):**
    Array: `[10, 80, 30, 90, 40, 50, 70]`
    Pivot (first element): `10`

    1.  `i = -1`, `j = 7`.
    2.  **Outer loop:**
        *   **Inner loop (i):**
            *   `i` becomes `0` (`arr[0] = 10`, `10 >= 10` is true).
        *   **Inner loop (j):**
            *   `j` becomes `6` (`arr[6] = 70`, `70 <= 10` is false).
            *   `j` becomes `5` (`arr[5] = 50`, `50 <= 10` is false).
            *   `j` becomes `4` (`arr[4] = 40`, `40 <= 10` is false).
            *   `j` becomes `3` (`arr[3] = 90`, `90 <= 10` is false).
            *   `j` becomes `2` (`arr[2] = 30`, `30 <= 10` is false).
            *   `j` becomes `1` (`arr[1] = 80`, `80 <= 10` is false).
            *   `j` becomes `0` (`arr[0] = 10`, `10 <= 10` is true).
        *   `i` is `0`, `j` is `0`. `i >= j` is true. The partition is complete. Return `j` (which is `0`).
    Array after partition: `[10, 80, 30, 90, 40, 50, 70]` (No swaps happened in this specific step because the pivot was the smallest)

    *Important Note on Hoare's Partition:* The pivot is not guaranteed to be in its final sorted position after Hoare's partition. The partition correctly divides the array into two parts where all elements in the left part are less than or equal to all elements in the right part. The recursion is then applied to `[low, j]` and `[j+1, high]`.

---

### Quick Sort Implementation (Conceptual Pseudocode)

```pseudocode
function quickSort(arr, low, high):
  if low < high:
    // pi is partitioning index, arr[pi] is now at right place
    pi = partition(arr, low, high)

    // Separately sort elements before partition and after partition
    quickSort(arr, low, pi - 1)
    quickSort(arr, pi + 1, high)

function partition(arr, low, high):
  // Choose pivot (e.g., last element using Lomuto)
  pivot = arr[high]
  i = low - 1

  for j from low to high - 1:
    if arr[j] <= pivot:
      i = i + 1
      swap(arr[i], arr[j])

  swap(arr[i + 1], arr[high])
  return i + 1
```

---

### Time and Space Complexity Analysis

*   **Time Complexity:**
    *   **Best Case: O(n log n)**
        *   Occurs when the pivot selection consistently divides the array into two nearly equal halves. This is typical when the array is randomly ordered or when a good pivot selection strategy (like median-of-three) is used.
    *   **Average Case: O(n log n)**
        *   Quick Sort performs very well on average, making it one of the fastest sorting algorithms in practice.
    *   **Worst Case: O(n^2)**
        *   Occurs when the pivot selection consistently results in highly unbalanced partitions. This happens when the array is already sorted (or reverse-sorted) and the pivot is always chosen as the first or last element. In this scenario, one partition will have `n-1` elements, and the other will have `0`, leading to `n` recursive calls of decreasing size.

*   **Space Complexity:**
    *   **O(log n) on average** (due to the recursion stack depth).
    *   **O(n) in the worst case** (when the recursion depth reaches `n` in the worst-case partitioning).
    *   Quick Sort is an **in-place** sorting algorithm, meaning it does not require extra space proportional to the input size for storing the sorted data itself. The space complexity arises from the recursive calls on the call stack.

---

### Pivot Selection Strategies and Their Impact

The choice of pivot is crucial for Quick Sort's performance.

1.  **First Element:** Simple but leads to O(n^2) for sorted/reverse-sorted arrays.
2.  **Last Element (Lomuto):** Similar to the first element, susceptible to O(n^2).
3.  **Random Element:** Good on average, helps avoid worst-case scenarios on predictable inputs. Can be implemented by swapping a random element with the last element before partitioning.
4.  **Median-of-Three:** Selects the median of the first, middle, and last elements as the pivot. This reduces the likelihood of picking the smallest or largest element as the pivot, significantly improving performance on already sorted or nearly sorted data, and makes the worst-case less likely.

---

### Advantages of Quick Sort

*   **Fast on Average:** O(n log n) average-case time complexity makes it very efficient for large datasets.
*   **In-Place Sorting:** Requires minimal extra memory (O(log n) on average for the call stack).
*   **Good Locality of Reference:** Data elements that are close to each other in memory are often accessed together during partitioning, which can be beneficial for cache performance.
*   **Adaptive:** Can be faster than other O(n log n) sorts for data that is already partially sorted.

---

### Disadvantages of Quick Sort

*   **Worst-Case Performance:** The O(n^2) worst-case time complexity can be a significant drawback if not mitigated by a good pivot selection strategy.
*   **Not Stable:** Quick Sort is generally not a stable sorting algorithm. This means that the relative order of equal elements might not be preserved after sorting.
*   **Recursive Nature:** Can lead to stack overflow errors for very large inputs if the recursion depth is not managed or if tail call optimization is not available.
*   **Inefficient for Small Datasets:** For very small arrays, simpler algorithms like Insertion Sort might be faster due to Quick Sort's overhead. Hybrid approaches (e.g., switching to Insertion Sort for small subarrays) are common.

---

### Applications of Quick Sort

*   **General-Purpose Sorting:** Widely used in standard libraries for sorting arrays and lists due to its excellent average-case performance.
*   **Selection Algorithms:** Can be adapted to find the k-th smallest element in an unsorted array efficiently (e.g., Quickselect).
*   **Database Systems:** Used in internal sorting routines.
*   **Operating Systems:** For managing processes or memory.

---

### Important Points to Remember

*   **Pivot Choice is Key:** The performance of Quick Sort hinges on how well the pivot divides the array. Random pivot or median-of-three are good strategies to avoid worst-case scenarios.
*   **Divide and Conquer:** Understand the recursive nature of breaking the problem into smaller subproblems.
*   **In-Place vs. Stability:** Remember it's in-place but generally not stable.
*   **Worst Case:** Be aware of the O(n^2) worst-case and how to mitigate it.
*   **Hybrid Approaches:** For practical implementations, Quick Sort is often combined with Insertion Sort for small subarrays.

---

### Practice Questions/Exercises

1.  **Conceptual:** Explain the "divide and conquer" strategy as applied to Quick Sort.
2.  **Partitioning:**
    *   Given the array `[3, 6, 8, 10, 1, 2, 1]`, use the Lomuto partition scheme with the last element as the pivot. Show the state of the array after each swap and indicate the final pivot position.
    *   Given the array `[10, 80, 30, 90, 40, 50, 70]`, use the Hoare partition scheme with the first element as the pivot. Show the state of the array after each swap and indicate the partition index returned.
3.  **Complexity:**
    *   What is the time complexity of Quick Sort in the best, average, and worst cases? Explain why these complexities arise.
    *   What is the space complexity of Quick Sort? What is the primary source of this space usage?
4.  **Comparison:** How does Quick Sort compare to Merge Sort in terms of time complexity, space complexity, and stability?
5.  **Pivot Strategy:** Why is choosing a good pivot important for Quick Sort? Suggest two pivot selection strategies and briefly describe their advantages.

---

### Answers to Practice Questions

1.  **Conceptual:** The "divide and conquer" strategy in Quick Sort involves:
    *   **Divide:** The array is partitioned into two subarrays around a chosen pivot element. All elements smaller than the pivot are placed in the left subarray, and all elements larger are placed in the right subarray.
    *   **Conquer:** The two subarrays are recursively sorted using the same Quick Sort algorithm.
    *   **Combine:** No explicit combine step is needed, as the sorting happens in-place during partitioning and recursion. The array becomes sorted once both subarrays are sorted.

2.  **Partitioning:**
    *   **Lomuto Partition (Array: `[3, 6, 8, 10, 1, 2, 1]`, Pivot: `1`)**
        *   Initial: `[3, 6, 8, 10, 1, 2, 1]`, `low=0`, `high=6`, `pivot=1`
        *   `i = -1`
        *   `j=0`, `arr[0]=3`. `3 > 1`.
        *   `j=1`, `arr[1]=6`. `6 > 1`.
        *   `j=2`, `arr[2]=8`. `8 > 1`.
        *   `j=3`, `arr[3]=10`. `10 > 1`.
        *   `j=4`, `arr[4]=1`. `1 <= 1`. `i` becomes `0`. Swap `arr[0]` and `arr[4]`. Array: `[1, 6, 8, 10, 3, 2, 1]`
        *   `j=5`, `arr[5]=2`. `2 > 1`.
        *   `j=6`, `arr[6]=1`. `1 <= 1`. `i` becomes `1`. Swap `arr[1]` and `arr[6]`. Array: `[1, 1, 8, 10, 3, 2, 6]`
        *   End loop. Swap `arr[i+1]` (which is `arr[2]`) and `arr[high]` (which is `arr[6]`). Swap `8` and `6`.
        *   **Final Array after Partition:** `[1, 1, 6, 10, 3, 2, 8]`
        *   **Pivot Position:** `2` (index of `6`)

    *   **Hoare Partition (Array: `[10, 80, 30, 90, 40, 50, 70]`, Pivot: `10`)**
        *   Initial: `[10, 80, 30, 90, 40, 50, 70]`, `low=0`, `high=6`, `pivot=10`
        *   `i = -1`, `j = 7`
        *   **Outer Loop:**
            *   **Inner Loop (i):** `i` becomes `0` (`arr[0]=10`, `10 >= 10` is true).
            *   **Inner Loop (j):**
                *   `j` becomes `6` (`arr[6]=70`, `70 <= 10` false)
                *   `j` becomes `5` (`arr[5]=50`, `50 <= 10` false)
                *   `j` becomes `4` (`arr[4]=40`, `40 <= 10` false)
                *   `j` becomes `3` (`arr[3]=90`, `90 <= 10` false)
                *   `j` becomes `2` (`arr[2]=30`, `30 <= 10` false)
                *   `j` becomes `1` (`arr[1]=80`, `80 <= 10` false)
                *   `j` becomes `0` (`arr[0]=10`, `10 <= 10` true).
            *   `i=0`, `j=0`. `i >= j` is true. Partition ends. Return `j`.
        *   **Final Array after Partition:** `[10, 80, 30, 90, 40, 50, 70]` (No swaps occur if pivot is the smallest element)
        *   **Partition Index Returned:** `0`

3.  **Complexity:**
    *   **Time Complexity:**
        *   **Best Case: O(n log n)**: Achieved when the pivot consistently divides the array into roughly equal halves.
        *   **Average Case: O(n log n)**: Quick Sort performs well on average for random inputs.
        *   **Worst Case: O(n^2)**: Occurs when the pivot is always the smallest or largest element, leading to unbalanced partitions. This happens with sorted/reverse-sorted arrays and naive pivot selection.
    *   **Space Complexity:**
        *   **O(log n)** on average, due to the recursion stack.
        *   **O(n)** in the worst case, when the recursion depth reaches `n`.
        *   The primary source of space usage is the call stack for recursive function calls.

4.  **Comparison (Quick Sort vs. Merge Sort):**

    | Feature          | Quick Sort                               | Merge Sort                                  |
    | :--------------- | :--------------------------------------- | :------------------------------------------ |
    | Time (Best)      | O(n log n)                               | O(n log n)                                  |
    | Time (Average)   | O(n log n)                               | O(n log n)                                  |
    | Time (Worst)     | O(n^2)                                   | O(n log n)                                  |
    | Space            | O(log n) average, O(n) worst (stack)     | O(n) (for auxiliary array)                  |
    | Stability        | Not Stable                               | Stable                                      |
    | In-Place         | Yes                                      | No (requires auxiliary array)               |
    | Practical Speed  | Generally faster in practice (cache-friendly) | Can be slower due to data copying             |

5.  **Pivot Strategy:**
    *   **Importance:** A good pivot ensures that the array is divided into roughly equal halves. This leads to a balanced recursion tree and the efficient O(n log n) time complexity. A poor pivot (e.g., always the smallest or largest) leads to unbalanced partitions, degenerating Quick Sort to O(n^2).
    *   **Strategies:**
        1.  **Random Pivot:** Choose a random element as the pivot. This helps to avoid worst-case scenarios on specific input patterns (like sorted arrays). It makes the O(n^2) worst-case highly improbable.
        2.  **Median-of-Three:** Select the median of the first, middle, and last elements of the array. This is a heuristic that often results in a better pivot than just picking the first or last element, especially for partially sorted data, reducing the chances of worst-case behavior.
