---
title: "dimensionality reduction techniques-PCA, SVD"
subject: "MACHINE LEARNING"
module: "Module 1: Review: supervised, unsupervised machine learning techniques"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe61a"
status: "completed"
scrapedAt: "2026-05-23T17:50:07.217Z"
---
# Machine Learning: Module 1 Review - Dimensionality Reduction Techniques (PCA, SVD)

## Introduction to Dimensionality Reduction

Dimensionality reduction is a crucial preprocessing step in Machine Learning that aims to reduce the number of features (variables or attributes) in a dataset while preserving as much relevant information as possible. This process is vital for several reasons:

*   **Combating the Curse of Dimensionality:** High-dimensional datasets can lead to increased computational cost, overfitting, and difficulty in visualization.
*   **Improving Model Performance:** Reducing noise and redundancy can improve the accuracy and generalization ability of ML models.
*   **Faster Training and Inference:** Fewer features mean less data to process, leading to faster training and prediction times.
*   **Easier Data Visualization:** Humans can effectively visualize data in 2 or 3 dimensions, making dimensionality reduction useful for exploratory data analysis.

This module will focus on two widely used dimensionality reduction techniques: Principal Component Analysis (PCA) and Singular Value Decomposition (SVD).

---

## 1. Principal Component Analysis (PCA)

**Key Concepts and Definitions:**

*   **Goal:** To find a new set of uncorrelated variables, called **Principal Components (PCs)**, which are linear combinations of the original features. These PCs capture the maximum variance in the data.
*   **Variance:** A measure of how spread out a set of numbers is. In PCA, we aim to capture the directions of maximum variance in the data.
*   **Eigenvectors and Eigenvalues:** PCA relies on the **eigen-decomposition** of the **covariance matrix** of the data.
    *   **Covariance Matrix:** A square matrix that shows the covariance between pairs of variables in a dataset. It indicates how much two variables change together.
    *   **Eigenvectors:** The directions (vectors) in which the data varies the most. In PCA, eigenvectors of the covariance matrix represent the principal components.
    *   **Eigenvalues:** The magnitude of the variance along the corresponding eigenvectors. A larger eigenvalue signifies that the corresponding principal component captures more variance.
*   **Orthogonality:** Principal components are orthogonal (uncorrelated) to each other.
*   **Ordering:** PCs are ordered by the amount of variance they explain, with the first PC explaining the most variance, the second PC explaining the second most variance (and being orthogonal to the first), and so on.

**How PCA Works (The Process):**

1.  **Standardize the Data:** Center the data by subtracting the mean of each feature and scale it by dividing by the standard deviation of each feature. This ensures that all features contribute equally to the analysis, regardless of their original scale.
    *   *Referencing Geron (Chapter 8):* Geron emphasizes the importance of scaling features before applying PCA, as PCA is sensitive to the scale of the data.
2.  **Compute the Covariance Matrix:** Calculate the covariance matrix of the standardized data.
3.  **Compute Eigenvectors and Eigenvalues:** Perform eigen-decomposition of the covariance matrix to obtain its eigenvectors and eigenvalues.
4.  **Sort Eigenvectors by Eigenvalues:** Sort the eigenvectors in descending order based on their corresponding eigenvalues. The eigenvector with the largest eigenvalue is the first principal component, the one with the second largest is the second PC, and so on.
5.  **Choose the Number of Components (k):** Decide how many principal components to keep. This can be done by:
    *   **Explained Variance Ratio:** The proportion of variance explained by each principal component. We can choose a threshold (e.g., 95% of total variance) and keep components that sum up to this threshold.
    *   **Scree Plot:** A plot of eigenvalues against the component number. We look for an "elbow" in the plot, where the rate of decrease in eigenvalues slows down significantly.
    *   **Manual Selection:** Based on domain knowledge or desired dimensionality.
6.  **Form the Projection Matrix (W):** Create a matrix `W` where the columns are the selected `k` eigenvectors (sorted by eigenvalues).
7.  **Transform the Data:** Project the original standardized data onto the new subspace defined by the selected principal components by multiplying the standardized data matrix with `W`.

**Mathematical Formulation (Simplified):**

