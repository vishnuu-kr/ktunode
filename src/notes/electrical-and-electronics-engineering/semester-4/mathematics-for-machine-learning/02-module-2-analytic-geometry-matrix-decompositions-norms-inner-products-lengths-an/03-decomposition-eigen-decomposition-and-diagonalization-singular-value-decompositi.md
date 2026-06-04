---
title: "Decomposition, Eigen decomposition and Diagonalization, Singular Value Decomposition, Matrix Approximation."
subject: "MATHEMATICS FOR MACHINE LEARNING"
module: "Module 2: ANALYTIC GEOMETRY, MATRIX DECOMPOSITIONS: Norms, Inner Products, Lengths and Distances, Angles and Orthogonality, Orthonormal Basis, Orthogonal Complement, Orthogonal Projections – Projection into One Dimensional Subspaces, Projection onto General Subspaces, Gram"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35eee"
status: "completed"
scrapedAt: "2026-05-23T16:17:19.690Z"
---
This is a comprehensive set of study notes covering Topic Decomposition, Eigen decomposition and Diagonalization, Singular Value Decomposition, and Matrix Approximation within the context of Mathematics for Machine Learning, specifically Module 2.

---

# Module 2: Analytic Geometry, Matrix Decompositions

## Topic: Decomposition, Eigen Decomposition and Diagonalization, Singular Value Decomposition, Matrix Approximation

### Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the fundamental concepts of matrix decomposition and its importance in machine learning.
*   Explain and compute eigenvalues and eigenvectors of matrices.
*   Perform eigen decomposition and diagonalization of matrices.
*   Understand and apply Singular Value Decomposition (SVD).
*   Utilize matrix decomposition techniques for dimensionality reduction and matrix approximation.
*   Relate these concepts to solving computational problems in machine learning (CO1).

---

### Key Concepts and Definitions

This section introduces the foundational concepts for understanding matrix decompositions.

#### 1. Norms, Inner Products, Lengths and Distances, Angles and Orthogonality

While this was covered in earlier parts of Module 2, it's crucial to recall these definitions as they underpin the analysis of vectors and matrices in decompositions.

*   **Inner Product (Dot Product):** For two vectors $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$, the inner product is defined as $\langle \mathbf{x}, \mathbf{y} \rangle = \mathbf{x}^T \mathbf{y} = \sum_{i=1}^n x_i y_i$.
    *   *Properties:* Linearity, symmetry, positive-definiteness.
*   **Length (Euclidean Norm):** The length of a vector $\mathbf{x}$ is $\|\mathbf{x}\| = \sqrt{\langle \mathbf{x}, \mathbf{x} \rangle} = \sqrt{\mathbf{x}^T \mathbf{x}} = \sqrt{\sum_{i=1}^n x_i^2}$.
*   **Distance:** The distance between two vectors $\mathbf{x}$ and $\mathbf{y}$ is the length of their difference: $d(\mathbf{x}, \mathbf{y}) = \|\mathbf{x} - \mathbf{y}\|$.
*   **Angle:** The angle $\theta$ between two non-zero vectors $\mathbf{x}$ and $\mathbf{y}$ is given by $\cos \theta = \frac{\langle \mathbf{x}, \mathbf{y} \rangle}{\|\mathbf{x}\| \|\mathbf{y}\|}$.
*   **Orthogonality:** Two vectors $\mathbf{x}$ and $\mathbf{y}$ are orthogonal if their inner product is zero: $\langle \mathbf{x}, \mathbf{y} \rangle = 0$.
*   **Orthonormal Basis:** A set of vectors $\{\mathbf{u}_1, \dots, \mathbf{u}_k\}$ is orthonormal if they are mutually orthogonal ($\langle \mathbf{u}_i, \mathbf{u}_j \rangle = 0$ for $i \neq j$) and each vector has a norm of 1 ($\|\mathbf{u}_i\| = 1$).

**Reference:** Deisenroth, Faisal, & Ong (D., F., & O.) Chapter 2: Analytic Geometry. Strang (S.) Chapters 1-3.

#### 2. Orthogonal Complement

