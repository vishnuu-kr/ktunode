---
title: "Implement Bubble sort, Insertion Sort, Radix sort, Quick Sort, and Merge Sort and compare the number of steps involved."
subject: "DATA STRUCTURES LAB"
module: "Module 13: Implement Bubble sort, Insertion Sort, Radix sort, Quick Sort, and Merge Sort and compare the number of steps involved."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae82"
status: "completed"
scrapedAt: "2026-05-20T16:23:28.593Z"
---
# DATA STRUCTURES LAB - Module 13: Sorting Algorithms

## Topic: Implement Bubble Sort, Insertion Sort, Radix Sort, Quick Sort, and Merge Sort and compare the number of steps involved.

**Description:** This module focuses on the implementation and comparison of five fundamental sorting algorithms: Bubble Sort, Insertion Sort, Radix Sort, Quick Sort, and Merge Sort. We will analyze their steps and understand their performance characteristics.

**Learning Outcomes:**

*   Implement Bubble Sort, Insertion Sort, Radix Sort, Quick Sort, and Merge Sort algorithms.
*   Analyze the time and space complexity of each sorting algorithm.
*   Compare the number of steps (comparisons and swaps/moves) involved in each algorithm for different input datasets.
*   Identify the strengths and weaknesses of each algorithm in various scenarios.
*   Choose the appropriate sorting algorithm for a given problem based on performance considerations.

---

### 1. Bubble Sort

**Key Concepts and Definitions:**

*   **Definition:** Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
*   **In-place algorithm:** Yes (requires minimal extra memory).
*   **Comparison-based algorithm:** Yes.
*   **Stable algorithm:** Yes (if implemented correctly to avoid unnecessary swaps).

**Implementation:**

```python
def bubble_sort(arr):
    n = len(arr)
    steps = 0  # Counter for the number of steps
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            steps += 1  # Increment step counter for each comparison
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
                steps += 1 # Increment step counter for each swap
        if not swapped:
            break  # If no two elements were swapped in inner loop, the array is sorted
    return arr, steps

#Example
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr, steps = bubble_sort(arr)
print("Sorted array:", sorted_arr)
print("Number of steps:", steps)
```

**Analysis:**

*   **Time Complexity:**
    *   Best Case: O(n) - When the array is already sorted.
    *   Average Case: O(n^2)
    *   Worst Case: O(n^2) - When the array is in reverse order.
*   **Space Complexity:** O(1)

**Important Points:**

*   Bubble sort is generally inefficient for large datasets due to its quadratic time complexity.
*   It's simple to understand and implement, making it suitable for small datasets or educational purposes.
*   The `swapped` flag optimizes the algorithm when the array is nearly sorted, allowing it to terminate earlier.

### 2. Insertion Sort

**Key Concepts and Definitions:**

*   **Definition:** Insertion Sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.  It iterates through the input elements and, for each element, places it at the correct position within the already sorted portion of the array.
*   **In-place algorithm:** Yes.
*   **Comparison-based algorithm:** Yes.
*   **Stable algorithm:** Yes.

**Implementation:**

```python
def insertion_sort(arr):
    n = len(arr)
    steps = 0 # Counter for the number of steps
    for i in range(1, n):
        key = arr[i]
        j = i-1
        steps += 1 # increment step count
        while j >= 0 and key < arr[j] :
            steps += 1  # increment step count
            arr[j + 1] = arr[j]
            j -= 1
            steps +=1 # increment step count when shifting element
        arr[j + 1] = key
        steps += 1 # increment step count when inserting element
    return arr, steps

#Example
arr = [12, 11, 13, 5, 6]
sorted_arr, steps = insertion_sort(arr)
print("Sorted array:", sorted_arr)
print("Number of steps:", steps)
```

**Analysis:**

*   **Time Complexity:**
    *   Best Case: O(n) - When the array is already sorted.
    *   Average Case: O(n^2)
    *   Worst Case: O(n^2) - When the array is in reverse order.
*   **Space Complexity:** O(1)

**Important Points:**

*   Insertion Sort is efficient for small datasets and nearly sorted datasets.
*   It's an in-place algorithm, requiring minimal extra memory.
*   Generally performs better than Bubble Sort.

### 3. Radix Sort

**Key Concepts and Definitions:**

*   **Definition:** Radix Sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. It works by processing digits from least significant to most significant.
*   **Non-comparison-based algorithm:** Yes.
*   **Not in-place algorithm:** Typically not in-place (requires extra memory for buckets).
*   **Stable algorithm:** Yes, if the underlying sorting algorithm (e.g., counting sort) is stable.

