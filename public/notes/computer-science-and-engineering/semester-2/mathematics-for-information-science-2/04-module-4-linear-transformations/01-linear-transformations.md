---
title: "Linear Transformations"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 4: Linear Transformations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d2a"
status: "completed"
scrapedAt: "2026-05-20T16:34:51.100Z"
---
# Mathematics for Information Science – 2
## Module 4: Linear Transformations
## Topic: Linear Transformations

Hello everyone, and welcome back to our journey through the fascinating world of mathematics for information science! Today, we’re diving into a topic that is absolutely central to many areas we’ll explore, especially in machine learning, computer graphics, and data analysis: **Linear Transformations**.

Think about what we’ve learned so far. We’ve explored vector spaces, understanding how to represent data and manipulate it using vectors and matrices. Now, we’re going to see how we can systematically *change* or *map* these vectors from one space to another, while preserving the fundamental structure of linearity. This is the essence of a linear transformation.

This topic directly connects to our **Course Outcome 4 (CO4)**: "Understand the concept of linear transformation and to apply its properties, to find the rank and nullity of a linear transformation and to find the matrices of linear transformations." We'll be building a deep understanding here, which will be crucial for later applications.

### What is a Transformation Anyway?

Before we talk about *linear* transformations, let's just get a handle on what a transformation is. In simple terms, a transformation is a function that takes an input (usually a vector) from one set (or space) and produces an output (another vector) in another set (or space).

Imagine you have a point on a map, represented by coordinates $(x, y)$. A transformation could be something that shifts this point to a new location. For example, a simple shift might take $(x, y)$ to $(x+2, y-1)$. Or, it could be a rotation, where the point $(x, y)$ is rotated by some angle around the origin.

### The "Linear" Property: The Heart of the Matter

Now, why do we care about *linear* transformations? What makes them special? Linear transformations are special because they "play nice" with the operations of vector addition and scalar multiplication. They preserve these fundamental properties of vector spaces.

Let's formalize this. Suppose we have a transformation $T$ that maps vectors from a vector space $V$ to a vector space $W$. We write this as $T: V \rightarrow W$. For $T$ to be a *linear transformation*, it must satisfy two conditions for any vectors $\mathbf{u}, \mathbf{v}$ in $V$ and any scalar $c$:

1.  **Additivity:** $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$
2.  **Homogeneity (or Scalar Multiplicativity):** $T(c\mathbf{u}) = cT(\mathbf{u})$

These two properties are the bedrock. If a transformation satisfies both, it's linear. If it violates even one, it's not.

**Think of it this way:** Imagine you have a recipe for making a cake (this is like combining vectors) and a way to scale the recipe up or down (scalar multiplication). A linear transformation is like a "fair" way of transforming the cake ingredients. If you combine two batches of ingredients and then transform them, it's the same as transforming each batch separately and then combining the results. Similarly, if you scale up a batch of ingredients and then transform it, it's the same as transforming the original batch and then scaling the result. No weird interactions, no distortions of the underlying structure.

Many fundamental operations in mathematics and science are linear transformations. For instance, rotations, scaling, and shearing in geometry are all linear. In data science, projecting data onto a lower-dimensional subspace or applying certain types of filters can often be represented by linear transformations.

### Connecting to Course Outcomes

This definition of linearity is directly related to **CO4**. Understanding these two properties is the first step in "understanding the concept of linear transformation." We will later see how these properties allow us to represent any linear transformation by a matrix, which is crucial for "finding the matrices of linear transformations."

### Example: A Simple Linear Transformation

Let's look at a concrete example. Consider a transformation $T$ from $\mathbb{R}^2$ to $\mathbb{R}^2$ defined by:
$T(x, y) = (2x, 3y)$

Is this a linear transformation? Let's check the conditions.
Let $\mathbf{u} = (x_1, y_1)$ and $\mathbf{v} = (x_2, y_2)$ be two vectors in $\mathbb{R}^2$.
Let $c$ be a scalar.

**1. Additivity:**
$T(\mathbf{u} + \mathbf{v}) = T((x_1, y_1) + (x_2, y_2)) = T(x_1+x_2, y_1+y_2)$
Using the definition of $T$:
$T(x_1+x_2, y_1+y_2) = (2(x_1+x_2), 3(y_1+y_2)) = (2x_1+2x_2, 3y_1+3y_2)$