*   **Definition:** The orthogonal complement of a subspace $W$ of $\mathbb{R}^n$, denoted $W^\perp$, is the set of all vectors in $\mathbb{R}^n$ that are orthogonal to every vector in $W$.
    *   $W^\perp = \{\mathbf{v} \in \mathbb{R}^n \mid \langle \mathbf{v}, \mathbf{w} \rangle = 0 \text{ for all } \mathbf{w} \in W\}$.
*   **Key Property:** For any subspace $W$, $\mathbb{R}^n = W \oplus W^\perp$ (direct sum decomposition). This means any vector $\mathbf{x} \in \mathbb{R}^n$ can be uniquely written as $\mathbf{x} = \mathbf{w} + \mathbf{w}^\perp$, where $\mathbf{w} \in W$ and $\mathbf{w}^\perp \in W^\perp$.

**Reference:** Strang (S.) Chapter 4.

#### 3. Orthogonal Projections

*   **Definition:** The orthogonal projection of a vector $\mathbf{x}$ onto a subspace $W$, denoted $\text{proj}_W(\mathbf{x})$, is the vector in $W$ that is closest to $\mathbf{x}$. It's the component of $\mathbf{x}$ that lies within $W$.
*   **Projection into One-Dimensional Subspaces (Span of a single vector):**
    *   Let $W = \text{span}\{\mathbf{u}\}$, where $\mathbf{u} \neq \mathbf{0}$.
    *   The projection of $\mathbf{x}$ onto $W$ is:
        $$ \text{proj}_W(\mathbf{x}) = \frac{\langle \mathbf{x}, \mathbf{u} \rangle}{\|\mathbf{u}\|^2} \mathbf{u} $$
    *   If $\mathbf{u}$ is a unit vector (i.e., $\|\mathbf{u}\| = 1$), then $\text{proj}_W(\mathbf{x}) = \langle \mathbf{x}, \mathbf{u} \rangle \mathbf{u}$.
    *   The vector $\frac{\langle \mathbf{x}, \mathbf{u} \rangle}{\|\mathbf{u}\|^2}$ is the scalar projection (or component) of $\mathbf{x}$ onto $\mathbf{u}$.

*   **Projection onto General Subspaces:**
    *   Let $W$ be a subspace spanned by a set of **orthogonal** vectors $\{\mathbf{u}_1, \dots, \mathbf{u}_k\}$.
    *   The projection of $\mathbf{x}$ onto $W$ is the sum of the projections onto each basis vector:
        $$ \text{proj}_W(\mathbf{x}) = \sum_{i=1}^k \text{proj}_{\text{span}\{\mathbf{u}_i\}}(\mathbf{x}) = \sum_{i=1}^k \frac{\langle \mathbf{x}, \mathbf{u}_i \rangle}{\|\mathbf{u}_i\|^2} \mathbf{u}_i $$
    *   If $\{\mathbf{u}_1, \dots, \mathbf{u}_k\}$ is an **orthonormal** basis for $W$, then $\|\mathbf{u}_i\|^2 = 1$, so:
        $$ \text{proj}_W(\mathbf{x}) = \sum_{i=1}^k \langle \mathbf{x}, \mathbf{u}_i \rangle \mathbf{u}_i $$
    *   **Projection Matrix:** If $A$ is a matrix whose columns form an orthonormal basis for $W$ (i.e., $A$ is $n \times k$ with $A^T A = I_k$), then the projection matrix onto $W$ is $P = A A^T$.
        *   $\text{proj}_W(\mathbf{x}) = P \mathbf{x} = A A^T \mathbf{x}$.
    *   **If the basis is not orthogonal:** You first need to apply the Gram-Schmidt process to obtain an orthogonal (or orthonormal) basis. If $A$ is an $n \times k$ matrix with linearly independent columns spanning $W$, the projection matrix is $P = A(A^T A)^{-1} A^T$.

**Reference:** Deisenroth, Faisal, & Ong (D., F., & O.) Chapter 2.4. Strang (S.) Chapter 6.

#### 4. Gram-Schmidt Orthogonalization

