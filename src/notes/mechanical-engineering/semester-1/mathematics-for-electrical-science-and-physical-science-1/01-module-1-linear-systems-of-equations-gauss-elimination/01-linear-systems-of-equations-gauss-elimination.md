---
title: "Linear systems of equations: Gauss elimination"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e8353f"
status: "completed"
scrapedAt: "2026-05-20T17:39:11.711Z"
---
# Module 1: Linear Systems of Equations – Gaussian Elimination

Welcome to our journey into the fascinating world of linear systems of equations, a cornerstone for so many areas in Electrical Science and Physical Science! In this module, we're going to dive deep into a powerful technique called **Gaussian Elimination**. This method isn't just about solving equations; it's a fundamental tool that underpins many advanced concepts we'll encounter later in your studies, including matrix diagonalization (CO1) and understanding the behavior of systems in signals and control (referenced by Haykin & Van Veen).

Think of it this way: electrical circuits, mechanical vibrations, quantum mechanics – they all often boil down to a set of linear relationships. Understanding how to solve these systems efficiently is like having a universal key to unlock many of these scientific puzzles.

## 1. What are Linear Systems of Equations?

Let's start with the basics. A system of linear equations is simply a collection of equations where each equation is linear. What does "linear" mean here? It means that each variable appears only to the first power, and there are no products of variables.

For example:
*   $2x + 3y = 7$ (Linear)
*   $x^2 + y = 5$ (Not linear, because of $x^2$)
*   $x + yz = 10$ (Not linear, because of the product $yz$)

A system of linear equations might look something like this:

$a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2$
$\vdots$
$a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m$

Here, $x_1, x_2, \dots, x_n$ are our unknown variables, and $a_{ij}$ and $b_i$ are known coefficients and constants, respectively. The number of equations ($m$) doesn't necessarily have to be the same as the number of variables ($n$).

### Why are these important for us?

In electrical engineering, consider a simple resistive circuit. Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL) often lead to a system of linear equations where the unknowns are the voltages or currents at different nodes in the circuit. For instance, finding the currents flowing through each resistor in a complex network will likely involve setting up and solving such a system. Similarly, in physics, describing the equilibrium states or forces in a mechanical system can be represented by linear equations. This directly links to our **CO1: Solve systems of linear equations**.

### Types of Solutions

A system of linear equations can have:

1.  **A unique solution:** There's exactly one set of values for the variables that satisfies all equations simultaneously. Imagine two lines intersecting at a single point in a 2D plane.
2.  **Infinitely many solutions:** There are countless combinations of variable values that work. Think of two identical lines; every point on the line is a solution.
3.  **No solution:** The equations are contradictory, meaning there's no set of values that can satisfy all of them. This is like having two parallel lines that never intersect.

Gaussian elimination is our systematic way to determine which of these cases we have and, if a solution exists, to find it.

## 2. Representing Systems: The Augmented Matrix

Writing out equations repeatedly can be cumbersome. To make things more efficient, we represent a system of linear equations using an **augmented matrix**. This is a powerful concept, as matrices are fundamental to linear algebra and used extensively in diagonalization (CO1).

Consider our general system:
$a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2$
$\vdots$
$a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m$

The augmented matrix is formed by taking the coefficients of the variables and placing them in a grid, with a vertical line separating the coefficients from the constants on the right-hand side:

$$
\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} & | & b_1 \\
a_{21} & a_{22} & \dots & a_{2n} & | & b_2 \\
\vdots & \vdots & \ddots & \vdots & | & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} & | & b_m
\end{bmatrix}
$$

Each row in the matrix corresponds to an equation, and each column (before the vertical line) corresponds to a variable. The last column contains the constants.

**Example:**
Let's translate this system into an augmented matrix:
$2x + y - z = 8$
$-3x - y + 2z = -11$
$-2x + y + 2z = -3$

The augmented matrix is:
$$
\begin{bmatrix}
2 & 1 & -1 & | & 8 \\
-3 & -1 & 2 & | & -11 \\
-2 & 1 & 2 & | & -3
\end{bmatrix}
$$

This matrix representation is compact and allows us to apply specific operations, which we'll discuss next.

## 3. Gaussian Elimination: The Strategy

