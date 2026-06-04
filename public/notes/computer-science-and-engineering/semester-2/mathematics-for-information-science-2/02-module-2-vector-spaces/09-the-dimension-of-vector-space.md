---
title: "The dimension of vector space"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 2: Vector Spaces"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d17"
status: "completed"
scrapedAt: "2026-05-20T16:34:38.750Z"
---
## MATHEMATICS FOR INFORMATION SCIENCE – 2

### Module 2: Vector Spaces

#### Topic: The Dimension of a Vector Space

Welcome, everyone! Today, we're diving into a truly fundamental concept in linear algebra, one that will unlock a deeper understanding of vector spaces and their structure: **the dimension of a vector space**. Think of dimension as the "size" or the "number of independent directions" you need to describe any element within a vector space. It’s a crucial concept that connects directly to how we represent and manipulate data in information science.

This topic builds directly on our understanding of **linear independence**, **span**, and **basis**. Remember, a basis is a minimal set of vectors that can generate (span) the entire vector space. It's like having the essential ingredients to cook any dish in a specific cuisine. The number of these essential ingredients, the number of vectors in a basis, is precisely what we call the dimension.

This understanding is absolutely key for **Course Outcome 2 (CO2)**: "Understand the concepts of vector spaces and subspaces and to apply their properties." Dimension is a prime example of such a property. It also indirectly supports **Course Outcome 1 (CO1)**, as understanding the dimension of solution spaces for linear systems is vital for solving them.

### What Exactly is Dimension?

Before we get too abstract, let's get a feel for it.

*   **Analogy: Our Physical World.**
    Think about our everyday 3-dimensional space. To describe the location of any object, we typically need three coordinates: a position along the x-axis, a position along the y-axis, and a position along the z-axis. We can't reduce this to just one or two numbers, can we? If we only had one number, we could only describe positions along a line. If we had two, we could describe positions on a plane. But to describe anything in our reality, we need these three independent "directions" or "coordinates." This is intuitive, right? The dimension of our everyday space is 3.

*   **Formal Definition: The Size of the Basis.**
    In a more formal sense, the **dimension of a vector space $V$**, denoted as $\dim(V)$, is the number of vectors in any basis for $V$.

Now, a very important question that might pop into your head is: "If a vector space can have multiple bases, does the number of vectors in each basis always stay the same?" The answer is a resounding **yes!** This is a cornerstone theorem in linear algebra and ensures that the concept of dimension is well-defined.

**Theorem:** If a vector space $V$ has a basis consisting of $n$ vectors, then every basis for $V$ has exactly $n$ vectors.

This means we don't have to worry about picking the "right" basis to count the vectors. Any valid basis will give us the same number, which is *the* dimension.

### Connecting Basis, Span, and Independence

Let's recap how basis relates to span and independence, as this is crucial for understanding dimension.

*   **Span:** A set of vectors $\{v_1, v_2, \dots, v_k\}$ spans a vector space $V$ if every vector in $V$ can be written as a linear combination of these vectors.
*   **Linear Independence:** A set of vectors $\{v_1, v_2, \dots, v_k\}$ is linearly independent if the only way to form the zero vector as a linear combination of them is by setting all coefficients to zero (i.e., $c_1v_1 + c_2v_2 + \dots + c_kv_k = 0$ implies $c_1=c_2=\dots=c_k=0$).
*   **Basis:** A set of vectors is a **basis** for $V$ if it is both **linearly independent** and **spans** $V$. Think of a basis as the most efficient, non-redundant set of "building blocks" for the vector space.

The dimension is simply the count of these essential building blocks.

### Examples to Build Understanding

Let's look at some concrete examples, moving from familiar spaces to more abstract ones.

