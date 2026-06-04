---
title: "Projection in R3"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 4: Linear Transformations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d2e"
status: "completed"
scrapedAt: "2026-05-20T16:34:54.003Z"
---
## Mathematics for Information Science – 2: Linear Transformations

### Module 4: Linear Transformations - Projection in $\mathbb{R}^3$

Welcome, everyone! Today, we're diving into a really fundamental and incredibly useful concept in linear algebra: **Projections**. Specifically, we'll be focusing on projections in $\mathbb{R}^3$. Think of projections as a way to "flatten" or "cast a shadow" of a higher-dimensional object onto a lower-dimensional one. This idea has immense applications in areas like computer graphics, data analysis, and even understanding how information gets "compressed" or represented.

Our journey today will directly connect with several of our course outcomes. We'll be building on our understanding of vector spaces and subspaces (CO2), and as we’ll see, projections themselves are a form of linear transformation (CO4). We’ll also touch upon the idea of finding the "best fit" projection, which is deeply related to least squares problems (CO3).

Let's get started by building our intuition.

#### 1. What is a Projection? The Intuitive Idea

Imagine you're standing outside on a sunny day. What do you see on the ground? You see the shadow of yourself, or of a building, or a tree. That shadow is essentially a projection. It's the "flattened" version of the 3D object onto the 2D ground.

In mathematics, a projection is similar. It's a transformation that maps a vector onto a subspace. This subspace is often a line or a plane. The key idea is that if a vector is already "in" the subspace, the projection leaves it unchanged. If it's not, it moves it to the "closest" point in that subspace.

**Why is this useful?** In information science, we often deal with high-dimensional data. Think of a dataset with hundreds or thousands of features. It’s incredibly difficult to visualize or even process such data directly. Projections allow us to reduce the dimensionality, perhaps to 2 or 3 dimensions, making it easier to analyze and understand the underlying patterns. This is a core idea in techniques like Principal Component Analysis (PCA), which you might encounter later.

Let's formalize this.

#### 2. Projection onto a Subspace

In $\mathbb{R}^3$, our "ground" could be a line passing through the origin or a plane passing through the origin. These lines and planes are the subspaces we'll be projecting onto.

**(a) Projection onto a Line (through the origin)**

Consider a line in $\mathbb{R}^3$ that passes through the origin. This line is determined by a single non-zero direction vector, let's call it $\mathbf{u}$. Any vector on this line can be written as a scalar multiple of $\mathbf{u}$, i.e., $c\mathbf{u}$ for some scalar $c$.

So, when we project a vector $\mathbf{v}$ onto the line spanned by $\mathbf{u}$, we are essentially trying to find the component of $\mathbf{v}$ that lies in the direction of $\mathbf{u}$.

Let's recall our friend, the **dot product**. The dot product $\mathbf{v} \cdot \mathbf{u}$ gives us a measure of how much $\mathbf{v}$ "aligns" with $\mathbf{u}$. Specifically, $\mathbf{v} \cdot \mathbf{u} = |\mathbf{v}| |\mathbf{u}| \cos(\theta)$, where $\theta$ is the angle between $\mathbf{v}$ and $\mathbf{u}$.

The length of the projection of $\mathbf{v}$ onto $\mathbf{u}$ is $|\mathbf{v}| \cos(\theta)$. To get the *vector* projection, we need to give this length a direction – the direction of $\mathbf{u}$.

The projection of $\mathbf{v}$ onto the line spanned by $\mathbf{u}$ is given by:

$$ \text{proj}_{\mathbf{u}} \mathbf{v} = \left( \frac{\mathbf{v} \cdot \mathbf{u}}{\|\mathbf{u}\|^2} \right) \mathbf{u} $$

