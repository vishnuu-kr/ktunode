---
title: "Singular Value Decomposition (SVD)"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 2: Mathematical Foundations of AI and Data science : Role of linear algebra in Data representation and analysis"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d8d"
status: "completed"
scrapedAt: "2026-05-20T17:49:47.634Z"
---
# Module 2: Mathematical Foundations of AI and Data Science: Role of Linear Algebra in Data Representation and Analysis

## Topic: Singular Value Decomposition (SVD)

---

### 1. Introduction to Singular Value Decomposition (SVD)

**Definition:** Singular Value Decomposition (SVD) is a fundamental factorization of a real or complex matrix. It decomposes any matrix $A$ into three other matrices: $A = U \Sigma V^T$ (or $A = U \Sigma V^*$ for complex matrices), where:

*   **$U$**: An orthogonal matrix whose columns are the left singular vectors of $A$.
*   **$\Sigma$ (Sigma)**: A diagonal matrix containing the singular values of $A$ on its diagonal, arranged in descending order. The off-diagonal elements are zero.
*   **$V^T$ (or $V^*$)**: The transpose (or conjugate transpose) of an orthogonal matrix $V$, whose columns are the right singular vectors of $A$.

**Key Concept:** SVD provides a way to break down a complex matrix into simpler, geometrically interpretable components. It reveals the "essence" of the data by identifying the most significant directions and magnitudes of variation.

**Relevance to Data Representation and Analysis:**
*   **Dimensionality Reduction:** SVD is the mathematical backbone of Principal Component Analysis (PCA), a widely used technique for reducing the dimensionality of data while preserving as much variance as possible.
*   **Data Compression:** By keeping only the most significant singular values and corresponding vectors, we can approximate the original matrix with a lower-rank matrix, leading to data compression.
*   **Noise Reduction:** Smaller singular values are often associated with noise in the data. By discarding them, we can effectively denoise the data.
*   **Understanding Data Structure:** SVD helps uncover the underlying linear relationships and structure within the data.

**Textbook References:**
*   **Gilbert Strang's "Introduction to Linear Algebra"**: Chapters 6 and 7 extensively discuss matrix decompositions, including SVD, and its geometric interpretations.
*   **Deisenroth, Faisal, & Ong's "Mathematics for Machine Learning"**: Chapter 11 provides a thorough treatment of SVD and its applications in machine learning, particularly in dimensionality reduction.
*   **Aurélien Géron's "Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow"**: Mentions SVD in the context of PCA and dimensionality reduction in Chapter 8.

---

### 2. Mathematical Properties and Derivation of SVD

**Properties of $U$, $\Sigma$, and $V$:**

*   **$U$ is orthogonal:** $U^T U = UU^T = I$ (identity matrix). Its columns are orthonormal.
*   **$V$ is orthogonal:** $V^T V = VV^T = I$. Its columns are orthonormal.
*   **$\Sigma$ is diagonal:** $\Sigma_{ii} = \sigma_i \ge 0$ for $i=1, \dots, r$, where $r$ is the rank of $A$. $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0$. The $\sigma_i$ are the singular values.

**Relationship to Eigenvalue Decomposition:**

SVD is closely related to the eigenvalue decomposition of the matrices $A^T A$ and $AA^T$.

*   **$A^T A = (U \Sigma V^T)^T (U \Sigma V^T) = (V \Sigma^T U^T)(U \Sigma V^T) = V (\Sigma^T \Sigma) V^T$**:
    This is an eigendecomposition of $A^T A$. The columns of $V$ are the eigenvectors of $A^T A$, and the diagonal entries of $\Sigma^T \Sigma$ (which are $\sigma_i^2$) are the eigenvalues of $A^T A$.

*   **$AA^T = (U \Sigma V^T)(U \Sigma V^T)^T = (U \Sigma V^T)(V \Sigma^T U^T) = U (\Sigma \Sigma^T) U^T$**:
    This is an eigendecomposition of $AA^T$. The columns of $U$ are the eigenvectors of $AA^T$, and the diagonal entries of $\Sigma \Sigma^T$ (which are also $\sigma_i^2$) are the eigenvalues of $AA^T$.

**Calculating SVD:**

1.  **Find $V$ and $\sigma_i^2$**: Compute $A^T A$. Find its eigenvalues ($\lambda_i$) and corresponding orthonormal eigenvectors ($v_i$). The singular values are $\sigma_i = \sqrt{\lambda_i}$. The columns of $V$ are the normalized eigenvectors $v_i$.
2.  **Find $U$**: For each non-zero singular value $\sigma_i$, compute the corresponding left singular vector $u_i$ using the relation $u_i = \frac{1}{\sigma_i} A v_i$. Ensure these vectors are orthonormal. If the rank of $A$ is less than its dimensions, you might need to find additional orthonormal vectors for $U$ that are orthogonal to the previously found $u_i$.

