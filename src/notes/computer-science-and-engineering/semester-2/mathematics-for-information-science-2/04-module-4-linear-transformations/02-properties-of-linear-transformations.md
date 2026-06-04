---
title: "Properties of linear transformations"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 4: Linear Transformations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d2b"
status: "completed"
scrapedAt: "2026-05-20T16:34:51.816Z"
---
## MATHEMATICS FOR INFORMATION SCIENCE – 2

### Module 4: Linear Transformations

#### Topic: Properties of Linear Transformations

Hello everyone, and welcome back to our exploration of linear algebra, a fundamental pillar for information science! In this session, we're diving deep into **Module 4: Linear Transformations**, and today, we'll be focusing on the **Properties of Linear Transformations**. This is a really exciting area because it's where we see abstract mathematical structures come alive and connect directly to how we manipulate and understand data.

Remember from our previous discussions, we've built a solid foundation in vector spaces and the objects that live within them. Now, we're introducing the *functions* that connect these spaces in a special, structured way: linear transformations. Think of them as "well-behaved" mappings. Understanding their properties is crucial for grasping how data can be rotated, scaled, sheared, and projected – operations that are at the heart of many information science applications like computer graphics, machine learning, and signal processing.

Our goal today is to build a deep understanding of these properties. By the end of this lecture, you should be able to:

*   **Understand the core behaviors of linear transformations:** What makes a transformation "linear"?
*   **Connect these properties to the Course Outcomes:** Specifically, how do these properties help us with CO4 (understanding and applying linear transformations, finding rank/nullity, and matrix representations)? We'll see how the properties directly inform these tasks.
*   **Visualize these transformations:** We’ll use relatable examples to make these concepts tangible.

Let's get started!

### What Makes a Transformation "Linear"? The Defining Properties

We've introduced linear transformations as functions that map vectors from one vector space to another, say from $V$ to $W$, denoted as $T: V \to W$. But what makes them *linear*? It all boils down to two fundamental properties that preserve the structure of vector addition and scalar multiplication.

Imagine you have two vectors, $\mathbf{u}$ and $\mathbf{v}$, in your starting vector space $V$, and you have a scalar, $c$. A transformation $T$ is linear if and only if it satisfies these two conditions for *all* vectors $\mathbf{u}, \mathbf{v} \in V$ and *all* scalars $c$:

1.  **Additivity:** The transformation of the sum of two vectors is equal to the sum of the transformations of those individual vectors.
    $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$

    Think of it this way: If you have two ingredients for a recipe (vectors $\mathbf{u}$ and $\mathbf{v}$), it doesn't matter if you mix them first and then apply the cooking process ($T$) to the combined mixture, or if you apply the cooking process to each ingredient separately and then combine the cooked results. The outcome should be the same. This property ensures that the transformation "respects" vector addition.

2.  **Homogeneity (or Scalar Multiplication):** The transformation of a scalar multiple of a vector is equal to the scalar multiple of the transformation of that vector.
    $T(c\mathbf{u}) = cT(\mathbf{u})$

    This means if you scale an ingredient ($c\mathbf{u}$) before cooking, the result is the same as scaling the cooked ingredient ($cT(\mathbf{u})$). The transformation "respects" scaling.

**Why are these two properties so important?** Because if a transformation satisfies these, it automatically preserves *all* the structure of a vector space. This is a powerful concept, and it’s beautifully explained in books like Kreyszig's *Advanced Engineering Mathematics* and Larson's *Elementary Linear Algebra*. They emphasize that these two axioms are the bedrock of linearity.

**A Quick Test:** How do we check if a given function is indeed a linear transformation? We simply test these two conditions. If either one fails for even a single pair of vectors or a single scalar, the transformation is *not* linear.

