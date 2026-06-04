---
title: "Eigen value problems - largest and smallest Eigen values- Power method, Jacobi’s transformation"
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 1: Introduction to numerical methods "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b3e"
status: "completed"
scrapedAt: "2026-05-20T18:46:47.569Z"
---
# NUMERICAL METHODS FOR ENGINEERS

## Module 1: Introduction to Numerical Methods

---

## Topic: Eigenvalue Problems - Largest and Smallest Eigenvalues

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the concept of eigenvalues and eigenvectors for square matrices.
*   Explain the significance of eigenvalues and eigenvectors in engineering applications.
*   Apply the Power Method to find the largest eigenvalue and its corresponding eigenvector.
*   Understand the limitations of the Power Method.
*   Apply Jacobi's Transformation method to find all eigenvalues and eigenvectors of a symmetric matrix.
*   Compare and contrast the Power Method and Jacobi's Transformation method.

---

### 1. Introduction to Eigenvalue Problems

#### 1.1 What are Eigenvalues and Eigenvectors?

*   **Definition:** For a square matrix $A$ (of size $n \times n$), a non-zero vector $v$ is called an **eigenvector** of $A$ if, when $A$ is multiplied by $v$, the result is a scalar multiple of $v$. This scalar multiple is called the **eigenvalue** corresponding to that eigenvector.
*   **Mathematical Representation:**
    $Av = \lambda v$
    where:
    *   $A$ is the $n \times n$ matrix.
    *   $v$ is the non-zero eigenvector (an $n \times 1$ column vector).
    *   $\lambda$ is the eigenvalue (a scalar).

#### 1.2 The Characteristic Equation

*   To find eigenvalues, we rearrange the fundamental equation:
    $Av = \lambda v$
    $Av - \lambda v = 0$
    $Av - \lambda Iv = 0$ (where $I$ is the identity matrix)
    $(A - \lambda I)v = 0$
*   For a non-trivial solution (i.e., $v \neq 0$), the matrix $(A - \lambda I)$ must be singular. A singular matrix has a determinant of zero.
*   Therefore, the **characteristic equation** is:
    $\det(A - \lambda I) = 0$
*   Solving this equation yields the eigenvalues $\lambda$. For an $n \times n$ matrix, this equation will be a polynomial of degree $n$.

#### 1.3 Finding Eigenvectors

*   Once an eigenvalue $\lambda$ is found, substitute it back into the equation $(A - \lambda I)v = 0$ and solve the resulting system of linear equations for the components of the eigenvector $v$.
*   Eigenvectors are not unique; any non-zero scalar multiple of an eigenvector is also an eigenvector for the same eigenvalue. It's common practice to normalize eigenvectors.

#### 1.4 Significance in Engineering

Eigenvalues and eigenvectors have widespread applications in engineering, including:

*   **Structural Engineering:** Analyzing vibrations, natural frequencies, and modes of vibration of structures. Eigenvalues represent the squares of natural frequencies, and eigenvectors represent the modes of vibration.
*   **Mechanical Engineering:** Stability analysis of mechanical systems, rotor dynamics.
*   **Electrical Engineering:** Analyzing circuit stability, control systems, power systems.
*   **Quantum Mechanics:** Describing energy levels and states of quantum systems.
*   **Data Analysis & Machine Learning:** Principal Component Analysis (PCA) for dimensionality reduction and feature extraction.
*   **Geology:** Stress and strain analysis in materials.

---

### 2. Finding the Largest Eigenvalue: The Power Method

The Power Method is an iterative technique used to find the dominant eigenvalue (the eigenvalue with the largest absolute value) and its corresponding eigenvector.

#### 2.1 The Algorithm

Given a matrix $A$, we want to find its largest eigenvalue $\lambda_{max}$ and corresponding eigenvector $v_{max}$.

1.  **Initialization:**
    *   Choose an arbitrary non-zero initial vector $v_0$ (often a vector of all ones or a standard basis vector).
    *   Normalize $v_0$ to have a unit norm (e.g., Euclidean norm) for numerical stability. $v_0 = v_0 / ||v_0||$.

2.  **Iteration:** For $k = 0, 1, 2, \dots$
    *   Compute the next vector: $y_{k+1} = A v_k$
    *   Calculate the eigenvalue estimate (Rayleigh Quotient): $\lambda_{k+1} = \frac{v_k^T A v_k}{v_k^T v_k}$ (If $v_k$ is normalized, this simplifies to $v_k^T A v_k$)
    *   Normalize the new vector: $v_{k+1} = y_{k+1} / ||y_{k+1}||$

3.  **Convergence:** The sequence of estimated eigenvalues $\lambda_{k+1}$ converges to the largest eigenvalue $\lambda_{max}$, and the sequence of vectors $v_{k+1}$ converges to the corresponding eigenvector $v_{max}$.

#### 2.2 Why it Works (Intuition)

Let the eigenvalues of $A$ be $\lambda_1, \lambda_2, \dots, \lambda_n$, ordered such that $|\lambda_1| > |\lambda_2| \ge \dots \ge |\lambda_n|$.
Let the corresponding eigenvectors be $v_1, v_2, \dots, v_n$.

Any initial vector $v_0$ can be expressed as a linear combination of the eigenvectors:
$v_0 = c_1 v_1 + c_2 v_2 + \dots + c_n v_n$ (assuming eigenvectors form a basis)

