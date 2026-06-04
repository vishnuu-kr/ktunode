---
title: "Projection onto a Subspace"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 3: Vector length and unit vector"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d27"
status: "completed"
scrapedAt: "2026-05-20T16:34:49.542Z"
---
Absolutely! Here are comprehensive study notes for "Projection onto a Subspace," designed to be engaging, insightful, and directly relevant to your course objectives.

---

# MATHEMATICS FOR INFORMATION SCIENCE – 2

## Module 3: Vector Length and Unit Vector

### Topic: Projection onto a Subspace

Welcome back, everyone! In our previous discussions, we’ve really honed in on the fundamental building blocks of vectors: their lengths, what it means to normalize them into unit vectors, and how these concepts play out in understanding geometric relationships in vector spaces. Today, we're going to take a significant leap forward by exploring the idea of **Projection onto a Subspace**. This is a cornerstone concept, not just in linear algebra, but deeply intertwined with many areas of information science, from data analysis and machine learning to signal processing.

Think about it: often, the "true" information or the underlying pattern we're looking for isn't directly aligned with a single vector. Instead, it might lie within a particular **subspace** – a kind of "direction" or a "plane" or an even higher-dimensional "flat" within the larger space. Our goal is often to find the *best representation* of a vector within that subspace. That's precisely what projection allows us to do.

This topic directly connects to several of our Course Outcomes (COs). Specifically:

*   **CO2: Understand the concepts of vector spaces and subspaces and to apply their properties.** Projection is a prime example of how we *use* the properties of subspaces to get meaningful information about vectors. We're essentially finding the "shadow" of a vector cast onto a subspace.
*   **CO3: Describe inner product spaces and their properties, to apply orthonormalization process and to solve least square problems.** Projection is intrinsically linked to the inner product (or dot product in $\mathbb{R}^n$). It's the foundation for understanding orthogonal complements, and it's the key to solving **least squares problems**, which are ubiquitous in data fitting and estimation.
*   **CO1: Solve system of linear equations, to evaluate eigenvalues and eigenvectors of matrices and to diagonalize matrices.** While not immediately obvious, projection is the concept behind techniques like the **Gram-Schmidt process** (which we’ll touch upon as it’s crucial for orthogonal projections) and is related to matrix factorization methods that underpin many computational algorithms.

So, let's dive in and see how these ideas come together.

### 1. What is a Subspace? A Quick Refresher

Before we project, let's quickly revisit what a subspace is. A subspace $W$ of a vector space $V$ is simply a subset of $V$ that is itself a vector space under the same operations of addition and scalar multiplication. To be a subspace, it must satisfy three key conditions:

1.  **Closure under addition:** If $\mathbf{u}$ and $\mathbf{v}$ are in $W$, then $\mathbf{u} + \mathbf{v}$ is also in $W$.
2.  **Closure under scalar multiplication:** If $\mathbf{u}$ is in $W$ and $c$ is any scalar, then $c\mathbf{u}$ is also in $W$.
3.  **Contains the zero vector:** The zero vector of $V$ must be in $W$.

Common examples of subspaces include lines through the origin, planes through the origin, and the origin itself in $\mathbb{R}^n$. The entire vector space $V$ is also a subspace of itself.

### 2. The Intuition: Projecting onto a Line (a Subspace of Dimension 1)

Let's start with the simplest case: projecting a vector $\mathbf{b}$ onto a subspace that is just a line. This line is spanned by a single non-zero vector, let's call it $\mathbf{a}$. So, our subspace $W$ is the set of all scalar multiples of $\mathbf{a}$, i.e., $W = \text{span}\{\mathbf{a}\}$.

Imagine you're shining a light directly down from above, perpendicular to a plane. You want to know the "shadow" of a stick (our vector $\mathbf{b}$) onto a specific line drawn on that plane. The projection of $\mathbf{b}$ onto the line spanned by $\mathbf{a}$, which we denote as $\text{proj}_{\mathbf{a}}\mathbf{b}$, will be a vector that *lies on the line* spanned by $\mathbf{a}$.

**How do we find this projected vector?**

