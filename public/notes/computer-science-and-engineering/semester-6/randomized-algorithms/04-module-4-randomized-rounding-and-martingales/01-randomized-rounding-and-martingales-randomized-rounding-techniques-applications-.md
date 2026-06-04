---
title: "Randomized Rounding and Martingales - Randomized rounding techniques, Applications in approximation algorithms, Introduction to martingales, Azuma's inequality."
subject: "RANDOMIZED ALGORITHMS"
module: "Module 4: Randomized Rounding and Martingales "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd60"
status: "completed"
scrapedAt: "2026-05-20T16:57:10.966Z"
---
# Randomized Algorithms: Module 4 - Randomized Rounding and Martingales

## Topic: Randomized Rounding and Martingales

**Description:** This topic explores randomized rounding techniques for solving optimization problems, their applications in approximation algorithms, and introduces the concepts of martingales and Azuma's inequality for analyzing the concentration of random variables.

**Learning Outcomes:**

*   Understand randomized rounding techniques and their applications in converting fractional solutions of Linear Programs (LPs) to integer solutions.
*   Apply randomized rounding to design approximation algorithms for NP-hard optimization problems.
*   Define and understand the properties of martingales.
*   Understand and apply Azuma's inequality to bound the deviation of a martingale from its expected value.

---

## 1. Randomized Rounding Techniques

### 1.1 Introduction

Many optimization problems are NP-hard, making it challenging to find optimal solutions efficiently. One approach to tackle these problems is to relax the integer constraints, solve the relaxed problem (often a Linear Program), and then round the fractional solution to an integer solution. Randomized rounding is a technique that uses randomness to perform this rounding, often yielding better approximation guarantees than deterministic rounding.

### 1.2 Basic Idea

1.  **Relaxation:** Formulate the optimization problem as an Integer Program (IP).  Relax the integrality constraints to create a Linear Program (LP).
2.  **LP Solution:** Solve the LP to obtain a fractional solution. Let `x*` denote the optimal solution to the LP.
3.  **Randomized Rounding:** Interpret the fractional values `x*` as probabilities.  Round each variable randomly according to its probability. For example, if `x*_i = 0.6`, then set the corresponding integer variable `X_i` to 1 with probability 0.6 and to 0 with probability 0.4.
4.  **Analysis:** Analyze the approximation ratio and success probability of the resulting algorithm.  Use probabilistic tools like expectation, variance, and concentration inequalities.

### 1.3 Key Concepts

*   **Linear Program (LP):** A mathematical optimization problem with linear constraints and a linear objective function.
*   **Integer Program (IP):** Similar to an LP, but with the added constraint that variables must take integer values.
*   **Approximation Ratio:**  For a minimization problem, it's the ratio of the algorithm's solution value to the optimal solution value. An approximation algorithm with a ratio of `ρ` guarantees a solution at most `ρ` times the optimal.  For a maximization problem, it's the ratio of the optimal value to the algorithm's solution.
*   **Integrality Gap:**  The worst-case ratio between the optimal integer solution and the optimal fractional solution obtained by solving the LP relaxation.

### 1.4 Example: Max-SAT

**Problem:** Given a CNF formula with `m` clauses, find an assignment of variables that satisfies the maximum number of clauses.

**1.  IP Formulation:**

    *   Let `y_i` be a binary variable indicating whether clause `C_i` is satisfied (1 if satisfied, 0 otherwise).
    *   Let `x_j` be a binary variable indicating whether variable `v_j` is true (1 if true, 0 if false).
    *   For each clause `C_i`, let `S+_i` be the set of variables that appear positively in `C_i`, and `S-_i` be the set of variables that appear negatively in `C_i`.

    Maximize: `∑ y_i`

    Subject to:
        `y_i <= ∑_{j ∈ S+_i} x_j + ∑_{j ∈ S-_i} (1 - x_j)` for all clauses `C_i`
        `x_j ∈ {0, 1}` for all variables `v_j`
        `y_i ∈ {0, 1}` for all clauses `C_i`

