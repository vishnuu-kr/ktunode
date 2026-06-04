---
title: "Diagonalization of matrices."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83546"
status: "completed"
scrapedAt: "2026-05-20T17:39:17.103Z"
---
# Module 1: Linear Systems of Equations and Diagonalization of Matrices

This module is all about understanding and manipulating linear systems, a cornerstone of both electrical and physical sciences. We've already touched upon solving systems using Gaussian elimination – a fundamental skill. Today, we’re going to build on that by exploring a very powerful concept: **Diagonalization of Matrices**.

Why is diagonalization so important? Imagine you have a complex system, described by a matrix. If we can transform this matrix into a simpler, diagonal form, it unlocks a whole new level of understanding and simplifies many calculations. This is incredibly useful in analyzing systems of differential equations, understanding stability in electrical circuits, and even in quantum mechanics. In fact, **Course Outcome 1 (CO1)** explicitly states we need to be able to "solve systems of linear equations and diagonalize matrices." This topic directly addresses the diagonalization part of CO1. Moreover, understanding diagonalization is crucial for solving homogeneous linear differential equations with constant coefficients, which is **Course Outcome 2 (CO2)**, and we’ll see how it connects later.

Let's dive in!

## 1. What is a Diagonal Matrix?

Before we diagonalize anything, let's recall what a diagonal matrix is.

A **diagonal matrix** is a square matrix where all the entries outside the main diagonal are zero. The entries on the main diagonal (from the top-left to the bottom-right) can be any value.

Here's what a general 3x3 diagonal matrix looks like:

$$
D = \begin{pmatrix}
d_{11} & 0 & 0 \\
0 & d_{22} & 0 \\
0 & 0 & d_{33}
\end{pmatrix}
$$

Think of a diagonal matrix like a set of independent components. In a diagonal system, each part acts on its own, without influencing the others. This simplicity is what makes them so appealing.

## 2. The Essence of Diagonalization: Finding a Simpler Viewpoint

Diagonalization is the process of transforming a given square matrix, let's call it $A$, into a diagonal matrix, $D$, by changing the basis of the vector space. This is achieved through a similarity transformation.

The goal is to find an invertible matrix $P$ such that:

$$
D = P^{-1}AP
$$

Where:
*   $A$ is the original square matrix we want to diagonalize.
*   $D$ is the resulting diagonal matrix.
*   $P$ is an invertible matrix whose columns are special vectors called eigenvectors.
*   $P^{-1}$ is the inverse of matrix $P$.

This transformation $P^{-1}AP$ is called a **similarity transformation**. It essentially means we're looking at the same linear transformation represented by $A$, but from a different perspective (a different basis). The magic is that in this new basis, the transformation becomes much simpler – it's just scaling along the new coordinate axes, which is exactly what a diagonal matrix represents.

Think of it like this: Suppose you're trying to describe the movement of a complex robotic arm. The matrix $A$ might represent the arm's movement in its standard, built-in coordinate system. This system might be cumbersome. Diagonalization is like finding a special set of "natural" directions for the arm's movement. In these new directions, the arm simply extends or retracts; it doesn't twist or turn in a complicated way. The matrix $D$ would then describe these simple scaling actions along the natural directions.

### Connection to Course Outcome 1 (CO1):

Diagonalization is directly related to solving systems of linear equations. As we'll see, the process involves finding eigenvalues and eigenvectors. Eigenvectors are special vectors that don't change direction when a linear transformation is applied to them; they are simply scaled. These eigenvectors form the columns of our matrix $P$, and the eigenvalues are the diagonal entries of $D$. This process is a fundamental tool in linear algebra, directly supporting the diagonalization aspect of CO1.

## 3. The Building Blocks: Eigenvalues and Eigenvectors

The key to diagonalization lies in understanding **eigenvalues** and **eigenvectors**. These are the concepts that allow us to find the matrix $P$ and the diagonal matrix $D$.