The projected vector, $\text{proj}_{\mathbf{a}}\mathbf{b}$, is a scalar multiple of $\mathbf{a}$. Let's write it as $c\mathbf{a}$ for some scalar $c$. The key geometric property of projection is that the vector connecting the tip of the projected vector to the tip of the original vector (i.e., $\mathbf{b} - c\mathbf{a}$) must be **orthogonal** (perpendicular) to the direction of the line, which is $\mathbf{a}$.

Recall from Module 2 that two vectors are orthogonal if their dot product is zero. So, we need:
$(\mathbf{b} - c\mathbf{a}) \cdot \mathbf{a} = 0$

Let's expand this using the properties of the dot product (distributivity and scalar multiplication):
$\mathbf{b} \cdot \mathbf{a} - (c\mathbf{a}) \cdot \mathbf{a} = 0$
$\mathbf{b} \cdot \mathbf{a} - c(\mathbf{a} \cdot \mathbf{a}) = 0$

Now, we can solve for the scalar $c$:
$c(\mathbf{a} \cdot \mathbf{a}) = \mathbf{b} \cdot \mathbf{a}$

Assuming $\mathbf{a}$ is not the zero vector, $\mathbf{a} \cdot \mathbf{a} = \|\mathbf{a}\|^2 \neq 0$. So, we can divide:
$c = \frac{\mathbf{b} \cdot \mathbf{a}}{\mathbf{a} \cdot \mathbf{a}} = \frac{\mathbf{b} \cdot \mathbf{a}}{\|\mathbf{a}\|^2}$

Once we have this scalar $c$, we can find the projected vector:
$\text{proj}_{\mathbf{a}}\mathbf{b} = c\mathbf{a} = \left(\frac{\mathbf{b} \cdot \mathbf{a}}{\|\mathbf{a}\|^2}\right) \mathbf{a}$

This formula is a cornerstone, and you'll find it in Kreyszig (10th ed., Section 8.2, Orthogonalization, which introduces this concept in the context of projection) and Larson (8th ed., Section 6.3, Orthogonal Projections).

**Let's make this concrete with an example:**

Suppose we have $\mathbf{b} = \begin{pmatrix} 3 \\ 5 \end{pmatrix}$ and we want to project it onto the line spanned by $\mathbf{a} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$. This line is $y=x$ in the 2D plane.

First, calculate the dot products:
$\mathbf{b} \cdot \mathbf{a} = (3)(1) + (5)(1) = 3 + 5 = 8$
$\mathbf{a} \cdot \mathbf{a} = \|\mathbf{a}\|^2 = (1)(1) + (1)(1) = 1 + 1 = 2$

Now, find the scalar $c$:
$c = \frac{8}{2} = 4$

So, the projection of $\mathbf{b}$ onto the line spanned by $\mathbf{a}$ is:
$\text{proj}_{\mathbf{a}}\mathbf{b} = 4 \mathbf{a} = 4 \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 4 \\ 4 \end{pmatrix}$

**What does this mean intuitively?** The point $(3, 5)$ in the plane has a "shadow" at $(4, 4)$ when projected perpendicularly onto the line $y=x$. The vector connecting $(4, 4)$ to $(3, 5)$ is $\mathbf{b} - \text{proj}_{\mathbf{a}}\mathbf{b} = \begin{pmatrix} 3 \\ 5 \end{pmatrix} - \begin{pmatrix} 4 \\ 4 \end{pmatrix} = \begin{pmatrix} -1 \\ 1 \end{pmatrix}$. Notice that this vector $\begin{pmatrix} -1 \\ 1 \end{pmatrix}$ is indeed orthogonal to $\mathbf{a} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$, because $\begin{pmatrix} -1 \\ 1 \end{pmatrix} \cdot \begin{pmatrix} 1 \\ 1 \end{pmatrix} = (-1)(1) + (1)(1) = -1 + 1 = 0$.

### 3. Unit Vector Form for Projection onto a Line

Sometimes, it's convenient to express the projection in terms of a unit vector. If $\mathbf{u}$ is a unit vector in the direction of $\mathbf{a}$ (i.e., $\mathbf{u} = \frac{\mathbf{a}}{\|\mathbf{a}\|}$), then the projection formula can be rewritten.

