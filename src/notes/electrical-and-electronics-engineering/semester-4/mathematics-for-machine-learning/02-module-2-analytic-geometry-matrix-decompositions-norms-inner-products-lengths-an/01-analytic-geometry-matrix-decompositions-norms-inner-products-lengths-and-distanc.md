---
title: "ANALYTIC GEOMETRY, MATRIX DECOMPOSITIONS: Norms, Inner Products, Lengths and Distances, Angles and Orthogonality, Orthonormal Basis, Orthogonal Complement, Orthogonal Projections – Projection into One Dimensional Subspaces, Projection onto General Subspaces, Gram-Schmidt Orthogonalization."
subject: "MATHEMATICS FOR MACHINE LEARNING"
module: "Module 2: ANALYTIC GEOMETRY, MATRIX DECOMPOSITIONS: Norms, Inner Products, Lengths and Distances, Angles and Orthogonality, Orthonormal Basis, Orthogonal Complement, Orthogonal Projections – Projection into One Dimensional Subspaces, Projection onto General Subspaces, Gram"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35eec"
status: "completed"
scrapedAt: "2026-05-23T16:17:18.285Z"
---
# Module 2: Analytic Geometry and Matrix Decompositions

This module delves into the fundamental concepts of analytic geometry and matrix decompositions, providing the mathematical foundation for understanding and manipulating data in machine learning. We will explore vector norms, inner products, lengths, distances, angles, orthogonality, orthonormal bases, orthogonal complements, and projections. These concepts are crucial for tasks like feature selection, dimensionality reduction, and understanding the geometric interpretation of algorithms.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand and apply the concepts of vector norms, inner products, and distances.
*   Grasp the notions of angles and orthogonality in vector spaces.
*   Define and utilize orthonormal bases.
*   Comprehend and compute orthogonal complements.
*   Perform orthogonal projections onto subspaces.
*   Apply the Gram-Schmidt orthogonalization process.

## Course Outcomes Alignment

This module directly contributes to the following Course Outcomes:

*   **CO1: Make use of the concepts, rules and results about linear equations, matrix algebra, vector spaces, eigenvalues & eigenvectors and orthogonality & diagonalization to solve computational problems (Knowledge Level: K3)**
    *   This module builds the foundational understanding of vector spaces, orthogonality, and related concepts that are essential for applying linear algebra techniques in machine learning.
*   **CO2: Perform calculus operations on functions of several variables and matrices, including partial derivatives and gradients (Knowledge Level: K3)**
    *   While not directly focused on calculus, the geometric interpretations of norms and projections can inform the optimization process, which involves calculus.
*   **CO4: Train Machine Learning Models using unconstrained and constrained optimization methods (Knowledge Level: K3)**
    *   Concepts like orthogonal projections are fundamental to many optimization algorithms and understanding the geometric constraints in optimization problems.

---

## 1. Norms, Inner Products, Lengths, and Distances

These concepts provide a way to quantify the "size" of vectors and the "similarity" or "difference" between them.

### 1.1. Inner Product

The inner product (also known as the dot product for real vectors) is a fundamental operation that takes two vectors and returns a scalar. It captures information about their relative orientation and magnitude.

**Key Concept:** The inner product is a function $\langle \cdot, \cdot \rangle: V \times V \to \mathbb{R}$ (for real vector spaces) that satisfies certain properties.

**Definition:** For two vectors $\mathbf{u} = [u_1, u_2, \dots, u_n]$ and $\mathbf{v} = [v_1, v_2, \dots, v_n]$ in $\mathbb{R}^n$, the standard inner product is defined as:

$$
\langle \mathbf{u}, \mathbf{v} \rangle = \mathbf{u}^T \mathbf{v} = \sum_{i=1}^n u_i v_i
$$

**Properties of Inner Products:**

1.  **Symmetry:** $\langle \mathbf{u}, \mathbf{v} \rangle = \langle \mathbf{v}, \mathbf{u} \rangle$
2.  **Linearity in the first argument:** $\langle a\mathbf{u} + b\mathbf{v}, \mathbf{w} \rangle = a\langle \mathbf{u}, \mathbf{w} \rangle + b\langle \mathbf{v}, \mathbf{w} \rangle$ for scalars $a, b$ and vectors $\mathbf{u}, \mathbf{v}, \mathbf{w}$.
3.  **Positive-definiteness:** $\langle \mathbf{u}, \mathbf{u} \rangle \ge 0$, and $\langle \mathbf{u}, \mathbf{u} \rangle = 0$ if and only if $\mathbf{u} = \mathbf{0}$.

