---
title: "Basis for a vector space"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 2: Vector Spaces"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d16"
status: "completed"
scrapedAt: "2026-05-20T16:34:38.023Z"
---
## Mathematics for Information Science – 2: Module 2 – Vector Spaces

### Topic: Basis for a Vector Space

Welcome, everyone! Today, we’re diving into a foundational concept in linear algebra that’s absolutely crucial for understanding how we represent and manipulate data in information science: the **basis** of a vector space. Think of it as the "building blocks" or the "fundamental ingredients" that define a whole space. Without understanding bases, concepts like dimension, coordinates, and even how we solve systems of linear equations efficiently become much harder to grasp.

This topic directly connects with our **Course Outcome 2 (CO2): Understand the concepts of vector spaces and subspaces and to apply their properties.** By the end of this discussion, you’ll see how bases are the key to unlocking the structure and behavior of vector spaces, which is essential for many applications we'll explore later, particularly in areas like data representation and dimensionality reduction.

#### 1. What is a Vector Space? (A Quick Refresher)

Before we talk about bases, let's quickly revisit what a vector space is. Imagine a collection of "things" – we call them vectors – that can be added together and multiplied by scalars (just numbers, like real numbers). These operations have to follow a set of rules, like the commutative property of addition (a+b = b+a) or the distributive property (a(v+w) = av + aw).

Common examples you're already familiar with include:
*   The set of all 2D vectors, $\mathbb{R}^2$, which you can visualize as arrows on a flat plane.
*   The set of all 3D vectors, $\mathbb{R}^3$, familiar from physics and geometry.
*   Even the set of all polynomials of degree up to $n$.

The reason vector spaces are so powerful is that they provide a unified framework for dealing with many different types of mathematical objects.

#### 2. Building Blocks: Linear Independence and Spanning Sets

To define a basis, we first need to understand two crucial properties of vectors: **linear independence** and **spanning**.

##### 2.1 Spanning: Can We Reach Everywhere?

Imagine you have a set of vectors. If you can take any vector in that set, multiply them by scalars, and add them up in any combination, and by doing so, you can create *every single other vector* in the entire vector space, then that set of vectors is said to **span** the vector space.

Think of it like this: Suppose you have two vectors, $\mathbf{v}_1 = (1, 0)$ and $\mathbf{v}_2 = (0, 1)$ in $\mathbb{R}^2$.
*   Can you create the vector $(3, 5)$? Yes! $3 \mathbf{v}_1 + 5 \mathbf{v}_2 = 3(1, 0) + 5(0, 1) = (3, 0) + (0, 5) = (3, 5)$.
*   Can you create $(x, y)$ for any real numbers $x$ and $y$? Yes! $x \mathbf{v}_1 + y \mathbf{v}_2 = x(1, 0) + y(0, 1) = (x, y)$.

So, the set $\{\mathbf{v}_1, \mathbf{v}_2\}$ spans $\mathbb{R}^2$.

**Analogy:** Think about building with LEGOs. If you have a set of specific LEGO bricks, and you can use *only* those bricks (and combinations of them) to build any possible LEGO model (within a certain complexity, perhaps), then those LEGO bricks form a "spanning set" for your building capabilities.

Formally, a set of vectors $S = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ in a vector space $V$ spans $V$ if every vector $\mathbf{v}$ in $V$ can be written as a linear combination of vectors in $S$:
$\mathbf{v} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_k \mathbf{v}_k$
for some scalars $c_1, c_2, \dots, c_k$. The set of all such linear combinations is called the **span** of $S$, denoted as $\text{span}(S)$. We say $S$ spans $V$ if $\text{span}(S) = V$.

##### 2.2 Linear Independence: Are the Vectors Redundant?

Now, what if some vectors in our set are "extra" – meaning they can be formed by combining the others? We want to avoid this redundancy. A set of vectors is **linearly independent** if none of the vectors in the set can be expressed as a linear combination of the others.

