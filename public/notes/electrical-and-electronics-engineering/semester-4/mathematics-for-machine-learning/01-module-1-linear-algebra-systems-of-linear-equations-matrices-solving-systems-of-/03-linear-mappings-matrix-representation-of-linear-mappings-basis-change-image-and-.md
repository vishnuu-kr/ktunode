---
title: "Linear Mappings – Matrix Representation of Linear Mappings, Basis Change, Image and Kernel."
subject: "MATHEMATICS FOR MACHINE LEARNING"
module: "Module 1: LINEAR ALGEBRA: Systems of Linear Equations – Matrices, Solving Systems of Linear Equations."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35eea"
status: "completed"
scrapedAt: "2026-05-23T16:17:17.584Z"
---
# MATHEMATICS FOR MACHINE LEARNING: Module 1 - LINEAR ALGEBRA

## Topic: Linear Mappings – Matrix Representation of Linear Mappings, Basis Change, Image and Kernel

This topic delves into the fundamental concept of linear mappings and how they can be represented and manipulated using matrices. We will explore how changing the basis affects this representation and understand the crucial properties of image (range) and kernel (null space).

### Learning Outcomes:

*   **Understand the definition and properties of linear mappings (or linear transformations).**
*   **Represent linear mappings as matrices in different bases.**
*   **Perform basis changes for linear mappings.**
*   **Define and compute the image (range) and kernel (null space) of a linear mapping.**
*   **Relate the dimensions of the image and kernel to the rank and nullity of a matrix.**

### Course Outcomes Alignment:

*   **CO1:** This topic directly addresses CO1 by using matrix algebra to represent and manipulate linear mappings, which are core to solving computational problems in machine learning. Understanding basis change and image/kernel is essential for comprehending the behavior of data transformations.
*   **CO2:** While not the primary focus, the understanding of how linear mappings transform vectors will lay the groundwork for calculus operations on vector-valued functions encountered later.
*   **CO4:** Knowledge of linear mappings and their properties (like invertibility, which relates to image and kernel) is crucial for understanding optimization problems in machine learning, especially when dealing with linear transformations of data or parameters.

---

### 1. Linear Mappings (Linear Transformations)

#### 1.1 Definition

A mapping $T: V \to W$ between two vector spaces $V$ and $W$ is called a **linear mapping** (or linear transformation) if it satisfies the following two properties for all vectors $\mathbf{u}, \mathbf{v} \in V$ and all scalars $c$:

1.  **Additivity:** $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$
2.  **Homogeneity:** $T(c\mathbf{u}) = cT(\mathbf{u})$

These properties essentially mean that linear mappings preserve vector addition and scalar multiplication.

#### 1.2 Properties of Linear Mappings

From the definition, we can derive several important properties:

*   **Mapping the zero vector:** $T(\mathbf{0}_V) = \mathbf{0}_W$.
    *   *Proof:* $T(\mathbf{0}_V) = T(0 \cdot \mathbf{u}) = 0 \cdot T(\mathbf{u}) = \mathbf{0}_W$.
*   **Mapping linear combinations:** For any vectors $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k \in V$ and scalars $c_1, c_2, \dots, c_k$:
    $T(c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k) = c_1T(\mathbf{v}_1) + c_2T(\mathbf{v}_2) + \dots + c_kT(\mathbf{v}_k)$.
*   **Preservation of span:** If $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ spans $V$, then $\{T(\mathbf{v}_1), \dots, T(\mathbf{v}_k)\}$ spans the image of $T$.

#### 1.3 Examples

*   **Rotation in 2D:** A rotation by an angle $\theta$ counterclockwise in $\mathbb{R}^2$ is a linear mapping. If $\mathbf{x} = \begin{bmatrix} x \\ y \end{bmatrix}$, then $T(\mathbf{x}) = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}$.
    *   This mapping satisfies additivity and homogeneity.
*   **Scaling:** $T(\mathbf{x}) = c\mathbf{x}$ for some scalar $c$ is a linear mapping (scaling).
*   **Projection:** Projection onto a subspace is a linear mapping.
*   **Differentiation:** The differentiation operator $D: P_n \to P_{n-1}$ (where $P_k$ is the space of polynomials of degree at most $k$) is linear: $D(p(x) + q(x)) = D(p(x)) + D(q(x))$ and $D(c \cdot p(x)) = c \cdot D(p(x))$.
*   **Integration:** The integration operator $I: P_n \to P_{n+1}$ defined by $I(p(x)) = \int_0^x p(t) dt$ is also linear.

**Key Point:** A mapping is linear *if and only if* it preserves linear combinations.

---

### 2. Matrix Representation of Linear Mappings

#### 2.1 Linear Mappings from $\mathbb{R}^n$ to $\mathbb{R}^m$

Let $T: \mathbb{R}^n \to \mathbb{R}^m$ be a linear mapping.
Let $\{\mathbf{e}_1, \dots, \mathbf{e}_n\}$ be the standard basis for $\mathbb{R}^n$, where $\mathbf{e}_i$ is the vector with 1 in the $i$-th position and 0 elsewhere.
Any vector $\mathbf{x} \in \mathbb{R}^n$ can be written as a linear combination of the basis vectors: $\mathbf{x} = x_1\mathbf{e}_1 + x_2\mathbf{e}_2 + \dots + x_n\mathbf{e}_n$.

Applying the linearity properties:
$T(\mathbf{x}) = T(x_1\mathbf{e}_1 + x_2\mathbf{e}_2 + \dots + x_n\mathbf{e}_n)$
$T(\mathbf{x}) = x_1T(\mathbf{e}_1) + x_2T(\mathbf{e}_2) + \dots + x_nT(\mathbf{e}_n)$

Let $T(\mathbf{e}_j) = \mathbf{a}_j$ be a vector in $\mathbb{R}^m$. Then $\mathbf{a}_j$ is an $m \times 1$ column vector.
$T(\mathbf{x}) = x_1\mathbf{a}_1 + x_2\mathbf{a}_2 + \dots + x_n\mathbf{a}_n$

