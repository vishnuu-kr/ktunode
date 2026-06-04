---
title: "Radix Sort"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac4f"
status: "completed"
scrapedAt: "2026-05-20T16:23:12.816Z"
---
# DATA STRUCTURES AND ALGORITHMS - MODULE 4: Sorting and Searching - Topic: Radix Sort

## Introduction

Radix Sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. It is based on the idea of sorting digits from the least significant digit to the most significant digit.

**Learning Outcomes:**

*   Understand the principles and workings of Radix Sort.
*   Analyze the time and space complexity of Radix Sort.
*   Implement Radix Sort for different data types (primarily integers).
*   Compare Radix Sort with other sorting algorithms.
*   Identify the strengths and weaknesses of Radix Sort.
*   Determine appropriate scenarios for using Radix Sort.

## 1. Principles and Workings of Radix Sort

*   **Key Concept: Non-Comparative Sorting:** Radix Sort doesn't compare elements directly, unlike algorithms like Bubble Sort or Merge Sort. It relies on the digits of the numbers to determine their order.

*   **Least Significant Digit (LSD) vs. Most Significant Digit (MSD):** Radix Sort can be implemented using either LSD or MSD approach. LSD is generally preferred for simpler implementations.

    *   **LSD Radix Sort:**
        *   Starts sorting from the least significant digit (rightmost digit).
        *   For each digit position, the data is sorted based on that digit.
        *   This process is repeated for each digit position, moving from right to left (least to most significant).
        *   Requires stable sorting as a subroutine (e.g., Counting Sort). Stability ensures that elements with the same digit value maintain their relative order from the previous pass.

    *   **MSD Radix Sort:**
        *   Starts sorting from the most significant digit (leftmost digit).
        *   Partitions the data based on the most significant digit.
        *   Recursively sorts each partition based on the next most significant digit.
        *   Can be more complex to implement than LSD.

*   **Base or Radix (r):** The base refers to the number of distinct values a digit can have (e.g., base 10 for decimal numbers, base 2 for binary numbers).

*   **Number of Passes:** The number of passes required is determined by the maximum number of digits in the input data (in the chosen base).

*   **Stable Sorting Requirement:**  A stable sorting algorithm (like Counting Sort) must be used as a subroutine for each digit sorting step. Stability preserves the relative order of equal elements which is crucial for the correct functioning of Radix Sort.

### 1.1 LSD Radix Sort Algorithm

**Algorithm:**

1.  Find the maximum number in the input array to determine the number of digits needed.
2.  Iterate from the least significant digit to the most significant digit (digit by digit).
3.  For each digit position:
    *   Use a stable sorting algorithm (e.g., Counting Sort) to sort the array based on the current digit.

**Example:**

Let's sort the array `[170, 45, 75, 90, 802, 24, 2, 66]` using Radix Sort.

1.  **Find the maximum number:** `802` (3 digits)

2.  **Sort by the least significant digit (ones place):**

    `[170, 90, 802, 2, 24, 45, 75, 66]` (Stable sorting is used to preserve the order of numbers ending in the same digit)

3.  **Sort by the next significant digit (tens place):**

    `[802, 2, 24, 45, 66, 170, 75, 90]` (Stable sorting is used)

4.  **Sort by the most significant digit (hundreds place):**

    `[2, 24, 45, 66, 75, 90, 170, 802]` (Stable sorting is used)

The array is now sorted: `[2, 24, 45, 66, 75, 90, 170, 802]`

## 2. Time and Space Complexity of Radix Sort

*   **Time Complexity:**

    *   O(nk), where n is the number of elements to be sorted, and k is the number of digits in the largest number.

    *   If k is a constant (or limited by the machine word size), Radix Sort can be considered O(n), making it potentially faster than comparison-based sorting algorithms (O(n log n)) in specific scenarios.  However, k is often dependent on the input data.

*   **Space Complexity:**

    *   O(n + r), where n is the number of elements and r is the radix (the base used for representing numbers, e.g., 10 for decimal). This is because it usually requires auxiliary space for the counting sort or other stable sort used as a subroutine.

    *   The space complexity can be significant, especially for large radix values.

## 3. Implementation of Radix Sort

Here's a Python implementation of LSD Radix Sort using Counting Sort as a subroutine:

```python
def counting_sort(arr, exp):
  """Sorts an array based on a specific digit (exp)."""
  n = len(arr)
  output = [0] * n
  count = [0] * 10 # Assuming base 10

  # Count occurrences of each digit
  for i in range(n):
    index = arr[i] // exp
    count[index % 10] += 1

  # Modify count array to store the position of each digit in the output array
  for i in range(1, 10):
    count[i] += count[i - 1]

  # Build the output array in reverse order to ensure stability
  i = n - 1
  while i >= 0:
    index = arr[i] // exp
    output[count[index % 10] - 1] = arr[i]
    count[index % 10] -= 1
    i -= 1

  # Copy the sorted output back to the original array
  for i in range(n):
    arr[i] = output[i]


def radix_sort(arr):
  """Sorts an array of non-negative integers using Radix Sort."""
  max_val = max(arr)
  exp = 1 # exp is 10^i where i is the current digit number

  while max_val // exp > 0:
    counting_sort(arr, exp)
    exp *= 10

# Example usage:
arr = [170, 45, 75, 90, 802, 24, 2, 66]
radix_sort(arr)
print("Sorted array:", arr) # Output: Sorted array: [2, 24, 45, 66, 75, 90, 170, 802]
```

