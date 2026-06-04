---
title: "Determinant and Trace, Eigenvalues and Eigenvectors, Cholesky"
subject: "MATHEMATICS FOR MACHINE LEARNING"
module: "Module 2: ANALYTIC GEOMETRY, MATRIX DECOMPOSITIONS: Norms, Inner Products, Lengths and Distances, Angles and Orthogonality, Orthonormal Basis, Orthogonal Complement, Orthogonal Projections – Projection into One Dimensional Subspaces, Projection onto General Subspaces, Gram"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35eed"
status: "completed"
scrapedAt: "2026-05-23T16:17:18.981Z"
---
# Mathematics for Machine Learning - Module 2: Analytic Geometry, Matrix Decompositions

## Topic: Determinant and Trace, Eigenvalues and Eigenvectors, Cholesky Decomposition

This module delves into fundamental concepts of linear algebra that are crucial for understanding and applying machine learning algorithms. We will explore properties of matrices like the determinant and trace, the significance of eigenvalues and eigenvectors, and a powerful matrix decomposition technique: Cholesky decomposition.

---

### 1. Determinant and Trace

These are two scalar values that can be computed from a square matrix and reveal important properties about the matrix and the linear transformation it represents.

#### 1.1 Determinant ($\det(A)$ or $|A|$)

*   **Definition:** The determinant is a scalar value that can be computed from the elements of a square matrix. It is often defined recursively for matrices of size $n \times n$. For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the determinant is $\det(A) = ad - bc$.

*   **Geometric Interpretation:** The absolute value of the determinant of a matrix represents the scaling factor of the volume of a unit hypercube when transformed by the linear transformation represented by the matrix. For a 2D matrix, it's the scaling factor for the area of a unit square.
    *   If $\det(A) > 0$, the orientation of the transformed space is preserved.
    *   If $\det(A) < 0$, the orientation is reversed.
    *   If $\det(A) = 0$, the transformation collapses the space into a lower-dimensional subspace, meaning the matrix is singular and does not have an inverse.

*   **Properties:**
    *   $\det(AB) = \det(A)\det(B)$
    *   $\det(A^T) = \det(A)$
    *   $\det(A^{-1}) = 1/\det(A)$ (if $A$ is invertible)
    *   If $A$ is an upper or lower triangular matrix, its determinant is the product of its diagonal entries.
    *   **Significance in Machine Learning:** Determinants are used in calculating Jacobians for change of variables in probability distributions, assessing the invertibility of matrices, and in regularization techniques (e.g., in certain covariance matrix regularization methods).

*   **Calculation (Cofactor Expansion):** For an $n \times n$ matrix $A$, the determinant can be calculated by cofactor expansion along any row or column. For expansion along the $i$-th row:
    $\det(A) = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} M_{ij}$
    where $a_{ij}$ is the element in the $i$-th row and $j$-th column, and $M_{ij}$ is the determinant of the submatrix obtained by removing the $i$-th row and $j$-th column (the minor).

*   **Example:**
    For $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $\det(A) = (1 \times 4) - (2 \times 3) = 4 - 6 = -2$.

#### 1.2 Trace ($\operatorname{tr}(A)$)

*   **Definition:** The trace of a square matrix is the sum of its diagonal elements. For an $n \times n$ matrix $A$, $\operatorname{tr}(A) = \sum_{i=1}^{n} a_{ii}$.

*   **Properties:**
    *   $\operatorname{tr}(A+B) = \operatorname{tr}(A) + \operatorname{tr}(B)$
    *   $\operatorname{tr}(cA) = c \operatorname{tr}(A)$ for a scalar $c$.
    *   $\operatorname{tr}(AB) = \operatorname{tr}(BA)$ (cyclic property). This is very useful.
    *   $\operatorname{tr}(A^T) = \operatorname{tr}(A)$
    *   $\operatorname{tr}(A) = \sum_{i=1}^{n} \lambda_i$, where $\lambda_i$ are the eigenvalues of $A$.

*   **Significance in Machine Learning:** The trace is used in various contexts:
    *   **Covariance Matrices:** In statistics, the trace of a covariance matrix is the sum of variances of all variables, which can be interpreted as the total variance.
    *   **Regularization:** The trace penalty is sometimes used in regularization (e.g., nuclear norm regularization, which is the sum of singular values, related to trace).
    *   **Optimization:** Traces appear in gradients of matrix functions, which are essential for optimization algorithms in ML.