We know $c = \frac{\mathbf{b} \cdot \mathbf{a}}{\|\mathbf{a}\|^2}$. We can rewrite $\mathbf{a} = \|\mathbf{a}\|\mathbf{u}$.
So, $c = \frac{\mathbf{b} \cdot (\|\mathbf{a}\|\mathbf{u})}{\|\mathbf{a}\|^2} = \frac{\|\mathbf{a}\|(\mathbf{b} \cdot \mathbf{u})}{\|\mathbf{a}\|^2} = \frac{\mathbf{b} \cdot \mathbf{u}}{\|\mathbf{a}\|}$.

Then, the projected vector is:
$\text{proj}_{\mathbf{a}}\mathbf{b} = c\mathbf{a} = \left(\frac{\mathbf{b} \cdot \mathbf{u}}{\|\mathbf{a}\|}\right) (\|\mathbf{a}\|\mathbf{u}) = (\mathbf{b} \cdot \mathbf{u})\mathbf{u}$

This is a very elegant form! It states that the projection of $\mathbf{b}$ onto the direction of unit vector $\mathbf{u}$ is simply the scalar projection $(\mathbf{b} \cdot \mathbf{u})$ multiplied by the unit vector $\mathbf{u}$ itself. The term $\mathbf{b} \cdot \mathbf{u}$ is the *scalar projection* (or component) of $\mathbf{b}$ along $\mathbf{u}$. This is a key concept for understanding vector components and is extensively covered in introductory linear algebra texts like Anton and Rorres (11th ed., Section 4.1).

**Example using the unit vector form:**

Using our previous example, $\mathbf{b} = \begin{pmatrix} 3 \\ 5 \end{pmatrix}$ and $\mathbf{a} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
The unit vector in the direction of $\mathbf{a}$ is $\mathbf{u} = \frac{\mathbf{a}}{\|\mathbf{a}\|} = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

Calculate the scalar projection:
$\mathbf{b} \cdot \mathbf{u} = \begin{pmatrix} 3 \\ 5 \end{pmatrix} \cdot \left(\frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix}\right) = \frac{1}{\sqrt{2}} (3 \cdot 1 + 5 \cdot 1) = \frac{8}{\sqrt{2}} = 4\sqrt{2}$

Now, multiply this scalar by the unit vector $\mathbf{u}$:
$\text{proj}_{\mathbf{u}}\mathbf{b} = (4\sqrt{2}) \mathbf{u} = (4\sqrt{2}) \left(\frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix}\right) = 4 \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 4 \\ 4 \end{pmatrix}$.
We get the same result, as expected!

### 4. Projecting onto a Subspace of Higher Dimension: The General Case

Now, let's generalize. What if our subspace $W$ is spanned by *more than one* vector? For instance, a plane in $\mathbb{R}^3$. Let $W$ be a subspace of $\mathbb{R}^n$ spanned by a set of linearly independent vectors $\{\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_k\}$. This set of vectors forms a basis for $W$.

The projection of a vector $\mathbf{b}$ onto $W$, denoted $\text{proj}_W\mathbf{b}$, will be a vector that lies *entirely within* $W$. This means $\text{proj}_W\mathbf{b}$ can be written as a linear combination of the basis vectors of $W$:
$\text{proj}_W\mathbf{b} = c_1\mathbf{a}_1 + c_2\mathbf{a}_2 + \dots + c_k\mathbf{a}_k$
for some scalars $c_1, c_2, \dots, c_k$.

Just like in the single-vector case, the vector connecting the tip of the projection to the tip of $\mathbf{b}$ must be orthogonal to the subspace $W$. This means the error vector, $\mathbf{b} - \text{proj}_W\mathbf{b}$, must be orthogonal to *every* vector in $W$. If it's orthogonal to every vector in $W$, it must certainly be orthogonal to each of the basis vectors that span $W$.

