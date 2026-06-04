---
title: "Basics of Approximation Algorithms - Introduction to approximation algorithms, Performance guarantees: approximation ratio and factor, Examples of approximation problems. (Chapter 1)"
subject: "APPROXIMATION ALGORITHMS"
module: "Module 1: Basics of Approximation Algorithms "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c376"
status: "completed"
scrapedAt: "2026-05-20T17:00:41.481Z"
---
# APPROXIMATION ALGORITHMS

## Module 1: Basics of Approximation Algorithms

### Topic: Introduction to Approximation Algorithms, Performance Guarantees: Approximation Ratio and Factor, Examples of Approximation Problems

---

### **1. Introduction to Approximation Algorithms**

#### **1.1 The Need for Approximation Algorithms**

Many important problems in computer science are NP-hard. This means that, for these problems, there is no known polynomial-time algorithm that can find the optimal solution. As a result, if we need to solve these problems for large instances, we face a dilemma:

*   **Exact Algorithms:** These algorithms guarantee the optimal solution but can take an exponential amount of time, making them impractical for large inputs.
*   **Heuristics/Greedy Algorithms:** These algorithms are fast (polynomial time) but do not guarantee optimality. They might provide good solutions in practice, but their performance is unpredictable.

**Approximation algorithms** aim to bridge this gap. They are algorithms that run in polynomial time and find solutions that are "close" to the optimal solution, with a provable bound on how far they can be from the optimum.

#### **1.2 What is an Approximation Algorithm?**

An **approximation algorithm** for an optimization problem is a polynomial-time algorithm that computes a solution whose "quality" is guaranteed to be within a certain factor of the optimal solution's quality.

*   **Optimization Problem:** A problem where we want to find the "best" solution according to some measure (e.g., minimum cost, maximum profit, shortest path).
*   **Solution Quality:** The value of the solution found by the algorithm.
*   **Polynomial Time:** An algorithm whose running time is bounded by a polynomial function of the input size (e.g., $O(n^2)$, $O(n^3 \log n)$).

#### **1.3 When are Approximation Algorithms Used?**

Approximation algorithms are essential when:

*   **The problem is NP-hard:** We cannot guarantee finding the optimal solution efficiently.
*   **Exact solutions are computationally infeasible:** The input size is too large for exponential-time algorithms.
*   **Slightly suboptimal solutions are acceptable:** The application can tolerate a solution that is not perfectly optimal if it can be found quickly.

---

### **2. Performance Guarantees: Approximation Ratio and Factor**

The "closeness" of an approximation algorithm's solution to the optimal solution is quantified by its **performance guarantee**. This guarantee is typically expressed as an **approximation ratio** or **approximation factor**.

#### **2.1 Maximization vs. Minimization Problems**

The definition of approximation ratio differs slightly depending on whether the problem is a maximization or minimization problem.

*   **Maximization Problems:** We want to maximize the objective function (e.g., profit, number of items).
    *   Let $OPT$ be the value of the optimal solution.
    *   Let $ALG$ be the value of the solution found by the approximation algorithm.
    *   For a maximization problem, we want $ALG \ge OPT$.

*   **Minimization Problems:** We want to minimize the objective function (e.g., cost, distance).
    *   Let $OPT$ be the value of the optimal solution.
    *   Let $ALG$ be the value of the solution found by the approximation algorithm.
    *   For a minimization problem, we want $ALG \le OPT$.

#### **2.2 Approximation Ratio**

The **approximation ratio** (often denoted by $\alpha$ or $\rho$) is a measure of how close the approximation algorithm's solution is to the optimal solution.

*   **For Maximization Problems:** An algorithm is said to have an approximation ratio of $\alpha$ if, for every instance $I$, the value of the solution produced by the algorithm, $ALG(I)$, is at least $\frac{1}{\alpha}$ times the value of the optimal solution, $OPT(I)$.
    $$ \frac{ALG(I)}{OPT(I)} \ge \frac{1}{\alpha} $$
    Or, equivalently, $OPT(I) \le \alpha \cdot ALG(I)$. This means the optimal solution is at most $\alpha$ times better than the algorithm's solution. A smaller $\alpha$ (closer to 1) is better.