*   **Example:**
    For $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$, $\operatorname{tr}(A) = 1 + 5 + 9 = 15$.

---

### 2. Eigenvalues and Eigenvectors

These are fundamental concepts for understanding the behavior of linear transformations and are widely used in dimensionality reduction (like PCA), spectral analysis, and solving systems of differential equations.

*   **Definition:** For a square matrix $A$, a non-zero vector $v$ is an **eigenvector** of $A$ if applying the transformation $A$ to $v$ results in a scaled version of $v$. The scaling factor is called the **eigenvalue**, denoted by $\lambda$. Mathematically, this is expressed as:
    $Av = \lambda v$

*   **Finding Eigenvalues and Eigenvectors:**
    1.  Rearrange the eigenvalue equation: $Av - \lambda v = 0$
    2.  Introduce the identity matrix $I$: $Av - \lambda Iv = 0$
    3.  Factor out $v$: $(A - \lambda I)v = 0$
    4.  For a non-zero vector $v$ to satisfy this equation, the matrix $(A - \lambda I)$ must be singular (i.e., its determinant must be zero). This is known as the **characteristic equation**:
        $\det(A - \lambda I) = 0$
    5.  Solving this polynomial equation for $\lambda$ gives the eigenvalues.
    6.  Once the eigenvalues are found, substitute each $\lambda$ back into $(A - \lambda I)v = 0$ and solve the system of linear equations for $v$ to find the corresponding eigenvectors.

*   **Properties of Eigenvalues and Eigenvectors:**
    *   **Trace and Determinant Relation:** The trace of a matrix is the sum of its eigenvalues, and the determinant is the product of its eigenvalues.
        $\operatorname{tr}(A) = \sum_{i=1}^{n} \lambda_i$
        $\det(A) = \prod_{i=1}^{n} \lambda_i$
    *   **Eigenvectors of Diagonal Matrices:** The eigenvalues of a diagonal matrix are its diagonal entries, and the eigenvectors are the standard basis vectors.
    *   **Similarity Transformations:** If $B = P^{-1}AP$, then $A$ and $B$ have the same eigenvalues.
    *   **Eigenvectors for Symmetric Matrices:** For a symmetric matrix ($A^T = A$), eigenvectors corresponding to distinct eigenvalues are orthogonal.

*   **Significance in Machine Learning:**
    *   **Principal Component Analysis (PCA):** Eigenvectors of the covariance matrix of data represent the directions of maximum variance (principal components). Eigenvalues indicate the magnitude of variance along these directions.
    *   **Spectral Methods:** Analyzing the eigenvalues of matrices derived from data (e.g., graph Laplacian) can reveal important structural properties of the data.
    *   **Stability Analysis:** In dynamical systems and control theory (related to ML applications), eigenvalues determine the stability of equilibrium points.
    *   **Diagonalization:** If a matrix $A$ can be diagonalized as $A = PDP^{-1}$, where $D$ is a diagonal matrix of eigenvalues and $P$ is a matrix whose columns are the corresponding eigenvectors, then $A^k = PD^kP^{-1}$. This simplifies computations involving matrix powers.

*   **Example:**
    Let $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.
    1.  **Find Eigenvalues:**
        $\det(A - \lambda I) = \det \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix} = (4-\lambda)(3-\lambda) - (1)(2)$
        $= 12 - 4\lambda - 3\lambda + \lambda^2 - 2$
        $= \lambda^2 - 7\lambda + 10 = 0$
        Factoring gives $(\lambda-5)(\lambda-2) = 0$.
        So, the eigenvalues are $\lambda_1 = 5$ and $\lambda_2 = 2$.

    2.  **Find Eigenvectors:**
        *   For $\lambda_1 = 5$:
            $(A - 5I)v = \begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
            Both rows give $-v_1 + v_2 = 0$, so $v_1 = v_2$.
            An eigenvector is $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ (or any non-zero scalar multiple).

        *   For $\lambda_2 = 2$:
            $(A - 2I)v = \begin{pmatrix} 4-2 & 1 \\ 2 & 3-2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
            Both rows give $2v_1 + v_2 = 0$, so $v_2 = -2v_1$.
            An eigenvector is $v_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$ (or any non-zero scalar multiple).

*   **Important Point to Remember (CO1):** Eigenvalues and eigenvectors are invariant under certain transformations and provide intrinsic properties of a linear operator. Understanding them is key to decomposing complex linear systems into simpler, fundamental modes of action.

---

