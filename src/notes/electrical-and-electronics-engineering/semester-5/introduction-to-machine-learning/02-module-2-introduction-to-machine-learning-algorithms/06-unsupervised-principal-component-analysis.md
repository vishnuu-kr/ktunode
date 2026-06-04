---
title: "Unsupervised - Principal Component Analysis"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 2: Introduction to machine learning algorithms "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36430"
status: "completed"
scrapedAt: "2026-05-23T16:22:23.170Z"
---
# Introduction to Machine Learning - Module 2: Introduction to Machine Learning Algorithms

## Topic: Unsupervised - Principal Component Analysis (PCA)

**Course Outcomes Addressed:**

*   **CO2:** Apply different supervised and unsupervised machine learning algorithms (such as regression, classification, clustering, and dimensionality reduction) and their appropriate applications in solving real-world problems. (Knowledge Level: K3)

**Learning Outcomes Covered:**

*   Understand the fundamental principles of Principal Component Analysis (PCA).
*   Identify the purpose and applications of PCA in dimensionality reduction and data visualization.
*   Explain the mathematical concepts behind PCA, including covariance matrix, eigenvalues, and eigenvectors.
*   Implement PCA using Python libraries.
*   Evaluate the effectiveness of PCA for a given dataset.

---

### 1. What is Principal Component Analysis (PCA)?

Principal Component Analysis (PCA) is a widely used **unsupervised learning technique** for **dimensionality reduction**. It aims to transform a dataset with many variables into a smaller set of variables, called **principal components**, while retaining as much of the original data's variance as possible.

**Key Concepts:**

*   **Dimensionality Reduction:** The process of reducing the number of features (variables) in a dataset while preserving essential information. This is crucial for:
    *   **Improving Model Performance:** High-dimensional data can lead to the "curse of dimensionality," where models struggle to generalize and require more data.
    *   **Reducing Computational Cost:** Fewer features mean faster training and inference.
    *   **Overcoming Multicollinearity:** PCA can decorrelate features, which is beneficial for models sensitive to correlated inputs.
    *   **Data Visualization:** Reducing data to 2 or 3 dimensions allows for easier visual exploration.
*   **Variance:** A measure of how spread out the data is. PCA seeks to capture the directions (principal components) where the data varies the most.
*   **Unsupervised Learning:** PCA is an unsupervised technique because it does not use any target labels. It analyzes the intrinsic structure of the data.

**Analogy:** Imagine you have a complex 3D object (your data with many features). PCA is like finding the best way to project this object onto a 2D plane (fewer features) such that the resulting projection still shows the object's shape and extent as accurately as possible.

---

### 2. Why Use PCA?

*   **Reducing the number of features:** This is the primary goal.
*   **Decorrelating features:** PCA creates new features that are orthogonal (uncorrelated) to each other.
*   **Data compression:** Reducing the storage space required for the data.
*   **Noise reduction:** By discarding components with low variance, PCA can sometimes remove noise from the data.
*   **Feature extraction:** Creating new, more informative features from the original ones.

---

### 3. The Mathematical Foundation of PCA

PCA relies on finding the directions of maximum variance in the data. This is achieved through **eigen-decomposition** of the **covariance matrix**.

**3.1. Standardizing the Data**

Before applying PCA, it's crucial to **standardize** the data. This means transforming each feature to have a mean of 0 and a standard deviation of 1. Standardization ensures that features with larger scales don't dominate the variance calculation.

*   **Formula:**
    $z_{ij} = \frac{x_{ij} - \mu_j}{\sigma_j}$
    where:
    *   $x_{ij}$ is the value of the $j$-th feature for the $i$-th sample.
    *   $\mu_j$ is the mean of the $j$-th feature.
    *   $\sigma_j$ is the standard deviation of the $j$-th feature.
    *   $z_{ij}$ is the standardized value.

**3.2. Covariance Matrix**