*   **For Minimization Problems:** An algorithm is said to have an approximation ratio of $\alpha$ if, for every instance $I$, the value of the solution produced by the algorithm, $ALG(I)$, is at most $\alpha$ times the value of the optimal solution, $OPT(I)$.
    $$ \frac{ALG(I)}{OPT(I)} \le \alpha $$
    This means the algorithm's solution is at most $\alpha$ times worse than the optimal solution. A smaller $\alpha$ (closer to 1) is better.

#### **2.3 Approximation Factor**

The **approximation factor** is often used interchangeably with the approximation ratio. However, sometimes the term "factor" is used to directly represent how much worse the solution can be.

*   **For Maximization Problems:** A "factor of $k$" means the algorithm guarantees a solution that is at least $1/k$ of the optimal. The approximation ratio is $k$.
*   **For Minimization Problems:** A "factor of $k$" means the algorithm guarantees a solution that is at most $k$ times the optimal. The approximation ratio is $k$.

**Key Takeaway:** For both maximization and minimization problems, an approximation ratio (or factor) of $\alpha$ means the algorithm's solution is within a multiplicative factor of $\alpha$ from the optimal. A ratio of 1 means the algorithm is optimal.

#### **2.4 Absolute Approximation Ratio (Additive Error)**

While multiplicative factors are common, sometimes the difference between the algorithm's solution and the optimal solution is bounded by an additive constant, especially for minimization problems.

*   **For Minimization Problems:** An algorithm has an absolute approximation ratio of $\beta$ if, for every instance $I$, $ALG(I) \le OPT(I) + \beta$. This is less common for NP-hard problems.

#### **2.5 PTAS and APX**

*   **Polynomial-Time Approximation Scheme (PTAS):** For a minimization problem, an algorithm is a PTAS if for every $\epsilon > 0$, it provides an approximation ratio of $(1+\epsilon)$ and runs in time polynomial in the input size $n$, but potentially exponential in $1/\epsilon$.
*   **APX:** A class of NP-hard optimization problems for which there exists a polynomial-time approximation algorithm with a constant approximation ratio.

---

### **3. Examples of Approximation Problems**

Here are a few classic examples of NP-hard problems for which approximation algorithms are studied:

#### **3.1 Vertex Cover (Minimization Problem)**

**Problem Definition:** Given an undirected graph $G = (V, E)$, find a minimum size subset of vertices $V' \subseteq V$ such that for every edge $(u, v) \in E$, at least one of $u$ or $v$ is in $V'$.