### 3.1. Eigenvectors: The "Invariant" Directions

An **eigenvector** of a square matrix $A$ is a non-zero vector $\mathbf{v}$ such that when $A$ is multiplied by $\mathbf{v}$, the result is a scalar multiple of $\mathbf{v}$. In other words, the direction of $\mathbf{v}$ is unchanged by the transformation $A$; only its magnitude might change.

Mathematically, this is expressed as:

$$
A\mathbf{v} = \lambda\mathbf{v}
$$

Where:
*   $A$ is the square matrix.
*   $\mathbf{v}$ is the non-zero eigenvector.
*   $\lambda$ (lambda) is a scalar, called the **eigenvalue** corresponding to the eigenvector $\mathbf{v}$.

#### Analogy Time!

Imagine a stretched rubber sheet. If you draw some lines on it, and then stretch the sheet, most lines will change both their length and direction. However, there might be some special lines that, after stretching, are still pointing in the same direction, just longer or shorter. These special lines represent the directions of the eigenvectors. The amount by which they are stretched or compressed is related to the eigenvalues.

### 3.2. Finding Eigenvalues: The Characteristic Equation

How do we find these special $\lambda$ values? We start with the definition $A\mathbf{v} = \lambda\mathbf{v}$ and rearrange it.

$A\mathbf{v} - \lambda\mathbf{v} = \mathbf{0}$

We can introduce the identity matrix $I$ (which doesn't change a vector when multiplied) to write $\lambda\mathbf{v}$ as $\lambda I \mathbf{v}$:

$A\mathbf{v} - \lambda I \mathbf{v} = \mathbf{0}$

Now, we can factor out $\mathbf{v}$:

$(A - \lambda I)\mathbf{v} = \mathbf{0}$

We are looking for a *non-zero* vector $\mathbf{v}$ that satisfies this equation. This means the matrix $(A - \lambda I)$ must be singular (non-invertible). A square matrix is singular if and only if its determinant is zero. This gives us the **characteristic equation**:

$$
\det(A - \lambda I) = 0
$$

Solving this equation for $\lambda$ will give us the eigenvalues of the matrix $A$. The determinant will result in a polynomial in $\lambda$, called the **characteristic polynomial**. The roots of this polynomial are the eigenvalues.

**Important Note:** For an $n \times n$ matrix, the characteristic polynomial will have degree $n$, meaning there will be $n$ eigenvalues, counting multiplicities. These eigenvalues can be real or complex.

### 3.3. Finding Eigenvectors: Solving $(A - \lambda I)\mathbf{v} = \mathbf{0}$

Once we have an eigenvalue $\lambda$, we can find its corresponding eigenvector(s) by solving the homogeneous system of linear equations:

$(A - \lambda I)\mathbf{v} = \mathbf{0}$

This is where our knowledge of Gaussian elimination comes back into play! For each eigenvalue $\lambda$, we form the matrix $(A - \lambda I)$ and then use row operations to find the non-zero solutions for $\mathbf{v}$. The set of all eigenvectors for a given $\lambda$, along with the zero vector, forms a subspace called the **eigenspace** corresponding to $\lambda$.

**Example 1: Finding Eigenvalues and Eigenvectors**

Let's take a simple 2x2 matrix:
$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$

**Step 1: Find the characteristic equation.**
We need to calculate $\det(A - \lambda I)$:

$A - \lambda I = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} - \lambda \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix}$

Now, the determinant:
$\det(A - \lambda I) = (4-\lambda)(3-\lambda) - (1)(2)$
$= 12 - 4\lambda - 3\lambda + \lambda^2 - 2$
$= \lambda^2 - 7\lambda + 10$

So, the characteristic equation is $\lambda^2 - 7\lambda + 10 = 0$.

**Step 2: Solve the characteristic equation for eigenvalues ($\lambda$).**
This is a quadratic equation. We can factor it:
$(\lambda - 2)(\lambda - 5) = 0$

