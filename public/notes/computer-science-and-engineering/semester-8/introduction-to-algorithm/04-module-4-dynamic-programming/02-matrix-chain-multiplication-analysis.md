---
title: "Matrix Chain Multiplication, Analysis"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 4: Dynamic Programming "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbda"
status: "completed"
scrapedAt: "2026-05-20T17:25:20.832Z"
---
# Introduction to Algorithms - Module 4: Dynamic Programming

## Topic: Matrix Chain Multiplication, Analysis

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Understand the problem of matrix chain multiplication.
*   Formulate a recursive solution for the matrix chain multiplication problem.
*   Identify overlapping subproblems and optimal substructure in matrix chain multiplication.
*   Develop a dynamic programming solution for matrix chain multiplication.
*   Analyze the time and space complexity of the dynamic programming solution.
*   Understand how to reconstruct the optimal parenthesization.

---

### 1. The Matrix Chain Multiplication Problem

**Problem Statement:**

Given a sequence of matrices $A_1, A_2, ..., A_n$, where matrix $A_i$ has dimensions $p_{i-1} \times p_i$, we want to compute the product $A_1 A_2 ... A_n$. Matrix multiplication is associative, meaning the order in which we group the matrices for multiplication does not affect the final result. However, the *order* of multiplication (parenthesization) significantly impacts the total number of scalar multiplications required.

The goal is to find the most efficient way to multiply the matrix chain by determining the optimal parenthesization.

**Example:**

Consider a chain of three matrices: $A_1$ ($10 \times 30$), $A_2$ ($30 \times 5$), and $A_3$ ($5 \times 60$).
We can parenthesize this chain in two ways:

1.  **$(A_1 A_2) A_3$**:
    *   Multiply $A_1$ ($10 \times 30$) and $A_2$ ($30 \times 5$): Resulting matrix is $10 \times 5$.
        *   Scalar multiplications: $10 \times 30 \times 5 = 1500$.
    *   Multiply the result ($10 \times 5$) with $A_3$ ($5 \times 60$): Resulting matrix is $10 \times 60$.
        *   Scalar multiplications: $10 \times 5 \times 60 = 3000$.
    *   **Total scalar multiplications: $1500 + 3000 = 4500$.**

2.  **$A_1 (A_2 A_3)$**:
    *   Multiply $A_2$ ($30 \times 5$) and $A_3$ ($5 \times 60$): Resulting matrix is $30 \times 60$.
        *   Scalar multiplications: $30 \times 5 \times 60 = 9000$.
    *   Multiply $A_1$ ($10 \times 30$) with the result ($30 \times 60$): Resulting matrix is $10 \times 60$.
        *   Scalar multiplications: $10 \times 30 \times 60 = 18000$.
    *   **Total scalar multiplications: $9000 + 18000 = 27000$.**

Clearly, the first parenthesization is much more efficient.

---

### 2. Recursive Solution

Let $A_i$ be a matrix with dimensions $p_{i-1} \times p_i$. We want to compute the product $A_i A_{i+1} ... A_j$.
Let $m[i, j]$ be the minimum number of scalar multiplications needed to compute the product $A_i ... A_j$.

**Base Case:**
If $i = j$, the product is just matrix $A_i$. No multiplications are needed.
So, $m[i, i] = 0$.

**Recursive Step:**
To compute $A_i ... A_j$, we need to split the chain at some point $k$, where $i \le k < j$.
The product will be $(A_i ... A_k) (A_{k+1} ... A_j)$.
The cost of this split is:
*   Cost to compute $A_i ... A_k$: $m[i, k]$
*   Cost to compute $A_{k+1} ... A_j$: $m[k+1, j]$
*   Cost to multiply the two resulting matrices:
    *   The first resulting matrix has dimensions $p_{i-1} \times p_k$.
    *   The second resulting matrix has dimensions $p_k \times p_j$.
    *   Cost of multiplication: $p_{i-1} \times p_k \times p_j$.

Therefore, the total cost for a split at $k$ is $m[i, k] + m[k+1, j] + p_{i-1} p_k p_j$.