**Example 1: Scaling Vectors (A Linear Transformation)**
Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ be defined by $T(x, y) = (2x, 2y)$. This is a scaling transformation, stretching every vector by a factor of 2.
Let's check the properties:
*   **Additivity:**
    $T(\mathbf{u} + \mathbf{v}) = T((u_1+v_1, u_2+v_2)) = (2(u_1+v_1), 2(u_2+v_2)) = (2u_1+2v_1, 2u_2+2v_2)$
    $T(\mathbf{u}) + T(\mathbf{v}) = T(u_1, u_2) + T(v_1, v_2) = (2u_1, 2u_2) + (2v_1, 2v_2) = (2u_1+2v_1, 2u_2+2v_2)$
    They are equal! So, additivity holds.

*   **Homogeneity:**
    $T(c\mathbf{u}) = T(cu_1, cu_2) = (2(cu_1), 2(cu_2)) = (2cu_1, 2cu_2)$
    $cT(\mathbf{u}) = c(2u_1, 2u_2) = (2cu_1, 2cu_2)$
    They are also equal! Homogeneity holds.

Since both properties hold, $T(x, y) = (2x, 2y)$ is a linear transformation. This makes sense intuitively – scaling is a fundamental linear operation.

**Example 2: A Non-Linear Transformation**
Let $S: \mathbb{R}^2 \to \mathbb{R}^2$ be defined by $S(x, y) = (x^2, y)$. Let's check the properties with $\mathbf{u} = (1, 1)$ and $c = 2$.
*   **Homogeneity:**
    $S(2\mathbf{u}) = S(2(1,1)) = S(2,2) = (2^2, 2) = (4, 2)$
    $2S(\mathbf{u}) = 2S(1,1) = 2(1^2, 1) = 2(1, 1) = (2, 2)$
    Here, $S(2\mathbf{u}) \neq 2S(\mathbf{u})$. So, $S$ is not a linear transformation. The squaring operation breaks linearity.

**Key Takeaway:** The linearity of a transformation is not just a name; it's a property that must be *proven* by checking additivity and homogeneity.

### Consequences of Linearity: The Power of the Properties

Now, the real magic begins. If a transformation $T$ is linear, a few other incredibly useful properties automatically follow. These are direct consequences of the two defining axioms and are essential for our work in information science.

#### 1. The Zero Vector is Mapped to the Zero Vector

One of the most fundamental consequences is that a linear transformation *always* maps the zero vector of the domain space to the zero vector of the codomain space.

Let $\mathbf{0}_V$ be the zero vector in $V$ and $\mathbf{0}_W$ be the zero vector in $W$.
We know that $\mathbf{0}_V = 0 \cdot \mathbf{u}$ for any vector $\mathbf{u} \in V$.
Using the homogeneity property:
$T(\mathbf{0}_V) = T(0 \cdot \mathbf{u}) = 0 \cdot T(\mathbf{u})$

Now, if $T(\mathbf{u})$ is some vector in $W$, say $\mathbf{w}$, then $0 \cdot \mathbf{w}$ is the zero vector in $W$, $\mathbf{0}_W$.
Therefore, $T(\mathbf{0}_V) = \mathbf{0}_W$.

**Why is this important?**
*   **As a quick check:** If you're given a transformation and you calculate $T(\mathbf{0})$ and it's *not* the zero vector, you can immediately declare it *not* linear. This is a super-fast way to disqualify many potential transformations, especially in exam settings where you need to quickly identify linear ones.
*   **Foundation for other properties:** This fact is used implicitly in proving many other properties.

**Example:** In $\mathbb{R}^3$, the zero vector is $(0,0,0)$. If $T: \mathbb{R}^3 \to \mathbb{R}^2$ is linear, then $T(0,0,0)$ must be $(0,0)$. If you find $T(0,0,0) = (1,2)$, then $T$ is not linear.

#### 2. Transformations of Linear Combinations

This is perhaps the most powerful extension of the basic properties. A linear transformation preserves linear combinations. What does that mean?

If $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k$ are vectors in $V$, and $c_1, c_2, \dots, c_k$ are scalars, then any linear combination can be written as:
$\mathbf{w} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k$

For a linear transformation $T$, applying $T$ to this linear combination yields:
$T(\mathbf{w}) = T(c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k)$

Using additivity repeatedly:
$T(\mathbf{w}) = T(c_1\mathbf{v}_1) + T(c_2\mathbf{v}_2) + \dots + T(c_k\mathbf{v}_k)$

