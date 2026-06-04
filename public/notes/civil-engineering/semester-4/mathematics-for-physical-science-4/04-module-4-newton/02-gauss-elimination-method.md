---
title: "Gauss Elimination Method"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 4: Newton"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81093c"
status: "completed"
scrapedAt: "2026-05-20T18:46:12.676Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 4: Newton

### Topic: Gauss Elimination Method

---

### 1. Introduction to Systems of Linear Equations

**Key Concept:** A system of linear equations is a set of two or more linear equations containing the same variables. In physical sciences, these systems often arise when modeling physical phenomena like circuits, mechanics, and heat transfer.

**Representation:** A system of $m$ linear equations in $n$ variables can be written as:

$a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2$
$\vdots$
$a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m$

Where:
*   $x_1, x_2, \dots, x_n$ are the variables.
*   $a_{ij}$ are the coefficients of the variables.
*   $b_i$ are the constants on the right-hand side of the equations.

**Matrix Form:** A system of linear equations can be represented in matrix form as $AX = B$, where:

*   $A$ is the coefficient matrix:
    $$
    A = \begin{pmatrix}
    a_{11} & a_{12} & \dots & a_{1n} \\
    a_{21} & a_{22} & \dots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{m1} & a_{m2} & \dots & a_{mn}
    \end{pmatrix}
    $$
*   $X$ is the column vector of variables:
    $$
    X = \begin{pmatrix}
    x_1 \\
    x_2 \\
    \vdots \\
    x_n
    \end{pmatrix}
    $$
*   $B$ is the column vector of constants:
    $$
    B = \begin{pmatrix}
    b_1 \\
    b_2 \\
    \vdots \\
    b_m
    \end{pmatrix}
    $$

**Augmented Matrix:** The augmented matrix is a convenient way to represent the system of linear equations by combining the coefficient matrix $A$ and the constant vector $B$:

$$
[A | B] = \begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1n} & | & b_1 \\
a_{21} & a_{22} & \dots & a_{2n} & | & b_2 \\
\vdots & \vdots & \ddots & \vdots & | & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} & | & b_m
\end{pmatrix}
$$

---

### 2. The Goal of Gauss Elimination

**Key Concept:** Gauss elimination (also known as row reduction) is a systematic algorithm for solving systems of linear equations. The primary goal is to transform the augmented matrix of the system into an **echelon form** or **reduced row echelon form** using a series of **elementary row operations**.

**Echelon Form:** A matrix is in echelon form if:
1.  All rows consisting entirely of zeros are at the bottom of the matrix.
2.  The first non-zero element (leading entry or pivot) in each non-zero row is 1.
3.  The leading entry of each row is in a column to the right of the leading entry of the row above it.

**Reduced Row Echelon Form (RREF):** A matrix is in reduced row echelon form if it is in echelon form and additionally:
1.  Each column containing a leading entry has zeros everywhere else.

**Why is RREF useful?** Once a matrix is in RREF, the solution to the system of linear equations can be read directly from the augmented matrix.

---

### 3. Elementary Row Operations

These are the fundamental operations that can be applied to the rows of an augmented matrix without changing the solution set of the corresponding system of linear equations.

1.  **Swap:** Interchange two rows ($R_i \leftrightarrow R_j$).
2.  **Scale:** Multiply a row by a non-zero scalar ($kR_i \rightarrow R_i$, where $k \neq 0$).
3.  **Add:** Add a multiple of one row to another row ($R_i + kR_j \rightarrow R_i$).

---

### 4. The Gauss Elimination Procedure (Forward Elimination)

The first phase of Gauss elimination is to transform the augmented matrix into **row echelon form**. This is achieved by systematically creating zeros below the main diagonal elements (pivots).

**Steps:**

