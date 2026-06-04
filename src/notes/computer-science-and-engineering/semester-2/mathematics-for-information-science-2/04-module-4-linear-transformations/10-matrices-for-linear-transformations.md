---
title: "Matrices for Linear Transformations."
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 4: Linear Transformations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d33"
status: "completed"
scrapedAt: "2026-05-20T16:34:58.032Z"
---
## Module 4: Linear Transformations - Matrices for Linear Transformations

Welcome, everyone, to our journey into the fascinating world of linear transformations! In this module, we've already dipped our toes into understanding what linear transformations are. We've learned that they're special functions that take vectors from one vector space to another, preserving the fundamental structures of addition and scalar multiplication. Think of them as "well-behaved" mapping rules.

Today, we're going to tackle a crucial aspect of these transformations: how to represent them using matrices. This is a really powerful idea because it allows us to translate abstract linear operations into concrete calculations. It's like having a secret codebook that translates sophisticated geometric manipulations into simple arithmetic.

This topic is directly tied to **Course Outcome 4 (CO4): Understand the concept of linear transformation and to apply its properties, to find the rank and nullity of a linear transformation and to find the matrices of linear transformations.** Specifically, we're focusing on the last part of CO4 – finding the matrices of linear transformations. This is essential for applying the properties of linear transformations and, as we'll see later, for concepts like diagonalization in CO1.

Let's begin by recapping what a linear transformation is, then we'll dive into the matrix representation.

### What is a Linear Transformation? (A Quick Refresher)

Remember, a function $T: V \to W$ (where $V$ and $W$ are vector spaces) is a linear transformation if it satisfies two key properties for any vectors $\mathbf{u}, \mathbf{v} \in V$ and any scalar $c$:

1.  **Additivity:** $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$
2.  **Homogeneity:** $T(c\mathbf{u}) = cT(\mathbf{u})$

These properties mean that linear transformations preserve vector addition and scalar multiplication. Imagine you have a set of points forming a shape. A linear transformation might stretch, rotate, or shear this shape, but it will never bend or break it. Straight lines remain straight lines, and the origin always maps to the origin.

### The Power of Matrices: Representing Linear Transformations

So, how do we capture these abstract rules in a tangible form? Matrices! For linear transformations between finite-dimensional vector spaces, matrices are our go-to tool.

Let's consider a linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$. This means $T$ takes a vector with $n$ components and maps it to a vector with $m$ components. The core idea is that if we know where $T$ sends the *basis vectors* of $\mathbb{R}^n$, we can figure out where it sends *any* vector in $\mathbb{R}^n$.

#### The Standard Basis

In $\mathbb{R}^n$, we usually work with the *standard basis vectors*. These are:

$\mathbf{e}_1 = \begin{bmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{bmatrix}, \quad \mathbf{e}_2 = \begin{bmatrix} 0 \\ 1 \\ \vdots \\ 0 \end{bmatrix}, \quad \dots, \quad \mathbf{e}_n = \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{bmatrix}$

These are vectors with a single '1' in one position and '0's everywhere else. They form the fundamental building blocks of any vector in $\mathbb{R}^n$. Any vector $\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}$ can be written as a linear combination of these basis vectors: $\mathbf{x} = x_1\mathbf{e}_1 + x_2\mathbf{e}_2 + \dots + x_n\mathbf{e}_n$.

Now, let's apply our linear transformation $T$ to an arbitrary vector $\mathbf{x}$:

$T(\mathbf{x}) = T(x_1\mathbf{e}_1 + x_2\mathbf{e}_2 + \dots + x_n\mathbf{e}_n)$

Because $T$ is linear, we can use the additivity and homogeneity properties:

$T(\mathbf{x}) = T(x_1\mathbf{e}_1) + T(x_2\mathbf{e}_2) + \dots + T(x_n\mathbf{e}_n)$
$T(\mathbf{x}) = x_1T(\mathbf{e}_1) + x_2T(\mathbf{e}_2) + \dots + x_nT(\mathbf{e}_n)$

**This is the key insight!** The image of any vector $\mathbf{x}$ under $T$ is simply a linear combination of the images of the standard basis vectors. The coefficients of this linear combination are the components of $\mathbf{x}$ itself.

#### Constructing the Matrix

