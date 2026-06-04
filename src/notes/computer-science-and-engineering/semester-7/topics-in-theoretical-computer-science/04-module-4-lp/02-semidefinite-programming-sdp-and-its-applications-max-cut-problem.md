---
title: "Semidefinite Programming (SDP) and its Applications: Max-Cut Problem."
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 4: LP"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c40e"
status: "completed"
scrapedAt: "2026-05-20T17:12:05.888Z"
---
# TOPICS IN THEORETICAL COMPUTER SCIENCE

## Module 4: Linear Programming (LP) and Beyond

### Topic: Semidefinite Programming (SDP) and its Applications: Max-Cut Problem

---

### 1. Introduction to Semidefinite Programming (SDP)

#### 1.1. What is Semidefinite Programming?

*   **Semidefinite Programming (SDP)** is a subfield of convex optimization.
*   It generalizes Linear Programming (LP) by allowing the optimization variables to be positive semidefinite matrices, rather than just real numbers.
*   SDPs are fundamental to many areas of theoretical computer science, including approximation algorithms, combinatorial optimization, and quantum information theory.

#### 1.2. Standard Form of an SDP

A standard form of a minimization SDP problem is:

**Minimize:** $ \text{Tr}(CX) $

**Subject to:**
*   $ \text{Tr}(A_iX) = b_i $ for $i = 1, \dots, m $ (linear equality constraints)
*   $ X \succeq 0 $ (positive semidefinite constraint)

Where:
*   $X$ is the optimization variable, an $n \times n$ symmetric matrix.
*   $C$ and $A_i$ are given $n \times n$ symmetric matrices.
*   $b_i$ are given scalars.
*   $ \text{Tr}(\cdot) $ denotes the trace of a matrix.
*   $ X \suc ভার্চ 0 $ means $X$ is a positive semidefinite matrix. A matrix $M$ is positive semidefinite if for every non-zero vector $v$, $ v^T M v \ge 0 $. This is equivalent to all eigenvalues of $M$ being non-negative.

#### 1.3. Key Concepts and Definitions

*   **Convex Optimization:** A type of optimization where the objective function is convex and the feasible set is a convex set. SDPs are a class of convex optimization problems.
*   **Positive Semidefinite Matrix:** A symmetric matrix $M$ where for any non-zero vector $v$, $v^T M v \ge 0$. Equivalently, all its eigenvalues are non-negative.
*   **Trace of a Matrix:** The sum of the diagonal elements of a square matrix. For matrices $A$ and $B$, $ \text{Tr}(AB) = \text{Tr}(BA) $.
*   **Symmetric Matrix:** A square matrix $M$ such that $M^T = M$.
*   **Dual Problem:** Every SDP has a dual problem, which also has a specific structure. The duality theory for SDPs is analogous to that of LPs.

#### 1.4. Relationship to Linear Programming (LP)

*   LPs are a special case of SDPs where the matrix variable $X$ is restricted to be a diagonal matrix. In this case, the positive semidefinite constraint becomes non-negativity of diagonal entries, and the trace constraints become linear combinations of these diagonal entries.
*   SDPs are generally more powerful and can model a wider range of problems.

---

### 2. The Max-Cut Problem

#### 2.1. Problem Definition

*   The **Max-Cut problem** is a classical NP-hard problem in combinatorial optimization.
*   Given an undirected graph $G = (V, E)$, the goal is to partition the vertices $V$ into two disjoint sets, say $S$ and $V \setminus S$, such that the number of edges connecting vertices in $S$ to vertices in $V \setminus S$ is maximized. This set of edges is called a "cut".

#### 2.2. Formulation as an Integer Quadratic Program (IQP)

Let's define a variable $x_i$ for each vertex $v_i \in V$:
*   $x_i = 1$ if $v_i$ is in set $S$.
*   $x_i = -1$ if $v_i$ is in set $V \setminus S$.

For an edge $(v_i, v_j) \in E$:
*   If $v_i$ and $v_j$ are in the same set (both $1$ or both $-1$), the product $x_i x_j = 1$. This edge is *not* in the cut.
*   If $v_i$ and $v_j$ are in different sets ($x_i = 1, x_j = -1$ or $x_i = -1, x_j = 1$), the product $x_i x_j = -1$. This edge *is* in the cut.

