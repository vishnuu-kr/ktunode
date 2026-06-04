---
title: "Change of basis in Rn : Transition Matrix (without proof)."
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 2: Vector Spaces"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d19"
status: "completed"
scrapedAt: "2026-05-20T16:34:40.180Z"
---
## MATHEMATICS FOR INFORMATION SCIENCE – 2

### Module 2: Vector Spaces

#### Topic: Change of Basis in $\mathbb{R}^n$: Transition Matrix (Without Proof)

Welcome back, everyone! In our journey through vector spaces, we've established the fundamental building blocks: vectors and bases. Today, we're going to tackle a crucial concept that allows us to see these vectors from different perspectives – the **Change of Basis**. Think of it like looking at the same object from different angles; the object itself doesn't change, but how we describe its position and orientation does. This is incredibly important in Information Science because different algorithms or data representations might naturally lend themselves to different coordinate systems.

Our primary goal today is to understand how to move between these different ways of describing vectors and to introduce the tool that makes this transition smooth: the **Transition Matrix**.

---

### 1. Why Change Our Basis?

Before we dive into the "how," let's understand the "why." Why would we ever want to move away from the standard basis we're so familiar with?

Imagine you're navigating a city. The most straightforward way to describe your location is using the standard grid system (North-South, East-West). This is our **standard basis**. However, if you're trying to find a specific shop in a bustling market, a local, more intuitive basis might be more helpful – say, "turn left at the fruit stall, walk past the spice vendor, and it's the third shop on your right." This "market basis" might be more efficient for navigating that specific area.

In mathematics and computer science, similar situations arise:

*   **Algorithm Efficiency:** Certain algorithms perform much better when the data is represented in a specific basis. For example, in image processing, the Discrete Cosine Transform (DCT), which is a change of basis, is used to compress images by concentrating the important information into fewer coefficients.
*   **Data Representation:** Sometimes, a dataset might be more naturally represented or analyzed in a basis that captures the underlying structure or relationships better than the standard basis. Think of principal component analysis (PCA), which finds new axes (a new basis) that best represent the variance in the data.
*   **Simplifying Problems:** Changing the basis can transform a complex problem into a simpler one. For instance, in linear algebra, diagonalizing a matrix (which is essentially changing to a basis of eigenvectors) simplifies operations like matrix exponentiation. This directly relates to **Course Outcome CO1** where we aim to diagonalize matrices.

So, changing the basis isn't just a theoretical exercise; it's a powerful tool for simplifying computation, improving efficiency, and extracting meaningful information from data.

---

### 2. Revisiting Bases and Coordinates

Let's quickly recap what a basis is. A **basis** for a vector space $V$ is a set of linearly independent vectors that span $V$. For $\mathbb{R}^n$, the **standard basis**, denoted by $S$, is usually:

$S = \{\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n\}$

where $\mathbf{e}_i$ is the vector with a 1 in the $i$-th position and 0s elsewhere. For example, in $\mathbb{R}^3$, $\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$, $\mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$, and $\mathbf{e}_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.

Any vector $\mathbf{v}$ in $\mathbb{R}^n$ can be uniquely expressed as a linear combination of the basis vectors. If $S = \{\mathbf{b}_1, \mathbf{b}_2, \ldots, \mathbf{b}_n\}$ is a basis, then $\mathbf{v}$ can be written as:

$\mathbf{v} = c_1 \mathbf{b}_1 + c_2 \mathbf{b}_2 + \ldots + c_n \mathbf{b}_n$

The scalars $(c_1, c_2, \ldots, c_n)$ are the **coordinates of $\mathbf{v}$ with respect to the basis $S$**. We often write this as $[\mathbf{v}]_S = \begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{pmatrix}$.

**Remember this:** The coordinates of a vector depend entirely on the basis chosen. A vector is an abstract entity; its coordinate representation is a description in a particular coordinate system.

---

### 3. The Core Idea: Connecting Two Bases

Now, suppose we have two different bases for $\mathbb{R}^n$:

*   The **standard basis** $S = \{\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n\}$.
*   Another **basis**, let's call it $B = \{\mathbf{b}_1, \mathbf{b}_2, \ldots, \mathbf{b}_n\}$.

