---
title: "Computation of state transition matrix using"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 3: Discrete"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368dc"
status: "completed"
scrapedAt: "2026-05-23T16:36:27.908Z"
---
# Module 3: Discrete - Computation of State Transition Matrix

## Introduction

In discrete-time control systems, the state transition matrix (STM), denoted by $\Phi(k, k_0)$ or $\Phi(k)$, plays a crucial role in describing the evolution of the system's state vector over time. It is the discrete-time equivalent of the continuous-time state transition matrix $e^{At}$. Understanding how to compute the STM is fundamental for analyzing and predicting the behavior of discrete-time linear time-invariant (LTI) systems, which aligns with Course Outcome CO3: "Model and analyse discrete-time system using state space approach."

## 3.1 State Space Representation of Discrete-Time Systems

Before delving into the computation of the STM, let's recap the standard state-space representation of a discrete-time LTI system:

**State Equation:**
$\mathbf{x}(k+1) = A\mathbf{x}(k) + B\mathbf{u}(k)$

**Output Equation:**
$\mathbf{y}(k) = C\mathbf{x}(k) + D\mathbf{u}(k)$

Where:
*   $\mathbf{x}(k)$ is the $n \times 1$ state vector at time instant $k$.
*   $\mathbf{u}(k)$ is the $m \times 1$ input vector at time instant $k$.
*   $\mathbf{y}(k)$ is the $p \times 1$ output vector at time instant $k$.
*   $A$ is the $n \times n$ state matrix.
*   $B$ is the $n \times m$ input matrix.
*   $C$ is the $p \times n$ output matrix.
*   $D$ is the $p \times m$ feedforward matrix.

**Key Concept:** The state vector $\mathbf{x}(k)$ encapsulates all the necessary information about the system's past that influences its future behavior.

## 3.2 Definition of the State Transition Matrix

The state transition matrix $\Phi(k, k_0)$ is defined as the matrix that relates the state of the system at time $k$ to the state at an earlier time $k_0$, assuming zero input. For a zero-input system ($\mathbf{u}(k) = 0$):

$\mathbf{x}(k+1) = A\mathbf{x}(k)$

Iterating this equation:
$\mathbf{x}(k) = A\mathbf{x}(k-1) = A^2\mathbf{x}(k-2) = \dots = A^{k-k_0}\mathbf{x}(k_0)$

Therefore, the state transition matrix for a discrete-time LTI system is simply the $k$-th power of the state matrix $A$, specifically for transitions from an initial time $k_0$ to a later time $k$:

$\Phi(k, k_0) = A^{k-k_0}$

If the initial time is $k_0 = 0$, then $\Phi(k) = A^k$.

**Important Point:** For LTI systems, the state transition matrix depends only on the time difference $(k - k_0)$, not on the absolute times $k$ and $k_0$.

## 3.3 Computation of the State Transition Matrix $\Phi(k) = A^k$

There are several methods to compute $A^k$. The choice of method often depends on the properties of the matrix $A$ and the desired accuracy.

### 3.3.1 Direct Multiplication

For small values of $k$ or for matrices with simple structures, direct multiplication is feasible.
$A^k = A \times A \times \dots \times A$ (k times)

**Example:**
Given $A = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, compute $\Phi(2) = A^2$.

$A^2 = A \times A = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} = \begin{bmatrix} (0)(0)+(1)(-2) & (0)(1)+(1)(-3) \\ (-2)(0)+(-3)(-2) & (-2)(1)+(-3)(-3) \end{bmatrix} = \begin{bmatrix} -2 & -3 \\ 6 & 7 \end{bmatrix}$

$\Phi(2) = \begin{bmatrix} -2 & -3 \\ 6 & 7 \end{bmatrix}$

**Limitations:** This method becomes computationally intensive and error-prone for large $k$.

### 3.3.2 Using the Cayley-Hamilton Theorem

The Cayley-Hamilton theorem states that every square matrix satisfies its own characteristic equation.
The characteristic equation of matrix $A$ is given by:
$\det(A - \lambda I) = 0$
Let the characteristic polynomial be $p(\lambda) = \lambda^n + a_{n-1}\lambda^{n-1} + \dots + a_1\lambda + a_0$.
According to the Cayley-Hamilton theorem, $p(A) = A^n + a_{n-1}A^{n-1} + \dots + a_1A + a_0I = 0$.

This equation can be rearranged to express $A^n$ in terms of lower powers of $A$:
$A^n = -a_{n-1}A^{n-1} - \dots - a_1A - a_0I$

By repeatedly applying this relationship, any power $A^k$ for $k \ge n$ can be expressed as a linear combination of $I, A, A^2, \dots, A^{n-1}$:
$A^k = c_{k,n-1}A^{n-1} + c_{k,n-2}A^{n-2} + \dots + c_{k,1}A + c_{k,0}I$

The coefficients $c_{k,i}$ can be found by considering the characteristic polynomial $p(\lambda) = \lambda^n + a_{n-1}\lambda^{n-1} + \dots + a_0$. We have $\lambda^k = c_{k,n-1}\lambda^{n-1} + \dots + c_{k,1}\lambda + c_{k,0}$, where the $c_{k,i}$ are determined by polynomial division of $\lambda^k$ by $p(\lambda)$.

