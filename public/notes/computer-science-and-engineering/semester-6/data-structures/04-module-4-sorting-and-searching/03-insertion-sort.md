---
title: "Insertion Sort"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8beab"
status: "completed"
scrapedAt: "2026-05-20T16:52:06.967Z"
---
# Data Structures: Module 4 - Sorting and Searching

## Topic: Insertion Sort

### Introduction

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, Insertion Sort provides several advantages:

*   **Simple implementation:** It's easy to understand and code.
*   **Efficient for small datasets:** Performs well on small lists.
*   **Adaptive:** It can be efficient for data sets that are already substantially sorted.
*   **In-place:** It sorts the array without requiring significant extra memory.
*   **Stable:** It preserves the relative order of equal elements.

### Learning Outcomes Covered

By the end of this topic, you should be able to:

1.  **Understand the core principle of Insertion Sort:** How it builds a sorted subarray.
2.  **Explain the step-by-step process of Insertion Sort:** Walk through the algorithm with an example.
3.  **Analyze the time complexity of Insertion Sort:** Best, average, and worst cases.
4.  **Analyze the space complexity of Insertion Sort:** Its in-place nature.
5.  **Identify situations where Insertion Sort is a suitable choice:** Its strengths and weaknesses.
6.  **Implement Insertion Sort in a programming language (e.g., Python, Java, C++).**

---

### 1. Core Principle of Insertion Sort

The fundamental idea behind Insertion Sort is to divide the input array into two parts:

*   **Sorted Subarray:** This part is at the beginning of the array and is already sorted. Initially, it contains only the first element.
*   **Unsorted Subarray:** This part contains the remaining elements that need to be sorted.

The algorithm iteratively takes elements from the unsorted subarray and inserts them into their correct position within the sorted subarray.

**Analogy:** Imagine sorting a hand of playing cards. You pick up one card at a time and insert it into the correct position among the cards you're already holding.

---

### 2. Step-by-Step Process of Insertion Sort

Let's illustrate with an example array: `[12, 11, 13, 5, 6]`

**Pass 1:**

*   The first element `[12]` is considered the sorted subarray.
*   Take the next element `11` from the unsorted subarray.
*   Compare `11` with elements in the sorted subarray (`12`) from right to left.
*   `11 < 12`, so shift `12` one position to the right.
*   Insert `11` into the empty spot.
*   Array becomes: `[11, 12, 13, 5, 6]`
    *   Sorted: `[11, 12]`
    *   Unsorted: `[13, 5, 6]`

**Pass 2:**

*   The sorted subarray is `[11, 12]`.
*   Take the next element `13`.
*   Compare `13` with elements in the sorted subarray from right to left.
*   `13 > 12`, `13 > 11`. `13` is already in its correct position.
*   Array remains: `[11, 12, 13, 5, 6]`
    *   Sorted: `[11, 12, 13]`
    *   Unsorted: `[5, 6]`

**Pass 3:**

*   The sorted subarray is `[11, 12, 13]`.
*   Take the next element `5`.
*   Compare `5` with elements in the sorted subarray from right to left.
*   `5 < 13`, shift `13` right. Array: `[11, 12, _, 13, 6]`
*   `5 < 12`, shift `12` right. Array: `[11, _, 12, 13, 6]`
*   `5 < 11`, shift `11` right. Array: `[_, 11, 12, 13, 6]`
*   Insert `5` into the empty spot.
*   Array becomes: `[5, 11, 12, 13, 6]`
    *   Sorted: `[5, 11, 12, 13]`
    *   Unsorted: `[6]`

**Pass 4:**

*   The sorted subarray is `[5, 11, 12, 13]`.
*   Take the next element `6`.
*   Compare `6` with elements in the sorted subarray from right to left.
*   `6 < 13`, shift `13` right. Array: `[5, 11, 12, _, 13]`
*   `6 < 12`, shift `12` right. Array: `[5, 11, _, 12, 13]`
*   `6 < 11`, shift `11` right. Array: `[5, _, 11, 12, 13]`
*   `6 > 5`. Insert `6` after `5`.
*   Array becomes: `[5, 6, 11, 12, 13]`
    *   Sorted: `[5, 6, 11, 12, 13]`
    *   Unsorted: `[]`

The array is now sorted.

**General Algorithm:**

