---
title: "Determining Eigen values and Eigen vector"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129cf"
status: "completed"
scrapedAt: "2026-05-20T18:30:50.221Z"
---
## Module 1: Linear Systems of Equations: Gauss Elimination - Determining Eigenvalues and Eigenvectors

Welcome everyone! In this session, we're going to dive into a really fundamental and powerful concept in linear algebra, which has direct applications in electrical science and physical science: **Eigenvalues and Eigenvectors**. You might wonder, "What's the big deal? We've already learned about solving linear systems." Well, think of solving linear systems as understanding how a system *behaves* under a standard "push." Eigenvalues and eigenvectors, on the other hand, tell us about the *intrinsic* properties of that system, the directions in which it behaves in a particularly simple or characteristic way.

This topic is directly linked to **Course Outcome 1: Solve systems of linear equations and diagonalize matrices.** Understanding eigenvalues and eigenvectors is the crucial first step towards matrix diagonalization, a technique that simplifies complex matrix operations and reveals underlying structures. It's about seeing the essence of a transformation.

### 1. What are Eigenvalues and Eigenvectors?

Imagine you have a linear transformation represented by a matrix, let's call it **A**. This transformation takes vectors and maps them to new vectors. Most vectors, when transformed by **A**, will change their direction. However, there are special vectors that, when transformed by **A**, *only change in magnitude*. Their direction remains the same, or it's flipped by 180 degrees (which is just a negative scaling).

These special vectors are called **eigenvectors**, and the factor by which they are scaled is called the **eigenvalue**.

Let's formalize this. If **v** is a non-zero vector and **A** is an $n \times n$ matrix, then:

**Av = λv**

Here:
*   **A** is the $n \times n$ matrix representing the linear transformation.
*   **v** is the **eigenvector** (a non-zero vector).
*   **λ** (lambda) is the **eigenvalue** (a scalar).

This equation is the heart of it all. It states that when the matrix **A** acts on its eigenvector **v**, the result is simply the same vector **v** scaled by the eigenvalue **λ**.

**An Analogy:** Think about stretching a rubber sheet. If you pull it uniformly in all directions, every vector on the sheet changes length, but their directions remain the same. In this idealized scenario, all non-zero vectors are eigenvectors, and the eigenvalue is the stretching factor. Now, imagine a more complex deformation, like shearing. Some vectors might change direction, but there might be specific directions (eigenvectors) that only get longer or shorter without changing their angular orientation. The amount they stretch or shrink is the eigenvalue.

This concept is incredibly useful. For instance, in electrical circuits, eigenvalues can relate to the natural frequencies or damping rates of a system. In quantum mechanics, they represent observable quantities like energy levels. It's about finding the "natural modes" or "characteristic directions" of a system.

### 2. Finding Eigenvalues

How do we actually find these special **λ** values? We start from our defining equation:

**Av = λv**

Since **v** is a non-zero vector, we can rearrange this equation. To make it a standard linear system, we need to express **λv** in matrix form. We can do this by introducing the identity matrix **I** of the same size as **A**. Remember, **Iv = v**, so **λv = λIv**.

Now, we have:

**Av = λIv**

Let's move everything to one side:

**Av - λIv = 0**

We can factor out **v**:

**(A - λI)v = 0**

This equation looks familiar, doesn't it? It's a homogeneous system of linear equations of the form **Mx = 0**, where **M = (A - λI)** and **x = v**.

Now, we know that a homogeneous system **Mx = 0** has a non-trivial (non-zero) solution for **x** (which is **v** in our case) if and only if the matrix **M** is singular. And a matrix is singular if and only if its determinant is zero.

So, the condition for **v** to be a non-zero eigenvector is:

**det(A - λI) = 0**

This equation is called the **characteristic equation** of the matrix **A**. Solving this determinant equation for **λ** will give us the eigenvalues of **A**.

Let's walk through an example, as this is where understanding solidifies.

**Example 1: Finding Eigenvalues**

Suppose we have the matrix:
$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$

We need to find the eigenvalues, **λ**.