**Example:**
Let $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.

1.  $A^T A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$
2.  Eigenvalues of $A^T A$: Solve $\det(A^T A - \lambda I) = 0$.
    $\det \begin{pmatrix} 1-\lambda & 1 \\ 1 & 2-\lambda \end{pmatrix} = (1-\lambda)(2-\lambda) - 1 = 2 - 3\lambda + \lambda^2 - 1 = \lambda^2 - 3\lambda + 1 = 0$.
    Using the quadratic formula: $\lambda = \frac{3 \pm \sqrt{9-4}}{2} = \frac{3 \pm \sqrt{5}}{2}$.
    So, $\sigma_1^2 = \frac{3 + \sqrt{5}}{2}$ and $\sigma_2^2 = \frac{3 - \sqrt{5}}{2}$.
    Singular values: $\sigma_1 = \sqrt{\frac{3 + \sqrt{5}}{2}}$, $\sigma_2 = \sqrt{\frac{3 - \sqrt{5}}{2}}$.

3.  Eigenvectors of $A^T A$:
    For $\lambda_1 = \frac{3 + \sqrt{5}}{2}$: $(A^T A - \lambda_1 I)v = 0 \Rightarrow \begin{pmatrix} 1 - \frac{3 + \sqrt{5}}{2} & 1 \\ 1 & 2 - \frac{3 + \sqrt{5}}{2} \end{pmatrix} v = \begin{pmatrix} \frac{-1 - \sqrt{5}}{2} & 1 \\ 1 & \frac{1 - \sqrt{5}}{2} \end{pmatrix} v = 0$.
    A common eigenvector direction is $v_1 = \begin{pmatrix} 1 \\ \frac{1 + \sqrt{5}}{2} \end{pmatrix}$. Normalize to get $V$'s first column.
    For $\lambda_2 = \frac{3 - \sqrt{5}}{2}$: Similar calculation yields $v_2 = \begin{pmatrix} 1 \\ \frac{1 - \sqrt{5}}{2} \end{pmatrix}$. Normalize to get $V$'s second column.

4.  Calculate $U$:
    $u_1 = \frac{1}{\sigma_1} A v_1 = \frac{1}{\sigma_1} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ \frac{1 + \sqrt{5}}{2} \end{pmatrix} = \frac{1}{\sigma_1} \begin{pmatrix} 1 + \frac{1 + \sqrt{5}}{2} \\ \frac{1 + \sqrt{5}}{2} \end{pmatrix} = \frac{1}{\sigma_1} \begin{pmatrix} \frac{3 + \sqrt{5}}{2} \\ \frac{1 + \sqrt{5}}{2} \end{pmatrix}$.
    Notice that $\frac{3 + \sqrt{5}}{2} = \sigma_1^2$ and $\frac{1 + \sqrt{5}}{2} = \sigma_1^2 / \sigma_1 = \sigma_1$ is not correct. Actually, the relation $Av_i = \sigma_i u_i$ implies $u_i = \frac{1}{\sigma_i} Av_i$.
    Let's recheck the eigenvector calculation. For $\lambda_1 = \frac{3 + \sqrt{5}}{2}$, the equation for eigenvectors $v = \begin{pmatrix} x \\ y \end{pmatrix}$ is $(\frac{-1 - \sqrt{5}}{2}) x + y = 0 \Rightarrow y = (\frac{1 + \sqrt{5}}{2}) x$. So $v_1 = \begin{pmatrix} 1 \\ \frac{1 + \sqrt{5}}{2} \end{pmatrix}$.
    $u_1 = \frac{1}{\sigma_1} A v_1 = \frac{1}{\sigma_1} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ \frac{1 + \sqrt{5}}{2} \end{pmatrix} = \frac{1}{\sigma_1} \begin{pmatrix} 1 + \frac{1 + \sqrt{5}}{2} \\ \frac{1 + \sqrt{5}}{2} \end{pmatrix} = \frac{1}{\sigma_1} \begin{pmatrix} \frac{3 + \sqrt{5}}{2} \\ \frac{1 + \sqrt{5}}{2} \end{pmatrix}$.
    Since $\sigma_1^2 = \frac{3 + \sqrt{5}}{2}$, we have $\sigma_1 = \sqrt{\frac{3 + \sqrt{5}}{2}}$.
    $u_1 = \frac{1}{\sigma_1} \begin{pmatrix} \sigma_1^2 \\ \sigma_1^2 / \sigma_1 \end{pmatrix} = \frac{1}{\sigma_1} \begin{pmatrix} \sigma_1^2 \\ \frac{1+\sqrt{5}}{2} \end{pmatrix}$.
    The second component is $\frac{1+\sqrt{5}}{2}$.
    This example demonstrates that the calculation is involved. Libraries like NumPy or SciPy perform this efficiently.

