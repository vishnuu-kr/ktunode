---
title: "Coordinate representation in Rn"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 2: Vector Spaces"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d18"
status: "completed"
scrapedAt: "2026-05-20T16:34:39.466Z"
---
Here are your comprehensive study notes on "Coordinate Representation in $\mathbb{R}^n$" for your "Mathematics for Information Science – 2" course. Let's dive in and explore how we represent points and vectors in multi-dimensional spaces!

---

## Module 2: Vector Spaces - Coordinate Representation in $\mathbb{R}^n$

Welcome, everyone! In this session, we're going to build upon our understanding of vectors and vector spaces. Today's focus is on something fundamental yet incredibly powerful: **Coordinate Representation in $\mathbb{R}^n$**. Think of it as learning the "language" to describe locations and directions in spaces that go beyond our usual 2D or 3D experience. This topic is crucial for everything we'll do later, from solving systems of equations to understanding linear transformations. It directly supports **CO1** (solving systems of linear equations, eigenvalues/vectors, diagonalization) and **CO2** (understanding vector spaces and subspaces) and lays the groundwork for **CO3** (inner product spaces) and **CO4** (linear transformations).

### 1. What is $\mathbb{R}^n$? Our Multi-dimensional Playground

Before we talk about coordinates, let's get a clear picture of what $\mathbb{R}^n$ actually is. You're all familiar with $\mathbb{R}^1$ (a line) and $\mathbb{R}^2$ (a plane) and $\mathbb{R}^3$ (the space we live in). $\mathbb{R}^n$ is simply the generalization of these. It's the set of all ordered $n$-tuples of real numbers.

We can think of an element in $\mathbb{R}^n$ as a "point" or a "vector" in $n$-dimensional space. What does "n-dimensional" mean? It's a bit abstract, but mathematically, it just means we need $n$ numbers to uniquely describe a position or a direction.

For instance:
*   In $\mathbb{R}^1$, a point is just a single number, like $5$. We can write it as $(5)$.
*   In $\mathbb{R}^2$, a point is an ordered pair $(x, y)$, like $(3, 2)$. This point is 3 units along the x-axis and 2 units along the y-axis.
*   In $\mathbb{R}^3$, a point is an ordered triple $(x, y, z)$, like $(1, -2, 4)$.

Now, in $\mathbb{R}^n$, a point (or a vector) is an ordered $n$-tuple:

$ \mathbf{v} = (v_1, v_2, \dots, v_n) $

where each $v_i$ is a real number. These $v_i$ are called the **components** or **coordinates** of the vector $\mathbf{v}$.

**Analogy:** Imagine you're giving directions to find a friend's house.
*   In $\mathbb{R}^1$ (a street), you might just need one number: "It's the 5th house on this street." (v1 = 5)
*   In $\mathbb{R}^2$ (a city grid), you might need two numbers: "Go 3 blocks east and 2 blocks north." (v1 = 3, v2 = 2)
*   In $\mathbb{R}^3$ (a skyscraper), you might need three: "Go to the 5th floor, then the 2nd apartment down the hall, and the 4th door." (v1 = 5, v2 = 2, v3 = 4)

For $\mathbb{R}^n$, we just need $n$ pieces of information to pinpoint a location. For example, in $\mathbb{R}^4$, a point could be $(1.5, -3, 0, 7.2)$. This might represent, say, a data point with four features: temperature, humidity, pressure, and wind speed.

**Key Takeaway:** The $n$ numbers in the $n$-tuple are the essential pieces of information that define a point or a vector in $\mathbb{R}^n$. They tell us "how much" of each fundamental direction or basis element we have.

### 2. The Standard Basis: Our Default Coordinate System

When we talk about coordinates, we are implicitly assuming a specific **coordinate system**. The most fundamental and widely used coordinate system in $\mathbb{R}^n$ is based on the **standard basis vectors**.

What are these standard basis vectors? They are vectors of length 1, each pointing along one of the "axes".

In $\mathbb{R}^n$, the standard basis vectors are denoted as $\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n$.
*   $\mathbf{e}_1 = (1, 0, 0, \dots, 0)$
*   $\mathbf{e}_2 = (0, 1, 0, \dots, 0)$
*   $\mathbf{e}_3 = (0, 0, 1, \dots, 0)$
*   ...
*   $\mathbf{e}_n = (0, 0, 0, \dots, 1)$

Notice that $\mathbf{e}_i$ has a '1' in the $i$-th position and '0' everywhere else.