The covariance matrix measures the pairwise covariance between all features. It indicates how much two features vary together.

*   Let your standardized data matrix be $Z$ (shape $N \times D$, where $N$ is the number of samples and $D$ is the number of features).
*   The **covariance matrix $S$** (shape $D \times D$) is calculated as:
    $S = \frac{1}{N-1} Z^T Z$
    *   $Z^T$ is the transpose of $Z$.
    *   The diagonal elements of $S$ represent the variances of individual features.
    *   The off-diagonal elements represent the covariances between pairs of features.

*(Refer to Mathematics for Machine Learning, Chapter 10: Dimensionality Reduction, for a detailed discussion on covariance and its properties.)*

**3.3. Eigenvalues and Eigenvectors**

Eigenvalues and eigenvectors are fundamental to PCA.

*   **Eigenvectors:** These are direction vectors that, when a linear transformation (represented by the covariance matrix) is applied to them, do not change their direction, only their magnitude. In PCA, eigenvectors represent the **directions of maximum variance** in the data.
*   **Eigenvalues:** These are scalars that indicate the magnitude of the stretch or compression along the corresponding eigenvector. In PCA, eigenvalues represent the **amount of variance** captured by the corresponding principal component (eigenvector).

We solve the characteristic equation:
$S \mathbf{v} = \lambda \mathbf{v}$
where:
*   $S$ is the covariance matrix.
*   $\mathbf{v}$ is an eigenvector.
*   $\lambda$ is the corresponding eigenvalue.

**3.4. Principal Components**

1.  **Calculate Eigenvectors and Eigenvalues:** Compute the eigenvectors and corresponding eigenvalues of the covariance matrix $S$.
2.  **Sort Eigenvectors:** Sort the eigenvectors in descending order of their eigenvalues. The eigenvector with the largest eigenvalue is the first principal component (PC1), representing the direction of highest variance. The eigenvector with the second-largest eigenvalue is the second principal component (PC2), representing the direction of the second-highest variance, and so on.
3.  **Select Principal Components:** Decide how many principal components to keep. This is often done by:
    *   **Choosing a threshold for cumulative variance:** Keep enough components to explain a certain percentage (e.g., 95%) of the total variance.
    *   **Choosing a fixed number of components:** For example, reduce to 2 or 3 components for visualization.
4.  **Create the Projection Matrix (W):** Form a matrix $W$ where the columns are the selected eigenvectors (sorted by eigenvalue). If you select $k$ principal components, $W$ will be of shape $D \times k$.
5.  **Project the Data:** Transform the original standardized data $Z$ into the new lower-dimensional space by multiplying it with $W$:
    $Z_{pca} = Z W$
    The resulting matrix $Z_{pca}$ will have dimensions $N \times k$, representing the data in the reduced $k$-dimensional space.

*(Refer to Mathematics for Machine Learning, Chapter 10.2: Eigenvalue Decomposition, and Pattern Recognition and Machine Learning, Chapter 9: Dimensionality Reduction, for in-depth mathematical derivations.)*

---

### 4. How PCA Works: A Step-by-Step Summary

1.  **Standardize the data:** Mean-center and scale each feature.
2.  **Compute the covariance matrix** of the standardized data.
3.  **Compute the eigenvectors and eigenvalues** of the covariance matrix.
4.  **Sort the eigenvectors** by their corresponding eigenvalues in descending order.
5.  **Choose the number of principal components ($k$)** to keep.
6.  **Create a matrix of the top $k$ eigenvectors.**
7.  **Project the original standardized data** onto the chosen eigenvectors to obtain the new, lower-dimensional dataset.

---

### 5. PCA in Python (using scikit-learn)

Scikit-learn provides an efficient implementation of PCA.

