---
title: "Sum of Rank and Nullity (without proof)"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 4: Linear Transformations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d32"
status: "completed"
scrapedAt: "2026-05-20T16:34:57.310Z"
---
## Module 4: Linear Transformations – The Rank-Nullity Theorem

Welcome back, everyone! In our journey through linear algebra for information science, we've explored vectors, matrices, and now, the beautiful concept of **linear transformations**. These are essentially functions that operate on vector spaces, preserving the structure of addition and scalar multiplication. Think of them as "shape-preserving" mappings. Today, we're going to delve into a fundamental property that governs these transformations: the **Rank-Nullity Theorem**. This theorem, often a cornerstone in understanding the behavior of linear transformations, directly impacts our ability to analyze systems of equations and understand the dimensions of important subspaces, which aligns perfectly with our Course Outcomes CO1 and CO4.

### Unpacking the Core Concepts: Rank and Nullity

Before we can tackle the theorem itself, we need to make sure we're crystal clear on two crucial concepts: **rank** and **nullity**. These terms, when applied to a linear transformation, tell us a lot about its "output" and its "input behavior," respectively.

#### The Rank: The "Output Space" of a Transformation

Imagine a linear transformation $T$ that maps vectors from a vector space $V$ to a vector space $W$. The **range** of $T$, often denoted as $R(T)$ or $\text{Im}(T)$, is the set of all possible output vectors in $W$ that we can get by applying $T$ to vectors in $V$.

Now, the **rank** of the linear transformation $T$, denoted as $\text{rank}(T)$, is simply the **dimension** of this range. Think of the range as the "image" or the "footprint" of the transformation in the target space $W$. The rank tells us how "big" this image is. A higher rank means the transformation is spreading its outputs across a larger subspace of $W$.

**Where does this connect to our Course Outcomes?** Well, understanding the dimension of the range is crucial for analyzing the solvability of linear systems. If a linear transformation represents a system of equations, the rank tells us about the number of independent equations, which is a key aspect of CO1 (solving systems of linear equations) and CO4 (finding the rank of a linear transformation).

**Analogy Time!** Let's say you're a chef (the linear transformation $T$) and you have a pantry full of ingredients (the vector space $V$). You can create various dishes (the output vectors in $W$). The **range** of your cooking is the set of all possible dishes you can make. The **rank** is like the number of distinct, essential flavors or components that characterize all the dishes you can produce. Even if you use many ingredients, you might only be able to create a limited variety of flavor profiles.

**Example:** Consider the linear transformation $T: \mathbb{R}^2 \to \mathbb{R}^2$ defined by $T(x, y) = (x, 0)$.
If we take any vector $(x, y) \in \mathbb{R}^2$, the output is always of the form $(x, 0)$. The set of all such outputs is the x-axis in $\mathbb{R}^2$. This is the range of $T$. The dimension of this range (the x-axis) is 1. So, $\text{rank}(T) = 1$.

#### The Nullity: The "Input Space" that Maps to Zero

On the other side of the coin, we have the **null space** of $T$, denoted as $N(T)$ or $\text{Ker}(T)$. This is the set of all input vectors in $V$ that are mapped to the zero vector in $W$ by the transformation $T$. In other words, it's the set of vectors that get "squashed" or "collapsed" to nothing by the transformation.

The **nullity** of $T$, denoted as $\text{nullity}(T)$, is the **dimension** of this null space. It tells us how many "degrees of freedom" we have in the input space that all lead to the same output: the zero vector.

**Connection to Course Outcomes:** The null space is intimately related to finding the solutions to homogeneous systems of linear equations ($Ax=0$). The nullity, therefore, directly impacts our understanding of the structure of solutions and is a core part of CO1 and CO4. If the nullity is zero, it means only the zero vector maps to zero, implying the transformation is "one-to-one" in a certain sense (more precisely, injective).

**Analogy Revisited:** Back to our chef. The **null space** would be all the combinations of ingredients that, when you try to cook them, result in absolutely nothing edible – the "zero dish." The **nullity** is the number of distinct ways you can combine ingredients to achieve this "zero dish." Perhaps if you combine rotten apples, stale bread, and sour milk in a specific proportion, you get nothing. The nullity tells you how many such "recipes for disaster" exist.

**Example:** Using the same $T(x, y) = (x, 0)$ from before. We want to find $(x, y)$ such that $T(x, y) = (0, 0)$. This means $(x, 0) = (0, 0)$, which implies $x = 0$. The variable $y$ can be any real number. So, the null space consists of all vectors of the form $(0, y)$. This is the y-axis in $\mathbb{R}^2$. The dimension of the y-axis is 1. Thus, $\text{nullity}(T) = 1$.

### The Majestic Rank-Nullity Theorem

Now that we have a good grip on rank and nullity, we can introduce the theorem that elegantly connects them. This is one of those fundamental truths in linear algebra that just *works*.

**The Rank-Nullity Theorem states (without proof):**
For a linear transformation $T: V \to W$, where $V$ is a finite-dimensional vector space, the following relationship holds:

$$ \text{rank}(T) + \text{nullity}(T) = \dim(V) $$