We know how to represent any vector $\mathbf{v}$ in terms of the standard basis. This is just the vector itself! If $\mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}$, then its coordinates with respect to $S$ are simply $[\mathbf{v}]_S = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}$.

What we want to do is find the coordinates of $\mathbf{v}$ with respect to the basis $B$, which we'll denote as $[\mathbf{v}]_B = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$. This means we want to find $x_i$ such that:

$\mathbf{v} = x_1 \mathbf{b}_1 + x_2 \mathbf{b}_2 + \ldots + x_n \mathbf{b}_n$

This equation looks very much like a representation of $\mathbf{v}$ as a linear combination of the vectors in basis $B$.

---

### 4. Introducing the Transition Matrix

How do we find these coordinates $[\mathbf{v}]_B$? This is where the **Transition Matrix** comes in.

Let's think about the vectors in our new basis $B = \{\mathbf{b}_1, \mathbf{b}_2, \ldots, \mathbf{b}_n\}$. Since they are vectors in $\mathbb{R}^n$, we can express each $\mathbf{b}_j$ in terms of the **standard basis** $S$. Suppose:

$\mathbf{b}_1 = \begin{pmatrix} b_{11} \\ b_{21} \\ \vdots \\ b_{n1} \end{pmatrix}$, $\mathbf{b}_2 = \begin{pmatrix} b_{12} \\ b_{22} \\ \vdots \\ b_{n2} \end{pmatrix}$, $\ldots$, $\mathbf{b}_n = \begin{pmatrix} b_{1n} \\ b_{2n} \\ \vdots \\ b_{nn} \end{pmatrix}$

Now, let's write the vector $\mathbf{v}$ in terms of basis $B$:

$\mathbf{v} = x_1 \mathbf{b}_1 + x_2 \mathbf{b}_2 + \ldots + x_n \mathbf{b}_n$

We can express this entire equation in matrix form. Let $P_B$ be the matrix whose columns are the vectors of the basis $B$, expressed in the standard basis:

$P_B = \begin{pmatrix} \mathbf{b}_1 & \mathbf{b}_2 & \cdots & \mathbf{b}_n \end{pmatrix} = \begin{pmatrix} b_{11} & b_{12} & \cdots & b_{1n} \\ b_{21} & b_{22} & \cdots & b_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ b_{n1} & b_{n2} & \cdots & b_{nn} \end{pmatrix}$

And let $[\mathbf{v}]_B = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$ be the coordinate vector of $\mathbf{v}$ with respect to basis $B$. Then, the equation $\mathbf{v} = x_1 \mathbf{b}_1 + x_2 \mathbf{b}_2 + \ldots + x_n \mathbf{b}_n$ can be written compactly as:

$\mathbf{v} = P_B [\mathbf{v}]_B$

**This is a crucial relationship!**

Since $\mathbf{v}$ is a vector in $\mathbb{R}^n$, its representation in the standard basis is just $\mathbf{v}$ itself. So, if $[\mathbf{v}]_S = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}$, then $\mathbf{v} = v_1 \mathbf{e}_1 + v_2 \mathbf{e}_2 + \ldots + v_n \mathbf{e}_n$.

Therefore, we have:

$[\mathbf{v}]_S = P_B [\mathbf{v}]_B$

The matrix $P_B$ is precisely the **transition matrix from basis $B$ to the standard basis $S$**.

**Key Insight:** The columns of the transition matrix from a basis $B$ to the standard basis $S$ are simply the vectors of basis $B$, written in terms of the standard basis.

This aligns with **Course Outcome CO2**, as we are understanding how to represent vectors in different bases, which are fundamental to the concept of vector spaces.

---

### 5. Example: Finding Coordinates in a New Basis

Let's make this concrete with an example. Suppose in $\mathbb{R}^2$, we have the standard basis $S = \{\mathbf{e}_1, \mathbf{e}_2\}$ and another basis $B = \{\mathbf{b}_1, \mathbf{b}_2\}$ where:

$\mathbf{b}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $\mathbf{b}_2 = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$

We want to find the coordinates of the vector $\mathbf{v} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$ with respect to the basis $B$. That is, we want to find $[\mathbf{v}]_B$.

