---
title: "Kernel of a Linear Transformation and its basis"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 4: Linear Transformations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d2f"
status: "completed"
scrapedAt: "2026-05-20T16:34:54.726Z"
---
This is a fantastic request! I'm going to channel my inner enthusiastic math professor to create these study notes for you. Get ready to dive into the fascinating world of linear transformations and their kernels!

---

# MATHEMATICS FOR INFORMATION SCIENCE – 2

## Module 4: Linear Transformations – The Kernel of a Linear Transformation and its Basis

Welcome, everyone, to our exploration of linear transformations! In this session, we're going to focus on a crucial component of any linear transformation: its **kernel**. Understanding the kernel is absolutely fundamental, and it directly links to several of our course outcomes, particularly CO2 (understanding vector spaces and subspaces) and CO4 (understanding linear transformations and finding their rank/nullity).

Think of a linear transformation as a special kind of function that operates on vectors. It's like a machine that takes a vector as input and spits out another vector, but it does so in a way that preserves the structure of the vector space – it respects addition and scalar multiplication. We've already learned about what makes a transformation "linear" – it must satisfy $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ and $T(c\mathbf{u}) = cT(\mathbf{u})$ for any vectors $\mathbf{u}, \mathbf{v}$ and scalar $c$. This linearity is what gives these transformations their power and predictability.

### What Exactly is the Kernel?

So, let's get down to business. What is this "kernel"?

Imagine our linear transformation, $T$, mapping vectors from a vector space $V$ to another vector space $W$. So, we write $T: V \to W$. The kernel of $T$, often denoted as $\text{ker}(T)$ or $N(T)$ (for null space, which is a very common synonym!), is the **set of all vectors in the domain $V$ that are mapped to the zero vector in the codomain $W$**.

In plain English: it's the collection of all input vectors that get "annihilated" by the transformation, reduced to nothingness.

Formally, we define it as:

$$
\text{ker}(T) = \{\mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}_W\}
$$

Here, $\mathbf{0}_W$ represents the zero vector in the codomain $W$.

**Why is this important?** Think about it this way: if a transformation maps a vector to zero, it means that this particular input vector doesn't contribute anything "new" or "distinct" to the output in terms of direction or magnitude. It's like filtering out noise. In data science and information science, identifying what gets zeroed out can tell us a lot about redundancies or the fundamental structure of the data we're processing. This directly connects to **CO4**, as we'll see when we discuss nullity later.

### The Kernel as a Subspace: A Crucial Property

Now, here's a vital piece of information that bridges us to **CO2**: The kernel of a linear transformation is not just any set of vectors; it is always a **subspace** of the domain $V$.

What does it mean to be a subspace? A subset $U$ of a vector space $V$ is a subspace if it satisfies three conditions:
1.  **Contains the zero vector:** $\mathbf{0}_V \in U$.
2.  **Closed under addition:** If $\mathbf{u}, \mathbf{v} \in U$, then $\mathbf{u} + \mathbf{v} \in U$.
3.  **Closed under scalar multiplication:** If $\mathbf{u} \in U$ and $c$ is a scalar, then $c\mathbf{u} \in U$.

Let's quickly see *why* the kernel satisfies these, using the definition of a linear transformation.

1.  **Does the kernel contain the zero vector?** Yes! For any linear transformation $T: V \to W$, we know that $T(\mathbf{0}_V) = \mathbf{0}_W$. Why? Because $T(\mathbf{0}_V) = T(0 \cdot \mathbf{v}) = 0 \cdot T(\mathbf{v}) = \mathbf{0}_W$. So, the zero vector from $V$ is always mapped to the zero vector in $W$, meaning $\mathbf{0}_V \in \text{ker}(T)$. This is our first condition for a subspace met.

2.  **Is the kernel closed under addition?** Let's say we have two vectors, $\mathbf{u}$ and $\mathbf{v}$, that are both in the kernel. This means $T(\mathbf{u}) = \mathbf{0}_W$ and $T(\mathbf{v}) = \mathbf{0}_W$. Now, consider their sum, $\mathbf{u} + \mathbf{v}$. Since $T$ is a linear transformation, we have:
    $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$.
    Substituting what we know:
    $T(\mathbf{u} + \mathbf{v}) = \mathbf{0}_W + \mathbf{0}_W = \mathbf{0}_W$.
    This shows that if $\mathbf{u}$ and $\mathbf{v}$ are in the kernel, their sum $\mathbf{u} + \mathbf{v}$ is also in the kernel. Closure under addition confirmed!