This theorem is incredibly powerful. It tells us that the dimension of the input space $V$ is perfectly "accounted for" by the dimensions of the range and the null space of the transformation. It's like a conservation law for dimensions!

**Why is this so important?**
If we know the dimension of the input space $V$ and we can figure out either the rank or the nullity, we automatically know the other. This significantly simplifies our analysis.

**Connection to Course Outcomes:** This theorem is the bedrock for CO1 and CO4. When solving $Ax=b$, the matrix $A$ can be viewed as a linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$. The rank of $A$ (which is the rank of the linear transformation it represents) and the nullity of $A$ are directly linked to the number of solutions and the structure of those solutions. Understanding this relationship allows us to determine if a system has a unique solution, no solutions, or infinitely many solutions. For CO4, it's the direct statement about the relationship between rank and nullity.

**Textbook Insight:** Both Kreyszig's "Advanced Engineering Mathematics" and Larson's "Elementary Linear Algebra" dedicate significant attention to the Rank-Nullity Theorem, often calling it the **Dimension Theorem** or the **Rank Theorem**. They emphasize its importance in understanding the structure of linear systems and the properties of matrices. For instance, Kreyszig often uses it in the context of solving systems of linear equations and analyzing the properties of matrix inverses.

**Let's try to build some intuition with a story:**
Imagine you're building a complex machine (the vector space $V$). This machine has a certain number of independent moving parts (the dimension of $V$). When you apply a specific operation (the linear transformation $T$) to this machine, some of its capabilities might be amplified and used to create specific outputs in another domain (the range $R(T)$). The number of distinct capabilities this operation generates is its **rank**. However, some configurations of the original machine might not contribute anything new; they might just cancel each other out or lead to a "no output" state (the null space $N(T)$). The number of such configurations that lead to "no output" is its **nullity**. The Rank-Nullity Theorem tells us that the total number of independent moving parts in the original machine is exactly the sum of the number of distinct capabilities generated by the operation and the number of configurations that lead to no output. It’s a perfect partition of the machine's initial potential.

### Applying the Rank-Nullity Theorem: Examples

Let's solidify this with some examples, moving beyond abstract ideas to concrete calculations.

**Example 1: A Simple Matrix Transformation**

Consider the linear transformation $T: \mathbb{R}^3 \to \mathbb{R}^2$ represented by the matrix $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$.

We want to find $\text{rank}(T)$ and $\text{nullity}(T)$.

First, let's find the rank of the matrix $A$. We can do this by reducing it to row echelon form:
$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix} \xrightarrow{R_2 \leftarrow R_2 - 4R_1} \begin{pmatrix} 1 & 2 & 3 \\ 0 & -3 & -6 \end{pmatrix}$

The number of non-zero rows is 2. Therefore, $\text{rank}(A) = 2$.
Since the rank of the transformation is the rank of its matrix representation, $\text{rank}(T) = 2$.

Now, we know that the input space is $\mathbb{R}^3$, so $\dim(V) = 3$.
Using the Rank-Nullity Theorem:
$\text{rank}(T) + \text{nullity}(T) = \dim(V)$
$2 + \text{nullity}(T) = 3$
$\text{nullity}(T) = 3 - 2 = 1$.

So, the nullity of this transformation is 1. This means there's a 1-dimensional subspace of $\mathbb{R}^3$ that gets mapped to the zero vector in $\mathbb{R}^2$.

**Exam Tip:** When asked for the rank and nullity of a linear transformation defined by a matrix, finding the rank of the matrix is usually the first step. Then, use the Rank-Nullity Theorem to find the nullity.

**Example 2: A Projection Transformation**

Let $T: \mathbb{R}^3 \to \mathbb{R}^3$ be the projection onto the xy-plane. This transformation maps a vector $(x, y, z)$ to $(x, y, 0)$.
The matrix representation for this transformation is $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.

The dimension of the input space $V = \mathbb{R}^3$ is $\dim(V) = 3$.

To find the rank of $T$, we look at the range. Any vector $(x, y, z)$ is mapped to $(x, y, 0)$. The range is the set of all vectors of the form $(x, y, 0)$, which is the xy-plane in $\mathbb{R}^3$. The dimension of the xy-plane is 2. So, $\text{rank}(T) = 2$.

Alternatively, looking at the matrix $A$, it's already in row echelon form. It has two non-zero rows, so $\text{rank}(A) = 2$.

Now, applying the Rank-Nullity Theorem:
$\text{rank}(T) + \text{nullity}(T) = \dim(V)$
$2 + \text{nullity}(T) = 3$
$\text{nullity}(T) = 3 - 2 = 1$.

So, the nullity is 1. What does this mean? It means there's a 1-dimensional subspace of $\mathbb{R}^3$ that gets projected to the origin $(0, 0, 0)$. In this case, any vector of the form $(0, 0, z)$ is projected to $(0, 0, 0)$. The null space is the z-axis, which has dimension 1. Perfect match!