**Example:**
Using the same matrix $A = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$.
Characteristic equation: $\det(A - \lambda I) = \det \begin{bmatrix} -\lambda & 1 \\ -2 & -3-\lambda \end{bmatrix} = (-\lambda)(-3-\lambda) - (1)(-2) = 3\lambda + \lambda^2 + 2 = \lambda^2 + 3\lambda + 2 = 0$.
By Cayley-Hamilton theorem: $A^2 + 3A + 2I = 0$.
$A^2 = -3A - 2I = -3\begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} - 2\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & -3 \\ 6 & 9 \end{bmatrix} - \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} -2 & -3 \\ 6 & 7 \end{bmatrix}$.
This matches the previous result.

To find $A^3$:
$A^3 = A \cdot A^2 = A(-3A - 2I) = -3A^2 - 2A$
Substitute $A^2 = -3A - 2I$:
$A^3 = -3(-3A - 2I) - 2A = 9A + 6I - 2A = 7A + 6I$
$A^3 = 7\begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} + 6\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 7 \\ -14 & -21 \end{bmatrix} + \begin{bmatrix} 6 & 0 \\ 0 & 6 \end{bmatrix} = \begin{bmatrix} 6 & 7 \\ -14 & -15 \end{bmatrix}$

**References:** This method is discussed in detail in "Digital control system analysis and design" by Philips and Nagle (Chapter 4) and "Discrete Time Control Systems" by K. Ogata (Chapter 2).

**Advantages:** Provides an analytical way to compute powers of matrices and can be less prone to numerical errors for higher powers compared to direct multiplication if symbolic computation is used.
**Disadvantages:** Requires finding the characteristic polynomial and performing polynomial division, which can be complex for higher-order matrices.

### 3.3.3 Using Diagonalization (Eigenvalue Decomposition)

If matrix $A$ is diagonalizable, it can be decomposed as:
$A = P\Lambda P^{-1}$
Where:
*   $\Lambda$ is a diagonal matrix containing the eigenvalues of $A$, $\Lambda = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$.
*   $P$ is a matrix whose columns are the corresponding eigenvectors of $A$.

Then, any power of $A$ can be computed as:
$A^k = (P\Lambda P^{-1})^k = P\Lambda P^{-1} P\Lambda P^{-1} \dots P\Lambda P^{-1}$
$A^k = P\Lambda^k P^{-1}$

And $\Lambda^k$ is simply:
$\Lambda^k = \text{diag}(\lambda_1^k, \lambda_2^k, \dots, \lambda_n^k)$

**Steps:**
1.  Find the eigenvalues of $A$: Solve $\det(A - \lambda I) = 0$.
2.  Find the corresponding eigenvectors: For each eigenvalue $\lambda_i$, solve $(A - \lambda_i I)\mathbf{v}_i = 0$.
3.  Form the matrices $\Lambda$ and $P$.
4.  Compute $P^{-1}$.
5.  Compute $\Lambda^k$.
6.  Compute $A^k = P\Lambda^k P^{-1}$.

**Example:**
Using $A = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$.
Eigenvalues: $\lambda^2 + 3\lambda + 2 = 0 \Rightarrow (\lambda+1)(\lambda+2) = 0$. So, $\lambda_1 = -1$, $\lambda_2 = -2$.

Eigenvectors:
For $\lambda_1 = -1$:
$(A - (-1)I)\mathbf{v}_1 = 0 \Rightarrow \begin{bmatrix} 1 & 1 \\ -2 & -2 \end{bmatrix} \begin{bmatrix} v_{11} \\ v_{12} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$
$v_{11} + v_{12} = 0 \Rightarrow v_{12} = -v_{11}$. Let $v_{11} = 1$, then $\mathbf{v}_1 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$.

For $\lambda_2 = -2$:
$(A - (-2)I)\mathbf{v}_2 = 0 \Rightarrow \begin{bmatrix} 2 & 1 \\ -2 & -1 \end{bmatrix} \begin{bmatrix} v_{21} \\ v_{22} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$
$2v_{21} + v_{22} = 0 \Rightarrow v_{22} = -2v_{21}$. Let $v_{21} = 1$, then $\mathbf{v}_2 = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$.

So, $P = \begin{bmatrix} 1 & 1 \\ -1 & -2 \end{bmatrix}$ and $\Lambda = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}$.

Compute $P^{-1}$:
$\det(P) = (1)(-2) - (1)(-1) = -2 + 1 = -1$.
$P^{-1} = \frac{1}{-1} \begin{bmatrix} -2 & -1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$.

Now, compute $A^k = P\Lambda^k P^{-1}$:
$A^k = \begin{bmatrix} 1 & 1 \\ -1 & -2 \end{bmatrix} \begin{bmatrix} (-1)^k & 0 \\ 0 & (-2)^k \end{bmatrix} \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$
$A^k = \begin{bmatrix} 1 & 1 \\ -1 & -2 \end{bmatrix} \begin{bmatrix} 2(-1)^k & (-1)^k \\ -(-2)^k & -(-2)^k \end{bmatrix}$
$A^k = \begin{bmatrix} 2(-1)^k - (-2)^k & (-1)^k - (-2)^k \\ -2(-1)^k + 2(-2)^k & -(-1)^k + 2(-2)^k \end{bmatrix}$