**2.  LP Relaxation:**

    Replace the integrality constraints with:

        `0 <= x_j <= 1` for all variables `v_j`
        `0 <= y_i <= 1` for all clauses `C_i`

**3.  Randomized Rounding:**

    *   Solve the LP relaxation to obtain fractional solutions `x*_j` and `y*_i`.
    *   For each variable `v_j`, set it to true with probability `x*_j` and to false with probability `1 - x*_j`.

**4.  Analysis:**

    *   Let `Z` be the number of satisfied clauses.
    *   Let `Z_i` be an indicator variable that is 1 if clause `C_i` is satisfied and 0 otherwise.
    *   `E[Z] = ∑ E[Z_i] = ∑ Pr[C_i is satisfied]`

    Consider a clause `C_i` with `k` literals. The probability that it is NOT satisfied is:

        `Pr[C_i is not satisfied] = ∏_{j ∈ S+_i} (1 - x*_j) ∏_{j ∈ S-_i} x*_j`

    Using the fact that `1 - x <= e^(-x)` and the LP constraint, it can be shown that the expected number of satisfied clauses is at least `(1 - 1/e)` times the optimal LP value, providing a `(1 - 1/e) ≈ 0.632` approximation.

## 2. Applications in Approximation Algorithms

Randomized rounding is a powerful tool for designing approximation algorithms for NP-hard problems.  Here are some applications:

*   **Set Cover:** Randomized rounding can be used to obtain a logarithmic approximation ratio.
*   **Maximum Cut (Max-Cut):**  Goemans-Williamson algorithm uses semidefinite programming (SDP) relaxation followed by randomized rounding to achieve a `0.878` approximation ratio.
*   **Multicut:**  Randomized rounding can be used to approximate the minimum multicut problem.

**Example:  Set Cover**

**Problem:** Given a universe `U` and a collection of sets `S = {S_1, S_2, ..., S_m}` where each `S_i` is a subset of `U`, find a minimum-size subcollection of `S` whose union is `U`.

**1.  IP Formulation:**

    *   `x_i = 1` if set `S_i` is in the cover, 0 otherwise.

    Minimize: `∑ x_i`

    Subject to:
        `∑_{i: e ∈ S_i} x_i >= 1` for all elements `e ∈ U`
        `x_i ∈ {0, 1}` for all `i`

**2. LP Relaxation:**

    Replace `x_i ∈ {0, 1}` with `0 <= x_i <= 1`.

**3. Randomized Rounding:**

    *   Solve the LP to get fractional solutions `x*_i`.
    *   For each `i`, include set `S_i` in the cover with probability `x*_i`.
    *   Repeat the rounding process `c log n` times, where `n = |U|` and `c` is a constant.  This ensures a high probability that all elements are covered.

**4. Analysis:**  The resulting algorithm achieves a `O(log n)` approximation ratio with high probability.

## 3. Introduction to Martingales

### 3.1 Definition

A **martingale** is a sequence of random variables `X_0, X_1, X_2, ...` with the property that, for all `n >= 0`:

`E[X_{n+1} | X_0, X_1, ..., X_n] = X_n`

In simpler terms, the expected value of the next variable in the sequence, given the history of the sequence up to that point, is equal to the current value.  A martingale represents a "fair game" where, on average, you neither gain nor lose money.

### 3.2 Key Concepts

*   **Filtration:** A sequence of σ-algebras `F_0 ⊆ F_1 ⊆ F_2 ⊆ ...` where each `F_n` represents the information available at time `n`.
*   **Adapted Process:**  A sequence of random variables `X_0, X_1, X_2, ...` is *adapted* to a filtration `F_0, F_1, F_2, ...` if `X_n` is `F_n`-measurable for all `n`. This means that the value of `X_n` is known given the information in `F_n`.
*   **Martingale Difference Sequence:**  The sequence `D_n = X_n - X_{n-1}`. For a martingale, `E[D_n | F_{n-1}] = 0`.

### 3.3 Examples