3.  **Is the kernel closed under scalar multiplication?** Again, suppose $\mathbf{u} \in \text{ker}(T)$, so $T(\mathbf{u}) = \mathbf{0}_W$. Let $c$ be any scalar. Then, by the linearity of $T$:
    $T(c\mathbf{u}) = cT(\mathbf{u})$.
    Substituting:
    $T(c\mathbf{u}) = c \cdot \mathbf{0}_W = \mathbf{0}_W$.
    This means that if $\mathbf{u}$ is in the kernel, any scalar multiple $c\mathbf{u}$ is also in the kernel. Closure under scalar multiplication is also confirmed!

Since all three conditions are met, the kernel of a linear transformation is indeed a subspace of the domain. This is a foundational concept from **CO2**, and it's crucial for understanding the structure of linear transformations.

### Finding the Kernel: Practical Steps

Alright, enough theory for a moment. How do we actually *find* the kernel of a given linear transformation? This is where the practice kicks in, and it directly relates to solving systems of linear equations, a skill honed in **CO1**.

Let's say we have a linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$. The most common way to represent $T$ is by its matrix, let's call it $A$. If $A$ is an $m \times n$ matrix, then for any vector $\mathbf{x} \in \mathbb{R}^n$, we have $T(\mathbf{x}) = A\mathbf{x}$.

To find the kernel, we are looking for all vectors $\mathbf{x}$ in $\mathbb{R}^n$ such that $T(\mathbf{x}) = \mathbf{0}_{\mathbb{R}^m}$. In matrix terms, this translates to finding all $\mathbf{x}$ such that:

$$
A\mathbf{x} = \mathbf{0}
$$

This is a homogeneous system of linear equations. To solve it, we typically use Gaussian elimination (or Gauss-Jordan elimination) on the augmented matrix $[A \mid \mathbf{0}]$.

**Here’s the general procedure:**

1.  **Represent the linear transformation $T$ by its matrix $A$.** If $T$ is given in a form like $T(x_1, x_2) = (2x_1 + x_2, x_1 - x_2)$, you'll need to figure out the corresponding matrix $A$. (We touched on this in previous sessions, but remember: the columns of $A$ are the images of the standard basis vectors of the domain.)
2.  **Set up the equation $A\mathbf{x} = \mathbf{0}$.**
3.  **Solve this homogeneous system using Gaussian elimination.** Reduce the augmented matrix $[A \mid \mathbf{0}]$ to its row echelon form or reduced row echelon form.
4.  **Express the solution set in parametric vector form.** This will give you a general form for all vectors $\mathbf{x}$ that satisfy $A\mathbf{x} = \mathbf{0}$. This solution set *is* the kernel.

**Example 1: A simple transformation in $\mathbb{R}^2$**

Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ be defined by $T(x, y) = (2x - y, x + 3y)$.
First, let's find the matrix $A$ for $T$.
$T(\begin{pmatrix} x \\ y \end{pmatrix}) = \begin{pmatrix} 2x - y \\ x + 3y \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}$.
So, $A = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}$.

To find the kernel, we solve $A\mathbf{x} = \mathbf{0}$:
$\begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.

The augmented matrix is $\begin{pmatrix} 2 & -1 & \mid & 0 \\ 1 & 3 & \mid & 0 \end{pmatrix}$.
Let's swap the rows: $\begin{pmatrix} 1 & 3 & \mid & 0 \\ 2 & -1 & \mid & 0 \end{pmatrix}$.
Now, perform $R_2 \leftarrow R_2 - 2R_1$:
$\begin{pmatrix} 1 & 3 & \mid & 0 \\ 0 & -7 & \mid & 0 \end{pmatrix}$.
From the second row, $-7y = 0$, which implies $y = 0$.
From the first row, $x + 3y = 0$. Substituting $y=0$, we get $x + 3(0) = 0$, so $x = 0$.

The only solution is $\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.
So, $\text{ker}(T) = \{\begin{pmatrix} 0 \\ 0 \end{pmatrix}\}$.

