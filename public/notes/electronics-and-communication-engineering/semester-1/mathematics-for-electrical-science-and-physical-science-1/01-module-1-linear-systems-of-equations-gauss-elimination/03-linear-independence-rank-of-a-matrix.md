---
title: "Linear Independence: rank of a matrix"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9faf"
status: "completed"
scrapedAt: "2026-05-23T17:34:39.420Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 1: Linear Systems of Equations: Gauss Elimination

### Topic: Linear Independence and Rank of a Matrix

Welcome back, everyone! In our journey through the fascinating world of linear algebra, we've already explored how to solve systems of linear equations using Gaussian elimination. Today, we're diving into two deeply interconnected concepts that are absolutely fundamental to understanding the behaviour and structure of linear systems: **Linear Independence** and the **Rank of a Matrix**.

Why are these concepts so important? Think about it: when we're modeling physical phenomena or designing electrical circuits, we often represent these systems using sets of equations. Understanding whether these equations are giving us truly *new* information, or if some are redundant, is crucial. This is where linear independence and rank come into play. They tell us about the essential "information content" of our system.

This topic directly supports **Course Outcome 1: Solve systems of linear equations and diagonalize matrices.** By understanding linear independence and rank, we gain deeper insights into the nature of solutions to linear systems and the properties of matrices, which are prerequisites for diagonalization.

Let's begin by demystifying **Linear Independence**.

---

### What is Linear Independence?

Imagine you have a set of vectors, say $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k$. We say this set of vectors is **linearly independent** if the *only* way to form the zero vector ($\mathbf{0}$) by taking a linear combination of these vectors is by setting all the scalar coefficients to zero.

In mathematical terms, a set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ is linearly independent if the equation:

$c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_k \mathbf{v}_k = \mathbf{0}$

has only the trivial solution $c_1 = c_2 = \dots = c_k = 0$.

#### An Analogy: Building Blocks

Think of vectors as building blocks. If you have a set of building blocks that are linearly independent, it means that each block brings something fundamentally new to the table. You can't create one block by combining others. For instance, if you have blocks representing "forward movement" and "sideways movement" in 2D space, they are independent. You can't make a "forward" block just by adding "sideways" blocks. However, if you had a "forward" block, a "sideways" block, and a third block that was just "two steps forward", this third block would be redundant – it's simply twice the "forward" block. So, the set {forward, sideways, two steps forward} would be **linearly dependent**.

#### Connecting to Systems of Equations

When we talk about linear independence in the context of systems of linear equations, we're often looking at the rows or columns of the coefficient matrix.

Consider a system $A\mathbf{x} = \mathbf{b}$. If the *columns* of matrix $A$ are linearly dependent, it implies that some columns can be expressed as a combination of others. This often means there's redundancy in the information provided by the equations, potentially leading to either no unique solution or infinitely many solutions.

Similarly, if the *rows* of matrix $A$ are linearly dependent, it means one or more equations can be derived from the others. This is precisely what Gaussian elimination helps us uncover – it systematically eliminates these dependent rows by row operations until we reach a simplified form.

---

### How to Check for Linear Independence?

The definition itself provides the method! Given a set of vectors, we set up the equation $c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_k \mathbf{v}_k = \mathbf{0}$ and try to solve for the coefficients $c_i$. If the *only* solution is $c_1 = c_2 = \dots = c_k = 0$, they are linearly independent.

Let's make this concrete with an example.

**Example 1: Checking Linear Independence of Vectors**

Are the following vectors linearly independent?
$\mathbf{v}_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$, $\mathbf{v}_2 = \begin{pmatrix} 0 \\ 1 \\ 4 \end{pmatrix}$, $\mathbf{v}_3 = \begin{pmatrix} 1 \\ 3 \\ 7 \end{pmatrix}$

We set up the equation $c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + c_3 \mathbf{v}_3 = \mathbf{0}$:

$c_1 \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ 1 \\ 4 \end{pmatrix} + c_3 \begin{pmatrix} 1 \\ 3 \\ 7 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$

This vector equation translates into a system of linear equations:

1. $c_1 + 0c_2 + c_3 = 0 \implies c_1 + c_3 = 0$
2. $2c_1 + c_2 + 3c_3 = 0$
3. $3c_1 + 4c_2 + 7c_3 = 0$

We can represent this system in matrix form:

$\begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 3 \\ 3 & 4 & 7 \end{pmatrix} \begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$

To solve this, we can use Gaussian elimination on the augmented matrix $\begin{pmatrix} 1 & 0 & 1 & | & 0 \\ 2 & 1 & 3 & | & 0 \\ 3 & 4 & 7 & | & 0 \end{pmatrix}$.