*   **Goal:** Minimize the size of the vertex cover ($|V'|$).
*   **NP-hard?** Yes.

**Example:**
Consider a graph with vertices {1, 2, 3, 4} and edges {(1,2), (1,3), (2,3), (3,4)}.
*   **Optimal Vertex Cover:** {1, 3} (size 2). Covers (1,2), (1,3), (2,3), (3,4).
*   **Another Vertex Cover:** {2, 3, 4} (size 3). Covers (1,2), (1,3), (2,3), (3,4).

**Approximation Algorithm: Greedy Edge Selection**

1.  Initialize an empty vertex cover $C = \emptyset$.
2.  While there are still edges in the graph:
    a.  Pick an arbitrary edge $(u, v)$ that is not yet covered.
    b.  Add both $u$ and $v$ to $C$.
    c.  Remove all edges incident to $u$ or $v$ from consideration.
3.  Return $C$.

**Analysis:**
Let $C^*$ be the optimal vertex cover. For every edge $(u, v)$ picked in step 2a, at least one of $u$ or $v$ must be in $C^*$ to cover this edge. Since the algorithm adds *both* $u$ and $v$ to its cover $C$, the size of $C$ is at most twice the size of $C^*$.
So, $|C| \le 2 |C^*|$. This algorithm has an **approximation ratio of 2**.

#### **3.2 Traveling Salesperson Problem (TSP) (Minimization Problem)**

**Problem Definition:** Given a list of cities and the distances between each pair of cities, find the shortest possible route that visits each city exactly once and returns to the origin city.

*   **Goal:** Minimize the total travel distance.
*   **NP-hard?** Yes.

**Example:**
Cities A, B, C. Distances: A-B=10, A-C=15, B-C=20.
*   **Possible Tours:**
    *   A -> B -> C -> A: 10 + 20 + 15 = 45
    *   A -> C -> B -> A: 15 + 20 + 10 = 45
*   **Optimal Tour:** Any of the above, with length 45.

**Approximation Algorithm: Nearest Neighbor (Heuristic, not guaranteed ratio)**

1.  Start at an arbitrary city.
2.  Repeatedly visit the nearest unvisited city.
3.  Once all cities are visited, return to the starting city.

*   **Note:** While intuitive, the Nearest Neighbor algorithm does *not* have a constant approximation ratio for the general TSP. Its performance can be arbitrarily bad.

**Approximation Algorithm: Double Tree (for Metric TSP)**

*   **Metric TSP:** Assumes the triangle inequality holds (i.e., distance(A,C) <= distance(A,B) + distance(B,C)). This is usually a reasonable assumption.

1.  Find a Minimum Spanning Tree (MST) of the cities (vertices). Let its total weight be $W_{MST}$.
2.  Perform a Depth First Search (DFS) traversal of the MST, creating an Euler tour (visiting each edge twice). The length of this Euler tour is $2 \cdot W_{MST}$.
3.  Create a Hamiltonian cycle (a TSP tour) from the Euler tour by shortcutting (skipping previously visited cities). Due to the triangle inequality, shortcutting does not increase the total length.
4.  The resulting tour has a length at most $2 \cdot W_{MST}$.
5.  An MST's weight is a lower bound on the optimal TSP tour's weight ($W_{MST} \le OPT$). Therefore, the algorithm produces a tour of length at most $2 \cdot OPT$.
    This algorithm has an **approximation ratio of 2**.

#### **3.3 Maximum Satisfiability (MAX-SAT) (Maximization Problem)**

**Problem Definition:** Given a Boolean formula in Conjunctive Normal Form (CNF), find an assignment of truth values to variables that satisfies the maximum number of clauses.

*   **Goal:** Maximize the number of satisfied clauses.
*   **NP-hard?** Yes.

**Example:**
Formula: $(x_1 \lor \neg x_2) \land (\neg x_1 \lor x_2) \land (x_1 \lor x_3)$
*   Clause 1: $(x_1 \lor \neg x_2)$
*   Clause 2: $(\neg x_1 \lor x_2)$
*   Clause 3: $(x_1 \lor x_3)$

**Assignments:**
*   $x_1=T, x_2=T, x_3=T$: C1=T, C2=T, C3=T. Satisfied: 3.
*   $x_1=T, x_2=F, x_3=T$: C1=T, C2=F, C3=T. Satisfied: 2.
*   $x_1=F, x_2=T, x_3=F$: C1=F, C2=T, C3=F. Satisfied: 1.

**Approximation Algorithm: Randomized Algorithm**

1.  For each variable $x_i$, assign it `True` with probability 1/2 and `False` with probability 1/2, independently.

**Analysis:**
Consider a clause with $k$ literals, e.g., $(l_1 \lor l_2 \lor \dots \lor l_k)$. This clause is unsatisfied *only if* all its literals are false.
For a literal $l_i$, the probability that it is false under the random assignment is 1/2 (e.g., if $l_i = x_j$, it's false if $x_j$ is assigned False; if $l_i = \neg x_j$, it's false if $x_j$ is assigned True).
The probability that all $k$ literals are false is $(1/2)^k$.
Therefore, the probability that the clause is *satisfied* is $1 - (1/2)^k$.

Since $k \ge 1$ for any clause in CNF:
Probability of satisfying a clause $\ge 1 - (1/2)^1 = 1/2$.

Let $m$ be the total number of clauses.
By linearity of expectation, the expected number of satisfied clauses is $\sum_{i=1}^m P(\text{clause } i \text{ is satisfied}) \ge m/2$.

The optimal solution satisfies at most $m$ clauses ($OPT \le m$).
So, $E[ALG] \ge m/2 \ge OPT/2$.

This randomized algorithm has an **expected approximation ratio of 2**. (To get a deterministic algorithm with a constant ratio, one can derandomize this using the method of conditional expectations).

---

### **4. Key Concepts and Definitions to Remember**

*   **NP-hard:** Problems for which no efficient (polynomial-time) algorithm is known to find the *exact* optimal solution.
*   **Approximation Algorithm:** A polynomial-time algorithm that finds a solution whose quality is provably close to the optimal solution.
*   **Optimization Problem:** A problem where the goal is to find the best solution according to some objective measure (maximize or minimize).
*   **Approximation Ratio ($\alpha$):** A measure of the performance guarantee.
    *   Maximization: $ALG/OPT \ge 1/\alpha$
    *   Minimization: $ALG/OPT \le \alpha$
    *   A smaller $\alpha$ (closer to 1) indicates a better approximation.
*   **Approximation Factor:** Often used interchangeably with approximation ratio. A "factor of $k$" usually means the ratio is $k$.
*   **PTAS (Polynomial-Time Approximation Scheme):** For any $\epsilon > 0$, provides a $(1+\epsilon)$-approximation in time polynomial in input size but possibly exponential in $1/\epsilon$.
*   **APX:** The class of problems for which a constant-factor approximation algorithm exists.
*   **Metric TSP:** TSP where distances satisfy the triangle inequality. Essential for the Double Tree algorithm.

---

### **5. Practice Questions and Exercises**

**Question 1:**
What is the main reason why approximation algorithms are studied in computer science?
a) To find exact solutions for NP-complete problems.
b) To develop algorithms that are faster than exponential time for NP-hard problems, even if they don't find the absolute optimum.
c) To prove that NP-hard problems are indeed hard.
d) To replace all existing polynomial-time algorithms with approximate ones.