To find the minimum cost $m[i, j]$, we need to consider all possible split points $k$ from $i$ to $j-1$:

$m[i, j] = \min_{i \le k < j} \{ m[i, k] + m[k+1, j] + p_{i-1} p_k p_j \}$ for $i < j$.

**Full Recursive Formulation:**

```
MATRIX-CHAIN-ORDER(p, i, j)
  if i == j
    return 0
  m[i, j] = infinity
  for k = i to j-1
    q = MATRIX-CHAIN-ORDER(p, i, k) + MATRIX-CHAIN-ORDER(p, k+1, j) + p[i-1]*p[k]*p[j]
    if q < m[i, j]
      m[i, j] = q
  return m[i, j]
```

**Key Observation:** This recursive solution exhibits **overlapping subproblems**. For example, to compute $m[1, 4]$, we might need $m[1, 2]$ and $m[3, 4]$. To compute $m[1, 3]$, we might also need $m[1, 2]$. The subproblem $m[1, 2]$ is computed multiple times. This suggests dynamic programming can be applied.

---

### 3. Identifying Overlapping Subproblems and Optimal Substructure

**Optimal Substructure:**

The matrix chain multiplication problem has optimal substructure. An optimal solution to the problem of computing $A_i ... A_j$ contains within it optimal solutions to subproblems.

If the optimal parenthesization of $A_i ... A_j$ splits the product between $A_k$ and $A_{k+1}$, then the parenthesizations of the subchains $A_i ... A_k$ and $A_{k+1} ... A_j$ within this optimal parenthesization must themselves be optimal for their respective subproblems.

**Overlapping Subproblems:**

As discussed earlier, the naive recursive solution recomputes the solutions to the same subproblems multiple times. This characteristic is a strong indicator that dynamic programming can be used to improve efficiency.

---

### 4. Dynamic Programming Solution (Bottom-Up Approach)

We can use a bottom-up approach to solve the matrix chain multiplication problem. We will fill a table (or two tables) to store the results of subproblems.

**Tables Needed:**

1.  `m[i, j]`: Stores the minimum number of scalar multiplications needed to compute the product $A_i ... A_j$.
2.  `s[i, j]`: Stores the index $k$ that achieves the optimal cost for $m[i, j]$ (i.e., the split point). This table is used to reconstruct the optimal parenthesization.

**Algorithm:**

We need to compute $m[i, j]$ for all $1 \le i \le j \le n$.
The subproblems are solved in increasing order of the "chain length" ($l = j - i + 1$).

*   **Chain Length $l = 1$**:
    *   For $i = 1, ..., n$, $m[i, i] = 0$ (base case).

*   **Chain Length $l = 2$**:
    *   For $i = 1, ..., n-1$, $j = i+1$.
    *   $m[i, i+1] = m[i, i] + m[i+1, i+1] + p_{i-1} p_i p_{i+1}$
    *   $m[i, i+1] = 0 + 0 + p_{i-1} p_i p_{i+1} = p_{i-1} p_i p_{i+1}$.
    *   $s[i, i+1] = i$.

*   **Chain Length $l = 3$**:
    *   For $i = 1, ..., n-2$, $j = i+2$.
    *   $m[i, i+2] = \min \{ m[i, i] + m[i+1, i+2] + p_{i-1} p_i p_{i+2}, \quad m[i, i+1] + m[i+2, i+2] + p_{i-1} p_{i+1} p_{i+2} \}$.
    *   We choose the $k$ that gives the minimum and store it in $s[i, i+2]$.

*   **General Case (Chain Length $l$):**
    *   For $l = 2, ..., n$: (length of the chain)
        *   For $i = 1, ..., n-l+1$: (starting index)
            *   $j = i+l-1$: (ending index)
            *   $m[i, j] = \infty$
            *   For $k = i, ..., j-1$: (split point)
                *   $q = m[i, k] + m[k+1, j] + p_{i-1} p_k p_j$
                *   If $q < m[i, j]$:
                    *   $m[i, j] = q$
                    *   $s[i, j] = k$

**Pseudocode:**