Now, let's think about the images of the basis vectors: $T(\mathbf{e}_1), T(\mathbf{e}_2), \dots, T(\mathbf{e}_n)$. Each of these is a vector in the codomain $\mathbb{R}^m$. So, $T(\mathbf{e}_1)$ will be an $m \times 1$ column vector, $T(\mathbf{e}_2)$ will be another $m \times 1$ column vector, and so on, up to $T(\mathbf{e}_n)$.

Let's say:
$T(\mathbf{e}_1) = \begin{bmatrix} a_{11} \\ a_{21} \\ \vdots \\ a_{m1} \end{bmatrix}$, $T(\mathbf{e}_2) = \begin{bmatrix} a_{12} \\ a_{22} \\ \vdots \\ a_{m2} \end{bmatrix}$, $\dots$, $T(\mathbf{e}_n) = \begin{bmatrix} a_{1n} \\ a_{2n} \\ \vdots \\ a_{mn} \end{bmatrix}$

If we arrange these column vectors side-by-side to form a matrix, we get an $m \times n$ matrix:

$A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & \dots & T(\mathbf{e}_n) \end{bmatrix} = \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} \end{bmatrix}$

Now, let's look at the matrix-vector product $A\mathbf{x}$:

$A\mathbf{x} = \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}$

Recall how matrix-vector multiplication works: each entry in the resulting vector is the dot product of a row of the matrix with the vector $\mathbf{x}$.
The first entry is $a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n$.
The second entry is $a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n$.
... and so on.

Notice something remarkable? Let's write out the linear combination of $T(\mathbf{e}_i)$ we derived earlier:

$x_1T(\mathbf{e}_1) + x_2T(\mathbf{e}_2) + \dots + x_nT(\mathbf{e}_n) = x_1 \begin{bmatrix} a_{11} \\ a_{21} \\ \vdots \\ a_{m1} \end{bmatrix} + x_2 \begin{bmatrix} a_{12} \\ a_{22} \\ \vdots \\ a_{m2} \end{bmatrix} + \dots + x_n \begin{bmatrix} a_{1n} \\ a_{2n} \\ \vdots \\ a_{mn} \end{bmatrix}$

$= \begin{bmatrix} a_{11}x_1 \\ a_{21}x_1 \\ \vdots \\ a_{m1}x_1 \end{bmatrix} + \begin{bmatrix} a_{12}x_2 \\ a_{22}x_2 \\ \vdots \\ a_{m2}x_2 \end{bmatrix} + \dots + \begin{bmatrix} a_{1n}x_n \\ a_{2n}x_n \\ \vdots \\ a_{mn}x_n \end{bmatrix}$

$= \begin{bmatrix} a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n \\ a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n \end{bmatrix}$

This is *exactly* the result of $A\mathbf{x}$!

**So, for any linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$, there exists a unique $m \times n$ matrix $A$ such that $T(\mathbf{x}) = A\mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^n$. This matrix $A$ is called the *standard matrix* for the linear transformation $T$.**

The columns of the standard matrix $A$ are precisely the images of the standard basis vectors under $T$. This is a very important takeaway, so remember this!

### Example: A 2D Rotation

Let's make this concrete with an example. Consider a linear transformation $T: \mathbb{R}^2 \to \mathbb{R}^2$ that rotates every vector in the plane counterclockwise by an angle $\theta$.

What are the standard basis vectors in $\mathbb{R}^2$?
$\mathbf{e}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ and $\mathbf{e}_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.

Let's see where $T$ maps these vectors.
When you rotate $\mathbf{e}_1$ (which is the point (1,0) on the x-axis) by an angle $\theta$ counterclockwise, it lands at the point $(\cos \theta, \sin \theta)$. So,
$T(\mathbf{e}_1) = \begin{bmatrix} \cos \theta \\ \sin \theta \end{bmatrix}$.

When you rotate $\mathbf{e}_2$ (which is the point (0,1) on the y-axis) by an angle $\theta$ counterclockwise, it lands at the point $(-\sin \theta, \cos \theta)$. So,
$T(\mathbf{e}_2) = \begin{bmatrix} -\sin \theta \\ \cos \theta \end{bmatrix}$.

Now, to find the standard matrix $A$ for this rotation, we just put these images as columns:

$A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) \end{bmatrix} = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix}$

This is the famous *rotation matrix*!