Now, let's see what happens after multiplying by $A$ repeatedly:
$A v_0 = c_1 Av_1 + c_2 Av_2 + \dots + c_n Av_n = c_1 \lambda_1 v_1 + c_2 \lambda_2 v_2 + \dots + c_n \lambda_n v_n$
$A^2 v_0 = A(A v_0) = c_1 \lambda_1^2 v_1 + c_2 \lambda_2^2 v_2 + \dots + c_n \lambda_n^2 v_n$
$A^k v_0 = c_1 \lambda_1^k v_1 + c_2 \lambda_2^k v_2 + \dots + c_n \lambda_n^k v_n$

Factor out $\lambda_1^k$:
$A^k v_0 = \lambda_1^k \left( c_1 v_1 + c_2 \left(\frac{\lambda_2}{\lambda_1}\right)^k v_2 + \dots + c_n \left(\frac{\lambda_n}{\lambda_1}\right)^k v_n \right)$

Since $|\lambda_i / \lambda_1| < 1$ for $i = 2, \dots, n$, as $k \to \infty$, the terms $(\lambda_i / \lambda_1)^k$ approach zero.
Therefore, $A^k v_0 \approx \lambda_1^k c_1 v_1$.

When we normalize, we essentially extract the direction of $v_1$, and the scaling factor converges to $\lambda_1$.

#### 2.3 Example: Power Method

Find the largest eigenvalue and eigenvector of the matrix $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

**Step 1: Initialization**
Let $v_0 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
Normalize $v_0$: $||v_0|| = \sqrt{1^2 + 1^2} = \sqrt{2}$.
$v_0 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix} \approx \begin{pmatrix} 0.707 \\ 0.707 \end{pmatrix}$.

**Step 2: Iteration**

*   **k = 0:**
    $y_1 = A v_0 = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 0.707 \\ 0.707 \end{pmatrix} = \begin{pmatrix} 2.121 \\ 2.121 \end{pmatrix}$
    $\lambda_1 = v_0^T A v_0 = \begin{pmatrix} 0.707 & 0.707 \end{pmatrix} \begin{pmatrix} 2.121 \\ 2.121 \end{pmatrix} = 0.707 \times 2.121 + 0.707 \times 2.121 \approx 3$
    $||y_1|| = \sqrt{2.121^2 + 2.121^2} = \sqrt{2 \times 2.121^2} = 2.121 \sqrt{2} \approx 3$
    $v_1 = y_1 / ||y_1|| = \frac{1}{3} \begin{pmatrix} 2.121 \\ 2.121 \end{pmatrix} = \begin{pmatrix} 0.707 \\ 0.707 \end{pmatrix}$. (In this simple case, it converged immediately, which is not typical).

Let's try a different initial vector for better illustration: $v_0 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
$||v_0|| = 1$, so $v_0 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

*   **k = 0:**
    $y_1 = A v_0 = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$
    $\lambda_1 = v_0^T A v_0 = \begin{pmatrix} 1 & 0 \end{pmatrix} \begin{pmatrix} 2 \\ 1 \end{pmatrix} = 2$
    $||y_1|| = \sqrt{2^2 + 1^2} = \sqrt{5} \approx 2.236$
    $v_1 = y_1 / ||y_1|| = \frac{1}{\sqrt{5}} \begin{pmatrix} 2 \\ 1 \end{pmatrix} \approx \begin{pmatrix} 0.894 \\ 0.447 \end{pmatrix}$

*   **k = 1:**
    $y_2 = A v_1 = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 0.894 \\ 0.447 \end{pmatrix} = \begin{pmatrix} 2 \times 0.894 + 1 \times 0.447 \\ 1 \times 0.894 + 2 \times 0.447 \end{pmatrix} = \begin{pmatrix} 1.788 + 0.447 \\ 0.894 + 0.894 \end{pmatrix} = \begin{pmatrix} 2.235 \\ 1.788 \end{pmatrix}$
    $\lambda_2 = v_1^T A v_1 = \begin{pmatrix} 0.894 & 0.447 \end{pmatrix} \begin{pmatrix} 2.235 \\ 1.788 \end{pmatrix} \approx 0.894 \times 2.235 + 0.447 \times 1.788 \approx 2.000 + 0.800 = 2.800$
    $||y_2|| = \sqrt{2.235^2 + 1.788^2} \approx \sqrt{5.000 + 3.200} = \sqrt{8.200} \approx 2.864$
    $v_2 = y_2 / ||y_2|| = \frac{1}{2.864} \begin{pmatrix} 2.235 \\ 1.788 \end{pmatrix} \approx \begin{pmatrix} 0.780 \\ 0.624 \end{pmatrix}$

*   **k = 2:**
    $y_3 = A v_2 = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 0.780 \\ 0.624 \end{pmatrix} = \begin{pmatrix} 2 \times 0.780 + 1 \times 0.624 \\ 1 \times 0.780 + 2 \times 0.624 \end{pmatrix} = \begin{pmatrix} 1.560 + 0.624 \\ 0.780 + 1.248 \end{pmatrix} = \begin{pmatrix} 2.184 \\ 2.028 \end{pmatrix}$
    $\lambda_3 = v_2^T A v_2 \approx \begin{pmatrix} 0.780 & 0.624 \end{pmatrix} \begin{pmatrix} 2.184 \\ 2.028 \end{pmatrix} \approx 0.780 \times 2.184 + 0.624 \times 2.028 \approx 1.703 + 1.266 = 2.969$
    $||y_3|| = \sqrt{2.184^2 + 2.028^2} \approx \sqrt{4.770 + 4.113} = \sqrt{8.883} \approx 2.980$
    $v_3 = y_3 / ||y_3|| = \frac{1}{2.980} \begin{pmatrix} 2.184 \\ 2.028 \end{pmatrix} \approx \begin{pmatrix} 0.733 \\ 0.680 \end{pmatrix}$