Then, using homogeneity repeatedly:
$T(\mathbf{w}) = c_1T(\mathbf{v}_1) + c_2T(\mathbf{v}_2) + \dots + c_kT(\mathbf{v}_k)$

**This is huge!** It means that to know how a linear transformation acts on *any* vector in a vector space, you only need to know how it acts on a *basis* for that space. This is directly related to **CO4**, where we talk about finding the matrices of linear transformations. The columns of this matrix are precisely the images of the basis vectors.

**Relatable Analogy:** Imagine you have a special "recipe transformer" (the linear transformation). You want to know how it transforms a complex dish made from several ingredients. If you know how the transformer affects each individual ingredient (the basis vectors), you can figure out how it transforms *any* dish by simply applying the same proportions (the scalars) to the transformed ingredients.

**Example:** Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ be a linear transformation. Suppose we know that $T(1,0) = (1,2)$ and $T(0,1) = (3,4)$. What is $T(5,2)$?
We can write $(5,2)$ as a linear combination of the standard basis vectors $(1,0)$ and $(0,1)$:
$(5,2) = 5(1,0) + 2(0,1)$

Now, using the property of transforming linear combinations:
$T(5,2) = T(5(1,0) + 2(0,1))$
$T(5,2) = 5T(1,0) + 2T(0,1)$ (by linearity)
$T(5,2) = 5(1,2) + 2(3,4)$
$T(5,2) = (5,10) + (6,8)$
$T(5,2) = (11,18)$

See how powerful that is? We didn't need to know the explicit formula for $T(x,y)$. Just the action on the basis was enough. This is a core concept for understanding matrix representations of linear transformations. If you are given a basis, the transformation is completely determined by where it maps those basis vectors.

#### 3. Preserving Vector Space Structure (and Subspaces)

Linear transformations are designed to preserve the fundamental structures of vector spaces. This means they preserve:

*   **Vector Addition:** As we've seen with $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$.
*   **Scalar Multiplication:** As we've seen with $T(c\mathbf{u}) = cT(\mathbf{u})$.

A very important implication of this is that linear transformations map **subspaces** to **subspaces**. This directly relates to **CO2** (understanding vector spaces and subspaces).

If $U$ is a subspace of $V$, then the image of $U$ under $T$, denoted as $T(U) = \{T(\mathbf{u}) \mid \mathbf{u} \in U\}$, is also a subspace of $W$.

Let's quickly verify this, as it's a common point of inquiry:
Suppose $U$ is a subspace of $V$, and $T: V \to W$ is linear. We need to show that $T(U)$ is a subspace of $W$. This means showing $T(U)$ contains the zero vector, is closed under addition, and is closed under scalar multiplication.

*   **Zero Vector:** Since $U$ is a subspace, it contains $\mathbf{0}_V$. As we proved earlier, $T(\mathbf{0}_V) = \mathbf{0}_W$. So, $\mathbf{0}_W \in T(U)$.
*   **Closure under Addition:** Let $\mathbf{w}_1, \mathbf{w}_2 \in T(U)$. This means there exist $\mathbf{u}_1, \mathbf{u}_2 \in U$ such that $\mathbf{w}_1 = T(\mathbf{u}_1)$ and $\mathbf{w}_2 = T(\mathbf{u}_2)$. Since $U$ is a subspace, $\mathbf{u}_1 + \mathbf{u}_2 \in U$. Because $T$ is linear, $T(\mathbf{u}_1 + \mathbf{u}_2) = T(\mathbf{u}_1) + T(\mathbf{u}_2) = \mathbf{w}_1 + \mathbf{w}_2$. Since $\mathbf{u}_1 + \mathbf{u}_2 \in U$, its image $T(\mathbf{u}_1 + \mathbf{u}_2)$ is in $T(U)$. Thus, $\mathbf{w}_1 + \mathbf{w}_2 \in T(U)$.
*   **Closure under Scalar Multiplication:** Let $\mathbf{w} \in T(U)$ and $c$ be a scalar. Then $\mathbf{w} = T(\mathbf{u})$ for some $\mathbf{u} \in U$. Since $U$ is a subspace, $c\mathbf{u} \in U$. Because $T$ is linear, $T(c\mathbf{u}) = cT(\mathbf{u}) = c\mathbf{w}$. Since $c\mathbf{u} \in U$, its image $T(c\mathbf{u})$ is in $T(U)$. Thus, $c\mathbf{w} \in T(U)$.

