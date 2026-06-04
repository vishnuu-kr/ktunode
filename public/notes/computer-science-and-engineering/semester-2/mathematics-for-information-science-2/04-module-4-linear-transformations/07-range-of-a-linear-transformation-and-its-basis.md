---
title: "Range of a Linear Transformation and its basis"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 4: Linear Transformations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d30"
status: "completed"
scrapedAt: "2026-05-20T16:34:55.863Z"
---
Absolutely! Let's dive into the fascinating world of linear transformations and specifically focus on their "range" and how we can describe it using a "basis." This is a crucial part of understanding how these mathematical machines work, and it directly connects to several of our course outcomes.

---

# Mathematics for Information Science – 2

## Module 4: Linear Transformations

### Topic: Range of a Linear Transformation and its Basis

Welcome back, everyone! Today, we're going to explore a really fundamental concept in linear transformations: the *range*. Think of a linear transformation as a function, but one that respects the structure of vector spaces – it keeps lines straight and the origin fixed. We've already learned how to represent these transformations using matrices, and understanding their range tells us a lot about what outputs are *possible* when we apply a transformation. It's like asking, "What kind of results can this machine produce?"

This topic is directly relevant to **CO4: Understand the concept of linear transformation and to apply its properties, to find the rank and nullity of a linear transformation and to find the matrices of linear transformations.** Specifically, the "range" is intimately connected to the "rank" of a transformation. We'll also touch upon concepts related to vector spaces and subspaces, which links us to **CO2: Understand the concepts of vector spaces and subspaces and to apply their properties.**

Let's begin by recalling what a linear transformation is.

---

### 1. What is a Linear Transformation?

