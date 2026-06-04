---
title: "LINEAR ALGEBRA: Systems of Linear Equations – Matrices, Solving Systems of Linear Equations."
subject: "MATHEMATICS FOR MACHINE LEARNING"
module: "Module 1: LINEAR ALGEBRA: Systems of Linear Equations – Matrices, Solving Systems of Linear Equations."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35ee8"
status: "completed"
scrapedAt: "2026-05-23T16:17:16.185Z"
---
# Mathematics for Machine Learning: Module 1 - Linear Algebra

## Topic: Systems of Linear Equations – Matrices, Solving Systems of Linear Equations

This module introduces the fundamental concepts of linear algebra, specifically focusing on systems of linear equations and their representation using matrices. Understanding these concepts is crucial for many machine learning algorithms, as they often involve manipulating data and solving problems in a linear algebraic framework.

---

### 1. Systems of Linear Equations

A system of linear equations is a collection of two or more linear equations involving the same set of variables.

**Definition:** A linear equation in $n$ variables $x_1, x_2, \ldots, x_n$ is an equation of the form:
$a_1x_1 + a_2x_2 + \ldots + a_nx_n = b$
where $a_1, a_2, \ldots, a_n$ are coefficients (constants) and $b$ is a constant term.

**General Form of a System of Linear Equations:**
Consider a system with $m$ equations and $n$ variables:
$a_{11}x_1 + a_{12}x_2 + \ldots + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + \ldots + a_{2n}x_n = b_2$
$\vdots$
$a_{m1}x_1 + a_{m2}x_2 + \ldots + a_{mn}x_n = b_m$

**Solutions to a System of Linear Equations:**
A solution to a system of linear equations is a set of values for the variables that satisfies all equations in the system simultaneously. A system can have:
*   **No solution:** The equations are inconsistent (e.g., $x+y=1$ and $x+y=2$).
*   **Exactly one solution:** The equations are consistent and independent.
*   **Infinitely many solutions:** The equations are consistent and dependent (some equations can be derived from others).

**Relevance to Machine Learning (CO1: K3):** Many machine learning problems can be framed as solving systems of linear equations. For example, in linear regression, we aim to find the best-fit line (or hyperplane) through data points, which involves solving a system of linear equations to determine the coefficients.

---

### 2. Matrices

Matrices are rectangular arrays of numbers or symbols, arranged in rows and columns. They provide a concise and powerful way to represent and manipulate systems of linear equations and data in machine learning.

**Definition:** An $m \times n$ matrix (read "$m$ by $n$") is a rectangular array of numbers with $m$ rows and $n$ columns.

$$
A = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

*   $a_{ij}$ represents the element in the $i$-th row and $j$-th column of matrix $A$.

**Matrix Representation of a System of Linear Equations:**
A system of linear equations can be written in matrix form as $Ax = b$, where:
*   $A$ is the **coefficient matrix** ($m \times n$).
*   $x$ is the **variable vector** ($n \times 1$).
*   $b$ is the **constant vector** ($m \times 1$).

Using the general system of $m$ equations and $n$ variables from Section 1:
$$
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{bmatrix}
=
\begin{bmatrix}
b_1 \\
b_2 \\
\vdots \\
b_m
\end{bmatrix}
$$

**Augmented Matrix:**
For convenience, we can combine the coefficient matrix $A$ and the constant vector $b$ into an **augmented matrix** $[A | b]$:
$$
[A | b] = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} & | & b_1 \\
a_{21} & a_{22} & \cdots & a_{2n} & | & b_2 \\
\vdots & \vdots & \ddots & \vdots & | & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} & | & b_m
\end{bmatrix}
$$

**Example:**
Consider the system:
$2x_1 + 3x_2 = 7$
$x_1 - x_2 = 1$

Matrix form: $A = \begin{bmatrix} 2 & 3 \\ 1 & -1 \end{bmatrix}$, $x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$, $b = \begin{bmatrix} 7 \\ 1 \end{bmatrix}$
So, $Ax = b$ is $\begin{bmatrix} 2 & 3 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 7 \\ 1 \end{bmatrix}$.

