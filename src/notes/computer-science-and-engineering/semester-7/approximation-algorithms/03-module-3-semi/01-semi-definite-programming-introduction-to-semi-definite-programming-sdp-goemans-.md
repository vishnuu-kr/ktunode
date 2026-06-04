---
title: "Semi-Definite Programming - Introduction to semi-definite programming (SDP), Goemans-Williamson algorithm for MAX-CUT, Other applications of SDP. (Chapter 8)"
subject: "APPROXIMATION ALGORITHMS"
module: "Module 3: Semi"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c37e"
status: "completed"
scrapedAt: "2026-05-20T17:00:45.826Z"
---
# Approximation Algorithms: Module 3 - Semi-Definite Programming (SDP)

## Chapter 8: Semi-Definite Programming

This chapter introduces Semi-Definite Programming (SDP), a powerful optimization framework with significant applications in approximation algorithms. We will focus on understanding the basics of SDP, exploring its application to the MAX-CUT problem through the groundbreaking Goemans-Williamson algorithm, and briefly touching upon other areas where SDP is utilized.

---

### Learning Outcomes:

By the end of this chapter, you should be able to:

1.  **Define Semi-Definite Programming (SDP):** Understand the fundamental structure and constraints of SDP problems.
2.  **Explain the relaxation of Integer Quadratic Programs (IQPs) to SDPs:** Grasp how combinatorial optimization problems can be formulated as IQPs and then relaxed to SDPs.
3.  **Describe the Goemans-Williamson algorithm for MAX-CUT:** Understand the steps involved in the algorithm, including the SDP relaxation, random hyperplane rounding, and the approximation guarantee.
4.  **Analyze the approximation ratio of the Goemans-Williamson algorithm:** Understand the mathematical basis for its $\approx 0.878$ approximation factor.
5.  **Identify other applications of SDP in approximation algorithms:** Recognize how SDP can be used to tackle other combinatorial optimization problems.

---

### 1. Introduction to Semi-Definite Programming (SDP)

**What is an SDP?**

Semi-Definite Programming (SDP) is a type of convex optimization problem where the objective function is linear, and the constraints involve linear matrix inequalities (LMIs). It is a generalization of linear programming (LP).

**Key Concepts and Definitions:**

*   **Symmetric Matrices:** Matrices that are equal to their transpose ($A = A^T$).
*   **Positive Semi-Definite (PSD) Matrix:** A symmetric matrix $X$ is positive semi-definite if for any non-zero vector $v$, $v^T X v \ge 0$.
*   **Positive Definite (PD) Matrix:** A symmetric matrix $X$ is positive definite if for any non-zero vector $v$, $v^T X v > 0$.
*   **Matrix Norms:** While not strictly necessary for the definition, understanding matrix norms (e.g., Frobenius norm) can be helpful in analyzing SDPs.
*   **Linear Matrix Inequality (LMI):** An inequality of the form $A_0 + \sum_{i=1}^k x_i A_i \succeq 0$, where $A_0, A_1, \ldots, A_k$ are symmetric matrices and $x_1, \ldots, x_k$ are variables. The symbol $\succeq 0$ denotes that the matrix is positive semi-definite.

**Standard Form of an SDP:**

An SDP can be written in the following standard form:

Minimize: $\operatorname{Tr}(CX)$
Subject to:
1.  $\operatorname{Tr}(A_i X) = b_i$ for $i = 1, \ldots, m$ (linear equality constraints)
2.  $X \succeq 0$ (positive semi-definite constraint)

Here:
*   $X$ is the optimization variable, an $n \times n$ symmetric matrix.
*   $C$ is a given $n \times n$ symmetric matrix (objective function coefficient).
*   $A_i$ are given $n \times n$ symmetric matrices.
*   $b_i$ are given scalars.
*   $\operatorname{Tr}(M)$ denotes the trace of matrix $M$ (sum of diagonal elements).

**Duality:**

SDPs have a dual formulation, which is also an SDP. The dual problem is often important for theoretical analysis and provides alternative ways to solve or understand the primal problem.

---

### 2. Relaxation of Integer Quadratic Programs (IQPs) to SDPs

Many combinatorial optimization problems can be formulated as Integer Quadratic Programs (IQPs). These are generally NP-hard. SDPs offer a powerful way to relax these IQPs, leading to approximate solutions.

**Example: MAX-CUT Problem Formulation**

The MAX-CUT problem aims to partition the vertices of a graph $G=(V, E)$ into two sets, say $S$ and $V \setminus S$, to maximize the number of edges that have one endpoint in $S$ and the other in $V \setminus S$.

