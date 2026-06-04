---
title: "Orthogonal projections in inner product spaces"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 3: Vector length and unit vector"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d22"
status: "completed"
scrapedAt: "2026-05-20T16:34:45.953Z"
---
## MATHEMATICS FOR INFORMATION SCIENCE – 2

### Module 3: Vector Length and Unit Vector

#### Topic: Orthogonal Projections in Inner Product Spaces

Welcome, everyone, to our discussion on orthogonal projections in inner product spaces! This is a really fundamental concept, and it's going to unlock a lot of powerful ideas for us as we delve deeper into linear algebra and its applications in information science. Think of this topic as building the foundation for understanding how to "fit" one vector or subspace onto another, in the most efficient and "straightest" way possible. It’s a concept that’s woven throughout many areas, from signal processing to machine learning.

You'll see how this directly ties into **Course Outcome 3 (CO3)**, where we talk about applying orthonormalization and solving least squares problems. Orthogonal projections are the *engine* behind a lot of that!

Let's start by revisiting what we know about inner product spaces. Remember, an inner product space is simply a vector space where we have a way to "multiply" two vectors and get a scalar. This inner product, denoted as $\langle \mathbf{u}, \mathbf{v} \rangle$, gives us a sense of angle and length. We've already discussed vector length (or norm) as $||\mathbf{v}|| = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}$. This geometric intuition is going to be crucial.

#### 1. The Intuition: What is a Projection?

Imagine you have a shadow cast by a stick on a flat surface when the sun is directly overhead. The shadow is a "projection" of the stick onto the surface. In mathematics, projection is a generalization of this idea. We want to find the "closest" point in a subspace to a given vector.

Think about it this way: suppose you have a vector $\mathbf{v}$ and you want to find out "how much" of $\mathbf{v}$ lies in the direction of another vector, say $\mathbf{u}$. This is essentially asking for the projection of $\mathbf{v}$ onto $\mathbf{u}$.

This concept is incredibly useful. For instance, in information science, if you have a data point (represented as a vector) and you're interested in a specific feature (represented by another vector), projecting the data point onto the feature vector tells you how strongly that feature is present in the data point. This relates to **CO3** about solving least squares problems – often, we want to find the "best fit" line or plane for a set of data points, and projection is key to that.

#### 2. Projecting a Vector onto Another Vector

Let's get a bit more formal. We want to project vector $\mathbf{v}$ onto vector $\mathbf{u}$. The projection of $\mathbf{v}$ onto $\mathbf{u}$, which we'll denote as $\text{proj}_{\mathbf{u}} \mathbf{v}$, should be a vector that lies in the same direction as $\mathbf{u}$. So, it must be a scalar multiple of $\mathbf{u}$. Let's say $\text{proj}_{\mathbf{u}} \mathbf{v} = c \mathbf{u}$ for some scalar $c$.

Now, what's special about this projected vector? The key idea, inspired by our shadow analogy, is that the "error" vector, which is the difference between the original vector and its projection ($\mathbf{v} - \text{proj}_{\mathbf{u}} \mathbf{v}$), should be "perpendicular" (orthogonal) to the direction we projected onto, which is $\mathbf{u}$.

So, we require:
$\langle \mathbf{v} - \text{proj}_{\mathbf{u}} \mathbf{v}, \mathbf{u} \rangle = 0$

Substituting $\text{proj}_{\mathbf{u}} \mathbf{v} = c \mathbf{u}$:
$\langle \mathbf{v} - c \mathbf{u}, \mathbf{u} \rangle = 0$

Using the properties of inner products (linearity):
$\langle \mathbf{v}, \mathbf{u} \rangle - \langle c \mathbf{u}, \mathbf{u} \rangle = 0$
$\langle \mathbf{v}, \mathbf{u} \rangle - c \langle \mathbf{u}, \mathbf{u} \rangle = 0$

Now, we can solve for $c$:
$c \langle \mathbf{u}, \mathbf{u} \rangle = \langle \mathbf{v}, \mathbf{u} \rangle$