```
MATRIX-CHAIN-MULTIPLY(p)
  n = p.length - 1  // Number of matrices is n
  // m[i, j] stores the minimum cost for A_i...A_j
  // s[i, j] stores the split point k for A_i...A_j
  m = new table of size (n+1) x (n+1)
  s = new table of size (n+1) x (n+1)

  // Base case: Cost of multiplying a single matrix is 0
  for i = 1 to n
    m[i, i] = 0

  // Iterate over chain lengths (l)
  for l = 2 to n  // l is the chain length
    for i = 1 to n - l + 1
      j = i + l - 1
      m[i, j] = infinity
      for k = i to j - 1
        // Cost = cost(A_i..A_k) + cost(A_{k+1}..A_j) + cost(multiplying results)
        q = m[i, k] + m[k+1, j] + p[i-1] * p[k] * p[j]
        if q < m[i, j]
          m[i, j] = q
          s[i, j] = k

  return m, s // m[1, n] is the minimum cost

// Function to print the optimal parenthesization
PRINT-OPTIMAL-PARENS(s, i, j)
  if i == j
    print "A" + i
  else
    print "("
    PRINT-OPTIMAL-PARENS(s, i, s[i, j])
    PRINT-OPTIMAL-PARENS(s, s[i, j] + 1, j)
    print ")"
```

**Example Walkthrough:**

Let $p = [10, 30, 5, 60]$. This corresponds to matrices $A_1 (10 \times 30)$, $A_2 (30 \times 5)$, $A_3 (5 \times 60)$. So $n=3$.

Initialize `m` and `s` tables of size $4 \times 4$.

**l = 1 (Base cases):**
$m[1, 1] = 0$
$m[2, 2] = 0$
$m[3, 3] = 0$

**l = 2:**
*   $i=1, j=2$: $A_1 A_2$. $p_0=10, p_1=30, p_2=5$.
    $m[1, 2] = m[1, 1] + m[2, 2] + p_0 p_1 p_2 = 0 + 0 + 10 \times 30 \times 5 = 1500$.
    $s[1, 2] = 1$.
*   $i=2, j=3$: $A_2 A_3$. $p_1=30, p_2=5, p_3=60$.
    $m[2, 3] = m[2, 2] + m[3, 3] + p_1 p_2 p_3 = 0 + 0 + 30 \times 5 \times 60 = 9000$.
    $s[2, 3] = 2$.

**l = 3:**
*   $i=1, j=3$: $A_1 A_2 A_3$. $p_0=10, p_1=30, p_2=5, p_3=60$.
    Consider splits $k=1$ and $k=2$.
    *   $k=1$: $(A_1)(A_2 A_3)$
        Cost = $m[1, 1] + m[2, 3] + p_0 p_1 p_3 = 0 + 9000 + 10 \times 30 \times 60 = 9000 + 18000 = 27000$.
    *   $k=2$: $(A_1 A_2)(A_3)$
        Cost = $m[1, 2] + m[3, 3] + p_0 p_2 p_3 = 1500 + 0 + 10 \times 5 \times 60 = 1500 + 3000 = 4500$.
    Minimum cost is 4500, achieved at $k=2$.
    $m[1, 3] = 4500$.
    $s[1, 3] = 2$.

**Result:** The minimum cost to multiply the chain $A_1 A_2 A_3$ is $m[1, 3] = 4500$.

**Reconstructing Parenthesization:**
Using the `s` table:
`PRINT-OPTIMAL-PARENS(s, 1, 3)`
*   $i=1, j=3$. $s[1, 3] = 2$.
    Print `(`.
    Call `PRINT-OPTIMAL-PARENS(s, 1, 2)`.
    *   $i=1, j=2$. $s[1, 2] = 1$.
        Print `(`.
        Call `PRINT-OPTIMAL-PARENS(s, 1, 1)`.
        *   $i=1, j=1$. Print `A1`.
        Call `PRINT-OPTIMAL-PARENS(s, 2, 2)`.
        *   $i=2, j=2$. Print `A2`.
        Print `)`.
    Call `PRINT-OPTIMAL-PARENS(s, 3, 3)`.
    *   $i=3, j=3$. Print `A3`.
    Print `)`.

