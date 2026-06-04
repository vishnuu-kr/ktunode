---
title: "Fundamental theorem for linear systems - homogeneous and non-homogeneous (without proof)"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 1: Linear systems of equations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d0b"
status: "completed"
scrapedAt: "2026-05-20T16:34:30.824Z"
---
# MATHEMATICS FOR INFORMATION SCIENCE – 2

## Module 1: Linear Systems of Equations

### Topic: The Fundamental Theorem for Linear Systems – Homogeneous and Non-Homogeneous

Welcome, everyone, to our journey into the heart of linear algebra! In this module, we're tackling the very foundation of solving systems of equations. Understanding *when* and *how* solutions exist is crucial, and that's exactly what the Fundamental Theorem for Linear Systems will illuminate for us. It's like having a roadmap that tells you if your destination is reachable and what kind of paths are available.

Our goal here is to understand the core principles governing linear systems. This isn't just about crunching numbers; it's about grasping the underlying structure. And believe me, this structure is fundamental not just for solving problems, but for many concepts we'll encounter later in information science, from data analysis to machine learning. This topic directly supports **CO1: Solve system of linear equations...**, by providing the theoretical bedrock for *why* our solution methods work.

So, let's dive in!

---

### Understanding Linear Systems: A Quick Refresher

Before we hit the "fundamental theorem," let's quickly recap what we mean by a "linear system of equations." You've seen these before:

A system of $m$ linear equations in $n$ variables, say $x_1, x_2, \dots, x_n$, looks like this:

$a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2$
$\vdots$
$a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m$

We can express this compactly using matrices. Let:

*   **A** be the coefficient matrix:
    $$A = \begin{bmatrix}
    a_{11} & a_{12} & \dots & a_{1n} \\
    a_{21} & a_{22} & \dots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{m1} & a_{m2} & \dots & a_{mn}
    \end{bmatrix}$$
*   **x** be the variable vector:
    $$x = \begin{bmatrix}
    x_1 \\
    x_2 \\
    \vdots \\
    x_n
    \end{bmatrix}$$
*   **b** be the constant vector:
    $$b = \begin{bmatrix}
    b_1 \\
    b_2 \\
    \vdots \\
    b_m
    \end{bmatrix}$$

Then the system can be written as the matrix equation:

$Ax = b$

This matrix form is incredibly powerful. It allows us to use the properties of matrices to understand the solutions to the system. Think of it like going from describing individual ingredients (equations) to understanding the entire recipe (matrix equation) and its potential outcomes.

---

### Two Flavors of Linear Systems: Homogeneous and Non-Homogeneous

The nature of the constant vector **b** divides our linear systems into two main categories, and this distinction is absolutely central to the fundamental theorem.

#### 1. Homogeneous Linear Systems

A homogeneous linear system is one where all the constants on the right-hand side of the equations are zero. In matrix form, this means **b** is the zero vector:

$Ax = 0$

where $0$ is the $m \times 1$ zero vector.

**What's special about homogeneous systems?** Well, right away, we can see that $x_1 = 0, x_2 = 0, \dots, x_n = 0$ (the **trivial solution**) is *always* a solution to $Ax = 0$. Why? Because if you plug in all zeros for $x_i$, every equation becomes $0 = 0$.

**Example:**
Consider the system:
$2x_1 + x_2 - x_3 = 0$
$x_1 - x_2 + 2x_3 = 0$

In matrix form:
$$
\begin{bmatrix}
2 & 1 & -1 \\
1 & -1 & 2
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0
\end{bmatrix}
$$

We know immediately that $x_1=0, x_2=0, x_3=0$ is a solution. But are there others? This is where the fundamental theorem will help us.

**Analogy:** Imagine you're checking if a set of wires is correctly connected in a circuit. A homogeneous system is like checking if, when no external power is applied (the "zeros" on the right), there's still some residual current flowing without any cause. The trivial solution means no current flows, which is perfectly normal. But if you find *other* ways for current to flow (non-trivial solutions), it might indicate a short circuit or a fault.

#### 2. Non-Homogeneous Linear Systems

A non-homogeneous linear system is one where at least one of the constants on the right-hand side is non-zero. So, **b** is *not* the zero vector:

$Ax = b$, where $b \neq 0$.

**Example:**
Consider the system:
$2x_1 + x_2 - x_3 = 5$
$x_1 - x_2 + 2x_3 = -1$