The eigenvalues are $\lambda_1 = 2$ and $\lambda_2 = 5$.

**Step 3: Find the eigenvectors for each eigenvalue.**

**For $\lambda_1 = 2$:**
We solve $(A - 2I)\mathbf{v} = \mathbf{0}$.
$A - 2I = \begin{pmatrix} 4-2 & 1 \\ 2 & 3-2 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}$

The system is:
$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

This gives us the equation $2v_1 + v_2 = 0$.
The second row gives the same equation, as expected for a singular matrix.
From $2v_1 + v_2 = 0$, we can choose $v_1 = t$ (where $t$ is any non-zero scalar). Then $v_2 = -2t$.
So, the eigenvectors are of the form $\mathbf{v} = \begin{pmatrix} t \\ -2t \end{pmatrix} = t \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.
We usually pick a simple non-zero representative, so an eigenvector for $\lambda_1=2$ is $\mathbf{v}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

**For $\lambda_2 = 5$:**
We solve $(A - 5I)\mathbf{v} = \mathbf{0}$.
$A - 5I = \begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}$

The system is:
$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

This gives us the equations:
$-v_1 + v_2 = 0 \implies v_1 = v_2$
$2v_1 - 2v_2 = 0 \implies v_1 = v_2$

Again, the equations are dependent. If we choose $v_1 = t$ (a non-zero scalar), then $v_2 = t$.
So, the eigenvectors are of the form $\mathbf{v} = \begin{pmatrix} t \\ t \end{pmatrix} = t \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
A representative eigenvector for $\lambda_2=5$ is $\mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

**Summary for Example 1:**
*   Eigenvalue $\lambda_1 = 2$, Eigenvector $\mathbf{v}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$
*   Eigenvalue $\lambda_2 = 5$, Eigenvector $\mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

**Remember this:** The eigenvectors define the special directions, and the eigenvalues tell us how much scaling happens in those directions.

## 4. The Diagonalization Process: Putting it all Together

Now that we know how to find eigenvalues and eigenvectors, we can construct the matrices $P$ and $D$ for diagonalization.

### 4.1. Constructing Matrices P and D

If an $n \times n$ matrix $A$ has $n$ linearly independent eigenvectors $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n$ corresponding to eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$ (which might not be distinct), then $A$ can be diagonalized.

The matrix $P$ is formed by using the linearly independent eigenvectors as its columns:

$$
P = \begin{pmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \dots & \mathbf{v}_n \end{pmatrix}
$$

The diagonal matrix $D$ is formed with the corresponding eigenvalues on its main diagonal, in the same order as their eigenvectors in $P$:

$$
D = \begin{pmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \lambda_n
\end{pmatrix}
$$

The diagonalization relationship is:

$$
A = PDP^{-1} \quad \text{or equivalently} \quad D = P^{-1}AP
$$

#### Why does this work?
Let's see why $AP = PD$.
$AP = A \begin{pmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \dots & \mathbf{v}_n \end{pmatrix} = \begin{pmatrix} A\mathbf{v}_1 & A\mathbf{v}_2 & \dots & A\mathbf{v}_n \end{pmatrix}$
Since $A\mathbf{v}_i = \lambda_i\mathbf{v}_i$, we have:
$AP = \begin{pmatrix} \lambda_1\mathbf{v}_1 & \lambda_2\mathbf{v}_2 & \dots & \lambda_n\mathbf{v}_n \end{pmatrix}$

Now consider $PD$:
$PD = \begin{pmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \dots & \mathbf{v}_n \end{pmatrix} \begin{pmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \lambda_n
\end{pmatrix}$
Multiplying this out gives:
$PD = \begin{pmatrix} \lambda_1\mathbf{v}_1 & \lambda_2\mathbf{v}_2 & \dots & \lambda_n\mathbf{v}_n \end{pmatrix}$

So, indeed, $AP = PD$. If $P$ is invertible (which it is if the eigenvectors are linearly independent), we can multiply by $P^{-1}$ on the right to get $A = PDP^{-1}$, or by $P^{-1}$ on the left to get $P^{-1}AP = D$.

### 4.2. The Crucial Condition: Linear Independence of Eigenvectors

For a matrix to be diagonalizable, it must have $n$ linearly independent eigenvectors, where $n$ is the dimension of the matrix. If you don't have enough linearly independent eigenvectors, you cannot form the invertible matrix $P$, and thus cannot diagonalize $A$ in this manner.

**Key Fact (from Kreyszig, Chapter 7, Section 7.3):** An $n \times n$ matrix $A$ with $n$ distinct eigenvalues is always diagonalizable. If eigenvalues are repeated, we need to check for linear independence of the eigenvectors.

### 4.3. Calculating $P^{-1}$

Once $P$ is formed, we need its inverse, $P^{-1}$. This is where our skills with Gaussian elimination can be extended to find matrix inverses. (Recall from Module 1 how to augment $P$ with the identity matrix $[P | I]$ and row reduce to $[I | P^{-1}]$).

**Example 1 Continued: Diagonalizing Matrix A**

From Example 1, we had:
$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$
Eigenvalues: $\lambda_1 = 2, \lambda_2 = 5$
Eigenvectors: $\mathbf{v}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}, \mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

Since the eigenvalues are distinct, we know it's diagonalizable.

**Step 1: Form P and D.**
$P = \begin{pmatrix} \mathbf{v}_1 & \mathbf{v}_2 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}$
$D = \begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}$

**Step 2: Calculate $P^{-1}$.**
For a 2x2 matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the inverse is $\frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
Here, $a=1, b=1, c=-2, d=1$.
Determinant of $P$: $(1)(1) - (1)(-2) = 1 + 2 = 3$.
$P^{-1} = \frac{1}{3} \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 1/3 & -1/3 \\ 2/3 & 1/3 \end{pmatrix}$

**Step 3: Verify the diagonalization $D = P^{-1}AP$.**
Let's calculate $P^{-1}AP$:
$AP = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix} = \begin{pmatrix} 4(1)+1(-2) & 4(1)+1(1) \\ 2(1)+3(-2) & 2(1)+3(1) \end{pmatrix} = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$

Now, $P^{-1}(AP)$:
$P^{-1}(AP) = \begin{pmatrix} 1/3 & -1/3 \\ 2/3 & 1/3 \end{pmatrix} \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$
$= \begin{pmatrix} \frac{1}{3}(2) - \frac{1}{3}(-4) & \frac{1}{3}(5) - \frac{1}{3}(5) \\ \frac{2}{3}(2) + \frac{1}{3}(-4) & \frac{2}{3}(5) + \frac{1}{3}(5) \end{pmatrix}$
$= \begin{pmatrix} \frac{2+4}{3} & \frac{5-5}{3} \\ \frac{4-4}{3} & \frac{10+5}{3} \end{pmatrix} = \begin{pmatrix} \frac{6}{3} & 0 \\ 0 & \frac{15}{3} \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}$

And indeed, this is our matrix $D$. So, we have successfully diagonalized $A$.

## 5. Applications of Diagonalization

Why go through all this trouble? Diagonalization simplifies many computations and provides deep insights into the behavior of linear systems.

### 5.1. Computing Matrix Powers ($A^k$)

Calculating $A^k$ directly for large $k$ can be tedious. If $A = PDP^{-1}$, then:
$A^2 = (PDP^{-1})(PDP^{-1}) = PD(P^{-1}P)DP^{-1} = PDIDP^{-1} = PD^2P^{-1}$
$A^3 = A^2A = (PD^2P^{-1})(PDP^{-1}) = PD^2(P^{-1}P)DP^{-1} = PD^2IDP^{-1} = PD^3P^{-1}$
In general, $A^k = PD^kP^{-1}$.