**Important Point to Remember:** The calculation of SVD involves finding eigenvalues and eigenvectors, which can be computationally intensive for large matrices. Numerical stability is also a concern.

---

### 3. Applications of SVD in Data Science and AI

SVD is a versatile tool with numerous applications:

**a) Dimensionality Reduction (PCA)**

*   **How it works:** SVD is used to find the principal components of a dataset. The columns of $V$ are the principal directions (eigenvectors of $A^T A$ when $A$ is centered data), and the singular values $\sigma_i$ are related to the variance along these directions. By keeping the top $k$ singular values and their corresponding singular vectors, we can project the data onto a lower-dimensional subspace.
*   **Outcome:** Reduces the number of features, making models faster to train, easier to visualize, and potentially less prone to overfitting.
*   **Course Outcome Alignment:** CO2 (Apply advanced mathematical concepts such as singular values, and principal component analysis), CO3 (Analyze and interpret data), CO4 (Integrate statistical approaches and machine learning techniques).
*   **Textbook Reference:** Deisenroth, Faisal, & Ong's "Mathematics for Machine Learning" (Chapter 11), Géron's "Hands-on machine learning..." (Chapter 8).

**b) Data Compression and Approximation**

*   **How it works:** Given $A = U \Sigma V^T$, we can approximate $A$ by using only the top $k$ singular values and vectors: $A_k = U_k \Sigma_k V_k^T$, where $U_k$ contains the first $k$ columns of $U$, $\Sigma_k$ is the top-left $k \times k$ submatrix of $\Sigma$, and $V_k^T$ contains the first $k$ rows of $V^T$.
*   **Outcome:** Creates a lower-rank approximation of the original data, which is smaller in size and captures the most important information.
*   **Example:** Compressing an image by representing it with a reduced number of singular values.
*   **Course Outcome Alignment:** CO2 (Apply advanced mathematical concepts such as singular values), CO3 (Analyze and interpret data).
*   **Textbook Reference:** Strang's "Introduction to Linear Algebra" (Chapter 7), Foundations of Data Science (Chapter 9 on low-rank approximation).

**c) Noise Reduction (Denoising)**

*   **How it works:** Small singular values often correspond to noise in the data. By setting small singular values in $\Sigma$ to zero (or replacing them with zero) before reconstructing the matrix ($A_k$), we can effectively remove noise.
*   **Example:** Cleaning up noisy audio signals or images.
*   **Course Outcome Alignment:** CO3 (Analyze and interpret data), CO4 (Integrate statistical approaches and machine learning techniques).
*   **Textbook Reference:** Foundations of Data Science (Chapter 9 on low-rank approximation).

**d) Recommender Systems (e.g., Collaborative Filtering)**

*   **How it works:** User-item interaction matrices can be sparse (many missing values). SVD can be used to fill in these missing values by finding latent factors that explain user preferences and item characteristics. This is often done with truncated SVD or techniques like matrix factorization.
*   **Example:** Netflix prize problem, suggesting movies based on user ratings.
*   **Course Outcome Alignment:** CO1 (Apply the concept of machine learning algorithms), CO4 (Integrate statistical approaches and machine learning techniques).
*   **Textbook Reference:** Géron's "Hands-on machine learning..." (Chapter 9 on recommendation systems), Data Science: Concepts and Practice (Chapter 13 on recommendation systems).

**e) Latent Semantic Analysis (LSA) for Text Mining**

*   **How it works:** SVD is applied to a term-document matrix to discover underlying topics or concepts in a corpus of text. The resulting decomposition can reveal semantic relationships between words and documents.
*   **Example:** Finding thematic clusters in a collection of news articles.
*   **Course Outcome Alignment:** CO1 (Apply the concept of machine learning algorithms), CO3 (Analyze and interpret data).
*   **Textbook Reference:** Cielen et al.'s "Introducing data science..." (Chapter 7 on text mining).

**f) Solving Linear Least Squares Problems**

*   **How it works:** SVD can be used to find the minimum-norm solution to a system of linear equations $Ax = b$, especially when $A$ is not full rank or is ill-conditioned.
*   **Course Outcome Alignment:** CO2 (Apply advanced mathematical concepts such as matrix operations), CO4 (Integrate statistical approaches and machine learning techniques).
*   **Textbook Reference:** Strang's "Introduction to Linear Algebra" (Chapter 6).