This means that for this specific transformation $T$, only the zero vector in $\mathbb{R}^2$ gets mapped to the zero vector. The kernel is trivial.

**Example 2: A transformation with a non-trivial kernel**

Let $T: \mathbb{R}^3 \to \mathbb{R}^2$ be defined by $T(x, y, z) = (x - 2y + z, 2x - 4y + 2z)$.
Let's find the matrix $A$. The standard basis vectors in $\mathbb{R}^3$ are $\mathbf{e}_1 = (1,0,0)$, $\mathbf{e}_2 = (0,1,0)$, $\mathbf{e}_3 = (0,0,1)$.
$T(\mathbf{e}_1) = T(1,0,0) = (1, 2)$.
$T(\mathbf{e}_2) = T(0,1,0) = (-2, -4)$.
$T(\mathbf{e}_3) = T(0,0,1) = (1, 2)$.
So, the matrix $A$ is:
$A = \begin{pmatrix} 1 & -2 & 1 \\ 2 & -4 & 2 \end{pmatrix}$.

To find the kernel, we solve $A\mathbf{x} = \mathbf{0}$ for $\mathbf{x} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$:
$\begin{pmatrix} 1 & -2 & 1 \\ 2 & -4 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.

The augmented matrix is $\begin{pmatrix} 1 & -2 & 1 & \mid & 0 \\ 2 & -4 & 2 & \mid & 0 \end{pmatrix}$.
Notice that the second row is just twice the first row. Let's perform $R_2 \leftarrow R_2 - 2R_1$:
$\begin{pmatrix} 1 & -2 & 1 & \mid & 0 \\ 0 & 0 & 0 & \mid & 0 \end{pmatrix}$.
This reduced row echelon form tells us that the second equation is redundant ($0=0$). We are left with a single equation from the first row:
$x - 2y + z = 0$.

This equation relates $x$, $y$, and $z$. We have free variables! In this case, $y$ and $z$ can be any real numbers. Let $y = s$ and $z = t$, where $s, t \in \mathbb{R}$.
Then, $x = 2y - z = 2s - t$.

So, any vector in the kernel can be written as:
$\mathbf{x} = \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 2s - t \\ s \\ t \end{pmatrix}$.

We can decompose this vector using the free variables $s$ and $t$:
$\mathbf{x} = \begin{pmatrix} 2s \\ s \\ 0 \end{pmatrix} + \begin{pmatrix} -t \\ 0 \\ t \end{pmatrix} = s \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$.

This form, $s\mathbf{v}_1 + t\mathbf{v}_2$, is the **parametric vector form** of the solution. This is the kernel!
$\text{ker}(T) = \{ s \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} \mid s, t \in \mathbb{R} \}$.

This tells us that any vector in the kernel is a linear combination of the vectors $\begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}$ and $\begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$.

**Analogy for Example 2:** Imagine you're trying to create a 3D sculpture (your input vector $\mathbf{x}$ in $\mathbb{R}^3$). The transformation $T$ is like a projector that casts a shadow on a wall (the codomain $\mathbb{R}^2$). The kernel is the set of all sculptures that, when projected, result in a flat, featureless spot (the zero vector). In Example 2, any sculpture that has the form $s \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$ will cast no shadow, meaning it's "aligned" in a way that the projection flattens it out.

### The Basis of the Kernel

The parametric vector form we obtained in Example 2 is super useful. It not only describes all the vectors in the kernel but also gives us a set of vectors that **span** the kernel.

Recall **CO2** and the concept of a basis. A basis for a vector space (or subspace) is a set of vectors that are **linearly independent** and **span** the space.

The vectors we found in the parametric vector form, $\begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}$ and $\begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$, are exactly what we need. Let's verify they are linearly independent. We set up the equation $c_1 \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$.
This gives us the system:
$2c_1 - c_2 = 0$
$c_1 = 0$
$c_2 = 0$
The only solution is $c_1 = 0$ and $c_2 = 0$, so these two vectors are linearly independent.

Since they are linearly independent and span the kernel (by definition of the parametric vector form), the set
$$
\left\{ \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} \right\}
$$
is a **basis for the kernel of $T$**.