**Why are they called a "basis"?** A basis for a vector space is a set of vectors that are:
1.  **Linearly Independent:** No vector in the set can be written as a linear combination of the others.
2.  **Spanning:** Every vector in the vector space can be written as a linear combination of these basis vectors.

The standard basis vectors for $\mathbb{R}^n$ are indeed linearly independent and they span $\mathbb{R}^n$. This means any vector $\mathbf{v} = (v_1, v_2, \dots, v_n)$ in $\mathbb{R}^n$ can be uniquely expressed as a linear combination of these standard basis vectors:

$ \mathbf{v} = v_1 \mathbf{e}_1 + v_2 \mathbf{e}_2 + \dots + v_n \mathbf{e}_n $

Let's verify this:
$ v_1 \mathbf{e}_1 = v_1 (1, 0, \dots, 0) = (v_1, 0, \dots, 0) $
$ v_2 \mathbf{e}_2 = v_2 (0, 1, \dots, 0) = (0, v_2, \dots, 0) $
...
$ v_n \mathbf{e}_n = v_n (0, 0, \dots, 1) = (0, 0, \dots, v_n) $

When we add these up:
$ v_1 \mathbf{e}_1 + v_2 \mathbf{e}_2 + \dots + v_n \mathbf{e}_n = (v_1, 0, \dots, 0) + (0, v_2, \dots, 0) + \dots + (0, 0, \dots, v_n) = (v_1, v_2, \dots, v_n) = \mathbf{v} $

**This is the core idea of coordinate representation!** The components $(v_1, v_2, \dots, v_n)$ are precisely the coefficients (or scalars) when we express the vector $\mathbf{v}$ as a linear combination of the standard basis vectors.

**Connection to CO2:** This directly relates to understanding vector spaces and subspaces. $\mathbb{R}^n$ itself is a vector space, and the standard basis vectors form a basis for it. Any subspace of $\mathbb{R}^n$ will also have a basis, though it might not be the standard basis.

**Textbook Insight:** Kreyszig's "Advanced Engineering Mathematics" (Chapter 7, Section 7.3 on Vector Spaces) emphasizes how a basis is a set of linearly independent vectors that span the space, and the coordinates are the coefficients in the unique linear combination. Larson's "Elementary Linear Algebra" also deeply explores the concept of bases and coordinates in Chapter 4.

**Example:** Let's consider $\mathbf{v} = (5, -2, 3)$ in $\mathbb{R}^3$.
Using the standard basis $\mathbf{e}_1 = (1, 0, 0)$, $\mathbf{e}_2 = (0, 1, 0)$, $\mathbf{e}_3 = (0, 0, 1)$:
$ \mathbf{v} = 5 \mathbf{e}_1 - 2 \mathbf{e}_2 + 3 \mathbf{e}_3 $
Here, the coordinates of $\mathbf{v}$ with respect to the standard basis are $(5, -2, 3)$. The coefficients of the basis vectors *are* the coordinates!

### 3. Change of Basis: A Different Perspective

Now, what if we decide to use a *different* set of basis vectors? This is where the concept of **change of basis** comes in. It's like switching from a grid system based on North-South and East-West to one based on, say, diagonal streets. Your location (your coordinates) will change, but the actual physical spot remains the same.

Suppose we have a vector space $V$ (like $\mathbb{R}^n$) and two different bases for it:
*   The standard basis $\mathcal{B} = \{\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n\}$
*   Another basis $\mathcal{B}' = \{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$

Any vector $\mathbf{v}$ can be written as a linear combination of vectors in $\mathcal{B}$ (these are its standard coordinates) or as a linear combination of vectors in $\mathcal{B}'$ (these are its coordinates with respect to $\mathcal{B}'$).

Let $\mathbf{v} = (v_1, v_2, \dots, v_n)$ be the standard coordinates of $\mathbf{v}$, so:
$ \mathbf{v} = v_1 \mathbf{e}_1 + v_2 \mathbf{e}_2 + \dots + v_n \mathbf{e}_n $

And let $\mathbf{v}$ also have coordinates $(c_1, c_2, \dots, c_n)$ with respect to the new basis $\mathcal{B}'$, meaning:
$ \mathbf{v} = c_1 \mathbf{u}_1 + c_2 \mathbf{u}_2 + \dots + c_n \mathbf{u}_n $

The goal of change of basis is to find a way to relate the coordinates $(v_1, \dots, v_n)$ to $(c_1, \dots, c_n)$.

