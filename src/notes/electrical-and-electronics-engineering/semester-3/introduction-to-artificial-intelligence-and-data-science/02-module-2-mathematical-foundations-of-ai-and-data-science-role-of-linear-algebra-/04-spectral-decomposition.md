---
title: "Spectral decomposition"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 2: Mathematical Foundations of AI and Data science : Role of linear algebra in Data representation and analysis"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b96"
status: "completed"
scrapedAt: "2026-05-23T16:14:05.611Z"
---
# Module 2: Mathematical Foundations of AI and Data Science

## Topic: Spectral Decomposition

### 1. Introduction to Spectral Decomposition

Spectral decomposition, also known as **eigen-decomposition** or **eigendecomposition**, is a fundamental concept in linear algebra that allows us to break down a matrix into a set of fundamental components related to its eigenvalues and eigenvectors. This process is crucial in various AI and Data Science applications, particularly in understanding the underlying structure of data and performing dimensionality reduction.

**Key Concepts:**

*   **Eigenvalues ($\lambda$)**: Scalars that represent how much an eigenvector is stretched or shrunk by a linear transformation (represented by a matrix).
*   **Eigenvectors ($\mathbf{v}$)**: Non-zero vectors that, when a linear transformation is applied, only change by a scalar factor. This scalar factor is the corresponding eigenvalue. The direction of the eigenvector remains unchanged.

Mathematically, the relationship is expressed as:

$$
A\mathbf{v} = \lambda\mathbf{v}
$$

Where:
*   $A$ is a square matrix.
*   $\mathbf{v}$ is a non-zero eigenvector of $A$.
*   $\lambda$ is the eigenvalue corresponding to eigenvector $\mathbf{v}$.

**Relevance to Data Representation and Analysis:**

*   **Data Representation:** Matrices are a common way to represent datasets. Spectral decomposition helps in understanding the inherent properties and variances within this data.
*   **Data Analysis:** By decomposing a matrix, we can identify the most important directions (eigenvectors) in which the data varies the most (corresponding to largest eigenvalues). This is the foundation for techniques like Principal Component Analysis (PCA).

**Textbook References:**

*   **Gilbert Strang's "Introduction to Linear Algebra":** Chapter 7 focuses extensively on eigenvalues and eigenvectors, providing a thorough theoretical grounding for spectral decomposition.
*   **Deisenroth, Faisal, & Ong's "Mathematics for Machine Learning":** Chapter 8, "Eigen-decomposition," directly addresses this topic and its applications in machine learning.

---

### 2. The Spectral Decomposition Theorem

The spectral decomposition theorem states that a symmetric real matrix $A$ can be decomposed into the product of three matrices:

$$
A = Q \Lambda Q^T
$$

Where:

*   $A$ is an $n \times n$ real symmetric matrix.
*   $Q$ is an $n \times n$ orthogonal matrix whose columns are the orthonormal eigenvectors of $A$.
    *   **Orthogonal Matrix:** A square matrix $Q$ where $Q^T Q = Q Q^T = I$ (the identity matrix). This means its columns (and rows) are orthonormal vectors.
*   $\Lambda$ (Lambda) is an $n \times n$ diagonal matrix. The diagonal entries of $\Lambda$ are the eigenvalues of $A$, ordered in some way (often descending).

**Derivation/Explanation:**

1.  **Eigenvalue Equation:** For each eigenvalue $\lambda_i$ and its corresponding eigenvector $\mathbf{v}_i$, we have $A\mathbf{v}_i = \lambda_i\mathbf{v}_i$.
2.  **Matrix Form:** If we arrange the eigenvectors as columns of a matrix $V = [\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n]$ and the eigenvalues as a diagonal matrix $\Lambda = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$, then the collection of eigenvalue equations can be written as:
    $$
    AV = V\Lambda
    $$
3.  **Orthogonal Eigenvectors (for Symmetric Matrices):** A key property of real symmetric matrices is that their eigenvectors corresponding to distinct eigenvalues are orthogonal. We can further normalize these eigenvectors to form an orthonormal basis. This allows us to form the orthogonal matrix $Q$ by setting its columns to these orthonormal eigenvectors.
4.  **Inverting $V$:** If $V$ is formed from orthonormal eigenvectors (i.e., $Q$), then $Q^T = Q^{-1}$.
5.  **Rearranging:** Multiplying $AV = V\Lambda$ by $V^{-1}$ on the right gives $A = V\Lambda V^{-1}$. If $V$ is orthogonal ($Q$), then $A = Q\Lambda Q^T$.

