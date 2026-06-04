---
title: "Analysis of Recursive Algorithms - Recurrence Equations"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 1: Algorithms – Characteristics"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b546"
status: "completed"
scrapedAt: "2026-05-20T16:45:30.362Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS: Module 1 - Algorithms - Characteristics

### Topic: Analysis of Recursive Algorithms - Recurrence Equations

**Learning Outcomes:**

*   Understand the concept of recursion and its relation to algorithms.
*   Learn how to analyze recursive algorithms.
*   Be able to formulate recurrence equations for recursive algorithms.
*   Understand the significance of base cases in recursive algorithms.
*   Be able to solve simple recurrence relations (Substitution and Iteration methods).

---

**1. Introduction to Recursion and Recursive Algorithms**

*   **Definition of Recursion:**  A programming technique where a function calls itself directly or indirectly to solve a problem.  The problem is broken down into smaller, self-similar subproblems.

*   **Recursive Algorithm:** An algorithm implemented using a recursive function.

*   **Key Components of a Recursive Algorithm:**
    *   **Base Case (Termination Condition):**  A condition where the function stops calling itself and returns a simple value.  This prevents infinite recursion.  *Crucially Important!*
    *   **Recursive Step:**  The part of the function where it calls itself with a modified input, moving closer to the base case.

*   **Example: Factorial Function (Recursive Implementation)**

    ```python
    def factorial(n):
        """Calculates the factorial of a non-negative integer n."""
        if n == 0:  # Base Case: Factorial of 0 is 1
            return 1
        else:
            return n * factorial(n-1) # Recursive Step
    ```

*   **Advantages of Recursion:**
    *   Often provides a more concise and elegant solution for certain problems (e.g., tree traversal, searching).
    *   Can mirror the mathematical definition of a problem more closely.

*   **Disadvantages of Recursion:**
    *   Can be less efficient than iterative solutions due to the overhead of function calls (stack management).
    *   Risk of stack overflow if the recursion depth is too large (e.g., forgetting a base case).

---

**2. Analyzing Recursive Algorithms**

*   **Analysis Goal:**  Determine the time complexity (and sometimes space complexity) of a recursive algorithm.  This tells us how the algorithm's performance scales with the input size.

*   **Primary Tool: Recurrence Equations**  A mathematical equation that expresses the time complexity of a recursive algorithm in terms of the time complexity of its smaller subproblems.

*   **Steps for Analyzing Recursive Algorithms:**
    1.  **Identify the base case(s).**  Determine the cost (time complexity) of the base case(s).  This is typically constant time, O(1).
    2.  **Identify the recursive step(s).** Determine the cost (time complexity) of the operations performed in each recursive step *excluding* the recursive call(s) themselves.
    3.  **Formulate the recurrence equation.**  Express the overall time complexity `T(n)` in terms of `T(n')`, where `n'` represents the input size of the subproblems called recursively.

---

**3. Recurrence Equations: Definition and Formulation**

*   **Definition:** A recurrence equation defines a sequence or function in terms of itself.  In the context of algorithm analysis, it describes the running time of a recursive algorithm.

*   **General Form:**

    ```
    T(n) =  {
            c                  if n <= b  (Base Case)
            aT(n/b) + f(n)   if n > b   (Recursive Step)
           }
    ```

    Where:
    *   `T(n)` is the time complexity for an input of size `n`.
    *   `c` is the constant time taken for the base case(s).
    *   `b` is the input size at which the base case is reached.
    *   `a` is the number of recursive calls made in the recursive step.
    *   `n/b`  represents the reduced input size in each recursive call (often `n-1` or `n/2` depending on the problem).
    *   `f(n)` is the time complexity of the work done outside the recursive calls in the recursive step.  This includes operations like comparisons, arithmetic, and data manipulation.

*   **Formulating Recurrence Equations - Examples:**

    *   **Example 1: Factorial Function**

        ```python
        def factorial(n):
            if n == 0:
                return 1
            else:
                return n * factorial(n-1)
        ```

        *   Base Case: `T(n) = c` (constant time) when `n == 0`.  We can say `T(0) = O(1)`
        *   Recursive Step: `T(n) = T(n-1) + d` (constant time for the multiplication operation). We can say `d = O(1)`.
        *   Recurrence Equation:

            ```
            T(n) =  {
                    O(1)         if n == 0
                    T(n-1) + O(1)  if n > 0
                   }
            ```

    *   **Example 2: Binary Search (Recursive Implementation)**

        ```python
        def binary_search(arr, low, high, x):
            """Recursive binary search function."""
            if high >= low:
                mid = (high + low) // 2

                if arr[mid] == x:
                    return mid
                elif arr[mid] > x:
                    return binary_search(arr, low, mid - 1, x)
                else:
                    return binary_search(arr, mid + 1, high, x)
            else:
                return -1
        ```

        *   Base Case: `T(n) = c` when `high < low` (item not found). Also `T(n) = c` if `arr[mid] == x`. We can say `T(n) = O(1)`
        *   Recursive Step: The algorithm halves the search space in each step. The comparison `arr[mid] > x` or `arr[mid] < x` takes constant time.  Therefore, `f(n) = O(1)`.  One recursive call is made to either the left or right half.
        *   Recurrence Equation:

            ```
            T(n) =  {
                    O(1)         if high < low
                    T(n/2) + O(1)  otherwise
                   }
            ```

    *   **Example 3: Merge Sort** (Assume the split and merge operations take O(n) time)

        *   Base Case:  Array of size 1 (already sorted): `T(1) = O(1)`
        *   Recursive Step: Divide the array in half, recursively sort each half, and merge the sorted halves. The merge step takes O(n) time.

        *   Recurrence Equation:

            ```
            T(n) =  {
                    O(1)         if n = 1
                    2T(n/2) + O(n)  if n > 1
                   }
            ```