**Question 2:**
Consider a minimization problem. If an approximation algorithm has an approximation ratio of 3, what does this mean for the solution it finds compared to the optimal solution?
a) The algorithm's solution is at least 3 times better than the optimal.
b) The algorithm's solution is at most 3 times worse than the optimal.
c) The algorithm's solution is exactly 3 times worse than the optimal.
d) The algorithm's solution is at most 1/3 times worse than the optimal.

**Question 3:**
Consider a maximization problem. If an approximation algorithm has an approximation ratio of 2, what is the minimum guarantee on the ratio of the algorithm's solution value to the optimal solution value?
a) $ALG/OPT \ge 1/2$
b) $ALG/OPT \ge 2$
c) $ALG/OPT \le 1/2$
d) $ALG/OPT \le 2$

**Question 4:**
The Double Tree algorithm for Metric TSP provides an approximation ratio of 2. What property of the TSP instance is crucial for this guarantee?
a) All cities must lie on a line.
b) The graph must be bipartite.
c) The triangle inequality must hold for the distances between cities.
d) The number of cities must be even.

**Question 5:**
Explain why an approximation algorithm is useful even if it has an approximation ratio greater than 1 (for minimization) or less than 1 (for maximization).

---

### **Answers to Practice Questions**

**Answer 1:**
b) To develop algorithms that are faster than exponential time for NP-hard problems, even if they don't find the absolute optimum.

**Answer 2:**
b) The algorithm's solution is at most 3 times worse than the optimal.
*   For minimization, $ALG/OPT \le \alpha$. So, $ALG \le 3 \cdot OPT$.

**Answer 3:**
a) $ALG/OPT \ge 1/2$
*   For maximization, $ALG/OPT \ge 1/\alpha$. With $\alpha=2$, this becomes $ALG/OPT \ge 1/2$.

**Answer 4:**
c) The triangle inequality must hold for the distances between cities.
*   This property allows "shortcutting" in the Euler tour to create a valid Hamiltonian cycle without increasing the length.

**Answer 5:**
Approximation algorithms are useful because exact algorithms for NP-hard problems are too slow for large instances. An approximation algorithm provides a practical way to get a "good enough" solution in polynomial time. Even a ratio of 2 (for minimization) or 1/2 (for maximization) is often much better than what a purely heuristic approach could guarantee, and it provides a quantifiable bound on the performance, unlike simple heuristics that might perform poorly in worst-case scenarios.

---
