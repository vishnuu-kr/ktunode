---
title: "Matrix decomposition"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 2: Mathematical Foundations of AI and Data science : Role of linear algebra in Data representation and analysis"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe348"
status: "completed"
scrapedAt: "2026-05-23T17:45:45.402Z"
---
## Module 2: Mathematical Foundations of AI and Data Science - Matrix Decomposition

### Topic: Matrix Decomposition

This module explores the fundamental role of linear algebra in representing and analyzing data. A crucial aspect of this is **matrix decomposition**, a technique that breaks down complex matrices into simpler, more manageable components. This process is essential for understanding the underlying structure of data, dimensionality reduction, noise filtering, and solving various problems in AI and Data Science.

---

### 1. Introduction to Matrix Decomposition

**What is Matrix Decomposition?**

Matrix decomposition (also known as matrix factorization) is a technique in linear algebra that expresses a given matrix as a product of two or more matrices. These resulting matrices often have special properties (e.g., triangular, diagonal, orthogonal) that make them easier to work with for analysis and computation.

**Why is it Important in AI and Data Science?**

*   **Data Representation:** Matrices are the primary way to represent datasets. Decomposition helps reveal hidden patterns and relationships within this data.
*   **Dimensionality Reduction:** Techniques like PCA (Principal Component Analysis), which relies heavily on matrix decomposition (SVD), reduce the number of features while preserving essential information, making models faster and more efficient. (Relates to **CO2**)
*   **Noise Reduction:** Decompositions can help separate signal from noise in data.
*   **Solving Systems of Equations:** Many AI and DS problems involve solving linear systems, and decomposition methods like LU decomposition are efficient for this.
*   **Understanding Data Structure:** Reveals underlying latent factors or components that drive the data.
*   **Recommendation Systems:** Matrix factorization is a core technique in building collaborative filtering recommendation engines.
*   **Image Processing:** Used for image compression, noise reduction, and feature extraction.

**Key Concept:** The core idea is to transform a potentially complex matrix $A$ into a product of matrices with desirable properties, $A = B C D...$, where $B, C, D,...$ are simpler or have specific structural characteristics.

---

### 2. Common Matrix Decomposition Techniques

We will explore several key matrix decomposition methods and their applications:

#### 2.1. LU Decomposition (Lower-Upper Decomposition)

**Concept:**
LU decomposition factorizes a square matrix $A$ into the product of a lower triangular matrix $L$ and an upper triangular matrix $U$.
$$A = LU$$
*   **Lower Triangular Matrix (L):** All entries *above* the main diagonal are zero.
*   **Upper Triangular Matrix (U):** All entries *below* the main diagonal are zero.

**When is it Applicable?**
LU decomposition is generally applicable to any square matrix that does not require row permutations to compute. If row swaps are necessary (often indicated by a permutation matrix $P$), the decomposition becomes $PA = LU$.

**Applications:**
*   **Solving Linear Systems:** Efficiently solving $Ax = b$. Once $A = LU$, we solve $LUx = b$ by first solving $Ly = b$ (forward substitution) and then $Ux = y$ (backward substitution). This is much faster than direct inversion, especially for many right-hand sides.
*   **Calculating Determinants:** $\det(A) = \det(L)\det(U)$. Since $L$ and $U$ are triangular, their determinants are simply the product of their diagonal elements. $\det(L) = 1$ if $L$ has 1s on the diagonal (Doolittle's method), and $\det(U)$ is the product of its diagonal elements.

**Example:**
Let $A = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$.
We aim to find $L$ and $U$ such that $A = LU$.
$L = \begin{pmatrix} l_{11} & 0 \\ l_{21} & l_{22} \end{pmatrix}$, $U = \begin{pmatrix} u_{11} & u_{12} \\ 0 & u_{22} \end{pmatrix}$
Multiplying $L$ and $U$:
$LU = \begin{pmatrix} l_{11}u_{11} & l_{11}u_{12} \\ l_{21}u_{11} & l_{21}u_{12} + l_{22}u_{22} \end{pmatrix}$
Equating with $A$:
1.  $l_{11}u_{11} = 2$
2.  $l_{11}u_{12} = 1$
3.  $l_{21}u_{11} = 4$
4.  $l_{21}u_{12} + l_{22}u_{22} = 3$

A common convention is to set $l_{11} = 1$ (Crout's method) or $u_{11} = 1$. Let's use $l_{11}=1$:
From (1): $1 \cdot u_{11} = 2 \implies u_{11} = 2$
From (2): $1 \cdot u_{12} = 1 \implies u_{12} = 1$
From (3): $l_{21} \cdot 2 = 4 \implies l_{21} = 2$
From (4): $2 \cdot 1 + l_{22}u_{22} = 3 \implies 2 + l_{22}u_{22} = 3 \implies l_{22}u_{22} = 1$. We can set $l_{22}=1$, then $u_{22}=1$.

So, $L = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$ and $U = \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}$.
Check: $LU = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix} = A$.