1.  **The Vector Space $\mathbb{R}^n$:**
    We've worked with $\mathbb{R}^n$ quite a bit. Consider $\mathbb{R}^2$, the space of all ordered pairs of real numbers $(x, y)$.
    *   What's a basis for $\mathbb{R}^2$? The standard basis is $e_1 = (1, 0)$ and $e_2 = (0, 1)$.
    *   Are these linearly independent? Yes, $c_1(1, 0) + c_2(0, 1) = (0, 0)$ only if $c_1=0$ and $c_2=0$.
    *   Do they span $\mathbb{R}^2$? Yes, any vector $(x, y)$ can be written as $x(1, 0) + y(0, 1)$.
    *   Since the basis $\{e_1, e_2\}$ has **two** vectors, the dimension of $\mathbb{R}^2$ is 2. $\dim(\mathbb{R}^2) = 2$.

    Similarly, for $\mathbb{R}^3$, the standard basis is $\{ (1,0,0), (0,1,0), (0,0,1) \}$. This set has 3 vectors, so $\dim(\mathbb{R}^3) = 3$.
    In general, the standard basis for $\mathbb{R}^n$ consists of $n$ vectors, and thus $\dim(\mathbb{R}^n) = n$. This aligns perfectly with our intuition about coordinates.

    **Insight for Information Science:** When we deal with data points in a dataset, each data point is often represented as a vector in $\mathbb{R}^n$, where $n$ is the number of features or attributes. Understanding $n$ (the dimension of the feature space) is crucial for tasks like dimensionality reduction, where we try to find a lower-dimensional representation of the data that captures most of the important information. This directly relates to **CO1** and **CO2**.

2.  **The Vector Space of Polynomials $P_n(x)$:**
    Let $P_n(x)$ be the vector space of all polynomials of degree at most $n$. For example, $P_2(x)$ is the space of polynomials like $ax^2 + bx + c$.
    *   What would be a basis for $P_2(x)$? We can use the set of polynomials $\{1, x, x^2\}$.
    *   Are these linearly independent? Suppose $c_1(1) + c_2(x) + c_3(x^2) = 0$ for all $x$. For this polynomial identity to hold, all coefficients must be zero: $c_1=0, c_2=0, c_3=0$. Yes, they are linearly independent.
    *   Do they span $P_2(x)$? Yes, any polynomial $ax^2 + bx + c$ is a linear combination of $1, x, x^2$ with coefficients $c, b, a$ respectively.
    *   This basis has **three** vectors. Therefore, $\dim(P_2(x)) = 3$.

    In general, the space $P_n(x)$ has a basis $\{1, x, x^2, \dots, x^n\}$, which consists of $n+1$ vectors. So, $\dim(P_n(x)) = n+1$.

    **Relatable Example:** Imagine you're fitting a curve to some data points using polynomials. If you decide to use polynomials up to degree 3 (cubic), you're essentially working in a 4-dimensional space ($P_3(x)$), spanned by $\{1, x, x^2, x^3\}$. The coefficients of these basis polynomials are what define your specific curve.

3.  **The Zero Vector Space:**
    What about the vector space containing only the zero vector, $\{0\}$?
    *   What's a basis for this space? A basis must be linearly independent and span the space. The set containing only the zero vector, $\{0\}$, is **not** linearly independent (since $c \cdot 0 = 0$ for any $c \neq 0$).
    *   The definition of a basis usually requires a non-empty set of vectors. By convention, the basis for the zero vector space is the **empty set**, $\emptyset$.
    *   The number of vectors in the empty set is 0. Therefore, the dimension of the zero vector space is 0. $\dim(\{0\}) = 0$. This might seem a bit peculiar, but it's a consistent definition.

### Dimension and Subspaces

The concept of dimension is also incredibly useful when talking about **subspaces**. A subspace is essentially a "smaller" vector space living inside a larger one.

**Key Property:** If $W$ is a subspace of a vector space $V$, then $\dim(W) \leq \dim(V)$.
Furthermore, if $\dim(W) = \dim(V)$, then $W$ must be equal to $V$. In other words, if a subspace has the same dimension as the parent space, it *is* the parent space. It can't be "smaller" if it has the same number of independent directions.

**Example:** Consider $\mathbb{R}^3$.
*   A line through the origin in $\mathbb{R}^3$ is a subspace. What's its dimension? A line can be spanned by a single non-zero vector, say $v_1$. The set $\{v_1\}$ is linearly independent. So, a line through the origin has dimension 1.
*   A plane through the origin in $\mathbb{R}^3$ is a subspace. What's its dimension? A plane can be spanned by two non-collinear vectors, say $v_1$ and $v_2$. The set $\{v_1, v_2\}$ is linearly independent. So, a plane through the origin has dimension 2.

