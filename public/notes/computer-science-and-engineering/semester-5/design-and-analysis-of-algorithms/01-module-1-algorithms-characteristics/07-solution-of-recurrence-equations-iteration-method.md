---
title: "Solution of Recurrence Equations : Iteration Method"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 1: Algorithms – Characteristics"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b547"
status: "completed"
scrapedAt: "2026-05-20T16:45:31.069Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS: Module 1 - Algorithms – Characteristics

## Topic: Solution of Recurrence Equations: Iteration Method

**Description:** Understanding and applying the Iteration Method to solve recurrence equations, a crucial skill for analyzing the time complexity of algorithms.

**Learning Outcomes:**

*   Understand the concept of recurrence equations.
*   Learn the Iteration Method for solving recurrence equations.
*   Apply the Iteration Method to solve different types of recurrence equations.
*   Determine the time complexity of algorithms using recurrence equations solved by the Iteration Method.

---

### 1. Introduction to Recurrence Equations

*   **Definition:** A recurrence equation (or recurrence relation) is an equation that defines a sequence recursively - each term of the sequence is defined as a function of the preceding terms.
*   **Purpose:** Recurrence equations are used to describe the runtime of recursive algorithms or divide-and-conquer algorithms.
*   **Example:** `T(n) = 2T(n/2) + n`  (Mergesort Runtime).  `T(n)` represents the time taken for an input of size `n`, expressed in terms of a smaller subproblem `T(n/2)` and some additional work `n`.
*   **Base Case:** A recurrence equation must have a base case (or termination condition).  This defines the value of `T(n)` for a small `n` where the recursion stops.  Example: `T(1) = c` (where `c` is a constant).

### 2. The Iteration Method (Substitution Method)

*   **Concept:** The Iteration Method involves repeatedly expanding (or unrolling) the recurrence equation until a pattern emerges that allows you to express `T(n)` as a function of `n` and the base case.  Essentially, you're substituting the recurrence relation into itself multiple times.

*   **Steps:**

    1.  **Expand the Recurrence:**  Substitute the recurrence equation into itself one or more times, expressing `T(n)` in terms of `T(n/k)` for some `k`.
    2.  **Identify a Pattern:**  Observe the pattern that develops after several iterations.  This pattern will relate `T(n)` to `T(n/k^i)` for some `i`.
    3.  **Express T(n) in terms of the Base Case:**  Continue iterating until you reach the base case, i.e., `T(n/k^i) = T(base_case_size)`.  Solve for `i` in terms of `n` to determine how many iterations are required.
    4.  **Substitute and Simplify:** Substitute the value of `i` back into the expression for `T(n)` and simplify to obtain a closed-form solution (an expression for `T(n)` without any further recursion).
    5.  **Determine Time Complexity:**  Analyze the closed-form solution to determine the time complexity of the algorithm using Big-O notation.

### 3. Examples of Iteration Method

#### Example 1: `T(n) = T(n-1) + c`,  `T(1) = c`

*   **Expand:**
    *   `T(n) = T(n-1) + c`
    *   `T(n) = (T(n-2) + c) + c = T(n-2) + 2c`
    *   `T(n) = (T(n-3) + c) + 2c = T(n-3) + 3c`

*   **Pattern:** `T(n) = T(n-i) + ic`

*   **Base Case:** `T(n-i) = T(1)` when `n-i = 1`.  Therefore, `i = n-1`.

*   **Substitute:** `T(n) = T(1) + (n-1)c = c + (n-1)c = nc`

*   **Time Complexity:** `O(n)`

#### Example 2: `T(n) = T(n/2) + c`, `T(1) = c`

*   **Expand:**
    *   `T(n) = T(n/2) + c`
    *   `T(n) = (T(n/4) + c) + c = T(n/4) + 2c`
    *   `T(n) = (T(n/8) + c) + 2c = T(n/8) + 3c`

*   **Pattern:** `T(n) = T(n/(2^i)) + ic`

*   **Base Case:** `T(n/(2^i)) = T(1)` when `n/(2^i) = 1`.  Therefore, `2^i = n` and `i = log2(n)`.

*   **Substitute:** `T(n) = T(1) + log2(n) * c = c + c * log2(n)`

*   **Time Complexity:** `O(log n)`

#### Example 3: `T(n) = 2T(n/2) + n`, `T(1) = 1` (Mergesort)

*   **Expand:**
    *   `T(n) = 2T(n/2) + n`
    *   `T(n) = 2(2T(n/4) + n/2) + n = 4T(n/4) + n + n = 4T(n/4) + 2n`
    *   `T(n) = 4(2T(n/8) + n/4) + 2n = 8T(n/8) + n + 2n = 8T(n/8) + 3n`

*   **Pattern:** `T(n) = 2^i * T(n/(2^i)) + i * n`

*   **Base Case:** `T(n/(2^i)) = T(1)` when `n/(2^i) = 1`.  Therefore, `2^i = n` and `i = log2(n)`.

*   **Substitute:** `T(n) = 2^(log2(n)) * T(1) + log2(n) * n = n * 1 + n * log2(n) = n + n log2(n)`

*   **Time Complexity:** `O(n log n)`

### 4. Important Points to Remember

