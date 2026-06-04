---
title: "Brief review of matrix methods"
subject: "FINITE ELEMENT METHOD"
module: "Module 2: Brief review of matrix methods"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116cd"
status: "completed"
scrapedAt: "2026-05-20T18:58:51.771Z"
---
# FINITE ELEMENT METHOD - Module 2: Brief Review of Matrix Methods

This module serves as a fundamental recap of essential matrix operations and concepts crucial for understanding the Finite Element Method (FEM). A strong grasp of these mathematical tools will significantly aid in comprehending the assembly, solution, and interpretation of FEM problems.

---

## 1. Introduction to Matrices

A matrix is a rectangular array of numbers, symbols, or expressions, arranged in rows and columns. It is a fundamental data structure used to represent and manipulate linear transformations and systems of equations, which are prevalent in FEM.

**Key Concepts:**

*   **Elements:** Individual entries within a matrix.
*   **Order (or Dimension):** The number of rows and columns in a matrix (e.g., an $m \times n$ matrix has $m$ rows and $n$ columns).
*   **Square Matrix:** A matrix where the number of rows equals the number of columns ($n \times n$).
*   **Vector:** A matrix with only one column (column vector) or one row (row vector).

**Notation:**

Matrices are typically denoted by uppercase letters (e.g., $\mathbf{A}$, $\mathbf{B}$). Individual elements are denoted by the corresponding lowercase letter with subscripts indicating the row and column position (e.g., $a_{ij}$ is the element in the $i$-th row and $j$-th column of matrix $\mathbf{A}$).

---

## 2. Types of Matrices

Understanding different matrix types is important as they often represent specific physical quantities or properties in FEM.

**Key Concepts & Definitions:**

*   **Zero Matrix (Null Matrix):** A matrix where all elements are zero.
    *   *Example:*
        $$
        \mathbf{0} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}
        $$
*   **Identity Matrix (Unit Matrix):** A square matrix with all diagonal elements equal to 1 and all off-diagonal elements equal to 0. Denoted by $\mathbf{I}$ or $\mathbf{I}_n$ for an $n \times n$ identity matrix.
    *   *Properties:* $\mathbf{A}\mathbf{I} = \mathbf{I}\mathbf{A} = \mathbf{A}$ for any compatible matrix $\mathbf{A}$.
    *   *Example:*
        $$
        \mathbf{I}_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
        $$
*   **Diagonal Matrix:** A square matrix where all off-diagonal elements are zero.
    *   *Example:*
        $$
        \mathbf{D} = \begin{bmatrix} 2 & 0 & 0 \\ 0 & -5 & 0 \\ 0 & 0 & 10 \end{bmatrix}
        $$
*   **Symmetric Matrix:** A square matrix where the elements are symmetric with respect to the main diagonal. That is, $\mathbf{A}^T = \mathbf{A}$ or $a_{ij} = a_{ji}$ for all $i$ and $j$.
    *   *Importance in FEM:* Stiffness matrices in structural mechanics and heat transfer are typically symmetric.
    *   *Example:*
        $$
        \mathbf{S} = \begin{bmatrix} 4 & 2 & 1 \\ 2 & 5 & 3 \\ 1 & 3 & 6 \end{bmatrix}
        $$
*   **Upper Triangular Matrix:** A square matrix where all elements below the main diagonal are zero.
    *   *Example:*
        $$
        \mathbf{U} = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix}
        $$
*   **Lower Triangular Matrix:** A square matrix where all elements above the main diagonal are zero.
    *   *Example:*
        $$
        \mathbf{L} = \begin{bmatrix} 7 & 0 & 0 \\ 8 & 9 & 0 \\ 10 & 11 & 12 \end{bmatrix}
        $$
*   **Band Matrix:** A matrix where the non-zero elements are confined to a band around the main diagonal.
    *   **Tridiagonal Matrix:** A special case of a band matrix where non-zero elements are only on the main diagonal and the two adjacent diagonals.
    *   *Importance in FEM:* Due to the localized nature of element connectivity, FEM often results in sparse and banded matrices, particularly tridiagonal matrices for 1D problems.

---

## 3. Matrix Operations

Understanding how to perform basic matrix operations is fundamental to manipulating the equations derived in FEM.

### 3.1. Matrix Addition and Subtraction

*   **Definition:** Matrices can be added or subtracted if they have the same order. The operation is performed element-wise.
*   **Rule:** If $\mathbf{C} = \mathbf{A} + \mathbf{B}$, then $c_{ij} = a_{ij} + b_{ij}$.
*   **Example:**
    $$
    \mathbf{A} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}
    $$
    $$
    \mathbf{A} + \mathbf{B} = \begin{bmatrix} 1+5 & 2+6 \\ 3+7 & 4+8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}
    $$