1.  **Random Walk:**  Let `Y_1, Y_2, ...` be independent random variables with `E[Y_i] = 0`.  Define `X_n = ∑_{i=1}^n Y_i`. Then `X_0, X_1, X_2, ...` is a martingale.
2.  **Doob Martingale:** Let `Y` be a random variable, and let `X_n = E[Y | F_n]` where `F_n` is a filtration. Then `X_0, X_1, X_2, ...` is a martingale. This is a very general construction.

### 3.4 Importance

Martingales are important because they allow us to analyze the behavior of random processes over time.  Azuma's inequality provides a powerful tool for bounding the deviation of a martingale from its initial value.

## 4. Azuma's Inequality

### 4.1 Statement

Let `X_0, X_1, X_2, ...` be a martingale such that `|X_i - X_{i-1}| <= c_i` for all `i = 1, 2, ..., n`, where `c_i` are constants.  Then, for any `λ > 0`:

`Pr[X_n - X_0 >= λ] <= exp(-λ^2 / (2 ∑_{i=1}^n c_i^2))`

`Pr[X_n - X_0 <= -λ] <= exp(-λ^2 / (2 ∑_{i=1}^n c_i^2))`

Combining these:

`Pr[|X_n - X_0| >= λ] <= 2 exp(-λ^2 / (2 ∑_{i=1}^n c_i^2))`

### 4.2 Interpretation

Azuma's inequality provides an exponential bound on the probability that a martingale deviates significantly from its starting value. The bound depends on the sum of the squares of the maximum changes at each step.  Smaller changes lead to a tighter bound and less deviation.

### 4.3 Application Example:  Balls and Bins (Coupon Collector with Replacement)

Suppose we throw `m` balls randomly into `n` bins.  We want to know how likely it is that some bin has significantly more balls than the average (`m/n`).