**How to get the basis:**
The vectors that form the basis of the kernel are precisely the vectors that appear in the parametric vector form of the solution to $A\mathbf{x} = \mathbf{0}$, corresponding to the free variables.

**Key Takeaway:** When you solve $A\mathbf{x} = \mathbf{0}$ and express your solution in parametric vector form $\mathbf{x} = s\mathbf{v}_1 + t\mathbf{v}_2 + \dots$, the vectors $\mathbf{v}_1, \mathbf{v}_2, \dots$ form a basis for the kernel of the transformation represented by $A$.

**Example 3: Basis for the Kernel (continuing Example 2)**

For $T(x, y, z) = (x - 2y + z, 2x - 4y + 2z)$, we found:
$\text{ker}(T) = \{ s \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} \mid s, t \in \mathbb{R} \}$.
A basis for $\text{ker}(T)$ is $\left\{ \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} \right\}$.

**What about the dimensionality of the kernel?**

The dimension of a subspace is the number of vectors in its basis. In Example 3, the basis has two vectors. Therefore, the **dimension of the kernel of $T$ is 2**.

This dimension is a very important quantity, and it has its own special name: the **nullity** of the linear transformation $T$.
$$
\text{nullity}(T) = \dim(\text{ker}(T))
$$
This directly connects to **CO4**, where you are asked to find the rank and nullity. The nullity is simply the number of free variables you get when solving $A\mathbf{x} = \mathbf{0}$.

### Connecting Basis, Kernel, and Matrices (CO4)

The concept of the kernel and its basis is intimately tied to the properties of the matrix $A$ representing the linear transformation.

Remember **CO1** (eigenvalues/vectors) and **CO4** (rank/nullity). The kernel is essentially the eigenspace corresponding to the eigenvalue 0. If $T(\mathbf{v}) = \mathbf{0}$ and $\mathbf{v} \neq \mathbf{0}$, then $T(\mathbf{v}) = 0 \cdot \mathbf{v}$, which means $\mathbf{v}$ is an eigenvector with eigenvalue 0. So, $\text{ker}(T)$ is the eigenspace $E_0$.

**Rank-Nullity Theorem:** This is a cornerstone theorem in linear algebra and is absolutely vital for **CO4**. For a linear transformation $T: V \to W$ where $V$ is a finite-dimensional vector space, the following holds:

$$
\dim(V) = \text{rank}(T) + \text{nullity}(T)
$$

Here:
*   $\dim(V)$ is the dimension of the domain.
*   $\text{rank}(T)$ is the dimension of the **range** (or image) of $T$, denoted $\text{Im}(T)$ or $R(T)$. The range is the set of all output vectors: $\{T(\mathbf{v}) \mid \mathbf{v} \in V\}$. The rank is the dimension of the column space of the matrix $A$.
*   $\text{nullity}(T)$ is the dimension of the kernel of $T$.

In terms of the matrix $A$:
$$
\text{rank}(T) = \text{rank}(A) = \text{dim(column space of } A)
$$
$$
\text{nullity}(T) = \text{nullity}(A) = \text{dim(kernel of } A)
$$
So, for an $m \times n$ matrix $A$, $\dim(\mathbb{R}^n) = \text{rank}(A) + \text{nullity}(A)$.

This theorem is incredibly powerful because if you know any two of these quantities, you can find the third. For example, if you find the basis of the kernel and determine its dimension (the nullity), and you know the dimension of the domain, you can immediately deduce the rank of the matrix without even finding the basis of the range!

**Example 4: Using the Rank-Nullity Theorem**

Consider the transformation from Example 2: $T: \mathbb{R}^3 \to \mathbb{R}^2$ with matrix $A = \begin{pmatrix} 1 & -2 & 1 \\ 2 & -4 & 2 \end{pmatrix}$.
The domain is $\mathbb{R}^3$, so $\dim(V) = 3$.
We found that the kernel is spanned by two vectors, so $\text{nullity}(T) = 2$.

Using the Rank-Nullity Theorem:
$\dim(V) = \text{rank}(T) + \text{nullity}(T)$
$3 = \text{rank}(T) + 2$
$\text{rank}(T) = 3 - 2 = 1$.