The eigenvalue estimates are converging towards 3, and the eigenvectors towards $\begin{pmatrix} 0.707 \\ 0.707 \end{pmatrix}$ (normalized).

**Analytical Solution for $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$:**
Characteristic equation: $\det \begin{pmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{pmatrix} = 0$
$(2-\lambda)^2 - 1^2 = 0$
$4 - 4\lambda + \lambda^2 - 1 = 0$
$\lambda^2 - 4\lambda + 3 = 0$
$(\lambda - 1)(\lambda - 3) = 0$
Eigenvalues: $\lambda_1 = 3$, $\lambda_2 = 1$.
The largest eigenvalue is indeed 3.

For $\lambda = 3$: $(A - 3I)v = 0 \implies \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
$-x + y = 0 \implies x = y$.
Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$. Normalized: $\begin{pmatrix} 1/\sqrt{2} \\ 1/\sqrt{2} \end{pmatrix} \approx \begin{pmatrix} 0.707 \\ 0.707 \end{pmatrix}$.

#### 2.4 Limitations of the Power Method

*   **Convergence Speed:** The rate of convergence depends on the ratio $|\lambda_2 / \lambda_1|$. If this ratio is close to 1, convergence can be slow.
*   **Dominant Eigenvalue:** It only finds the eigenvalue with the largest absolute value.
*   **Complex Eigenvalues:** If the dominant eigenvalue is complex, the method may not converge or might exhibit oscillatory behavior.
*   **Degenerate Eigenvalues:** If there are multiple eigenvalues with the same largest absolute value, the method might not converge to a specific eigenvector.
*   **Starting Vector:** If the initial vector $v_0$ has no component in the direction of the dominant eigenvector ($c_1 = 0$), the method will converge to the eigenvector corresponding to the next largest eigenvalue.

---

### 3. Finding the Smallest Eigenvalue

To find the smallest eigenvalue using the Power Method, we can use a transformation. If $\lambda_{min}$ is the smallest eigenvalue of $A$, then $1/\lambda_{min}$ is the largest eigenvalue of $A^{-1}$.

#### 3.1 Inverse Power Method (for smallest eigenvalue)

1.  **Algorithm:**
    *   Calculate $A^{-1}$.
    *   Apply the Power Method to $A^{-1}$ to find its largest eigenvalue, say $\mu_{max}$.
    *   The smallest eigenvalue of $A$ is then $\lambda_{min} = 1 / \mu_{max}$.
    *   The eigenvector of $A^{-1}$ corresponding to $\mu_{max}$ is also the eigenvector of $A$ corresponding to $\lambda_{min}$.

#### 3.2 Shifted Inverse Power Method (for eigenvalue closest to a value $\sigma$)

This is a more general and powerful technique. If we want to find the eigenvalue closest to a specific value $\sigma$, we can apply the Power Method to $(A - \sigma I)^{-1}$.

*   The eigenvalues of $(A - \sigma I)^{-1}$ are $1/(\lambda_i - \sigma)$, where $\lambda_i$ are the eigenvalues of $A$.
*   If $\lambda_j$ is the eigenvalue of $A$ closest to $\sigma$, then $|\lambda_j - \sigma|$ will be the smallest among all $|\lambda_i - \sigma|$.
*   Consequently, $1 / |\lambda_j - \sigma|$ will be the largest eigenvalue of $(A - \sigma I)^{-1}$.
*   By applying the Power Method to $(A - \sigma I)^{-1}$, we find its dominant eigenvalue, say $\mu_{max}$.
*   Then, $\mu_{max} = 1 / (\lambda_j - \sigma)$.
*   Rearranging, $\lambda_j - \sigma = 1 / \mu_{max}$, so $\lambda_j = \sigma + 1 / \mu_{max}$.

**Practical Consideration:** Computing the inverse of a matrix is often computationally expensive and can introduce numerical errors. In practice, instead of explicitly forming $(A - \sigma I)^{-1}$, we solve the system $(A - \sigma I)y = v_k$ at each iteration and then normalize $y$ to get $v_{k+1}$.

#### 3.3 Example: Finding Smallest Eigenvalue

For $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, we know the eigenvalues are 3 and 1. The smallest is 1.

**Using Inverse Power Method:**
First, find $A^{-1}$:
$\det(A) = (2)(2) - (1)(1) = 3$.
$A^{-1} = \frac{1}{3} \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 2/3 & -1/3 \\ -1/3 & 2/3 \end{pmatrix}$.

Apply Power Method to $A^{-1}$ with $v_0 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

*   **k = 0:**
    $y_1 = A^{-1} v_0 = \begin{pmatrix} 2/3 & -1/3 \\ -1/3 & 2/3 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 2/3 \\ -1/3 \end{pmatrix}$
    $\mu_1 = v_0^T A^{-1} v_0 = \begin{pmatrix} 1 & 0 \end{pmatrix} \begin{pmatrix} 2/3 \\ -1/3 \end{pmatrix} = 2/3$
    $||y_1|| = \sqrt{(2/3)^2 + (-1/3)^2} = \sqrt{4/9 + 1/9} = \sqrt{5/9} = \sqrt{5}/3 \approx 0.745$
    $v_1 = y_1 / ||y_1|| = \frac{3}{\sqrt{5}} \begin{pmatrix} 2/3 \\ -1/3 \end{pmatrix} = \frac{1}{\sqrt{5}} \begin{pmatrix} 2 \\ -1 \end{pmatrix} \approx \begin{pmatrix} 0.894 \\ -0.447 \end{pmatrix}$

*   **k = 1:**
    $y_2 = A^{-1} v_1 = \begin{pmatrix} 2/3 & -1/3 \\ -1/3 & 2/3 \end{pmatrix} \begin{pmatrix} 0.894 \\ -0.447 \end{pmatrix} = \begin{pmatrix} (2/3)(0.894) - (1/3)(-0.447) \\ (-1/3)(0.894) + (2/3)(-0.447) \end{pmatrix} = \begin{pmatrix} 0.596 + 0.149 \\ -0.298 - 0.298 \end{pmatrix} = \begin{pmatrix} 0.745 \\ -0.596 \end{pmatrix}$
    $\mu_2 = v_1^T A^{-1} v_1 \approx \begin{pmatrix} 0.894 & -0.447 \end{pmatrix} \begin{pmatrix} 0.745 \\ -0.596 \end{pmatrix} \approx 0.666 + 0.266 = 0.932$
    $||y_2|| = \sqrt{0.745^2 + (-0.596)^2} \approx \sqrt{0.555 + 0.355} = \sqrt{0.910} \approx 0.954$
    $v_2 = y_2 / ||y_2|| = \frac{1}{0.954} \begin{pmatrix} 0.745 \\ -0.596 \end{pmatrix} \approx \begin{pmatrix} 0.781 \\ -0.625 \end{pmatrix}$

The largest eigenvalue of $A^{-1}$ is converging to $1$, which is $1/1$.

The eigenvalue of $A^{-1}$ is $1/\lambda$. Since $\lambda_1=3, \lambda_2=1$ for $A$, the eigenvalues of $A^{-1}$ are $1/3$ and $1/1 = 1$. The largest eigenvalue of $A^{-1}$ is 1.

So, $\mu_{max} = 1$.
Then $\lambda_{min} = 1 / \mu_{max} = 1/1 = 1$.

---

### 4. Jacobi's Transformation Method

Jacobi's method is an iterative technique for finding **all** eigenvalues and eigenvectors of a **real symmetric matrix**. It's an orthogonal transformation-based method.

#### 4.1 Key Concepts

*   **Symmetric Matrix:** A matrix $A$ is symmetric if $A^T = A$. For symmetric matrices, all eigenvalues are real, and eigenvectors corresponding to distinct eigenvalues are orthogonal.
*   **Orthogonal Matrix:** A matrix $P$ is orthogonal if $P^T P = PP^T = I$ (identity matrix). Multiplying by an orthogonal matrix preserves lengths and angles.
*   **Similarity Transformation:** If $P$ is an orthogonal matrix, then $B = P^T A P$ is a similarity transformation. Similar matrices have the same eigenvalues.
*   **Goal of Jacobi's Method:** To transform a symmetric matrix $A$ into a diagonal matrix $D$ using a sequence of orthogonal similarity transformations. The diagonal entries of $D$ will be the eigenvalues of $A$, and the product of the orthogonal matrices used will form a matrix whose columns are the corresponding eigenvectors.

#### 4.2 The Jacobi Rotation

The core of Jacobi's method is the **Jacobi rotation**. A Jacobi rotation matrix $J$ is an orthogonal matrix that is identical to the identity matrix except for four off-diagonal elements, which are arranged to zero out a specific off-diagonal element of the matrix being transformed.

Consider a symmetric matrix $A$. Let $a_{pq}$ be an off-diagonal element (with $p \neq q$). We want to find a rotation matrix $J$ such that $J^T A J$ has a zero in the $(p, q)$ and $(q, p)$ positions.

A typical Jacobi rotation matrix $J$ that rotates in the plane of coordinates $p$ and $q$ has the form:

$J = \begin{pmatrix}
1 & \cdots & 0 & \cdots & 0 & \cdots \\
\vdots & \ddots & \vdots & & \vdots & \\
0 & \cdots & c & \cdots & s & \cdots \\
\vdots & & \vdots & \ddots & \vdots & \\
0 & \cdots & -s & \cdots & c & \cdots \\
\vdots & & \vdots & & \vdots & \ddots
\end{pmatrix}$

where $c = \cos \theta$ and $s = \sin \theta$ for some angle $\theta$.
The matrix $J$ is identity everywhere except at positions $(p, p), (p, q), (q, p), (q, q)$, where it has $c, s, -s, c$ respectively.

To zero out $a_{pq}$, we choose $\theta$ such that:
$\tan(2\theta) = \frac{2 a_{pq}}{a_{pp} - a_{qq}}$

From this, we can find $c = \cos \theta$ and $s = \sin \theta$:
$c = \frac{1}{\sqrt{1 + \tan^2 \theta}} = \frac{1}{\sqrt{1 + (\frac{2 a_{pq}}{a_{pp} - a_{qq}})^2}}$
$s = \tan \theta \cdot c = \frac{2 a_{pq}}{a_{pp} - a_{qq}} \cdot c$

**Note:** It is often more numerically stable to compute $c$ and $s$ without explicitly calculating $\theta$. Let $\alpha = a_{pp} - a_{qq}$ and $\beta = 2a_{pq}$. If $\alpha = 0$ and $\beta = 0$, $\theta=0$, $c=1, s=0$. If $\alpha \neq 0$,
$c = \sqrt{\frac{1}{2}(1 + \frac{\alpha}{\sqrt{\alpha^2 + \beta^2}})}$
$s = \text{sgn}(\beta) \sqrt{\frac{1}{2}(1 - \frac{\alpha}{\sqrt{\alpha^2 + \beta^2}})}$

#### 4.3 The Jacobi Algorithm

1.  **Initialization:**
    *   Start with the given symmetric matrix $A^{(0)} = A$.
    *   Initialize an eigenvector matrix $V^{(0)} = I$ (identity matrix).

2.  **Iteration:** For $k = 0, 1, 2, \dots$
    *   **Find Pivot:** Select an off-diagonal element $a_{pq}^{(k)}$ ($p < q$) with the largest absolute value. This strategy is called "cyclic Jacobi" if you cycle through all pairs, or "threshold Jacobi" if you use a threshold.
    *   **Calculate Rotation Parameters:** Compute $c = \cos \theta$ and $s = \sin \theta$ to zero out $a_{pq}^{(k)}$ using the formulas above.
    *   **Form Rotation Matrix:** Construct the Jacobi rotation matrix $J_k$ corresponding to the chosen $p, q, c, s$.
    *   **Update Matrix:** Compute the transformed matrix: $A^{(k+1)} = J_k^T A^{(k)} J_k$.
    *   **Update Eigenvector Matrix:** Update the eigenvector matrix: $V^{(k+1)} = V^{(k)} J_k$.

3.  **Convergence:** The process continues until the off-diagonal elements of $A^{(k)}$ are sufficiently close to zero (e.g., their sum of squares is below a small tolerance $\epsilon$).

4.  **Result:** The diagonal elements of the final matrix $A^{(m)}$ are the eigenvalues of $A$. The columns of the final eigenvector matrix $V^{(m)}$ are the corresponding eigenvectors.

#### 4.4 Example: Jacobi's Transformation

Find eigenvalues and eigenvectors of $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

**Step 1: Initialization**
$A^{(0)} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, $V^{(0)} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.

**Step 2: Iteration 1**

*   **Find Pivot:** The largest off-diagonal element is $a_{12} = 1$. So $p=1, q=2$.
*   **Calculate Rotation Parameters:**
    $a_{pp} = a_{11} = 2$, $a_{qq} = a_{22} = 2$.
    $a_{pq} = a_{12} = 1$.
    $\tan(2\theta) = \frac{2 a_{12}}{a_{11} - a_{22}} = \frac{2 \times 1}{2 - 2} = \frac{2}{0}$, which implies $2\theta = \pi/2$, so $\theta = \pi/4$.
    $c = \cos(\pi/4) = \frac{1}{\sqrt{2}}$, $s = \sin(\pi/4) = \frac{1}{\sqrt{2}}$.

    Using formulas: $\alpha = 2-2 = 0$, $\beta = 2(1) = 2$.
    $c = \sqrt{\frac{1}{2}(1 + \frac{0}{\sqrt{0^2 + 2^2}})} = \sqrt{\frac{1}{2}(1)} = \frac{1}{\sqrt{2}}$.
    $s = \text{sgn}(2) \sqrt{\frac{1}{2}(1 - \frac{0}{\sqrt{0^2 + 2^2}})} = 1 \sqrt{\frac{1}{2}(1)} = \frac{1}{\sqrt{2}}$.

*   **Form Rotation Matrix:**
    $J_1 = \begin{pmatrix} c & s \\ -s & c \end{pmatrix} = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix}$.