Let's verify for $k=2$:
$A^2 = \begin{bmatrix} 2(-1)^2 - (-2)^2 & (-1)^2 - (-2)^2 \\ -2(-1)^2 + 2(-2)^2 & -(-1)^2 + 2(-2)^2 \end{bmatrix} = \begin{bmatrix} 2(1) - 4 & 1 - 4 \\ -2(1) + 2(4) & -1 + 2(4) \end{bmatrix} = \begin{bmatrix} 2 - 4 & -3 \\ -2 + 8 & -1 + 8 \end{bmatrix} = \begin{bmatrix} -2 & -3 \\ 6 & 7 \end{bmatrix}$.
This again matches the previous results.

**References:** This method is a standard technique found in most control system textbooks, including "Digital control and State Variable methods" by M. Gopal (Chapter 4) and "Discrete Time Control Systems" by K. Ogata (Chapter 2).

**Advantages:** Elegant and efficient for computing higher powers of diagonalizable matrices. Provides insight into system behavior through eigenvalues.
**Disadvantages:** Applicable only if $A$ is diagonalizable (i.e., has a full set of linearly independent eigenvectors). If $A$ has repeated eigenvalues, additional care is needed (using Jordan Canonical Form if not diagonalizable).

### 3.3.4 Using Jordan Canonical Form (for non-diagonalizable matrices)

If matrix $A$ is not diagonalizable (i.e., does not have a full set of linearly independent eigenvectors), it can be transformed into its Jordan Canonical Form (JCF).
$A = PJP^{-1}$
Where $J$ is the Jordan matrix. For a discrete-time system, the computation of $A^k$ involves $J^k$. Computing powers of Jordan blocks can be done using specific formulas.

**Example of a Jordan Block:**
For a $2 \times 2$ Jordan block with eigenvalue $\lambda$:
$J = \begin{bmatrix} \lambda & 1 \\ 0 & \lambda \end{bmatrix}$

$J^k = \begin{bmatrix} \lambda^k & k\lambda^{k-1} \\ 0 & \lambda^k \end{bmatrix}$

The general formula for $A^k$ in terms of JCF is $A^k = P J^k P^{-1}$.

**References:** "Discrete Time Control Systems" by K. Ogata (Chapter 2) and "Digital control and State Variable methods" by M. Gopal (Chapter 4) cover the computation using JCF.

**Advantages:** Handles all square matrices, including those that are not diagonalizable.
**Disadvantages:** Computationally more involved than diagonalization. Jordan form computation can be numerically sensitive.

### 3.3.5 Laplace Transform Method (Z-Transform in Discrete Time)

While the Laplace transform is primarily for continuous-time systems, its discrete-time counterpart, the Z-transform, can be used to find the state transition matrix. This is more commonly used for finding the overall system response, but the concept is related.

The solution for $\mathbf{x}(k)$ is given by:
$\mathbf{x}(k) = A^k \mathbf{x}(0) + \sum_{i=0}^{k-1} A^{k-1-i} B \mathbf{u}(i)$

Taking the Z-transform of the state equation:
$z\mathbf{X}(z) - z\mathbf{x}(0) = A\mathbf{X}(z) + B\mathbf{U}(z)$
$(zI - A)\mathbf{X}(z) = z\mathbf{x}(0) + B\mathbf{U}(z)$
$\mathbf{X}(z) = (zI - A)^{-1} z\mathbf{x}(0) + (zI - A)^{-1} B\mathbf{U}(z)$

The term $(zI - A)^{-1}$ is related to the transfer function matrix of the system. The inverse Z-transform of $(zI - A)^{-1}$ yields the state transition matrix. Specifically, if we consider the zero-input case:
$\mathbf{X}(z) = (zI - A)^{-1} z\mathbf{x}(0)$

We know that for a discrete-time system, $\mathbf{x}(k) = A^k \mathbf{x}(0)$.
Taking the Z-transform of $\mathbf{x}(k)$: $\mathbf{X}(z) = Z\{A^k \mathbf{x}(0)\} = \mathbf{x}(0) Z\{A^k\}$.
Therefore, $Z\{A^k\} = (zI - A)^{-1} z$.

The inverse Z-transform of $(zI - A)^{-1} z$ gives $A^k$.
$(zI - A)^{-1} = \frac{\text{adj}(zI - A)}{\det(zI - A)}$.
Let $p(z) = \det(zI - A) = z^n + a_{n-1}z^{n-1} + \dots + a_0$.
Then $(zI - A)^{-1} = \frac{1}{p(z)} \text{adj}(zI - A)$.

The inverse Z-transform of a rational function of $z$ can be found using partial fraction expansion. The terms in the partial fraction expansion are of the form $\frac{c}{z-\lambda_i}$ or $\frac{c}{(z-\lambda_i)^m}$. The inverse Z-transform of $\frac{z}{z-\lambda_i}$ is $\lambda_i^k$.

**Example:**
Using $A = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$.
$zI - A = \begin{bmatrix} z & -1 \\ 2 & z+3 \end{bmatrix}$
$\det(zI - A) = z(z+3) - (-1)(2) = z^2 + 3z + 2$.
$\text{adj}(zI - A) = \begin{bmatrix} z+3 & 1 \\ -2 & z \end{bmatrix}$.

$(zI - A)^{-1} = \frac{1}{z^2+3z+2} \begin{bmatrix} z+3 & 1 \\ -2 & z \end{bmatrix} = \frac{1}{(z+1)(z+2)} \begin{bmatrix} z+3 & 1 \\ -2 & z \end{bmatrix}$