We can express this as a matrix multiplication:
$T(\mathbf{x}) = \begin{bmatrix} | & | & & | \\ \mathbf{a}_1 & \mathbf{a}_2 & \dots & \mathbf{a}_n \\ | & | & & | \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}$

Let $A$ be the $m \times n$ matrix whose columns are the images of the standard basis vectors:
$A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & \dots & T(\mathbf{e}_n) \end{bmatrix}$

Then, the linear mapping $T$ can be represented by the matrix $A$ such that:
$T(\mathbf{x}) = A\mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^n$.

**This matrix $A$ is called the standard matrix of the linear mapping $T$.**

#### 2.2 General Bases

The matrix representation of a linear mapping depends on the choice of bases for the domain and codomain vector spaces.

Let $V$ be an $n$-dimensional vector space with basis $\mathcal{B} = \{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ and $W$ be an $m$-dimensional vector space with basis $\mathcal{C} = \{\mathbf{w}_1, \dots, \mathbf{w}_m\}$.
Let $T: V \to W$ be a linear mapping.

To find the matrix representation of $T$ with respect to bases $\mathcal{B}$ and $\mathcal{C}$, denoted by $[T]_{\mathcal{B}}^{\mathcal{C}}$, we need to determine how $T$ transforms each basis vector in $\mathcal{B}$.

For each $\mathbf{v}_j \in \mathcal{B}$:
$T(\mathbf{v}_j) = c_{1j}\mathbf{w}_1 + c_{2j}\mathbf{w}_2 + \dots + c_{mj}\mathbf{w}_m$

The coordinate vector of $T(\mathbf{v}_j)$ with respect to basis $\mathcal{C}$ is:
$[T(\mathbf{v}_j)]_{\mathcal{C}} = \begin{bmatrix} c_{1j} \\ c_{2j} \\ \vdots \\ c_{mj} \end{bmatrix}$

The matrix $[T]_{\mathcal{B}}^{\mathcal{C}}$ is formed by these coordinate vectors as columns:
$[T]_{\mathcal{B}}^{\mathcal{C}} = \begin{bmatrix} [T(\mathbf{v}_1)]_{\mathcal{C}} & [T(\mathbf{v}_2)]_{\mathcal{C}} & \dots & [T(\mathbf{v}_n)]_{\mathcal{C}} \end{bmatrix}$

This matrix is an $m \times n$ matrix.

If we have a vector $\mathbf{x} \in V$, its coordinate vector with respect to $\mathcal{B}$ is $[\mathbf{x}]_{\mathcal{B}}$.
Then, the coordinate vector of $T(\mathbf{x})$ with respect to $\mathcal{C}$ is given by:
$[T(\mathbf{x})]_{\mathcal{C}} = [T]_{\mathcal{B}}^{\mathcal{C}} [\mathbf{x}]_{\mathcal{B}}$

#### 2.3 Example: Linear Mapping in Different Bases

Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ be defined by $T\left(\begin{bmatrix} x \\ y \end{bmatrix}\right) = \begin{bmatrix} 2x+y \\ x-y \end{bmatrix}$.

**a) Standard Basis:**
The standard basis for $\mathbb{R}^2$ is $\{\mathbf{e}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \mathbf{e}_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}\}$.
$T(\mathbf{e}_1) = T\left(\begin{bmatrix} 1 \\ 0 \end{bmatrix}\right) = \begin{bmatrix} 2(1)+0 \\ 1-0 \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$
$T(\mathbf{e}_2) = T\left(\begin{bmatrix} 0 \\ 1 \end{bmatrix}\right) = \begin{bmatrix} 2(0)+1 \\ 0-1 \end{bmatrix} = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$

The standard matrix $A$ is:
$A = \begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix}$

So, $T\left(\begin{bmatrix} x \\ y \end{bmatrix}\right) = \begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}$.

**b) Different Basis:**
Let $\mathcal{B} = \{\mathbf{v}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \mathbf{v}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}\}$ be another basis for $\mathbb{R}^2$.
We need to find $[T]_{\mathcal{B}}^{\mathcal{B}}$ (since the codomain basis is also $\mathcal{B}$).

First, find $T(\mathbf{v}_1)$ and $T(\mathbf{v}_2)$:
$T(\mathbf{v}_1) = T\left(\begin{bmatrix} 1 \\ 1 \end{bmatrix}\right) = \begin{bmatrix} 2(1)+1 \\ 1-1 \end{bmatrix} = \begin{bmatrix} 3 \\ 0 \end{bmatrix}$
$T(\mathbf{v}_2) = T\left(\begin{bmatrix} 1 \\ -1 \end{bmatrix}\right) = \begin{bmatrix} 2(1)+(-1) \\ 1-(-1) \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$

Now, express $T(\mathbf{v}_1)$ and $T(\mathbf{v}_2)$ as linear combinations of $\mathbf{v}_1$ and $\mathbf{v}_2$:
$T(\mathbf{v}_1) = \begin{bmatrix} 3 \\ 0 \end{bmatrix} = c_{11}\begin{bmatrix} 1 \\ 1 \end{bmatrix} + c_{21}\begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} c_{11}+c_{21} \\ c_{11}-c_{21} \end{bmatrix}$
Solving this system:
$c_{11}+c_{21} = 3$
$c_{11}-c_{21} = 0 \implies c_{11} = c_{21}$
$2c_{11} = 3 \implies c_{11} = 3/2$. So, $c_{21} = 3/2$.
$[T(\mathbf{v}_1)]_{\mathcal{B}} = \begin{bmatrix} 3/2 \\ 3/2 \end{bmatrix}$

$T(\mathbf{v}_2) = \begin{bmatrix} 1 \\ 2 \end{bmatrix} = c_{12}\begin{bmatrix} 1 \\ 1 \end{bmatrix} + c_{22}\begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} c_{12}+c_{22} \\ c_{12}-c_{22} \end{bmatrix}$
Solving this system:
$c_{12}+c_{22} = 1$
$c_{12}-c_{22} = 2$
Adding the equations: $2c_{12} = 3 \implies c_{12} = 3/2$.
Subtracting the second from the first: $2c_{22} = -1 \implies c_{22} = -1/2$.
$[T(\mathbf{v}_2)]_{\mathcal{B}} = \begin{bmatrix} 3/2 \\ -1/2 \end{bmatrix}$