*   **Update Matrix:**
    $J_1^T = \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix}$.
    $A^{(1)} = J_1^T A^{(0)} J_1 = \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix}$
    First product: $\begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} (2/\sqrt{2}) - (1/\sqrt{2}) & (1/\sqrt{2}) - (2/\sqrt{2}) \\ (2/\sqrt{2}) + (1/\sqrt{2}) & (1/\sqrt{2}) + (2/\sqrt{2}) \end{pmatrix} = \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 3/\sqrt{2} & 3/\sqrt{2} \end{pmatrix}$
    Second product: $\begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 3/\sqrt{2} & 3/\sqrt{2} \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} = \begin{pmatrix} (1/2) + (1/2) & (1/2) - (1/2) \\ (3/2) - (3/2) & (3/2) + (3/2) \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$
    So, $A^{(1)} = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$.

*   **Update Eigenvector Matrix:**
    $V^{(1)} = V^{(0)} J_1 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix}$.

**Step 3: Convergence**
The matrix $A^{(1)}$ is already diagonal. The off-diagonal elements are 0. The process has converged in one step.

**Result:**
Eigenvalues are the diagonal elements of $A^{(1)}$: $\lambda_1 = 1, \lambda_2 = 3$.
Eigenvectors are the columns of $V^{(1)}$:
$v_1 = \begin{pmatrix} 1/\sqrt{2} \\ -1/\sqrt{2} \end{pmatrix}$, $v_2 = \begin{pmatrix} 1/\sqrt{2} \\ 1/\sqrt{2} \end{pmatrix}$.

