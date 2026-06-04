---
title: "The matrix Eigen Value Problem"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129ce"
status: "completed"
scrapedAt: "2026-05-20T18:30:49.523Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 1

## Module 1: Linear Systems of Equations: Gauss Elimination

### Topic: The Matrix Eigenvalue Problem

Welcome, everyone! Today, we're diving into one of the most powerful and fundamental concepts in linear algebra and its applications, especially in engineering and physics: **the matrix eigenvalue problem**. You might have encountered systems of linear equations, and perhaps even solved them using methods like Gaussian elimination. Well, the eigenvalue problem is a natural extension, and it helps us understand the intrinsic properties of linear transformations and systems.

Think about it: In electrical science, we often deal with circuits, control systems, or signal processing. In physical science, we look at quantum mechanics, vibrations, or fluid dynamics. These systems can often be modeled using matrices. But what are the truly "special" behaviors or characteristics of these systems? That's where eigenvalues and eigenvectors come in. They reveal the directions in which a linear transformation acts purely by scaling, and the scaling factors themselves.

This topic directly ties into **Course Outcome 1 (CO1): Solve systems of linear equations and diagonalize matrices.** Understanding eigenvalues and eigenvectors is absolutely crucial for diagonalizing matrices, which simplifies many complex problems. We'll also see how this concept underpins stability analysis in systems and helps us understand modes of vibration.

Let's start by building our understanding from the ground up.

### 1. What is a Linear Transformation? (A Quick Refresher)

Before we talk about eigenvalues, let's recall what a linear transformation is. If you have a vector space, a linear transformation $T$ is a mapping from that space to itself (or another vector space) that preserves vector addition and scalar multiplication. In simpler terms, it's a function that can be represented by matrix multiplication.

If we have a matrix $A$, applying $A$ to a vector $\mathbf{x}$ gives us a new vector $A\mathbf{x}$. This operation can be thought of as stretching, shrinking, rotating, or reflecting the vector $\mathbf{x}$.

### 2. The Core Idea: Eigenvectors and Eigenvalues

Now, imagine we apply this transformation $A$ to a vector $\mathbf{x}$. In most cases, the resulting vector $A\mathbf{x}$ will be different from $\mathbf{x}$ in both magnitude and direction.

However, there are special, non-zero vectors. When we apply the transformation $A$ to these special vectors, the resulting vector $A\mathbf{x}$ is simply a scaled version of the original vector $\mathbf{x}$. The direction of the vector remains the same (or is reversed if the scaling factor is negative), only its magnitude changes.

These special vectors are called **eigenvectors**, and the scaling factor is called the **eigenvalue**.

Mathematically, this relationship is expressed by the fundamental equation:

$$A\mathbf{x} = \lambda \mathbf{x}$$

where:
*   $A$ is an $n \times n$ square matrix.
*   $\mathbf{x}$ is a non-zero $n \times 1$ column vector, called an **eigenvector**.
*   $\lambda$ (lambda) is a scalar, called an **eigenvalue**.

**Analogy Time:** Imagine you're looking at a stretchy fabric (our linear transformation $A$). You place a ruler (our vector $\mathbf{x}$) on it. When you stretch the fabric, the ruler might change its length and point in a new direction. But, if you happen to align your ruler with a specific direction that, when stretched, only gets longer or shorter but doesn't change its orientation, then that ruler's direction is an eigenvector direction, and how much it stretched or shrunk is the eigenvalue.

### 3. Deriving the Characteristic Equation

So, how do we find these special $\lambda$ and $\mathbf{x}$ values? The equation $A\mathbf{x} = \lambda \mathbf{x}$ is our starting point.

We can rewrite this as:
$A\mathbf{x} - \lambda \mathbf{x} = \mathbf{0}$

