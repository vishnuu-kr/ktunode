---
title: "Linear Transformation given by a matrix"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 4: Linear Transformations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d2c"
status: "completed"
scrapedAt: "2026-05-20T16:34:52.546Z"
---
Let's dive into the fascinating world of Linear Transformations, specifically how they are represented by matrices! This is a cornerstone topic in our "Mathematics for Information Science – 2" course, and I'm genuinely excited to explore it with you. Think of this module as unlocking a powerful toolset for understanding how data, signals, and even complex systems can be manipulated and analyzed.

## Module 4: Linear Transformations – The Matrix Connection

Welcome back, everyone! In this module, we've been building a solid understanding of vector spaces and their properties. Now, we're going to bridge that understanding to a concept that's absolutely crucial in information science: **Linear Transformations**. And the best part? We're going to see how these abstract ideas are elegantly captured by something we're all familiar with: **matrices**.

### 1. What Exactly IS a Linear Transformation?

Before we get to matrices, let's recall what a linear transformation is. Imagine you have a machine that takes a vector as input and spits out another vector as output. A linear transformation, let's call it $T$, is a special kind of machine that follows two fundamental rules:

*   **Additivity:** If you give it two vectors, say $\mathbf{u}$ and $\mathbf{v}$, and transform them separately, then add the results, it's the same as adding the vectors first and then transforming the sum. Mathematically, this is:
    $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$
*   **Homogeneity (or Scalar Multiplicativity):** If you scale a vector $\mathbf{v}$ by a constant $c$ and then transform it, it's the same as transforming $\mathbf{v}$ first and then scaling the result by $c$. Mathematically:
    $T(c\mathbf{v}) = cT(\mathbf{v})$

These two properties, often combined into one as $T(c\mathbf{u} + d\mathbf{v}) = cT(\mathbf{u}) + dT(\mathbf{v})$ for any scalars $c, d$ and vectors $\mathbf{u}, \mathbf{v}$, are the defining characteristics of linearity.

**Why are these properties so important?** They mean that linear transformations preserve the fundamental structure of vector spaces. They don't twist or bend the space in "non-linear" ways. Think of stretching a rubber sheet. If you stretch it uniformly in all directions, the grid lines on the sheet remain straight and parallel. That's a linear transformation. If you were to warp it unevenly, the lines would curve, and that wouldn't be linear.

**Relating to Course Outcomes:** This fundamental understanding of linearity directly addresses **CO4: Understand the concept of linear transformation and to apply its properties**. By understanding these rules, we can predict how combinations of vectors will behave under a transformation.

### 2. The Power of Matrices: Representing Linear Transformations

Now, here's where the magic happens. It turns out that **any linear transformation between finite-dimensional vector spaces can be uniquely represented by a matrix.** This is a profound result, and it's the core of this topic.

Let's consider a transformation $T$ that maps vectors from a vector space $V$ to a vector space $W$. If $V$ has dimension $n$ and $W$ has dimension $m$, then $T$ can be represented by an $m \times n$ matrix, let's call it $A$. The transformation itself can then be expressed as a matrix multiplication:

$T(\mathbf{x}) = A\mathbf{x}$

where $\mathbf{x}$ is a vector in $V$ (represented as an $n \times 1$ column matrix) and $A\mathbf{x}$ is the resulting vector in $W$ (an $m \times 1$ column matrix).

**How do we find this matrix $A$?** The key lies in understanding how the transformation affects the basis vectors of the input space.

Let $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$ be a basis for the input vector space $V$. Any vector $\mathbf{x}$ in $V$ can be written as a unique linear combination of these basis vectors:

$\mathbf{x} = x_1\mathbf{v}_1 + x_2\mathbf{v}_2 + \dots + x_n\mathbf{v}_n$

where $x_1, x_2, \dots, x_n$ are the coordinates of $\mathbf{x}$ with respect to this basis.

Now, applying the linearity properties of $T$:

$T(\mathbf{x}) = T(x_1\mathbf{v}_1 + x_2\mathbf{v}_2 + \dots + x_n\mathbf{v}_n)$
$T(\mathbf{x}) = x_1T(\mathbf{v}_1) + x_2T(\mathbf{v}_2) + \dots + x_nT(\mathbf{v}_n)$

This equation tells us something incredibly important: **If we know where the transformation sends each of the basis vectors, we can determine where it sends ANY vector in the space!**

