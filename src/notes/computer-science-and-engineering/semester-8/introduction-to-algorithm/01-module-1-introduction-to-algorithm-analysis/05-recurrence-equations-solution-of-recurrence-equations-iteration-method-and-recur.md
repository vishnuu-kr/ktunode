---
title: "Recurrence Equations: Solution of Recurrence Equations – Iteration Method and Recursion Tree Methods"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 1: Introduction to Algorithm Analysis"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbc3"
status: "completed"
scrapedAt: "2026-05-20T17:25:07.389Z"
---
# Introduction to Algorithm Analysis: Recurrence Equations

## Module 1: Introduction to Algorithm Analysis

### Topic: Recurrence Equations: Solution of Recurrence Equations – Iteration Method and Recursion Tree Methods

---

### 1. Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand what a recurrence relation is and its importance in algorithm analysis.
*   Solve recurrence relations using the Iteration Method.
*   Solve recurrence relations using the Recursion Tree Method.
*   Analyze the time complexity of recursive algorithms by deriving and solving their recurrence relations.

---

### 2. Key Concepts and Definitions

#### 2.1. What is a Recurrence Relation?

A **recurrence relation** (or recurrence equation) is an equation that defines a sequence recursively; that is, each term of the sequence is defined as a function of a preceding term. In the context of algorithm analysis, recurrence relations are used to describe the running time of recursive algorithms.

**Example:** Consider a recursive algorithm that divides a problem of size $n$ into two subproblems of size $n/2$, and performs $O(1)$ work to combine the solutions. The recurrence relation for its running time $T(n)$ could be:

$T(n) = 2T(n/2) + c$

where:
*   $T(n)$: The running time for a problem of size $n$.
*   $2T(n/2)$: The time taken to solve two subproblems, each of size $n/2$.
*   $c$: The constant time taken for combining the results of the subproblems.

**Base Case:** A recurrence relation also needs a base case, which is a non-recursive definition for small input sizes. For instance, $T(1) = c'$ for some constant $c'$.

#### 2.2. Importance of Recurrence Relations in Algorithm Analysis

*   **Modeling Recursive Algorithms:** Many efficient algorithms, like Merge Sort, Quick Sort, and binary search, are inherently recursive. Recurrence relations provide a precise mathematical model for their execution time.
*   **Determining Time Complexity:** By solving recurrence relations, we can derive the asymptotic time complexity (e.g., $O(n)$, $O(\log n)$, $O(n^2)$) of these algorithms. This allows us to compare their efficiency and choose the best algorithm for a given task.
*   **Understanding Algorithmic Behavior:** Recurrence relations help us understand how the running time of an algorithm scales with the input size.

---

### 3. Methods for Solving Recurrence Equations

We will explore two common methods for solving recurrence equations: the Iteration Method and the Recursion Tree Method.

#### 3.1. Iteration Method (Substitution Method)

The iteration method involves repeatedly substituting the recurrence relation into itself until a pattern emerges, which can then be generalized into a closed-form solution.

**Steps:**

1.  **Expand the recurrence:** Start by substituting the recurrence relation for $T(n)$ in terms of $T(n/b)$.
2.  **Continue substitution:** Keep substituting until you reach the base case.
3.  **Identify a pattern:** Look for a pattern in the resulting expression, particularly in terms of the number of substitutions made.
4.  **Formulate a general expression:** Express the running time as a sum based on the identified pattern.
5.  **Solve the sum:** Find a closed-form solution for the sum, often using geometric series formulas or other summation techniques.
6.  **Verify (optional but recommended):** Use mathematical induction to prove the correctness of the closed-form solution.