To make this look like a standard matrix equation, we can introduce the identity matrix $I$ (which doesn't change a vector when multiplied):
$A\mathbf{x} - \lambda I \mathbf{x} = \mathbf{0}$

Now, we can factor out $\mathbf{x}$:
$(A - \lambda I) \mathbf{x} = \mathbf{0}$

This equation is very important. It's a homogeneous system of linear equations where the coefficient matrix is $(A - \lambda I)$.

Remember from our discussions on Gaussian elimination and systems of linear equations: for a homogeneous system $B\mathbf{x} = \mathbf{0}$ to have non-trivial (non-zero) solutions for $\mathbf{x}$, the matrix $B$ must be singular. A singular matrix is one that does not have an inverse, and importantly, its determinant is zero.

In our case, the matrix $B$ is $(A - \lambda I)$. Therefore, for non-zero eigenvectors $\mathbf{x}$ to exist, the matrix $(A - \lambda I)$ must be singular. This means its determinant must be zero:

$$\det(A - \lambda I) = 0$$

This equation is called the **characteristic equation** of the matrix $A$. The roots of this polynomial equation in $\lambda$ are precisely the **eigenvalues** of $A$.

### 4. Finding Eigenvalues

Let's walk through an example to solidify this.

**Example 1: A Simple 2x2 Matrix**

Consider the matrix $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

We want to find the eigenvalues $\lambda$. First, we form the matrix $(A - \lambda I)$:

$A - \lambda I = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} - \lambda \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix}$

Now, we set the determinant of this matrix to zero:

$\det \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix} = 0$

$(4-\lambda)(3-\lambda) - (1)(2) = 0$

Expand this:
$12 - 4\lambda - 3\lambda + \lambda^2 - 2 = 0$

$\lambda^2 - 7\lambda + 10 = 0$

This is our characteristic equation. It's a quadratic equation, and we can solve it by factoring or using the quadratic formula. Factoring gives us:

$(\lambda - 2)(\lambda - 5) = 0$

So, the **eigenvalues** are $\lambda_1 = 2$ and $\lambda_2 = 5$.

**Remember this:** The eigenvalues are the roots of the characteristic equation $\det(A - \lambda I) = 0$. For an $n \times n$ matrix, this equation will be a polynomial of degree $n$. This means there will be $n$ eigenvalues, though they might be repeated or complex.

### 5. Finding Eigenvectors

Once we have the eigenvalues, we can find the corresponding eigenvectors. For each eigenvalue $\lambda$, we substitute it back into the equation $(A - \lambda I) \mathbf{x} = \mathbf{0}$ and solve for the vector $\mathbf{x}$.

Let's continue with Example 1.

**Case 1: $\lambda_1 = 2$**

Substitute $\lambda = 2$ into $(A - \lambda I) \mathbf{x} = \mathbf{0}$:

$(A - 2I) \mathbf{x} = \begin{pmatrix} 4-2 & 1 \\ 2 & 3-2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

This gives us the system of equations:
$2x_1 + x_2 = 0$
$2x_1 + x_2 = 0$

Notice that both equations are identical. This is a good sign! It means our matrix $(A - \lambda I)$ was indeed singular for $\lambda=2$. From the first equation, we get $x_2 = -2x_1$.

We can choose any non-zero value for $x_1$. A common choice is to let $x_1 = 1$. Then $x_2 = -2$.
So, an **eigenvector** corresponding to $\lambda_1 = 2$ is $\mathbf{x}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

Any non-zero scalar multiple of this vector is also an eigenvector for $\lambda_1=2$. For instance, $\begin{pmatrix} 2 \\ -4 \end{pmatrix}$ or $\begin{pmatrix} -1 \\ 2 \end{pmatrix}$ are also eigenvectors. Eigenvectors define a direction, so any vector pointing along that direction is an eigenvector.

**Case 2: $\lambda_2 = 5$**

Substitute $\lambda = 5$ into $(A - \lambda I) \mathbf{x} = \mathbf{0}$:

$(A - 5I) \mathbf{x} = \begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