*   **Properties:** Commutative ($\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}$), Associative ($\mathbf{A} + (\mathbf{B} + \mathbf{C}) = (\mathbf{A} + \mathbf{B}) + \mathbf{C}$).

### 3.2. Scalar Multiplication

*   **Definition:** Multiplying a matrix by a scalar involves multiplying each element of the matrix by that scalar.
*   **Rule:** If $\mathbf{C} = k\mathbf{A}$, then $c_{ij} = k \cdot a_{ij}$.
*   **Example:**
    $$
    k = 3, \quad \mathbf{A} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}
    $$
    $$
    3\mathbf{A} = \begin{bmatrix} 3 \cdot 1 & 3 \cdot 2 \\ 3 \cdot 3 & 3 \cdot 4 \end{bmatrix} = \begin{bmatrix} 3 & 6 \\ 9 & 12 \end{bmatrix}
    $$

### 3.3. Matrix Multiplication

*   **Definition:** Matrix multiplication is a more complex operation. For the product $\mathbf{C} = \mathbf{A}\mathbf{B}$ to be defined, the number of columns in $\mathbf{A}$ must equal the number of rows in $\mathbf{B}$. If $\mathbf{A}$ is $m \times n$ and $\mathbf{B}$ is $n \times p$, then $\mathbf{C}$ will be $m \times p$.
*   **Rule:** The element $c_{ij}$ in the resulting matrix $\mathbf{C}$ is calculated by taking the dot product of the $i$-th row of $\mathbf{A}$ and the $j$-th column of $\mathbf{B}$.
    $$
    c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}
    $$
*   **Example:**
    $$
    \mathbf{A} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \quad (2 \times 2), \quad \mathbf{B} = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} \quad (2 \times 2)
    $$
    $$
    \mathbf{C} = \mathbf{A}\mathbf{B} = \begin{bmatrix} (1)(5)+(2)(7) & (1)(6)+(2)(8) \\ (3)(5)+(4)(7) & (3)(6)+(4)(8) \end{bmatrix} = \begin{bmatrix} 5+14 & 6+16 \\ 15+28 & 18+32 \end{bmatrix} = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}
    $$
*   **Important Note:** Matrix multiplication is generally **not commutative**, meaning $\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}$ in most cases.
*   **Properties:** Associative ($\mathbf{A}(\mathbf{B}\mathbf{C}) = (\mathbf{A}\mathbf{B})\mathbf{C}$), Distributive ($\mathbf{A}(\mathbf{B}+\mathbf{C}) = \mathbf{A}\mathbf{B} + \mathbf{A}\mathbf{C}$ and $(\mathbf{A}+\mathbf{B})\mathbf{C} = \mathbf{A}\mathbf{C} + \mathbf{B}\mathbf{C}$).

### 3.4. Transpose of a Matrix

*   **Definition:** The transpose of a matrix $\mathbf{A}$, denoted by $\mathbf{A}^T$, is obtained by interchanging its rows and columns.
*   **Rule:** If $\mathbf{A}$ is $m \times n$, then $\mathbf{A}^T$ is $n \times m$, and $a_{ij}^T = a_{ji}$.
*   **Example:**
    $$
    \mathbf{A} = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \quad (2 \times 3)
    $$
    $$
    \mathbf{A}^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix} \quad (3 \times 2)
    $$
*   **Properties:**
    *   $(\mathbf{A}^T)^T = \mathbf{A}$
    *   $(k\mathbf{A})^T = k\mathbf{A}^T$
    *   $(\mathbf{A} + \mathbf{B})^T = \mathbf{A}^T + \mathbf{B}^T$
    *   $(\mathbf{A}\mathbf{B})^T = \mathbf{B}^T \mathbf{A}^T$

---

## 4. Systems of Linear Equations

FEM problems are ultimately reduced to solving a system of linear algebraic equations in the form $\mathbf{K}\mathbf{u} = \mathbf{f}$, where:

*   $\mathbf{K}$ is the **stiffness matrix** (or coefficient matrix).
*   $\mathbf{u}$ is the **unknown displacement vector** (or solution vector).
*   $\mathbf{f}$ is the **force vector** (or load vector).

### 4.1. Solving Linear Systems

Several methods exist to solve these systems. The most common ones relevant to FEM are:

*   **Direct Methods:**
    *   **Gaussian Elimination:** A systematic procedure to transform the augmented matrix $[\mathbf{K} | \mathbf{f}]$ into an upper triangular form, followed by back-substitution to find the solution.
    *   **LU Decomposition:** Factoring the stiffness matrix $\mathbf{K}$ into a lower triangular matrix $\mathbf{L}$ and an upper triangular matrix $\mathbf{U}$, such that $\mathbf{K} = \mathbf{L}\mathbf{U}$. The system $\mathbf{L}\mathbf{U}\mathbf{u} = \mathbf{f}$ is then solved in two steps: $\mathbf{L}\mathbf{y} = \mathbf{f}$ (forward substitution) and $\mathbf{U}\mathbf{u} = \mathbf{y}$ (back substitution).
        *   *Advantage:* Efficient for solving multiple systems with the same $\mathbf{K}$ but different $\mathbf{f}$.

*   **Iterative Methods:** (Less emphasis in this introductory review but important for large systems)
    *   Methods like Jacobi, Gauss-Seidel, and Conjugate Gradient are used when direct methods become computationally too expensive. They start with an initial guess for $\mathbf{u}$ and iteratively refine it until convergence.

### 4.2. Determinant of a Matrix

*   **Definition:** The determinant is a scalar value that can be computed from the elements of a square matrix. It provides information about the matrix's properties, such as invertibility.
*   **Notation:** $\det(\mathbf{A})$ or $|\mathbf{A}|$.
*   **For a $2 \times 2$ matrix:**
    $$
    \mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \implies \det(\mathbf{A}) = ad - bc
    $$
*   **For a $3 \times 3$ matrix (using cofactor expansion):**
    $$
    \mathbf{A} = \begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix}
    $$
    $$
    \det(\mathbf{A}) = a_{11} \begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{12} \begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix} + a_{13} \begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix}
    $$
*   **Importance in FEM:**
    *   A non-zero determinant indicates that the matrix is **invertible**. For $\mathbf{K}\mathbf{u} = \mathbf{f}$, a non-zero determinant of $\mathbf{K}$ means a unique solution for $\mathbf{u}$ exists.
    *   The determinant can also be related to the volume of a parallelepiped formed by the matrix's row or column vectors.

### 4.3. Inverse of a Matrix

*   **Definition:** The inverse of a square matrix $\mathbf{A}$, denoted by $\mathbf{A}^{-1}$, is a matrix such that $\mathbf{A}\mathbf{A}^{-1} = \mathbf{A}^{-1}\mathbf{A} = \mathbf{I}$ (the identity matrix).
*   **Existence:** An inverse exists only for square matrices with a non-zero determinant (non-singular matrices).
*   **For a $2 \times 2$ matrix:**
    $$
    \mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \implies \mathbf{A}^{-1} = \frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}
    $$
*   **Solving $\mathbf{K}\mathbf{u} = \mathbf{f}$ using inverse:** If $\mathbf{K}$ is invertible, then $\mathbf{u} = \mathbf{K}^{-1}\mathbf{f}$. While mathematically correct, computing the inverse explicitly is often computationally expensive and less stable than direct solvers like LU decomposition for larger systems.
*   **Importance in FEM:** While we often avoid computing the explicit inverse, the concept of invertibility (non-zero determinant) is crucial for ensuring a solvable system.

---

## 5. Practice Questions and Exercises

**Question 1:**
Given matrices $\mathbf{A} = \begin{bmatrix} 1 & -2 \\ 3 & 4 \end{bmatrix}$ and $\mathbf{B} = \begin{bmatrix} 0 & 5 \\ -1 & 2 \end{bmatrix}$, compute $\mathbf{A} + \mathbf{B}$ and $2\mathbf{A}$.

**Question 2:**
Calculate the product $\mathbf{A}\mathbf{B}$ for the matrices given in Question 1.

**Question 3:**
Find the transpose of matrix $\mathbf{C} = \begin{bmatrix} 1 & 0 & 2 \\ -1 & 3 & 0 \end{bmatrix}$.

**Question 4:**
Consider the system of equations:
$2x + 3y = 7$
$x - y = 1$
Write this system in matrix form $\mathbf{K}\mathbf{u} = \mathbf{f}$ and solve for $\mathbf{u} = \begin{bmatrix} x \\ y \end{bmatrix}$ using Gaussian elimination.

**Question 5:**
Calculate the determinant of the matrix $\mathbf{D} = \begin{bmatrix} 3 & 1 & 2 \\ 0 & 4 & -1 \\ 1 & 2 & 5 \end{bmatrix}$.

**Question 6:**
For the matrix $\mathbf{E} = \begin{bmatrix} 4 & 2 \\ 1 & 3 \end{bmatrix}$, calculate its inverse $\mathbf{E}^{-1}$. Verify your answer by computing $\mathbf{E}\mathbf{E}^{-1}$.

---

## 6. Answers to Practice Questions

**Answer 1:**
$$
\mathbf{A} + \mathbf{B} = \begin{bmatrix} 1+0 & -2+5 \\ 3+(-1) & 4+2 \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 2 & 6 \end{bmatrix}
$$
$$
2\mathbf{A} = 2 \begin{bmatrix} 1 & -2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 2 & -4 \\ 6 & 8 \end{bmatrix}
$$