Let's go back to our $\mathbb{R}^2$ example with $\mathbf{v}_1 = (1, 0)$ and $\mathbf{v}_2 = (0, 1)$.
Is $\mathbf{v}_1$ a combination of $\mathbf{v}_2$? No.
Is $\mathbf{v}_2$ a combination of $\mathbf{v}_1$? No.
So, $\{\mathbf{v}_1, \mathbf{v}_2\}$ is linearly independent.

What if we added a third vector, say $\mathbf{v}_3 = (2, 3)$?
Notice that $\mathbf{v}_3 = 2\mathbf{v}_1 + 3\mathbf{v}_2$. Since $\mathbf{v}_3$ can be written as a linear combination of $\mathbf{v}_1$ and $\mathbf{v}_2$, the set $\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}$ is **linearly dependent**. The vector $\mathbf{v}_3$ is redundant; it doesn't add anything new in terms of what we can form.

The formal definition of linear independence is a bit more precise and often tested: A set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ is linearly independent if the only solution to the equation:
$c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_k \mathbf{v}_k = \mathbf{0}$ (the zero vector)
is the trivial solution where all scalars are zero: $c_1 = c_2 = \dots = c_k = 0$.

If there are non-zero scalars $c_i$ that satisfy the equation, then the set is linearly dependent. This is a key concept for solving systems of linear equations and understanding matrix rank, linking directly to **CO1**.

**Why is this important?** Linearly independent sets are efficient. They contain no redundant information. In information science, this often translates to efficient data representation, avoiding storage of duplicate information.

**Example (Larson, *Elementary Linear Algebra*):** Consider the vectors $\mathbf{v}_1 = (1, -2, 3)$ and $\mathbf{v}_2 = (5, 6, 7)$ and $\mathbf{v}_3 = (3, 2, 5)$ in $\mathbb{R}^3$. Are they linearly independent?
We set up the equation:
$c_1(1, -2, 3) + c_2(5, 6, 7) + c_3(3, 2, 5) = (0, 0, 0)$
This gives us a system of linear equations:
$c_1 + 5c_2 + 3c_3 = 0$
$-2c_1 + 6c_2 + 2c_3 = 0$
$3c_1 + 7c_2 + 5c_3 = 0$

We can solve this system using Gaussian elimination. If the only solution is $c_1=c_2=c_3=0$, they are linearly independent. If there are non-zero solutions, they are dependent. (You'll find in this specific case, there are non-zero solutions, so they are dependent.)

#### 3. The Magic Combination: Basis

Now that we have spanning sets and linearly independent sets, we can combine them to define a basis.

A **basis** for a vector space $V$ is a set of vectors that is both:
1.  **Linearly Independent**
2.  **Spans the Vector Space $V$**

Think of a basis as the *minimal set of building blocks* needed to construct the entire space. It’s like having the perfect set of ingredients for a recipe: enough to make the dish, but no unnecessary items.

**Why is a basis so special?**
*   **Uniqueness:** Every vector in the space can be written as a *unique* linear combination of the basis vectors. This is the power of linear independence. If you have multiple ways to represent a vector, it can lead to ambiguity. A basis guarantees a single, clear way to describe any vector.
*   **Efficiency:** It’s the smallest possible set of vectors that can span the entire space. If you removed any vector from a basis, it would no longer span the space. If you added any vector to a basis, it would become linearly dependent.

**Example (The Standard Basis):**
In $\mathbb{R}^n$, the most common basis is the **standard basis**. For $\mathbb{R}^2$, it's the set $E_2 = \{\mathbf{e}_1, \mathbf{e}_2\}$, where $\mathbf{e}_1 = (1, 0)$ and $\mathbf{e}_2 = (0, 1)$.
*   **Spanning:** We saw earlier that any vector $(x, y)$ can be written as $x\mathbf{e}_1 + y\mathbf{e}_2$. So, it spans $\mathbb{R}^2$.
*   **Linear Independence:** If $c_1\mathbf{e}_1 + c_2\mathbf{e}_2 = (0, 0)$, then $(c_1, c_2) = (0, 0)$, which means $c_1=0$ and $c_2=0$. So, it's linearly independent.

Thus, $E_2$ is a basis for $\mathbb{R}^2$. The vectors $\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n$ where $\mathbf{e}_i$ has a 1 in the $i$-th position and 0s elsewhere, form the standard basis for $\mathbb{R}^n$.

**Example in $\mathbb{R}^3$:** The standard basis is $\{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\} = \{(1, 0, 0), (0, 1, 0), (0, 0, 1)\}$. Any vector $(x, y, z)$ can be uniquely represented as $x(1, 0, 0) + y(0, 1, 0) + z(0, 0, 1)$.

**Relatable Example:** Imagine you're giving directions. You need a reference system. In a city grid, say, "Go 3 blocks East, then 5 blocks North." The directions "East" and "North" are like our basis vectors. They are independent (one doesn't help you go in the other direction), and they span your entire travel space (you can reach any point in the city by combining East and North movements). If you added a direction like "Northeast," it would be redundant because you could already achieve "Northeast" by combining East and North movements.