**Integer Quadratic Programming (IQP) Formulation for MAX-CUT:**

Let $V = \{v_1, v_2, \ldots, v_n\}$.
For each vertex $v_i$, introduce a variable $x_i \in \{-1, 1\}$.
*   If $x_i = 1$, vertex $v_i$ is in one set (e.g., $S$).
*   If $x_i = -1$, vertex $v_i$ is in the other set (e.g., $V \setminus S$).

The objective is to maximize the sum of weights of cut edges. An edge $(v_i, v_j)$ with weight $w_{ij}$ is cut if $x_i \neq x_j$. This condition is equivalent to $x_i x_j = -1$.

The IQP formulation is:
Maximize: $\sum_{1 \le i < j \le n} w_{ij} \frac{1 - x_i x_j}{2}$
Subject to: $x_i \in \{-1, 1\}$ for all $i \in V$.

The term $\frac{1 - x_i x_j}{2}$ is 1 if $x_i \neq x_j$ and 0 if $x_i = x_j$.

**Relaxation to SDP:**

The constraint $x_i \in \{-1, 1\}$ is problematic for standard optimization techniques. We can relax this by introducing a different set of variables.

Consider vector variables $\mathbf{v}_i \in \mathbb{R}^n$ for each vertex $i$, such that $||\mathbf{v}_i||^2 = 1$. This means each $\mathbf{v}_i$ lies on the surface of the unit sphere.

If we could set $x_i = \mathbf{v}_i \cdot \mathbf{u}$ for some fixed vector $\mathbf{u}$ with $||\mathbf{u}||=1$, then $x_i \in \{-1, 1\}$ would be satisfied if $\mathbf{v}_i$ is either $\mathbf{u}$ or $-\mathbf{u}$.

The product $x_i x_j$ can be represented as $(\mathbf{v}_i \cdot \mathbf{u})(\mathbf{v}_j \cdot \mathbf{u})$. This doesn't directly translate to a simple matrix form.

Instead, we consider a matrix variable $X$, where $X_{ij} = \mathbf{v}_i \cdot \mathbf{v}_j$.

The constraint $||\mathbf{v}_i||^2 = 1$ implies $\mathbf{v}_i \cdot \mathbf{v}_i = 1$. Therefore, $X_{ii} = 1$ for all $i$.

The term $x_i x_j$ in the IQP can be "approximated" by $\mathbf{v}_i \cdot \mathbf{v}_j$. If we let $x_i = \mathbf{v}_i \cdot \mathbf{u}$, then $x_i x_j = (\mathbf{v}_i \cdot \mathbf{u})(\mathbf{v}_j \cdot \mathbf{u})$.

A key insight is to reformulate the objective using dot products.
Maximize: $\sum_{1 \le i < j \le n} w_{ij} \frac{1 - (\mathbf{v}_i \cdot \mathbf{v}_j)}{2}$
Subject to:
*   $||\mathbf{v}_i||^2 = 1$ for all $i \in V$
*   $\mathbf{v}_i \in \mathbb{R}^n$

This is still not an SDP. We introduce a matrix variable $X$ of size $(n+1) \times (n+1)$. Let $X$ be a Gram matrix of vectors $\{\mathbf{v}_0, \mathbf{v}_1, \ldots, \mathbf{v}_n\}$, where $\mathbf{v}_0$ is a vector of zeros and $\mathbf{v}_i$ are the vectors representing vertices.

Let's use a slightly different representation for clarity. We are looking for vectors $\mathbf{v}_i \in \mathbb{R}^d$ (where $d$ is the dimension of the embedding space, often $n$ or $\log n$) such that $||\mathbf{v}_i|| = 1$.

Let $X_{ij} = \mathbf{v}_i \cdot \mathbf{v}_j$. The matrix $X$ formed by these dot products must be positive semi-definite.
The constraints become:
*   $X_{ii} = 1$ for all $i$
*   $X \succeq 0$ (because $X$ is a Gram matrix)

The objective function becomes:
Maximize: $\sum_{1 \le i < j \le n} w_{ij} \frac{1 - X_{ij}}{2}$

This is an SDP problem (after converting maximization to minimization).

**SDP Relaxation for MAX-CUT:**

Minimize: $-\sum_{1 \le i < j \le n} w_{ij} \frac{1 - X_{ij}}{2}$
Subject to:
1.  $X_{ii} = 1$ for all $i = 1, \ldots, n$
2.  $X \succeq 0$
3.  $X$ is symmetric (implicit for Gram matrices)

**Important Note:** The relaxation is to a *semidefinite program*, not a linear program. The variable is a matrix $X$, not a vector.

