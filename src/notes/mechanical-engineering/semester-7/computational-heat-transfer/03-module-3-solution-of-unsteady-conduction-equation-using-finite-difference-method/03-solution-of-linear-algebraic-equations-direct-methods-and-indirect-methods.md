---
title: "Solution of linear algebraic equations- direct methods and indirect methods."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 3: Solution of unsteady conduction equation using finite difference method"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446437a"
status: "completed"
scrapedAt: "2026-05-20T18:10:40.079Z"
---
# Computational Heat Transfer: Module 3 - Solution of Unsteady Conduction Equation using Finite Difference Method

## Topic: Solution of Linear Algebraic Equations - Direct and Indirect Methods

### Introduction

In computational heat transfer, the finite difference method (FDM) discretizes partial differential equations (PDEs) into a system of linear algebraic equations. Solving these systems is a crucial step in obtaining the temperature distribution over time. This module focuses on the methods for solving these linear algebraic equations, categorized into direct methods and indirect (iterative) methods. Understanding these methods is essential for CO4 (To understand various methods to solve system of linear algebraic equations) and for enabling CO5 (To solve simple problems of steady and unsteady conduction using numerical techniques).

---

### 1. Understanding the System of Linear Algebraic Equations

The discretization of the unsteady heat conduction equation using FDM often results in a system of linear algebraic equations in the form:

**[A] {T} = {B}**

Where:
*   **[A]**: The coefficient matrix, derived from the discretized differential equation and boundary conditions. It often exhibits specific properties like being symmetric, positive-definite, and sparse.
*   **{T}**: The vector of unknown nodal temperatures at a particular time step.
*   **{B}**: The right-hand side vector, containing contributions from source terms, boundary conditions, and previous time steps.

**Example:** For a 1D unsteady heat conduction equation with constant thermal properties and explicit discretization, the system at time step `n+1` might look like:

$T_{i}^{n+1} = T_{i}^{n} + \alpha \Delta t \left( \frac{T_{i+1}^{n} - 2T_{i}^{n} + T_{i-1}^{n}}{(\Delta x)^2} \right)$

Rearranging this for a specific time step (e.g., if solving implicitly or for an unknown at a specific location), we can get a linear system. For implicit schemes, it often takes the form:

$-a_i T_{i-1}^{n+1} + b_i T_{i}^{n+1} - c_i T_{i+1}^{n+1} = d_i$

where $a_i, b_i, c_i, d_i$ are coefficients dependent on $\alpha$, $\Delta t$, $\Delta x$, and previous time step values. This forms a tridiagonal matrix.

**Key Concept:** The properties of the matrix **[A]** (e.g., sparsity, bandwidth, symmetry) significantly influence the choice of the solution method.

---

### 2. Direct Methods

Direct methods aim to solve the linear system in a finite, fixed number of operations, theoretically yielding the exact solution (ignoring round-off errors).

#### 2.1. Gaussian Elimination

**Concept:** Gaussian elimination transforms the original system **[A] {T} = {B}** into an equivalent upper triangular system **[U] {T} = {C}** through a series of elementary row operations. This upper triangular system can then be solved efficiently using back substitution.

**Process:**
1.  **Forward Elimination:** Row operations are used to create zeros below the diagonal elements of matrix [A], transforming it into an upper triangular matrix [U]. The same operations are applied to the vector {B} to obtain {C}.
2.  **Back Substitution:** Starting from the last equation, the unknown temperatures are solved sequentially upwards.

**Textbook Reference:** Sastry (2012) provides a detailed explanation of Gaussian elimination, including its application to solving linear systems.

**Example (2x2 system):**
Consider the system:
$2x + 3y = 7$
$x + y = 3$

Augmented matrix:
$[ \begin{array}{cc|c} 2 & 3 & 7 \\ 1 & 1 & 3 \end{array} ]$

Divide R1 by 2:
$[ \begin{array}{cc|c} 1 & 3/2 & 7/2 \\ 1 & 1 & 3 \end{array} ]$

R2 = R2 - R1:
$[ \begin{array}{cc|c} 1 & 3/2 & 7/2 \\ 0 & -1/2 & -1/2 \end{array} ]$

From the second row: $(-1/2)y = -1/2 \implies y = 1$
From the first row: $x + (3/2)(1) = 7/2 \implies x = 7/2 - 3/2 = 4/2 = 2$
Solution: $x=2, y=1$.