*   **Purpose:** To convert a set of linearly independent vectors into an orthonormal set that spans the same subspace.
*   **Process:** Given a set of linearly independent vectors $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$:
    1.  $\mathbf{u}_1 = \mathbf{v}_1$
    2.  $\mathbf{u}_2 = \mathbf{v}_2 - \text{proj}_{\text{span}\{\mathbf{u}_1\}}(\mathbf{v}_2) = \mathbf{v}_2 - \frac{\langle \mathbf{v}_2, \mathbf{u}_1 \rangle}{\|\mathbf{u}_1\|^2} \mathbf{u}_1$
    3.  $\mathbf{u}_3 = \mathbf{v}_3 - \text{proj}_{\text{span}\{\mathbf{u}_1\}}(\mathbf{v}_3) - \text{proj}_{\text{span}\{\mathbf{u}_2\}}(\mathbf{v}_3) = \mathbf{v}_3 - \frac{\langle \mathbf{v}_3, \mathbf{u}_1 \rangle}{\|\mathbf{u}_1\|^2} \mathbf{u}_1 - \frac{\langle \mathbf{v}_3, \mathbf{u}_2 \rangle}{\|\mathbf{u}_2\|^2} \mathbf{u}_2$
    ... and so on.
    4.  Finally, normalize each $\mathbf{u}_i$ to get the orthonormal basis: $e_i = \frac{\mathbf{u}_i}{\|\mathbf{u}_i\|}$.

**Reference:** Strang (S.) Chapter 6. Axler (A.) Chapter 3.

---

### Matrix Decompositions

Matrix decompositions are methods for rewriting a matrix as a product of simpler matrices. These decompositions are fundamental in linear algebra and have wide-ranging applications in machine learning, including dimensionality reduction, solving linear systems, and understanding data structure.

#### 1. Eigen Decomposition and Diagonalization

*   **Eigenvalues and Eigenvectors:**
    *   **Definition:** For a square matrix $A \in \mathbb{R}^{n \times n}$, a non-zero vector $\mathbf{v} \in \mathbb{R}^n$ is an **eigenvector** of $A$ if $A\mathbf{v} = \lambda \mathbf{v}$ for some scalar $\lambda$. The scalar $\lambda$ is called the **eigenvalue** corresponding to $\mathbf{v}$.
    *   Geometrically, eigenvectors are vectors that do not change direction when a linear transformation represented by $A$ is applied; they are only scaled by the corresponding eigenvalue.
*   **Finding Eigenvalues:**
    *   The equation $A\mathbf{v} = \lambda \mathbf{v}$ can be rewritten as $A\mathbf{v} - \lambda I \mathbf{v} = \mathbf{0}$, or $(A - \lambda I) \mathbf{v} = \mathbf{0}$.
    *   For a non-zero eigenvector $\mathbf{v}$, the matrix $(A - \lambda I)$ must be singular, meaning its determinant is zero:
        $$ \det(A - \lambda I) = 0 $$
    *   This equation is called the **characteristic equation**, and its roots are the eigenvalues of $A$.
*   **Finding Eigenvectors:**
    *   Once an eigenvalue $\lambda$ is found, substitute it back into $(A - \lambda I) \mathbf{v} = \mathbf{0}$ and solve for the non-zero vector(s) $\mathbf{v}$. These vectors form the **eigenspace** for $\lambda$.
*   **Diagonalization:**
    *   **Definition:** A square matrix $A$ is **diagonalizable** if it can be written in the form $A = P D P^{-1}$, where $D$ is a diagonal matrix and $P$ is an invertible matrix.
    *   The diagonal matrix $D$ contains the eigenvalues of $A$ on its diagonal, and the columns of $P$ are the corresponding eigenvectors of $A$.
    *   **Condition for Diagonalizability:** An $n \times n$ matrix $A$ is diagonalizable if and only if it has $n$ linearly independent eigenvectors.
*   **Eigen Decomposition (Spectral Decomposition):**
    *   If $A$ is diagonalizable, its eigen decomposition is $A = P D P^{-1}$.
    *   If $A$ is **symmetric** ($A = A^T$), then it is always diagonalizable, and its eigenvectors can be chosen to form an **orthonormal** basis. In this case, $P$ is an orthogonal matrix ($P^{-1} = P^T$), leading to a special form of decomposition:
        $$ A = P D P^T $$
        where $D$ is a diagonal matrix of eigenvalues and $P$ is an orthogonal matrix whose columns are the corresponding orthonormal eigenvectors. This is also known as the **spectral decomposition** or **eigendecomposition** for symmetric matrices.