Here's a breakdown of this formula:
*   $\mathbf{v} \cdot \mathbf{u}$: The dot product of $\mathbf{v}$ and $\mathbf{u}$. This tells us how much $\mathbf{v}$ "goes in the direction" of $\mathbf{u}$.
*   $\|\mathbf{u}\|^2$: The squared magnitude of $\mathbf{u}$ (which is just $\mathbf{u} \cdot \mathbf{u}$). This normalizes the result so that the scalar part is just a number, not dependent on the length of $\mathbf{u}$.
*   $\left( \frac{\mathbf{v} \cdot \mathbf{u}}{\|\mathbf{u}\|^2} \right)$: This is a scalar. It tells us "how many units of $\mathbf{u}$" are needed to reach the projected point.
*   $\left( \frac{\mathbf{v} \cdot \mathbf{u}}{\|\mathbf{u}\|^2} \right) \mathbf{u}$: This scalar multiplied by the vector $\mathbf{u}$ gives us the actual projected vector, which lies on the line spanned by $\mathbf{u}$.

**Analogy:** Imagine shining a flashlight perpendicularly onto a line. The shadow cast by the tip of vector $\mathbf{v}$ on the line spanned by $\mathbf{u}$ is the projection. The formula essentially calculates the length of this shadow and places it along the line in the correct direction.

**Example:** Let's project $\mathbf{v} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ onto the line spanned by $\mathbf{u} = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$.

1.  Calculate $\mathbf{v} \cdot \mathbf{u}$:
    $\mathbf{v} \cdot \mathbf{u} = (1)(1) + (2)(1) + (3)(0) = 1 + 2 + 0 = 3$.
2.  Calculate $\|\mathbf{u}\|^2$:
    $\|\mathbf{u}\|^2 = 1^2 + 1^2 + 0^2 = 1 + 1 + 0 = 2$.
3.  Apply the formula:
    $$ \text{proj}_{\mathbf{u}} \mathbf{v} = \left( \frac{3}{2} \right) \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3/2 \\ 3/2 \\ 0 \end{pmatrix} $$
So, the projection of $\mathbf{v}$ onto the line spanned by $\mathbf{u}$ is $\begin{pmatrix} 3/2 \\ 3/2 \\ 0 \end{pmatrix}$. This new vector lies on the line defined by $\mathbf{u}$.

**Connecting to Course Outcomes:** This process of finding the projection onto a line is a direct application of vector operations (dot product, scalar multiplication) and demonstrates how we can find a specific component of a vector within a subspace (CO2). It's also a concrete example of a linear transformation, where the input vector $\mathbf{v}$ is transformed into the output vector $\text{proj}_{\mathbf{u}} \mathbf{v}$.

**(b) Projection onto a Plane (through the origin)**

Now, what about projecting onto a plane? A plane in $\mathbb{R}^3$ passing through the origin is typically defined by two linearly independent vectors that lie within it, say $\mathbf{u}_1$ and $\mathbf{u}_2$. The subspace spanned by $\mathbf{u}_1$ and $\mathbf{u}_2$ is our plane.

To find the projection of a vector $\mathbf{v}$ onto this plane, we are looking for the vector in the plane that is "closest" to $\mathbf{v}$. This closest vector, let's call it $\mathbf{p}$, will have the property that the difference vector $\mathbf{v} - \mathbf{p}$ is orthogonal (perpendicular) to the plane itself.

Think about it: if you are trying to get as close as possible to a target point, the direct path from your current location to the target point would be perpendicular to the plane you are standing on, if the target is on the plane.

There are a couple of ways to think about this.

**Method 1: Using Orthogonal Bases (Gram-Schmidt)**

If $\mathbf{u}_1$ and $\mathbf{u}_2$ are not orthogonal, we can use the Gram-Schmidt process to find an orthogonal basis for the plane, say $\{\mathbf{w}_1, \mathbf{w}_2\}$. Once we have an orthogonal basis, projecting onto the plane becomes simpler.

The projection of $\mathbf{v}$ onto the subspace spanned by $\{\mathbf{w}_1, \mathbf{w}_2\}$ is the sum of its projections onto each orthogonal vector:

$$ \text{proj}_{\text{plane}} \mathbf{v} = \text{proj}_{\mathbf{w}_1} \mathbf{v} + \text{proj}_{\mathbf{w}_2} \mathbf{v} $$
$$ \text{proj}_{\text{plane}} \mathbf{v} = \left( \frac{\mathbf{v} \cdot \mathbf{w}_1}{\|\mathbf{w}_1\|^2} \right) \mathbf{w}_1 + \left( \frac{\mathbf{v} \cdot \mathbf{w}_2}{\|\mathbf{w}_2\|^2} \right) \mathbf{w}_2 $$

