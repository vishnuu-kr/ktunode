---
title: "System of linear algebraic equations –Ill-conditioned systems – Symmetric and Banded systems."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 1: Introduction to numerical methods "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b3b"
status: "completed"
scrapedAt: "2026-05-20T18:46:45.477Z"
---
# NUMERICAL METHODS FOR ENGINEERS

## Module 1: Introduction to Numerical Methods

### Topic: System of Linear Algebraic Equations - Ill-conditioned Systems - Symmetric and Banded Systems

This module introduces the fundamental concepts of solving systems of linear algebraic equations, with a specific focus on understanding the challenges posed by ill-conditioned systems and the advantages of dealing with symmetric and banded systems.

---

### 1. System of Linear Algebraic Equations

A system of linear algebraic equations is a set of equations where each equation is a linear combination of variables. They can be represented in matrix form as:

$$
Ax = b
$$

where:
*   $A$ is the coefficient matrix (an $n \times n$ matrix).
*   $x$ is the vector of unknown variables (an $n \times 1$ vector).
*   $b$ is the constant vector (an $n \times 1$ vector).

**Key Concepts:**

*   **Solution:** A vector $x$ that satisfies the equation $Ax = b$.
*   **Existence and Uniqueness of Solutions:**
    *   A system has a **unique solution** if the determinant of $A$ is non-zero ($\det(A) \neq 0$). In this case, $A$ is invertible, and $x = A^{-1}b$.
    *   A system has **no solution** if $\det(A) = 0$ and the system is inconsistent (e.g., $0=1$).
    *   A system has **infinitely many solutions** if $\det(A) = 0$ and the system is consistent.
*   **Types of Systems:**
    *   **Square Systems:** Number of equations equals the number of unknowns ($n \times n$ matrix $A$).
    *   **Underdetermined Systems:** Fewer equations than unknowns. Typically have infinitely many solutions.
    *   **Overdetermined Systems:** More equations than unknowns. May have no solution, or a unique solution if constraints are met. Numerical methods often aim to find a "best fit" solution (e.g., in a least-squares sense).

**Methods for Solving Systems of Linear Equations:**

*   **Direct Methods:** Aim to find the exact solution in a finite number of arithmetic operations (ignoring round-off errors).
    *   **Cramer's Rule:** Uses determinants. Computationally expensive for large systems.
    *   **Gaussian Elimination:** Transforms the system into an upper triangular form, then solves by back-substitution.
    *   **LU Decomposition:** Decomposes matrix $A$ into a lower triangular matrix ($L$) and an upper triangular matrix ($U$) such that $A = LU$. Then solves $Ly = b$ and $Ux = y$.
    *   **Cholesky Decomposition:** Applicable for symmetric and positive-definite matrices. Decomposes $A$ into $LL^T$.
*   **Iterative Methods:** Start with an initial guess for the solution and iteratively refine it until a desired level of accuracy is reached. Suitable for large, sparse systems.
    *   **Jacobi Method**
    *   **Gauss-Seidel Method**
    *   **Successive Over-Relaxation (SOR)**

**Example:**

Consider the system:
$$
\begin{aligned}
2x_1 + x_2 &= 5 \\
x_1 - 3x_2 &= -5
\end{aligned}
$$

In matrix form:
$$
\begin{pmatrix} 2 & 1 \\ 1 & -3 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ -5 \end{pmatrix}
$$

Here, $A = \begin{pmatrix} 2 & 1 \\ 1 & -3 \end{pmatrix}$, $x = \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}$, and $b = \begin{pmatrix} 5 \\ -5 \end{pmatrix}$.
The determinant of $A$ is $(2)(-3) - (1)(1) = -6 - 1 = -7 \neq 0$. So, a unique solution exists.

