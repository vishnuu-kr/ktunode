---
title: "Asymptotic Notations and their properties"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 1: Algorithms – Characteristics"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b544"
status: "completed"
scrapedAt: "2026-05-20T16:45:28.940Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS: Module 1 - Asymptotic Notations and Their Properties

## Introduction

This document provides comprehensive study notes on Asymptotic Notations and their properties, a fundamental concept in the Design and Analysis of Algorithms. It covers the key definitions, properties, and practical applications of Big O, Big Omega, and Big Theta notations.

## 1. Learning Outcomes

By the end of this module, you will be able to:

*   Understand and define Asymptotic Notations (Big O, Big Omega, Big Theta).
*   Analyze the time and space complexity of algorithms using Asymptotic Notations.
*   Compare the growth rates of different functions.
*   Apply properties of Asymptotic Notations to simplify complexity analysis.
*   Solve problems involving Asymptotic Notations.

## 2. Key Concepts and Definitions

### 2.1 What are Asymptotic Notations?

Asymptotic notations are mathematical tools used to describe the limiting behavior of a function when the argument tends towards a particular value or infinity. In algorithm analysis, they are primarily used to characterize the time and space complexity of algorithms as the input size grows. They provide a way to express the efficiency of an algorithm independent of specific hardware or programming language.

### 2.2 Big O Notation (O) - Upper Bound

*   **Definition:** O(g(n)) represents the set of functions whose growth rate is *less than or equal to* that of g(n) for sufficiently large values of n.
*   **Formal Definition:** A function f(n) is said to be O(g(n)) if there exist positive constants c and n₀ such that 0 ≤ f(n) ≤ c * g(n) for all n ≥ n₀.
*   **Intuition:** Big O provides an *upper bound* on the growth rate of an algorithm's time or space complexity. It represents the *worst-case* scenario.
*   **Example:** If an algorithm has a time complexity of O(n²), it means that the algorithm's runtime will not grow faster than n² as the input size 'n' increases.

    *   f(n) = 3n² + 5n + 2 is O(n²) because we can find c=4 and n₀=2 such that 3n² + 5n + 2 ≤ 4n² for all n ≥ 2.

### 2.3 Big Omega Notation (Ω) - Lower Bound

*   **Definition:** Ω(g(n)) represents the set of functions whose growth rate is *greater than or equal to* that of g(n) for sufficiently large values of n.
*   **Formal Definition:** A function f(n) is said to be Ω(g(n)) if there exist positive constants c and n₀ such that 0 ≤ c * g(n) ≤ f(n) for all n ≥ n₀.
*   **Intuition:** Big Omega provides a *lower bound* on the growth rate of an algorithm's time or space complexity. It represents the *best-case* scenario, or the minimum amount of resources the algorithm will use.
*   **Example:** If an algorithm has a time complexity of Ω(n), it means that the algorithm's runtime will grow at least as fast as n as the input size 'n' increases.

    *   f(n) = n² is Ω(n) because we can find c=1 and n₀=1 such that 1 * n ≤ n² for all n ≥ 1.

### 2.4 Big Theta Notation (Θ) - Tight Bound

*   **Definition:** Θ(g(n)) represents the set of functions whose growth rate is *equal to* that of g(n) for sufficiently large values of n.
*   **Formal Definition:** A function f(n) is said to be Θ(g(n)) if there exist positive constants c₁, c₂ and n₀ such that 0 ≤ c₁ * g(n) ≤ f(n) ≤ c₂ * g(n) for all n ≥ n₀.
*   **Intuition:** Big Theta provides a *tight bound* on the growth rate of an algorithm's time or space complexity.  It represents the average-case scenario or the typical resource usage.
*   **Example:** If an algorithm has a time complexity of Θ(n log n), it means that the algorithm's runtime will grow at the same rate as n log n as the input size 'n' increases.

    *   f(n) = 2n² + 3n is Θ(n²) because we can find c₁ = 2, c₂ = 5, and n₀ = 1 such that 2n² ≤ 2n² + 3n ≤ 5n² for all n ≥ 1.

### 2.5 Little o Notation (o) - Strict Upper Bound

*   **Definition:** o(g(n)) represents the set of functions whose growth rate is *strictly less than* that of g(n) for sufficiently large values of n.
*   **Formal Definition:** For any positive constant c, there exists a constant n₀ such that 0 ≤ f(n) < c * g(n) for all n ≥ n₀. This is equivalent to lim (n→∞) f(n)/g(n) = 0.
*   **Intuition:** Little o provides a *strict upper bound*, meaning f(n) grows much slower than g(n).
*   **Example:**  n is o(n²) because for any constant c > 0, we can always find an n₀ such that n < c * n² for all n > n₀.

### 2.6 Little omega Notation (ω) - Strict Lower Bound

*   **Definition:** ω(g(n)) represents the set of functions whose growth rate is *strictly greater than* that of g(n) for sufficiently large values of n.
*   **Formal Definition:** For any positive constant c, there exists a constant n₀ such that 0 ≤ c * g(n) < f(n) for all n ≥ n₀. This is equivalent to lim (n→∞) g(n)/f(n) = 0.
*   **Intuition:** Little omega provides a *strict lower bound*, meaning f(n) grows much faster than g(n).
*   **Example:** n² is ω(n) because for any constant c > 0, we can always find an n₀ such that c * n < n² for all n > n₀.

## 3. Properties of Asymptotic Notations

### 3.1 General Properties:

*   **Transitivity:**
    *   If f(n) is O(g(n)) and g(n) is O(h(n)), then f(n) is O(h(n)).  (Same holds for Ω and Θ)