---

### 4. SVD and Dimensionality Reduction (In-depth)

**The Process of Using SVD for Dimensionality Reduction:**

1.  **Data Matrix Creation:** Represent your data as a matrix $A$, where rows are samples (e.g., users, documents, images) and columns are features (e.g., movie ratings, words, pixel values).
2.  **Centering the Data (Optional but common):** Subtract the mean of each feature from all values in that feature column. This is a crucial step for PCA.
3.  **Compute SVD:** Decompose the (centered) data matrix $A$ into $A = U \Sigma V^T$.
4.  **Select Top $k$ Singular Values and Vectors:** Choose the $k$ largest singular values $\sigma_1, \dots, \sigma_k$ and their corresponding left singular vectors $u_1, \dots, u_k$ and right singular vectors $v_1, \dots, v_k$.
5.  **Project Data:** The new, lower-dimensional representation of the data can be obtained by projecting the original data onto the subspace spanned by the top $k$ right singular vectors:
    $A_{\text{reduced}} = A V_k = (U \Sigma V^T) V_k = U \Sigma V^T V_k$.
    Since $V$ is orthogonal, $V^T V_k$ results in a matrix where the first $k$ columns of the identity matrix are selected.
    Alternatively, and more commonly with PCA, the reduced data is $A_{\text{reduced}} = U \Sigma_k$.
    Let's clarify this common confusion. If $A$ is $m \times n$:
    *   $U$ is $m \times m$
    *   $\Sigma$ is $m \times n$
    *   $V^T$ is $n \times n$
    If we want to reduce to $k$ dimensions, we take the top $k$ singular values and vectors.
    $U_k$ will be $m \times k$, $\Sigma_k$ will be $k \times k$, and $V_k^T$ will be $k \times n$.
    The reduced data matrix $A_{\text{reduced}}$ which has $m$ samples and $k$ features is obtained by:
    $A_{\text{reduced}} = A V_k = (U \Sigma V^T) V_k$.
    This isn't directly $U \Sigma_k$. $U \Sigma_k$ would have dimensions $m \times k$.
    Let's reconsider. $A = U \Sigma V^T$.
    $A V_k = U \Sigma V^T V_k = U (\Sigma V_k^T V_k) = U \Sigma_k'$ (where $\Sigma_k'$ is $m \times k$ with the top k singular values on diagonal).
    The resulting matrix $A V_k$ has dimensions $m \times k$. The columns of $A V_k$ are linear combinations of the original features, weighted by the right singular vectors.

    **Common convention for PCA:**
    If $X$ is the $m \times n$ data matrix (samples x features), centered.
    $X = U \Sigma V^T$.
    $V$ is $n \times n$. $V_k$ is $n \times k$.
    The transformed data $X_{k}$ (samples x k) is $X_k = X V_k$.
    Since $X V_k = (U \Sigma V^T) V_k = U (\Sigma V_k^T V_k)$.
    If $V_k$ are the first $k$ columns of $V$, then $V^T V_k$ effectively selects the first $k$ columns of $V^T$ and applies them.
    Let's use the relationship from eigenvalues:
    $A^T A = V \Lambda V^T$. If $A = U \Sigma V^T$, then $A^T A = V \Sigma^T \Sigma V^T$.
    So, $\Lambda = \Sigma^T \Sigma$ (a diagonal matrix of $\sigma_i^2$).
    The eigenvectors of $A^T A$ are the columns of $V$. These are the principal components (directions of max variance).
    The projection of the data $A$ onto the $k$ principal components is $A V_k$. This matrix has dimensions $m \times k$. The columns are the new principal components.

    **Example:**
    Let $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}$.
    Suppose after SVD and selecting top $k=1$ singular value and vector, we have:
    $U_1$ (3x1), $\sigma_1$ (scalar), $V_1^T$ (1x2).
    $A_{\text{reduced}} = A V_1 = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix} \begin{pmatrix} v_{11} \\ v_{12} \end{pmatrix}$ (where $V_1 = \begin{pmatrix} v_{11} \\ v_{12} \end{pmatrix}$).
    The result is a $3 \times 1$ vector, representing the data in a single dimension.

**Course Outcome Alignment:** CO2 (Apply advanced mathematical concepts such as singular values, and principal component analysis), CO3 (Analyze and interpret data).

---

### 5. Practical Considerations and Limitations

