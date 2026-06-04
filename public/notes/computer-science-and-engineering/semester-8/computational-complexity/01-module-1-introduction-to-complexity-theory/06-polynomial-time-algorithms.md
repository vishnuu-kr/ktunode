---
title: "Polynomial-time algorithms"
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 1: Introduction to Complexity Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca0c"
status: "completed"
scrapedAt: "2026-05-20T17:23:49.423Z"
---
# COMPUTATIONAL COMPLEXITY

## Module 1: Introduction to Complexity Theory

### Topic: Polynomial-time Algorithms

---

### Learning Outcomes:

*   **Understand the concept of efficiency in algorithms and its importance in complexity theory.**
*   **Define what a polynomial-time algorithm is and its significance.**
*   **Distinguish between polynomial-time and non-polynomial-time (exponential-time) algorithms.**
*   **Analyze the time complexity of simple algorithms and express it using Big O notation.**
*   **Explain the role of input size in determining an algorithm's running time.**
*   **Understand the concept of a "tractable" problem and its relationship to polynomial-time algorithms.**

---

### 1. Efficiency of Algorithms

*   **Why is efficiency important?**
    *   As problems and input sizes grow, inefficient algorithms become computationally infeasible.
    *   We need algorithms that can solve problems within a reasonable amount of time, even for large inputs.
    *   Complexity theory focuses on classifying problems based on the inherent difficulty of solving them, and algorithm efficiency is a key measure of this difficulty.

*   **What determines efficiency?**
    *   **Running Time:** The number of basic operations an algorithm performs as a function of the input size.
    *   **Space Complexity:** The amount of memory an algorithm uses as a function of the input size.
    *   **Focus of this module:** Primarily **running time**.

---

### 2. Input Size and Running Time

*   **Input Size (n):** The number of elements or bits required to represent the input to an algorithm.
    *   **Example:** For a list of numbers, the input size is the number of elements in the list.
    *   **Example:** For a graph, the input size can be the number of vertices ($|V|$) and edges ($|E|$).
    *   **Example:** For a binary number, the input size is the number of bits.

*   **Running Time Function:** A function that maps the input size ($n$) to the maximum number of operations performed by the algorithm. We denote this as $T(n)$.

*   **Worst-Case Analysis:** We are typically interested in the *worst-case* running time, which is the maximum number of operations the algorithm might take for any input of a given size $n$. This provides an upper bound on performance.

---

### 3. Big O Notation

*   **Purpose:** A mathematical notation to describe the asymptotic behavior of a function, particularly for large input sizes. It provides a way to express the growth rate of an algorithm's running time.

*   **Definition:** We say $T(n) = O(f(n))$ if there exist positive constants $c$ and $n_0$ such that $T(n) \le c \cdot f(n)$ for all $n \ge n_0$.

*   **Key Ideas:**
    *   Ignores constant factors: $O(2n)$ is the same as $O(n)$.
    *   Ignores lower-order terms: $O(n^2 + n)$ is the same as $O(n^2)$.
    *   Focuses on the dominant term: Describes how the running time grows as $n$ gets very large.

*   **Common Big O Classes (from fastest growing to slowest growing):**
    *   $O(1)$: Constant time
    *   $O(\log n)$: Logarithmic time
    *   $O(n)$: Linear time
    *   $O(n \log n)$: Log-linear time
    *   $O(n^2)$: Quadratic time
    *   $O(n^3)$: Cubic time
    *   $O(2^n)$: Exponential time
    *   $O(n!)$: Factorial time