**From Textbooks:**
*   Gilbert Strang's "Introduction to Linear Algebra" extensively covers Gaussian elimination and its connection to LU decomposition, often representing the multipliers used in elimination as the entries of $L$.

---

#### 2.2. Cholesky Decomposition

**Concept:**
Cholesky decomposition factorizes a **symmetric, positive-definite** matrix $A$ into the product of a lower triangular matrix $L$ and its conjugate transpose $L^*$. For real matrices, this is $A = LL^T$.
*   $L$ is a lower triangular matrix.
*   $L^T$ is an upper triangular matrix.

**When is it Applicable?**
Requires the matrix to be:
*   **Symmetric:** $A = A^T$
*   **Positive-definite:** For any non-zero vector $x$, $x^T A x > 0$.

**Applications:**
*   **Numerical Stability:** It's computationally efficient and numerically stable for positive-definite matrices.
*   **Solving Linear Systems:** Similar to LU, it can be used for $Ax=b$.
*   **Kalman Filters:** Used extensively in state estimation and control systems.
*   **Monte Carlo Simulations:** Generating correlated random variables.
*   **Optimization:** Common in optimization algorithms where Hessians are positive-definite.

**Example:**
Let $A = \begin{pmatrix} 4 & 2 \\ 2 & 5 \end{pmatrix}$. This matrix is symmetric.
To check for positive-definiteness:
Eigenvalues: $\det(A - \lambda I) = (4-\lambda)(5-\lambda) - 4 = 20 - 9\lambda + \lambda^2 - 4 = \lambda^2 - 9\lambda + 16$. Roots are $\frac{9 \pm \sqrt{81 - 64}}{2} = \frac{9 \pm \sqrt{17}}{2}$, which are both positive. So $A$ is positive-definite.

We aim to find $L = \begin{pmatrix} l_{11} & 0 \\ l_{21} & l_{22} \end{pmatrix}$ such that $A = LL^T$.
$LL^T = \begin{pmatrix} l_{11} & 0 \\ l_{21} & l_{22} \end{pmatrix} \begin{pmatrix} l_{11} & l_{21} \\ 0 & l_{22} \end{pmatrix} = \begin{pmatrix} l_{11}^2 & l_{11}l_{21} \\ l_{11}l_{21} & l_{21}^2 + l_{22}^2 \end{pmatrix}$
Equating with $A$:
1.  $l_{11}^2 = 4 \implies l_{11} = 2$ (we take the positive root)
2.  $l_{11}l_{21} = 2 \implies 2 \cdot l_{21} = 2 \implies l_{21} = 1$
3.  $l_{21}^2 + l_{22}^2 = 5 \implies 1^2 + l_{22}^2 = 5 \implies 1 + l_{22}^2 = 5 \implies l_{22}^2 = 4 \implies l_{22} = 2$

So, $L = \begin{pmatrix} 2 & 0 \\ 1 & 2 \end{pmatrix}$.
Check: $LL^T = \begin{pmatrix} 2 & 0 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 4 & 2 \\ 2 & 1+4 \end{pmatrix} = \begin{pmatrix} 4 & 2 \\ 2 & 5 \end{pmatrix} = A$.

**From Textbooks:**
*   "Mathematics for Machine Learning" by Deisenroth, Faisal, and Ong provides a good overview of Cholesky decomposition and its mathematical underpinnings relevant to machine learning.

---

#### 2.3. Eigenvalue Decomposition (EVD) / Spectral Decomposition

**Concept:**
For a **square matrix** $A$, eigenvalue decomposition factors $A$ into a product of its eigenvectors and eigenvalues.
$$A = V \Lambda V^{-1}$$
where:
*   $V$ is a matrix whose columns are the eigenvectors of $A$.
*   $\Lambda$ (Lambda) is a diagonal matrix where the diagonal entries are the corresponding eigenvalues of $A$.

**When is it Applicable?**
Applicable to **any square matrix** for which we can find a full set of linearly independent eigenvectors. This is guaranteed for **symmetric matrices**. For non-symmetric matrices, it might not be possible or the eigenvectors might be complex.

**Applications:**
*   **Principal Component Analysis (PCA):** PCA relies on finding the eigenvectors of the covariance matrix. (Relates to **CO2**)
*   **Understanding Matrix Properties:** Eigenvalues indicate the scaling factors of the linear transformation represented by the matrix. Eigenvectors indicate the directions that remain unchanged (except for scaling).
*   **Stability Analysis:** In dynamical systems.
*   **Solving Differential Equations.**
*   **Matrix Functions:** Calculating powers of a matrix, exponential of a matrix ($e^A$), etc. $A^k = (V \Lambda V^{-1})^k = V \Lambda^k V^{-1}$, where $\Lambda^k$ is easy to compute (raise diagonal elements to the power k).