**Textbook Reference:** Deisenroth, Faisal, & Ong (Chapter 2.3.1) introduce the dot product as a fundamental building block. Strang (Chapter 4.2) discusses inner products and their properties extensively.

**Example:**
Let $\mathbf{u} = [1, 2, 3]$ and $\mathbf{v} = [4, 5, 6]$.
$$
\langle \mathbf{u}, \mathbf{v} \rangle = (1)(4) + (2)(5) + (3)(6) = 4 + 10 + 18 = 32
$$

### 1.2. Length (Norm)

The length of a vector, also known as its norm, is derived from the inner product. It represents the magnitude of the vector.

**Key Concept:** The norm of a vector is the square root of its inner product with itself.

**Definition:** For a vector $\mathbf{u}$ in $\mathbb{R}^n$, its Euclidean norm (or $L_2$ norm) is defined as:

$$
\|\mathbf{u}\| = \sqrt{\langle \mathbf{u}, \mathbf{u} \rangle} = \sqrt{\sum_{i=1}^n u_i^2}
$$

**Properties of Norms:**

1.  **Non-negativity:** $\|\mathbf{u}\| \ge 0$, and $\|\mathbf{u}\| = 0$ if and only if $\mathbf{u} = \mathbf{0}$.
2.  **Homogeneity:** $\|c\mathbf{u}\| = |c|\|\mathbf{u}\|$ for any scalar $c$.
3.  **Triangle Inequality:** $\|\mathbf{u} + \mathbf{v}\| \le \|\mathbf{u}\| + \|\mathbf{v}\|$

**Important Note:** Different inner products can lead to different norms. The standard inner product yields the $L_2$ norm. Other common norms in machine learning include the $L_1$ norm (Manhattan distance) and $L_\infty$ norm (Chebyshev distance).

**$L_p$ Norms:**
For $\mathbf{u} = [u_1, u_2, \dots, u_n]$, the $L_p$ norm is:
$$
\|\mathbf{u}\|_p = \left(\sum_{i=1}^n |u_i|^p\right)^{1/p}
$$
*   $L_1$ norm: $\|\mathbf{u}\|_1 = \sum_{i=1}^n |u_i|$ (sum of absolute values)
*   $L_2$ norm: $\|\mathbf{u}\|_2 = \sqrt{\sum_{i=1}^n u_i^2}$ (Euclidean norm)
*   $L_\infty$ norm: $\|\mathbf{u}\|_\infty = \max_{i} |u_i|$ (maximum absolute value)

**Textbook Reference:** Deisenroth, Faisal, & Ong (Chapter 2.3.2) discuss vector norms. Strang (Chapter 4.2) also covers norms derived from inner products.

**Example:**
Let $\mathbf{u} = [3, -4]$.
$$
\|\mathbf{u}\| = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5
$$
$L_1$ norm: $\|\mathbf{u}\|_1 = |3| + |-4| = 3 + 4 = 7$
$L_\infty$ norm: $\|\mathbf{u}\|_\infty = \max(|3|, |-4|) = \max(3, 4) = 4$

### 1.3. Distance

The distance between two vectors is a measure of how far apart they are. It's often defined using a norm.

**Key Concept:** The distance between two vectors is the norm of their difference.

**Definition:** For two vectors $\mathbf{u}$ and $\mathbf{v}$ in $\mathbb{R}^n$, the Euclidean distance is:

$$
d(\mathbf{u}, \mathbf{v}) = \|\mathbf{u} - \mathbf{v}\| = \sqrt{\sum_{i=1}^n (u_i - v_i)^2}
$$

**Textbook Reference:** Deisenroth, Faisal, & Ong (Chapter 2.3.2) relate norms to distances.

**Example:**
Let $\mathbf{u} = [1, 2]$ and $\mathbf{v} = [4, 6]$.
$$
d(\mathbf{u}, \mathbf{v}) = \|\mathbf{u} - \mathbf{v}\| = \|[1-4, 2-6]\| = \|[-3, -4]\| = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5
$$

---

## 2. Angles and Orthogonality

Angles and orthogonality are crucial for understanding the geometric relationships between vectors and subspaces.

### 2.1. Angle Between Vectors

The angle between two non-zero vectors can be determined using the inner product.

**Key Concept:** The cosine of the angle between two vectors is related to their inner product and norms.

**Definition:** For two non-zero vectors $\mathbf{u}$ and $\mathbf{v}$ in $\mathbb{R}^n$, the angle $\theta$ between them is given by:

$$
\cos \theta = \frac{\langle \mathbf{u}, \mathbf{v} \rangle}{\|\mathbf{u}\| \|\mathbf{v}\|}
$$

**Important Note (Cauchy-Schwarz Inequality):** This formula is valid because of the Cauchy-Schwarz inequality: $|\langle \mathbf{u}, \mathbf{v} \rangle| \le \|\mathbf{u}\| \|\mathbf{v}\|$, which ensures that the value of $\cos \theta$ is between -1 and 1.

**Textbook Reference:** Deisenroth, Faisal, & Ong (Chapter 2.3.3) cover angles. Strang (Chapter 4.2) also discusses this relationship.

**Example:**
Let $\mathbf{u} = [1, 0]$ and $\mathbf{v} = [1, 1]$.
$$
\|\mathbf{u}\| = \sqrt{1^2 + 0^2} = 1
$$
$$
\|\mathbf{v}\| = \sqrt{1^2 + 1^2} = \sqrt{2}
$$
$$
\langle \mathbf{u}, \mathbf{v} \rangle = (1)(1) + (0)(1) = 1
$$
$$
\cos \theta = \frac{1}{1 \cdot \sqrt{2}} = \frac{1}{\sqrt{2}}
$$
Therefore, $\theta = \arccos\left(\frac{1}{\sqrt{2}}\right) = \frac{\pi}{4}$ or 45 degrees.

### 2.2. Orthogonality

Orthogonality is a special case of angle, where the angle between two vectors is 90 degrees ($\pi/2$ radians).

**Key Concept:** Two vectors are orthogonal if their inner product is zero.

**Definition:** Two vectors $\mathbf{u}$ and $\mathbf{v}$ are orthogonal if $\langle \mathbf{u}, \mathbf{v} \rangle = 0$.

**Notation:** $\mathbf{u} \perp \mathbf{v}$

**Textbook Reference:** Deisenroth, Faisal, & Ong (Chapter 2.3.3) define orthogonality. Strang (Chapter 4.2) also emphasizes this definition.

**Example:**
Let $\mathbf{u} = [1, 2]$ and $\mathbf{v} = [-4, 2]$.
$$
\langle \mathbf{u}, \mathbf{v} \rangle = (1)(-4) + (2)(2) = -4 + 4 = 0
$$
Since the inner product is zero, $\mathbf{u}$ and $\mathbf{v}$ are orthogonal.

**Orthogonal Sets:** A set of vectors is orthogonal if every pair of distinct vectors in the set is orthogonal.

**Orthonormal Sets:** An orthogonal set of vectors where each vector has a norm of 1 (i.e., they are unit vectors).

---

## 3. Orthonormal Basis

An orthonormal basis is a set of orthogonal and normalized vectors that span a vector space. It simplifies many linear algebra operations.

**Key Concept:** An orthonormal basis provides a particularly convenient coordinate system.

**Definition:** A set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ is an **orthonormal basis** for a subspace if:

1.  **Orthogonality:** $\langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0$ for all $i \ne j$.
2.  **Normalization:** $\|\mathbf{v}_i\| = 1$ for all $i$.

If condition 2 is relaxed (vectors are orthogonal but not necessarily unit length), the set is called an **orthogonal basis**.

**Properties of Orthonormal Bases:**

*   Any vector $\mathbf{x}$ in the subspace can be uniquely represented as a linear combination of the basis vectors: $\mathbf{x} = \sum_{i=1}^k c_i \mathbf{v}_i$.
*   The coefficients $c_i$ can be easily found using the inner product: $c_i = \langle \mathbf{x}, \mathbf{v}_i \rangle$.
*   The norm of $\mathbf{x}$ is easily computed: $\|\mathbf{x}\|^2 = \sum_{i=1}^k c_i^2$.

**Textbook Reference:** Deisenroth, Faisal, & Ong (Chapter 2.3.4) discuss orthonormal bases. Strang (Chapter 4.3) dedicates a section to orthonormal bases and their properties, highlighting their importance.

**Example:**
Consider the standard basis vectors in $\mathbb{R}^2$: $\mathbf{e}_1 = [1, 0]$ and $\mathbf{e}_2 = [0, 1]$.
*   $\langle \mathbf{e}_1, \mathbf{e}_2 \rangle = (1)(0) + (0)(1) = 0$ (Orthogonal)
*   $\|\mathbf{e}_1\| = \sqrt{1^2 + 0^2} = 1$ (Normalized)
*   $\|\mathbf{e}_2\| = \sqrt{0^2 + 1^2} = 1$ (Normalized)
Thus, $\{\mathbf{e}_1, \mathbf{e}_2\}$ is an orthonormal basis for $\mathbb{R}^2$.

