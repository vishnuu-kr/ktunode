---
title: "Gauss Siedel"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 1: Motivation and Applications of numerical methods"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646a4"
status: "completed"
scrapedAt: "2026-05-20T18:23:04.554Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - Module 1: Motivation and Applications of Numerical Methods

## Topic: Gauss-Seidel Iterative Method

### 1. Introduction and Motivation

The Gauss-Seidel method is an iterative technique used to solve a system of linear equations. Unlike direct methods (like Gaussian elimination) which aim to find the exact solution in a finite number of steps, iterative methods start with an initial guess and refine it in successive steps until a desired level of accuracy is reached.

**Why use iterative methods like Gauss-Seidel?**

*   **Large Systems of Equations:** For very large systems of linear equations, direct methods can become computationally expensive in terms of both time and memory. Iterative methods can be more efficient, especially when a good initial guess is available.
*   **Sparsity:** Many problems in engineering and science, when discretized, lead to systems of linear equations with sparse matrices (matrices with many zero entries). Iterative methods are well-suited for exploiting this sparsity.
*   **Stability:** In some cases, iterative methods can be more numerically stable than direct methods, reducing the accumulation of round-off errors.

This method is particularly relevant to **Course Outcome 1 (CO1): Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3)**, as it provides a method to solve linear systems, which are a fundamental part of many engineering problems.

### 2. Background: Systems of Linear Equations

A system of $n$ linear equations in $n$ variables can be represented in matrix form as:

$Ax = b$

where:
*   $A$ is an $n \times n$ coefficient matrix.
*   $x$ is an $n \times 1$ column vector of unknowns.
*   $b$ is an $n \times 1$ column vector of constants.

**Example:**

Consider the following system of 3 linear equations:

$2x_1 + x_2 - x_3 = 8$
$-3x_1 - x_2 + 2x_3 = -11$
$-2x_1 + x_2 + 2x_3 = -3$

In matrix form:
$A = \begin{bmatrix} 2 & 1 & -1 \\ -3 & -1 & 2 \\ -2 & 1 & 2 \end{bmatrix}$, $x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}$, $b = \begin{bmatrix} 8 \\ -11 \\ -3 \end{bmatrix}$

### 3. The Gauss-Seidel Method

The Gauss-Seidel method is derived from the process of solving the system of equations for each variable.

**General Idea:**

Given a system of $n$ linear equations:

$a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2$
$\vdots$
$a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nn}x_n = b_n$

We rearrange each equation to solve for one variable:

$x_1 = \frac{1}{a_{11}}(b_1 - a_{12}x_2 - a_{13}x_3 - \dots - a_{1n}x_n)$
$x_2 = \frac{1}{a_{22}}(b_2 - a_{21}x_1 - a_{23}x_3 - \dots - a_{2n}x_n)$
$\vdots$
$x_n = \frac{1}{a_{nn}}(b_n - a_{n1}x_1 - a_{n2}x_2 - \dots - a_{n,n-1}x_{n-1})$

**The Iterative Process:**

The Gauss-Seidel method starts with an initial guess for the variables, say $x_1^{(0)}, x_2^{(0)}, \dots, x_n^{(0)}$. Then, it iteratively updates the values of the variables using the most recently computed values.

The iteration formulas are:

$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{(k+1)} - \sum_{j=i+1}^{n} a_{ij}x_j^{(k)} \right)$  for $i = 1, 2, \dots, n$.

**Key Difference from Jacobi Method:**

The Gauss-Seidel method uses the **newly computed values** of $x_j$ for $j < i$ within the same iteration ($k+1$). In contrast, the Jacobi method uses the values from the previous iteration ($k$) for all variables.

**Applying to the Example:**

Rearranging the equations:

$x_1 = \frac{1}{2}(8 - x_2 + x_3)$
$x_2 = \frac{1}{-1}(-11 + 3x_1 - 2x_3) = 11 - 3x_1 + 2x_3$
$x_3 = \frac{1}{2}(-3 + 2x_1 - x_2)$

Let's start with an initial guess $x_1^{(0)} = 0, x_2^{(0)} = 0, x_3^{(0)} = 0$.

**Iteration 1 (k=0):**