The matrix $A$ that represents this transformation is constructed by using the transformed basis vectors as its columns.

Let $\{\mathbf{w}_1, \mathbf{w}_2, \dots, \mathbf{w}_m\}$ be a basis for the output vector space $W$. Then, each $T(\mathbf{v}_j)$ will be a vector in $W$, and we can express it as a linear combination of the basis vectors of $W$:

$T(\mathbf{v}_j) = a_{1j}\mathbf{w}_1 + a_{2j}\mathbf{w}_2 + \dots + a_{mj}\mathbf{w}_m$

The coefficients $a_{1j}, a_{2j}, \dots, a_{mj}$ form the $j$-th column of our matrix $A$.

So, the matrix $A$ is given by:

$A = \begin{bmatrix} | & | & & | \\ T(\mathbf{v}_1) & T(\mathbf{v}_2) & \dots & T(\mathbf{v}_n) \\ | & | & & | \end{bmatrix}$

where $T(\mathbf{v}_j)$ are expressed as column vectors in terms of the basis of $W$.

**Connecting to Standard Bases:** In practice, we often work with standard bases. For $\mathbb{R}^n$, the standard basis vectors are $\mathbf{e}_1 = [1, 0, \dots, 0]^T$, $\mathbf{e}_2 = [0, 1, \dots, 0]^T$, and so on, up to $\mathbf{e}_n = [0, 0, \dots, 1]^T$.

If $T: \mathbb{R}^n \to \mathbb{R}^m$ is a linear transformation, and we use the standard bases for both spaces, the matrix $A$ is simply formed by taking the standard basis vectors of $\mathbb{R}^n$, applying $T$ to each of them, and using these results as the columns of $A$.

$A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & \dots & T(\mathbf{e}_n) \end{bmatrix}$

**Example:** Let's consider a 2D transformation $T: \mathbb{R}^2 \to \mathbb{R}^2$ that rotates vectors by 90 degrees counterclockwise.
The standard basis vectors in $\mathbb{R}^2$ are $\mathbf{e}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ and $\mathbf{e}_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.

Let's see where $T$ sends them:
$T(\mathbf{e}_1) = T\left(\begin{bmatrix} 1 \\ 0 \end{bmatrix}\right) = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$ (Rotating $(1,0)$ by 90 degrees counterclockwise lands it on $(0,1)$)
$T(\mathbf{e}_2) = T\left(\begin{bmatrix} 0 \\ 1 \end{bmatrix}\right) = \begin{bmatrix} -1 \\ 0 \end{bmatrix}$ (Rotating $(0,1)$ by 90 degrees counterclockwise lands it on $(-1,0)$)

So, the matrix $A$ representing this rotation is:
$A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) \end{bmatrix} = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$

Now, if we want to rotate any vector $\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$, we just multiply it by $A$:
$T(\mathbf{x}) = A\mathbf{x} = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} -x_2 \\ x_1 \end{bmatrix}$
This makes sense! A point $(x_1, x_2)$ rotated by 90 degrees counterclockwise becomes $(-x_2, x_1)$.

**Relating to Textbooks:** This is a core concept discussed in chapters on linear transformations in both Kreyszig and Larson. Kreyszig, for instance, often emphasizes the "matrix of a linear transformation with respect to bases," and Larson builds this up from the properties of matrix-vector multiplication.

**Relating to Course Outcomes:** This section directly supports **CO4: Understand the concept of linear transformation and to apply its properties, to find the rank and nullity of a linear transformation and to find the matrices of linear transformations.** We are now actively finding the matrices that *define* these transformations.

### 3. Examples and Visualizations – Making it Tangible

Let's get a better feel for this with a few more examples.

**Example 1: Scaling**
Consider a transformation $T: \mathbb{R}^2 \to \mathbb{R}^2$ that scales every vector by a factor of 3.
$T(\mathbf{x}) = 3\mathbf{x}$

Let's find its matrix using the standard basis:
$T(\mathbf{e}_1) = 3\mathbf{e}_1 = 3\begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 3 \\ 0 \end{bmatrix}$
$T(\mathbf{e}_2) = 3\mathbf{e}_2 = 3\begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 3 \end{bmatrix}$