**Example:** Let's project $\mathbf{v} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ onto the plane spanned by $\mathbf{u}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ and $\mathbf{u}_2 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$.

First, $\mathbf{u}_1$ and $\mathbf{u}_2$ are not orthogonal ($\mathbf{u}_1 \cdot \mathbf{u}_2 = 1$). We need to make them orthogonal. Let's use Gram-Schmidt.
Let $\mathbf{w}_1 = \mathbf{u}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$.

Now, find $\mathbf{w}_2$:
$$ \mathbf{w}_2 = \mathbf{u}_2 - \text{proj}_{\mathbf{w}_1} \mathbf{u}_2 $$
$$ \text{proj}_{\mathbf{w}_1} \mathbf{u}_2 = \left( \frac{\mathbf{u}_2 \cdot \mathbf{w}_1}{\|\mathbf{w}_1\|^2} \right) \mathbf{w}_1 = \left( \frac{(1)(1) + (1)(0) + (0)(0)}{1^2+0^2+0^2} \right) \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \left( \frac{1}{1} \right) \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} $$
So, $\mathbf{w}_2 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} - \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$.
Now we have an orthogonal basis for the plane: $\mathbf{w}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ and $\mathbf{w}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$. These are simply the standard basis vectors $e_1$ and $e_2$, which makes sense as the plane they span is the $xy$-plane.

Now, project $\mathbf{v} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ onto this plane:
$$ \text{proj}_{\text{plane}} \mathbf{v} = \left( \frac{\mathbf{v} \cdot \mathbf{w}_1}{\|\mathbf{w}_1\|^2} \right) \mathbf{w}_1 + \left( \frac{\mathbf{v} \cdot \mathbf{w}_2}{\|\mathbf{w}_2\|^2} \right) \mathbf{w}_2 $$
*   $\mathbf{v} \cdot \mathbf{w}_1 = (1)(1) + (2)(0) + (3)(0) = 1$. $\|\mathbf{w}_1\|^2 = 1$.
*   $\mathbf{v} \cdot \mathbf{w}_2 = (1)(0) + (2)(1) + (3)(0) = 2$. $\|\mathbf{w}_2\|^2 = 1$.

$$ \text{proj}_{\text{plane}} \mathbf{v} = \left( \frac{1}{1} \right) \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + \left( \frac{2}{1} \right) \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + \begin{pmatrix} 0 \\ 2 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} $$
The projection of $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ onto the $xy$-plane is $\begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$. This makes perfect sense – we're just "zeroing out" the $z$-component, which is exactly what projecting onto the $xy$-plane means.

**Connecting to Course Outcomes:** This method directly utilizes the Gram-Schmidt process (CO3) to create an orthogonal basis, which then allows us to decompose the projection onto the subspace. It also reinforces the idea of vectors spanning subspaces (CO2).

**Method 2: Using the Normal Vector**

A plane passing through the origin can also be defined by its **normal vector**, say $\mathbf{n}$. The normal vector is a vector that is orthogonal to every vector lying in the plane. If a vector $\mathbf{v}$ is projected onto a plane with normal $\mathbf{n}$, the "error vector" $\mathbf{v} - \text{proj}_{\text{plane}} \mathbf{v}$ must be parallel to the normal vector $\mathbf{n}$.

Let $\mathbf{p} = \text{proj}_{\text{plane}} \mathbf{v}$. Then $\mathbf{v} - \mathbf{p} = k\mathbf{n}$ for some scalar $k$.
This means $\mathbf{p} = \mathbf{v} - k\mathbf{n}$.
Since $\mathbf{p}$ lies in the plane, it must be orthogonal to the normal vector $\mathbf{n}$.
So, $\mathbf{p} \cdot \mathbf{n} = 0$.
Substituting $\mathbf{p} = \mathbf{v} - k\mathbf{n}$:
$(\mathbf{v} - k\mathbf{n}) \cdot \mathbf{n} = 0$
$\mathbf{v} \cdot \mathbf{n} - k(\mathbf{n} \cdot \mathbf{n}) = 0$
$\mathbf{v} \cdot \mathbf{n} = k\|\mathbf{n}\|^2$
Solving for $k$: $k = \frac{\mathbf{v} \cdot \mathbf{n}}{\|\mathbf{n}\|^2}$.