Output: `((A1A2)A3)`

---

### 5. Analysis of the Dynamic Programming Solution

**Time Complexity:**

The core of the algorithm is a triple-nested loop structure:
1.  Outer loop iterates over chain length `l` from 2 to `n`. (n-1 iterations)
2.  Middle loop iterates over starting index `i` from 1 to `n-l+1`. (at most n iterations)
3.  Inner loop iterates over split point `k` from `i` to `j-1`. (at most n iterations)

Inside the inner loop, we perform a constant number of operations (additions, multiplications, comparisons).

The total number of operations is approximately:
$\sum_{l=2}^{n} \sum_{i=1}^{n-l+1} \sum_{k=i}^{j-1} O(1)$

Let's approximate this:
The number of subproblems $(i, j)$ is $O(n^2)$ (for $1 \le i \le j \le n$).
For each subproblem $(i, j)$, the inner loop runs $j-i$ times, which is at most $O(n)$.

Therefore, the total time complexity is $O(n^2 \times n) = O(n^3)$.

**Space Complexity:**

We use two tables, `m` and `s`, both of size $(n+1) \times (n+1)$.
Each entry in these tables stores a single value (an integer for cost, an integer for split point).

Therefore, the space complexity is $O(n^2)$.

---

### 6. Important Points to Remember

*   **Problem Definition:** The goal is to minimize scalar multiplications by finding the optimal parenthesization for multiplying a chain of matrices.
*   **Associativity:** Matrix multiplication is associative, but the order of operations matters for efficiency.
*   **Recursive Structure:** The problem can be broken down into smaller, overlapping subproblems.
*   **Optimal Substructure:** An optimal solution for a larger problem contains optimal solutions for its subproblems.
*   **Dynamic Programming Approach:** Use a bottom-up approach to fill tables for minimum costs (`m`) and optimal split points (`s`).
*   **Chain Length:** Iterate through subproblems by increasing chain length.
*   **Time Complexity:** $O(n^3)$ due to the three nested loops.
*   **Space Complexity:** $O(n^2)$ for storing the `m` and `s` tables.
*   **Reconstruction:** The `s` table is crucial for reconstructing the actual optimal parenthesization.

---

### Practice Questions / Exercises

**Question 1:**

Consider a chain of four matrices with dimensions:
$A_1: 30 \times 35$
$A_2: 35 \times 15$
$A_3: 15 \times 5$
$A_4: 5 \times 10$

The dimensions can be represented by the array $p = [30, 35, 15, 5, 10]$. Calculate the minimum number of scalar multiplications required to compute the product $A_1 A_2 A_3 A_4$. Also, show the optimal parenthesization.

**Answer 1:**

We use the dynamic programming approach. $n=4$. $p = [30, 35, 15, 5, 10]$.

**l = 1:**
$m[1,1]=0, m[2,2]=0, m[3,3]=0, m[4,4]=0$

**l = 2:**
*   $m[1,2] = p_0 p_1 p_2 = 30 \times 35 \times 15 = 15750$. $s[1,2]=1$.
*   $m[2,3] = p_1 p_2 p_3 = 35 \times 15 \times 5 = 2625$. $s[2,3]=2$.
*   $m[3,4] = p_2 p_3 p_4 = 15 \times 5 \times 10 = 750$. $s[3,4]=3$.

**l = 3:**
*   $m[1,3]$:
    *   $k=1: m[1,1] + m[2,3] + p_0 p_1 p_3 = 0 + 2625 + 30 \times 35 \times 5 = 2625 + 5250 = 7875$.
    *   $k=2: m[1,2] + m[3,3] + p_0 p_2 p_3 = 15750 + 0 + 30 \times 15 \times 5 = 15750 + 2250 = 18000$.
    $m[1,3] = 7875$. $s[1,3]=1$.

*   $m[2,4]$:
    *   $k=2: m[2,2] + m[3,4] + p_1 p_2 p_4 = 0 + 750 + 35 \times 15 \times 10 = 750 + 5250 = 6000$.
    *   $k=3: m[2,3] + m[4,4] + p_1 p_3 p_4 = 2625 + 0 + 35 \times 5 \times 10 = 2625 + 1750 = 3750$.
    $m[2,4] = 3750$. $s[2,4]=3$.