The number of edges in the cut can be represented as:
$ \sum_{(v_i, v_j) \in E} \frac{1 - x_i x_j}{2} $

The Max-Cut problem can be formulated as:

**Maximize:** $ \sum_{(v_i, v_j) \in E} \frac{1 - x_i x_j}{2} $
**Subject to:** $ x_i \in \{1, -1\} $ for all $v_i \in V$.

This is an Integer Quadratic Program (IQP) because the objective function involves quadratic terms ($x_i x_j$) and the variables are restricted to discrete values.

---

### 3. Semidefinite Programming Relaxation for Max-Cut

#### 3.1. Lifting the Max-Cut Problem to Matrix Variables

The difficulty with the IQP formulation is the discrete constraint $x_i \in \{1, -1\}$. SDPs work with matrices. We need to find a way to represent the $\{1, -1\}$ constraint using matrix properties.

Consider the product $x_i x_j$. If we have vectors $u_i$ in a high-dimensional space such that $u_i \cdot u_i = 1$ (i.e., unit vectors), then we can think of the dot product $u_i \cdot u_j$ as a generalization of $x_i x_j$.

Let's associate a vector $v_i$ with each vertex $v_i$, such that $v_i \in \mathbb{R}^n$ and $\|v_i\|^2 = 1$.
We want to choose these vectors such that $v_i \cdot v_j$ captures the idea of $x_i x_j$.

If we let $x_i$ be scalar variables in $\{-1, 1\}$, then $x_i^2 = 1$.
Consider a matrix $X$ where $X_{ij} = x_i x_j$. If $x_i \in \{-1, 1\}$, then $X_{ii} = x_i^2 = 1$ and $X_{ij} = x_i x_j$.

Let's try to formulate the problem with a matrix $Y$ of size $n \times n$, where $Y_{ij}$ represents the interaction between vertex $i$ and vertex $j$.
We want $Y_{ii} = 1$ (representing $x_i^2=1$) and we want to find a matrix $Y$ that is positive semidefinite, where $Y_{ii}=1$ and $Y_{ij}$ approximates $x_i x_j$.

#### 3.2. The Goemans-Williamson SDP Relaxation

The seminal work by Goemans and Williamson provided a breakthrough in approximating Max-Cut using SDPs.

**The SDP Relaxation:**

Let $n = |V|$. We introduce an $n \times n$ matrix variable $Y$.

**Maximize:** $ \sum_{(v_i, v_j) \in E} \frac{1 - Y_{ij}}{2} $
**Subject to:**
*   $ Y_{ii} = 1 $ for all $i = 1, \dots, n $
*   $ Y \suc ভার্চ 0 $ (Y is positive semidefinite)

**Interpretation:**
*   The constraint $Y \suc ভার্চ 0$ implies that $Y$ can be written as $Y = VV^T$ for some $n \times n$ matrix $V$ (or more generally, $Y$ is the Gram matrix of some vectors). If $Y = VV^T$, we can think of the $k$-th column of $V$ as a vector $v_k \in \mathbb{R}^n$ associated with vertex $k$. Then $Y_{ij} = v_i \cdot v_j$.
*   The constraint $Y_{ii} = 1$ means $\|v_i\|^2 = 1$, so each vertex is associated with a unit vector.
*   The objective function aims to maximize the sum of terms $\frac{1 - v_i \cdot v_j}{2}$ over edges. This is maximized when $v_i \cdot v_j$ is minimized (i.e., vectors are far apart).

**Important Note:** The original IQP formulation used $x_i \in \{-1, 1\}$. The SDP relaxation uses $Y_{ij}$ where $Y_{ii}=1$. A key insight is that if we have vectors $v_i$ with $\|v_i\|^2=1$, we can set $Y_{ij} = v_i \cdot v_j$. If $v_i$ and $v_j$ are antiparallel (e.g., $v_j = -v_i$), then $Y_{ij} = -1$, which corresponds to the $x_i x_j = -1$ case in the IQP. If $v_i = v_j$, then $Y_{ij} = 1$, corresponding to $x_i x_j = 1$.

