---
title: "Gauss - Jordan Method"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 4: Newton"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81093d"
status: "completed"
scrapedAt: "2026-05-20T18:46:13.371Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4: Module 4: Newton

## Topic: Gauss-Jordan Method

---

### Learning Outcomes

This module aims to equip students with the ability to:

*   **Understand the purpose and application of the Gauss-Jordan elimination method.**
*   **Perform Gauss-Jordan elimination on augmented matrices to solve systems of linear equations.**
*   **Interpret the results of Gauss-Jordan elimination, including cases with unique solutions, no solutions, and infinite solutions.**
*   **Apply the Gauss-Jordan method to find the inverse of a square matrix.**

---

### 1. Introduction to Systems of Linear Equations

A **system of linear equations** is a collection of two or more linear equations involving the same set of variables. For example:

$$
\begin{align*} 2x + 3y &= 7 \\ x - y &= 1 \end{align*}
$$

These systems are fundamental in many areas of physical science for modeling relationships between physical quantities.

---

### 2. Representing Systems of Linear Equations as Matrices

Systems of linear equations can be efficiently represented using matrices. An **augmented matrix** is a convenient way to store the coefficients of the variables and the constant terms of a system of linear equations.

For a system of $n$ linear equations in $n$ variables:

$$
\begin{align*} a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= b_1 \\ a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &= b_2 \\ &\vdots \\ a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nn}x_n &= b_n \end{align*}
$$

The augmented matrix is written as:

$$
[A | B] = \begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1n} & | & b_1 \\
a_{21} & a_{22} & \dots & a_{2n} & | & b_2 \\
\vdots & \vdots & \ddots & \vdots & | & \vdots \\
a_{n1} & a_{n2} & \dots & a_{nn} & | & b_n
\end{pmatrix}
$$

Where $A$ is the coefficient matrix and $B$ is the column vector of constant terms.

**Example:**

Consider the system:

$$
\begin{align*} x + 2y - z &= 3 \\ 3x - y + 2z &= 1 \\ 2x + y + z &= 2 \end{align*}
$$

The augmented matrix is:

$$
\begin{pmatrix}
1 & 2 & -1 & | & 3 \\
3 & -1 & 2 & | & 1 \\
2 & 1 & 1 & | & 2
\end{pmatrix}
$$

---

### 3. The Gauss-Jordan Elimination Method

The Gauss-Jordan elimination method is an algorithm used to solve systems of linear equations by transforming the augmented matrix into **reduced row echelon form (RREF)** using a series of elementary row operations.

#### 3.1 Elementary Row Operations

There are three elementary row operations:

1.  **Swapping two rows:** $R_i \leftrightarrow R_j$ (Interchange row $i$ and row $j$).
2.  **Multiplying a row by a non-zero scalar:** $k R_i \to R_i$ (Replace row $i$ with $k$ times row $i$, where $k \neq 0$).
3.  **Adding a multiple of one row to another row:** $R_i + k R_j \to R_i$ (Replace row $i$ with the sum of row $i$ and $k$ times row $j$).

#### 3.2 Reduced Row Echelon Form (RREF)

A matrix is in reduced row echelon form if it satisfies the following conditions:

1.  All zero rows (rows consisting entirely of zeros) are at the bottom of the matrix.
2.  The first non-zero entry (called the **leading entry** or **pivot**) in each non-zero row is 1.
3.  Each leading entry is in a column to the right of the leading entry of the row above it.
4.  Every column that contains a leading entry has zeros everywhere else.

**Example of RREF:**

$$
\begin{pmatrix}
1 & 0 & 0 & | & a \\
0 & 1 & 0 & | & b \\
0 & 0 & 1 & | & c
\end{pmatrix}
$$

#### 3.3 Steps for Gauss-Jordan Elimination

The general strategy is to use row operations to:

*   Get a '1' in the top-left position (pivot).
*   Use this '1' to create zeros below it in the first column.
*   Move to the next row and get a '1' in the next pivot position.
*   Use this '1' to create zeros above and below it in its column.
*   Continue this process until the matrix is in RREF.

**Example: Solving a System of Linear Equations**

Solve the following system using Gauss-Jordan elimination:

$$
\begin{align*} x + 2y - z &= 3 \\ 3x - y + 2z &= 1 \\ 2x + y + z &= 2 \end{align*}
$$

**Augmented Matrix:**
$$
\begin{pmatrix}
1 & 2 & -1 & | & 3 \\
3 & -1 & 2 & | & 1 \\
2 & 1 & 1 & | & 2
\end{pmatrix}
$$

**Step 1: Get a '1' in the (1,1) position.**
It's already a '1'.