Now substitute $k$ back into the expression for $\mathbf{p}$:
$$ \mathbf{p} = \mathbf{v} - \left( \frac{\mathbf{v} \cdot \mathbf{n}}{\|\mathbf{n}\|^2} \right) \mathbf{n} $$

This formula looks very similar to the projection onto a line, but with a crucial difference: it's **subtracting** the projection onto the normal vector. This makes sense. If you want to find the component of $\mathbf{v}$ that lies *in* the plane, you can find the component of $\mathbf{v}$ that lies *perpendicular* to the plane (i.e., along the normal) and subtract it from $\mathbf{v}$.

**Example:** Project $\mathbf{v} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ onto the plane defined by the normal vector $\mathbf{n} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$. (This is the $xy$-plane again).

1.  Calculate $\mathbf{v} \cdot \mathbf{n}$:
    $\mathbf{v} \cdot \mathbf{n} = (1)(0) + (2)(0) + (3)(1) = 3$.
2.  Calculate $\|\mathbf{n}\|^2$:
    $\|\mathbf{n}\|^2 = 0^2 + 0^2 + 1^2 = 1$.
3.  Apply the formula:
    $$ \mathbf{p} = \mathbf{v} - \left( \frac{\mathbf{v} \cdot \mathbf{n}}{\|\mathbf{n}\|^2} \right) \mathbf{n} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} - \left( \frac{3}{1} \right) \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} $$
    $$ \mathbf{p} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} - \begin{pmatrix} 0 \\ 0 \\ 3 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} $$
Again, we get $\begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$, the projection onto the $xy$-plane.

**How do we get the normal vector?** If a plane is defined by two linearly independent vectors $\mathbf{u}_1$ and $\mathbf{u}_2$, their cross product gives a vector orthogonal to both, hence the normal vector: $\mathbf{n} = \mathbf{u}_1 \times \mathbf{u}_2$.

**Connecting to Course Outcomes:** This method elegantly uses the concept of orthogonality (CO3) and the relationship between a subspace and its orthogonal complement. It's a very practical way to project onto a plane if you know its normal. It also defines a transformation from $\mathbf{v}$ to $\mathbf{p}$, fitting under our discussion of linear transformations (CO4).

#### 3. Projection Matrices

Remember our discussion on linear transformations and how they can be represented by matrices? Projections are no exception! This is a very important concept for practical implementation.

A projection is a linear transformation, so there exists a matrix $P$ such that $\text{proj}(\mathbf{v}) = P\mathbf{v}$.

**(a) Projection Matrix onto a Line**

Let's look at the formula for projecting onto a line spanned by $\mathbf{u}$:
$$ \text{proj}_{\mathbf{u}} \mathbf{v} = \left( \frac{\mathbf{v} \cdot \mathbf{u}}{\|\mathbf{u}\|^2} \right) \mathbf{u} $$
We can rewrite $\mathbf{v} \cdot \mathbf{u}$ as $\mathbf{u}^T \mathbf{v}$ (if we consider $\mathbf{v}$ and $\mathbf{u}$ as column vectors).
$$ \text{proj}_{\mathbf{u}} \mathbf{v} = \left( \frac{\mathbf{u}^T \mathbf{v}}{\mathbf{u}^T \mathbf{u}} \right) \mathbf{u} $$
Now, rearrange this using properties of matrix multiplication. The scalar $\frac{\mathbf{u}^T \mathbf{v}}{\mathbf{u}^T \mathbf{u}}$ can be moved around.
$$ \text{proj}_{\mathbf{u}} \mathbf{v} = \frac{1}{\mathbf{u}^T \mathbf{u}} (\mathbf{u} (\mathbf{u}^T \mathbf{v})) $$
Using the associative property of matrix multiplication, $(\mathbf{u} \mathbf{u}^T) \mathbf{v}$:
$$ \text{proj}_{\mathbf{u}} \mathbf{v} = \left( \frac{\mathbf{u} \mathbf{u}^T}{\mathbf{u}^T \mathbf{u}} \right) \mathbf{v} $$
The matrix $P_{\mathbf{u}}$ that performs this projection is:
$$ P_{\mathbf{u}} = \frac{\mathbf{u} \mathbf{u}^T}{\mathbf{u}^T \mathbf{u}} = \frac{\mathbf{u} \mathbf{u}^T}{\|\mathbf{u}\|^2} $$
Note that $\mathbf{u} \mathbf{u}^T$ is an outer product, which results in a matrix. For example, if $\mathbf{u} = \begin{pmatrix} u_1 \\ u_2 \\ u_3 \end{pmatrix}$, then $\mathbf{u} \mathbf{u}^T = \begin{pmatrix} u_1 \\ u_2 \\ u_3 \end{pmatrix} \begin{pmatrix} u_1 & u_2 & u_3 \end{pmatrix} = \begin{pmatrix} u_1^2 & u_1 u_2 & u_1 u_3 \\ u_2 u_1 & u_2^2 & u_2 u_3 \\ u_3 u_1 & u_3 u_2 & u_3^2 \end{pmatrix}$.