Let's perform the row operations:
$R_2 \leftarrow R_2 - 2R_1$
$R_3 \leftarrow R_3 - 3R_1$

$\begin{pmatrix} 1 & 0 & 1 & | & 0 \\ 0 & 1 & 1 & | & 0 \\ 0 & 4 & 4 & | & 0 \end{pmatrix}$

Now, $R_3 \leftarrow R_3 - 4R_2$:

$\begin{pmatrix} 1 & 0 & 1 & | & 0 \\ 0 & 1 & 1 & | & 0 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$

The last row of zeros tells us something very important! It means that the third equation ($0c_1 + 0c_2 + 0c_3 = 0$) is redundant. It doesn't impose any new constraints on $c_1, c_2, c_3$. Looking at the first two rows, we have:

$c_1 + c_3 = 0 \implies c_1 = -c_3$
$c_2 + c_3 = 0 \implies c_2 = -c_3$

This system has infinitely many solutions. We can choose $c_3$ to be any value (say, $c_3 = 1$), and then $c_1 = -1$ and $c_2 = -1$.

So, we found coefficients $c_1 = -1, c_2 = -1, c_3 = 1$ (not all zero) such that $-1\mathbf{v}_1 - 1\mathbf{v}_2 + 1\mathbf{v}_3 = \mathbf{0}$.
Let's quickly check:
$-(1, 2, 3)^T - (0, 1, 4)^T + (1, 3, 7)^T = (-1, -2, -3)^T + (0, -1, -4)^T + (1, 3, 7)^T = (-1+0+1, -2-1+3, -3-4+7)^T = (0, 0, 0)^T$.
Indeed!

Since we found non-zero coefficients, the vectors $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ are **linearly dependent**.

**Key takeaway here:** The presence of a row of zeros in the row-echelon form of the matrix representing the system $c_1 \mathbf{v}_1 + \dots + c_k \mathbf{v}_k = \mathbf{0}$ indicates linear dependence.

---

### Introducing the Rank of a Matrix

Now, let's talk about the **Rank of a Matrix**. You might have heard the term "rank" in other contexts, but in linear algebra, it has a very specific and powerful meaning.

The rank of a matrix $A$, denoted as $\text{rank}(A)$ or $r(A)$, is defined in a few equivalent ways, but the one most directly related to our Gaussian elimination work is:

**Definition:** The rank of a matrix is the number of non-zero rows in its row-echelon form (or reduced row-echelon form).

Remember how Gaussian elimination transforms a matrix into a simpler form, often with leading '1's and zeros below them? The non-zero rows in that final form are the ones that contain essential, independent information.

#### Rank and Linear Independence of Rows/Columns

This definition is deeply connected to linear independence.
*   The rank of a matrix is equal to the maximum number of linearly independent rows it has.
*   The rank of a matrix is also equal to the maximum number of linearly independent columns it has.

This is a monumental result from linear algebra. It means the "rank" is a single number that quantifies the extent of linear independence within both the rows and the columns of the matrix.

#### How Gaussian Elimination Helps Us Find the Rank

This is where our Gauss elimination skills shine! The process of transforming a matrix into row-echelon form (or reduced row-echelon form) using elementary row operations *does not change the row space* of the matrix, and more importantly for us, *it does not change the number of linearly independent rows*.

So, to find the rank of a matrix $A$:
1.  Apply Gaussian elimination to transform $A$ into its row-echelon form.
2.  Count the number of non-zero rows in the resulting row-echelon form. This count is the rank of $A$.

**Example 2: Finding the Rank of a Matrix**

Let's find the rank of the matrix $A$ from our previous vector example:
$A = \begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 3 \\ 3 & 4 & 7 \end{pmatrix}$

We already performed the Gaussian elimination on its augmented form and arrived at:
$\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$

This is the row-echelon form. How many non-zero rows does it have?
Row 1: (1 0 1) - Non-zero
Row 2: (0 1 1) - Non-zero
Row 3: (0 0 0) - Zero row

There are **two** non-zero rows.
Therefore, the rank of matrix $A$ is 2.

$\text{rank}(A) = 2$.

This tells us that matrix $A$ has 2 linearly independent rows and, crucially, 2 linearly independent columns. The third column is a linear combination of the first two (which we saw when $c_1=-1, c_2=-1, c_3=1$ satisfied the equation).

#### Why is Rank So Important? Connecting to Systems of Equations ($A\mathbf{x} = \mathbf{b}$)

The rank of the coefficient matrix $A$ and the rank of the augmented matrix $[A|\mathbf{b}]$ tell us a lot about the solutions to a system of linear equations $A\mathbf{x} = \mathbf{b}$. This is directly relevant to **Course Outcome 1**.

