---
title: "Binary Search"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac51"
status: "completed"
scrapedAt: "2026-05-20T16:23:14.247Z"
---
# DATA STRUCTURES AND ALGORITHMS - Module 4: Sorting and Searching - Binary Search

## Introduction

Binary Search is a highly efficient searching algorithm used to find the position of a target value within a **sorted** array or list. Unlike linear search, which checks each element one by one, binary search repeatedly divides the search interval in half.  This makes it significantly faster, especially for large datasets.

## Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the principle and process of binary search.
*   Implement binary search algorithm (iterative and recursive).
*   Analyze the time complexity of binary search.
*   Identify the prerequisites for using binary search.
*   Apply binary search to solve searching problems.

## 1. Key Concepts and Definitions

*   **Sorted Array/List:**  A fundamental requirement for binary search. The elements must be arranged in a specific order (ascending or descending).
*   **Search Interval:** The portion of the array that is currently being considered. It's defined by two pointers: `left` (or `low`) and `right` (or `high`).
*   **Midpoint:** The middle element within the search interval, calculated as `mid = left + (right - left) // 2`.  This calculation is preferred over `(left + right) // 2` to avoid potential integer overflow issues when dealing with very large values of `left` and `right`.
*   **Target Value:** The value you are trying to find within the sorted array.
*   **Time Complexity:** O(log n), where n is the number of elements in the array. This logarithmic time complexity makes binary search very efficient for large datasets.
*   **Space Complexity:** O(1) for the iterative version and O(log n) for the recursive version due to the call stack.

## 2. Principle and Process of Binary Search

The core idea behind binary search is to repeatedly divide the search interval in half. Here's how it works:

1.  **Initialization:** Set `left` to the index of the first element (0) and `right` to the index of the last element (n-1), where n is the length of the array.

2.  **Iteration (or Recursion):**
    *   While `left <= right`: (The search interval is not empty)
        *   Calculate the `mid` point: `mid = left + (right - left) // 2`
        *   **Comparison:**
            *   If `array[mid] == target`: The target value is found at index `mid`.  Return `mid`.
            *   If `array[mid] < target`: The target value, if present, must be in the right half of the interval.  Update `left = mid + 1`.
            *   If `array[mid] > target`: The target value, if present, must be in the left half of the interval.  Update `right = mid - 1`.

3.  **Target Not Found:** If the loop (or recursion) terminates without finding the target, it means the target is not present in the array. Return -1 (or a suitable indication that the element was not found).

## 3. Implementation (Iterative and Recursive)

### 3.1 Iterative Binary Search

```python
def binary_search_iterative(arr, target):
    """
    Performs binary search iteratively on a sorted array.

    Args:
        arr: The sorted array to search in.
        target: The value to search for.

    Returns:
        The index of the target value if found, otherwise -1.
    """
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2  # Calculate midpoint

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half

    return -1  # Target not found


# Example Usage
sorted_array = [2, 5, 7, 8, 11, 12]
target_value = 13

result = binary_search_iterative(sorted_array, target_value)

if result != -1:
    print(f"Element is present at index {result}")
else:
    print("Element is not present in array")
```

### 3.2 Recursive Binary Search

```python
def binary_search_recursive(arr, target, left, right):
    """
    Performs binary search recursively on a sorted array.

    Args:
        arr: The sorted array to search in.
        target: The value to search for.
        left: The starting index of the search interval.
        right: The ending index of the search interval.

    Returns:
        The index of the target value if found, otherwise -1.
    """

    if left > right:
        return -1  # Base case: Target not found

    mid = left + (right - left) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)  # Search right half
    else:
        return binary_search_recursive(arr, target, left, mid - 1)  # Search left half


# Example Usage
sorted_array = [2, 5, 7, 8, 11, 12]
target_value = 7

result = binary_search_recursive(sorted_array, target_value, 0, len(sorted_array) - 1)

if result != -1:
    print(f"Element is present at index {result}")
else:
    print("Element is not present in array")
```

## 4. Analysis of Time Complexity

*   **Best Case:** O(1) - When the target value is the middle element of the array in the first comparison.
*   **Average Case:** O(log n) -  The search interval is halved in each step.
*   **Worst Case:** O(log n) - The target value is not present in the array, and the search interval is repeatedly halved until it becomes empty.

**Explanation:**

The time complexity is logarithmic because the algorithm eliminates half of the remaining search space with each comparison.  If the array has `n` elements, then in the worst case, the algorithm will make approximately `log₂(n)` comparisons.

## 5. Prerequisites for Using Binary Search

*   **Sorted Data:** The most crucial requirement. Binary search will not work correctly on unsorted data.
*   **Direct Access to Elements:** Binary search requires the ability to access elements in the array directly using their index (random access). This is efficient for arrays and lists but not suitable for linked lists, where accessing an element requires traversing the list from the beginning.

