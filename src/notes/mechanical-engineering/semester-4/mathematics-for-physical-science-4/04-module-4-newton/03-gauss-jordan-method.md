---
title: "Gauss - Jordan Method"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 4: Newton"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ed3"
status: "completed"
scrapedAt: "2026-05-20T17:54:52.505Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 4: Newton
### Topic: Gauss - Jordan Method

---

### **1. Introduction to Systems of Linear Equations**

*   **Definition:** A system of linear equations is a collection of one or more linear equations involving the same set of variables.
    *   A linear equation in $n$ variables $x_1, x_2, ..., x_n$ can be written in the form:
        $a_1x_1 + a_2x_2 + ... + a_nx_n = b$
        where $a_1, a_2, ..., a_n$ are coefficients, and $b$ is a constant.
*   **Matrix Representation:** A system of linear equations can be conveniently represented in matrix form as $AX = B$, where:
    *   $A$ is the coefficient matrix.
    *   $X$ is the column vector of variables.
    *   $B$ is the column vector of constants.

    For example, the system:
    $2x + 3y = 7$
    $x - y = 1$
    can be written as:
    $$ \begin{bmatrix} 2 & 3 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 7 \\ 1 \end{bmatrix} $$

### **2. The Gauss-Jordan Elimination Method: Concept and Goal**

*   **Goal:** The Gauss-Jordan elimination method is a systematic procedure for solving systems of linear equations by transforming the **augmented matrix** of the system into **reduced row echelon form (RREF)**.
*   **Augmented Matrix:** For a system $AX = B$, the augmented matrix is formed by combining the coefficient matrix $A$ and the constant vector $B$ with a vertical line separating them: $[A | B]$.
*   **Reduced Row Echelon Form (RREF):** A matrix is in RREF if it satisfies the following conditions:
    1.  If a row does not consist entirely of zeros, then the first non-zero number in the row is a 1 (called a leading 1 or pivot).
    2.  All rows consisting entirely of zeros are at the bottom of the matrix.
    3.  For each column containing a leading 1, all other entries in that column are zero.
    4.  If matrix $A$ has $m$ rows and $n$ columns, and $m \le n$, then the leading 1 in any row is to the right of the leading 1 in the row above it. (This condition is more relevant for general matrices, but for solving systems, we aim to get an identity matrix in the left part).