So, we have the following conditions:
$(\mathbf{b} - \text{proj}_W\mathbf{b}) \cdot \mathbf{a}_1 = 0$
$(\mathbf{b} - \text{proj}_W\mathbf{b}) \cdot \mathbf{a}_2 = 0$
$\vdots$
$(\mathbf{b} - \text{proj}_W\mathbf{b}) \cdot \mathbf{a}_k = 0$

Substituting the form of the projection:
$(\mathbf{b} - (c_1\mathbf{a}_1 + c_2\mathbf{a}_2 + \dots + c_k\mathbf{a}_k)) \cdot \mathbf{a}_i = 0$ for $i = 1, \dots, k$.

Using the linearity of the dot product, we get $k$ equations:
$\mathbf{b} \cdot \mathbf{a}_1 - (c_1\mathbf{a}_1 \cdot \mathbf{a}_1 + c_2\mathbf{a}_2 \cdot \mathbf{a}_1 + \dots + c_k\mathbf{a}_k \cdot \mathbf{a}_1) = 0$
$\mathbf{b} \cdot \mathbf{a}_2 - (c_1\mathbf{a}_1 \cdot \mathbf{a}_2 + c_2\mathbf{a}_2 \cdot \mathbf{a}_2 + \dots + c_k\mathbf{a}_k \cdot \mathbf{a}_2) = 0$
$\vdots$
$\mathbf{b} \cdot \mathbf{a}_k - (c_1\mathbf{a}_1 \cdot \mathbf{a}_k + c_2\mathbf{a}_2 \cdot \mathbf{a}_k + \dots + c_k\mathbf{a}_k \cdot \mathbf{a}_k) = 0$

This is a system of $k$ linear equations for the $k$ unknown coefficients $c_1, \dots, c_k$.

### 5. The Matrix Approach: Normal Equations

This system of equations can be elegantly represented using matrices.
Let $A$ be the matrix whose columns are the basis vectors of $W$:
$A = \begin{pmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \dots & \mathbf{a}_k \end{pmatrix}$

Then, the vector of coefficients is $\mathbf{c} = \begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_k \end{pmatrix}$.
The projection vector can be written as $\text{proj}_W\mathbf{b} = A\mathbf{c}$.

The system of $k$ equations can be rewritten in matrix form. Let's look at the dot products:
$c_1(\mathbf{a}_1 \cdot \mathbf{a}_i) + c_2(\mathbf{a}_2 \cdot \mathbf{a}_i) + \dots + c_k(\mathbf{a}_k \cdot \mathbf{a}_i) = \mathbf{b} \cdot \mathbf{a}_i$ for each $i$.

Consider the matrix $A^T A$. The entry in the $j$-th row and $i$-th column of $A^T A$ is the dot product of the $j$-th column of $A$ with the $i$-th column of $A$. So, $(A^T A)_{ji} = \mathbf{a}_j \cdot \mathbf{a}_i$.

The system of equations becomes:
$(A^T A) \mathbf{c} = A^T \mathbf{b}$

This is the famous **normal equations**. This is a crucial result, linking projection to systems of linear equations and matrix algebra, aligning perfectly with **CO1**.

**How to solve for $\mathbf{c}$?**
If the columns of $A$ (the basis vectors $\mathbf{a}_i$) are linearly independent, then $A^T A$ is invertible. In that case, we can find $\mathbf{c}$:
$\mathbf{c} = (A^T A)^{-1} A^T \mathbf{b}$

Once we have the coefficients $\mathbf{c}$, the projection of $\mathbf{b}$ onto $W$ is:
$\text{proj}_W\mathbf{b} = A\mathbf{c} = A(A^T A)^{-1} A^T \mathbf{b}$

The matrix $P = A(A^T A)^{-1} A^T$ is called the **projection matrix**. Multiplying any vector $\mathbf{b}$ by $P$ gives its projection onto the subspace spanned by the columns of $A$. This is a very powerful tool.

This matrix form is thoroughly discussed in Larson (8th ed., Section 7.4, Orthogonal Matrices) and Deisenroth, Faisal, and Ong (Mathematics for Machine Learning, Chapter 6, which focuses on linear models and least squares, where projection is fundamental).

**Analogy:** Imagine you're an architect designing a new building. The blueprint specifies that the main support structure must lie in a particular "plane" (our subspace $W$) defined by certain foundational beams ($\mathbf{a}_1, \dots, \mathbf{a}_k$). You have a load vector $\mathbf{b}$ that you need to apply. The projection onto $W$ finds the "optimal" way to distribute that load within the constraints of the subspace, ensuring that the "residual" force (the error vector) is perfectly balanced with respect to the foundational directions.

**Example:** Let's project $\mathbf{b} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ onto the plane $W$ in $\mathbb{R}^3$ spanned by $\mathbf{a}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ and $\mathbf{a}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$. This plane is simply the $xy$-plane.

Here, our basis vectors are $\mathbf{a}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ and $\mathbf{a}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$.
The matrix $A$ is $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}$.