A transformation $T$ from a vector space $V$ to a vector space $W$ (let's denote this as $T: V \to W$) is called *linear* if it satisfies two key properties for any vectors $\mathbf{u}, \mathbf{v}$ in $V$ and any scalar $c$:

1.  **Additivity:** $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$
2.  **Homogeneity:** $T(c\mathbf{u}) = cT(\mathbf{u})$

Remember these properties! They are the bedrock of everything we do with linear transformations. They essentially mean that the transformation preserves the operations of vector addition and scalar multiplication.

Think of it like this: Imagine you have a special kind of scanner that can transform 2D images into 3D models. If this scanner is *linear*, then scanning two images separately and then combining the 3D models should give you the same result as combining the original 2D images first and then scanning the combined image. Also, scaling an image by a factor of 2 before scanning should produce a 3D model that is twice as big as the model produced by scanning the original image and then scaling the 3D model.

---

### 2. Introducing the Range of a Linear Transformation

Now, let's talk about the *range*. Given a linear transformation $T: V \to W$, the **range of $T$**, often denoted as $Range(T)$ or $Im(T)$ (for Image of $T$), is the set of all possible output vectors in $W$ that can be obtained by applying $T$ to vectors in $V$.

In simpler terms:
$Range(T) = \{ T(\mathbf{v}) \mid \mathbf{v} \in V \}$

This is the collection of all vectors in the *codomain* ($W$) that are "hit" or "mapped to" by the transformation $T$ when we feed it every possible vector from the *domain* ($V$).

**Analogy Time!**
Imagine a factory that takes raw materials (vectors in $V$) and processes them into finished products (vectors in $W$) using a specific machine (the linear transformation $T$). The *range* of this machine is the set of all *different kinds of products* that can be produced by that factory. It doesn't matter if the factory can produce 100 identical chairs; the range only counts "chair" as one possible product. Similarly, it doesn't matter if some products are produced more easily than others; the range is just about *what* can be produced.

**Key Insight:** The range of a linear transformation is not just any set of vectors; it's a special kind of set. It's actually a **subspace** of the codomain $W$. This is a very important property and directly relates to **CO2**.

Why is it a subspace? Let's briefly check the subspace properties:
1.  **Contains the zero vector:** Since $T$ is linear, $T(\mathbf{0}_V) = \mathbf{0}_W$ (where $\mathbf{0}_V$ and $\mathbf{0}_W$ are the zero vectors in $V$ and $W$, respectively). So, the zero vector of $W$ is always in the range.
2.  **Closed under addition:** If $\mathbf{w}_1$ and $\mathbf{w}_2$ are in $Range(T)$, it means $\mathbf{w}_1 = T(\mathbf{v}_1)$ and $\mathbf{w}_2 = T(\mathbf{v}_2)$ for some $\mathbf{v}_1, \mathbf{v}_2 \in V$. Because $T$ is linear, $T(\mathbf{v}_1 + \mathbf{v}_2) = T(\mathbf{v}_1) + T(\mathbf{v}_2) = \mathbf{w}_1 + \mathbf{w}_2$. Since $\mathbf{v}_1 + \mathbf{v}_2$ is a vector in $V$, $\mathbf{w}_1 + \mathbf{w}_2$ is also in the range of $T$.
3.  **Closed under scalar multiplication:** If $\mathbf{w}$ is in $Range(T)$, then $\mathbf{w} = T(\mathbf{v})$ for some $\mathbf{v} \in V$. For any scalar $c$, $T(c\mathbf{v}) = cT(\mathbf{v}) = c\mathbf{w}$. Since $c\mathbf{v}$ is in $V$, $c\mathbf{w}$ is also in the range of $T$.

Since all three subspace properties hold, the range of a linear transformation is indeed a subspace of its codomain.

---

### 3. Finding the Range: The Role of Basis Vectors

So, how do we actually *find* the range and describe it? A common strategy is to use a basis for the domain $V$. Let $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$ be a basis for $V$.
Now, remember that *any* vector $\mathbf{v}$ in $V$ can be written as a unique linear combination of these basis vectors:
$\mathbf{v} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_n\mathbf{v}_n$, where $c_i$ are scalars.

When we apply the linear transformation $T$ to $\mathbf{v}$:
$T(\mathbf{v}) = T(c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_n\mathbf{v}_n)$

Using the linearity properties (additivity and homogeneity):
$T(\mathbf{v}) = c_1T(\mathbf{v}_1) + c_2T(\mathbf{v}_2) + \dots + c_nT(\mathbf{v}_n)$

Look at this result! It tells us that *any* vector in the range of $T$ can be expressed as a linear combination of the transformed basis vectors $\{T(\mathbf{v}_1), T(\mathbf{v}_2), \dots, T(\mathbf{v}_n)\}$.

This is a profound statement! It means that the set $\{T(\mathbf{v}_1), T(\mathbf{v}_2), \dots, T(\mathbf{v}_n)\}$ *spans* the range of $T$. In other words, the range of $T$ is the **column space** of the matrix representation of $T$, or more fundamentally, the subspace spanned by the images of the basis vectors of the domain. This is a direct connection to **CO4** and **CO2**.

---

### 4. Basis for the Range

We've established that $\{T(\mathbf{v}_1), T(\mathbf{v}_2), \dots, T(\mathbf{v}_n)\}$ spans the range. But is it necessarily a *basis* for the range? A basis must be linearly independent.

**When is $\{T(\mathbf{v}_1), T(\mathbf{v}_2), \dots, T(\mathbf{v}_n)\}$ a basis for $Range(T)$?**
This set is a basis for $Range(T)$ if and only if the vectors $T(\mathbf{v}_1), T(\mathbf{v}_2), \dots, T(\mathbf{v}_n)$ are **linearly independent**.

**Let's connect this to rank and nullity:**
The *rank* of a linear transformation $T$, denoted $rank(T)$, is the dimension of its range. The dimension of a subspace is the number of vectors in any basis for that subspace. So, $rank(T) = \dim(Range(T))$.
The *nullity* of $T$, denoted $nullity(T)$, is the dimension of the null space of $T$ (the set of all vectors that map to the zero vector).
The **Rank-Nullity Theorem** is fundamental here: For a linear transformation $T: V \to W$, where $V$ is finite-dimensional, we have:
$\dim(V) = rank(T) + nullity(T)$

This theorem is crucial and often tested. It tells us that the "output space" dimension (rank) and the "lost information space" dimension (nullity) always add up to the "input space" dimension.

Now, back to our basis for the range. If the original domain basis vectors $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ are mapped such that $\{T(\mathbf{v}_1), \dots, T(\mathbf{v}_n)\}$ are linearly independent, then this set forms a basis for $Range(T)$, and its size, $n$, would be the dimension of the range. This would imply that $nullity(T) = 0$, meaning the null space only contains the zero vector.

However, it's more common for some of the transformed basis vectors to be linearly dependent. For instance, if $T(\mathbf{v}_k)$ can be written as a linear combination of the other $T(\mathbf{v}_i)$'s for $i \neq k$, then $T(\mathbf{v}_k)$ is redundant in spanning the range, and the set $\{T(\mathbf{v}_1), \dots, T(\mathbf{v}_n)\}$ is linearly dependent.

**A more systematic way to find a basis for the Range:**

The most reliable method involves using the **matrix representation** of the linear transformation.
Suppose $T: \mathbb{R}^n \to \mathbb{R}^m$ is a linear transformation. We can find a matrix $A$ (of size $m \times n$) such that $T(\mathbf{x}) = A\mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^n$.

Then, the range of $T$ is precisely the **column space** of the matrix $A$.
$Range(T) = Col(A)$

To find a basis for the column space of $A$, we typically perform **Gaussian elimination** to reduce $A$ to its Row Echelon Form (REF) or Reduced Row Echelon Form (RREF). The columns in the *original* matrix $A$ that correspond to the **pivot columns** in the REF/RREF form a basis for the column space, and thus a basis for the range of $T$.

This is a core technique for **CO4**, as finding a basis for the range is directly linked to finding the rank.

---

### Example 1: Finding the Range and its Basis

Let $T: \mathbb{R}^3 \to \mathbb{R}^2$ be defined by $T(x, y, z) = (x - 2y + z, 3x + y - z)$.

**Step 1: Find the matrix representation $A$ for $T$.**
The standard basis vectors for $\mathbb{R}^3$ are $\mathbf{e}_1 = (1, 0, 0)$, $\mathbf{e}_2 = (0, 1, 0)$, $\mathbf{e}_3 = (0, 0, 1)$.
Let's find where $T$ maps them:
$T(\mathbf{e}_1) = T(1, 0, 0) = (1 - 0 + 0, 3 + 0 - 0) = (1, 3)$
$T(\mathbf{e}_2) = T(0, 1, 0) = (0 - 2(1) + 0, 0 + 1 - 0) = (-2, 1)$
$T(\mathbf{e}_3) = T(0, 0, 1) = (0 - 0 + 1, 0 + 0 - 1) = (1, -1)$

The matrix $A$ has these images as its columns:
$A = \begin{pmatrix} 1 & -2 & 1 \\ 3 & 1 & -1 \end{pmatrix}$

So, $T(\mathbf{x}) = A\mathbf{x}$ where $\mathbf{x} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$.

**Step 2: Find the range of $T$, which is the column space of $A$.**
$Range(T) = Col(A) = span \left\{ \begin{pmatrix} 1 \\ 3 \end{pmatrix}, \begin{pmatrix} -2 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ -1 \end{pmatrix} \right\}$

**Step 3: Find a basis for the range by finding a basis for $Col(A)$.**
We reduce $A$ to REF using row operations:
$A = \begin{pmatrix} 1 & -2 & 1 \\ 3 & 1 & -1 \end{pmatrix}$
$R_2 \leftarrow R_2 - 3R_1$:
$\begin{pmatrix} 1 & -2 & 1 \\ 0 & 7 & -4 \end{pmatrix}$

This matrix is in Row Echelon Form. The pivot columns are the first and second columns.
The pivot columns in the *original* matrix $A$ form a basis for $Col(A)$.
So, a basis for $Range(T)$ is:
$\left\{ \begin{pmatrix} 1 \\ 3 \end{pmatrix}, \begin{pmatrix} -2 \\ 1 \end{pmatrix} \right\}$

**What does this tell us?**
The range of $T$ is the set of all linear combinations of these two vectors. Since these two vectors are linearly independent and span the range, they form a basis for the range. The dimension of the range, which is the rank of $T$, is 2.
$rank(T) = 2$.

Since $T$ maps from $\mathbb{R}^3$, $\dim(\mathbb{R}^3) = 3$. Using the Rank-Nullity Theorem:
$3 = rank(T) + nullity(T)$
$3 = 2 + nullity(T)$
$nullity(T) = 1$.
This means there's a 1-dimensional null space. To find the null space, we would solve $A\mathbf{x} = \mathbf{0}$. From the REF, we have $x - 2y + z = 0$ and $7y - 4z = 0$. If we let $z=7$, then $7y = 28 \implies y=4$. Then $x - 2(4) + 7 = 0 \implies x - 8 + 7 = 0 \implies x = 1$. So a vector in the null space is $(1, 4, 7)$. The null space is $span\{(1, 4, 7)\}$.

**Relatable Example:**
Imagine you have a digital art program that can take a 3D model (input vector) and project it onto a 2D screen (output vector). Let's say this projection is a linear transformation. The *range* of this transformation would be the set of all possible 2D images you can create on the screen using this projection. If the projection is a standard orthographic projection, the range is the entire 2D screen space. However, if the projection is something more specific, like projecting onto a specific line on the screen, then the range would just be that line (a 1-dimensional subspace of the 2D screen). The basis for the range would be a single vector pointing along that line.

---

### Example 2: When the Images of Basis Vectors are Linearly Dependent

Let $T: \mathbb{R}^2 \to \mathbb{R}^3$ be defined by $T(x, y) = (x+y, 2x-y, 3x+y)$.

**Step 1: Find the matrix representation $A$.**
Domain basis: $\mathbf{e}_1 = (1, 0)$, $\mathbf{e}_2 = (0, 1)$ in $\mathbb{R}^2$.
$T(\mathbf{e}_1) = T(1, 0) = (1+0, 2(1)-0, 3(1)+0) = (1, 2, 3)$
$T(\mathbf{e}_2) = T(0, 1) = (0+1, 2(0)-1, 3(0)+1) = (1, -1, 1)$

Matrix $A$:
$A = \begin{pmatrix} 1 & 1 \\ 2 & -1 \\ 3 & 1 \end{pmatrix}$

**Step 2: Find the range of $T$, which is $Col(A)$.**
$Range(T) = Col(A) = span \left\{ \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix} \right\}$