This gives us the system of equations:
$-x_1 + x_2 = 0$
$2x_1 - 2x_2 = 0$

Again, the equations are dependent (the second is just $-2$ times the first). From $-x_1 + x_2 = 0$, we get $x_2 = x_1$.
If we let $x_1 = 1$, then $x_2 = 1$.
So, an **eigenvector** corresponding to $\lambda_2 = 5$ is $\mathbf{x}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

**Summary for Example 1:**
The eigenvalues are $\lambda_1 = 2$ and $\lambda_2 = 5$.
The corresponding eigenvectors are $\mathbf{x}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$ and $\mathbf{x}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ (or any non-zero scalar multiples).

**Let's verify:**
For $\lambda_1=2, \mathbf{x}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$:
$A\mathbf{x}_1 = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ -2 \end{pmatrix} = \begin{pmatrix} 4(1) + 1(-2) \\ 2(1) + 3(-2) \end{pmatrix} = \begin{pmatrix} 4 - 2 \\ 2 - 6 \end{pmatrix} = \begin{pmatrix} 2 \\ -4 \end{pmatrix}$
$\lambda_1\mathbf{x}_1 = 2 \begin{pmatrix} 1 \\ -2 \end{pmatrix} = \begin{pmatrix} 2 \\ -4 \end{pmatrix}$. They match!

For $\lambda_2=5, \mathbf{x}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$:
$A\mathbf{x}_2 = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 4(1) + 1(1) \\ 2(1) + 3(1) \end{pmatrix} = \begin{pmatrix} 4 + 1 \\ 2 + 3 \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \end{pmatrix}$
$\lambda_2\mathbf{x}_2 = 5 \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \end{pmatrix}$. They also match!

This verification step is super important, especially in exams. It's your best friend to catch errors!

### 6. The Importance of Eigenvalues and Eigenvectors in Engineering and Science

Why do we care so much about these numbers and vectors? They reveal fundamental properties of systems that are crucial for analysis and design.

*   **Stability Analysis (CO1, CO2):** In systems described by differential equations (which are often converted into matrix form for analysis), the eigenvalues of the system matrix determine stability. If all eigenvalues have negative real parts, the system is stable. If any have positive real parts, it's unstable. This is fundamental in control systems and circuit analysis. For instance, in an RLC circuit, the behavior of the current and voltage over time is governed by eigenvalues.
*   **Vibrational Analysis (CO1):** For mechanical structures like bridges or aircraft wings, or even electrical systems with coupled oscillators, eigenvalues represent the natural frequencies of vibration, and eigenvectors represent the mode shapes. Knowing these allows engineers to design structures that avoid resonance, which can lead to catastrophic failure. Imagine designing a bridge; you wouldn't want its natural vibration frequency to match the frequency of passing trucks or strong winds!
*   **Diagonalization (CO1):** As mentioned, finding eigenvalues and eigenvectors is the first step towards diagonalizing a matrix. A diagonal matrix is much easier to work with. If $A = PDP^{-1}$, where $D$ is a diagonal matrix of eigenvalues and $P$ is a matrix whose columns are the corresponding eigenvectors, then $A^k = PD^kP^{-1}$. Calculating $D^k$ is trivial (just raise the diagonal elements to the $k$th power). This is invaluable for solving systems of linear differential equations, for example, in signals and systems (Haykin & Van Veen reference).
*   **Principal Component Analysis (PCA):** In data science and signal processing, PCA uses eigenvectors of the covariance matrix to find the directions of maximum variance in data. This helps in dimensionality reduction and feature extraction.
*   **Quantum Mechanics:** The Schrödinger equation involves operators that act like matrices. Eigenvalues of these operators represent observable quantities like energy levels of an atom.

### 7. Eigenvalues and Eigenvectors of Special Matrices

Certain types of matrices have special properties regarding their eigenvalues and eigenvectors.