Let's compute $A^T A$:
$A^T = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$
$A^T A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2$ (the $2 \times 2$ identity matrix).
This happens because our basis vectors are already orthogonal (and even orthonormal in this case, with length 1).

Now, compute $A^T \mathbf{b}$:
$A^T \mathbf{b} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$

Using the normal equations: $(A^T A) \mathbf{c} = A^T \mathbf{b}$
$I_2 \mathbf{c} = \begin{pmatrix} 1 \\ 2 \end{pmatrix} \implies \mathbf{c} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$.
So, $c_1 = 1$ and $c_2 = 2$.

The projection is $\text{proj}_W\mathbf{b} = c_1\mathbf{a}_1 + c_2\mathbf{a}_2 = 1 \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + 2 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$.

This makes perfect sense! Projecting $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ onto the $xy$-plane means just setting the $z$-component to zero, giving $\begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$.

Let's check the projection matrix:
$P = A(A^T A)^{-1} A^T = A(I_2)^{-1} A^T = A I_2 A^T = A A^T$
$A A^T = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$
This is the projection matrix onto the $xy$-plane.
$P \mathbf{b} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$, confirming our result.

### 6. Orthogonal Bases and Simplification

The calculations for $A^T A$ become much simpler if the basis vectors $\{\mathbf{a}_1, \dots, \mathbf{a}_k\}$ are **orthogonal** (i.e., $\mathbf{a}_i \cdot \mathbf{a}_j = 0$ for $i \neq j$). In this case, $A^T A$ becomes a diagonal matrix:
$A^T A = \begin{pmatrix} \mathbf{a}_1 \cdot \mathbf{a}_1 & 0 & \dots & 0 \\ 0 & \mathbf{a}_2 \cdot \mathbf{a}_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \mathbf{a}_k \cdot \mathbf{a}_k \end{pmatrix} = \text{diag}(\|\mathbf{a}_1\|^2, \|\mathbf{a}_2\|^2, \dots, \|\mathbf{a}_k\|^2)$

If the basis is also **orthonormal** (orthogonal and each vector has length 1, i.e., $\mathbf{a}_i \cdot \mathbf{a}_j = \delta_{ij}$, where $\delta_{ij}$ is the Kronecker delta), then $A^T A = I_k$ (the identity matrix of size $k$).

In the case of an orthonormal basis $\{\mathbf{u}_1, \dots, \mathbf{u}_k\}$ for $W$:
$A = \begin{pmatrix} \mathbf{u}_1 & \dots & \mathbf{u}_k \end{pmatrix}$
$A^T A = I_k$
The normal equations become:
$I_k \mathbf{c} = A^T \mathbf{b}$
$\mathbf{c} = A^T \mathbf{b}$

The components $c_i$ are then simply:
$c_i = \mathbf{u}_i^T \mathbf{b} = \mathbf{b} \cdot \mathbf{u}_i$ (This is the scalar projection of $\mathbf{b}$ onto $\mathbf{u}_i$).

The projection is:
$\text{proj}_W\mathbf{b} = c_1\mathbf{u}_1 + c_2\mathbf{u}_2 + \dots + c_k\mathbf{u}_k$
$\text{proj}_W\mathbf{b} = (\mathbf{b} \cdot \mathbf{u}_1)\mathbf{u}_1 + (\mathbf{b} \cdot \mathbf{u}_2)\mathbf{u}_2 + \dots + (\mathbf{b} \cdot \mathbf{u}_k)\mathbf{u}_k$