The matrix representation with respect to basis $\mathcal{B}$ is:
$[T]_{\mathcal{B}}^{\mathcal{B}} = \begin{bmatrix} 3/2 & 3/2 \\ 3/2 & -1/2 \end{bmatrix}$

**Reference:** Deisenroth, Faisal, and Ong, Chapter 2 covers vector spaces, bases, and the concept of coordinate vectors, which are prerequisites for understanding matrix representations of linear maps. Strang, Chapter 4 also provides a comprehensive treatment of linear transformations and their matrix representations.

---

### 3. Basis Change

#### 3.1 Change of Basis Matrix

Suppose we have a vector $\mathbf{x}$ in $\mathbb{R}^n$, and we want to change its coordinate representation from a basis $\mathcal{B}$ to the standard basis $\mathcal{E} = \{\mathbf{e}_1, \dots, \mathbf{e}_n\}$, or vice-versa.

Let $\mathcal{B} = \{\mathbf{b}_1, \dots, \mathbf{b}_n\}$ be a basis for $\mathbb{R}^n$.
Any vector $\mathbf{x} \in \mathbb{R}^n$ can be written as $\mathbf{x} = x_1\mathbf{e}_1 + \dots + x_n\mathbf{e}_n$ (standard coordinates).
And $\mathbf{x} = c_1\mathbf{b}_1 + \dots + c_n\mathbf{b}_n$ (coordinates in basis $\mathcal{B}$).

The coordinate vector of $\mathbf{x}$ in basis $\mathcal{B}$ is $[\mathbf{x}]_{\mathcal{B}} = \begin{bmatrix} c_1 \\ \vdots \\ c_n \end{bmatrix}$.
The standard coordinate vector of $\mathbf{x}$ is $\mathbf{x} = \begin{bmatrix} x_1 \\ \vdots \\ x_n \end{bmatrix}$.

The **change of basis matrix from $\mathcal{B}$ to the standard basis $\mathcal{E}$** is the matrix $P_{\mathcal{E} \leftarrow \mathcal{B}}$ whose columns are the standard coordinate vectors of the basis vectors in $\mathcal{B}$:
$P_{\mathcal{E} \leftarrow \mathcal{B}} = \begin{bmatrix} [\mathbf{b}_1]_{\mathcal{E}} & [\mathbf{b}_2]_{\mathcal{E}} & \dots & [\mathbf{b}_n]_{\mathcal{E}} \end{bmatrix}$

In this case, since $[\mathbf{b}_i]_{\mathcal{E}}$ is just the vector $\mathbf{b}_i$ itself, the matrix is:
$P_{\mathcal{E} \leftarrow \mathcal{B}} = \begin{bmatrix} \mathbf{b}_1 & \mathbf{b}_2 & \dots & \mathbf{b}_n \end{bmatrix}$

The relationship between standard coordinates and $\mathcal{B}$-coordinates is:
$\mathbf{x} = P_{\mathcal{E} \leftarrow \mathcal{B}} [\mathbf{x}]_{\mathcal{B}}$

To go the other way, from standard coordinates to $\mathcal{B}$-coordinates:
$[\mathbf{x}]_{\mathcal{B}} = (P_{\mathcal{E} \leftarrow \mathcal{B}})^{-1} \mathbf{x}$

The matrix $(P_{\mathcal{E} \leftarrow \mathcal{B}})^{-1}$ is the **change of basis matrix from the standard basis $\mathcal{E}$ to $\mathcal{B}$**, denoted $P_{\mathcal{B} \leftarrow \mathcal{E}}$.

**Important Note:** For these matrices to exist, the vectors in $\mathcal{B}$ must form a basis, meaning they are linearly independent and span the space. Thus, $P_{\mathcal{E} \leftarrow \mathcal{B}}$ must be an invertible matrix.

#### 3.2 Basis Change for Linear Mappings

