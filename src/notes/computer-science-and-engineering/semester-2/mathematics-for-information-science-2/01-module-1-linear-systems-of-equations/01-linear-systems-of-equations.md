---
title: "Linear systems of equations"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 1: Linear systems of equations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d08"
status: "completed"
scrapedAt: "2026-05-20T16:34:28.664Z"
---
# MATHEMATICS FOR INFORMATION SCIENCE – 2: Module 1 - Linear Systems of Equations

Welcome, everyone! In this first module of our course, "Mathematics for Information Science – 2," we're diving into a foundational topic that's absolutely critical for understanding many aspects of information science, data analysis, and machine learning: **Linear Systems of Equations**. You've likely encountered systems of equations before, but here, we'll be looking at them through the lens of how they are used to model and solve problems in computing and data-driven fields. Think of this as building the toolkit you'll need to tackle complex data challenges.

Our goal throughout this module is to equip you with the skills to not only *solve* these systems but also to *understand* the underlying mathematical structures. This is key to achieving our course objectives, particularly **CO1: Solve system of linear equations, to evaluate eigen values and eigen vectors of matrices and to diagonalize matrices**. As we progress, you'll see how the techniques we learn here directly enable us to manipulate and analyze data efficiently.

Let's get started!

## 1. What is a Linear System of Equations?

At its heart, a linear system of equations is simply a collection of linear equations. What do we mean by "linear"? In the context of equations with variables (like $x$, $y$, $z$), a linear equation is one where each variable appears only to the first power, and there are no products of variables. Think of equations like:

$2x + 3y = 5$
$x - y + 4z = 0$

These are linear. An equation like $x^2 + y = 10$ or $xy = 7$ is *not* linear.

A **system of linear equations** is then a set of these linear equations that we want to solve simultaneously. We're looking for values for the variables that satisfy *all* equations in the system at the same time.

**Imagine this:** You're managing a small data center, and you're tracking the CPU usage ($x$) and memory usage ($y$) of two critical servers.