## 6. Applying Binary Search to Solve Searching Problems

Binary search can be used to solve various searching problems beyond simply finding if a value exists. Here are a few examples:

*   **Finding the First Occurrence:**  Modify the algorithm to continue searching the left half after finding a match to find the first occurrence of the target value.
*   **Finding the Last Occurrence:**  Modify the algorithm to continue searching the right half after finding a match to find the last occurrence of the target value.
*   **Finding the Lower Bound:** Find the first element in the sorted array that is greater than or equal to the target value.
*   **Finding the Upper Bound:** Find the first element in the sorted array that is strictly greater than the target value.
*   **Square Root Approximation:**  Binary search can be used to find the integer square root of a number.
*   **Search in Rotated Sorted Array:** If an array is sorted but rotated, binary search can be adapted to find an element in the rotated array.

**Example: Finding the First Occurrence (Modified Binary Search)**

```python
def find_first_occurrence(arr, target):
    """
    Finds the index of the first occurrence of a target value in a sorted array.
    """
    left = 0
    right = len(arr) - 1
    result = -1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            result = mid  # Store the current index
            right = mid - 1  # Continue searching the left half
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return result


# Example Usage:
sorted_array = [2, 5, 7, 7, 7, 8, 11, 12]
target_value = 7
first_occurrence = find_first_occurrence(sorted_array, target_value)
print(f"First occurrence of {target_value} is at index: {first_occurrence}") #Output: First occurrence of 7 is at index: 2
```

## 7. Important Points to Remember

*   **Sorted Data is Crucial:** Binary search *only* works on sorted data. Make sure your data is sorted before applying binary search.
*   **Integer Overflow:** Use `mid = left + (right - left) // 2` to calculate the midpoint to avoid potential integer overflow.
*   **Loop Condition:** The loop condition should be `left <= right`.  Using `left < right` can lead to an infinite loop if the target element is the last element in the list.
*   **Return Value:**  Return -1 (or another suitable indicator) when the target is not found.
*   **Adaptability:**  Binary search can be adapted to solve a wider range of problems than just simple value lookup.  Understand the core principle to modify the algorithm for different scenarios.
*   **Efficiency:** Binary search offers significant performance benefits compared to linear search, especially for large datasets.

## 8. Practice Questions/Exercises with Answers

**Question 1:**

Implement an iterative binary search algorithm to find the last occurrence of a given number in a sorted array.

**Answer:**

```python
def find_last_occurrence(arr, target):
    """
    Finds the index of the last occurrence of a target value in a sorted array.
    """
    left = 0
    right = len(arr) - 1
    result = -1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            result = mid  # Store the current index
            left = mid + 1  # Continue searching the right half
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return result


# Example Usage:
sorted_array = [2, 5, 7, 7, 7, 8, 11, 12]
target_value = 7
last_occurrence = find_last_occurrence(sorted_array, target_value)
print(f"Last occurrence of {target_value} is at index: {last_occurrence}") #Output: Last occurrence of 7 is at index: 4
```

**Question 2:**

What is the time complexity of binary search in the best, average, and worst cases? Explain why.

**Answer:**

*   **Best Case:** O(1) -  The target element is found in the middle in the first comparison.
*   **Average Case:** O(log n) -  The search interval is halved in each step, on average.
*   **Worst Case:** O(log n) -  The target element is either not present in the array or found after repeatedly halving the search space until it cannot be halved anymore.

The logarithmic time complexity stems from the fact that binary search divides the search space in half with each comparison, leading to a fast and efficient search, especially for large datasets.

**Question 3:**

Why is it important to use `mid = left + (right - left) // 2` instead of `mid = (left + right) // 2` when calculating the midpoint in binary search?

**Answer:**

Using `mid = (left + right) // 2` can lead to an integer overflow error if `left` and `right` are very large numbers.  In some programming languages, the sum `left + right` might exceed the maximum representable integer value, causing the program to crash or produce incorrect results. `mid = left + (right - left) // 2` avoids this overflow issue by subtracting `left` from `right` before adding it to `left`, ensuring that the intermediate result remains within the representable range.

**Question 4:**

Given a sorted array `arr = [1, 3, 5, 7, 9, 11, 13, 15]`, trace the steps of the iterative binary search algorithm to find the target value `7`.

**Answer:**

1.  `left = 0`, `right = 7`
2.  `mid = 0 + (7 - 0) // 2 = 3`
3.  `arr[3] = 7 == 7`: Target found. Return `3`.

**Question 5:**

Can binary search be used on a linked list? Why or why not?

**Answer:**

No, binary search cannot be efficiently used on a linked list. Binary search requires direct access to elements using their index (random access).  In a linked list, accessing the middle element requires traversing the list from the head, which takes O(n) time. This negates the efficiency gained by binary search's logarithmic search approach.  Therefore, linear search is typically used for linked lists.