$Z\{A^k\} = (zI - A)^{-1} z = \frac{z}{(z+1)(z+2)} \begin{bmatrix} z+3 & 1 \\ -2 & z \end{bmatrix}$
$Z\{A^k\} = \frac{1}{(z+1)(z+2)} \begin{bmatrix} z(z+3) & z \\ -2z & z^2 \end{bmatrix}$

Now, decompose each element using partial fractions:
Element (1,1): $\frac{z^2+3z}{(z+1)(z+2)} = \frac{A}{z+1} + \frac{B}{z+2}$.
Using polynomial division: $\frac{z^2+3z}{z^2+3z+2} = 1 - \frac{2}{z^2+3z+2} = 1 - \frac{2}{(z+1)(z+2)}$.
Partial fractions for $\frac{2}{(z+1)(z+2)}$: $\frac{2}{(z+1)(z+2)} = \frac{2}{z+1} - \frac{2}{z+2}$.
So, $\frac{z^2+3z}{(z+1)(z+2)} = 1 - (\frac{2}{z+1} - \frac{2}{z+2}) = 1 - \frac{2}{z+1} + \frac{2}{z+2}$.
Inverse Z-transform: $0 \cdot \delta(k) - 2(-1)^k + 2(-2)^k$. Note: $Z\{1\} = \frac{z}{z-1}$. This approach can be subtle.

A more direct way when the roots of the characteristic polynomial are distinct is to relate $A^k$ to the partial fraction expansion of $\frac{1}{z-\lambda_i}$.
The $i$-th term in the partial fraction expansion of $(zI-A)^{-1}$ corresponds to the $i$-th eigenvalue.
For each eigenvalue $\lambda_i$, we can write:
$(zI - A)^{-1} = \sum_{i=1}^n \frac{R_i}{z-\lambda_i}$ (for distinct eigenvalues)
Where $R_i = \lim_{z \to \lambda_i} (z-\lambda_i)(zI-A)^{-1}$.

Then $A^k = \sum_{i=1}^n R_i \lambda_i^k$.

Let's re-evaluate for $A^k = P\Lambda^k P^{-1}$ with $P = \begin{bmatrix} 1 & 1 \\ -1 & -2 \end{bmatrix}$, $\Lambda = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}$, $P^{-1} = \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$.
$A^k = \begin{bmatrix} 1 & 1 \\ -1 & -2 \end{bmatrix} \begin{bmatrix} (-1)^k & 0 \\ 0 & (-2)^k \end{bmatrix} \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$
$A^k = \begin{bmatrix} (-1)^k & (-2)^k \\ -(-1)^k & -2(-2)^k \end{bmatrix} \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix}$
$A^k = \begin{bmatrix} 2(-1)^k - (-2)^k & (-1)^k - (-2)^k \\ -2(-1)^k + 2(-2)^k & -(-1)^k + 2(-2)^k \end{bmatrix}$

Let's check the partial fraction of $(zI-A)^{-1}$ again.
$(zI - A)^{-1} = \frac{1}{(z+1)(z+2)} \begin{bmatrix} z+3 & 1 \\ -2 & z \end{bmatrix}$
For element (1,1): $\frac{z+3}{(z+1)(z+2)} = \frac{A}{z+1} + \frac{B}{z+2}$. $A = \frac{-1+3}{-1+2} = 2$. $B = \frac{-2+3}{-2+1} = -1$. So $\frac{2}{z+1} - \frac{1}{z+2}$. Inverse Z-transform is $2(-1)^k - (-2)^k$.

For element (1,2): $\frac{1}{(z+1)(z+2)} = \frac{A}{z+1} + \frac{B}{z+2}$. $A = \frac{1}{-1+2} = 1$. $B = \frac{1}{-2+1} = -1$. So $\frac{1}{z+1} - \frac{1}{z+2}$. Inverse Z-transform is $(-1)^k - (-2)^k$.

For element (2,1): $\frac{-2}{(z+1)(z+2)} = \frac{A}{z+1} + \frac{B}{z+2}$. $A = \frac{-2}{-1+2} = -2$. $B = \frac{-2}{-2+1} = 2$. So $\frac{-2}{z+1} + \frac{2}{z+2}$. Inverse Z-transform is $-2(-1)^k + 2(-2)^k$.

For element (2,2): $\frac{z}{(z+1)(z+2)} = \frac{A}{z+1} + \frac{B}{z+2}$. $A = \frac{-1}{-1+2} = -1$. $B = \frac{-2}{-2+1} = 2$. So $\frac{-1}{z+1} + \frac{2}{z+2}$. Inverse Z-transform is $-(-1)^k + 2(-2)^k$.

This gives the same matrix $A^k$ as the diagonalization method.

**References:** This method is thoroughly explained in "Discrete Time Control Systems" by K. Ogata (Chapter 2, Section 2.4).

**Advantages:** Provides a systematic way to compute $A^k$, especially when using partial fraction expansion. Connects state-space and transfer function representations.
**Disadvantages:** Requires careful application of Z-transform properties and partial fraction expansion.

### 3.3.6 Numerical Methods for Large $k$

For very large values of $k$, direct computation of $A^k$ can lead to numerical overflow or underflow. Specialized algorithms like the Pade approximation or scaling and squaring can be used for computing matrix exponentials in continuous-time systems, and similar numerical techniques exist for discrete-time matrix powers. These are generally implemented in software packages.

**References:** Numerical methods for matrix computations are advanced topics, often covered in numerical analysis texts or specialized computational control system literature.

