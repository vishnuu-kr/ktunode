---
title: "Solutions of linear systems: Existence"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129cc"
status: "completed"
scrapedAt: "2026-05-20T18:30:48.114Z"
---
# Module 1: Linear Systems of Equations: Gauss Elimination

## Topic: Solutions of Linear Systems: Existence

Welcome everyone! Today, we're diving into a really fundamental aspect of linear systems: **whether or not a solution even exists**, and if it does, **how many solutions** there might be. This is crucial because, in electrical science and physical science, we often model real-world phenomena using systems of linear equations. If our model doesn't have a valid solution, it means our assumptions might be flawed, or perhaps the physical situation itself is impossible under those conditions. Think about trying to design a circuit with specific current flows – if the system of equations governing those flows has no solution, you've got a problem!

We've already touched upon Gauss elimination as a method to *find* solutions. Now, we're going to use the *results* of Gauss elimination – specifically, the row-echelon form – to understand the *nature* of the solutions themselves. This connects directly to our **Course Outcome 1: Solve systems of linear equations and diagonalize matrices.** Understanding existence is the first step before we can even talk about solving.

Let's start with some foundational ideas.

### What is a Linear System?

At its heart, a linear system of equations is a collection of equations where each equation is linear. This means the variables are only raised to the power of 1, and they are not multiplied together. It looks something like this:

$a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2$
$\vdots$
$a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m$

Here, $x_1, x_2, \dots, x_n$ are our unknown variables, and $a_{ij}$ are coefficients, while $b_i$ are constants. We often represent this compactly using matrices, which you'll find extensively in Kreyszig's "Advanced Engineering Mathematics" and Anton & Rorres' "Elementary Linear Algebra".

The system can be written in matrix form as $AX = B$, where:

$A = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} \end{pmatrix}$, $X = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$, and $B = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{pmatrix}$

### Types of Solutions: The Big Picture

When we try to solve a system of linear equations, we encounter one of three possibilities regarding the number of solutions:

1.  **A Unique Solution:** There is exactly one set of values for $x_1, x_2, \dots, x_n$ that satisfies all equations simultaneously.
2.  **Infinitely Many Solutions:** There are an endless number of solutions. This often happens when we have fewer independent equations than variables.
3.  **No Solution:** There is no set of values for $x_1, x_2, \dots, x_n$ that can satisfy all equations at once. This is what we call an **inconsistent system**.

**Remember this:** The key to determining which of these scenarios we're in lies in the **augmented matrix** and its **row-echelon form** obtained through Gauss elimination.

### Using Gauss Elimination to Determine Existence

Recall that Gauss elimination transforms the original system into an equivalent system (meaning it has the same solutions) represented by an upper triangular matrix (or a row-echelon form). We do this using elementary row operations. The augmented matrix $[A|B]$ is transformed into $[U|C]$, where $U$ is in row-echelon form.

Let's consider the augmented matrix in its row-echelon form. The critical element that tells us about the existence and uniqueness of solutions is the presence of **inconsistent rows**.

#### The Crucial Row: The Inconsistent Row

An inconsistent row in the row-echelon form of the augmented matrix looks like this:

$$
\begin{pmatrix}
0 & 0 & \dots & 0 & | & k
\end{pmatrix}
$$

where $k$ is a **non-zero** number.

What does this row represent in terms of equations? If we go back to our variables, this row translates to:

$0 \cdot x_1 + 0 \cdot x_2 + \dots + 0 \cdot x_n = k$

which simplifies to:

$0 = k$

Now, if $k \neq 0$, this statement $0 = k$ is a mathematical contradiction. It's like saying $5 = 0$. This is impossible! If we find such a row during our Gauss elimination process, it means the original system of equations is **inconsistent**, and therefore, **there is no solution**.