**Properties of Projection Matrices:**
A projection matrix $P$ has some special properties:
1.  **Idempotent:** $P^2 = P$. If you project something, and then project the result again, you get the same result. Think about it – projecting your shadow onto the ground twice doesn't change the shadow. This is a hallmark of projection matrices.
2.  **Symmetric:** $P^T = P$. This is true for orthogonal projections, which is what we are generally dealing with.

**Example:** Find the projection matrix for projecting onto the line spanned by $\mathbf{u} = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$.

1.  Calculate $\mathbf{u} \mathbf{u}^T$:
    $$ \mathbf{u} \mathbf{u}^T = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} \begin{pmatrix} 1 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} $$
2.  Calculate $\|\mathbf{u}\|^2$:
    $\|\mathbf{u}\|^2 = 1^2 + 1^2 + 0^2 = 2$.
3.  Construct $P_{\mathbf{u}}$:
    $$ P_{\mathbf{u}} = \frac{1}{2} \begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 1/2 & 1/2 & 0 \\ 1/2 & 1/2 & 0 \\ 0 & 0 & 0 \end{pmatrix} $$
Let's test this by projecting $\mathbf{v} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ again:
$$ P_{\mathbf{u}} \mathbf{v} = \begin{pmatrix} 1/2 & 1/2 & 0 \\ 1/2 & 1/2 & 0 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} = \begin{pmatrix} (1/2)(1) + (1/2)(2) + (0)(3) \\ (1/2)(1) + (1/2)(2) + (0)(3) \\ (0)(1) + (0)(2) + (0)(3) \end{pmatrix} = \begin{pmatrix} 1/2 + 1 \\ 1/2 + 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3/2 \\ 3/2 \\ 0 \end{pmatrix} $$
This matches our previous result!

**Connecting to Course Outcomes:** This section is all about representing our projection transformation as a matrix (CO4). The properties of projection matrices (idempotence and symmetry) are also key characteristics that are often tested. This is very useful for computation and understanding the nature of the transformation.

**(b) Projection Matrix onto a Plane**

Projecting onto a plane spanned by two linearly independent vectors $\mathbf{u}_1$ and $\mathbf{u}_2$ can also be represented by a matrix. Let $U$ be the matrix whose columns are $\mathbf{u}_1$ and $\mathbf{u}_2$.
$$ U = \begin{pmatrix} | & | \\ \mathbf{u}_1 & \mathbf{u}_2 \\ | & | \end{pmatrix} $$
The projection of $\mathbf{v}$ onto the column space of $U$ (which is our plane) is given by the formula:
$$ \text{proj}_{\text{col}(U)} \mathbf{v} = U (U^T U)^{-1} U^T \mathbf{v} $$
Thus, the projection matrix $P_{\text{plane}}$ is:
$$ P_{\text{plane}} = U (U^T U)^{-1} U^T $$
This formula is derived from the least-squares problem of finding the vector $U\mathbf{x}$ that is closest to $\mathbf{v}$. The normal equations for this are $U^T U \mathbf{x} = U^T \mathbf{v}$, and the solution is $\mathbf{x} = (U^T U)^{-1} U^T \mathbf{v}$. The projection is then $U\mathbf{x}$.