*   **Symmetric Matrices (Real Eigenvalues, Orthogonal Eigenvectors):** If a real matrix $A$ is symmetric ($A^T = A$), then all its eigenvalues are real. Furthermore, eigenvectors corresponding to distinct eigenvalues are orthogonal. This is a very important property in many physical applications.
*   **Hermitian Matrices (Real Eigenvalues, Orthogonal Eigenvectors):** For complex matrices, the equivalent of symmetry is being Hermitian ($A^* = A$, where $A^*$ is the conjugate transpose). Hermitian matrices also have real eigenvalues, and eigenvectors corresponding to distinct eigenvalues are orthogonal.
*   **Diagonal and Triangular Matrices:** The eigenvalues of a diagonal matrix are simply the entries on its main diagonal. Similarly, for an upper or lower triangular matrix, the eigenvalues are the diagonal entries. This is a shortcut if you encounter such matrices!

**Example 2: A Diagonal Matrix**

Consider $A = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}$.
The characteristic equation is $\det(A - \lambda I) = \det \begin{pmatrix} 3-\lambda & 0 \\ 0 & -1-\lambda \end{pmatrix} = (3-\lambda)(-1-\lambda) - 0 = 0$.
The eigenvalues are $\lambda_1 = 3$ and $\lambda_2 = -1$.

To find eigenvectors:
For $\lambda_1 = 3$: $(A - 3I)\mathbf{x} = \begin{pmatrix} 0 & 0 \\ 0 & -4 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$. This gives $-4x_2 = 0$, so $x_2=0$. $x_1$ can be any non-zero value. Let $x_1=1$. Eigenvector is $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

For $\lambda_2 = -1$: $(A - (-1)I)\mathbf{x} = \begin{pmatrix} 4 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$. This gives $4x_1 = 0$, so $x_1=0$. $x_2$ can be any non-zero value. Let $x_2=1$. Eigenvector is $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$.

Notice that the eigenvectors are the standard basis vectors, which makes sense for a diagonal matrix. The eigenvalues are indeed the diagonal entries.

### 8. Repeated Eigenvalues

What happens if the characteristic equation has repeated roots? This means a particular eigenvalue appears more than once.

**Example 3: A Matrix with Repeated Eigenvalues**

Consider $A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$.
$A - \lambda I = \begin{pmatrix} 2-\lambda & 1 \\ 0 & 2-\lambda \end{pmatrix}$.
$\det(A - \lambda I) = (2-\lambda)(2-\lambda) - 0 = (2-\lambda)^2 = 0$.
So, $\lambda_1 = \lambda_2 = 2$. We have a repeated eigenvalue $\lambda = 2$.

Now, let's find the eigenvector for $\lambda = 2$:
$(A - 2I)\mathbf{x} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.
This gives $0x_1 + 1x_2 = 0$, so $x_2 = 0$. $x_1$ can be any non-zero value.
Let $x_1 = 1$. The eigenvector is $\mathbf{x}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

In this case, even though the eigenvalue $\lambda=2$ is repeated, we only found *one linearly independent* eigenvector. This is a critical point. When eigenvalues are repeated, you might not get as many linearly independent eigenvectors as the multiplicity of the eigenvalue. This affects our ability to diagonalize the matrix fully. Matrices for which we can find a full set of $n$ linearly independent eigenvectors are called **diagonalizable**.

A matrix $A$ is diagonalizable if and only if the sum of the geometric multiplicities (number of linearly independent eigenvectors for each eigenvalue) equals $n$.

### 9. Connection to Diagonalization (CO1)

Diagonalization is a major application of eigenvalues and eigenvectors. If an $n \times n$ matrix $A$ has $n$ linearly independent eigenvectors, we can write $A = PDP^{-1}$, where:
*   $D$ is a diagonal matrix whose diagonal entries are the eigenvalues of $A$.
*   $P$ is a matrix whose columns are the corresponding linearly independent eigenvectors of $A$.
*   $P^{-1}$ is the inverse of $P$.