You can see how the dimensions of these subspaces (1 and 2) are less than or equal to the dimension of $\mathbb{R}^3$ (which is 3).

### Dimension, Rank, and Nullity: A Glimpse Ahead

This is where things get really exciting for information science. The dimension of vector spaces is intimately connected to the **rank** and **nullity** of matrices and linear transformations, which are core to **CO1**, **CO2**, **CO4**, and even **CO3** when we think about vector spaces of functions or data.

Let $A$ be an $m \times n$ matrix. We can think of $A$ as representing a linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$.

*   **Column Space (Col(A)):** This is the subspace of $\mathbb{R}^m$ spanned by the columns of $A$. The **rank** of $A$, denoted $\text{rank}(A)$, is the dimension of the column space. $\text{rank}(A) = \dim(\text{Col}(A))$. The rank tells you the number of linearly independent columns, or equivalently, the number of independent "output" directions the transformation can produce.
*   **Null Space (Null(A)):** This is the subspace of $\mathbb{R}^n$ consisting of all vectors $x$ such that $Ax = 0$. The **nullity** of $A$, denoted $\text{nullity}(A)$, is the dimension of the null space. $\text{nullity}(A) = \dim(\text{Null}(A))$. The nullity tells you the dimension of the space of inputs that get "squashed" to zero by the transformation.

**The Rank-Nullity Theorem:** For an $m \times n$ matrix $A$, the following fundamental relationship holds:
$$ \text{rank}(A) + \text{nullity}(A) = n $$
where $n$ is the number of columns of $A$ (which is the dimension of the domain space $\mathbb{R}^n$).

This theorem is incredibly powerful. It tells us that the "dimension of the output space we can reach" plus the "dimension of the input space that maps to zero" must equal the "total dimension of the input space." It's a conservation law for dimensions!

**Example:** Let $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$.
This is a $2 \times 3$ matrix, so $n=3$.
The columns are $c_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$, $c_2 = \begin{pmatrix} 2 \\ 4 \end{pmatrix}$, $c_3 = \begin{pmatrix} 3 \\ 6 \end{pmatrix}$.
Notice that $c_2 = 2c_1$ and $c_3 = 3c_1$. The column space is spanned by just one vector, say $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$.
So, $\text{Col}(A) = \text{span}\left\{\begin{pmatrix} 1 \\ 2 \end{pmatrix}\right\}$.
The dimension of the column space, $\text{rank}(A)$, is 1.

Now, let's find the null space. We solve $Ax=0$:
$\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
This gives us the equations:
$x_1 + 2x_2 + 3x_3 = 0$
$2x_1 + 4x_2 + 6x_3 = 0$
The second equation is just twice the first. So we only need to consider $x_1 + 2x_2 + 3x_3 = 0$.
We can express $x_1$ in terms of $x_2$ and $x_3$: $x_1 = -2x_2 - 3x_3$.
The vectors $x = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}$ in the null space are of the form $\begin{pmatrix} -2x_2 - 3x_3 \\ x_2 \\ x_3 \end{pmatrix}$.
We can break this down by parameters $x_2$ and $x_3$:
$x = x_2 \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} + x_3 \begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix}$.
So, the null space is spanned by the vectors $v_1 = \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}$ and $v_2 = \begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix}$.
These two vectors are clearly linearly independent. Therefore, $\text{nullity}(A) = \dim(\text{Null}(A)) = 2$.

Let's check the Rank-Nullity Theorem:
$\text{rank}(A) + \text{nullity}(A) = 1 + 2 = 3$.
And $n=3$ (the number of columns). The theorem holds!

**Importance:** This theorem is vital for understanding the structure of solutions to systems of linear equations. If you have a system $Ax=b$, the solution set can be thought of as a translation of the null space of $A$. The dimension of the null space (nullity) tells you how many "degrees of freedom" there are in the solution set. This is fundamental to understanding and solving linear systems, as per **CO1**.