*   $x_1^{(1)} = \frac{1}{2}(8 - x_2^{(0)} + x_3^{(0)}) = \frac{1}{2}(8 - 0 + 0) = 4$
*   $x_2^{(1)} = 11 - 3x_1^{(1)} + 2x_3^{(0)} = 11 - 3(4) + 2(0) = 11 - 12 = -1$  *(Note: Uses the new $x_1^{(1)}$)*
*   $x_3^{(1)} = \frac{1}{2}(-3 + 2x_1^{(1)} - x_2^{(1)}) = \frac{1}{2}(-3 + 2(4) - (-1)) = \frac{1}{2}(-3 + 8 + 1) = \frac{1}{2}(6) = 3$ *(Note: Uses the new $x_1^{(1)}$ and $x_2^{(1)}$)*

So, after iteration 1: $x_1^{(1)} = 4, x_2^{(1)} = -1, x_3^{(1)} = 3$.

**Iteration 2 (k=1):**

*   $x_1^{(2)} = \frac{1}{2}(8 - x_2^{(1)} + x_3^{(1)}) = \frac{1}{2}(8 - (-1) + 3) = \frac{1}{2}(8 + 1 + 3) = \frac{1}{2}(12) = 6$
*   $x_2^{(2)} = 11 - 3x_1^{(2)} + 2x_3^{(1)} = 11 - 3(6) + 2(3) = 11 - 18 + 6 = -1$ *(Note: Uses the new $x_1^{(2)}$)*
*   $x_3^{(2)} = \frac{1}{2}(-3 + 2x_1^{(2)} - x_2^{(2)}) = \frac{1}{2}(-3 + 2(6) - (-1)) = \frac{1}{2}(-3 + 12 + 1) = \frac{1}{2}(10) = 5$ *(Note: Uses the new $x_1^{(2)}$ and $x_2^{(2)}$)*

So, after iteration 2: $x_1^{(2)} = 6, x_2^{(2)} = -1, x_3^{(2)} = 5$.

**Iteration 3 (k=2):**

*   $x_1^{(3)} = \frac{1}{2}(8 - x_2^{(2)} + x_3^{(2)}) = \frac{1}{2}(8 - (-1) + 5) = \frac{1}{2}(8 + 1 + 5) = \frac{1}{2}(14) = 7$
*   $x_2^{(3)} = 11 - 3x_1^{(3)} + 2x_3^{(2)} = 11 - 3(7) + 2(5) = 11 - 21 + 10 = 0$
*   $x_3^{(3)} = \frac{1}{2}(-3 + 2x_1^{(3)} - x_2^{(3)}) = \frac{1}{2}(-3 + 2(7) - 0) = \frac{1}{2}(-3 + 14) = \frac{1}{2}(11) = 5.5$

So, after iteration 3: $x_1^{(3)} = 7, x_2^{(3)} = 0, x_3^{(3)} = 5.5$.

The process continues until the difference between successive iterations is below a specified tolerance.

### 4. Convergence Criteria

For the Gauss-Seidel method to converge to a unique solution, the coefficient matrix $A$ must satisfy certain conditions. The most common and sufficient condition is **Strict Diagonal Dominance**.

**Strict Diagonal Dominance:**

A square matrix $A$ is strictly diagonally dominant if the absolute value of each diagonal element is greater than the sum of the absolute values of all other elements in its row.

$|a_{ii}| > \sum_{j=1, j \neq i}^{n} |a_{ij}|$ for all $i = 1, 2, \dots, n$.

**For our example:**

$A = \begin{bmatrix} 2 & 1 & -1 \\ -3 & -1 & 2 \\ -2 & 1 & 2 \end{bmatrix}$

*   Row 1: $|2| > |1| + |-1| \implies 2 > 2$ (False)
*   Row 2: $|-1| > |-3| + |2| \implies 1 > 5$ (False)
*   Row 3: $|2| > |-2| + |1| \implies 2 > 3$ (False)

This matrix is *not* strictly diagonally dominant. However, Gauss-Seidel can still converge if the matrix is symmetric and positive-definite, or if it is diagonally dominant (not strictly).

Let's reorder the equations to attempt diagonal dominance:

1.  $-3x_1 - x_2 + 2x_3 = -11$
2.  $2x_1 + x_2 - x_3 = 8$
3.  $-2x_1 + x_2 + 2x_3 = -3$

The matrix is still the same. Let's try a different ordering. Often, rearranging rows to put larger diagonal elements at the top helps.

Consider this system:
$10x_1 - x_2 + 2x_3 = 6$
$-x_1 + 11x_2 - x_3 + 3x_4 = 25$
$2x_1 - x_2 + 10x_3 - x_4 = -11$
$3x_2 - x_3 + 8x_4 = 15$

$A = \begin{bmatrix} 10 & -1 & 2 & 0 \\ -1 & 11 & -1 & 3 \\ 2 & -1 & 10 & -1 \\ 0 & 3 & -1 & 8 \end{bmatrix}$