Gaussian elimination is an algorithm for solving systems of linear equations. Its core idea is to transform the augmented matrix into a simpler form, called **Row Echelon Form (REF)** or **Reduced Row Echelon Form (RREF)**, by applying a set of allowed operations. These operations don't change the solution set of the original system. It's like rearranging your puzzle pieces to see the whole picture more clearly.

The allowed operations, called **Elementary Row Operations**, are:

1.  **Swapping two rows ($R_i \leftrightarrow R_j$)**: This is like reordering the equations. If we swap equation 1 and equation 2, the system remains equivalent.
2.  **Multiplying a row by a non-zero scalar ($kR_i \to R_i$)**: This is like multiplying an entire equation by a non-zero number. For example, multiplying $2x + y = 3$ by 2 gives $4x + 2y = 6$, which has the same solutions.
3.  **Adding a multiple of one row to another row ($R_i + kR_j \to R_i$)**: This is the most powerful operation. It's like adding a multiple of one equation to another. For instance, if we have $x+y=2$ and $x-y=0$, we can add the second equation to the first to get $2x=2$, which simplifies things considerably.

### The Goal: Row Echelon Form (REF)

Gaussian elimination aims to transform the augmented matrix into **Row Echelon Form (REF)**. A matrix is in REF if:

*   All non-zero rows are above any rows of all zeros.
*   The **leading entry** (the first non-zero element from the left) of each non-zero row is 1. This leading entry is also called a **pivot**.
*   Each leading entry is in a column to the right of the leading entry of the row above it. This means the pivots move down and to the right.
*   All entries in a column below a leading entry are zeros.

Let's visualize this. A matrix in REF might look something like this (where '1's are pivots, '*' are any numbers, and '0's are zeros):

$$
\begin{bmatrix}
1 & * & * & * & | & * \\
0 & 1 & * & * & | & * \\
0 & 0 & 1 & * & | & * \\
0 & 0 & 0 & 0 & | & 0
\end{bmatrix}
\quad \text{or} \quad
\begin{bmatrix}
1 & * & * & * & | & * \\
0 & 0 & 1 & * & | & * \\
0 & 0 & 0 & 1 & | & * \\
0 & 0 & 0 & 0 & | & *
\end{bmatrix}
$$

Notice how the pivots form a "staircase" pattern, and everything below a pivot is zero.

### The Process: Step-by-Step Elimination

The process involves systematically creating zeros below the pivots. We work column by column, from left to right.

**Step 1: Get a pivot (ideally 1) in the top-left position.**
If the top-left element ($a_{11}$) is zero, swap the first row with a row below it that has a non-zero element in the first column. If all elements in the first column are zero, move to the next column. Once you have a non-zero pivot, you can divide the entire first row by this pivot to make it 1.

**Step 2: Create zeros below the first pivot.**
Use the third elementary row operation. For each row below the first row, add a suitable multiple of the first row to it so that the element in the first column becomes zero. For example, to make $a_{21}$ zero, you'd perform $R_2 + (-\frac{a_{21}}{a_{11}})R_1 \to R_2$.

**Step 3: Move to the next pivot.**
Consider the submatrix formed by ignoring the first row and the first column. Repeat Steps 1 and 2 for this submatrix. Find the next pivot in the second column (of the modified matrix), make it 1, and then create zeros below it.

**Step 4: Continue until the matrix is in Row Echelon Form.**
Keep repeating this process until you can't proceed further. You'll end up with a matrix in REF.

### Back-Substitution: Finding the Solution

Once the matrix is in REF, the system of equations represented by this new matrix is much easier to solve. We use a technique called **back-substitution**.

Starting from the *last* non-zero row, solve for the variable corresponding to the pivot in that row. Then, substitute this value into the equation represented by the second-to-last row and solve for the next pivot variable. Continue this process, moving upwards, until all variables are found.

**Example revisited:**
Let's apply Gaussian elimination to our system:
$2x + y - z = 8$
$-3x - y + 2z = -11$
$-2x + y + 2z = -3$

Augmented Matrix:
$$
\begin{bmatrix}
2 & 1 & -1 & | & 8 \\
-3 & -1 & 2 & | & -11 \\
-2 & 1 & 2 & | & -3
\end{bmatrix}
$$