#### 3.3. Solving the SDP and Randomized Rounding

*   **Solving the SDP:** The SDP can be solved in polynomial time using interior-point methods, yielding an optimal matrix $Y^*$. The optimal value of the SDP provides an upper bound on the Max-Cut value.
*   **Randomized Rounding:** To obtain a cut from the solution $Y^*$:
    1.  Factorize $Y^*$ into $Y^* = VV^T$, where $V$ is an $n \times n$ matrix. We can view the columns of $V$ as vectors $v_1, \dots, v_n$, where $\|v_i\|^2 = Y^*_{ii} = 1$.
    2.  Choose a random hyperplane through the origin in $\mathbb{R}^n$. A hyperplane is defined by a random unit vector $r$.
    3.  For each vertex $v_i$, assign it to set $S$ if $v_i \cdot r \ge 0$ and to set $V \setminus S$ if $v_i \cdot r < 0$.

#### 3.4. Approximation Guarantee

The Goemans-Williamson algorithm achieves a remarkable approximation ratio of approximately 0.878.

*   **Theorem (Goemans, 1995):** The randomized rounding procedure described above produces a cut whose expected value is at least $ \alpha \cdot \text{OPT}_{\text{MaxCut}} $, where $ \alpha \approx 0.87856 $, and $\text{OPT}_{\text{MaxCut}}$ is the value of the optimal Max-Cut.

This is a significant improvement over previous algorithms for Max-Cut.

---

### 4. Example: Max-Cut on a Triangle Graph

Let $G = (V, E)$ where $V = \{1, 2, 3\}$ and $E = \{(1,2), (2,3), (3,1)\}$. This is a complete graph $K_3$.

**Max-Cut (IQP formulation):**
Maximize $ \frac{1 - x_1 x_2}{2} + \frac{1 - x_2 x_3}{2} + \frac{1 - x_3 x_1}{2} $
Subject to $ x_i \in \{-1, 1\} $.

If we set $x_1=1, x_2=1, x_3=-1$, the cut value is:
$ \frac{1 - (1)(1)}{2} + \frac{1 - (1)(-1)}{2} + \frac{1 - (-1)(1)}{2} = \frac{0}{2} + \frac{2}{2} + \frac{2}{2} = 0 + 1 + 1 = 2 $.
This is the maximum possible cut for a triangle (cutting one vertex from the other two).

**SDP Relaxation:**
Maximize $ \frac{1 - Y_{12}}{2} + \frac{1 - Y_{23}}{2} + \frac{1 - Y_{31}}{2} $
Subject to:
*   $ Y_{11} = 1, Y_{22} = 1, Y_{33} = 1 $
*   $ Y = \begin{pmatrix} Y_{11} & Y_{12} & Y_{13} \\ Y_{21} & Y_{22} & Y_{23} \\ Y_{31} & Y_{32} & Y_{33} \end{pmatrix} \suc ভার্চ 0 $ (and $Y_{ij}=Y_{ji}$)

**Solving this specific SDP:**
For $K_3$, an optimal solution for the SDP relaxation is achieved by placing vectors in $\mathbb{R}^2$ as vertices of an equilateral triangle inscribed in a unit circle.

Let $v_1 = (1, 0)$.
Let $v_2 = (\cos(2\pi/3), \sin(2\pi/3)) = (-1/2, \sqrt{3}/2)$.
Let $v_3 = (\cos(4\pi/3), \sin(4\pi/3)) = (-1/2, -\sqrt{3}/2)$.

Then $\|v_i\|^2 = 1$ for all $i$.
The dot products are:
$ Y_{12} = v_1 \cdot v_2 = 1 \cdot (-1/2) + 0 \cdot (\sqrt{3}/2) = -1/2 $.
$ Y_{23} = v_2 \cdot v_3 = (-1/2)(-1/2) + (\sqrt{3}/2)(-\sqrt{3}/2) = 1/4 - 3/4 = -1/2 $.
$ Y_{31} = v_3 \cdot v_1 = (-1/2) \cdot 1 + (-\sqrt{3}/2) \cdot 0 = -1/2 $.