**Example:**

Consider the symmetric matrix:
$$
A = \begin{pmatrix} 4 & 2 \\ 2 & 1 \end{pmatrix}
$$

1.  **Find Eigenvalues:**
    *   The characteristic equation is $\det(A - \lambda I) = 0$.
    *   $\begin{vmatrix} 4-\lambda & 2 \\ 2 & 1-\lambda \end{vmatrix} = (4-\lambda)(1-\lambda) - 2 \cdot 2 = 4 - 4\lambda - \lambda + \lambda^2 - 4 = \lambda^2 - 5\lambda = \lambda(\lambda - 5) = 0$.
    *   Eigenvalues are $\lambda_1 = 5$ and $\lambda_2 = 0$.

2.  **Find Eigenvectors:**
    *   For $\lambda_1 = 5$: $(A - 5I)\mathbf{v}_1 = \mathbf{0}$
        $$
        \begin{pmatrix} -1 & 2 \\ 2 & -4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -x + 2y = 0 \implies x = 2y
        $$
        Let $y=1$, then $\mathbf{v}_1 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$. Normalize: $\|\mathbf{v}_1\| = \sqrt{2^2 + 1^2} = \sqrt{5}$.
        Unit eigenvector $\mathbf{q}_1 = \frac{1}{\sqrt{5}}\begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

    *   For $\lambda_2 = 0$: $(A - 0I)\mathbf{v}_2 = \mathbf{0}$
        $$
        \begin{pmatrix} 4 & 2 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies 2x + y = 0 \implies y = -2x
        $$
        Let $x=1$, then $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$. Normalize: $\|\mathbf{v}_2\| = \sqrt{1^2 + (-2)^2} = \sqrt{5}$.
        Unit eigenvector $\mathbf{q}_2 = \frac{1}{\sqrt{5}}\begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

3.  **Construct Matrices:**
    *   $Q = [\mathbf{q}_1, \mathbf{q}_2] = \frac{1}{\sqrt{5}}\begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix}$
    *   $\Lambda = \begin{pmatrix} 5 & 0 \\ 0 & 0 \end{pmatrix}$

4.  **Verify Decomposition:**
    $$
    Q\Lambda Q^T = \frac{1}{\sqrt{5}}\begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 5 & 0 \\ 0 & 0 \end{pmatrix} \frac{1}{\sqrt{5}}\begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix}^T
    $$
    $$
    = \frac{1}{5}\begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 5 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix}
    $$
    $$
    = \frac{1}{5}\begin{pmatrix} 10 & 0 \\ 5 & 0 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix}
    $$
    $$
    = \frac{1}{5}\begin{pmatrix} 20 & 10 \\ 10 & 5 \end{pmatrix} = \begin{pmatrix} 4 & 2 \\ 2 & 1 \end{pmatrix} = A
    $$

**Important Point to Remember:**

*   The spectral decomposition $A = Q\Lambda Q^T$ is only directly applicable to **real symmetric matrices**. For non-symmetric matrices, we can still perform eigenvalue decomposition $A = V\Lambda V^{-1}$, but $V$ might not be orthogonal, and eigenvalues/vectors can be complex.

---

### 3. Applications of Spectral Decomposition in AI and Data Science

Spectral decomposition is a cornerstone for many powerful techniques:

#### 3.1. Principal Component Analysis (PCA)

**Concept:** PCA is a dimensionality reduction technique that uses spectral decomposition (specifically, the eigendecomposition of the covariance matrix) to find a new set of uncorrelated variables called **principal components**. These components are ordered such that the first component captures the largest variance in the data, the second captures the next largest, and so on.

**How Spectral Decomposition is Used:**

1.  **Covariance Matrix:** For a dataset $X$ (where each row is an observation and each column is a feature), we first compute its covariance matrix $C$.
2.  **Eigendecomposition of Covariance Matrix:** We perform spectral decomposition on $C$:
    $$
    C = Q \Lambda Q^T
    $$
3.  **Eigenvectors as Principal Components:** The eigenvectors of $C$ (columns of $Q$) represent the directions of maximum variance in the data. These are the principal component directions.
4.  **Eigenvalues as Variance:** The eigenvalues in $\Lambda$ represent the variance of the data along the corresponding principal component directions. Larger eigenvalues indicate directions with higher variance.
5.  **Dimensionality Reduction:** By selecting the top $k$ eigenvectors corresponding to the largest $k$ eigenvalues, we can project the original data onto a lower-dimensional subspace, effectively reducing dimensions while retaining most of the data's variance.