Now let's look at the other side of the equation:
$T(\mathbf{u}) + T(\mathbf{v}) = T(x_1, y_1) + T(x_2, y_2)$
$T(x_1, y_1) = (2x_1, 3y_1)$
$T(x_2, y_2) = (2x_2, 3y_2)$
So, $T(\mathbf{u}) + T(\mathbf{v}) = (2x_1, 3y_1) + (2x_2, 3y_2) = (2x_1+2x_2, 3y_1+3y_2)$

Comparing the two sides, we see that $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$. The additivity condition holds!

**2. Homogeneity:**
$T(c\mathbf{u}) = T(c(x_1, y_1)) = T(cx_1, cy_1)$
Using the definition of $T$:
$T(cx_1, cy_1) = (2(cx_1), 3(cy_1)) = (2cx_1, 3cy_1)$

Now the other side:
$cT(\mathbf{u}) = cT(x_1, y_1)$
$T(x_1, y_1) = (2x_1, 3y_1)$
So, $cT(\mathbf{u}) = c(2x_1, 3y_1) = (c \cdot 2x_1, c \cdot 3y_1) = (2cx_1, 3cy_1)$

Again, the two sides are equal: $T(c\mathbf{u}) = cT(\mathbf{u})$. The homogeneity condition also holds!

Since both conditions are satisfied, $T(x, y) = (2x, 3y)$ is indeed a linear transformation.

**What does this transformation do visually?** It stretches the x-component by a factor of 2 and the y-component by a factor of 3. If you had a square in the xy-plane, it would be transformed into a rectangle. This is a very intuitive geometric interpretation of a linear transformation.

### Non-Linear Transformation Example (for contrast)

Let's see what happens if a transformation doesn't satisfy these conditions. Consider $S(x, y) = (x^2, y)$.
Let $\mathbf{u} = (1, 1)$. Then $S(\mathbf{u}) = S(1, 1) = (1^2, 1) = (1, 1)$.
Let $c = 2$.
$S(c\mathbf{u}) = S(2 \cdot (1, 1)) = S(2, 2) = (2^2, 2) = (4, 2)$.
$cS(\mathbf{u}) = 2 \cdot S(1, 1) = 2 \cdot (1, 1) = (2, 2)$.
Here, $S(c\mathbf{u}) = (4, 2)$ and $cS(\mathbf{u}) = (2, 2)$. They are not equal! So, $S(x, y) = (x^2, y)$ is not a linear transformation. The squaring operation introduces non-linearity.

### Consequences of Linearity: Linearity implies more!

The two core properties of linearity are incredibly powerful. They imply other useful properties. For instance, if $T$ is linear, then:

*   $T(\mathbf{0}_V) = \mathbf{0}_W$, where $\mathbf{0}_V$ is the zero vector in $V$ and $\mathbf{0}_W$ is the zero vector in $W$.
    *(How do we prove this? Let $\mathbf{v} \in V$. Then $T(\mathbf{0}_V) = T(0 \cdot \mathbf{v})$. Using homogeneity, this is $0 \cdot T(\mathbf{v})$. Since $T(\mathbf{v})$ is a vector in $W$, $0 \cdot T(\mathbf{v})$ is the zero vector in $W$. So, $T(\mathbf{0}_V) = \mathbf{0}_W$. This is a very important property – linear transformations always map the zero vector to the zero vector!)*
*   $T(\mathbf{u} - \mathbf{v}) = T(\mathbf{u}) - T(\mathbf{v})$.
    *(This follows from additivity: $T(\mathbf{u} - \mathbf{v}) = T(\mathbf{u} + (-1)\mathbf{v}) = T(\mathbf{u}) + T((-1)\mathbf{v}) = T(\mathbf{u}) + (-1)T(\mathbf{v}) = T(\mathbf{u}) - T(\mathbf{v})$).*
*   If $T$ is linear, then for any scalars $c_1, c_2, \dots, c_k$ and vectors $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k$:
    $T(c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k) = c_1T(\mathbf{v}_1) + c_2T(\mathbf{v}_2) + \dots + c_kT(\mathbf{v}_k)$.
    This is the most general form of linearity, often called *linear combinations*. It means that if you know how a linear transformation acts on a basis of a vector space, you can figure out how it acts on *any* vector in that space! This is a crucial insight that we will build upon.