*   Row 1: $|10| > |-1| + |2| + |0| \implies 10 > 3$ (True)
*   Row 2: $|11| > |-1| + |-1| + |3| \implies 11 > 5$ (True)
*   Row 3: $|10| > |2| + |-1| + |-1| \implies 10 > 4$ (True)
*   Row 4: $|8| > |0| + |3| + |-1| \implies 8 > 4$ (True)

This system is strictly diagonally dominant, so Gauss-Seidel is guaranteed to converge.

**Other Convergence Conditions (Referencing Textbooks):**

*   **Chapra & Canale (6th Ed., 2010):** Discusses convergence based on the spectral radius of the iteration matrix. For Gauss-Seidel, the spectral radius must be less than 1. They also highlight that diagonal dominance is a sufficient but not always necessary condition.
*   **Gupta (1995):** Likely covers similar convergence criteria, emphasizing diagonal dominance and properties of the matrix.
*   **Balagurusamy (2017):** Provides a clear explanation of iterative methods and their convergence.

**Importance:** Understanding convergence is crucial to ensure that the iterative process will eventually yield a solution and not diverge.

### 5. Stopping Criteria (Convergence Tolerance)

The iterative process needs a way to determine when a sufficiently accurate solution has been reached. This is done using a stopping criterion, typically based on the difference between successive iterates.

Common stopping criteria:

1.  **Absolute Error:**
    $|x_i^{(k+1)} - x_i^{(k)}| < \epsilon_i$ for all $i$.

2.  **Relative Error:**
    $\frac{|x_i^{(k+1)} - x_i^{(k)}|}{|x_i^{(k+1)}|} < \epsilon_i$ for all $i$, provided $x_i^{(k+1)} \neq 0$.

A common combined criterion is:

$|x_i^{(k+1)} - x_i^{(k)}| < \epsilon_a + \epsilon_r |x_i^{(k+1)}|$

where $\epsilon_a$ is an absolute tolerance and $\epsilon_r$ is a relative tolerance.

### 6. Advantages and Disadvantages

**Advantages:**

*   **Simplicity:** The method is conceptually straightforward to implement.
*   **Efficiency for Large Sparse Systems:** Can be faster than direct methods for certain types of problems.
*   **Lower Memory Requirements:** Often requires less memory than direct methods for large systems.

**Disadvantages:**

*   **Convergence Not Guaranteed:** May not converge for all systems of linear equations.
*   **Slower Convergence:** Can converge slowly if the diagonal elements are not significantly larger than off-diagonal elements.
*   **Order of Equations Matters:** Rearranging the equations can significantly affect convergence speed.

### 7. Applications

Gauss-Seidel method finds applications in various engineering fields:

*   **Structural Analysis:** Solving for displacements and forces in complex structures.
*   **Fluid Dynamics:** Simulating fluid flow by discretizing partial differential equations (PDEs) into systems of linear equations.
*   **Heat Transfer:** Analyzing temperature distribution in objects.
*   **Electrical Circuit Analysis:** Solving for voltages and currents in large networks.
*   **Finite Element Method (FEM):** A ubiquitous numerical technique where Gauss-Seidel is often used to solve the resulting sparse linear systems.

**Example Application (Conceptual):**

Imagine analyzing the temperature distribution in a metal plate. The plate is divided into a grid of small cells. The temperature of each cell depends on its neighbors. This leads to a system of linear equations where each equation represents the heat balance for a cell, and the unknowns are the temperatures of the cells. Gauss-Seidel can be used to efficiently solve for these temperatures, especially for fine grids (large number of cells).

### 8. Practice Questions and Exercises

**Question 1:**
Solve the following system of linear equations using the Gauss-Seidel method, starting with $x_1^{(0)} = 0, x_2^{(0)} = 0, x_3^{(0)} = 0$. Perform 3 iterations and check for convergence.

$10x_1 - x_2 + 2x_3 = 6$
$-x_1 + 11x_2 - x_3 = 25$
$2x_1 - x_2 + 10x_3 = -11$

**Solution 1:**

Rearranged equations:
$x_1 = \frac{1}{10}(6 + x_2 - 2x_3)$
$x_2 = \frac{1}{11}(25 + x_1 + x_3)$
$x_3 = \frac{1}{10}(-11 - 2x_1 + x_2)$