**Limitations:**
*   **Computational Cost:** For large systems, the number of operations can be significant, typically $O(n^3)$ for an $n \times n$ matrix.
*   **Round-off Errors:** Can accumulate, especially for ill-conditioned matrices.
*   **Memory Requirements:** Storing the full matrix [A] can be memory-intensive for large, sparse systems.

#### 2.2. Thomas Algorithm (Tridiagonal Matrix Algorithm - TDMA)

**Concept:** This is a specialized and highly efficient form of Gaussian elimination for solving tridiagonal systems of linear equations, which frequently arise from the discretization of 1D problems in heat transfer and fluid flow.

**System Form:**
$b_1 T_1 + c_1 T_2 = d_1$
$a_i T_{i-1} + b_i T_i + c_i T_{i+1} = d_i$  for $i = 2, ..., n-1$
$a_n T_{n-1} + b_n T_n = d_n$

**Process:**
The algorithm involves two passes:
1.  **Forward Elimination:** Modifies the coefficients to eliminate the sub-diagonal elements. The coefficients are modified such that the matrix becomes upper triangular.
    *   $c'_1 = c_1 / b_1$
    *   $d'_1 = d_1 / b_1$
    *   For $i = 2, ..., n$:
        *   $m_i = a_i / b'_{i-1}$
        *   $b'_i = b_i - m_i c_{i-1}$
        *   $c'_i = c_i / b'_i$
        *   $d'_i = (d_i - m_i d'_{i-1}) / b'_i$
2.  **Back Substitution:** Solves for the unknowns starting from the last equation.
    *   $T_n = d'_n$
    *   For $i = n-1, ..., 1$:
        *   $T_i = d'_i - c'_i T_{i+1}$

**Textbook Reference:** Patankar (2017) extensively discusses TDMA in the context of solving discretized fluid flow and heat transfer equations. It's a cornerstone for 1D implicit schemes.

**Example:** Solving a 1D unsteady heat conduction problem with an implicit scheme will likely yield a tridiagonal system, making TDMA the preferred direct method.

**Advantages:**
*   **Computational Efficiency:** Significantly faster than general Gaussian elimination, with $O(n)$ complexity.
*   **Low Memory Requirement:** Only needs to store the non-zero elements of the tridiagonal matrix.

**Important Point:** TDMA is specifically designed for and extremely efficient for tridiagonal systems.

---

### 3. Indirect (Iterative) Methods

Iterative methods start with an initial guess for the solution and refine it through successive approximations until a desired level of accuracy is achieved. They are particularly useful for large, sparse systems where direct methods become computationally prohibitive.

**Concept:** Iterative methods transform the linear system into a form where each unknown can be computed based on values from the previous iteration.

**General Form:** $\{T\}^{k+1} = [C] \{T\}^k + \{D\}$

Where:
*   $\{T\}^k$: Solution at iteration $k$.
*   $\{T\}^{k+1}$: Solution at iteration $k+1$.
*   $[C]$: Iteration matrix.
*   $\{D\}$: Constant vector.

**Convergence Criteria:** The iteration stops when the difference between successive solutions is below a specified tolerance (e.g., maximum absolute difference or root mean square of differences).

**Key Concept for Convergence:** An iterative method converges if the spectral radius (maximum absolute eigenvalue) of the iteration matrix [C] is less than 1. For many common iterative methods applied to diagonally dominant matrices (common in heat transfer), convergence is guaranteed.

#### 3.1. Jacobi Method

**Concept:** In the Jacobi method, all unknown values in $\{T\}^{k+1}$ are computed using the values from the *previous* iteration $\{T\}^k$.

**Derivation:**
Rewrite the system $a_{ij}T_j = b_i$ as:
$T_i = \frac{1}{a_{ii}} \left( b_i - \sum_{j \neq i} a_{ij} T_j \right)$

The Jacobi iteration is then:
$T_i^{k+1} = \frac{1}{a_{ii}} \left( b_i - \sum_{j \neq i} a_{ij} T_j^k \right)$

**Textbook Reference:** Sastry (2012) covers the Jacobi method as a fundamental iterative technique.

**Example:**
Consider the system:
$4x - y = 3$
$-x + 4y = 1$

Initial guess: $\{T\}^0 = \{0, 0\}^T$