Let $\mathbf{x} = [3, 4]$.
Using the orthonormal basis:
$c_1 = \langle \mathbf{x}, \mathbf{e}_1 \rangle = \langle [3, 4], [1, 0] \rangle = 3$
$c_2 = \langle \mathbf{x}, \mathbf{e}_2 \rangle = \langle [3, 4], [0, 1] \rangle = 4$
So, $\mathbf{x} = 3\mathbf{e}_1 + 4\mathbf{e}_2$.
$\|\mathbf{x}\|^2 = c_1^2 + c_2^2 = 3^2 + 4^2 = 9 + 16 = 25$. This matches $\|\mathbf{x}\| = \sqrt{3^2 + 4^2} = 5$.

---

## 4. Orthogonal Complement

The orthogonal complement of a subspace is the set of all vectors that are orthogonal to every vector in that subspace.

**Key Concept:** The orthogonal complement generalizes the idea of being "perpendicular" to a line or plane.

**Definition:** Given a subspace $W$ of a vector space $V$, the orthogonal complement of $W$, denoted by $W^\perp$, is the set of all vectors $\mathbf{v} \in V$ such that $\mathbf{v}$ is orthogonal to every vector in $W$.

$$
W^\perp = \{\mathbf{v} \in V \mid \langle \mathbf{v}, \mathbf{w} \rangle = 0 \text{ for all } \mathbf{w} \in W \}
$$

**Properties of Orthogonal Complements:**

*   $W^\perp$ is also a subspace of $V$.
*   $W \cap W^\perp = \{\mathbf{0}\}$ (the only vector in both is the zero vector).
*   If $W$ is a subspace of $V$, then $V = W \oplus W^\perp$ (direct sum). This means any vector in $V$ can be uniquely written as a sum of a vector in $W$ and a vector in $W^\perp$.
*   If $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ is a basis for $W$, then $\mathbf{u} \in W^\perp$ if and only if $\langle \mathbf{u}, \mathbf{v}_i \rangle = 0$ for all $i=1, \dots, k$. This simplifies checking orthogonality.

**Textbook Reference:** Strang (Chapter 4.5) provides a thorough explanation of the four fundamental subspaces, including the null space and column space, and their orthogonal complements. Axler (Chapter 3) discusses orthogonal complements in the context of Hilbert spaces.

**Example:**
Let $W$ be the subspace of $\mathbb{R}^3$ spanned by the vector $\mathbf{w} = [1, 1, 1]$. $W = \text{span}(\mathbf{w})$.
We want to find $W^\perp$. A vector $\mathbf{v} = [v_1, v_2, v_3]$ is in $W^\perp$ if $\langle \mathbf{v}, \mathbf{w} \rangle = 0$.
$$
\langle \mathbf{v}, \mathbf{w} \rangle = v_1(1) + v_2(1) + v_3(1) = v_1 + v_2 + v_3 = 0
$$
The set of vectors $[v_1, v_2, v_3]$ satisfying this equation forms a plane through the origin. For instance, $[1, -1, 0]$, $[1, 0, -1]$, $[0, 1, -1]$ are in $W^\perp$. Any linear combination of these vectors is also in $W^\perp$.

If $V = \mathbb{R}^3$ and $W$ is the line spanned by $[1, 1, 1]$, then $W^\perp$ is the plane $v_1 + v_2 + v_3 = 0$.

---

## 5. Orthogonal Projections

Orthogonal projections are fundamental for approximating vectors by projecting them onto subspaces. This is a key technique in machine learning for dimensionality reduction and solving least-squares problems.

### 5.1. Projection into One-Dimensional Subspaces

The projection of a vector onto a line (one-dimensional subspace) is the "shadow" of the vector cast onto that line.

**Key Concept:** Projecting a vector $\mathbf{b}$ onto the subspace spanned by a vector $\mathbf{a}$ finds the component of $\mathbf{b}$ that lies along $\mathbf{a}$.

**Definition:** Let $\mathbf{a} \ne \mathbf{0}$ be a vector. The projection of vector $\mathbf{b}$ onto the subspace spanned by $\mathbf{a}$ (i.e., onto the line in the direction of $\mathbf{a}$) is denoted by $\text{proj}_\mathbf{a} \mathbf{b}$.