So, if you want to rotate any vector $\mathbf{x} = \begin{bmatrix} x \\ y \end{bmatrix}$ by an angle $\theta$, you just compute $A\mathbf{x}$:

$T(\mathbf{x}) = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} x\cos \theta - y\sin \theta \\ x\sin \theta + y\cos \theta \end{bmatrix}$

This matches the familiar rotation formulas from trigonometry! Pretty neat, right?

**Analogy:** Imagine you're a chef who has a special way of preparing ingredients. You have a standard recipe (the basis vectors) and a unique method (the linear transformation) that transforms these ingredients. If you know how your method transforms each standard ingredient, you can then transform any complex dish (any vector) made from these ingredients by applying your method to each part. The matrix is like your "transformation manual" or "ingredient converter" that tells you the exact output for each input.

### Finding the Matrix for Other Linear Transformations

The process remains the same for any linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$.

**General Procedure:**

1.  **Identify the domain $\mathbb{R}^n$ and codomain $\mathbb{R}^m$.**
2.  **Determine the standard basis vectors for $\mathbb{R}^n$: $\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n$.**
3.  **Apply the linear transformation $T$ to each of these standard basis vectors to find $T(\mathbf{e}_1), T(\mathbf{e}_2), \dots, T(\mathbf{e}_n)$.** These will be column vectors in $\mathbb{R}^m$.
4.  **Construct the standard matrix $A$ by placing these resulting column vectors side-by-side:** $A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & \dots & T(\mathbf{e}_n) \end{bmatrix}$.

The resulting matrix $A$ will have dimensions $m \times n$.

### Example: A Transformation involving Stretching and Projection

Let's try another one. Consider $T: \mathbb{R}^3 \to \mathbb{R}^2$ defined by $T(x, y, z) = (x+y, 2z)$.
Is this a linear transformation? Let's quickly check.
Let $\mathbf{u} = (x_1, y_1, z_1)$ and $\mathbf{v} = (x_2, y_2, z_2)$.
$T(\mathbf{u} + \mathbf{v}) = T(x_1+x_2, y_1+y_2, z_1+z_2) = ((x_1+x_2) + (y_1+y_2), 2(z_1+z_2)) = (x_1+y_1+x_2+y_2, 2z_1+2z_2)$.
$T(\mathbf{u}) + T(\mathbf{v}) = (x_1+y_1, 2z_1) + (x_2+y_2, 2z_2) = (x_1+y_1+x_2+y_2, 2z_1+2z_2)$. They match!
Let $c$ be a scalar.
$T(c\mathbf{u}) = T(cx_1, cy_1, cz_1) = (cx_1+cy_1, 2cz_1) = c(x_1+y_1, 2z_1) = cT(\mathbf{u})$. It's indeed linear!

Here, $n=3$ and $m=2$. The standard basis vectors for $\mathbb{R}^3$ are:
$\mathbf{e}_1 = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$, $\mathbf{e}_2 = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$, $\mathbf{e}_3 = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$.

Let's find their images under $T$:
$T(\mathbf{e}_1) = T(1, 0, 0) = (1+0, 2(0)) = (1, 0)$. As a column vector: $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
$T(\mathbf{e}_2) = T(0, 1, 0) = (0+1, 2(0)) = (1, 0)$. As a column vector: $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
$T(\mathbf{e}_3) = T(0, 0, 1) = (0+0, 2(1)) = (0, 2)$. As a column vector: $\begin{bmatrix} 0 \\ 2 \end{bmatrix}$.

Now, we assemble these into the standard matrix $A$ (which will be $2 \times 3$):

$A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & T(\mathbf{e}_3) \end{bmatrix} = \begin{bmatrix} 1 & 1 & 0 \\ 0 & 0 & 2 \end{bmatrix}$

So, for any vector $\mathbf{x} = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$ in $\mathbb{R}^3$, the transformation $T(\mathbf{x})$ is given by $A\mathbf{x}$:

$T(\mathbf{x}) = \begin{bmatrix} 1 & 1 & 0 \\ 0 & 0 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 1x + 1y + 0z \\ 0x + 0y + 2z \end{bmatrix} = \begin{bmatrix} x+y \\ 2z \end{bmatrix}$