First, let's construct the transition matrix $P_B$ from basis $B$ to the standard basis $S$. The columns of $P_B$ are the vectors of $B$:

$P_B = \begin{pmatrix} \mathbf{b}_1 & \mathbf{b}_2 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$

Now, we use the relationship $[\mathbf{v}]_S = P_B [\mathbf{v}]_B$. In this case, $[\mathbf{v}]_S = \mathbf{v} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$. So, we have:

$\begin{pmatrix} 5 \\ 6 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} [\mathbf{v}]_B$

To find $[\mathbf{v}]_B$, we need to solve this system of linear equations. We can do this by augmenting $P_B$ with $[\mathbf{v}]_S$ and row-reducing:

$\left[ \begin{array}{cc|c} 1 & 3 & 5 \\ 2 & 4 & 6 \end{array} \right]$

Subtract 2 times Row 1 from Row 2 ($R_2 \leftarrow R_2 - 2R_1$):

$\left[ \begin{array}{cc|c} 1 & 3 & 5 \\ 0 & -2 & -4 \end{array} \right]$

Divide Row 2 by -2 ($R_2 \leftarrow R_2 / -2$):

$\left[ \begin{array}{cc|c} 1 & 3 & 5 \\ 0 & 1 & 2 \end{array} \right]$

Subtract 3 times Row 2 from Row 1 ($R_1 \leftarrow R_1 - 3R_2$):

$\left[ \begin{array}{cc|c} 1 & 0 & -1 \\ 0 & 1 & 2 \end{array} \right]$

So, we find that $[\mathbf{v}]_B = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$.

**What does this mean?** It means that the vector $\mathbf{v} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$ can be written as a linear combination of the vectors in basis $B$ as:

$\mathbf{v} = -1 \cdot \mathbf{b}_1 + 2 \cdot \mathbf{b}_2$
$\mathbf{v} = -1 \begin{pmatrix} 1 \\ 2 \end{pmatrix} + 2 \begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} -1 \\ -2 \end{pmatrix} + \begin{pmatrix} 6 \\ 8 \end{pmatrix} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$

And indeed, it works out! This demonstrates how the transition matrix helps us express a vector in terms of a new basis. This is a core application of concepts related to solving linear systems and understanding vector representations, directly linking to **Course Outcome CO1** and **CO2**.

---

### 6. Transitioning Between Two Arbitrary Bases

What if we need to go from one arbitrary basis to another, without necessarily passing through the standard basis? Suppose we have basis $B = \{\mathbf{b}_1, \ldots, \mathbf{b}_n\}$ and basis $C = \{\mathbf{c}_1, \ldots, \mathbf{c}_n\}$. We want to find the coordinates of a vector $\mathbf{v}$ in basis $C$, given its coordinates in basis $B$. That is, we want to find $[\mathbf{v}]_C$ given $[\mathbf{v}]_B$.

We know:
1.  $\mathbf{v} = P_B [\mathbf{v}]_B$ (expressing $\mathbf{v}$ using basis $B$ and its coordinates)
2.  $\mathbf{v} = P_C [\mathbf{v}]_C$ (expressing $\mathbf{v}$ using basis $C$ and its coordinates)

Here, $P_B$ is the matrix whose columns are the vectors of $B$ in the standard basis, and $P_C$ is the matrix whose columns are the vectors of $C$ in the standard basis.

Equating the two expressions for $\mathbf{v}$:

$P_B [\mathbf{v}]_B = P_C [\mathbf{v}]_C$

Now, we want to solve for $[\mathbf{v}]_C$. Since $P_C$ is a matrix whose columns form a basis, it's invertible. We can multiply both sides by $P_C^{-1}$:

$P_C^{-1} P_B [\mathbf{v}]_B = P_C^{-1} P_C [\mathbf{v}]_C$
$P_C^{-1} P_B [\mathbf{v}]_B = I [\mathbf{v}]_C$
$P_C^{-1} P_B [\mathbf{v}]_B = [\mathbf{v}]_C$

So, the matrix $P_C^{-1} P_B$ is the **transition matrix from basis $B$ to basis $C$**. Let's call this $P_{B \to C}$.

$P_{B \to C} = P_C^{-1} P_B$