**Textbook References:**

*   **Aurélien Géron's "Hands-on Machine Learning":** Chapter 8 discusses PCA and its implementation, often relying on its spectral decomposition properties.
*   **Deisenroth, Faisal, & Ong's "Mathematics for Machine Learning":** Chapter 10, "Principal Component Analysis," details the use of eigendecomposition.
*   **Gupta & Kapoor's "Fundamentals of Mathematical Statistics":** While not solely focused on ML, the concepts of eigenvalues, eigenvectors, and covariance matrices are foundational in statistical analysis, including its application to PCA.

**Example:**

Imagine a dataset of customer ages and incomes. The covariance matrix might reveal that the primary source of variation is not age or income independently, but a combination of both (e.g., older customers tend to have higher incomes). The first principal component would capture this combined variation. If we only need to represent customers based on their overall "wealth" or "socioeconomic status," we could use just the first principal component.

**Course Outcome Alignment:** CO2 (Apply advanced mathematical concepts such as matrix operations, singular values, and principal component analysis to analyze and solve engineering problems), CO3 (Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions).

#### 3.2. Understanding Matrix Properties

*   **Positive Semidefinite (PSD) Matrices:** A symmetric matrix $A$ is positive semidefinite if all its eigenvalues are non-negative ($\lambda_i \ge 0$). This property is crucial in optimization and machine learning algorithms (e.g., Support Vector Machines, Gaussian Processes). Spectral decomposition allows us to easily check for PSD by examining the eigenvalues.
    *   **Example:** The Gram matrix in SVMs is always PSD.

*   **Matrix Rank:** The rank of a matrix is the number of its linearly independent columns (or rows). For a symmetric matrix, the rank is equal to the number of non-zero eigenvalues.

*   **Matrix Inverse:** If a symmetric matrix $A$ has a spectral decomposition $A = Q\Lambda Q^T$, its inverse is $A^{-1} = (Q\Lambda Q^T)^{-1} = (Q^T)^{-1} \Lambda^{-1} Q^{-1}$. Since $Q$ is orthogonal, $Q^{-1} = Q^T$. Thus, $A^{-1} = Q \Lambda^{-1} Q^T$. This is easier to compute than using Gaussian elimination if $\Lambda$ is diagonal (which is usually the case, and $\Lambda^{-1}$ is just the reciprocal of the diagonal elements, assuming no zero eigenvalues).

**Textbook References:**

*   **Gilbert Strang's "Introduction to Linear Algebra":** Chapter 7 discusses these properties in relation to eigenvalues and eigenvectors.

**Course Outcome Alignment:** CO2.

#### 3.3. Solving Systems of Linear Equations (related to matrix properties)

While not a direct application of spectral decomposition itself, understanding eigenvalues helps in analyzing the solvability and behavior of systems of linear equations. For example, if the matrix $A$ in $A\mathbf{x} = \mathbf{b}$ has a zero eigenvalue, it means $A$ is singular, and the system might not have a unique solution.

---

### 4. Singular Value Decomposition (SVD) - A Generalization

**Concept:** Singular Value Decomposition (SVD) is a more general matrix factorization technique that applies to *any* $m \times n$ real matrix $A$, not just square symmetric ones. It's closely related to spectral decomposition.

**SVD Formula:**

$$
A = U \Sigma V^T
$$

Where:

*   $A$ is an $m \times n$ matrix.
*   $U$ is an $m \times m$ orthogonal matrix. Its columns are the **left singular vectors** of $A$.
*   $\Sigma$ (Sigma) is an $m \times n$ diagonal matrix. Its diagonal entries are the **singular values** of $A$ ($\sigma_1, \sigma_2, \dots, \sigma_r$), where $r$ is the rank of $A$. Singular values are non-negative and typically ordered in descending magnitude ($\sigma_1 \ge \sigma_2 \ge \dots \ge 0$).
*   $V$ is an $n \times n$ orthogonal matrix. Its columns are the **right singular vectors** of $A$. $V^T$ is its transpose.

**Relationship to Spectral Decomposition:**

If $A$ is a symmetric positive semidefinite matrix, then:

*   The singular values of $A$ are its eigenvalues: $\sigma_i = \lambda_i$.
*   The left singular vectors of $A$ are its eigenvectors.
*   The right singular vectors of $A$ are also its eigenvectors.
    So, for a symmetric PSD matrix, $A = Q\Lambda Q^T$ is a special case of SVD where $U=Q$, $\Sigma$ contains the eigenvalues on the diagonal, and $V=Q$.