**Step 2: Create zeros below the pivot in the first column.**
*   $R_2 - 3R_1 \to R_2$:
    $$
    \begin{pmatrix}
    1 & 2 & -1 & | & 3 \\
    3-3(1) & -1-3(2) & 2-3(-1) & | & 1-3(3) \\
    2 & 1 & 1 & | & 2
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 2 & -1 & | & 3 \\
    0 & -7 & 5 & | & -8 \\
    2 & 1 & 1 & | & 2
    \end{pmatrix}
    $$
*   $R_3 - 2R_1 \to R_3$:
    $$
    \begin{pmatrix}
    1 & 2 & -1 & | & 3 \\
    0 & -7 & 5 & | & -8 \\
    2-2(1) & 1-2(2) & 1-2(-1) & | & 2-2(3)
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 2 & -1 & | & 3 \\
    0 & -7 & 5 & | & -8 \\
    0 & -3 & 3 & | & -4
    \end{pmatrix}
    $$

**Step 3: Get a '1' in the (2,2) position.**
*   $R_2 / (-7) \to R_2$:
    $$
    \begin{pmatrix}
    1 & 2 & -1 & | & 3 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & -3 & 3 & | & -4
    \end{pmatrix}
    $$

**Step 4: Create zeros above and below the pivot in the second column.**
*   $R_1 - 2R_2 \to R_1$:
    $$
    \begin{pmatrix}
    1-2(0) & 2-2(1) & -1-2(-5/7) & | & 3-2(8/7) \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & -3 & 3 & | & -4
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & -1 + 10/7 & | & 3 - 16/7 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & -3 & 3 & | & -4
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 3/7 & | & 5/7 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & -3 & 3 & | & -4
    \end{pmatrix}
    $$
*   $R_3 + 3R_2 \to R_3$:
    $$
    \begin{pmatrix}
    1 & 0 & 3/7 & | & 5/7 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0+3(0) & -3+3(1) & 3+3(-5/7) & | & -4+3(8/7)
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 3/7 & | & 5/7 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & 0 & 3 - 15/7 & | & -4 + 24/7
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 3/7 & | & 5/7 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & 0 & 6/7 & | & -4/7
    \end{pmatrix}
    $$

**Step 5: Get a '1' in the (3,3) position.**
*   $R_3 / (6/7) \to R_3$ (or $R_3 \times (7/6) \to R_3$):
    $$
    \begin{pmatrix}
    1 & 0 & 3/7 & | & 5/7 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & 0 & 1 & | & (-4/7) \times (7/6)
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 3/7 & | & 5/7 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & 0 & 1 & | & -2/3
    \end{pmatrix}
    $$

**Step 6: Create zeros above the pivot in the third column.**
*   $R_1 - (3/7)R_3 \to R_1$:
    $$
    \begin{pmatrix}
    1- (3/7)(0) & 0 - (3/7)(0) & 3/7 - (3/7)(1) & | & 5/7 - (3/7)(-2/3) \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & 0 & 1 & | & -2/3
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 0 & | & 5/7 + 6/21 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & 0 & 1 & | & -2/3
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 0 & | & 15/21 + 6/21 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & 0 & 1 & | & -2/3
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 0 & | & 21/21 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & 0 & 1 & | & -2/3
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 0 & | & 1 \\
    0 & 1 & -5/7 & | & 8/7 \\
    0 & 0 & 1 & | & -2/3
    \end{pmatrix}
    $$
*   $R_2 + (5/7)R_3 \to R_2$:
    $$
    \begin{pmatrix}
    1 & 0 & 0 & | & 1 \\
    0 + (5/7)(0) & 1 + (5/7)(0) & -5/7 + (5/7)(1) & | & 8/7 + (5/7)(-2/3) \\
    0 & 0 & 1 & | & -2/3
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 0 & | & 1 \\
    0 & 1 & 0 & | & 8/7 - 10/21 \\
    0 & 0 & 1 & | & -2/3
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 0 & | & 1 \\
    0 & 1 & 0 & | & 24/21 - 10/21 \\
    0 & 0 & 1 & | & -2/3
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 0 & | & 1 \\
    0 & 1 & 0 & | & 14/21 \\
    0 & 0 & 1 & | & -2/3
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 0 & | & 1 \\
    0 & 1 & 0 & | & 2/3 \\
    0 & 0 & 1 & | & -2/3
    \end{pmatrix}
    $$

The matrix is now in RREF. The solution is $x=1$, $y=2/3$, $z=-2/3$.

---

### 4. Interpreting Results

The final form of the augmented matrix after Gauss-Jordan elimination provides information about the solution set of the system:

*   **Unique Solution:** If the coefficient matrix part is transformed into an identity matrix (like in the example above), the system has a unique solution. The last column will contain the values of the variables.
    $$
    [I | X] \implies x_1 = b_1, x_2 = b_2, \dots, x_n = b_n
    $$

