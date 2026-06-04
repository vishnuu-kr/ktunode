---
title: "Elimination methods –Gauss Elimination (review), Gauss Seidel iteration, Factorization method-Choleski’s method."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 1: Introduction to numerical methods "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b3c"
status: "completed"
scrapedAt: "2026-05-20T18:46:46.177Z"
---
# NUMERICAL METHODS FOR ENGINEERS

## Module 1: Introduction to Numerical Methods

### Topic: Elimination Methods - Gauss Elimination (Review), Gauss-Seidel Iteration, Factorization Method - Cholesky's Method

---

### 1. Introduction to Numerical Methods

**1.1 What are Numerical Methods?**

*   Numerical methods are techniques for solving mathematical problems using numerical approximation.
*   They are essential when analytical (exact) solutions are difficult or impossible to obtain, especially for complex equations or real-world engineering problems.
*   They transform a problem into a series of arithmetic operations that can be performed by a computer.

**1.2 Why are Numerical Methods Important in Engineering?**

*   **Complex Models:** Many engineering phenomena are described by complex differential equations or systems of equations that lack closed-form analytical solutions.
*   **Real-World Data:** Engineering often involves working with experimental data, which is inherently noisy and requires approximation.
*   **Optimization:** Finding optimal designs or operating conditions often involves iterative numerical techniques.
*   **Simulation:** Numerical methods are the backbone of engineering simulations (e.g., finite element analysis, computational fluid dynamics).

**1.3 Types of Numerical Methods (Broad Overview):**

*   **Root Finding:** Finding solutions to $f(x) = 0$.
*   **Solving Systems of Linear Equations:** Finding solutions to $Ax = b$.
*   **Interpolation and Approximation:** Fitting curves to data points.
*   **Numerical Differentiation and Integration:** Approximating derivatives and integrals.
*   **Solving Ordinary and Partial Differential Equations:** Simulating dynamic systems and physical phenomena.

---

### 2. Solving Systems of Linear Equations

**2.1 The Problem:**

We are often faced with solving systems of linear equations of the form:

$a_{11}x_1 + a_{12}x_2 + ... + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + ... + a_{2n}x_n = b_2$
...
$a_{n1}x_1 + a_{n2}x_2 + ... + a_{nn}x_n = b_n$

In matrix form, this is written as $Ax = b$, where:

*   $A$ is the coefficient matrix.
*   $x$ is the vector of unknowns.
*   $b$ is the constant vector.

**2.2 Methods for Solving Systems of Linear Equations:**

There are broadly two categories of methods:

*   **Direct Methods:** These methods aim to find the exact solution (in theory) in a finite number of steps. Examples include Gaussian Elimination and Factorization methods.
*   **Iterative Methods:** These methods start with an initial guess and refine it through repeated calculations until a satisfactory solution is reached. Examples include Jacobi and Gauss-Seidel methods.

---

### 3. Elimination Methods - Gauss Elimination (Review)

**3.1 Concept:**

Gauss Elimination is a systematic procedure for transforming a system of linear equations into an equivalent system that is in **row echelon form** or **upper triangular form**. This simplified form can then be easily solved using **back-substitution**.

**3.2 Steps:**

1.  **Augmented Matrix:** Represent the system of equations $Ax = b$ as an augmented matrix $[A|b]$.
2.  **Forward Elimination:** Use elementary row operations to transform the matrix into upper triangular form. The goal is to introduce zeros below the main diagonal.
    *   **Elementary Row Operations:**
        *   Swapping two rows.
        *   Multiplying a row by a non-zero scalar.
        *   Adding a multiple of one row to another row.
    *   **Pivoting (Optional but Recommended):** To improve numerical stability, it's often recommended to swap rows so that the element with the largest absolute value in the current column (below the pivot) becomes the pivot element. This is called **partial pivoting**. **Full pivoting** involves swapping both rows and columns.
3.  **Back Substitution:** Once the matrix is in upper triangular form, the last equation will have only one unknown. Solve for this unknown, then substitute its value into the second-to-last equation to solve for another unknown, and so on, working upwards.

**3.3 Example:**

Solve the following system using Gauss Elimination:

$2x_1 + x_2 - x_3 = 8$
$-3x_1 - x_2 + 2x_3 = -11$
$-2x_1 + x_2 + 2x_3 = -3$

