---
title: "Time and Space Complexity Calculation of simple algorithms"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 1: Algorithms – Characteristics"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b545"
status: "completed"
scrapedAt: "2026-05-20T16:45:29.647Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS - MODULE 1: Algorithms – Characteristics
## Topic: Time and Space Complexity Calculation of Simple Algorithms

### Learning Outcomes:

*   Understand the concepts of time and space complexity.
*   Learn how to analyze the time and space complexity of simple algorithms.
*   Understand different notations used to represent complexity (Big O, Big Omega, Big Theta).
*   Calculate the time and space complexity of basic algorithms like linear search and finding the maximum element in an array.

### 1. Key Concepts and Definitions

*   **Algorithm:** A well-defined sequence of steps or instructions to solve a particular problem.

*   **Time Complexity:** A measure of the amount of time an algorithm takes to run as a function of the input size. It's generally expressed in terms of the number of operations performed.  It doesn't give the precise execution time in seconds, but rather how the execution time *grows* with input size.

*   **Space Complexity:** A measure of the amount of memory space an algorithm uses to execute, including the space for input values and auxiliary space for variables and data structures.

*   **Input Size (n):**  The size of the input data that the algorithm processes. It's a crucial factor in determining both time and space complexity. For example, if the algorithm processes an array, `n` could be the number of elements in the array.

*   **Asymptotic Analysis:**  A method of describing the limiting behavior of a function (representing time or space complexity) as the input size `n` approaches infinity.  It focuses on the dominant term and ignores constant factors and lower-order terms.

*   **Big O Notation (O):**  Describes the *upper bound* of the algorithm's time or space complexity. It provides the worst-case scenario performance.  "O(f(n))" means the algorithm's complexity grows *no faster* than f(n) as n gets large.

*   **Big Omega Notation (Ω):** Describes the *lower bound* of the algorithm's time or space complexity. It provides the best-case scenario performance. "Ω(f(n))" means the algorithm's complexity grows *at least as fast* as f(n) as n gets large.

*   **Big Theta Notation (Θ):** Describes the *tight bound* of the algorithm's time or space complexity. It specifies both the upper and lower bounds, meaning the algorithm's complexity grows at the same rate as the specified function. "Θ(f(n))" means the algorithm's complexity grows *at the same rate* as f(n) as n gets large.

*   **Best Case:** The scenario where the algorithm performs the fastest.

*   **Average Case:** The scenario where the algorithm performs on average, considering all possible inputs.

*   **Worst Case:** The scenario where the algorithm performs the slowest. This is what Big O notation typically describes.

### 2. Time Complexity Analysis

*   **Steps for Time Complexity Analysis:**

    1.  **Identify the input size (n):** Determine what represents the size of the input.
    2.  **Count the elementary operations:** Count the number of basic operations the algorithm performs (e.g., assignments, comparisons, arithmetic operations).
    3.  **Express the count as a function of n:** Write a mathematical function that relates the number of operations to the input size `n`.
    4.  **Apply asymptotic analysis (Big O, Big Omega, Big Theta):** Focus on the dominant term in the function and ignore constant factors.

*   **Common Time Complexities (from best to worst):**

    *   **O(1) - Constant Time:**  The algorithm takes the same amount of time regardless of the input size.  Example: Accessing an element in an array by its index.
    *   **O(log n) - Logarithmic Time:** The algorithm's execution time increases logarithmically with the input size.  Example: Binary search.
    *   **O(n) - Linear Time:** The algorithm's execution time increases linearly with the input size. Example: Linear search.
    *   **O(n log n) - Linearithmic Time:** The algorithm's execution time increases proportionally to n multiplied by the logarithm of n.  Example: Merge sort, Heap sort.
    *   **O(n^2) - Quadratic Time:** The algorithm's execution time increases quadratically with the input size. Example: Bubble sort, Insertion sort.
    *   **O(n^3) - Cubic Time:** The algorithm's execution time increases cubically with the input size.
    *   **O(2^n) - Exponential Time:** The algorithm's execution time doubles with each addition to the input size. Example:  Trying all possible subsets of a set.
    *   **O(n!) - Factorial Time:**  The algorithm's execution time grows factorially with the input size. This is the slowest growth rate.  Example:  Trying all possible permutations of a set.

### 3. Space Complexity Analysis

*   **Steps for Space Complexity Analysis:**

    1.  **Identify input space:** Space occupied by input data.
    2.  **Identify auxiliary space:**  Space used by the algorithm for variables, data structures, and temporary storage during execution, *excluding* the input space.
    3.  **Express auxiliary space as a function of n:**  Write a mathematical function that relates the amount of auxiliary space to the input size `n`.
    4.  **Apply asymptotic analysis (Big O, Big Omega, Big Theta):**  Focus on the dominant term and ignore constant factors.