1.  Iterate from the second element of the array (`i = 1` to `n-1`).
2.  Store the current element to be inserted (let's call it `key`).
3.  Compare `key` with elements in the sorted subarray (elements from `0` to `i-1`) from right to left (`j = i-1` down to `0`).
4.  If an element in the sorted subarray is greater than `key`, shift that element one position to the right.
5.  Continue shifting until you find an element smaller than or equal to `key`, or you reach the beginning of the array.
6.  Insert `key` into the correct position (the first position where `key` is greater than or equal to the element to its left).

---

### 3. Time Complexity Analysis

The time complexity of Insertion Sort depends on the initial order of the elements.

*   **Best Case: O(n)**
    *   **Scenario:** The array is already sorted.
    *   **Explanation:** In this case, for each element, we only perform one comparison (with the last element of the sorted subarray) and no shifts. The inner loop runs at most once. Therefore, we have `n-1` outer loop iterations, and each iteration takes constant time.

*   **Average Case: O(n^2)**
    *   **Scenario:** The array elements are in a random order.
    *   **Explanation:** On average, for each element, we expect to compare it with about half of the elements in the sorted subarray and perform about half that many shifts. This leads to an average of approximately `n/2` comparisons and `n/2` shifts per element, resulting in `O(n^2)` operations.

*   **Worst Case: O(n^2)**
    *   **Scenario:** The array is sorted in reverse order.
    *   **Explanation:** In this case, for each element, we have to compare it with all the elements in the sorted subarray and shift all of them one position to the right to insert the current element at the beginning. This means for the `i`-th element, we perform `i` comparisons and `i` shifts. The total number of operations is roughly the sum of `1 + 2 + ... + (n-1)`, which is `n(n-1)/2`, resulting in `O(n^2)` complexity.

---

### 4. Space Complexity Analysis

*   **Space Complexity: O(1)**
    *   **Explanation:** Insertion Sort is an **in-place** sorting algorithm. It sorts the array by rearranging the elements within the original array. It only requires a small, constant amount of extra memory to store the `key` (the element being inserted) and a few loop variables. It does not use any auxiliary data structures that grow with the input size.

---

### 5. When to Use Insertion Sort

Insertion Sort is a good choice for the following scenarios:

*   **Small datasets:** Its `O(n^2)` complexity is acceptable for lists with a few dozen or a hundred elements.
*   **Nearly sorted datasets:** If the input array is already mostly sorted, Insertion Sort performs very well (close to `O(n)`).
*   **When simplicity is paramount:** Its straightforward implementation makes it easy to understand and debug.
*   **When memory is limited:** Its `O(1)` space complexity makes it suitable for environments with strict memory constraints.
*   **As a sorting algorithm for a hybrid sorting algorithm:** For example, it's often used as the final sorting step in algorithms like Timsort (used in Python) or Introsort. When the recursion depth of a divide-and-conquer algorithm becomes small, switching to Insertion Sort can be more efficient than continuing with the more complex algorithm.

**Situations to Avoid Insertion Sort:**

*   **Large, randomly ordered datasets:** For large lists, algorithms like Merge Sort, Quick Sort, or Heap Sort with `O(n log n)` complexity will be significantly faster.

---

### 6. Implementation Example (Python)

```python
def insertion_sort(arr):
    """
    Sorts an array using the Insertion Sort algorithm.

    Args:
        arr: A list of comparable elements.

    Returns:
        None: The array is sorted in-place.
    """
    # Iterate through the array starting from the second element
    for i in range(1, len(arr)):
        key = arr[i]  # The element to be inserted into the sorted subarray
        j = i - 1     # Start comparing from the element before the current one

        # Move elements of arr[0..i-1], that are greater than key,
        # to one position ahead of their current position
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j] # Shift element to the right
            j -= 1              # Move to the previous element

        arr[j + 1] = key  # Place the key in its correct position
```

**Example Usage:**

```python
my_list = [12, 11, 13, 5, 6]
insertion_sort(my_list)
print("Sorted array is:", my_list) # Output: Sorted array is: [5, 6, 11, 12, 13]

my_list_sorted = [1, 2, 3, 4, 5]
insertion_sort(my_list_sorted)
print("Sorted array is:", my_list_sorted) # Output: Sorted array is: [1, 2, 3, 4, 5]

my_list_reverse = [5, 4, 3, 2, 1]
insertion_sort(my_list_reverse)
print("Sorted array is:", my_list_reverse) # Output: Sorted array is: [1, 2, 3, 4, 5]
```

---

### Practice Questions & Exercises

1.  **Trace Insertion Sort:** Walk through the sorting process for the array `[4, 1, 7, 3, 2]` step-by-step, showing the state of the array after each pass.
2.  **Complexity Analysis:**
    *   What is the time complexity of Insertion Sort for an already sorted array?
    *   What is the time complexity of Insertion Sort for a reverse-sorted array?
    *   What is the space complexity of Insertion Sort?
3.  **Why is Insertion Sort considered adaptive?** Explain with an example.
4.  **When would you choose Insertion Sort over Quick Sort?** List at least two scenarios.
5.  **Implement Insertion Sort:** Write the Insertion Sort algorithm in your preferred programming language (e.g., Java, C++).

---

### Answers to Practice Questions

1.  **Trace Insertion Sort for `[4, 1, 7, 3, 2]`:**

    *   **Initial:** `[4, 1, 7, 3, 2]`
    *   **Pass 1 (insert 1):**
        *   `key = 1`. Compare `1` with `4`.
        *   `1 < 4`, shift `4` to the right. Array: `[_, 4, 7, 3, 2]`
        *   Insert `1`. Array: `[1, 4, 7, 3, 2]`
    *   **Pass 2 (insert 7):**
        *   `key = 7`. Compare `7` with `4`.
        *   `7 > 4`. No shift. Insert `7`. Array: `[1, 4, 7, 3, 2]`
    *   **Pass 3 (insert 3):**
        *   `key = 3`. Compare `3` with `7`.
        *   `3 < 7`, shift `7` right. Array: `[1, 4, _, 7, 2]`
        *   Compare `3` with `4`.
        *   `3 < 4`, shift `4` right. Array: `[1, _, 4, 7, 2]`
        *   Compare `3` with `1`.
        *   `3 > 1`. Insert `3`. Array: `[1, 3, 4, 7, 2]`
    *   **Pass 4 (insert 2):**
        *   `key = 2`. Compare `2` with `7`.
        *   `2 < 7`, shift `7` right. Array: `[1, 3, 4, _, 7]`
        *   Compare `2` with `4`.
        *   `2 < 4`, shift `4` right. Array: `[1, 3, _, 4, 7]`
        *   Compare `2` with `3`.
        *   `2 < 3`, shift `3` right. Array: `[1, _, 3, 4, 7]`
        *   Compare `2` with `1`.
        *   `2 > 1`. Insert `2`. Array: `[1, 2, 3, 4, 7]`

    *   **Final Sorted Array:** `[1, 2, 3, 4, 7]`

2.  **Complexity Analysis:**
    *   **Already sorted array:** **O(n)**
    *   **Reverse-sorted array:** **O(n^2)**
    *   **Space complexity:** **O(1)**

3.  **Adaptive Nature:** Insertion Sort is adaptive because its performance improves when the input array is already partially sorted. If an element is already in its correct position (e.g., in an almost sorted array), the inner `while` loop will execute only a few times or not at all for that element, leading to faster sorting.
    *   **Example:** If an array is `[1, 2, 5, 4, 3]`, when `4` is considered, it only needs to be compared with `5` and shifted once. If the array was `[5, 4, 3, 2, 1]`, `4` would need to be compared with `5` and shifted, then `3` would need to be compared with `5`, `4` and shifted, and so on.

4.  **Choosing Insertion Sort over Quick Sort:**
    *   **When the dataset is small:** Insertion Sort's `O(n^2)` is acceptable and its overhead is lower than Quick Sort.
    *   **When the dataset is nearly sorted:** Insertion Sort's adaptive nature makes it much faster than Quick Sort in this scenario.
    *   **When memory is extremely limited:** Insertion Sort has `O(1)` space complexity, whereas Quick Sort (in its typical recursive implementation) can have `O(log n)` or `O(n)` space complexity due to the call stack.
    *   **When stability is required:** Insertion Sort is a stable sorting algorithm, while standard Quick Sort implementations are not.

5.  **Implementation:** (Refer to the Python implementation provided in Section 6. You would adapt this to Java or C++ syntax).

---

### Important Points to Remember

*   **Builds Sorted Subarray:** Insertion Sort works by gradually extending a sorted portion of the array.
*   **"Insertion" is Key:** The core operation is inserting the current element into its correct place in the already sorted part.
*   **Shifting Elements:** To make space for the inserted element, larger elements in the sorted subarray are shifted one position to the right.
*   **Time Complexity:** `O(n^2)` on average and worst-case, but `O(n)` in the best case (already sorted).
*   **Space Complexity:** `O(1)` (in-place).
*   **Advantages:** Simple, efficient for small/nearly sorted data, adaptive, in-place, stable.
*   **Disadvantages:** Inefficient for large, random datasets compared to `O(n log n)` algorithms.

---
This concludes the notes on Insertion Sort. Review these points and practice the examples to solidify your understanding.