**Implementation:**

```python
def counting_sort_for_radix(arr, exp, steps):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    # Store count of occurrences in count[]
    for i in range(0, n):
        index = (arr[i] // exp) % 10
        count[index] += 1
        steps += 1 # increment step counter

    # Change count[i] so that count[i] now contains actual
    # position of this digit in output array
    for i in range(1, 10):
        count[i] += count[i - 1]
        steps += 1  # increment step counter

    # Build the output array
    i = n - 1
    while i >= 0:
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1
        i -= 1
        steps += 1  # increment step counter

    for i in range(0, len(arr)):
        arr[i] = output[i]
        steps += 1 # increment step counter

    return arr, steps

def radix_sort(arr):
    max1 = max(arr)
    exp = 1
    steps = 0
    while max1 // exp > 0:
        arr, steps = counting_sort_for_radix(arr, exp, steps)
        exp *= 10
    return arr, steps

#Example
arr = [170, 45, 75, 90, 802, 24, 2, 66]
sorted_arr, steps = radix_sort(arr)
print("Sorted array:", sorted_arr)
print("Number of steps:", steps)
```

**Analysis:**

*   **Time Complexity:** O(nk), where n is the number of elements and k is the number of digits in the largest element.
*   **Space Complexity:** O(n+k)

**Important Points:**

*   Radix Sort is efficient when the range of values is not significantly larger than the number of elements.
*   It's a non-comparison-based algorithm, which can be faster than comparison-based algorithms in certain cases.
*   The efficiency depends on the choice of the base (radix).

### 4. Quick Sort

**Key Concepts and Definitions:**

*   **Definition:** Quick Sort is a divide-and-conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot.  Elements smaller than the pivot are placed before it, and elements greater than the pivot are placed after it.  This process is recursively applied to the sub-arrays before and after the pivot.
*   **In-place algorithm:** Yes (with optimizations).
*   **Comparison-based algorithm:** Yes.
*   **Not a stable algorithm:** Typically not stable (can be made stable with more complex implementations, but that often impacts performance).

**Implementation:**

```python
def partition(arr, low, high, steps):
    i = (low - 1)  # index of smaller element
    pivot = arr[high]

    for j in range(low, high):
        steps += 1  # Increment step counter for each comparison

        # If current element is smaller than or
        # equal to pivot
        if arr[j] <= pivot:
            # increment index of smaller element
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]
            steps += 1 # Increment step counter for each swap

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    steps += 1 # Increment step counter for each swap
    return (i + 1), steps

def quick_sort(arr, low, high, steps):
    if low < high:
        # pi is partitioning index, arr[p] is now
        # at right place
        pi, steps = partition(arr, low, high, steps)

        # Separately sort elements before
        # partition and after partition
        arr, steps = quick_sort(arr, low, pi - 1, steps)
        arr, steps = quick_sort(arr, pi + 1, high, steps)
    return arr, steps

#Example
arr = [10, 7, 8, 9, 1, 5]
n = len(arr)
sorted_arr, steps = quick_sort(arr, 0, n-1, 0)
print("Sorted array:", sorted_arr)
print("Number of steps:", steps)
```

**Analysis:**

*   **Time Complexity:**
    *   Best Case: O(n log n)
    *   Average Case: O(n log n)
    *   Worst Case: O(n^2) - When the pivot is consistently the smallest or largest element.  This happens in a sorted or reverse-sorted array if the first or last element is chosen as the pivot.
*   **Space Complexity:** O(log n) - Due to the recursive calls on the call stack. (Worst case can be O(n)).

**Important Points:**

*   Quick Sort is generally one of the fastest sorting algorithms for large datasets on average.
*   The choice of the pivot is crucial for performance.  Random pivot selection helps avoid worst-case scenarios.
*   Requires more complex implementation than Bubble Sort or Insertion Sort.

### 5. Merge Sort

**Key Concepts and Definitions:**

*   **Definition:** Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts the two halves, and then merges the sorted halves.
*   **Not in-place algorithm:** No (requires extra memory for merging).
*   **Comparison-based algorithm:** Yes.
*   **Stable algorithm:** Yes.

**Implementation:**

