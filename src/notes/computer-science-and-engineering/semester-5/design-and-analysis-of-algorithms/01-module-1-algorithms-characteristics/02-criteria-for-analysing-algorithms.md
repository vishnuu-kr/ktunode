---
title: "Criteria for Analysing Algorithms"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 1: Algorithms – Characteristics"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b542"
status: "completed"
scrapedAt: "2026-05-20T16:45:27.523Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS: Module 1 - Algorithms – Characteristics
### Topic: Criteria for Analysing Algorithms

**Learning Outcomes:**

*   Understand the different criteria used to analyze algorithms.
*   Differentiate between time complexity and space complexity.
*   Describe asymptotic notations (Big O, Big Omega, Big Theta).
*   Apply asymptotic notations to analyze the time and space complexity of simple algorithms.
*   Understand best-case, worst-case, and average-case analysis.

---

**1. Key Concepts and Definitions:**

*   **Algorithm:** A well-defined sequence of instructions to solve a specific problem.  It takes some input and produces some output.

*   **Analysis of Algorithms:** The process of determining the amount of resources (e.g., time, memory) required to execute an algorithm.  This is crucial for choosing the most efficient algorithm for a given task.

*   **Criteria for Analyzing Algorithms:**
    *   **Time Complexity:** The amount of time required by an algorithm to run as a function of the input size. It's usually expressed in terms of the number of elementary operations performed.
    *   **Space Complexity:** The amount of memory space required by an algorithm to run as a function of the input size.  This includes the space for the input data and any auxiliary space needed by the algorithm during execution.

*   **Asymptotic Notation:** Mathematical notation used to describe the limiting behavior of a function when the argument tends towards a particular value or infinity. In algorithm analysis, it helps us focus on the growth rate of time and space complexity as the input size becomes large.

    *   **Big O Notation (O):**  Describes the *upper bound* (worst-case) of an algorithm's growth rate.  O(g(n)) means the algorithm's time or space complexity grows *no faster* than g(n) as n increases. Formally, there exist positive constants c and n0 such that f(n) <= c * g(n) for all n >= n0.

    *   **Big Omega Notation (Ω):** Describes the *lower bound* (best-case) of an algorithm's growth rate.  Ω(g(n)) means the algorithm's time or space complexity grows *at least as fast* as g(n) as n increases. Formally, there exist positive constants c and n0 such that f(n) >= c * g(n) for all n >= n0.

    *   **Big Theta Notation (Θ):** Describes the *tight bound* (average-case when best and worst cases are similar) of an algorithm's growth rate.  Θ(g(n)) means the algorithm's time or space complexity grows at the *same rate* as g(n) as n increases. Formally, there exist positive constants c1, c2, and n0 such that c1 * g(n) <= f(n) <= c2 * g(n) for all n >= n0.  Θ(g(n)) implies both O(g(n)) and Ω(g(n)).

*   **Best-Case, Worst-Case, and Average-Case Analysis:**

    *   **Best-Case:** The scenario where the algorithm performs the fewest number of operations. This often involves favorable input or early termination.
    *   **Worst-Case:** The scenario where the algorithm performs the most number of operations. This provides an upper bound on the algorithm's performance.  Worst-case analysis is often the most useful in practical applications as it guarantees a performance ceiling.
    *   **Average-Case:** The expected performance of the algorithm over all possible inputs. This often requires assumptions about the distribution of inputs.

**2. Time Complexity vs. Space Complexity:**

| Feature           | Time Complexity                                  | Space Complexity                                   |
|-------------------|---------------------------------------------------|----------------------------------------------------|
| **Definition**    | The amount of time taken to run an algorithm.   | The amount of memory space required by an algorithm. |
| **Units**         | Number of operations (e.g., comparisons, assignments) | Bytes, kilobytes, megabytes, etc.                |
| **Factors**       | Input size, algorithm structure, hardware.        | Input size, data structures, auxiliary variables. |
| **Asymptotic Notation**| O(n), Ω(n), Θ(n)                                 | O(n), Ω(n), Θ(n)                                  |

**Example:**

Consider a simple linear search algorithm (searching for an element in an unsorted array):

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Element found at index i
    return -1 # Element not found