**Think of it this way:** To go from basis $B$ to basis $C$, you first go from $B$ to the standard basis $S$ (using $P_B$) and then from the standard basis $S$ to $C$ (which is the inverse operation of going from $C$ to $S$, i.e., using $P_C^{-1}$).

This concept is fundamental to understanding how linear transformations work across different bases, linking to **Course Outcome CO4** where we deal with matrices of linear transformations. If we have a linear transformation $T: V \to W$, its matrix representation depends on the chosen bases for $V$ and $W$. Change of basis allows us to find that matrix representation in any desired basis.

---

### 7. Example: Transition Between Two Arbitrary Bases

Let's extend our previous example. We have basis $B = \{\mathbf{b}_1, \mathbf{b}_2\}$ where $\mathbf{b}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $\mathbf{b}_2 = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$.
Let's introduce a new basis $C = \{\mathbf{c}_1, \mathbf{c}_2\}$ where:

$\mathbf{c}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $\mathbf{c}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$

We found earlier that for $\mathbf{v} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$, we have $[\mathbf{v}]_B = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$.
Now, we want to find $[\mathbf{v}]_C$.

First, let's construct $P_B$ and $P_C$ (transition matrices from $B$ and $C$ to $S$, respectively):

$P_B = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$
$P_C = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$

Now, we need to find the inverse of $P_C$. For a 2x2 matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the inverse is $\frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.

For $P_C = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, $ad-bc = (1)(-1) - (1)(1) = -1 - 1 = -2$.
So, $P_C^{-1} = \frac{1}{-2} \begin{pmatrix} -1 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix}$.

Now, we compute the transition matrix from $B$ to $C$:

$P_{B \to C} = P_C^{-1} P_B = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix} \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$

Let's perform the matrix multiplication:

$P_{B \to C} = \begin{pmatrix} (1/2)(1) + (1/2)(2) & (1/2)(3) + (1/2)(4) \\ (1/2)(1) + (-1/2)(2) & (1/2)(3) + (-1/2)(4) \end{pmatrix}$
$P_{B \to C} = \begin{pmatrix} 1/2 + 1 & 3/2 + 2 \\ 1/2 - 1 & 3/2 - 2 \end{pmatrix}$
$P_{B \to C} = \begin{pmatrix} 3/2 & 7/2 \\ -1/2 & -1/2 \end{pmatrix}$

Finally, we find $[\mathbf{v}]_C$ by multiplying this transition matrix by $[\mathbf{v}]_B$:

$[\mathbf{v}]_C = P_{B \to C} [\mathbf{v}]_B = \begin{pmatrix} 3/2 & 7/2 \\ -1/2 & -1/2 \end{pmatrix} \begin{pmatrix} -1 \\ 2 \end{pmatrix}$

$[\mathbf{v}]_C = \begin{pmatrix} (3/2)(-1) + (7/2)(2) \\ (-1/2)(-1) + (-1/2)(2) \end{pmatrix}$
$[\mathbf{v}]_C = \begin{pmatrix} -3/2 + 7 \\ 1/2 - 1 \end{pmatrix}$
$[\mathbf{v}]_C = \begin{pmatrix} 4/2 \\ -1/2 \end{pmatrix} = \begin{pmatrix} 2 \\ -1/2 \end{pmatrix}$

So, the coordinates of $\mathbf{v} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$ with respect to basis $C$ are $(2, -1/2)$. Let's check this:

$2 \cdot \mathbf{c}_1 - \frac{1}{2} \cdot \mathbf{c}_2 = 2 \begin{pmatrix} 1 \\ 1 \end{pmatrix} - \frac{1}{2} \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 2 \\ 2 \end{pmatrix} - \begin{pmatrix} 1/2 \\ -1/2 \end{pmatrix} = \begin{pmatrix} 2 - 1/2 \\ 2 - (-1/2) \end{pmatrix} = \begin{pmatrix} 3/2 \\ 5/2 \end{pmatrix}$

Uh oh! Something is not right. Let's re-check the matrix multiplication for $P_{B \to C}$.

$P_{B \to C} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix} \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 1/2 + 1 & 3/2 + 2 \\ 1/2 - 1 & 3/2 - 2 \end{pmatrix} = \begin{pmatrix} 3/2 & 7/2 \\ -1/2 & -1/2 \end{pmatrix}$. This seems correct.