**Example:**
Let $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. This is a symmetric matrix.
1.  **Find Eigenvalues:** Solve $\det(A - \lambda I) = 0$.
    $\det \begin{pmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{pmatrix} = (2-\lambda)^2 - 1 = 0$
    $(2-\lambda)^2 = 1 \implies 2-\lambda = \pm 1$
    If $2-\lambda = 1$, then $\lambda_1 = 1$.
    If $2-\lambda = -1$, then $\lambda_2 = 3$.
    So, eigenvalues are $\lambda_1 = 1, \lambda_2 = 3$.
    $\Lambda = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$.

2.  **Find Eigenvectors:** For each eigenvalue $\lambda$, solve $(A - \lambda I)v = 0$.

    *   For $\lambda_1 = 1$:
        $(A - 1I)v = \begin{pmatrix} 2-1 & 1 \\ 1 & 2-1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
        This gives $v_1 + v_2 = 0$, so $v_1 = -v_2$.
        An eigenvector is $v_1 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

    *   For $\lambda_2 = 3$:
        $(A - 3I)v = \begin{pmatrix} 2-3 & 1 \\ 1 & 2-3 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
        This gives $-v_1 + v_2 = 0$, so $v_1 = v_2$.
        An eigenvector is $v_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

3.  **Form Matrices:**
    $V = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$
    $V^{-1} = \frac{1}{\det(V)} \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix} = \frac{1}{1 - (-1)} \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$

4.  **Decomposition:**
    $A = V \Lambda V^{-1} = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix} \frac{1}{2} \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$
    $A = \frac{1}{2} \begin{pmatrix} 1 & 3 \\ -1 & 3 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 1+3 & -1+3 \\ -1+3 & 1+3 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 4 & 2 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Correct.

**Important Point:** For symmetric matrices, $V$ is orthogonal ($V^{-1} = V^T$), leading to $A = V \Lambda V^T$, which is simpler.

**From Textbooks:**
*   "Introduction to Linear Algebra" by Gilbert Strang provides thorough coverage of eigenvalues and eigenvectors.
*   "Mathematics for Machine Learning" links EVD directly to PCA.
*   "Fundamentals of Mathematical Statistics" by Gupta and Kapoor would cover these concepts in the context of statistical theory.

---

#### 2.4. Singular Value Decomposition (SVD)

**Concept:**
Singular Value Decomposition is a generalization of eigenvalue decomposition that works for *any* matrix (not just square or symmetric). It decomposes a matrix $A$ into three matrices:
$$A = U \Sigma V^T$$
where:
*   $U$ is an orthogonal matrix ($U^T U = I$). Its columns are the **left singular vectors**.
*   $\Sigma$ (Sigma) is a diagonal matrix with non-negative real numbers on the diagonal, called **singular values**, ordered from largest to smallest ($\sigma_1 \ge \sigma_2 \ge ... \ge 0$). The off-diagonal elements are zero.
*   $V$ is an orthogonal matrix ($V^T V = I$). Its columns are the **right singular vectors**. $V^T$ is the transpose of $V$.

**When is it Applicable?**
Applicable to **any m x n matrix**.

**Relationship to Eigenvalue Decomposition:**
If $A$ is an $m \times n$ matrix:
*   The columns of $V$ are the eigenvectors of $A^T A$.
*   The columns of $U$ are the eigenvectors of $A A^T$.
*   The singular values $\sigma_i$ are the square roots of the non-zero eigenvalues of both $A^T A$ and $A A^T$.

**Applications:**
*   **Dimensionality Reduction (PCA):** SVD is a more robust way to perform PCA. The principal components are captured by the right singular vectors ($V$) corresponding to the largest singular values. (Directly addresses **CO2**)
*   **Image Compression:** By keeping only the largest singular values and their corresponding vectors, we can approximate the original image with a lower-rank matrix, effectively compressing it.
*   **Noise Reduction:** Small singular values often correspond to noise. Removing them can denoise the data.
*   **Recommender Systems:** Used to find latent factors in user-item interaction matrices.
*   **Solving Linear Systems & Pseudoinverse:** Calculating the Moore-Penrose pseudoinverse ($A^+ = V \Sigma^+ U^T$), useful for solving systems with no exact solution or infinite solutions.
*   **Natural Language Processing (NLP):** Latent Semantic Analysis (LSA) uses SVD to find semantic relationships between words and documents.

**Example:**
Let $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$. This is a 3x2 matrix.

1.  **Calculate $A^T A$:**
    $A^T A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1(1)+0(0)+1(1) & 1(1)+0(1)+1(0) \\ 1(1)+1(0)+0(1) & 1(1)+1(1)+0(0) \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$
    (Notice this is the same matrix as in the EVD example!)

2.  **Find Eigenvalues of $A^T A$:**
    From the previous example, eigenvalues are $\lambda_1 = 3, \lambda_2 = 1$.
    The singular values are $\sigma_i = \sqrt{\lambda_i}$.
    $\sigma_1 = \sqrt{3}$, $\sigma_2 = \sqrt{1} = 1$.
    $\Sigma = \begin{pmatrix} \sqrt{3} & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}$ (Size depends on $A$; here 3x2).