The projected vector is parallel to $\mathbf{a}$, so it can be written as $c\mathbf{a}$ for some scalar $c$. To find $c$, we use the fact that the error vector $(\mathbf{b} - c\mathbf{a})$ must be orthogonal to $\mathbf{a}$.
$$
\langle \mathbf{b} - c\mathbf{a}, \mathbf{a} \rangle = 0
$$
$$
\langle \mathbf{b}, \mathbf{a} \rangle - c\langle \mathbf{a}, \mathbf{a} \rangle = 0
$$
$$
c = \frac{\langle \mathbf{b}, \mathbf{a} \rangle}{\langle \mathbf{a}, \mathbf{a} \rangle} = \frac{\mathbf{b}^T \mathbf{a}}{\mathbf{a}^T \mathbf{a}} = \frac{\mathbf{b}^T \mathbf{a}}{\|\mathbf{a}\|^2}
$$
Thus, the projection is:
$$
\text{proj}_\mathbf{a} \mathbf{b} = c\mathbf{a} = \frac{\mathbf{b}^T \mathbf{a}}{\|\mathbf{a}\|^2} \mathbf{a}
$$

**If $\mathbf{a}$ is a unit vector (i.e., $\|\mathbf{a}\| = 1$), the formula simplifies to:**
$$
\text{proj}_\mathbf{a} \mathbf{b} = (\mathbf{b}^T \mathbf{a}) \mathbf{a} = \langle \mathbf{b}, \mathbf{a} \rangle \mathbf{a}
$$
This is simply the component of $\mathbf{b}$ along the unit vector $\mathbf{a}$.

**Textbook Reference:** Deisenroth, Faisal, & Ong (Chapter 2.3.5) explain projection onto a line. Strang (Chapter 4.1) introduces projections and connects them to least-squares problems.

**Example:**
Let $\mathbf{b} = [1, 2]$ and $\mathbf{a} = [1, 0]$.
$\|\mathbf{a}\|^2 = 1^2 + 0^2 = 1$.
$$
\mathbf{b}^T \mathbf{a} = (1)(1) + (2)(0) = 1
$$
$$
\text{proj}_\mathbf{a} \mathbf{b} = \frac{1}{1} [1, 0] = [1, 0]
$$
This makes sense, as $\mathbf{b}$ has a component of 1 in the direction of the x-axis.

Let $\mathbf{b} = [1, 2]$ and $\mathbf{a} = [1, 1]$.
$\|\mathbf{a}\|^2 = 1^2 + 1^2 = 2$.
$$
\mathbf{b}^T \mathbf{a} = (1)(1) + (2)(1) = 3
$$
$$
\text{proj}_\mathbf{a} \mathbf{b} = \frac{3}{2} [1, 1] = [1.5, 1.5]
$$
The projection of $\mathbf{b}$ onto the line $y=x$ is $[1.5, 1.5]$.

### 5.2. Projection onto General Subspaces

This extends the concept to projecting onto subspaces of any dimension.

**Key Concept:** Projecting onto a subspace is equivalent to projecting onto the basis vectors of that subspace.

**Definition:** Let $W$ be a subspace of $V$ with an orthonormal basis $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$. The orthogonal projection of a vector $\mathbf{b}$ onto the subspace $W$ is denoted by $\text{proj}_W \mathbf{b}$.

If $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ is an **orthonormal basis** for $W$:
$$
\text{proj}_W \mathbf{b} = \sum_{i=1}^k \langle \mathbf{b}, \mathbf{v}_i \rangle \mathbf{v}_i
$$
This is the sum of the projections of $\mathbf{b}$ onto each basis vector.

**If $W$ has an orthogonal basis $\{\mathbf{a}_1, \dots, \mathbf{a}_k\}$ (not necessarily normalized):**
$$
\text{proj}_W \mathbf{b} = \sum_{i=1}^k \frac{\langle \mathbf{b}, \mathbf{a}_i \rangle}{\langle \mathbf{a}_i, \mathbf{a}_i \rangle} \mathbf{a}_i
$$

**Projection Matrix:**
Let $A$ be a matrix whose columns are the basis vectors of $W$. If the columns of $A$ are orthonormal (i.e., $A^T A = I$), then the projection matrix onto the column space of $A$ is $P = A A^T$.
$$
\text{proj}_W \mathbf{b} = P\mathbf{b} = A A^T \mathbf{b}
$$