Let $X$ be the $n \times d$ data matrix (n samples, d features).
1.  Standardize $X$ to get $X_{std}$ (mean 0, variance 1 for each feature).
2.  Covariance Matrix: $C = \frac{1}{n-1} X_{std}^T X_{std}$ (assuming centered data $X_{std}$).
3.  Eigen-decomposition: $C = V \Lambda V^T$, where $V$ is the matrix of eigenvectors and $\Lambda$ is the diagonal matrix of eigenvalues.
4.  Select top $k$ eigenvectors to form $W$ ($d \times k$ matrix).
5.  Transformed Data: $X_{reduced} = X_{std} W$ ($n \times k$ matrix).

**Examples:**

*   **Image Compression:** Reducing the dimensions of image data by keeping only the most significant principal components. This can significantly reduce storage space with minimal loss of visual quality.
*   **Gene Expression Analysis:** Identifying key patterns in high-dimensional gene expression data.
*   **Feature Extraction:** Creating new, uncorrelated features for use in supervised learning models.

**Geron (Chapter 8) - PCA Implementation:**

Geron demonstrates PCA using `scikit-learn`.
```python
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import numpy as np

# Assume X is your data matrix (n_samples, n_features)
# Standardize the data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Initialize PCA, e.g., to reduce to 2 components
pca = PCA(n_components=2)

# Fit PCA on scaled data and transform
X_reduced = pca.fit_transform(X_scaled)

# Explained variance ratio
print(f"Explained variance ratio: {pca.explained_variance_ratio_}")
print(f"Total explained variance: {np.sum(pca.explained_variance_ratio_)}")
```

**Important Points to Remember:**

*   PCA is an **unsupervised** learning technique.
*   It assumes **linear** relationships between features.
*   It is sensitive to the **scale** of features; standardization is crucial.
*   The order of features matters if you don't standardize.
*   PCA creates **new, uncorrelated features** that are linear combinations of the original ones.
*   The principal components are ordered by the amount of variance they explain.

---

## 2. Singular Value Decomposition (SVD)

**Key Concepts and Definitions:**

*   **Goal:** To decompose any matrix into three other matrices. While not exclusively a dimensionality reduction technique, its application in dimensionality reduction is powerful.
*   **Matrix Factorization:** SVD decomposes an $m \times n$ matrix $A$ into three matrices:
    *   **U:** An $m \times m$ orthogonal matrix (left singular vectors).
    *   **Σ (Sigma):** An $m \times n$ diagonal matrix containing **singular values** ($\sigma_i$) on its diagonal, sorted in descending order. Off-diagonal elements are zero.
    *   **Vᵀ (V transpose):** An $n \times n$ orthogonal matrix (right singular vectors).
*   **Decomposition:** $A = U \Sigma V^T$
*   **Singular Values:** The square roots of the eigenvalues of $A^T A$ (or $AA^T$). They represent the "strength" or importance of the corresponding singular vectors.
*   **Orthogonal Matrices:** Matrices whose columns (and rows) are orthonormal vectors. $U^T U = I$ and $V^T V = I$.

**How SVD Works for Dimensionality Reduction:**

1.  **Apply SVD to the Data Matrix:** Perform SVD on the original data matrix $A$ (where rows are samples and columns are features).
    *   *Referencing Bishop (Chapter 8):* Bishop discusses SVD as a fundamental tool in linear algebra with applications in noise reduction and dimensionality reduction.
2.  **Truncate the Matrices:** Keep the top $k$ singular values and their corresponding singular vectors from $U$, $\Sigma$, and $V$.
    *   Keep the first $k$ columns of $U$ (forming $U_k$, $m \times k$).
    *   Keep the top-left $k \times k$ submatrix of $\Sigma$ (forming $\Sigma_k$, $k \times k$ diagonal matrix with top $k$ singular values).
    *   Keep the first $k$ rows of $V^T$ (forming $V_k^T$, $k \times n$).
3.  **Reconstruct an Approximated Matrix:** Reconstruct an approximated data matrix $A_k$ using the truncated matrices:
    $A_k = U_k \Sigma_k V_k^T$
    This reconstructed matrix $A_k$ is the best rank-$k$ approximation of the original matrix $A$ in terms of the Frobenius norm.
4.  **Dimensionality Reduction Interpretation:**
    *   The columns of $V$ (right singular vectors) are essentially the **principal components** when the data is centered.
    *   The singular values are related to the variances captured by these components.
    *   By keeping the top $k$ singular values and vectors, we are effectively projecting the data onto a $k$-dimensional subspace that captures the most variance.
    *   The reduced dimension representation can be seen as $A_k$ itself, or more commonly, by projecting the original data onto the principal components derived from $V$.