**Example:** Project onto the plane spanned by $\mathbf{u}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ and $\mathbf{u}_2 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$.

1.  Form the matrix $U$:
    $$ U = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} $$
2.  Calculate $U^T$:
    $$ U^T = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \end{pmatrix} $$
3.  Calculate $U^T U$:
    $$ U^T U = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} (1)(1)+(0)(0)+(0)(0) & (1)(1)+(0)(1)+(0)(0) \\ (1)(1)+(1)(0)+(0)(0) & (1)(1)+(1)(1)+(0)(0) \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} $$
4.  Calculate $(U^T U)^{-1}$:
    The determinant of $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ is $ad-bc$. Here, det $= (1)(2) - (1)(1) = 1$.
    The inverse is $\frac{1}{\det} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
    $$ (U^T U)^{-1} = \frac{1}{1} \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix} $$
5.  Calculate $U^T U (U^T U)^{-1}$: This should be the identity matrix $I_2$ if the vectors were linearly independent, which they are. Let's check: $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} (1)(2)+(1)(-1) & (1)(-1)+(1)(1) \\ (1)(2)+(2)(-1) & (1)(-1)+(2)(1) \end{pmatrix} = \begin{pmatrix} 2-1 & -1+1 \\ 2-2 & -1+2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$. Good.

6.  Calculate $U (U^T U)^{-1} U^T$:
    $$ U (U^T U)^{-1} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} (1)(2)+(1)(-1) & (1)(-1)+(1)(1) \\ (0)(2)+(1)(-1) & (0)(-1)+(1)(1) \\ (0)(2)+(0)(-1) & (0)(-1)+(0)(1) \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \\ 0 & 0 \end{pmatrix} $$
    Now multiply by $U^T$:
    $$ P_{\text{plane}} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \end{pmatrix} = \begin{pmatrix} (1)(1)+(0)(1) & (1)(0)+(0)(1) & (1)(0)+(0)(0) \\ (-1)(1)+(1)(1) & (-1)(0)+(1)(1) & (-1)(0)+(1)(0) \\ (0)(1)+(0)(1) & (0)(0)+(0)(1) & (0)(0)+(0)(0) \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} $$
This is the projection matrix onto the $xy$-plane, which is exactly what we expect! It's a matrix that keeps the $x$ and $y$ components and zeros out the $z$ component.

**Connecting to Course Outcomes:** This formula $P = U(U^T U)^{-1} U^T$ is a fundamental result from least-squares approximation (CO3). It's also how we construct projection matrices for more general subspaces, which directly relates to understanding linear transformations and their matrices (CO4). The calculation of the inverse matrix $(U^T U)^{-1}$ is crucial here.

#### 4. Properties of Projections and Their Significance

Let $P$ be a projection matrix. As we discussed, $P^2 = P$ and $P^T = P$ (for orthogonal projections).

*   **Idempotence ($P^2 = P$)**: This property means that once a vector is projected, applying the projection again doesn't change it. This is the mathematical embodiment of "shadows don't get flatter if you shine the light on them again."
*   **Symmetry ($P^T = P$)**: This means the projection is an *orthogonal* projection. The vector connecting the original point to its projection is perpendicular to the subspace. This is usually the type of projection we're interested in, as it represents the "closest" point in the subspace.

**What is the "image" or "range" of a projection?**
The image of a projection matrix $P$ is the subspace onto which we are projecting. So, if $P$ projects onto a subspace $W$, then $\text{Im}(P) = W$. This means that any vector in the image of $P$ is an element of the subspace $W$.

**What is the "kernel" or "null space" of a projection?**
The kernel of a projection matrix $P$ is the subspace of vectors that are projected to the zero vector. If $P$ projects onto subspace $W$, then its kernel is the orthogonal complement of $W$, denoted $W^{\perp}$. Any vector $\mathbf{v}$ in $W^{\perp}$ is orthogonal to all vectors in $W$, so its projection onto $W$ is zero.

**Connecting to Course Outcomes:** Understanding the image and kernel of a projection transformation is critical. It tells us about the "output space" and the "input space that gets collapsed" (CO4). The fact that the kernel is the orthogonal complement directly relates to the geometric interpretation and the properties of inner product spaces (CO3).