### 3. Cholesky Decomposition

Cholesky decomposition is a method for factoring a Hermitian, positive-definite matrix into the product of a lower triangular matrix and its conjugate transpose. For real matrices, this simplifies to a lower triangular matrix and its transpose.

*   **Definition:** A real matrix $A$ is **positive-definite** if $x^T A x > 0$ for all non-zero vectors $x$. For symmetric matrices, positive-definiteness implies all eigenvalues are positive.
    A **Cholesky decomposition** of a symmetric, positive-definite matrix $A$ is a decomposition of the form:
    $A = LL^T$
    where $L$ is a lower triangular matrix with positive diagonal entries.

*   **Conditions for Existence:** Cholesky decomposition exists if and only if the matrix $A$ is symmetric and positive-definite.

*   **Algorithm (for $A = LL^T$):**
    Let $A = (a_{ij})$ and $L = (l_{ij})$. Since $L$ is lower triangular, $l_{ij} = 0$ for $j > i$.
    The entries of $L$ can be computed as follows:
    For $i = 1, \dots, n$:
        For $j = 1, \dots, i$:
            If $i = j$:
                $l_{ii} = \sqrt{a_{ii} - \sum_{k=1}^{i-1} l_{ik}^2}$
            If $i > j$:
                $l_{ij} = \frac{1}{l_{jj}} \left( a_{ij} - \sum_{k=1}^{j-1} l_{ik}l_{jk} \right)$

*   **Example:**
    Let $A = \begin{pmatrix} 4 & 12 & -16 \\ 12 & 37 & -43 \\ -16 & -43 & 98 \end{pmatrix}$.
    This matrix is symmetric and positive-definite. We want to find $L = \begin{pmatrix} l_{11} & 0 & 0 \\ l_{21} & l_{22} & 0 \\ l_{31} & l_{32} & l_{33} \end{pmatrix}$ such that $A = LL^T$.

    $LL^T = \begin{pmatrix} l_{11} & 0 & 0 \\ l_{21} & l_{22} & 0 \\ l_{31} & l_{32} & l_{33} \end{pmatrix} \begin{pmatrix} l_{11} & l_{21} & l_{31} \\ 0 & l_{22} & l_{32} \\ 0 & 0 & l_{33} \end{pmatrix} = \begin{pmatrix} l_{11}^2 & l_{11}l_{21} & l_{11}l_{31} \\ l_{21}l_{11} & l_{21}^2 + l_{22}^2 & l_{21}l_{31} + l_{22}l_{32} \\ l_{31}l_{11} & l_{31}l_{21} + l_{32}l_{22} & l_{31}^2 + l_{32}^2 + l_{33}^2 \end{pmatrix}$

    Equating elements of $A$ and $LL^T$:
    1.  $a_{11} = l_{11}^2 \implies 4 = l_{11}^2 \implies l_{11} = 2$ (since $l_{11} > 0$)
    2.  $a_{12} = l_{11}l_{21} \implies 12 = 2 \cdot l_{21} \implies l_{21} = 6$
    3.  $a_{13} = l_{11}l_{31} \implies -16 = 2 \cdot l_{31} \implies l_{31} = -8$
    4.  $a_{22} = l_{21}^2 + l_{22}^2 \implies 37 = 6^2 + l_{22}^2 \implies 37 = 36 + l_{22}^2 \implies l_{22}^2 = 1 \implies l_{22} = 1$
    5.  $a_{23} = l_{21}l_{31} + l_{22}l_{32} \implies -43 = (6)(-8) + (1)l_{32} \implies -43 = -48 + l_{32} \implies l_{32} = 5$
    6.  $a_{33} = l_{31}^2 + l_{32}^2 + l_{33}^2 \implies 98 = (-8)^2 + 5^2 + l_{33}^2 \implies 98 = 64 + 25 + l_{33}^2 \implies 98 = 89 + l_{33}^2 \implies l_{33}^2 = 9 \implies l_{33} = 3$

    So, $L = \begin{pmatrix} 2 & 0 & 0 \\ 6 & 1 & 0 \\ -8 & 5 & 3 \end{pmatrix}$.