And calculating $D^k$ is trivial for a diagonal matrix:
If $D = \begin{pmatrix} \lambda_1 & 0 & \dots \\ 0 & \lambda_2 & \dots \\ \vdots & \vdots & \ddots \end{pmatrix}$, then $D^k = \begin{pmatrix} \lambda_1^k & 0 & \dots \\ 0 & \lambda_2^k & \dots \\ \vdots & \vdots & \ddots \end{pmatrix}$.

This is a huge simplification! Instead of multiplying $A$ by itself $k-1$ times, we compute $P$, $D$, $P^{-1}$ once, then raise the diagonal entries of $D$ to the power $k$. This is very efficient.

**Exam Tip:** Questions asking to compute high powers of a matrix are almost always testing your understanding of diagonalization.

### 5.2. Solving Systems of Linear Differential Equations

This is where diagonalization has immense practical use in electrical and physical sciences. Consider a system of first-order linear differential equations:

$\frac{d\mathbf{x}}{dt} = A\mathbf{x}$

Where $\mathbf{x}(t)$ is a vector of dependent variables, and $A$ is a constant matrix.

If we diagonalize $A$ as $A = PDP^{-1}$, we can perform a change of variables. Let $\mathbf{y} = P^{-1}\mathbf{x}$. Then $\mathbf{x} = P\mathbf{y}$.
Substituting into the differential equation:
$\frac{d(P\mathbf{y})}{dt} = A(P\mathbf{y})$
Since $P$ is a constant matrix, $\frac{dP\mathbf{y}}{dt} = P\frac{d\mathbf{y}}{dt}$.
$P\frac{d\mathbf{y}}{dt} = AP\mathbf{y}$

Multiply by $P^{-1}$ on the left:
$P^{-1}P\frac{d\mathbf{y}}{dt} = P^{-1}AP\mathbf{y}$
$I\frac{d\mathbf{y}}{dt} = D\mathbf{y}$
$\frac{d\mathbf{y}}{dt} = D\mathbf{y}$

This transformed system is decoupled because $D$ is diagonal. If $D = \begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix}$ and $\mathbf{y} = \begin{pmatrix} y_1 \\ y_2 \end{pmatrix}$, then:
$\frac{dy_1}{dt} = \lambda_1 y_1$
$\frac{dy_2}{dt} = \lambda_2 y_2$

These are simple, uncoupled first-order linear ODEs. Their solutions are:
$y_1(t) = c_1 e^{\lambda_1 t}$
$y_2(t) = c_2 e^{\lambda_2 t}$

Where $c_1$ and $c_2$ are constants determined by initial conditions.
Once we have $\mathbf{y}(t)$, we can find $\mathbf{x}(t)$ using $\mathbf{x} = P\mathbf{y}$:
$\mathbf{x}(t) = P \begin{pmatrix} c_1 e^{\lambda_1 t} \\ c_2 e^{\lambda_2 t} \end{pmatrix}$

This is a direct link to **Course Outcome 2 (CO2)**, solving homogeneous linear differential equations with constant coefficients. Diagonalization provides the framework to transform a coupled system into a set of simple, uncoupled equations that are easily solved.

### 5.3. Other Applications

*   **Stability Analysis:** In control systems and dynamical systems, the eigenvalues of a system matrix determine its stability. If all eigenvalues have negative real parts, the system is stable.
*   **Quantum Mechanics:** In quantum mechanics, observables (like energy or momentum) are represented by operators, which can be viewed as matrices. The eigenvalues of these matrices represent the possible values that can be measured, and the eigenvectors represent the states of the system. Diagonalizing the Hamiltonian matrix (which represents energy) yields the energy levels of a quantum system.
*   **Vibrational Analysis:** In mechanical engineering, diagonalization is used to find the natural frequencies and modes of vibration of structures.

## 6. When is a Matrix NOT Diagonalizable?

