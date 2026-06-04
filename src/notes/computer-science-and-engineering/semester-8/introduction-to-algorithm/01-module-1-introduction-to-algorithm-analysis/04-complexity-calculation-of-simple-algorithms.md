---
title: "Complexity Calculation of simple algorithms"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 1: Introduction to Algorithm Analysis"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbc2"
status: "completed"
scrapedAt: "2026-05-20T17:25:06.685Z"
---
# Introduction to Algorithm Analysis: Complexity Calculation of Simple Algorithms

## Module 1: Introduction to Algorithm Analysis
### Topic: Complexity Calculation of Simple Algorithms

---

### 1. Understanding Algorithm Complexity

**What is Algorithm Complexity?**

Algorithm complexity refers to the measure of the resources (time and space) that an algorithm requires to run as a function of the size of its input. It helps us understand how an algorithm's performance scales with increasing input size.

**Why is Complexity Analysis Important?**

*   **Performance Prediction:** Predict how an algorithm will perform on larger datasets.
*   **Algorithm Selection:** Choose the most efficient algorithm for a given problem.
*   **Resource Optimization:** Identify bottlenecks and optimize algorithms to use fewer resources.
*   **Understanding Trade-offs:** Recognize that time and space complexity can sometimes be inversely related.

---

### 2. Types of Complexity

We primarily analyze two types of complexity:

*   **Time Complexity:** Measures the number of basic operations an algorithm performs as a function of the input size. This is often the primary focus as execution time is a critical performance metric.
*   **Space Complexity:** Measures the amount of memory an algorithm uses as a function of the input size. This includes memory for input, output, and auxiliary variables.

---

### 3. Basic Operations

When calculating time complexity, we count the fundamental operations that take a constant amount of time. These include:

*   Arithmetic operations (+, -, *, /, %)
*   Assignment operations (=)
*   Comparisons (<, >, ==, !=, <=, >=)
*   Accessing an array element (e.g., `arr[i]`)
*   Returning a value

---

### 4. Calculating Time Complexity

The goal is to express the number of operations as a function of the input size, typically denoted by 'n'. We often use **Big O notation** to represent the upper bound of this growth rate.

**Key Principles for Calculation:**

*   **Focus on the Dominant Term:** As the input size 'n' grows, the term with the highest power dictates the overall growth rate.
*   **Ignore Constant Factors:** Constant multipliers don't affect the asymptotic growth rate.
*   **Ignore Lower-Order Terms:** Terms with smaller powers become insignificant for large 'n'.

**Common Time Complexity Classes (from best to worst):**

*   **O(1) - Constant Time:** The execution time is independent of the input size.
    *   *Example:* Accessing an element in an array by its index, performing a simple arithmetic operation.

*   **O(log n) - Logarithmic Time:** The execution time grows logarithmically with the input size. This often occurs in algorithms that divide the problem size by a constant factor in each step (e.g., binary search).
    *   *Example:* Binary search on a sorted array.

*   **O(n) - Linear Time:** The execution time grows linearly with the input size. The algorithm performs a constant amount of work for each element in the input.
    *   *Example:* Traversing an array once, finding the maximum element in an unsorted array.

*   **O(n log n) - Linearithmic Time:** The execution time grows at a rate that is the product of linear and logarithmic growth. Common in efficient sorting algorithms.
    *   *Example:* Merge sort, Quick sort (average case).

*   **O(n^2) - Quadratic Time:** The execution time grows quadratically with the input size. Often involves nested loops where each loop iterates through the input.
    *   *Example:* Bubble sort, Insertion sort, Selection sort, comparing every pair of elements in a list.

*   **O(2^n) - Exponential Time:** The execution time grows exponentially with the input size. These algorithms are typically very slow and only practical for very small input sizes.
    *   *Example:* Recursive calculation of Fibonacci numbers without memoization, brute-force solutions for problems like the Traveling Salesperson Problem.

*   **O(n!) - Factorial Time:** The execution time grows extremely rapidly.
    *   *Example:* Permutation-based algorithms, brute-force solutions for the Traveling Salesperson Problem by checking all permutations.

---

### 5. Analyzing Simple Algorithms: Examples

Let's calculate the time complexity for a few simple algorithms.

**Example 1: Accessing an Array Element**

```python
def get_element(arr, index):
  return arr[index] # One operation: array access
```

*   **Input Size:** `n` (the size of the array `arr`)
*   **Operation:** `arr[index]` (array access)
*   **Number of Operations:** 1
*   **Time Complexity:** **O(1)** (Constant time)