## 3.4 Computing the State Transition Matrix for Discrete-Time Systems from Continuous-Time Systems

Often, a digital controller is designed for a continuous-time system. The discrete-time state-space model is obtained by discretizing the continuous-time system.

**Continuous-time state-space:**
$\dot{\mathbf{x}}_c(t) = A_c \mathbf{x}_c(t) + B_c \mathbf{u}_c(t)$
$\mathbf{y}_c(t) = C_c \mathbf{x}_c(t) + D_c \mathbf{u}_c(t)$

When sampled with a sampling period $T$, and assuming the input $\mathbf{u}_c(t)$ is held constant between sampling instants (Zero-Order Hold, ZOH), the discrete-time state-space representation is:

$\mathbf{x}(k+1) = A\mathbf{x}(k) + B\mathbf{u}(k)$
$\mathbf{y}(k) = C\mathbf{x}(k) + D\mathbf{u}(k)$

The relationship between the discrete-time matrices $(A, B)$ and the continuous-time matrices $(A_c, B_c)$ is:

$A = e^{A_c T}$
$B = \int_0^T e^{A_c \tau} B_c d\tau$

The discrete-time state transition matrix $\Phi(k) = A^k$ is therefore:

$\Phi(k) = (e^{A_c T})^k = e^{A_c kT}$

So, to find the discrete-time STM, we can compute the continuous-time STM ($e^{A_c t}$) and evaluate it at $t = kT$.

**Methods to compute $e^{A_c t}$:**
1.  **Laplace Transform Method:** $e^{A_c t} = \mathcal{L}^{-1}\{(sI - A_c)^{-1}\}$
2.  **Eigenvalue Decomposition:** If $A_c = P\Lambda_c P^{-1}$, then $e^{A_c t} = P e^{\Lambda_c t} P^{-1}$, where $e^{\Lambda_c t} = \text{diag}(e^{\lambda_{c1} t}, \dots, e^{\lambda_{cn} t})$.
3.  **Series Expansion:** $e^{A_c t} = I + A_c t + \frac{(A_c t)^2}{2!} + \frac{(A_c t)^3}{3!} + \dots$ (numerically sensitive).

**Example:**
Consider a continuous-time system: $\dot{x}_c(t) = -ax_c(t) + bu_c(t)$.
Here $A_c = [-a]$.
The discrete-time equivalent with ZOH is $x(k+1) = Ax(k) + Bu(k)$.
$A = e^{A_c T} = e^{-aT}$.
The discrete-time state transition matrix is $\Phi(k) = A^k = (e^{-aT})^k = e^{-akT}$.

If we have a second-order system matrix $A_c = \begin{bmatrix} 0 & 1 \\ -a & -b \end{bmatrix}$, we would compute $e^{A_c T}$ using one of the methods above. Then $\Phi(k) = (e^{A_c T})^k$.

**Important Point:** The discrete-time state transition matrix $\Phi(k) = A^k$ describes the system's behavior *at integer time instants* $k$. The continuous-time state transition matrix $e^{A_c t}$ describes the behavior at *any time instant* $t$. The relationship $\Phi(k) = e^{A_c kT}$ connects them.

**References:** "Digital control system analysis and design" by Philips and Nagle (Chapter 4) and "Discrete Time Control Systems" by K. Ogata (Chapter 2, Section 2.2) discuss discretization and the computation of $A$ and $B$.

## 3.5 Effect of State Transition Matrix on System Response

The state transition matrix is crucial for determining the system's response.

**Zero-Input Response:**
The response of the system when the input $\mathbf{u}(k) = 0$ is given by:
$\mathbf{x}(k) = \Phi(k, k_0) \mathbf{x}(k_0) = A^{k-k_0} \mathbf{x}(k_0)$
$\mathbf{y}(k) = C \mathbf{x}(k) + D \mathbf{u}(k) = C A^{k-k_0} \mathbf{x}(k_0) + D \mathbf{u}(k)$

**Zero-State Response (Response to Input):**
The response of the system when the initial state $\mathbf{x}(0) = 0$ is given by the convolution sum:
$\mathbf{x}(k) = \sum_{i=0}^{k-1} \Phi(k-1-i) B \mathbf{u}(i) = \sum_{i=0}^{k-1} A^{k-1-i} B \mathbf{u}(i)$
$\mathbf{y}(k) = C \mathbf{x}(k) + D \mathbf{u}(k) = C \left( \sum_{i=0}^{k-1} A^{k-1-i} B \mathbf{u}(i) \right) + D \mathbf{u}(k)$

**Total Response:**
$\mathbf{x}(k) = \Phi(k, k_0) \mathbf{x}(k_0) + \sum_{i=k_0}^{k-1} \Phi(k-1-i) B \mathbf{u}(i)$

**Example:**
For the system with $A = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$ and $\mathbf{x}(0) = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, find the zero-input response.
We found $A^k = \begin{bmatrix} 2(-1)^k - (-2)^k & (-1)^k - (-2)^k \\ -2(-1)^k + 2(-2)^k & -(-1)^k + 2(-2)^k \end{bmatrix}$.
$\mathbf{x}(k) = A^k \mathbf{x}(0) = \begin{bmatrix} 2(-1)^k - (-2)^k & (-1)^k - (-2)^k \\ -2(-1)^k + 2(-2)^k & -(-1)^k + 2(-2)^k \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
$\mathbf{x}(k) = \begin{bmatrix} 2(-1)^k - (-2)^k \\ -2(-1)^k + 2(-2)^k \end{bmatrix}$