The rank of the transformation is 1. This means the dimension of its range (the column space of $A$) is 1. We could verify this by finding the column space of $A$. The columns are $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$, $\begin{pmatrix} -2 \\ -4 \end{pmatrix}$, and $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$. Notice that the second and third columns are just scalar multiples of the first column. So, the column space is spanned by just one vector, $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$. The dimension of the column space is indeed 1.

**When is the Kernel Trivial?**

A common question is: when does the kernel contain *only* the zero vector?
$\text{ker}(T) = \{\mathbf{0}_W\}$ if and only if $\text{nullity}(T) = 0$.
By the Rank-Nullity Theorem, this is equivalent to $\text{rank}(T) = \dim(V)$.

For a square $n \times n$ matrix $A$, this means $\text{nullity}(A) = 0$ implies $\text{rank}(A) = n$.
This implies the system $A\mathbf{x} = \mathbf{0}$ has only the trivial solution $\mathbf{x} = \mathbf{0}$.
This also means that the matrix $A$ is **invertible**.

**Common Pitfalls and Exam Tips:**

*   **Confusing Domain and Codomain:** Always keep track of where the vectors are coming from ($V$) and where they are going ($W$). The kernel is a subspace of the *domain*.
*   **Forgetting the Zero Vector:** The zero vector is *always* in the kernel. If you solve $A\mathbf{x} = \mathbf{0}$ and don't find the zero vector as part of your solution, something is wrong!
*   **Not Fully Reducing the Matrix:** Make sure you take your matrix to at least row echelon form to identify pivot and free variables correctly. Reduced row echelon form is usually best for directly writing out the parametric vector form.
*   **Expressing the Basis Incorrectly:** The basis vectors are the ones that multiply the free variables in the parametric vector form. They must be linearly independent.
*   **Rank vs. Nullity:** Remember, nullity is the dimension of the kernel (number of free variables). Rank is the dimension of the range (number of pivot variables).
*   **Invertibility:** If a transformation $T: V \to V$ is represented by a square matrix $A$, and $\text{ker}(T) = \{\mathbf{0}\}$, then $A$ is invertible. This is a key connection often tested.

### Natural Examples and Analogies

Let's try to make this feel a bit more concrete.

**Data Compression Analogy:**
Imagine you have a huge dataset of images. Some features in these images might be redundant. For instance, if you have an image where every pixel is the same color, the "information" contained is minimal. A linear transformation could be designed to "compress" this data by discarding redundant information. The kernel of such a transformation would be the set of all "images" that are so redundant that the compression process reduces them to nothing (the zero vector). If the kernel is just the zero image, it means no non-zero image is completely redundant.

**Signal Processing:**
In signal processing, you might analyze a signal using transformations. The kernel could represent all the "noise" or "background" components that are irrelevant to the signal you're trying to extract. If a transformation effectively isolates a specific frequency, the kernel might be all the signals that *don't* contain that frequency.

**Jacobian Matrix in Calculus:**
While we're in linear algebra, it's worth noting that the Jacobian matrix of a function at a point represents the "best" linear approximation of that function near that point. The kernel of the Jacobian tells you about the directions in which the function doesn't change locally.

### Summary of Key Concepts

*   **Kernel of $T$ ($\text{ker}(T)$):** The set of vectors in the domain $V$ that are mapped to the zero vector in the codomain $W$. It's the solution set of $T(\mathbf{v}) = \mathbf{0}$.
*   **Subspace Property:** $\text{ker}(T)$ is always a subspace of $V$.
*   **Finding the Kernel:** Solve the homogeneous system $A\mathbf{x} = \mathbf{0}$ for the matrix $A$ representing $T$. Express the solution in parametric vector form.
*   **Basis of the Kernel:** The linearly independent vectors appearing in the parametric vector form of the solution to $A\mathbf{x} = \mathbf{0}$ form a basis for $\text{ker}(T)$.
*   **Nullity:** The dimension of the kernel, $\text{nullity}(T) = \dim(\text{ker}(T))$. It's the number of free variables.
*   **Rank-Nullity Theorem:** $\dim(V) = \text{rank}(T) + \text{nullity}(T)$.

Understanding the kernel and how to find its basis is fundamental to understanding the behavior and properties of linear transformations, impacting our ability to analyze data, solve systems, and understand the structure of vector spaces, as outlined in our course outcomes.

---

### Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual points and exam-style problems.