```python
def merge(arr, l, m, r, steps):
    n1 = m - l + 1
    n2 = r - m

    # Create temporary arrays
    L = [0] * (n1)
    R = [0] * (n2)

    # Copy data to temporary arrays L[] and R[]
    for i in range(0, n1):
        L[i] = arr[l + i]
        steps += 1 # increment step counter
    for j in range(0, n2):
        R[j] = arr[m + 1 + j]
        steps += 1 # increment step counter

    # Merge the temporary arrays back into arr[l..r]
    i = 0     # Initial index of first subarray
    j = 0     # Initial index of second subarray
    k = l     # Initial index of merged subarray

    while i < n1 and j < n2:
        steps += 1 # increment step counter
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1
        steps += 1 # increment step counter

    # Copy the remaining elements of L[], if there are any
    while i < n1:
        arr[k] = L[i]
        i += 1
        k += 1
        steps += 1 # increment step counter

    # Copy the remaining elements of R[], if there are any
    while j < n2:
        arr[k] = R[j]
        j += 1
        k += 1
        steps += 1 # increment step counter
    return arr, steps

def merge_sort(arr, l, r, steps):
    if l < r:
        m = (l+(r-1))//2

        arr, steps = merge_sort(arr, l, m, steps)
        arr, steps = merge_sort(arr, m+1, r, steps)
        arr, steps = merge(arr, l, m, r, steps)
    return arr, steps

#Example
arr = [12, 11, 13, 5, 6, 7]
n = len(arr)
sorted_arr, steps = merge_sort(arr, 0, n-1, 0)
print("Sorted array:", sorted_arr)
print("Number of steps:", steps)
```

**Analysis:**

*   **Time Complexity:** O(n log n) - Consistent performance regardless of the input.
*   **Space Complexity:** O(n) - Due to the temporary arrays used for merging.

**Important Points:**

*   Merge Sort has a guaranteed O(n log n) time complexity, making it suitable when consistent performance is required.
*   It's a stable sorting algorithm, preserving the relative order of equal elements.
*   Requires extra memory space for the merging process.

---

### 6. Comparing the Number of Steps Involved

To effectively compare the number of steps involved in each algorithm, you need to test them on different types of datasets:

*   **Randomly generated data:** Provides a general average-case performance comparison.
*   **Nearly sorted data:**  Highlights the benefits of Insertion Sort and optimized Bubble Sort.
*   **Reverse-sorted data:**  Shows the worst-case performance of Bubble Sort, Insertion Sort, and Quick Sort (without random pivot selection).
*   **Large datasets:**  Demonstrates the scalability of algorithms like Quick Sort and Merge Sort.

**Example Python Code for Comparison:**

```python
import random
import time

def generate_random_array(n):
    return [random.randint(1, 1000) for _ in range(n)]

def generate_nearly_sorted_array(n, inversions):
    arr = list(range(1, n + 1))
    for _ in range(inversions):
        i = random.randint(0, n - 1)
        j = random.randint(0, n - 1)
        arr[i], arr[j] = arr[j], arr[i]
    return arr

def generate_reverse_sorted_array(n):
    return list(range(n, 0, -1))


def compare_algorithms(arr):
    algorithms = {
        "Bubble Sort": bubble_sort,
        "Insertion Sort": insertion_sort,
        "Radix Sort": radix_sort,
        "Quick Sort": lambda arr: quick_sort(arr, 0, len(arr)-1, 0),
        "Merge Sort": lambda arr: merge_sort(arr, 0, len(arr)-1, 0)
    }

    results = {}
    for name, algorithm in algorithms.items():
        arr_copy = arr[:]  # Create a copy to avoid modifying the original
        start_time = time.time()
        sorted_arr, steps = algorithm(arr_copy)
        end_time = time.time()
        results[name] = {"steps": steps, "time": end_time - start_time}

    return results

# Example Usage:

n = 1000  # array size
arr_random = generate_random_array(n)
arr_nearly_sorted = generate_nearly_sorted_array(n, 10) # 10 inversions
arr_reverse_sorted = generate_reverse_sorted_array(n)

print("Results for Random Array:")
results_random = compare_algorithms(arr_random)
for name, result in results_random.items():
    print(f"{name}: Steps = {result['steps']}, Time = {result['time']:.4f} seconds")

print("\nResults for Nearly Sorted Array:")
results_nearly_sorted = compare_algorithms(arr_nearly_sorted)
for name, result in results_nearly_sorted.items():
    print(f"{name}: Steps = {result['steps']}, Time = {result['time']:.4f} seconds")

print("\nResults for Reverse Sorted Array:")
results_reverse_sorted = compare_algorithms(arr_reverse_sorted)
for name, result in results_reverse_sorted.items():
    print(f"{name}: Steps = {result['steps']}, Time = {result['time']:.4f} seconds")
```