**Operation 1: Make the first pivot 1.**
Divide $R_1$ by 2: $\frac{1}{2}R_1 \to R_1$
$$
\begin{bmatrix}
1 & 1/2 & -1/2 & | & 4 \\
-3 & -1 & 2 & | & -11 \\
-2 & 1 & 2 & | & -3
\end{bmatrix}
$$

**Operation 2: Create zeros below the first pivot.**
*   $R_2 + 3R_1 \to R_2$:
    Row 2 becomes: $[-3 + 3(1), -1 + 3(1/2), 2 + 3(-1/2) | -11 + 3(4)]$
    $= [-3+3, -1+1.5, 2-1.5 | -11+12]$
    $= [0, 0.5, 0.5 | 1]$
*   $R_3 + 2R_1 \to R_3$:
    Row 3 becomes: $[-2 + 2(1), 1 + 2(1/2), 2 + 2(-1/2) | -3 + 2(4)]$
    $= [-2+2, 1+1, 2-1 | -3+8]$
    $= [0, 2, 1 | 5]$

The matrix is now:
$$
\begin{bmatrix}
1 & 1/2 & -1/2 & | & 4 \\
0 & 1/2 & 1/2 & | & 1 \\
0 & 2 & 1 & | & 5
\end{bmatrix}
$$

**Operation 3: Get the next pivot (in the second column) and create zeros below it.**
Make the pivot in $R_2$ a 1. Multiply $R_2$ by 2: $2R_2 \to R_2$.
$$
\begin{bmatrix}
1 & 1/2 & -1/2 & | & 4 \\
0 & 1 & 1 & | & 2 \\
0 & 2 & 1 & | & 5
\end{bmatrix}
$$
Now, create a zero below this pivot (in $R_3$):
*   $R_3 - 2R_2 \to R_3$:
    Row 3 becomes: $[0 - 2(0), 2 - 2(1), 1 - 2(1) | 5 - 2(2)]$
    $= [0, 0, -1 | 1]$

The matrix is now:
$$
\begin{bmatrix}
1 & 1/2 & -1/2 & | & 4 \\
0 & 1 & 1 & | & 2 \\
0 & 0 & -1 & | & 1
\end{bmatrix}
$$

**Operation 4: Get the final pivot and create zeros below it.**
Make the pivot in $R_3$ a 1. Multiply $R_3$ by -1: $-1R_3 \to R_3$.
$$
\begin{bmatrix}
1 & 1/2 & -1/2 & | & 4 \\
0 & 1 & 1 & | & 2 \\
0 & 0 & 1 & | & -1
\end{bmatrix}
$$
We've reached Row Echelon Form (REF)! Notice the staircase pattern and the pivots are 1s.

**Back-Substitution:**
Now, let's write out the system from this matrix:
1.  $x + \frac{1}{2}y - \frac{1}{2}z = 4$
2.  $y + z = 2$
3.  $z = -1$

From (3), we have $z = -1$.

Substitute $z = -1$ into (2):
$y + (-1) = 2 \implies y = 3$.

Substitute $y = 3$ and $z = -1$ into (1):
$x + \frac{1}{2}(3) - \frac{1}{2}(-1) = 4$
$x + \frac{3}{2} + \frac{1}{2} = 4$
$x + \frac{4}{2} = 4$
$x + 2 = 4 \implies x = 2$.

So, the unique solution is $x=2, y=3, z=-1$.

**Relatable Analogy:** Imagine you're trying to assemble a complex LEGO model, but the instructions are all mixed up. Gaussian elimination is like a smart way of reordering and simplifying those instructions so you can build it step-by-step, from the base upwards. First, you ensure the foundation (the first row/variable) is clear, then you build upon it, ensuring subsequent layers (rows) are also manageable, until the entire model (system) is solved.

## 4. Gauss-Jordan Elimination: Towards Simplicity

While Gaussian elimination with back-substitution gives us the solution, there's an even more streamlined version called **Gauss-Jordan Elimination**. The goal here is to go beyond REF and achieve **Reduced Row Echelon Form (RREF)**.

A matrix is in RREF if it satisfies the conditions for REF, PLUS:

*   Every column that contains a leading entry (a pivot) has zeros everywhere else *except* for the pivot itself.

So, in RREF, the matrix looks even "cleaner":