---

**4. Solving Recurrence Equations (Simplified)**

*   **Methods for Solving Recurrence Equations:**
    *   **Substitution Method:**  Guess the solution and then prove it using mathematical induction.  Requires some intuition or experience to make a good guess.
    *   **Iteration Method (Expansion Method):**  Repeatedly expand the recurrence equation until a pattern emerges, then express the result in terms of the initial input size `n`. This is the method we'll primarily focus on for simple examples.
    *   **Master Theorem:**  Provides a direct solution for a specific class of recurrence equations (of the form T(n) = aT(n/b) + f(n)).  This is more advanced and is often covered in subsequent modules.

*   **Solving Recurrence Equations using Iteration (Expansion):**

    *   **Example 1: Factorial Function (Recurrence: T(n) = T(n-1) + O(1), T(0) = O(1))**
        Let's assume `T(0) = c` and `T(n) = T(n-1) + d`.  Where `c` and `d` are constants.

        1.  `T(n) = T(n-1) + d`
        2.  `T(n) = (T(n-2) + d) + d  = T(n-2) + 2d`
        3.  `T(n) = (T(n-3) + d) + 2d  = T(n-3) + 3d`
        4.  ... Pattern Emerging ...
        5.  `T(n) = T(n-k) + kd`

        When `k = n`, we reach the base case:  `T(n) = T(0) + nd = c + nd`.

        Therefore, `T(n) = O(n)`.  The factorial function has a linear time complexity.

    *   **Example 2: Binary Search (Recurrence: T(n) = T(n/2) + O(1), T(1) = O(1))**
        Let's assume `T(1) = c` and `T(n) = T(n/2) + d`.  Where `c` and `d` are constants.  For simplicity, assume `n` is a power of 2 (i.e., n = 2<sup>k</sup>).

        1.  `T(n) = T(n/2) + d`
        2.  `T(n) = (T(n/4) + d) + d = T(n/4) + 2d`
        3.  `T(n) = (T(n/8) + d) + 2d = T(n/8) + 3d`
        4.  ... Pattern Emerging ...
        5.  `T(n) = T(n/2<sup>k</sup>) + kd`

        We stop when `n/2<sup>k</sup> = 1`.  This means `n = 2<sup>k</sup>`, so `k = log<sub>2</sub>(n)`.

        Substituting `k = log<sub>2</sub>(n)`:  `T(n) = T(1) + log<sub>2</sub>(n) * d = c + d * log<sub>2</sub>(n)`.

        Therefore, `T(n) = O(log n)`.  Binary search has logarithmic time complexity.

---

**5. Importance of Base Cases**

*   **Termination:** Base cases are *essential* for preventing infinite recursion.  Without a properly defined base case, the recursive function will call itself indefinitely, leading to a stack overflow error.
*   **Correctness:**  Base cases must return the correct value for the simplest possible input. This ensures the entire recursive process produces the correct result.

*   **Example: Missing Base Case (Leads to Stack Overflow)**

    ```python
    def incorrect_factorial(n):
        """Missing base case - will cause a stack overflow."""
        return n * incorrect_factorial(n-1)  # No base case!
    ```

---

**Practice Questions/Exercises:**

1.  **Write the recurrence equation for the following recursive function:**

    ```python
    def mystery_function(n):
        if n <= 1:
            return 1
        else:
            for i in range(n):
                print(i)  # O(n) inside the recursive step
            return mystery_function(n-1) + mystery_function(n-1)
    ```

    *   **Answer:**

        ```
        T(n) =  {
                O(1)          if n <= 1
                2T(n-1) + O(n)  if n > 1
               }
        ```

2.  **Consider the following recursive function. Write down the recurrence relation for its time complexity and solve it using the iteration method.**

    ```python
    def recursive_sum(arr, n):
        """Calculates the sum of elements in an array recursively."""
        if n <= 0:
            return 0
        else:
            return recursive_sum(arr, n-1) + arr[n-1]
    ```

    *   **Answer:**

        *   **Recurrence Relation:**
             ```
             T(n) =  {
                     O(1)         if n <= 0
                     T(n-1) + O(1)  if n > 0
                    }
             ```

        *   **Solution (Iteration Method):**  Similar to the factorial example, this also results in `T(n) = O(n)`.

3.  **What happens if a recursive function does not have a base case?**

    *   **Answer:** The function will continue calling itself indefinitely, leading to a stack overflow error.  The program will crash.

---

**Important Points to Remember:**

*   **Base cases are crucial for termination and correctness.**
*   **Recurrence equations are a powerful tool for analyzing the time complexity of recursive algorithms.**
*   **The iteration method provides a way to solve simple recurrence equations.**
*   **Be mindful of the overhead associated with recursion (function calls, stack management).**
*   **Mastering recurrence equations is fundamental to understanding algorithm analysis.**