**How to obtain SVD from Spectral Decomposition (and vice versa):**

*   **From Spectral Decomposition to SVD:** If $A$ is symmetric, $A = Q\Lambda Q^T$. If $\Lambda$ is diagonal with non-negative entries (i.e., $A$ is symmetric PSD), then the singular values are $|\lambda_i|$, the left singular vectors are the eigenvectors, and the right singular vectors are also the eigenvectors.
*   **From SVD to Spectral Decomposition:** For a symmetric matrix $A$:
    *   $A^2 = (U\Sigma V^T)(U\Sigma V^T)$. If $A$ is symmetric, $U=V$. So $A^2 = U\Sigma\Sigma^T U^T$.
    *   The eigenvalues of $A^2$ are $\sigma_i^2$. The eigenvectors of $A^2$ are the same as the eigenvectors of $A$.
    *   If $\lambda_i$ are the eigenvalues of $A$ and $\sigma_i$ are the singular values of $A$, then $\sigma_i = |\lambda_i|$.
    *   If $A$ is positive semidefinite, $\sigma_i = \lambda_i$.

**Applications of SVD in AI/Data Science:**

*   **Dimensionality Reduction (like PCA):** SVD can be used to perform PCA. The right singular vectors ($V$) give the principal component directions, and the singular values ($\Sigma$) relate to the variance.
*   **Recommender Systems:** Used in collaborative filtering to find latent factors in user-item interaction matrices.
*   **Natural Language Processing (NLP):** Latent Semantic Analysis (LSA) uses SVD to reduce the dimensionality of term-document matrices, uncovering semantic relationships.
*   **Image Compression:** SVD can be used to approximate an image matrix with a lower-rank matrix, reducing storage space.
*   **Noise Reduction:** By removing small singular values and their corresponding vectors, noise can be reduced.

**Textbook References:**

*   **Deisenroth, Faisal, & Ong's "Mathematics for Machine Learning":** Chapter 9, "Singular Value Decomposition," provides a thorough treatment.
*   **Aurélien Géron's "Hands-on Machine Learning":** Chapter 14 touches upon SVD in the context of recommender systems.
*   **Cielen, Meysman, & K. (2016) "Introducing data science":** Provides practical examples of SVD in data science contexts.

**Course Outcome Alignment:** CO2 (Apply advanced mathematical concepts such as matrix operations, singular values, and principal component analysis to analyze and solve engineering problems).

---

### 5. Properties and Interpretations of Eigenvalues and Eigenvectors

*   **Eigenvalues ($\lambda$):**
    *   **Magnitude:** The absolute value of an eigenvalue indicates the scaling factor of the corresponding eigenvector under the transformation.
    *   **Sign:** A positive eigenvalue means the eigenvector is stretched in its original direction. A negative eigenvalue means it's stretched and flipped.
    *   **Zero Eigenvalue:** Indicates that the transformation collapses the corresponding eigenvector to the zero vector. This implies the matrix is singular and its determinant is zero.

*   **Eigenvectors ($\mathbf{v}$):**
    *   **Direction:** Eigenvectors represent the "invariant directions" of the linear transformation defined by the matrix. They show the directions in which the transformation acts purely as a scaling.
    *   **Basis:** A set of linearly independent eigenvectors can form a basis for the vector space. This allows us to represent any vector as a linear combination of eigenvectors. This is the core idea behind spectral decomposition: representing the matrix (and its action) in terms of these fundamental directions.

**Textbook References:**

*   **Gilbert Strang's "Introduction to Linear Algebra":** Chapters 6 and 7 are rich with interpretations of eigenvalues and eigenvectors in geometric and algebraic contexts.

**Course Outcome Alignment:** CO2.

---

### 6. Examples and Practice Questions

**Question 1 (Concept Check):**
What are the defining properties of an eigenvector and its corresponding eigenvalue?

**Answer:** An eigenvector is a non-zero vector that, when a linear transformation (represented by a matrix $A$) is applied, only changes by a scalar factor. This scalar factor is the eigenvalue. Mathematically, $A\mathbf{v} = \lambda\mathbf{v}$.

**Question 2 (Application - PCA Intuition):**
Suppose a dataset has two features, and the covariance matrix is computed. After spectral decomposition of the covariance matrix, you find two eigenvalues: $\lambda_1 = 15.0$ and $\lambda_2 = 0.5$. Which eigenvalue corresponds to the direction of greatest variance in the data, and why?

