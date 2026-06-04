---
title: "Dimensionality reduction  - Principal Component Analysis"
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 4: Unsupervised Learning"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf5c"
status: "completed"
scrapedAt: "2026-05-20T16:55:10.474Z"
---
# Machine Learning for Engineers - Module 4: Unsupervised Learning

## Topic: Dimensionality Reduction - Principal Component Analysis (PCA)

---

### Learning Outcomes:

*   **Understand the need for dimensionality reduction** in machine learning.
*   **Explain the concept of Principal Component Analysis (PCA)**.
*   **Describe the mathematical formulation of PCA**, including eigenvectors and eigenvalues.
*   **Explain how to select the number of principal components**.
*   **Apply PCA for visualization and noise reduction**.
*   **Discuss the advantages and disadvantages of PCA**.

---

### 1. The Need for Dimensionality Reduction

*   **High-dimensional data** refers to datasets with a large number of features or variables.
*   **Challenges of High-Dimensional Data:**
    *   **Curse of Dimensionality:** As the number of dimensions increases, the data becomes sparse, and the density of data points decreases. This makes it harder for algorithms to find patterns and can lead to overfitting.
    *   **Computational Cost:** More features mean more computation time and memory requirements for training and inference.
    *   **Overfitting:** With many features, models can learn noise in the data, leading to poor generalization performance on unseen data.
    *   **Visualization:** Humans can only visualize data in 2 or 3 dimensions. High-dimensional data is impossible to visualize directly.
    *   **Redundancy and Correlation:** Many features in a high-dimensional dataset might be correlated or contain redundant information.

*   **Dimensionality Reduction:** The process of reducing the number of features (dimensions) in a dataset while retaining as much of the important information as possible.

---

### 2. Concept of Principal Component Analysis (PCA)

*   **Goal of PCA:** To transform a dataset with many correlated variables into a smaller set of uncorrelated variables called **Principal Components (PCs)**, while maximizing the variance captured by these new components.
*   **What are Principal Components?**
    *   PCs are linear combinations of the original features.
    *   They are orthogonal (uncorrelated) to each other.
    *   The first PC captures the most variance in the data.
    *   The second PC captures the most remaining variance, orthogonal to the first PC, and so on.
*   **Intuition:** PCA finds the directions (axes) in the data space that capture the most spread (variance). By projecting the data onto these directions, we can reduce the number of dimensions while retaining the most significant patterns.

---

### 3. Mathematical Formulation of PCA

*   **Data Representation:** Let our dataset be represented by a matrix $X$, where each row is a data point and each column is a feature. Assume $X$ has $n$ samples and $d$ features.
*   **Standardization:** Before applying PCA, it's crucial to standardize the data. This means centering the data (subtracting the mean from each feature) and scaling it (dividing by the standard deviation of each feature). This ensures that features with larger scales don't dominate the principal components.
    *   Let $X'$ be the standardized data matrix.
    *   Mean of each feature: $\mu = \frac{1}{n} \sum_{i=1}^{n} x_i$
    *   Standard deviation of each feature: $\sigma = \sqrt{\frac{1}{n-1} \sum_{i=1}^{n} (x_i - \mu)^2}$
    *   Standardized feature: $x'_i = \frac{x_i - \mu}{\sigma}$