We can use Azuma's inequality to analyze this. Let's define a martingale to track the number of balls in a specific bin.  (This is a simplified example to illustrate the use of Azuma's inequality; there are more precise ways to analyze balls and bins).

1.  **Define the Martingale:** Let `X_i` be the expected number of balls in the first bin after the first `i` balls have been thrown.  `X_0 = m/n`. We aren't forming a true martingale here using filtration, but we can use Azuma-like arguments since the conditional expectation of the bins filling stays constant, and this simplified analysis serves as an illustration.

2.  **Bound the Difference:** Each time a ball is thrown, the expected number of balls in the first bin changes by at most 1.  So, `|X_i - X_{i-1}| <= 1`.

3.  **Apply Azuma's Inequality:** We want to bound the probability that the number of balls in the first bin deviates significantly from `m/n`.  Let's say we want to bound the probability that the number of balls in the first bin is greater than `m/n + λ` after all `m` balls have been thrown.

    Using Azuma's inequality:

    `Pr[X_m - X_0 >= λ] <= exp(-λ^2 / (2m))`

    This provides a bound on the probability of a significant deviation.

### 4.4  Important Points

*   Azuma's inequality is applicable to martingales with bounded differences.
*   It provides a tail bound, giving the probability of deviations from the expected value.
*   The bound is exponential, making it very useful for showing concentration around the mean.

---

## Practice Questions/Exercises

**Question 1:**

Consider a randomized algorithm for the Vertex Cover problem that works as follows:

1.  Solve the LP relaxation of the standard IP formulation for Vertex Cover.
2.  For each vertex `v`, include it in the vertex cover with probability `min(2x*_v, 1)`, where `x*_v` is the fractional value of the variable corresponding to vertex `v` in the LP solution.

What is the approximation ratio of this algorithm?  Prove your answer.

**Answer:**

The approximation ratio is 2.

**Proof:**

Let `C` be the vertex cover returned by the algorithm, and let `VC*` be the optimal vertex cover.  Let `x*` be the optimal solution to the LP relaxation.

For each vertex `v`, the probability that `v` is included in `C` is `Pr[v ∈ C] = min(2x*_v, 1)`.

The expected size of the vertex cover is:

`E[|C|] = ∑_v Pr[v ∈ C] = ∑_v min(2x*_v, 1)`

Since `x*_v <= 1`, we have `min(2x*_v, 1) <= 2x*_v`.

Therefore, `E[|C|] <= ∑_v 2x*_v = 2 ∑_v x*_v = 2 |x*|`

Since `|x*| <= |VC*|` (the LP relaxation is a lower bound on the optimal integer solution), we have:

`E[|C|] <= 2 |VC*|`

This shows that the expected size of the vertex cover returned by the algorithm is at most twice the size of the optimal vertex cover, giving a 2-approximation ratio.

**Question 2:**

Define a martingale and explain why it is useful in the analysis of randomized algorithms.

**Answer:**

A martingale is a sequence of random variables `X_0, X_1, X_2, ...` such that for all `n >= 0`:

`E[X_{n+1} | X_0, X_1, ..., X_n] = X_n`

In other words, the expected value of the next variable in the sequence, given the history of the sequence up to that point, is equal to the current value.

Martingales are useful in the analysis of randomized algorithms because they allow us to track the evolution of a random process over time. They provide a framework for understanding how the state of the algorithm changes as it makes random choices.  Furthermore, concentration inequalities like Azuma's inequality can be applied to martingales to bound the probability of deviation from the expected behavior.  This is crucial for proving performance guarantees for randomized algorithms.

**Question 3:**

State Azuma's inequality and explain its significance.

**Answer:**

Let `X_0, X_1, X_2, ...` be a martingale such that `|X_i - X_{i-1}| <= c_i` for all `i = 1, 2, ..., n`, where `c_i` are constants. Then, for any `λ > 0`:

`Pr[|X_n - X_0| >= λ] <= 2 exp(-λ^2 / (2 ∑_{i=1}^n c_i^2))`

Significance:

Azuma's inequality is a powerful concentration inequality that provides an exponential bound on the probability that a martingale deviates significantly from its initial value. It is widely used in the analysis of randomized algorithms and probabilistic analysis.  The key features are:

*   **Concentration:** It shows that the martingale's value is likely to stay close to its starting value.
*   **Bounded Differences:** It requires that the differences between successive values of the martingale are bounded.
*   **Exponential Tail:**  The probability of deviation decreases exponentially with the square of the deviation, providing strong guarantees.

**Question 4:**

Give an example of a problem where randomized rounding can be used to design an approximation algorithm. Describe the basic steps of applying randomized rounding to this problem.

**Answer:**

**Problem:**  Max-Cut

Randomized rounding can be used to design an approximation algorithm for the Max-Cut problem.

**Basic Steps:**

1.  **Semidefinite Programming (SDP) Relaxation:** Formulate the Max-Cut problem as a quadratic program.  Relax the quadratic program to a Semidefinite Program (SDP). The variables in the SDP represent vectors associated with each vertex.
2.  **Solve the SDP:** Solve the SDP to obtain optimal vector solutions.
3.  **Randomized Rounding (Goemans-Williamson):** Generate a random vector `r` from a standard normal distribution. For each vertex `i`, assign it to one side of the cut if the dot product between its vector `v_i` (from the SDP solution) and the random vector `r` is positive, and to the other side otherwise.
4.  **Analysis:**  Show that the expected number of edges crossing the cut is at least `0.878` times the optimal cut size. This gives a `0.878` approximation algorithm.  The approximation factor arises from comparing the expected value of an edge crossing the cut to the SDP value using trigonometric functions.

---

## Important Points to Remember

*   Randomized rounding provides a powerful technique for converting fractional solutions to integer solutions.
*   Linear Programming (LP) relaxation is a key step in randomized rounding.
*   Martingales and Azuma's inequality are important tools for analyzing the concentration of random variables.
*   Azuma's inequality applies to martingales with bounded differences and provides exponential tail bounds.
*   Understanding and choosing the correct martingale is key to applying Azuma's inequality correctly.
*   Randomized rounding and martingales are widely used in the design and analysis of approximation algorithms for NP-hard optimization problems.