**Answer:** $\lambda_1 = 15.0$ corresponds to the direction of greatest variance. Eigenvalues of the covariance matrix represent the variance of the data along the directions given by the corresponding eigenvectors. A larger eigenvalue signifies more variance.

**Question 3 (Spectral Decomposition Calculation):**
Find the spectral decomposition of the symmetric matrix $A = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$.

**Solution:**

1.  **Find Eigenvalues:**
    $\det(A - \lambda I) = \begin{vmatrix} 2-\lambda & -1 \\ -1 & 2-\lambda \end{vmatrix} = (2-\lambda)^2 - (-1)^2 = (2-\lambda)^2 - 1 = 0$
    $(2-\lambda)^2 = 1 \implies 2-\lambda = \pm 1$
    $\lambda_1 = 2 - 1 = 1$
    $\lambda_2 = 2 + 1 = 3$

2.  **Find Eigenvectors:**
    *   For $\lambda_1 = 1$: $(A - 1I)\mathbf{v}_1 = \mathbf{0}$
        $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies x - y = 0 \implies x = y$.
        Let $y=1$, $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$. Normalize: $\|\mathbf{v}_1\| = \sqrt{1^2+1^2} = \sqrt{2}$.
        $\mathbf{q}_1 = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

    *   For $\lambda_2 = 3$: $(A - 3I)\mathbf{v}_2 = \mathbf{0}$
        $\begin{pmatrix} -1 & -1 \\ -1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -x - y = 0 \implies y = -x$.
        Let $x=1$, $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$. Normalize: $\|\mathbf{v}_2\| = \sqrt{1^2+(-1)^2} = \sqrt{2}$.
        $\mathbf{q}_2 = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

3.  **Construct Decomposition:**
    $Q = [\mathbf{q}_1, \mathbf{q}_2] = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
    $\Lambda = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$ (ordered eigenvalues)

    The spectral decomposition is $A = Q\Lambda Q^T$.

**Question 4 (SVD Relation):**
If $A$ is a symmetric matrix with eigenvalues $\lambda_1 = -2$ and $\lambda_2 = 4$. What are the singular values of $A$?

**Answer:** The singular values are the absolute values of the eigenvalues. So, the singular values are $\sigma_1 = |-2| = 2$ and $\sigma_2 = |4| = 4$.

**Question 5 (Problem Solving - Rank):**
Using spectral decomposition, what is the rank of the matrix $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$?

**Answer:** The matrix $A$ is already diagonal. Its eigenvalues are $\lambda_1 = 1$ and $\lambda_2 = 0$. The rank of a matrix is the number of non-zero eigenvalues. Therefore, the rank of $A$ is 1.

---

### 7. Important Points to Remember

*   **Symmetric Matrices are Key:** Spectral decomposition in the form $A = Q\Lambda Q^T$ is primarily for real symmetric matrices.
*   **Eigenvalues Measure Scaling/Variance:** They tell us how much an eigenvector direction is stretched or shrunk.
*   **Eigenvectors Define Invariant Directions:** They represent the fundamental directions of transformation.
*   **PCA Relies on Eigendecomposition of Covariance:** Finding directions of maximum variance.
*   **SVD is a Generalization:** Applies to any matrix, relating singular values to eigenvalues of $A^TA$.
*   **Orthogonal Matrices are Special:** $Q^T = Q^{-1}$ simplifies decomposition and inversion.
*   **Ordering Matters:** Eigenvalues and eigenvectors are paired. Ordering eigenvalues (e.g., descending) is crucial for applications like PCA.

---

### 8. Connection to Course Outcomes

*   **CO1:** While this module focuses on mathematical foundations, understanding these underpin many ML algorithms (like neural networks) where transformations are key. Eigenvalues relate to stability and learning rates in some contexts.
*   **CO2:** This is the most direct link. Spectral decomposition is an application of matrix operations, and it is the core of PCA. Understanding singular values is also explicitly mentioned.
*   **CO3:** Eigenvalues of a covariance matrix directly relate to the variance of data, a key statistical concept used in analysis and understanding correlations.
*   **CO4:** By enabling techniques like PCA, spectral decomposition allows us to create more efficient and practically feasible models by reducing data dimensionality and identifying key features, thereby integrating statistical and machine learning approaches.

---
This concludes the study notes for Spectral Decomposition. Remember to consult the recommended textbooks for deeper insights and further examples.