**Example:** Find the eigenvalues and eigenvectors of $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.
1.  **Characteristic Equation:**
    $$ \det(A - \lambda I) = \det \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix} = (4-\lambda)(3-\lambda) - (1)(2) = 12 - 4\lambda - 3\lambda + \lambda^2 - 2 = \lambda^2 - 7\lambda + 10 = 0 $$
2.  **Eigenvalues:** Factoring the quadratic equation: $(\lambda - 2)(\lambda - 5) = 0$. So, $\lambda_1 = 2$ and $\lambda_2 = 5$.
3.  **Eigenvectors:**
    *   For $\lambda_1 = 2$:
        $$ (A - 2I)\mathbf{v} = \begin{pmatrix} 4-2 & 1 \\ 2 & 3-2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$
        This gives $2v_1 + v_2 = 0$. A solution is $\mathbf{v}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.
    *   For $\lambda_2 = 5$:
        $$ (A - 5I)\mathbf{v} = \begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$
        This gives $-v_1 + v_2 = 0$, or $v_1 = v_2$. A solution is $\mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
4.  **Diagonalization:**
    *   $P = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}$, $D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}$.
    *   We can verify $A = P D P^{-1}$.

**Importance in ML:** Eigen decomposition is used in Principal Component Analysis (PCA) for dimensionality reduction, analyzing covariance matrices, and understanding the dominant modes of variation in data. For a symmetric matrix $A$, $A = P D P^T$ is useful because it expresses $A$ as a linear combination of outer products of its eigenvectors, weighted by their eigenvalues.

**Reference:** Deisenroth, Faisal, & Ong (D., F., & O.) Chapter 3.3. Strang (S.) Chapters 5, 7. Axler (A.) Chapters 4, 5.

#### 2. Singular Value Decomposition (SVD)

*   **Definition:** The Singular Value Decomposition (SVD) of any real matrix $A \in \mathbb{R}^{m \times n}$ is a factorization of the form:
    $$ A = U \Sigma V^T $$
    where:
    *   $U$ is an $m \times m$ orthogonal matrix. Its columns are the **left singular vectors** of $A$.
    *   $\Sigma$ is an $m \times n$ diagonal matrix. The diagonal entries $\sigma_1, \sigma_2, \dots, \sigma_k$ (where $k = \min(m, n)$) are the **singular values** of $A$, and they are non-negative and typically ordered in descending order ($\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_k \ge 0$). The remaining entries of $\Sigma$ are zero.
    *   $V$ is an $n \times n$ orthogonal matrix. Its columns are the **right singular vectors** of $A$. $V^T$ is its transpose.

*   **Relationship with Eigen Decomposition:**
    *   The columns of $V$ are the eigenvectors of $A^T A$.
    *   The columns of $U$ are the eigenvectors of $A A^T$.
    *   The non-zero singular values $\sigma_i$ are the square roots of the non-zero eigenvalues of both $A^T A$ and $A A^T$. That is, $\sigma_i = \sqrt{\lambda_i(A^T A)} = \sqrt{\lambda_i(A A^T)}$.

*   **Geometric Interpretation:** SVD decomposes a linear transformation represented by $A$ into three simpler transformations:
    1.  A rotation (or reflection) given by $V^T$.
    2.  A scaling along the axes given by $\Sigma$.
    3.  Another rotation (or reflection) given by $U$.

*   **Rank-Revealing Property:** The number of non-zero singular values of $A$ is equal to the rank of $A$.

*   **Full SVD vs. Reduced SVD:**
    *   **Full SVD:** $U$ is $m \times m$, $\Sigma$ is $m \times n$, $V$ is $n \times n$.
    *   **Reduced SVD:** If $m > n$, we can use a reduced form where $U$ is $m \times n$, $\Sigma$ is $n \times n$ (diagonal), and $V$ is $n \times n$. If $n > m$, we use $U$ as $m \times m$, $\Sigma$ as $m \times m$ (diagonal), and $V$ as $m \times n$. The core information about the transformation is captured in the $\min(m, n)$ singular values and corresponding vectors.

**Example:** Find the SVD of $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$.
1.  **Compute $A^T A$:**
    $$ A^T A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} $$