*   **Covariance Matrix:** The covariance matrix $C$ describes the relationships between the features. For the standardized data $X'$, the covariance matrix is calculated as:
    *   $C = \frac{1}{n-1} (X')^T X'$
    *   The diagonal elements of $C$ are the variances of each feature.
    *   The off-diagonal elements are the covariances between pairs of features.

*   **Eigen-decomposition of the Covariance Matrix:** PCA relies on finding the eigenvectors and eigenvalues of the covariance matrix.
    *   **Eigenvectors:** These are directions in the data space. In PCA, the eigenvectors of the covariance matrix represent the **Principal Components**. They indicate the directions of maximum variance.
    *   **Eigenvalues:** These represent the magnitude of variance along the corresponding eigenvector (Principal Component). A larger eigenvalue signifies that the corresponding eigenvector captures more variance in the data.

*   **Finding Eigenvectors and Eigenvalues:** We solve the equation:
    *   $C \mathbf{v} = \lambda \mathbf{v}$
    *   Where:
        *   $C$ is the covariance matrix.
        *   $\mathbf{v}$ is an eigenvector.
        *   $\lambda$ is the corresponding eigenvalue.

*   **Sorting Eigenvectors:**
    *   Calculate all eigenvectors and their corresponding eigenvalues for the covariance matrix.
    *   Sort the eigenvectors in descending order of their eigenvalues. The eigenvector with the largest eigenvalue is the first Principal Component (PC1), the one with the second largest is PC2, and so on.

*   **Projection onto Principal Components:**
    *   Once we have the sorted eigenvectors (principal components), we select the top $k$ eigenvectors (where $k < d$).
    *   These $k$ eigenvectors form a new $d \times k$ matrix $W$.
    *   To transform the original data $X'$ into the lower-dimensional space, we multiply $X'$ by $W$:
        *   $X_{reduced} = X' W$
    *   The resulting matrix $X_{reduced}$ will have dimensions $n \times k$, representing the data in $k$ principal components.

*   **Geometric Interpretation:** PCA finds a new set of orthogonal axes (the principal components) that are aligned with the directions of maximum variance in the data. The data is then projected onto these new axes.

---

### 4. Selecting the Number of Principal Components ($k$)

Choosing the optimal number of principal components is crucial for effective dimensionality reduction. Several methods can be used:

*   **Explained Variance Ratio:**
    *   Calculate the proportion of variance explained by each principal component: $\frac{\lambda_i}{\sum_{j=1}^{d} \lambda_j}$, where $\lambda_i$ is the eigenvalue of the $i$-th principal component.
    *   **Scree Plot:** Plot the explained variance for each principal component. Look for an "elbow" in the plot, where the rate of decrease in explained variance slows down significantly. The components before the elbow are often retained.
    *   **Cumulative Explained Variance:** Sum the explained variance ratios. Choose $k$ such that a desired percentage of the total variance (e.g., 95%, 99%) is explained.
        *   *Example:* If PC1 explains 70% of the variance and PC2 explains 20%, then the first two components explain 90% of the total variance.

*   **Cross-Validation:**
    *   Train a downstream machine learning model using different numbers of principal components and evaluate its performance on a validation set. Select $k$ that yields the best model performance.

*   **Domain Knowledge:**
    *   If you have prior knowledge about the underlying structure of the data or the number of latent variables, you can use that to guide the selection of $k$.

---

### 5. Applications of PCA

*   **Visualization:**
    *   By reducing data to 2 or 3 dimensions (using PC1 and PC2, or PC1, PC2, and PC3), we can plot the data and visually inspect for clusters, outliers, or patterns.
    *   *Example:* Plotting gene expression data (thousands of genes) in 2D using PCA can reveal distinct cell types or experimental conditions.

*   **Noise Reduction (Denoising):**
    *   High-dimensional data often contains noise, which tends to be captured by components with lower variance (smaller eigenvalues).
    *   By discarding the components with small eigenvalues, we can effectively remove some of the noise from the data.
    *   *Example:* In image processing, PCA can be used to reconstruct images by projecting them onto a subspace defined by the principal components that capture the most image content, effectively filtering out random noise.

*   **Feature Extraction:**
    *   Create a new set of uncorrelated features (principal components) that are more informative than the original features. These can be used as input for other machine learning models.

*   **Data Compression:**
    *   Reduce the storage space required for the dataset by keeping only the most important principal components.

---

### 6. Advantages and Disadvantages of PCA

*   **Advantages:**
    *   **Reduces dimensionality:** Simplifies models and reduces computational cost.
    *   **Removes multicollinearity:** The principal components are uncorrelated, which can be beneficial for models sensitive to correlated features (e.g., linear regression).
    *   **Noise reduction:** Can effectively filter out noise by discarding components with low variance.
    *   **Improves model performance:** Can sometimes lead to better generalization by removing noise and redundant information.
    *   **Easier visualization:** Allows for plotting of high-dimensional data in 2D or 3D.

*   **Disadvantages:**
    *   **Loss of interpretability:** The principal components are linear combinations of original features, making them harder to interpret in terms of the original physical meaning of the features.
    *   **Information loss:** By discarding components, some information is inevitably lost. The choice of $k$ determines the trade-off between dimensionality reduction and information retention.
    *   **Sensitivity to scaling:** PCA is sensitive to the scale of the features. Standardization is essential.
    *   **Assumes linearity:** PCA finds linear combinations of features. It may not be effective for data with non-linear structures.
    *   **Unsupervised:** PCA is an unsupervised technique, meaning it doesn't consider the target variable. If the target variable's relationship with features is important for dimensionality reduction, supervised methods might be more appropriate.

---

### Practice Questions

**Question 1:**
What is the primary goal of dimensionality reduction?

**Question 2:**
Explain what Principal Components are in the context of PCA.

**Question 3:**
Why is it important to standardize data before applying PCA?

**Question 4:**
If a PCA decomposition results in eigenvalues $\lambda_1 = 10.5$, $\lambda_2 = 3.2$, $\lambda_3 = 0.8$, and $\lambda_4 = 0.1$, and the total variance is 14.6, what is the explained variance ratio for the second principal component (PC2)?

**Question 5:**
List two common applications of PCA.

**Question 6:**
What is a potential disadvantage of PCA related to feature interpretability?

---

### Answers to Practice Questions

**Answer 1:**
The primary goal of dimensionality reduction is to reduce the number of features (dimensions) in a dataset while retaining as much of the important information or variance as possible. This helps to overcome challenges like the curse of dimensionality, reduce computational costs, and prevent overfitting.

**Answer 2:**
Principal Components (PCs) are orthogonal (uncorrelated) linear combinations of the original features. They are ordered such that the first PC captures the maximum variance in the data, the second PC captures the maximum remaining variance (orthogonal to the first), and so on. They represent the directions of greatest spread in the data.

**Answer 3:**
It is important to standardize data before applying PCA because PCA is sensitive to the scale of the features. Features with larger scales might contribute more to the principal components simply due to their magnitude, even if they don't carry more inherent variance. Standardization (centering and scaling) ensures that all features contribute to PCA based on their actual variance and relationships, not their arbitrary scales.

**Answer 4:**
The explained variance ratio for PC2 is calculated as:
$\frac{\lambda_2}{\text{Total Variance}} = \frac{3.2}{14.6} \approx 0.219$ or 21.9%.

**Answer 5:**
Two common applications of PCA are:
1.  **Visualization:** Reducing high-dimensional data to 2 or 3 dimensions for plotting and visual analysis.
2.  **Noise Reduction:** Filtering out noise from the data by discarding principal components with low variance.
(Other valid answers include Feature Extraction and Data Compression).

**Answer 6:**
A potential disadvantage of PCA related to feature interpretability is that the principal components are linear combinations of the original features. This means that the meaning of each principal component is often unclear and difficult to relate back to the original physical or conceptual meaning of the individual features.

---

### Important Points to Remember:

*   **Standardize your data before PCA.**
*   **PCA finds directions of maximum variance.**
*   **Eigenvalues indicate the amount of variance captured by each eigenvector (Principal Component).**
*   **Principal Components are orthogonal (uncorrelated).**
*   **The number of components to keep is a crucial decision, often guided by explained variance or scree plots.**
*   **PCA can lead to a loss of interpretability of features.**
*   **PCA is effective for linear relationships, but may struggle with non-linear structures.**