Let's re-check the final multiplication:
$[\mathbf{v}]_C = P_{B \to C} [\mathbf{v}]_B = \begin{pmatrix} 3/2 & 7/2 \\ -1/2 & -1/2 \end{pmatrix} \begin{pmatrix} -1 \\ 2 \end{pmatrix} = \begin{pmatrix} (3/2)(-1) + (7/2)(2) \\ (-1/2)(-1) + (-1/2)(2) \end{pmatrix} = \begin{pmatrix} -3/2 + 7 \\ 1/2 - 1 \end{pmatrix} = \begin{pmatrix} 11/2 \\ -1/2 \end{pmatrix}$.

Let's try this calculation again:
$(3/2)(-1) + (7/2)(2) = -3/2 + 14/2 = 11/2$.
$(-1/2)(-1) + (-1/2)(2) = 1/2 - 1 = -1/2$.

So, $[\mathbf{v}]_C = \begin{pmatrix} 11/2 \\ -1/2 \end{pmatrix}$.

Let's check this result:
$11/2 \cdot \mathbf{c}_1 - 1/2 \cdot \mathbf{c}_2 = \frac{11}{2} \begin{pmatrix} 1 \\ 1 \end{pmatrix} - \frac{1}{2} \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 11/2 \\ 11/2 \end{pmatrix} - \begin{pmatrix} 1/2 \\ -1/2 \end{pmatrix} = \begin{pmatrix} 11/2 - 1/2 \\ 11/2 - (-1/2) \end{pmatrix} = \begin{pmatrix} 10/2 \\ 12/2 \end{pmatrix} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$.

Yes, this is correct! My previous calculation had an arithmetic error. It's very easy to make these mistakes, especially with fractions. That's why checking your work is paramount, and understanding the underlying logic helps catch errors.

This exercise clearly shows how to move between different bases using the composition of transition matrices. It's a fundamental technique for understanding how vector representations change under different coordinate systems.

---

### 8. The Inverse Transition Matrix

We found that $P_{B \to C} = P_C^{-1} P_B$. What about the transition matrix from $C$ to $B$, denoted $P_{C \to B}$?

Using the same logic, $P_{C \to B} = P_B^{-1} P_C$.

What is the relationship between $P_{B \to C}$ and $P_{C \to B}$?
$P_{C \to B} = P_B^{-1} P_C$.
Let's see if $P_{C \to B} = (P_{B \to C})^{-1}$.

$(P_{B \to C})^{-1} = (P_C^{-1} P_B)^{-1} = P_B^{-1} (P_C^{-1})^{-1} = P_B^{-1} P_C$.
Yes, they are indeed inverses of each other. This makes perfect sense: if you can go from basis $B$ to basis $C$, you should be able to reverse that process to go from $C$ back to $B$.

**Key Takeaway:** The transition matrix from basis $C$ to basis $B$ is the inverse of the transition matrix from basis $B$ to basis $C$. This is a direct consequence of the invertibility of basis matrices and the properties of matrix inverses.

---

### 9. Importance in Linear Transformations and Eigenvalues (Connecting to CO1 & CO4)

The concept of changing basis is deeply intertwined with understanding linear transformations and simplifying matrix operations like diagonalization.

*   **Linear Transformations (CO4):** Suppose we have a linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$. If we know the matrix representation of $T$ with respect to the standard bases, say $A$, we can find the matrix representation of $T$ with respect to new bases $B$ in $\mathbb{R}^n$ and $C$ in $\mathbb{R}^m$. Let $[\mathbf{v}]_B$ be the coordinates of a vector $\mathbf{v}$ in basis $B$, and $[\mathbf{v}]_C$ be its coordinates in basis $C$. The transformed vector $T(\mathbf{v})$ will have coordinates in the standard basis $S_m$ of $\mathbb{R}^m$ as $A[\mathbf{v}]_S = A P_B [\mathbf{v}]_B$. If we want the coordinates in basis $C$ of $\mathbb{R}^m$, we'd use $P_C^{-1} (A P_B) [\mathbf{v}]_B$. The matrix $P_C^{-1} A P_B$ is the matrix representation of $T$ with respect to bases $B$ and $C$. This is a core aspect of analyzing linear transformations in different settings.