Using Gaussian Elimination:
1.  Multiply the second row by 2: $\begin{pmatrix} 2 & 1 \\ 2 & -6 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ -10 \end{pmatrix}$
2.  Subtract the first row from the second row: $\begin{pmatrix} 2 & 1 \\ 0 & -7 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ -15 \end{pmatrix}$
3.  From the second row: $-7x_2 = -15 \implies x_2 = \frac{15}{7}$
4.  Substitute $x_2$ into the first row: $2x_1 + \frac{15}{7} = 5 \implies 2x_1 = 5 - \frac{15}{7} = \frac{35-15}{7} = \frac{20}{7} \implies x_1 = \frac{10}{7}$

Solution: $x_1 = \frac{10}{7}, x_2 = \frac{15}{7}$.

---

### 2. Ill-conditioned Systems

An ill-conditioned system is a system of linear equations where a small change in the coefficients of the matrix $A$ or the vector $b$ leads to a large change in the solution vector $x$. These systems are sensitive to small errors, making them difficult to solve accurately using numerical methods.

**Key Concepts:**

*   **Condition Number:** A measure of how sensitive a matrix is to changes in its input.
    *   **Definition:** For a non-singular matrix $A$, the condition number $\kappa(A)$ is defined as:
        $$
        \kappa(A) = \|A\| \|A^{-1}\|
        $$
        where $\| \cdot \|$ is a matrix norm (e.g., $L_1$, $L_2$, $L_\infty$).
    *   **Interpretation:**
        *   $\kappa(A) \approx 1$: Well-conditioned system. Small perturbations in $A$ or $b$ lead to small changes in $x$.
        *   $\kappa(A) \gg 1$: Ill-conditioned system. Small perturbations in $A$ or $b$ can lead to large changes in $x$.
        *   If $A$ is singular, its condition number is infinite.
*   **Causes of Ill-Conditioning:**
    *   **Nearly Singular Matrices:** Matrices with determinants very close to zero.
    *   **Nearly Dependent Rows/Columns:** Rows or columns that are almost linearly dependent.
    *   **Vastly Different Scales in Coefficients:** When the magnitudes of the coefficients in $A$ vary significantly.

**Impact on Numerical Solutions:**

*   **Amplification of Round-off Errors:** Small errors introduced during floating-point arithmetic can be amplified, leading to inaccurate solutions.
*   **Divergence of Iterative Methods:** Iterative methods may converge very slowly or not converge at all.
*   **Unreliable Results:** Even if a numerical method yields a result, it might not be close to the true solution.

**Example of Ill-Conditioning:**

Consider the system:
$$
\begin{aligned}
x_1 + x_2 &= 2 \\
x_1 + 1.0001x_2 &= 2.0001
\end{aligned}
$$
Matrix form:
$$
\begin{pmatrix} 1 & 1 \\ 1 & 1.0001 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 2 \\ 2.0001 \end{pmatrix}
$$
The determinant is $1(1.0001) - 1(1) = 0.0001$, which is small.

If we slightly change $b$ to $\begin{pmatrix} 2 \\ 2.0002 \end{pmatrix}$:
$$
\begin{aligned}
x_1 + x_2 &= 2 \\
x_1 + 1.0001x_2 &= 2.0002
\end{aligned}
$$
Subtracting the first equation from the second: $0.0001x_2 = 0.0002 \implies x_2 = 2$.
Substituting into the first equation: $x_1 + 2 = 2 \implies x_1 = 0$.
So, $x = \begin{pmatrix} 0 \\ 2 \end{pmatrix}$.

Now, if we change $b$ back to $\begin{pmatrix} 2 \\ 2.0001 \end{pmatrix}$ but change the second coefficient slightly:
$$
\begin{aligned}
x_1 + x_2 &= 2 \\
x_1 + 1.0000x_2 &= 2.0001
\end{aligned}
$$
Subtracting the first equation from the second: $0x_2 = 0.0001$, which implies no solution.

This small change in coefficients drastically altered the solution or indicated no solution, demonstrating ill-conditioning.

**Strategies for Handling Ill-Conditioned Systems:**