The matrix $Y$ would be:
$ Y = \begin{pmatrix} 1 & -1/2 & -1/2 \\ -1/2 & 1 & -1/2 \\ -1/2 & -1/2 & 1 \end{pmatrix} $
This matrix is positive semidefinite.

The value of the SDP is:
$ \frac{1 - (-1/2)}{2} + \frac{1 - (-1/2)}{2} + \frac{1 - (-1/2)}{2} = \frac{3/2}{2} + \frac{3/2}{2} + \frac{3/2}{2} = \frac{3}{4} + \frac{3}{4} + \frac{3}{4} = \frac{9}{4} = 2.25 $.
This is an upper bound on the Max-Cut value.

**Randomized Rounding:**
Suppose we pick a random hyperplane (in this 2D case, a random line through the origin).
If we choose the line $y=0$ (defined by normal vector $(0,1)$), then:
$v_1 \cdot (0,1) = 0 \implies v_1$ on the hyperplane. (Arbitrarily assign to $S$).
$v_2 \cdot (0,1) = \sqrt{3}/2 > 0 \implies v_2$ in $S$.
$v_3 \cdot (0,1) = -\sqrt{3}/2 < 0 \implies v_3$ in $V \setminus S$.
Cut: $(1,2), (2,3), (3,1)$. Sets: $S=\{1,2\}, V \setminus S=\{3\}$.
Edges cut: $(2,3)$ and $(3,1)$. Cut value = 2.

If we choose the line $x=0$ (defined by normal vector $(1,0)$), then:
$v_1 \cdot (1,0) = 1 > 0 \implies v_1$ in $S$.
$v_2 \cdot (1,0) = -1/2 < 0 \implies v_2$ in $V \setminus S$.
$v_3 \cdot (1,0) = -1/2 < 0 \implies v_3$ in $V \setminus S$.
Cut: $(1,2), (2,3), (3,1)$. Sets: $S=\{1\}, V \setminus S=\{2,3\}$.
Edges cut: $(1,2)$ and $(1,3)$. Cut value = 2.

The expected value over all random hyperplanes will be $ \frac{9}{4} \times \alpha \approx 2.25 \times 0.878 \approx 1.97$.
The actual maximum cut is 2. The SDP provides a bound and a randomized algorithm.

---

### 5. Applications of SDPs in Theoretical Computer Science

*   **Approximation Algorithms:** Beyond Max-Cut, SDPs are used for approximating solutions to NP-hard problems like Max-k-Cut, Traveling Salesperson Problem, Quadratic Assignment Problem, and Graph Coloring.
*   **Complexity Theory:** SDPs are related to the complexity class $\text{P}^{\text{NP}[1]}$ and provide insights into the limits of polynomial-time computation.
*   **Quantum Computing:** SDPs are used to model and analyze quantum entanglement and to design quantum algorithms.
*   **Error Correction Codes:** Constructions of good error-correcting codes often involve SDPs.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the main difference between Linear Programming (LP) and Semidefinite Programming (SDP)?

**Question 2:**
Formulate the Max-Cut problem for a graph $G=(V,E)$ with edge weights $w_{ij}$ for each edge $(v_i, v_j)$ as an Integer Quadratic Program (IQP).

**Question 3:**
Write down the SDP relaxation for the weighted Max-Cut problem.

**Question 4:**
Consider a graph with 3 vertices and edges $(1,2)$ and $(2,3)$ with weights $w_{12}=2$ and $w_{23}=3$. What is the optimal Max-Cut value? Write down the SDP relaxation for this graph.

**Question 5:**
Briefly explain the randomized rounding procedure used in the Goemans-Williamson algorithm for Max-Cut. What is the significance of the approximation ratio achieved by this algorithm?

---

### 7. Answers to Practice Questions

**Answer 1:**
The main difference is that LP optimizes over a polytope defined by linear inequalities, while SDP optimizes over a cone of positive semidefinite matrices, subject to linear constraints. In LP, variables are real numbers, whereas in SDP, the variables are matrices.