Assuming $\mathbf{u}$ is not the zero vector (which would make $\langle \mathbf{u}, \mathbf{u} \rangle = 0$), we get:
$c = \frac{\langle \mathbf{v}, \mathbf{u} \rangle}{\langle \mathbf{u}, \mathbf{u} \rangle}$

And remember, $\langle \mathbf{u}, \mathbf{u} \rangle = ||\mathbf{u}||^2$. So,
$c = \frac{\langle \mathbf{v}, \mathbf{u} \rangle}{||\mathbf{u}||^2}$

Therefore, the orthogonal projection of $\mathbf{v}$ onto $\mathbf{u}$ is:
$$ \text{proj}_{\mathbf{u}} \mathbf{v} = \frac{\langle \mathbf{v}, \mathbf{u} \rangle}{||\mathbf{u}||^2} \mathbf{u} $$

This formula is fundamental. It tells us exactly how much of $\mathbf{v}$ "points" in the direction of $\mathbf{u}$. The scalar part, $\frac{\langle \mathbf{v}, \mathbf{u} \rangle}{||\mathbf{u}||^2}$, is simply the component of $\mathbf{v}$ along $\mathbf{u}$.

**A Quick Analogy:** Imagine you're trying to pack a suitcase. You have a large piece of luggage (vector $\mathbf{v}$) that you want to fit into a specific compartment (direction of vector $\mathbf{u}$). The projection tells you how much of the luggage *actually fits* along the length of that compartment. The leftover part of the luggage ($ \mathbf{v} - \text{proj}_{\mathbf{u}} \mathbf{v} $) is what doesn't fit in that specific orientation.

**Example:** Let's consider vectors in $\mathbb{R}^2$ with the standard dot product.
Let $\mathbf{v} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ and $\mathbf{u} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

Here, $\langle \mathbf{v}, \mathbf{u} \rangle = (3)(1) + (4)(0) = 3$.
And $||\mathbf{u}||^2 = 1^2 + 0^2 = 1$.

So, the projection of $\mathbf{v}$ onto $\mathbf{u}$ is:
$\text{proj}_{\mathbf{u}} \mathbf{v} = \frac{3}{1} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \end{pmatrix}$.

This makes perfect sense! The vector $\mathbf{u}$ lies along the x-axis. The projection of $\mathbf{v} = (3, 4)$ onto the x-axis is indeed $(3, 0)$. The component of $\mathbf{v}$ along the x-axis is 3, and the component along the y-axis is 4. Our formula picked out that x-component.

What if we projected onto $\mathbf{w} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$?
$\langle \mathbf{v}, \mathbf{w} \rangle = (3)(1) + (4)(1) = 7$.
$||\mathbf{w}||^2 = 1^2 + 1^2 = 2$.

$\text{proj}_{\mathbf{w}} \mathbf{v} = \frac{7}{2} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 3.5 \\ 3.5 \end{pmatrix}$.

This means $3.5$ units of $\mathbf{v}$ lie along the direction of $\mathbf{w}$. The remaining part is $\mathbf{v} - \text{proj}_{\mathbf{w}} \mathbf{v} = \begin{pmatrix} 3 \\ 4 \end{pmatrix} - \begin{pmatrix} 3.5 \\ 3.5 \end{pmatrix} = \begin{pmatrix} -0.5 \\ 0.5 \end{pmatrix}$. This difference vector should be orthogonal to $\mathbf{w}$: $\langle \begin{pmatrix} -0.5 \\ 0.5 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \end{pmatrix} \rangle = (-0.5)(1) + (0.5)(1) = -0.5 + 0.5 = 0$. It checks out!

**Important Point for Exams:** Make sure you're projecting $\mathbf{v}$ onto $\mathbf{u}$, and not the other way around. The formula is sensitive to the order. Also, always ensure the vector you are projecting onto is non-zero.

#### 3. Projection onto a Subspace