3.  **Find Eigenvectors of $A^T A$ (these form $V$):**
    From the previous example, eigenvectors are $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ for $\lambda=3$ and $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$ for $\lambda=1$.
    Normalize them to make $V$ orthogonal:
    For $\lambda_1=3$, eigenvector is $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$. Normalized: $\frac{1}{\sqrt{1^2+1^2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
    For $\lambda_2=1$, eigenvector is $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$. Normalized: $\frac{1}{\sqrt{1^2+(-1)^2}}\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \end{pmatrix}$.
    So, $V = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ 1/\sqrt{2} & -1/\sqrt{2} \end{pmatrix}$.

4.  **Find Left Singular Vectors (columns of $U$):**
    The columns of $U$ are given by $u_i = \frac{1}{\sigma_i} A v_i$.
    *   $u_1 = \frac{1}{\sigma_1} A v_1 = \frac{1}{\sqrt{3}} \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} \\ 1/\sqrt{2} \end{pmatrix} = \frac{1}{\sqrt{3}} \begin{pmatrix} 2/\sqrt{2} \\ 1/\sqrt{2} \\ 1/\sqrt{2} \end{pmatrix} = \begin{pmatrix} 2/\sqrt{6} \\ 1/\sqrt{6} \\ 1/\sqrt{6} \end{pmatrix}$.
    *   $u_2 = \frac{1}{\sigma_2} A v_2 = \frac{1}{1} \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} \\ -1/\sqrt{2} \end{pmatrix} = \begin{pmatrix} 0 \\ -1/\sqrt{2} \\ 1/\sqrt{2} \end{pmatrix}$.

    We need a third vector to complete $U$ such that it's orthogonal. This third vector is the null space of $A^T$.
    For a 3x2 matrix $A$, $A A^T$ is 3x3. Its eigenvectors form $U$. The eigenvalues of $A A^T$ are $\sigma_1^2, \sigma_2^2$, and 0.
    $A A^T = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$.
    Eigenvalues are $3, 1, 0$.
    Eigenvector for $\lambda=0$: $A A^T w = 0$.
    $\begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} w_1 \\ w_2 \\ w_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
    $w_1 + w_2 = 0 \implies w_2 = -w_1$
    $w_1 + w_3 = 0 \implies w_3 = -w_1$
    Choose $w_1=1$: $w = \begin{pmatrix} 1 \\ -1 \\ -1 \end{pmatrix}$. Normalize: $\frac{1}{\sqrt{3}}\begin{pmatrix} 1 \\ -1 \\ -1 \end{pmatrix}$.
    Let this be $u_3$.

    So, $U = \begin{pmatrix} 2/\sqrt{6} & 0 & 1/\sqrt{3} \\ 1/\sqrt{6} & -1/\sqrt{2} & -1/\sqrt{3} \\ 1/\sqrt{6} & 1/\sqrt{2} & -1/\sqrt{3} \end{pmatrix}$.

    $A = U \Sigma V^T = \begin{pmatrix} 2/\sqrt{6} & 0 & 1/\sqrt{3} \\ 1/\sqrt{6} & -1/\sqrt{2} & -1/\sqrt{3} \\ 1/\sqrt{6} & 1/\sqrt{2} & -1/\sqrt{3} \end{pmatrix} \begin{pmatrix} \sqrt{3} & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ 1/\sqrt{2} & -1/\sqrt{2} \end{pmatrix}$
    $A = \begin{pmatrix} 2/\sqrt{2} & 0 & 0 \\ 1/\sqrt{2} & -1/\sqrt{2} & 0 \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ 1/\sqrt{2} & -1/\sqrt{2} \end{pmatrix}$
    $A = \begin{pmatrix} 1 & 1 \\ 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ 1/\sqrt{2} & -1/\sqrt{2} \end{pmatrix}$ - This calculation is getting messy.
    A simpler way to check: $A \approx u_1 \sigma_1 v_1^T + u_2 \sigma_2 v_2^T$
    $u_1 \sigma_1 v_1^T = \begin{pmatrix} 2/\sqrt{6} \\ 1/\sqrt{6} \\ 1/\sqrt{6} \end{pmatrix} \sqrt{3} \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} = \begin{pmatrix} 2/\sqrt{2} \\ 1/\sqrt{2} \\ 1/\sqrt{2} \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$
    $u_2 \sigma_2 v_2^T = \begin{pmatrix} 0 \\ -1/\sqrt{2} \\ 1/\sqrt{2} \end{pmatrix} 1 \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ -1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix}$
    Summing them: $\begin{pmatrix} 1 & 1 \\ 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ -1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} = A$. This works.

**Rank-k Approximation:**
The SVD allows for constructing a rank-$k$ approximation of $A$ by keeping only the $k$ largest singular values and their corresponding vectors:
$A_k = U_k \Sigma_k V_k^T = \sum_{i=1}^k \sigma_i u_i v_i^T$.
This $A_k$ is the best rank-$k$ approximation of $A$ in terms of Frobenius norm.