Iteration 1:
$x^{1} = (3 - (-1)y^0) / 4 = (3 - 0) / 4 = 3/4$
$y^{1} = (1 - (-1)x^0) / 4 = (1 - 0) / 4 = 1/4$
$\{T\}^1 = \{3/4, 1/4\}^T$

Iteration 2:
$x^{2} = (3 - (-1)(1/4)) / 4 = (3 + 1/4) / 4 = (13/4) / 4 = 13/16$
$y^{2} = (1 - (-1)(3/4)) / 4 = (1 + 3/4) / 4 = (7/4) / 4 = 7/16$
$\{T\}^2 = \{13/16, 7/16\}^T$

And so on. The true solution is $x=1, y=1/2$.

**Disadvantages:**
*   **Slow Convergence:** Can be slow, especially for poorly conditioned systems.
*   **Requires storage of previous iteration:** Each component calculation needs values from the entire previous iteration.

#### 3.2. Gauss-Seidel Method

**Concept:** The Gauss-Seidel method improves upon Jacobi by using the most recently computed values within the *same* iteration. As soon as a new value for $T_i$ is computed, it's used to calculate subsequent unknowns $T_{i+1}, T_{i+2}, \dots$.

**Derivation:**
$T_i^{k+1} = \frac{1}{a_{ii}} \left( b_i - \sum_{j < i} a_{ij} T_j^{k+1} - \sum_{j > i} a_{ij} T_j^k \right)$

Notice that for $j < i$, $T_j^{k+1}$ is used, while for $j > i$, $T_j^k$ is used.

**Textbook Reference:** Sastry (2012) and Patankar (2017) both discuss Gauss-Seidel as an improvement over Jacobi.

**Example (using the same system as Jacobi):**
$4x - y = 3$
$-x + 4y = 1$

Initial guess: $\{T\}^0 = \{0, 0\}^T$

Iteration 1:
$x^{1} = (3 - (-1)y^0) / 4 = (3 - 0) / 4 = 3/4$ (This is $T_1^{k+1}$)
$y^{1} = (1 - (-1)x^1) / 4 = (1 - (-1)(3/4)) / 4 = (1 + 3/4) / 4 = (7/4) / 4 = 7/16$ (This is $T_2^{k+1}$)
$\{T\}^1 = \{3/4, 7/16\}^T$

Iteration 2:
$x^{2} = (3 - (-1)(7/16)) / 4 = (3 + 7/16) / 4 = (55/16) / 4 = 55/64$
$y^{2} = (1 - (-1)(55/64)) / 4 = (1 + 55/64) / 4 = (119/64) / 4 = 119/256$
$\{T\}^2 = \{55/64, 119/256\}^T$

**Advantages:**
*   **Faster Convergence:** Generally converges faster than the Jacobi method because it uses updated values sooner.
*   **Lower Memory Requirement:** Can be implemented to reuse the same array for storing the solution, as new values overwrite old ones.

**Disadvantages:**
*   **Order Dependency:** Convergence rate can depend on the order in which equations are processed.
*   **Still can be slow:** For some problems, it might still be too slow.

#### 3.3. Successive Over-Relaxation (SOR)

**Concept:** SOR is an acceleration technique for Gauss-Seidel. It introduces a relaxation parameter $\omega$ ($0 < \omega < 2$) to control the step size. The idea is to take a larger step than Gauss-Seidel if the difference between successive values is positive and in the desired direction, potentially leading to faster convergence.

**Derivation:**
The SOR update for $T_i$ is:
$T_i^{k+1} = (1-\omega) T_i^k + \omega \left[ \frac{1}{a_{ii}} \left( b_i - \sum_{j < i} a_{ij} T_j^{k+1} - \sum_{j > i} a_{ij} T_j^k \right) \right]$

*   If $\omega = 1$, SOR reduces to Gauss-Seidel.
*   If $1 < \omega < 2$, it's called over-relaxation (intended to speed up convergence).
*   If $0 < \omega < 1$, it's called under-relaxation (used to improve convergence for some systems or for stability).

**Textbook Reference:** Sastry (2012) provides the mathematical framework for SOR.

**Choosing $\omega$:** The optimal value of $\omega$ depends on the properties of the matrix [A] and is often determined experimentally or through theoretical analysis for specific problem classes. For many practical problems in computational heat transfer, an $\omega$ slightly greater than 1 significantly speeds up convergence.

