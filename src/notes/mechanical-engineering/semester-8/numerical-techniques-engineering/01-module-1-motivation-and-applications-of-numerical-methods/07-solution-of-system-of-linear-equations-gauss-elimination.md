---
title: "Solution of system of linear equations-Gauss elimination"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 1: Motivation and Applications of numerical methods"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646a2"
status: "completed"
scrapedAt: "2026-05-20T18:23:03.145Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 1: Motivation and Applications of Numerical Methods

### Topic: Solution of System of Linear Equations - Gaussian Elimination

---

### 1. Introduction to Systems of Linear Equations

*   **Definition:** A system of linear equations is a collection of linear equations involving the same set of variables. In engineering, these systems arise frequently in various fields such as structural analysis, circuit analysis, heat transfer, fluid mechanics, and many more.

*   **General Form:** A system of *n* linear equations with *n* unknowns can be represented in matrix form as:

    $Ax = b$

    Where:
    *   $A$ is an $n \times n$ coefficient matrix.
    *   $x$ is an $n \times 1$ column vector of unknowns.
    *   $b$ is an $n \times 1$ column vector of constants.

    **Example:**
    Consider the system:
    $2x_1 + x_2 - x_3 = 8$
    $-3x_1 - x_2 + 2x_3 = -11$
    $-2x_1 + x_2 + 2x_3 = -3$

    In matrix form:
    $$
    \begin{bmatrix}
    2 & 1 & -1 \\
    -3 & -1 & 2 \\
    -2 & 1 & 2
    \end{bmatrix}
    \begin{bmatrix}
    x_1 \\
    x_2 \\
    x_3
    \end{bmatrix}
    =
    \begin{bmatrix}
    8 \\
    -11 \\
    -3
    \end{bmatrix}
    $$

*   **Importance in Engineering:** Solving these systems is crucial for determining unknown quantities in engineering models. For instance:
    *   **Structural Analysis:** Determining forces and displacements in a structure.
    *   **Electrical Engineering:** Analyzing current and voltage distribution in circuits.
    *   **Heat Transfer:** Simulating temperature distribution in a component.

*   **Why Numerical Methods?**
    *   For small systems (2x2 or 3x3), analytical methods (like Cramer's rule or substitution) are feasible.
    *   However, for larger systems (common in engineering), analytical solutions become computationally intractable.
    *   Numerical methods provide systematic algorithms to approximate solutions efficiently, even for very large systems.

---

### 2. Gaussian Elimination Method

Gaussian elimination is a fundamental and widely used numerical method for solving systems of linear equations. It transforms the original system into an equivalent system that is easier to solve.

*   **Core Idea:** The method consists of two main phases:
    1.  **Forward Elimination:** Transforming the augmented matrix into an upper triangular form.
    2.  **Back Substitution:** Solving the system from the last equation upwards.

*   **Augmented Matrix:** For a system $Ax = b$, we represent it as an augmented matrix $[A|b]$.

    **Example (Continuing from above):**
    $$
    \begin{bmatrix}
    2 & 1 & -1 & | & 8 \\
    -3 & -1 & 2 & | & -11 \\
    -2 & 1 & 2 & | & -3
    \end{bmatrix}
    $$

*   **Phase 1: Forward Elimination**
    The goal is to create zeros below the main diagonal of the coefficient matrix. This is achieved by applying elementary row operations:
    *   Swapping two rows.
    *   Multiplying a row by a non-zero scalar.
    *   Adding a multiple of one row to another row.

    **Steps:**

    1.  **Pivot Selection:** For the first column, the element in the first row, first column ($a_{11}$) is the *pivot*.
    2.  **Normalization (Optional but can be helpful):** Divide the pivot row by the pivot element to make the pivot element equal to 1. (This is sometimes called Gauss-Jordan elimination if done for all pivots, but for basic Gaussian elimination, it's not strictly necessary and can introduce more rounding errors).
    3.  **Elimination:** Use the pivot row to eliminate the elements below the pivot in the first column. This is done by subtracting a suitable multiple of the pivot row from the rows below it.

        *   For row 2: $R_2 \leftarrow R_2 - (a_{21}/a_{11}) R_1$
        *   For row 3: $R_3 \leftarrow R_3 - (a_{31}/a_{11}) R_1$

    **Example Walkthrough (Forward Elimination):**

    Initial augmented matrix:
    $$
    \begin{bmatrix}
    2 & 1 & -1 & | & 8 \\
    -3 & -1 & 2 & | & -11 \\
    -2 & 1 & 2 & | & -3
    \end{bmatrix}
    $$

    *   **Step 1: Eliminate elements in the first column below the pivot ($a_{11} = 2$).**
        *   Multiplier for row 2: $m_{21} = a_{21} / a_{11} = -3 / 2 = -1.5$
        *   $R_2 \leftarrow R_2 - (-1.5)R_1$
            *   $[-3, -1, 2, -11] - (-1.5) \times [2, 1, -1, 8]$
            *   $[-3, -1, 2, -11] - [-3, -1.5, 1.5, -12]$
            *   $[0, 0.5, 0.5, 1]$
        *   Multiplier for row 3: $m_{31} = a_{31} / a_{11} = -2 / 2 = -1$
        *   $R_3 \leftarrow R_3 - (-1)R_1$
            *   $[-2, 1, 2, -3] - (-1) \times [2, 1, -1, 8]$
            *   $[-2, 1, 2, -3] - [-2, -1, 1, -8]$
            *   $[0, 2, 1, 5]$

    Matrix after first elimination step:
    $$
    \begin{bmatrix}
    2 & 1 & -1 & | & 8 \\
    0 & 0.5 & 0.5 & | & 1 \\
    0 & 2 & 1 & | & 5
    \end{bmatrix}
    $$

    *   **Step 2: Eliminate the element in the second column below the pivot ($a_{22}' = 0.5$).**
        *   The pivot for this step is $a_{22}' = 0.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