Now, what if we want to project a vector onto a *subspace*, not just a single vector? This is where things get really powerful, especially for **CO3** and its relation to least squares.

A subspace is spanned by a set of basis vectors. If we have an *orthogonal* basis for a subspace $W$, say $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_k\}$, then projecting a vector $\mathbf{v}$ onto $W$ becomes straightforward.

The idea is that the projection of $\mathbf{v}$ onto $W$, denoted $\text{proj}_W \mathbf{v}$, is the sum of the projections of $\mathbf{v}$ onto each of the orthogonal basis vectors. This works because the basis vectors are mutually orthogonal, meaning they don't interfere with each other's "projection space."

So, if $W = \text{span}\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_k\}$ and $\{\mathbf{u}_1, \dots, \mathbf{u}_k\}$ is an orthogonal set:
$$ \text{proj}_W \mathbf{v} = \text{proj}_{\mathbf{u}_1} \mathbf{v} + \text{proj}_{\mathbf{u}_2} \mathbf{v} + \dots + \text{proj}_{\mathbf{u}_k} \mathbf{v} $$
$$ \text{proj}_W \mathbf{v} = \frac{\langle \mathbf{v}, \mathbf{u}_1 \rangle}{||\mathbf{u}_1||^2} \mathbf{u}_1 + \frac{\langle \mathbf{v}, \mathbf{u}_2 \rangle}{||\mathbf{u}_2||^2} \mathbf{u}_2 + \dots + \frac{\langle \mathbf{v}, \mathbf{u}_k \rangle}{||\mathbf{u}_k||^2} \mathbf{u}_k $$

**This is a crucial result!** It decomposes $\mathbf{v}$ into a part that lies *in* the subspace $W$ (the projection) and a part that is *orthogonal* to $W$ ($\mathbf{v} - \text{proj}_W \mathbf{v}$). The key condition for this simple summation is that the basis vectors $\{\mathbf{u}_1, \dots, \mathbf{u}_k\}$ must be *orthogonal*.

**What if the basis isn't orthogonal?** This is where the Gram-Schmidt process (which you'll study more in relation to CO3) comes in. It allows us to take any basis and convert it into an orthogonal or orthonormal basis.

**A More General Approach (using any basis):**
If $W$ is a subspace with a basis $\{\mathbf{w}_1, \mathbf{w}_2, \dots, \mathbf{w}_k\}$, we can form a matrix $A$ whose columns are these basis vectors: $A = [\mathbf{w}_1 \ \mathbf{w}_2 \ \dots \ \mathbf{w}_k]$. The subspace $W$ is then the column space of $A$, denoted $\text{Col}(A)$.

The projection of $\mathbf{v}$ onto $W = \text{Col}(A)$ is given by:
$$ \text{proj}_W \mathbf{v} = A (A^T A)^{-1} A^T \mathbf{v} $$

The matrix $P = A (A^T A)^{-1} A^T$ is called the **projection matrix**. Applying $P$ to any vector $\mathbf{v}$ gives its projection onto the column space of $A$.

**How does this relate to least squares?**
When we try to solve a system $A\mathbf{x} = \mathbf{b}$ where there's no exact solution, we often look for a vector $\mathbf{x}$ that minimizes the error $||\mathbf{b} - A\mathbf{x}||$. This minimum error occurs when $A\mathbf{x}$ is the projection of $\mathbf{b}$ onto the column space of $A$. So, we want to solve:
$A\mathbf{x} = \text{proj}_{\text{Col}(A)} \mathbf{b}$
$A\mathbf{x} = A (A^T A)^{-1} A^T \mathbf{b}$

This is the famous **normal equation**:
$A^T A \mathbf{x} = A^T \mathbf{b}$
And the least-squares solution is $\hat{\mathbf{x}} = (A^T A)^{-1} A^T \mathbf{b}$.

This is a direct application of orthogonal projections and directly addresses **CO3**.

**Example:** Project $\mathbf{v} = \begin{pmatrix} 6 \\ 1 \\ 3 \end{pmatrix}$ onto the plane (subspace) spanned by $\mathbf{u}_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ and $\mathbf{u}_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$.