**Interpretation of Results:**

*   **Bubble Sort and Insertion Sort:**  Generally perform poorly on random and reverse-sorted data (O(n^2) complexity).  Insertion Sort performs well on nearly sorted data (O(n)).
*   **Radix Sort:** Performance depends on the number of digits in the elements (O(nk)). Can be very efficient for specific datasets.
*   **Quick Sort:** Typically the fastest on average for random data (O(n log n)). However, it degrades to O(n^2) on reverse-sorted data if not implemented with random pivot selection.
*   **Merge Sort:**  Provides consistent O(n log n) performance across all data types. However, it requires more memory.

---

### 7. Choosing the Right Algorithm

*   **Small datasets (n < 100):** Insertion Sort is often a good choice due to its simplicity and low overhead.
*   **Nearly sorted datasets:** Insertion Sort is highly efficient.
*   **Large datasets (n > 1000):** Quick Sort and Merge Sort are generally preferred for their O(n log n) complexity. Choose Quick Sort if in-place sorting is crucial and average-case performance is acceptable. Choose Merge Sort for guaranteed performance and stability, even with higher memory usage.
*   **Integer data with a limited range:** Radix Sort can be very efficient.
*   **When stability is required:** Merge Sort is a good choice.

---

### Practice Questions/Exercises:

1.  **Implement Bubble Sort without the `swapped` optimization.  How does this affect the number of steps for an already sorted array?**

    *   **Answer:**  Without the `swapped` optimization, the algorithm will always iterate through all passes (n-1), resulting in significantly more steps for already sorted or nearly sorted arrays (O(n^2) complexity even in the best case).

2.  **Explain how to choose a good pivot in Quick Sort to avoid the worst-case scenario. Give a code snippet for random pivot selection.**

    *   **Answer:** A good pivot divides the array into roughly equal sub-arrays. Random pivot selection is a common technique.  Here's a code snippet for random pivot selection within the partition function:

    ```python
    import random

    def partition_random_pivot(arr, low, high, steps):
        # Choose a random pivot
        pivot_index = random.randint(low, high)
        # Swap the random pivot with the last element
        arr[high], arr[pivot_index] = arr[pivot_index], arr[high]

        i = (low - 1)
        pivot = arr[high]

        for j in range(low, high):
            steps +=1
            if arr[j] <= pivot:
                i = i+1
                arr[i], arr[j] = arr[j], arr[i]
                steps +=1

        arr[i+1], arr[high] = arr[high], arr[i+1]
        steps += 1
        return (i+1), steps
    ```

3.  **What are the advantages and disadvantages of using Merge Sort compared to Quick Sort?**

    *   **Answer:**
        *   **Merge Sort:**
            *   Advantages: Guaranteed O(n log n) time complexity, stable sorting.
            *   Disadvantages: Requires extra memory (O(n)), not in-place.
        *   **Quick Sort:**
            *   Advantages: Generally faster on average, in-place (minimal extra memory).
            *   Disadvantages: Worst-case O(n^2) time complexity, not stable.

4.  **How does Radix Sort work, and when is it most suitable?  Give an example of when it would be a poor choice.**

    *   **Answer:** Radix Sort sorts data by processing digits or characters from least significant to most significant. It's suitable for integer data with a limited range. A poor choice would be sorting floating-point numbers or very large integers where the number of digits (k) is significant, making O(nk) worse than O(n log n).

5.  **Write a function that takes an array and a sorting algorithm name as input and returns the sorted array and the number of steps taken by the algorithm. Use a dictionary to map the algorithm name to the corresponding function.**

    *   **Answer:** See the `compare_algorithms` and `algorithms` dictionary in the "Comparing the Number of Steps Involved" section above for a good example.

---

### Important Points to Remember:

*   **Time and Space Complexity:**  Understand the Big O notation and how it affects performance.
*   **Algorithm Stability:**  Know whether a sorting algorithm preserves the relative order of equal elements.
*   **In-Place Sorting:**  Recognize algorithms that operate directly on the input array with minimal extra memory.
*   **Data Dependence:** Understand how the characteristics of the input data (random, sorted, reverse-sorted) can significantly impact the performance of different algorithms.
*   **Trade-offs:**  Be aware of the trade-offs between speed, memory usage, and implementation complexity when choosing a sorting algorithm.