**Analogy time!** Imagine you're trying to balance a budget for a small project. You have a certain amount of money allocated ($B$), and you have different tasks that require certain amounts of resources ($A$). If, after meticulously planning and calculating (Gauss elimination), you end up with a situation where $0$ units of expense must equal $5$ dollars of allocation, something is fundamentally wrong with your plan or your allocated funds. The project, as planned, simply cannot be completed.

#### Scenarios Based on Row-Echelon Form:

Let's generalize based on the row-echelon form of the augmented matrix $[U|C]$. Let $r$ be the rank of the coefficient matrix $A$ (number of non-zero rows in $U$), and $r_{aug}$ be the rank of the augmented matrix $[A|B]$ (number of non-zero rows in $[U|C]$). Let $n$ be the number of variables.

1.  **No Solution (Inconsistent System):**
    This occurs when the rank of the coefficient matrix $A$ is *less than* the rank of the augmented matrix $[A|B]$. In terms of the row-echelon form, this means we have at least one row of the form $\begin{pmatrix} 0 & 0 & \dots & 0 & | & k \end{pmatrix}$ where $k \neq 0$.
    *   **Condition:** $r < r_{aug}$
    *   **In the row-echelon form:** You'll see a row like $\begin{pmatrix} 0 & 0 & \dots & 0 & | & k \end{pmatrix}$ with $k \neq 0$.

2.  **At Least One Solution (Consistent System):**
    This occurs when the rank of the coefficient matrix $A$ is *equal to* the rank of the augmented matrix $[A|B]$. This means there are no inconsistent rows of the form $\begin{pmatrix} 0 & 0 & \dots & 0 & | & k \end{pmatrix}$ with $k \neq 0$.
    *   **Condition:** $r = r_{aug}$

    Now, if a system is consistent ($r = r_{aug}$), we still need to differentiate between a unique solution and infinitely many solutions. This depends on the relationship between the rank and the number of variables.

    a.  **A Unique Solution:**
        If the system is consistent AND the rank ($r$) is equal to the number of variables ($n$), then there is a unique solution.
        *   **Condition:** $r = r_{aug} = n$
        *   **In the row-echelon form:** After eliminating rows of all zeros, the number of non-zero rows will equal the number of variables. Each variable will have a leading 1 (a pivot) in a different column (ignoring the augmented column).

    b.  **Infinitely Many Solutions:**
        If the system is consistent AND the rank ($r$) is *less than* the number of variables ($n$), then there are infinitely many solutions. The variables corresponding to columns *without* leading 1s in the row-echelon form of $A$ are called **free variables**. These free variables can be assigned any value, and the other variables (called **basic variables**) will be determined in terms of these free variables.
        *   **Condition:** $r = r_{aug} < n$
        *   **In the row-echelon form:** The number of non-zero rows in $U$ is less than the number of variables. This means some columns in $U$ will not have a leading 1 (pivot).

**Let's tie this back to CO1:** By understanding these conditions, we are essentially performing an analysis of the system's structure without necessarily computing the exact values of the variables (though Gauss elimination helps us do that too). This analysis of structure and the conditions for solvability is a key part of understanding linear algebra, as explored in Kreyszig and Anton/Rorres.

### Examples to Illustrate

Let's work through a few examples to solidify these concepts. We'll use Gauss elimination to get to the row-echelon form.

**Example 1: A Unique Solution**

Consider the system:
$x_1 + 2x_2 + x_3 = 3$
$2x_1 + 5x_2 + 3x_3 = 7$
$x_1 + 8x_3 = 4$

The augmented matrix is:
$$
\begin{pmatrix}
1 & 2 & 1 & | & 3 \\
2 & 5 & 3 & | & 7 \\
1 & 0 & 8 & | & 4
\end{pmatrix}
$$

