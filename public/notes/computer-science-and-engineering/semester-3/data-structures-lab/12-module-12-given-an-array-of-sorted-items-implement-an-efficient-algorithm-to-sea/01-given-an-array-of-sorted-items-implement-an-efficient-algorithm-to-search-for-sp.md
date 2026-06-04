---
title: "Given an array of sorted items, implement an efficient algorithm to search for specific item in the array."
subject: "DATA STRUCTURES LAB"
module: "Module 12: Given an array of sorted items, implement an efficient algorithm to search for specific item in the array."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae80"
status: "completed"
scrapedAt: "2026-05-20T16:23:27.866Z"
---
## DATA STRUCTURES LAB - Module 12: Efficient Searching in Sorted Arrays

**Topic:** Given an array of sorted items, implement an efficient algorithm to search for a specific item in the array.

**Description:** This module focuses on understanding and implementing efficient search algorithms, specifically Binary Search, in a sorted array.  We will explore the concept of divide and conquer and its application to search problems.

**Learning Outcomes:**

*   Understand the concept of searching in sorted arrays.
*   Explain the advantages of using Binary Search over linear search in sorted arrays.
*   Implement Binary Search algorithm in both iterative and recursive approaches.
*   Analyze the time and space complexity of Binary Search.
*   Apply Binary Search to solve related problems.

---

### 1. Introduction to Searching in Sorted Arrays

*   **Searching:**  The process of finding a specific element (the "key" or "target") within a collection of elements (the array, list, etc.).
*   **Sorted Array:** An array where elements are arranged in a specific order (ascending or descending).  This order allows for more efficient search algorithms.
*   **Importance of Sorted Arrays in Searching:** Searching in a sorted array provides an opportunity to use algorithms that exploit the ordered nature of the data to significantly improve search efficiency.

### 2. Linear Search (Brief Review)

*   **Concept:**  Examines each element of the array sequentially until the target element is found or the end of the array is reached.
*   **Algorithm:**
    1.  Start at the beginning of the array.
    2.  Compare the target value with the current element.
    3.  If they match, the element is found.  Return the index.
    4.  If they don't match, move to the next element.
    5.  If the end of the array is reached without finding the target, return -1 (or an appropriate "not found" indicator).
*   **Time Complexity:** O(n) - In the worst case, you might have to check every element in the array.
*   **Space Complexity:** O(1) - Constant space, as it only uses a few extra variables.
*   **Disadvantages (in Sorted Arrays):**  Linear search doesn't take advantage of the sorted order.  It can be highly inefficient for large sorted arrays.

### 3. Binary Search: A Divide and Conquer Approach

*   **Concept:**  A much more efficient search algorithm that works only on sorted arrays. It follows the "divide and conquer" strategy. It repeatedly divides the search interval in half. If the middle element matches the target value, the search is complete. Otherwise, the search continues in either the left or right half of the array, depending on whether the target value is less than or greater than the middle element.
*   **Key Idea:**  Eliminate half of the search space in each step.

*   **Algorithm (Iterative):**
    1.  Initialize `low` to the starting index (0) and `high` to the ending index (n-1).
    2.  While `low` is less than or equal to `high`:
        *   Calculate the middle index: `mid = (low + high) // 2` (Integer division)
        *   If `array[mid]` is equal to the target, return `mid`.
        *   If `array[mid]` is less than the target, the target must be in the right half. Update `low = mid + 1`.
        *   If `array[mid]` is greater than the target, the target must be in the left half. Update `high = mid - 1`.
    3.  If the target is not found, return -1.

*   **Algorithm (Recursive):**
    1.  **Base Case 1:** If `low > high`, the target is not found. Return -1.
    2.  Calculate the middle index: `mid = (low + high) // 2`
    3.  If `array[mid]` is equal to the target, return `mid`.
    4.  If `array[mid]` is less than the target, recursively search in the right half: `binarySearchRecursive(array, target, mid + 1, high)`.
    5.  If `array[mid]` is greater than the target, recursively search in the left half: `binarySearchRecursive(array, target, low, mid - 1)`.