So, the matrix is $A = \begin{bmatrix} 3 & 0 \\ 0 & 3 \end{bmatrix}$.
If we multiply $A$ by $\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$:
$\begin{bmatrix} 3 & 0 \\ 0 & 3 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 3x_1 \\ 3x_2 \end{bmatrix} = 3\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 3\mathbf{x}$. Perfect! This matrix just scales everything uniformly.

**Example 2: Projection onto an Axis**
Let's say $T: \mathbb{R}^2 \to \mathbb{R}^2$ projects a vector onto the x-axis.
$T\left(\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}\right) = \begin{bmatrix} x_1 \\ 0 \end{bmatrix}$

Let's find its matrix:
$T(\mathbf{e}_1) = T\left(\begin{bmatrix} 1 \\ 0 \end{bmatrix}\right) = \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \mathbf{e}_1$
$T(\mathbf{e}_2) = T\left(\begin{bmatrix} 0 \\ 1 \end{bmatrix}\right) = \begin{bmatrix} 0 \\ 0 \end{bmatrix} = \mathbf{0}$

The matrix is $A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$.
Let's test it: $\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} x_1 \\ 0 \end{bmatrix}$. Correct!

**Visualizing the Effect:** Imagine drawing a unit square in the $xy$-plane with vertices at $(0,0), (1,0), (0,1), (1,1)$.
*   **Rotation by 90 degrees:** The square would become a square with vertices at $(0,0), (0,1), (-1,0), (-1,1)$. It's essentially rotated.
*   **Scaling by 3:** The square would expand into a larger square with vertices at $(0,0), (3,0), (0,3), (3,3)$.
*   **Projection onto x-axis:** The square would flatten into a line segment along the x-axis from $(0,0)$ to $(1,0)$. The y-coordinate of all points becomes zero.

These geometric interpretations are key to understanding how these matrix operations affect the "space" itself. This ties into **CO2: Understand the concepts of vector spaces and subspaces and to apply their properties** by showing how transformations alter these spaces.

**Analogy: A Map Transformation**
Think of a map of your city. A linear transformation is like creating a new map where distances are scaled uniformly, or directions are consistently rotated, or everything is projected onto a single road.
*   Scaling: Like creating a tourist map where everything is 1cm = 1km, then deciding to make it 1cm = 2km. All distances are doubled.
*   Rotation: Like reorienting the entire map so that "North" on the map points towards "East" in reality.
*   Projection: Like taking that map and only showing the main highway system, discarding all the side streets.

Gilbert Strang's "Linear Algebra and Learning from Data" often uses practical examples related to data manipulation, which is precisely what we're doing here. We're using matrices to transform data points (vectors) in meaningful ways.

### 4. Range and Null Space of a Linear Transformation (and their relation to the Matrix)

When we talk about a linear transformation $T: V \to W$ represented by a matrix $A$, two fundamental concepts emerge that tell us a lot about the transformation: the **Range** and the **Null Space**.

#### 4.1. The Null Space (Kernel)

The **null space** of $T$, denoted as $\text{Null}(T)$ or $\ker(T)$, is the set of all vectors $\mathbf{x}$ in the input space $V$ that are mapped to the zero vector in the output space $W$.
$\text{Null}(T) = \{\mathbf{x} \in V \mid T(\mathbf{x}) = \mathbf{0}\}$

If $T(\mathbf{x}) = A\mathbf{x}$, then finding the null space is equivalent to solving the homogeneous system of linear equations:
$A\mathbf{x} = \mathbf{0}$

The null space is always a subspace of the input vector space $V$.

**Why is the null space important?** It tells us which input vectors collapse to the origin. If the null space contains only the zero vector, it means the transformation is "one-to-one" in the sense that distinct non-zero vectors are mapped to distinct non-zero vectors. There's no "loss of information" in terms of distinct inputs mapping to the same output.

**Exam Tip:** You'll often be asked to find the null space of a transformation. This means setting up $A\mathbf{x} = \mathbf{0}$ and solving for $\mathbf{x}$, typically by row-reducing the augmented matrix $[A | \mathbf{0}]$. The solutions will be expressed in terms of free variables, which will form a basis for the null space.

**Example:** For our rotation matrix $A = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$, let's find the null space:
$A\mathbf{x} = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$
This gives us the system:
$-x_2 = 0 \implies x_2 = 0$
$x_1 = 0$
So, the only solution is $\mathbf{x} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$. The null space is $\{\mathbf{0}\}$. This means our rotation transformation is one-to-one; no non-zero vector is mapped to the zero vector.

