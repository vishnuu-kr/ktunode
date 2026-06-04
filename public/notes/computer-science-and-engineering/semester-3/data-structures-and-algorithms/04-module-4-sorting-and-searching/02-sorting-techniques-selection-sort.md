---
title: "Sorting Techniques :- Selection Sort"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac4a"
status: "completed"
scrapedAt: "2026-05-20T16:23:09.228Z"
---
## Data Structures and Algorithms: Module 4 - Sorting and Searching
### Sorting Techniques: Selection Sort

**Learning Outcomes:**

*   Understand the concept of Selection Sort.
*   Describe the algorithm for Selection Sort.
*   Implement Selection Sort in code.
*   Analyze the time and space complexity of Selection Sort.
*   Explain the advantages and disadvantages of Selection Sort.
*   Compare Selection Sort with other sorting algorithms.

**1. Introduction to Sorting**

*   **Definition:** Sorting is the process of arranging elements in a collection (e.g., array, list) in a specific order (ascending or descending).
*   **Importance:** Sorting is fundamental in computer science for various tasks:
    *   Searching becomes faster in sorted data.
    *   Data analysis and reporting.
    *   Data compression.
    *   Optimizing algorithms.
*   **Types of Sorting Algorithms:** Many algorithms exist, each with its strengths and weaknesses: Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort, Heap Sort, etc.
*   **In-place Sorting:** Algorithms that sort the data within the original array without requiring significant additional memory.
*   **Stable Sorting:** Algorithms that preserve the relative order of equal elements.  If two elements have the same value, their original positions are maintained in the sorted output.

**2. Selection Sort: Concept and Definition**

*   **Concept:** Selection Sort is a simple, in-place sorting algorithm. It works by repeatedly finding the minimum (or maximum, for descending order) element from the unsorted portion of the array and placing it at the beginning (or end) of the sorted portion.
*   **Definition:**  Selection Sort finds the smallest element in the unsorted part of the array and swaps it with the element at the beginning of the unsorted part. This process is repeated for the remaining unsorted part until the entire array is sorted.
*   **In-place:**  Selection Sort is an in-place algorithm because it only requires a constant amount of extra space (for temporary variables).
*   **Unstable:** Selection Sort is generally considered unstable, although stable versions can be implemented with some modification.  The swaps can change the relative order of equal elements.

**3. Algorithm for Selection Sort**

Here's a step-by-step breakdown of the Selection Sort algorithm:

1.  **Initialization:** Start with an unsorted array.

2.  **Outer Loop:** Iterate through the array from index `i = 0` to `n-2` (where `n` is the number of elements in the array).  Each iteration places the next smallest element in its correct position.

3.  **Inner Loop:** In each iteration of the outer loop, find the minimum element in the unsorted part of the array (from index `i+1` to `n-1`).
    *   Initialize `minIndex` to `i` (assume the current element is the minimum).
    *   Iterate through the unsorted part of the array from `j = i+1` to `n-1`.
    *   If `array[j] < array[minIndex]`, then update `minIndex = j`.

4.  **Swap:** After the inner loop completes, `minIndex` will hold the index of the minimum element in the unsorted part.  Swap `array[i]` with `array[minIndex]`.

5.  **Repeat:**  Repeat steps 2-4 until the entire array is sorted.

**Pseudo-code:**

```
SelectionSort(array, n)

  for i = 0 to n-2 do:
    minIndex = i

    for j = i+1 to n-1 do:
      if array[j] < array[minIndex] then:
        minIndex = j

    // Swap array[i] and array[minIndex]
    temp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temp
```

**4. Example**

Let's sort the array `[64, 25, 12, 22, 11]` using Selection Sort.

1.  **Iteration 1:**
    *   Unsorted: `[64, 25, 12, 22, 11]`
    *   `minIndex = 0`
    *   Inner loop finds `11` as the minimum (at index 4).  `minIndex = 4`
    *   Swap `array[0]` (64) and `array[4]` (11): `[11, 25, 12, 22, 64]`