First, let's check if $\{\mathbf{u}_1, \mathbf{u}_2\}$ is orthogonal.
$\langle \mathbf{u}_1, \mathbf{u}_2 \rangle = (1)(0) + (1)(1) + (0)(1) = 1$.
They are NOT orthogonal. So we cannot simply sum the individual projections.

We have two options:
1.  Use the projection matrix formula.
2.  First, orthogonalize the basis using Gram-Schmidt, then project.

Let's try the projection matrix first (this is often more direct if you don't need the orthogonal basis itself).
$A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 1 \end{pmatrix}$

$A^T = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$

$A^T A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} (1)(1)+(1)(1)+(0)(0) & (1)(0)+(1)(1)+(0)(1) \\ (0)(1)+(1)(1)+(1)(0) & (0)(0)+(1)(1)+(1)(1) \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$

Now we need $(A^T A)^{-1}$. For a 2x2 matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the inverse is $\frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
Here, $ad-bc = (2)(2) - (1)(1) = 4-1 = 3$.
So, $(A^T A)^{-1} = \frac{1}{3} \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$.

Now, let's calculate $A^T \mathbf{v}$:
$A^T \mathbf{v} = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} 6 \\ 1 \\ 3 \end{pmatrix} = \begin{pmatrix} (1)(6)+(1)(1)+(0)(3) \\ (0)(6)+(1)(1)+(1)(3) \end{pmatrix} = \begin{pmatrix} 7 \\ 4 \end{pmatrix}$

Finally, $\text{proj}_W \mathbf{v} = A (A^T A)^{-1} (A^T \mathbf{v})$:
$\text{proj}_W \mathbf{v} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 1 \end{pmatrix} \left( \frac{1}{3} \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} \right) \begin{pmatrix} 7 \\ 4 \end{pmatrix}$
$= \frac{1}{3} \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} (2)(7)+(-1)(4) \\ (-1)(7)+(2)(4) \end{pmatrix}$
$= \frac{1}{3} \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 14-4 \\ -7+8 \end{pmatrix} = \frac{1}{3} \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 10 \\ 1 \end{pmatrix}$
$= \frac{1}{3} \begin{pmatrix} (1)(10)+(0)(1) \\ (1)(10)+(1)(1) \\ (0)(10)+(1)(1) \end{pmatrix} = \frac{1}{3} \begin{pmatrix} 10 \\ 11 \\ 1 \end{pmatrix} = \begin{pmatrix} 10/3 \\ 11/3 \\ 1/3 \end{pmatrix}$

So, the projection of $\mathbf{v}$ onto the plane spanned by $\mathbf{u}_1$ and $\mathbf{u}_2$ is $\begin{pmatrix} 10/3 \\ 11/3 \\ 1/3 \end{pmatrix}$.

Let's check if this projection is indeed in the plane. It means it should be a linear combination of $\mathbf{u}_1$ and $\mathbf{u}_2$.
Is $\begin{pmatrix} 10/3 \\ 11/3 \\ 1/3 \end{pmatrix} = c_1 \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$ for some $c_1, c_2$?
$10/3 = c_1$
$11/3 = c_1 + c_2 \implies 11/3 = 10/3 + c_2 \implies c_2 = 1/3$
$1/3 = c_2$. This matches. So yes, the projection is in the plane.

The error vector is $\mathbf{v} - \text{proj}_W \mathbf{v} = \begin{pmatrix} 6 \\ 1 \\ 3 \end{pmatrix} - \begin{pmatrix} 10/3 \\ 11/3 \\ 1/3 \end{pmatrix} = \begin{pmatrix} 18/3 - 10/3 \\ 3/3 - 11/3 \\ 9/3 - 1/3 \end{pmatrix} = \begin{pmatrix} 8/3 \\ -8/3 \\ 8/3 \end{pmatrix}$.
This error vector should be orthogonal to the plane, meaning it should be orthogonal to both $\mathbf{u}_1$ and $\mathbf{u}_2$.
$\langle \begin{pmatrix} 8/3 \\ -8/3 \\ 8/3 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} \rangle = (8/3)(1) + (-8/3)(1) + (8/3)(0) = 8/3 - 8/3 = 0$. Good.
$\langle \begin{pmatrix} 8/3 \\ -8/3 \\ 8/3 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} \rangle = (8/3)(0) + (-8/3)(1) + (8/3)(1) = -8/3 + 8/3 = 0$. Excellent.