Let $T: V \to W$ be a linear mapping.
Let $\mathcal{B} = \{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ be a basis for $V$ and $\mathcal{B}' = \{\mathbf{v}'_1, \dots, \mathbf{v}'_n\}$ be another basis for $V$.
Let $\mathcal{C} = \{\mathbf{w}_1, \dots, \mathbf{w}_m\}$ be a basis for $W$ and $\mathcal{C}' = \{\mathbf{w}'_1, \dots, \mathbf{w}'_m\}$ be another basis for $W$.

We know the matrix of $T$ with respect to bases $\mathcal{B}$ and $\mathcal{C}$ is $[T]_{\mathcal{B}}^{\mathcal{C}}$.
We also know the matrix of $T$ with respect to bases $\mathcal{B}'$ and $\mathcal{C}'$ is $[T]_{\mathcal{B}'}^{\mathcal{C}'}$.

The relationship between these matrix representations is given by:
$[T]_{\mathcal{B}'}^{\mathcal{C}'} = P_{\mathcal{C}' \leftarrow \mathcal{C}} [T]_{\mathcal{B}}^{\mathcal{C}} P_{\mathcal{C} \leftarrow \mathcal{B}'}$

Where:
*   $P_{\mathcal{C}' \leftarrow \mathcal{C}}$ is the change of basis matrix from $\mathcal{C}$ to $\mathcal{C}'$ for the codomain $W$.
*   $P_{\mathcal{C} \leftarrow \mathcal{B}'}$ is the change of basis matrix from $\mathcal{B}'$ to $\mathcal{B}$ for the domain $V$.

**Simplified Case (Endomorphisms):** If $T: V \to V$ and we are changing bases within the same space, say from basis $\mathcal{B}$ to basis $\mathcal{B}'$:
$[T]_{\mathcal{B}'} = P_{\mathcal{B}' \leftarrow \mathcal{B}} [T]_{\mathcal{B}} (P_{\mathcal{B}' \leftarrow \mathcal{B}})^{-1}$
This is called a **similarity transformation**.

**Let's assume we are working with $\mathbb{R}^n$ and $\mathbb{R}^m$, and the standard basis is $\mathcal{E}_n$ and $\mathcal{E}_m$ respectively.**
Let $A = [T]_{\mathcal{E}_n}^{\mathcal{E}_m}$ be the standard matrix of $T$.
Let $P$ be the change of basis matrix from $\mathcal{B}$ to $\mathcal{E}_n$ ($P$ columns are vectors in $\mathcal{B}$).
Let $Q$ be the change of basis matrix from $\mathcal{C}$ to $\mathcal{E}_m$ ($Q$ columns are vectors in $\mathcal{C}$).

Then, the matrix of $T$ with respect to bases $\mathcal{B}$ and $\mathcal{C}$ is:
$[T]_{\mathcal{B}}^{\mathcal{C}} = Q^{-1} A P$

*   $P$ transforms $\mathcal{B}$-coordinates to standard coordinates.
*   $A$ maps standard coordinates to standard coordinates.
*   $Q^{-1}$ transforms standard coordinates back to $\mathcal{C}$-coordinates.

#### 3.3 Example: Basis Change for Linear Mapping (Continued)

Recall $T\left(\begin{bmatrix} x \\ y \end{bmatrix}\right) = \begin{bmatrix} 2x+y \\ x-y \end{bmatrix}$, with standard matrix $A = \begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix}$.
Let $\mathcal{B} = \{\mathbf{v}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \mathbf{v}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}\}$ and $\mathcal{B}' = \{\mathbf{v}'_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \mathbf{v}'_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}\}$ (standard basis $\mathcal{E}_2$).
We want to find the matrix of $T$ with respect to basis $\mathcal{B}$ and $\mathcal{B}'$.

Here $V = \mathbb{R}^2$, $W = \mathbb{R}^2$.
Basis for domain $V$: $\mathcal{B}'$ to $\mathcal{B}$. So, $\mathcal{B}' = \{\mathbf{e}_1, \mathbf{e}_2\}$, $\mathcal{B} = \{\mathbf{v}_1, \mathbf{v}_2\}$.
Basis for codomain $W$: $\mathcal{B}'$ to $\mathcal{B}$. So, $\mathcal{B}' = \{\mathbf{e}_1, \mathbf{e}_2\}$, $\mathcal{B} = \{\mathbf{v}_1, \mathbf{v}_2\}$.

Let's find $[T]_{\mathcal{B}'}^{\mathcal{B}}$.
The formula is $[T]_{\mathcal{B}'}^{\mathcal{B}} = P_{\mathcal{B} \leftarrow \mathcal{E}_2} [T]_{\mathcal{E}_2}^{\mathcal{E}_2} P_{\mathcal{E}_2 \leftarrow \mathcal{B}'}$
Or, using the simpler form for $\mathbb{R}^n$ to $\mathbb{R}^m$:
$[T]_{\mathcal{B}'}^{\mathcal{B}} = Q^{-1} A P$

Here, the initial basis is $\mathcal{B}'$ (standard), the target basis for domain is $\mathcal{B}$.
The initial basis for codomain is $\mathcal{B}'$ (standard), the target basis for codomain is $\mathcal{B}$.

So we want $[T]_{\mathcal{B}'}^{\mathcal{B}}$.
This means:
$P$ is the change of basis matrix from $\mathcal{B}'$ (standard) to $\mathcal{E}_2$ (standard). This is the identity matrix $I$.
$Q$ is the change of basis matrix from $\mathcal{B}'$ (standard) to $\mathcal{E}_2$ (standard). This is the identity matrix $I$.

This formulation is confusing. Let's use the direct definition.
We want to represent $T$ using basis $\mathcal{B}$ for domain and $\mathcal{B}'$ (standard) for codomain.
We need to find how $T$ maps $\mathbf{v}_i$ from $\mathcal{B}$ and express them in $\mathcal{B}'$.

$T(\mathbf{v}_1) = \begin{bmatrix} 3 \\ 0 \end{bmatrix}$. Since $\mathcal{B}'$ is the standard basis, $[T(\mathbf{v}_1)]_{\mathcal{B}'} = \begin{bmatrix} 3 \\ 0 \end{bmatrix}$.
$T(\mathbf{v}_2) = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$. Since $\mathcal{B}'$ is the standard basis, $[T(\mathbf{v}_2)]_{\mathcal{B}'} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$.

The matrix $[T]_{\mathcal{B}}^{\mathcal{B}'}$ is formed by these vectors as columns:
$[T]_{\mathcal{B}}^{\mathcal{B}'} = \begin{bmatrix} 3 & 1 \\ 0 & 2 \end{bmatrix}$

Now, let's try to use the formula: $[T]_{\mathcal{B}'}^{\mathcal{B}} = Q^{-1} A P$.
We are changing from $\mathcal{B}'$ (standard) to $\mathcal{B}$.
$P$ is the matrix from $\mathcal{B}'$ (std) to $\mathcal{E}_2$ (std). $P = I$.
$Q$ is the matrix from $\mathcal{B}'$ (std) to $\mathcal{E}_2$ (std). $Q = I$.

This is still not matching the example we did earlier (where both bases were $\mathcal{B}$). The change of basis for the mapping itself is when the input basis and output basis are different.

Let's re-evaluate the formula: $[T]_{\mathcal{B}'}^{\mathcal{C}'} = P_{\mathcal{C}' \leftarrow \mathcal{C}} [T]_{\mathcal{B}}^{\mathcal{C}} P_{\mathcal{C} \leftarrow \mathcal{B}'}$.
Assume $V = \mathbb{R}^n$, $W = \mathbb{R}^m$.
$\mathcal{B}$ basis for $V$, $\mathcal{C}$ basis for $W$.
$\mathcal{B}'$ basis for $V$, $\mathcal{C}'$ basis for $W$.
$A = [T]_{\mathcal{E}_n}^{\mathcal{E}_m}$ (standard matrix).
$P$: change of basis from $\mathcal{B}$ to $\mathcal{E}_n$. $P = [\mathbf{b}_1 \dots \mathbf{b}_n]$.
$Q$: change of basis from $\mathcal{C}$ to $\mathcal{E}_m$. $Q = [\mathbf{c}_1 \dots \mathbf{c}_m]$.

Then $[T]_{\mathcal{B}}^{\mathcal{C}} = Q^{-1} A P$.

Now, let's apply this to our example for $[T]_{\mathcal{B}}^{\mathcal{B}'}$.
Domain basis: $\mathcal{B} = \{\mathbf{v}_1, \mathbf{v}_2\}$. Codomain basis: $\mathcal{B}' = \{\mathbf{e}_1, \mathbf{e}_2\}$ (standard).
$A = \begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix}$.
$P$ (from $\mathcal{B}$ to $\mathcal{E}_2$) = $\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$.
$Q$ (from $\mathcal{B}'$ to $\mathcal{E}_2$) = $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I$.

$[T]_{\mathcal{B}}^{\mathcal{B}'} = Q^{-1} A P = I^{-1} A P = A P$.
$A P = \begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} = \begin{bmatrix} 2+1 & 2-1 \\ 1-1 & 1+1 \end{bmatrix} = \begin{bmatrix} 3 & 1 \\ 0 & 2 \end{bmatrix}$.
This matches our direct calculation.

**Reference:** Strang, Chapter 4 discusses change of basis and its effect on matrix representations. Axler, Chapter 3 covers basis change for linear operators on finite-dimensional vector spaces.

---

### 4. Image (Range) and Kernel (Null Space)

#### 4.1 Image (Range)

Let $T: V \to W$ be a linear mapping.
The **image** of $T$, denoted by $\text{Im}(T)$ or $R(T)$, is the set of all vectors in $W$ that are the image of some vector in $V$.
$\text{Im}(T) = \{T(\mathbf{v}) \mid \mathbf{v} \in V\}$

**Properties of the Image:**
*   $\text{Im}(T)$ is a subspace of $W$.
*   If $V = \mathbb{R}^n$ and $T(\mathbf{x}) = A\mathbf{x}$ for an $m \times n$ matrix $A$, then $\text{Im}(T)$ is the column space of $A$, $\text{Col}(A)$.
*   The dimension of the image is called the **rank** of $T$, denoted by $\text{rank}(T)$ or $\dim(\text{Im}(T))$.
*   If the columns of $A$ are linearly independent, then $\text{rank}(A) = n$. If the columns are linearly dependent, the rank is the number of linearly independent columns.

#### 4.2 Kernel (Null Space)

Let $T: V \to W$ be a linear mapping.
The **kernel** (or null space) of $T$, denoted by $\text{Ker}(T)$ or $N(T)$, is the set of all vectors in $V$ that are mapped to the zero vector in $W$.
$\text{Ker}(T) = \{\mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}_W\}$

**Properties of the Kernel:**
*   $\text{Ker}(T)$ is a subspace of $V$.
*   If $V = \mathbb{R}^n$ and $T(\mathbf{x}) = A\mathbf{x}$ for an $m \times n$ matrix $A$, then $\text{Ker}(T)$ is the null space of $A$, $N(A)$. This means finding $\text{Ker}(T)$ is equivalent to solving the homogeneous system $A\mathbf{x} = \mathbf{0}$.
*   The dimension of the kernel is called the **nullity** of $T$, denoted by $\text{nullity}(T)$ or $\dim(\text{Ker}(T))$.

#### 4.3 The Rank-Nullity Theorem

For a linear mapping $T: V \to W$, where $V$ is a finite-dimensional vector space, the Rank-Nullity Theorem states:
$\dim(V) = \text{rank}(T) + \text{nullity}(T)$
$\dim(V) = \dim(\text{Im}(T)) + \dim(\text{Ker}(T))$

For a matrix $A$ of size $m \times n$:
$n = \text{rank}(A) + \text{nullity}(A)$

This theorem is fundamental. It connects the dimension of the input space to the dimensions of its image and kernel.

#### 4.4 Examples: Image and Kernel

**Example 1: Standard Matrix**
Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ with $A = \begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix}$.