**Advantages:**
*   **Faster Convergence:** Can significantly accelerate convergence compared to Gauss-Seidel.
*   **Flexibility:** The parameter $\omega$ allows tuning for better performance.

**Disadvantages:**
*   **Optimal $\omega$ is not always obvious:** Finding the best $\omega$ can be challenging.
*   **Divergence:** If $\omega$ is chosen poorly (e.g., too large), the method can diverge.

#### 3.4. Other Iterative Methods (Brief Mention)

*   **Red-Black Gauss-Seidel:** Exploits the structure of the grid in FDM to perform updates in parallel or improve convergence for certain problems.
*   **Conjugate Gradient (CG):** A powerful method for symmetric positive-definite systems. It converges in a finite number of steps in exact arithmetic and is generally much faster than Jacobi or Gauss-Seidel for well-behaved problems. Often used for implicit time-stepping schemes.
*   **GMRES (Generalized Minimum Residual):** A more general iterative method that does not require the matrix to be symmetric positive-definite. It's suitable for a wider range of linear systems.

**Reference Book Insight:** Anderson & Wendt (1995) might discuss these advanced iterative methods in the context of CFD, which heavily relies on solving large linear systems.

---

### 4. Choice of Method

The selection between direct and iterative methods depends on several factors:

*   **Problem Size (n):**
    *   **Small to Medium:** Direct methods (like TDMA for 1D, Gaussian elimination for smaller 2D/3D) are often efficient and reliable.
    *   **Large:** Iterative methods are usually preferred due to lower computational cost and memory requirements.
*   **Matrix Properties:**
    *   **Sparsity and Bandwidth:** Tridiagonal matrices (1D problems) are best solved with TDMA. For 2D/3D, the sparsity pattern is crucial; iterative methods are excellent for highly sparse systems.
    *   **Symmetry and Positive-Definiteness:** These properties guarantee convergence for some iterative methods (e.g., CG) and can be exploited for efficiency.
*   **Desired Accuracy:** Direct methods offer higher theoretical accuracy (limited by round-off), while iterative methods stop when a tolerance is met.
*   **Computational Resources:** Memory and processing power available.

**Summary Table:**

| Method Type        | Algorithm Examples          | Typical Use Cases                                         | Advantages                                                                  | Disadvantages                                                      |
| :----------------- | :-------------------------- | :-------------------------------------------------------- | :-------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| **Direct Methods** | Gaussian Elimination        | Small, dense systems                                      | Exact solution (theoretically), reliable.                                   | High $O(n^3)$ cost, memory-intensive for large matrices, round-off error. |
|                    | Thomas Algorithm (TDMA)     | 1D Tridiagonal systems                                    | $O(n)$ cost, very efficient, low memory.                                    | Only for tridiagonal systems.                                      |
| **Iterative Methods** | Jacobi                      | Large, sparse systems (especially diagonally dominant)    | Simple to implement, good for parallelization, low memory.                | Slow convergence, uses previous iteration values.                  |
|                    | Gauss-Seidel                | Large, sparse systems (especially diagonally dominant)    | Faster convergence than Jacobi, can use same memory array.              | Order dependency, can still be slow.                               |
|                    | Successive Over-Relaxation (SOR) | Accelerated convergence for Gauss-Seidel-like systems | Significantly faster convergence than Gauss-Seidel with optimal $\omega$. | Requires tuning of $\omega$, potential for divergence.             |
|                    | Conjugate Gradient (CG)     | Symmetric positive-definite sparse systems                | Fast convergence for suitable matrices.                                     | Matrix must be SPD.                                                |

**Important Point:** For unsteady conduction problems solved implicitly, the system of equations at each time step often involves matrices that are diagonally dominant and sparse, making iterative methods a strong contender, especially for larger spatial discretizations. TDMA remains the champion for 1D implicit problems.

---

### 5. Practice Questions and Exercises

**Question 1:**
A 1D unsteady heat conduction problem is discretized using an implicit finite difference scheme, leading to a system of linear equations at each time step with a tridiagonal coefficient matrix. Which direct method is most suitable for solving this system? Explain why.

**Answer 1:**
The Thomas Algorithm (Tridiagonal Matrix Algorithm - TDMA) is the most suitable direct method. This is because the coefficient matrix is tridiagonal, and TDMA is specifically designed for such systems, offering an efficient $O(n)$ solution in terms of computational cost and requiring minimal memory. General Gaussian elimination would be far less efficient and overkill for a tridiagonal matrix.