*   **Preconditioning:** Transforming the system into an equivalent one that is better conditioned.
*   **Using Higher Precision Arithmetic:** Reducing the impact of round-off errors.
*   **Choosing Appropriate Numerical Methods:** Some methods are more robust to ill-conditioning than others.
*   **Regularization Techniques:** Adding constraints or penalties to stabilize the solution.

---

### 3. Symmetric and Banded Systems

These are special types of linear systems that can be solved more efficiently and robustly.

#### 3.1 Symmetric Systems

A square matrix $A$ is **symmetric** if it is equal to its transpose, i.e., $A = A^T$. This means $a_{ij} = a_{ji}$ for all $i, j$.

**Properties and Advantages:**

*   **Eigenvalues:** All eigenvalues of a real symmetric matrix are real.
*   **Orthogonal Diagonalization:** A symmetric matrix can always be diagonalized by an orthogonal matrix.
*   **Positive Definite:** If a symmetric matrix has all positive eigenvalues, it is **positive definite**. This property is crucial for certain numerical methods.
*   **Efficient Solvers:**
    *   **Cholesky Decomposition:** If $A$ is symmetric and positive-definite, it can be decomposed as $A = LL^T$. This requires about half the storage and computation of LU decomposition.
    *   **Iterative Methods:** Often converge faster for symmetric and positive-definite systems. Conjugate Gradient method is particularly effective.
*   **Reduced Storage:** Only the upper or lower triangle of the matrix needs to be stored.

**Example:**

$$
A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 2 \\ 0 & 2 & 4 \end{pmatrix}
$$
This matrix is symmetric because $a_{12} = a_{21} = 1$, $a_{13} = a_{31} = 0$, and $a_{23} = a_{32} = 2$.

**Cholesky Decomposition Example:**

For $A = \begin{pmatrix} 4 & 12 & -16 \\ 12 & 37 & -43 \\ -16 & -43 & 98 \end{pmatrix}$, we can find $L$ such that $A = LL^T$.
$$
L = \begin{pmatrix} 2 & 0 & 0 \\ 6 & 1 & 0 \\ -8 & 5 & 3 \end{pmatrix}
$$
Then $LL^T = \begin{pmatrix} 2 & 0 & 0 \\ 6 & 1 & 0 \\ -8 & 5 & 3 \end{pmatrix} \begin{pmatrix} 2 & 6 & -8 \\ 0 & 1 & 5 \\ 0 & 0 & 3 \end{pmatrix} = \begin{pmatrix} 4 & 12 & -16 \\ 12 & 37 & -43 \\ -16 & -43 & 98 \end{pmatrix} = A$.

#### 3.2 Banded Systems

A **banded matrix** is a sparse matrix where the non-zero elements are concentrated around the main diagonal. A matrix is **banded with bandwidth $m$** if $a_{ij} = 0$ whenever $|i-j| > m$.

*   **Bandwidth:** The maximum distance of any non-zero element from the main diagonal.
*   **Upper Bandwidth ($m_U$):** The maximum value of $j-i$ for which $a_{ij} \neq 0$.
*   **Lower Bandwidth ($m_L$):** The maximum value of $i-j$ for which $a_{ij} \neq 0$.
*   **Bandwidth:** $m = \max(m_U, m_L)$.
*   **Special Cases:**
    *   **Diagonal Matrix:** Bandwidth = 0.
    *   **Tridiagonal Matrix:** Bandwidth = 1 ($m_U=1, m_L=1$). Non-zero elements only on the main diagonal, superdiagonal, and subdiagonal.
    *   **Bidiagonal Matrix:** Bandwidth = 1 ($m_U=1$ or $m_L=1$). Non-zero elements on the main diagonal and one other diagonal.

**Advantages of Banded Systems:**