*   **Example Analysis:**

    *   **Algorithm: Finding the maximum element in an array.**
        ```
        function findMax(arr):
            max_val = arr[0]
            for i from 1 to arr.length - 1:
                if arr[i] > max_val:
                    max_val = arr[i]
            return max_val
        ```
        *   **Input Size:** $n = \text{arr.length}$
        *   **Operations:**
            *   Initialization: 1 operation
            *   Loop: Iterates $n-1$ times.
            *   Inside loop: Comparison (1 operation), potential assignment (1 operation).
        *   **Total Operations (roughly):** $1 + (n-1) \times (\text{constant operations})$
        *   **Big O:** $O(n)$ (Linear time)

    *   **Algorithm: Checking if an element exists in a sorted array (Binary Search).**
        ```
        function binarySearch(arr, target):
            low = 0
            high = arr.length - 1
            while low <= high:
                mid = floor((low + high) / 2)
                if arr[mid] == target:
                    return true
                elif arr[mid] < target:
                    low = mid + 1
                else:
                    high = mid - 1
            return false
        ```
        *   **Input Size:** $n = \text{arr.length}$
        *   **Operations:** In each step of the `while` loop, the search space is halved. This is characteristic of logarithmic behavior.
        *   **Big O:** $O(\log n)$ (Logarithmic time)

    *   **Algorithm: Bubble Sort (simple implementation).**
        ```
        function bubbleSort(arr):
            n = arr.length
            for i from 0 to n - 2:
                for j from 0 to n - 2 - i:
                    if arr[j] > arr[j+1]:
                        swap(arr[j], arr[j+1])
        ```
        *   **Input Size:** $n = \text{arr.length}$
        *   **Operations:**
            *   Outer loop: Iterates $n-1$ times.
            *   Inner loop: Iterates approximately $n-1, n-2, \dots, 1$ times.
            *   Total comparisons/swaps: $\sum_{k=1}^{n-1} k = \frac{(n-1)n}{2} \approx \frac{n^2}{2}$
        *   **Big O:** $O(n^2)$ (Quadratic time)

---

### 4. Polynomial-time Algorithms

*   **Definition:** An algorithm is considered a **polynomial-time algorithm** if its running time is bounded by a polynomial function of the input size $n$.

*   **Formal Definition:** An algorithm has polynomial time complexity if its worst-case running time $T(n)$ is $O(n^k)$ for some constant $k \ge 0$.

*   **Significance: Tractability**
    *   Polynomial-time algorithms are generally considered **tractable** or **efficient**.
    *   This is because their running time grows "reasonably" with the input size. If we double the input size, the running time might increase by a factor of $2^k$, which is still manageable.
    *   Problems that can be solved by polynomial-time algorithms are often referred to as **P problems**.