**Step 3: Find a basis for the range.**
We reduce $A$ to REF.
$A = \begin{pmatrix} 1 & 1 \\ 2 & -1 \\ 3 & 1 \end{pmatrix}$
$R_2 \leftarrow R_2 - 2R_1$:
$\begin{pmatrix} 1 & 1 \\ 0 & -3 \\ 3 & 1 \end{pmatrix}$
$R_3 \leftarrow R_3 - 3R_1$:
$\begin{pmatrix} 1 & 1 \\ 0 & -3 \\ 0 & -2 \end{pmatrix}$
$R_3 \leftarrow R_3 - \frac{2}{3}R_2$:
$\begin{pmatrix} 1 & 1 \\ 0 & -3 \\ 0 & 0 \end{pmatrix}$

This is in REF. The pivot columns are the first and second columns.
The columns in the *original* matrix $A$ corresponding to the pivot columns are:
$\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ and $\begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$.

So, a basis for $Range(T)$ is:
$\left\{ \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix} \right\}$

In this case, the images of the standard basis vectors of the domain happened to be linearly independent, so they directly formed a basis for the range.
$rank(T) = 2$.
Since $T$ maps from $\mathbb{R}^2$, $\dim(\mathbb{R}^2) = 2$.
$2 = rank(T) + nullity(T)$
$2 = 2 + nullity(T)$
$nullity(T) = 0$.
The null space only contains the zero vector.