2.  **Find Eigenvalues and Eigenvectors of $A^T A$:**
    *   $\det(A^T A - \lambda I) = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3) = 0$.
    *   Eigenvalues are $\lambda_1 = 3, \lambda_2 = 1$.
3.  **Singular Values:** $\sigma_1 = \sqrt{3}, \sigma_2 = \sqrt{1} = 1$.
4.  **Find Eigenvectors of $A^T A$ (Columns of $V$):**
    *   For $\lambda_1 = 3$: $(A^T A - 3I)\mathbf{v} = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \mathbf{v} = \mathbf{0} \implies v_1 = v_2$. Let $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$. Normalize: $\mathbf{v}_1' = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
    *   For $\lambda_2 = 1$: $(A^T A - 1I)\mathbf{v} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \mathbf{v} = \mathbf{0} \implies v_1 = -v_2$. Let $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$. Normalize: $\mathbf{v}_2' = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.
    *   So, $V = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ 1/\sqrt{2} & -1/\sqrt{2} \end{pmatrix}$.
5.  **Find Columns of $U$:** The left singular vectors $\mathbf{u}_i$ are related to the right singular vectors $\mathbf{v}_i$ by $A\mathbf{v}_i = \sigma_i \mathbf{u}_i$, so $\mathbf{u}_i = \frac{1}{\sigma_i} A \mathbf{v}_i$.
    *   $\mathbf{u}_1 = \frac{1}{\sqrt{3}} A \mathbf{v}_1' = \frac{1}{\sqrt{3}} \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{6}} \begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix}$.
    *   $\mathbf{u}_2 = \frac{1}{1} A \mathbf{v}_2' = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \frac{1}{\sqrt{2}} \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}$.
    *   Since $A$ is $3 \times 2$, we have $m=3, n=2$. $U$ needs to be $3 \times 3$. We need to find a third vector $\mathbf{u}_3$ that is orthogonal to $\mathbf{u}_1$ and $\mathbf{u}_2$ and has norm 1. The null space of $A^T$ can provide this.
    *   $\det(A^T A - \lambda I)$ has eigenvalues 3 and 1. $A^T A$ is $2 \times 2$.
    *   $A A^T = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$.
    *   Eigenvalues of $A A^T$ are $\lambda_1 = 3, \lambda_2 = 1$. The third eigenvalue must be 0, because the rank of $A$ is 2 (since $\sigma_1, \sigma_2 \neq 0$).
    *   For $\lambda_3 = 0$: $(A A^T - 0I)\mathbf{u} = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix} \mathbf{u} = \mathbf{0}$.
        *   From row 2: $u_1 + u_2 = 0 \implies u_2 = -u_1$.
        *   From row 3: $u_1 + u_3 = 0 \implies u_3 = -u_1$.
        *   So, $\mathbf{u}_3 = \begin{pmatrix} 1 \\ -1 \\ -1 \end{pmatrix}$. Normalize: $\mathbf{u}_3' = \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ -1 \\ -1 \end{pmatrix}$.
    *   So, $U = \begin{pmatrix} 2/\sqrt{6} & 0 & 1/\sqrt{3} \\ 1/\sqrt{6} & -1/\sqrt{2} & -1/\sqrt{3} \\ 1/\sqrt{6} & 1/\sqrt{2} & -1/\sqrt{3} \end{pmatrix}$.
6.  **Construct $\Sigma$:**
    $$ \Sigma = \begin{pmatrix} \sqrt{3} & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} $$
    (Note: $\Sigma$ is $m \times n = 3 \times 2$)

So, $A = U \Sigma V^T = \begin{pmatrix} 2/\sqrt{6} & 0 & 1/\sqrt{3} \\ 1/\sqrt{6} & -1/\sqrt{2} & -1/\sqrt{3} \\ 1/\sqrt{6} & 1/\sqrt{2} & -1/\sqrt{3} \end{pmatrix} \begin{pmatrix} \sqrt{3} & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ 1/\sqrt{2} & -1/\sqrt{2} \end{pmatrix}^T$.