Let's perform Gauss elimination:
$R_2 \leftarrow R_2 - 2R_1$:
$$
\begin{pmatrix}
1 & 2 & 1 & | & 3 \\
0 & 1 & 1 & | & 1 \\
1 & 0 & 8 & | & 4
\end{pmatrix}
$$
$R_3 \leftarrow R_3 - R_1$:
$$
\begin{pmatrix}
1 & 2 & 1 & | & 3 \\
0 & 1 & 1 & | & 1 \\
0 & -2 & 7 & | & 1
\end{pmatrix}
$$
$R_3 \leftarrow R_3 + 2R_2$:
$$
\begin{pmatrix}
1 & 2 & 1 & | & 3 \\
0 & 1 & 1 & | & 1 \\
0 & 0 & 9 & | & 3
\end{pmatrix}
$$

This is now in row-echelon form. Let's analyze:
The coefficient matrix part is $U = \begin{pmatrix} 1 & 2 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 9 \end{pmatrix}$.
The number of variables $n = 3$.
The rank of $U$ is $r = 3$ (three non-zero rows).
The rank of the augmented matrix is $r_{aug} = 3$ (three non-zero rows).

Since $r = r_{aug} = n = 3$, this system has a **unique solution**.

We could continue with back-substitution to find it:
From the last row: $9x_3 = 3 \implies x_3 = 1/3$.
From the second row: $x_2 + x_3 = 1 \implies x_2 + 1/3 = 1 \implies x_2 = 2/3$.
From the first row: $x_1 + 2x_2 + x_3 = 3 \implies x_1 + 2(2/3) + 1/3 = 3 \implies x_1 + 4/3 + 1/3 = 3 \implies x_1 + 5/3 = 3 \implies x_1 = 3 - 5/3 = 9/3 - 5/3 = 4/3$.
So, $(x_1, x_2, x_3) = (4/3, 2/3, 1/3)$ is the unique solution.

**Example 2: No Solution (Inconsistent System)**

Consider the system:
$x_1 + x_2 = 2$
$2x_1 + 2x_2 = 5$

The augmented matrix:
$$
\begin{pmatrix}
1 & 1 & | & 2 \\
2 & 2 & | & 5
\end{pmatrix}
$$

Gauss elimination:
$R_2 \leftarrow R_2 - 2R_1$:
$$
\begin{pmatrix}
1 & 1 & | & 2 \\
0 & 0 & | & 1
\end{pmatrix}
$$

Analysis:
The coefficient matrix part is $U = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$.
Number of variables $n = 2$.
Rank of $U$ is $r = 1$ (one non-zero row).
Rank of the augmented matrix is $r_{aug} = 2$ (two non-zero rows).

Here, $r < r_{aug}$ ($1 < 2$). We have a row $\begin{pmatrix} 0 & 0 & | & 1 \end{pmatrix}$, which means $0 = 1$. This is a contradiction!
Therefore, this system has **no solution**. It's inconsistent.

**What if the second equation was $2x_1 + 2x_2 = 4$?**
$$
\begin{pmatrix}
1 & 1 & | & 2 \\
2 & 2 & | & 4
\end{pmatrix}
$$
$R_2 \leftarrow R_2 - 2R_1$:
$$
\begin{pmatrix}
1 & 1 & | & 2 \\
0 & 0 & | & 0
\end{pmatrix}
$$
Here, $r = 1$, $r_{aug} = 1$, and $n = 2$. Since $r = r_{aug} = 1 < n = 2$, this system has **infinitely many solutions**. The second row $0=0$ gives us no new information.
From the first row: $x_1 + x_2 = 2$.
Here, $x_1$ is a basic variable, and $x_2$ is a free variable.
Let $x_2 = t$, where $t$ is any real number.
Then $x_1 = 2 - t$.
The solutions are of the form $(2-t, t)$, e.g., $(2,0), (1,1), (0,2)$, etc.

**Example 3: Infinitely Many Solutions**

Consider the system:
$x_1 - x_2 + 2x_3 = 4$
$2x_1 - 2x_2 + 3x_3 = 7$
$x_1 - x_2 + 3x_3 = 5$

Augmented matrix:
$$
\begin{pmatrix}
1 & -1 & 2 & | & 4 \\
2 & -2 & 3 & | & 7 \\
1 & -1 & 3 & | & 5
\end{pmatrix}
$$