**Important Note:** If the original basis for $V$ was chosen differently, say $\{\mathbf{u}_1, \dots, \mathbf{u}_n\}$, then the set $\{T(\mathbf{u}_1), \dots, T(\mathbf{u}_n)\}$ would span the range. However, this set might be linearly dependent, and you'd have to use it to find a linearly independent set that also spans the range. The method using the matrix representation and its column space is generally more robust.

---

### Example 3: Higher dimensions, more complex scenario

Let $T: \mathbb{R}^3 \to \mathbb{R}^4$ be defined by $T(x, y, z) = (x+y, y-z, x+z, 2x+y-z)$.

**Step 1: Matrix Representation $A$.**
$T(\mathbf{e}_1) = (1, 2, 1, 2)$
$T(\mathbf{e}_2) = (1, 1, 0, 1)$
$T(\mathbf{e}_3) = (0, -1, 1, -1)$

$A = \begin{pmatrix} 1 & 1 & 0 \\ 2 & 1 & -1 \\ 1 & 0 & 1 \\ 2 & 1 & -1 \end{pmatrix}$

**Step 2: Find the range (column space of $A$).**
$Range(T) = Col(A) = span \left\{ \begin{pmatrix} 1 \\ 2 \\ 1 \\ 2 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \\ 0 \\ 1 \end{pmatrix}, \begin{pmatrix} 0 \\ -1 \\ 1 \\ -1 \end{pmatrix} \right\}$

**Step 3: Find a basis for the range.**
Reduce $A$ to REF.
$A = \begin{pmatrix} 1 & 1 & 0 \\ 2 & 1 & -1 \\ 1 & 0 & 1 \\ 2 & 1 & -1 \end{pmatrix}$