**Image (Column Space of A):**
The columns of $A$ are $\begin{bmatrix} 2 \\ 1 \end{bmatrix}$ and $\begin{bmatrix} 1 \\ -1 \end{bmatrix}$.
These columns are linearly independent (since they are not multiples of each other and are non-zero).
So, the image is the span of these two vectors: $\text{Im}(T) = \text{span}\left\{\begin{bmatrix} 2 \\ 1 \end{bmatrix}, \begin{bmatrix} 1 \\ -1 \end{bmatrix}\right\}$.
Since these two vectors form a basis for $\mathbb{R}^2$, $\text{Im}(T) = \mathbb{R}^2$.
The rank of $T$ is $\dim(\text{Im}(T)) = 2$.

**Kernel (Null Space of A):**
We need to solve $A\mathbf{x} = \mathbf{0}$:
$\begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$
Row-reducing the augmented matrix:
$\left[\begin{array}{cc|c} 2 & 1 & 0 \\ 1 & -1 & 0 \end{array}\right] \xrightarrow{R_1 \leftrightarrow R_2} \left[\begin{array}{cc|c} 1 & -1 & 0 \\ 2 & 1 & 0 \end{array}\right] \xrightarrow{R_2 \leftarrow R_2 - 2R_1} \left[\begin{array}{cc|c} 1 & -1 & 0 \\ 0 & 3 & 0 \end{array}\right] \xrightarrow{R_2 \leftarrow R_2/3} \left[\begin{array}{cc|c} 1 & -1 & 0 \\ 0 & 1 & 0 \end{array}\right] \xrightarrow{R_1 \leftarrow R_1 + R_2} \left[\begin{array}{cc|c} 1 & 0 & 0 \\ 0 & 1 & 0 \end{array}\right]$
This gives $x = 0$ and $y = 0$.
So, the only solution is $\begin{bmatrix} 0 \\ 0 \end{bmatrix}$.
$\text{Ker}(T) = \{\begin{bmatrix} 0 \\ 0 \end{bmatrix}\}$.
The nullity of $T$ is $\dim(\text{Ker}(T)) = 0$.

**Rank-Nullity Theorem Check:**
$\dim(V) = 2$.
$\text{rank}(T) + \text{nullity}(T) = 2 + 0 = 2$.
The theorem holds.