*   **Reduced Storage:** Only the non-zero elements within the band need to be stored, significantly reducing memory requirements for large matrices.
*   **Computational Efficiency:** Algorithms can be optimized to only operate on the non-zero elements, leading to faster computations.
    *   **Gaussian Elimination:** Can be performed much more efficiently on banded systems, preserving the banded structure (though the bandwidth may increase slightly in some cases).
    *   **Specialized Algorithms:** Algorithms are designed specifically for tridiagonal or other banded systems.

**Example of a Tridiagonal System:**

$$
\begin{pmatrix}
b_1 & c_1 & 0 & 0 \\
a_2 & b_2 & c_2 & 0 \\
0 & a_3 & b_3 & c_3 \\
0 & 0 & a_4 & b_4
\end{pmatrix}
\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix}
=
\begin{pmatrix} d_1 \\ d_2 \\ d_3 \\ d_4 \end{pmatrix}
$$

Here, $a_i$ are elements of the subdiagonal, $b_i$ are elements of the main diagonal, and $c_i$ are elements of the superdiagonal.

**Numerical Methods for Banded Systems:**

*   **Gaussian Elimination:** Can be adapted. For a tridiagonal system, the elimination process maintains the tridiagonal structure, requiring only a few operations per step.
*   **Thomas Algorithm (for Tridiagonal Systems):** A highly efficient variant of Gaussian elimination specifically for tridiagonal systems. It avoids explicit storage of the entire matrix and performs forward elimination and back substitution in a streamlined manner.

**Thomas Algorithm Outline:**

For a system $Ax=b$ where $A$ is tridiagonal:
$$
\begin{aligned}
b_1 x_1 + c_1 x_2 &= d_1 \\
a_i x_{i-1} + b_i x_i + c_i x_{i+1} &= d_i, \quad i = 2, \ldots, n-1 \\
a_n x_{n-1} + b_n x_n &= d_n
\end{aligned}
$$
The algorithm modifies the coefficients as follows:

**Forward Elimination:**
For $i = 1, \ldots, n-1$:
1.  $m_i = \frac{a_i}{b_{i-1}'}$ (for $i=2,\ldots,n$)
2.  $b_i' = b_i - m_i c_{i-1}$
3.  $d_i' = d_i - m_i d_{i-1}$ (for $i=2,\ldots,n$)

The modified system becomes:
$$
\begin{aligned}
b_1' x_1 + c_1 x_2 &= d_1' \\
b_i' x_i + c_i x_{i+1} &= d_i' \quad i = 2, \ldots, n-1 \\
b_n' x_n &= d_n'
\end{aligned}
$$

**Back Substitution:**
1.  $x_n = \frac{d_n'}{b_n'}$
2.  $x_i = \frac{d_i' - c_i x_{i+1}}{b_i'}, \quad i = n-1, \ldots, 1$

---

### 4. Learning Outcome Checklist

*   **Understanding of Systems of Linear Algebraic Equations:** Covered definition, matrix form, solution types, and basic solution methods.
*   **Identification and Implications of Ill-conditioned Systems:** Defined ill-conditioning, introduced condition number, discussed causes, and impact on numerical solutions.
*   **Strategies for Handling Ill-conditioned Systems:** Mentioned preconditioning, higher precision, appropriate methods, and regularization.
*   **Understanding of Symmetric Systems:** Defined symmetric matrices, discussed properties (eigenvalues, positive definiteness), and advantages (Cholesky, efficiency).
*   **Understanding of Banded Systems:** Defined banded matrices, bandwidth, and special cases (tridiagonal).
*   **Advantages of Symmetric and Banded Systems:** Highlighted reduced storage and computational efficiency.
*   **Knowledge of Specialized Methods (e.g., Thomas Algorithm):** Outlined the Thomas algorithm for tridiagonal systems.

---

### 5. Practice Questions and Exercises

**Question 1:**
What is the condition number of a matrix, and what does a high condition number signify for a system of linear equations?

**Question 2:**
Consider the following system:
$$
\begin{aligned}
x_1 - x_2 &= 1 \\
2x_1 - 2.001x_2 &= 2.001
\end{aligned}
$$
Is this system likely to be well-conditioned or ill-conditioned? Briefly explain why.

**Question 3:**
Define a symmetric matrix. Provide an example of a 3x3 symmetric matrix.

**Question 4:**
What is a tridiagonal matrix? Give an example of a 4x4 tridiagonal matrix.

**Question 5:**
What are the main advantages of solving symmetric and banded systems of linear equations compared to general systems?

**Question 6 (Challenge):**
Solve the following tridiagonal system using the Thomas Algorithm:
$$
\begin{pmatrix}
2 & -1 & 0 & 0 \\
-1 & 3 & -1 & 0 \\
0 & -1 & 4 & -1 \\
0 & 0 & -1 & 5
\end{pmatrix}
\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix}
=
\begin{pmatrix} 1 \\ 2 \\ 3 \\ 4 \end{pmatrix}
$$