**How do we do this?** We need to know how the new basis vectors $\{\mathbf{u}_1, \dots, \mathbf{u}_n\}$ are represented in terms of the standard basis $\{\mathbf{e}_1, \dots, \mathbf{e}_n\}$.

Let's say:
$ \mathbf{u}_1 = (u_{11}, u_{21}, \dots, u_{n1}) $
$ \mathbf{u}_2 = (u_{12}, u_{22}, \dots, u_{n2}) $
...
$ \mathbf{u}_n = (u_{1n}, u_{2n}, \dots, u_{nn}) $

We can form a matrix, often called the **change-of-basis matrix** (or transition matrix), by using these new basis vectors as columns:

$ P_{\mathcal{B} \leftarrow \mathcal{B}'} = \begin{pmatrix} \uparrow & \uparrow & & \uparrow \\ \mathbf{u}_1 & \mathbf{u}_2 & \dots & \mathbf{u}_n \\ \downarrow & \downarrow & & \downarrow \end{pmatrix} = \begin{pmatrix} u_{11} & u_{12} & \dots & u_{1n} \\ u_{21} & u_{22} & \dots & u_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ u_{n1} & u_{n2} & \dots & u_{nn} \end{pmatrix} $

If $[\mathbf{v}]_{\mathcal{B}'}$ is the column vector of coordinates of $\mathbf{v}$ with respect to $\mathcal{B}'$, i.e., $[\mathbf{v}]_{\mathcal{B}'} = \begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{pmatrix}$, and $[\mathbf{v}]_{\mathcal{B}}$ is the column vector of standard coordinates, i.e., $[\mathbf{v}]_{\mathcal{B}} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}$, then the relationship is:

$ [\mathbf{v}]_{\mathcal{B}} = P_{\mathcal{B} \leftarrow \mathcal{B}'} [\mathbf{v}]_{\mathcal{B}'} $

**This is a fundamental equation in linear algebra and data science!** It allows us to convert coordinates from one basis to another.

**Conversely**, if we want to find the coordinates in the new basis given the standard coordinates, we need the inverse of this matrix, $P_{\mathcal{B}' \leftarrow \mathcal{B}} = (P_{\mathcal{B} \leftarrow \mathcal{B}'})^{-1}$. Then:

$ [\mathbf{v}]_{\mathcal{B}'} = (P_{\mathcal{B} \leftarrow \mathcal{B}'})^{-1} [\mathbf{v}]_{\mathcal{B}} $

**Important Note:** For a change-of-basis matrix to exist and be invertible (which is necessary to convert in both directions), the set of vectors $\{\mathbf{u}_1, \dots, \mathbf{u}_n\}$ must form a basis, meaning they must be linearly independent and span the space. This is related to the matrix being non-singular (determinant is not zero).

**Real-world Analogy:** Imagine you have a map of your city (standard basis). You can give directions using latitude and longitude (standard coordinates). Now, someone else provides a map where all directions are given relative to major highways (a new basis). To understand their directions, you need to know how the highways align with your original North-South/East-West grid. The matrix $P_{\mathcal{B} \leftarrow \mathcal{B}'}$ is like a conversion table showing how your North/East directions relate to the directions defined by the highways.

**Example (from Kreyszig):** Let $\mathcal{B} = \{\mathbf{e}_1, \mathbf{e}_2\}$ be the standard basis in $\mathbb{R}^2$. Let $\mathcal{B}' = \{\mathbf{u}_1, \mathbf{u}_2\}$ be another basis where $\mathbf{u}_1 = (1, 2)$ and $\mathbf{u}_2 = (3, 4)$.
Let's find the coordinates of $\mathbf{v} = (5, 1)$ with respect to $\mathcal{B}'$.

First, construct the change-of-basis matrix $P_{\mathcal{B} \leftarrow \mathcal{B}'}$:
$ P_{\mathcal{B} \leftarrow \mathcal{B}'} = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} $
The columns are the standard coordinates of the new basis vectors.

The standard coordinates of $\mathbf{v}$ are $[\mathbf{v}]_{\mathcal{B}} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}$.

We need to find $[\mathbf{v}]_{\mathcal{B}'} = \begin{pmatrix} c_1 \\ c_2 \end{pmatrix}$ such that $\mathbf{v} = c_1 \mathbf{u}_1 + c_2 \mathbf{u}_2$.
This is equivalent to:
$ [\mathbf{v}]_{\mathcal{B}} = P_{\mathcal{B} \leftarrow \mathcal{B}'} [\mathbf{v}]_{\mathcal{B}'} $
$ \begin{pmatrix} 5 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} c_1 \\ c_2 \end{pmatrix} $

To solve for $c_1$ and $c_2$, we can use matrix inversion or row reduction. Let's find the inverse of $P_{\mathcal{B} \leftarrow \mathcal{B}'}$:
Determinant is $(1)(4) - (3)(2) = 4 - 6 = -2$.
$ (P_{\mathcal{B} \leftarrow \mathcal{B}'})^{-1} = \frac{1}{-2} \begin{pmatrix} 4 & -3 \\ -2 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 3/2 \\ 1 & -1/2 \end{pmatrix} $

Now,
$ [\mathbf{v}]_{\mathcal{B}'} = (P_{\mathcal{B} \leftarrow \mathcal{B}'})^{-1} [\mathbf{v}]_{\mathcal{B}} = \begin{pmatrix} -2 & 3/2 \\ 1 & -1/2 \end{pmatrix} \begin{pmatrix} 5 \\ 1 \end{pmatrix} = \begin{pmatrix} (-2)(5) + (3/2)(1) \\ (1)(5) + (-1/2)(1) \end{pmatrix} = \begin{pmatrix} -10 + 3/2 \\ 5 - 1/2 \end{pmatrix} = \begin{pmatrix} -17/2 \\ 9/2 \end{pmatrix} $

So, the coordinates of $\mathbf{v}$ with respect to the basis $\mathcal{B}'$ are $(-17/2, 9/2)$.
Let's check:
$ -\frac{17}{2} \mathbf{u}_1 + \frac{9}{2} \mathbf{u}_2 = -\frac{17}{2} (1, 2) + \frac{9}{2} (3, 4) = (-\frac{17}{2}, -\frac{34}{2}) + (\frac{27}{2}, \frac{36}{2}) = (-\frac{17}{2} + \frac{27}{2}, -\frac{34}{2} + \frac{36}{2}) = (\frac{10}{2}, \frac{2}{2}) = (5, 1) $. It works!

**Connection to CO1 & CO2:** Change of basis is deeply connected to solving systems of linear equations (as we did to find the new coordinates) and understanding the properties of vector spaces. The ability to change bases is fundamental to manipulating vectors and understanding how they behave under different representations.

### 5. Coordinate Vectors and Matrices

In linear algebra, it's very common to represent vectors as **column matrices**. This notation simplifies many operations, especially when dealing with linear transformations (which we'll cover later).

So, a vector $\mathbf{v} = (v_1, v_2, \dots, v_n)$ in $\mathbb{R}^n$ is often written as:

$ \mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix} $

When we do this, we often denote the column matrix as $[\mathbf{v}]_{\mathcal{B}}$ to explicitly state that these are the coordinates of $\mathbf{v}$ with respect to a basis $\mathcal{B}$. If $\mathcal{B}$ is the standard basis, we might simply write $[\mathbf{v}]$.

**Example:** The vector $\mathbf{v} = (5, -2, 3)$ in $\mathbb{R}^3$ can be represented as the column matrix:
$ [\mathbf{v}] = \begin{pmatrix} 5 \\ -2 \\ 3 \end{pmatrix} $

**Matrices of Linear Transformations:** This is where the column matrix representation really shines. When we apply a linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$, we can represent $T$ by an $m \times n$ matrix $A$ such that $T(\mathbf{x}) = A\mathbf{x}$ for any vector $\mathbf{x}$ in $\mathbb{R}^n$. The columns of matrix $A$ are precisely the images of the standard basis vectors under the transformation $T$. This is a key concept we'll delve into when we discuss **CO4**.

For instance, if $T: \mathbb{R}^2 \to \mathbb{R}^3$ is a linear transformation, and we know $T(\mathbf{e}_1) = \begin{pmatrix} a_{11} \\ a_{21} \\ a_{31} \end{pmatrix}$ and $T(\mathbf{e}_2) = \begin{pmatrix} a_{12} \\ a_{22} \\ a_{32} \end{pmatrix}$, then the matrix $A$ representing $T$ is:

$ A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \end{pmatrix} $

And for any vector $\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = x_1 \mathbf{e}_1 + x_2 \mathbf{e}_2$, we have:
$ T(\mathbf{x}) = T(x_1 \mathbf{e}_1 + x_2 \mathbf{e}_2) = x_1 T(\mathbf{e}_1) + x_2 T(\mathbf{e}_2) = A \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} $

