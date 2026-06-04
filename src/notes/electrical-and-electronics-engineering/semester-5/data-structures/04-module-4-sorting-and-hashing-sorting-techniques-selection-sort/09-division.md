---
title: "Division"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing: Sorting Techniques – Selection Sort"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363fb"
status: "completed"
scrapedAt: "2026-05-23T16:20:55.807Z"
---
# Data Structures: Module 4 - Sorting and Hashing

## Topic: Division - Selection Sort

This section focuses on understanding and applying the **Selection Sort** algorithm, a fundamental sorting technique.

### 1. Introduction to Selection Sort

Selection Sort is a simple sorting algorithm that divides the input list into two parts: a sorted sublist and an unsorted sublist. It repeatedly finds the minimum element from the unsorted sublist and moves it to the end of the sorted sublist.

**Key Concept:** Selection Sort works by **"selecting"** the minimum (or maximum) element from the unsorted portion of the array and placing it at its correct sorted position.

#### 1.1 How Selection Sort Works

1.  **Initialization:** The first element of the array is considered the beginning of the unsorted sublist. The sorted sublist is initially empty.
2.  **Iteration:**
    *   Iterate through the unsorted sublist to find the smallest (or largest, depending on the desired order) element.
    *   Swap this smallest element with the first element of the unsorted sublist.
    *   Move the boundary between the sorted and unsorted sublists one element to the right.
3.  **Termination:** The process continues until the entire array is sorted.

**Example:** Let's sort the array `[64, 25, 12, 22, 11]` in ascending order.

*   **Pass 1:**
    *   Unsorted: `[64, 25, 12, 22, 11]`
    *   Find minimum: `11` (at index 4)
    *   Swap `64` (at index 0) with `11`: `[11, 25, 12, 22, 64]`
    *   Sorted: `[11]`, Unsorted: `[25, 12, 22, 64]`

*   **Pass 2:**
    *   Unsorted: `[25, 12, 22, 64]` (starting from index 1)
    *   Find minimum: `12` (at index 2)
    *   Swap `25` (at index 1) with `12`: `[11, 12, 25, 22, 64]`
    *   Sorted: `[11, 12]`, Unsorted: `[25, 22, 64]`

*   **Pass 3:**
    *   Unsorted: `[25, 22, 64]` (starting from index 2)
    *   Find minimum: `22` (at index 3)
    *   Swap `25` (at index 2) with `22`: `[11, 12, 22, 25, 64]`
    *   Sorted: `[11, 12, 22]`, Unsorted: `[25, 64]`

*   **Pass 4:**
    *   Unsorted: `[25, 64]` (starting from index 3)
    *   Find minimum: `25` (at index 3)
    *   Swap `25` (at index 3) with `25`: `[11, 12, 22, 25, 64]` (no change)
    *   Sorted: `[11, 12, 22, 25]`, Unsorted: `[64]`

*   **Pass 5:**
    *   Unsorted: `[64]` (starting from index 4)
    *   The sublist has only one element, so it's considered sorted.

The sorted array is `[11, 12, 22, 25, 64]`.

#### 1.2 Pseudocode for Selection Sort

```pseudocode
SELECTION-SORT(A)
  n = length(A)
  for i = 0 to n-2
    min_index = i
    for j = i+1 to n-1
      if A[j] < A[min_index]
        min_index = j
    // Swap A[i] and A[min_index]
    temp = A[i]
    A[i] = A[min_index]
    A[min_index] = temp
```

#### 1.3 Implementation in C (Illustrative)

```c
#include <stdio.h>

void selectionSort(int arr[], int n) {
    int i, j, min_idx;

    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        // Swap the found minimum element with the first element
        if (min_idx != i) { // Only swap if necessary
            int temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
        }
    }
}

void printArray(int arr[], int size) {
    int i;
    for (i=0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);
    return 0;
}
```

### 2. Analysis of Selection Sort

#### 2.1 Time Complexity

*   **Best Case:** O(n²)
*   **Average Case:** O(n²)
*   **Worst Case:** O(n²)

**Explanation:**
Regardless of the input array's initial order, Selection Sort performs a fixed number of comparisons and swaps in each pass.

*   The outer loop runs `n-1` times.
*   The inner loop runs `n-1`, `n-2`, ..., `1` times.
*   The total number of comparisons is approximately `(n-1) + (n-2) + ... + 1 = n(n-1)/2`, which is O(n²).
*   The number of swaps is at most `n-1` (one swap per outer loop iteration), which is O(n).

Therefore, the overall time complexity is dominated by the comparisons, making it O(n²). This is consistent across all cases because the algorithm always performs the same number of comparisons.

**Relevant to Course Outcome CO1:** Selection Sort's time complexity of O(n²) can be analyzed using asymptotic notations.

#### 2.2 Space Complexity

*   **Space Complexity:** O(1)