**Augmented Matrix:**
$\begin{bmatrix} 2 & 1 & -1 & | & 8 \\ -3 & -1 & 2 & | & -11 \\ -2 & 1 & 2 & | & -3 \end{bmatrix}$

**Forward Elimination:**

*   **Goal: Make elements below $a_{11}$ zero.**
    *   $R_2 \leftarrow R_2 + \frac{3}{2}R_1$
    *   $R_3 \leftarrow R_3 + \frac{2}{2}R_1 = R_3 + R_1$

$\begin{bmatrix} 2 & 1 & -1 & | & 8 \\ 0 & 0.5 & 0.5 & | & 1 \\ 0 & 2 & 1 & | & 5 \end{bmatrix}$

*   **Goal: Make element below $a_{22}$ zero.**
    *   (For better stability, let's swap R2 and R3 to put the larger pivot 2 in $a_{22}$'s position - Partial Pivoting)
    $\begin{bmatrix} 2 & 1 & -1 & | & 8 \\ 0 & 2 & 1 & | & 5 \\ 0 & 0.5 & 0.5 & | & 1 \end{bmatrix}$
    *   $R_3 \leftarrow R_3 - \frac{0.5}{2}R_2 = R_3 - 0.25R_2$

$\begin{bmatrix} 2 & 1 & -1 & | & 8 \\ 0 & 2 & 1 & | & 5 \\ 0 & 0 & 0.25 & | & -0.25 \end{bmatrix}$

**Back Substitution:**

The system is now:
$2x_1 + x_2 - x_3 = 8$
$2x_2 + x_3 = 5$
$0.25x_3 = -0.25$

1.  From the third equation: $x_3 = \frac{-0.25}{0.25} = -1$
2.  Substitute $x_3 = -1$ into the second equation:
    $2x_2 + (-1) = 5 \implies 2x_2 = 6 \implies x_2 = 3$
3.  Substitute $x_2 = 3$ and $x_3 = -1$ into the first equation:
    $2x_1 + 3 - (-1) = 8 \implies 2x_1 + 4 = 8 \implies 2x_1 = 4 \implies x_1 = 2$

**Solution:** $x_1 = 2, x_2 = 3, x_3 = -1$

**3.4 Advantages:**

*   Guaranteed to find a solution if one exists and is unique.
*   Conceptually straightforward.

**3.5 Disadvantages:**

*   Can be computationally expensive for large systems ($O(n^3)$ operations).
*   Susceptible to round-off errors, especially if pivots are small (mitigated by pivoting).

---

### 4. Iterative Methods - Gauss-Seidel Iteration

**4.1 Concept:**

Gauss-Seidel is an iterative method for solving systems of linear equations. It starts with an initial guess for the solution vector and repeatedly updates the components of the solution vector using the most recently computed values. This is a refinement of the Jacobi method.

**4.2 Condition for Convergence:**

For Gauss-Seidel (and Jacobi) to converge, the coefficient matrix $A$ must be **diagonally dominant**. A matrix is diagonally dominant if, for every row, the absolute value of the diagonal element is greater than the sum of the absolute values of the other elements in that row.

$|a_{ii}| > \sum_{j \neq i} |a_{ij}|$ for all $i$.

**4.3 Steps:**

Consider the system $Ax = b$. Rewrite each equation to solve for one variable:

$x_i = \frac{1}{a_{ii}} \left( b_i - \sum_{j \neq i} a_{ij}x_j \right)$

For Gauss-Seidel, we rearrange this as:

$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j < i} a_{ij}x_j^{(k+1)} - \sum_{j > i} a_{ij}x_j^{(k)} \right)$

*   We use the newly computed $x_j^{(k+1)}$ values as soon as they are available in the same iteration.
*   We start with an initial guess $x^{(0)}$ (often all zeros).
*   We iterate until the solution converges, meaning the difference between successive iterations is below a certain tolerance (e.g., $\frac{\|x^{(k+1)} - x^{(k)}\|}{\|x^{(k+1)}\|} < \epsilon$).

**4.4 Example:**

Solve the following system using Gauss-Seidel iteration, starting with $x^{(0)} = [0, 0, 0]^T$:

$10x_1 - x_2 + 2x_3 = 6$
$-x_1 + 11x_2 - x_3 + 3x_4 = 25$
$2x_1 - x_2 + 10x_3 - x_4 = -11$
$3x_2 - x_3 + 8x_4 = 15$