Therefore, $T(U)$ is indeed a subspace of $W$.

**Example:** Consider the subspace $U = \text{span}\{(1,0)\}$ in $\mathbb{R}^2$. This is the x-axis. Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ be $T(x,y) = (x, 0)$ (projection onto the x-axis).
$T(U) = \{ T(c,0) \mid c \in \mathbb{R} \} = \{ (c,0) \mid c \in \mathbb{R} \}$. This is the x-axis itself, which is a subspace of $\mathbb{R}^2$.

Consider $T: \mathbb{R}^2 \to \mathbb{R}^2$ given by $T(x,y) = (x+y, x-y)$. Let $U$ be the subspace defined by the line $y=x$. Any vector in $U$ is of the form $(a,a)$.
$T(a,a) = (a+a, a-a) = (2a, 0)$.
The image set is $\{ (2a, 0) \mid a \in \mathbb{R} \}$. This is the x-axis, which is a subspace.

**Connection to Rank and Nullity (CO4):** The fact that linear transformations preserve subspaces leads directly to the concepts of the **image (or range) space** and the **null space (or kernel)**, which are crucial for finding rank and nullity.

*   **Image Space (Range):** $Im(T) = \{ T(\mathbf{v}) \mid \mathbf{v} \in V \}$. This is precisely the set $T(V)$, where $V$ is the entire domain space. Since $V$ itself is a subspace of $V$, its image $T(V)$ is a subspace of $W$. The dimension of the image space is the **rank** of $T$.
*   **Null Space (Kernel):** $Ker(T) = \{ \mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}_W \}$. This is the set of all vectors in the domain that are mapped to the zero vector in the codomain. The null space is a subspace of $V$. The dimension of the null space is the **nullity** of $T$.

The **Rank-Nullity Theorem** states that for a linear transformation $T: V \to W$ where $V$ is finite-dimensional,
$\text{rank}(T) + \text{nullity}(T) = \dim(V)$.
This theorem is a direct consequence of how linear transformations interact with vector spaces and subspaces. Understanding the properties we've discussed is key to understanding why this theorem holds.

#### 4. Linearity and Inverse Transformations

If a linear transformation $T: V \to W$ is also **bijective** (both one-to-one and onto), then its inverse transformation, $T^{-1}: W \to V$, is also a linear transformation.

*   **One-to-one (Injective):** If $T(\mathbf{u}_1) = T(\mathbf{u}_2)$, then $\mathbf{u}_1 = \mathbf{u}_2$. This is equivalent to saying that the kernel of $T$ is just the zero vector, $Ker(T) = \{\mathbf{0}_V\}$, meaning its nullity is 0.
*   **Onto (Surjective):** For every vector $\mathbf{w} \in W$, there exists at least one vector $\mathbf{v} \in V$ such that $T(\mathbf{v}) = \mathbf{w}$. This means the image space of $T$ is the entire codomain space, $Im(T) = W$.

**Why is the inverse linear?**
Let $\mathbf{w}_1, \mathbf{w}_2 \in W$ and $c$ be a scalar. Since $T$ is onto, there exist $\mathbf{v}_1, \mathbf{v}_2 \in V$ such that $T(\mathbf{v}_1) = \mathbf{w}_1$ and $T(\mathbf{v}_2) = \mathbf{w}_2$.
*   **Additivity of Inverse:**
    $T^{-1}(\mathbf{w}_1 + \mathbf{w}_2) = T^{-1}(T(\mathbf{v}_1) + T(\mathbf{v}_2))$
    Since $T$ is linear, $T(\mathbf{v}_1) + T(\mathbf{v}_2) = T(\mathbf{v}_1 + \mathbf{v}_2)$.
    So, $T^{-1}(T(\mathbf{v}_1) + T(\mathbf{v}_2)) = T^{-1}(T(\mathbf{v}_1 + \mathbf{v}_2))$.
    By definition of the inverse, $T^{-1}(T(\mathbf{v}_1 + \mathbf{v}_2)) = \mathbf{v}_1 + \mathbf{v}_2$.
    Also, $T^{-1}(\mathbf{w}_1) + T^{-1}(\mathbf{w}_2) = \mathbf{v}_1 + \mathbf{v}_2$.
    Thus, $T^{-1}(\mathbf{w}_1 + \mathbf{w}_2) = T^{-1}(\mathbf{w}_1) + T^{-1}(\mathbf{w}_2)$.