*   **Examples of Polynomial-time Algorithms:**
    *   Searching (linear search $O(n)$, binary search $O(\log n)$)
    *   Sorting (bubble sort $O(n^2)$, merge sort $O(n \log n)$, quicksort $O(n^2)$ worst-case, $O(n \log n)$ average-case)
    *   Finding the shortest path in a graph (e.g., Dijkstra's algorithm $O(E \log V)$ or $O(E + V \log V)$ depending on implementation)
    *   Matrix multiplication ($O(n^3)$ for standard algorithm, faster algorithms exist)

---

### 5. Non-Polynomial-time (Exponential-time) Algorithms

*   **Definition:** An algorithm is considered **non-polynomial-time** or **exponential-time** if its worst-case running time is bounded by an exponential function of the input size, or worse.

*   **Formal Definition:** An algorithm is not polynomial-time if its running time $T(n)$ is *not* $O(n^k)$ for any constant $k$. This often means $T(n)$ is of the form $O(c^n)$ for some constant $c > 1$, or $O(n!)$, etc.

*   **Significance: Intractability**
    *   Exponential-time algorithms are considered **intractable** or **inefficient** for large input sizes.
    *   If we double the input size $n$, the running time can increase by a factor of $2^n$ (or $c^n$), which becomes prohibitively large very quickly.
    *   For example, if an algorithm takes $O(2^n)$ time, and $n=10$, it might take $1024$ operations. If $n=20$, it takes over a million operations. If $n=40$, it's over a trillion. For $n=100$, it's astronomical.

*   **Examples of Exponential-time Algorithms:**
    *   **Brute-force search for the Traveling Salesperson Problem (TSP):** Trying all possible permutations of cities. The input size is the number of cities $n$. The number of permutations is $n!$. The complexity is $O(n!)$.
    *   **Brute-force search for the Subset Sum Problem:** Trying all possible subsets of numbers. For a set of $n$ numbers, there are $2^n$ subsets. The complexity is $O(2^n)$.
    *   **Many naive recursive algorithms** that recompute the same subproblems repeatedly without memoization.

---

### 6. Tractable vs. Intractable Problems

*   **Tractable Problems:** Problems that can be solved by a polynomial-time algorithm.
*   **Intractable Problems:** Problems that are believed to require exponential time (or worse) to solve for *any* algorithm.

*   **The $P$ vs. $NP$ Question:**
    *   A fundamental open question in computer science is whether $P = NP$.
    *   **P:** The class of decision problems solvable in polynomial time.
    *   **NP:** The class of decision problems whose solutions can be *verified* in polynomial time.
    *   Most computer scientists believe $P \ne NP$, meaning there are problems whose solutions can be easily verified but are very hard to find. The problems that are hard to find solutions for are often in a class called NP-hard.

---

### Key Points to Remember:

*   **Efficiency matters:** Especially as input sizes grow.
*   **Big O notation** describes the growth rate of running time.
*   **Polynomial-time algorithms ($O(n^k)$)** are generally considered efficient and **tractable**.
*   **Exponential-time algorithms ($O(c^n)$ or $O(n!)$)** are generally considered inefficient and **intractable** for large inputs.
*   The distinction between polynomial and exponential time is a cornerstone of complexity theory and helps us understand the inherent difficulty of computational problems.

---

### Practice Questions:

1.  **What is the main difference between a polynomial-time algorithm and an exponential-time algorithm in terms of their efficiency as the input size grows?**
2.  **If an algorithm has a running time of $O(n^3)$, is it a polynomial-time algorithm? Explain why or why not.**
3.  **Analyze the time complexity of the following Python code snippet using Big O notation:**
    ```python
    def print_pairs(items):
        for i in range(len(items)):
            for j in range(len(items)):
                print(items[i], items[j])
    ```
    Assume `len(items)` is $n$.
4.  **Consider an algorithm that solves a problem in $O(2^n)$ time. If you increase the input size from $n=20$ to $n=21$, by approximately what factor does the running time increase?**
5.  **Explain the concept of "tractability" in the context of algorithms and problem-solving.**

---

### Answers to Practice Questions:

1.  **Answer:** A polynomial-time algorithm's running time grows as a power of the input size ($n^k$), which is relatively slow for large $n$. An exponential-time algorithm's running time grows as a base raised to the power of the input size ($c^n$) or faster (like $n!$), which grows extremely rapidly and becomes impractical for even moderately large inputs.

2.  **Answer:** Yes, it is a polynomial-time algorithm. The running time is $O(n^3)$, which is a polynomial of degree 3 in the input size $n$. The exponent (3) is a constant, which is the defining characteristic of polynomial time complexity.

3.  **Answer:**
    *   The outer loop iterates $n$ times (where $n = \text{len(items)}$).
    *   The inner loop also iterates $n$ times for each iteration of the outer loop.
    *   Inside the inner loop, there's a constant number of operations (printing).
    *   The total number of operations is approximately $n \times n = n^2$.
    *   Therefore, the time complexity is $O(n^2)$.

4.  **Answer:** The running time increases from $O(2^{20})$ to $O(2^{21})$. The factor of increase is $\frac{2^{21}}{2^{20}} = 2^{21-20} = 2^1 = 2$. So, the running time approximately doubles.

5.  **Answer:** Tractability refers to the ability of a problem to be solved by an algorithm within a "reasonable" amount of time. In computational complexity theory, this "reasonable" amount of time is generally defined as **polynomial time**. A problem is considered tractable if there exists a polynomial-time algorithm that can solve it. This means that as the input size grows, the time required to solve the problem grows at a manageable pace, making it feasible to solve for large instances. Conversely, problems that are believed to require exponential time or more are considered intractable.