**Explanation:**

*   `counting_sort(arr, exp)`: Sorts the array `arr` based on the digit represented by `exp`.  For example, if `exp = 10`, it sorts based on the tens place.  It uses counting sort, which is a stable sorting algorithm suitable for this purpose.

*   `radix_sort(arr)`: The main Radix Sort function. It finds the maximum value in the array to determine the number of digits needed. Then, it iterates through each digit place, calling `counting_sort` to sort the array based on that digit.

## 4. Comparison with Other Sorting Algorithms

*   **Radix Sort vs. Comparison-Based Sorts (e.g., Merge Sort, Quick Sort):**
    *   Radix Sort can be faster than comparison-based sorts in certain situations (when k is small or constant).
    *   Comparison-based sorts have a lower bound of O(n log n) in the worst case, while Radix Sort can achieve O(nk) if k is relatively small.
    *   However, Radix Sort's space complexity can be a limitation.

*   **Radix Sort vs. Counting Sort:**
    *   Counting Sort is suitable for sorting when the range of input values is small.
    *   Radix Sort uses Counting Sort as a subroutine to handle larger ranges by sorting digit by digit.  It avoids needing a very large count array.

*   **Radix Sort vs. Bucket Sort:**
    *   Both are non-comparative.
    *   Bucket Sort works best when the input data is uniformly distributed over a range.
    *   Radix Sort is suitable for integer keys and sorts them digit by digit.

| Algorithm      | Time Complexity (Best) | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity |
|----------------|-----------------------|-----------------------|------------------------|-------------------|
| Radix Sort     | O(nk)                 | O(nk)                 | O(nk)                  | O(n + r)          |
| Merge Sort     | O(n log n)            | O(n log n)            | O(n log n)             | O(n)              |
| Quick Sort     | O(n log n)            | O(n log n)            | O(n^2)                 | O(log n)          |
| Counting Sort  | O(n + k)              | O(n + k)              | O(n + k)               | O(k)              |

**Note:**  *n* is the number of elements, *k* is the number of digits (Radix Sort) or the range of input values (Counting Sort), and *r* is the radix.

## 5. Strengths and Weaknesses of Radix Sort

**Strengths:**

*   Can be faster than comparison-based sorting algorithms in certain scenarios (when k is small).
*   Efficient for sorting integers or strings.
*   Simple to implement (especially LSD Radix Sort).

**Weaknesses:**

*   Space complexity can be a concern (O(n + r)).
*   Not in-place sorting (requires auxiliary space).
*   Performance degrades if k is very large (i.e., numbers have many digits).  In such cases, the constant factors hidden by the big-O notation of comparison based sorts can make them faster in practice.
*   Less flexible than comparison-based sorts; primarily suitable for integer or string data.

## 6. Appropriate Scenarios for Using Radix Sort

*   **Sorting integers when the range of digits is limited.**
*   **Sorting strings based on lexicographical order.**
*   **When speed is a critical factor and the space overhead is acceptable.**
*   **Large datasets of integers with a known distribution of digits.**

## Practice Questions/Exercises

1.  **Trace the execution of Radix Sort (LSD) on the following array:** `[329, 457, 657, 839, 436, 720, 355]`
    *   **Answer:**
        1.  Sort by ones place: `[720, 329, 839, 436, 457, 657, 355]`
        2.  Sort by tens place: `[720, 329, 436, 839, 355, 457, 657]`
        3.  Sort by hundreds place: `[329, 355, 436, 457, 657, 720, 839]`
        Final sorted array: `[329, 355, 436, 457, 657, 720, 839]`

2.  **What is the time complexity of Radix Sort in the best, average, and worst-case scenarios? Explain why.**
    *   **Answer:**  O(nk) in all cases.  Since Radix Sort iterates through each digit of the input numbers, the number of passes is determined by the maximum number of digits (k).  Each pass uses a stable sorting algorithm (usually Counting Sort), which takes O(n) time.

3.  **When would you prefer to use Radix Sort over Merge Sort? When would you prefer Merge Sort?**
    *   **Answer:**  Radix Sort is preferred when the input consists of integers with a relatively small number of digits and space is not a major constraint. Merge Sort is preferred when dealing with a wider range of data types, when the number of digits is very large, or when space is limited. Merge sort also has the advantage of being a comparison based algorithm, so it can handle complex comparison logic.

4.  **Implement Radix Sort in Java or C++.**  (Similar to the Python example above - adapt the logic to the desired language).

5.  **Explain the importance of using a stable sorting algorithm as a subroutine within Radix Sort.**
    *   **Answer:**  Stability is crucial. If the sorting algorithm used for each digit pass is *not* stable, the relative order of elements with the same digit value will be lost in subsequent passes, leading to an incorrect final sorted result. For example, if two numbers both have the same digit in the ones place, their relative order should be preserved when sorting by the tens place and the hundreds place.

## Important Points to Remember

*   Radix Sort is a non-comparative sorting algorithm that sorts data based on the digits of the numbers.
*   LSD Radix Sort sorts from the least significant digit to the most significant digit.
*   A stable sorting algorithm (e.g., Counting Sort) is essential as a subroutine.
*   Time complexity is O(nk), where n is the number of elements and k is the number of digits in the largest number.
*   Space complexity is O(n + r), where r is the radix.
*   Radix Sort is suitable for sorting integers or strings, especially when the range of digits/characters is limited.