**From Textbooks:**
*   "Introduction to Linear Algebra" by Gilbert Strang emphasizes SVD as a fundamental tool.
*   "Hands-on Machine Learning" and "Mathematics for Machine Learning" provide practical applications of SVD in PCA and recommender systems.
*   "Foundations of Data Science" by Blum, Hopcroft, and Kannan may discuss SVD in the context of algorithms and data structures.

---

#### 2.5. QR Decomposition

**Concept:**
QR decomposition factorizes a matrix $A$ into the product of an **orthogonal matrix** $Q$ and an **upper triangular matrix** $R$.
$$A = QR$$
*   $Q$ is an orthogonal matrix ($Q^T Q = I$). Its columns are orthonormal vectors.
*   $R$ is an upper triangular matrix.

**When is it Applicable?**
Applicable to any $m \times n$ matrix.

**How it's Achieved:**
Can be obtained using:
*   **Gram-Schmidt Process:** Orthonormalizes the columns of $A$.
*   **Householder Reflections:** A more numerically stable method.
*   **Givens Rotations:** Another stable method, useful for sparse matrices.

**Applications:**
*   **Solving Linear Systems:** Similar to LU, $Ax=b \implies QRx=b$. Since $Q$ is orthogonal, $Q^T Q = I$, so $Rx = Q^T b$. This system can be solved efficiently using back-substitution.
*   **Least Squares Problems:** Crucial for solving overdetermined systems in linear regression. The normal equations $A^T Ax = A^T b$ can be solved as $Rx = Q^T b$, which is more stable than directly forming $A^T A$.
*   **Eigenvalue Algorithms:** Used in the QR algorithm for computing eigenvalues.

**Example:**
Let $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \\ 1 & 2 \end{pmatrix}$.

Using Gram-Schmidt:
Let $a_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ and $a_2 = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}$ be the columns of $A$.

1.  **Orthogonalize $a_1$ and $a_2$:**
    *   $u_1 = a_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$
    *   $u_2 = a_2 - \text{proj}_{u_1} a_2 = a_2 - \frac{a_2 \cdot u_1}{u_1 \cdot u_1} u_1$
        $a_2 \cdot u_1 = 1(1) + 0(1) + 2(1) = 3$
        $u_1 \cdot u_1 = 1^2 + 1^2 + 1^2 = 3$
        $u_2 = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} - \frac{3}{3} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} - \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}$

2.  **Normalize the orthogonal vectors to get orthonormal vectors $q_1, q_2$:**
    *   $q_1 = \frac{u_1}{||u_1||} = \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$
    *   $q_2 = \frac{u_2}{||u_2||} = \frac{1}{\sqrt{0^2+(-1)^2+1^2}} \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{2}} \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}$