**Example 2: Finding the Maximum Element in an Array**

```python
def find_max(arr):
  if not arr:
    return None
  max_val = arr[0] # 1 operation (assignment)
  for i in range(1, len(arr)): # Loop runs n-1 times
    if arr[i] > max_val: # 1 operation (comparison)
      max_val = arr[i] # 1 operation (assignment) (at most n-1 times)
  return max_val
```

*   **Input Size:** `n` (the size of the array `arr`)
*   **Operations:**
    *   Initialization: 1 operation (`max_val = arr[0]`)
    *   Loop: The loop runs `n-1` times. Inside the loop:
        *   Comparison: 1 operation (`arr[i] > max_val`)
        *   Assignment (conditional): At most 1 operation (`max_val = arr[i]`)
*   **Total Operations (worst case):** 1 (init) + (n-1) * (1 (comparison) + 1 (assignment)) = 1 + 2(n-1) = 1 + 2n - 2 = 2n - 1
*   **Dominant Term:** `2n`
*   **Ignore Constant Factor:** `n`
*   **Time Complexity:** **O(n)** (Linear time)

**Example 3: Sum of elements in a 2D array (Matrix)**

```python
def sum_matrix(matrix):
  total_sum = 0 # 1 operation
  rows = len(matrix) # 1 operation
  if rows == 0:
    return 0
  cols = len(matrix[0]) # 1 operation

  for i in range(rows): # Outer loop runs 'rows' times
    for j in range(cols): # Inner loop runs 'cols' times
      total_sum += matrix[i][j] # 1 operation (addition and assignment)
  return total_sum
```

*   **Input Size:** Let `R` be the number of rows and `C` be the number of columns. For simplicity in analysis, if we assume a square matrix where `n = R = C`, then the input size is `n x n`.
*   **Operations:**
    *   Initialization: 2 operations (`total_sum = 0`, `rows = len(matrix)`)
    *   Outer loop: Runs `R` times.
    *   Inner loop: Runs `C` times for each iteration of the outer loop.
    *   Innermost operation: `total_sum += matrix[i][j]` (1 operation)
*   **Total Operations:** 2 + R * C * 1
*   If `n` represents the total number of elements (`n = R * C`), then the complexity is `O(R * C)`.
*   If we consider the dimensions `R` and `C`, the complexity is **O(R * C)**.
*   If we assume a square matrix and let `N` be the dimension (so `n = N*N` elements), then complexity is **O(N^2)**. It's crucial to define what 'n' represents. Here, if 'n' is the number of elements, it would be O(n). If 'n' is the dimension of a square matrix, it would be O(n^2). Let's stick to the explicit `R` and `C` for clarity here.

**Example 4: Nested Loops - Checking for Duplicates (Brute Force)**

```python
def has_duplicates(arr):
  n = len(arr)
  for i in range(n): # Outer loop runs n times
    for j in range(n): # Inner loop runs n times
      if i != j and arr[i] == arr[j]: # 2 operations (comparison, equality check)
        return True
  return False
```

*   **Input Size:** `n` (the size of the array `arr`)
*   **Operations:**
    *   Outer loop runs `n` times.
    *   Inner loop runs `n` times for each outer loop iteration.
    *   Innermost operations: `i != j` and `arr[i] == arr[j]` (2 operations).
*   **Total Operations (worst case):** `n * n * 2` = `2n^2`
*   **Dominant Term:** `2n^2`
*   **Ignore Constant Factor:** `n^2`
*   **Time Complexity:** **O(n^2)** (Quadratic time)

**Example 5: Nested Loops - Optimized Duplicate Check**

A more efficient way to check for duplicates would be to compare each element only with the elements that come *after* it.

```python
def has_duplicates_optimized(arr):
  n = len(arr)
  for i in range(n): # Outer loop runs n times
    for j in range(i + 1, n): # Inner loop runs n-1, n-2, ..., 1 times
      if arr[i] == arr[j]: # 1 operation (equality check)
        return True
  return False
```

*   **Input Size:** `n`
*   **Operations:**
    *   Outer loop runs `n` times.
    *   Inner loop runs `n-1` times (when i=0), `n-2` times (when i=1), ..., 1 time (when i=n-2).
    *   The total number of comparisons is the sum of an arithmetic series: (n-1) + (n-2) + ... + 1 = `(n-1) * n / 2`
*   **Total Operations (worst case):** `(n-1) * n / 2` = `(n^2 - n) / 2` = `0.5n^2 - 0.5n`
*   **Dominant Term:** `0.5n^2`
*   **Ignore Constant Factor and Lower-Order Terms:** `n^2`
*   **Time Complexity:** **O(n^2)** (Quadratic time). Although the constant factor is smaller, the asymptotic growth remains the same as the previous example.