This unified representation using matrices and column vectors is a cornerstone of linear algebra and its applications in information science, machine learning, and data analysis.

### 6. Why is This Important for Information Science?

You might be asking, "Why do we need to go beyond $\mathbb{R}^2$ and $\mathbb{R}^3$?" The answer is simple: **Data!**

*   **Data Representation:** Most real-world data is not just a point on a graph. A customer might be described by their age, income, purchase history, browsing time, location, etc. This forms a data point in a high-dimensional space, say $\mathbb{R}^{100}$ or even higher. Each dimension represents a feature of the customer. Coordinates in $\mathbb{R}^n$ are how we represent these rich data points.
*   **Machine Learning Algorithms:** Algorithms like linear regression, principal component analysis (PCA), support vector machines (SVMs), and neural networks all operate on data represented as vectors and matrices in high-dimensional spaces. Understanding coordinate representation is essential to grasp how these algorithms work. For example, PCA aims to find a new basis that captures the most variance in the data, which is a change-of-basis operation.
*   **Solving Systems of Equations:** As we saw with change of basis, representing vectors and systems of equations in matrix form (using coordinate representations) allows us to use powerful tools to solve them, directly addressing **CO1**. Many problems in data science boil down to solving or approximating solutions to linear systems.
*   **Geometric Interpretation:** Even in high dimensions, vector space concepts like distance, angles, projections, and transformations have geometric interpretations that are crucial for understanding data relationships and patterns. Inner product spaces (**CO3**) rely heavily on coordinate representations for calculating lengths and angles.