**Kreyszig's Perspective:** Kreyszig's "Advanced Engineering Mathematics" (10th ed.) covers projections extensively, particularly in the context of linear systems and approximations. He often uses the projection matrix $P = A(A^T A)^{-1}A^T$ as a key tool for finding the "best approximate solution" to an overdetermined system of linear equations, which directly links to least squares and **CO3**. The geometric interpretation of finding the closest point in the column space is always emphasized.

**Larson's Perspective:** Larson's "Elementary Linear Algebra" (8th ed.) would also present projections, likely starting with vector projections in $\mathbb{R}^n$ and then moving to projections onto subspaces, possibly using Gram-Schmidt to ensure orthogonality for the simpler projection summation formula. The connection to orthogonal bases is a recurring theme.

#### 4. Properties of Projection Matrices

Projection matrices have some interesting and useful properties:
*   **Idempotence:** $P^2 = P$. Applying a projection twice is the same as applying it once. This makes sense – if a vector is already in the subspace, projecting it again doesn't change it.
*   **Symmetry (for orthogonal projections):** If $P$ is the projection matrix onto a subspace $W$ using an orthonormal basis (or in the context of symmetric inner products), then $P^T = P$. This is essential for many optimization problems and ensures the projection matrix is itself symmetric.
*   **Eigenvalues:** The eigenvalues of a projection matrix are always 0 or 1. Vectors in the subspace are scaled by 1 (they are eigenvectors), and vectors orthogonal to the subspace are scaled by 0 (they are projected to the zero vector).

These properties are important for analysis and can be helpful in simplifying calculations or proving other theorems.

#### 5. Orthogonal Complements

This is a related concept that's really worth mentioning. If $W$ is a subspace of an inner product space $V$, its **orthogonal complement**, denoted $W^\perp$, is the set of all vectors in $V$ that are orthogonal to *every* vector in $W$.
$W^\perp = \{\mathbf{v} \in V \mid \langle \mathbf{v}, \mathbf{w} \rangle = 0 \text{ for all } \mathbf{w} \in W \}$

A fundamental theorem states that for any finite-dimensional subspace $W$, $V = W \oplus W^\perp$. This means every vector $\mathbf{v}$ in $V$ can be uniquely written as $\mathbf{v} = \mathbf{w} + \mathbf{w}^\perp$, where $\mathbf{w} \in W$ and $\mathbf{w}^\perp \in W^\perp$.

Guess what $\mathbf{w}$ is? It's precisely $\text{proj}_W \mathbf{v}$! And $\mathbf{w}^\perp$ is $\mathbf{v} - \text{proj}_W \mathbf{v}$. This is the orthogonal decomposition of $\mathbf{v}$ with respect to $W$.

**Analogy:** Think of a room. The floor is a subspace $W$. The "orthogonal complement" $W^\perp$ would be the line perpendicular to the floor passing through a point on the floor (like the "up" direction from that point). Any object's position vector $\mathbf{v}$ can be decomposed into its "floor position" ($\text{proj}_W \mathbf{v}$) and its "height above the floor" ($\mathbf{v} - \text{proj}_W \mathbf{v}$).

This concept is key to understanding vector spaces from a deeper geometric perspective and connects with **CO2** (understanding vector spaces and subspaces) and **CO3** (applying orthonormalization).

#### Summary and Key Takeaways