**Example 6: Calculating Space Complexity**

```python
def reverse_array(arr):
  n = len(arr)
  reversed_arr = [0] * n # Creates a new array of size n
  for i in range(n):
    reversed_arr[i] = arr[n - 1 - i] # Array access and assignment
  return reversed_arr
```

*   **Input Size:** `n` (the size of the array `arr`)
*   **Memory Usage:**
    *   Input array `arr`: `O(n)` (already exists)
    *   `n`: `O(1)`
    *   `reversed_arr`: This new array is created with `n` elements. So, it takes `O(n)` space.
    *   Loop variables (`i`): `O(1)`
*   **Total Auxiliary Space Complexity:** The space required *in addition* to the input. In this case, it's dominated by `reversed_arr`.
*   **Space Complexity:** **O(n)** (Linear space)

---

### 6. Learning Outcomes Covered:

By the end of this topic, you should be able to:

*   **Understand the need for algorithm analysis:** We've discussed why complexity analysis is crucial for performance prediction and algorithm selection.
*   **Define and differentiate between time and space complexity:** We've defined both and explained what they measure.
*   **Identify basic operations:** We've listed common operations that are counted for time complexity.
*   **Calculate the time complexity of simple algorithms:** We've worked through examples of algorithms with O(1), O(n), and O(n^2) time complexities.
*   **Calculate the space complexity of simple algorithms:** We've demonstrated how to calculate space complexity with an example.
*   **Use Big O notation to express complexity:** We've consistently applied Big O notation throughout the examples.

---

### 7. Important Points to Remember

*   **Focus on the worst-case scenario:** Big O notation typically represents the upper bound on the execution time or space usage.
*   **Input size 'n' is key:** Always define what 'n' represents in your analysis (e.g., number of elements, dimension of a matrix).
*   **Constants don't matter in Big O:** `O(2n)` is the same as `O(n)`. `O(n^2 + n)` is `O(n^2)`.
*   **Loops are a primary indicator:** Single loops often lead to O(n), while nested loops often lead to O(n^2) or higher.
*   **Recursive calls contribute to complexity:** Analyze how the problem size changes with each recursive call.
*   **Space complexity considers auxiliary space:** The memory used *by the algorithm itself*, not necessarily the input.

---

### 8. Practice Questions

**Question 1:** What is the time complexity of the following Python code snippet?

```python
def print_items(items):
  for item in items: # Loop through the 'items' list
    print(item)     # Print each item
```

**Question 2:** What is the time complexity of the following Python code snippet?

```python
def find_sum_of_pairs(numbers):
  count = 0
  for i in range(len(numbers)):
    for j in range(len(numbers)):
      if numbers[i] + numbers[j] == 10:
        count += 1
  return count
```

**Question 3:** What is the space complexity of the following Python function?

```python
def create_list_of_squares(n):
  squares = [] # Initialize an empty list
  for i in range(n):
    squares.append(i * i) # Append to the list
  return squares
```

**Question 4:** Consider a function that takes an integer `n` as input and performs `n` operations, then `n/2` operations, and finally `n/4` operations. What is the time complexity in Big O notation?

**Question 5:** What is the time complexity of searching for an element in a **sorted** array using **binary search**?

---

### 9. Answers to Practice Questions

**Answer 1:**
The code iterates through the `items` list once. If the length of `items` is `n`, the loop runs `n` times. Printing an item is a constant time operation.
**Time Complexity: O(n)**

**Answer 2:**
There are two nested loops, both iterating from 0 to `len(numbers) - 1`. If the length of `numbers` is `n`, the outer loop runs `n` times, and for each iteration of the outer loop, the inner loop also runs `n` times. The operations inside the inner loop (addition, comparison, increment) are constant time.
**Time Complexity: O(n^2)**

**Answer 3:**
The function creates a new list called `squares`. In each iteration of the loop, an element is appended to this list. The loop runs `n` times, so `n` elements are appended. The `squares` list will have a size of `n`. The space required for this list is proportional to `n`.
**Space Complexity: O(n)**

**Answer 4:**
The total number of operations is approximately `n + n/2 + n/4`.
The dominant term is `n`.
Ignoring constants and lower-order terms:
**Time Complexity: O(n)**

**Answer 5:**
Binary search works by repeatedly dividing the search interval in half. This leads to a logarithmic growth in the number of operations as the input size increases.
**Time Complexity: O(log n)**