**Example 1: $T(n) = T(n/2) + cn$ (assuming $n$ is a power of 2, $T(1)=c'$)**

1.  **Expand:**
    $T(n) = T(n/2) + cn$

2.  **Substitute $T(n/2)$:**
    $T(n/2) = T(n/4) + c(n/2)$
    So, $T(n) = (T(n/4) + c(n/2)) + cn = T(n/4) + c(n/2 + n)$

3.  **Substitute $T(n/4)$:**
    $T(n/4) = T(n/8) + c(n/4)$
    So, $T(n) = (T(n/8) + c(n/4)) + c(n/2 + n) = T(n/8) + c(n/4 + n/2 + n)$

4.  **Pattern:** After $k$ substitutions, the expression becomes:
    $T(n) = T(n/2^k) + c(n/2^k + n/2^{k-1} + \dots + n/2 + n)$

5.  **Reach Base Case:** We reach the base case when $n/2^k = 1$, which means $n = 2^k$, or $k = \log_2 n$.
    Substituting $k = \log_2 n$:
    $T(n) = T(1) + c(n/2^{\log_2 n} + n/2^{\log_2 n - 1} + \dots + n/2 + n)$
    $T(n) = T(1) + c(1 + 2 + 4 + \dots + n/2 + n)$

6.  **Solve the Sum:** The sum inside the parenthesis is a geometric series: $n(1 + 1/2 + 1/4 + \dots + 1) = n \sum_{i=0}^{\log_2 n} (1/2)^i$. This is incorrect.
    Let's re-examine the sum: $c(n/2^k + n/2^{k-1} + \dots + n/2 + n)$. At step $i$, the term added is $cn/2^i$.
    $T(n) = T(n/2) + cn$
    $T(n) = T(n/4) + c(n/2) + cn$
    $T(n) = T(n/8) + c(n/4) + c(n/2) + cn$
    ...
    $T(n) = T(1) + cn + c(n/2) + c(n/4) + \dots + c(n/2^k)$ where $k = \log_2 n$.
    $T(n) = T(1) + c(n + n/2 + n/4 + \dots + n/2^{\log_2 n})$
    $T(n) = c' + c \cdot n (1 + 1/2 + 1/4 + \dots + 1/n)$
    The sum is a geometric series: $1 + 1/2 + 1/4 + \dots + 1/n$.
    The sum of a geometric series $a + ar + ar^2 + \dots + ar^m$ is $a(r^{m+1}-1)/(r-1)$.
    Here, $a=n$, $r=1/2$. The terms are $n, n/2, n/4, \dots, 1$. Let's rewrite the sum in ascending powers:
    $T(n) = c' + c(n + n/2 + n/4 + \dots + n/2^{\log_2 n})$
    $T(n) = c' + c \cdot n (1 + 1/2 + 1/4 + \dots + 1/2^{\log_2 n})$
    The series $1 + 1/2 + 1/4 + \dots + 1/2^{\log_2 n}$ is a geometric series with first term $a=1$, common ratio $r=1/2$, and number of terms $m+1 = \log_2 n + 1$.
    Sum = $1 \cdot \frac{(1/2)^{\log_2 n + 1} - 1}{1/2 - 1} = \frac{1/(2n) - 1}{-1/2} = -2(1/(2n) - 1) = 2 - 1/n$.
    So, $T(n) = c' + c \cdot n (2 - 1/n) = c' + 2cn - c = c' - c + 2cn$.
    Asymptotically, $T(n) = \Theta(n)$.

**Example 2: $T(n) = T(n-1) + c$ (assuming $T(1)=c'$)**

1.  **Expand:**
    $T(n) = T(n-1) + c$

2.  **Substitute $T(n-1)$:**
    $T(n-1) = T(n-2) + c$
    So, $T(n) = (T(n-2) + c) + c = T(n-2) + 2c$

3.  **Substitute $T(n-2)$:**
    $T(n-2) = T(n-3) + c$
    So, $T(n) = (T(n-3) + c) + 2c = T(n-3) + 3c$

4.  **Pattern:** After $k$ substitutions, the expression becomes:
    $T(n) = T(n-k) + kc$

5.  **Reach Base Case:** We reach the base case when $n-k = 1$, which means $k = n-1$.
    Substituting $k = n-1$:
    $T(n) = T(1) + (n-1)c$
    $T(n) = c' + (n-1)c$

6.  **Closed-form Solution:** $T(n) = c' + cn - c = (c'-c) + cn$.
    Asymptotically, $T(n) = \Theta(n)$.

#### 3.2. Recursion Tree Method

The recursion tree method provides a visual way to understand the recurrence relation. It involves drawing a tree where each node represents a subproblem and its cost, and then summing the costs at each level of the tree.

**Steps:**

1.  **Draw the tree:**
    *   The root node represents the original problem of size $n$ with its associated cost (e.g., $cn$).
    *   For each recursive call, create child nodes. If $T(n) = aT(n/b) + f(n)$, the root has $a$ children, each representing a subproblem of size $n/b$. The cost at each of these children (apart from the recursive call) is $f(n/b)$.
    *   Continue expanding the tree until you reach the base case (nodes with a constant cost, e.g., $c'$).

2.  **Calculate cost at each level:**
    *   Sum the costs of all nodes at each level.
    *   The cost at level $i$ is $a^i \cdot f(n/b^i)$.

3.  **Determine the height of the tree:**
    *   The height of the tree corresponds to how many times we can divide the problem size by $b$ until we reach the base case (e.g., size 1).
    *   If the base case is $n/b^h = 1$, then $n = b^h$, so $h = \log_b n$.

4.  **Sum the costs across all levels:**
    *   The total cost is the sum of costs at all levels plus the cost of the leaf nodes.
    *   Total Cost = $\sum_{i=0}^{h-1} (\text{cost at level } i) + (\text{cost of leaf nodes})$.
    *   Total Cost = $\sum_{i=0}^{h-1} a^i f(n/b^i) + \text{cost of base cases}$.

5.  **Analyze the sum:** The sum is usually a geometric series. The dominant term of the sum determines the asymptotic complexity.

**Example 1: $T(n) = 2T(n/2) + cn$ (Merge Sort)**

1.  **Draw the tree:**
    *   **Level 0 (Root):** Problem size $n$, Cost $cn$.
    *   **Level 1:** Two subproblems of size $n/2$, each with cost $c(n/2)$. Total cost at level 1: $2 \cdot c(n/2) = cn$.
    *   **Level 2:** Four subproblems of size $n/4$, each with cost $c(n/4)$. Total cost at level 2: $4 \cdot c(n/4) = cn$.
    *   ...
    *   **Level $i$:** $2^i$ subproblems of size $n/2^i$, each with cost $c(n/2^i)$. Total cost at level $i$: $2^i \cdot c(n/2^i) = cn$.

    ```
          T(n) = cn
         /        \
     T(n/2) + cn/2  T(n/2) + cn/2
      /   \        /   \
    T(n/4)+cn/4 T(n/4)+cn/4 ...
    ...
    ```

2.  **Cost at each level:** The cost at each level is $cn$.

3.  **Height of the tree:** We reach the base case when $n/2^h = 1$, so $h = \log_2 n$. The height of the tree is $\log_2 n$.

4.  **Sum the costs:**
    Total Cost = (Cost at Level 0) + (Cost at Level 1) + ... + (Cost at Level $h-1$) + (Cost of Leaf Nodes)
    Total Cost = $cn + cn + cn + \dots + cn$ ($\log_2 n$ times) $+ (\text{cost of base cases})$
    If base case is $T(1) = c'$, there are $2^{\log_2 n} = n$ leaf nodes, each contributing $c'$. So, leaf cost is $n \cdot c'$.
    Total Cost = $(\log_2 n) \cdot cn + n \cdot c'$

5.  **Analyze the sum:**
    $T(n) = cn \log_2 n + c'n$
    Asymptotically, $T(n) = \Theta(n \log n)$.

**Example 2: $T(n) = 3T(n/4) + n$ (assuming $T(1)=c'$)**

1.  **Draw the tree:**
    *   **Level 0 (Root):** Problem size $n$, Cost $n$.
    *   **Level 1:** Three subproblems of size $n/4$, each with cost $n/4$. Total cost at level 1: $3 \cdot (n/4) = 3n/4$.
    *   **Level 2:** $3^2=9$ subproblems of size $n/16$, each with cost $n/16$. Total cost at level 2: $9 \cdot (n/16) = 9n/16$.
    *   **Level $i$:** $3^i$ subproblems of size $n/4^i$, each with cost $n/4^i$. Total cost at level $i$: $3^i \cdot (n/4^i) = n(3/4)^i$.

    ```
          T(n) = n
         /   |   \
      T(n/4)+n/4 T(n/4)+n/4 T(n/4)+n/4
      / | \     ...
    T(n/16)+n/16 ...
    ...
    ```

2.  **Cost at each level:** The cost at level $i$ is $n(3/4)^i$.

3.  **Height of the tree:** We reach the base case when $n/4^h = 1$, so $4^h = n$, which means $h = \log_4 n$.

4.  **Sum the costs:**
    Total Cost = $\sum_{i=0}^{h-1} n(3/4)^i + (\text{cost of leaf nodes})$
    Total Cost = $n \sum_{i=0}^{\log_4 n - 1} (3/4)^i + (\text{cost of leaf nodes})$

5.  **Analyze the sum:** The sum is a finite geometric series: $n \left( \frac{(3/4)^{\log_4 n} - 1}{3/4 - 1} \right)$.
    As $n \to \infty$, $(3/4)^{\log_4 n} = (3/4)^{\frac{\log n}{\log 4}} = (3/4)^{\frac{\log n}{2 \log 2}}$. This term goes to 0.
    The sum becomes approximately $n \left( \frac{-1}{-1/4} \right) = 4n$.
    The cost of the leaf nodes: $3^h$ nodes, each costing $c'$. $3^{\log_4 n} = n^{\log_4 3}$.
    Total Cost = $n \cdot (\text{sum of costs at internal levels}) + n^{\log_4 3} \cdot c'$
    The sum of costs at internal levels is $n \sum_{i=0}^{\log_4 n - 1} (3/4)^i$. This is a geometric series with ratio $r=3/4 < 1$. The sum converges to $n \cdot \frac{1}{1 - 3/4} = 4n$.
    The cost of leaf nodes is $3^{\log_4 n} \cdot c' = n^{\log_4 3} \cdot c'$. Since $\log_4 3 < 1$, this term is $O(n^{\log_4 3})$.
    Thus, $T(n) = \Theta(n)$.

---

### 4. Practice Questions and Exercises

**Question 1 (Iteration Method):**
Solve the following recurrence relation using the iteration method:
$T(n) = T(n-2) + n^2$ for $n > 2$, with $T(1) = c_1$, $T(2) = c_2$.

**Question 2 (Iteration Method):**
Solve the following recurrence relation using the iteration method:
$T(n) = 2T(n/2) + n$ for $n \ge 2$, with $T(1) = 1$. (Assume $n$ is a power of 2).

**Question 3 (Recursion Tree Method):**
Solve the following recurrence relation using the recursion tree method:
$T(n) = 4T(n/3) + n$ for $n \ge 3$, with $T(1) = c$. (Assume $n$ is a power of 3).

**Question 4 (Recursion Tree Method):**
Solve the following recurrence relation using the recursion tree method:
$T(n) = T(n/2) + n$ for $n \ge 2$, with $T(1) = c$. (Assume $n$ is a power of 2).

---

### 5. Answers to Practice Questions

**Answer 1 (Iteration Method):**
$T(n) = T(n-2) + n^2$
$T(n) = T(n-2) + n^2$
$T(n) = (T(n-4) + (n-2)^2) + n^2 = T(n-4) + n^2 + (n-2)^2$
$T(n) = (T(n-6) + (n-4)^2) + n^2 + (n-2)^2 = T(n-6) + n^2 + (n-2)^2 + (n-4)^2$

After $k$ substitutions: $T(n) = T(n-2k) + n^2 + (n-2)^2 + \dots + (n-2(k-1))^2$

We reach the base case when $n-2k = 1$ (if $n$ is odd) or $n-2k=2$ (if $n$ is even). Let's assume $n$ is odd for simplicity, so $2k = n-1$, $k = (n-1)/2$.
$T(n) = T(1) + \sum_{i=0}^{(n-1)/2 - 1} (n-2i)^2$
$T(n) = c_1 + \sum_{j=1}^{(n-1)/2} (n - 2(j-1))^2 \quad$ (re-indexing sum)
$T(n) = c_1 + \sum_{j=1}^{(n-1)/2} (n - 2j + 2)^2$

This is a sum of squares. Let's consider the terms:
$n^2, (n-2)^2, (n-4)^2, \dots, 1^2$ (if n is odd) or $2^2$ (if n is even).
The sum is roughly an integral of $x^2$, which is $x^3/3$.
The number of terms is approximately $n/2$.
So, the sum is roughly $(n/2) \cdot (n^2) = n^3/2$.
Thus, $T(n) = \Theta(n^3)$.

**Answer 2 (Iteration Method):**
$T(n) = 2T(n/2) + n$
$T(n) = 2T(n/2) + n$
$T(n) = 2(2T(n/4) + n/2) + n = 4T(n/4) + n + n = 4T(n/4) + 2n$
$T(n) = 4(2T(n/8) + n/4) + 2n = 8T(n/8) + n + 2n = 8T(n/8) + 3n$

After $k$ substitutions: $T(n) = 2^k T(n/2^k) + kn$

Reach base case: $n/2^k = 1 \implies k = \log_2 n$.
$T(n) = 2^{\log_2 n} T(1) + (\log_2 n) n$
$T(n) = n \cdot 1 + n \log_2 n = n + n \log_2 n$
$T(n) = \Theta(n \log n)$.

**Answer 3 (Recursion Tree Method):**
$T(n) = 4T(n/3) + n$
*   **Level 0:** Cost $n$
*   **Level 1:** $4$ subproblems of size $n/3$, cost $4 \cdot (n/3) = 4n/3$
*   **Level 2:** $4^2=16$ subproblems of size $n/9$, cost $16 \cdot (n/9) = 16n/9$
*   **Level $i$:** $4^i$ subproblems of size $n/3^i$, cost $4^i \cdot (n/3^i) = n (4/3)^i$

Height $h$: $n/3^h = 1 \implies h = \log_3 n$.
Total Cost = $\sum_{i=0}^{\log_3 n - 1} n (4/3)^i + (\text{cost of leaf nodes})$

The sum is a geometric series with ratio $r = 4/3 > 1$. This means the sum grows with the number of terms.
The last term (level $h-1$) is $n(4/3)^{\log_3 n - 1}$.
The sum is approximately $n \frac{(4/3)^{\log_3 n}}{4/3 - 1} = n \frac{(4/3)^{\log_3 n}}{1/3} = 3n (4/3)^{\log_3 n}$.
We can rewrite $(4/3)^{\log_3 n} = n^{\log_3 (4/3)} = n^{\log_3 4 - \log_3 3} = n^{\log_3 4 - 1}$.
So the sum is roughly $3n \cdot n^{\log_3 4 - 1} = 3n^{\log_3 4}$.
The cost of leaf nodes is $4^{\log_3 n} \cdot c = (3^{\log_3 4})^{\log_3 n} = (n^{\log_3 4})^{\log_3 3} = n^{\log_3 4} \cdot c$.
In this case, the work at each level ($n(4/3)^i$) grows as $i$ increases. The last level's contribution will dominate.
The sum is $n \frac{(4/3)^h - 1}{4/3 - 1} \approx n \frac{(4/3)^{\log_3 n}}{1/3} = 3n (\frac{4}{3})^{\log_3 n} = 3n \cdot n^{\log_3(4/3)} = 3n \cdot n^{\log_3 4 - 1} = 3n^{\log_3 4}$.
The leaf cost is $4^h \cdot c = 4^{\log_3 n} \cdot c = n^{\log_3 4} \cdot c$.
Therefore, $T(n) = \Theta(n^{\log_3 4})$.

**Answer 4 (Recursion Tree Method):**
$T(n) = T(n/2) + n$
*   **Level 0:** Cost $n$
*   **Level 1:** $1$ subproblem of size $n/2$, cost $n/2$
*   **Level 2:** $1$ subproblem of size $n/4$, cost $n/4$
*   **Level $i$:** $1$ subproblem of size $n/2^i$, cost $n/2^i$

Height $h$: $n/2^h = 1 \implies h = \log_2 n$.
Total Cost = $\sum_{i=0}^{\log_2 n - 1} n/2^i + (\text{cost of leaf nodes})$

The sum is a geometric series with ratio $r = 1/2 < 1$.
Sum = $n \sum_{i=0}^{\log_2 n - 1} (1/2)^i = n \frac{1 - (1/2)^{\log_2 n}}{1 - 1/2} = n \frac{1 - 1/(2n)}{1/2} = 2n (1 - 1/(2n)) = 2n - 1$.
The cost of leaf nodes is $1 \cdot c = c$ (assuming $T(1)=c$).
Total Cost = $(2n - 1) + c = 2n + (c-1)$.
Therefore, $T(n) = \Theta(n)$.

---

### 6. Important Points to Remember

*   **Recurrence Relations Model Recursion:** They are crucial for analyzing the time complexity of recursive algorithms.
*   **Base Cases are Essential:** A recurrence relation is incomplete without its base case(s).
*   **Iteration Method:** Useful for simpler recurrences. Requires pattern recognition and summation. Can be tedious for complex recurrences.
*   **Recursion Tree Method:** Provides a visual understanding. Excellent for identifying the dominant cost by observing the sums at each level and the total number of levels.
*   **Geometric Series:** Many recurrence solutions involve summing geometric series. Remember formulas for sums where the common ratio $r < 1$, $r > 1$, and $r = 1$.
*   **Master Theorem:** While not covered in detail here, the Master Theorem is a powerful tool for solving recurrences of the form $T(n) = aT(n/b) + f(n)$ in specific cases, often simplifying the process.
*   **Asymptotic Analysis:** The goal is to find the $\Theta$ (or $O$/$\Omega$) bound, not the exact number of operations. Focus on the dominant terms.
*   **Assumptions:** When solving, be mindful of assumptions made (e.g., $n$ is a power of $b$) and how they affect the generality of the solution. These assumptions are usually made to simplify the derivation, and the asymptotic result generally holds for all $n$.