### Dimension in Other Vector Spaces

The concept of dimension isn't limited to $\mathbb{R}^n$ or polynomial spaces. It applies to any vector space, even those involving functions.

*   **Vector Space of Continuous Functions $C[a, b]$:** This is the space of all continuous functions on the interval $[a, b]$.
    *   Is this space finite-dimensional? No, it's an **infinite-dimensional** vector space. You cannot find a finite set of functions that can span *all* continuous functions. Think about trying to represent something like the sine wave using only a finite number of basic polynomials or constant functions – it's impossible to capture the infinite nuances.
    *   **Infinite Dimensions and Information Science:** While we often work with finite-dimensional approximations in practice, understanding infinite-dimensional spaces is crucial in advanced areas like signal processing (Fourier series), function approximation, and machine learning algorithms that operate on function spaces.

### How to Find the Dimension

So, how do you actually *find* the dimension of a given vector space or a subspace?

1.  **Find a Basis:** The most direct way is to find any basis for the vector space.
2.  **Count the Vectors:** Once you have a basis, simply count the number of vectors in it. That count is the dimension.

**Practical Steps (from textbooks like Kreyszig or Larson):**

*   **For a subspace defined by a set of spanning vectors:**
    1.  Form a matrix whose columns (or rows) are the spanning vectors.
    2.  Reduce this matrix to row-echelon form (or reduced row-echelon form).
    3.  The number of non-zero rows in the row-echelon form is the dimension of the subspace, and the non-zero rows themselves form a basis. This is because the row operations preserve the row space, and the non-zero rows in echelon form are always linearly independent and span the row space.

*   **For a subspace defined by homogeneous linear equations (like the null space):**
    1.  Write the system of equations in matrix form $Ax=0$.
    2.  Find the reduced row-echelon form of $A$.
    3.  Identify the pivot variables and free variables.
    4.  The number of free variables is equal to the nullity (the dimension of the null space). The vectors found by setting one free variable to 1 and others to 0 form a basis for the null space.

**Example Revisited (Dimension of Column Space):**
Let $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$.
To find the dimension of the column space, we look at the row-echelon form.
$R_2 \leftarrow R_2 - 2R_1$:
$\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \end{pmatrix}$
There is **one** non-zero row. This means the dimension of the row space (and also the column space, since row operations preserve the row space and the rank, which is the dimension of both) is 1. $\text{rank}(A)=1$.

**Example Revisited (Dimension of Null Space):**
For $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$, the reduced row-echelon form is $\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \end{pmatrix}$.
The system is $x_1 + 2x_2 + 3x_3 = 0$.
The pivot variable is $x_1$. The free variables are $x_2$ and $x_3$.
There are **two** free variables. So, the nullity is 2. $\text{nullity}(A)=2$. This matches what we found by explicitly constructing the basis for the null space.

**Common Pitfall:** Don't confuse the dimension of the row space with the dimension of the column space if you're working with row-echelon form. However, a crucial theorem states that the dimension of the row space is *equal* to the dimension of the column space, and this common dimension is called the **rank** of the matrix. This is a very important result, often proved in textbooks like Larson or Anton.

### Key Takeaways

*   **Dimension = Number of Vectors in a Basis:** This is the core definition.
*   **Dimension is Well-Defined:** Any basis for a given vector space will have the same number of vectors.
*   **$\dim(\mathbb{R}^n) = n$:** The dimension of Euclidean space matches our intuitive understanding of coordinates.
*   **$\dim(P_n(x)) = n+1$:** The space of polynomials of degree at most $n$ requires $n+1$ basis vectors.
*   **Subspaces have Smaller or Equal Dimensions:** If $W \subseteq V$, then $\dim(W) \leq \dim(V)$.
*   **Rank-Nullity Theorem:** $\text{rank}(A) + \text{nullity}(A) = n$. This is a fundamental tool for understanding linear systems and transformations.
*   **Infinite-Dimensional Spaces:** Some spaces, like spaces of functions, are infinite-dimensional.