*   **No Solution (Inconsistent System):** If, at any point, a row is obtained that has zeros in all coefficient positions but a non-zero value in the constant term position (e.g., $[0 \ 0 \ \dots \ 0 \ | \ k]$ where $k \neq 0$), then the system has no solution. This represents a contradiction like $0 = k$.

    **Example:**
    Consider the system that leads to the augmented matrix:
    $$
    \begin{pmatrix}
    1 & 2 & | & 5 \\
    0 & 0 & | & 3
    \end{pmatrix}
    $$
    The second row represents $0x + 0y = 3$, which is $0=3$, a contradiction.

*   **Infinite Solutions (Dependent System):** If the system has fewer non-zero rows in RREF than variables, and no contradictions are found, then the system has infinitely many solutions. The variables corresponding to columns without leading ones are called **free variables**, and they can take any value. The other variables (pivot variables) will be expressed in terms of these free variables.

    **Example:**
    Consider the system that leads to the augmented matrix:
    $$
    \begin{pmatrix}
    1 & 2 & 0 & | & 5 \\
    0 & 0 & 1 & | & 3
    \end{pmatrix}
    $$
    This translates to:
    $$
    \begin{align*} x + 2y &= 5 \\ z &= 3 \end{align*}
    $$
    Here, $y$ is a free variable. We can express $x$ in terms of $y$: $x = 5 - 2y$.
    The solutions are of the form $(5-2t, t, 3)$, where $t$ can be any real number.

---

### 5. Applying Gauss-Jordan to Find Matrix Inverses

The Gauss-Jordan method can also be used to find the inverse of a square matrix $A$. If $A$ is an $n \times n$ matrix, we form an augmented matrix by placing the identity matrix $I_n$ to the right of $A$: $[A | I_n]$.

We then apply elementary row operations to transform the left side ($A$) into the identity matrix $I_n$. If this is possible, the right side will be transformed into the inverse matrix $A^{-1}$.

$$
[A | I_n] \xrightarrow{\text{Row Operations}} [I_n | A^{-1}]
$$

If the left side cannot be transformed into the identity matrix (e.g., a row of zeros appears in the left side), then the matrix $A$ is singular and does not have an inverse.

**Example: Finding the Inverse of a Matrix**

Find the inverse of the matrix:
$$
A = \begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

**Augmented Matrix:**
$$
[A | I_2] = \begin{pmatrix}
1 & 2 & | & 1 & 0 \\
3 & 4 & | & 0 & 1
\end{pmatrix}
$$

**Step 1: Get a '1' in the (1,1) position.**
It's already a '1'.

**Step 2: Create a zero below the pivot in the first column.**
*   $R_2 - 3R_1 \to R_2$:
    $$
    \begin{pmatrix}
    1 & 2 & | & 1 & 0 \\
    3-3(1) & 4-3(2) & | & 0-3(1) & 1-3(0)
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 2 & | & 1 & 0 \\
    0 & -2 & | & -3 & 1
    \end{pmatrix}
    $$

**Step 3: Get a '1' in the (2,2) position.**
*   $R_2 / (-2) \to R_2$:
    $$
    \begin{pmatrix}
    1 & 2 & | & 1 & 0 \\
    0 & 1 & | & 3/2 & -1/2
    \end{pmatrix}
    $$

**Step 4: Create a zero above the pivot in the second column.**
*   $R_1 - 2R_2 \to R_1$:
    $$
    \begin{pmatrix}
    1-2(0) & 2-2(1) & | & 1-2(3/2) & 0-2(-1/2) \\
    0 & 1 & | & 3/2 & -1/2
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & | & 1-3 & 0+1 \\
    0 & 1 & | & 3/2 & -1/2
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & | & -2 & 1 \\
    0 & 1 & | & 3/2 & -1/2
    \end{pmatrix}
    $$

The left side is now the identity matrix. Therefore, the inverse of $A$ is:
$$
A^{-1} = \begin{pmatrix}
-2 & 1 \\
3/2 & -1/2
\end{pmatrix}
$$

**Verification:**
$A A^{-1} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix} = \begin{pmatrix} 1(-2)+2(3/2) & 1(1)+2(-1/2) \\ 3(-2)+4(3/2) & 3(1)+4(-1/2) \end{pmatrix} = \begin{pmatrix} -2+3 & 1-1 \\ -6+6 & 3-2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2$.

---

### 6. Important Points to Remember

