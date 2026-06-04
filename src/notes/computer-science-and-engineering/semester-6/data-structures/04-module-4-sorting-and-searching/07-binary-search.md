---
title: "Binary Search"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8beaf"
status: "completed"
scrapedAt: "2026-05-20T16:52:09.799Z"
---
# Data Structures: Module 4 - Sorting and Searching

## Topic: Binary Search

---

### 1. Introduction to Binary Search

Binary search is a highly efficient searching algorithm that works on **sorted arrays or lists**. It repeatedly divides the search interval in half.

**Key Concepts:**

*   **Sorted Data:** Binary search *absolutely requires* the data to be sorted in ascending or descending order. If the data is not sorted, the algorithm will produce incorrect results or fail to find elements that are present.
*   **Divide and Conquer:** It's a classic example of a "divide and conquer" algorithm. The problem (searching an interval) is divided into smaller subproblems (searching half of the interval).
*   **Logarithmic Time Complexity:** Due to its efficient halving of the search space, binary search has a time complexity of O(log n), making it significantly faster than linear search (O(n)) for large datasets.

**When to Use Binary Search:**

*   When you need to find an element in a large, sorted collection.
*   When the cost of sorting the data upfront is acceptable compared to repeated linear searches.

---

### 2. How Binary Search Works

The core idea is to compare the target value with the middle element of the array.

**Steps:**

1.  **Initialization:**
    *   Define the `low` index to the beginning of the array (usually 0).
    *   Define the `high` index to the end of the array (usually `n-1`, where `n` is the size of the array).

2.  **Iteration (or Recursion):**
    *   **While `low` is less than or equal to `high`:**
        *   Calculate the `mid` index: `mid = low + (high - low) / 2`. (This formula prevents potential integer overflow compared to `(low + high) / 2`).
        *   **Compare `target` with `array[mid]`:**
            *   If `array[mid] == target`: The element is found! Return `mid` (the index of the element).
            *   If `array[mid] < target`: The target must be in the **right half** of the current interval. Discard the left half by setting `low = mid + 1`.
            *   If `array[mid] > target`: The target must be in the **left half** of the current interval. Discard the right half by setting `high = mid - 1`.

3.  **Element Not Found:**
    *   If the loop finishes (i.e., `low > high`), it means the target element was not found in the array. Return an indicator like -1.

**Example Walkthrough:**

Let's search for `target = 23` in the sorted array: `[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]`

*   **Array:** `[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]`
*   **Indices:** `[0, 1, 2, 3,  4,  5,  6,  7,  8,  9]`
*   **Target:** `23`

**Iteration 1:**
*   `low = 0`, `high = 9`
*   `mid = 0 + (9 - 0) / 2 = 4`
*   `array[mid]` (which is `array[4]`) is `16`.
*   Since `16 < 23`, the target must be in the right half.
*   Update `low = mid + 1 = 4 + 1 = 5`.
*   **New Interval:** `low = 5`, `high = 9`

**Iteration 2:**
*   `low = 5`, `high = 9`
*   `mid = 5 + (9 - 5) / 2 = 5 + 4 / 2 = 5 + 2 = 7`
*   `array[mid]` (which is `array[7]`) is `56`.
*   Since `56 > 23`, the target must be in the left half.
*   Update `high = mid - 1 = 7 - 1 = 6`.
*   **New Interval:** `low = 5`, `high = 6`

**Iteration 3:**
*   `low = 5`, `high = 6`
*   `mid = 5 + (6 - 5) / 2 = 5 + 1 / 2 = 5 + 0 = 5`
*   `array[mid]` (which is `array[5]`) is `23`.
*   Since `array[mid] == target`, the element is found!
*   **Return:** `5` (the index of 23).

---

### 3. Implementing Binary Search

Binary search can be implemented in two main ways:

#### 3.1 Iterative Implementation

This is the most common and often preferred method due to its straightforward nature and avoidance of recursion overhead.