**Example 2: Non-Square Matrix**
Let $T: \mathbb{R}^3 \to \mathbb{R}^2$ with $A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \end{bmatrix}$.

**Image (Column Space of A):**
The columns are $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $\begin{bmatrix} 2 \\ 1 \end{bmatrix}$, $\begin{bmatrix} 3 \\ 1 \end{bmatrix}$.
The reduced row echelon form of $A$ is already given by the matrix itself (it's in row echelon form). The pivot columns are the first and second columns.
The first two columns are linearly independent: $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$ and $\begin{bmatrix} 2 \\ 1 \end{bmatrix}$.
The third column is a linear combination of the first two: $\begin{bmatrix} 3 \\ 1 \end{bmatrix} = 1 \cdot \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 1 \cdot \begin{bmatrix} 2 \\ 1 \end{bmatrix}$.
So, a basis for the image is $\left\{\begin{bmatrix} 1 \\ 0 \end{bmatrix}, \begin{bmatrix} 2 \\ 1 \end{bmatrix}\right\}$.
$\text{Im}(T) = \text{span}\left\{\begin{bmatrix} 1 \\ 0 \end{bmatrix}, \begin{bmatrix} 2 \\ 1 \end{bmatrix}\right\}$.
The rank of $T$ is $\dim(\text{Im}(T)) = 2$.

**Kernel (Null Space of A):**
We need to solve $A\mathbf{x} = \mathbf{0}$:
$\begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$
From the second row: $x_2 + x_3 = 0 \implies x_2 = -x_3$.
From the first row: $x_1 + 2x_2 + 3x_3 = 0$. Substitute $x_2 = -x_3$:
$x_1 + 2(-x_3) + 3x_3 = 0$
$x_1 - 2x_3 + 3x_3 = 0$
$x_1 + x_3 = 0 \implies x_1 = -x_3$.
Let $x_3 = t$ (free variable). Then $x_1 = -t$ and $x_2 = -t$.
The solution vector is $\begin{bmatrix} -t \\ -t \\ t \end{bmatrix} = t \begin{bmatrix} -1 \\ -1 \\ 1 \end{bmatrix}$.
$\text{Ker}(T) = \text{span}\left\{\begin{bmatrix} -1 \\ -1 \\ 1 \end{bmatrix}\right\}$.
The nullity of $T$ is $\dim(\text{Ker}(T)) = 1$.

**Rank-Nullity Theorem Check:**
$\dim(V) = 3$.
$\text{rank}(T) + \text{nullity}(T) = 2 + 1 = 3$.
The theorem holds.

**Example 3: Linear Mapping with Different Bases**
Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ with basis $\mathcal{B} = \{\mathbf{v}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \mathbf{v}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}\}$.
The matrix representation of $T$ with respect to basis $\mathcal{B}$ is $[T]_{\mathcal{B}} = \begin{bmatrix} 3/2 & 3/2 \\ 3/2 & -1/2 \end{bmatrix}$.

**Image of T with respect to $\mathcal{B}$:**
The image of $T$ under this representation is the column space of $[T]_{\mathcal{B}}$.
The columns are $\begin{bmatrix} 3/2 \\ 3/2 \end{bmatrix}$ and $\begin{bmatrix} 3/2 \\ -1/2 \end{bmatrix}$. These are linearly independent.
So, the image of $T$ in terms of $\mathcal{B}$-coordinates is $\text{span}\left\{\begin{bmatrix} 3/2 \\ 3/2 \end{bmatrix}, \begin{bmatrix} 3/2 \\ -1/2 \end{bmatrix}\right\}$.
This means $\text{Im}(T) = \text{span}\left\{ \frac{3}{2}\mathbf{v}_1 + \frac{3}{2}\mathbf{v}_2, \frac{3}{2}\mathbf{v}_1 - \frac{1}{2}\mathbf{v}_2 \right\}$.
In standard coordinates:
$\frac{3}{2}\begin{bmatrix} 1 \\ 1 \end{bmatrix} + \frac{3}{2}\begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} 3/2+3/2 \\ 3/2-3/2 \end{bmatrix} = \begin{bmatrix} 3 \\ 0 \end{bmatrix}$
$\frac{3}{2}\begin{bmatrix} 1 \\ 1 \end{bmatrix} - \frac{1}{2}\begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} 3/2-1/2 \\ 3/2+1/2 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$
So, $\text{Im}(T) = \text{span}\left\{\begin{bmatrix} 3 \\ 0 \end{bmatrix}, \begin{bmatrix} 1 \\ 2 \end{bmatrix}\right\}$. This is the same image as calculated using the standard basis representation, as the image is independent of the basis chosen.
Rank is 2.

**Kernel of T with respect to $\mathcal{B}$:**
We need to solve $[T]_{\mathcal{B}}[\mathbf{x}]_{\mathcal{B}} = \mathbf{0}$.
$\begin{bmatrix} 3/2 & 3/2 \\ 3/2 & -1/2 \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$
$\frac{3}{2}c_1 + \frac{3}{2}c_2 = 0 \implies c_1 + c_2 = 0 \implies c_1 = -c_2$.
$\frac{3}{2}c_1 - \frac{1}{2}c_2 = 0 \implies 3c_1 - c_2 = 0$.
Substitute $c_1 = -c_2$: $3(-c_2) - c_2 = 0 \implies -3c_2 - c_2 = 0 \implies -4c_2 = 0 \implies c_2 = 0$.
If $c_2 = 0$, then $c_1 = 0$.
So, the only solution in $\mathcal{B}$-coordinates is $\begin{bmatrix} 0 \\ 0 \end{bmatrix}$.
$\text{Ker}(T) = \{\mathbf{0}\}$. Nullity is 0.

**Reference:** Deisenroth, Faisal, and Ong, Chapter 2 discusses subspaces, linear independence, span, and bases. Chapter 3 introduces the concepts of rank and nullity for matrices. Strang, Chapters 3 and 4 provide detailed explanations of column spaces, null spaces, and the rank-nullity theorem.

---

### 5. Practice Questions