Augmented matrix: $[A | b] = \begin{bmatrix} 2 & 3 & | & 7 \\ 1 & -1 & | & 1 \end{bmatrix}$

**Key Matrix Types:**
*   **Square Matrix:** Number of rows equals the number of columns ($m=n$).
*   **Identity Matrix ($I$):** A square matrix with 1s on the main diagonal and 0s elsewhere. $I_n$ is the $n \times n$ identity matrix.
    $$
    I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$
*   **Zero Matrix ($0$):** A matrix where all elements are 0.
*   **Diagonal Matrix:** A square matrix where all off-diagonal elements are 0.

**Matrix Operations (Brief Overview - more in later modules):**
*   **Addition/Subtraction:** Element-wise, requires matrices of the same dimensions.
*   **Scalar Multiplication:** Multiply each element by a scalar.
*   **Matrix Multiplication:** More complex, involves dot products of rows and columns. If $A$ is $m \times n$ and $B$ is $n \times p$, then $AB$ is $m \times p$.

**Reference:**
*   **Deisenroth, Faisal, Ong:** Chapter 2 covers fundamental matrix operations and properties, which are foundational for understanding systems of linear equations. They emphasize matrices as representations of linear transformations.
*   **Strang:** Chapter 1 and 2 in "Linear Algebra and Its Applications" provide a thorough introduction to matrices, vectors, and systems of linear equations. Strang often uses geometric interpretations, which can be helpful for intuition.

---

### 3. Solving Systems of Linear Equations

Solving a system of linear equations means finding the values of the variables that satisfy all equations simultaneously.

#### 3.1 Gaussian Elimination (Row Reduction)

Gaussian elimination is a systematic algorithm used to solve systems of linear equations. It involves transforming the augmented matrix into **row echelon form** or **reduced row echelon form** using **elementary row operations**.

**Elementary Row Operations:**
1.  **Swap:** Swap two rows.
2.  **Scale:** Multiply a row by a non-zero scalar.
3.  **Replace:** Add a multiple of one row to another row.

**Row Echelon Form (REF):**
A matrix is in row echelon form if:
1.  All non-zero rows are above any rows of all zeros.
2.  The leading entry (the first non-zero element from the left, called a *pivot*) of a non-zero row is always strictly to the right of the leading entry of the row above it.
3.  All entries in a column below a leading entry are zeros.

**Reduced Row Echelon Form (RREF):**
A matrix is in reduced row echelon form if it is in row echelon form and:
1.  Every leading entry is 1.
2.  Each leading 1 is the only non-zero entry in its column.

**Steps for Gaussian Elimination:**

1.  Write the augmented matrix for the system.
2.  Use elementary row operations to transform the augmented matrix into row echelon form (for back-substitution) or reduced row echelon form (for direct solution).
3.  Once in REF or RREF, write the corresponding system of equations.
4.  If in REF, use **back-substitution** to find the solution. If in RREF, the solution can often be read directly.

**Example (using Gaussian Elimination to RREF):**
Solve the system:
$x_1 + 2x_2 + x_3 = 3$
$2x_1 + 5x_2 + 3x_3 = 8$
$3x_1 + 6x_2 + 2x_3 = 8$

Augmented Matrix:
$$
\begin{bmatrix}
1 & 2 & 1 & | & 3 \\
2 & 5 & 3 & | & 8 \\
3 & 6 & 2 & | & 8
\end{bmatrix}
$$

**Row Operations:**
*   $R_2 \leftarrow R_2 - 2R_1$
*   $R_3 \leftarrow R_3 - 3R_1$

$$
\begin{bmatrix}
1 & 2 & 1 & | & 3 \\
0 & 1 & 1 & | & 2 \\
0 & 0 & -1 & | & -1
\end{bmatrix}
$$
*(This is now in Row Echelon Form. We could use back-substitution.)*