*   **Time Complexity:** O(log n) - Logarithmic time complexity because the search space is halved in each step.
*   **Space Complexity:**
    *   Iterative Binary Search: O(1) - Constant space, as it uses a few extra variables.
    *   Recursive Binary Search: O(log n) -  Due to the recursive call stack.  In the worst case, the depth of the recursion can be log n.

#### Example: Iterative Binary Search

```python
def binary_search_iterative(arr, target):
  """
  Performs binary search iteratively.

  Args:
    arr: The sorted array to search in.
    target: The element to search for.

  Returns:
    The index of the target element if found, otherwise -1.
  """
  low = 0
  high = len(arr) - 1

  while low <= high:
    mid = (low + high) // 2  # Integer division

    if arr[mid] == target:
      return mid
    elif arr[mid] < target:
      low = mid + 1
    else:
      high = mid - 1

  return -1

# Example Usage
my_array = [2, 5, 7, 8, 11, 12]
target_value = 13
result = binary_search_iterative(my_array, target_value)

if result != -1:
  print(f"Element {target_value} found at index {result}")
else:
  print(f"Element {target_value} not found in the array")
```

#### Example: Recursive Binary Search

```python
def binary_search_recursive(arr, target, low, high):
  """
  Performs binary search recursively.

  Args:
    arr: The sorted array to search in.
    target: The element to search for.
    low: The starting index of the search range.
    high: The ending index of the search range.

  Returns:
    The index of the target element if found, otherwise -1.
  """
  if low > high:
    return -1

  mid = (low + high) // 2

  if arr[mid] == target:
    return mid
  elif arr[mid] < target:
    return binary_search_recursive(arr, target, mid + 1, high)
  else:
    return binary_search_recursive(arr, target, low, mid - 1)

# Example Usage
my_array = [2, 5, 7, 8, 11, 12]
target_value = 11
result = binary_search_recursive(my_array, target_value, 0, len(my_array) - 1)

if result != -1:
  print(f"Element {target_value} found at index {result}")
else:
  print(f"Element {target_value} not found in the array")
```

### 4. Advantages of Binary Search over Linear Search

| Feature        | Linear Search | Binary Search |
|----------------|---------------|---------------|
| Array Order    | Unsorted      | Sorted        |
| Time Complexity| O(n)          | O(log n)      |
| Efficiency      | Less efficient for large arrays | More efficient for large arrays |
| Implementation   | Simpler       | More complex  |

*   **Significant Performance Improvement:** For large arrays, the logarithmic time complexity of Binary Search (O(log n)) makes it drastically faster than the linear time complexity of Linear Search (O(n)).  Imagine searching in an array with 1 million elements. Linear search might have to check all million elements in the worst case. Binary search would only need to make around 20 comparisons (log<sub>2</sub>(1,000,000) ≈ 20).
*   **Suitable for Large Datasets:** Binary Search is the preferred choice when dealing with large sorted datasets where frequent searching is required.

### 5.  Applications of Binary Search

Binary search is a fundamental algorithm with numerous applications beyond simple searching.  Here are a few examples:

*   **Finding the First/Last Occurrence of an Element:**  Modify the standard binary search to find the first or last occurrence of a target element when it appears multiple times in the array.
*   **Finding the Square Root of a Number:**  Binary search can be used to approximate the square root of a number.
*   **Finding the Floor and Ceiling of a Number:** In a sorted array, find the largest element less than or equal to the target (floor) and the smallest element greater than or equal to the target (ceiling).
*   **Search in Rotated Sorted Array:** Adapt binary search to find an element in a sorted array that has been rotated a certain number of times.

### 6. Practice Questions/Exercises

1.  **Implement Binary Search (Iterative) in Descending Order:**  Modify the iterative binary search code to work with an array sorted in descending order.

    ```python
    def binary_search_descending(arr, target):
        low = 0
        high = len(arr) - 1
        while low <= high:
            mid = (low + high) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                high = mid - 1 # Change this line. Now high goes left.
            else:
                low = mid + 1 #Change this line. Now low goes right.
        return -1

    # Example
    descending_array = [12, 11, 8, 7, 5, 2]
    target_value = 7
    result = binary_search_descending(descending_array, target_value)
    print(f"Element {target_value} found at index {result}" if result != -1 else f"Element {target_value} not found")

    ```