1.  Let $T: \mathbb{R}^2 \to \mathbb{R}^3$ be a linear mapping defined by $T(\mathbf{x}) = A\mathbf{x}$, where $A = \begin{bmatrix} 1 & 0 \\ 2 & 1 \\ 0 & -1 \end{bmatrix}$.
    a) Find the image of the standard basis vectors $\mathbf{e}_1$ and $\mathbf{e}_2$.
    b) Determine the standard matrix of $T$.
    c) Find the image of $T$. What is its dimension (rank)?
    d) Find the kernel of $T$. What is its dimension (nullity)?
    e) Verify the Rank-Nullity Theorem for $T$.

2.  Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ be a linear mapping with standard matrix $A = \begin{bmatrix} 3 & -1 \\ 1 & 1 \end{bmatrix}$. Let $\mathcal{B} = \{\mathbf{v}_1 = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \mathbf{v}_2 = \begin{bmatrix} 2 \\ 1 \end{bmatrix}\}$ be another basis for $\mathbb{R}^2$.
    a) Find the matrix representation of $T$ with respect to the basis $\mathcal{B}$, denoted by $[T]_{\mathcal{B}}$.
    b) Find the image and kernel of $T$ (in standard coordinates). What are their dimensions?

3.  Consider the linear mapping $T: P_2 \to P_1$ defined by $T(ax^2 + bx + c) = (2a+b)x + (c-a)$.
    Let $\mathcal{B} = \{x^2, x, 1\}$ be the standard basis for $P_2$ and $\mathcal{C} = \{x, 1\}$ be the standard basis for $P_1$.
    a) Find the matrix representation of $T$ with respect to $\mathcal{B}$ and $\mathcal{C}$.
    b) Find a basis for the image of $T$ and its dimension (rank).
    c) Find a basis for the kernel of $T$ and its dimension (nullity).
    d) Verify the Rank-Nullity Theorem for $T$.

---

### 6. Answers to Practice Questions

1.  a) $T(\mathbf{e}_1) = \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix}$, $T(\mathbf{e}_2) = \begin{bmatrix} 0 \\ 1 \\ -1 \end{bmatrix}$.
    b) The standard matrix is $A = \begin{bmatrix} 1 & 0 \\ 2 & 1 \\ 0 & -1 \end{bmatrix}$.
    c) The image is the column space of $A$. The columns are $\begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix}$ and $\begin{bmatrix} 0 \\ 1 \\ -1 \end{bmatrix}$. They are linearly independent and span the image.
       $\text{Im}(T) = \text{span}\left\{\begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \\ -1 \end{bmatrix}\right\}$.
       The dimension (rank) is 2.
    d) To find the kernel, solve $A\mathbf{x} = \mathbf{0}$:
       $\left[\begin{array}{cc|c} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 0 & -1 & 0 \end{array}\right] \xrightarrow{R_2 \leftarrow R_2 - 2R_1} \left[\begin{array}{cc|c} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & -1 & 0 \end{array}\right] \xrightarrow{R_3 \leftarrow R_3 + R_2} \left[\begin{array}{cc|c} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{array}\right]$
       This yields $x_1 = 0$ and $x_2 = 0$. So, $\text{Ker}(T) = \{\begin{bmatrix} 0 \\ 0 \end{bmatrix}\}$.
       The dimension (nullity) is 0.
    e) $\dim(\mathbb{R}^2) = 2$. $\text{rank}(T) + \text{nullity}(T) = 2 + 0 = 2$. The theorem holds.

2.  a) First, find $T(\mathbf{v}_1)$ and $T(\mathbf{v}_2)$ using the standard matrix $A$:
       $T(\mathbf{v}_1) = A\mathbf{v}_1 = \begin{bmatrix} 3 & -1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 2 \end{bmatrix} = \begin{bmatrix} 3-2 \\ 1+2 \end{bmatrix} = \begin{bmatrix} 1 \\ 3 \end{bmatrix}$.
       $T(\mathbf{v}_2) = A\mathbf{v}_2 = \begin{bmatrix} 3 & -1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 6-1 \\ 2+1 \end{bmatrix} = \begin{bmatrix} 5 \\ 3 \end{bmatrix}$.
       Now, express these in terms of basis $\mathcal{B}$. We need to solve:
       $T(\mathbf{v}_1) = \begin{bmatrix} 1 \\ 3 \end{bmatrix} = c_{11}\begin{bmatrix} 1 \\ 2 \end{bmatrix} + c_{21}\begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} c_{11}+2c_{21} \\ 2c_{11}+c_{21} \end{bmatrix}$
       $c_{11}+2c_{21} = 1$
       $2c_{11}+c_{21} = 3$
       Subtracting twice the first from the second: $(2c_{11}+c_{21}) - 2(c_{11}+2c_{21}) = 3 - 2(1) \implies c_{21} - 4c_{21} = 1 \implies -3c_{21} = 1 \implies c_{21} = -1/3$.
       Substituting back: $c_{11} + 2(-1/3) = 1 \implies c_{11} - 2/3 = 1 \implies c_{11} = 5/3$.
       $[T(\mathbf{v}_1)]_{\mathcal{B}} = \begin{bmatrix} 5/3 \\ -1/3 \end{bmatrix}$.

       $T(\mathbf{v}_2) = \begin{bmatrix} 5 \\ 3 \end{bmatrix} = c_{12}\begin{bmatrix} 1 \\ 2 \end{bmatrix} + c_{22}\begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} c_{12}+2c_{22} \\ 2c_{12}+c_{22} \end{bmatrix}$
       $c_{12}+2c_{22} = 5$
       $2c_{12}+c_{22} = 3$
       Subtracting twice the first from the second: $(2c_{12}+c_{22}) - 2(c_{12}+2c_{22}) = 3 - 2(5) \implies c_{22} - 4c_{22} = 3 - 10 \implies -3c_{22} = -7 \implies c_{22} = 7/3$.
       Substituting back: $c_{12} + 2(7/3) = 5 \implies c_{12} + 14/3 = 5 \implies c_{12} = 5 - 14/3 = (15-14)/3 = 1/3$.
       $[T(\mathbf{v}_2)]_{\mathcal{B}} = \begin{bmatrix} 1/3 \\ 7/3 \end{bmatrix}$.

       So, $[T]_{\mathcal{B}} = \begin{bmatrix} 5/3 & 1/3 \\ -1/3 & 7/3 \end{bmatrix}$.

    b) The image of $T$ is the column space of $A$, as $A$ is the standard matrix. Columns are $\begin{bmatrix} 3 \\ 1 \end{bmatrix}$ and $\begin{bmatrix} -1 \\ 1 \end{bmatrix}$. They are linearly independent.
       $\text{Im}(T) = \text{span}\left\{\begin{bmatrix} 3 \\ 1 \end{bmatrix}, \begin{bmatrix} -1 \\ 1 \end{bmatrix}\right\} = \mathbb{R}^2$.
       Rank is 2.
       To find the kernel, solve $A\mathbf{x} = \mathbf{0}$:
       $\left[\begin{array}{cc|c} 3 & -1 & 0 \\ 1 & 1 & 0 \end{array}\right] \xrightarrow{R_1 \leftrightarrow R_2} \left[\begin{array}{cc|c} 1 & 1 & 0 \\ 3 & -1 & 0 \end{array}\right] \xrightarrow{R_2 \leftarrow R_2 - 3R_1} \left[\begin{array}{cc|c} 1 & 1 & 0 \\ 0 & -4 & 0 \end{array}\right]$
       This yields $x_1 + x_2 = 0$ and $-4x_2 = 0 \implies x_2 = 0$. Thus $x_1 = 0$.
       $\text{Ker}(T) = \{\begin{bmatrix} 0 \\ 0 \end{bmatrix}\}$.
       Nullity is 0.