**Explanation:**
Selection Sort is an **in-place** sorting algorithm. It only requires a constant amount of extra space for temporary variables (like `min_index` and `temp` for swapping), regardless of the input size.

**Important Point to Remember:** Selection Sort is an in-place sorting algorithm, meaning it sorts the array without using significant additional memory.

### 3. Advantages and Disadvantages of Selection Sort

#### 3.1 Advantages

*   **Simple to implement:** The logic is straightforward and easy to understand.
*   **In-place sorting:** Requires minimal extra space (O(1)).
*   **Performs a minimum number of swaps:** This can be advantageous in scenarios where write operations are significantly more expensive than read operations. It performs at most `n-1` swaps.
*   **Not affected by already sorted data:** The number of operations remains the same regardless of whether the array is already sorted or not.

#### 3.2 Disadvantages

*   **Inefficient for large datasets:** Its quadratic time complexity (O(n²)) makes it very slow for sorting large amounts of data compared to more advanced algorithms like Merge Sort or Quick Sort.
*   **Slow even for nearly sorted data:** It does not take advantage of any pre-existing order in the input array.

### 4. Comparison with Other Sorting Techniques

**Relevant to Course Outcome CO4:** Selection Sort can be compared with other sorting techniques in terms of their efficiency (time and space complexity) and suitability for different scenarios.

| Algorithm        | Best Case | Average Case | Worst Case | Space Complexity | Swaps |
| :--------------- | :-------- | :----------- | :--------- | :--------------- | :---- |
| Selection Sort   | O(n²)     | O(n²)        | O(n²)      | O(1)             | O(n)  |
| Bubble Sort      | O(n)      | O(n²)        | O(n²)      | O(1)             | O(n²) |
| Insertion Sort   | O(n)      | O(n²)        | O(n²)      | O(1)             | O(n²) |
| Merge Sort       | O(n log n) | O(n log n)   | O(n log n) | O(n)             | O(n)  |
| Quick Sort       | O(n log n) | O(n log n)   | O(n²)      | O(log n) (avg)   | O(n)  |

**Key Takeaway:** Selection Sort is generally less efficient than O(n log n) algorithms for larger datasets but offers the advantage of a minimal number of swaps.

### 5. Applications of Selection Sort

While not the most efficient, Selection Sort can be useful in specific situations:

*   **Small datasets:** For very small arrays, the simplicity of implementation might outweigh the performance differences.
*   **When the number of writes is critical:** If writing to memory is significantly more expensive than reading, Selection Sort's minimal swaps can be beneficial.
*   **Educational purposes:** It's a good algorithm for teaching the basic principles of sorting.

**Relevant to Course Outcome CO2:** While Selection Sort itself might not be the most "efficient" for solving real-world problems involving large datasets, understanding its mechanics is a building block for choosing appropriate data structures and algorithms. For smaller, specific problem instances where write operations are costly, it could be a viable choice.

### 6. Practice Questions and Exercises

**Question 1:**
What is the time complexity of Selection Sort in the best, average, and worst cases?

**Answer:** O(n²), O(n²), O(n²)

**Question 2:**
What is the space complexity of Selection Sort?

**Answer:** O(1) (It's an in-place sorting algorithm)

**Question 3:**
Trace the execution of Selection Sort on the array `[5, 1, 4, 2, 8]` and show the state of the array after each pass.

**Answer:**

*   **Initial:** `[5, 1, 4, 2, 8]`
*   **Pass 1:** Minimum is `1`. Swap `5` and `1`.
    Array: `[1, 5, 4, 2, 8]`
*   **Pass 2:** Minimum in `[5, 4, 2, 8]` is `2`. Swap `5` and `2`.
    Array: `[1, 2, 4, 5, 8]`
*   **Pass 3:** Minimum in `[4, 5, 8]` is `4`. Swap `4` and `4` (no change).
    Array: `[1, 2, 4, 5, 8]`
*   **Pass 4:** Minimum in `[5, 8]` is `5`. Swap `5` and `5` (no change).
    Array: `[1, 2, 4, 5, 8]`

**Sorted Array:** `[1, 2, 4, 5, 8]`

**Question 4:**
Consider an array where all elements are identical, e.g., `[7, 7, 7, 7]`. How many swaps will Selection Sort perform?

**Answer:** Zero swaps. Selection Sort finds the minimum element and swaps it with the current position. If the minimum element is already at the current position, no swap is performed. In this case, the minimum element (7) is always at the current position.

**Question 5:**
If you were to sort an array of 1 million elements, would Selection Sort be a suitable choice? Justify your answer.

**Answer:** No, Selection Sort would likely not be a suitable choice for sorting 1 million elements. Its O(n²) time complexity means it would perform roughly (10^6)² = 10^12 operations, which is computationally very expensive and would take a significant amount of time. Algorithms with O(n log n) complexity (like Merge Sort or Quick Sort) would be much more efficient for such a large dataset.