2.  **Find the First Occurrence:** Given a sorted array with possible duplicate elements, write a function to find the index of the *first* occurrence of a given element.

    ```python
    def find_first_occurrence(arr, target):
        low = 0
        high = len(arr) - 1
        first_occurrence = -1  # Initialize to -1 (not found)

        while low <= high:
            mid = (low + high) // 2
            if arr[mid] == target:
                first_occurrence = mid  # Update the first occurrence
                high = mid - 1         # Keep searching on the left for earlier occurrences
            elif arr[mid] < target:
                low = mid + 1
            else:
                high = mid - 1

        return first_occurrence

    # Example:
    arr_with_duplicates = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
    target = 5
    index = find_first_occurrence(arr_with_duplicates, target)
    print(f"First occurrence of {target} is at index {index}") # Output: 1
    ```

3.  **Find the Last Occurrence:** Given a sorted array with possible duplicate elements, write a function to find the index of the *last* occurrence of a given element.

    ```python
    def find_last_occurrence(arr, target):
        low = 0
        high = len(arr) - 1
        last_occurrence = -1  # Initialize to -1 (not found)

        while low <= high:
            mid = (low + high) // 2
            if arr[mid] == target:
                last_occurrence = mid  # Update the last occurrence
                low = mid + 1           # Keep searching on the right for later occurrences
            elif arr[mid] < target:
                low = mid + 1
            else:
                high = mid - 1

        return last_occurrence

    # Example:
    arr_with_duplicates = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
    target = 5
    index = find_last_occurrence(arr_with_duplicates, target)
    print(f"Last occurrence of {target} is at index {index}") # Output: 3
    ```

4. **Find the Floor and Ceiling of a number:** Given a sorted array and target, find the index of the floor and ceiling.

```python
def find_floor_ceiling(arr, target):
    floor_index = -1
    ceiling_index = -1
    low = 0
    high = len(arr) -1

    while(low <= high):
        mid = (low+high)//2
        if (arr[mid] == target):
            return (mid, mid)
        elif arr[mid] < target:
            floor_index = mid
            low = mid + 1
        else:
            ceiling_index = mid
            high = mid - 1

    return (floor_index, ceiling_index)

# Example
arr = [1, 2, 8, 10, 10, 12, 19]
x = 5
floor_index, ceiling_index = find_floor_ceiling(arr, x)

print(f"Floor = {arr[floor_index] if floor_index != -1 else None} at index {floor_index}") # Floor = 2
print(f"Ceil = {arr[ceiling_index] if ceiling_index != -1 else None} at index {ceiling_index}") # Ceil = 8

```

### 7. Important Points to Remember

*   **Binary Search requires a sorted array.** It will not work correctly on unsorted data.
*   **Integer Division:** Use integer division (`//` in Python) when calculating the middle index to avoid floating-point issues.
*   **Edge Cases:** Consider edge cases like empty arrays or when the target is smaller than the smallest element or larger than the largest element in the array.  Ensure your code handles these cases gracefully.
*   **Recursive Call Stack:** Be mindful of the space complexity of recursive binary search, which can be O(log n) due to the call stack. For very large arrays, the iterative approach might be preferred.
*   **Understanding the Comparisons:** Pay close attention to the comparison operators (`<`, `>`, `==`) in the `if` statements within the binary search algorithm. A small mistake can lead to incorrect results.
*   **Adaptations:** Be prepared to adapt the basic binary search algorithm to solve related problems, such as finding the first/last occurrence of an element or searching in a rotated sorted array.

These notes cover the core concepts and implementations related to searching in sorted arrays using Binary Search. By understanding the principles and practicing the examples, you should be well-prepared to implement efficient search algorithms in various scenarios. Remember to analyze the time and space complexity of your solutions and consider edge cases for robust and reliable code.