**Connecting to CO2 and CO3:** While the Rank-Nullity Theorem is central to CO1 and CO4, understanding subspaces (CO2) like the range and null space is fundamental to grasping the theorem itself. Similarly, if we were to consider inner product spaces (CO3), the concept of projection would be even more pronounced, and its rank and nullity would reveal properties about how information is preserved or lost in that space.

**Example 3: A Transformation with Full Rank**

Consider $T: \mathbb{R}^2 \to \mathbb{R}^2$ given by $T(x, y) = (2x + y, x - y)$.
The matrix for this transformation is $A = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$.
The dimension of the input space $V = \mathbb{R}^2$ is $\dim(V) = 2$.

Let's find the rank of $A$.
$\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix} \xrightarrow{R_1 \leftrightarrow R_2} \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix} \xrightarrow{R_2 \leftarrow R_2 - 2R_1} \begin{pmatrix} 1 & -1 \\ 0 & 3 \end{pmatrix}$
There are two non-zero rows, so $\text{rank}(A) = 2$. Thus, $\text{rank}(T) = 2$.

Using the Rank-Nullity Theorem:
$\text{rank}(T) + \text{nullity}(T) = \dim(V)$
$2 + \text{nullity}(T) = 2$
$\text{nullity}(T) = 2 - 2 = 0$.

Here, the nullity is 0. This is a significant result! It means that the *only* vector in $\mathbb{R}^2$ that maps to the zero vector $(0, 0)$ is the zero vector itself. This is a characteristic of transformations that are **injective** (one-to-one). For such transformations, the entire input space's dimension is utilized for the output space's dimension without any "collapse" into the zero vector. This is a key property often explored in the context of systems of linear equations where a unique solution exists.

**Common Pitfall Alert!** Don't forget that the Rank-Nullity Theorem applies to the dimension of the *input* vector space, not the output space. Always identify $V$ correctly!

### Summary of Key Takeaways

Let's recap the most crucial points you should remember from this discussion:

*   **Rank($T$):** The dimension of the range of the linear transformation $T$. It tells us about the "size" of the output space.
*   **Nullity($T$):** The dimension of the null space of $T$. It tells us about the "size" of the set of inputs that map to zero.
*   **Rank-Nullity Theorem:** For a linear transformation $T: V \to W$ where $V$ is finite-dimensional, $\text{rank}(T) + \text{nullity}(T) = \dim(V)$. This is your go-to relationship for connecting these quantities.

**Remember this:** The Rank-Nullity Theorem is a fundamental tool for understanding how linear transformations behave. It elegantly balances the dimensions of the input and output structures of the transformation. Mastering this theorem is key to unlocking many concepts in linear algebra, particularly those related to solving systems of equations and analyzing the properties of matrices, which directly supports CO1 and CO4.

### Sample Questions and Answers

Let's test your understanding with a couple of questions.

**Question 1 (Conceptual):**
If a linear transformation $T: V \to W$ has $\text{nullity}(T) = 0$, what can you say about its rank and the dimension of $V$?

**Answer 1:**
If $\text{nullity}(T) = 0$, by the Rank-Nullity Theorem:
$\text{rank}(T) + 0 = \dim(V)$
So, $\text{rank}(T) = \dim(V)$. This means the rank of the transformation is equal to the dimension of its input space. This also implies that the transformation is injective (one-to-one), as only the zero vector maps to zero.

**Question 2 (Exam-Oriented):**
Let $T: \mathbb{R}^4 \to \mathbb{R}^3$ be a linear transformation represented by the matrix $A = \begin{pmatrix} 1 & 0 & 2 & -1 \\ 0 & 1 & -1 & 3 \\ 2 & -1 & 5 & -5 \end{pmatrix}$. Find the rank and nullity of $T$.

**Answer 2:**
The input space is $V = \mathbb{R}^4$, so $\dim(V) = 4$.
We need to find the rank of the matrix $A$. Let's perform row operations:
$A = \begin{pmatrix} 1 & 0 & 2 & -1 \\ 0 & 1 & -1 & 3 \\ 2 & -1 & 5 & -5 \end{pmatrix} \xrightarrow{R_3 \leftarrow R_3 - 2R_1} \begin{pmatrix} 1 & 0 & 2 & -1 \\ 0 & 1 & -1 & 3 \\ 0 & -1 & 1 & -3 \end{pmatrix}$
Now, let's make the last row zero:
$\xrightarrow{R_3 \leftarrow R_3 + R_2} \begin{pmatrix} 1 & 0 & 2 & -1 \\ 0 & 1 & -1 & 3 \\ 0 & 0 & 0 & 0 \end{pmatrix}$
The number of non-zero rows is 2. Therefore, $\text{rank}(A) = 2$.
So, $\text{rank}(T) = 2$.

Now, using the Rank-Nullity Theorem:
$\text{rank}(T) + \text{nullity}(T) = \dim(V)$
$2 + \text{nullity}(T) = 4$
$\text{nullity}(T) = 4 - 2 = 2$.

Thus, the rank of the transformation is 2, and the nullity is 2.

Keep practicing these calculations, and always remember the fundamental relationship provided by the Rank-Nullity Theorem. It's a powerful tool in your mathematical arsenal for information science!