#### 4. Dimension: How "Big" is the Space?

This is where things get really neat. If a vector space $V$ has a basis consisting of $n$ vectors, then *every* basis for $V$ will consist of exactly $n$ vectors. This number, $n$, is called the **dimension** of the vector space $V$, denoted as $\dim(V)$.

**Crucial Point:** The dimension of a vector space is a fundamental property, independent of which basis you choose. This is a significant result in linear algebra, ensuring consistency. (See Kreyszig, Chapter 4.5, for a formal proof of the invariance of dimension).

*   $\dim(\mathbb{R}^n) = n$. The standard basis has $n$ vectors.
*   The vector space of polynomials of degree at most $n$, denoted $P_n$, has dimension $n+1$. A basis for $P_n$ is $\{1, x, x^2, \dots, x^n\}$.

**What about infinite-dimensional spaces?** Some vector spaces, like the space of all polynomials (without a degree limit), have infinitely many vectors in their basis. We won't focus heavily on these in this module, but it's good to know they exist.

**Connection to CO1:** Understanding dimension and bases is vital for solving systems of linear equations. The number of free variables in a solution is related to the dimension of the null space (kernel) of the coefficient matrix. The dimension of the column space (image) is related to the rank. These concepts are directly addressed in CO1.

**Connection to CO2:** Bases provide the essential structure for vector spaces and subspaces. If you can find a basis for a subspace, you can understand its entire span and its dimension. This is a core application of the properties of vector spaces.

#### 5. Finding a Basis: Practical Methods

So, how do we actually find a basis for a given vector space or subspace?

##### 5.1 From a Spanning Set

If you have a set of vectors that you know spans a vector space (or subspace), but you suspect it might be linearly dependent, you can pare it down to a basis.

**Method:**
1.  Start with the given spanning set $S = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$.
2.  Check for linear dependence. A common way is to form a matrix with these vectors as columns and row-reduce it.
3.  If you find a vector that is a linear combination of the preceding vectors, remove it from the set.
4.  Repeat until the remaining set is linearly independent. This reduced set will still span the same space and will be a basis.

**Example (Larson):** Find a basis for the subspace $W$ of $\mathbb{R}^4$ spanned by:
$\mathbf{v}_1 = (1, 0, 1, 2)$, $\mathbf{v}_2 = (0, 1, -1, 0)$, $\mathbf{v}_3 = (2, 1, 1, 4)$, $\mathbf{v}_4 = (0, 2, -2, 1)$.