*   **Base Case is Crucial:**  Always include a base case in your recurrence equation.  Without it, the recursion will continue indefinitely.
*   **Pattern Recognition:**  Carefully observe the pattern that emerges during the iterations. Incorrect pattern identification leads to incorrect solutions.
*   **Logarithm Base:** Usually, when dealing with divide-and-conquer algorithms, the base of the logarithm is 2.
*   **Simplification:**  After substitution, carefully simplify the expression to obtain the closed-form solution.
*   **Big-O Notation:** Remember that Big-O notation focuses on the dominant term and ignores constant factors and lower-order terms.
*   **Domain of 'n':**  Pay attention to the domain of 'n'. Sometimes 'n' is assumed to be a power of 2 for simplicity.  Other times you might need to handle cases where 'n' is not a power of 2 (e.g., using floors or ceilings).
* **Limitations:** The iteration method can be cumbersome for complex recurrence relations. Master Theorem or substitution methods may be preferable in those cases.

### 5. Practice Questions and Exercises

1.  **Solve the following recurrence equation using the Iteration Method:** `T(n) = T(n-2) + 1`, `T(0) = 1`, `T(1) = 1`

2.  **Solve the following recurrence equation using the Iteration Method:** `T(n) = 3T(n/3) + n`, `T(1) = 1`

3.  **Solve the following recurrence equation using the Iteration Method:** `T(n) = 4T(n/2) + n^2`, `T(1) = 1`

4. An algorithm divides the problem into 4 subproblems each of size n/4 and takes n steps. Write the recurrence and solve it using iteration method

---

### 6. Answers to Practice Questions

**1.  `T(n) = T(n-2) + 1`, `T(0) = 1`, `T(1) = 1`**

*   **Expand:**
    *   `T(n) = T(n-2) + 1`
    *   `T(n) = (T(n-4) + 1) + 1 = T(n-4) + 2`
    *   `T(n) = (T(n-6) + 1) + 2 = T(n-6) + 3`

*   **Pattern:** `T(n) = T(n-2i) + i`

*   **Base Case:**
    *   If n is even:  `T(n-2i) = T(0)` when `n-2i = 0`.  Therefore, `i = n/2`.
    *   If n is odd: `T(n-2i) = T(1)` when `n-2i = 1`. Therefore, `i = (n-1)/2`.

*   **Substitute:**
    *   If n is even: `T(n) = T(0) + n/2 = 1 + n/2`
    *   If n is odd: `T(n) = T(1) + (n-1)/2 = 1 + (n-1)/2 = (n+1)/2`

*   **Time Complexity:** `O(n)`

**2.  `T(n) = 3T(n/3) + n`, `T(1) = 1`**

*   **Expand:**
    *   `T(n) = 3T(n/3) + n`
    *   `T(n) = 3(3T(n/9) + n/3) + n = 9T(n/9) + n + n = 9T(n/9) + 2n`
    *   `T(n) = 9(3T(n/27) + n/9) + 2n = 27T(n/27) + n + 2n = 27T(n/27) + 3n`

*   **Pattern:** `T(n) = 3^i * T(n/(3^i)) + i * n`

*   **Base Case:** `T(n/(3^i)) = T(1)` when `n/(3^i) = 1`.  Therefore, `3^i = n` and `i = log3(n)`.

*   **Substitute:** `T(n) = 3^(log3(n)) * T(1) + log3(n) * n = n * 1 + n * log3(n) = n + n log3(n)`

*   **Time Complexity:** `O(n log n)`

**3.  `T(n) = 4T(n/2) + n^2`, `T(1) = 1`**

*   **Expand:**
    *   `T(n) = 4T(n/2) + n^2`
    *   `T(n) = 4(4T(n/4) + (n/2)^2) + n^2 = 16T(n/4) + n^2 + n^2 = 16T(n/4) + 2n^2`
    *   `T(n) = 16(4T(n/8) + (n/4)^2) + 2n^2 = 64T(n/8) + n^2 + 2n^2 = 64T(n/8) + 3n^2`

*   **Pattern:** `T(n) = 4^i * T(n/(2^i)) + i * n^2`

*   **Base Case:** `T(n/(2^i)) = T(1)` when `n/(2^i) = 1`.  Therefore, `2^i = n` and `i = log2(n)`.

*   **Substitute:** `T(n) = 4^(log2(n)) * T(1) + log2(n) * n^2 = n^2 * T(1) + n^2 * log2(n) = n^2 + n^2 * log2(n)`

*   **Time Complexity:** `O(n^2 log n)`

**4. An algorithm divides the problem into 4 subproblems each of size n/4 and takes n steps. Write the recurrence and solve it using iteration method**

* **Recurrence:** `T(n) = 4T(n/4) + n`, `T(1) = 1`

* **Expand:**
    * `T(n) = 4T(n/4) + n`
    * `T(n) = 4(4T(n/16) + n/4) + n = 16T(n/16) + n + n = 16T(n/16) + 2n`
    * `T(n) = 16(4T(n/64) + n/16) + 2n = 64T(n/64) + n + 2n = 64T(n/64) + 3n`

* **Pattern:** `T(n) = 4^i * T(n/(4^i)) + i * n`

* **Base Case:** `T(n/(4^i)) = T(1)` when `n/(4^i) = 1`.  Therefore, `4^i = n` and `i = log4(n)`.

* **Substitute:** `T(n) = 4^(log4(n)) * T(1) + log4(n) * n = n * 1 + n * log4(n) = n + n log4(n)`

* **Time Complexity:** `O(n log n)`