#### 5. Applications and Examples in Information Science

*   **Dimensionality Reduction (PCA):** As mentioned, projections are the backbone of techniques like PCA. High-dimensional data points can be projected onto lower-dimensional principal components (which are essentially directions found by maximizing variance). This allows for visualization and simpler modeling.
*   **Image Compression:** Imagine an image as a large matrix of pixel values. Techniques can be used to project this data into a lower-dimensional space, keeping the most important features while discarding less significant ones, thereby reducing file size.
*   **Filtering and Noise Reduction:** In signal processing or image analysis, projections can be used to isolate desired signals from noise. For example, projecting a noisy signal onto a subspace representing the "clean" signal can help denoise it.
*   **Computer Graphics:** Projections are fundamental in rendering 3D scenes onto a 2D screen. This involves various types of projections, including perspective and orthographic projections.
*   **Recommender Systems:** In collaborative filtering, user preferences can be represented as vectors. Projections might be used to find commonalities or similarities between users or items, helping to make recommendations.

**Relatable Example:** Imagine you have a large spreadsheet of customer data, with columns for age, income, spending habits, location, number of purchases, last login date, etc. This is high-dimensional data. To understand the customer base, you might want to see if there are clusters of similar customers. You could project this data onto two dimensions – perhaps "customer lifetime value" and "frequency of purchase" – to create a scatter plot. This projection allows you to visualize groups of customers (e.g., "high value, low frequency" vs. "low value, high frequency").

#### Summary and Key Takeaways

*   **Projection:** A transformation that maps a vector onto a subspace (line or plane).
*   **Projection onto a Line:** $\text{proj}_{\mathbf{u}} \mathbf{v} = \left( \frac{\mathbf{v} \cdot \mathbf{u}}{\|\mathbf{u}\|^2} \right) \mathbf{u}$. The projecting vector $\text{proj}_{\mathbf{u}} \mathbf{v}$ lies on the line spanned by $\mathbf{u}$.
*   **Projection onto a Plane:** Can be found by projecting onto an orthogonal basis of the plane, or by subtracting the projection onto the normal vector: $\mathbf{p} = \mathbf{v} - \left( \frac{\mathbf{v} \cdot \mathbf{n}}{\|\mathbf{n}\|^2} \right) \mathbf{n}$.
*   **Projection Matrices:** Represent projections as matrix operations.
    *   Line: $P_{\mathbf{u}} = \frac{\mathbf{u} \mathbf{u}^T}{\|\mathbf{u}\|^2}$
    *   Plane: $P_{\text{plane}} = U (U^T U)^{-1} U^T$
*   **Properties of Projection Matrices:** $P^2=P$ (idempotent), $P^T=P$ (symmetric for orthogonal projections).
*   **Image and Kernel:** $\text{Im}(P)$ is the subspace of projection, $\text{Ker}(P)$ is the orthogonal complement of that subspace.
*   **Applications:** Crucial in dimensionality reduction, data analysis, graphics, and more.

**Remember this:** Projections are a fundamental tool for simplifying complex data by mapping it to a more manageable subspace. Understanding how to calculate them, represent them with matrices, and interpret their properties is key.

***

#### Sample Questions with Answers

**Conceptual Question 1:**
What does it mean for a projection matrix $P$ to be idempotent? Explain its geometric significance.

**Answer:**
A projection matrix $P$ is idempotent if $P^2 = P$.
Geometrically, this means that if you apply the projection transformation twice to any vector, the result is the same as applying it once. In simpler terms, once a vector has been projected onto a subspace, projecting it again (from its new position in the subspace) does not change its location. Think of it like shining a light on an object to create a shadow on the ground; shining the light again on the shadow doesn't create a new or different shadow.

**Exam-Oriented Question 2:**
Find the orthogonal projection of the vector $\mathbf{v} = \begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix}$ onto the plane in $\mathbb{R}^3$ spanned by the vectors $\mathbf{u}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ and $\mathbf{u}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$.

**Solution:**
The plane spanned by $\mathbf{u}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ and $\mathbf{u}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ is the $xy$-plane. This plane has a normal vector $\mathbf{n} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.