These derived properties help us understand the behavior of linear transformations and are essential for applying their properties, as mentioned in **CO4**.

### Representing Linear Transformations with Matrices

This is where things get really powerful for computation, and it directly addresses another part of **CO4**: "to find the matrices of linear transformations."

A key theorem states that *every linear transformation between finite-dimensional vector spaces can be represented by a matrix*.

Let $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$ be a linear transformation. Then there exists a unique $m \times n$ matrix $A$ such that $T(\mathbf{x}) = A\mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^n$.

How do we find this matrix $A$? It's quite elegant. Let $\{\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n\}$ be the standard basis vectors for $\mathbb{R}^n$. These are vectors with a 1 in one position and 0s everywhere else (e.g., $\mathbf{e}_1 = (1, 0, \dots, 0)$, $\mathbf{e}_2 = (0, 1, \dots, 0)$, etc.).

The columns of the matrix $A$ are precisely the images of these standard basis vectors under the transformation $T$. That is:
$A = \begin{pmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & \dots & T(\mathbf{e}_n) \end{pmatrix}$

Where $T(\mathbf{e}_i)$ is treated as a column vector in $\mathbb{R}^m$.

**Why does this work?**
Any vector $\mathbf{x} = (x_1, x_2, \dots, x_n)$ in $\mathbb{R}^n$ can be written as a linear combination of the standard basis vectors:
$\mathbf{x} = x_1\mathbf{e}_1 + x_2\mathbf{e}_2 + \dots + x_n\mathbf{e}_n$.

Now, if $T$ is linear, we can apply the generalized linearity property:
$T(\mathbf{x}) = T(x_1\mathbf{e}_1 + x_2\mathbf{e}_2 + \dots + x_n\mathbf{e}_n)$
$T(\mathbf{x}) = x_1T(\mathbf{e}_1) + x_2T(\mathbf{e}_2) + \dots + x_nT(\mathbf{e}_n)$

Now, consider the matrix-vector product $A\mathbf{x}$:
$A\mathbf{x} = \begin{pmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & \dots & T(\mathbf{e}_n) \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$
$A\mathbf{x} = x_1 T(\mathbf{e}_1) + x_2 T(\mathbf{e}_2) + \dots + x_n T(\mathbf{e}_n)$

See? $T(\mathbf{x}) = A\mathbf{x}$. This is fundamental!

**Example:** Let's find the matrix for the transformation $T(x, y) = (2x, 3y)$ we looked at earlier. This is a transformation from $\mathbb{R}^2$ to $\mathbb{R}^2$.
The standard basis vectors for $\mathbb{R}^2$ are $\mathbf{e}_1 = (1, 0)$ and $\mathbf{e}_2 = (0, 1)$.

Let's find $T(\mathbf{e}_1)$:
$T(\mathbf{e}_1) = T(1, 0) = (2 \cdot 1, 3 \cdot 0) = (2, 0)$.

Let's find $T(\mathbf{e}_2)$:
$T(\mathbf{e}_2) = T(0, 1) = (2 \cdot 0, 3 \cdot 1) = (0, 3)$.

Now, we form the matrix $A$ using these as columns:
$A = \begin{pmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$.

Let's test this matrix with a general vector $\mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix}$:
$A\mathbf{x} = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2x + 0y \\ 0x + 3y \end{pmatrix} = \begin{pmatrix} 2x \\ 3y \end{pmatrix}$.
This matches $T(x, y) = (2x, 3y)$. So, our matrix representation is correct.

**This process is crucial for your exams.** You'll often be given a linear transformation and asked to find its matrix. Just apply the transformation to the standard basis vectors, and put the results as columns!

### Transformations Between Different Vector Spaces

The concept extends beyond $\mathbb{R}^n$ to $\mathbb{R}^m$. Let's say $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$. The matrix $A$ will have dimensions $m \times n$. The standard basis for $\mathbb{R}^n$ has $n$ vectors, and their images under $T$ are vectors in $\mathbb{R}^m$. So, the columns of $A$ are $m$-dimensional vectors.

**Example:** Let $T: \mathbb{R}^3 \rightarrow \mathbb{R}^2$ be defined by $T(x, y, z) = (x+y, 2y-z)$.
The standard basis vectors for $\mathbb{R}^3$ are $\mathbf{e}_1 = (1, 0, 0)$, $\mathbf{e}_2 = (0, 1, 0)$, $\mathbf{e}_3 = (0, 0, 1)$.

Let's find their images:
$T(\mathbf{e}_1) = T(1, 0, 0) = (1+0, 2(0)-0) = (1, 0)$.
$T(\mathbf{e}_2) = T(0, 1, 0) = (0+1, 2(1)-0) = (1, 2)$.
$T(\mathbf{e}_3) = T(0, 0, 1) = (0+0, 2(0)-1) = (0, -1)$.

The matrix $A$ will be $2 \times 3$:
$A = \begin{pmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & T(\mathbf{e}_3) \end{pmatrix} = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & -1 \end{pmatrix}$.

Let's check with a vector, say $\mathbf{x} = (2, 3, 4) \in \mathbb{R}^3$.
$T(2, 3, 4) = (2+3, 2(3)-4) = (5, 6-4) = (5, 2)$.

Now using the matrix:
$A\mathbf{x} = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & -1 \end{pmatrix} \begin{pmatrix} 2 \\ 3 \\ 4 \end{pmatrix} = \begin{pmatrix} 1(2) + 1(3) + 0(4) \\ 0(2) + 2(3) + (-1)(4) \end{pmatrix} = \begin{pmatrix} 2+3 \\ 6-4 \end{pmatrix} = \begin{pmatrix} 5 \\ 2 \end{pmatrix}$.
It matches!

### Basis Change and Matrix Representation

What if we don't use the standard basis? What if we use a different basis for $\mathbb{R}^n$ and $\mathbb{R}^m$? The representation of the linear transformation as a matrix *changes* depending on the bases chosen. This is a key concept in understanding **CO4** and goes into more depth than just finding the matrix with respect to the standard basis.

If $T: V \rightarrow W$ is a linear transformation, and we choose a basis $B = \{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ for $V$ and a basis $C = \{\mathbf{w}_1, \dots, \mathbf{w}_m\}$ for $W$, then $T$ can be represented by an $m \times n$ matrix, let's call it $[T]_{B,C}$, such that the coordinate vector of $T(\mathbf{v})$ in basis $C$, denoted $[T(\mathbf{v})]_C$, is related to the coordinate vector of $\mathbf{v}$ in basis $B$, denoted $[\mathbf{v}]_B$, by:
$[T(\mathbf{v})]_C = [T]_{B,C} [\mathbf{v}]_B$.

The columns of $[T]_{B,C}$ are the coordinate vectors of $T(\mathbf{v}_i)$ in basis $C$, i.e., $[T]_{B,C} = \begin{pmatrix} [T(\mathbf{v}_1)]_C & [T(\mathbf{v}_2)]_C & \dots & [T(\mathbf{v}_n)]_C \end{pmatrix}$.

While finding the matrix with respect to a non-standard basis is a bit more involved (requiring change-of-basis matrices), the fundamental idea remains: linear transformations can be captured by matrices when bases are specified. For most introductory purposes and many practical applications, the standard basis is used, and thus the standard matrix representation is what we focus on.

### Properties of Linear Transformations and their Matrices

The properties of the linear transformation $T$ are reflected in the properties of its matrix representation $A$.

*   **Domain and Codomain Dimensions:** If $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$, the matrix $A$ is $m \times n$. This is a direct consequence of how we define the matrix (columns are images of basis vectors of $\mathbb{R}^n$ in $\mathbb{R}^m$).
*   **Composition of Transformations:** If $T_1: \mathbb{R}^n \rightarrow \mathbb{R}^k$ with matrix $A_1$, and $T_2: \mathbb{R}^k \rightarrow \mathbb{R}^m$ with matrix $A_2$, then the composition $T_2 \circ T_1$ (meaning, apply $T_1$ first, then $T_2$) is a linear transformation from $\mathbb{R}^n \rightarrow \mathbb{R}^m$ with matrix $A_2 A_1$. Matrix multiplication perfectly captures the composition of linear transformations. This is a deep and beautiful result!
*   **Identity Transformation:** The identity transformation $I(\mathbf{x}) = \mathbf{x}$ maps vectors to themselves. Its matrix representation is the identity matrix $I$. If $T(\mathbf{x}) = A\mathbf{x}$, then $I(T(\mathbf{x})) = I(A\mathbf{x}) = A\mathbf{x}$. The matrix for $I \circ T$ is $I \cdot A = A$, which makes perfect sense.
*   **Inverse Transformation:** If $T: \mathbb{R}^n \rightarrow \mathbb{R}^n$ is a linear transformation and its matrix $A$ is invertible (i.e., $\det(A) \neq 0$), then $T$ has an inverse transformation $T^{-1}$ which is also linear. The matrix for $T^{-1}$ is $A^{-1}$. This means if $T(\mathbf{x}) = A\mathbf{x}$, then $T^{-1}(\mathbf{y}) = A^{-1}\mathbf{y}$.

### Rank and Nullity of a Linear Transformation

This is a critical part of **CO4**: "to find the rank and nullity of a linear transformation." These concepts are deeply tied to the structure of the transformation and its matrix.

For a linear transformation $T: V \rightarrow W$:

*   **Image (or Range) of T:** The image of $T$, denoted $\text{Im}(T)$ or $R(T)$, is the set of all possible output vectors in $W$.
    $\text{Im}(T) = \{T(\mathbf{v}) \mid \mathbf{v} \in V\}$
    The image of $T$ is a subspace of $W$.
*   **Rank of T:** The rank of $T$, denoted $\text{rank}(T)$, is the dimension of its image: $\text{rank}(T) = \dim(\text{Im}(T))$.

*   **Kernel (or Null Space) of T:** The kernel of $T$, denoted $\text{Ker}(T)$ or $N(T)$, is the set of all input vectors in $V$ that are mapped to the zero vector in $W$.
    $\text{Ker}(T) = \{\mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}_W\}$
    The kernel of $T$ is a subspace of $V$.

*   **Nullity of T:** The nullity of $T$, denoted $\text{nullity}(T)$, is the dimension of its kernel: $\text{nullity}(T) = \dim(\text{Ker}(T))$.

**The Rank-Nullity Theorem:** This is a fundamental theorem that connects these concepts. For a linear transformation $T: V \rightarrow W$ where $V$ is finite-dimensional, we have:
$\text{rank}(T) + \text{nullity}(T) = \dim(V)$

In simpler terms, the dimension of the "output space" of the transformation plus the dimension of the "input space that gets squashed to zero" equals the dimension of the original input space.

**How do we find these for $T(\mathbf{x}) = A\mathbf{x}$ where $A$ is an $m \times n$ matrix?**

*   **Rank of T:** The rank of the linear transformation $T$ is equal to the rank of its matrix $A$.
    $\text{rank}(T) = \text{rank}(A)$.
    The rank of a matrix is the dimension of its column space (which is the same as the dimension of its row space). You can find the rank by reducing the matrix to row echelon form and counting the number of non-zero rows.

*   **Nullity of T:** The nullity of the linear transformation $T$ is equal to the nullity of its matrix $A$.
    $\text{nullity}(T) = \text{nullity}(A)$.
    The nullity of a matrix is the dimension of its null space. It can be found by solving the homogeneous system $A\mathbf{x} = \mathbf{0}$. The number of free variables in the solution will be the nullity.

**Example:** Let $T: \mathbb{R}^3 \rightarrow \mathbb{R}^2$ with matrix $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & -1 \end{pmatrix}$.
Here, $n=3$ (domain dimension) and $m=2$ (codomain dimension).
The dimension of the domain $V = \mathbb{R}^3$ is $\dim(V) = 3$.

Let's find the rank of $A$:
The matrix $A$ is already in a form close to row echelon form. There are two non-zero rows.
$\text{rank}(A) = 2$.
So, $\text{rank}(T) = 2$. This means the image of $T$ is a 2-dimensional subspace of $\mathbb{R}^2$. Since $\mathbb{R}^2$ itself has dimension 2, this means the image is the entire $\mathbb{R}^2$. The transformation maps $\mathbb{R}^3$ onto $\mathbb{R}^2$.

Now let's use the Rank-Nullity Theorem:
$\text{rank}(T) + \text{nullity}(T) = \dim(V)$
$2 + \text{nullity}(T) = 3$
$\text{nullity}(T) = 3 - 2 = 1$.

So, the nullity of $T$ is 1. This means the kernel of $T$ is a 1-dimensional subspace of $\mathbb{R}^3$.
Let's verify this by finding the kernel by solving $A\mathbf{x} = \mathbf{0}$:
$\begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

From the matrix equation:
1) $x + y = 0 \implies x = -y$
2) $2y - z = 0 \implies z = 2y$

The variable $y$ is the free variable. Let $y = t$.
Then $x = -t$ and $z = 2t$.
The kernel vectors are of the form $\begin{pmatrix} -t \\ t \\ 2t \end{pmatrix} = t \begin{pmatrix} -1 \\ 1 \\ 2 \end{pmatrix}$.
The kernel is the span of the vector $(-1, 1, 2)$.
$\text{Ker}(T) = \text{span}\{(-1, 1, 2)\}$.
The dimension of the kernel is 1, as it's spanned by a single non-zero vector. So, $\text{nullity}(T) = 1$.

This all fits together beautifully! This understanding of rank and nullity, and how to compute them from the matrix, is absolutely vital for exams and for analyzing transformations.

### Relation to Other Course Outcomes

*   **CO1 (Eigenvalues/Eigenvectors, Diagonalization):** Linear transformations are deeply connected to eigenvalues and eigenvectors. An eigenvector $\mathbf{v}$ of a linear transformation $T$ is a non-zero vector such that $T(\mathbf{v}) = \lambda \mathbf{v}$ for some scalar $\lambda$. This scalar $\lambda$ is the eigenvalue. When $T(\mathbf{x}) = A\mathbf{x}$, the eigenvalues and eigenvectors of $T$ are the same as those of its matrix $A$. Diagonalization is the process of finding a basis where the linear transformation acts simply as scaling along the basis vectors, which is directly related to its eigenvalues.
*   **CO2 (Vector Spaces/Subspaces):** The image and kernel of a linear transformation are themselves subspaces. Understanding these concepts relies heavily on your knowledge of vector spaces and their properties. The rank and nullity are dimensions of these subspaces.
*   **CO3 (Inner Product Spaces, Orthonormalization, Least Squares):** While not the primary focus of *this* particular topic, linear transformations play a crucial role in inner product spaces. For example, projections onto subspaces are linear transformations. Orthonormalization processes, like Gram-Schmidt, can be viewed as finding a specific type of basis (orthonormal) that simplifies calculations involving inner products and projections. Least squares problems often involve projecting a vector onto a subspace, which is a linear transformation.

So, you can see how this module on Linear Transformations is a cornerstone for many other concepts in our course!

### Summary and Key Takeaways

Let's recap the most important points to remember from our discussion on Linear Transformations:

*   **Definition:** A transformation $T: V \rightarrow W$ is linear if $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ and $T(c\mathbf{u}) = cT(\mathbf{u})$ for all vectors $\mathbf{u}, \mathbf{v}$ and scalar $c$.
*   **Matrix Representation:** Any linear transformation $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$ can be represented by an $m \times n$ matrix $A$ such that $T(\mathbf{x}) = A\mathbf{x}$. The columns of $A$ are the images of the standard basis vectors of $\mathbb{R}^n$.
*   **Image and Kernel:** The image (or range) is the set of all outputs, and the kernel (or null space) is the set of inputs mapped to zero. Both are subspaces.
*   **Rank-Nullity Theorem:** $\text{rank}(T) + \text{nullity}(T) = \dim(\text{Domain})$. This is a vital theorem.
*   **Connection to Matrix:** $\text{rank}(T) = \text{rank}(A)$ and $\text{nullity}(T) = \text{nullity}(A)$.

Mastering these concepts will give you a powerful toolkit for analyzing and manipulating data and systems in various information science applications.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain in your own words why the two conditions for linearity are important. What would happen if a transformation satisfied only one of them?

**Answer:**
The two conditions, $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ (additivity) and $T(c\mathbf{u}) = cT(\mathbf{u})$ (homogeneity), are crucial because they ensure that the transformation preserves the fundamental operations of vector spaces: vector addition and scalar multiplication. This preservation means that the "structure" of the vector space, in terms of how vectors combine and scale, is maintained.

If a transformation satisfied only additivity but not homogeneity, it would be like a system where combining inputs leads to the expected combined output, but scaling an input doesn't lead to the corresponding scaled output. For example, $T(x) = 2x$ if $x$ is positive, and $T(x) = 3x$ if $x$ is negative. It might be additive for certain cases, but not scalar multiplicative in general. Such transformations wouldn't allow for the simple matrix representation we discussed and would behave unpredictably when scaling is involved.

Conversely, if it satisfied homogeneity but not additivity, it would mean scaling inputs works as expected, but adding inputs might lead to a result that isn't the sum of the individual transformed inputs. For instance, a transformation that squares the input, $T(x) = x^2$, is not linear. While $T(cx) = (cx)^2 = c^2x^2$ and $cT(x) = c x^2$, these are not equal. However, if we only checked $T(2x)$ vs $2T(x)$, it seems okay for specific values, but $T(x+y) = (x+y)^2 = x^2 + 2xy + y^2$, which is not $T(x) + T(y) = x^2 + y^2$. The "cross-term" $2xy$ breaks additivity.

In essence, both conditions together guarantee that the transformation acts predictably and consistently with the algebraic structure of vector spaces, allowing us to use the powerful tool of matrices.

**Question 2 (Matrix Representation):**
Find the standard matrix for the linear transformation $T: \mathbb{R}^2 \rightarrow \mathbb{R}^3$ defined by $T(x, y) = (x - y, y, 2x + y)$.

**Answer:**
To find the standard matrix, we need to find the images of the standard basis vectors of $\mathbb{R}^2$, which are $\mathbf{e}_1 = (1, 0)$ and $\mathbf{e}_2 = (0, 1)$. The matrix will have dimensions $3 \times 2$ (since the transformation is from $\mathbb{R}^2$ to $\mathbb{R}^3$).

1.  **Apply $T$ to $\mathbf{e}_1 = (1, 0)$:**
    $T(1, 0) = (1 - 0, 0, 2(1) + 0) = (1, 0, 2)$.
    As a column vector, this is $\begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}$.

2.  **Apply $T$ to $\mathbf{e}_2 = (0, 1)$:**
    $T(0, 1) = (0 - 1, 1, 2(0) + 1) = (-1, 1, 1)$.
    As a column vector, this is $\begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix}$.