*   **Server A:** Reports that its total resource utilization (CPU + Memory) is 70%. So, we can write this as: $x_A + y_A = 70$ (where $x_A$ is Server A's CPU usage, and $y_A$ is its memory usage).
*   **Server B:** Reports that its CPU usage is 10% higher than its memory usage. This gives us: $x_B = y_B + 10$, which we can rearrange to $x_B - y_B = 10$.

If we were tracking these for the *same* server, say server 1, and we had two different metrics:
Equation 1: $2x + 3y = 10$
Equation 2: $x - y = 0$

We're looking for a pair of values $(x, y)$ that makes *both* these statements true. This is a system of two linear equations in two variables.

### 1.1 Types of Solutions

When we look for solutions to a system of linear equations, there are typically three possibilities:

1.  **A Unique Solution:** There's exactly one set of values for the variables that satisfies all equations. This is the most straightforward case.
    *   *Analogy:* You're trying to find a specific Wi-Fi password. There's only one correct sequence of characters that will connect you.

2.  **No Solution (Inconsistent System):** There are no values for the variables that can satisfy all equations simultaneously. The equations contradict each other.
    *   *Analogy:* You're told to find a number that is both greater than 5 AND less than 3. It's impossible. The conditions are contradictory.

3.  **Infinitely Many Solutions (Dependent System):** There are an infinite number of sets of values for the variables that satisfy all equations. This often happens when one equation is a multiple of another, or can be derived from others, meaning it doesn't add any new information.
    *   *Analogy:* You're asked to find points on a straight line. There are infinitely many points that lie on a given line. If one of your "equations" just describes that same line, you have infinitely many solutions.

Understanding which type of solution a system has is crucial, especially when dealing with real-world data where inconsistencies or redundancies can arise.

## 2. Representing Linear Systems: Matrices and Vectors

This is where things get really powerful for information science! We can express systems of linear equations very compactly using matrices and vectors. This representation is the cornerstone of many computational algorithms.

Consider a general system of $m$ linear equations in $n$ variables:

$a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2$
$\vdots$
$a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m$

Here, $a_{ij}$ are coefficients (constants), $x_j$ are the variables, and $b_i$ are the constant terms on the right-hand side.

We can represent this system in matrix form as: $\mathbf{Ax} = \mathbf{b}$

Where:

*   **A** is the **coefficient matrix** (an $m \times n$ matrix containing the $a_{ij}$ values):
    $$
    \mathbf{A} = \begin{bmatrix}
    a_{11} & a_{12} & \dots & a_{1n} \\
    a_{21} & a_{22} & \dots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{m1} & a_{m2} & \dots & a_{mn}
    \end{bmatrix}
    $$

*   **x** is the **variable vector** (a column vector of size $n \times 1$):
    $$
    \mathbf{x} = \begin{bmatrix}
    x_1 \\
    x_2 \\
    \vdots \\
    x_n
    \end{bmatrix}
    $$

*   **b** is the **constant vector** (a column vector of size $m \times 1$):
    $$
    \mathbf{b} = \begin{bmatrix}
    b_1 \\
    b_2 \\
    \vdots \\
    b_m
    \end{bmatrix}
    $$

This $\mathbf{Ax} = \mathbf{b}$ form is incredibly important. It's compact, and it allows us to use the powerful tools of linear algebra (like matrix operations) to analyze and solve the system. This directly relates to **CO1**, as matrix operations are fundamental to solving systems and will be used later for eigenvalues and eigenvectors.

**Example:**

Consider the system:
$2x + 3y - z = 5$
$x - y + 4z = 2$

This can be written as $\mathbf{Ax} = \mathbf{b}$ where:

$$
\mathbf{A} = \begin{bmatrix}
2 & 3 & -1 \\
1 & -1 & 4
\end{bmatrix}, \quad \mathbf{x} = \begin{bmatrix} x \\ y \\ z \end{bmatrix}, \quad \mathbf{b} = \begin{bmatrix} 5 \\ 2 \end{bmatrix}
$$

Here, $m=2$ (two equations) and $n=3$ (three variables).

### 2.1 Augmented Matrix

A very useful representation for solving systems is the **augmented matrix**. We combine the coefficient matrix $\mathbf{A}$ and the constant vector $\mathbf{b}$ into a single matrix, separated by a vertical line (or just implicitly understood).

For $\mathbf{Ax} = \mathbf{b}$, the augmented matrix is $[\mathbf{A} | \mathbf{b}]$.

Using our previous example:
The augmented matrix is:
$$
\begin{bmatrix}
2 & 3 & -1 & | & 5 \\
1 & -1 & 4 & | & 2
\end{bmatrix}
$$

This augmented matrix $[\mathbf{A} | \mathbf{b}]$ contains all the information of the system, and we will use it extensively in our solution methods.

## 3. Methods for Solving Linear Systems

Now, how do we actually *find* the values of $x_1, x_2, \dots, x_n$ that satisfy the system? There are several powerful methods.

### 3.1 Gaussian Elimination

Gaussian elimination is a systematic procedure to transform the augmented matrix into a simpler form from which the solution can be easily read. The core idea is to use **elementary row operations** to convert the matrix into **row echelon form** or **reduced row echelon form**.

**Elementary Row Operations:** These are the allowed transformations that don't change the solution set of the system:

1.  **Swapping two rows:** Interchanging $R_i \leftrightarrow R_j$. This just means we reorder the equations.
2.  **Multiplying a row by a non-zero scalar:** $kR_i \rightarrow R_i$ (where $k \neq 0$). This is like multiplying an entire equation by a constant.
3.  **Adding a multiple of one row to another row:** $R_i + kR_j \rightarrow R_i$. This is like adding a multiple of one equation to another.

**Goal: Row Echelon Form**
A matrix is in row echelon form if:
1.  All non-zero rows are above any rows of all zeros.
2.  The leading entry (the first non-zero element from the left, also called the pivot) of a non-zero row is always strictly to the right of the leading entry of the row above it.
3.  All entries in a column below a leading entry are zeros.

**Goal: Reduced Row Echelon Form (RREF)**
This is an even simpler form, achieved by further operations:
1.  It is in row echelon form.
2.  Every leading entry (pivot) is 1.
3.  Each column containing a leading entry (pivot) has zeros everywhere else (above and below).

**The Process (Gaussian Elimination for Solving):**

1.  Write down the augmented matrix $[\mathbf{A} | \mathbf{b}]$.
2.  Use elementary row operations to transform the matrix into row echelon form.
3.  Once in row echelon form, use **back-substitution** to find the values of the variables, starting from the last equation.

**The Process (Gauss-Jordan Elimination for Solving):**

1.  Write down the augmented matrix $[\mathbf{A} | \mathbf{b}]$.
2.  Use elementary row operations to transform the matrix into **reduced row echelon form (RREF)**.
3.  The solution is directly read from the RREF matrix.

Gauss-Jordan elimination is often preferred because it directly gives the solution without the extra back-substitution step.

**Example (Gauss-Jordan Elimination):**

Let's solve the system:
$x + 2y + z = 3$
$2x + 5y - z = -4$
$3x - 2y - 2z = 2$

The augmented matrix is:
$$
\begin{bmatrix}
1 & 2 & 1 & | & 3 \\
2 & 5 & -1 & | & -4 \\
3 & -2 & -2 & | & 2
\end{bmatrix}
$$

*   **Step 1:** Get zeros below the leading 1 in the first column.
    *   $R_2 - 2R_1 \rightarrow R_2$:
        $$
        \begin{bmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & 1 & -3 & | & -10 \\
        3 & -2 & -2 & | & 2
        \end{bmatrix}
        $$
    *   $R_3 - 3R_1 \rightarrow R_3$:
        $$
        \begin{bmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & 1 & -3 & | & -10 \\
        0 & -8 & -5 & | & -7
        \end{bmatrix}
        $$

*   **Step 2:** Get a zero below the leading 1 in the second column.
    *   $R_3 + 8R_2 \rightarrow R_3$:
        $$
        \begin{bmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & 1 & -3 & | & -10 \\
        0 & 0 & -29 & | & -87
        \end{bmatrix}
        $$
    This is now in row echelon form. If we were doing Gaussian elimination, we'd now back-substitute.

*   **Step 3:** Continue to RREF (Gauss-Jordan). Get a leading 1 in the third row and zeros above it.
    *   Divide $R_3$ by -29: $R_3 / (-29) \rightarrow R_3$:
        $$
        \begin{bmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & 1 & -3 & | & -10 \\
        0 & 0 & 1 & | & 3
        \end{bmatrix}
        $$
    *   Now, get zeros above the leading 1 in the third column.
    *   $R_2 + 3R_3 \rightarrow R_2$:
        $$
        \begin{bmatrix}
        1 & 2 & 1 & | & 3 \\
        0 & 1 & 0 & | & -1 \\
        0 & 0 & 1 & | & 3
        \end{bmatrix}
        $$
    *   $R_1 - R_3 \rightarrow R_1$:
        $$
        \begin{bmatrix}
        1 & 2 & 0 & | & 0 \\
        0 & 1 & 0 & | & -1 \\
        0 & 0 & 1 & | & 3
        \end{bmatrix}
        $$
    *   Finally, get a zero above the leading 1 in the second column.
    *   $R_1 - 2R_2 \rightarrow R_1$:
        $$
        \begin{bmatrix}
        1 & 0 & 0 & | & 2 \\
        0 & 1 & 0 & | & -1 \\
        0 & 0 & 1 & | & 3
        \end{bmatrix}
        $$

This is the RREF! The solution is directly readable:
$x = 2$
$y = -1$
$z = 3$

This method is systematic and works for any size of linear system. It directly helps us with **CO1**.

**Connecting to Information Science:** Think about fitting a model to data. We often end up with systems of linear equations. Gaussian elimination is the underlying algorithm used in software to solve these. For example, in image processing, transforming pixels or applying filters might involve solving linear systems.

### 3.2 Matrix Inverse Method (for Square Systems)

If the coefficient matrix $\mathbf{A}$ is **square** (i.e., $m=n$) and **invertible** (non-singular), we can use the matrix inverse to solve $\mathbf{Ax} = \mathbf{b}$.

If $\mathbf{A}^{-1}$ exists, we can multiply both sides of $\mathbf{Ax} = \mathbf{b}$ by $\mathbf{A}^{-1}$ on the left:
$\mathbf{A}^{-1}(\mathbf{Ax}) = \mathbf{A}^{-1}\mathbf{b}$
$(\mathbf{A}^{-1}\mathbf{A})\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$
$\mathbf{I}\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$
$\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$

Where $\mathbf{I}$ is the identity matrix.

So, if we can find the inverse of $\mathbf{A}$, we just multiply it by $\mathbf{b}$ to get the solution vector $\mathbf{x}$.

**How to find the inverse?**
We can use Gauss-Jordan elimination on an augmented matrix $[\mathbf{A} | \mathbf{I}]$ (where $\mathbf{I}$ is the identity matrix of the same size as $\mathbf{A}$). If $\mathbf{A}$ is invertible, this process will transform the left side into $\mathbf{I}$, and the right side will become $\mathbf{A}^{-1}$:
$[\mathbf{A} | \mathbf{I}] \xrightarrow{\text{row ops}} [\mathbf{I} | \mathbf{A}^{-1}]$

**Example:**

Let's solve the system using the inverse method (if possible):
$x + 2y = 5$
$3x + 4y = 11$

$$
\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad \mathbf{x} = \begin{bmatrix} x \\ y \end{bmatrix}, \quad \mathbf{b} = \begin{bmatrix} 5 \\ 11 \end{bmatrix}
$$

First, let's find $\mathbf{A}^{-1}$. We augment with $\mathbf{I}$:
$$
\begin{bmatrix}
1 & 2 & | & 1 & 0 \\
3 & 4 & | & 0 & 1
\end{bmatrix}
$$

*   $R_2 - 3R_1 \rightarrow R_2$:
    $$
    \begin{bmatrix}
    1 & 2 & | & 1 & 0 \\
    0 & -2 & | & -3 & 1
    \end{bmatrix}
    $$
*   $R_2 / (-2) \rightarrow R_2$:
    $$
    \begin{bmatrix}
    1 & 2 & | & 1 & 0 \\
    0 & 1 & | & 3/2 & -1/2
    \end{bmatrix}
    $$
*   $R_1 - 2R_2 \rightarrow R_1$:
    $$
    \begin{bmatrix}
    1 & 0 & | & -2 & 1 \\
    0 & 1 & | & 3/2 & -1/2
    \end{bmatrix}
    $$

So, $\mathbf{A}^{-1} = \begin{bmatrix} -2 & 1 \\ 3/2 & -1/2 \end{bmatrix}$.

Now, calculate $\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$:
$$
\mathbf{x} = \begin{bmatrix} -2 & 1 \\ 3/2 & -1/2 \end{bmatrix} \begin{bmatrix} 5 \\ 11 \end{bmatrix} = \begin{bmatrix} (-2)(5) + (1)(11) \\ (3/2)(5) + (-1/2)(11) \end{bmatrix} = \begin{bmatrix} -10 + 11 \\ 15/2 - 11/2 \end{bmatrix} = \begin{bmatrix} 1 \\ 4/2 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}
$$

Thus, $x=1$ and $y=2$.

**When is this method useful?**
This method is elegant when you have a square system and need to solve it for *multiple different* $\mathbf{b}$ vectors using the *same* matrix $\mathbf{A}$. Once you compute $\mathbf{A}^{-1}$, each new solution is just a matrix-vector multiplication, which is computationally faster than re-doing Gaussian elimination for each $\mathbf{b}$. However, computing the inverse itself can be computationally expensive for large matrices.

**Important Note:** The inverse method only works for square systems where $\mathbf{A}$ is invertible. If $\mathbf{A}$ is singular (determinant is zero), it doesn't have an inverse, and the system will either have no solution or infinitely many solutions. This connection between invertibility and the nature of solutions is key to **CO1**.

### 3.3 Cramer's Rule

Cramer's Rule is another method for solving square systems of linear equations, provided the coefficient matrix $\mathbf{A}$ is invertible. It uses determinants.

For a system $\mathbf{Ax} = \mathbf{b}$ where $\mathbf{A}$ is an $n \times n$ invertible matrix, the solution for each variable $x_i$ is given by:

$$
x_i = \frac{\det(\mathbf{A}_i)}{\det(\mathbf{A})}
$$

Where $\mathbf{A}_i$ is the matrix formed by replacing the $i$-th column of $\mathbf{A}$ with the vector $\mathbf{b}$.

**Example (using the same system as before):**
$x + 2y = 5$
$3x + 4y = 11$

$$
\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad \mathbf{b} = \begin{bmatrix} 5 \\ 11 \end{bmatrix}
$$

First, calculate $\det(\mathbf{A})$:
$\det(\mathbf{A}) = (1)(4) - (2)(3) = 4 - 6 = -2$.
Since $\det(\mathbf{A}) \neq 0$, the matrix is invertible, and Cramer's Rule can be used.

Now, find $\mathbf{A}_1$ (replace the 1st column with $\mathbf{b}$):
$$
\mathbf{A}_1 = \begin{bmatrix} 5 & 2 \\ 11 & 4 \end{bmatrix}
$$
$\det(\mathbf{A}_1) = (5)(4) - (2)(11) = 20 - 22 = -2$.

And find $\mathbf{A}_2$ (replace the 2nd column with $\mathbf{b}$):
$$
\mathbf{A}_2 = \begin{bmatrix} 1 & 5 \\ 3 & 11 \end{bmatrix}
$$
$\det(\mathbf{A}_2) = (1)(11) - (5)(3) = 11 - 15 = -4$.

Now, apply Cramer's Rule:
$x_1 = x = \frac{\det(\mathbf{A}_1)}{\det(\mathbf{A})} = \frac{-2}{-2} = 1$.
$x_2 = y = \frac{\det(\mathbf{A}_2)}{\det(\mathbf{A})} = \frac{-4}{-2} = 2$.

We get the same solution: $x=1, y=2$.

**Practicality of Cramer's Rule:**
While mathematically elegant, Cramer's Rule is generally not the most efficient method for solving linear systems, especially for larger systems. The computation of determinants for large matrices is very costly. Gaussian elimination is usually preferred in practice for its computational efficiency and its ability to handle non-square systems and identify inconsistent systems. However, understanding determinants is crucial for other aspects of linear algebra, like eigenvalues, which are part of **CO1**.

## 4. Analyzing Solutions: Consistency and Rank

We've seen that systems can have one, none, or infinitely many solutions. How do we formally determine this without fully solving? The **rank** of a matrix is a powerful tool for this.

### 4.1 Rank of a Matrix

The **rank** of a matrix $\mathbf{A}$, denoted $\text{rank}(\mathbf{A})$, is defined as:

1.  The number of non-zero rows in its row echelon form.
2.  The maximum number of linearly independent rows (or columns) of the matrix.

Let's use our example from Gaussian elimination:
$$
\mathbf{A} = \begin{bmatrix}
1 & 2 & 1 \\
2 & 5 & -1 \\
3 & -2 & -2
\end{bmatrix}
$$
Its row echelon form was:
$$
\begin{bmatrix}
1 & 2 & 1 \\
0 & 1 & -3 \\
0 & 0 & 1
\end{bmatrix}
$$
This matrix has 3 non-zero rows. So, $\text{rank}(\mathbf{A}) = 3$.

Now, consider the augmented matrix $[\mathbf{A} | \mathbf{b}]$ from the same example:
$$
[\mathbf{A} | \mathbf{b}] = \begin{bmatrix}
1 & 2 & 1 & | & 3 \\
2 & 5 & -1 & | & -4 \\
3 & -2 & -2 & | & 2
\end{bmatrix}
$$
Its reduced row echelon form was:
$$
\begin{bmatrix}
1 & 0 & 0 & | & 2 \\
0 & 1 & 0 & | & -1 \\
0 & 0 & 1 & | & 3
\end{bmatrix}
$$
This augmented matrix has 3 non-zero rows. So, $\text{rank}([\mathbf{A} | \mathbf{b}]) = 3$.

### 4.2 Consistency Conditions using Rank

For a system $\mathbf{Ax} = \mathbf{b}$, where $\mathbf{A}$ is $m \times n$:

1.  **The system is consistent (has at least one solution) if and only if $\text{rank}(\mathbf{A}) = \text{rank}([\mathbf{A} | \mathbf{b}])$.**
    *   If $\text{rank}(\mathbf{A}) < \text{rank}([\mathbf{A} | \mathbf{b}])$, the system is inconsistent (no solution). This typically happens when a row of zeros appears in the $\mathbf{A}$ part of the augmented matrix, but a non-zero value appears in the $\mathbf{b}$ part (e.g., $0x + 0y = 5$).

2.  **If the system is consistent:**
    *   If $\text{rank}(\mathbf{A}) = \text{rank}([\mathbf{A} | \mathbf{b}]) = n$ (the number of variables), then there is a **unique solution**.
    *   If $\text{rank}(\mathbf{A}) = \text{rank}([\mathbf{A} | \mathbf{b}]) < n$, then there are **infinitely many solutions**. The number of free variables (variables we can choose freely) is $n - \text{rank}(\mathbf{A})$.

**Let's illustrate with an example of inconsistency:**

Consider:
$x + y = 2$
$x + y = 3$

Augmented matrix:
$$
\begin{bmatrix}
1 & 1 & | & 2 \\
1 & 1 & | & 3
\end{bmatrix}
$$
Perform $R_2 - R_1 \rightarrow R_2$:
$$
\begin{bmatrix}
1 & 1 & | & 2 \\
0 & 0 & | & 1
\end{bmatrix}
$$
Here, $\mathbf{A} = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}$. Its row echelon form is $\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}$, so $\text{rank}(\mathbf{A}) = 1$.
The augmented matrix $[\mathbf{A} | \mathbf{b}]$ has row echelon form $\begin{bmatrix} 1 & 1 & | & 2 \\ 0 & 0 & | & 1 \end{bmatrix}$, so $\text{rank}([\mathbf{A} | \mathbf{b}]) = 2$.

Since $\text{rank}(\mathbf{A}) \neq \text{rank}([\mathbf{A} | \mathbf{b}])$, the system is inconsistent (no solution). The last row represents $0x + 0y = 1$, which is impossible.

**Example of infinitely many solutions:**

Consider:
$x + y + z = 3$
$2x + 2y + 2z = 6$

Augmented matrix:
$$
\begin{bmatrix}
1 & 1 & 1 & | & 3 \\
2 & 2 & 2 & | & 6
\end{bmatrix}
$$
Perform $R_2 - 2R_1 \rightarrow R_2$:
$$
\begin{bmatrix}
1 & 1 & 1 & | & 3 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$
Here, $\mathbf{A} = \begin{bmatrix} 1 & 1 & 1 \\ 2 & 2 & 2 \end{bmatrix}$. Its row echelon form is $\begin{bmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \end{bmatrix}$, so $\text{rank}(\mathbf{A}) = 1$.
The augmented matrix $[\mathbf{A} | \mathbf{b}]$ has row echelon form $\begin{bmatrix} 1 & 1 & 1 & | & 3 \\ 0 & 0 & 0 & | & 0 \end{bmatrix}$, so $\text{rank}([\mathbf{A} | \mathbf{b}]) = 1$.

Since $\text{rank}(\mathbf{A}) = \text{rank}([\mathbf{A} | \mathbf{b}]) = 1$, and the number of variables $n=3$, we have $\text{rank} < n$. Therefore, there are infinitely many solutions. The number of free variables is $n - \text{rank}(\mathbf{A}) = 3 - 1 = 2$. We can choose $x$ and $y$ freely, and then $z$ is determined by $z = 3 - x - y$.

The concept of rank is directly linked to the dimensionality of vector spaces and subspaces (CO2) and is fundamental for understanding the structure of solutions to linear systems.

## 5. Connection to Course and Learning Outcomes

Let's recap how this module's topic, "Linear Systems of Equations," directly contributes to our course objectives:

*   **CO1: Solve system of linear equations, to evaluate eigen values and eigen vectors of matrices and to diagonalize matrices.**
    *   This entire module is dedicated to solving systems of linear equations using methods like Gaussian elimination and the matrix inverse.
    *   The foundational understanding of matrix manipulation gained here is essential for calculating eigenvalues and eigenvectors, which often arise from systems of equations of the form $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x} = \mathbf{0}$. Diagonalization also heavily relies on the properties of the coefficient matrices of these systems.

*   **CO2: Understand the concepts of vector spaces and subspaces and to apply their properties.**
    *   The column space and null space of the coefficient matrix $\mathbf{A}$ are intimately related to the existence and nature of solutions to $\mathbf{Ax} = \mathbf{b}$.
    *   The set of all solutions to a homogeneous system ($\mathbf{Ax} = \mathbf{0}$) forms a vector space (the null space or kernel of $\mathbf{A}$).
    *   The rank-nullity theorem, which states $\text{rank}(\mathbf{A}) + \text{nullity}(\mathbf{A}) = n$ (number of columns), is a direct consequence of our analysis of systems and relates directly to vector space dimensions.

*   **CO3: Describe inner product spaces and their properties, to apply orthonormalization process and to solve least square problems.**
    *   While this module primarily focuses on exact solutions, many real-world problems in information science lead to **overdetermined** systems ($\mathbf{Ax} = \mathbf{b}$ where $m > n$) that are inconsistent.
    *   The standard approach to such problems is to find a "least squares" solution, which minimizes the norm of the residual vector $\|\mathbf{b} - \mathbf{Ax}\|$. This process is deeply rooted in vector spaces and inner products, and the solution often involves solving the **normal equations**: $\mathbf{A}^T\mathbf{Ax} = \mathbf{A}^T\mathbf{b}$. Understanding linear systems is the first step to understanding how these least squares problems are formulated and solved.

*   **CO4: Understand the concept of linear transformation and to apply its properties, to find the rank and nullity of a linear transformation and to find the matrices of linear transformations.**
    *   As we saw, the equation $\mathbf{Ax} = \mathbf{b}$ can be viewed as applying a linear transformation (represented by matrix $\mathbf{A}$) to a vector $\mathbf{x}$ to obtain a vector $\mathbf{b}$.
    *   The rank of the matrix $\mathbf{A}$ is precisely the dimension of the image (or range) of the linear transformation $T(\mathbf{x}) = \mathbf{Ax}$, which is the column space of $\mathbf{A}$.
    *   The nullity of the matrix $\mathbf{A}$ is the dimension of the kernel (or null space) of the linear transformation $T(\mathbf{x}) = \mathbf{Ax}$.

Therefore, mastering linear systems of equations provides the bedrock for understanding a vast array of concepts in linear algebra and their applications in information science.

## 6. Important Takeaways and Exam Tips

*   **Master the Matrix Representation:** Always be comfortable converting a system of equations into $\mathbf{Ax} = \mathbf{b}$ and vice-versa. The augmented matrix is your working tool.
*   **Gaussian/Gauss-Jordan Elimination:** This is your primary workhorse. Practice the row operations until they are second nature. Be meticulous with arithmetic, as one small error can cascade.
*   **Types of Solutions:** Understand the conditions for unique, no, and infinite solutions. The rank conditions ($\text{rank}(\mathbf{A})$ vs. $\text{rank}([\mathbf{A} | \mathbf{b}])$) are crucial for theoretical questions.
*   **RREF is Key:** For Gauss-Jordan, aiming for Reduced Row Echelon Form directly gives you the solution.
*   **Invertibility and Determinants:** Know that a square matrix has an inverse if and only if its determinant is non-zero. While Cramer's Rule is less practical for solving, understanding determinants connects to eigenvalues (CO1) and invertibility.
*   **Practical Applications:** Think about how these systems arise. Data fitting, resource allocation, network analysis, image transformations – they are everywhere!
*   **Common Pitfalls:**
    *   Arithmetic errors during row operations.
    *   Confusing row echelon form with reduced row echelon form.
    *   Forgetting to perform row operations on the entire augmented row (including the $\mathbf{b}$ part).
    *   Assuming a square system always has a unique solution (it might be inconsistent or have infinite solutions if the matrix is singular).

## Sample Questions and Answers

**Conceptual Question 1:**
Explain why the system of linear equations $x+y=1$ and $2x+2y=3$ has no solution. Use the concept of rank to justify your answer.

**Answer:**
The system can be written in augmented matrix form as:
$$
\begin{bmatrix}
1 & 1 & | & 1 \\
2 & 2 & | & 3
\end{bmatrix}
$$
Applying the row operation $R_2 - 2R_1 \rightarrow R_2$, we get:
$$
\begin{bmatrix}
1 & 1 & | & 1 \\
0 & 0 & | & 1
\end{bmatrix}
$$
The coefficient matrix $\mathbf{A} = \begin{bmatrix} 1 & 1 \\ 2 & 2 \end{bmatrix}$ has a row echelon form of $\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}$, so $\text{rank}(\mathbf{A}) = 1$.
The augmented matrix $[\mathbf{A} | \mathbf{b}]$ has a row echelon form of $\begin{bmatrix} 1 & 1 & | & 1 \\ 0 & 0 & | & 1 \end{bmatrix}$, so $\text{rank}([\mathbf{A} | \mathbf{b}]) = 2$.
Since $\text{rank}(\mathbf{A}) \neq \text{rank}([\mathbf{A} | \mathbf{b}])$, the system is inconsistent and has no solution. The last row $[0 \ 0 \ | \ 1]$ represents the equation $0x + 0y = 1$, which is a contradiction.

**Exam-Oriented Question 1:**
Solve the following system of linear equations using Gauss-Jordan elimination:
$x + 2y + 3z = 9$
$2x - y + z = 8$
$3x - z = 3$

**Answer:**
The augmented matrix is:
$$
\begin{bmatrix}
1 & 2 & 3 & | & 9 \\
2 & -1 & 1 & | & 8 \\
3 & 0 & -1 & | & 3
\end{bmatrix}
$$
1.  $R_2 - 2R_1 \rightarrow R_2$ and $R_3 - 3R_1 \rightarrow R_3$:
    $$
    \begin{bmatrix}
    1 & 2 & 3 & | & 9 \\
    0 & -5 & -5 & | & -10 \\
    0 & -6 & -10 & | & -24
    \end{bmatrix}
    $$
2.  $R_2 / (-5) \rightarrow R_2$:
    $$
    \begin{bmatrix}
    1 & 2 & 3 & | & 9 \\
    0 & 1 & 1 & | & 2 \\
    0 & -6 & -10 & | & -24
    \end{bmatrix}
    $$
3.  $R_3 + 6R_2 \rightarrow R_3$:
    $$
    \begin{bmatrix}
    1 & 2 & 3 & | & 9 \\
    0 & 1 & 1 & | & 2 \\
    0 & 0 & -4 & | & -12
    \end{bmatrix}
    $$
4.  $R_3 / (-4) \rightarrow R_3$:
    $$
    \begin{bmatrix}
    1 & 2 & 3 & | & 9 \\
    0 & 1 & 1 & | & 2 \\
    0 & 0 & 1 & | & 3
    \end{bmatrix}
    $$
5.  $R_2 - R_3 \rightarrow R_2$ and $R_1 - 3R_3 \rightarrow R_1$:
    $$
    \begin{bmatrix}
    1 & 2 & 0 & | & 0 \\
    0 & 1 & 0 & | & -1 \\
    0 & 0 & 1 & | & 3
    \end{bmatrix}
    $$
6.  $R_1 - 2R_2 \rightarrow R_1$:
    $$
    \begin{bmatrix}
    1 & 0 & 0 & | & 2 \\
    0 & 1 & 0 & | & -1 \\
    0 & 0 & 1 & | & 3
    \end{bmatrix}
    $$
The solution is $x=2, y=-1, z=3$.

**Conceptual Question 2:**
For a system $\mathbf{Ax} = \mathbf{b}$ where $\mathbf{A}$ is an $n \times n$ matrix, if $\text{rank}(\mathbf{A}) = k < n$, what can you say about the solutions to the system, assuming it is consistent?

**Answer:**
If the system $\mathbf{Ax} = \mathbf{b}$ is consistent and $\text{rank}(\mathbf{A}) = k < n$ (where $n$ is the number of variables), then there are infinitely many solutions. The number of free variables (variables that can be chosen arbitrarily) is $n-k$. The set of all solutions can be expressed as a particular solution plus the general solution to the homogeneous system $\mathbf{Ax} = \mathbf{0}$. This is directly related to the null space of $\mathbf{A}$, which has dimension $n-k$ (nullity).

---
This covers our introduction to linear systems of equations. We've laid the groundwork for much of what we'll do in this course. Keep practicing these techniques, and don't hesitate to ask questions!