```python
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt
import seaborn as sns

# Load sample data (e.g., using scikit-learn's iris dataset)
from sklearn.datasets import load_iris
iris = load_iris()
X = iris.data
y = iris.target
feature_names = iris.feature_names

# 1. Standardize the data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 2. Apply PCA
# Let's reduce to 2 components for visualization
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

# X_pca now contains the data reduced to 2 dimensions

# 3. Analyze the results
# explained_variance_ratio_ shows the proportion of variance explained by each component
print("Explained variance ratio:", pca.explained_variance_ratio_)
print("Cumulative explained variance:", np.sum(pca.explained_variance_ratio_))

# The components_ attribute holds the principal components (eigenvectors)
# pca.components_ is a matrix where each row is a principal component
# The values in each row indicate the contribution of each original feature to that component
print("Principal Components (Eigenvectors):\n", pca.components_)

# Visualize the PCA-transformed data
plt.figure(figsize=(10, 7))
colors = ['navy', 'turquoise', 'darkorange']
lw = 2

for color, i, target_name in zip(colors, [0, 1, 2], iris.target_names):
    plt.scatter(X_pca[y == i, 0], X_pca[y == i, 1], color=color, alpha=.8, lw=lw,
                label=target_name)
plt.legend(loc='best', shadow=False, scatterpoints=1)
plt.title('PCA of IRIS dataset')
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
plt.grid()
plt.show()

# To see the effect of keeping different numbers of components:
# Calculate total variance
total_variance = np.sum(np.var(X_scaled, axis=0))

# Calculate variance explained by each component
explained_variance = pca.explained_variance_
print("Variance explained by PC1:", explained_variance[0])
print("Variance explained by PC2:", explained_variance[1])

# To determine the optimal number of components, you can plot the cumulative explained variance
pca_full = PCA() # Fit PCA with all possible components
pca_full.fit(X_scaled)

plt.figure(figsize=(8, 5))
plt.plot(np.cumsum(pca_full.explained_variance_ratio_ * 100), marker='o', linestyle='--')
plt.title('Cumulative Explained Variance by Number of Components')
plt.xlabel('Number of Components')
plt.ylabel('Cumulative Explained Variance (%)')
plt.xticks(np.arange(0, X.shape[1], 1))
plt.grid(True)
plt.show()
```

*(Refer to Python Data Science Handbook, Chapter 8: Machine Learning, for practical examples of using scikit-learn for PCA. Also, Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, Chapter 8: Dimensionality Reduction, provides excellent coverage.)*

---

### 6. Choosing the Number of Components ($k$)

This is a critical step. Here are common strategies:

*   **Explained Variance Threshold:**
    *   Calculate the cumulative explained variance for each number of components.
    *   Choose $k$ such that the cumulative explained variance is above a certain threshold (e.g., 95%, 99%).
    *   The plot of cumulative explained variance is often called a "scree plot."

*   **Elbow Method (Visual Inspection):**
    *   Plot the explained variance of each component.
    *   Look for an "elbow" in the plot, where the rate of decrease in explained variance sharply changes. The component at this elbow is sometimes considered a good choice.

*   **Domain Knowledge:** The specific application might dictate the desired level of dimensionality reduction.

---

### 7. When to Use PCA?

*   **High-Dimensional Datasets:** When you have too many features for your model.
*   **Multicollinearity:** When features are highly correlated.
*   **Data Visualization:** To reduce data to 2 or 3 dimensions for plotting.
*   **Preprocessing for other ML algorithms:** PCA can be used as a feature extraction step before training models like SVM, Logistic Regression, or Neural Networks.
*   **Noise Reduction:** If you suspect some features are mostly noise, PCA can help filter them out.

---

### 8. Limitations of PCA

*   **Information Loss:** PCA is a lossy compression technique. Some information (variance) is always lost when reducing dimensions.
*   **Sensitivity to Scaling:** PCA is sensitive to the scale of the original features. Standardization is essential.
*   **Linearity Assumption:** PCA finds linear combinations of features. It may not be effective for datasets with complex, non-linear relationships.
*   **Interpretability of Principal Components:** The new principal components are linear combinations of the original features, which can sometimes make them difficult to interpret in the context of the original problem.
*   **Information in Small Variances:** PCA prioritizes directions of high variance. If important information is contained in directions with low variance, it might be discarded.