---

### 3. The Goemans-Williamson Algorithm for MAX-CUT

The Goemans-Williamson algorithm (1995) provides a randomized approximation for MAX-CUT using SDP relaxation.

**Algorithm Steps:**

1.  **Formulate and Solve the SDP Relaxation:**
    *   Given a graph $G=(V, E)$ with edge weights $w_{ij}$, formulate the SDP relaxation for MAX-CUT as described above.
    *   Solve this SDP using a polynomial-time SDP solver to obtain an optimal $n \times n$ positive semi-definite matrix $X^*$.

2.  **Generate Random Vectors:**
    *   The matrix $X^*$ is a Gram matrix, meaning it can be decomposed as $X^* = V V^T$, where $V$ is an $n \times d$ matrix whose columns are orthonormal vectors $\mathbf{v}_1, \ldots, \mathbf{v}_n$ in $\mathbb{R}^d$ (typically $d=n$). However, a more practical approach for rounding is to use the eigenvalue decomposition of $X^*$.
    *   Let $X^* = \sum_{k=1}^n \lambda_k \mathbf{u}_k \mathbf{u}_k^T$ be the eigenvalue decomposition of $X^*$, where $\lambda_k \ge 0$ are eigenvalues and $\mathbf{u}_k$ are corresponding orthonormal eigenvectors.
    *   To obtain the vectors $\mathbf{v}_i$ (satisfying $X^*_{ij} = \mathbf{v}_i \cdot \mathbf{v}_j$), we can sample them. One way is to realize that $X^*$ can be viewed as a covariance matrix. We can sample vectors $\mathbf{v}_i$ from a multivariate Gaussian distribution with mean zero and covariance matrix $X^*$.
    *   Alternatively and more commonly cited for explanation: Let $X^* = U \Lambda U^T$, where $\Lambda$ is a diagonal matrix of eigenvalues and $U$ is an orthogonal matrix of eigenvectors. Then we can define $\mathbf{v}_i$ as the $i$-th row of $U D$, where $D$ is a diagonal matrix with $D_{kk} = \sqrt{\lambda_k}$. This ensures $\mathbf{v}_i \cdot \mathbf{v}_j = X^*_{ij}$.

3.  **Random Hyperplane Rounding:**
    *   Choose a random vector $\mathbf{r}$ from a spherically symmetric distribution in $\mathbb{R}^d$ (e.g., a standard Gaussian distribution where each component is independently drawn from $\mathcal{N}(0,1)$).
    *   For each vertex $v_i$, assign it to set $S$ if $\mathbf{v}_i \cdot \mathbf{r} \ge 0$, and to set $V \setminus S$ if $\mathbf{v}_i \cdot \mathbf{r} < 0$.

4.  **Output the Partition:**
    *   The partition obtained from the rounding is the approximate solution to MAX-CUT.

**Intuition for Rounding:**

The random hyperplane divides the sphere (where the $\mathbf{v}_i$ vectors lie) into two hemispheres. The probability that two vectors $\mathbf{v}_i$ and $\mathbf{v}_j$ end up on opposite sides of the hyperplane depends on the angle between them. The dot product $\mathbf{v}_i \cdot \mathbf{v}_j$ captures this angle information from the SDP solution.

The probability that $\mathbf{v}_i$ and $\mathbf{v}_j$ are separated by a random hyperplane is $\frac{1}{\pi} \arccos(\mathbf{v}_i \cdot \mathbf{v}_j)$.

---

### 4. Approximation Ratio of the Goemans-Williamson Algorithm

**Key Result:** The Goemans-Williamson algorithm achieves an expected approximation ratio of at least $\approx 0.87856$.

**Derivation Sketch:**

Let $OPT$ be the value of the optimal MAX-CUT.
Let $SDP^*$ be the value of the SDP relaxation. We know $SDP^* \ge OPT$.

The expected value of the cut produced by the randomized rounding algorithm is:
$E[\text{Cut}] = \sum_{1 \le i < j \le n} w_{ij} P(v_i \text{ and } v_j \text{ are separated})$

The probability that $v_i$ and $v_j$ are separated by a random hyperplane is $\frac{1}{\pi} \arccos(\mathbf{v}_i \cdot \mathbf{v}_j)$.
So, $E[\text{Cut}] = \sum_{1 \le i < j \le n} w_{ij} \frac{1}{\pi} \arccos(\mathbf{v}_i \cdot \mathbf{v}_j)$.