*   **Homogeneity of Inverse:**
    $T^{-1}(c\mathbf{w}_1) = T^{-1}(cT(\mathbf{v}_1))$
    Since $T$ is linear, $cT(\mathbf{v}_1) = T(c\mathbf{v}_1)$.
    So, $T^{-1}(cT(\mathbf{v}_1)) = T^{-1}(T(c\mathbf{v}_1))$.
    By definition of the inverse, $T^{-1}(T(c\mathbf{v}_1)) = c\mathbf{v}_1$.
    Also, $cT^{-1}(\mathbf{w}_1) = c\mathbf{v}_1$.
    Thus, $T^{-1}(c\mathbf{w}_1) = cT^{-1}(\mathbf{w}_1)$.

This property is crucial when dealing with invertible matrices. If a matrix $A$ is invertible, the linear transformation $T(\mathbf{x}) = A\mathbf{x}$ is bijective, and its inverse transformation is $T^{-1}(\mathbf{y}) = A^{-1}\mathbf{y}$, which is also linear. This ties into **CO1** regarding matrix operations.

#### 5. Properties Related to Specific Types of Transformations

Many common transformations are linear:

*   **Identity Transformation:** $I(\mathbf{v}) = \mathbf{v}$. This is clearly linear: $I(\mathbf{u}+\mathbf{v}) = \mathbf{u}+\mathbf{v} = I(\mathbf{u}) + I(\mathbf{v})$ and $I(c\mathbf{u}) = c\mathbf{u} = cI(\mathbf{u})$.
*   **Zero Transformation:** $Z(\mathbf{v}) = \mathbf{0}_W$. This is also linear: $Z(\mathbf{u}+\mathbf{v}) = \mathbf{0}_W = \mathbf{0}_W + \mathbf{0}_W = Z(\mathbf{u}) + Z(\mathbf{v})$ and $Z(c\mathbf{u}) = \mathbf{0}_W = c\mathbf{0}_W = cZ(\mathbf{u})$.
*   **Rotations in $\mathbb{R}^2$ and $\mathbb{R}^3$:** Rotating a vector by a fixed angle around an axis (or point) preserves lengths and angles between vectors. This geometric preservation is a hallmark of linearity.
    For example, rotation by $\theta$ in $\mathbb{R}^2$: $T(x,y) = (x\cos\theta - y\sin\theta, x\sin\theta + y\cos\theta)$. This can be shown to be linear.
*   **Scalings:** As we saw in Example 1, scaling is linear.
*   **Reflections:** Reflecting a vector across a line or plane also preserves the vector space structure and is linear.
*   **Projections:** Projecting a vector onto a subspace (e.g., onto an axis or a plane) is also a linear transformation. For example, $P(x,y) = (x,0)$ projects onto the x-axis.

**What about non-linear transformations?**
Transformations involving powers of variables (like $x^2$), absolute values ($|x|$), trigonometric functions ($\sin x$), or additions of constants that are not just scaling or rotation (e.g., $T(x,y) = (x+1, y)$) are generally *not* linear.

### Properties and CO4: Connecting the Dots

Let's explicitly see how these properties tie into **Course Outcome 4: Understand the concept of linear transformation and to apply its properties, to find the rank and nullity of a linear transformation and to find the matrices of linear transformations.**