*(Note: The order of eigenvalues and eigenvectors depends on the sequence of transformations. In the analytical solution, we got $\lambda=3$ first. Here, the Jacobi method applied to $a_{12}$ resulted in $\lambda=1$ being in the first position. If we had applied it to $a_{21}$, the result might be swapped.)*

#### 4.5 Advantages and Disadvantages of Jacobi's Method

**Advantages:**
*   Finds all eigenvalues and eigenvectors for symmetric matrices.
*   Guaranteed convergence for real symmetric matrices.
*   Provides orthogonal eigenvectors.
*   Relatively easy to implement.

**Disadvantages:**
*   Can be slow for large matrices if the "largest off-diagonal" strategy is not used efficiently (e.g., cyclic Jacobi).
*   Not suitable for non-symmetric matrices (though extensions exist).
*   Computationally more expensive than the Power Method if only the largest eigenvalue is needed.

---

### 5. Comparison: Power Method vs. Jacobi's Method

| Feature              | Power Method                                      | Jacobi's Transformation Method                   |
| :------------------- | :------------------------------------------------ | :----------------------------------------------- |
| **Purpose**          | Finds the largest (dominant) eigenvalue & vector. | Finds all eigenvalues & eigenvectors.            |
| **Matrix Type**      | General square matrices (with certain conditions). | Real symmetric matrices only.                    |
| **Algorithm Type**   | Iterative.                                        | Iterative, based on orthogonal transformations.  |
| **Convergence**      | Depends on $|\lambda_2 / \lambda_1|$.             | Guaranteed for symmetric matrices.               |
| **Eigenvectors**     | Finds only the dominant eigenvector.              | Finds all eigenvectors, which are orthogonal.    |
| **Computational Cost** | Lower for finding just the dominant eigenvalue.   | Higher for finding all eigenvalues.             |
| **Output**           | Single eigenvalue-eigenvector pair.               | All eigenvalue-eigenvector pairs.                |
| **Smallest Eigenvalue** | Requires Inverse Power Method (or shift).     | Directly obtained as part of all eigenvalues.   |