Gauss elimination:
$R_2 \leftarrow R_2 - 2R_1$:
$$
\begin{pmatrix}
1 & -1 & 2 & | & 4 \\
0 & 0 & -1 & | & -1 \\
1 & -1 & 3 & | & 5
\end{pmatrix}
$$
$R_3 \leftarrow R_3 - R_1$:
$$
\begin{pmatrix}
1 & -1 & 2 & | & 4 \\
0 & 0 & -1 & | & -1 \\
0 & 0 & 1 & | & 1
\end{pmatrix}
$$
$R_3 \leftarrow R_3 + R_2$:
$$
\begin{pmatrix}
1 & -1 & 2 & | & 4 \\
0 & 0 & -1 & | & -1 \\
0 & 0 & 0 & | & 0
\end{pmatrix}
$$

Analysis:
Coefficient matrix $U = \begin{pmatrix} 1 & -1 & 2 \\ 0 & 0 & -1 \\ 0 & 0 & 0 \end{pmatrix}$.
Number of variables $n = 3$.
Rank of $U$ is $r = 2$ (two non-zero rows).
Rank of augmented matrix is $r_{aug} = 2$ (two non-zero rows).

Here, $r = r_{aug} = 2$, so the system is consistent.
However, $r < n$ ($2 < 3$). This means we have **infinitely many solutions**.

Let's find them using back-substitution on the non-zero rows:
Row 2: $-x_3 = -1 \implies x_3 = 1$.
Row 1: $x_1 - x_2 + 2x_3 = 4 \implies x_1 - x_2 + 2(1) = 4 \implies x_1 - x_2 = 2$.

The variable $x_2$ corresponds to a column without a leading 1 in $U$ (the second column). So, $x_2$ is a free variable.
Let $x_2 = t$, where $t$ is any real number.
Then $x_1 = 2 + x_2 = 2 + t$.
The solutions are of the form $(2+t, t, 1)$.

**Common Pitfall:** Students sometimes get confused between the condition for consistency ($r = r_{aug}$) and the condition for a unique solution ($r = r_{aug} = n$). Always check both conditions! Also, remember to correctly identify free variables by looking at the columns *without* leading ones in the coefficient part of the row-echelon form.

### Connection to Course Outcomes

*   **CO1: Solve systems of linear equations and diagonalize matrices.**
    Understanding the *existence* of solutions is a prerequisite for solving them. Gauss elimination, which we've used, is the primary tool. Knowing *whether* a solution exists helps us decide if we need to proceed with back-substitution or if we've already identified an inconsistent system. The analysis of ranks ($r$ and $r_{aug}$) and comparison with the number of variables ($n$) is precisely the analytical step required here.

### Summary of Existence Conditions

Let $A$ be an $m \times n$ coefficient matrix, and $X$ be the $n \times 1$ variable vector, and $B$ be the $m \times 1$ constant vector. The system is $AX=B$.
Let $[U|C]$ be the row-echelon form of the augmented matrix $[A|B]$.
Let $r$ be the rank of $A$ (number of non-zero rows in $U$).
Let $r_{aug}$ be the rank of $[A|B]$ (number of non-zero rows in $[U|C]$).
Let $n$ be the number of variables.

*   **No Solution (Inconsistent):** If $r < r_{aug}$ (i.e., there is a row $\begin{pmatrix} 0 & \dots & 0 & | & k \end{pmatrix}$ with $k \neq 0$).
*   **At Least One Solution (Consistent):** If $r = r_{aug}$.
    *   **Unique Solution:** If $r = r_{aug} = n$.
    *   **Infinitely Many Solutions:** If $r = r_{aug} < n$.

This framework, derived from the principles of linear algebra found in texts like Kreyszig and Anton/Rorres, is fundamental to solving and understanding linear systems in any scientific or engineering discipline.

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain why a system of linear equations with more variables than equations *might* have infinitely many solutions, but does not *guarantee* it.