3.  **Form $Q$ and $R$:**
    $Q = \begin{pmatrix} q_1 & q_2 \end{pmatrix} = \begin{pmatrix} 1/\sqrt{3} & 0 \\ 1/\sqrt{3} & -1/\sqrt{2} \\ 1/\sqrt{3} & 1/\sqrt{2} \end{pmatrix}$

    The entries of $R$ can be found using $R = Q^T A$.
    $R = \begin{pmatrix} 1/\sqrt{3} & 1/\sqrt{3} & 1/\sqrt{3} \\ 0 & -1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & 0 \\ 1 & 2 \end{pmatrix}$
    $r_{11} = (1/\sqrt{3})(1) + (1/\sqrt{3})(1) + (1/\sqrt{3})(1) = 3/\sqrt{3} = \sqrt{3}$
    $r_{12} = (1/\sqrt{3})(1) + (1/\sqrt{3})(0) + (1/\sqrt{3})(2) = 3/\sqrt{3} = \sqrt{3}$
    $r_{21} = (0)(1) + (-1/\sqrt{2})(1) + (1/\sqrt{2})(1) = 0$
    $r_{22} = (0)(1) + (-1/\sqrt{2})(0) + (1/\sqrt{2})(2) = 2/\sqrt{2} = \sqrt{2}$

    So, $R = \begin{pmatrix} \sqrt{3} & \sqrt{3} \\ 0 & \sqrt{2} \end{pmatrix}$.

    Check: $QR = \begin{pmatrix} 1/\sqrt{3} & 0 \\ 1/\sqrt{3} & -1/\sqrt{2} \\ 1/\sqrt{3} & 1/\sqrt{2} \end{pmatrix} \begin{pmatrix} \sqrt{3} & \sqrt{3} \\ 0 & \sqrt{2} \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & -1 \\ 1 & 1 \end{pmatrix}$. This doesn't match $A$.
    Ah, the entries of R are actually related to the Gram-Schmidt process:
    $a_1 = q_1 r_{11}$
    $a_2 = q_1 r_{12} + q_2 r_{22}$
    From the Gram-Schmidt calculation:
    $a_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$, $q_1 = \frac{1}{\sqrt{3}}\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$. So $r_{11} = ||a_1|| = \sqrt{3}$.
    $a_2 = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}$, $u_2 = \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}$, $q_2 = \frac{1}{\sqrt{2}}\begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}$.
    $a_2 = q_1 (\frac{a_2 \cdot q_1}{q_1 \cdot q_1}) + q_2 ||u_2|| = q_1 (a_2 \cdot q_1) + q_2 ||u_2||$.
    $r_{12} = a_2 \cdot q_1 = \frac{1}{\sqrt{3}}(1)(1) + \frac{1}{\sqrt{3}}(0)(1) + \frac{1}{\sqrt{3}}(2)(1) = \frac{3}{\sqrt{3}} = \sqrt{3}$.
    $r_{22} = ||u_2|| = \sqrt{2}$.
    So $R = \begin{pmatrix} \sqrt{3} & \sqrt{3} \\ 0 & \sqrt{2} \end{pmatrix}$ is correct for the top part.
    The calculation of Q has $q_1$ and $q_2$ correctly.
    $QR = \begin{pmatrix} 1/\sqrt{3} & 0 \\ 1/\sqrt{3} & -1/\sqrt{2} \\ 1/\sqrt{3} & 1/\sqrt{2} \end{pmatrix} \begin{pmatrix} \sqrt{3} & \sqrt{3} \\ 0 & \sqrt{2} \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & -1 \\ 1 & 1 \end{pmatrix}$. Still not $A$.

    Let's re-check the Gram-Schmidt steps.
    $u_1 = a_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$
    $q_1 = \frac{1}{\sqrt{3}}\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$

    $a_2 = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}$
    $\text{proj}_{q_1} a_2 = (a_2 \cdot q_1) q_1 = (\frac{1}{\sqrt{3}} + \frac{0}{\sqrt{3}} + \frac{2}{\sqrt{3}}) q_1 = \frac{3}{\sqrt{3}} q_1 = \sqrt{3} q_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$.
    $u_2 = a_2 - \text{proj}_{q_1} a_2 = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} - \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}$.
    $q_2 = \frac{u_2}{||u_2||} = \frac{1}{\sqrt{2}}\begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}$.

    $Q = \begin{pmatrix} 1/\sqrt{3} & 0 \\ 1/\sqrt{3} & -1/\sqrt{2} \\ 1/\sqrt{3} & 1/\sqrt{2} \end{pmatrix}$.

    The relation is $a_i = \sum_{j=1}^i q_j r_{ji}$. For $i=1$, $a_1 = q_1 r_{11}$. So $r_{11} = ||a_1|| = \sqrt{3}$.
    For $i=2$, $a_2 = q_1 r_{12} + q_2 r_{22}$.
    $a_2 \cdot q_1 = r_{12}$. $a_2 \cdot q_1 = (1)(1/\sqrt{3}) + (0)(1/\sqrt{3}) + (2)(1/\sqrt{3}) = 3/\sqrt{3} = \sqrt{3}$. So $r_{12} = \sqrt{3}$.
    $a_2 \cdot q_2 = r_{22}$. $a_2 \cdot q_2 = (1)(0) + (0)(-1/\sqrt{2}) + (2)(1/\sqrt{2}) = 2/\sqrt{2} = \sqrt{2}$. So $r_{22} = \sqrt{2}$.
    This means $R = \begin{pmatrix} \sqrt{3} & \sqrt{3} \\ 0 & \sqrt{2} \end{pmatrix}$ is correct.

    Let's check $Q R$ again:
    $QR = \begin{pmatrix} 1/\sqrt{3} & 0 \\ 1/\sqrt{3} & -1/\sqrt{2} \\ 1/\sqrt{3} & 1/\sqrt{2} \end{pmatrix} \begin{pmatrix} \sqrt{3} & \sqrt{3} \\ 0 & \sqrt{2} \end{pmatrix} = \begin{pmatrix} (1/\sqrt{3})\sqrt{3} + 0 & (1/\sqrt{3})\sqrt{3} + 0 \\ (1/\sqrt{3})\sqrt{3} + (-1/\sqrt{2})0 & (1/\sqrt{3})\sqrt{3} + (-1/\sqrt{2})\sqrt{2} \\ (1/\sqrt{3})\sqrt{3} + (1/\sqrt{2})0 & (1/\sqrt{3})\sqrt{3} + (1/\sqrt{2})\sqrt{2} \end{pmatrix}$
    $QR = \begin{pmatrix} 1 & 1 \\ 1 & 1-1 \\ 1 & 1+1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \\ 1 & 2 \end{pmatrix}$. This is A! The previous calculation had a mistake.

**Important Point:** For a square matrix $A$, $Q$ is an $n \times n$ orthogonal matrix and $R$ is an $n \times n$ upper triangular matrix. If $A$ is $m \times n$ with $m > n$, $Q$ is $m \times n$ with orthonormal columns and $R$ is $n \times n$ upper triangular.