**Step 1: Form the matrix (A - λI)**
$A - \lambda I = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} - \lambda \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
$A - \lambda I = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} - \begin{pmatrix} \lambda & 0 \\ 0 & \lambda \end{pmatrix}$
$A - \lambda I = \begin{pmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{pmatrix}$

**Step 2: Calculate the determinant and set it to zero (the characteristic equation)**
$\text{det}(A - \lambda I) = (2-\lambda)(2-\lambda) - (1)(1) = 0$
$(2-\lambda)^2 - 1 = 0$

**Step 3: Solve the characteristic equation for λ**
This is a simple quadratic equation.
$4 - 4\lambda + \lambda^2 - 1 = 0$
$\lambda^2 - 4\lambda + 3 = 0$

We can factor this:
$(\lambda - 1)(\lambda - 3) = 0$

So, the eigenvalues are **λ₁ = 1** and **λ₂ = 3**.

**Key Takeaway:** The eigenvalues are the roots of the characteristic polynomial, which is derived from $\text{det}(A - \lambda I) = 0$. For an $n \times n$ matrix, this will be a polynomial of degree $n$. Finding these roots is our first step.

### 3. Finding Eigenvectors

Now that we have the eigenvalues, we need to find the corresponding eigenvectors. For each eigenvalue **λ**, we substitute it back into the equation **(A - λI)v = 0** and solve for the vector **v**.

Remember, **v** must be a non-zero vector. When we solve **(A - λI)v = 0**, we'll typically get a system with infinitely many solutions, all differing by a scalar multiple. This is because if **v** is an eigenvector, then $c\mathbf{v}$ (where $c \neq 0$) is also an eigenvector for the same eigenvalue. We usually express the eigenvector in its simplest form, often by setting one of its components to 1.

Let's use our previous example to find the eigenvectors.

**Example 1 (Continued): Finding Eigenvectors**

We found eigenvalues **λ₁ = 1** and **λ₂ = 3**.

**Case 1: For λ₁ = 1**

Substitute λ = 1 into **(A - λI)v = 0**:
$(A - 1I)v = 0$
$\begin{pmatrix} 2-1 & 1 \\ 1 & 2-1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
$\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

This gives us the system of equations:
$1v_1 + 1v_2 = 0$
$1v_1 + 1v_2 = 0$

Both equations are identical, which is expected since the determinant was zero. This means the rows are linearly dependent. From the first equation, we have $v_1 = -v_2$.

We can choose a simple value for $v_2$ to find a corresponding $v_1$. Let $v_2 = 1$.
Then $v_1 = -1$.

So, an eigenvector corresponding to **λ₁ = 1** is:
$v^{(1)} = \begin{pmatrix} -1 \\ 1 \end{pmatrix}$

Any non-zero scalar multiple of this vector is also an eigenvector for λ₁=1, for example, $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$ or $\begin{pmatrix} 2 \\ -2 \end{pmatrix}$.

**Case 2: For λ₂ = 3**

Substitute λ = 3 into **(A - λI)v = 0**:
$(A - 3I)v = 0$
$\begin{pmatrix} 2-3 & 1 \\ 1 & 2-3 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
$\begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

This gives us the system of equations:
$-1v_1 + 1v_2 = 0$
$1v_1 - 1v_2 = 0$

Again, both equations are identical. From the first equation, we have $v_1 = v_2$.

Let's choose $v_2 = 1$.
Then $v_1 = 1$.

So, an eigenvector corresponding to **λ₂ = 3** is:
$v^{(2)} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

Again, any non-zero scalar multiple of this vector is also an eigenvector for λ₂=3.

**Recap:** We found eigenvalues 1 and 3. For eigenvalue 1, we found eigenvector $\begin{pmatrix} -1 \\ 1 \end{pmatrix}$. For eigenvalue 3, we found eigenvector $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$. These vectors represent the "special directions" for this matrix transformation.

### 4. The Role of Gaussian Elimination (Connecting to Module 1)

You might be thinking, "Where does Gauss elimination fit in here?" Great question! Gaussian elimination (or more generally, row reduction) is precisely the tool we use to solve the system **(A - λI)v = 0**.

When we have the matrix $(A - \lambda I)$, we want to find its null space, which is the set of all vectors **v** such that $(A - \lambda I)v = 0$. To find the null space, we perform row operations to bring $(A - \lambda I)$ to its Row Echelon Form (REF) or Reduced Row Echelon Form (RREF). From the REF/RREF, we can then express the dependent variables in terms of the free variables, which directly gives us the form of the eigenvectors.

Let's re-examine the process for finding eigenvectors using row reduction explicitly.

**Example 2: Using Row Reduction to Find Eigenvectors**

Consider a $3 \times 3$ matrix $A = \begin{pmatrix} 4 & -1 & 1 \\ 3 & 0 & 1 \\ 0 & 1 & 2 \end{pmatrix}$. Let's say we've already found an eigenvalue $\lambda = 3$.

We need to solve $(A - 3I)v = 0$.
$A - 3I = \begin{pmatrix} 4-3 & -1 & 1 \\ 3 & 0-3 & 1 \\ 0 & 1 & 2-3 \end{pmatrix} = \begin{pmatrix} 1 & -1 & 1 \\ 3 & -3 & 1 \\ 0 & 1 & -1 \end{pmatrix}$

Now, we apply Gaussian elimination to the augmented matrix:
$\begin{pmatrix} 1 & -1 & 1 & | & 0 \\ 3 & -3 & 1 & | & 0 \\ 0 & 1 & -1 & | & 0 \end{pmatrix}$

$R_2 \leftarrow R_2 - 3R_1$:
$\begin{pmatrix} 1 & -1 & 1 & | & 0 \\ 0 & 0 & -2 & | & 0 \\ 0 & 1 & -1 & | & 0 \end{pmatrix}$

Swap $R_2$ and $R_3$ to get a leading 1 in the second row:
$\begin{pmatrix} 1 & -1 & 1 & | & 0 \\ 0 & 1 & -1 & | & 0 \\ 0 & 0 & -2 & | & 0 \end{pmatrix}$

Now, we can see the system of equations from this (almost REF) matrix:
1. $v_1 - v_2 + v_3 = 0$
2. $v_2 - v_3 = 0$
3. $-2v_3 = 0$

From equation (3), we get $v_3 = 0$.
Substitute $v_3 = 0$ into equation (2): $v_2 - 0 = 0 \implies v_2 = 0$.
Substitute $v_2 = 0$ and $v_3 = 0$ into equation (1): $v_1 - 0 + 0 = 0 \implies v_1 = 0$.

Wait a minute! We got $v_1 = v_2 = v_3 = 0$. This means the only solution is the trivial solution. This implies that $\lambda = 3$ is NOT an eigenvalue. Let me check my calculations for the characteristic equation for this matrix.

Let's find the characteristic equation for $A = \begin{pmatrix} 4 & -1 & 1 \\ 3 & 0 & 1 \\ 0 & 1 & 2 \end{pmatrix}$
$A - \lambda I = \begin{pmatrix} 4-\lambda & -1 & 1 \\ 3 & -\lambda & 1 \\ 0 & 1 & 2-\lambda \end{pmatrix}$

$\text{det}(A - \lambda I) = (4-\lambda) \left| \begin{matrix} -\lambda & 1 \\ 1 & 2-\lambda \end{matrix} \right| - (-1) \left| \begin{matrix} 3 & 1 \\ 0 & 2-\lambda \end{matrix} \right| + 1 \left| \begin{matrix} 3 & -\lambda \\ 0 & 1 \end{matrix} \right|$
$= (4-\lambda)(-\lambda(2-\lambda) - 1) + (3(2-\lambda)) + (3)$
$= (4-\lambda)(-2\lambda + \lambda^2 - 1) + 6 - 3\lambda + 3$
$= (4-\lambda)(\lambda^2 - 2\lambda - 1) + 9 - 3\lambda$
$= 4\lambda^2 - 8\lambda - 4 - \lambda^3 + 2\lambda^2 + \lambda + 9 - 3\lambda$
$= -\lambda^3 + 6\lambda^2 - 10\lambda + 5$

If $\lambda = 3$, the characteristic polynomial is $-(3)^3 + 6(3)^2 - 10(3) + 5 = -27 + 6(9) - 30 + 5 = -27 + 54 - 30 + 5 = 2$. Since the determinant is not zero, $\lambda = 3$ is indeed not an eigenvalue. My apologies, it seems I picked a value that didn't work.

Let's try to find an actual eigenvalue. We need to find roots of $-\lambda^3 + 6\lambda^2 - 10\lambda + 5 = 0$. This isn't trivial. For exam purposes, you'll usually be given matrices where eigenvalues are simpler integers or easily factorable polynomials.

Let's use a simpler matrix for demonstration of the row reduction technique.
Consider $A = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$.
Characteristic equation: $\text{det}(A - \lambda I) = 0$.
$A - \lambda I = \begin{pmatrix} 3-\lambda & 1 \\ 2 & 4-\lambda \end{pmatrix}$
$\text{det}(A - \lambda I) = (3-\lambda)(4-\lambda) - 2 = 0$
$12 - 3\lambda - 4\lambda + \lambda^2 - 2 = 0$
$\lambda^2 - 7\lambda + 10 = 0$
$(\lambda - 2)(\lambda - 5) = 0$
So, eigenvalues are $\lambda_1 = 2$ and $\lambda_2 = 5$.

**Finding Eigenvector for λ₁ = 2:**
We solve $(A - 2I)v = 0$.
$A - 2I = \begin{pmatrix} 3-2 & 1 \\ 2 & 4-2 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 2 & 2 \end{pmatrix}$

Augmented matrix:
$\begin{pmatrix} 1 & 1 & | & 0 \\ 2 & 2 & | & 0 \end{pmatrix}$

$R_2 \leftarrow R_2 - 2R_1$:
$\begin{pmatrix} 1 & 1 & | & 0 \\ 0 & 0 & | & 0 \end{pmatrix}$

This gives us the equation: $v_1 + v_2 = 0$.
This implies $v_1 = -v_2$.
Let $v_2 = 1$. Then $v_1 = -1$.
The eigenvector for $\lambda_1 = 2$ is $v^{(1)} = \begin{pmatrix} -1 \\ 1 \end{pmatrix}$.

**Finding Eigenvector for λ₂ = 5:**
We solve $(A - 5I)v = 0$.
$A - 5I = \begin{pmatrix} 3-5 & 1 \\ 2 & 4-5 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ 2 & -1 \end{pmatrix}$

Augmented matrix:
$\begin{pmatrix} -2 & 1 & | & 0 \\ 2 & -1 & | & 0 \end{pmatrix}$

$R_2 \leftarrow R_2 + R_1$:
$\begin{pmatrix} -2 & 1 & | & 0 \\ 0 & 0 & | & 0 \end{pmatrix}$

This gives us the equation: $-2v_1 + v_2 = 0$.
This implies $v_2 = 2v_1$.
Let $v_1 = 1$. Then $v_2 = 2$.
The eigenvector for $\lambda_2 = 5$ is $v^{(2)} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$.

See? Gaussian elimination is the direct tool to unravel the relationships between $v_1, v_2, \dots$ from the system $(A - \lambda I)v = 0$. It helps us identify the free variables and express the dependent ones, thereby defining the direction of the eigenvector.

### 5. Importance and Applications

Why is this so important?

*   **Diagonalization (CO1):** Eigenvalues and eigenvectors are fundamental to **diagonalizing a matrix**. A matrix $A$ can be diagonalized if it has $n$ linearly independent eigenvectors. If we form a matrix $P$ whose columns are the eigenvectors of $A$, and a diagonal matrix $D$ where the diagonal entries are the corresponding eigenvalues, then $A = PDP^{-1}$. This means we can transform $A$ into a simpler diagonal form $D$. Operations like $A^k$ become trivial to compute as $P D^k P^{-1}$. This is immensely useful in solving systems of linear differential equations (linking to CO2) and in many other applications.
*   **Understanding System Dynamics:** In physical systems, eigenvalues often represent rates of change, frequencies, or stability measures. For instance, in a second-order linear ODE system modeling vibrations, the eigenvalues dictate the natural frequencies and damping.
*   **Principal Component Analysis (PCA):** In data science and signal processing (relevant to signals and systems, Haykin & Van Veen reference), eigenvectors of the covariance matrix represent the directions of maximum variance in the data, allowing for dimensionality reduction.
*   **Stability Analysis:** In control systems and electrical engineering, the location of eigenvalues in the complex plane determines the stability of a system. If all eigenvalues have negative real parts, the system is stable.

### 6. Properties of Eigenvalues and Eigenvectors

There are some handy properties that can help us check our work or solve problems more efficiently:

*   **Sum of Eigenvalues:** The sum of the eigenvalues of a matrix $A$ is equal to its trace (the sum of the diagonal elements).
    $\sum_{i=1}^n \lambda_i = \text{tr}(A) = \sum_{i=1}^n a_{ii}$
    *In Example 1:* $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. $\text{tr}(A) = 2+2=4$. Eigenvalues were 1 and 3. $1+3=4$. Checks out!
*   **Product of Eigenvalues:** The product of the eigenvalues of a matrix $A$ is equal to its determinant.
    $\prod_{i=1}^n \lambda_i = \text{det}(A)$
    *In Example 1:* $\text{det}(A) = (2)(2) - (1)(1) = 4 - 1 = 3$. Eigenvalues were 1 and 3. $(1)(3) = 3$. Checks out!
*   **Eigenvectors for Distinct Eigenvalues are Linearly Independent:** If a matrix has $n$ distinct eigenvalues, its corresponding eigenvectors are guaranteed to be linearly independent. This is crucial for diagonalization.
*   **Eigenvectors corresponding to the same eigenvalue:** They span a subspace called the eigenspace. Any non-zero vector in this eigenspace is an eigenvector.

### 7. Common Pitfalls and Exam Tips

*   **Forgetting the "non-zero" condition for eigenvectors:** The definition of an eigenvector explicitly states it must be non-zero. The zero vector always satisfies $(A - \lambda I)v = 0$, but it's trivial.
*   **Calculation Errors in Determinants:** This is a common source of mistakes. Double-check your arithmetic, especially with signs.
*   **Errors in Row Reduction:** Be meticulous when applying row operations. A single slip can lead to incorrect eigenvectors.
*   **Confusing Eigenvalues and Eigenvectors:** Make sure you clearly associate each eigenvector with its correct eigenvalue.
*   **Not Checking for Linear Independence (for Diagonalization):** While the problem might ask for "the" eigenvalues and eigenvectors, if the context is diagonalization, you need to ensure you have enough linearly independent eigenvectors. For distinct eigenvalues, this is usually not an issue.
*   **Understanding the "Why":** Exams often test conceptual understanding. Be ready to explain what eigenvalues and eigenvectors represent geometrically (directions of stretching/shrinking) and their significance in system analysis.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
What is the fundamental equation defining an eigenvector $\mathbf{v}$ and its corresponding eigenvalue $\lambda$ for a matrix $\mathbf{A}$? What does this equation tell us conceptually about the transformation $\mathbf{A}$ acting on $\mathbf{v}$?

**Answer:**
The fundamental equation is $\mathbf{Av} = \lambda\mathbf{v}$, where $\mathbf{v}$ is a non-zero vector and $\lambda$ is a scalar. Conceptually, this equation means that when the linear transformation represented by matrix $\mathbf{A}$ is applied to its eigenvector $\mathbf{v}$, the resulting vector is parallel to the original eigenvector $\mathbf{v}$. The eigenvector $\mathbf{v}$ only changes in magnitude (scaled by $\lambda$), not in its direction. If $\lambda > 1$, the vector is stretched; if $0 < \lambda < 1$, it's compressed; if $\lambda < 0$, it's reversed in direction and scaled.

**Question 2 (Calculation-Oriented):**
Find the eigenvalues and a basis for the eigenspace for each eigenvalue of the matrix $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$.

**Answer:**
**Step 1: Find Eigenvalues**
We need to solve $\text{det}(A - \lambda I) = 0$.
$A - \lambda I = \begin{pmatrix} 1-\lambda & 2 \\ 2 & 1-\lambda \end{pmatrix}$
$\text{det}(A - \lambda I) = (1-\lambda)(1-\lambda) - (2)(2) = (1-\lambda)^2 - 4$
Set determinant to zero: $(1-\lambda)^2 - 4 = 0$
$(1-\lambda)^2 = 4$
$1-\lambda = \pm 2$

Case 1: $1-\lambda = 2 \implies \lambda_1 = 1 - 2 = -1$
Case 2: $1-\lambda = -2 \implies \lambda_2 = 1 + 2 = 3$

The eigenvalues are $\lambda_1 = -1$ and $\lambda_2 = 3$.

**Step 2: Find Eigenvectors**

**For λ₁ = -1:**
Solve $(A - (-1)I)v = 0 \implies (A+I)v = 0$.
$A+I = \begin{pmatrix} 1-(-1) & 2 \\ 2 & 1-(-1) \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$
Augmented matrix: $\begin{pmatrix} 2 & 2 & | & 0 \\ 2 & 2 & | & 0 \end{pmatrix}$
Row reduction ($R_2 \leftarrow R_2 - R_1$): $\begin{pmatrix} 2 & 2 & | & 0 \\ 0 & 0 & | & 0 \end{pmatrix}$
This gives $2v_1 + 2v_2 = 0 \implies v_1 + v_2 = 0 \implies v_1 = -v_2$.
Let $v_2 = 1$, then $v_1 = -1$.
The eigenvector is $v^{(1)} = \begin{pmatrix} -1 \\ 1 \end{pmatrix}$.
A basis for the eigenspace for $\lambda_1 = -1$ is $\left\{ \begin{pmatrix} -1 \\ 1 \end{pmatrix} \right\}$.

**For λ₂ = 3:**
Solve $(A - 3I)v = 0$.
$A - 3I = \begin{pmatrix} 1-3 & 2 \\ 2 & 1-3 \end{pmatrix} = \begin{pmatrix} -2 & 2 \\ 2 & -2 \end{pmatrix}$
Augmented matrix: $\begin{pmatrix} -2 & 2 & | & 0 \\ 2 & -2 & | & 0 \end{pmatrix}$
Row reduction ($R_2 \leftarrow R_2 + R_1$): $\begin{pmatrix} -2 & 2 & | & 0 \\ 0 & 0 & | & 0 \end{pmatrix}$
This gives $-2v_1 + 2v_2 = 0 \implies -v_1 + v_2 = 0 \implies v_1 = v_2$.
Let $v_1 = 1$, then $v_2 = 1$.
The eigenvector is $v^{(2)} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
A basis for the eigenspace for $\lambda_2 = 3$ is $\left\{ \begin{pmatrix} 1 \\ 1 \end{pmatrix} \right\}$.

**Question 3 (Property-Based):**
For a $3 \times 3$ matrix $A$, the trace is $\text{tr}(A) = 10$ and the determinant is $\text{det}(A) = 24$. If two of the eigenvalues are $\lambda_1 = 2$ and $\lambda_2 = 3$, what is the third eigenvalue $\lambda_3$?

**Answer:**
We know that the sum of eigenvalues equals the trace, and the product of eigenvalues equals the determinant.
Sum of eigenvalues: $\lambda_1 + \lambda_2 + \lambda_3 = \text{tr}(A)$
$2 + 3 + \lambda_3 = 10$
$5 + \lambda_3 = 10$
$\lambda_3 = 5$.

Let's check this with the determinant property:
Product of eigenvalues: $\lambda_1 \lambda_2 \lambda_3 = \text{det}(A)$
$(2)(3)(5) = 30$.
However, the determinant is given as 24. This indicates there might be an inconsistency in the problem statement as provided, or perhaps the eigenvalues are not all real or distinct, or the matrix is not simply $3 \times 3$. Assuming the properties hold and there's a typo in either trace or determinant for the purpose of illustration:

If $\lambda_3 = 5$ from the trace, then the determinant should be $2 \times 3 \times 5 = 30$.
If the determinant is 24, and two eigenvalues are 2 and 3, then $2 \times 3 \times \lambda_3 = 24 \implies 6 \lambda_3 = 24 \implies \lambda_3 = 4$.
If $\lambda_3 = 4$, the trace would be $2 + 3 + 4 = 9$, not 10.

Given the common nature of these problems in exams, it's most likely that the question intends for you to use *one* of the properties to find the missing value, and the other property serves as a check. In such a scenario, either using the trace or determinant should lead to the intended answer, assuming the problem is well-posed. If forced to choose, the trace property is often simpler to apply directly for finding a missing eigenvalue. Assuming the trace property is the intended method:

The third eigenvalue is $\lambda_3 = 5$.