*   **Consistency is Key:** Each step in the Gauss-Jordan elimination process must be performed accurately. Even a small arithmetic error can lead to an incorrect solution.
*   **Target RREF:** The goal is always to reach reduced row echelon form. This means leading entries must be 1, and all other entries in a pivot column must be 0.
*   **Row Operations:** Remember the three allowed elementary row operations and apply them correctly.
*   **Interpreting Results:** Carefully analyze the final matrix to determine if there's a unique solution, no solution, or infinite solutions.
*   **Matrix Inverse:** The Gauss-Jordan method for finding inverses is only applicable to square matrices and only works if the matrix is invertible (non-singular).

---

### Practice Questions

**Question 1: Solving a System of Equations**
Use the Gauss-Jordan method to solve the following system of linear equations:
$$
\begin{align*} 2x + y - z &= 8 \\ -3x - y + 2z &= -11 \\ -2x + y + 2z &= -3 \end{align*}
$$

**Question 2: Identifying Solution Type**
Determine whether the following system has a unique solution, no solution, or infinite solutions using Gauss-Jordan elimination. If it has a unique solution, find it.
$$
\begin{align*} x + 2y + 3z &= 6 \\ 2x + 4y + 6z &= 12 \\ 3x + 6y + 9z &= 18 \end{align*}
$$

**Question 3: Finding the Matrix Inverse**
Find the inverse of the matrix $A$ using the Gauss-Jordan method:
$$
A = \begin{pmatrix}
1 & 1 & 1 \\
2 & 3 & 4 \\
4 & 6 & 8
\end{pmatrix}
$$
If the inverse does not exist, explain why.

**Question 4: System with No Solution**
Use the Gauss-Jordan method to show that the following system has no solution:
$$
\begin{align*} x + y &= 3 \\ 2x + 2y &= 5 \end{align*}
$$

---

### Answers to Practice Questions

**Answer 1:**
Augmented matrix:
$$
\begin{pmatrix}
2 & 1 & -1 & | & 8 \\
-3 & -1 & 2 & | & -11 \\
-2 & 1 & 2 & | & -3
\end{pmatrix}
$$
After applying Gauss-Jordan elimination, the RREF is:
$$
\begin{pmatrix}
1 & 0 & 0 & | & 2 \\
0 & 1 & 0 & | & 3 \\
0 & 0 & 1 & | & -1
\end{pmatrix}
$$
Therefore, the solution is $x=2$, $y=3$, $z=-1$.

**Answer 2:**
Augmented matrix:
$$
\begin{pmatrix}
1 & 2 & 3 & | & 6 \\
2 & 4 & 6 & | & 12 \\
3 & 6 & 9 & | & 18
\end{pmatrix}
$$
After applying Gauss-Jordan elimination, we might get:
$$
\begin{pmatrix}
1 & 2 & 3 & | & 6 \\
0 & 0 & 0 & | & 0 \\
0 & 0 & 0 & | & 0
\end{pmatrix}
$$
This indicates infinite solutions. The system reduces to a single equation $x + 2y + 3z = 6$. $y$ and $z$ are free variables.
Let $y = s$ and $z = t$. Then $x = 6 - 2s - 3t$.
The solutions are of the form $(6-2s-3t, s, t)$ for any real numbers $s$ and $t$.

**Answer 3:**
Augmented matrix:
$$
\begin{pmatrix}
1 & 1 & 1 & | & 1 & 0 & 0 \\
2 & 3 & 4 & | & 0 & 1 & 0 \\
4 & 6 & 8 & | & 0 & 0 & 1
\end{pmatrix}
$$
After applying Gauss-Jordan elimination, we will find that row 3 becomes a row of zeros on the left side while the right side changes. Specifically, after some operations, you might reach a form like:
$$
\begin{pmatrix}
1 & 0 & -1 & | & 3 & -2 & 0 \\
0 & 1 & 2 & | & -2 & 1 & 0 \\
0 & 0 & 0 & | & 0 & -2 & 1
\end{pmatrix}
$$
The row $[0 \ 0 \ 0 \ | \ 0 \ -2 \ 1]$ shows that the coefficient matrix cannot be transformed into the identity matrix. Therefore, the matrix $A$ is singular, and its inverse does not exist. This is because row 3 is a linear combination of the first two rows ($R_3 = 2R_2 - 2R_1$ on the coefficient part).

**Answer 4:**
Augmented matrix:
$$
\begin{pmatrix}
1 & 1 & | & 3 \\
2 & 2 & | & 5
\end{pmatrix}
$$
Apply $R_2 - 2R_1 \to R_2$:
$$
\begin{pmatrix}
1 & 1 & | & 3 \\
2-2(1) & 2-2(1) & | & 5-2(3)
\end{pmatrix}
=
\begin{pmatrix}
1 & 1 & | & 3 \\
0 & 0 & | & -1
\end{pmatrix}
$$
The second row represents the equation $0x + 0y = -1$, which is $0 = -1$. This is a contradiction, so the system has no solution.

---