*   **Projection of $\mathbf{v}$ onto $\mathbf{u}$:** This is the component of $\mathbf{v}$ that lies in the direction of $\mathbf{u}$. The formula is $\text{proj}_{\mathbf{u}} \mathbf{v} = \frac{\langle \mathbf{v}, \mathbf{u} \rangle}{||\mathbf{u}||^2} \mathbf{u}$. The error vector $\mathbf{v} - \text{proj}_{\mathbf{u}} \mathbf{v}$ is orthogonal to $\mathbf{u}$.
*   **Projection onto an Orthogonal Subspace:** If $W = \text{span}\{\mathbf{u}_1, \dots, \mathbf{u}_k\}$ where $\{\mathbf{u}_i\}$ are orthogonal, then $\text{proj}_W \mathbf{v} = \sum_{i=1}^k \text{proj}_{\mathbf{u}_i} \mathbf{v}$.
*   **Projection onto a Subspace (General Basis):** Using a basis $\{\mathbf{w}_1, \dots, \mathbf{w}_k\}$ for $W$, and $A = [\mathbf{w}_1 \ \dots \ \mathbf{w}_k]$, the projection is $\text{proj}_W \mathbf{v} = A(A^T A)^{-1}A^T \mathbf{v}$. The matrix $P = A(A^T A)^{-1}A^T$ is the projection matrix.
*   **Connection to Least Squares:** The solution to the least squares problem for $A\mathbf{x} = \mathbf{b}$ involves projecting $\mathbf{b}$ onto the column space of $A$.
*   **Orthogonal Complement:** $W^\perp$ contains all vectors orthogonal to $W$. Any vector $\mathbf{v}$ can be uniquely decomposed as $\mathbf{v} = \text{proj}_W \mathbf{v} + (\mathbf{v} - \text{proj}_W \mathbf{v})$, where the first part is in $W$ and the second is in $W^\perp$.

Understanding orthogonal projections is not just about formulas; it's about understanding how to break down vectors and data into components that align with specific directions or spaces. This is a core tool in your arsenal for information science.

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** What is the geometric interpretation of projecting a vector $\mathbf{v}$ onto a vector $\mathbf{u}$?
    **Answer:** Geometrically, the projection of $\mathbf{v}$ onto $\mathbf{u}$ is the "shadow" of $\mathbf{v}$ on the line defined by $\mathbf{u}$. It represents the component of $\mathbf{v}$ that lies in the direction of $\mathbf{u}$. The vector connecting the tip of $\mathbf{v}$ to the tip of its projection is orthogonal to $\mathbf{u}$. This relates to understanding how much of one quantity (represented by $\mathbf{v}$) is aligned with another characteristic (represented by $\mathbf{u}$), which is relevant for CO3.

2.  **Question:** Why is it important for the basis vectors to be orthogonal when projecting onto a subspace using the summation method?
    **Answer:** When the basis vectors $\{\mathbf{u}_1, \dots, \mathbf{u}_k\}$ are orthogonal, the projection of $\mathbf{v}$ onto each $\mathbf{u}_i$ is independent of the projection onto any other $\mathbf{u}_j$ ($i \neq j$). This means the total projection onto the subspace (which is the sum of these individual projections) correctly accounts for all components of $\mathbf{v}$ within the subspace. If the basis vectors were not orthogonal, their components would overlap, and simply summing individual projections would lead to an incorrect result, double-counting certain aspects. This highlights the power of orthonormalization as per CO3.

3.  **Question:** If $P$ is a projection matrix, what can you say about $P^2$?
    **Answer:** If $P$ is a projection matrix, then $P^2 = P$. This property is called idempotence. It means that applying the projection operation twice has the same effect as applying it once. If a vector is already in the subspace onto which we are projecting, projecting it again will not change it. This property is foundational for analyzing projection operations.

**Exam-Oriented Questions:**