---

**Question 2:**
Consider the following linear system:
$5T_1 - T_2 = 10$
$-T_1 + 5T_2 - T_3 = 20$
$-T_2 + 5T_3 = 30$

Perform two iterations of the Gauss-Seidel method, starting with an initial guess of $T_1=T_2=T_3=0$.

**Answer 2:**
The system is:
$T_1 = (10 + T_2) / 5$
$T_2 = (20 + T_1 + T_3) / 5$
$T_3 = (30 + T_2) / 5$

**Initial Guess:** $T_1^0 = 0, T_2^0 = 0, T_3^0 = 0$

**Iteration 1:**
*   $T_1^1 = (10 + T_2^0) / 5 = (10 + 0) / 5 = 2$
*   $T_2^1 = (20 + T_1^1 + T_3^0) / 5 = (20 + 2 + 0) / 5 = 22 / 5 = 4.4$
*   $T_3^1 = (30 + T_2^1) / 5 = (30 + 4.4) / 5 = 34.4 / 5 = 6.88$

So, after Iteration 1: $T_1^1 = 2, T_2^1 = 4.4, T_3^1 = 6.88$

**Iteration 2:**
*   $T_1^2 = (10 + T_2^1) / 5 = (10 + 4.4) / 5 = 14.4 / 5 = 2.88$
*   $T_2^2 = (20 + T_1^2 + T_3^1) / 5 = (20 + 2.88 + 6.88) / 5 = 29.76 / 5 = 5.952$
*   $T_3^2 = (30 + T_2^2) / 5 = (30 + 5.952) / 5 = 35.952 / 5 = 7.1904$

So, after Iteration 2: $T_1^2 = 2.88, T_2^2 = 5.952, T_3^2 = 7.1904$

---

**Question 3:**
Compare and contrast the Jacobi and Gauss-Seidel methods in terms of their iterative update process and potential convergence speed.

**Answer 3:**
*   **Update Process:**
    *   **Jacobi:** Uses values from the *previous* iteration for all unknowns in the current iteration's calculation. This means all $T_i^{k+1}$ are computed using $T_j^k$.
    *   **Gauss-Seidel:** Uses the most recently computed values within the *current* iteration. As soon as $T_i^{k+1}$ is calculated, it's used to compute subsequent unknowns like $T_{i+1}^{k+1}$.
*   **Convergence Speed:**
    *   **Jacobi:** Generally converges slower than Gauss-Seidel because it delays the incorporation of updated values.
    *   **Gauss-Seidel:** Generally converges faster than Jacobi because it utilizes updated information as it becomes available within the same iteration. This often leads to fewer iterations required to reach a specified tolerance.

---

### 6. Important Points to Remember

*   The solution of discretized unsteady heat conduction equations leads to systems of linear algebraic equations.
*   **Direct methods** (Gaussian Elimination, TDMA) provide an exact solution in a finite number of steps but can be computationally expensive for large systems.
*   **TDMA** is highly specialized and efficient for tridiagonal systems, common in 1D problems.
*   **Iterative methods** (Jacobi, Gauss-Seidel, SOR) are preferred for large, sparse systems common in 2D/3D problems.
*   Iterative methods require an initial guess and continue until a convergence criterion is met.
*   Gauss-Seidel generally converges faster than Jacobi.
*   SOR can accelerate Gauss-Seidel but requires careful selection of the relaxation parameter $\omega$.
*   The properties of the coefficient matrix ([A]) (sparsity, bandwidth, symmetry, diagonal dominance) are critical in selecting the most efficient and robust solution method.

---

### 7. Alignment with Course Outcomes

*   **CO1 & CO2:** While not directly addressed in this topic, understanding linear systems is a foundational step towards solving the PDEs governing heat transfer.
*   **CO3:** This topic directly supports CO3 by providing the numerical tools (methods to solve linear systems) needed to implement FDM.
*   **CO4:** This entire topic is dedicated to fulfilling CO4, explaining various methods to solve linear algebraic equations, covering both direct and indirect approaches.
*   **CO5:** The ability to solve these linear systems is a prerequisite for solving problems of steady and unsteady conduction using numerical techniques. Without efficient solvers, the discretization steps would be futile.

---
This concludes Module 3's topic on solving linear algebraic equations using direct and indirect methods. These techniques are fundamental to obtaining temperature distributions in computational heat transfer.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