**From Textbooks:**
*   "Introduction to Linear Algebra" by Gilbert Strang covers the Gram-Schmidt process and its relation to QR decomposition.
*   "Mathematics for Machine Learning" discusses QR decomposition in the context of least squares.

---

### 3. Applications in Data Science and AI

**3.1. Dimensionality Reduction with PCA and SVD**

*   **Concept:** High-dimensional data can be difficult to visualize, process, and model effectively. PCA aims to find a new set of uncorrelated variables (principal components) that capture most of the variance in the original data.
*   **How it Works:**
    1.  Center the data (subtract the mean).
    2.  Compute the covariance matrix of the data.
    3.  Perform Eigenvalue Decomposition (EVD) or Singular Value Decomposition (SVD) on the covariance matrix (or the data matrix directly for SVD).
    4.  The eigenvectors (for EVD) or right singular vectors (for SVD) corresponding to the largest eigenvalues/singular values represent the directions of maximum variance. These are the principal components.
    5.  Project the original data onto the subspace spanned by these top eigenvectors/singular vectors to obtain a lower-dimensional representation.
*   **Why SVD is Preferred:** SVD can be applied directly to the data matrix $X$ as $X = U \Sigma V^T$. The columns of $V$ are the principal directions, and the diagonal elements of $\Sigma$ (squared) are related to the variance. It's often more numerically stable than computing the covariance matrix and then its EVD, especially with large datasets. (Directly addresses **CO2**)

**Example (Conceptual):** Imagine a dataset of customer purchasing habits with hundreds of features (items purchased). PCA/SVD can reveal that most of the variation can be explained by just a few underlying factors, like "preference for electronics," "interest in home goods," etc., reducing the dimensionality from hundreds to a few.

**3.2. Image Compression using SVD**

*   **Concept:** An image can be represented as a matrix of pixel values. SVD allows us to approximate this matrix with a lower-rank representation.
*   **How it Works:**
    1.  Represent the grayscale image as a matrix $A$.
    2.  Perform SVD: $A = U \Sigma V^T$.
    3.  To compress, keep only the top $k$ singular values and corresponding singular vectors: $A_k = U_k \Sigma_k V_k^T$.
    4.  The number of singular values ($k$) determines the compression ratio and fidelity of the reconstructed image. A smaller $k$ means more compression but more loss of detail.
*   **Example:** A high-resolution image can be stored with significantly fewer bits by keeping only the most significant components from its SVD.

**3.3. Recommender Systems using Matrix Factorization (SVD/EVD variants)**