**Importance in ML:** SVD is incredibly versatile. It's used for:
*   **Dimensionality Reduction:** By keeping only the largest $k$ singular values and corresponding vectors, we get a low-rank approximation of the original matrix.
*   **Image Compression:** Representing an image (as a matrix) with fewer singular values.
*   **Recommender Systems:** Latent factor models often use SVD.
*   **Natural Language Processing:** Latent Semantic Analysis (LSA).
*   **Pseudo-inverse:** For solving least-squares problems.

**Reference:** Deisenroth, Faisal, & Ong (D., F., & O.) Chapter 3.4. Strang (S.) Chapter 10. Boyd & Vandenberghe (B. & V.) Chapter 8.

#### 3. Matrix Approximation

*   **Goal:** To find a simpler matrix (often of lower rank) that is "close" to a given matrix $A$. This is crucial for dealing with noisy data, reducing computational complexity, and compressing information.
*   **Best Low-Rank Approximation Theorem (Eckart-Young Theorem):** The best rank-$k$ approximation of a matrix $A$ (in terms of the Frobenius norm, $\|\cdot\|_F$) is obtained by truncating its SVD.
    *   Let $A = U \Sigma V^T$ be the SVD of $A$, where $\Sigma$ has singular values $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0$.
    *   The best rank-$k$ approximation of $A$ (for $k < r$) is $A_k = U_k \Sigma_k V_k^T$, where:
        *   $U_k$ consists of the first $k$ columns of $U$.
        *   $\Sigma_k$ is the top-left $k \times k$ diagonal matrix with $\sigma_1, \dots, \sigma_k$.
        *   $V_k^T$ consists of the first $k$ rows of $V^T$ (or $V_k$ consists of the first $k$ columns of $V$).
    *   This $A_k$ minimizes $\|A - B\|_F$ over all matrices $B$ of rank at most $k$.
    *   The error is $\|A - A_k\|_F = \sqrt{\sum_{i=k+1}^r \sigma_i^2}$.

**Example:** Image Compression using SVD.
Suppose you have a grayscale image represented by a $100 \times 100$ matrix of pixel intensities. Its SVD gives you $A = U \Sigma V^T$.
*   The full SVD requires storing $U$ ($100 \times 100$), $\Sigma$ ($100 \times 100$), and $V$ ($100 \times 100$).
*   If you keep only the first $k=10$ singular values and corresponding vectors, you get $A_{10} = U_{10} \Sigma_{10} V_{10}^T$.
*   To reconstruct $A_{10}$, you need to store $U_{10}$ ($100 \times 10$), $\Sigma_{10}$ ($10 \times 10$), and $V_{10}$ ($100 \times 10$).
*   This is a significant reduction in storage (from $100 \times 100 + 100 \times 100 + 100 \times 100 \approx 30000$ numbers to $100 \times 10 + 10 \times 10 + 100 \times 10 \approx 2100$ numbers). The resulting image will be a slightly blurred but recognizable approximation of the original.

**Importance in ML:** This is the core idea behind dimensionality reduction techniques like PCA. By approximating a high-dimensional data matrix with a lower-rank version, we can reduce noise, improve model efficiency, and visualize data.

**Reference:** Deisenroth, Faisal, & Ong (D., F., & O.) Chapter 3.4. Strang (S.) Chapter 10. Bishop (B.) Chapter 12 (related to PCA).

---

### Linking to Course Outcomes

*   **CO1: Make use of the concepts, rules and results about linear equations, matrix algebra, vector spaces, eigenvalues & eigenvectors and orthogonality & diagonalization to solve computational problems.**
    *   This entire topic directly addresses CO1. Eigen decomposition and SVD are powerful tools for analyzing and manipulating matrices, enabling the solution of many computational problems in ML. For example, understanding the eigenvalues of a covariance matrix is crucial for PCA, which relies on eigenvectors and orthogonal transformations. SVD provides a robust way to handle ill-conditioned systems and perform dimensionality reduction, both of which are computational problems.
*   **CO2: Perform calculus operations on functions of several variables and matrices, including partial derivatives and gradients.**
    *   While not directly about derivatives, the underlying mathematics of finding eigenvalues (characteristic polynomial) involves determinants, which are related to multivariable calculus. The minimization problems solved by PCA and SVD approximations are also rooted in calculus and optimization.