1.  **Question:** Let $\mathbf{v} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ and $\mathbf{u} = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ in $\mathbb{R}^3$. Find the orthogonal projection of $\mathbf{v}$ onto $\mathbf{u}$.
    **Answer:**
    We use the formula: $\text{proj}_{\mathbf{u}} \mathbf{v} = \frac{\langle \mathbf{v}, \mathbf{u} \rangle}{||\mathbf{u}||^2} \mathbf{u}$.
    The inner product (dot product in $\mathbb{R}^3$) is $\langle \mathbf{v}, \mathbf{u} \rangle = (1)(1) + (2)(1) + (3)(0) = 1 + 2 + 0 = 3$.
    The squared norm of $\mathbf{u}$ is $||\mathbf{u}||^2 = 1^2 + 1^2 + 0^2 = 1 + 1 + 0 = 2$.
    Therefore, the projection is:
    $\text{proj}_{\mathbf{u}} \mathbf{v} = \frac{3}{2} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3/2 \\ 3/2 \\ 0 \end{pmatrix}$.
    This means $3/2$ units of $\mathbf{v}$ lie along the direction of $\mathbf{u}$.

2.  **Question:** Let $W$ be the subspace of $\mathbb{R}^2$ spanned by the vector $\mathbf{w} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$. Find the projection matrix $P$ that projects any vector in $\mathbb{R}^2$ onto $W$. Then, use it to find the projection of $\mathbf{v} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$ onto $W$.
    **Answer:**
    The subspace $W$ is the span of $\mathbf{w}$. We can consider $\mathbf{w}$ as a single-column matrix $A = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$.
    The projection matrix is $P = A(A^T A)^{-1}A^T$.
    $A^T = \begin{pmatrix} 1 & 2 \end{pmatrix}$.
    $A^T A = \begin{pmatrix} 1 & 2 \end{pmatrix} \begin{pmatrix} 1 \\ 2 \end{pmatrix} = (1)(1) + (2)(2) = 1 + 4 = 5$.
    $(A^T A)^{-1} = \frac{1}{5}$.
    $P = \begin{pmatrix} 1 \\ 2 \end{pmatrix} \left( \frac{1}{5} \right) \begin{pmatrix} 1 & 2 \end{pmatrix} = \frac{1}{5} \begin{pmatrix} 1 \\ 2 \end{pmatrix} \begin{pmatrix} 1 & 2 \end{pmatrix} = \frac{1}{5} \begin{pmatrix} (1)(1) & (1)(2) \\ (2)(1) & (2)(2) \end{pmatrix} = \frac{1}{5} \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 1/5 & 2/5 \\ 2/5 & 4/5 \end{pmatrix}$.

    Now, to project $\mathbf{v} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$ onto $W$:
    $\text{proj}_W \mathbf{v} = P \mathbf{v} = \begin{pmatrix} 1/5 & 2/5 \\ 2/5 & 4/5 \end{pmatrix} \begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} (1/5)(3) + (2/5)(1) \\ (2/5)(3) + (4/5)(1) \end{pmatrix} = \begin{pmatrix} 3/5 + 2/5 \\ 6/5 + 4/5 \end{pmatrix} = \begin{pmatrix} 5/5 \\ 10/5 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$.
    Interestingly, the projection of $\mathbf{v}$ onto $W$ is $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$, which is exactly the basis vector $\mathbf{w}$. This means $\mathbf{v}$ is projected onto the entire subspace $W$ (which is a line here), and the closest point in $W$ to $\mathbf{v}$ is $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$. This also implies that $\mathbf{v}$ is not a scalar multiple of $\mathbf{w}$, as $\begin{pmatrix} 3 \\ 1 \end{pmatrix} \neq c \begin{pmatrix} 1 \\ 2 \end{pmatrix}$. The error vector would be $\begin{pmatrix} 3 \\ 1 \end{pmatrix} - \begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}$, which is orthogonal to $\mathbf{w} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ since $\langle \begin{pmatrix} 2 \\ -1 \end{pmatrix}, \begin{pmatrix} 1 \\ 2 \end{pmatrix} \rangle = (2)(1) + (-1)(2) = 2 - 2 = 0$.