*   **Solving Systems with RREF:** Once the augmented matrix is in RREF, the solution to the system can be directly read. If the RREF of $[A | B]$ is $[I | B']$, where $I$ is the identity matrix, then the solution is $X = B'$.

### **3. Elementary Row Operations**

The Gauss-Jordan method relies on applying a sequence of **elementary row operations** to transform the augmented matrix into RREF. These operations do not change the solution set of the system. The allowed operations are:

1.  **Swapping two rows ($R_i \leftrightarrow R_j$):** Interchanging the positions of two rows.
2.  **Multiplying a row by a non-zero scalar ($kR_i \rightarrow R_i$):** Multiplying all elements of a row by a non-zero constant $k$.
3.  **Adding a multiple of one row to another row ($R_i + kR_j \rightarrow R_i$):** Adding a scalar multiple of one row to another row.

### **4. The Gauss-Jordan Algorithm**

The algorithm proceeds by working column by column from left to right, creating leading 1s and zeros in specific positions.

**Steps:**

1.  **Write the augmented matrix** for the given system of linear equations.
2.  **Work on the first column (pivot column 1):**
    *   If the element in the first row, first column (pivot element) is zero, swap the first row with another row that has a non-zero element in the first column. If all elements in the first column are zero, move to the next column.
    *   Make the pivot element a 1 by multiplying the first row by the reciprocal of the pivot element ($ \frac{1}{a_{11}}R_1 \rightarrow R_1 $).
    *   Make all other elements in the first column zero by using the third row operation. For each row $i \neq 1$, perform $R_i - a_{i1}R_1 \rightarrow R_i$.
3.  **Work on the second column (pivot column 2):**
    *   Consider the submatrix obtained by excluding the first row and first column.
    *   If the element in the second row, second column of the *current* matrix is zero, swap the second row with a row below it that has a non-zero element in the second column. If all subsequent elements in the second column are zero, move to the next column.
    *   Make the pivot element (second row, second column) a 1 by multiplying the second row by its reciprocal ($ \frac{1}{a_{22}}R_2 \rightarrow R_2 $).
    *   Make all other elements in the second column (above and below the pivot) zero using the third row operation. For each row $i \neq 2$, perform $R_i - a_{i2}R_2 \rightarrow R_i$.
4.  **Continue this process** for subsequent columns, moving diagonally down the matrix. For each new pivot column, ensure the pivot element is 1 and all other elements in that column are zero.
5.  **The process stops** when the coefficient part of the augmented matrix is in reduced row echelon form (i.e., it becomes the identity matrix for a unique solution system).

### **5. Examples**

**Example 1: Unique Solution**

Solve the following system using Gauss-Jordan elimination:
$x + 2y + 3z = 9$
$2x - y + z = 8$
$3x - z = 3$

**Step 1: Augmented Matrix**
$$ \begin{bmatrix} 1 & 2 & 3 & | & 9 \\ 2 & -1 & 1 & | & 8 \\ 3 & 0 & -1 & | & 3 \end{bmatrix} $$

**Step 2: Make the first column have a leading 1 and zeros below it.**
The first element is already 1.
*   $R_2 - 2R_1 \rightarrow R_2$:
    $$ \begin{bmatrix} 1 & 2 & 3 & | & 9 \\ 0 & -5 & -5 & | & -10 \\ 3 & 0 & -1 & | & 3 \end{bmatrix} $$
*   $R_3 - 3R_1 \rightarrow R_3$:
    $$ \begin{bmatrix} 1 & 2 & 3 & | & 9 \\ 0 & -5 & -5 & | & -10 \\ 0 & -6 & -10 & | & -24 \end{bmatrix} $$

**Step 3: Make the second column have a leading 1 and zeros above and below it.**
*   $ -\frac{1}{5}R_2 \rightarrow R_2 $:
    $$ \begin{bmatrix} 1 & 2 & 3 & | & 9 \\ 0 & 1 & 1 & | & 2 \\ 0 & -6 & -10 & | & -24 \end{bmatrix} $$
*   $R_1 - 2R_2 \rightarrow R_1$:
    $$ \begin{bmatrix} 1 & 0 & 1 & | & 5 \\ 0 & 1 & 1 & | & 2 \\ 0 & -6 & -10 & | & -24 \end{bmatrix} $$
*   $R_3 + 6R_2 \rightarrow R_3$:
    $$ \begin{bmatrix} 1 & 0 & 1 & | & 5 \\ 0 & 1 & 1 & | & 2 \\ 0 & 0 & -4 & | & -12 \end{bmatrix} $$

**Step 4: Make the third column have a leading 1 and zeros above it.**
*   $ -\frac{1}{4}R_3 \rightarrow R_3 $:
    $$ \begin{bmatrix} 1 & 0 & 1 & | & 5 \\ 0 & 1 & 1 & | & 2 \\ 0 & 0 & 1 & | & 3 \end{bmatrix} $$
*   $R_1 - R_3 \rightarrow R_1$:
    $$ \begin{bmatrix} 1 & 0 & 0 & | & 2 \\ 0 & 1 & 1 & | & 2 \\ 0 & 0 & 1 & | & 3 \end{bmatrix} $$
*   $R_2 - R_3 \rightarrow R_2$:
    $$ \begin{bmatrix} 1 & 0 & 0 & | & 2 \\ 0 & 1 & 0 & | & -1 \\ 0 & 0 & 1 & | & 3 \end{bmatrix} $$

**Solution:**
The augmented matrix is now in RREF. The solution is:
$x = 2$
$y = -1$
$z = 3$

**Example 2: No Solution (Inconsistent System)**

Solve the system:
$x + y = 1$
$x + y = 2$

**Step 1: Augmented Matrix**
$$ \begin{bmatrix} 1 & 1 & | & 1 \\ 1 & 1 & | & 2 \end{bmatrix} $$

**Step 2: Apply Row Operations**
*   $R_2 - R_1 \rightarrow R_2$:
    $$ \begin{bmatrix} 1 & 1 & | & 1 \\ 0 & 0 & | & 1 \end{bmatrix} $$

The second row represents the equation $0x + 0y = 1$, which simplifies to $0 = 1$. This is a contradiction, indicating that the system has no solution.

**Example 3: Infinitely Many Solutions**

Solve the system:
$x + 2y - z = 3$
$2x + 4y - 2z = 6$

**Step 1: Augmented Matrix**
$$ \begin{bmatrix} 1 & 2 & -1 & | & 3 \\ 2 & 4 & -2 & | & 6 \end{bmatrix} $$

**Step 2: Apply Row Operations**
*   $R_2 - 2R_1 \rightarrow R_2$:
    $$ \begin{bmatrix} 1 & 2 & -1 & | & 3 \\ 0 & 0 & 0 & | & 0 \end{bmatrix} $$

The second row represents $0x + 0y + 0z = 0$, which is $0=0$. This equation is always true and provides no new information. The system reduces to a single equation: $x + 2y - z = 3$.
In this case, we have fewer independent equations than variables. We can express some variables in terms of others (parameters). Let $y = s$ and $z = t$, where $s$ and $t$ are any real numbers.
Then, $x = 3 - 2y + z = 3 - 2s + t$.
The solutions are of the form $(3 - 2s + t, s, t)$, which represents infinitely many solutions.

### **6. Relation to Other Concepts and Course Outcomes**

*   **CO4: Apply numerical methods to find solutions of linear system of equations...**
    The Gauss-Jordan method is a direct numerical method for solving systems of linear equations. It is deterministic and provides an exact solution (within the precision of the arithmetic used) if one exists. This directly addresses the CO4 outcome.
*   **Connection to Matrix Inverse:** Gauss-Jordan elimination can also be used to find the inverse of a matrix. By augmenting an $n \times n$ matrix $A$ with the identity matrix $I$, i.e., $[A | I]$, and performing row operations to transform $A$ into $I$, the right side will become $A^{-1}$, resulting in $[I | A^{-1}]$. If $A$ cannot be transformed into $I$, then $A$ is singular and has no inverse.
*   **Foundation for other Numerical Methods:** Understanding Gauss-Jordan elimination provides a foundation for understanding more advanced numerical techniques for solving linear systems, especially for large-scale problems where direct methods might be computationally expensive or prone to round-off errors (e.g., iterative methods like Jacobi or Gauss-Seidel).

### **7. Important Points to Remember**

*   **Systematic Approach:** Gauss-Jordan is a step-by-step process. Consistency in applying row operations is crucial.
*   **RREF is Key:** The ultimate goal is to reach the Reduced Row Echelon Form (RREF).
*   **Types of Solutions:** A system can have a unique solution, no solution (inconsistent), or infinitely many solutions. The RREF of the augmented matrix will reveal which case applies.
    *   **Unique Solution:** The coefficient part becomes the identity matrix.
    *   **No Solution:** A row of the form $[0 \ 0 \ ... \ 0 \ | \ c]$ where $c \neq 0$ appears.
    *   **Infinitely Many Solutions:** The number of non-zero rows in the coefficient part is less than the number of variables, and no contradictory rows appear.
*   **Elementary Row Operations:** Only the three specified elementary row operations are allowed.
*   **Computational Cost:** For an $n \times n$ system, Gauss-Jordan elimination has a time complexity of approximately $O(n^3)$ operations.

### **8. Practice Questions and Exercises**

**Question 1:**
Use the Gauss-Jordan method to solve the following system of linear equations:
$x + y + z = 6$
$2x - y + z = 3$
$x + 3y - 2z = -4$

**Question 2:**
Determine if the following system has a unique solution, no solution, or infinitely many solutions using Gauss-Jordan elimination. If a unique solution exists, find it.
$x - 2y + z = 1$
$3x + y - z = 5$
$5x + 2y - z = 7$

**Question 3:**
Solve the following system using Gauss-Jordan elimination:
$2x_1 + x_2 - x_3 = 8$
$-3x_1 - x_2 + 2x_3 = -11$
$-2x_1 + x_2 + 2x_3 = -3$

---

### **Answers to Practice Questions**

**Answer to Question 1:**
Augmented Matrix:
$$ \begin{bmatrix} 1 & 1 & 1 & | & 6 \\ 2 & -1 & 1 & | & 3 \\ 1 & 3 & -2 & | & -4 \end{bmatrix} $$
Applying row operations:
$R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - R_1$:
$$ \begin{bmatrix} 1 & 1 & 1 & | & 6 \\ 0 & -3 & -1 & | & -9 \\ 0 & 2 & -3 & | & -10 \end{bmatrix} $$
$R_2 \leftarrow -\frac{1}{3}R_2$:
$$ \begin{bmatrix} 1 & 1 & 1 & | & 6 \\ 0 & 1 & \frac{1}{3} & | & 3 \\ 0 & 2 & -3 & | & -10 \end{bmatrix} $$
$R_1 \leftarrow R_1 - R_2$, $R_3 \leftarrow R_3 - 2R_2$:
$$ \begin{bmatrix} 1 & 0 & \frac{2}{3} & | & 3 \\ 0 & 1 & \frac{1}{3} & | & 3 \\ 0 & 0 & -\frac{11}{3} & | & -16 \end{bmatrix} $$
$R_3 \leftarrow -\frac{3}{11}R_3$:
$$ \begin{bmatrix} 1 & 0 & \frac{2}{3} & | & 3 \\ 0 & 1 & \frac{1}{3} & | & 3 \\ 0 & 0 & 1 & | & \frac{48}{11} \end{bmatrix} $$
$R_1 \leftarrow R_1 - \frac{2}{3}R_3$, $R_2 \leftarrow R_2 - \frac{1}{3}R_3$:
$$ \begin{bmatrix} 1 & 0 & 0 & | & 3 - \frac{2}{3}\cdot\frac{48}{11} \\ 0 & 1 & 0 & | & 3 - \frac{1}{3}\cdot\frac{48}{11} \\ 0 & 0 & 1 & | & \frac{48}{11} \end{bmatrix} $$
$$ \begin{bmatrix} 1 & 0 & 0 & | & 3 - \frac{32}{11} = \frac{1}{11} \\ 0 & 1 & 0 & | & 3 - \frac{16}{11} = \frac{17}{11} \\ 0 & 0 & 1 & | & \frac{48}{11} \end{bmatrix} $$
Solution: $x = \frac{1}{11}$, $y = \frac{17}{11}$, $z = \frac{48}{11}$

**Answer to Question 2:**
Augmented Matrix:
$$ \begin{bmatrix} 1 & -2 & 1 & | & 1 \\ 3 & 1 & -1 & | & 5 \\ 5 & 2 & -1 & | & 7 \end{bmatrix} $$
Applying row operations:
$R_2 \leftarrow R_2 - 3R_1$, $R_3 \leftarrow R_3 - 5R_1$:
$$ \begin{bmatrix} 1 & -2 & 1 & | & 1 \\ 0 & 7 & -4 & | & 2 \\ 0 & 12 & -6 & | & 2 \end{bmatrix} $$
$R_3 \leftarrow \frac{1}{2}R_3$:
$$ \begin{bmatrix} 1 & -2 & 1 & | & 1 \\ 0 & 7 & -4 & | & 2 \\ 0 & 6 & -3 & | & 1 \end{bmatrix} $$
$R_2 \leftrightarrow R_3$:
$$ \begin{bmatrix} 1 & -2 & 1 & | & 1 \\ 0 & 6 & -3 & | & 1 \\ 0 & 7 & -4 & | & 2 \end{bmatrix} $$
$R_2 \leftarrow \frac{1}{6}R_2$:
$$ \begin{bmatrix} 1 & -2 & 1 & | & 1 \\ 0 & 1 & -\frac{1}{2} & | & \frac{1}{6} \\ 0 & 7 & -4 & | & 2 \end{bmatrix} $$
$R_1 \leftarrow R_1 + 2R_2$, $R_3 \leftarrow R_3 - 7R_2$:
$$ \begin{bmatrix} 1 & 0 & -\frac{1}{2} & | & 1 + \frac{2}{6} = \frac{4}{3} \\ 0 & 1 & -\frac{1}{2} & | & \frac{1}{6} \\ 0 & 0 & -4 + \frac{7}{2} & | & 2 - \frac{7}{6} = \frac{5}{6} \end{bmatrix} $$
$$ \begin{bmatrix} 1 & 0 & -\frac{1}{2} & | & \frac{4}{3} \\ 0 & 1 & -\frac{1}{2} & | & \frac{1}{6} \\ 0 & 0 & -\frac{1}{2} & | & \frac{5}{6} \end{bmatrix} $$
$R_3 \leftarrow -2R_3$:
$$ \begin{bmatrix} 1 & 0 & -\frac{1}{2} & | & \frac{4}{3} \\ 0 & 1 & -\frac{1}{2} & | & \frac{1}{6} \\ 0 & 0 & 1 & | & -\frac{5}{3} \end{bmatrix} $$
$R_1 \leftarrow R_1 + \frac{1}{2}R_3$, $R_2 \leftarrow R_2 + \frac{1}{2}R_3$:
$$ \begin{bmatrix} 1 & 0 & 0 & | & \frac{4}{3} - \frac{5}{6} = \frac{3}{6} = \frac{1}{2} \\ 0 & 1 & 0 & | & \frac{1}{6} - \frac{5}{6} = -\frac{4}{6} = -\frac{2}{3} \\ 0 & 0 & 1 & | & -\frac{5}{3} \end{bmatrix} $$
The system has a unique solution: $x = \frac{1}{2}$, $y = -\frac{2}{3}$, $z = -\frac{5}{3}$.

**Answer to Question 3:**
Augmented Matrix:
$$ \begin{bmatrix} 2 & 1 & -1 & | & 8 \\ -3 & -1 & 2 & | & -11 \\ -2 & 1 & 2 & | & -3 \end{bmatrix} $$
Applying row operations:
$R_1 \leftarrow \frac{1}{2}R_1$:
$$ \begin{bmatrix} 1 & \frac{1}{2} & -\frac{1}{2} & | & 4 \\ -3 & -1 & 2 & | & -11 \\ -2 & 1 & 2 & | & -3 \end{bmatrix} $$
$R_2 \leftarrow R_2 + 3R_1$, $R_3 \leftarrow R_3 + 2R_1$:
$$ \begin{bmatrix} 1 & \frac{1}{2} & -\frac{1}{2} & | & 4 \\ 0 & \frac{1}{2} & \frac{1}{2} & | & 1 \\ 0 & 2 & 1 & | & 5 \end{bmatrix} $$
$R_2 \leftarrow 2R_2$:
$$ \begin{bmatrix} 1 & \frac{1}{2} & -\frac{1}{2} & | & 4 \\ 0 & 1 & 1 & | & 2 \\ 0 & 2 & 1 & | & 5 \end{bmatrix} $$
$R_1 \leftarrow R_1 - \frac{1}{2}R_2$, $R_3 \leftarrow R_3 - 2R_2$:
$$ \begin{bmatrix} 1 & 0 & -1 & | & 3 \\ 0 & 1 & 1 & | & 2 \\ 0 & 0 & -1 & | & 1 \end{bmatrix} $$
$R_3 \leftarrow -R_3$:
$$ \begin{bmatrix} 1 & 0 & -1 & | & 3 \\ 0 & 1 & 1 & | & 2 \\ 0 & 0 & 1 & | & -1 \end{bmatrix} $$
$R_1 \leftarrow R_1 + R_3$, $R_2 \leftarrow R_2 - R_3$:
$$ \begin{bmatrix} 1 & 0 & 0 & | & 2 \\ 0 & 1 & 0 & | & 3 \\ 0 & 0 & 1 & | & -1 \end{bmatrix} $$
Solution: $x_1 = 2$, $x_2 = 3$, $x_3 = -1$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### **9. Textbook and Reference Material Usage**

*   **Devore J. L. (9th ed., 2016):** While primarily focused on probability and statistics, this text may introduce systems of linear equations in the context of multivariate distributions or statistical modeling, particularly when discussing regression analysis or linear algebra fundamentals for statistical methods. The Gauss-Jordan method, as a fundamental algebraic technique, underpins many concepts in applied mathematics.
*   **Sastry S. S. (5th ed., 2012):** This textbook on Numerical Analysis is a primary source for understanding methods like Gauss-Jordan elimination. It would detail the algorithm, its implementation, error analysis, and applications in solving linear systems, which are crucial for numerical computation in physical sciences. This aligns directly with **CO4**.
*   **Chapra & Canale (8th ed., 2021):** This is a core text for numerical methods in engineering. It will extensively cover Gauss-Jordan elimination as a foundational method for solving linear systems, detailing its steps, advantages, disadvantages, and its role in solving problems arising from scientific and engineering applications. This is highly relevant for **CO4**.
*   **Papoulis & Pillai (4th ed., 2002):** Primarily for probability, random variables, and stochastic processes. While not directly focused on numerical methods for linear systems, these methods might be used in advanced topics like the analysis of linear systems of differential equations driven by random processes.
*   **Ross S. M. (6th ed., 2020):** Similar to Devore, this book focuses on probability and statistics. Linear algebra techniques, including solving linear systems, can appear in contexts like Markov chains or statistical inference, but the Gauss-Jordan method itself would likely be a prerequisite covered elsewhere.

The Gauss-Jordan method is a fundamental tool for solving linear systems, which is directly addressed by **CO4**. While the statistical texts might not detail the method itself, they would benefit from the ability to solve such systems in their applications. The numerical analysis and engineering texts are the most direct sources for the mechanics and theory of Gauss-Jordan elimination.