**Question 1 (Conceptual):**
If $T: V \to W$ is a linear transformation, which of the following statements is always true?
(a) The range of $T$ is a subspace of $V$.
(b) The kernel of $T$ is a subspace of $W$.
(c) The kernel of $T$ contains only the zero vector.
(d) The kernel of $T$ is a subspace of $V$.

**Answer:**
The correct answer is **(d)**.
*   (a) is false; the range is a subspace of the *codomain* $W$.
*   (b) is false; the kernel is a subspace of the *domain* $V$.
*   (c) is false; the kernel *can* contain only the zero vector (if its nullity is 0), but it's not always true.

**Question 2 (Finding Kernel and Basis):**
Let $T: \mathbb{R}^3 \to \mathbb{R}^2$ be defined by $T(x, y, z) = (x + y - z, 2x + 2y - 2z)$. Find a basis for the kernel of $T$.

**Answer:**
1.  **Find the matrix $A$:**
    $T(1,0,0) = (1,2)$
    $T(0,1,0) = (1,2)$
    $T(0,0,1) = (-1,-2)$
    So, $A = \begin{pmatrix} 1 & 1 & -1 \\ 2 & 2 & -2 \end{pmatrix}$.

2.  **Solve $A\mathbf{x} = \mathbf{0}$:**
    $\begin{pmatrix} 1 & 1 & -1 \\ 2 & 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.
    Augmented matrix: $\begin{pmatrix} 1 & 1 & -1 & \mid & 0 \\ 2 & 2 & -2 & \mid & 0 \end{pmatrix}$.
    Perform $R_2 \leftarrow R_2 - 2R_1$:
    $\begin{pmatrix} 1 & 1 & -1 & \mid & 0 \\ 0 & 0 & 0 & \mid & 0 \end{pmatrix}$.
    The equation is $x + y - z = 0$.

3.  **Express in parametric vector form:**
    Let $y = s$ and $z = t$ (free variables).
    Then $x = -y + z = -s + t$.
    $\mathbf{x} = \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} -s + t \\ s \\ t \end{pmatrix} = s \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$.

4.  **Identify basis vectors:**
    The vectors multiplying the free variables are $\begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}$ and $\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$. These are linearly independent.
    A basis for $\text{ker}(T)$ is $\left\{ \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} \right\}$.

**Question 3 (Rank-Nullity Theorem):**
Let $T: \mathbb{R}^4 \to \mathbb{R}^3$ be a linear transformation. If the rank of $T$ is 2, what is the nullity of $T$? What is the dimension of the kernel of $T$?

**Answer:**
The domain is $\mathbb{R}^4$, so $\dim(V) = 4$.
The Rank-Nullity Theorem states: $\dim(V) = \text{rank}(T) + \text{nullity}(T)$.
We are given $\text{rank}(T) = 2$.
So, $4 = 2 + \text{nullity}(T)$.
Solving for nullity, $\text{nullity}(T) = 4 - 2 = 2$.
The dimension of the kernel of $T$ is by definition its nullity, so $\dim(\text{ker}(T)) = 2$.

**Question 4 (Connection to Invertibility):**
Consider a linear transformation $T: \mathbb{R}^n \to \mathbb{R}^n$ represented by an $n \times n$ matrix $A$. If the kernel of $T$ is just the zero vector (i.e., $\text{ker}(T) = \{\mathbf{0}\}$), what can you conclude about the matrix $A$?

**Answer:**
If $\text{ker}(T) = \{\mathbf{0}\}$, then $\text{nullity}(T) = \dim(\text{ker}(T)) = 0$.
By the Rank-Nullity Theorem, $\dim(\mathbb{R}^n) = \text{rank}(T) + \text{nullity}(T)$.
So, $n = \text{rank}(T) + 0$, which means $\text{rank}(T) = n$.
For a square matrix $A$, having rank equal to its dimension ($n$) means that the matrix $A$ is **invertible**. It also implies that the system $A\mathbf{x} = \mathbf{b}$ has a unique solution for every $\mathbf{b}$ in $\mathbb{R}^n$, and $A\mathbf{x} = \mathbf{0}$ has only the trivial solution $\mathbf{x} = \mathbf{0}$.

---
Keep practicing these concepts, and you'll build a strong understanding of how linear transformations work!