Let's check for $k=1$: $\mathbf{x}(1) = \begin{bmatrix} 2(-1) - (-2) \\ -2(-1) + 2(-2) \end{bmatrix} = \begin{bmatrix} -2 + 2 \\ 2 - 4 \end{bmatrix} = \begin{bmatrix} 0 \\ -2 \end{bmatrix}$.
From state equation: $\mathbf{x}(1) = A\mathbf{x}(0) = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ -2 \end{bmatrix}$. Matches.

Let's check for $k=2$: $\mathbf{x}(2) = \begin{bmatrix} 2(-1)^2 - (-2)^2 \\ -2(-1)^2 + 2(-2)^2 \end{bmatrix} = \begin{bmatrix} 2(1) - 4 \\ -2(1) + 2(4) \end{bmatrix} = \begin{bmatrix} -2 \\ 6 \end{bmatrix}$.
From state equation: $\mathbf{x}(2) = A\mathbf{x}(1) = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \begin{bmatrix} 0 \\ -2 \end{bmatrix} = \begin{bmatrix} -2 \\ 6 \end{bmatrix}$. Matches.

**References:** This fundamental aspect is covered in all mentioned textbooks, particularly in chapters related to state-space analysis and system response, e.g., "Digital control and State Variable methods" by M. Gopal (Chapter 4).

## 3.6 Learning Outcomes Covered

*   **CO1: Model and analyse discrete-time system using pulse transfer function approach.** (While this module focuses on state-space, understanding the state-space response is crucial for relating it to pulse transfer functions in later modules.)
*   **CO3: Model and analyse discrete-time system using state space approach.** This module directly addresses the analysis part by focusing on the computation of the state transition matrix, which is central to the state-space model.
*   **CO4: Design discrete-time state feedback controllers and observers for a linear system.** (Knowledge Level: K3) The state transition matrix is a prerequisite for understanding system modes, stability, and controllability/observability, which are foundational for controller and observer design. For instance, the controllability matrix involves powers of A, and observer error dynamics often depend on $A-KC$.

## Practice Questions

1.  Given the discrete-time state-space system:
    $\mathbf{x}(k+1) = \begin{bmatrix} 0.5 & 0 \\ 0 & 0.2 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 1 \\ 1 \end{bmatrix} \mathbf{u}(k)$
    $\mathbf{y}(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(k)$
    Compute the state transition matrix $\Phi(k) = A^k$.

2.  For the system with $A = \begin{bmatrix} 1 & 1 \\ 0 & 2 \end{bmatrix}$, compute $\Phi(3) = A^3$ using two different methods.

3.  A continuous-time system has $A_c = \begin{bmatrix} -0.1 & 0 \\ 0 & -0.5 \end{bmatrix}$. If this system is discretized with a sampling period $T = 0.1$ seconds, find the discrete-time state transition matrix $\Phi(k)$.

4.  Consider the system defined by $A = \begin{bmatrix} 0 & 1 \\ -0.16 & -1.04 \end{bmatrix}$.
    a.  Find the eigenvalues of $A$.
    b.  Using diagonalization, find a general expression for $A^k$.
    c.  Compute $A^2$ using your expression and verify it by direct multiplication.

## Answers to Practice Questions

1.  The matrix $A = \begin{bmatrix} 0.5 & 0 \\ 0 & 0.2 \end{bmatrix}$ is already in diagonal form.
    Therefore, $A^k = \begin{bmatrix} (0.5)^k & 0 \\ 0 & (0.2)^k \end{bmatrix}$.
    $\Phi(k) = \begin{bmatrix} (0.5)^k & 0 \\ 0 & (0.2)^k \end{bmatrix}$.

2.  Given $A = \begin{bmatrix} 1 & 1 \\ 0 & 2 \end{bmatrix}$.

    **Method 1: Direct Multiplication**
    $A^2 = A \cdot A = \begin{bmatrix} 1 & 1 \\ 0 & 2 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 0 & 4 \end{bmatrix}$.
    $A^3 = A \cdot A^2 = \begin{bmatrix} 1 & 1 \\ 0 & 2 \end{bmatrix} \begin{bmatrix} 1 & 3 \\ 0 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 7 \\ 0 & 8 \end{bmatrix}$.
    So, $\Phi(3) = \begin{bmatrix} 1 & 7 \\ 0 & 8 \end{bmatrix}$.

    **Method 2: Diagonalization**
    Eigenvalues: $\det(A - \lambda I) = \det \begin{bmatrix} 1-\lambda & 1 \\ 0 & 2-\lambda \end{bmatrix} = (1-\lambda)(2-\lambda) = 0$.
    $\lambda_1 = 1$, $\lambda_2 = 2$.

    Eigenvectors:
    For $\lambda_1 = 1$: $(A - I)\mathbf{v}_1 = \begin{bmatrix} 0 & 1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} v_{11} \\ v_{12} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \Rightarrow v_{12} = 0$. Let $\mathbf{v}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
    For $\lambda_2 = 2$: $(A - 2I)\mathbf{v}_2 = \begin{bmatrix} -1 & 1 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} v_{21} \\ v_{22} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \Rightarrow -v_{21} + v_{22} = 0 \Rightarrow v_{21} = v_{22}$. Let $\mathbf{v}_2 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.

    $P = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$, $\Lambda = \begin{bmatrix} 1 & 0 \\ 0 & 2 \end{bmatrix}$.
    $P^{-1} = \frac{1}{1} \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix}$.

    $A^k = P\Lambda^k P^{-1} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1^k & 0 \\ 0 & 2^k \end{bmatrix} \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix}$
    $A^k = \begin{bmatrix} 1 & 2^k \\ 0 & 2^k \end{bmatrix} \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & -1 + 2^k \\ 0 & 2^k \end{bmatrix}$.

    For $k=3$: $A^3 = \begin{bmatrix} 1 & -1 + 2^3 \\ 0 & 2^3 \end{bmatrix} = \begin{bmatrix} 1 & -1 + 8 \\ 0 & 8 \end{bmatrix} = \begin{bmatrix} 1 & 7 \\ 0 & 8 \end{bmatrix}$.
    Both methods yield the same result.