3.  a) The mapping acts on polynomials.
    $T(x^2) = (2(1)+0)x + (0-1) = 2x - 1$. In $\mathcal{C}$-coordinates: $\begin{bmatrix} 2 \\ -1 \end{bmatrix}$.
    $T(x) = (2(0)+1)x + (0-0) = x$. In $\mathcal{C}$-coordinates: $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
    $T(1) = (2(0)+0)x + (1-0) = 1$. In $\mathcal{C}$-coordinates: $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$.

    The matrix representation $[T]_{\mathcal{B}}^{\mathcal{C}}$ is:
    $\begin{bmatrix} 2 & 1 & 0 \\ -1 & 0 & 1 \end{bmatrix}$.

    b) The image is the column space of this matrix. The columns are $\begin{bmatrix} 2 \\ -1 \end{bmatrix}$, $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$.
       The first two columns are linearly independent and span the image.
       $\text{Im}(T) = \text{span}\left\{\begin{bmatrix} 2 \\ -1 \end{bmatrix}, \begin{bmatrix} 1 \\ 0 \end{bmatrix}\right\}$. In polynomial terms: $\text{Im}(T) = \text{span}\{2x-1, x\}$.
       The dimension (rank) is 2. Since $P_1$ is 2-dimensional, the image is $P_1$.

    c) To find the kernel, solve $[T]_{\mathcal{B}}^{\mathcal{C}}[\mathbf{x}]_{\mathcal{B}} = \mathbf{0}$:
       $\left[\begin{array}{ccc|c} 2 & 1 & 0 & 0 \\ -1 & 0 & 1 & 0 \end{array}\right]$
       Swap rows: $\left[\begin{array}{ccc|c} -1 & 0 & 1 & 0 \\ 2 & 1 & 0 & 0 \end{array}\right]$
       $R_1 \leftarrow -R_1$: $\left[\begin{array}{ccc|c} 1 & 0 & -1 & 0 \\ 2 & 1 & 0 & 0 \end{array}\right]$
       $R_2 \leftarrow R_2 - 2R_1$: $\left[\begin{array}{ccc|c} 1 & 0 & -1 & 0 \\ 0 & 1 & 2 & 0 \end{array}\right]$
       This gives $x_1 - x_3 = 0 \implies x_1 = x_3$.
       And $x_2 + 2x_3 = 0 \implies x_2 = -2x_3$.
       Let $x_3 = t$. Then $x_1 = t$, $x_2 = -2t$.
       The kernel vectors in $\mathcal{B}$-coordinates are of the form $\begin{bmatrix} t \\ -2t \\ t \end{bmatrix} = t \begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix}$.
       So, a basis for the kernel is $\{1 \cdot x^2 - 2 \cdot x + 1 \cdot 1\} = \{x^2 - 2x + 1\}$.
       The dimension (nullity) is 1.

    d) $\dim(P_2) = 3$. $\text{rank}(T) + \text{nullity}(T) = 2 + 1 = 3$. The theorem holds.

---

### 7. Important Points to Remember

*   **Linear mappings preserve vector addition and scalar multiplication.** This is the defining property.
*   **Any linear mapping $T: \mathbb{R}^n \to \mathbb{R}^m$ can be represented by a matrix $A$**, where the columns of $A$ are the images of the standard basis vectors. $T(\mathbf{x}) = A\mathbf{x}$.
*   **The matrix representation of a linear mapping is basis-dependent.** Changing bases involves multiplication by change-of-basis matrices.
*   The **image (range)** of a linear mapping is the set of all possible outputs, and it's a subspace of the codomain. For $T(\mathbf{x}) = A\mathbf{x}$, the image is the column space of $A$.
*   The **kernel (null space)** of a linear mapping is the set of all inputs that map to the zero vector, and it's a subspace of the domain. For $T(\mathbf{x}) = A\mathbf{x}$, the kernel is the null space of $A$, found by solving $A\mathbf{x} = \mathbf{0}$.
*   **Rank-Nullity Theorem:** $\dim(V) = \text{rank}(T) + \text{nullity}(T)$. This is a crucial relationship connecting the dimensions of the input space, image, and kernel.
*   A linear mapping is **invertible** if and only if its kernel is just the zero vector and its image is the entire codomain (and the domain and codomain have the same dimension). For matrix representations, this corresponds to the matrix being square and invertible.

---

This completes the notes for the topic on Linear Mappings. Remember to practice the exercises and relate these concepts back to how data is transformed and manipulated in machine learning algorithms.