This perfectly matches the definition of $T(x, y, z) = (x+y, 2z)$.
This matrix $A$ essentially encodes the entire linear transformation. If you want to know what $T$ does to any vector $(x, y, z)$, you just perform the matrix multiplication. This is incredibly efficient.

### Connection to Course Outcomes

*   **CO4:** This entire section directly addresses finding the matrices of linear transformations. The procedure we've outlined and the examples demonstrate exactly how to do this. Once we have the matrix, we can easily find the rank and nullity of the transformation by analyzing the rank and nullity of its standard matrix, which is a key part of CO4. For instance, the rank of the linear transformation $T$ is equal to the rank of its standard matrix $A$, and the nullity is equal to the nullity of $A$.

*   **CO1:** The concept of a matrix representing a transformation is foundational for many other topics. For example, when we study eigenvalues and eigenvectors of matrices, we are essentially looking at special directions that are only scaled by the linear transformation represented by that matrix. Diagonalization, also in CO1, relies on finding a basis where the linear transformation can be represented by a diagonal matrix, which is a simpler form of a matrix representation.

### What if the Vector Spaces are Not $\mathbb{R}^n$?

So far, we've focused on transformations from $\mathbb{R}^n$ to $\mathbb{R}^m$. What if our vector spaces are different, like spaces of polynomials or matrices? The principle is the same, but we need to be careful about choosing a basis for each vector space.

Let $V$ be a vector space with a basis $B_V = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$ and $W$ be a vector space with a basis $B_W = \{\mathbf{w}_1, \mathbf{w}_2, \dots, \mathbf{w}_m\}$.
A linear transformation $T: V \to W$ is completely determined by its action on the basis vectors of $V$.
$T(\mathbf{v}_1), T(\mathbf{v}_2), \dots, T(\mathbf{v}_n)$ are vectors in $W$. Since $B_W$ is a basis for $W$, each of these images can be written as a unique linear combination of the basis vectors in $B_W$:

$T(\mathbf{v}_1) = c_{11}\mathbf{w}_1 + c_{21}\mathbf{w}_2 + \dots + c_{m1}\mathbf{w}_m$
$T(\mathbf{v}_2) = c_{12}\mathbf{w}_1 + c_{22}\mathbf{w}_2 + \dots + c_{m2}\mathbf{w}_m$
...
$T(\mathbf{v}_n) = c_{1n}\mathbf{w}_1 + c_{2n}\mathbf{w}_2 + \dots + c_{mn}\mathbf{w}_m$

The *matrix representation of $T$ relative to the bases $B_V$ and $B_W$* is the $m \times n$ matrix $C$ whose columns are the coordinate vectors of $T(\mathbf{v}_j)$ with respect to the basis $B_W$:

$C = \begin{bmatrix} [T(\mathbf{v}_1)]_{B_W} & [T(\mathbf{v}_2)]_{B_W} & \dots & [T(\mathbf{v}_n)]_{B_W} \end{bmatrix}$

where $[T(\mathbf{v}_j)]_{B_W} = \begin{bmatrix} c_{1j} \\ c_{2j} \\ \vdots \\ c_{mj} \end{bmatrix}$.

If we use the standard bases for $\mathbb{R}^n$ and $\mathbb{R}^m$, this general definition reduces to the standard matrix we discussed earlier. The choice of basis is crucial for the specific matrix obtained.

**Example: Linear Transformation on Polynomials**

Let $P_2$ be the vector space of polynomials of degree at most 2. A basis for $P_2$ is $\{1, x, x^2\}$. Let $T: P_2 \to P_2$ be the differentiation operator, $T(p(x)) = p'(x)$.

Let's find the matrix of $T$ with respect to the basis $B = \{1, x, x^2\}$ for both the domain and codomain.

1.  Apply $T$ to the basis vectors:
    $T(1) = \frac{d}{dx}(1) = 0$.
    $T(x) = \frac{d}{dx}(x) = 1$.
    $T(x^2) = \frac{d}{dx}(x^2) = 2x$.

2.  Express these results as linear combinations of the basis vectors $\{1, x, x^2\}$:
    $T(1) = 0 = 0 \cdot 1 + 0 \cdot x + 0 \cdot x^2$. The coordinate vector is $\begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$.
    $T(x) = 1 = 1 \cdot 1 + 0 \cdot x + 0 \cdot x^2$. The coordinate vector is $\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$.
    $T(x^2) = 2x = 0 \cdot 1 + 2 \cdot x + 0 \cdot x^2$. The coordinate vector is $\begin{bmatrix} 0 \\ 2 \\ 0 \end{bmatrix}$.