$$
\begin{bmatrix}
1 & 0 & 0 & * & | & * \\
0 & 1 & 0 & * & | & * \\
0 & 0 & 1 & * & | & * \\
0 & 0 & 0 & 0 & | & 0
\end{bmatrix}
$$

To achieve RREF from REF, we simply continue the process: after creating zeros below a pivot, we also create zeros *above* the pivot.

**Continuing our example for Gauss-Jordan:**
We were at the REF matrix:
$$
\begin{bmatrix}
1 & 1/2 & -1/2 & | & 4 \\
0 & 1 & 1 & | & 2 \\
0 & 0 & 1 & | & -1
\end{bmatrix}
$$

We need to create zeros above the pivots in columns 2 and 3.

**Step 1: Create a zero above the pivot in column 3 (the $z$ column).**
We have a '1' in $R_3$ for $z$. We need to make the $-1/2$ in $R_1$ and the $1$ in $R_2$ zero.

*   For $R_1$: $R_1 + \frac{1}{2}R_3 \to R_1$.
    Row 1 becomes: $[1 + \frac{1}{2}(0), \frac{1}{2} + \frac{1}{2}(0), -\frac{1}{2} + \frac{1}{2}(1) | 4 + \frac{1}{2}(-1)]$
    $= [1, \frac{1}{2}, 0 | 4 - \frac{1}{2}]$
    $= [1, \frac{1}{2}, 0 | \frac{7}{2}]$

*   For $R_2$: $R_2 - R_3 \to R_2$.
    Row 2 becomes: $[0 - 0, 1 - 0, 1 - 1 | 2 - (-1)]$
    $= [0, 1, 0 | 3]$

The matrix is now:
$$
\begin{bmatrix}
1 & 1/2 & 0 & | & 7/2 \\
0 & 1 & 0 & | & 3 \\
0 & 0 & 1 & | & -1
\end{bmatrix}
$$

**Step 2: Create a zero above the pivot in column 2 (the $y$ column).**
We have a '1' in $R_2$ for $y$. We need to make the $1/2$ in $R_1$ zero.

*   For $R_1$: $R_1 - \frac{1}{2}R_2 \to R_1$.
    Row 1 becomes: $[1 - \frac{1}{2}(0), \frac{1}{2} - \frac{1}{2}(1), 0 - \frac{1}{2}(0) | \frac{7}{2} - \frac{1}{2}(3)]$
    $= [1, 0, 0 | \frac{7}{2} - \frac{3}{2}]$
    $= [1, 0, 0 | \frac{4}{2}]$
    $= [1, 0, 0 | 2]$

The matrix is now in RREF:
$$
\begin{bmatrix}
1 & 0 & 0 & | & 2 \\
0 & 1 & 0 & | & 3 \\
0 & 0 & 1 & | & -1
\end{bmatrix}
$$

Reading the solution directly from this RREF matrix:
$x = 2$
$y = 3$
$z = -1$

We get the same solution, but the advantage of Gauss-Jordan is that the solution is immediately readable from the last column, without needing back-substitution. This is particularly useful when dealing with matrix inversion or finding the rank of a matrix, which are related to CO1.

**Which method to use?**
Gaussian elimination (to REF) followed by back-substitution is often taught first as it breaks down the process more clearly. Gauss-Jordan (to RREF) is more direct for reading the solution. Both are valid and achieve the same goal. For exams, be comfortable with both!

## 5. Types of Solutions Revisited: What REF Tells Us

The Row Echelon Form (REF) is crucial for identifying the nature of the solution (unique, infinite, or none). Let's look at common scenarios.

Suppose after performing Gaussian elimination, your matrix in REF looks like this:

**Scenario 1: Unique Solution**
$$
\begin{bmatrix}
1 & * & * & | & * \\
0 & 1 & * & | & * \\
0 & 0 & 1 & | & *
\end{bmatrix}
$$
Here, each variable ($x, y, z$) corresponds to a pivot. When you do back-substitution, you'll find a single, specific value for each variable. This is like our example earlier.

**Scenario 2: No Solution (Inconsistent System)**
$$
\begin{bmatrix}
1 & * & * & | & * \\
0 & 1 & * & | & * \\
0 & 0 & 0 & | & k \quad \text{(where } k \neq 0 \text{)}
\end{bmatrix}
$$
The last row $0x + 0y + 0z = k$ with $k \neq 0$ simplifies to $0 = k$. This is a contradiction! It means there's no combination of variables that can satisfy the original equations. This happens when you get a row of all zeros on the left side of the augmented matrix, but a non-zero number on the right side. Think of trying to solve $x+y=1$ and $x+y=2$. You can't satisfy both!