This is a beautiful, intuitive result. The projection of $\mathbf{b}$ onto $W$ is the sum of its projections onto the individual orthogonal basis vectors of $W$. This is exactly what **CO3** is about – understanding inner product spaces and applying orthonormalization (like the Gram-Schmidt process) to get such bases. If you have an orthogonal basis, you can easily convert it to an orthonormal basis by dividing each vector by its length.

**Connection to Least Squares (CO3):**

The projection onto a subspace $W$ is fundamentally about finding the vector in $W$ that is "closest" to $\mathbf{b}$. This closest vector is precisely the projection, $\text{proj}_W\mathbf{b}$. The distance squared between $\mathbf{b}$ and any vector $\mathbf{w} \in W$ is $\|\mathbf{b} - \mathbf{w}\|^2$. Minimizing this distance means finding $\mathbf{w} = \text{proj}_W\mathbf{b}$.

This is the core of the **least squares problem**. If we have a system $A\mathbf{x} = \mathbf{b}$ that has no exact solution, we find the $\mathbf{x}$ that minimizes $\|\mathbf{b} - A\mathbf{x}\|^2$. The vector $A\mathbf{x}$ lies in the column space of $A$, which is a subspace. The best approximation $\hat{\mathbf{b}} = A\hat{\mathbf{x}}$ is the projection of $\mathbf{b}$ onto the column space of $A$. So, $\hat{\mathbf{b}} = \text{proj}_{\text{col}(A)}\mathbf{b}$.
The normal equations $(A^T A)\hat{\mathbf{x}} = A^T \mathbf{b}$ are precisely the system that gives us the least-squares solution $\hat{\mathbf{x}}$. This is a powerful connection you will definitely see tested!

### 7. Key Takeaways and Exam Tips

*   **Projection is about finding the "best approximation" within a subspace.** It's the vector in the subspace that is "closest" to the original vector.
*   **The error vector ($\mathbf{b} - \text{proj}_W\mathbf{b}$) must be orthogonal to the subspace $W$.** This is the fundamental property that drives all projection calculations.
*   **Projection onto a line spanned by $\mathbf{a}$:** $\text{proj}_{\mathbf{a}}\mathbf{b} = \left(\frac{\mathbf{b} \cdot \mathbf{a}}{\|\mathbf{a}\|^2}\right) \mathbf{a}$. Remember this!
*   **Projection onto a subspace $W$ with basis $A$:** Solved using the **normal equations**: $(A^T A)\mathbf{c} = A^T \mathbf{b}$, where $\text{proj}_W\mathbf{b} = A\mathbf{c}$.
*   **If the basis is orthonormal**, $A^T A = I$, simplifying the normal equations to $\mathbf{c} = A^T \mathbf{b}$, and the projection is $\text{proj}_W\mathbf{b} = \sum (\mathbf{b} \cdot \mathbf{u}_i)\mathbf{u}_i$.
*   **Least Squares:** The solution to $A\mathbf{x} = \mathbf{b}$ that minimizes $\|\mathbf{b} - A\mathbf{x}\|^2$ is $\hat{\mathbf{x}} = (A^T A)^{-1} A^T \mathbf{b}$, and the best approximation is $\hat{\mathbf{b}} = A\hat{\mathbf{x}} = A(A^T A)^{-1} A^T \mathbf{b} = P\mathbf{b}$.
*   **Common Pitfall:** Forgetting to check if the basis vectors are linearly independent before assuming $(A^T A)^{-1}$ exists. If they are not linearly independent, you'd need to find a basis first (e.g., using Gram-Schmidt) or use a pseudoinverse.
*   **Exam Focus:** Expect questions that ask you to project a vector onto a given subspace (defined by basis vectors), or to find the least squares solution for an overdetermined system, which directly uses projection concepts. Understanding the geometric intuition is as important as the algebraic manipulations.