#### 4.2. The Range (Image)

The **range** of $T$, denoted as $\text{Range}(T)$ or $\text{Im}(T)$, is the set of all possible output vectors in $W$ that can be obtained by applying $T$ to some vector in $V$.
$\text{Range}(T) = \{T(\mathbf{x}) \mid \mathbf{x} \in V\}$

If $T(\mathbf{x}) = A\mathbf{x}$, then the range of $T$ is the set of all possible products $A\mathbf{x}$. This is precisely the **column space** of the matrix $A$.
$\text{Range}(T) = \text{Col}(A)$

The range is always a subspace of the output vector space $W$.

**Why is the range important?** It tells us which vectors in the output space can actually be "reached" by the transformation. It defines the "output space" the transformation effectively operates within.

**Exam Tip:** Finding the range often involves finding a basis for the column space of $A$. You can do this by row-reducing $A$ to its Row Echelon Form (REF) or Reduced Row Echelon Form (RREF) and identifying the columns in the *original* matrix $A$ that correspond to the pivot columns in the REF/RREF. These original columns form a basis for the column space.

**Example:** For our rotation matrix $A = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$:
Row-reducing $A$:
$\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} \xrightarrow{R_1 \leftrightarrow R_2} \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \xrightarrow{-1 \cdot R_2} \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
The pivot columns are the first and second columns of the REF. In the original matrix $A$, the first column is $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$ and the second column is $\begin{bmatrix} -1 \\ 0 \end{bmatrix}$.
So, a basis for the range is $\left\{\begin{bmatrix} 0 \\ 1 \end{bmatrix}, \begin{bmatrix} -1 \\ 0 \end{bmatrix}\right\}$. Since these are two linearly independent vectors in $\mathbb{R}^2$, the range is all of $\mathbb{R}^2$. This means the rotation transformation can produce any vector in $\mathbb{R}^2$.

#### 4.3. Rank and Nullity: The Dimensions

The **rank** of a linear transformation $T$, denoted $\text{rank}(T)$, is the dimension of its range:
$\text{rank}(T) = \dim(\text{Range}(T))$

The **nullity** of a linear transformation $T$, denoted $\text{nullity}(T)$, is the dimension of its null space:
$\text{nullity}(T) = \dim(\text{Null}(T))$

**Connection to Matrix:** A crucial theorem, often called the **Rank-Nullity Theorem**, states that for a linear transformation $T: V \to W$ where $V$ is finite-dimensional, the following holds:

$\dim(V) = \text{rank}(T) + \text{nullity}(T)$

If $T$ is represented by an $m \times n$ matrix $A$, then $\dim(V) = n$. So, we have:

$n = \text{rank}(A) + \text{nullity}(A)$

where $\text{rank}(A)$ is the dimension of the column space of $A$ (number of pivots in REF/RREF) and $\text{nullity}(A)$ is the dimension of the null space of $A$ (number of free variables).

**Relating to Course Outcomes:** This is precisely what **CO4** is asking about: "...to find the rank and nullity of a linear transformation...". The Rank-Nullity Theorem is a cornerstone for understanding the structure and properties of these transformations and their matrix representations. It also directly connects to **CO1** when we talk about properties of matrices derived from linear systems.

**Example Revisited (Rotation):** For $A = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$:
Input space $\mathbb{R}^2$, so $n=2$.
$\text{rank}(A) = 2$ (basis has 2 vectors)
$\text{nullity}(A) = 0$ (null space only has $\mathbf{0}$, dimension 0)
Check the theorem: $2 = 2 + 0$. It holds!

**Example Revisited (Projection):** For $A = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$:
Input space $\mathbb{R}^2$, so $n=2$.
$\text{rank}(A) = 1$ (basis for range is $\left\{\begin{bmatrix} 1 \\ 0 \end{bmatrix}\right\}$, dimension 1)
For null space: $A\mathbf{x} = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$
This gives $x_1 = 0$. $x_2$ is a free variable. So $\mathbf{x} = \begin{bmatrix} 0 \\ x_2 \end{bmatrix} = x_2 \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.
The null space is spanned by $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$. So $\text{nullity}(A) = 1$.
Check the theorem: $2 = 1 + 1$. It holds!