3.  Construct the matrix by placing these coordinate vectors as columns:

$A = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \\ 0 & 0 & 0 \end{bmatrix}$

This $3 \times 3$ matrix represents the differentiation operator with respect to the basis $\{1, x, x^2\}$.

Now, let's see how this works. Take a polynomial, say $p(x) = 3x^2 - 2x + 5$.
First, write $p(x)$ in terms of the basis: $p(x) = 5 \cdot 1 + (-2) \cdot x + 3 \cdot x^2$.
The coordinate vector of $p(x)$ with respect to $B$ is $\begin{bmatrix} 5 \\ -2 \\ 3 \end{bmatrix}$.

Now, apply the matrix:
$A \begin{bmatrix} 5 \\ -2 \\ 3 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} 5 \\ -2 \\ 3 \end{bmatrix} = \begin{bmatrix} 0(5) + 1(-2) + 0(3) \\ 0(5) + 0(-2) + 2(3) \\ 0(5) + 0(-2) + 0(3) \end{bmatrix} = \begin{bmatrix} -2 \\ 6 \\ 0 \end{bmatrix}$

This resulting column vector $\begin{bmatrix} -2 \\ 6 \\ 0 \end{bmatrix}$ is the coordinate vector of the transformed polynomial in the basis $B$.
So, $T(p(x)) = -2 \cdot 1 + 6 \cdot x + 0 \cdot x^2 = 6x - 2$.
Let's check by direct differentiation: $p'(x) = \frac{d}{dx}(3x^2 - 2x + 5) = 6x - 2$. It matches!

This illustrates the power and generality of using matrices to represent linear transformations, even when working with spaces beyond $\mathbb{R}^n$. The choice of basis is critical, and different bases will lead to different matrices for the same transformation. Kreyszig's "Advanced Engineering Mathematics" often delves into these more general cases with different bases, while Larson's "Elementary Linear Algebra" provides a solid foundation in $\mathbb{R}^n$.

### Properties of Matrices for Linear Transformations

The properties of linear transformations are mirrored by the properties of their matrices.

*   **The Zero Transformation:** If $T(\mathbf{x}) = \mathbf{0}$ for all $\mathbf{x}$, its matrix is the zero matrix. This makes sense; multiplying by a zero matrix always results in a zero vector.
*   **The Identity Transformation:** If $T(\mathbf{x}) = \mathbf{x}$ for all $\mathbf{x}$, its matrix is the identity matrix $I$. Multiplying any vector by the identity matrix leaves it unchanged, just as the identity transformation does.
*   **Composition of Transformations:** If $T_1: \mathbb{R}^n \to \mathbb{R}^m$ has matrix $A_1$ and $T_2: \mathbb{R}^m \to \mathbb{R}^p$ has matrix $A_2$, then the composite transformation $T_2 \circ T_1: \mathbb{R}^n \to \mathbb{R}^p$ has the matrix $A_2 A_1$. This is a fundamental connection: the product of matrices corresponds to the composition of linear transformations. This is why matrix multiplication order matters! If you're composing functions, the order in which you apply them dictates the order of matrix multiplication (the rightmost transformation's matrix is on the right in the product).

### Visualizing Transformations with Matrices

Let's revisit the idea of visualization.
Consider $T: \mathbb{R}^2 \to \mathbb{R}^2$ with matrix $A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$.
What does this do?
$T\left(\begin{bmatrix} x \\ y \end{bmatrix}\right) = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} x+y \\ y \end{bmatrix}$.

If you take a square in the xy-plane, say with vertices at (0,0), (1,0), (1,1), (0,1), and apply $T$:
$T(0,0) = (0,0)$
$T(1,0) = (1,0)$
$T(0,1) = (1,1)$
$T(1,1) = (2,1)$

The unit square gets transformed into a parallelogram with vertices (0,0), (1,0), (1,1), (2,1). This is a *shear transformation*. The x-coordinates are shifted by the y-coordinate. Matrices capture these geometric effects very directly.