```python
def binary_search_iterative(arr, target):
    """
    Performs binary search on a sorted array iteratively.

    Args:
        arr: A sorted list of elements.
        target: The element to search for.

    Returns:
        The index of the target element if found, otherwise -1.
    """
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = low + (high - low) // 2  # Use integer division

        # Check if target is present at mid
        if arr[mid] == target:
            return mid
        # If target is greater, ignore left half
        elif arr[mid] < target:
            low = mid + 1
        # If target is smaller, ignore right half
        else:
            high = mid - 1

    # Target element is not present in the array
    return -1

# Example Usage:
my_list = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
target_value = 23
index = binary_search_iterative(my_list, target_value)

if index != -1:
    print(f"Element {target_value} found at index {index}")
else:
    print(f"Element {target_value} not found in the list")

target_value = 100
index = binary_search_iterative(my_list, target_value)
if index != -1:
    print(f"Element {target_value} found at index {index}")
else:
    print(f"Element {target_value} not found in the list")
```

#### 3.2 Recursive Implementation

This approach breaks the problem down into smaller, self-similar subproblems.

```python
def binary_search_recursive(arr, low, high, target):
    """
    Performs binary search on a sorted array recursively.

    Args:
        arr: A sorted list of elements.
        low: The starting index of the current search interval.
        high: The ending index of the current search interval.
        target: The element to search for.

    Returns:
        The index of the target element if found, otherwise -1.
    """
    # Base case: If the interval is empty, the element is not found
    if high >= low:
        mid = low + (high - low) // 2

        # If element is present at the middle itself
        if arr[mid] == target:
            return mid
        # If element is smaller than mid, then it can only be present in left subarray
        elif arr[mid] > target:
            return binary_search_recursive(arr, low, mid - 1, target)
        # Else the element can only be present in right subarray
        else:
            return binary_search_recursive(arr, mid + 1, high, target)
    else:
        # Element is not present in the array
        return -1

# Example Usage:
my_list = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
target_value = 38
n = len(my_list)
index = binary_search_recursive(my_list, 0, n - 1, target_value)

if index != -1:
    print(f"Element {target_value} found at index {index}")
else:
    print(f"Element {target_value} not found in the list")

target_value = 1
index = binary_search_recursive(my_list, 0, n - 1, target_value)
if index != -1:
    print(f"Element {target_value} found at index {index}")
else:
    print(f"Element {target_value} not found in the list")
```

---

### 4. Time and Space Complexity

*   **Time Complexity:** **O(log n)**
    *   In each step, the search space is halved. This is characteristic of logarithmic complexity.
    *   **Worst Case:** The target element is not present or is the last element to be checked after all halves are explored.
    *   **Best Case:** The target element is the middle element in the first comparison (O(1)).
    *   **Average Case:** O(log n).

*   **Space Complexity:**
    *   **Iterative:** **O(1)** - Uses a constant amount of extra space for variables like `low`, `high`, and `mid`.
    *   **Recursive:** **O(log n)** - Due to the function call stack. In the worst case, the depth of recursion can be `log n`.

---

### 5. Variations and Considerations

*   **Finding First/Last Occurrence:** The standard binary search returns *an* index if the element is found. If there are duplicates, it might return any of them. To find the *first* or *last* occurrence of a duplicate element, slight modifications to the algorithm are needed (e.g., continuing the search in the left half even after finding a match to locate the first occurrence).

*   **Searching in Rotated Sorted Arrays:** This is a more advanced variation where a sorted array has been rotated. Binary search can be adapted to handle this, but it requires additional logic to determine which half of the array is still sorted.

*   **Binary Search on Data Structures other than Arrays:** While most commonly applied to arrays, the concept of binary search can be extended to other ordered data structures like balanced binary search trees.

---

### 6. Practice Questions

**Question 1:**
What is the main prerequisite for performing a binary search on an array?

**Question 2:**
Trace the execution of a binary search for the value `42` in the following sorted array: `[10, 15, 20, 25, 30, 35, 40, 45, 50, 55]`. Show the `low`, `high`, and `mid` values in each step.

**Question 3:**
Consider the following array: `[3, 6, 9, 12, 15, 18, 21]`. If you perform a binary search for the value `10`, what will be the outcome? Explain why.

**Question 4:**
What is the time complexity of binary search, and why is it considered efficient?

**Question 5:**
When might you choose an iterative binary search over a recursive one, and vice-versa?

---

### 7. Answers to Practice Questions

**Answer 1:**
The main prerequisite for performing a binary search on an array is that the array **must be sorted** (either in ascending or descending order).