**Think of it this way:** If you're building a recommendation system, you might represent each movie by a vector of its features (genre, actors, director, rating, etc.) and each user by a vector of their preferences. The "distance" or "angle" between these vectors in a high-dimensional space can tell you how similar a movie is to a user's taste, or how similar two users are. This is all underpinned by coordinate representations.

**Summary of Key Concepts:**

*   $\mathbb{R}^n$ is the set of all ordered $n$-tuples of real numbers $(v_1, v_2, \dots, v_n)$.
*   The numbers $v_i$ are the **coordinates** or **components** of the vector.
*   The **standard basis** $\{\mathbf{e}_1, \dots, \mathbf{e}_n\}$ provides the default coordinate system, where $\mathbf{e}_i$ has a 1 in the $i$-th position and 0s elsewhere.
*   Any vector $\mathbf{v}$ can be written as $\mathbf{v} = v_1 \mathbf{e}_1 + \dots + v_n \mathbf{e}_n$, and $(v_1, \dots, v_n)$ are its standard coordinates.
*   **Change of basis** allows us to express vectors using a different set of basis vectors, which is done using a **change-of-basis matrix**.
*   Vectors are often represented as **column matrices** for computational convenience, especially in the context of linear transformations.

**Common Pitfall:** Mixing up the order of basis vectors when forming the change-of-basis matrix, or incorrectly calculating its inverse. Always double-check the definition: the columns of $P_{\mathcal{B} \leftarrow \mathcal{B}'}$ are the vectors in $\mathcal{B}'$ expressed in terms of $\mathcal{B}$.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** What do the coordinates of a vector in $\mathbb{R}^n$ represent?

**Answer:** The coordinates of a vector $\mathbf{v} = (v_1, v_2, \dots, v_n)$ in $\mathbb{R}^n$, with respect to a given basis (typically the standard basis), are the scalar coefficients that express $\mathbf{v}$ as a linear combination of the basis vectors. They essentially tell you "how much" of each basis direction is needed to construct the vector. For the standard basis $\{\mathbf{e}_1, \dots, \mathbf{e}_n\}$, the coordinates $(v_1, \dots, v_n)$ are precisely the numbers such that $\mathbf{v} = v_1\mathbf{e}_1 + v_2\mathbf{e}_2 + \dots + v_n\mathbf{e}_n$.

**Question 2 (Application):** Let $\mathcal{B} = \{\mathbf{u}_1, \mathbf{u}_2\}$ be a basis for $\mathbb{R}^2$, where $\mathbf{u}_1 = (2, 1)$ and $\mathbf{u}_2 = (1, -1)$. Let $\mathbf{v} = (5, 1)$ be a vector in $\mathbb{R}^2$. Find the coordinates of $\mathbf{v}$ with respect to the basis $\mathcal{B}$.

**Solution:**
We want to find scalars $c_1, c_2$ such that $\mathbf{v} = c_1 \mathbf{u}_1 + c_2 \mathbf{u}_2$.
In terms of standard coordinates, this is:
$ \begin{pmatrix} 5 \\ 1 \end{pmatrix} = c_1 \begin{pmatrix} 2 \\ 1 \end{pmatrix} + c_2 \begin{pmatrix} 1 \\ -1 \end{pmatrix} $
This can be written as a matrix equation:
$ \begin{pmatrix} 5 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} c_1 \\ c_2 \end{pmatrix} $