In matrix form:
$$
\begin{bmatrix}
2 & 1 & -1 \\
1 & -1 & 2
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
=
\begin{bmatrix}
5 \\
-1
\end{bmatrix}
$$

Here, $x_1=0, x_2=0, x_3=0$ is *not* a solution, because plugging them in would give $0=5$ and $0=-1$, which are false. Non-homogeneous systems are about whether there's a "cause" (the non-zero vector **b**) that leads to a "result" (a set of values for $x_i$).

**Analogy:** This is like trying to make a specific output from a machine. The non-zero vector **b** represents the desired output. The question is: can the machine (matrix A) produce this output with certain inputs ($x$)? And if so, how many different sets of inputs can achieve it?

---

### The Heart of the Matter: The Fundamental Theorem

Now, let's get to the core. The Fundamental Theorem for Linear Systems, as presented in texts like Kreyszig's "Advanced Engineering Mathematics" and Larson's "Elementary Linear Algebra," tells us about the existence and nature of solutions. It bridges the gap between the properties of the coefficient matrix **A** and the solution set of $Ax = b$.

The theorem essentially states that the solution set of a non-homogeneous system $Ax = b$ is directly related to the solution set of its corresponding homogeneous system $Ax = 0$.

Let's break this down.

#### Key Concepts: Rank and Nullity (Crucial for Understanding Solutions)

To state the theorem precisely, we need two fundamental concepts:

1.  **Rank of a Matrix (rank(A))**: This is the dimension of the column space (or row space) of matrix A. In simpler terms, it's the maximum number of linearly independent columns (or rows) in the matrix. Think of it as the "effective" number of dimensions that the matrix can "transform" vectors into. A higher rank means more "information" or "potential" in the matrix.

2.  **Nullity of a Matrix (nullity(A))**: This is the dimension of the null space (or kernel) of matrix A. The null space of A, denoted as $N(A)$, is the set of all solutions to the homogeneous equation $Ax = 0$. So, nullity(A) is the dimension of the solution space of $Ax = 0$. If nullity(A) is greater than zero, it means there are non-trivial solutions to $Ax=0$.

**The Rank-Nullity Theorem (A Powerful Connection)**

This is a critical result that connects rank and nullity. For any $m \times n$ matrix A, the following holds:

**rank(A) + nullity(A) = n**

where $n$ is the number of columns in A (which is also the number of variables in our system).

This theorem is incredibly insightful. It tells us that the dimension of the "output space" (rank) and the dimension of the "solution space for $Ax=0$" (nullity) must add up to the total number of input dimensions (variables). If the rank is high, the nullity must be low, meaning fewer non-trivial solutions for the homogeneous system. If the rank is low, the nullity must be high, meaning many non-trivial solutions. This aligns with **CO1**, as understanding rank and nullity is key to solving systems of equations.

**Example of Rank-Nullity:**
Consider the matrix from our earlier homogeneous example:
$$A = \begin{bmatrix}
2 & 1 & -1 \\
1 & -1 & 2
\end{bmatrix}$$
This is a $2 \times 3$ matrix, so $m=2$ and $n=3$. The number of variables is 3.
If we were to perform row reduction, we would find that the rank of A is 2 (there are two linearly independent rows/columns).
Using the Rank-Nullity Theorem:
rank(A) + nullity(A) = n
2 + nullity(A) = 3
nullity(A) = 1

This means the solution space for $Ax=0$ has dimension 1. This tells us that the solutions to $Ax=0$ will form a line through the origin in 3D space (a 1-dimensional subspace).

#### The Fundamental Theorem: Existence and Structure of Solutions

Now, let's put it all together for the system $Ax = b$ (where A is $m \times n$):

**Part 1: Existence of Solutions**

A system $Ax = b$ has at least one solution if and only if **b** is in the column space of A.

*   **What does this mean?** The column space of A, denoted $Col(A)$, is the set of all possible vectors **y** that can be formed by linear combinations of the columns of A. In other words, $Col(A) = \{Ax \mid x \in \mathbb{R}^n\}$.
*   **Intuitive explanation:** The matrix A acts as a linear transformation. The column space is the set of all possible "outputs" that the transformation A can produce. If the vector **b** is one of these possible outputs (i.e., **b** is in $Col(A)$), then there must exist some input vector **x** that produces **b**. If **b** is *not* in the column space of A, then no matter what input **x** you try, you can never get **b** as an output, and the system $Ax=b$ has no solution.
*   **Connection to Rank:** The dimension of the column space is precisely the rank of A. So, a system $Ax=b$ has a solution if and only if rank([A | b]) = rank(A). The augmented matrix [A | b] includes the **b** vector. If adding **b** increases the rank, it means **b** was not linearly dependent on the columns of A, thus not in the column space. This is a crucial check for consistency of the system. This directly relates to **CO1**.