---

### 6. Practice Questions

1.  Given the matrix $A = \begin{pmatrix} 4 & 1 \\ 1 & 3 \end{pmatrix}$, use the Power Method starting with $v_0 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ to find the largest eigenvalue and its corresponding eigenvector. Perform at least 3 iterations.

2.  For the matrix $A = \begin{pmatrix} 5 & 2 \\ 2 & 1 \end{pmatrix}$:
    a.  Find the eigenvalues and eigenvectors analytically.
    b.  Use the Inverse Power Method with $\sigma = 0$ to find the smallest eigenvalue. Show at least 2 iterations.

3.  Apply Jacobi's transformation method to the matrix $A = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$ to find its eigenvalues and eigenvectors.

4.  Explain the conditions under which the Power Method might fail to converge or converge slowly.

5.  What is the main advantage of Jacobi's method over the Power Method in terms of the output?

---

### Answers to Practice Questions

**Answer 1:**
$A = \begin{pmatrix} 4 & 1 \\ 1 & 3 \end{pmatrix}$, $v_0 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

*   **k = 0:**
    $y_1 = A v_0 = \begin{pmatrix} 4 & 1 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 5 \\ 4 \end{pmatrix}$
    $\lambda_1 = v_0^T A v_0 = \begin{pmatrix} 1 & 1 \end{pmatrix} \begin{pmatrix} 5 \\ 4 \end{pmatrix} = 9$
    $||y_1|| = \sqrt{5^2 + 4^2} = \sqrt{25 + 16} = \sqrt{41} \approx 6.403$
    $v_1 = y_1 / ||y_1|| = \frac{1}{\sqrt{41}} \begin{pmatrix} 5 \\ 4 \end{pmatrix} \approx \begin{pmatrix} 0.781 \\ 0.625 \end{pmatrix}$

*   **k = 1:**
    $y_2 = A v_1 = \begin{pmatrix} 4 & 1 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} 0.781 \\ 0.625 \end{pmatrix} = \begin{pmatrix} 4 \times 0.781 + 1 \times 0.625 \\ 1 \times 0.781 + 3 \times 0.625 \end{pmatrix} = \begin{pmatrix} 3.124 + 0.625 \\ 0.781 + 1.875 \end{pmatrix} = \begin{pmatrix} 3.749 \\ 2.656 \end{pmatrix}$
    $\lambda_2 = v_1^T A v_1 = \begin{pmatrix} 0.781 & 0.625 \end{pmatrix} \begin{pmatrix} 3.749 \\ 2.656 \end{pmatrix} \approx 0.781 \times 3.749 + 0.625 \times 2.656 \approx 2.929 + 1.660 = 4.589$
    $||y_2|| = \sqrt{3.749^2 + 2.656^2} = \sqrt{14.055 + 7.054} = \sqrt{21.109} \approx 4.594$
    $v_2 = y_2 / ||y_2|| = \frac{1}{4.594} \begin{pmatrix} 3.749 \\ 2.656 \end{pmatrix} \approx \begin{pmatrix} 0.816 \\ 0.578 \end{pmatrix}$

*   **k = 2:**
    $y_3 = A v_2 = \begin{pmatrix} 4 & 1 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} 0.816 \\ 0.578 \end{pmatrix} = \begin{pmatrix} 4 \times 0.816 + 1 \times 0.578 \\ 1 \times 0.816 + 3 \times 0.578 \end{pmatrix} = \begin{pmatrix} 3.264 + 0.578 \\ 0.816 + 1.734 \end{pmatrix} = \begin{pmatrix} 3.842 \\ 2.550 \end{pmatrix}$
    $\lambda_3 = v_2^T A v_2 \approx \begin{pmatrix} 0.816 & 0.578 \end{pmatrix} \begin{pmatrix} 3.842 \\ 2.550 \end{pmatrix} \approx 0.816 \times 3.842 + 0.578 \times 2.550 \approx 3.136 + 1.474 = 4.610$
    $||y_3|| = \sqrt{3.842^2 + 2.550^2} = \sqrt{14.761 + 6.503} = \sqrt{21.264} \approx 4.611$
    $v_3 = y_3 / ||y_3|| = \frac{1}{4.611} \begin{pmatrix} 3.842 \\ 2.550 \end{pmatrix} \approx \begin{pmatrix} 0.833 \\ 0.553 \end{pmatrix}$