**Connection to PCA:**

SVD is closely related to PCA. If you center the data matrix $A$ to $A_{centered}$, then:
*   The eigenvalues of $A_{centered}^T A_{centered}$ are the squares of the singular values of $A_{centered}$ (scaled appropriately).
*   The eigenvectors of $A_{centered}^T A_{centered}$ are the columns of $V$ (right singular vectors) of $A_{centered}$.

Therefore, PCA can be implemented using SVD. This is often preferred in practice because SVD is numerically more stable than computing the covariance matrix directly, especially for high-dimensional data.

**Examples:**

*   **Recommender Systems (Collaborative Filtering):** SVD is widely used to decompose user-item interaction matrices, identifying latent factors that explain user preferences and recommending items.
*   **Natural Language Processing (NLP):** Latent Semantic Analysis (LSA) uses SVD on term-document matrices to uncover underlying semantic relationships between words and documents.
*   **Noise Reduction:** By removing smaller singular values, SVD can help filter out noise from data.

**Theobald (, Second edition) & Ekman (2022) - SVD:**

While these books might not delve into the deep mathematical proofs of SVD, they will likely highlight its applications in pattern recognition and dimensionality reduction, especially in the context of feature extraction and noise reduction. Ekman's book, focusing on Deep Learning, might touch upon SVD in the context of matrix factorization techniques used in neural networks.

**Müller & Guido (2017) - SVD:**

Müller and Guido's "Introduction to Machine Learning with Python" is a practical guide. They would likely show how to use SVD for dimensionality reduction using libraries like `scikit-learn`, potentially in scenarios like LSA for text data.

**Numpy SVD Implementation:**
```python
import numpy as np

# Assume A is your data matrix (n_samples, n_features)
# For dimensionality reduction, it's common to center the data first
# (Similar to PCA preprocessing)
mean_A = np.mean(A, axis=0)
A_centered = A - mean_A

# Perform SVD
U, s, Vh = np.linalg.svd(A_centered) # s is a 1D array of singular values, Vh is V transpose

# Vh contains the right singular vectors as rows. The columns of V are the principal components.
# To get the reduced dimension representation, we can select k singular values and vectors.

# Example: Reduce to k dimensions
k = 10 # number of components to keep

# Truncate U, s, and Vh
U_k = U[:, :k]
s_k = np.diag(s[:k]) # create a diagonal matrix from the top k singular values
Vh_k = Vh[:k, :]

# Reconstruct the approximated matrix
A_k = U_k @ s_k @ Vh_k # Matrix multiplication

# To get the reduced dimension representation of the original data:
# Project centered data onto the top k principal components (columns of V)
# V_k = Vh.T[:, :k] # Get the first k columns of V
# X_reduced = A_centered @ V_k
```

**Important Points to Remember:**

*   SVD is a general matrix factorization technique applicable to any matrix.
*   When applied to a **centered** data matrix, the right singular vectors (columns of $V$) correspond to the principal components.
*   The singular values indicate the importance of each component.
*   Truncating SVD provides the best low-rank approximation of the original matrix.
*   SVD is numerically stable and often preferred for PCA implementation.
*   SVD has broad applications beyond dimensionality reduction, such as in recommender systems and NLP.

---

## Linking to Course Outcomes

*   **CO1: Analyze and apply supervised and unsupervised machine learning techniques to solve various data-driven problems. (Knowledge Level: K4)**
    *   This module directly addresses the **unsupervised** aspect of CO1. Understanding PCA and SVD allows students to apply these techniques to reduce data complexity and improve performance in subsequent supervised learning tasks. Analyzing which technique is more suitable for a given problem (e.g., numerical stability for SVD) is key here.

*   **CO2: Develop, train, and optimize regression and classification models (Knowledge Level: K3)**
    *   Dimensionality reduction (PCA/SVD) is a crucial preprocessing step for developing robust regression and classification models. By reducing features, models can train faster, generalize better, and avoid overfitting, thus optimizing their performance.

*   **CO3: Design and execute clustering techniques, and assess their effectiveness using various proximity measures. (Knowledge Level: K3)**
    *   Clustering often suffers from the curse of dimensionality. Applying PCA or SVD before clustering can improve the accuracy and efficiency of clustering algorithms by providing a more informative and less noisy feature space.