$R_2 \leftarrow R_2 - 2R_1$:
$\begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & -1 \\ 1 & 0 & 1 \\ 2 & 1 & -1 \end{pmatrix}$

$R_3 \leftarrow R_3 - R_1$:
$\begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & -1 \\ 0 & -1 & 1 \\ 2 & 1 & -1 \end{pmatrix}$

$R_4 \leftarrow R_4 - 2R_1$:
$\begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & -1 \\ 0 & -1 & 1 \\ 0 & -1 & -1 \end{pmatrix}$

Now focus on the submatrix:
$\begin{pmatrix} -1 & -1 \\ -1 & 1 \\ -1 & -1 \end{pmatrix}$
$R_3 \leftarrow R_3 - R_2$:
$\begin{pmatrix} -1 & -1 \\ 0 & 2 \\ 0 & 0 \end{pmatrix}$

So, our REF matrix looks like:
$\begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & -1 \\ 0 & 0 & 2 \\ 0 & 0 & 0 \end{pmatrix}$

The pivot columns are the first, second, and third columns.
This means all three columns in the *original* matrix $A$ are linearly independent and form a basis for $Col(A)$.
A basis for $Range(T)$ is:
$\left\{ \begin{pmatrix} 1 \\ 2 \\ 1 \\ 2 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \\ 0 \\ 1 \end{pmatrix}, \begin{pmatrix} 0 \\ -1 \\ 1 \\ -1 \end{pmatrix} \right\}$

Here, $rank(T) = 3$. Since the domain is $\mathbb{R}^3$, $\dim(\mathbb{R}^3) = 3$.
$3 = 3 + nullity(T) \implies nullity(T) = 0$.

**What if the REF showed fewer pivot columns than the number of columns in $A$?**
For instance, if the REF was $\begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & -1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ (if $T(\mathbf{e}_3)$ was a linear combination of $T(\mathbf{e}_1)$ and $T(\mathbf{e}_2)$). Then there would be only two pivot columns. The basis for the range would consist of the *first two original columns* of $A$, and the rank would be 2. This would mean $nullity(T) = 3 - 2 = 1$.

---

### Connection to Textbooks

This topic is beautifully covered in our recommended texts.
*   **Kreyszig's Advanced Engineering Mathematics** and **Larson's Elementary Linear Algebra** will provide rigorous definitions and proofs. You'll find the connection between column spaces and the range of linear transformations clearly explained, often in chapters discussing vector spaces, subspaces, and matrix theory. The process of using Gaussian elimination to find bases for column spaces is a staple.
*   **Deisenroth, Faisal & Ong's Mathematics for Machine Learning** and **Strang's Linear Algebra and Learning from Data** will frame this in a more applied context, particularly for machine learning. They emphasize how understanding the range (or column space) of a matrix is crucial for solving systems of linear equations, understanding the "reach" of data transformations, and analyzing the information preserved or lost. Strang, in particular, stresses the importance of the four fundamental subspaces (column space, null space, row space, null space of $A^T$), and the range is our column space!

**Key takeaway from readings:** The column space of a matrix $A$ is the set of all possible outputs $A\mathbf{x}$. If $T(\mathbf{x}) = A\mathbf{x}$, then $Range(T) = Col(A)$. Finding a basis for the range is equivalent to finding a basis for the column space.

---

### Summary and Key Points to Remember

1.  **Range:** The set of all possible output vectors of a linear transformation $T: V \to W$. It's a subspace of the codomain $W$.
2.  **Spanning the Range:** If $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ is a basis for the domain $V$, then $\{T(\mathbf{v}_1), \dots, T(\mathbf{v}_n)\}$ spans the range of $T$.
3.  **Matrix Representation:** If $T(\mathbf{x}) = A\mathbf{x}$, then $Range(T) = Col(A)$. This is the most practical way to find the range.
4.  **Basis for Range:** A basis for the range of $T$ is a basis for the column space of its matrix representation $A$. This is found by identifying the pivot columns in the REF/RREF of $A$ and taking the corresponding columns from the *original* matrix $A$.
5.  **Rank:** The dimension of the range is the rank of the transformation ($rank(T) = \dim(Range(T))$). This is equal to the number of pivot columns in the matrix $A$.
6.  **Rank-Nullity Theorem:** $\dim(V) = rank(T) + nullity(T)$. This links the dimensions of the input space, range, and null space.