Let's form a matrix with these as columns:
$$
A = \begin{pmatrix}
1 & 0 & 2 & 0 \\
0 & 1 & 1 & 2 \\
1 & -1 & 1 & -2 \\
2 & 0 & 4 & 1
\end{pmatrix}
$$
Now, row-reduce $A$:
$R_3 \leftarrow R_3 - R_1$, $R_4 \leftarrow R_4 - 2R_1$:
$$
\begin{pmatrix}
1 & 0 & 2 & 0 \\
0 & 1 & 1 & 2 \\
0 & -1 & -1 & -2 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$
$R_3 \leftarrow R_3 + R_2$:
$$
\begin{pmatrix}
1 & 0 & 2 & 0 \\
0 & 1 & 1 & 2 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$
Swap $R_3$ and $R_4$:
$$
\begin{pmatrix}
1 & 0 & 2 & 0 \\
0 & 1 & 1 & 2 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$
The pivot columns are columns 1, 2, and 4. This means the corresponding original vectors $\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_4\}$ form a basis for the column space (which is $W$ in this case). The vector $\mathbf{v}_3$ is redundant because it lies in the span of $\mathbf{v}_1$ and $\mathbf{v}_2$.

So, a basis for $W$ is $\{(1, 0, 1, 2), (0, 1, -1, 0), (0, 2, -2, 1)\}$. The dimension of $W$ is 3.

**Quick Tip for Exams:** When asked to find a basis from a spanning set, put the vectors as columns of a matrix, row-reduce, and identify the pivot columns. The original vectors corresponding to the pivot columns form the basis.

##### 5.2 From a Subspace Defined by a System of Equations

Subspaces are often defined as the solution set of a homogeneous system of linear equations, $A\mathbf{x} = \mathbf{0}$. The set of solutions is the null space (or kernel) of matrix $A$.

**Method to find a basis for the null space of $A$:**
1.  Write the augmented matrix for $A\mathbf{x} = \mathbf{0}$.
2.  Row-reduce the matrix to its reduced row echelon form (RREF).
3.  Identify the pivot variables and free variables.
4.  Write the general solution in vector form.
5.  Each vector in the general solution that corresponds to a free variable will form a basis for the null space.

**Example (Andrilli & Hecker):** Find a basis for the null space of
$$
A = \begin{pmatrix}
1 & 2 & 0 & -1 \\
2 & 4 & 1 & 1
\end{pmatrix}
$$
The system is:
$x_1 + 2x_2 - x_4 = 0$
$2x_1 + 4x_2 + x_3 + x_4 = 0$

Row-reduce $A$: $R_2 \leftarrow R_2 - 2R_1$:
$$
\begin{pmatrix}
1 & 2 & 0 & -1 \\
0 & 0 & 1 & 3
\end{pmatrix}
$$
This is in RREF.
Pivot variables: $x_1, x_3$.
Free variables: $x_2, x_4$.

From the RREF, we have:
$x_1 + 2x_2 - x_4 = 0 \implies x_1 = -2x_2 + x_4$
$x_3 + 3x_4 = 0 \implies x_3 = -3x_4$

Let $x_2 = s$ and $x_4 = t$ (our parameters). The solution vector $\mathbf{x}$ is:
$$
\mathbf{x} = \begin{pmatrix}
x_1 \\
x_2 \\
x_3 \\
x_4
\end{pmatrix} = \begin{pmatrix}
-2s + t \\
s \\
-3t \\
t
\end{pmatrix} = s \begin{pmatrix}
-2 \\
1 \\
0 \\
0
\end{pmatrix} + t \begin{pmatrix}
1 \\
0 \\
-3 \\
1
\end{pmatrix}
$$
The vectors corresponding to the free variables form a basis for the null space of $A$.
So, a basis is $\left\{ \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \\ -3 \\ 1 \end{pmatrix} \right\}$.

**This is super important for CO1!** The nullity (dimension of the null space) is the number of free variables. The rank is the number of pivot variables. Rank-Nullity Theorem states: $\text{rank}(A) + \text{nullity}(A) = n$ (where $n$ is the number of columns in $A$).

##### 5.3 Basis for the Row Space