**Largest Eigenvalue:** Approximately 4.61.
**Eigenvector:** Approximately $\begin{pmatrix} 0.833 \\ 0.553 \end{pmatrix}$.

*(Analytical solution: $\det \begin{pmatrix} 4-\lambda & 1 \\ 1 & 3-\lambda \end{pmatrix} = (4-\lambda)(3-\lambda) - 1 = 12 - 7\lambda + \lambda^2 - 1 = \lambda^2 - 7\lambda + 11 = 0$. $\lambda = \frac{7 \pm \sqrt{49 - 44}}{2} = \frac{7 \pm \sqrt{5}}{2}$. $\lambda_1 = \frac{7+\sqrt{5}}{2} \approx 4.618$. For $\lambda_1$: $\begin{pmatrix} 4 - 4.618 & 1 \\ 1 & 3 - 4.618 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} -0.618 & 1 \\ 1 & -1.618 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = 0$. $x = 1.618y$. Eigenvector $\approx \begin{pmatrix} 1.618 \\ 1 \end{pmatrix}$. Normalized: $\begin{pmatrix} 0.833 \\ 0.553 \end{pmatrix}$. Power method is converging well.)*

**Answer 2:**
$A = \begin{pmatrix} 5 & 2 \\ 2 & 1 \end{pmatrix}$

a.  **Analytical Solution:**
    $\det \begin{pmatrix} 5-\lambda & 2 \\ 2 & 1-\lambda \end{pmatrix} = (5-\lambda)(1-\lambda) - 4 = 5 - 6\lambda + \lambda^2 - 4 = \lambda^2 - 6\lambda + 1 = 0$.
    $\lambda = \frac{6 \pm \sqrt{36 - 4}}{2} = \frac{6 \pm \sqrt{32}}{2} = \frac{6 \pm 4\sqrt{2}}{2} = 3 \pm 2\sqrt{2}$.
    Eigenvalues: $\lambda_1 = 3 + 2\sqrt{2} \approx 5.828$, $\lambda_2 = 3 - 2\sqrt{2} \approx 0.172$.
    Smallest eigenvalue: $\lambda_2 \approx 0.172$.

    For $\lambda_1 = 3 + 2\sqrt{2}$:
    $(A - \lambda_1 I)v = \begin{pmatrix} 5 - (3+2\sqrt{2}) & 2 \\ 2 & 1 - (3+2\sqrt{2}) \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2-2\sqrt{2} & 2 \\ 2 & -2-2\sqrt{2} \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = 0$.
    $(2-2\sqrt{2})x + 2y = 0 \implies y = (\sqrt{2}-1)x$.
    Eigenvector $v_1 \approx \begin{pmatrix} 1 \\ 0.414 \end{pmatrix}$. Normalized $v_1 \approx \begin{pmatrix} 0.905 \\ 0.414 \end{pmatrix}$.

    For $\lambda_2 = 3 - 2\sqrt{2}$:
    $(A - \lambda_2 I)v = \begin{pmatrix} 5 - (3-2\sqrt{2}) & 2 \\ 2 & 1 - (3-2\sqrt{2}) \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2+2\sqrt{2} & 2 \\ 2 & -2+2\sqrt{2} \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = 0$.
    $(2+2\sqrt{2})x + 2y = 0 \implies y = -(1+\sqrt{2})x$.
    Eigenvector $v_2 \approx \begin{pmatrix} 1 \\ -2.414 \end{pmatrix}$. Normalized $v_2 \approx \begin{pmatrix} 0.414 \\ -0.905 \end{pmatrix}$.

b.  **Inverse Power Method with $\sigma = 0$ (i.e., finding largest eigenvalue of $A^{-1}$):**
    $A^{-1} = \frac{1}{(5)(1) - (2)(2)} \begin{pmatrix} 1 & -2 \\ -2 & 5 \end{pmatrix} = \frac{1}{1} \begin{pmatrix} 1 & -2 \\ -2 & 5 \end{pmatrix} = \begin{pmatrix} 1 & -2 \\ -2 & 5 \end{pmatrix}$.
    Let $v_0 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

    *   **k = 0:**
        $y_1 = A^{-1} v_0 = \begin{pmatrix} 1 & -2 \\ -2 & 5 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$
        $\mu_1 = v_0^T A^{-1} v_0 = \begin{pmatrix} 1 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ -2 \end{pmatrix} = 1$
        $||y_1|| = \sqrt{1^2 + (-2)^2} = \sqrt{5} \approx 2.236$
        $v_1 = y_1 / ||y_1|| = \frac{1}{\sqrt{5}} \begin{pmatrix} 1 \\ -2 \end{pmatrix} \approx \begin{pmatrix} 0.447 \\ -0.894 \end{pmatrix}$

    *   **k = 1:**
        $y_2 = A^{-1} v_1 = \begin{pmatrix} 1 & -2 \\ -2 & 5 \end{pmatrix} \begin{pmatrix} 0.447 \\ -0.894 \end{pmatrix} = \begin{pmatrix} 1 \times 0.447 - 2 \times (-0.894) \\ -2 \times 0.447 + 5 \times (-0.894) \end{pmatrix} = \begin{pmatrix} 0.447 + 1.788 \\ -0.894 - 4.470 \end{pmatrix} = \begin{pmatrix} 2.235 \\ -5.364 \end{pmatrix}$
        $\mu_2 = v_1^T A^{-1} v_1 \approx \begin{pmatrix} 0.447 & -0.894 \end{pmatrix} \begin{pmatrix} 2.235 \\ -5.364 \end{pmatrix} \approx 0.447 \times 2.235 + (-0.894) \times (-5.364) \approx 1.000 + 4.800 = 5.800$
        $||y_2|| = \sqrt{2.235^2 + (-5.364)^2} \approx \sqrt{5.000 + 28.773} = \sqrt{33.773} \approx 5.811$
        $v_2 = y_2 / ||y_2|| = \frac{1}{5.811} \begin{pmatrix} 2.235 \\ -5.364 \end{pmatrix} \approx \begin{pmatrix} 0.385 \\ -0.923 \end{pmatrix}$

    The largest eigenvalue of $A^{-1}$ is converging towards $1 / (3 - 2\sqrt{2}) = 3 + 2\sqrt{2} \approx 5.828$.
    $\mu_{max} \approx 5.8$.
    Smallest eigenvalue of $A = 1 / \mu_{max} \approx 1 / 5.8 \approx 0.172$.