**Answer:**
A system with more variables than equations ($n > m$) implies that the rank of the coefficient matrix ($r$) cannot be greater than $m$. If the system is consistent ($r = r_{aug}$), and if $r < n$, then there will be free variables, leading to infinitely many solutions. However, if $r = m$ and $m < n$, it's still possible for the system to be inconsistent (if $r_{aug} = m+1$, which can happen if an equation is a linear combination of others plus a non-zero constant), or to have a unique solution if $r = m = n$ (which isn't the case here as $n>m$). The key is that the rank of the coefficient matrix ($r$) dictates the number of dependent equations. If $r < n$, and the system is consistent, we have free variables. The comparison between $r$ and $n$ is critical.

**Question 2 (Exam-Oriented):**
Determine whether the following system has a unique solution, no solution, or infinitely many solutions. If it has solutions, find them.

$x + y + z = 1$
$2x + 2y + 2z = 2$
$x + y + 2z = 3$

**Answer:**
Augmented matrix:
$$
\begin{pmatrix}
1 & 1 & 1 & | & 1 \\
2 & 2 & 2 & | & 2 \\
1 & 1 & 2 & | & 3
\end{pmatrix}
$$
Gauss Elimination:
$R_2 \leftarrow R_2 - 2R_1$:
$$
\begin{pmatrix}
1 & 1 & 1 & | & 1 \\
0 & 0 & 0 & | & 0 \\
1 & 1 & 2 & | & 3
\end{pmatrix}
$$
$R_3 \leftarrow R_3 - R_1$:
$$
\begin{pmatrix}
1 & 1 & 1 & | & 1 \\
0 & 0 & 0 & | & 0 \\
0 & 0 & 1 & | & 2
\end{pmatrix}
$$
Swap $R_2$ and $R_3$ (for cleaner row-echelon form):
$$
\begin{pmatrix}
1 & 1 & 1 & | & 1 \\
0 & 0 & 1 & | & 2 \\
0 & 0 & 0 & | & 0
\end{pmatrix}
$$
Analysis:
Coefficient matrix part $U = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$.
Number of variables $n = 3$.
Rank of $U$ is $r = 2$.
Rank of augmented matrix is $r_{aug} = 2$.

Since $r = r_{aug} = 2$, the system is **consistent**.
Since $r < n$ ($2 < 3$), there are **infinitely many solutions**.

Finding the solutions:
From row 2: $z = 2$.
From row 1: $x + y + z = 1 \implies x + y + 2 = 1 \implies x + y = -1$.
The variable $y$ corresponds to a column without a leading 1 (second column), so $y$ is a free variable.
Let $y = t$, where $t \in \mathbb{R}$.
Then $x = -1 - y = -1 - t$.
The solutions are of the form $(-1-t, t, 2)$ for any real number $t$.

**Question 3 (Conceptual/Application Link):**
In circuit analysis, Kirchhoff's Voltage Law (KVL) leads to a system of linear equations describing loop currents. If, after applying KVL and simplifying, you obtain an augmented matrix whose row-echelon form has a row like $\begin{pmatrix} 0 & 0 & 0 & | & 5 \end{pmatrix}$, what does this imply about the circuit configuration and its ability to operate as described by your initial KVL setup?

**Answer:**
This scenario implies that the system of equations derived from KVL is inconsistent. The row $\begin{pmatrix} 0 & 0 & 0 & | & 5 \end{pmatrix}$ represents a contradiction like $0 = 5$. In the context of circuit analysis, this means that the initial assumptions or the circuit configuration described by the equations leads to a physically impossible situation. It suggests that the specified loop currents or voltage drops cannot coexist under the given circuit parameters and connections. It might indicate an error in the circuit diagram interpretation, an invalid set of component values, or a fundamental flaw in the problem setup that needs to be revisited. The circuit, as modelled, cannot achieve the state represented by the equations.