**Important Note:** The rank of a linear transformation is also equal to the number of linearly independent columns of its matrix representation (which is the dimension of the column space). The nullity is the number of linearly independent vectors that span the null space.

### 5. Properties of Matrix-Represented Linear Transformations

Since linear transformations are represented by matrices, all the properties of matrix operations translate to properties of linear transformations.

*   **Composition of Transformations:** If $T_1: V \to W$ is represented by matrix $A_1$ and $T_2: W \to U$ is represented by matrix $A_2$, then the composite transformation $T_2 \circ T_1: V \to U$ is represented by the matrix product $A_2A_1$.
    $T_2(T_1(\mathbf{x})) = A_2(A_1\mathbf{x}) = (A_2A_1)\mathbf{x}$.
    This means matrix multiplication corresponds to the composition of functions, a fundamental concept in algebra.

*   **Inverse Transformation:** If a transformation $T: V \to V$ is represented by an invertible matrix $A$, then its inverse transformation $T^{-1}: V \to V$ is represented by $A^{-1}$.
    $T(T^{-1}(\mathbf{x})) = \mathbf{x}$ and $T^{-1}(T(\mathbf{x})) = \mathbf{x}$.
    This relates to **CO1: Solve system of linear equations, to evaluate eigen values and eigen vectors of matrices and to diagonalize matrices.** Invertibility of matrices is key to solving systems and understanding properties like determinants and eigenvalues.

*   **Identity Transformation:** The identity transformation $I(\mathbf{x}) = \mathbf{x}$ is represented by the identity matrix $I$.

**Thinking about Information Science:** In machine learning and data science, we constantly apply sequences of transformations. For example, in a neural network, each layer performs a linear transformation (followed by a non-linear activation). The entire network's linear component can be thought of as a large matrix multiplication, built up from the composition of simpler matrices. Understanding these compositions is vital for designing and analyzing these models. This is where reference books like "Mathematics for Machine Learning" shine, by connecting these abstract concepts to practical ML algorithms.

### 6. Linear Transformations and Systems of Linear Equations

We've already seen how the null space is related to solving $A\mathbf{x} = \mathbf{0}$. The general system of linear equations $A\mathbf{x} = \mathbf{b}$ can also be viewed through the lens of linear transformations.

For a transformation $T(\mathbf{x}) = A\mathbf{x}$, the equation $A\mathbf{x} = \mathbf{b}$ asks: "Is the vector $\mathbf{b}$ in the range of the transformation $T$?" If $\mathbf{b}$ is in the range of $T$, then there exists at least one vector $\mathbf{x}$ such that $T(\mathbf{x}) = \mathbf{b}$.

*   If $\mathbf{b}$ is in the range of $T$, a solution exists.
*   If the null space of $T$ contains only $\mathbf{0}$ (i.e., $\text{nullity}(T)=0$), then the solution (if it exists) is unique.
*   If the null space of $T$ contains non-zero vectors (i.e., $\text{nullity}(T)>0$), then if a solution exists, there are infinitely many solutions (these solutions are of the form $\mathbf{x}_p + \mathbf{x}_h$, where $\mathbf{x}_p$ is a particular solution and $\mathbf{x}_h$ is any vector in the null space).

This ties directly into **CO1: Solve system of linear equations...**. The existence and uniqueness of solutions to linear systems are fundamentally properties of the linear transformation (and its associated matrix) that maps the input space to the output space.

### Summary of Key Takeaways:

*   **Linear transformations** are functions between vector spaces that preserve vector addition and scalar multiplication.
*   Any linear transformation between finite-dimensional vector spaces can be uniquely represented by a **matrix**.
*   The matrix columns are the images of the basis vectors of the input space under the transformation.
*   For $T: \mathbb{R}^n \to \mathbb{R}^m$, the matrix $A$ is $m \times n$, and $T(\mathbf{x}) = A\mathbf{x}$.
*   The **null space** (kernel) of $T$ is the set of $\mathbf{x}$ such that $T(\mathbf{x})=\mathbf{0}$, equivalent to solving $A\mathbf{x}=\mathbf{0}$.
*   The **range** (image) of $T$ is the set of $T(\mathbf{x})$ for all $\mathbf{x}$, equivalent to the column space of $A$.
*   The **Rank-Nullity Theorem** states $\dim(V) = \text{rank}(T) + \text{nullity}(T)$, linking the dimensions of the input space, range, and null space.
*   Matrix operations (multiplication, inversion) correspond to the composition and inversion of linear transformations.