The standard matrix $A$ has these image vectors as its columns:
$A = \begin{pmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \\ 2 & 1 \end{pmatrix}$.

**Verification (Optional but Recommended):**
Let $\mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix}$. Then $A\mathbf{x} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 1x - 1y \\ 0x + 1y \\ 2x + 1y \end{pmatrix} = \begin{pmatrix} x - y \\ y \\ 2x + y \end{pmatrix}$.
This matches the definition of $T(x, y)$, so our matrix is correct.

**Question 3 (Rank-Nullity):**
Consider the linear transformation $T: \mathbb{R}^4 \rightarrow \mathbb{R}^3$ given by $T(\mathbf{x}) = A\mathbf{x}$, where
$A = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$.
Find the rank and nullity of $T$.

**Answer:**
The transformation $T$ maps from $\mathbb{R}^4$ to $\mathbb{R}^3$, so the dimension of the domain is $\dim(V) = 4$. The matrix $A$ is $3 \times 4$.

1.  **Find the Rank of $T$:**
    The rank of $T$ is equal to the rank of its matrix $A$. The matrix $A$ is already in row echelon form. The number of non-zero rows in $A$ is 2.
    Therefore, $\text{rank}(A) = 2$.
    So, $\text{rank}(T) = 2$.

2.  **Find the Nullity of $T$ using the Rank-Nullity Theorem:**
    The Rank-Nullity Theorem states: $\text{rank}(T) + \text{nullity}(T) = \dim(V)$.
    We have $\text{rank}(T) = 2$ and $\dim(V) = 4$.
    $2 + \text{nullity}(T) = 4$.
    $\text{nullity}(T) = 4 - 2 = 2$.

Therefore, the rank of the linear transformation $T$ is 2, and its nullity is 2.

*(Self-check: The nullity being 2 means the kernel is a 2-dimensional subspace of $\mathbb{R}^4$. We can find it by solving $A\mathbf{x}=\mathbf{0}$. The pivot variables are $x_1$ and $x_3$. The free variables are $x_2$ and $x_4$. Let $x_2=s, x_4=t$.
From $A$:
$x_1 + 2x_2 + x_4 = 0 \implies x_1 = -2s - t$
$x_3 + 2x_4 = 0 \implies x_3 = -2t$
So, $\mathbf{x} = \begin{pmatrix} -2s - t \\ s \\ -2t \\ t \end{pmatrix} = s \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + t \begin{pmatrix} -1 \\ 0 \\ -2 \\ 1 \end{pmatrix}$. The kernel is spanned by two vectors, confirming nullity is 2.)*