**Check for Diagonal Dominance:**
*   Row 1: $|10| > |-1| + |2| \implies 10 > 3$ (True)
*   Row 2: $|11| > |-1| + |-1| + |3| \implies 11 > 6$ (True)
*   Row 3: $|10| > |2| + |-1| + |-1| \implies 10 > 4$ (True)
*   Row 4: $|8| > |3| + |-1| \implies 8 > 4$ (True)
The matrix is diagonally dominant, so Gauss-Seidel should converge.

**Rewrite equations to solve for diagonal elements:**

$x_1 = \frac{1}{10}(6 + x_2 - 2x_3)$
$x_2 = \frac{1}{11}(25 + x_1 + x_3 - 3x_4)$
$x_3 = \frac{1}{10}(-11 - 2x_1 + x_2 + x_4)$
$x_4 = \frac{1}{8}(15 - 3x_2 + x_3)$

**Iterative Steps:**

*   **Iteration 0:** $x^{(0)} = [0, 0, 0, 0]^T$

*   **Iteration 1:**
    *   $x_1^{(1)} = \frac{1}{10}(6 + 0 - 2(0)) = 0.6$
    *   $x_2^{(1)} = \frac{1}{11}(25 + x_1^{(1)} + 0 - 3(0)) = \frac{1}{11}(25 + 0.6) = \frac{25.6}{11} \approx 2.327$
    *   $x_3^{(1)} = \frac{1}{10}(-11 - 2x_1^{(1)} + 0 + 0) = \frac{1}{10}(-11 - 2(0.6)) = \frac{-12.2}{10} = -1.22$
    *   $x_4^{(1)} = \frac{1}{8}(15 - 3x_2^{(1)} + 0) = \frac{1}{8}(15 - 3(2.327)) = \frac{1}{8}(15 - 6.981) = \frac{8.019}{8} \approx 1.002$

    $x^{(1)} \approx [0.6, 2.327, -1.22, 1.002]^T$

*   **Iteration 2:**
    *   $x_1^{(2)} = \frac{1}{10}(6 + x_2^{(1)} - 2x_3^{(1)}) = \frac{1}{10}(6 + 2.327 - 2(-1.22)) = \frac{1}{10}(6 + 2.327 + 2.44) = \frac{10.767}{10} = 1.0767$
    *   $x_2^{(2)} = \frac{1}{11}(25 + x_1^{(2)} + x_3^{(1)} - 3x_4^{(1)}) = \frac{1}{11}(25 + 1.0767 + (-1.22) - 3(1.002)) = \frac{1}{11}(25 + 1.0767 - 1.22 - 3.006) = \frac{21.8507}{11} \approx 1.9864$
    *   $x_3^{(2)} = \frac{1}{10}(-11 - 2x_1^{(2)} + x_2^{(2)} + x_4^{(1)}) = \frac{1}{10}(-11 - 2(1.0767) + 1.9864 + 1.002) = \frac{1}{10}(-11 - 2.1534 + 1.9864 + 1.002) = \frac{-10.165}{10} = -1.0165$
    *   $x_4^{(2)} = \frac{1}{8}(15 - 3x_2^{(2)} + x_3^{(2)}) = \frac{1}{8}(15 - 3(1.9864) + (-1.0165)) = \frac{1}{8}(15 - 5.9592 - 1.0165) = \frac{8.0243}{8} \approx 1.0030$

    $x^{(2)} \approx [1.0767, 1.9864, -1.0165, 1.0030]^T$

Continue iterating until convergence is achieved. (The actual solution is approximately $[1, 2, -1, 1]^T$)

**4.5 Advantages:**

*   Can be more efficient than direct methods for large, sparse, and diagonally dominant systems.
*   Requires less memory as it doesn't need to store the entire matrix (can be beneficial for sparse matrices).
*   Can provide an approximate solution quickly.

**4.6 Disadvantages:**

*   Convergence is not guaranteed for all systems.
*   Convergence rate can be slow for some diagonally dominant matrices.
*   The accuracy depends on the number of iterations performed.

---

### 5. Factorization Methods - Cholesky's Method

**5.1 Concept:**