Understanding dimension is not just an abstract mathematical exercise. In information science, it directly impacts how we:

*   Describe the complexity of data (number of features).
*   Perform dimensionality reduction (finding lower-dimensional representations).
*   Analyze the solutions to linear systems and the behavior of linear transformations (rank and nullity).
*   Choose appropriate algorithms for tasks like classification, regression, and pattern recognition.

It’s a concept that ties together many of the ideas we’ve discussed and will continue to explore. Remember this: dimension tells you the essential "degrees of freedom" or the minimum number of independent pieces of information needed to specify any element in a vector space.

---

### Sample Questions and Answers

**Q1. Conceptual Question:** What is the dimension of the vector space $P_3(x)$, the space of all polynomials of degree at most 3?
**Answer:** The space $P_3(x)$ is spanned by the set of polynomials $\{1, x, x^2, x^3\}$. This set is linearly independent and spans $P_3(x)$, making it a basis. Since this basis contains 4 vectors, the dimension of $P_3(x)$ is 4. This aligns with the general rule $\dim(P_n(x)) = n+1$.

**Q2. Exam-Oriented Question:** Let $V$ be the subspace of $\mathbb{R}^4$ defined by the following system of linear equations:
$x_1 + 2x_2 - x_3 + x_4 = 0$
$2x_1 + 4x_2 + x_3 - 2x_4 = 0$
Find the dimension of $V$.

**Answer:**
The subspace $V$ is the null space of the matrix formed by the coefficients of these equations.
Let $A = \begin{pmatrix} 1 & 2 & -1 & 1 \\ 2 & 4 & 1 & -2 \end{pmatrix}$.
The dimension of $V$ is the nullity of $A$. We need to find the number of free variables by reducing $A$ to row-echelon form.
$R_2 \leftarrow R_2 - 2R_1$:
$A \sim \begin{pmatrix} 1 & 2 & -1 & 1 \\ 0 & 0 & 3 & -4 \end{pmatrix}$
We can further simplify the second row by dividing by 3:
$A \sim \begin{pmatrix} 1 & 2 & -1 & 1 \\ 0 & 0 & 1 & -4/3 \end{pmatrix}$
Now, we can make it closer to reduced row-echelon form by $R_1 \leftarrow R_1 + R_2$:
$A \sim \begin{pmatrix} 1 & 2 & 0 & -1/3 \\ 0 & 0 & 1 & -4/3 \end{pmatrix}$
The pivot variables correspond to the columns with leading 1s, which are $x_1$ and $x_3$.
The free variables correspond to the columns without leading 1s, which are $x_2$ and $x_4$.
There are 2 free variables ($x_2$ and $x_4$).
The dimension of the null space (which is the dimension of the subspace $V$) is equal to the number of free variables.
Therefore, $\dim(V) = 2$.

**Q3. Concept Connection Question:** Explain how the dimension of the null space (nullity) of a matrix relates to the uniqueness of solutions for a non-homogeneous system of linear equations $Ax=b$.

**Answer:**
For a non-homogeneous system $Ax=b$, if a solution $x_p$ exists, then the set of all solutions is given by $x = x_p + x_h$, where $x_h$ is any solution to the associated homogeneous system $Ax=0$.
The set of all solutions $x_h$ to $Ax=0$ is precisely the null space of $A$.
The dimension of the null space, $\text{nullity}(A)$, tells us how many free variables there are in the solution set of $Ax=0$.
*   If $\text{nullity}(A) = 0$, it means the null space contains only the zero vector. This implies that $x_h$ must be the zero vector. Therefore, there is only one solution to $Ax=b$, which is $x_p$. The solution is unique.
*   If $\text{nullity}(A) > 0$, it means the null space contains non-zero vectors. This implies there are infinitely many possible non-zero $x_h$ vectors. Consequently, there are infinitely many solutions to $Ax=b$ (obtained by adding each $x_h$ to $x_p$).

So, the nullity directly determines whether the system $Ax=b$ has a unique solution (nullity=0) or infinitely many solutions (nullity>0), assuming a solution exists in the first place. This connects directly to **CO1**.