*   **Computational Cost:** For very large matrices, computing the full SVD can be computationally expensive. Techniques like Truncated SVD or randomized SVD are often used to speed this up.
*   **Sparsity:** For sparse matrices (e.g., recommender systems), standard SVD can be inefficient. Specialized algorithms are preferred.
*   **Data Scaling:** The magnitude of features can significantly impact SVD results, especially for dimensionality reduction. Feature scaling (e.g., standardization) is often necessary.
*   **Interpretability:** While SVD reveals underlying structure, interpreting the meaning of the singular vectors and values, especially in high-dimensional data, can be challenging.

**Textbook References:**
*   Géron's "Hands-on machine learning..." (Chapter 8 discusses scaling for PCA).
*   Deisenroth, Faisal, & Ong's "Mathematics for Machine Learning" (Mentions approximations for large matrices).

---

### 6. Practice Questions and Answers

**Question 1:**
What are the dimensions of the matrices $U$, $\Sigma$, and $V^T$ in the SVD of a matrix $A$ of size $m \times n$?

**Answer 1:**
If $A$ is an $m \times n$ matrix, then:
*   $U$ is an $m \times m$ orthogonal matrix.
*   $\Sigma$ is an $m \times n$ diagonal matrix.
*   $V^T$ is an $n \times n$ orthogonal matrix (so $V$ is $n \times n$).

---

**Question 2:**
Explain how SVD can be used for data compression.

**Answer 2:**
Data compression using SVD involves approximating the original matrix $A$ with a lower-rank matrix $A_k = U_k \Sigma_k V_k^T$. Here, we retain only the top $k$ largest singular values and their corresponding singular vectors. This approximation $A_k$ is a good representation of the original data $A$ but requires less storage space as it only uses $k$ components instead of the full rank components.

---

**Question 3:**
If the singular values of a matrix $A$ are $\sigma_1 = 5$, $\sigma_2 = 2$, and $\sigma_3 = 0.1$, and you want to reduce the dimensionality of the data represented by $A$ to capture most of the variance, which singular values would you keep? Explain why.

**Answer 3:**
You would keep $\sigma_1 = 5$ and $\sigma_2 = 2$. Singular values represent the magnitude of variance captured by each corresponding singular vector. Larger singular values indicate more significant directions of variation in the data. By keeping the largest singular values, you retain the most informative components and discard the less significant ones, which often correspond to noise or less important variations. Discarding $\sigma_3 = 0.1$ would mean you are less concerned with the variance along its corresponding direction.

---

**Question 4:**
Suppose you have a data matrix $X$ of size $100 \times 50$ (100 samples, 50 features). After performing SVD, you obtain $X = U \Sigma V^T$. You decide to reduce the dimensionality to $k=10$. What are the dimensions of $U_k$, $\Sigma_k$, and $V_k^T$ that you would use for this reduction?

**Answer 4:**
If $X$ is $100 \times 50$:
*   $U$ is $100 \times 100$
*   $\Sigma$ is $100 \times 50$
*   $V^T$ is $50 \times 50$

To reduce to $k=10$ dimensions:
*   $U_k$ will be the first 10 columns of $U$, so its dimensions are $100 \times 10$.
*   $\Sigma_k$ will be the top-left $10 \times 10$ submatrix of $\Sigma$, so its dimensions are $10 \times 10$.
*   $V_k^T$ will be the first 10 rows of $V^T$, so its dimensions are $10 \times 50$.

The reduced data matrix will have dimensions $100 \times 10$. This is obtained by $X V_k$, where $V_k$ is $50 \times 10$. Or by $U_k \Sigma_k$. Let's verify.
$U_k$ ($100 \times 10$) * $\Sigma_k$ ($10 \times 10$) = $100 \times 10$. This is correct for the transformed data.

---

### 7. Key Takeaways and Summary

*   **SVD Decomposes Matrices:** $A = U \Sigma V^T$ breaks down any matrix into orthogonal matrices and a diagonal matrix of singular values.
*   **Singular Values:** $\sigma_i$ indicate the importance or variance along corresponding singular vectors. They are always non-negative and usually ordered from largest to smallest.
*   **Dimensionality Reduction:** By keeping the top $k$ singular values and vectors, SVD is the core of PCA, allowing us to represent data in a lower-dimensional space while preserving maximum variance.
*   **Applications:** SVD is vital for data compression, noise reduction, recommender systems, and text analysis.
*   **Computational Efficiency:** For large datasets, consider approximate SVD methods.

---
This concludes the notes on Singular Value Decomposition (SVD) for Module 2. Ensure you review the connections to PCA and practice implementing SVD in your chosen programming language (e.g., Python with NumPy/SciPy) to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