Goemans and Williamson proved that for any two unit vectors $\mathbf{u}, \mathbf{v}$:
$\frac{1}{\pi} \arccos(\mathbf{u} \cdot \mathbf{v}) \ge \beta (\mathbf{u} \cdot \mathbf{v})$
where $\beta = \frac{2}{\pi} \approx 0.6366$. This is the " $\beta$ " factor for MAX-CUT.

This inequality is crucial. It means that the expected contribution of an edge $(i, j)$ to the cut, in terms of its weight $w_{ij}$ and the dot product $X^*_{ij}$, is at least $\beta$ times its contribution in the SDP.

$E[\text{Cut}] = \sum_{1 \le i < j \le n} w_{ij} \frac{1}{\pi} \arccos(X^*_{ij}) \ge \sum_{1 \le i < j \le n} w_{ij} \beta X^*_{ij} = \beta \sum_{1 \le i < j \le n} w_{ij} X^*_{ij}$.

The SDP objective value (after converting maximization to minimization) was:
Minimize: $-\sum_{1 \le i < j \le n} w_{ij} \frac{1 - X^*_{ij}}{2}$
So, $SDP^* = \sum_{1 \le i < j \le n} w_{ij} \frac{1 - X^*_{ij}}{2}$ (assuming the original problem was maximization).

This can be rewritten as:
$2 \cdot SDP^* = \sum_{1 \le i < j \le n} w_{ij} - \sum_{1 \le i < j \le n} w_{ij} X^*_{ij}$.
So, $\sum_{1 \le i < j \le n} w_{ij} X^*_{ij} = \sum_{1 \le i < j \le n} w_{ij} - 2 \cdot SDP^*$.

This doesn't seem to lead directly to the $\approx 0.878$ factor easily without deeper results. The actual proof involves a more refined analysis of the $\frac{1}{\pi} \arccos(x)$ function and its relationship to $x$.

The actual analysis uses a stronger inequality:
$\frac{1}{\pi} \arccos(x) \ge \alpha x + \beta$ for certain $\alpha, \beta$.
However, the key is that the integral of $\frac{1}{\pi} \arccos(x)$ from $-1$ to $1$ is 1, and the integral of $x$ is 0.

The core result comes from a specific function:
Let $f(x) = \frac{1}{\pi} \arccos(x)$. Goemans and Williamson showed that there exists a constant $\gamma$ such that:
$E[\text{Cut}] = \sum w_{ij} f(X^*_{ij}) \ge \gamma \sum w_{ij} \frac{1 - X^*_{ij}}{2}$
The constant $\gamma$ is the minimum value of $\frac{\sum w_{ij} f(X^*_{ij})}{\sum w_{ij} \frac{1 - X^*_{ij}}{2}}$ over all $X^*$.
This minimum is achieved for a specific value of $X^*_{ij}$, and it turns out to be $\approx 0.87856$.

**The constant $\alpha = \frac{2}{\pi} \approx 0.6366$ is related to the case where $X^*_{ij} = x$, and $\frac{1}{\pi}\arccos(x) \ge \frac{2}{\pi} x$. This gives an approximation of $\approx 0.6366$. The improved factor comes from considering the distribution of $X^*_{ij}$ values.**

**Important Point to Remember:** The Goemans-Williamson algorithm is *randomized* and provides an *expected* approximation guarantee. The actual cut value for a single run might be lower, but over many runs, the average will be good.

---

### 5. Other Applications of SDP in Approximation Algorithms

SDP relaxations have been successfully applied to a variety of NP-hard combinatorial optimization problems, including:

*   **MAX-3SAT:** Finding an assignment of boolean variables to satisfy the maximum number of clauses in a 3-CNF formula. The Goemans-Williamson approach can be adapted.
*   **Graph Coloring:** Approximating the chromatic number of a graph.
*   **Quadratic Assignment Problem (QAP):** A notoriously difficult problem with applications in facility location and circuit design. SDP relaxations provide some of the best known approximation guarantees.
*   **Set Cover:** While LPs can solve set cover exactly, SDPs can sometimes offer tighter relaxations or alternative approaches for variations of the problem.
*   **Principal Component Analysis (PCA) and Matrix Approximation:** In machine learning, SDPs are used for dimensionality reduction and finding low-rank approximations of matrices.
*   **Combinatorial Optimization on Quantum Computers:** SDP formulations are being explored for designing quantum algorithms.

**General Idea:**

Many combinatorial problems can be formulated as minimizing/maximizing a quadratic function subject to quadratic constraints (often binary variables). The trick is to find a suitable embedding into a higher-dimensional space (represented by matrix variables in SDP) where the problem becomes convex and tractable, and then round the SDP solution back to a valid combinatorial solution.