The row space of a matrix $A$ is the span of its row vectors. A basis for the row space can be found by row-reducing $A$ and taking the non-zero rows. The non-zero rows in the row echelon form (or RREF) are linearly independent and span the same row space.

**Example:** For the matrix $A$ from the previous example:
$$
A = \begin{pmatrix}
1 & 2 & 0 & -1 \\
2 & 4 & 1 & 1
\end{pmatrix}
$$
We row-reduced it to:
$$
\begin{pmatrix}
1 & 2 & 0 & -1 \\
0 & 0 & 1 & 3
\end{pmatrix}
$$
The non-zero rows are $(1, 2, 0, -1)$ and $(0, 0, 1, 3)$. These form a basis for the row space of $A$. The dimension of the row space is 2, which is also the rank of $A$.

**Key Relationship:** The dimension of the row space is equal to the dimension of the column space, and this dimension is called the **rank** of the matrix. This connects beautifully to CO1.

#### 6. Coordinates and Change of Basis

Once we have a basis, we can represent *any* vector in the space as a unique linear combination of basis vectors. The coefficients in this linear combination are called the **coordinates** of the vector with respect to that basis.

Let $B = \{\mathbf{b}_1, \mathbf{b}_2, \dots, \mathbf{b}_n\}$ be a basis for a vector space $V$. For any vector $\mathbf{v} \in V$, there exist unique scalars $c_1, c_2, \dots, c_n$ such that:
$\mathbf{v} = c_1 \mathbf{b}_1 + c_2 \mathbf{b}_2 + \dots + c_n \mathbf{b}_n$

The coordinate vector of $\mathbf{v}$ with respect to basis $B$ is denoted as $[\mathbf{v}]_B$ and is given by:
$$
[\mathbf{v}]_B = \begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{pmatrix}
$$

**Example:** In $\mathbb{R}^2$, let basis $B = \{\mathbf{b}_1, \mathbf{b}_2\} = \{(1, 1), (1, -1)\}$.
Consider the vector $\mathbf{v} = (2, 4)$.
We want to find $c_1, c_2$ such that $\mathbf{v} = c_1 \mathbf{b}_1 + c_2 \mathbf{b}_2$.
$(2, 4) = c_1(1, 1) + c_2(1, -1)$
$(2, 4) = (c_1 + c_2, c_1 - c_2)$

This gives the system of equations:
$c_1 + c_2 = 2$
$c_1 - c_2 = 4$

Adding the two equations: $2c_1 = 6 \implies c_1 = 3$.
Substituting $c_1=3$ into the first equation: $3 + c_2 = 2 \implies c_2 = -1$.

So, $\mathbf{v} = 3\mathbf{b}_1 + (-1)\mathbf{b}_2$.
The coordinate vector of $\mathbf{v}$ with respect to basis $B$ is $[\mathbf{v}]_B = \begin{pmatrix} 3 \\ -1 \end{pmatrix}$.

**Why is this important?**
*   **Data Representation:** In information science, representing data in different bases can reveal underlying structures or simplify computations. For example, in image processing, transforming an image into a different basis (like a Fourier basis) can help in compression or noise reduction.
*   **Simplification:** Sometimes, a problem that is complex in one basis becomes much simpler in another. Finding a basis that diagonalizes a matrix is a prime example (related to eigenvalues and eigenvectors in CO1).

**Change of Basis:** To convert coordinates from one basis to another, we use a **change-of-basis matrix**. If $B = \{\mathbf{b}_1, \dots, \mathbf{b}_n\}$ and $C = \{\mathbf{c}_1, \dots, \mathbf{c}_n\}$ are two bases for $V$, and $P$ is the matrix whose columns are the coordinate vectors of the $\mathbf{b}_i$ with respect to basis $C$ (i.e., $P = [[\mathbf{b}_1]_C \dots [\mathbf{b}_n]_C]$), then for any vector $\mathbf{v}$:
$[\mathbf{v}]_B = P [\mathbf{v}]_C$
And to go the other way, $[\mathbf{v}]_C = P^{-1} [\mathbf{v}]_B$.