1.  **Start with the first column.** Identify the element in the top-left corner (the first pivot position).
2.  **Make the pivot 1 (Optional but often helpful):** If the pivot element is not 1, you can scale the first row to make it 1.
3.  **Create zeros below the pivot:** Use the row addition operation to make all elements below the pivot in the first column zero. This is done by subtracting appropriate multiples of the first row from the rows below it.
4.  **Move to the next column and the next row:** Consider the submatrix obtained by ignoring the first row and first column. Find the next pivot in the second row, first column of this submatrix.
5.  **Repeat:** Make the pivot 1 (optional) and create zeros below it using row operations involving the current pivot row.
6.  **Continue:** Repeat this process until the matrix is in row echelon form.

**Example 1:** Solve the following system using Gauss Elimination:

$x + 2y + z = 3$
$2x - y + z = 4$
$3x + y - z = 2$

**Augmented Matrix:**

$$
\begin{pmatrix}
1 & 2 & 1 & | & 3 \\
2 & -1 & 1 & | & 4 \\
3 & 1 & -1 & | & 2
\end{pmatrix}
$$

**Forward Elimination:**

*   **Step 1:** Make zeros below the pivot in the first column (the '1' in the top-left).
    *   $R_2 \leftarrow R_2 - 2R_1$:
        $$
        \begin{pmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & -5 & -1 & | & -2 \\
        3 & 1 & -1 & | & 2
        \end{pmatrix}
        $$
    *   $R_3 \leftarrow R_3 - 3R_1$:
        $$
        \begin{pmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & -5 & -1 & | & -2 \\
        0 & -5 & -4 & | & -7
        \end{pmatrix}
        $$

*   **Step 2:** Move to the next pivot position (the '-5' in the second row, second column). Make zeros below it.
    *   $R_3 \leftarrow R_3 - R_2$:
        $$
        \begin{pmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & -5 & -1 & | & -2 \\
        0 & 0 & -3 & | & -5
        \end{pmatrix}
        $$

The matrix is now in row echelon form.

---

### 5. Back Substitution

Once the augmented matrix is in row echelon form, we can use back substitution to find the values of the variables.

**Steps:**

1.  **Convert the augmented matrix back to a system of linear equations.**
2.  **Start with the last non-zero row.** This equation will contain only one variable. Solve for it.
3.  **Substitute the known value(s) into the equation from the row above.** Solve for the next variable.
4.  **Continue this process upwards** until all variables have been solved.

**Continuing Example 1:**

The row echelon form is:
$$
\begin{pmatrix}
1 & 2 & 1 & | & 3 \\
0 & -5 & -1 & | & -2 \\
0 & 0 & -3 & | & -5
\end{pmatrix}
$$

The corresponding system of equations is:
$x + 2y + z = 3$  (1)
$-5y - z = -2$   (2)
$-3z = -5$       (3)

*   **From (3):**
    $z = \frac{-5}{-3} = \frac{5}{3}$

*   **Substitute z into (2):**
    $-5y - \frac{5}{3} = -2$
    $-5y = -2 + \frac{5}{3}$
    $-5y = -\frac{6}{3} + \frac{5}{3}$
    $-5y = -\frac{1}{3}$
    $y = \frac{-1/3}{-5} = \frac{1}{15}$

*   **Substitute y and z into (1):**
    $x + 2(\frac{1}{15}) + \frac{5}{3} = 3$
    $x + \frac{2}{15} + \frac{25}{15} = 3$
    $x + \frac{27}{15} = 3$
    $x + \frac{9}{5} = 3$
    $x = 3 - \frac{9}{5}$
    $x = \frac{15}{5} - \frac{9}{5}$
    $x = \frac{6}{5}$

**Solution:** $x = \frac{6}{5}, y = \frac{1}{15}, z = \frac{5}{3}$

---

### 6. Gauss-Jordan Elimination (Reduced Row Echelon Form)

Gauss-Jordan elimination is an extension of Gauss elimination that continues the process until the augmented matrix is in **reduced row echelon form (RREF)**. This eliminates the need for back substitution.

**Additional Steps (from Row Echelon Form to RREF):**

1.  **Make leading entries 1:** Ensure all pivot elements are 1 (if not already done during forward elimination).
2.  **Create zeros above pivots:** For each pivot, use row operations to make all other elements in that pivot's column zero (both above and below).

**Steps for Gauss-Jordan:**

1.  **Form the augmented matrix.**
2.  **Perform forward elimination** to get to row echelon form.
3.  **Normalize pivots:** Make all pivot elements equal to 1 by scaling rows.
4.  **Create zeros above pivots:** Starting from the rightmost pivot and moving left, use row operations to eliminate entries above each pivot.

**Example 2:** Solve the same system as Example 1 using Gauss-Jordan Elimination.

Starting from the row echelon form:
$$
\begin{pmatrix}
1 & 2 & 1 & | & 3 \\
0 & -5 & -1 & | & -2 \\
0 & 0 & -3 & | & -5
\end{pmatrix}
$$

*   **Step 1: Normalize pivots to 1.**
    *   Scale $R_2$ by $-1/5$: $R_2 \leftarrow -\frac{1}{5}R_2$
        $$
        \begin{pmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & 1 & 1/5 & | & 2/5 \\
        0 & 0 & -3 & | & -5
        \end{pmatrix}
        $$
    *   Scale $R_3$ by $-1/3$: $R_3 \leftarrow -\frac{1}{3}R_3$
        $$
        \begin{pmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & 1 & 1/5 & | & 2/5 \\
        0 & 0 & 1 & | & 5/3
        \end{pmatrix}
        $$

*   **Step 2: Create zeros above the pivots.**

    *   **Focus on the last pivot (column 3):**
        *   Make the element in $R_2$, column 3 zero: $R_2 \leftarrow R_2 - \frac{1}{5}R_3$
            $$
            \begin{pmatrix}
            1 & 2 & 1 & | & 3 \\
            0 & 1 & 0 & | & 2/5 - \frac{1}{5}(\frac{5}{3}) \\
            0 & 0 & 1 & | & 5/3
            \end{pmatrix}
            $$
            $2/5 - 1/3 = 6/15 - 5/15 = 1/15$
            $$
            \begin{pmatrix}
            1 & 2 & 1 & | & 3 \\
            0 & 1 & 0 & | & 1/15 \\
            0 & 0 & 1 & | & 5/3
            \end{pmatrix}
            $$
        *   Make the element in $R_1$, column 3 zero: $R_1 \leftarrow R_1 - R_3$
            $$
            \begin{pmatrix}
            1 & 2 & 0 & | & 3 - 5/3 \\
            0 & 1 & 0 & | & 1/15 \\
            0 & 0 & 1 & | & 5/3
            \end{pmatrix}
            $$
            $3 - 5/3 = 9/3 - 5/3 = 4/3$
            $$
            \begin{pmatrix}
            1 & 2 & 0 & | & 4/3 \\
            0 & 1 & 0 & | & 1/15 \\
            0 & 0 & 1 & | & 5/3
            \end{pmatrix}
            $$

    *   **Focus on the second pivot (column 2):**
        *   Make the element in $R_1$, column 2 zero: $R_1 \leftarrow R_1 - 2R_2$
            $$
            \begin{pmatrix}
            1 & 0 & 0 & | & 4/3 - 2(1/15) \\
            0 & 1 & 0 & | & 1/15 \\
            0 & 0 & 1 & | & 5/3
            \end{pmatrix}
            $$
            $4/3 - 2/15 = 20/15 - 2/15 = 18/15 = 6/5$
            $$
            \begin{pmatrix}
            1 & 0 & 0 & | & 6/5 \\
            0 & 1 & 0 & | & 1/15 \\
            0 & 0 & 1 & | & 5/3
            \end{pmatrix}
            $$

The matrix is now in reduced row echelon form. The solution can be read directly:
$x = 6/5, y = 1/15, z = 5/3$.

---

### 7. Types of Solutions for Systems of Linear Equations

Gauss elimination can also reveal the nature of the solution set:

*   **Unique Solution:** When the RREF of the coefficient matrix is the identity matrix, and the right-hand side is a unique vector.
    *   Example RREF: $\begin{pmatrix} 1 & 0 & 0 & | & c_1 \\ 0 & 1 & 0 & | & c_2 \\ 0 & 0 & 1 & | & c_3 \end{pmatrix}$

*   **No Solution (Inconsistent System):** When a row of zeros in the coefficient matrix corresponds to a non-zero constant on the right-hand side. This indicates a contradiction (e.g., $0 = 5$).
    *   Example RREF: $\begin{pmatrix} 1 & * & * & | & c_1 \\ 0 & 1 & * & | & c_2 \\ 0 & 0 & 0 & | & k \end{pmatrix}$, where $k \neq 0$.

*   **Infinitely Many Solutions (Dependent System):** When the RREF has fewer non-zero rows than variables, and there are no contradictions. This means some variables can be expressed in terms of free variables.
    *   Example RREF: $\begin{pmatrix} 1 & * & 0 & | & c_1 \\ 0 & 1 & * & | & c_2 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$
        Here, if $x_3$ is a free variable, $x_1$ and $x_2$ can be expressed in terms of $x_3$.

**Example 3 (No Solution):**

$x + y = 2$
$2x + 2y = 5$

Augmented Matrix:
$$
\begin{pmatrix}
1 & 1 & | & 2 \\
2 & 2 & | & 5
\end{pmatrix}
$$
$R_2 \leftarrow R_2 - 2R_1$:
$$
\begin{pmatrix}
1 & 1 & | & 2 \\
0 & 0 & | & 1
\end{pmatrix}
$$
The second row represents $0x + 0y = 1$, which is $0 = 1$, a contradiction. The system has no solution.

**Example 4 (Infinitely Many Solutions):**

$x + y + z = 3$
$2x + 2y + 2z = 6$

Augmented Matrix:
$$
\begin{pmatrix}
1 & 1 & 1 & | & 3 \\
2 & 2 & 2 & | & 6
\end{pmatrix}
$$
$R_2 \leftarrow R_2 - 2R_1$:
$$
\begin{pmatrix}
1 & 1 & 1 & | & 3 \\
0 & 0 & 0 & | & 0
\end{pmatrix}
$$
The second row is $0=0$, which provides no new information. The system reduces to $x + y + z = 3$.
We can express $x$ in terms of $y$ and $z$ (free variables): $x = 3 - y - z$.
The solution set is $\{(3 - s - t, s, t) | s, t \in \mathbb{R}\}$.

---

### 8. Applications in Physical Science

Gauss elimination is a fundamental tool for:

*   **Solving circuit analysis problems:** Determining currents and voltages in complex electrical networks (Kirchhoff's laws).
*   **Structural analysis:** Calculating forces and stresses in bridges, buildings, and other structures.
*   **Fluid dynamics:** Modeling fluid flow and heat transfer.
*   **Quantum mechanics:** Solving for eigenvalues and eigenvectors of operators.
*   **Numerical methods:** As a subroutine in more complex algorithms for solving differential equations and optimization problems.

---

### 9. Important Points to Remember

*   **Augmented Matrix:** Always start by forming the augmented matrix.
*   **Elementary Row Operations:** Master these three operations and use them correctly.
*   **Systematic Approach:** Follow the steps systematically to avoid errors.
*   **Pivots:** Identify pivots correctly. If a pivot element is zero, swap rows to bring a non-zero element into the pivot position if possible.
*   **Row Echelon Form vs. RREF:** Understand the difference and when each is achieved. RREF directly gives the solution.
*   **Check Your Work:** Always substitute your solution back into the original equations to verify.
*   **Types of Solutions:** Be aware of how the row reduction process can indicate unique, no, or infinite solutions.

---

### 10. Practice Questions

**Question 1:** Solve the following system of linear equations using Gauss elimination and back substitution:

$x + y - z = 1$
$2x + 3y + z = 6$
$3x - y - 2z = 2$

**Question 2:** Solve the following system using Gauss-Jordan elimination:

$2x - y + 3z = 9$
$x + y - z = -1$
$x - 2y + 2z = 7$

**Question 3:** Determine if the following system has a unique solution, no solution, or infinitely many solutions. If it has a unique solution, find it.

$x - 2y + z = 0$
$2x + y - z = 3$
$4x + y + z = 7$

**Question 4:** A chemical reaction involves three reactants A, B, and C, producing products X and Y. The stoichiometry of the reaction can be represented by the equation:
$aA + bB \rightarrow cX + dY$
Suppose we have measurements that lead to the following system of equations for the stoichiometric coefficients ($a, b, c, d$):
$a + 2b - c = 0$
$-a + 3b - d = 0$
$2a - b = 5$
Use Gauss elimination to find the values of $a, b, c, d$.

---

### 11. Answers to Practice Questions

**Answer 1:**
Augmented Matrix:
$$
\begin{pmatrix}
1 & 1 & -1 & | & 1 \\
2 & 3 & 1 & | & 6 \\
3 & -1 & -2 & | & 2
\end{pmatrix}
$$
Row Echelon Form:
$$
\begin{pmatrix}
1 & 1 & -1 & | & 1 \\
0 & 1 & 3 & | & 4 \\
0 & 0 & -13 & | & -13
\end{pmatrix}
$$
Back Substitution:
*   $-13z = -13 \implies z = 1$
*   $y + 3z = 4 \implies y + 3(1) = 4 \implies y = 1$
*   $x + y - z = 1 \implies x + 1 - 1 = 1 \implies x = 1$

**Solution:** $x=1, y=1, z=1$

**Answer 2:**
Augmented Matrix:
$$
\begin{pmatrix}
2 & -1 & 3 & | & 9 \\
1 & 1 & -1 & | & -1 \\
1 & -2 & 2 & | & 7
\end{pmatrix}
$$
Swapping $R_1$ and $R_2$ for a simpler pivot:
$$
\begin{pmatrix}
1 & 1 & -1 & | & -1 \\
2 & -1 & 3 & | & 9 \\
1 & -2 & 2 & | & 7
\end{pmatrix}
$$
RREF:
$$
\begin{pmatrix}
1 & 0 & 0 & | & 2 \\
0 & 1 & 0 & | & -3 \\
0 & 0 & 1 & | & 1
\end{pmatrix}
$$
**Solution:** $x=2, y=-3, z=1$

**Answer 3:**
Augmented Matrix:
$$
\begin{pmatrix}
1 & -2 & 1 & | & 0 \\
2 & 1 & -1 & | & 3 \\
4 & 1 & 1 & | & 7
\end{pmatrix}
$$
RREF:
$$
\begin{pmatrix}
1 & 0 & 0 & | & 1 \\
0 & 1 & 0 & | & 2 \\
0 & 0 & 1 & | & 3
\end{pmatrix}
$$
**Solution:** Unique solution: $x=1, y=2, z=3$

**Answer 4:**
Augmented Matrix:
$$
\begin{pmatrix}
1 & 2 & -1 & 0 & | & 0 \\
-1 & 3 & 0 & -1 & | & 0 \\
2 & -1 & 0 & 0 & | & 5
\end{pmatrix}
$$
Row Echelon Form (after operations):
$$
\begin{pmatrix}
1 & 2 & -1 & 0 & | & 0 \\
0 & 5 & -1 & -1 & | & 0 \\
0 & 0 & 5 & 3 & | & 15
\end{pmatrix}
$$
Back Substitution (assuming $d$ can be a free variable, or we can get to RREF):
If we continue to RREF or make assumptions based on typical chemical equations (where coefficients are usually small integers), we might need more information or constraints. However, for the purpose of solving the linear system:

From $R_3$: $5c + 3d = 15 \implies c = 3 - \frac{3}{5}d$
From $R_2$: $5b - c - d = 0 \implies 5b = c + d = (3 - \frac{3}{5}d) + d = 3 + \frac{2}{5}d \implies b = \frac{3}{5} + \frac{2}{25}d$
From $R_1$: $a + 2b - c = 0 \implies a = c - 2b = (3 - \frac{3}{5}d) - 2(\frac{3}{5} + \frac{2}{25}d) = 3 - \frac{3}{5}d - \frac{6}{5} - \frac{4}{25}d = \frac{9}{5} - (\frac{15}{25} + \frac{4}{25})d = \frac{9}{5} - \frac{19}{25}d$

This system has infinitely many solutions. If we assume $d=5$ (to make coefficients cleaner, a common practice in chemistry):
$d = 5$
$c = 3 - \frac{3}{5}(5) = 3 - 3 = 0$
$b = \frac{3}{5} + \frac{2}{25}(5) = \frac{3}{5} + \frac{10}{25} = \frac{15+10}{25} = \frac{25}{25} = 1$
$a = \frac{9}{5} - \frac{19}{25}(5) = \frac{9}{5} - \frac{19}{5} = -\frac{10}{5} = -2$

This gives coefficients $(-2, 1, 0, 5)$. However, chemical coefficients are usually positive integers. Let's re-examine the problem statement, as there might be an expectation of finding *a* valid set of coefficients or that the problem setup implies a unique solution.

Let's consider a common scenario where the question implies a solvable system yielding reasonable coefficients. If we check the original equations with $a=1, b=2, c=5, d=7$ (often arises from specific balancing scenarios):
$1 + 2(2) - 5 = 1+4-5 = 0$ (Correct)
$-1 + 3(2) - 7 = -1+6-7 = -2$ (Incorrect)

Let's try to get a unique solution by getting an identity matrix. It's possible the question is designed to show infinite solutions without further constraints. If a unique solution with positive integers is implied, there might be a slight error in how the system was presented, or an implicit constraint (e.g., $a$ is the smallest positive integer).

**Revisiting Example 4:** In a typical physical science context, if the system yields infinite solutions, one might seek the simplest integer solution. The derived expressions are:
$a = \frac{9}{5} - \frac{19}{25}d$
$b = \frac{3}{5} + \frac{2}{25}d$
$c = 3 - \frac{3}{5}d$

To get integer values for $a, b, c$, $d$ must be a multiple of 25 for the denominator to clear. Let $d=25k$.
$a = \frac{9}{5} - \frac{19}{25}(25k) = \frac{9}{5} - 19k$
$b = \frac{3}{5} + \frac{2}{25}(25k) = \frac{3}{5} + 2k$
$c = 3 - \frac{3}{5}(25k) = 3 - 15k$

For $a, b, c$ to be integers, $k$ must be of the form $k = m + \frac{1}{5}$ for $a$ and $c$ to be integers, but this also makes $b$ non-integer. This indicates the system as written for coefficients $a,b,c,d$ does not have a simple positive integer solution without further constraints or a slight adjustment.

**Assuming the question implies a solvable system where the row reduction leads to specific values:** If the question was intended to have a specific answer for $a,b,c,d$, the setup might be intended to yield a unique solution if the matrix were square and invertible, or a particular common solution in case of infinite solutions. The process of Gauss elimination itself is what's being tested. The result of the row reduction is valid.

**Final answer for Question 4 based on the row reduction:** The system yields infinitely many solutions, parameterized by $d$ (or any of the variables that become free variables). For example, a possible solution (though not necessarily chemically meaningful without more context) can be obtained by setting $d=5$, leading to $(a, b, c, d) = (-2, 1, 0, 5)$. This highlights the need for context in physical science applications when encountering underdetermined systems. For the purpose of the math, the row reduction process is complete.

---