*   **Diagonalization (CO1):** As mentioned earlier, finding the eigenvalues and eigenvectors of a matrix $A$ allows us to change to a basis of eigenvectors. If $P$ is the matrix whose columns are the eigenvectors of $A$, then $P^{-1}AP = D$, where $D$ is a diagonal matrix containing the eigenvalues. This is a change of basis! In the basis of eigenvectors, the linear transformation represented by $A$ becomes a simple scaling in each direction (corresponding to the eigenvalues). This simplifies many computations, like calculating $A^k$ or $e^{At}$. The transition matrix here is formed by eigenvectors, which are fundamental to understanding matrix diagonalization.

---

### 10. Summary and Key Takeaways

Let's crystallize the main points from our discussion:

*   **Why Change Basis?** To simplify computations, improve algorithm efficiency, and better represent data based on underlying structures.
*   **Transition Matrix to Standard Basis:** If $B = \{\mathbf{b}_1, \ldots, \mathbf{b}_n\}$ is a basis, the transition matrix from $B$ to the standard basis $S$, denoted $P_B$, has the vectors of $B$ as its columns. The fundamental relationship is $[\mathbf{v}]_S = P_B [\mathbf{v}]_B$.
*   **Transition Matrix Between Arbitrary Bases:** The transition matrix from basis $B$ to basis $C$ is $P_{B \to C} = P_C^{-1} P_B$, where $P_B$ and $P_C$ are the transition matrices from $B$ and $C$ to the standard basis, respectively.
*   **Inverse Transition:** $P_{C \to B} = (P_{B \to C})^{-1} = P_B^{-1} P_C$.
*   **Connection to Transformations:** Change of basis is crucial for understanding how linear transformations are represented in different coordinate systems, a key aspect of **CO4**. It's also fundamental to simplifying matrix operations like diagonalization, directly impacting **CO1**.

**Remember this:** The columns of the transition matrix from basis $B$ to basis $S$ are simply the basis vectors of $B$. The direction of the transition matters! $P_{B \to C}$ is not the same as $P_{C \to B}$.

---

### Sample Questions and Answers

**Q1. Conceptual Understanding:** If $\mathbf{v}$ is a vector in $\mathbb{R}^3$ and $B = \{\mathbf{b}_1, \mathbf{b}_2, \mathbf{b}_3\}$ is a basis for $\mathbb{R}^3$, what does it mean when we say $[\mathbf{v}]_B = \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$?

**Answer:** This means that the vector $\mathbf{v}$ can be expressed as a linear combination of the basis vectors in $B$ where the coefficients (coordinates) are $2$, $-1$, and $3$. Specifically, $\mathbf{v} = 2\mathbf{b}_1 - 1\mathbf{b}_2 + 3\mathbf{b}_3$. This highlights how a vector can be described using different sets of basis vectors, directly related to **CO2**.

---

**Q2. Calculation:** Let $B = \{\begin{pmatrix} 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \end{pmatrix}\}$ be a basis for $\mathbb{R}^2$. Find the transition matrix from basis $B$ to the standard basis $S$.

**Answer:** The transition matrix from basis $B$ to the standard basis $S$, denoted $P_B$, has the vectors of basis $B$ as its columns.
$P_B = \begin{pmatrix} \mathbf{b}_1 & \mathbf{b}_2 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$.
This matrix allows us to convert coordinates from basis $B$ to the standard basis. If $[\mathbf{v}]_B = \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}$, then $\mathbf{v} = P_B [\mathbf{v}]_B$.

---

**Q3. Application:** Given the basis $B = \{\begin{pmatrix} 1 \\ 2 \end{pmatrix}, \begin{pmatrix} 3 \\ 4 \end{pmatrix}\}$ and $C = \{\begin{pmatrix} 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ -1 \end{pmatrix}\}$. Find the transition matrix from basis $C$ to basis $B$.

**Answer:**
First, we need the transition matrices from $B$ to $S$ ($P_B$) and from $C$ to $S$ ($P_C$):
$P_B = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$
$P_C = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$