**Part 2: The Nature of the Solution Set**

If a system $Ax = b$ has at least one particular solution, let's call it $x_p$, then the set of *all* solutions to $Ax = b$ is given by:

**Solution Set = { $x_p + x_h$  | $x_h$ is any solution to the homogeneous system $Ax = 0$ }**

*   **In simpler terms:** If you find *one* way to satisfy the non-homogeneous system ($x_p$), then all other ways to satisfy it are found by taking that one solution and adding to it *any* solution of the corresponding homogeneous system ($x_h$).
*   **Visualizing this:** Think of the solution set of $Ax=0$ as a subspace (like a line through the origin, a plane through the origin, etc., depending on the nullity). The solution set of $Ax=b$ is simply a "translation" or "shift" of this subspace by the particular solution $x_p$. It's the same "shape" and "size" as the homogeneous solution space, just located elsewhere in the vector space.
*   **Implications:**
    *   If the homogeneous system $Ax=0$ has only the trivial solution ($x_h = 0$ is the only solution, meaning nullity(A) = 0), then if $Ax=b$ has a solution $x_p$, that solution is *unique*.
    *   If the homogeneous system $Ax=0$ has infinitely many solutions (meaning nullity(A) > 0), then if $Ax=b$ has a solution $x_p$, it will have *infinitely many* solutions.

**Example:**
Let's go back to:
$2x_1 + x_2 - x_3 = 5$
$x_1 - x_2 + 2x_3 = -1$

We previously calculated rank(A) = 2 and nullity(A) = 1 for the matrix $A = \begin{bmatrix} 2 & 1 & -1 \\ 1 & -1 & 2 \end{bmatrix}$.
Let's assume we use Gaussian elimination and find a particular solution, say $x_p = \begin{bmatrix} 1 \\ 0 \\ -2 \end{bmatrix}$ (you can check that this indeed satisfies the system: $2(1)+0-(-2)=4 \neq 5$... hmm, let's find a correct one. Let's use row reduction on the augmented matrix:

Augmented matrix:
$$
\left[\begin{array}{ccc|c}
2 & 1 & -1 & 5 \\
1 & -1 & 2 & -1
\end{array}\right]
$$
Swap R1 and R2:
$$
\left[\begin{array}{ccc|c}
1 & -1 & 2 & -1 \\
2 & 1 & -1 & 5
\end{array}\right]
$$
$R2 \leftarrow R2 - 2R1$:
$$
\left[\begin{array}{ccc|c}
1 & -1 & 2 & -1 \\
0 & 3 & -5 & 7
\end{array}\right]
$$
From the second row: $3x_2 - 5x_3 = 7$. Let $x_3 = t$ (our free variable).
Then $3x_2 = 7 + 5t \implies x_2 = \frac{7}{3} + \frac{5}{3}t$.
From the first row: $x_1 - x_2 + 2x_3 = -1$.
$x_1 = x_2 - 2x_3 - 1 = (\frac{7}{3} + \frac{5}{3}t) - 2t - 1 = \frac{7}{3} + \frac{5}{3}t - \frac{6}{3}t - \frac{3}{3} = \frac{4}{3} - \frac{1}{3}t$.

So the general solution is:
$$
x = \begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
= \begin{bmatrix}
\frac{4}{3} - \frac{1}{3}t \\
\frac{7}{3} + \frac{5}{3}t \\
t
\end{bmatrix}
= \begin{bmatrix}
\frac{4}{3} \\
\frac{7}{3} \\
0
\end{bmatrix}
+ t \begin{bmatrix}
-\frac{1}{3} \\
\frac{5}{3} \\
1
\end{bmatrix}
$$