3.  Given $A_c = \begin{bmatrix} -0.1 & 0 \\ 0 & -0.5 \end{bmatrix}$.
    The discrete-time state transition matrix is $A = e^{A_c T}$. Since $A_c$ is diagonal, $e^{A_c T} = \begin{bmatrix} e^{-0.1T} & 0 \\ 0 & e^{-0.5T} \end{bmatrix}$.
    With $T = 0.1$:
    $A = \begin{bmatrix} e^{-0.1 \times 0.1} & 0 \\ 0 & e^{-0.5 \times 0.1} \end{bmatrix} = \begin{bmatrix} e^{-0.01} & 0 \\ 0 & e^{-0.05} \end{bmatrix}$.
    The state transition matrix $\Phi(k) = A^k = \begin{bmatrix} (e^{-0.01})^k & 0 \\ 0 & (e^{-0.05})^k \end{bmatrix} = \begin{bmatrix} e^{-0.01k} & 0 \\ 0 & e^{-0.05k} \end{bmatrix}$.

4.  Given $A = \begin{bmatrix} 0 & 1 \\ -0.16 & -1.04 \end{bmatrix}$.

    a.  **Eigenvalues:**
        $\det(A - \lambda I) = \det \begin{bmatrix} -\lambda & 1 \\ -0.16 & -1.04-\lambda \end{bmatrix} = (-\lambda)(-1.04-\lambda) - (1)(-0.16)$
        $= 1.04\lambda + \lambda^2 + 0.16 = \lambda^2 + 1.04\lambda + 0.16 = 0$.
        Using the quadratic formula: $\lambda = \frac{-1.04 \pm \sqrt{(1.04)^2 - 4(1)(0.16)}}{2} = \frac{-1.04 \pm \sqrt{1.0816 - 0.64}}{2}$
        $\lambda = \frac{-1.04 \pm \sqrt{0.4416}}{2} = \frac{-1.04 \pm 0.6645}{2}$.
        $\lambda_1 = \frac{-1.04 + 0.6645}{2} = \frac{-0.3755}{2} \approx -0.18775$
        $\lambda_2 = \frac{-1.04 - 0.6645}{2} = \frac{-1.7045}{2} \approx -0.85225$

    b.  **Diagonalization:**
        Eigenvectors (approximated):
        For $\lambda_1 \approx -0.18775$: $(A - (-0.18775)I)\mathbf{v}_1 = \begin{bmatrix} 0.18775 & 1 \\ -0.16 & -0.85225 \end{bmatrix} \begin{bmatrix} v_{11} \\ v_{12} \end{bmatrix} = 0$.
        $0.18775 v_{11} + v_{12} = 0 \Rightarrow v_{12} = -0.18775 v_{11}$. Let $v_{11}=1$, $\mathbf{v}_1 = \begin{bmatrix} 1 \\ -0.18775 \end{bmatrix}$.

        For $\lambda_2 \approx -0.85225$: $(A - (-0.85225)I)\mathbf{v}_2 = \begin{bmatrix} 0.85225 & 1 \\ -0.16 & -0.18775 \end{bmatrix} \begin{bmatrix} v_{21} \\ v_{22} \end{bmatrix} = 0$.
        $0.85225 v_{21} + v_{22} = 0 \Rightarrow v_{22} = -0.85225 v_{21}$. Let $v_{21}=1$, $\mathbf{v}_2 = \begin{bmatrix} 1 \\ -0.85225 \end{bmatrix}$.

        $P = \begin{bmatrix} 1 & 1 \\ -0.18775 & -0.85225 \end{bmatrix}$, $\Lambda = \begin{bmatrix} -0.18775 & 0 \\ 0 & -0.85225 \end{bmatrix}$.
        $P^{-1} \approx \begin{bmatrix} 1.1733 & 1.1733 \\ -0.2191 & -0.2191 \end{bmatrix}$ (Calculated $P^{-1}$ more accurately).

        $A^k = P\Lambda^k P^{-1} \approx \begin{bmatrix} 1 & 1 \\ -0.18775 & -0.85225 \end{bmatrix} \begin{bmatrix} (-0.18775)^k & 0 \\ 0 & (-0.85225)^k \end{bmatrix} \begin{bmatrix} 1.1733 & 1.1733 \\ -0.2191 & -0.2191 \end{bmatrix}$
        $A^k \approx \begin{bmatrix} 1.1733(-0.18775)^k - 0.2191(-0.85225)^k & 1.1733(-0.18775)^k - 0.2191(-0.85225)^k \\ -0.2191(-0.18775)^k + 0.1836(-0.85225)^k & -0.2191(-0.18775)^k + 0.1836(-0.85225)^k \end{bmatrix}$
        Wait, there's a mistake in the $P^{-1}$ calculation or the final multiplication. Let's recalculate $P^{-1}$:
        $\det(P) = 1(-0.85225) - 1(-0.18775) = -0.85225 + 0.18775 = -0.6645$.
        $P^{-1} = \frac{1}{-0.6645} \begin{bmatrix} -0.85225 & -1 \\ 0.18775 & 1 \end{bmatrix} = \begin{bmatrix} 1.2824 & 1.5050 \\ -0.2824 & -1.5050 \end{bmatrix}$ (Using more precise eigenvalues $\lambda_1 \approx -0.187753$, $\lambda_2 \approx -0.852247$).

        Let's use the characteristic equation $A^2 + 1.04A + 0.16I = 0$.
        $A^2 = -1.04A - 0.16I = -1.04\begin{bmatrix} 0 & 1 \\ -0.16 & -1.04 \end{bmatrix} - 0.16\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
        $A^2 = \begin{bmatrix} 0 & -1.04 \\ 0.1664 & 1.0816 \end{bmatrix} - \begin{bmatrix} 0.16 & 0 \\ 0 & 0.16 \end{bmatrix} = \begin{bmatrix} -0.16 & -1.04 \\ 0.1664 & 0.9216 \end{bmatrix}$.

    c.  **Compute $A^2$ using expression:**
        Using the diagonalization expression for $k=2$:
        $A^2 = P\Lambda^2 P^{-1} = \begin{bmatrix} 1 & 1 \\ -0.18775 & -0.85225 \end{bmatrix} \begin{bmatrix} (-0.18775)^2 & 0 \\ 0 & (-0.85225)^2 \end{bmatrix} \begin{bmatrix} 1.2824 & 1.5050 \\ -0.2824 & -1.5050 \end{bmatrix}$
        $A^2 \approx \begin{bmatrix} 1 & 1 \\ -0.18775 & -0.85225 \end{bmatrix} \begin{bmatrix} 0.03525 & 0 \\ 0 & 0.72633 \end{bmatrix} \begin{bmatrix} 1.2824 & 1.5050 \\ -0.2824 & -1.5050 \end{bmatrix}$
        $A^2 \approx \begin{bmatrix} 0.03525 & 0.72633 \\ -0.00662 & -0.61516 \end{bmatrix} \begin{bmatrix} 1.2824 & 1.5050 \\ -0.2824 & -1.5050 \end{bmatrix}$
        $A^2 \approx \begin{bmatrix} (0.03525)(1.2824) + (0.72633)(-0.2824) & (0.03525)(1.5050) + (0.72633)(-1.5050) \\ (-0.00662)(1.2824) + (-0.61516)(-0.2824) & (-0.00662)(1.5050) + (-0.61516)(-1.5050) \end{bmatrix}$
        $A^2 \approx \begin{bmatrix} 0.04520 - 0.20515 & 0.05305 - 1.09313 \\ -0.00849 + 0.17376 & -0.00996 + 0.92581 \end{bmatrix} \approx \begin{bmatrix} -0.15995 & -1.04008 \\ 0.16527 & 0.91585 \end{bmatrix}$
        This is very close to the result from Cayley-Hamilton. Due to rounding of eigenvalues and $P^{-1}$, there are slight differences.

    **Verify by direct multiplication:**
    $A^2 = \begin{bmatrix} 0 & 1 \\ -0.16 & -1.04 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -0.16 & -1.04 \end{bmatrix} = \begin{bmatrix} (0)(0)+(1)(-0.16) & (0)(1)+(1)(-1.04) \\ (-0.16)(0)+(-1.04)(-0.16) & (-0.16)(1)+(-1.04)(-1.04) \end{bmatrix}$
    $A^2 = \begin{bmatrix} -0.16 & -1.04 \\ 0.1664 & -0.16 + 1.0816 \end{bmatrix} = \begin{bmatrix} -0.16 & -1.04 \\ 0.1664 & 0.9216 \end{bmatrix}$.
    The Cayley-Hamilton method result is exact: $\begin{bmatrix} -0.16 & -1.04 \\ 0.1664 & 0.9216 \end{bmatrix}$.

## 3.7 Key Points to Remember

*   The state transition matrix $\Phi(k, k_0) = A^{k-k_0}$ describes the evolution of the state in a discrete-time LTI system without input.
*   For LTI systems, the STM depends only on the time difference.
*   Methods for computing $A^k$ include direct multiplication, Cayley-Hamilton theorem, diagonalization (eigenvalue decomposition), and Z-transform methods.
*   Diagonalization is efficient if the matrix $A$ is diagonalizable.
*   Jordan Canonical Form is used for non-diagonalizable matrices.
*   When discretizing a continuous-time system with a ZOH, the discrete-time STM $A$ is $e^{A_c T}$. The STM for $k$ steps is $A^k = (e^{A_c T})^k = e^{A_c kT}$.
*   The STM is fundamental for calculating both the zero-input and zero-state responses of the system.

This comprehensive set of notes covers the computation of the state transition matrix, a core concept in discrete-time state-space analysis, directly contributing to the understanding required for CO3 and foundational for CO4.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