**Answer 3:**
$A = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$

*   **Step 1: Initialization**
    $A^{(0)} = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$, $V^{(0)} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.

*   **Step 2: Iteration 1**
    *   **Pivot:** $a_{12} = -1$. So $p=1, q=2$.
    *   **Parameters:** $a_{11}=2, a_{22}=2, a_{12}=-1$.
        $\tan(2\theta) = \frac{2(-1)}{2-2} = \frac{-2}{0}$, so $2\theta = -\pi/2$ (or $3\pi/2$). Let's use $2\theta = -\pi/2$, so $\theta = -\pi/4$.
        $c = \cos(-\pi/4) = \frac{1}{\sqrt{2}}$, $s = \sin(-\pi/4) = -\frac{1}{\sqrt{2}}$.
    *   **Rotation Matrix:** $J_1 = \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix}$.
    *   **Update Matrix:** $A^{(1)} = J_1^T A^{(0)} J_1 = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix}$
        First product: $\begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} (2/\sqrt{2}) - (1/\sqrt{2}) & (-1/\sqrt{2}) + (2/\sqrt{2}) \\ (-2/\sqrt{2}) - (1/\sqrt{2}) & (1/\sqrt{2}) + (2/\sqrt{2}) \end{pmatrix} = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -3/\sqrt{2} & 3/\sqrt{2} \end{pmatrix}$
        Second product: $\begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -3/\sqrt{2} & 3/\sqrt{2} \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} = \begin{pmatrix} (1/2) + (1/2) & (-1/2) + (1/2) \\ (-3/2) + (3/2) & (3/2) + (3/2) \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$
        So, $A^{(1)} = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$.

    *   **Update Eigenvector Matrix:**
        $V^{(1)} = V^{(0)} J_1 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} = \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix}$.

*   **Step 3: Convergence**
    The matrix $A^{(1)}$ is diagonal.

*   **Result:**
    Eigenvalues: $\lambda_1 = 1, \lambda_2 = 3$.
    Eigenvectors: $v_1 = \begin{pmatrix} 1/\sqrt{2} \\ 1/\sqrt{2} \end{pmatrix}$, $v_2 = \begin{pmatrix} -1/\sqrt{2} \\ 1/\sqrt{2} \end{pmatrix}$.

**Answer 4:**
The Power Method might fail to converge or converge slowly under the following conditions:
*   **Dominant Eigenvalue Not Unique:** If there are multiple eigenvalues with the same largest absolute value (e.g., $\lambda_1 = 5, \lambda_2 = -5$).
*   **Dominant Eigenvalue is Zero:** If the largest eigenvalue is zero, but there are other non-zero eigenvalues, the method will likely converge to zero.
*   **Dominant Eigenvalue is Complex:** If the dominant eigenvalue is complex, the method may not converge or may exhibit oscillations.
*   **Initial Vector Lacks Dominant Eigenvector Component:** If the initial vector $v_0$ is orthogonal to the dominant eigenvector (i.e., $c_1 = 0$ in the linear combination), the method will converge to the next dominant eigenvalue.
*   **Ratio $|\lambda_2 / \lambda_1|$ Close to 1:** This leads to slow convergence.

**Answer 5:**
The main advantage of Jacobi's method over the Power Method is that Jacobi's method finds **all** eigenvalues and their corresponding **orthogonal** eigenvectors for a real symmetric matrix, whereas the Power Method typically finds only the **largest** eigenvalue and its corresponding eigenvector.

---

### Important Points to Remember

*   **Eigenvalue Equation:** $Av = \lambda v$.
*   **Characteristic Equation:** $\det(A - \lambda I) = 0$.
*   **Power Method:** Iteratively finds the **largest** eigenvalue (in absolute value) and its eigenvector by repeatedly multiplying by the matrix.
*   **Inverse Power Method:** Finds the **smallest** eigenvalue by applying the Power Method to $A^{-1}$.
*   **Shifted Inverse Power Method:** Finds the eigenvalue **closest** to a given shift $\sigma$ by applying the Power Method to $(A - \sigma I)^{-1}$.
*   **Jacobi's Method:** Iteratively transforms a **real symmetric matrix** into a diagonal form using **orthogonal similarity transformations** (Jacobi rotations) to find **all** eigenvalues and eigenvectors.
*   **Symmetric Matrices:** Have real eigenvalues and orthogonal eigenvectors.
*   **Orthogonal Matrices:** Preserve lengths and angles, $P^T P = I$.
*   The rate of convergence of the Power Method depends on the ratio of the magnitudes of the two largest eigenvalues.
*   Jacobi's method is generally more computationally intensive but provides a complete set of eigenvalues and eigenvectors for symmetric matrices.

---