**Answer 2:**
$$
\mathbf{A}\mathbf{B} = \begin{bmatrix} (1)(0)+(-2)(-1) & (1)(5)+(-2)(2) \\ (3)(0)+(4)(-1) & (3)(5)+(4)(2) \end{bmatrix} = \begin{bmatrix} 0+2 & 5-4 \\ 0-4 & 15+8 \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ -4 & 23 \end{bmatrix}
$$

**Answer 3:**
$$
\mathbf{C}^T = \begin{bmatrix} 1 & -1 \\ 0 & 3 \\ 2 & 0 \end{bmatrix}
$$

**Answer 4:**
Matrix form:
$$
\begin{bmatrix} 2 & 3 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 7 \\ 1 \end{bmatrix}
$$
Gaussian Elimination:
Augmented matrix:
$$
\left[\begin{array}{cc|c} 2 & 3 & 7 \\ 1 & -1 & 1 \end{array}\right]
$$
Swap R1 and R2:
$$
\left[\begin{array}{cc|c} 1 & -1 & 1 \\ 2 & 3 & 7 \end{array}\right]
$$
R2 = R2 - 2*R1:
$$
\left[\begin{array}{cc|c} 1 & -1 & 1 \\ 0 & 5 & 5 \end{array}\right]
$$
From R2: $5y = 5 \implies y = 1$.
From R1: $x - y = 1 \implies x - 1 = 1 \implies x = 2$.
Solution: $\mathbf{u} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$.

**Answer 5:**
Using cofactor expansion along the first column:
$$
\det(\mathbf{D}) = 3 \begin{vmatrix} 4 & -1 \\ 2 & 5 \end{vmatrix} - 0 \begin{vmatrix} 1 & 2 \\ 2 & 5 \end{vmatrix} + 1 \begin{vmatrix} 1 & 2 \\ 4 & -1 \end{vmatrix}
$$
$$
\det(\mathbf{D}) = 3((4)(5) - (-1)(2)) - 0 + 1((1)(-1) - (2)(4))
$$
$$
\det(\mathbf{D}) = 3(20 + 2) + 1(-1 - 8)
$$
$$
\det(\mathbf{D}) = 3(22) + 1(-9) = 66 - 9 = 57
$$

**Answer 6:**
For $\mathbf{E} = \begin{bmatrix} 4 & 2 \\ 1 & 3 \end{bmatrix}$, the determinant is $\det(\mathbf{E}) = (4)(3) - (2)(1) = 12 - 2 = 10$.
$$
\mathbf{E}^{-1} = \frac{1}{10} \begin{bmatrix} 3 & -2 \\ -1 & 4 \end{bmatrix} = \begin{bmatrix} 0.3 & -0.2 \\ -0.1 & 0.4 \end{bmatrix}
$$
Verification:
$$
\mathbf{E}\mathbf{E}^{-1} = \begin{bmatrix} 4 & 2 \\ 1 & 3 \end{bmatrix} \begin{bmatrix} 0.3 & -0.2 \\ -0.1 & 0.4 \end{bmatrix} = \begin{bmatrix} (4)(0.3)+(2)(-0.1) & (4)(-0.2)+(2)(0.4) \\ (1)(0.3)+(3)(-0.1) & (1)(-0.2)+(3)(0.4) \end{bmatrix}
$$
$$
\mathbf{E}\mathbf{E}^{-1} = \begin{bmatrix} 1.2-0.2 & -0.8+0.8 \\ 0.3-0.3 & -0.2+1.2 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \mathbf{I}
$$

---

## 7. Important Points to Remember

*   **Compatibility:** Always check for dimension compatibility before performing matrix operations, especially multiplication and addition/subtraction.
*   **Symmetry:** Recognize symmetric matrices (like stiffness matrices) as they can simplify computations and storage.
*   **Banded Nature:** Understand that FEM often leads to sparse and banded matrices, which have efficient solution methods.
*   **Matrix Multiplication Non-Commutativity:** $\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}$ is a critical point.
*   **Determinant and Invertibility:** A non-zero determinant is essential for a unique solution to $\mathbf{K}\mathbf{u} = \mathbf{f}$.
*   **Inverse vs. Solvers:** While $\mathbf{u} = \mathbf{K}^{-1}\mathbf{f}$ is mathematically correct, direct solution methods like Gaussian elimination or LU decomposition are generally preferred for efficiency and numerical stability in FEM.

---
This concludes the review of basic matrix methods. A solid understanding of these concepts will greatly facilitate the learning of subsequent modules in the Finite Element Method.