Cholesky's method is a factorization method for solving systems of linear equations $Ax = b$, specifically for **symmetric and positive-definite matrices**. The method decomposes the coefficient matrix $A$ into the product of a lower triangular matrix $L$ and its transpose $U=L^T$ (or vice-versa, $A = U^T U$). This is known as the **Cholesky decomposition**.

$A = L L^T$

Once the decomposition is done, the system $Ax=b$ becomes $LL^T x = b$. This can be solved in two steps:

1.  Solve $Ly = b$ for $y$ using **forward substitution**.
2.  Solve $L^T x = y$ for $x$ using **back substitution**.

**5.2 Condition for Applicability:**

The matrix $A$ must be:
*   **Symmetric:** $A^T = A$
*   **Positive-Definite:** For any non-zero vector $z$, $z^T A z > 0$. Equivalently, all eigenvalues of $A$ are positive.

**5.3 Cholesky Decomposition Formulas:**

For a symmetric positive-definite matrix $A$, the decomposition $A = L L^T$ can be computed as follows:

$L = \begin{bmatrix} l_{11} & 0 & \dots & 0 \\ l_{21} & l_{22} & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ l_{n1} & l_{n2} & \dots & l_{nn} \end{bmatrix}$ and $L^T = \begin{bmatrix} l_{11} & l_{21} & \dots & l_{n1} \\ 0 & l_{22} & \dots & l_{n2} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & l_{nn} \end{bmatrix}$

By comparing the elements of $A = L L^T$:

*   For the first column ($j=1$):
    *   $l_{ii} = \sqrt{a_{ii} - \sum_{k=1}^{i-1} l_{ik}^2}$
    *   $l_{i1} = \frac{1}{l_{11}} a_{i1}$ (for $i > 1$)

*   For other columns ($j > 1$):
    *   $l_{jj} = \sqrt{a_{jj} - \sum_{k=1}^{j-1} l_{jk}^2}$
    *   $l_{ij} = \frac{1}{l_{jj}} \left( a_{ij} - \sum_{k=1}^{j-1} l_{ik} l_{jk} \right)$ (for $i > j$)

**5.4 Example:**

Solve the system $Ax=b$ using Cholesky's method:

$A = \begin{bmatrix} 4 & 12 & -16 \\ 12 & 37 & -43 \\ -16 & -43 & 98 \end{bmatrix}, \quad b = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$

**Step 1: Cholesky Decomposition ($A = L L^T$)**

We need to find $L$. Let's compute the elements of $L$:

*   $l_{11}$: $l_{11}^2 = a_{11} = 4 \implies l_{11} = \sqrt{4} = 2$.

*   First column of $L$:
    *   $l_{21}$: $l_{21} l_{11} = a_{21} = 12 \implies l_{21} (2) = 12 \implies l_{21} = 6$.
    *   $l_{31}$: $l_{31} l_{11} = a_{31} = -16 \implies l_{31} (2) = -16 \implies l_{31} = -8$.

*   Second column of $L$:
    *   $l_{22}$: $l_{21}^2 + l_{22}^2 = a_{22} = 37 \implies (6)^2 + l_{22}^2 = 37 \implies 36 + l_{22}^2 = 37 \implies l_{22}^2 = 1 \implies l_{22} = 1$.
    *   $l_{32}$: $l_{31} l_{21} + l_{32} l_{22} = a_{32} = -43 \implies (-8)(6) + l_{32}(1) = -43 \implies -48 + l_{32} = -43 \implies l_{32} = 5$.

*   Third column of $L$:
    *   $l_{33}$: $l_{31}^2 + l_{32}^2 + l_{33}^2 = a_{33} = 98 \implies (-8)^2 + (5)^2 + l_{33}^2 = 98 \implies 64 + 25 + l_{33}^2 = 98 \implies 89 + l_{33}^2 = 98 \implies l_{33}^2 = 9 \implies l_{33} = 3$.

So, the lower triangular matrix is:
$L = \begin{bmatrix} 2 & 0 & 0 \\ 6 & 1 & 0 \\ -8 & 5 & 3 \end{bmatrix}$

And its transpose:
$L^T = \begin{bmatrix} 2 & 6 & -8 \\ 0 & 1 & 5 \\ 0 & 0 & 3 \end{bmatrix}$

*(Self-check: Multiply L and L^T to verify if you get A. You should.)*