Why is this useful?
$A^2 = (PDP^{-1})(PDP^{-1}) = PD(P^{-1}P)DP^{-1} = PD(I)DP^{-1} = PD^2P^{-1}$.
By induction, $A^k = PD^kP^{-1}$.
Since $D$ is diagonal, $D^k$ is simply the diagonal matrix with the eigenvalues raised to the $k$th power. This makes calculating high powers of $A$ computationally much easier.

This is directly related to solving systems of linear differential equations. If you have a system $\frac{d\mathbf{y}}{dt} = A\mathbf{y}$, and $A$ is diagonalizable, $A=PDP^{-1}$, then $P^{-1}\frac{d\mathbf{y}}{dt} = P^{-1}A\mathbf{y} = P^{-1}PDP^{-1}\mathbf{y} = D(P^{-1}\mathbf{y})$. Let $\mathbf{z} = P^{-1}\mathbf{y}$. Then $\frac{d\mathbf{z}}{dt} = D\mathbf{z}$. This is a system of uncoupled linear differential equations, which are trivial to solve: $z_i(t) = z_i(0)e^{\lambda_i t}$. Transforming back using $\mathbf{y} = P\mathbf{z}$ gives the solution to the original system. This is a core concept in signals and systems and solving ODEs (CO2).

### 10. Practical Considerations and Pitfalls

*   **Calculating Determinants:** For larger matrices, calculating the determinant of $(A - \lambda I)$ can become algebraically intensive. Numerical methods are often used in practice.
*   **Finding Eigenvectors:** When solving $(A - \lambda I)\mathbf{x} = \mathbf{0}$, ensure you find a *non-zero* vector. If you get $\mathbf{x} = \mathbf{0}$, you've made a mistake in your calculation or substitution.
*   **Linear Independence:** Always check if the eigenvectors you find for distinct eigenvalues are indeed linearly independent. For distinct eigenvalues, they *will* be linearly independent. The problem arises with repeated eigenvalues.
*   **Computational Tools:** Software like MATLAB, Python (NumPy), or WolframAlpha can compute eigenvalues and eigenvectors efficiently and accurately. Understanding the theory, however, is paramount to interpreting the results.

### Summary of Key Takeaways

*   **Eigenvalue Problem:** Find non-zero vectors $\mathbf{x}$ and scalars $\lambda$ such that $A\mathbf{x} = \lambda \mathbf{x}$.
*   **Eigenvectors:** Special directions that are only scaled by the transformation $A$.
*   **Eigenvalues:** The scaling factors associated with eigenvectors.
*   **Characteristic Equation:** $\det(A - \lambda I) = 0$. The roots are the eigenvalues.
*   **Finding Eigenvectors:** For each eigenvalue $\lambda$, solve $(A - \lambda I)\mathbf{x} = \mathbf{0}$.
*   **Importance:** Stability analysis, vibration modes, diagonalization, system modeling.
*   **Diagonalization:** If $A$ has $n$ linearly independent eigenvectors, $A=PDP^{-1}$, where $D$ is diagonal with eigenvalues and $P$ has eigenvectors as columns.

This topic is fundamental. Mastering it will open doors to understanding stability, vibrations, and simplifying complex systems in your electrical and physical science studies.

---

## Sample Questions with Answers

Here are a few practice questions to test your understanding.

**Q1. Conceptual:** What does it mean for a vector to be an eigenvector of a matrix?

**Answer:** An eigenvector of a matrix $A$ is a non-zero vector that, when multiplied by $A$, results in a vector that is simply a scaled version of the original eigenvector. The direction of the vector remains unchanged (or is reversed), and the scaling factor is called the eigenvalue. Mathematically, $A\mathbf{x} = \lambda \mathbf{x}$, where $\mathbf{x}$ is the eigenvector and $\lambda$ is the eigenvalue.