2.  **Iteration 2:**
    *   Unsorted: `[25, 12, 22, 64]`
    *   `minIndex = 1`
    *   Inner loop finds `12` as the minimum (at index 2).  `minIndex = 2`
    *   Swap `array[1]` (25) and `array[2]` (12): `[11, 12, 25, 22, 64]`

3.  **Iteration 3:**
    *   Unsorted: `[25, 22, 64]`
    *   `minIndex = 2`
    *   Inner loop finds `22` as the minimum (at index 3).  `minIndex = 3`
    *   Swap `array[2]` (25) and `array[3]` (22): `[11, 12, 22, 25, 64]`

4.  **Iteration 4:**
    *   Unsorted: `[25, 64]`
    *   `minIndex = 3`
    *   Inner loop finds `25` as the minimum (at index 3). `minIndex = 3` (No change)
    *   Swap `array[3]` (25) and `array[3]` (25):  `[11, 12, 22, 25, 64]`

The array is now sorted: `[11, 12, 22, 25, 64]`

**5. Implementation in Code (Python)**

```python
def selection_sort(arr):
  """Sorts an array using Selection Sort."""
  n = len(arr)
  for i in range(n - 1):
    min_index = i
    for j in range(i + 1, n):
      if arr[j] < arr[min_index]:
        min_index = j

    # Swap arr[i] and arr[min_index]
    arr[i], arr[min_index] = arr[min_index], arr[i]

  return arr

# Example usage:
my_array = [64, 25, 12, 22, 11]
sorted_array = selection_sort(my_array.copy()) # Use .copy() to avoid modifying original array
print(f"Sorted array: {sorted_array}")  # Output: Sorted array: [11, 12, 22, 25, 64]
print(f"Original array: {my_array}") # Output: Original array: [64, 25, 12, 22, 11]
```

**6. Time and Space Complexity**

*   **Time Complexity:**
    *   **Best Case:** O(n<sup>2</sup>)
    *   **Average Case:** O(n<sup>2</sup>)
    *   **Worst Case:** O(n<sup>2</sup>)

    Selection Sort always performs the same number of comparisons regardless of the initial order of the elements. The outer loop runs `n-1` times, and the inner loop runs approximately `n/2` times on average.  Therefore, the total number of comparisons is proportional to `n * n/2`, which simplifies to O(n<sup>2</sup>).

*   **Space Complexity:** O(1) (constant)

    Selection Sort is an in-place algorithm. It only uses a constant amount of extra space for temporary variables (e.g., for swapping elements).

**7. Advantages of Selection Sort**

*   **Simple to implement:** The algorithm is relatively easy to understand and code.
*   **In-place:**  It requires minimal extra memory.
*   **Performs well with small lists:** For small lists, the overhead of more complex algorithms might outweigh the benefits.
*   **Guaranteed number of swaps:** It performs a maximum of `n-1` swaps, making it useful when writing to memory is costly.

**8. Disadvantages of Selection Sort**

*   **Inefficient for large lists:** The O(n<sup>2</sup>) time complexity makes it very slow for large datasets.
*   **Not Adaptive:** Its performance doesn't improve even if the array is already partially sorted.
*   **Unstable (generally):** The swaps can change the relative order of equal elements, although stable versions are possible.

**9. Comparison with Other Sorting Algorithms**

| Algorithm      | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity | Stable? | Notes                                                                 |
| --------------- | ---------------------- | ------------------------- | ----------------------- | ---------------- | ------- | --------------------------------------------------------------------- |
| Selection Sort | O(n<sup>2</sup>)          | O(n<sup>2</sup>)             | O(n<sup>2</sup>)          | O(1)             | No      | Simple, in-place, but slow for large datasets.                          |
| Bubble Sort    | O(n)                    | O(n<sup>2</sup>)             | O(n<sup>2</sup>)          | O(1)             | Yes     | Simple, but generally inefficient.  Good for nearly sorted data.      |
| Insertion Sort | O(n)                    | O(n<sup>2</sup>)             | O(n<sup>2</sup>)          | O(1)             | Yes     | Efficient for small datasets or nearly sorted data.                   |
| Merge Sort     | O(n log n)              | O(n log n)               | O(n log n)              | O(n)             | Yes     | Efficient and stable, but requires extra space.                        |
| Quick Sort     | O(n log n)              | O(n log n)               | O(n<sup>2</sup>)          | O(log n)         | No      | Efficient in practice, but worst-case is O(n<sup>2</sup>).              |
| Heap Sort      | O(n log n)              | O(n log n)               | O(n log n)              | O(1)             | No      | Efficient, in-place, and guaranteed O(n log n) time complexity.     |