If the columns of $A$ are linearly independent but not necessarily orthonormal, the projection matrix is:
$$
P = A (A^T A)^{-1} A^T
$$
This is a crucial formula for solving least-squares problems. $P\mathbf{b}$ is the vector in the column space of $A$ that is closest to $\mathbf{b}$. The difference $\mathbf{b} - P\mathbf{b}$ is orthogonal to the column space of $A$.

**Textbook Reference:** Deisenroth, Faisal, & Ong (Chapter 2.3.5) cover projections onto subspaces. Strang (Chapter 4.4) extensively discusses projection matrices and their use in least squares. Boyd & Vandenberghe (Chapter 8.1) discuss projections in the context of optimization.

**Example:**
Let $W$ be the subspace of $\mathbb{R}^3$ spanned by $\mathbf{v}_1 = [1, 0, 0]$ and $\mathbf{v}_2 = [0, 1, 0]$. This is the xy-plane. $\{\mathbf{v}_1, \mathbf{v}_2\}$ is an orthonormal basis for $W$.
Let $\mathbf{b} = [3, 4, 5]$.
$$
\text{proj}_W \mathbf{b} = \langle \mathbf{b}, \mathbf{v}_1 \rangle \mathbf{v}_1 + \langle \mathbf{b}, \mathbf{v}_2 \rangle \mathbf{v}_2
$$
$$
\langle \mathbf{b}, \mathbf{v}_1 \rangle = (3)(1) + (4)(0) + (5)(0) = 3
$$
$$
\langle \mathbf{b}, \mathbf{v}_2 \rangle = (3)(0) + (4)(1) + (5)(0) = 4
$$
$$
\text{proj}_W \mathbf{b} = 3[1, 0, 0] + 4[0, 1, 0] = [3, 0, 0] + [0, 4, 0] = [3, 4, 0]
$$
This is the projection of $[3, 4, 5]$ onto the xy-plane.

**Example using Projection Matrix:**
Let $A = \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{bmatrix}$. The columns span the xy-plane. $A^T A = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I$.
So, $P = A A^T = \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}$.
For $\mathbf{b} = [3, 4, 5]^T$:
$$
P\mathbf{b} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \\ 5 \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \\ 0 \end{bmatrix}
$$

---

## 6. Gram-Schmidt Orthogonalization

The Gram-Schmidt process is an algorithm for converting a set of linearly independent vectors into an orthogonal or orthonormal set that spans the same subspace.

**Key Concept:** This process systematically removes components of vectors that are not orthogonal to previously processed vectors.

**Algorithm:** Given a set of linearly independent vectors $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_k\}$:

1.  **First vector:** Let $\mathbf{v}_1 = \mathbf{u}_1$.
    If we want an orthonormal set, normalize it: $\mathbf{e}_1 = \frac{\mathbf{v}_1}{\|\mathbf{v}_1\|}$.

2.  **Second vector:** Project $\mathbf{u}_2$ onto the subspace spanned by $\mathbf{v}_1$ and subtract this projection from $\mathbf{u}_2$.
    $$
    \mathbf{v}_2 = \mathbf{u}_2 - \text{proj}_{\mathbf{v}_1} \mathbf{u}_2 = \mathbf{u}_2 - \frac{\langle \mathbf{u}_2, \mathbf{v}_1 \rangle}{\|\mathbf{v}_1\|^2} \mathbf{v}_1
    $$
    If we want an orthonormal set, normalize it: $\mathbf{e}_2 = \frac{\mathbf{v}_2}{\|\mathbf{v}_2\|}$.

3.  **Third vector:** Project $\mathbf{u}_3$ onto the subspace spanned by $\{\mathbf{v}_1, \mathbf{v}_2\}$ and subtract.
    $$
    \mathbf{v}_3 = \mathbf{u}_3 - \text{proj}_{\mathbf{v}_1} \mathbf{u}_3 - \text{proj}_{\mathbf{v}_2} \mathbf{u}_3
    $$
    $$
    \mathbf{v}_3 = \mathbf{u}_3 - \frac{\langle \mathbf{u}_3, \mathbf{v}_1 \rangle}{\|\mathbf{v}_1\|^2} \mathbf{v}_1 - \frac{\langle \mathbf{u}_3, \mathbf{v}_2 \rangle}{\|\mathbf{v}_2\|^2} \mathbf{v}_2
    $$
    If we want an orthonormal set, normalize it: $\mathbf{e}_3 = \frac{\mathbf{v}_3}{\|\mathbf{v}_3\|}$.