**Iteration 1:**
$x_1^{(1)} = \frac{1}{10}(6 + 0 - 0) = 0.6$
$x_2^{(1)} = \frac{1}{11}(25 + 0.6 + 0) = \frac{25.6}{11} \approx 2.327$
$x_3^{(1)} = \frac{1}{10}(-11 - 2(0.6) + 2.327) = \frac{1}{10}(-11 - 1.2 + 2.327) = \frac{-9.873}{10} \approx -0.987$

**Iteration 2:**
$x_1^{(2)} = \frac{1}{10}(6 + 2.327 - 2(-0.987)) = \frac{1}{10}(6 + 2.327 + 1.974) = \frac{10.301}{10} \approx 1.030$
$x_2^{(2)} = \frac{1}{11}(25 + 1.030 + (-0.987)) = \frac{1}{11}(25 + 1.030 - 0.987) = \frac{25.043}{11} \approx 2.277$
$x_3^{(2)} = \frac{1}{10}(-11 - 2(1.030) + 2.277) = \frac{1}{10}(-11 - 2.060 + 2.277) = \frac{-10.783}{10} \approx -1.078$

**Iteration 3:**
$x_1^{(3)} = \frac{1}{10}(6 + 2.277 - 2(-1.078)) = \frac{1}{10}(6 + 2.277 + 2.156) = \frac{10.433}{10} \approx 1.043$
$x_2^{(3)} = \frac{1}{11}(25 + 1.043 + (-1.078)) = \frac{1}{11}(25 + 1.043 - 1.078) = \frac{24.965}{11} \approx 2.270$
$x_3^{(3)} = \frac{1}{10}(-11 - 2(1.043) + 2.270) = \frac{1}{10}(-11 - 2.086 + 2.270) = \frac{-10.816}{10} \approx -1.082$

The actual solution is approximately $x_1=1, x_2=2, x_3=-1$. The values are converging.

**Question 2:**
Explain the concept of diagonal dominance and why it is important for the convergence of iterative methods like Gauss-Seidel.

**Solution 2:**
Diagonal dominance refers to a property of square matrices where the absolute value of each diagonal element is greater than the sum of the absolute values of the other elements in its row (or column for column diagonal dominance). For iterative methods like Gauss-Seidel, diagonal dominance ensures that the influence of the most recently updated variable in each iteration is strong enough to drive the solution towards the true value, preventing divergence. It essentially means that each equation is primarily determined by its corresponding variable, which is crucial for the iterative refinement process.

**Question 3:**
Consider the system:
$4x_1 - x_2 = 3$
$-x_1 + 4x_2 = 3$

Using the Gauss-Seidel method, starting with $x_1^{(0)} = 0, x_2^{(0)} = 0$. Calculate the values of $x_1$ and $x_2$ after 2 iterations.

**Solution 3:**

Rearranged equations:
$x_1 = \frac{1}{4}(3 + x_2)$
$x_2 = \frac{1}{4}(3 + x_1)$

**Iteration 1:**
$x_1^{(1)} = \frac{1}{4}(3 + 0) = 0.75$
$x_2^{(1)} = \frac{1}{4}(3 + 0.75) = \frac{3.75}{4} = 0.9375$

**Iteration 2:**
$x_1^{(2)} = \frac{1}{4}(3 + 0.9375) = \frac{3.9375}{4} = 0.984375$
$x_2^{(2)} = \frac{1}{4}(3 + 0.984375) = \frac{3.984375}{4} = 0.99609375$

The actual solution is $x_1=1, x_2=1$.

### 9. Important Points to Remember

*   **Iterative Nature:** Gauss-Seidel refines an initial guess through successive calculations.
*   **Use of Latest Values:** It immediately uses the updated values of variables within the same iteration.
*   **Diagonal Dominance:** A key condition for guaranteed convergence. Reordering equations can help achieve this.
*   **Stopping Criteria:** Essential to determine when the desired accuracy is met.
*   **Applications:** Wide applicability in solving large, sparse systems encountered in various engineering disciplines.
*   **Comparison to Jacobi:** Gauss-Seidel generally converges faster than Jacobi if the matrix is diagonally dominant.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 10. References

*   **Chapra, S. C., & Canale, R. P. (2010).** *Numerical Methods for Engineers* (6th ed.). McGraw-Hill. (Chapter on Iterative Methods for Linear Systems)
*   **Gupta, S. K. (1995).** *Numerical Methods for Engineers*. New Age International.
*   **Balagurusamy, E. (2017).** *Numerical Methods*. McGraw-Hill Education.

These notes provide a comprehensive overview of the Gauss-Seidel method, its underlying principles, convergence properties, and applications, aligning with the learning objectives for Module 1 of Numerical Techniques Engineering.