*   **CO4: Apply unsupervised learning techniques and understand reinforcement learning for complex problem-solving. (Knowledge Level: K3)**
    *   PCA and SVD are fundamental unsupervised learning techniques. This module equips students with the knowledge to apply them for feature extraction, noise reduction, and exploratory data analysis, which are essential for tackling complex problems where the underlying structure of the data might be hidden in high dimensions.

---

## Practice Questions and Answers

**Question 1:**
What is the primary goal of dimensionality reduction?
A) To increase the number of features in a dataset.
B) To reduce the number of features while preserving important information.
C) To make datasets more complex and harder to analyze.
D) To add new, uncorrelated features to a dataset.

**Answer:**
B) To reduce the number of features while preserving important information.

---

**Question 2:**
Which of the following statements about PCA is INCORRECT?
A) Principal Components are linear combinations of original features.
B) Principal Components are always uncorrelated.
C) PCA is sensitive to the scale of the features, so standardization is usually recommended.
D) PCA aims to minimize the variance captured by the principal components.

**Answer:**
D) PCA aims to minimize the variance captured by the principal components.
*Explanation: PCA aims to **maximize** the variance captured by the principal components.*

---

**Question 3:**
If you have a dataset with 100 features and you decide to reduce it to 10 principal components using PCA, what is the dimensionality of the transformed dataset?
A) 1000
B) 100
C) 10
D) 1

**Answer:**
C) 10
*Explanation: You are explicitly reducing the dimensionality to 10 features (principal components).*

---

**Question 4:**
SVD decomposes a matrix A into $U$, $\Sigma$, and $V^T$. What does the matrix $\Sigma$ represent?
A) A matrix of left singular vectors.
B) A matrix of right singular vectors.
C) A diagonal matrix containing singular values.
D) The transposed original matrix.

**Answer:**
C) A diagonal matrix containing singular values.

---

**Question 5:**
Why is SVD often preferred over direct eigen-decomposition of the covariance matrix for PCA, especially with large datasets?
A) SVD is computationally less expensive.
B) SVD is more numerically stable and can handle singular or near-singular matrices better.
C) SVD does not require centering the data.
D) SVD directly provides interpretable features.

**Answer:**
B) SVD is more numerically stable and can handle singular or near-singular matrices better.
*Explanation: While SVD can be computationally intensive for very large matrices, its numerical stability is a key advantage over calculating the covariance matrix and then its eigen-decomposition.*

---

**Question 6 (Conceptual):**
Imagine you are working with a dataset of customer purchasing behavior, where each customer is a row and each product is a column. The values represent the number of times a customer bought a product. You notice that many customers have similar purchasing patterns. How could PCA or SVD help you analyze this data more effectively for marketing segmentation?

**Answer:**
PCA or SVD could be used to reduce the high dimensionality of the product space (many columns). By identifying the principal components (or singular vectors), you can capture the underlying latent factors driving purchasing behavior. For example, one component might represent "electronics enthusiasts," another "health-conscious buyers," etc. These reduced dimensions can then be used for clustering customers into segments with similar preferences, making targeted marketing campaigns more effective. PCA provides these components directly, while SVD can be used to approximate the original interaction matrix with a lower-rank version, revealing similar latent patterns.

---

## Important Takeaways for the Module:

*   **Dimensionality Reduction is Key:** It combats the curse of dimensionality, improves model efficiency, and aids in visualization.
*   **PCA: Maximize Variance:** Finds new, uncorrelated features (Principal Components) that capture the most variance in the data. Requires standardization.
*   **SVD: Matrix Factorization:** Decomposes any matrix into $U$, $\Sigma$, and $V^T$. Singular values indicate importance.
*   **SVD and PCA Connection:** SVD is a numerically stable way to perform PCA. The right singular vectors of a centered data matrix correspond to principal components.
*   **Truncation is Essential:** For dimensionality reduction, we truncate SVD by keeping only the top $k$ singular values and corresponding vectors.
*   **Application Context:** Understand when and why to apply these techniques (e.g., feature extraction, noise reduction, data compression, recommendation systems).

This module provides a foundational understanding of two powerful unsupervised learning techniques for handling high-dimensional data. Mastering these will significantly enhance your ability to preprocess data for various machine learning tasks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