**Scenario 3: Infinitely Many Solutions (Underdetermined System)**
$$
\begin{bmatrix}
1 & * & * & | & * \\
0 & 1 & * & | & * \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$
Here, the last row $0x + 0y + 0z = 0$ is always true ($0=0$). It doesn't give us any new information about the variables. What's important is the number of pivots compared to the number of variables. If the number of pivots (which equals the number of leading 1s in REF) is *less* than the number of variables, you'll have infinitely many solutions. The variables corresponding to the pivots are called **basic variables**, and the variables that do *not* have pivots below them are called **free variables**. You can assign any value to a free variable, and then the basic variables will be determined in terms of the free variables.

For instance, consider this REF matrix:
$$
\begin{bmatrix}
1 & 2 & 3 & | & 6 \\
0 & 1 & 4 & | & 5 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$
This represents:
$x + 2y + 3z = 6$
$y + 4z = 5$

We have pivots for $x$ and $y$. The variable $z$ has no pivot in its column. So, $z$ is a free variable.
From the second equation: $y = 5 - 4z$.
Substitute into the first equation:
$x + 2(5 - 4z) + 3z = 6$
$x + 10 - 8z + 3z = 6$
$x + 10 - 5z = 6$
$x = 6 - 10 + 5z \implies x = -4 + 5z$.

So, the solutions are of the form $(x, y, z) = (-4 + 5z, 5 - 4z, z)$, where $z$ can be any real number. This signifies infinitely many solutions.

**Connection to Course Outcomes:**
Understanding these scenarios is fundamental for **CO1**. When we talk about diagonalizing matrices, the existence and uniqueness of solutions often depend on properties related to the rank of matrices, which is directly determined by the number of pivots found through Gaussian elimination.

## 6. Applications and Why It Matters

Gaussian elimination is not just an academic exercise. It's the backbone for many computations in science and engineering.

*   **Circuit Analysis:** As mentioned, solving for currents and voltages in complex electrical networks.
*   **Data Fitting:** When you have a set of data points and want to find the best-fitting line or curve, you often set up a system of linear equations (e.g., least squares).
*   **Computer Graphics:** Used for transformations, projections, and solving for lighting.
*   **Numerical Analysis:** Many algorithms rely on solving linear systems repeatedly.
*   **Understanding System Behavior:** In differential equations (CO2) and systems analysis (referenced by Haykin & Van Veen), the steady-state behavior or initial conditions can be found by solving associated linear systems. For example, finding particular solutions to non-homogeneous ODEs or analyzing stability.

Think about solving for the forces in a bridge structure or calculating the trajectory of a projectile – many underlying calculations involve linear systems. Kreyszig's "Advanced Engineering Mathematics" and Bird's "Higher Engineering Mathematics" extensively cover these applications, showing how this fundamental technique scales to complex engineering problems.

## 7. Common Pitfalls and Exam Tips

*   **Arithmetic Errors:** This is the most common trap! Be meticulously careful with your calculations, especially with fractions and signs. It’s often helpful to re-check each row operation.
*   **Mistaking REF for RREF:** Ensure you complete all steps to get zeros above the pivots if aiming for RREF, or correctly perform back-substitution if only aiming for REF.
*   **Forgetting the Vertical Line:** Always keep track of the right-hand side constants. They are part of the system!
*   **Handling Zero Pivots:** If you encounter a zero pivot, remember to swap rows. If a whole column is zero below the current pivot row, you move to the next column for your next pivot.
*   **Interpreting the Final Form:** Double-check your REF/RREF to correctly identify unique solutions, no solutions, or infinite solutions. Look for the $0=k$ contradiction for no solution, and the number of free variables (number of variables - number of pivots) for infinite solutions.

**Exam Tip:** Practice a variety of problems – those with unique solutions, no solutions, and infinite solutions. Also, practice problems that lead to fractional answers to sharpen your arithmetic. Often, exam questions will test your ability to identify the *type* of solution before even finding it.

---

## Sample Questions with Answers