Here, a particular solution $x_p = \begin{bmatrix} \frac{4}{3} \\ \frac{7}{3} \\ 0 \end{bmatrix}$ and the homogeneous solution is $x_h = t \begin{bmatrix} -\frac{1}{3} \\ \frac{5}{3} \\ 1 \end{bmatrix}$.
Notice that $x_h$ is indeed a solution to $Ax=0$. If we plug $t=1$, we get $x = \begin{bmatrix} 4/3 - 1/3 \\ 7/3 + 5/3 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 12/3 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 4 \\ 1 \end{bmatrix}$. Let's check:
$2(1) + 4 - 1 = 2+4-1 = 5$ (Correct)
$1 - 4 + 2(1) = 1-4+2 = -1$ (Correct)

The fundamental theorem says that *any* solution to $Ax=b$ can be written as $x_p + x_h$. Since $t$ can be any real number, there are infinitely many solutions, which is consistent with our nullity of 1.

**Connection to Course Outcomes:**
This entire section directly supports **CO1: Solve system of linear equations**. Understanding whether a solution exists (Part 1) and what form it takes (Part 1 and Part 2) are the prerequisites for *how* to solve it using methods like Gaussian elimination. It also underpins **CO2: Understand the concepts of vector spaces and subspaces**, as the solution set of $Ax=0$ is a subspace, and the solution set of $Ax=b$ is an affine subspace.

---

### Practical Implications and How to Think About It

The Fundamental Theorem is not just abstract theory. It dictates how we approach solving systems and what we expect to find.

*   **Consistency Check:** The first thing to ask about any $Ax=b$ is: "Is it consistent?" This means, "Does **b** lie in the column space of A?" This is checked by comparing rank(A) and rank([A | b]). If they are different, stop! There's no solution. This is a crucial exam point!
*   **Uniqueness:** If the system is consistent, the next question is: "Is the solution unique?"
    *   For homogeneous systems $Ax=0$, the solution is *always* unique (the trivial solution) if and only if the nullity is zero, which means nullity(A) = 0, or rank(A) = n (number of variables). This means A is an $n \times n$ matrix with full rank.
    *   For non-homogeneous systems $Ax=b$, if it's consistent, the solution is unique if and only if the corresponding homogeneous system $Ax=0$ has only the trivial solution. Again, this means rank(A) = n.
*   **Infinitely Many Solutions:** If a system $Ax=b$ is consistent and the corresponding homogeneous system $Ax=0$ has non-trivial solutions (nullity(A) > 0, or rank(A) < n), then $Ax=b$ will have infinitely many solutions. This is very common in underdetermined systems or systems with redundant equations.

**Think about it like this:**

*   **Matrix A:** A "machine" that transforms input vectors ($x$) into output vectors ($Ax$).
*   **Column Space of A:** The "range" of possible outputs from machine A.
*   **Homogeneous System $Ax=0$:** Asking, "What inputs produce a zero output?" The set of these inputs forms the null space of A. Its dimension is the nullity.
*   **Non-Homogeneous System $Ax=b$:** Asking, "What inputs produce the specific output $b$?"
    *   If $b$ is not in the column space, it's impossible.
    *   If $b$ *is* in the column space, then you can find at least one input $x_p$.
    *   All other possible inputs are found by taking $x_p$ and adding any input that yields a zero output ($x_h$).

**Exam Tip:** When asked to determine the nature of solutions for a given linear system, the first steps are *always* to:
1.  Write it in matrix form $Ax=b$.
2.  Form the augmented matrix $[A|b]$.
3.  Perform Gaussian elimination to find the row echelon form (or reduced row echelon form).
4.  Determine rank(A) and rank([A|b]).
5.  Compare the ranks for consistency.
6.  If consistent, determine the number of free variables (which equals nullity(A)) to decide between a unique solution or infinitely many solutions.

This aligns with **CO1** by providing a systematic approach to solving.

---

### Summary of Key Takeaways

Let's recap the core ideas from the Fundamental Theorem for Linear Systems:

*   A system $Ax=b$ is **consistent** (has at least one solution) if and only if **b** is in the column space of A. This is equivalent to **rank(A) = rank([A|b])**.
*   If $Ax=b$ is consistent, and $x_p$ is one particular solution, then the general solution is $x_p + x_h$, where $x_h$ is any solution to the associated homogeneous system $Ax=0$.
*   The set of solutions to $Ax=0$ is the **null space** of A, and its dimension is the **nullity** of A.
*   The number of variables $n$ is equal to the sum of the rank and nullity of A: **rank(A) + nullity(A) = n**.
*   A system $Ax=b$ has a **unique solution** if and only if it is consistent and its corresponding homogeneous system $Ax=0$ has only the trivial solution. This occurs when **rank(A) = n**.
*   If a system $Ax=b$ is consistent and has non-trivial solutions for $Ax=0$ (i.e., nullity(A) > 0, or rank(A) < n), then it has **infinitely many solutions**.