Let's continue to RREF:
*   $R_3 \leftarrow -1 \cdot R_3$

$$
\begin{bmatrix}
1 & 2 & 1 & | & 3 \\
0 & 1 & 1 & | & 2 \\
0 & 0 & 1 & | & 1
\end{bmatrix}
$$

*   $R_2 \leftarrow R_2 - R_3$
*   $R_1 \leftarrow R_1 - R_3$

$$
\begin{bmatrix}
1 & 2 & 0 & | & 2 \\
0 & 1 & 0 & | & 1 \\
0 & 0 & 1 & | & 1
\end{bmatrix}
$$

*   $R_1 \leftarrow R_1 - 2R_2$

$$
\begin{bmatrix}
1 & 0 & 0 & | & 0 \\
0 & 1 & 0 & | & 1 \\
0 & 0 & 1 & | & 1
\end{bmatrix}
$$
This is in Reduced Row Echelon Form. The corresponding system is:
$x_1 = 0$
$x_2 = 1$
$x_3 = 1$

**Solution:** $x_1=0, x_2=1, x_3=1$.

**Types of Solutions based on RREF:**
*   **Unique Solution:** If the RREF has a pivot in every column corresponding to a variable, and no row of the form $[0 \ 0 \ \ldots \ 0 \ | \ c]$ where $c \neq 0$.
*   **No Solution:** If the RREF has a row of the form $[0 \ 0 \ \ldots \ 0 \ | \ c]$ where $c \neq 0$ (inconsistent system).
*   **Infinitely Many Solutions:** If there is no row of the form $[0 \ 0 \ \ldots \ 0 \ | \ c]$ with $c \neq 0$, and there are fewer pivots than variables (free variables).

**Relevance to Machine Learning (CO1: K3):** Gaussian elimination is the core algorithm for solving many linear systems that arise in ML, such as finding parameters in linear models or inverting matrices.

**Reference:**
*   **Strang:** Chapter 2 and 3 are dedicated to Gaussian elimination, solving $Ax=b$, and understanding the different types of solutions.
*   **Deisenroth, Faisal, Ong:** While they might not detail Gaussian elimination as a primary focus, they introduce matrices as tools for representing systems that *can* be solved using such methods.

#### 3.2 Matrix Inverse (for Square Systems)

For a square system of $n$ equations with $n$ variables ($Ax = b$, where $A$ is $n \times n$), if the matrix $A$ is **invertible** (non-singular), there is a unique solution given by $x = A^{-1}b$.

**Definition:** The inverse of an $n \times n$ matrix $A$, denoted by $A^{-1}$, is the $n \times n$ matrix such that $AA^{-1} = A^{-1}A = I_n$, where $I_n$ is the $n \times n$ identity matrix.

**Conditions for Invertibility:**
A square matrix $A$ is invertible if and only if:
*   Its determinant is non-zero ($\det(A) \neq 0$).
*   It has full rank ($rank(A) = n$).
*   Its RREF is the identity matrix ($I_n$).

**Finding the Inverse:**
The inverse of a matrix $A$ can be found by augmenting $A$ with the identity matrix $[A | I]$ and performing Gaussian elimination to transform $A$ into $I$. The right side will then become $A^{-1}$: $[I | A^{-1}]$.

**Example:**
Find the inverse of $A = \begin{bmatrix} 2 & 3 \\ 1 & -1 \end{bmatrix}$.

Augment with $I$:
$$
\begin{bmatrix}
2 & 3 & | & 1 & 0 \\
1 & -1 & | & 0 & 1
\end{bmatrix}
$$

Swap $R_1$ and $R_2$:
$$
\begin{bmatrix}
1 & -1 & | & 0 & 1 \\
2 & 3 & | & 1 & 0
\end{bmatrix}
$$

$R_2 \leftarrow R_2 - 2R_1$:
$$
\begin{bmatrix}
1 & -1 & | & 0 & 1 \\
0 & 5 & | & 1 & -2
\end{bmatrix}
$$