*   **CO4: Train Machine Learning Models using unconstrained and constrained optimization methods.**
    *   The Eckart-Young theorem, which states that SVD provides the best low-rank approximation, is a result from optimization (minimizing the Frobenius norm). Understanding these decomposition techniques is foundational for many optimization algorithms used in ML, such as those for finding principal components or training models like PCA.

---

### Practice Questions and Exercises

**Q1.** Let $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.
    a) Find the eigenvalues and corresponding eigenvectors of $A$.
    b) Show that $A$ is diagonalizable and write its diagonalization $A = P D P^{-1}$.
    c) Since $A$ is symmetric, find its spectral decomposition $A = P D P^T$, where $P$ is orthogonal.

**Q2.** Consider the matrix $B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$.
    a) Find the eigenvalues and eigenvectors of $B$.
    b) Is $B$ diagonalizable? If so, provide its diagonalization.

**Q3.** Given $C = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$.
    a) Compute $C^T C$.
    b) Find the eigenvalues and eigenvectors of $C^T C$. Use these to find the singular values and the columns of $V$ for the SVD of $C$.
    c) Find the columns of $U$ for the SVD of $C$.
    d) Write down the SVD of $C$ as $C = U \Sigma V^T$.

**Q4.** Explain the core idea behind using SVD for dimensionality reduction. How does the Eckart-Young theorem justify this approach?

**Q5.** Let $A$ be a $100 \times 100$ matrix with SVD $A = U \Sigma V^T$. Suppose its singular values are $\sigma_1=10, \sigma_2=8, \sigma_3=6, \dots, \sigma_{100}=0.1$.
    a) If you want to approximate $A$ with a rank-2 matrix, what would be the resulting approximation $A_2$?
    b) What is the Frobenius norm of the error $\|A - A_2\|_F$?

---

### Answers to Practice Questions

**A1.**
    a) **Eigenvalues:**
        $\det(A - \lambda I) = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda-1)(\lambda-3) = 0$.
        $\lambda_1 = 1, \lambda_2 = 3$.
    **Eigenvectors:**
        *   For $\lambda_1 = 1$: $(A - I)\mathbf{v} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \mathbf{v} = \mathbf{0} \implies v_1 + v_2 = 0$. Eigenvector $\mathbf{v}_1 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.
        *   For $\lambda_2 = 3$: $(A - 3I)\mathbf{v} = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \mathbf{v} = \mathbf{0} \implies -v_1 + v_2 = 0$. Eigenvector $\mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
    b) $P = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$. $P$ is invertible. $D = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$. So, $A$ is diagonalizable.
    c) Normalize eigenvectors: $\mathbf{v}_1' = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \end{pmatrix}$, $\mathbf{v}_2' = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
        $P_{ortho} = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix}$. $D = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$.
        $A = P_{ortho} D P_{ortho}^T$.

**A2.**
    a) **Eigenvalues:**
        $\det(B - \lambda I) = (1-\lambda)^2 - 0 = (1-\lambda)^2 = 0$.
        $\lambda_1 = 1$ (with multiplicity 2).
    **Eigenvectors:**
        For $\lambda_1 = 1$: $(B - I)\mathbf{v} = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} \mathbf{v} = \mathbf{0} \implies v_1 = 0$.
        The eigenvectors are of the form $\begin{pmatrix} 0 \\ v_2 \end{pmatrix}$. A basis for the eigenspace is $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$.
    b) $B$ is not diagonalizable because it does not have two linearly independent eigenvectors. The geometric multiplicity of $\lambda=1$ is 1, while its algebraic multiplicity is 2.