This topic is a beautiful synthesis of vector operations, geometric intuition, and matrix algebra, and it's incredibly applicable. Keep these ideas in mind as we move forward!

---

### Sample Questions and Answers

**Q1. Conceptual Understanding:**

What is the key geometric property that defines the projection of a vector $\mathbf{b}$ onto a subspace $W$?

**Answer:**
The key property is that the vector connecting the tip of the projection to the tip of the original vector (the error vector, $\mathbf{b} - \text{proj}_W\mathbf{b}$) must be **orthogonal** to the subspace $W$. This means it is orthogonal to every vector in $W$, and specifically, orthogonal to all basis vectors of $W$.

---

**Q2. Projection onto a Line:**

Let $\mathbf{b} = \begin{pmatrix} 2 \\ 5 \end{pmatrix}$ and $\mathbf{a} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$. Find the projection of $\mathbf{b}$ onto the line spanned by $\mathbf{a}$.

**Solution:**
We use the formula $\text{proj}_{\mathbf{a}}\mathbf{b} = \left(\frac{\mathbf{b} \cdot \mathbf{a}}{\|\mathbf{a}\|^2}\right) \mathbf{a}$.

First, calculate the dot products:
$\mathbf{b} \cdot \mathbf{a} = (2)(1) + (5)(2) = 2 + 10 = 12$
$\|\mathbf{a}\|^2 = \mathbf{a} \cdot \mathbf{a} = (1)(1) + (2)(2) = 1 + 4 = 5$

Now, find the projection:
$\text{proj}_{\mathbf{a}}\mathbf{b} = \left(\frac{12}{5}\right) \begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 12/5 \\ 24/5 \end{pmatrix}$

---

**Q3. Projection onto a Subspace using Normal Equations:**

Let $W$ be the subspace of $\mathbb{R}^3$ spanned by $\mathbf{a}_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ and $\mathbf{a}_2 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$. Find the projection of $\mathbf{b} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ onto $W$.

**Solution:**
The subspace $W$ is the $xy$-plane, as the basis vectors are in the $xy$-plane and are linearly independent.
First, form the matrix $A$ with the basis vectors as columns:
$A = \begin{pmatrix} 1 & 1 \\ 1 & -1 \\ 0 & 0 \end{pmatrix}$

Calculate $A^T A$:
$A^T = \begin{pmatrix} 1 & 1 & 0 \\ 1 & -1 & 0 \end{pmatrix}$
$A^T A = \begin{pmatrix} 1 & 1 & 0 \\ 1 & -1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} (1 \cdot 1 + 1 \cdot 1 + 0 \cdot 0) & (1 \cdot 1 + 1 \cdot (-1) + 0 \cdot 0) \\ (1 \cdot 1 + (-1) \cdot 1 + 0 \cdot 0) & (1 \cdot 1 + (-1) \cdot (-1) + 0 \cdot 0) \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$
Note that since $\mathbf{a}_1$ and $\mathbf{a}_2$ are orthogonal, $A^T A$ is diagonal.

Calculate $A^T \mathbf{b}$:
$A^T \mathbf{b} = \begin{pmatrix} 1 & 1 & 0 \\ 1 & -1 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} = \begin{pmatrix} (1 \cdot 1 + 1 \cdot 2 + 0 \cdot 3) \\ (1 \cdot 1 + (-1) \cdot 2 + 0 \cdot 3) \end{pmatrix} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}$

Now, solve the normal equations $(A^T A)\mathbf{c} = A^T \mathbf{b}$ for $\mathbf{c} = \begin{pmatrix} c_1 \\ c_2 \end{pmatrix}$:
$\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} c_1 \\ c_2 \end{pmatrix} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}$
This gives $2c_1 = 3 \implies c_1 = 3/2$ and $2c_2 = -1 \implies c_2 = -1/2$.

The projection is $\text{proj}_W\mathbf{b} = c_1\mathbf{a}_1 + c_2\mathbf{a}_2$:
$\text{proj}_W\mathbf{b} = \frac{3}{2} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + \left(-\frac{1}{2}\right) \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3/2 \\ 3/2 \\ 0 \end{pmatrix} + \begin{pmatrix} -1/2 \\ 1/2 \\ 0 \end{pmatrix} = \begin{pmatrix} 2/2 \\ 4/2 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$