---

### Practice Questions

**Question 1:**
What is the defining characteristic of a positive semi-definite matrix $X$?
a) All its eigenvalues are positive.
b) For any non-zero vector $v$, $v^T X v > 0$.
c) For any non-zero vector $v$, $v^T X v \ge 0$.
d) It is equal to its transpose.

**Question 2:**
Which of the following is a valid constraint in a standard Semi-Definite Program?
a) $X > 0$ (positive definite)
b) $X \succeq 0$ (positive semi-definite)
c) $X = 0$
d) $X < 0$ (negative definite)

**Question 3:**
In the SDP relaxation for MAX-CUT, what do the diagonal elements of the matrix variable $X$ represent?
a) The weight of an edge.
b) The fact that a vertex is in one of the partitions.
c) The squared norm of the vector assigned to a vertex.
d) The dot product of a vector with itself.

**Question 4:**
What is the approximate expected approximation ratio achieved by the Goemans-Williamson algorithm for MAX-CUT?
a) 0.5
b) 0.6366
c) 0.87856
d) 1.0

**Question 5:**
The Goemans-Williamson algorithm uses a technique called "random hyperplane rounding." Briefly explain what this means and how it leads to a partition of the vertices.

---

### Answers to Practice Questions

**Answer 1:**
c) For any non-zero vector $v$, $v^T X v \ge 0$.
*   *(Explanation: This is the definition of a positive semi-definite matrix. Option (a) defines positive definite matrices. Option (b) also defines positive definite matrices. Option (d) is about symmetry, which is a prerequisite for PSD, but not the defining characteristic of it.)*

**Answer 2:**
b) $X \succeq 0$ (positive semi-definite)
*   *(Explanation: The positive semi-definite constraint is the hallmark of SDPs. Option (a) is a stricter constraint (positive definite). Option (c) is a specific equality constraint. Option (d) refers to negative definite matrices.)*

**Answer 3:**
c) The squared norm of the vector assigned to a vertex.
*   *(Explanation: In the SDP relaxation for MAX-CUT, we associate each vertex $i$ with a vector $\mathbf{v}_i$ on the unit sphere. The matrix variable $X_{ij}$ stores the dot product $\mathbf{v}_i \cdot \mathbf{v}_j$. Therefore, $X_{ii} = \mathbf{v}_i \cdot \mathbf{v}_i = ||\mathbf{v}_i||^2$. The SDP constraint $X_{ii}=1$ enforces $||\mathbf{v}_i||^2 = 1$, meaning the vectors are on the unit sphere.)*

**Answer 4:**
c) 0.87856
*   *(Explanation: This is the famous approximation ratio for the Goemans-Williamson algorithm, achieved by randomly rounding the SDP solution.)*

**Answer 5:**
The "random hyperplane rounding" technique involves obtaining a set of vectors $\{\mathbf{v}_i\}_{i \in V}$ from the SDP solution (where $X^*_{ij} = \mathbf{v}_i \cdot \mathbf{v}_j$). Then, a random hyperplane is generated by picking a random vector $\mathbf{r}$ from a spherically symmetric distribution. Each vertex $v_i$ is assigned to one partition if its corresponding vector $\mathbf{v}_i$ lies on one side of the hyperplane (e.g., $\mathbf{v}_i \cdot \mathbf{r} \ge 0$) and to the other partition if it lies on the opposite side ($\mathbf{v}_i \cdot \mathbf{r} < 0$). This process effectively splits the set of vectors (and thus the vertices) into two groups based on the hyperplane's orientation.

---

### Important Points to Remember:

*   **SDP as a Generalization:** SDPs are a powerful generalization of Linear Programs, allowing for matrix variables and Linear Matrix Inequalities (LMIs).
*   **Convexity:** SDPs are convex optimization problems, which means they can be solved in polynomial time using interior-point methods.
*   **Relaxation Power:** The ability to relax NP-hard problems (like IQPs) to SDPs is key to finding approximate solutions. The gap between the SDP value and the optimal integer solution is often controlled by the SDP formulation.
*   **Goemans-Williamson for MAX-CUT:** This algorithm is a landmark achievement, demonstrating how SDPs can yield significantly better approximation ratios than previously known. Its $\approx 0.878$ factor is still the best known for MAX-CUT.
*   **Randomization:** Many SDP-based approximation algorithms involve a randomized rounding step. The approximation guarantee is typically in expectation.
*   **Applications are Broad:** SDPs are not limited to MAX-CUT; they are a fundamental tool in the toolbox of approximation algorithm design for a wide range of NP-hard problems.

---