---

### 6. Answers to Practice Questions

**Answer 1:**
The condition number of a matrix $A$ is defined as $\kappa(A) = \|A\| \|A^{-1}\|$. A high condition number signifies that the system of linear equations $Ax=b$ is ill-conditioned. This means that small perturbations in the matrix $A$ or the vector $b$ can lead to large changes in the solution vector $x$, making the solution sensitive to errors and difficult to obtain accurately.

**Answer 2:**
This system is likely to be **ill-conditioned**.
The coefficient matrix is $A = \begin{pmatrix} 1 & -1 \\ 2 & -2.001 \end{pmatrix}$.
The determinant is $\det(A) = (1)(-2.001) - (-1)(2) = -2.001 + 2 = -0.001$.
A determinant very close to zero indicates that the matrix is nearly singular, which is a common characteristic of ill-conditioned systems.

**Answer 3:**
A symmetric matrix is a square matrix $A$ such that $A = A^T$. This means that the element in the $i$-th row and $j$-th column is equal to the element in the $j$-th row and $i$-th column ($a_{ij} = a_{ji}$).

Example of a 3x3 symmetric matrix:
$$
A = \begin{pmatrix} 5 & 2 & -1 \\ 2 & 7 & 3 \\ -1 & 3 & 8 \end{pmatrix}
$$

**Answer 4:**
A tridiagonal matrix is a special type of banded matrix where the non-zero elements are located only on the main diagonal, the immediately above (superdiagonal), and the immediately below (subdiagonal).

Example of a 4x4 tridiagonal matrix:
$$
A = \begin{pmatrix}
a_{11} & a_{12} & 0 & 0 \\
a_{21} & a_{22} & a_{23} & 0 \\
0 & a_{32} & a_{33} & a_{34} \\
0 & 0 & a_{43} & a_{44}
\end{pmatrix}
$$
where $a_{ii}$ are main diagonal elements, $a_{i,i+1}$ are superdiagonal elements, and $a_{i+1,i}$ are subdiagonal elements.

**Answer 5:**
The main advantages of solving symmetric and banded systems of linear equations are:
1.  **Reduced Storage:** Symmetric matrices only require storing half of their elements (e.g., the upper or lower triangle), while banded matrices require storing only the non-zero elements within the band. This significantly reduces memory requirements, especially for large systems.
2.  **Computational Efficiency:** Specialized algorithms, like Cholesky decomposition for symmetric positive-definite matrices and the Thomas algorithm for tridiagonal systems, are much faster than general-purpose methods (like Gaussian elimination for dense matrices) because they exploit the matrix structure and avoid unnecessary computations.

**Answer 6 (Challenge):**
System:
$$
\begin{pmatrix}
2 & -1 & 0 & 0 \\
-1 & 3 & -1 & 0 \\
0 & -1 & 4 & -1 \\
0 & 0 & -1 & 5
\end{pmatrix}
\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix}
=
\begin{pmatrix} 1 \\ 2 \\ 3 \\ 4 \end{pmatrix}
$$
Coefficients: $a = [-1, -1, -1]$, $b = [2, 3, 4, 5]$, $c = [-1, -1, -1]$, $d = [1, 2, 3, 4]$