$R_2 \leftarrow \frac{1}{5}R_2$:
$$
\begin{bmatrix}
1 & -1 & | & 0 & 1 \\
0 & 1 & | & \frac{1}{5} & -\frac{2}{5}
\end{bmatrix}
$$

$R_1 \leftarrow R_1 + R_2$:
$$
\begin{bmatrix}
1 & 0 & | & \frac{1}{5} & \frac{3}{5} \\
0 & 1 & | & \frac{1}{5} & -\frac{2}{5}
\end{bmatrix}
$$

So, $A^{-1} = \begin{bmatrix} \frac{1}{5} & \frac{3}{5} \\ \frac{1}{5} & -\frac{2}{5} \end{bmatrix}$.

To solve $Ax=b$ where $b = \begin{bmatrix} 7 \\ 1 \end{bmatrix}$:
$x = A^{-1}b = \begin{bmatrix} \frac{1}{5} & \frac{3}{5} \\ \frac{1}{5} & -\frac{2}{5} \end{bmatrix} \begin{bmatrix} 7 \\ 1 \end{bmatrix} = \begin{bmatrix} \frac{7}{5} + \frac{3}{5} \\ \frac{7}{5} - \frac{2}{5} \end{bmatrix} = \begin{bmatrix} \frac{10}{5} \\ \frac{5}{5} \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$.
Solution: $x_1=2, x_2=1$.

**Important Note:** Using the matrix inverse is computationally expensive for large systems and can be numerically unstable. Gaussian elimination is generally preferred. However, understanding the inverse is crucial for theoretical insights and some specific applications.

**Relevance to Machine Learning (CO1: K3):** In many optimization problems in ML, we might encounter forms like $A^{-1}b$ or need to compute matrix inverses (e.g., in linear regression with the normal equation, where the solution involves $(X^T X)^{-1}X^T y$).

**Reference:**
*   **Deisenroth, Faisal, Ong:** Chapter 2 discusses matrix inversion and its properties.
*   **Strang:** Chapter 5 delves into the crucial topic of inverses and determinants.

#### 3.3 Determinant

The determinant is a scalar value that can be computed from the elements of a square matrix. It provides important information about the matrix and the system of equations it represents.

**Definition:** The determinant of an $n \times n$ matrix $A$, denoted as $\det(A)$ or $|A|$, is a scalar value. For a $2 \times 2$ matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, $\det(A) = ad - bc$. For larger matrices, it can be computed using cofactor expansion or by reducing to triangular form.

**Key Properties of Determinants:**
*   $\det(AB) = \det(A)\det(B)$
*   $\det(A^T) = \det(A)$
*   $\det(A^{-1}) = 1/\det(A)$
*   If a matrix has a row or column of zeros, its determinant is 0.
*   If a matrix has two identical rows or columns, its determinant is 0.
*   If a matrix is triangular (upper or lower), its determinant is the product of its diagonal entries.
*   The determinant is non-zero if and only if the matrix is invertible (non-singular).
*   The determinant indicates the scaling factor of the linear transformation represented by the matrix. A positive determinant means the orientation of space is preserved, while a negative determinant means it's flipped.

**Cramer's Rule:**
Cramer's rule is a method for solving systems of linear equations using determinants. For a system $Ax=b$ where $A$ is invertible:
$x_i = \frac{\det(A_i)}{\det(A)}$, where $A_i$ is the matrix obtained by replacing the $i$-th column of $A$ with the vector $b$.

**Example:**
For $A = \begin{bmatrix} 2 & 3 \\ 1 & -1 \end{bmatrix}$ and $b = \begin{bmatrix} 7 \\ 1 \end{bmatrix}$:
$\det(A) = (2)(-1) - (3)(1) = -2 - 3 = -5$.