**l = 4:**
*   $m[1,4]$:
    *   $k=1: m[1,1] + m[2,4] + p_0 p_1 p_4 = 0 + 3750 + 30 \times 35 \times 10 = 3750 + 10500 = 14250$.
    *   $k=2: m[1,2] + m[3,4] + p_0 p_2 p_4 = 15750 + 750 + 30 \times 15 \times 10 = 16500 + 4500 = 21000$.
    *   $k=3: m[1,3] + m[4,4] + p_0 p_3 p_4 = 7875 + 0 + 30 \times 5 \times 10 = 7875 + 1500 = 9375$.
    $m[1,4] = 9375$. $s[1,4]=3$.

**Minimum cost:** $9375$.

**Optimal Parenthesization:**
Using `s` table:
`PRINT-OPTIMAL-PARENS(s, 1, 4)`
*   $s[1,4] = 3$. Print `(`. Call `(1,3)` and `(4,4)`.
    *   `(1,3)`: $s[1,3] = 1$. Print `(`. Call `(1,1)` and `(2,3)`.
        *   `(1,1)`: Print `A1`.
        *   `(2,3)`: $s[2,3] = 2$. Print `(`. Call `(2,2)` and `(3,3)`.
            *   `(2,2)`: Print `A2`.
            *   `(3,3)`: Print `A3`.
        Print `)`.
    Print `)`.
    *   `(4,4)`: Print `A4`.
Print `)`.

The optimal parenthesization is `((A1(A2A3))A4)`.

**Question 2:**

A student claims that for any sequence of matrices, the parenthesization that performs the first multiplication on the first two matrices ($A_1 A_2$) will always be the most efficient. Is this claim correct? Justify your answer using the concept of optimal substructure and the matrix chain multiplication problem.

**Answer 2:**

No, the student's claim is **incorrect**.

**Justification:**
The matrix chain multiplication problem is a classic example where a greedy approach (always multiplying the first two matrices) does not yield the optimal solution. This is because the cost of multiplying two matrices depends on their dimensions, and a locally optimal choice (multiplying the first two) might lead to a larger intermediate matrix, which then incurs a higher cost in subsequent multiplications.

The problem exhibits **optimal substructure**, meaning that an optimal solution to the entire problem can be constructed from optimal solutions to its subproblems. However, this does not imply that a simple greedy choice at each step will lead to the global optimum.

Consider the example given in the topic description: $A_1 (10 \times 30)$, $A_2 (30 \times 5)$, $A_3 (5 \times 60)$.
*   The greedy choice of multiplying $A_1 A_2$ first costs $10 \times 30 \times 5 = 1500$. The resulting matrix is $10 \times 5$. Then multiplying this with $A_3$ costs $10 \times 5 \times 60 = 3000$. Total cost = 4500.
*   The alternative parenthesization $A_1 (A_2 A_3)$: Multiplying $A_2 A_3$ costs $30 \times 5 \times 60 = 9000$. The resulting matrix is $30 \times 60$. Then multiplying $A_1$ with this costs $10 \times 30 \times 60 = 18000$. Total cost = 27000.

In this specific example, the greedy approach of multiplying the first two matrices happens to be optimal. However, it's easy to construct cases where it's not. For instance, if $A_1$ was $10 \times 100$, $A_2$ was $100 \times 5$, and $A_3$ was $5 \times 50$:
*   $(A_1 A_2) A_3$: $(10 \times 100 \times 5) + (10 \times 5 \times 50) = 5000 + 2500 = 7500$.
*   $A_1 (A_2 A_3)$: $(100 \times 5 \times 50) + (10 \times 100 \times 50) = 25000 + 50000 = 75000$.

In this modified scenario, the greedy choice for the first multiplication is still optimal. However, the general principle remains that one must explore all possible split points, not just the first one, to guarantee optimality. The dynamic programming solution systematically explores all valid parenthesizations to find the true minimum.

---