Let $A$ be an $m \times n$ matrix ( $m$ equations, $n$ variables). Let $r = \text{rank}(A)$.

1.  **Consistent System:** A system $A\mathbf{x} = \mathbf{b}$ has at least one solution (it's consistent) if and only if $\text{rank}(A) = \text{rank}([A|\mathbf{b}])$.
    *   **Think about it:** If the ranks are different, it means that appending the vector $\mathbf{b}$ introduces a dependency that wasn't there in $A$ itself. This usually happens when $\mathbf{b}$ cannot be formed by a linear combination of the columns of $A$.

2.  **Unique Solution:** If the system is consistent *and* $\text{rank}(A) = n$ (the number of variables), then there is a **unique** solution.
    *   **Why?** If $\text{rank}(A) = n$, it means all $n$ columns of $A$ are linearly independent, forming a basis for the column space. The number of free variables is $n - \text{rank}(A)$. If $\text{rank}(A) = n$, then $n-n=0$ free variables, meaning each variable has a specific determined value.

3.  **Infinitely Many Solutions:** If the system is consistent *and* $\text{rank}(A) < n$, then there are **infinitely many** solutions.
    *   **Why?** In this case, $n - \text{rank}(A)$ is the number of free variables. If this number is greater than zero, you can choose values for these free variables, which then determine the values of the dependent variables, leading to an infinite family of solutions.

4.  **Inconsistent System:** If $\text{rank}(A) < \text{rank}([A|\mathbf{b}])$, the system has **no solution**.

#### Example 3: Using Rank to Analyze Solutions

Consider the system:
$x + 2y - z = 3$
$2x + y + z = 0$
$3x + 3y = 3$

The coefficient matrix is $A = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 1 & 1 \\ 3 & 3 & 0 \end{pmatrix}$ and the augmented matrix is $[A|\mathbf{b}] = \begin{pmatrix} 1 & 2 & -1 & | & 3 \\ 2 & 1 & 1 & | & 0 \\ 3 & 3 & 0 & | & 3 \end{pmatrix}$.

Let's find the row-echelon form of $[A|\mathbf{b}]$:
$R_2 \leftarrow R_2 - 2R_1$
$R_3 \leftarrow R_3 - 3R_1$

$\begin{pmatrix} 1 & 2 & -1 & | & 3 \\ 0 & -3 & 3 & | & -6 \\ 0 & -3 & 3 & | & -6 \end{pmatrix}$

Now, $R_2 \leftarrow -\frac{1}{3}R_2$:

$\begin{pmatrix} 1 & 2 & -1 & | & 3 \\ 0 & 1 & -1 & | & 2 \\ 0 & -3 & 3 & | & -6 \end{pmatrix}$

And $R_3 \leftarrow R_3 + 3R_2$:

$\begin{pmatrix} 1 & 2 & -1 & | & 3 \\ 0 & 1 & -1 & | & 2 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$

This is the row-echelon form of the augmented matrix.
Now, let's consider just the matrix $A$ and find its row-echelon form:

$A = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 1 & 1 \\ 3 & 3 & 0 \end{pmatrix}$

Applying the same row operations as above:
$R_2 \leftarrow R_2 - 2R_1$
$R_3 \leftarrow R_3 - 3R_1$

$\begin{pmatrix} 1 & 2 & -1 \\ 0 & -3 & 3 \\ 0 & -3 & 3 \end{pmatrix}$

$R_2 \leftarrow -\frac{1}{3}R_2$:

$\begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & -1 \\ 0 & -3 & 3 \end{pmatrix}$

$R_3 \leftarrow R_3 + 3R_2$:

$\begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{pmatrix}$

Now we can determine the ranks:
*   $\text{rank}(A)$: The row-echelon form of $A$ has 2 non-zero rows. So, $\text{rank}(A) = 2$.
*   $\text{rank}([A|\mathbf{b}])$: The row-echelon form of $[A|\mathbf{b}]$ also has 2 non-zero rows. So, $\text{rank}([A|\mathbf{b}]) = 2$.

Since $\text{rank}(A) = \text{rank}([A|\mathbf{b}]) = 2$, the system is **consistent**.

The number of variables is $n=3$. We have $\text{rank}(A) = 2$, which is less than $n=3$.
Therefore, the system has **infinitely many solutions**. The number of free variables is $n - \text{rank}(A) = 3 - 2 = 1$.

We can find the general solution from the row-echelon form of the augmented matrix:
$\begin{pmatrix} 1 & 2 & -1 & | & 3 \\ 0 & 1 & -1 & | & 2 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$

This translates to:
$x + 2y - z = 3$
$y - z = 2$

From the second equation, $y = 2 + z$. Let $z$ be our free variable (parameter), say $z=t$.
Then $y = 2+t$.
Substitute $y$ and $z$ into the first equation:
$x + 2(2+t) - t = 3$
$x + 4 + 2t - t = 3$
$x + 4 + t = 3$
$x = -1 - t$

So, the solutions are of the form $(x, y, z) = (-1-t, 2+t, t)$, where $t$ is any real number. This confirms infinitely many solutions.

**Common Pitfall:** Students sometimes forget to check the rank of the *augmented* matrix or mistakenly compare the rank of $A$ to the number of *equations* ($m$) instead of the number of *variables* ($n$) when determining the nature of solutions. Always remember $n$ for the number of variables!

---

### Linear Independence of Vectors in Different Contexts

Let's tie this back to our initial discussion of linear independence and how it relates to the structure of matrices.

*   **Columns of a Matrix:** The rank of a matrix $A$ is also the dimension of its column space, which is the span of its column vectors. This means the rank is the maximum number of linearly independent columns. If $\text{rank}(A) < n$ (number of columns), the columns are linearly dependent.
*   **Rows of a Matrix:** Similarly, the rank of a matrix $A$ is the dimension of its row space, which is the span of its row vectors. This means the rank is the maximum number of linearly independent rows. If $\text{rank}(A) < m$ (number of rows), the rows are linearly dependent.

This is a fundamental aspect that underpins much of linear algebra and its applications in science and engineering, as discussed in texts like Kreyszig's *Advanced Engineering Mathematics*. The rank provides a concise measure of the intrinsic dimensionality and redundancy within a set of vectors or a system of equations.

#### What about Homogeneous Systems? ($A\mathbf{x} = \mathbf{0}$)

For a homogeneous system $A\mathbf{x} = \mathbf{0}$, the system is *always* consistent because $\mathbf{x} = \mathbf{0}$ is always a solution.
The nature of solutions depends solely on $\text{rank}(A)$:

*   If $\text{rank}(A) = n$ (number of variables), the only solution is the trivial solution $\mathbf{x} = \mathbf{0}$. This means the columns of $A$ are linearly independent.
*   If $\text{rank}(A) < n$, there are infinitely many non-trivial solutions. This means the columns of $A$ are linearly dependent.

This connects directly to **Course Outcome 1** as understanding the existence of non-trivial solutions is key to analyzing many systems, from circuit analysis to structural mechanics.

---

### Summary and Key Takeaways

Let's recap the essentials of linear independence and rank.

*   **Linear Independence:** A set of vectors is linearly independent if the only way to form the zero vector as a linear combination of them is by using all zero coefficients. If non-zero coefficients exist, they are linearly dependent.
*   **Rank of a Matrix:** The rank is the number of non-zero rows in its row-echelon form. Crucially, it's also the maximum number of linearly independent rows and the maximum number of linearly independent columns.
*   **Gaussian Elimination is Key:** The most practical way to find the rank is by using Gaussian elimination to reduce the matrix to row-echelon form and counting the non-zero rows.
*   **Rank and Solutions:** The ranks of the coefficient matrix $A$ and the augmented matrix $[A|\mathbf{b}]$ are vital for determining the consistency and number of solutions for $A\mathbf{x} = \mathbf{b}$:
    *   Consistent if $\text{rank}(A) = \text{rank}([A|\mathbf{b}])$.
    *   Unique solution if consistent and $\text{rank}(A) = n$ (number of variables).
    *   Infinite solutions if consistent and $\text{rank}(A) < n$.
    *   No solution if $\text{rank}(A) < \text{rank}([A|\mathbf{b}])$.

Remember this: Rank is a powerful concept that unifies our understanding of linear dependencies within matrices and the solvability of linear systems. It's a core tool you'll use constantly in your studies.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
What does it mean for a set of vectors to be linearly dependent? Give an everyday analogy.

**Answer:**
A set of vectors is linearly dependent if one or more of the vectors can be expressed as a linear combination of the others. Alternatively, it means there exist non-zero scalar coefficients $c_1, c_2, \dots, c_k$ such that $c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_k \mathbf{v}_k = \mathbf{0}$.

**Analogy:** Imagine you are packing a suitcase. If you have a shirt, a pair of trousers, and a t-shirt, and the t-shirt is just a different colour of the same shirt, then the t-shirt is "redundant" information in terms of clothing types. You can't create a shirt by combining trousers and t-shirts, but you could say the "blue shirt" is just a specific instance of a "shirt". If you had "shirt A", "shirt B", and "shirt C which is identical to shirt A", then {shirt A, shirt B, shirt C} is a linearly dependent set of clothing items because shirt C is a multiple of shirt A (specifically, $0 \cdot \text{shirt A} + 1 \cdot \text{shirt C} = \text{shirt C}$ but more to the point, $1 \cdot \text{shirt A} + 0 \cdot \text{shirt B} - 1 \cdot \text{shirt C} = \mathbf{0}$ if we consider them as vectors of "features" and one is a copy). A better analogy might be colours: Red, Yellow, and Green (as in traffic lights) are linearly independent. Red, Yellow, and "Reddish-Yellow" would be linearly dependent because "Reddish-Yellow" can be described using combinations of Red and Yellow.

**Question 2 (Exam-Oriented):**
Determine the rank of the matrix:
$M = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$

**Solution:**
To find the rank, we perform Gaussian elimination to transform $M$ into row-echelon form.

Start with $M$:
$\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$

Apply row operations:
$R_2 \leftarrow R_2 - 4R_1$
$R_3 \leftarrow R_3 - 7R_1$

$\begin{pmatrix} 1 & 2 & 3 \\ 0 & 5 - 4(2) & 6 - 4(3) \\ 0 & 8 - 7(2) & 9 - 7(3) \end{pmatrix} = \begin{pmatrix} 1 & 2 & 3 \\ 0 & -3 & -6 \\ 0 & -6 & -12 \end{pmatrix}$

Now, simplify $R_2$:
$R_2 \leftarrow -\frac{1}{3}R_2$

$\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & -6 & -12 \end{pmatrix}$

Finally, eliminate the entry in $R_3$:
$R_3 \leftarrow R_3 + 6R_2$

$\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & -6 + 6(1) & -12 + 6(2) \end{pmatrix} = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{pmatrix}$

This is the row-echelon form of $M$. We count the number of non-zero rows. There are 2 non-zero rows.
Therefore, the rank of matrix $M$ is 2.

**Question 3 (Application to Systems):**
Consider the system of linear equations:
$x + y + z = 1$
$2x + 2y + 2z = 2$
$x - y + z = 3$

Use the concept of rank to determine if this system has a unique solution, infinitely many solutions, or no solution.

**Solution:**
The system can be written in matrix form $A\mathbf{x} = \mathbf{b}$, where:
$A = \begin{pmatrix} 1 & 1 & 1 \\ 2 & 2 & 2 \\ 1 & -1 & 1 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$

The augmented matrix is $[A|\mathbf{b}] = \begin{pmatrix} 1 & 1 & 1 & | & 1 \\ 2 & 2 & 2 & | & 2 \\ 1 & -1 & 1 & | & 3 \end{pmatrix}$.

We apply Gaussian elimination to the augmented matrix:
$R_2 \leftarrow R_2 - 2R_1$
$R_3 \leftarrow R_3 - R_1$

$\begin{pmatrix} 1 & 1 & 1 & | & 1 \\ 0 & 2 - 2(1) & 2 - 2(1) & | & 2 - 2(1) \\ 0 & -1 - 1 & 1 - 1 & | & 3 - 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 & 1 & | & 1 \\ 0 & 0 & 0 & | & 0 \\ 0 & -2 & 0 & | & 2 \end{pmatrix}$

Now, let's swap $R_2$ and $R_3$ for convenience and then simplify $R_3$:
$R_2 \leftrightarrow R_3$

$\begin{pmatrix} 1 & 1 & 1 & | & 1 \\ 0 & -2 & 0 & | & 2 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$

$R_2 \leftarrow -\frac{1}{2}R_2$

$\begin{pmatrix} 1 & 1 & 1 & | & 1 \\ 0 & 1 & 0 & | & -1 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$

Now we analyze the ranks:
*   The row-echelon form of the augmented matrix $[A|\mathbf{b}]$ has 2 non-zero rows. So, $\text{rank}([A|\mathbf{b}]) = 2$.

To find $\text{rank}(A)$, we look at the first $n=3$ columns of the row-echelon form:
The matrix $A$ in row-echelon form (considering only the first 3 columns) is effectively:
$\begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$
This has 2 non-zero rows. So, $\text{rank}(A) = 2$.

Since $\text{rank}(A) = \text{rank}([A|\mathbf{b}]) = 2$, the system is consistent.
The number of variables is $n=3$.
We have $\text{rank}(A) = 2 < n = 3$.

Therefore, the system has **infinitely many solutions**.
(The second equation $2x+2y+2z=2$ is redundant as it's twice the first equation, meaning it doesn't add new information. This leads to one free variable.)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