**10. When to Use Selection Sort**

Selection Sort is generally *not* recommended for practical use cases due to its poor performance on larger datasets. However, it can be considered in the following limited situations:

*   **Small datasets:** When the number of elements to be sorted is very small (e.g., less than 10-20), the overhead of more complex algorithms might not be justified.
*   **Memory write cost is high:** When writing to memory is a very expensive operation, Selection Sort's minimal number of swaps can be an advantage.  (Though this is rare)
*   **Educational purposes:** It's a good introductory sorting algorithm for learning the fundamental concepts of sorting.

**11. Important Points to Remember**

*   Selection Sort is an in-place sorting algorithm.
*   Its time complexity is always O(n<sup>2</sup>).
*   It is generally unstable.
*   It is not efficient for large datasets.
*   It is simple to implement and requires minimal extra memory.

**12. Practice Questions/Exercises**

1.  **Trace Selection Sort:** Show the step-by-step execution of Selection Sort on the array `[5, 1, 4, 2, 8]`.

    *   **Answer:**

    *   Initial: `[5, 1, 4, 2, 8]`
    *   Iteration 1: `[1, 5, 4, 2, 8]` (swap 5 and 1)
    *   Iteration 2: `[1, 2, 4, 5, 8]` (swap 5 and 2)
    *   Iteration 3: `[1, 2, 4, 5, 8]` (no swap)
    *   Iteration 4: `[1, 2, 4, 5, 8]` (no swap)
    *   Sorted: `[1, 2, 4, 5, 8]`

2.  **Implement Selection Sort in C++:** Write a C++ function that implements the Selection Sort algorithm.

    *   **Answer:**

    ```c++
    #include <iostream>
    #include <vector>

    using namespace std;

    void selectionSort(vector<int>& arr) {
        int n = arr.size();
        for (int i = 0; i < n - 1; ++i) {
            int minIndex = i;
            for (int j = i + 1; j < n; ++j) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            swap(arr[i], arr[minIndex]);
        }
    }

    int main() {
        vector<int> my_array = {64, 25, 12, 22, 11};
        selectionSort(my_array);

        cout << "Sorted array: ";
        for (int i = 0; i < my_array.size(); ++i) {
            cout << my_array[i] << " ";
        }
        cout << endl;

        return 0;
    }
    ```

3.  **Analyze the stability of Selection Sort:** Explain why Selection Sort is generally unstable and provide an example.

    *   **Answer:**

    Selection Sort is generally unstable because the swaps can change the relative order of equal elements. Consider the array `[4, 5, 1, 4, 3]`.  In the first iteration, the minimum element `1` at index 2 is swapped with `4` at index 0, resulting in `[1, 5, 4, 4, 3]`. The initial `4` at index 0 is moved to index 2, while the initial `4` at index 3 remains in place.  Their relative order has changed.

4. **Explain how to modify Selection Sort to make it stable.**

 * **Answer:**

A stable version of Selection Sort can be achieved by shifting elements instead of swapping them. When the minimum element is found, instead of swapping it with the element at the current index `i`, you shift all elements from `i` to `minIndex - 1` one position to the right and then insert the minimum element at index `i`. This ensures that the relative order of equal elements is preserved.  Note that shifting will be less efficient than swapping.

5. **What is the maximum number of swaps Selection Sort will perform?**

* **Answer:**

Selection sort will perform, at most, n-1 swaps, where n is the number of elements in the array.  This is because in each iteration of the outer loop (which runs n-1 times), we perform one swap if the minimum element found in the unsorted part is not already in the correct position.

This detailed overview of Selection Sort should provide a solid foundation for understanding its principles, implementation, and trade-offs. Remember to practice implementing it and compare it with other sorting algorithms to gain a deeper understanding.