4.  **General step:** For $i = 1, \dots, k$:
    $$
    \mathbf{v}_i = \mathbf{u}_i - \sum_{j=1}^{i-1} \text{proj}_{\mathbf{v}_j} \mathbf{u}_i = \mathbf{u}_i - \sum_{j=1}^{i-1} \frac{\langle \mathbf{u}_i, \mathbf{v}_j \rangle}{\|\mathbf{v}_j\|^2} \mathbf{v}_j
    $$
    And for an orthonormal set: $\mathbf{e}_i = \frac{\mathbf{v}_i}{\|\mathbf{v}_i\|}$.

**Textbook Reference:** Deisenroth, Faisal, & Ong (Chapter 2.3.6) present the Gram-Schmidt process. Strang (Chapter 4.3) also explains this algorithm and its connection to QR decomposition. Axler (Chapter 3) covers the process in a more abstract setting.

**Example:**
Let $\{\mathbf{u}_1, \mathbf{u}_2\}$ be $\{\begin{bmatrix} 1 \\ 1 \end{bmatrix}, \begin{bmatrix} 2 \\ 0 \end{bmatrix}\}$. We want to find an orthonormal basis for the span of these vectors.

1.  **v1:**
    $$
    \mathbf{v}_1 = \mathbf{u}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}
    $$
    $$
    \|\mathbf{v}_1\|^2 = 1^2 + 1^2 = 2
    $$
    $$
    \mathbf{e}_1 = \frac{\mathbf{v}_1}{\|\mathbf{v}_1\|} = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1/\sqrt{2} \\ 1/\sqrt{2} \end{bmatrix}
    $$

2.  **v2:**
    $$
    \text{proj}_{\mathbf{v}_1} \mathbf{u}_2 = \frac{\langle \mathbf{u}_2, \mathbf{v}_1 \rangle}{\|\mathbf{v}_1\|^2} \mathbf{v}_1 = \frac{\langle \begin{bmatrix} 2 \\ 0 \end{bmatrix}, \begin{bmatrix} 1 \\ 1 \end{bmatrix} \rangle}{2} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \frac{(2)(1) + (0)(1)}{2} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \frac{2}{2} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}
    $$
    $$
    \mathbf{v}_2 = \mathbf{u}_2 - \text{proj}_{\mathbf{v}_1} \mathbf{u}_2 = \begin{bmatrix} 2 \\ 0 \end{bmatrix} - \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ -1 \end{bmatrix}
    $$
    $$
    \|\mathbf{v}_2\|^2 = 1^2 + (-1)^2 = 2
    $$
    $$
    \mathbf{e}_2 = \frac{\mathbf{v}_2}{\|\mathbf{v}_2\|} = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} 1/\sqrt{2} \\ -1/\sqrt{2} \end{bmatrix}
    $$

The resulting orthonormal basis is $\{\begin{bmatrix} 1/\sqrt{2} \\ 1/\sqrt{2} \end{bmatrix}, \begin{bmatrix} 1/\sqrt{2} \\ -1/\sqrt{2} \end{bmatrix}\}$.

---

## Key Points to Remember

*   **Inner Product:** The fundamental operation for measuring similarity and defining angles/lengths. The standard dot product is crucial.
*   **Norm:** The length of a vector, derived from the inner product. $L_2$ norm is the most common.
*   **Distance:** Defined as the norm of the difference between two vectors.
*   **Orthogonality:** Two vectors are orthogonal if their inner product is zero. This implies a 90-degree angle.
*   **Orthonormal Basis:** A set of orthogonal unit vectors that span a subspace. Simplifies many calculations.
*   **Orthogonal Complement:** The set of vectors orthogonal to an entire subspace.
*   **Orthogonal Projection:** The closest vector in a subspace to a given vector. Solves the "best approximation" problem.
*   **Gram-Schmidt:** An algorithm to create orthogonal or orthonormal bases from any linearly independent set of vectors.

---

## Practice Questions

**Question 1:**
Let $\mathbf{u} = [1, 2, -1]$ and $\mathbf{v} = [3, 0, 2]$.
a) Calculate the inner product $\langle \mathbf{u}, \mathbf{v} \rangle$.
b) Calculate the $L_2$ norms of $\mathbf{u}$ and $\mathbf{v}$.
c) Calculate the Euclidean distance between $\mathbf{u}$ and $\mathbf{v}$.
d) Are $\mathbf{u}$ and $\mathbf{v}$ orthogonal?