**Key Point:** The matrix of a linear transformation is not just a computational tool; it's a geometric descriptor. The columns of the matrix tell you where the basis vectors go, and the determinant of the matrix (if it's a square matrix) tells you about the scaling factor of areas or volumes under the transformation.

### Common Pitfalls and Exam Tips

*   **Order of Basis Vectors:** When constructing the matrix, make sure the columns correspond to the correct order of the basis vectors you're using. Swapping basis vectors will swap columns in the matrix.
*   **Domain vs. Codomain Dimensions:** If $T: V \to W$, and $\dim(V) = n$, $\dim(W) = m$, the matrix representation will be $m \times n$. Always get this dimension correct.
*   **Basis Choice:** If the problem specifies a basis other than the standard one, you *must* use that specified basis to find the matrix. Using the standard basis will give an incorrect matrix for that specific problem. Reference books like Andrilli & Hecker or Anton & Rorres often provide examples with non-standard bases.
*   **Matrix Multiplication Order for Composition:** Remember that $(T_2 \circ T_1)(\mathbf{x}) = T_2(T_1(\mathbf{x}))$. If $T_1$ has matrix $A_1$ and $T_2$ has matrix $A_2$, then $T_2 \circ T_1$ has matrix $A_2 A_1$. The order is crucial!
*   **Relating Matrix Properties to Transformation Properties:** If asked about properties of a transformation (like injectivity or surjectivity), think about the properties of its matrix. For example, a linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ is injective if and only if its standard matrix has linearly independent columns (meaning its null space is just $\{\mathbf{0}\}$, or equivalently, its rank equals $n$).

### Summary

Today, we've seen how linear transformations, which are fundamental mappings in vector spaces, can be concretely represented by matrices.

*   For transformations $T: \mathbb{R}^n \to \mathbb{R}^m$, the *standard matrix* $A$ is an $m \times n$ matrix whose columns are the images of the standard basis vectors of $\mathbb{R}^n$ under $T$, i.e., $A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & \dots & T(\mathbf{e}_n) \end{bmatrix}$.
*   The action of the transformation is then $T(\mathbf{x}) = A\mathbf{x}$.
*   This concept extends to abstract vector spaces by choosing bases for the domain and codomain.
*   The composition of linear transformations corresponds to the multiplication of their matrices.

Mastering this connection between linear transformations and matrices is key to unlocking deeper concepts in linear algebra and its applications in information science, machine learning, and beyond. Keep practicing these matrix constructions, and you'll find it makes many problems much more approachable!

***

### Sample Questions and Answers

**Q1. (Conceptual) Explain why the columns of the standard matrix of a linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ are the images of the standard basis vectors of $\mathbb{R}^n$.**

**Answer:**
Let $T: \mathbb{R}^n \to \mathbb{R}^m$ be a linear transformation. Let $A$ be its standard $m \times n$ matrix. The standard basis vectors for $\mathbb{R}^n$ are $\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n$, where $\mathbf{e}_j$ has a 1 in the $j$-th position and 0s elsewhere.
Any vector $\mathbf{x} \in \mathbb{R}^n$ can be written as $\mathbf{x} = x_1\mathbf{e}_1 + x_2\mathbf{e}_2 + \dots + x_n\mathbf{e}_n$.
By the linearity of $T$, we have $T(\mathbf{x}) = T(x_1\mathbf{e}_1 + \dots + x_n\mathbf{e}_n) = x_1T(\mathbf{e}_1) + \dots + x_nT(\mathbf{e}_n)$.
The standard matrix $A$ is defined such that $T(\mathbf{x}) = A\mathbf{x}$.
Let the columns of $A$ be $\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_n$, so $A = \begin{bmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \dots & \mathbf{a}_n \end{bmatrix}$.
Then $A\mathbf{x} = x_1\mathbf{a}_1 + x_2\mathbf{a}_2 + \dots + x_n\mathbf{a}_n$.
For $T(\mathbf{x}) = A\mathbf{x}$ to hold for all $\mathbf{x}$, it must be true that $x_1T(\mathbf{e}_1) + \dots + x_nT(\mathbf{e}_n) = x_1\mathbf{a}_1 + \dots + x_n\mathbf{a}_n$.
This equality must hold for any choice of $x_1, \dots, x_n$. This implies that the vectors $T(\mathbf{e}_j)$ must be equal to the columns $\mathbf{a}_j$.
Therefore, the columns of the standard matrix $A$ are indeed the images of the standard basis vectors under $T$.

**Q2. (Exam-Oriented) Find the standard matrix for the linear transformation $T: \mathbb{R}^2 \to \mathbb{R}^3$ defined by $T(x, y) = (x - y, x + y, y)$.**

**Answer:**
The transformation maps from $\mathbb{R}^2$ to $\mathbb{R}^3$, so the standard matrix will be a $3 \times 2$ matrix.
The standard basis vectors for $\mathbb{R}^2$ are $\mathbf{e}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ and $\mathbf{e}_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.

We need to find $T(\mathbf{e}_1)$ and $T(\mathbf{e}_2)$:
$T(\mathbf{e}_1) = T(1, 0) = (1 - 0, 1 + 0, 0) = (1, 1, 0)$.
As a column vector: $\begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix}$.