*   **Understanding the Concept:** The defining properties (additivity and homogeneity) are the very definition of "understanding the concept." Recognizing that $T(c\mathbf{u} + d\mathbf{v}) = cT(\mathbf{u}) + dT(\mathbf{v})$ is fundamental.
*   **Applying its Properties:**
    *   The property $T(c_1\mathbf{v}_1 + \dots + c_k\mathbf{v}_k) = c_1T(\mathbf{v}_1) + \dots + c_kT(\mathbf{v}_k)$ is directly applied to compute the transformation of any vector once we know its action on a basis.
    *   The fact that $T(\mathbf{0}) = \mathbf{0}$ is an easy check to see if a transformation is linear.
    *   The mapping of subspaces to subspaces is key to understanding the image and null spaces.
*   **Finding Rank and Nullity:**
    *   The **null space** is the set of vectors that $T$ maps to the zero vector. Its dimension is the nullity. Proving a transformation is linear is the first step to analyzing its null space.
    *   The **image space (range)** is the set of all possible output vectors from $T$. Its dimension is the rank. The fact that $T$ preserves linear combinations means the image of a basis for $V$ spans the image space of $T$.
    *   The **Rank-Nullity Theorem** ($\text{rank}(T) + \text{nullity}(T) = \dim(V)$) directly uses the properties of linear transformations.
*   **Finding the Matrices of Linear Transformations:**
    *   If $V$ has a basis $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ and $W$ has a basis $\{\mathbf{w}_1, \dots, \mathbf{w}_m\}$, any linear transformation $T: V \to W$ can be represented by an $m \times n$ matrix.
    *   The **columns of this matrix are the coordinates of $T(\mathbf{v}_i)$ with respect to the basis of $W$**. This is a direct application of the property that linear transformations preserve linear combinations. If we know $T(\mathbf{v}_i)$ for all basis vectors $\mathbf{v}_i$, we can find $T$ of any vector. This is a core procedure taught in many linear algebra courses, including those referenced like Anton & Rorres.

**Example for Matrix Representation:**
Let $T: \mathbb{R}^2 \to \mathbb{R}^3$ be defined by $T(x,y) = (x+y, x-y, 2y)$.
The standard basis for $\mathbb{R}^2$ is $\mathbf{e}_1 = (1,0)$ and $\mathbf{e}_2 = (0,1)$.
Let's find $T(\mathbf{e}_1)$ and $T(\mathbf{e}_2)$:
$T(\mathbf{e}_1) = T(1,0) = (1+0, 1-0, 2(0)) = (1, 1, 0)$
$T(\mathbf{e}_2) = T(0,1) = (0+1, 0-1, 2(1)) = (1, -1, 2)$

The matrix representation of $T$ (with respect to the standard bases) is formed by using these results as its columns:
$A = \begin{pmatrix} 1 & 1 \\ 1 & -1 \\ 0 & 2 \end{pmatrix}$

Now, to transform any vector $(x,y)$, we can use this matrix:
$T(x,y) = \begin{pmatrix} 1 & 1 \\ 1 & -1 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x+y \\ x-y \\ 2y \end{pmatrix}$
This is exactly what we were given! The properties of linear transformations allow us to move between the abstract definition of $T$ and its concrete matrix representation. This is a central theme in linear algebra.

### Summarizing Key Properties to Remember

Let's recap the crucial properties we've discussed. These are your go-to facts for dealing with linear transformations:

*   **Definition:** $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ and $T(c\mathbf{u}) = cT(\mathbf{u})$.
*   **Consequence:** $T(\mathbf{0}_V) = \mathbf{0}_W$. (Use this as a quick check!)
*   **Consequence:** $T(c_1\mathbf{v}_1 + \dots + c_k\mathbf{v}_k) = c_1T(\mathbf{v}_1) + \dots + c_kT(\mathbf{v}_k)$. (This is the workhorse for computation and matrix representation.)
*   **Preservation:** Linear transformations map subspaces to subspaces.
*   **Invertibility:** If $T$ is bijective, $T^{-1}$ is also linear.

Understanding these properties empowers you to analyze, manipulate, and represent linear transformations effectively, which is vital for your work in information science.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** State and briefly explain the two defining properties of a linear transformation $T: V \to W$.