To find $x_1$: Replace the first column of $A$ with $b$ to get $A_1 = \begin{bmatrix} 7 & 3 \\ 1 & -1 \end{bmatrix}$.
$\det(A_1) = (7)(-1) - (3)(1) = -7 - 3 = -10$.
$x_1 = \frac{\det(A_1)}{\det(A)} = \frac{-10}{-5} = 2$.

To find $x_2$: Replace the second column of $A$ with $b$ to get $A_2 = \begin{bmatrix} 2 & 7 \\ 1 & 1 \end{bmatrix}$.
$\det(A_2) = (2)(1) - (7)(1) = 2 - 7 = -5$.
$x_2 = \frac{\det(A_2)}{\det(A)} = \frac{-5}{-5} = 1$.

Solution: $x_1=2, x_2=1$.

**Important Note:** Cramer's rule is generally inefficient for computational purposes, especially for systems larger than $3 \times 3$. Gaussian elimination is far more practical.

**Relevance to Machine Learning (CO1: K3):** Determinants are fundamental for understanding matrix invertibility, rank, and the geometric interpretation of linear transformations, which are all vital in advanced ML concepts.

**Reference:**
*   **Strang:** Chapter 5 covers determinants in detail, including their properties and Cramer's Rule.

---

### 4. Rank of a Matrix

The rank of a matrix is a fundamental concept that tells us about the "dimensionality" of the vector space spanned by its rows or columns.

**Definition:** The rank of a matrix $A$, denoted by $rank(A)$, is the maximum number of linearly independent columns (or rows) of $A$.

**Key Properties of Rank:**
*   $rank(A) \le \min(m, n)$, where $A$ is an $m \times n$ matrix.
*   The rank is equal to the number of non-zero rows in its row echelon form.
*   The rank is equal to the number of pivots in its row echelon form.
*   For an $n \times n$ square matrix $A$:
    *   $rank(A) = n$ if and only if $A$ is invertible.
    *   $rank(A) < n$ if and only if $A$ is singular (non-invertible).
*   $rank(AB) \le \min(rank(A), rank(B))$
*   $rank(A+B) \le rank(A) + rank(B)$

**Relevance to Machine Learning (CO1: K3):**
*   **Dimensionality Reduction:** In techniques like Principal Component Analysis (PCA), the rank of the covariance matrix informs us about the intrinsic dimensionality of the data.
*   **Linear Independence:** Understanding linear independence helps in selecting relevant features and avoiding redundancy in datasets.
*   **Solving Systems:** The rank of the coefficient matrix and the augmented matrix determines whether a system of linear equations has a unique solution, no solution, or infinite solutions. Specifically, for $Ax=b$:
    *   Unique solution if $rank(A) = rank([A|b]) = n$ (number of variables).
    *   No solution if $rank(A) < rank([A|b])$.
    *   Infinitely many solutions if $rank(A) = rank([A|b]) < n$.

**Reference:**
*   **Strang:** Chapter 3 explores rank and its connection to linear independence and solving systems.

---

### 5. Vector Spaces (Introduction)

While a full treatment of vector spaces is for later modules, it's useful to have a foundational understanding here. Matrices and systems of equations operate within the framework of vector spaces.

**Definition:** A vector space is a set of vectors that is closed under vector addition and scalar multiplication.

**Key Concepts:**
*   **Vector:** An element of a vector space. In this context, often represented as a column matrix.
*   **Linear Combination:** A sum of vectors multiplied by scalars: $c_1v_1 + c_2v_2 + \ldots + c_kv_k$.
*   **Span:** The set of all possible linear combinations of a set of vectors.
*   **Linear Independence:** A set of vectors is linearly independent if the only way to form the zero vector is by setting all scalar coefficients to zero.
*   **Basis:** A set of linearly independent vectors that span the entire vector space. The number of vectors in a basis is the dimension of the vector space.

