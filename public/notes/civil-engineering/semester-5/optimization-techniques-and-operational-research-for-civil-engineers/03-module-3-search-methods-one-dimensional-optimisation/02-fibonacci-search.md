---
title: "Fibonacci search"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 3: Search Methods: One dimensional optimisation"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fa9"
status: "completed"
scrapedAt: "2026-05-20T18:50:43.495Z"
---
# Module 3: Search Methods: One-Dimensional Optimization

## Topic: Fibonacci Search

### 1. Introduction to Fibonacci Search

Fibonacci search is a technique used to find the minimum (or maximum) of a **unimodal function** within a given interval. It's an efficient method that progressively narrows down the search interval by strategically choosing points based on Fibonacci numbers. It's particularly useful when the function is expensive to evaluate, as it aims to minimize the number of function evaluations.

**Key Concepts:**

*   **Unimodal Function:** A function that has a single minimum or maximum within a given interval. For minimization, it decreases up to the minimum and then increases.
*   **Interval of Uncertainty:** The initial range $[a, b]$ where the minimum is known to exist.
*   **Fibonacci Numbers:** A sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

### 2. Learning Outcomes Covered

This section will cover the following learning outcomes:

*   Understanding the principle of Fibonacci search.
*   Applying Fibonacci search to find the minimum of a unimodal function.
*   Calculating the points for function evaluation in Fibonacci search.
*   Determining the stopping criteria for Fibonacci search.
*   Comparing Fibonacci search with other one-dimensional search methods.

### 3. Principle of Fibonacci Search

The core idea of Fibonacci search is to use Fibonacci numbers to determine the locations of two interior points within the current interval of uncertainty. These points are chosen such that the interval is reduced by a factor related to the Fibonacci sequence in each iteration.

**How it works:**

1.  **Initialization:**
    *   Define the initial interval of uncertainty $[a, b]$.
    *   Determine the desired accuracy (tolerance) $\epsilon$.
    *   Find the smallest Fibonacci number $F_n$ such that $F_n \ge \frac{b-a}{\epsilon}$. This $n$ determines the number of function evaluations required. The total number of evaluations will be $n$.

2.  **Calculating Test Points:**
    *   Let the current interval be $[a_k, b_k]$.
    *   Calculate two