Understanding these connections is paramount. Matrices are not just abstract arrays of numbers; they are the concrete representations of powerful geometric and algebraic operations on vectors and vector spaces. This is what makes them indispensable in fields like computer graphics, signal processing, quantum mechanics, and, of course, information science and machine learning.

***

## Sample Questions and Answers

Here are a few questions to test your understanding and prepare for exams.

**1. Conceptual Question:**
Explain why the two properties of linearity ($T(\mathbf{u}+\mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ and $T(c\mathbf{v}) = cT(\mathbf{v})$) are essential for a matrix to represent a linear transformation.

**Answer:**
These properties ensure that the structure of the vector space is preserved.
*   The additivity property means that the transformation of a sum of vectors is the sum of the transformed vectors. This prevents transformations from "mixing" components in a way that breaks linear relationships.
*   The homogeneity property means that scaling a vector before transformation yields the same result as scaling the vector after transformation. This ensures that the magnitude of vectors is handled consistently.
Without these properties, a transformation might distort the vector space (e.g., by curving lines or distorting angles in non-uniform ways), and a simple matrix multiplication wouldn't be able to capture that behavior. Matrices, by their very nature, distribute over addition and factor out scalars, which directly mirrors these linearity conditions.

**2. Application Question:**
Let $T: \mathbb{R}^2 \to \mathbb{R}^3$ be a linear transformation defined by $T(\mathbf{x}) = A\mathbf{x}$, where
$A = \begin{bmatrix} 1 & 2 \\ 0 & 3 \\ 4 & 1 \end{bmatrix}$.
Find a basis for the range of $T$ and determine its dimension (the rank of $T$).

**Solution:**
The range of $T$ is the column space of the matrix $A$. To find a basis for the column space, we can row-reduce $A$ to its Row Echelon Form (REF) and identify the pivot columns. The corresponding columns in the *original* matrix $A$ form a basis for the column space.

Row-reduce $A$:
$\begin{bmatrix} 1 & 2 \\ 0 & 3 \\ 4 & 1 \end{bmatrix} \xrightarrow{R_3 \leftarrow R_3 - 4R_1} \begin{bmatrix} 1 & 2 \\ 0 & 3 \\ 0 & -7 \end{bmatrix} \xrightarrow{R_3 \leftarrow R_3 + \frac{7}{3}R_2} \begin{bmatrix} 1 & 2 \\ 0 & 3 \\ 0 & 0 \end{bmatrix}$
This is in REF. The pivot columns are the first and second columns (since they contain the leading entries 1 and 3).

The corresponding columns in the original matrix $A$ are:
Column 1: $\begin{bmatrix} 1 \\ 0 \\ 4 \end{bmatrix}$
Column 2: $\begin{bmatrix} 2 \\ 3 \\ 1 \end{bmatrix}$

These vectors form a basis for the range of $T$.
Basis for $\text{Range}(T) = \left\{ \begin{bmatrix} 1 \\ 0 \\ 4 \end{bmatrix}, \begin{bmatrix} 2 \\ 3 \\ 1 \end{bmatrix} \right\}$

The dimension of the range is the number of vectors in the basis, which is 2.
Therefore, $\text{rank}(T) = 2$.

**3. Exam-Oriented Question (Rank-Nullity):**
Consider a linear transformation $T: \mathbb{R}^4 \to \mathbb{R}^3$ represented by a $3 \times 4$ matrix $A$. If the nullity of $T$ is 1, what is the rank of $T$?

**Solution:**
We use the Rank-Nullity Theorem, which states that for a linear transformation $T: V \to W$, where $V$ is finite-dimensional, $\dim(V) = \text{rank}(T) + \text{nullity}(T)$.

In this case, the input space is $V = \mathbb{R}^4$, so $\dim(V) = 4$.
We are given that $\text{nullity}(T) = 1$.

Plugging these values into the theorem:
$4 = \text{rank}(T) + 1$

Solving for $\text{rank}(T)$:
$\text{rank}(T) = 4 - 1 = 3$.

So, the rank of the linear transformation $T$ is 3. This also means that the dimension of the range of $T$ is 3. Since the range is a subspace of $\mathbb{R}^3$ and has dimension 3, the range must be all of $\mathbb{R}^3$.