```

*   **Time Complexity:**
    *   **Best-Case:** O(1) (target is the first element)
    *   **Worst-Case:** O(n) (target is the last element or not in the array)
    *   **Average-Case:** O(n) (on average, we might have to search half the array)
*   **Space Complexity:** O(1) (uses a constant amount of extra memory, regardless of input size). The space taken by the variable `i` and the function call stack doesn't grow with the input size.

**3. Asymptotic Notations - Deep Dive with Examples:**

*   **Big O (O):** Focuses on the *upper bound* of the algorithm's growth. It answers the question: "What is the *most* amount of time or space this algorithm could take?"

    *   **Example 1:**  O(1) - Constant Time:  Accessing an element in an array by its index. The time taken is the same regardless of the array size.

    ```python
    arr = [1, 2, 3, 4, 5]
    element = arr[0]  # Accessing the first element takes constant time
    ```

    *   **Example 2:** O(n) - Linear Time:  Iterating through an array once (as in linear search).

    ```python
    def print_elements(arr):
        for element in arr:
            print(element)  # Time increases linearly with array size
    ```

    *   **Example 3:** O(n^2) - Quadratic Time:  Iterating through an array nested within another iteration (e.g., nested loops).

    ```python
    def compare_all_pairs(arr):
        for i in range(len(arr)):
            for j in range(len(arr)):
                if i != j:
                    print(f"Comparing {arr[i]} and {arr[j]}") # Time increases quadratically with array size
    ```

    *   **Example 4:** O(log n) - Logarithmic Time: Binary search.  The problem size is halved in each step.

    ```python
    #Assume sorted array
    def binary_search(arr, target):
        low = 0
        high = len(arr) - 1
        while low <= high:
            mid = (low + high) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        return -1

    ```

    *   **Example 5:** O(n log n) - Linearithmic Time: Merge sort, heap sort.

*   **Big Omega (Ω):** Focuses on the *lower bound* of the algorithm's growth. It answers the question: "What is the *least* amount of time or space this algorithm could take?"

    *   **Example 1:** Ω(1) - Constant Time:  An algorithm takes at least a constant amount of time. All algorithms have a lower bound of Ω(1).

    *   **Example 2:** Ω(n) - Linear Time: In the linear search example, the *best-case* scenario requires only one comparison, but the *minimum* time it will *ever* take is still proportional to the size of the input, so Ω(n) is possible (though technically Ω(1) also holds true as a lower bound, Ω(n) is a tighter, more descriptive lower bound).

    *   **Example 3:**  If an algorithm is O(n^2) (upper bound), it could also be Ω(1) (lower bound) if in some very specific, unlikely input it runs very fast. However,  Ω(n^2) gives more information about how *efficient* the algorithm *can* be.

*   **Big Theta (Θ):** Indicates that the algorithm's time or space complexity grows at the *same rate* as the specified function.  This is the most accurate description of the algorithm's growth rate when it can be determined.

    *   **Example:** If an algorithm always requires exactly n steps to complete, regardless of the input, its time complexity is Θ(n).  This also means it is O(n) and Ω(n).

**Important Notes on Asymptotic Notation:**

*   We drop constant factors and lower-order terms. For example, 3n^2 + 5n + 10 is simplified to O(n^2), Θ(n^2), or Ω(n^2).  We are primarily interested in how the running time *scales* with the input size.
*   We consider the *dominant* term.  For example, n + log n is simplified to O(n) because 'n' grows faster than 'log n'.
*   The base of the logarithm is usually assumed to be 2 unless otherwise specified.
*   When we say "the time complexity of an algorithm is O(n)", we mean that the algorithm's time complexity is *at most* a constant multiple of 'n' for sufficiently large input sizes.  It could be less, but it won't be more.

**4. Best-Case, Worst-Case, and Average-Case Analysis - Examples:**

| Algorithm             | Best-Case                               | Worst-Case                              | Average-Case                             |
|-----------------------|------------------------------------------|-----------------------------------------|------------------------------------------|
| Linear Search         | O(1) (target is the first element)       | O(n) (target is the last or not present) | O(n) (assuming uniform input distribution) |
| Binary Search         | O(1) (target is the middle element)      | O(log n) (target is not present)        | O(log n)                               |
| Bubble Sort           | O(n) (already sorted array)              | O(n^2) (reverse sorted array)           | O(n^2)                                 |
| Insertion Sort        | O(n) (already sorted array)              | O(n^2) (reverse sorted array)           | O(n^2)                                 |
| Merge Sort            | O(n log n)                               | O(n log n)                             | O(n log n)                               |
| Quick Sort            | O(n log n) (good pivot selection)        | O(n^2) (poor pivot selection)           | O(n log n)                               |

**5. Practice Questions/Exercises:**

1.  **What is the time complexity of the following code snippet?**

    ```python
    def example_function(n):
        for i in range(n):
            for j in range(10):
                print(i, j)
    ```

    **Answer:** O(n). The outer loop iterates `n` times, and the inner loop iterates a constant number of times (10).  Therefore, the total number of operations is 10n, which simplifies to O(n).

2.  **What is the space complexity of the following recursive function?**

    ```python
    def recursive_sum(n):
        if n == 0:
            return 0
        else:
            return n + recursive_sum(n-1)
    ```

    **Answer:** O(n). Each recursive call adds a new frame to the call stack.  In the worst case, the recursion depth is `n`, so the space complexity is O(n).

3.  **Given two algorithms, one with time complexity O(n log n) and another with O(n^2), which one is generally preferred for large values of n?**

    **Answer:** O(n log n).  For large values of 'n', n log n grows much slower than n^2. Therefore, the algorithm with O(n log n) time complexity will be more efficient.

4.  **Explain the difference between O(n), Ω(n), and Θ(n). Give an example of an algorithm that has a time complexity of each.**

    **Answer:**
    *   **O(n):** The algorithm's time complexity is *at most* a constant multiple of 'n'. Example: Linear Search (worst case).
    *   **Ω(n):** The algorithm's time complexity is *at least* a constant multiple of 'n'. Example: Linear Search.
    *   **Θ(n):** The algorithm's time complexity is *exactly* a constant multiple of 'n'. Example:  Iterating through an array once where each element needs processing.

5.  **What is the purpose of analyzing algorithms?**

    **Answer:** To understand the resources (time and space) required by the algorithm, allowing us to choose the most efficient algorithm for a specific problem and input size. It helps predict performance and identify potential bottlenecks.

**6. Important Points to Remember:**

*   Algorithm analysis is crucial for choosing the right algorithm for a specific problem.
*   Time complexity and space complexity are two essential criteria for evaluating algorithms.
*   Asymptotic notations (Big O, Big Omega, Big Theta) provide a simplified way to describe the growth rate of algorithms.
*   Worst-case analysis provides a guaranteed upper bound on performance.
*   Understanding best-case, worst-case, and average-case scenarios gives a more complete picture of an algorithm's performance.
*   Drop constant factors and lower-order terms when using asymptotic notation.
*   Focus on the dominant term when determining the growth rate.