We need to find $P_{C \to B}$. The formula is $P_{C \to B} = P_B^{-1} P_C$.
Let's find $P_B^{-1}$. The determinant of $P_B$ is $(1)(4) - (3)(2) = 4 - 6 = -2$.
$P_B^{-1} = \frac{1}{-2} \begin{pmatrix} 4 & -3 \\ -2 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 3/2 \\ 1 & -1/2 \end{pmatrix}$.

Now, calculate $P_{C \to B} = P_B^{-1} P_C$:
$P_{C \to B} = \begin{pmatrix} -2 & 3/2 \\ 1 & -1/2 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
$P_{C \to B} = \begin{pmatrix} (-2)(1) + (3/2)(1) & (-2)(1) + (3/2)(-1) \\ (1)(1) + (-1/2)(1) & (1)(1) + (-1/2)(-1) \end{pmatrix}$
$P_{C \to B} = \begin{pmatrix} -2 + 3/2 & -2 - 3/2 \\ 1 - 1/2 & 1 + 1/2 \end{pmatrix}$
$P_{C \to B} = \begin{pmatrix} -1/2 & -7/2 \\ 1/2 & 3/2 \end{pmatrix}$.

This matrix allows us to convert coordinates from basis $C$ to basis $B$. For example, if $[\mathbf{v}]_C = \begin{pmatrix} 2 \\ -1/2 \end{pmatrix}$ (as calculated in our example for $\mathbf{v} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$), then $[\mathbf{v}]_B = P_{C \to B} [\mathbf{v}]_C = \begin{pmatrix} -1/2 & -7/2 \\ 1/2 & 3/2 \end{pmatrix} \begin{pmatrix} 2 \\ -1/2 \end{pmatrix} = \begin{pmatrix} (-1/2)(2) + (-7/2)(-1/2) \\ (1/2)(2) + (3/2)(-1/2) \end{pmatrix} = \begin{pmatrix} -1 + 7/4 \\ 1 - 3/4 \end{pmatrix} = \begin{pmatrix} 3/4 \\ 1/4 \end{pmatrix}$.
Wait, there was a mistake in my previous calculation of $[\mathbf{v}]_B$. Let's re-check that.
From earlier, we found $[\mathbf{v}]_B = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$ for $\mathbf{v} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$.

Let's use that $[\mathbf{v}]_B = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$ and the calculated $P_{C \to B} = \begin{pmatrix} -1/2 & -7/2 \\ 1/2 & 3/2 \end{pmatrix}$.
Then $[\mathbf{v}]_C = P_{B \to C} [\mathbf{v}]_B$.
We had $P_{B \to C} = \begin{pmatrix} 3/2 & 7/2 \\ -1/2 & -1/2 \end{pmatrix}$.
And $[\mathbf{v}]_B = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$.
So $[\mathbf{v}]_C = \begin{pmatrix} 3/2 & 7/2 \\ -1/2 & -1/2 \end{pmatrix} \begin{pmatrix} -1 \\ 2 \end{pmatrix} = \begin{pmatrix} -3/2 + 7 \\ 1/2 - 1 \end{pmatrix} = \begin{pmatrix} 11/2 \\ -1/2 \end{pmatrix}$. This matches our previous calculation for $[\mathbf{v}]_C$.

Now, let's verify $P_{C \to B} [\mathbf{v}]_C = [\mathbf{v}]_B$.
$P_{C \to B} [\mathbf{v}]_C = \begin{pmatrix} -1/2 & -7/2 \\ 1/2 & 3/2 \end{pmatrix} \begin{pmatrix} 11/2 \\ -1/2 \end{pmatrix} = \begin{pmatrix} (-1/2)(11/2) + (-7/2)(-1/2) \\ (1/2)(11/2) + (3/2)(-1/2) \end{pmatrix} = \begin{pmatrix} -11/4 + 7/4 \\ 11/4 - 3/4 \end{pmatrix} = \begin{pmatrix} -4/4 \\ 8/4 \end{pmatrix} = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$.
This matches our known $[\mathbf{v}]_B$. The calculations are now consistent and verified. This demonstrates the invertibility and consistency of transition matrices. This type of question tests both understanding of the concept and computational accuracy, relevant for exam preparation.