**Forward Elimination (Thomas Algorithm):**

Initialize modified $b$ and $d$: $b' = b$, $d' = d$.

*   **i = 1:** No division needed for $b_1$.
*   **i = 2:**
    $m_2 = a_2 / b_1' = -1 / 2$
    $b_2' = b_2 - m_2 c_1 = 3 - (-1/2)(-1) = 3 - 1/2 = 5/2$
    $d_2' = d_2 - m_2 d_1 = 2 - (-1/2)(1) = 2 + 1/2 = 5/2$
*   **i = 3:**
    $m_3 = a_3 / b_2' = -1 / (5/2) = -2/5$
    $b_3' = b_3 - m_3 c_2 = 4 - (-2/5)(-1) = 4 - 2/5 = 18/5$
    $d_3' = d_3 - m_3 d_2 = 3 - (-2/5)(5/2) = 3 - (-1) = 4$
*   **i = 4:**
    $m_4 = a_4 / b_3' = -1 / (18/5) = -5/18$
    $b_4' = b_4 - m_4 c_3 = 5 - (-5/18)(-1) = 5 - 5/18 = 85/18$
    $d_4' = d_4 - m_4 d_3 = 4 - (-5/18)(4) = 4 + 20/18 = 4 + 10/9 = 46/9$

Modified system:
$$
\begin{pmatrix}
2 & -1 & 0 & 0 \\
0 & 5/2 & -1 & 0 \\
0 & 0 & 18/5 & -1 \\
0 & 0 & 0 & 85/18
\end{pmatrix}
\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix}
=
\begin{pmatrix} 1 \\ 5/2 \\ 4 \\ 46/9 \end{pmatrix}
$$

**Back Substitution:**

*   $x_4 = d_4' / b_4' = (46/9) / (85/18) = (46/9) \times (18/85) = 46 \times (2/85) = 92/85$
*   $x_3 = (d_3' - c_3 x_4) / b_3' = (4 - (-1)(92/85)) / (18/5) = (4 + 92/85) / (18/5)$
    $x_3 = (\frac{340+92}{85}) / (\frac{18}{5}) = (\frac{432}{85}) \times (\frac{5}{18}) = \frac{432}{17 \times 18} = \frac{24}{17}$
*   $x_2 = (d_2' - c_2 x_3) / b_2' = (5/2 - (-1)(24/17)) / (5/2) = (5/2 + 24/17) / (5/2)$
    $x_2 = (\frac{85+48}{34}) / (\frac{5}{2}) = (\frac{133}{34}) \times (\frac{2}{5}) = \frac{133}{17 \times 5} = \frac{133}{85}$
*   $x_1 = (d_1' - c_1 x_2) / b_1' = (1 - (-1)(133/85)) / 2 = (1 + 133/85) / 2$
    $x_1 = (\frac{85+133}{85}) / 2 = (\frac{218}{85}) / 2 = \frac{109}{85}$

Solution: $x_1 = \frac{109}{85}, x_2 = \frac{133}{85}, x_3 = \frac{24}{17}, x_4 = \frac{92}{85}$.

---

### 7. Important Points to Remember

*   **Condition number ($\kappa(A)$):** A measure of sensitivity. High $\kappa(A)$ means ill-conditioned.
*   **Ill-conditioned systems:** Sensitive to errors, leading to inaccurate solutions.
*   **Symmetric matrices:** $A = A^T$. Efficiently solved with Cholesky decomposition if positive-definite.
*   **Banded matrices:** Non-zero elements clustered around the diagonal. Reduces storage and computation.
*   **Tridiagonal systems:** A common type of banded system, efficiently solved by the Thomas algorithm.
*   **Choice of method matters:** For well-behaved systems, direct methods are fine. For large, sparse, or ill-conditioned systems, specialized methods or iterative techniques are preferred.

---