*   **Significance in Machine Learning:**
    *   **Solving Linear Systems:** Solving $Ax = b$ can be done by solving $LL^Ty = b$ for $y$ (forward substitution) and then $L^Tx = y$ for $x$ (backward substitution). This is computationally more efficient than other methods for symmetric positive-definite matrices.
    *   **Monte Carlo Methods:** Generating samples from multivariate normal distributions. If $\Sigma$ is the covariance matrix, we can generate samples $z \sim N(0, I)$ and then compute $x = \mu + Lz$, where $\Sigma = LL^T$.
    *   **Optimization:** In optimization algorithms like Newton's method, the Hessian matrix is often positive-definite, making Cholesky decomposition a good choice for solving the linear system at each iteration.
    *   **Gaussian Processes:** The covariance matrix in Gaussian Processes is typically positive-definite, so Cholesky decomposition is used for sampling, conditioning, and inversion.

*   **Reference (Deisenroth et al.):** Chapter 3 of "Mathematics for Machine Learning" discusses matrix decompositions, including Cholesky decomposition, in the context of solving linear systems and its applications. They emphasize its efficiency for positive-definite matrices.

*   **Important Point to Remember (CO1, CO4):** Cholesky decomposition provides an efficient way to solve linear systems when the matrix is symmetric and positive-definite, which is a common scenario in optimization and probabilistic modeling in machine learning.

---

### Practice Questions and Exercises

**Question 1 (Determinant and Trace):**
Given matrix $A = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 \\ 0 & 5 \end{pmatrix}$.
a) Calculate $\det(A)$ and $\operatorname{tr}(A)$.
b) Calculate $\det(B)$ and $\operatorname{tr}(B)$.
c) Calculate $\det(AB)$ and $\operatorname{tr}(AB)$.
d) Verify if $\det(AB) = \det(A)\det(B)$ and $\operatorname{tr}(AB) = \operatorname{tr}(BA)$.

**Question 2 (Eigenvalues and Eigenvectors):**
Find the eigenvalues and corresponding eigenvectors for the matrix $C = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$.

**Question 3 (Cholesky Decomposition):**
Perform the Cholesky decomposition on the symmetric, positive-definite matrix $D = \begin{pmatrix} 25 & 15 \\ 15 & 18 \end{pmatrix}$. Find the lower triangular matrix $L$ such that $D = LL^T$.

**Question 4 (Application of Concepts):**
Consider a dataset with a covariance matrix $\Sigma = \begin{pmatrix} 4 & 2 \\ 2 & 9 \end{pmatrix}$.
a) What does the determinant of $\Sigma$ represent in terms of the spread of the data?
b) What does the trace of $\Sigma$ represent?
c) Find the eigenvalues of $\Sigma$. What do they tell you about the principal directions of variance in the data?

---

### Answers to Practice Questions

**Answer 1:**
Given $A = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 \\ 0 & 5 \end{pmatrix}$.
a) $\det(A) = (3 \times 4) - (1 \times 2) = 12 - 2 = 10$.
   $\operatorname{tr}(A) = 3 + 4 = 7$.
b) $\det(B) = (1 \times 5) - (0 \times 0) = 5$.
   $\operatorname{tr}(B) = 1 + 5 = 6$.
c) $AB = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 5 \end{pmatrix} = \begin{pmatrix} 3 & 5 \\ 2 & 20 \end{pmatrix}$.
   $\det(AB) = (3 \times 20) - (5 \times 2) = 60 - 10 = 50$.
   $\operatorname{tr}(AB) = 3 + 20 = 23$.
d) $\det(A)\det(B) = 10 \times 5 = 50$. This matches $\det(AB)$.
   $BA = \begin{pmatrix} 1 & 0 \\ 0 & 5 \end{pmatrix} \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 10 & 20 \end{pmatrix}$.
   $\operatorname{tr}(BA) = 3 + 20 = 23$. This matches $\operatorname{tr}(AB)$.

**Answer 2:**
For $C = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$:
Characteristic equation: $\det(C - \lambda I) = \det \begin{pmatrix} 2-\lambda & -1 \\ -1 & 2-\lambda \end{pmatrix} = (2-\lambda)^2 - (-1)(-1) = (2-\lambda)^2 - 1 = 0$.
$(2-\lambda)^2 = 1 \implies 2-\lambda = \pm 1$.
$\lambda_1 = 2 - 1 = 1$
$\lambda_2 = 2 + 1 = 3$
Eigenvalues are 1 and 3.

For $\lambda_1 = 1$:
$(C - 1I)v = \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_1 - v_2 = 0 \implies v_1 = v_2$.
Eigenvector $v^{(1)} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

For $\lambda_2 = 3$:
$(C - 3I)v = \begin{pmatrix} -1 & -1 \\ -1 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -v_1 - v_2 = 0 \implies v_2 = -v_1$.
Eigenvector $v^{(2)} = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