**Question 1 (Conceptual):**
What are the three Elementary Row Operations, and why are they important in Gaussian elimination?

**Answer:**
The three Elementary Row Operations are:
1.  **Swapping two rows:** This allows us to rearrange the order of equations, which is useful for bringing a non-zero element to a pivot position.
2.  **Multiplying a row by a non-zero scalar:** This is used to make a pivot element equal to 1.
3.  **Adding a multiple of one row to another:** This is the primary tool for creating zeros below (or above) pivot elements.

These operations are important because they transform the augmented matrix into a simpler form (REF or RREF) without changing the solution set of the original system of linear equations. This simplification makes it possible to easily determine the nature of the solution and to find its value through back-substitution or direct reading.

**Question 2 (Exam-Oriented - Finding Solution):**
Solve the following system of linear equations using Gaussian elimination:
$x + 2y + z = 3$
$2x + 5y - z = 2$
$3x - y - z = 2$

**Solution:**
The augmented matrix is:
$$
\begin{bmatrix}
1 & 2 & 1 & | & 3 \\
2 & 5 & -1 & | & 2 \\
3 & -1 & -1 & | & 2
\end{bmatrix}
$$

1.  Create zeros below the first pivot (1 in $R_1$):
    *   $R_2 - 2R_1 \to R_2$:
        $$
        \begin{bmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & 1 & -3 & | & -4 \\
        3 & -1 & -1 & | & 2
        \end{bmatrix}
        $$
    *   $R_3 - 3R_1 \to R_3$:
        $$
        \begin{bmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & 1 & -3 & | & -4 \\
        0 & -7 & -4 & | & -7
        \end{bmatrix}
        $$

2.  Create zero below the second pivot (1 in $R_2$):
    *   $R_3 + 7R_2 \to R_3$:
        $$
        \begin{bmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & 1 & -3 & | & -4 \\
        0 & 0 & -25 & | & -35
        \end{bmatrix}
        $$

3.  Make the third pivot 1:
    *   $-\frac{1}{25}R_3 \to R_3$:
        $$
        \begin{bmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & 1 & -3 & | & -4 \\
        0 & 0 & 1 & | & \frac{35}{25} = \frac{7}{5}
        \end{bmatrix}
        $$
The matrix is now in REF. We use back-substitution.

From $R_3$: $z = \frac{7}{5}$.

From $R_2$: $y - 3z = -4$
$y - 3(\frac{7}{5}) = -4$
$y - \frac{21}{5} = -4$
$y = -4 + \frac{21}{5} = -\frac{20}{5} + \frac{21}{5} = \frac{1}{5}$.

From $R_1$: $x + 2y + z = 3$
$x + 2(\frac{1}{5}) + \frac{7}{5} = 3$
$x + \frac{2}{5} + \frac{7}{5} = 3$
$x + \frac{9}{5} = 3$
$x = 3 - \frac{9}{5} = \frac{15}{5} - \frac{9}{5} = \frac{6}{5}$.

**Solution:** $x = \frac{6}{5}, y = \frac{1}{5}, z = \frac{7}{5}$.

**Question 3 (Conceptual - Types of Solutions):**
Consider a system of linear equations whose augmented matrix is reduced to Row Echelon Form as follows:
$$
\begin{bmatrix}
1 & 2 & 0 & | & 5 \\
0 & 0 & 1 & | & 3 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$
What can you conclude about the number of solutions to this system? Explain your reasoning.

**Answer:**
This system has **infinitely many solutions**.

**Reasoning:**
The REF matrix represents the system:
1.  $x + 2y = 5$
2.  $z = 3$
3.  $0 = 0$

The third equation ($0=0$) is always true and provides no constraint.
In the first equation, $x$ is a basic variable (it has a pivot in its column). However, $y$ does not have a pivot in its column; therefore, $y$ is a **free variable**. The variable $z$ is also a basic variable.
Since there is at least one free variable ($y$), the system has infinitely many solutions. We can express the basic variables in terms of the free variables. Here, $z=3$. From the first equation, $x = 5 - 2y$.
So, the solutions are of the form $(5-2y, y, 3)$, where $y$ can be any real number. This confirms infinitely many solutions. This links directly to understanding system properties related to **CO1**.

This concludes our introduction to Gaussian elimination. Remember, practice is key to mastering this technique!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