*   **Concept:** User-item interaction matrices (e.g., user ratings for movies) are often sparse and high-dimensional. Matrix factorization techniques (often based on SVD principles) decompose this matrix into lower-dimensional latent factor matrices for users and items.
*   **How it Works:**
    1.  Represent user-item interactions as a matrix $R$ (e.g., $R_{ui}$ is user $u$'s rating for item $i$).
    2.  Factorize $R$ into two smaller matrices: $R \approx P \cdot Q^T$, where $P$ contains latent user features and $Q$ contains latent item features.
    3.  The latent factors capture underlying preferences and characteristics that explain the observed ratings.
    4.  Predictions for missing ratings can be made by multiplying the corresponding user and item latent vectors.
*   **Example:** Netflix prize recommendation system heavily utilized matrix factorization techniques.

**3.4. Solving Linear Systems in Machine Learning Models**

*   **Concept:** Many machine learning models, like linear regression, involve solving systems of linear equations. Matrix decompositions provide efficient and stable methods.
*   **How it Works:**
    *   **Linear Regression:** Finding the optimal weights $w$ in $y = Xw$ often involves solving the normal equations $A^T Ax = A^T b$. QR decomposition ($A=QR$) leads to $(Q R)^T (Q R) x = (Q R)^T b \implies R^T Q^T Q R x = R^T Q^T b \implies R^T R x = R^T b$. If $R$ is invertible, $Rx = b'$, then $x=R^{-1}b'$. This is more stable than forming $A^TA$.
    *   **LU Decomposition:** Directly solves $Ax=b$ efficiently.

---

### 4. Summary and Important Points to Remember

*   **Matrix decomposition** breaks down matrices into simpler factors, revealing structure and enabling efficient computation.
*   **LU Decomposition:** $A=LU$ for square matrices, useful for solving linear systems and calculating determinants.
*   **Cholesky Decomposition:** $A=LL^T$ for symmetric, positive-definite matrices, efficient and stable.
*   **Eigenvalue Decomposition (EVD):** $A=V \Lambda V^{-1}$ for square matrices with a full set of eigenvectors, essential for understanding matrix behavior and PCA. For symmetric matrices, $A=V \Lambda V^T$.
*   **Singular Value Decomposition (SVD):** $A=U \Sigma V^T$ for *any* matrix, the most general and powerful. Key for dimensionality reduction (PCA), image compression, and recommender systems.
*   **QR Decomposition:** $A=QR$ for any matrix, useful for solving linear systems and least-squares problems, often achieved via Gram-Schmidt or Householder reflections.
*   **Dimensionality Reduction:** SVD and EVD (via PCA) are primary tools for reducing the number of features while retaining important information. (Connects to **CO2**)
*   **Numerical Stability:** Some decomposition methods (like Cholesky and QR using Householder reflections) offer better numerical stability than direct methods.
*   **Rank-k Approximation:** SVD allows for the best low-rank approximation of a matrix, crucial for compression and noise reduction.

---

### 5. Practice Questions and Exercises

**Question 1 (Conceptual):**
Which matrix decomposition is guaranteed to work for any real square matrix, provided it has a full set of linearly independent eigenvectors?
(a) LU Decomposition
(b) Cholesky Decomposition
(c) Eigenvalue Decomposition
(d) QR Decomposition

**Answer:** (c) Eigenvalue Decomposition (though it might involve complex numbers or fail if eigenvectors are not linearly independent). SVD is guaranteed for *any* matrix.

**Question 2 (Conceptual):**
If you have a symmetric, positive-definite matrix and want to solve a system of linear equations efficiently and stably, which decomposition would you most likely choose?
(a) LU Decomposition
(b) Cholesky Decomposition
(c) SVD
(d) QR Decomposition

**Answer:** (b) Cholesky Decomposition. It's specifically designed for this type of matrix and is highly efficient and stable.

**Question 3 (Application):**
You are building a dimensionality reduction system for image data. You have a high-resolution grayscale image represented as a matrix. Which decomposition technique is most suitable for approximating the image with a lower-dimensional representation (compression)?
(a) LU Decomposition
(b) QR Decomposition
(c) Eigenvalue Decomposition
(d) Singular Value Decomposition

**Answer:** (d) Singular Value Decomposition. SVD's ability to produce rank-k approximations makes it ideal for image compression.

**Question 4 (Application - PCA related):**
Consider a data matrix $X$. If you compute the SVD of $X$ as $X = U \Sigma V^T$, what matrix contains the principal components (directions of maximum variance)?
(a) $U$
(b) $\Sigma$
(c) $V$
(d) $V^T$

**Answer:** (c) $V$. The columns of $V$ are the right singular vectors, which correspond to the principal directions of variance in the data.

**Question 5 (Numerical Example - LU Decomposition):**
Find the LU decomposition of the matrix $A = \begin{pmatrix} 2 & 3 \\ 4 & 5 \end{pmatrix}$.

**Solution:**
We want $A = LU$, where $L = \begin{pmatrix} 1 & 0 \\ l_{21} & 1 \end{pmatrix}$ and $U = \begin{pmatrix} u_{11} & u_{12} \\ 0 & u_{22} \end{pmatrix}$.
$LU = \begin{pmatrix} u_{11} & u_{12} \\ l_{21}u_{11} & l_{21}u_{12} + u_{22} \end{pmatrix}$
Equating elements:
1.  $u_{11} = 2$
2.  $u_{12} = 3$
3.  $l_{21}u_{11} = 4 \implies l_{21}(2) = 4 \implies l_{21} = 2$
4.  $l_{21}u_{12} + u_{22} = 5 \implies (2)(3) + u_{22} = 5 \implies 6 + u_{22} = 5 \implies u_{22} = -1$.

So, $L = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$ and $U = \begin{pmatrix} 2 & 3 \\ 0 & -1 \end{pmatrix}$.
Check: $LU = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 2 & 3 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 4 & 6-1 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 4 & 5 \end{pmatrix} = A$.

**Question 6 (Numerical Example - SVD concept):**
Suppose a matrix $A$ has the following SVD:
$A = \begin{pmatrix} \dots & \dots \\ \dots & \dots \end{pmatrix} \begin{pmatrix} 5 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} \dots \\ \dots \end{pmatrix}^T$
If we want to create a rank-1 approximation of $A$, which singular value would we keep?
(a) 0
(b) 1
(c) 5
(d) Both 5 and 1

**Answer:** (c) 5. The rank-1 approximation keeps only the largest singular value and its corresponding singular vectors.

---

### 6. Learning Outcomes Covered

*   **CO2:** Apply advanced mathematical concepts such as matrix operations, singular values, and principal component analysis to analyze and solve engineering problems.
    *   This topic directly addresses singular values and their role in PCA for dimensionality reduction. The decompositions themselves are advanced mathematical operations crucial for analysis.
*   **CO1, CO3, CO4:** While not directly stated, the understanding of matrix decomposition underpins many AI/DS algorithms discussed in these outcomes. For instance, solving linear systems (CO1, CO4) or analyzing data structures (CO3) heavily relies on these techniques.

---

This detailed set of notes provides a strong foundation in matrix decomposition, its various forms, and their critical applications in Artificial Intelligence and Data Science, drawing upon the principles outlined in the provided textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