**Answer 3:**
For $D = \begin{pmatrix} 25 & 15 \\ 15 & 18 \end{pmatrix}$, find $L = \begin{pmatrix} l_{11} & 0 \\ l_{21} & l_{22} \end{pmatrix}$.
$l_{11}^2 = 25 \implies l_{11} = 5$.
$l_{11}l_{21} = 15 \implies 5 \cdot l_{21} = 15 \implies l_{21} = 3$.
$l_{21}^2 + l_{22}^2 = 18 \implies 3^2 + l_{22}^2 = 18 \implies 9 + l_{22}^2 = 18 \implies l_{22}^2 = 9 \implies l_{22} = 3$.
So, $L = \begin{pmatrix} 5 & 0 \\ 3 & 3 \end{pmatrix}$.

**Answer 4:**
$\Sigma = \begin{pmatrix} 4 & 2 \\ 2 & 9 \end{pmatrix}$.
a) The determinant $\det(\Sigma) = (4 \times 9) - (2 \times 2) = 36 - 4 = 32$. It represents the scaling factor of the area of a unit circle transformed by the covariance matrix. A larger determinant generally indicates a larger spread or volume of data.
b) The trace $\operatorname{tr}(\Sigma) = 4 + 9 = 13$. It represents the sum of the variances of the individual variables.
c) Eigenvalues of $\Sigma$:
   $\det \begin{pmatrix} 4-\lambda & 2 \\ 2 & 9-\lambda \end{pmatrix} = (4-\lambda)(9-\lambda) - 4 = 36 - 4\lambda - 9\lambda + \lambda^2 - 4 = \lambda^2 - 13\lambda + 32 = 0$.
   Using the quadratic formula: $\lambda = \frac{-(-13) \pm \sqrt{(-13)^2 - 4(1)(32)}}{2(1)} = \frac{13 \pm \sqrt{169 - 128}}{2} = \frac{13 \pm \sqrt{41}}{2}$.
   $\lambda_1 = \frac{13 + \sqrt{41}}{2} \approx \frac{13 + 6.4}{2} \approx 9.7$
   $\lambda_2 = \frac{13 - \sqrt{41}}{2} \approx \frac{13 - 6.4}{2} \approx 3.3$
   The larger eigenvalue ($\lambda_1$) indicates the direction of maximum variance, and the corresponding eigenvector (which you could compute) points along that direction. The smaller eigenvalue ($\lambda_2$) indicates the direction of minimum variance.

---

### Highlighting Important Points to Remember

*   **Determinant:** A zero determinant implies a singular matrix (non-invertible), meaning the linear transformation collapses the space. Its absolute value is a volume scaling factor.
*   **Trace:** The sum of diagonal elements. It's also the sum of eigenvalues and useful for its cyclic property ($\operatorname{tr}(AB) = \operatorname{tr}(BA)$).
*   **Eigenvalues/Eigenvectors:** $Av = \lambda v$. Eigenvectors are the directions that are only scaled by the linear transformation $A$, and eigenvalues are the scaling factors. They are crucial for PCA and understanding the "modes" of a transformation.
*   **Cholesky Decomposition:** $A = LL^T$ for symmetric, positive-definite matrices. Extremely useful for efficiently solving linear systems and generating multivariate Gaussian samples. The condition of positive-definiteness is key.

---

### Alignment with Course Outcomes

*   **CO1 (Knowledge Level K3):** This topic directly addresses using concepts like eigenvalues, eigenvectors, and properties of matrices (determinant, trace) to solve computational problems. For example, understanding how eigenvalues relate to data variance (PCA) or how to use Cholesky to solve systems.
*   **CO2 (Knowledge Level K3):** While not directly about multi-variable calculus, the calculations involving determinants (e.g., cofactor expansion) and solving for eigenvalues involve algebraic manipulation of polynomial equations, which is a precursor to more complex calculus operations in ML. The matrix operations themselves are foundational.
*   **CO4 (Knowledge Level K3):** Cholesky decomposition is a core method for unconstrained optimization, particularly in Newton's method where the Hessian matrix is often positive-definite. Understanding this decomposition is vital for efficient gradient descent and other optimization techniques.

---
This concludes the study notes for Determinant and Trace, Eigenvalues and Eigenvectors, and Cholesky Decomposition. These concepts are foundational for many areas in Machine Learning.