This result is consistent with projecting onto the $xy$-plane.

---

**Q4. Least Squares Connection:**

For the system $A\mathbf{x} = \mathbf{b}$ where $A = \begin{pmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} 6 \\ 8 \\ 11 \end{pmatrix}$, find the least-squares solution $\hat{\mathbf{x}}$. What is the best approximation $\hat{\mathbf{b}}$?

**Solution:**
The least-squares solution is found by solving $(A^T A)\hat{\mathbf{x}} = A^T \mathbf{b}$.

First, compute $A^T A$:
$A^T = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \end{pmatrix}$
$A^T A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{pmatrix} = \begin{pmatrix} (1+1+1) & (1+2+3) \\ (1+2+3) & (1+4+9) \end{pmatrix} = \begin{pmatrix} 3 & 6 \\ 6 & 14 \end{pmatrix}$

Next, compute $A^T \mathbf{b}$:
$A^T \mathbf{b} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \end{pmatrix} \begin{pmatrix} 6 \\ 8 \\ 11 \end{pmatrix} = \begin{pmatrix} (6+8+11) \\ (6+16+33) \end{pmatrix} = \begin{pmatrix} 25 \\ 55 \end{pmatrix}$

Now, solve $\begin{pmatrix} 3 & 6 \\ 6 & 14 \end{pmatrix} \hat{\mathbf{x}} = \begin{pmatrix} 25 \\ 55 \end{pmatrix}$.
We can find the inverse of $A^T A$:
$\det(A^T A) = (3)(14) - (6)(6) = 42 - 36 = 6$
$(A^T A)^{-1} = \frac{1}{6} \begin{pmatrix} 14 & -6 \\ -6 & 3 \end{pmatrix}$

Then, $\hat{\mathbf{x}} = (A^T A)^{-1} A^T \mathbf{b} = \frac{1}{6} \begin{pmatrix} 14 & -6 \\ -6 & 3 \end{pmatrix} \begin{pmatrix} 25 \\ 55 \end{pmatrix}$
$\hat{\mathbf{x}} = \frac{1}{6} \begin{pmatrix} (14 \cdot 25 - 6 \cdot 55) \\ (-6 \cdot 25 + 3 \cdot 55) \end{pmatrix} = \frac{1}{6} \begin{pmatrix} (350 - 330) \\ (-150 + 165) \end{pmatrix} = \frac{1}{6} \begin{pmatrix} 20 \\ 15 \end{pmatrix} = \begin{pmatrix} 20/6 \\ 15/6 \end{pmatrix} = \begin{pmatrix} 10/3 \\ 5/2 \end{pmatrix}$

So, the least-squares solution is $\hat{\mathbf{x}} = \begin{pmatrix} 10/3 \\ 5/2 \end{pmatrix}$.

The best approximation $\hat{\mathbf{b}}$ is $A\hat{\mathbf{x}}$:
$\hat{\mathbf{b}} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} 10/3 \\ 5/2 \end{pmatrix} = \begin{pmatrix} (10/3 + 5/2) \\ (10/3 + 2 \cdot 5/2) \\ (10/3 + 3 \cdot 5/2) \end{pmatrix} = \begin{pmatrix} (20/6 + 15/6) \\ (10/3 + 5) \\ (10/3 + 15/2) \end{pmatrix} = \begin{pmatrix} 35/6 \\ 25/3 \\ (20/6 + 45/6) \end{pmatrix} = \begin{pmatrix} 35/6 \\ 50/6 \\ 65/6 \end{pmatrix}$

$\hat{\mathbf{b}} = \begin{pmatrix} 35/6 \\ 50/6 \\ 65/6 \end{pmatrix} \approx \begin{pmatrix} 5.83 \\ 8.33 \\ 10.83 \end{pmatrix}$. This is the vector in the column space of $A$ that is closest to $\mathbf{b}$.

---