**Relevance to Machine Learning (CO1: K3):**
*   **Data Representation:** Datasets are often represented as vectors or matrices, which exist within vector spaces.
*   **Feature Spaces:** Machine learning models operate on data represented in feature spaces, which are vector spaces.
*   **Algorithm Design:** Concepts like linear independence and basis are critical for understanding algorithms like PCA, Singular Value Decomposition (SVD), and techniques for feature selection.

**Reference:**
*   **Strang:** Chapter 4 provides a comprehensive introduction to vector spaces, subspaces, linear independence, and bases.
*   **Axler:** "Linear Algebra Done Right" focuses on vector spaces and linear transformations as its primary objects of study.

---

### Important Points to Remember

*   Matrices provide a compact way to represent systems of linear equations ($Ax = b$).
*   Gaussian elimination (row reduction) is the primary algorithmic tool for solving systems of linear equations by transforming the augmented matrix to REF or RREF.
*   The form of the RREF determines the nature of the solution: unique, no solution, or infinitely many solutions.
*   For square systems ($n \times n$), a unique solution exists if the coefficient matrix $A$ is invertible.
*   A matrix is invertible if and only if its determinant is non-zero, or if it has full rank ($n$).
*   The rank of a matrix is crucial for determining the number of solutions and understanding the dimensionality of the problem.
*   Linear algebra concepts provide the mathematical backbone for many machine learning algorithms, enabling efficient data manipulation and problem-solving.

---

### Practice Questions

**Question 1:**
Write the following system of linear equations in matrix form $Ax = b$:
$3x_1 - x_2 + 2x_3 = 5$
$x_1 + 4x_2 - x_3 = 1$
$2x_1 + x_2 + 3x_3 = 2$

**Question 2:**
Given the augmented matrix $\begin{bmatrix} 1 & 2 & 3 & | & 4 \\ 0 & 1 & 1 & | & 2 \\ 0 & 0 & 0 & | & 0 \end{bmatrix}$, what can you say about the number of solutions to the corresponding system of linear equations? Explain your reasoning.

**Question 3:**
Solve the following system using Gaussian elimination:
$x + y = 5$
$2x - y = 1$

**Question 4:**
For the matrix $A = \begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix}$, find its inverse $A^{-1}$.
Then, use $A^{-1}$ to solve the system:
$4x_1 + 7x_2 = 10$
$2x_1 + 6x_2 = 8$

**Question 5:**
Calculate the determinant of the matrix $B = \begin{bmatrix} 1 & 0 & 2 \\ 3 & 1 & 4 \\ 0 & 5 & 1 \end{bmatrix}$.

**Question 6:**
What is the rank of the matrix $C = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{bmatrix}$? Justify your answer.

---

### Answers to Practice Questions

**Answer 1:**
The matrix form is:
$A = \begin{bmatrix} 3 & -1 & 2 \\ 1 & 4 & -1 \\ 2 & 1 & 3 \end{bmatrix}$, $x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}$, $b = \begin{bmatrix} 5 \\ 1 \\ 2 \end{bmatrix}$
So, $Ax = b$ is $\begin{bmatrix} 3 & -1 & 2 \\ 1 & 4 & -1 \\ 2 & 1 & 3 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 5 \\ 1 \\ 2 \end{bmatrix}$.

**Answer 2:**
The augmented matrix is already in a form that is close to row echelon form. The last row is $[0 \ 0 \ 0 \ | \ 0]$, which corresponds to the equation $0x_1 + 0x_2 + 0x_3 = 0$. This equation is always true and does not impose any restrictions.
The leading entries are in the first two columns for the first two rows. Since there are no contradictory rows (like $[0 \ 0 \ 0 \ | \ c]$ with $c \neq 0$), and there are fewer leading entries (2) than variables (3), the system has **infinitely many solutions**. The variable corresponding to the column without a leading entry ($x_3$) is a free variable.