*(Refer to The Elements of Statistical Learning, Chapter 18: Regularization and Variable Selection, for discussions on dimensionality reduction and its trade-offs.)*

---

### 9. PCA vs. Other Dimensionality Reduction Techniques

*   **PCA vs. Feature Selection:**
    *   **Feature Selection:** Selects a subset of the *original* features. Keeps original interpretability but might miss synergistic information.
    *   **PCA (Feature Extraction):** Creates *new* features (principal components) that are linear combinations of original features. Maximizes variance but sacrifices interpretability of original features.

*   **PCA vs. Non-linear Dimensionality Reduction (e.g., t-SNE, UMAP):**
    *   **PCA:** Linear, focuses on preserving global variance.
    *   **t-SNE/UMAP:** Non-linear, focus on preserving local structure and often better for visualization of clusters or manifolds, but can be computationally more expensive and less suitable for subsequent modeling.

---

### 10. Practice Questions and Answers

**Question 1:** What is the primary goal of Principal Component Analysis (PCA)?
**Answer:** The primary goal of PCA is **dimensionality reduction**, which involves transforming a dataset with many variables into a smaller set of variables (principal components) while retaining as much of the original data's variance as possible.

**Question 2:** Why is it important to standardize data before applying PCA?
**Answer:** Standardization (mean-centering and scaling to unit variance) is crucial because PCA is sensitive to the scale of the features. Features with larger scales can disproportionately influence the calculation of the covariance matrix and thus the principal components. Standardization ensures that all features contribute equally to the variance analysis.

**Question 3:** If a dataset has 100 features and you apply PCA to reduce it to 5 principal components, what is the dimensionality of the transformed dataset?
**Answer:** The dimensionality of the transformed dataset will be **5**.

**Question 4:** What mathematical concepts are at the core of PCA?
**Answer:** The core mathematical concepts are the **covariance matrix**, **eigenvalues**, and **eigenvectors**. PCA performs eigen-decomposition on the covariance matrix to find the directions (eigenvectors) of maximum variance and the amount of variance (eigenvalues) along those directions.

**Question 5 (Conceptual):** You are working on an image recognition task with thousands of pixel values per image. PCA is proposed as a preprocessing step. What are the potential benefits of using PCA here? What is a potential drawback?

**Answer:**
*   **Potential Benefits:**
    *   **Dimensionality Reduction:** Significantly reduces the number of features (pixel values), making subsequent model training faster and less prone to the curse of dimensionality.
    *   **Feature Extraction:** Can extract the most important patterns of variation in the images, potentially leading to better performance for the recognition model.
    *   **Noise Reduction:** May help filter out noise in pixel values.
*   **Potential Drawback:**
    *   **Loss of Information:** While PCA aims to retain variance, it's possible that some subtle but important details in the images (e.g., specific textures or edges) are located in directions of low variance and might be discarded, potentially hindering recognition accuracy.
    *   **Interpretability:** The principal components are abstract linear combinations of pixels, making it difficult to visually understand what information each component represents.

---

### 11. Important Points to Remember

*   PCA is an **unsupervised dimensionality reduction** technique.
*   It aims to find directions of **maximum variance**.
*   **Standardization** of data is a mandatory preprocessing step.
*   PCA relies on **eigen-decomposition** of the **covariance matrix**.
*   Eigenvectors represent the **principal components (directions)**, and eigenvalues represent the **amount of variance** explained.
*   The choice of the number of principal components is crucial and can be guided by **cumulative explained variance** or visual inspection (scree plot/elbow method).
*   PCA is a **linear transformation** and may not capture non-linear relationships.
*   Principal components are **uncorrelated**.
*   PCA is sensitive to **outliers**.

---