**A3.**
    a) $C^T C = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix}$.
    b) **Eigenvalues of $C^T C$:**
        $\det(C^T C - \lambda I) = (5-\lambda)^2 - 16 = \lambda^2 - 10\lambda + 9 = (\lambda-1)(\lambda-9) = 0$.
        $\lambda_1 = 9, \lambda_2 = 1$.
        **Singular values:** $\sigma_1 = \sqrt{9} = 3, \sigma_2 = \sqrt{1} = 1$.
        **Eigenvectors of $C^T C$ (columns of $V$):**
        *   For $\lambda_1 = 9$: $(C^T C - 9I)\mathbf{v} = \begin{pmatrix} -4 & 4 \\ 4 & -4 \end{pmatrix} \mathbf{v} = \mathbf{0} \implies -v_1 + v_2 = 0$. Eigenvector $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$. Normalize: $\mathbf{v}_1' = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
        *   For $\lambda_2 = 1$: $(C^T C - I)\mathbf{v} = \begin{pmatrix} 4 & 4 \\ 4 & 4 \end{pmatrix} \mathbf{v} = \mathbf{0} \implies v_1 + v_2 = 0$. Eigenvector $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$. Normalize: $\mathbf{v}_2' = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \end{pmatrix}$.
        $V = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ 1/\sqrt{2} & -1/\sqrt{2} \end{pmatrix}$.
    c) **Columns of $U$:** $\mathbf{u}_i = \frac{1}{\sigma_i} C \mathbf{v}_i'$.
        *   $\mathbf{u}_1 = \frac{1}{3} \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \frac{1}{3\sqrt{2}} \begin{pmatrix} 3 \\ 3 \end{pmatrix} = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
        *   $\mathbf{u}_2 = \frac{1}{1} \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \frac{1}{\sqrt{2}} \begin{pmatrix} -1 \\ 1 \end{pmatrix}$.
        Since $C$ is $2 \times 2$, $U$ is also $2 \times 2$. We have found the two columns.
        $U = \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix}$.
    d) $\Sigma = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$.
        $C = \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{pmatrix} \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ 1/\sqrt{2} & -1/\sqrt{2} \end{pmatrix}^T$.

**A4.** The core idea is to represent a matrix $A$ as a sum of outer products of its singular vectors, weighted by its singular values: $A = \sum_{i=1}^r \sigma_i \mathbf{u}_i \mathbf{v}_i^T$. To reduce dimensionality (or approximate), we truncate this sum by keeping only the $k$ largest singular values and their corresponding vectors: $A_k = \sum_{i=1}^k \sigma_i \mathbf{u}_i \mathbf{v}_i^T$. This $A_k$ is the "best" rank-$k$ approximation in the Frobenius norm, meaning it's the closest matrix of rank $k$ to the original $A$. This process effectively captures the most important patterns or variance in the data while discarding less significant information, which can be seen as noise or less important features.

**A5.**
    a) The rank-2 approximation $A_2$ is given by $A_2 = U_2 \Sigma_2 V_2^T$. This means taking the first two columns of $U$, the top-left $2 \times 2$ diagonal matrix of singular values, and the first two columns of $V$ (or first two rows of $V^T$).
       $A_2 = \begin{pmatrix} \mathbf{u}_1 & \mathbf{u}_2 \end{pmatrix} \begin{pmatrix} 10 & 0 \\ 0 & 8 \end{pmatrix} \begin{pmatrix} \mathbf{v}_1^T \\ \mathbf{v}_2^T \end{pmatrix} = 10 \mathbf{u}_1 \mathbf{v}_1^T + 8 \mathbf{u}_2 \mathbf{v}_2^T$.
    b) The Frobenius norm of the error is $\|A - A_2\|_F = \sqrt{\sum_{i=k+1}^r \sigma_i^2}$.
       In this case, $k=2$, and the remaining singular values are $\sigma_3, \dots, \sigma_{100}$.
       $\|A - A_2\|_F = \sqrt{\sigma_3^2 + \sigma_4^2 + \dots + \sigma_{100}^2} = \sqrt{6^2 + \dots + 0.1^2}$.

---

### Important Points to Remember

*   **Eigen decomposition** is for square matrices and decomposes them into eigenvalues and eigenvectors ($A = P D P^{-1}$). For symmetric matrices, it's $A = P D P^T$ with orthogonal $P$.
*   **SVD** is for any real matrix ($A = U \Sigma V^T$). Singular values are always non-negative.
*   Singular values are the square roots of eigenvalues of $A^T A$ (and $A A^T$).
*   The columns of $V$ in SVD are eigenvectors of $A^T A$. The columns of $U$ are eigenvectors of $A A^T$.
*   **SVD is fundamental for matrix approximation and dimensionality reduction** due to the Eckart-Young theorem, which guarantees the best low-rank approximation in the Frobenius norm.
*   Truncating the SVD is a powerful technique for compressing data, reducing noise, and simplifying models in machine learning.
*   The rank of a matrix is equal to the number of its non-zero singular values.

---