This is a more advanced topic, but understanding the concept of coordinates relative to a basis is key.

#### 7. Connection to Course Outcomes Revisited

Let's summarize how this topic ties directly into our course objectives:

*   **CO1 (Solve system of linear equations, eigenvalues/vectors, diagonalization):**
    *   Finding bases for null spaces and column spaces is crucial for understanding solutions to $A\mathbf{x}=\mathbf{0}$ and $A\mathbf{x}=\mathbf{b}$.
    *   The dimension of the null space (nullity) and the dimension of the column space (rank) are directly related to the number of basis vectors.
    *   Finding an eigenbasis (a basis of eigenvectors) is what allows us to diagonalize a matrix, simplifying many operations. The existence of such a basis is a key condition for diagonalization.

*   **CO2 (Understand vector spaces and subspaces, apply properties):**
    *   Bases are the fundamental tools for understanding the structure of vector spaces and subspaces.
    *   The dimension of a space is determined by the number of vectors in its basis.
    *   We use bases to prove that sets of vectors are subspaces (by checking if the span of a basis forms a subspace) and to represent any vector within that space.

*   **CO3 (Inner product spaces, orthonormalization, least squares):**
    *   While this topic doesn't directly cover inner products, bases are essential for understanding orthonormal bases. An orthonormal basis is a basis where all vectors are mutually orthogonal and have unit length.
    *   The Gram-Schmidt process, used for orthonormalization, takes a basis and produces an orthonormal basis. This is a direct application of basis manipulation.
    *   Least squares problems often involve finding the "best approximate solution" in a subspace. Identifying a basis for that subspace is the first step in many such calculations.

*   **CO4 (Linear transformations, rank/nullity, matrices of transformations):**
    *   The rank and nullity of a linear transformation are directly determined by the dimensions of its image and kernel, which are found using bases.
    *   When we represent a linear transformation by a matrix, the choice of basis for the domain and codomain affects the resulting matrix. Finding bases that simplify this matrix (like an eigenbasis) is a key goal.

**Remember this:** A basis is a set of vectors that are **linearly independent** and **span** the vector space. It's the minimal set of building blocks. The number of vectors in any basis is the **dimension**.

#### 8. Common Pitfalls and Exam Focus

*   **Confusing Spanning and Linear Independence:** A set can span a space but be linearly dependent (redundant vectors). A basis must satisfy *both* properties.
*   **Not checking both conditions for a basis:** When asked to prove a set is a basis, you *must* demonstrate both linear independence and that it spans the space.
*   **Mistakes in row reduction:** Many errors occur during Gaussian elimination. Double-check your steps.
*   **Identifying free vs. pivot variables:** This is crucial for finding bases of null spaces. Free variables determine the basis vectors.
*   **Standard Basis vs. General Bases:** While the standard basis is easy, problems often involve non-standard bases, and you need to be comfortable finding coordinates and performing operations in these.

The ability to find bases for various vector spaces and subspaces, and to understand the implications of dimension, is a cornerstone of linear algebra. Master this, and many subsequent topics will fall into place.

---

### Sample Questions and Answers

**Q1. Conceptual:** What are the two defining properties of a basis for a vector space $V$? Explain why both are necessary.
**Answer:** A basis for $V$ must be:
1.  **Linearly Independent:** This ensures that no vector in the basis can be written as a combination of the others. This is necessary because it guarantees that every vector in $V$ has a *unique* representation as a linear combination of basis vectors. If the set were linearly dependent, there would be multiple ways to express vectors, leading to ambiguity.
2.  **Spans $V$:** This ensures that the basis vectors are sufficient to construct *every* vector in $V$. If the set did not span $V$, there would be vectors in $V$ that could not be represented by any linear combination of the basis vectors.
Both are necessary because a set that is only linearly independent might not span the whole space, and a set that only spans the whole space might contain redundant vectors.