When studying for exams, focus on the *process* of finding the matrix, reducing it to REF/RREF, identifying pivot columns, and then selecting the correct original columns for the basis of the range. Always remember that the basis vectors for the range come from the *original* matrix, not its REF/RREF.

---

### Sample Questions and Answers

**Q1. Conceptual Question:** What property of a linear transformation makes its range a subspace of the codomain?
**Answer:** The range of a linear transformation $T: V \to W$ is a subspace of $W$ because the transformation preserves vector addition and scalar multiplication. This means that if $\mathbf{w}_1$ and $\mathbf{w}_2$ are in the range (i.e., $\mathbf{w}_1 = T(\mathbf{v}_1)$ and $\mathbf{w}_2 = T(\mathbf{v}_2)$ for some $\mathbf{v}_1, \mathbf{v}_2 \in V$), then their sum $\mathbf{w}_1 + \mathbf{w}_2 = T(\mathbf{v}_1 + \mathbf{v}_2)$ is also in the range, and any scalar multiple $c\mathbf{w}_1 = cT(\mathbf{v}_1) = T(c\mathbf{v}_1)$ is also in the range. Additionally, the zero vector is always in the range since $T(\mathbf{0}_V) = \mathbf{0}_W$.

**Q2. Exam-Oriented Question:** Let $T: \mathbb{R}^2 \to \mathbb{R}^3$ be defined by $T(x, y) = (x-y, 2x+y, x+2y)$. Find a basis for the range of $T$ and determine its rank.

**Answer:**
**Step 1: Find the matrix representation $A$.**
The standard basis for $\mathbb{R}^2$ is $\{\mathbf{e}_1, \mathbf{e}_2\}$.
$T(\mathbf{e}_1) = T(1, 0) = (1-0, 2(1)+0, 1+2(0)) = (1, 2, 1)$
$T(\mathbf{e}_2) = T(0, 1) = (0-1, 2(0)+1, 0+2(1)) = (-1, 1, 2)$
The matrix $A$ is:
$A = \begin{pmatrix} 1 & -1 \\ 2 & 1 \\ 1 & 2 \end{pmatrix}$

**Step 2: Find a basis for the range (column space of $A$).**
We perform Gaussian elimination on $A$:
$A = \begin{pmatrix} 1 & -1 \\ 2 & 1 \\ 1 & 2 \end{pmatrix}$
$R_2 \leftarrow R_2 - 2R_1$:
$\begin{pmatrix} 1 & -1 \\ 0 & 3 \\ 1 & 2 \end{pmatrix}$
$R_3 \leftarrow R_3 - R_1$:
$\begin{pmatrix} 1 & -1 \\ 0 & 3 \\ 0 & 3 \end{pmatrix}$
$R_3 \leftarrow R_3 - R_2$:
$\begin{pmatrix} 1 & -1 \\ 0 & 3 \\ 0 & 0 \end{pmatrix}$

This is in REF. The pivot columns are the first and second columns.
The basis for the range consists of the corresponding columns from the *original* matrix $A$.

**Step 3: State the basis and rank.**
A basis for the range of $T$ is $\left\{ \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}, \begin{pmatrix} -1 \\ 1 \\ 2 \end{pmatrix} \right\}$.
The rank of $T$ is the number of vectors in the basis, which is 2. $rank(T) = 2$.

*(Self-check: The domain is $\mathbb{R}^2$, so $\dim(V)=2$. Rank-Nullity Theorem: $2 = rank(T) + nullity(T) \implies 2 = 2 + nullity(T) \implies nullity(T) = 0$. This means the null space is just $\{\mathbf{0}\}$, which is consistent with having two linearly independent basis vectors in the range originating from a 2-dimensional domain.)*

**Q3. Conceptual Question:** If $T: V \to W$ is a linear transformation and $\dim(V) = n$, what is the maximum possible rank of $T$?
**Answer:** The rank of $T$ is the dimension of its range. The range is a subspace of $W$. However, the rank is also limited by the dimension of the domain $V$. From the Rank-Nullity Theorem, $\dim(V) = rank(T) + nullity(T)$. Since $nullity(T) \ge 0$, it implies that $rank(T) \le \dim(V)$. Therefore, the maximum possible rank of $T$ is $n = \dim(V)$. This occurs when the nullity is zero, meaning the transformation is one-to-one.

---

That wraps up our exploration of the range of a linear transformation and how to find its basis. Understanding this gives you immense power in analyzing how linear transformations affect vector spaces, a concept vital for many areas of information science and beyond. Keep practicing these steps!