**Answer 3:**
Augmented matrix: $\begin{bmatrix} 1 & 1 & | & 5 \\ 2 & -1 & | & 1 \end{bmatrix}$
$R_2 \leftarrow R_2 - 2R_1$: $\begin{bmatrix} 1 & 1 & | & 5 \\ 0 & -3 & | & -9 \end{bmatrix}$
$R_2 \leftarrow -\frac{1}{3}R_2$: $\begin{bmatrix} 1 & 1 & | & 5 \\ 0 & 1 & | & 3 \end{bmatrix}$
$R_1 \leftarrow R_1 - R_2$: $\begin{bmatrix} 1 & 0 & | & 2 \\ 0 & 1 & | & 3 \end{bmatrix}$
Solution: $x=2, y=3$.

**Answer 4:**
To find $A^{-1}$:
Augmented matrix: $\begin{bmatrix} 4 & 7 & | & 1 & 0 \\ 2 & 6 & | & 0 & 1 \end{bmatrix}$
$R_2 \leftarrow R_2 - \frac{1}{2}R_1$: $\begin{bmatrix} 4 & 7 & | & 1 & 0 \\ 0 & 2.5 & | & -0.5 & 1 \end{bmatrix}$
$R_2 \leftarrow \frac{1}{2.5}R_2 = \frac{2}{5}R_2$: $\begin{bmatrix} 4 & 7 & | & 1 & 0 \\ 0 & 1 & | & -0.2 & 0.4 \end{bmatrix}$
$R_1 \leftarrow R_1 - 7R_2$: $\begin{bmatrix} 4 & 0 & | & 1 - 7(-0.2) & 0 - 7(0.4) \\ 0 & 1 & | & -0.2 & 0.4 \end{bmatrix} = \begin{bmatrix} 4 & 0 & | & 2.4 & -2.8 \\ 0 & 1 & | & -0.2 & 0.4 \end{bmatrix}$
$R_1 \leftarrow \frac{1}{4}R_1$: $\begin{bmatrix} 1 & 0 & | & 0.6 & -0.7 \\ 0 & 1 & | & -0.2 & 0.4 \end{bmatrix}$
$A^{-1} = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix} = \begin{bmatrix} 3/5 & -7/10 \\ -1/5 & 2/5 \end{bmatrix}$.

Now solve $Ax=b$ where $b = \begin{bmatrix} 10 \\ 8 \end{bmatrix}$:
$x = A^{-1}b = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix} \begin{bmatrix} 10 \\ 8 \end{bmatrix} = \begin{bmatrix} 0.6(10) - 0.7(8) \\ -0.2(10) + 0.4(8) \end{bmatrix} = \begin{bmatrix} 6 - 5.6 \\ -2 + 3.2 \end{bmatrix} = \begin{bmatrix} 0.4 \\ 1.2 \end{bmatrix}$.
Solution: $x_1=0.4, x_2=1.2$.

**Answer 5:**
Using cofactor expansion along the first row:
$\det(B) = 1 \cdot \det \begin{bmatrix} 1 & 4 \\ 5 & 1 \end{bmatrix} - 0 \cdot \det \begin{bmatrix} 3 & 4 \\ 0 & 1 \end{bmatrix} + 2 \cdot \det \begin{bmatrix} 3 & 1 \\ 0 & 5 \end{bmatrix}$
$\det(B) = 1 \cdot (1 \cdot 1 - 4 \cdot 5) - 0 + 2 \cdot (3 \cdot 5 - 1 \cdot 0)$
$\det(B) = 1 \cdot (1 - 20) + 2 \cdot (15)$
$\det(B) = -19 + 30 = 11$.

**Answer 6:**
The matrix $C = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{bmatrix}$.
Observe that the second row is $2 \times$ the first row, and the third row is $3 \times$ the first row. This means the rows are linearly dependent.
We can perform row operations to find the row echelon form:
$R_2 \leftarrow R_2 - 2R_1$: $\begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 3 & 6 & 9 \end{bmatrix}$
$R_3 \leftarrow R_3 - 3R_1$: $\begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$
The row echelon form has only one non-zero row. Therefore, the rank of matrix $C$ is **1**.