A matrix $A$ is not diagonalizable if it does not have $n$ linearly independent eigenvectors. This typically happens when eigenvalues are repeated, and the number of linearly independent eigenvectors for a repeated eigenvalue is less than its algebraic multiplicity.

**Example of a Non-Diagonalizable Matrix:**

Let $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.

1.  **Eigenvalues:**
    $\det(A - \lambda I) = \det \begin{pmatrix} 1-\lambda & 1 \\ 0 & 1-\lambda \end{pmatrix} = (1-\lambda)(1-\lambda) - 0 = (1-\lambda)^2$.
    The only eigenvalue is $\lambda = 1$ with algebraic multiplicity 2.

2.  **Eigenvectors:**
    Solve $(A - 1I)\mathbf{v} = \mathbf{0}$:
    $\begin{pmatrix} 1-1 & 1 \\ 0 & 1-1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
    This gives the equation $0v_1 + 1v_2 = 0$, so $v_2 = 0$.
    $v_1$ can be any non-zero scalar. Let $v_1 = t$.
    The eigenvectors are of the form $\mathbf{v} = \begin{pmatrix} t \\ 0 \end{pmatrix} = t \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
    There is only one linearly independent eigenvector, $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

Since we only found one linearly independent eigenvector for a 2x2 matrix, $A$ cannot be diagonalized. You can't form an invertible matrix $P$ with only one column of eigenvectors.

**Common Pitfall:** Assuming a matrix is diagonalizable just because it's square. Always check for $n$ linearly independent eigenvectors!

## 7. Summary and Key Takeaways

*   **Diagonalization** transforms a matrix $A$ into a diagonal matrix $D$ via $D = P^{-1}AP$, where $P$ contains linearly independent eigenvectors of $A$.
*   **Eigenvectors** ($\mathbf{v}$) are non-zero vectors such that $A\mathbf{v} = \lambda\mathbf{v}$.
*   **Eigenvalues** ($\lambda$) are scalars that satisfy the **characteristic equation** $\det(A - \lambda I) = 0$.
*   To find eigenvectors for a given eigenvalue $\lambda$, solve $(A - \lambda I)\mathbf{v} = \mathbf{0}$ using techniques like Gaussian elimination.
*   A matrix $A$ is diagonalizable if and only if it has $n$ linearly independent eigenvectors. Distinct eigenvalues guarantee diagonalizability.
*   Diagonalization simplifies computations like matrix powers ($A^k = PD^kP^{-1}$) and solving systems of linear ODEs ($\frac{d\mathbf{x}}{dt} = A\mathbf{x}$).
*   Matrices with repeated eigenvalues might not be diagonalizable if the number of linearly independent eigenvectors is less than the algebraic multiplicity of the eigenvalue.

This topic is a vital bridge between linear algebra and differential equations, directly impacting **CO1** and **CO2**. Mastering it will give you powerful tools for analyzing dynamic systems in your field.

---

## Sample Questions and Answers

**Question 1 (Conceptual):** What is the fundamental requirement for a matrix to be diagonalizable?

**Answer:** A matrix $A$ of size $n \times n$ is diagonalizable if and only if it has $n$ linearly independent eigenvectors. These eigenvectors form the columns of the change-of-basis matrix $P$, which must be invertible. If the matrix has $n$ distinct eigenvalues, it is guaranteed to be diagonalizable.

**Question 2 (Procedural):** Find the eigenvalues and eigenvectors of the matrix $B = \begin{pmatrix} 3 & -1 \\ 1 & 1 \end{pmatrix}$. Determine if it is diagonalizable.

**Answer:**
1.  **Eigenvalues:**
    Characteristic equation: $\det(B - \lambda I) = 0$.
    $B - \lambda I = \begin{pmatrix} 3-\lambda & -1 \\ 1 & 1-\lambda \end{pmatrix}$
    $\det(B - \lambda I) = (3-\lambda)(1-\lambda) - (-1)(1) = 3 - 3\lambda - \lambda + \lambda^2 + 1 = \lambda^2 - 4\lambda + 4$.
    Setting the determinant to zero: $\lambda^2 - 4\lambda + 4 = 0$.
    This factors as $(\lambda - 2)^2 = 0$.
    So, the only eigenvalue is $\lambda = 2$, with algebraic multiplicity 2.