We can use the formula for projection onto a plane using the normal vector:
$$ \text{proj}_{\text{plane}} \mathbf{v} = \mathbf{v} - \left( \frac{\mathbf{v} \cdot \mathbf{n}}{\|\mathbf{n}\|^2} \right) \mathbf{n} $$

1.  Calculate the dot product $\mathbf{v} \cdot \mathbf{n}$:
    $\mathbf{v} \cdot \mathbf{n} = (2)(0) + (-1)(0) + (4)(1) = 0 + 0 + 4 = 4$.

2.  Calculate the squared magnitude of $\mathbf{n}$:
    $\|\mathbf{n}\|^2 = 0^2 + 0^2 + 1^2 = 0 + 0 + 1 = 1$.

3.  Substitute these values into the formula:
    $$ \text{proj}_{\text{plane}} \mathbf{v} = \begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix} - \left( \frac{4}{1} \right) \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} $$
    $$ \text{proj}_{\text{plane}} \mathbf{v} = \begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix} - \begin{pmatrix} 0 \\ 0 \\ 4 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} $$

Alternatively, since $\mathbf{u}_1$ and $\mathbf{u}_2$ are already orthogonal and unit vectors (an orthonormal basis), the projection is simply the sum of projections onto each:
$$ \text{proj}_{\text{plane}} \mathbf{v} = \text{proj}_{\mathbf{u}_1} \mathbf{v} + \text{proj}_{\mathbf{u}_2} \mathbf{v} $$
$$ \text{proj}_{\mathbf{u}_1} \mathbf{v} = \left( \frac{\mathbf{v} \cdot \mathbf{u}_1}{\|\mathbf{u}_1\|^2} \right) \mathbf{u}_1 = \left( \frac{(2)(1)+(-1)(0)+(4)(0)}{1^2+0^2+0^2} \right) \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \left( \frac{2}{1} \right) \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 2 \\ 0 \\ 0 \end{pmatrix} $$
$$ \text{proj}_{\mathbf{u}_2} \mathbf{v} = \left( \frac{\mathbf{v} \cdot \mathbf{u}_2}{\|\mathbf{u}_2\|^2} \right) \mathbf{u}_2 = \left( \frac{(2)(0)+(-1)(1)+(4)(0)}{0^2+1^2+0^2} \right) \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \left( \frac{-1}{1} \right) \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ -1 \\ 0 \end{pmatrix} $$
Summing these: $\begin{pmatrix} 2 \\ 0 \\ 0 \end{pmatrix} + \begin{pmatrix} 0 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}$.

Both methods yield the same result. The projection of $\mathbf{v}$ onto the $xy$-plane is $\begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}$.

**Conceptual Question 3:**
If a linear transformation $T: \mathbb{R}^3 \to \mathbb{R}^3$ is a projection onto a plane $W$, what can you say about the image and kernel of $T$?

**Answer:**
If $T$ is a projection onto a plane $W$ (which is a 2-dimensional subspace of $\mathbb{R}^3$):
*   **Image of $T$ (or Range of $T$):** The image of $T$ is the subspace onto which it projects. Therefore, $\text{Im}(T) = W$. Since $W$ is a plane, the image is a 2-dimensional subspace.
*   **Kernel of $T$ (or Null Space of $T$):** The kernel of $T$ consists of all vectors that are mapped to the zero vector by $T$. If $T$ projects vectors onto a plane $W$, then any vector orthogonal to $W$ will be projected to the zero vector. This subspace orthogonal to $W$ is the orthogonal complement of $W$, denoted $W^{\perp}$. Since $W$ is a plane (2-dimensional), its orthogonal complement in $\mathbb{R}^3$ will be a line (1-dimensional). So, $\text{Ker}(T) = W^{\perp}$.
This aligns with the Rank-Nullity Theorem: $\text{rank}(T) + \text{nullity}(T) = \dim(\text{domain})$. Here, $\dim(\text{Im}(T)) + \dim(\text{Ker}(T)) = 2 + 1 = 3$, which is the dimension of $\mathbb{R}^3$.

---
This concludes our session on Projections in $\mathbb{R}^3$. I hope you found it insightful and see how these mathematical concepts form the bedrock of many modern information science applications. Keep practicing these calculations, and don't hesitate to ask questions!