Remember these points! They are the bedrock upon which all our techniques for solving linear systems are built. They tell us not just *if* we can find a solution, but also *how many* and *what form* they will take.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain the meaning of the statement: "A non-homogeneous linear system $Ax = b$ has infinitely many solutions if and only if the corresponding homogeneous system $Ax = 0$ has non-trivial solutions."

**Answer:**
This statement highlights a crucial aspect of the Fundamental Theorem for Linear Systems. If the system $Ax=b$ is consistent, its solution set is formed by taking a particular solution $x_p$ and adding to it all possible solutions $x_h$ of the homogeneous system $Ax=0$.
*   If $Ax=0$ has *only* the trivial solution ($x_h = 0$), then the only solution to $Ax=b$ is $x_p$, making it unique.
*   If $Ax=0$ has *non-trivial* solutions (meaning there are infinitely many $x_h$, forming a subspace of dimension greater than zero), then for any consistent $Ax=b$, we can add these infinitely many $x_h$ to $x_p$. This results in infinitely many solutions for $Ax=b$.
Essentially, the existence of non-trivial solutions for the homogeneous system provides the "degrees of freedom" that, when added to a particular solution of the non-homogeneous system, generate an infinite family of solutions. This relates to **CO1** and **CO2**.

**Question 2 (Exam-Oriented):**
Determine whether the following system has a unique solution, no solution, or infinitely many solutions. Justify your answer by referring to the ranks of the matrices involved.

$x_1 + 2x_2 - x_3 = 3$
$2x_1 + 4x_2 - 2x_3 = 6$
$3x_1 + 6x_2 - 3x_3 = 9$

**Answer:**
First, we write the system in matrix form $Ax=b$:
$$
A = \begin{bmatrix}
1 & 2 & -1 \\
2 & 4 & -2 \\
3 & 6 & -3
\end{bmatrix}, \quad b = \begin{bmatrix}
3 \\
6 \\
9
\end{bmatrix}
$$
Now, we form the augmented matrix $[A|b]$ and perform Gaussian elimination to find the row echelon form:

$$
[A|b] = \left[\begin{array}{ccc|c}
1 & 2 & -1 & 3 \\
2 & 4 & -2 & 6 \\
3 & 6 & -3 & 9
\end{array}\right]
$$
Apply row operations:
$R2 \leftarrow R2 - 2R1$
$R3 \leftarrow R3 - 3R1$
$$
\left[\begin{array}{ccc|c}
1 & 2 & -1 & 3 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{array}\right]
$$
From this row echelon form:
*   The rank of matrix A (number of non-zero rows in the coefficient part) is 1. So, rank(A) = 1.
*   The rank of the augmented matrix [A|b] (number of non-zero rows in the entire matrix) is also 1. So, rank([A|b]) = 1.

Since rank(A) = rank([A|b]), the system is **consistent**.

Now, let's consider the number of variables, which is $n=3$.
The number of free variables is $n - \text{rank}(A) = 3 - 1 = 2$.
Since there are free variables (the nullity of A is 2), the homogeneous system $Ax=0$ has non-trivial solutions.
Because the system is consistent and has non-trivial solutions for the homogeneous part, the non-homogeneous system $Ax=b$ has **infinitely many solutions**. This directly uses the principles of the fundamental theorem and supports **CO1**.

**Question 3 (Conceptual):**
What is the geometric interpretation of the solution set of $Ax=b$ when the corresponding homogeneous system $Ax=0$ has solutions that form a line through the origin in $\mathbb{R}^3$?

**Answer:**
If the solutions to the homogeneous system $Ax=0$ form a line through the origin in $\mathbb{R}^3$, this means the null space of A is a 1-dimensional subspace (a line). The fundamental theorem states that if the system $Ax=b$ is consistent, its solution set is of the form $\{x_p + x_h \mid x_h \in N(A)\}$, where $x_p$ is a particular solution and $N(A)$ is the null space.
Therefore, the solution set of $Ax=b$ will be a **line in $\mathbb{R}^3$ that is parallel to the line formed by the solutions of $Ax=0$, passing through the point $x_p$**. It's essentially a translation of the null space by the particular solution. This connects to **CO2**, visualizing vector spaces and their transformations.