**Answer 1:**
a) $\langle \mathbf{u}, \mathbf{v} \rangle = (1)(3) + (2)(0) + (-1)(2) = 3 + 0 - 2 = 1$.
b) $\|\mathbf{u}\| = \sqrt{1^2 + 2^2 + (-1)^2} = \sqrt{1 + 4 + 1} = \sqrt{6}$.
   $\|\mathbf{v}\| = \sqrt{3^2 + 0^2 + 2^2} = \sqrt{9 + 0 + 4} = \sqrt{13}$.
c) $\mathbf{u} - \mathbf{v} = [1-3, 2-0, -1-2] = [-2, 2, -3]$.
   $d(\mathbf{u}, \mathbf{v}) = \|[-2, 2, -3]\| = \sqrt{(-2)^2 + 2^2 + (-3)^2} = \sqrt{4 + 4 + 9} = \sqrt{17}$.
d) No, they are not orthogonal because their inner product is 1, not 0.

**Question 2:**
Find the projection of vector $\mathbf{b} = [1, 2, 3]$ onto the subspace spanned by $\mathbf{a} = [1, 1, 0]$.

**Answer 2:**
The projection of $\mathbf{b}$ onto $\mathbf{a}$ is given by $\text{proj}_\mathbf{a} \mathbf{b} = \frac{\langle \mathbf{b}, \mathbf{a} \rangle}{\|\mathbf{a}\|^2} \mathbf{a}$.
$\langle \mathbf{b}, \mathbf{a} \rangle = (1)(1) + (2)(1) + (3)(0) = 1 + 2 + 0 = 3$.
$\|\mathbf{a}\|^2 = 1^2 + 1^2 + 0^2 = 1 + 1 + 0 = 2$.
$$
\text{proj}_\mathbf{a} \mathbf{b} = \frac{3}{2} \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 3/2 \\ 3/2 \\ 0 \end{bmatrix}
$$

**Question 3:**
Use the Gram-Schmidt process to find an orthonormal basis for the subspace spanned by $\mathbf{u}_1 = [1, 0, 1]$ and $\mathbf{u}_2 = [1, 1, 0]$.

**Answer 3:**
1.  **v1:**
    $$
    \mathbf{v}_1 = \mathbf{u}_1 = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}
    $$
    $$
    \|\mathbf{v}_1\|^2 = 1^2 + 0^2 + 1^2 = 2
    $$
    $$
    \mathbf{e}_1 = \frac{\mathbf{v}_1}{\|\mathbf{v}_1\|} = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1/\sqrt{2} \\ 0 \\ 1/\sqrt{2} \end{bmatrix}
    $$

2.  **v2:**
    $$
    \text{proj}_{\mathbf{v}_1} \mathbf{u}_2 = \frac{\langle \mathbf{u}_2, \mathbf{v}_1 \rangle}{\|\mathbf{v}_1\|^2} \mathbf{v}_1 = \frac{\langle \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix}, \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} \rangle}{2} \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = \frac{(1)(1) + (1)(0) + (0)(1)}{2} \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = \frac{1}{2} \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1/2 \\ 0 \\ 1/2 \end{bmatrix}
    $$
    $$
    \mathbf{v}_2 = \mathbf{u}_2 - \text{proj}_{\mathbf{v}_1} \mathbf{u}_2 = \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix} - \begin{bmatrix} 1/2 \\ 0 \\ 1/2 \end{bmatrix} = \begin{bmatrix} 1/2 \\ 1 \\ -1/2 \end{bmatrix}
    $$
    $$
    \|\mathbf{v}_2\|^2 = (1/2)^2 + 1^2 + (-1/2)^2 = 1/4 + 1 + 1/4 = 1.5 = 3/2
    $$
    $$
    \mathbf{e}_2 = \frac{\mathbf{v}_2}{\|\mathbf{v}_2\|} = \frac{1}{\sqrt{3/2}} \begin{bmatrix} 1/2 \\ 1 \\ -1/2 \end{bmatrix} = \sqrt{\frac{2}{3}} \begin{bmatrix} 1/2 \\ 1 \\ -1/2 \end{bmatrix} = \begin{bmatrix} 1/\sqrt{6} \\ \sqrt{2/3} \\ -1/\sqrt{6} \end{bmatrix}
    $$

The orthonormal basis is $\left\{ \begin{bmatrix} 1/\sqrt{2} \\ 0 \\ 1/\sqrt{2} \end{bmatrix}, \begin{bmatrix} 1/\sqrt{6} \\ \sqrt{2/3} \\ -1/\sqrt{6} \end{bmatrix} \right\}$.

---