*   **Common Space Complexities:**

    *   **O(1) - Constant Space:** The algorithm uses a constant amount of extra space, regardless of the input size.
    *   **O(n) - Linear Space:**  The algorithm uses an amount of extra space that is proportional to the input size.
    *   **O(n^2) - Quadratic Space:** The algorithm uses an amount of extra space that is proportional to the square of the input size.

### 4. Examples

#### 4.1 Linear Search

```python
def linear_search(arr, target):
  """
  Searches for a target value in an array using linear search.
  """
  for i in range(len(arr)):
    if arr[i] == target:
      return i  # Found at index i
  return -1  # Not found
```

*   **Time Complexity:**
    *   **Best Case:** O(1) (Target is the first element)
    *   **Average Case:** O(n/2) which simplifies to O(n)
    *   **Worst Case:** O(n) (Target is not present or is the last element)
*   **Space Complexity:** O(1) (Uses a constant amount of extra space for the index `i` and for the return value).

#### 4.2 Finding the Maximum Element in an Array

```python
def find_max(arr):
  """
  Finds the maximum element in an array.
  """
  if not arr:
    return None  # Handle empty array case

  max_element = arr[0]
  for i in range(1, len(arr)):
    if arr[i] > max_element:
      max_element = arr[i]
  return max_element
```

*   **Time Complexity:** O(n) (Iterates through the array once)
*   **Space Complexity:** O(1) (Uses a constant amount of extra space for `max_element` and `i`)

#### 4.3 Nested Loops

```python
def nested_loop_example(arr):
    """
    Example with nested loops.
    """
    n = len(arr)
    count = 0
    for i in range(n):
        for j in range(n):
            count += 1
    return count
```

*   **Time Complexity:** O(n^2) (The inner loop executes `n` times for each iteration of the outer loop, which also iterates `n` times. Therefore, the number of operations is proportional to n * n = n^2).
*   **Space Complexity:** O(1) (Uses constant extra space for `n`, `count`, `i`, and `j`).

### 5. Practice Questions/Exercises

1.  **Algorithm:** Write a function to calculate the sum of elements in an array.  What is its time and space complexity?

    ```python
    def array_sum(arr):
      """
      Calculates the sum of elements in an array.
      """
      sum_val = 0
      for num in arr:
        sum_val += num
      return sum_val
    ```

    *   **Answer:**
        *   Time Complexity: O(n) (Iterates through the array once)
        *   Space Complexity: O(1) (Uses constant extra space for `sum_val` and `num`)

2.  **Algorithm:**  Write a function that checks if a number is prime by iterating from 2 to n-1. What is its time and space complexity?

    ```python
    def is_prime(n):
        """
        Checks if a number is prime by naive method.
        """
        if n <= 1:
            return False
        for i in range(2, n):
            if n % i == 0:
                return False
        return True
    ```

    *   **Answer:**
        *   Time Complexity: O(n) (Iterates up to `n-1`)
        *   Space Complexity: O(1) (Uses constant extra space for `i`)

3.  **Algorithm:**  Consider the following code snippet:

    ```python
    def mystery_function(n):
        for i in range(n):
            j = 1
            while j < n:
                j = j * 2
    ```

    What is the time complexity of `mystery_function`?

    *   **Answer:**
        *   The outer loop runs `n` times. The inner loop `while j < n` effectively calculates `log2(n)`. So, the inner loop takes O(log n) time to run.
        *   Therefore, the total time complexity is O(n log n).

4.  **Algorithm:** Write a recursive function to calculate the factorial of a number. What is its time and space complexity?

    ```python
    def factorial(n):
        if n == 0:
            return 1
        else:
            return n * factorial(n-1)
    ```

    *   **Answer:**
        *   Time Complexity: O(n)  (The function makes `n` recursive calls).
        *   Space Complexity: O(n) (Due to the call stack.  Each recursive call adds a frame to the call stack. There will be `n` frames on the call stack at the deepest level of recursion.)

### 6. Important Points to Remember

*   Asymptotic analysis provides a high-level view of algorithm performance, especially for large input sizes.
*   Big O notation usually represents the worst-case scenario.
*   Space complexity includes both input space and auxiliary space. Be sure to clearly distinguish between them.
*   Understanding time and space complexity helps in choosing the most efficient algorithm for a given problem.
*   Constant factors are ignored in asymptotic analysis, but they can still matter in practice for smaller input sizes. Focus on how the operations *grow* rather than the exact number of them.
*   When analyzing algorithms, identify the dominant operations that contribute most to the time or space usage.
*   Recursion can lead to increased space complexity due to the call stack.