**Answer 2:**
Array: `[10, 15, 20, 25, 30, 35, 40, 45, 50, 55]`
Indices: `[ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9]`
Target: `42`

*   **Step 1:**
    *   `low = 0`, `high = 9`
    *   `mid = 0 + (9-0)//2 = 4`
    *   `arr[4]` is `30`.
    *   `30 < 42`, so `low = mid + 1 = 5`.

*   **Step 2:**
    *   `low = 5`, `high = 9`
    *   `mid = 5 + (9-5)//2 = 5 + 2 = 7`
    *   `arr[7]` is `45`.
    *   `45 > 42`, so `high = mid - 1 = 6`.

*   **Step 3:**
    *   `low = 5`, `high = 6`
    *   `mid = 5 + (6-5)//2 = 5 + 0 = 5`
    *   `arr[5]` is `35`.
    *   `35 < 42`, so `low = mid + 1 = 6`.

*   **Step 4:**
    *   `low = 6`, `high = 6`
    *   `mid = 6 + (6-6)//2 = 6`
    *   `arr[6]` is `40`.
    *   `40 < 42`, so `low = mid + 1 = 7`.

*   **Step 5:**
    *   `low = 7`, `high = 6`
    *   The condition `low <= high` is now false (`7 <= 6` is false).
    *   The search terminates, and `42` is not found. The function would return -1.

**Answer 3:**
The binary search for `10` in `[3, 6, 9, 12, 15, 18, 21]` will **not find** the element.
Explanation:
1.  `low = 0`, `high = 6`, `mid = 3`. `arr[3]` is `12`.
2.  Since `12 > 10`, `high` becomes `mid - 1 = 2`.
3.  Now `low = 0`, `high = 2`. `mid = 0 + (2-0)//2 = 1`. `arr[1]` is `6`.
4.  Since `6 < 10`, `low` becomes `mid + 1 = 2`.
5.  Now `low = 2`, `high = 2`. `mid = 2 + (2-2)//2 = 2`. `arr[2]` is `9`.
6.  Since `9 < 10`, `low` becomes `mid + 1 = 3`.
7.  Now `low = 3`, `high = 2`. The condition `low <= high` is false.
The element `10` is not present in the array.

**Answer 4:**
The time complexity of binary search is **O(log n)**. This is considered very efficient because with each comparison, the algorithm effectively eliminates half of the remaining search space. For example, if you have 1 million items, binary search will take at most around 20 comparisons (log₂ 1,000,000 ≈ 19.9), whereas a linear search could take up to 1 million comparisons.

**Answer 5:**
*   **Choose Iterative:**
    *   **Generally preferred:** It's typically more memory efficient (O(1) space complexity) as it doesn't consume stack space like recursion.
    *   **Avoids Stack Overflow:** For very large arrays, a deep recursion could potentially lead to a stack overflow error.
    *   **Easier to debug:** Sometimes iterative loops are perceived as easier to trace for debugging.

*   **Choose Recursive:**
    *   **Elegance/Readability:** For some, the recursive formulation more closely mirrors the "divide and conquer" definition and can be more elegant to read.
    *   **Conceptual clarity:** Understanding recursion can be important for grasping other algorithms.
    *   **When stack depth is not a concern:** For smaller datasets or when tail-call optimization is guaranteed (though less common in Python), the overhead might be negligible.

---

### 8. Important Points to Remember

*   **SORTED DATA IS CRUCIAL:** Binary search *only* works correctly on sorted arrays.
*   **O(log n) Efficiency:** This is its primary advantage over linear search, especially for large datasets.
*   **Midpoint Calculation:** Use `mid = low + (high - low) // 2` to prevent potential integer overflow.
*   **Interval Updates:** When the target is greater than `arr[mid]`, update `low = mid + 1`. When the target is less than `arr[mid]`, update `high = mid - 1`.
*   **Termination Condition:** The loop continues as long as `low <= high`. If `low` becomes greater than `high`, the element is not found.
*   **Iterative vs. Recursive:** Both are valid implementations. The iterative version is usually preferred for its space efficiency.
*   **Duplicates:** Standard binary search might return any index if duplicates exist. Modifications are needed for specific first/last occurrence searches.