*   **Reflexivity:**
    *   f(n) is O(f(n)).
    *   f(n) is Ω(f(n)).
    *   f(n) is Θ(f(n)).
*   **Symmetry:**
    *   f(n) is Θ(g(n)) if and only if g(n) is Θ(f(n)).
*   **Transpose Symmetry:**
    *   f(n) is O(g(n)) if and only if g(n) is Ω(f(n)).
    *   f(n) is o(g(n)) if and only if g(n) is ω(f(n)).
*   **Addition:**
    *   If f(n) is O(h(n)) and g(n) is O(h(n)), then f(n) + g(n) is O(h(n)).  (Same holds for Ω and Θ)
*   **Multiplication by a constant:**
    *   If f(n) is O(g(n)) then c * f(n) is O(g(n)), where c is any constant. (Same holds for Ω and Θ)

### 3.2 Dominant Terms

*   When analyzing an algorithm's complexity, we typically focus on the *dominant term* in the function representing the algorithm's runtime. The dominant term is the term with the highest growth rate.
*   **Example:** In the function f(n) = 5n³ + 2n² + n, the term 5n³ is the dominant term.  Therefore, f(n) is O(n³), Ω(n³) and Θ(n³).

### 3.3 Common Time Complexities (From fastest to slowest)

*   **O(1):** Constant Time. Example: Accessing an element in an array by index.
*   **O(log n):** Logarithmic Time. Example: Binary search.
*   **O(√n):** Square Root Time.
*   **O(n):** Linear Time. Example: Searching for an element in an unsorted array.
*   **O(n log n):**  Example: Efficient sorting algorithms like Merge Sort and Heap Sort.
*   **O(n²):** Quadratic Time. Example: Bubble Sort, Insertion Sort.
*   **O(n³):** Cubic Time. Example: Matrix multiplication.
*   **O(2ⁿ):** Exponential Time. Example:  Brute-force solution for the Traveling Salesman Problem.
*   **O(n!):** Factorial Time. Example: Generating all permutations of a set.

## 4. Examples

### 4.1 Example 1: Analyzing a simple loop

```python
def example_function(arr):
  """
  This function iterates through an array and prints each element.
  """
  for i in range(len(arr)):
    print(arr[i])
```

*   **Analysis:** The loop iterates `n` times, where `n` is the length of the array. The `print` statement takes constant time, O(1). Therefore, the overall time complexity is O(n).

### 4.2 Example 2: Nested loops

```python
def example_nested_loops(arr):
  """
  This function iterates through an array twice, using nested loops.
  """
  n = len(arr)
  for i in range(n):
    for j in range(n):
      print(arr[i], arr[j])
```

*   **Analysis:** The outer loop iterates `n` times, and the inner loop iterates `n` times for each iteration of the outer loop.  The `print` statement takes constant time, O(1). Therefore, the overall time complexity is O(n * n) = O(n²).

### 4.3 Example 3: Binary Search

```python
def binary_search(arr, target):
  """
  Performs a binary search on a sorted array.
  """
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
  return -1 # Target not found
```

*   **Analysis:** Binary search repeatedly divides the search interval in half. In the worst case, it takes log₂n steps to find the target element or determine that it's not present. Therefore, the time complexity is O(log n). The space complexity is O(1) because it uses a constant amount of extra memory.

## 5. Practice Questions & Exercises

**Question 1:** Determine the Big O notation for the following function:

```python
def mystery_function(n):
    for i in range(n):
        for j in range(n*n):
            print(i,j)
```

**Answer:** O(n³) because the outer loop runs `n` times and the inner loop runs `n*n` (or n²) times. Therefore the total complexity is n * n² = n³.

**Question 2:**  Order the following functions by their growth rate from smallest to largest:  n, log n, n², 2ⁿ, √n, n log n, 1, n!

**Answer:** 1, log n, √n, n, n log n, n², 2ⁿ, n!

**Question 3:** What is the Big Theta notation for the following function:

```python
def another_mystery_function(n):
  sum = 0
  for i in range(n):
    sum += i
  return sum
```

**Answer:** Θ(n) because the loop runs `n` times, and each operation inside the loop takes constant time.

**Question 4:** True or False: If an algorithm has a time complexity of O(n²), it is guaranteed to take longer than an algorithm with a time complexity of O(n) for all input sizes.

**Answer:** False. Big O notation describes the *asymptotic* behavior for *sufficiently large* input sizes.  For small input sizes, the algorithm with O(n²) complexity might be faster due to a smaller constant factor.

**Question 5:** Is f(n) = n² + 10n a member of O(n³)?  Is it a member of O(n²)?

**Answer:** Yes, f(n) is O(n³).  Since n² + 10n ≤ n³ for sufficiently large n.  Yes, it is also O(n²).  Since n² + 10n ≤ 11n² for n ≥ 1, f(n) is O(n²). While O(n²) is more *precise*, O(n³) is still technically correct as it describes an *upper bound*.

## 6. Important Points to Remember

*   Asymptotic notations describe the growth rate of an algorithm's time or space complexity as the input size increases.
*   Big O provides an upper bound (worst-case), Big Omega provides a lower bound (best-case), and Big Theta provides a tight bound (average-case).
*   Focus on the dominant term when determining the asymptotic complexity.
*   Constants and lower-order terms are usually ignored in asymptotic analysis.
*   Understanding and applying the properties of asymptotic notations is crucial for simplifying complexity analysis.
*   Asymptotic notation provides a powerful tool for comparing the efficiency of different algorithms and choosing the best one for a given task.

These notes should provide a comprehensive understanding of asymptotic notations and their properties. Good luck with your studies!