2.  **Eigenvectors:**
    Solve $(B - 2I)\mathbf{v} = \mathbf{0}$.
    $B - 2I = \begin{pmatrix} 3-2 & -1 \\ 1 & 1-2 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ 1 & -1 \end{pmatrix}$.
    The system is:
    $\begin{pmatrix} 1 & -1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
    This yields the equation $v_1 - v_2 = 0$, which means $v_1 = v_2$.
    If we let $v_1 = t$ (a non-zero scalar), then $v_2 = t$.
    The eigenvectors are of the form $\mathbf{v} = \begin{pmatrix} t \\ t \end{pmatrix} = t \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
    There is only one linearly independent eigenvector: $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

3.  **Diagonalizability:**
    Since the matrix $B$ is 2x2, it needs 2 linearly independent eigenvectors to be diagonalizable. We only found one. Therefore, $B$ is **not diagonalizable**.

**Question 3 (Application/Exam-Oriented):** Use diagonalization to compute $A^5$ for the matrix $A = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$.

**Answer:**
1.  **Find Eigenvalues:**
    $\det(A - \lambda I) = \det \begin{pmatrix} 3-\lambda & 1 \\ 0 & 2-\lambda \end{pmatrix} = (3-\lambda)(2-\lambda) - 0 = (3-\lambda)(2-\lambda)$.
    Eigenvalues are $\lambda_1 = 3$ and $\lambda_2 = 2$. Since the eigenvalues are distinct, the matrix is diagonalizable.

2.  **Find Eigenvectors:**
    For $\lambda_1 = 3$:
    $(A - 3I)\mathbf{v} = \begin{pmatrix} 0 & 1 \\ 0 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_2 = 0$.
    Let $v_1 = t$. Eigenvector $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

    For $\lambda_2 = 2$:
    $(A - 2I)\mathbf{v} = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_1 + v_2 = 0 \implies v_1 = -v_2$.
    Let $v_2 = t$. Eigenvector $\mathbf{v}_2 = \begin{pmatrix} -1 \\ 1 \end{pmatrix}$.

3.  **Form P and D:**
    $P = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$
    $D = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$

4.  **Find $P^{-1}$:**
    $\det(P) = (1)(1) - (-1)(0) = 1$.
    $P^{-1} = \frac{1}{1} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.

5.  **Compute $D^5$:**
    $D^5 = \begin{pmatrix} 3^5 & 0 \\ 0 & 2^5 \end{pmatrix} = \begin{pmatrix} 243 & 0 \\ 0 & 32 \end{pmatrix}$.

6.  **Compute $A^5 = PD^5P^{-1}$:**
    $A^5 = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 243 & 0 \\ 0 & 32 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
    First, multiply $P$ and $D^5$:
    $\begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 243 & 0 \\ 0 & 32 \end{pmatrix} = \begin{pmatrix} 1(243) + (-1)(0) & 1(0) + (-1)(32) \\ 0(243) + 1(0) & 0(0) + 1(32) \end{pmatrix} = \begin{pmatrix} 243 & -32 \\ 0 & 32 \end{pmatrix}$
    Now, multiply by $P^{-1}$:
    $\begin{pmatrix} 243 & -32 \\ 0 & 32 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 243(1) + (-32)(0) & 243(1) + (-32)(1) \\ 0(1) + 32(0) & 0(1) + 32(1) \end{pmatrix} = \begin{pmatrix} 243 & 211 \\ 0 & 32 \end{pmatrix}$.

Therefore, $A^5 = \begin{pmatrix} 243 & 211 \\ 0 & 32 \end{pmatrix}$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