**Q2. Exam-Oriented:** Find a basis for the subspace $W$ of $\mathbb{R}^3$ spanned by the vectors $\mathbf{v}_1 = (1, 2, 3)$, $\mathbf{v}_2 = (2, 4, 6)$, and $\mathbf{v}_3 = (1, 0, -1)$.
**Reasoning:** First, we check if these vectors are linearly independent. We can form a matrix with these vectors as columns and row-reduce it.
$$
A = \begin{pmatrix}
1 & 2 & 1 \\
2 & 4 & 0 \\
3 & 6 & -1
\end{pmatrix}
$$
$R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - 3R_1$:
$$
\begin{pmatrix}
1 & 2 & 1 \\
0 & 0 & -2 \\
0 & 0 & -4
\end{pmatrix}
$$
$R_3 \leftarrow R_3 - 2R_2$:
$$
\begin{pmatrix}
1 & 2 & 1 \\
0 & 0 & -2 \\
0 & 0 & 0
\end{pmatrix}
$$
The pivot columns are 1 and 3. This indicates that $\mathbf{v}_1$ and $\mathbf{v}_3$ are linearly independent and form a basis for the span, while $\mathbf{v}_2$ is a linear combination of $\mathbf{v}_1$ (specifically, $\mathbf{v}_2 = 2\mathbf{v}_1$).
**Answer:** A basis for $W$ is $\{(1, 2, 3), (1, 0, -1)\}$. The dimension of $W$ is 2.

**Q3. Conceptual:** If a vector space $V$ has a basis with $k$ vectors, what is the dimension of $V$? What if we find another set of vectors that spans $V$ but contains $m$ vectors? What can we say about $m$?
**Answer:** If a vector space $V$ has a basis with $k$ vectors, its dimension is $\dim(V) = k$.
According to a fundamental theorem in linear algebra, all bases for a given vector space have the same number of vectors. Therefore, if another set of vectors spans $V$ and contains $m$ vectors, it must be that $m \ge k$. If this second set is also linearly independent, then $m$ must equal $k$, meaning it's also a basis. If $m > k$ and it spans $V$, it must be linearly dependent.

**Q4. Exam-Oriented:** Find a basis for the null space of the matrix:
$$
A = \begin{pmatrix}
1 & 0 & -2 \\
2 & 1 & -4 \\
0 & 1 & 0
\end{pmatrix}
$$
**Reasoning:** We need to solve $A\mathbf{x} = \mathbf{0}$.
$$
\begin{pmatrix}
1 & 0 & -2 & | & 0 \\
2 & 1 & -4 & | & 0 \\
0 & 1 & 0 & | & 0
\end{pmatrix}
$$
$R_2 \leftarrow R_2 - 2R_1$:
$$
\begin{pmatrix}
1 & 0 & -2 & | & 0 \\
0 & 1 & 0 & | & 0 \\
0 & 1 & 0 & | & 0
\end{pmatrix}
$$
$R_3 \leftarrow R_3 - R_2$:
$$
\begin{pmatrix}
1 & 0 & -2 & | & 0 \\
0 & 1 & 0 & | & 0 \\
0 & 0 & 0 & | & 0
\end{pmatrix}
$$
The matrix is in row echelon form.
Pivot variables: $x_1, x_2$.
Free variable: $x_3$.
The equations are:
$x_1 - 2x_3 = 0 \implies x_1 = 2x_3$
$x_2 = 0$
Let $x_3 = t$. Then $x_1 = 2t$, $x_2 = 0$, $x_3 = t$.
$$
\mathbf{x} = \begin{pmatrix} 2t \\ 0 \\ t \end{pmatrix} = t \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}
$$
**Answer:** A basis for the null space of $A$ is $\left\{ \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix} \right\}$. The dimension of the null space (nullity) is 1.

This concludes our exploration of bases. Remember these concepts, as they are the bedrock for much of what we'll do next in understanding vector spaces and their applications in information science.