$T(\mathbf{e}_2) = T(0, 1) = (0 - 1, 0 + 1, 1) = (-1, 1, 1)$.
As a column vector: $\begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix}$.

The standard matrix $A$ is formed by placing these column vectors side-by-side:
$A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) \end{bmatrix} = \begin{bmatrix} 1 & -1 \\ 1 & 1 \\ 0 & 1 \end{bmatrix}$.

To verify, let's apply this matrix to a general vector $\begin{bmatrix} x \\ y \end{bmatrix}$:
$A\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 & -1 \\ 1 & 1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1x + (-1)y \\ 1x + 1y \\ 0x + 1y \end{bmatrix} = \begin{bmatrix} x-y \\ x+y \\ y \end{bmatrix}$.
This matches the definition of $T(x, y)$.

**Q3. (Application) Let $T_1: \mathbb{R}^2 \to \mathbb{R}^2$ be a rotation by $90^\circ$ counterclockwise, and $T_2: \mathbb{R}^2 \to \mathbb{R}^2$ be a reflection across the y-axis. Find the matrix for the composite transformation $T_2 \circ T_1$.**

**Answer:**
First, find the standard matrices for $T_1$ and $T_2$.

For $T_1$ (rotation by $90^\circ$ counterclockwise): $\theta = 90^\circ$.
$\cos 90^\circ = 0$, $\sin 90^\circ = 1$.
The rotation matrix is $A_1 = \begin{bmatrix} \cos 90^\circ & -\sin 90^\circ \\ \sin 90^\circ & \cos 90^\circ \end{bmatrix} = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$.

For $T_2$ (reflection across the y-axis):
$T_2(x, y) = (-x, y)$.
$T_2(\mathbf{e}_1) = T_2(1,0) = (-1, 0) \implies \begin{bmatrix} -1 \\ 0 \end{bmatrix}$.
$T_2(\mathbf{e}_2) = T_2(0,1) = (0, 1) \implies \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.
The matrix for $T_2$ is $A_2 = \begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix}$.

The matrix for the composite transformation $T_2 \circ T_1$ is the product $A_2 A_1$. Remember, the transformation applied first has its matrix on the right.

Matrix for $T_2 \circ T_1 = A_2 A_1 = \begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$.

Performing matrix multiplication:
$A_2 A_1 = \begin{bmatrix} (-1)(0) + (0)(1) & (-1)(-1) + (0)(0) \\ (0)(0) + (1)(1) & (0)(-1) + (1)(0) \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$.

So, the matrix for $T_2 \circ T_1$ is $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$.

Let's interpret this result. The matrix $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ corresponds to swapping the coordinates $(x, y) \to (y, x)$, which is a reflection across the line $y=x$.
Let's check if the composition makes sense:
$T_1$ rotates $(1,0)$ to $(0,1)$.
$T_2$ reflects $(0,1)$ to $(0,1)$.
So $(T_2 \circ T_1)(1,0) = (0,1)$. The matrix $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ applied to $(1,0)$ gives $(0,1)$. Correct.

$T_1$ rotates $(0,1)$ to $(-1,0)$.
$T_2$ reflects $(-1,0)$ to $(-(-1), 0) = (1,0)$.
So $(T_2 \circ T_1)(0,1) = (1,0)$. The matrix $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ applied to $(0,1)$ gives $(1,0)$. Correct.

The composition indeed results in a reflection across the line $y=x$.