**Answer:**
The two defining properties are:
1.  **Additivity:** $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ for all $\mathbf{u}, \mathbf{v} \in V$. This means the transformation of a sum of vectors is the sum of their transformations.
2.  **Homogeneity (Scalar Multiplication):** $T(c\mathbf{u}) = cT(\mathbf{u})$ for all $\mathbf{u} \in V$ and all scalars $c$. This means the transformation of a scaled vector is the scaled transformation of the vector.

**Question 2 (Exam-Oriented - Quick Check):** Is the transformation $T: \mathbb{R}^2 \to \mathbb{R}^2$ defined by $T(x,y) = (x+1, y-1)$ a linear transformation? Justify your answer.

**Answer:**
To check if $T$ is linear, we can test the property $T(\mathbf{0}) = \mathbf{0}$.
The zero vector in $\mathbb{R}^2$ is $(0,0)$.
$T(0,0) = (0+1, 0-1) = (1, -1)$.
Since $T(0,0) \neq (0,0)$, the transformation $T$ is **not** a linear transformation. (No need to check the other properties; failing even one is enough).

**Question 3 (Application - Matrix Representation):** Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ be a linear transformation such that $T(1,0) = (2,1)$ and $T(0,1) = (-1,3)$. Find the matrix representation of $T$ with respect to the standard basis.

**Answer:**
The standard basis for $\mathbb{R}^2$ is $\{\mathbf{e}_1=(1,0), \mathbf{e}_2=(0,1)\}$.
The matrix representation of $T$ has columns that are the images of the basis vectors.
The first column is $T(\mathbf{e}_1) = T(1,0) = (2,1)$.
The second column is $T(\mathbf{e}_2) = T(0,1) = (-1,3)$.

Therefore, the matrix $A$ is:
$A = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}$

To verify, let's find $T(x,y)$ using this matrix:
$T(x,y) = A \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2x-y \\ x+3y \end{pmatrix}$.
This assumes the *definition* of $T$ was $T(x,y) = (2x-y, x+3y)$, which is implied if $T$ is linear and given these basis values.

**Question 4 (Conceptual/Application - Rank-Nullity):** Let $T: \mathbb{R}^3 \to \mathbb{R}^2$ be a linear transformation. What is the maximum possible value for the rank of $T$? What is the minimum possible value for the nullity of $T$?

**Answer:**
We are given $T: \mathbb{R}^3 \to \mathbb{R}^2$.
The domain is $V = \mathbb{R}^3$, so $\dim(V) = 3$.
The codomain is $W = \mathbb{R}^2$, so $\dim(W) = 2$.

The rank of $T$, denoted $\text{rank}(T)$, is the dimension of the image space $Im(T)$. Since $Im(T)$ is a subspace of $W = \mathbb{R}^2$, its dimension cannot exceed $\dim(W)$.
So, $\text{rank}(T) \le \dim(W) = 2$.
The maximum possible value for the rank of $T$ is **2**.

The nullity of $T$, denoted $\text{nullity}(T)$, is the dimension of the null space $Ker(T)$. $Ker(T)$ is a subspace of $V = \mathbb{R}^3$.
The Rank-Nullity Theorem states: $\text{rank}(T) + \text{nullity}(T) = \dim(V)$.
We know $\dim(V) = 3$.
So, $\text{rank}(T) + \text{nullity}(T) = 3$.

Since $\text{rank}(T) \le 2$, we have:
$2 + \text{nullity}(T) \ge \text{rank}(T) + \text{nullity}(T) = 3$
$\text{nullity}(T) \ge 3 - 2$
$\text{nullity}(T) \ge 1$.

Also, we know that the null space is always a subspace, so it must contain the zero vector, meaning $\text{nullity}(T) \ge 0$.
Combining these, $\text{nullity}(T) \ge 1$.
The minimum possible value for the nullity of $T$ is **1**. This occurs when the rank is maximum (i.e., 2).

---

That concludes our session on the properties of linear transformations. Remember, these properties are not just abstract rules; they are the keys to understanding how data can be manipulated and analyzed in information science. Keep practicing and visualizing these concepts!