**Q2. Exam-Oriented:** Find the eigenvalues and eigenvectors of the matrix $A = \begin{pmatrix} 1 & -1 \\ 1 & 3 \end{pmatrix}$.

**Solution:**
1.  **Find Eigenvalues:**
    We need to solve $\det(A - \lambda I) = 0$.
    $A - \lambda I = \begin{pmatrix} 1-\lambda & -1 \\ 1 & 3-\lambda \end{pmatrix}$
    $\det(A - \lambda I) = (1-\lambda)(3-\lambda) - (-1)(1) = (3 - \lambda - 3\lambda + \lambda^2) + 1 = \lambda^2 - 4\lambda + 3 + 1 = \lambda^2 - 4\lambda + 4$.
    The characteristic equation is $\lambda^2 - 4\lambda + 4 = 0$.
    Factoring gives $(\lambda - 2)^2 = 0$.
    So, we have a repeated eigenvalue $\lambda_1 = \lambda_2 = 2$.

2.  **Find Eigenvectors for $\lambda = 2$:**
    We solve $(A - 2I)\mathbf{x} = \mathbf{0}$.
    $A - 2I = \begin{pmatrix} 1-2 & -1 \\ 1 & 3-2 \end{pmatrix} = \begin{pmatrix} -1 & -1 \\ 1 & 1 \end{pmatrix}$.
    The system of equations is:
    $\begin{pmatrix} -1 & -1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.
    This gives $-x_1 - x_2 = 0$, or $x_2 = -x_1$.
    The second equation $x_1 + x_2 = 0$ is identical.
    We can choose $x_1 = 1$. Then $x_2 = -1$.
    The eigenvector is $\mathbf{x} = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

    **Answer:** The only eigenvalue is $\lambda = 2$ (with algebraic multiplicity 2). The corresponding eigenvectors are all non-zero scalar multiples of $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$. Since we only have one linearly independent eigenvector, this matrix is not diagonalizable in the strict sense of having a basis of eigenvectors.

**Q3. Conceptual/Application Link:** In a system described by a matrix $A$, what would a negative eigenvalue imply about the system's behavior over time? (Relates to CO2).

**Answer:** If a system $\frac{d\mathbf{y}}{dt} = A\mathbf{y}$ has a negative eigenvalue $\lambda < 0$, then the component of the solution corresponding to this eigenvalue will behave like $e^{\lambda t}$. As time $t$ increases, $e^{\lambda t}$ decays towards zero. This means that the component of the system's state associated with this eigenvector will tend to die out, indicating stability for that particular mode of behavior. If all eigenvalues are negative, the system is stable.

**Q4. Calculation:** Find the eigenvalues of the diagonal matrix $B = \begin{pmatrix} -5 & 0 & 0 \\ 0 & 7 & 0 \\ 0 & 0 & 3 \end{pmatrix}$.

**Answer:** For a diagonal (or triangular) matrix, the eigenvalues are simply the entries on the main diagonal. Therefore, the eigenvalues of matrix $B$ are $\lambda_1 = -5$, $\lambda_2 = 7$, and $\lambda_3 = 3$.

**Q5. Diagonalization Link:** If a matrix $A$ has eigenvalues $\lambda_1, \lambda_2$ and corresponding eigenvectors $\mathbf{v}_1, \mathbf{v}_2$, how can you write $A$ in the form $PDP^{-1}$?

**Solution:**
Let $D = \begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix}$ and $P = \begin{pmatrix} \mathbf{v}_1 & \mathbf{v}_2 \end{pmatrix}$ (where $\mathbf{v}_1$ and $\mathbf{v}_2$ are column vectors).
If $\mathbf{v}_1$ and $\mathbf{v}_2$ are linearly independent, then $A$ can be written as $A = PDP^{-1}$, where $P^{-1}$ is the inverse of matrix $P$. This form is crucial for simplifying calculations involving powers of $A$ and for solving systems of linear differential equations.