**Step 2: Solve $Ly = b$ (Forward Substitution)**

$\begin{bmatrix} 2 & 0 & 0 \\ 6 & 1 & 0 \\ -8 & 5 & 3 \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$

1.  $2y_1 = 1 \implies y_1 = 0.5$
2.  $6y_1 + y_2 = 2 \implies 6(0.5) + y_2 = 2 \implies 3 + y_2 = 2 \implies y_2 = -1$
3.  $-8y_1 + 5y_2 + 3y_3 = 3 \implies -8(0.5) + 5(-1) + 3y_3 = 3 \implies -4 - 5 + 3y_3 = 3 \implies -9 + 3y_3 = 3 \implies 3y_3 = 12 \implies y_3 = 4$

So, $y = [0.5, -1, 4]^T$.

**Step 3: Solve $L^T x = y$ (Back Substitution)**

$\begin{bmatrix} 2 & 6 & -8 \\ 0 & 1 & 5 \\ 0 & 0 & 3 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0.5 \\ -1 \\ 4 \end{bmatrix}$

1.  $3x_3 = 4 \implies x_3 = \frac{4}{3}$
2.  $x_2 + 5x_3 = -1 \implies x_2 + 5(\frac{4}{3}) = -1 \implies x_2 + \frac{20}{3} = -1 \implies x_2 = -1 - \frac{20}{3} = -\frac{3}{3} - \frac{20}{3} = -\frac{23}{3}$
3.  $2x_1 + 6x_2 - 8x_3 = 0.5 \implies 2x_1 + 6(-\frac{23}{3}) - 8(\frac{4}{3}) = 0.5 \implies 2x_1 - 46 - \frac{32}{3} = 0.5 \implies 2x_1 = 46 + \frac{32}{3} + 0.5 = 46.5 + \frac{32}{3} = \frac{93}{2} + \frac{32}{3} = \frac{279 + 64}{6} = \frac{343}{6}$
    $x_1 = \frac{343}{12}$

**Solution:** $x = [\frac{343}{12}, -\frac{23}{3}, \frac{4}{3}]^T$

**5.5 Advantages:**

*   Efficient for symmetric positive-definite matrices ($O(n^3/3)$ operations, which is about 1/3 of Gauss Elimination).
*   Numerically stable.
*   Good for solving multiple systems with the same coefficient matrix but different $b$ vectors, as the decomposition is done only once.

**5.6 Disadvantages:**

*   Only applicable to symmetric positive-definite matrices.
*   Requires more computation to check for positive-definiteness if not initially known.

---

### 6. Learning Outcomes Recap & Important Points to Remember

This module covered the following key aspects:

*   **Understanding the need for numerical methods in engineering:** Solving problems that are analytically intractable.
*   **Gauss Elimination:** A direct method for solving linear systems by transforming them into upper triangular form, followed by back-substitution. Key is the systematic elimination of variables. Remember the importance of pivoting for stability.
*   **Gauss-Seidel Iteration:** An iterative method for linear systems. It requires the coefficient matrix to be diagonally dominant for convergence. Updates use the most recent values, leading to potentially faster convergence than Jacobi. Key is the iterative refinement of the solution.
*   **Cholesky's Method:** A factorization method ($A = LL^T$) for symmetric positive-definite matrices. It reduces the problem to two simpler triangular systems, offering computational efficiency. Key is the specific applicability to a certain class of matrices and the two-step solution process.

---

### 7. Practice Questions

**Question 1 (Gauss Elimination):**
Solve the following system using Gauss Elimination with partial pivoting:
$x_1 + 2x_2 + x_3 = 5$
$3x_1 + 4x_2 + 2x_3 = 10$
$x_1 + 3x_2 + 3x_3 = 7$

**Question 2 (Gauss-Seidel):**
Determine if the following system is diagonally dominant. If so, solve it using Gauss-Seidel iteration for 3 iterations, starting with $x^{(0)} = [0, 0, 0]^T$:
$5x_1 - x_2 + x_3 = 10$
$-x_1 + 4x_2 - 2x_3 = 12$
$2x_1 - x_2 + 6x_3 = 20$