**Answer 2:**
Let $x_i = 1$ if vertex $v_i$ is in set $S$, and $x_i = -1$ if $v_i$ is in set $V \setminus S$.
The weighted Max-Cut problem is:
Maximize $ \sum_{(v_i, v_j) \in E} w_{ij} \frac{1 - x_i x_j}{2} $
Subject to $ x_i \in \{1, -1\} $ for all $v_i \in V$.

**Answer 3:**
Let $n = |V|$ and $w_{ij}$ be the weight of edge $(v_i, v_j)$. The SDP relaxation for the weighted Max-Cut problem is:
Maximize $ \sum_{(v_i, v_j) \in E} w_{ij} \frac{1 - Y_{ij}}{2} $
Subject to:
*   $ Y_{ii} = 1 $ for all $i = 1, \dots, n $
*   $ Y \suc ভার্চ 0 $ (Y is an $n \times n$ symmetric positive semidefinite matrix)

**Answer 4:**
Graph: $V = \{1, 2, 3\}$, $E = \{(1,2), (2,3)\}$, $w_{12}=2$, $w_{23}=3$.

**Optimal Max-Cut:**
Possible partitions:
*   $S=\{1\}, V\setminus S=\{2,3\}$: Edges cut: $(1,2)$. Value = 2.
*   $S=\{2\}, V\setminus S=\{1,3\}$: Edges cut: $(1,2), (2,3)$. Value = 2 + 3 = 5.
*   $S=\{3\}, V\setminus S=\{1,2\}$: Edges cut: $(2,3)$. Value = 3.
*   $S=\{1,2\}, V\setminus S=\{3\}$: Edges cut: $(2,3)$. Value = 3.
*   $S=\{1,3\}, V\setminus S=\{2\}$: Edges cut: $(1,2), (2,3)$. Value = 2 + 3 = 5.
*   $S=\{2,3\}, V\setminus S=\{1\}$: Edges cut: $(1,2)$. Value = 2.

The optimal Max-Cut value is 5.

**SDP Relaxation:**
Maximize $ 2 \frac{1 - Y_{12}}{2} + 3 \frac{1 - Y_{23}}{2} $
Subject to:
*   $ Y_{11} = 1, Y_{22} = 1, Y_{33} = 1 $
*   $ Y = \begin{pmatrix} Y_{11} & Y_{12} & Y_{13} \\ Y_{21} & Y_{22} & Y_{23} \\ Y_{31} & Y_{32} & Y_{33} \end{pmatrix} \suc ভার্চ 0 $ (and $Y_{ij}=Y_{ji}$)

**Answer 5:**
The randomized rounding procedure involves:
1.  **Solving the SDP:** Obtain the optimal matrix $Y^*$.
2.  **Factorization:** Factorize $Y^* = VV^T$ to get vectors $v_1, \dots, v_n$ where $\|v_i\|^2 = 1$ and $v_i \cdot v_j = Y^*_{ij}$.
3.  **Random Hyperplane:** Choose a random unit vector $r$ and define a hyperplane through the origin with normal $r$.
4.  **Partitioning:** Assign vertex $v_i$ to set $S$ if $v_i \cdot r \ge 0$, and to $V \setminus S$ if $v_i \cdot r < 0$.

The significance of the approximation ratio (approx. 0.878 for Max-Cut) is that it provides a provable guarantee on the quality of the solution obtained by the algorithm. It means that the expected value of the cut produced by the algorithm is at least 87.8% of the value of the true optimal Max-Cut, even though Max-Cut is NP-hard. This is a major theoretical achievement in the field of approximation algorithms.

---

### 8. Important Points to Remember

*   SDP generalizes LP by allowing matrix variables that are positive semidefinite.
*   SDPs are convex optimization problems and can be solved in polynomial time.
*   Max-Cut is an NP-hard problem.
*   The SDP relaxation for Max-Cut introduces matrix variables $Y_{ij}$ where $Y_{ii}=1$ and $Y \suc ভার্চ 0$.
*   The Goemans-Williamson algorithm uses SDP relaxation followed by randomized rounding to approximate Max-Cut.
*   The algorithm achieves an approximation ratio of ~0.878, which is a significant theoretical result.
*   SDPs have broad applications in theoretical computer science and beyond.