Let $P_{\mathcal{B} \leftarrow \mathcal{B}'} = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$. We need to solve for $\begin{pmatrix} c_1 \\ c_2 \end{pmatrix}$.
We can find the inverse of $P_{\mathcal{B} \leftarrow \mathcal{B}'}$:
Determinant is $(2)(-1) - (1)(1) = -2 - 1 = -3$.
$ (P_{\mathcal{B} \leftarrow \mathcal{B}'})^{-1} = \frac{1}{-3} \begin{pmatrix} -1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 1/3 & 1/3 \\ 1/3 & -2/3 \end{pmatrix} $

Now, we find the coordinates:
$ \begin{pmatrix} c_1 \\ c_2 \end{pmatrix} = (P_{\mathcal{B} \leftarrow \mathcal{B}'})^{-1} \begin{pmatrix} 5 \\ 1 \end{pmatrix} = \begin{pmatrix} 1/3 & 1/3 \\ 1/3 & -2/3 \end{pmatrix} \begin{pmatrix} 5 \\ 1 \end{pmatrix} = \begin{pmatrix} (1/3)(5) + (1/3)(1) \\ (1/3)(5) + (-2/3)(1) \end{pmatrix} = \begin{pmatrix} 6/3 \\ 3/3 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix} $

So, the coordinates of $\mathbf{v}$ with respect to the basis $\mathcal{B}$ are $(2, 1)$.
We can check this: $2\mathbf{u}_1 + 1\mathbf{u}_2 = 2(2, 1) + 1(1, -1) = (4, 2) + (1, -1) = (5, 1)$, which is $\mathbf{v}$.

**Question 3 (Exam-Oriented):** If $\mathbf{v} \in \mathbb{R}^3$ has standard coordinates $(3, -1, 2)$, and we change to a new basis $\mathcal{B}'$ whose basis vectors in terms of the standard basis are $\mathbf{u}_1 = (1, 0, 1)$, $\mathbf{u}_2 = (0, 1, 1)$, $\mathbf{u}_3 = (1, 1, 0)$. What are the coordinates of $\mathbf{v}$ with respect to $\mathcal{B}'$?

**Solution:**
The standard coordinates of $\mathbf{v}$ are $[\mathbf{v}]_{\mathcal{B}} = \begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix}$.
The new basis vectors in standard coordinates are:
$\mathbf{u}_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$, $\mathbf{u}_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$, $\mathbf{u}_3 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$.

The change-of-basis matrix from $\mathcal{B}'$ to the standard basis $\mathcal{B}$ has the new basis vectors as its columns:
$ P_{\mathcal{B} \leftarrow \mathcal{B}'} = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix} $

We want to find $[\mathbf{v}]_{\mathcal{B}'} = \begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix}$ such that $[\mathbf{v}]_{\mathcal{B}} = P_{\mathcal{B} \leftarrow \mathcal{B}'} [\mathbf{v}]_{\mathcal{B}'}$.
So, we need to solve:
$ \begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix} \begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix} $

We can use Gaussian elimination on the augmented matrix:
$ \left[\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 0 & 1 & 1 & -1 \\ 1 & 1 & 0 & 2 \end{array}\right] $
Row 3 = Row 3 - Row 1:
$ \left[\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 0 & 1 & 1 & -1 \\ 0 & 1 & -1 & -1 \end{array}\right] $
Row 3 = Row 3 - Row 2:
$ \left[\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 0 & 1 & 1 & -1 \\ 0 & 0 & -2 & 0 \end{array}\right] $

From the last row, $-2c_3 = 0 \implies c_3 = 0$.
From the second row, $c_2 + c_3 = -1 \implies c_2 + 0 = -1 \implies c_2 = -1$.
From the first row, $c_1 + c_3 = 3 \implies c_1 + 0 = 3 \implies c_1 = 3$.

So, the coordinates of $\mathbf{v}$ with respect to the basis $\mathcal{B}'$ are $(3, -1, 0)$.

---

This covers the essentials of coordinate representation in $\mathbb{R}^n$. Remember, understanding these basics will make our journey through the rest of the course much smoother. Keep practicing with examples, and don't hesitate to ask questions!