**Question 3 (Cholesky's Method):**
Given the matrix $A = \begin{bmatrix} 9 & -3 & 6 \\ -3 & 2 & -2 \\ 6 & -2 & 5 \end{bmatrix}$ and vector $b = \begin{bmatrix} 3 \\ -1 \\ 2 \end{bmatrix}$, solve the system $Ax=b$ using Cholesky's method.

---

### 8. Answers to Practice Questions

**Answer 1 (Gauss Elimination):**

Augmented Matrix:
$\begin{bmatrix} 1 & 2 & 1 & | & 5 \\ 3 & 4 & 2 & | & 10 \\ 1 & 3 & 3 & | & 7 \end{bmatrix}$

*   **Partial Pivoting:** Swap R1 and R2:
    $\begin{bmatrix} 3 & 4 & 2 & | & 10 \\ 1 & 2 & 1 & | & 5 \\ 1 & 3 & 3 & | & 7 \end{bmatrix}$

*   **Forward Elimination:**
    *   $R_2 \leftarrow R_2 - \frac{1}{3}R_1$
    *   $R_3 \leftarrow R_3 - \frac{1}{3}R_1$
    $\begin{bmatrix} 3 & 4 & 2 & | & 10 \\ 0 & 0.6667 & 0.3333 & | & 1.6667 \\ 0 & 1.6667 & 2.3333 & | & 3.6667 \end{bmatrix}$

*   **Partial Pivoting:** Swap R2 and R3:
    $\begin{bmatrix} 3 & 4 & 2 & | & 10 \\ 0 & 1.6667 & 2.3333 & | & 3.6667 \\ 0 & 0.6667 & 0.3333 & | & 1.6667 \end{bmatrix}$

*   **Forward Elimination:**
    *   $R_3 \leftarrow R_3 - \frac{0.6667}{1.6667}R_2 = R_3 - 0.4R_2$
    $\begin{bmatrix} 3 & 4 & 2 & | & 10 \\ 0 & 1.6667 & 2.3333 & | & 3.6667 \\ 0 & 0 & -0.5999 & | & 0.2 \end{bmatrix}$

*   **Back Substitution:**
    *   $-0.5999x_3 = 0.2 \implies x_3 \approx -0.3333$
    *   $1.6667x_2 + 2.3333x_3 = 3.6667 \implies 1.6667x_2 + 2.3333(-0.3333) = 3.6667 \implies 1.6667x_2 - 0.7777 = 3.6667 \implies 1.6667x_2 = 4.4444 \implies x_2 \approx 2.6667$
    *   $3x_1 + 4x_2 + 2x_3 = 10 \implies 3x_1 + 4(2.6667) + 2(-0.3333) = 10 \implies 3x_1 + 10.6668 - 0.6666 = 10 \implies 3x_1 + 10.0002 = 10 \implies 3x_1 \approx 0 \implies x_1 = 0$

    **Solution:** $x_1 = 0, x_2 = 2.6667, x_3 = -0.3333$ (or $x_1=0, x_2=8/3, x_3=-1/3$)

**Answer 2 (Gauss-Seidel):**

Diagonally Dominant Check:
*   Row 1: $|5| > |-1| + |1| \implies 5 > 2$ (True)
*   Row 2: $|4| > |-1| + |-2| \implies 4 > 3$ (True)
*   Row 3: $|6| > |2| + |-1| \implies 6 > 3$ (True)
The system is diagonally dominant.

Equations rearranged:
$x_1 = \frac{1}{5}(10 + x_2 - x_3)$
$x_2 = \frac{1}{4}(12 + x_1 + 2x_3)$
$x_3 = \frac{1}{6}(20 - 2x_1 + x_2)$

*   **Iteration 0:** $x^{(0)} = [0, 0, 0]^T$

*   **Iteration 1:**
    *   $x_1^{(1)} = \frac{1}{5}(10 + 0 - 0) = 2$
    *   $x_2^{(1)} = \frac{1}{4}(12 + x_1^{(1)} + 2(0)) = \frac{1}{4}(12 + 2) = \frac{14}{4} = 3.5$
    *   $x_3^{(1)} = \frac{1}{6}(20 - 2x_1^{(1)} + x_2^{(1)}) = \frac{1}{6}(20 - 2(2) + 3.5) = \frac{1}{6}(20 - 4 + 3.5) = \frac{19.5}{6} = 3.25$
    $x^{(1)} = [2, 3.5, 3.25]^T$

*   **Iteration 2:**
    *   $x_1^{(2)} = \frac{1}{5}(10 + x_2^{(1)} - x_3^{(1)}) = \frac{1}{5}(10 + 3.5 - 3.25) = \frac{10.25}{5} = 2.05$
    *   $x_2^{(2)} = \frac{1}{4}(12 + x_1^{(2)} + 2x_3^{(1)}) = \frac{1}{4}(12 + 2.05 + 2(3.25)) = \frac{1}{4}(12 + 2.05 + 6.5) = \frac{20.55}{4} = 5.1375$
    *   $x_3^{(2)} = \frac{1}{6}(20 - 2x_1^{(2)} + x_2^{(2)}) = \frac{1}{6}(20 - 2(2.05) + 5.1375) = \frac{1}{6}(20 - 4.1 + 5.1375) = \frac{21.0375}{6} = 3.50625$
    $x^{(2)} = [2.05, 5.1375, 3.50625]^T$

*   **Iteration 3:**
    *   $x_1^{(3)} = \frac{1}{5}(10 + x_2^{(2)} - x_3^{(2)}) = \frac{1}{5}(10 + 5.1375 - 3.50625) = \frac{11.63125}{5} = 2.32625$
    *   $x_2^{(3)} = \frac{1}{4}(12 + x_1^{(3)} + 2x_3^{(2)}) = \frac{1}{4}(12 + 2.32625 + 2(3.50625)) = \frac{1}{4}(12 + 2.32625 + 7.0125) = \frac{21.33875}{4} = 5.3346875$
    *   $x_3^{(3)} = \frac{1}{6}(20 - 2x_1^{(3)} + x_2^{(3)}) = \frac{1}{6}(20 - 2(2.32625) + 5.3346875) = \frac{1}{6}(20 - 4.6525 + 5.3346875) = \frac{20.6821875}{6} = 3.44703125$
    $x^{(3)} = [2.32625, 5.3346875, 3.44703125]^T$

    *(The actual solution is approximately $x = [2, 5, 3]^T$. The iterations are converging.)*

**Answer 3 (Cholesky's Method):**

$A = \begin{bmatrix} 9 & -3 & 6 \\ -3 & 2 & -2 \\ 6 & -2 & 5 \end{bmatrix}$

*   **Decomposition $A = LL^T$:**
    *   $l_{11} = \sqrt{9} = 3$
    *   $l_{21} = \frac{-3}{3} = -1$
    *   $l_{31} = \frac{6}{3} = 2$
    *   $l_{22} = \sqrt{2 - (-1)^2} = \sqrt{2 - 1} = \sqrt{1} = 1$
    *   $l_{32} = \frac{-2 - (2)(-1)}{1} = \frac{-2 + 2}{1} = 0$
    *   $l_{33} = \sqrt{5 - (2)^2 - (0)^2} = \sqrt{5 - 4 - 0} = \sqrt{1} = 1$

    $L = \begin{bmatrix} 3 & 0 & 0 \\ -1 & 1 & 0 \\ 2 & 0 & 1 \end{bmatrix}$

*   **Solve $Ly = b$:**
    $\begin{bmatrix} 3 & 0 & 0 \\ -1 & 1 & 0 \\ 2 & 0 & 1 \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix} = \begin{bmatrix} 3 \\ -1 \\ 2 \end{bmatrix}$
    *   $3y_1 = 3 \implies y_1 = 1$
    *   $-y_1 + y_2 = -1 \implies -1 + y_2 = -1 \implies y_2 = 0$
    *   $2y_1 + y_3 = 2 \implies 2(1) + y_3 = 2 \implies 2 + y_3 = 2 \implies y_3 = 0$
    $y = [1, 0, 0]^T$

*   **Solve $L^T x = y$:**
    $L^T = \begin{bmatrix} 3 & -1 & 2 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$
    $\begin{bmatrix} 3 & -1 & 2 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$
    *   $x_3 = 0$
    *   $x_2 = 0$
    *   $3x_1 - x_2 + 2x_3 = 1 \implies 3x_1 - 0 + 2(0) = 1 \implies 3x_1 = 1 \implies x_1 = \frac{1}{3}$

    **Solution:** $x = [\frac{1}{3}, 0, 0]^T$

---
This concludes Module 1. You should now have a solid understanding of these fundamental techniques for solving systems of linear equations.
